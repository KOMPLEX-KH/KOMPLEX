import { useState } from "react";
import {
    View,
    Pressable,
    TextInput,
    Image,
    GestureResponderEvent,
} from "react-native";
import { Text } from '@/components/common/Text'
import { Send, ThumbsUp } from "lucide-react-native";
import { ForumReply } from "@core-types/api-types/forums";
import { VideoReply } from "@core-types/api-types/videos";
import { getTimeAgo } from "@core-utils/formater";
import {
    meForumReplyService,
    meVideoReplyService,
} from "@/services/index";
import { useAuth } from "@/hooks/useAuth";
import { useRouter, Href } from "expo-router";
import { tw } from "@/utils/styles";

interface ReplyComponentProps {
    reply: ForumReply | VideoReply;
    commentId: number;
    onSubmitReply: (commentId: number, description: string) => void;
    replyType: "forum" | "video";
    isReadOnly?: boolean;
}

export default function ReplyComponent({
    reply,
    commentId,
    onSubmitReply,
    replyType,
    isReadOnly = false,
}: ReplyComponentProps) {
    const router = useRouter();
    const { user } = useAuth();

    const [replyUpvoted, setReplyUpvoted] = useState(reply.isLiked || false);
    const [likeCount, setLikeCount] = useState(
        typeof (reply as any).likeCount === "number" ? (reply as any).likeCount : 0
    );
    const [isReplying, setIsReplying] = useState(false);
    const [replyText, setReplyText] = useState("");
    const [isLiking, setIsLiking] = useState(false);
    const [avatarError, setAvatarError] = useState(false);

    const handleNavigateToUser = (event: GestureResponderEvent) => {
        event.stopPropagation();
        router.push(`/users/${reply.userId}` as Href);
    };

    const handleReplyLike = async (event: GestureResponderEvent) => {
        event.stopPropagation();

        if (!user) {
            router.replace("/auth");
            return;
        }
        if (isLiking) return;

        setIsLiking(true);
        const wasLiked = replyUpvoted;

        setReplyUpvoted(!wasLiked);
        setLikeCount((prev) => (wasLiked ? prev - 1 : prev + 1));

        try {
            if (replyType === "forum") {
                await meForumReplyService.toggleForumReplyLike(reply.id, wasLiked);
            } else {
                await meVideoReplyService.toggleVideoReplyLike(reply.id, wasLiked);
            }
        } catch (error) {
            console.error("Error toggling reply like:", error);
            setReplyUpvoted(wasLiked);
            setLikeCount((prev) => (wasLiked ? prev + 1 : prev - 1));
        } finally {
            setIsLiking(false);
        }
    };

    const handleSubmitReply = async () => {
        if (!user) {
            router.replace("/auth");
            return;
        }

        const trimmed = replyText.trim();
        if (!trimmed) return;

        try {
            const fullReply = `@${reply.username?.toString()} ${trimmed}`;
            if (replyType === "forum") {
                await meForumReplyService.createForumReply(commentId, fullReply);
            } else {
                await meVideoReplyService.createVideoReply(commentId, fullReply);
            }

            onSubmitReply(commentId, fullReply);
            setReplyText("");
            setIsReplying(false);
        } catch (error) {
            console.error("Error submitting reply:", error);
        }
    };

    return (
        <View style={tw("ml-8 mt-3")}>
            {/* Profile Image, Name, and Time at Top */}
            <View style={tw("flex-row items-center gap-3 mb-2")}>
                <Pressable onPress={handleNavigateToUser}>
                    {reply.profileImage && !avatarError ? (
                        <Image
                            source={{ uri: reply.profileImage }}
                            style={tw("w-8 h-8 rounded-full border-2 border-indigo-500")}
                            resizeMode="cover"
                            onError={() => setAvatarError(true)}
                        />
                    ) : (
                        <View
                            style={tw(
                                "w-8 h-8 rounded-full bg-gray-500 items-center justify-center"
                            )}
                        >
                            <Text style={tw("text-white text-xs font-kh-semibold")}>
                                {reply.username?.charAt(0).toUpperCase()}
                            </Text>
                        </View>
                    )}
                </Pressable>
                <View style={tw("flex-row items-center gap-2 flex-1")}>
                    <Pressable onPress={handleNavigateToUser}>
                        <Text style={tw("text-sm font-kh-semibold text-gray-900")}>
                            {reply.username?.toString()}
                        </Text>
                    </Pressable>
                    <Text style={tw("text-xs text-gray-500")}>
                        {getTimeAgo(reply.createdAt)}
                    </Text>
                </View>
            </View>

            {/* Reply Content Below */}
            <View style={tw("")}>
                <Text style={tw("text-sm text-gray-700 leading-relaxed mb-2")}>
                    {reply.description}
                </Text>

                <View style={tw("flex-row items-center gap-4 mt-2")}>
                    {!isReadOnly ? (
                        <>
                            <Pressable
                                onPress={handleReplyLike}
                                disabled={isLiking}
                                style={tw(
                                    `flex-row items-center gap-1 px-2 py-1 rounded-full ${replyUpvoted ? "" : ""
                                    }`
                                )}
                            >
                                <ThumbsUp
                                    size={14}
                                    color={replyUpvoted ? "#4F46E5" : "#6B7280"}
                                    fill={replyUpvoted ? "#4F46E5" : "none"}
                                />
                                <Text
                                    style={tw(
                                        `text-xs font-kh-medium ${replyUpvoted ? "text-indigo-600" : "text-gray-600"
                                        }`
                                    )}
                                >
                                    {likeCount}
                                </Text>
                            </Pressable>
                            <Pressable
                                onPress={() => {
                                    setIsReplying((prev) => !prev);
                                    setReplyText("");
                                }}
                            >
                                <Text style={tw("text-xs text-gray-500")}>ឆ្លើយតប</Text>
                            </Pressable>
                        </>
                    ) : (
                        <View style={tw("flex-row items-center gap-1")}>
                            <ThumbsUp size={14} color="#6B7280" />
                            <Text style={tw("text-xs text-gray-500")}>{likeCount}</Text>
                        </View>
                    )}
                </View>

                {!isReadOnly && isReplying && (
                    <View style={tw("mt-3 gap-2")}>
                        <View style={tw("relative flex-row items-center gap-2")}>
                            <Text
                                style={tw("absolute left-4 top-3 text-xs text-gray-500 text-center font-kh-bold z-10 bg-indigo-50 rounded-full p-1 ")}
                            >
                                @{reply.username?.toString()}{' '}
                            </Text>
                            <TextInput
                                value={replyText}
                                onChangeText={setReplyText}
                                placeholder="សរសេរការឆ្លើយតប..."
                                placeholderTextColor="#9CA3AF"
                                style={[
                                    tw("flex-1 py-3 pr-4 text-sm border border-gray-200 rounded-full bg-white font-kh-medium"),
                                    { paddingLeft: 12 + ((reply.username?.toString()?.length || 0) + 2) * 8 } // Approximate width: 4px base + (username length + "@ " ) * ~8px per char
                                ]}
                                onSubmitEditing={handleSubmitReply}
                                returnKeyType="send"
                            />
                            <Pressable
                                onPress={handleSubmitReply}
                                disabled={!replyText.trim()}
                                style={tw(
                                    `px-3 py-2 rounded-full ${replyText.trim() ? "bg-indigo-600" : "bg-gray-300"
                                    }`
                                )}
                            >
                                <Send size={16} color="#FFFFFF" />
                            </Pressable>
                        </View>
                    </View>
                )}
            </View>
        </View>
    );
}

