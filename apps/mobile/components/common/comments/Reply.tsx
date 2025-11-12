import { useState } from "react";
import {
    View,
    Text,
    Pressable,
    TextInput,
    Image,
    GestureResponderEvent,
} from "react-native";
import { Send, ThumbsUp } from "lucide-react-native";
import { ForumReply } from "@/types/content/forums";
import { VideoReply } from "@/types/content/videos";
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
    const { user, openLoginModal } = useAuth();

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
            openLoginModal();
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
            openLoginModal();
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
            <View style={tw("flex-row gap-3")}>
                <Pressable
                    onPress={handleNavigateToUser}
                    style={tw("items-center gap-3 flex-row")}
                >
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

            <View style={tw("flex-1")}>
                    <View style={tw("flex-row items-center gap-2 mb-1")}>
                        <Pressable onPress={handleNavigateToUser}>
                            <Text style={tw("text-sm font-kh-semibold text-gray-900")}>
                                {reply.username?.toString()}
                            </Text>
                        </Pressable>
                        <Text style={tw("text-xs text-gray-500")}>
                            {getTimeAgo(reply.createdAt)}
                        </Text>
                    </View>
                    <Text style={tw("text-sm text-gray-700 leading-relaxed mb-2")}>
                        {reply.description}
                    </Text>

                    <View style={tw("flex-row items-center gap-4")}>
                        {!isReadOnly ? (
                            <>
                                <Pressable
                                    onPress={handleReplyLike}
                                    disabled={isLiking}
                                    style={tw(
                                        `flex-row items-center gap-1 px-2 py-1.5 rounded-full ${
                                            replyUpvoted ? "bg-indigo-50" : "bg-gray-100"
                                        }`
                                    )}
                                >
                                    <ThumbsUp
                                        size={14}
                                        color={replyUpvoted ? "#4F46E5" : "#6B7280"}
                                    />
                                    <Text
                                        style={tw(
                                            `text-xs font-kh-medium ${
                                                replyUpvoted ? "text-indigo-600" : "text-gray-600"
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
                </View>
            </View>

            {!isReadOnly && isReplying && (
                <View style={tw("mt-3 gap-2")}>
                    <Text style={tw("text-xs text-gray-500")}>
                        @{reply.username?.toString()}
                    </Text>
                    <View style={tw("flex-row items-center gap-2")}>
                        <TextInput
                            value={replyText}
                            onChangeText={setReplyText}
                            placeholder="សរសេរការឆ្លើយតប..."
                            placeholderTextColor="#9CA3AF"
                            style={tw(
                                "flex-1 px-4 py-3 text-sm border border-gray-200 rounded-full bg-white"
                            )}
                            onSubmitEditing={handleSubmitReply}
                            returnKeyType="send"
                        />
                        <Pressable
                            onPress={handleSubmitReply}
                            disabled={!replyText.trim()}
                            style={tw(
                                `px-3 py-2 rounded-full ${
                                    replyText.trim() ? "bg-indigo-600" : "bg-gray-300"
                                }`
                            )}
                        >
                            <Send size={16} color="#FFFFFF" />
                        </Pressable>
                    </View>
                </View>
            )}
        </View>
    );
}

