import { useState } from "react";
import {
    View,
    Text,
    Pressable,
    TextInput,
    Image,
    ActivityIndicator,
    GestureResponderEvent,
} from "react-native";
import { ThumbsUp, MessageCircle } from "lucide-react-native";
import ReplyComponent from "./Reply";
import { ForumComment, ForumReply } from "@/types/content/forums";
import { VideoComment, VideoReply } from "@/types/content/videos";
import {
    meForumCommentService,
    meVideoCommentService,
    meForumReplyService,
    meVideoReplyService,
    feedVideoReplyService,
    feedForumReplyService,
} from "@/services/index";
import { useAuth } from "@/hooks/useAuth";
import { getTimeAgo } from "@core-utils/formater";
import { tw } from "@/utils/styles";
import { useRouter, Href } from "expo-router";

interface CommentComponentProps {
    comment: ForumComment | VideoComment;
    commentType: "forum" | "video";
    isReadOnly?: boolean;
}

export default function CommentComponent({
    comment,
    commentType,
    isReadOnly = false,
}: CommentComponentProps) {
    const router = useRouter();
    const { user, openLoginModal } = useAuth();

    const [commentUpvoted, setCommentUpvoted] = useState(comment.isLiked || false);
    const [likeCount, setLikeCount] = useState(
        typeof (comment as any).likeCount === "number" ? (comment as any).likeCount : 0
    );
    const [isReplying, setIsReplying] = useState(false);
    const [replyText, setReplyText] = useState("");
    const [isLiking, setIsLiking] = useState(false);
    const [replies, setReplies] = useState<Array<ForumReply | VideoReply>>([]);
    const [isLoadingReplies, setIsLoadingReplies] = useState(false);
    const [isShowingReplies, setIsShowingReplies] = useState(false);
    const [repliesError, setRepliesError] = useState<string | null>(null);
    const [avatarError, setAvatarError] = useState(false);

    const navigateToUser = (event: GestureResponderEvent) => {
        event.stopPropagation();
        router.push(`/users/${comment.userId}` as Href);
    };

    const fetchReplies = async () => {
        if (isShowingReplies) {
            setIsShowingReplies(false);
            return;
        }

        if (replies.length > 0) {
            setIsShowingReplies(true);
            return;
        }

        try {
            setIsLoadingReplies(true);
            setRepliesError(null);

            let fetchedReplies: ForumReply[] | VideoReply[] = [];
            if (commentType === "video") {
                fetchedReplies = await feedVideoReplyService.getVideoReplies(comment.id);
            } else {
                fetchedReplies = await feedForumReplyService.getForumReplies(comment.id);
            }

            setReplies(fetchedReplies);
            setIsShowingReplies(true);
        } catch (error) {
            console.error("Error fetching replies:", error);
            setRepliesError("មានបញ្ហាក្នុងការទាញយកការឆ្លើយតប។ សូមព្យាយាមម្តងទៀត។");
        } finally {
            setIsLoadingReplies(false);
        }
    };

    const handleCommentLike = async (event: GestureResponderEvent) => {
        event.stopPropagation();

        if (!user) {
            openLoginModal();
            return;
        }
        if (isLiking) return;

        setIsLiking(true);
        const wasLiked = commentUpvoted;

        setCommentUpvoted(!wasLiked);
        setLikeCount((prev) => (wasLiked ? prev - 1 : prev + 1));

        try {
            if (commentType === "forum") {
                await meForumCommentService.toggleForumCommentLike(comment.id, wasLiked);
            } else {
                await meVideoCommentService.toggleVideoCommentLike(comment.id, wasLiked);
            }
        } catch (error) {
            console.error("Error toggling comment like:", error);
            setCommentUpvoted(wasLiked);
            setLikeCount((prev) => (wasLiked ? prev + 1 : prev - 1));
        } finally {
            setIsLiking(false);
        }
    };

    const handleSubmitReply = async (replyToId: number, description: string) => {
        try {
            if (!user) {
                openLoginModal();
                return;
            }

            if (commentType === "forum") {
                await meForumReplyService.createForumReply(replyToId, description);
            } else {
                await meVideoReplyService.createVideoReply(replyToId, description);
            }

            setReplyText("");
            setIsReplying(false);

            // Reload replies to include new one
            setReplies([]);
            setIsShowingReplies(false);
            await fetchReplies();
        } catch (error) {
            console.error("Error submitting reply:", error);
        }
    };

    const handleSubmitDirectReply = () => {
        if (!user) {
            openLoginModal();
            return;
        }

        const trimmed = replyText.trim();
        if (!trimmed) return;

        handleSubmitReply(comment.id, trimmed);
    };

    return (
        <View style={tw("mb-4")}>
            <View style={tw("flex-row gap-3")}>
                <Pressable
                    onPress={navigateToUser}
                    style={tw("flex-row items-start gap-3")}
                >
                    {comment.profileImage && !avatarError ? (
                        <Image
                            source={{ uri: comment.profileImage }}
                            style={tw("w-10 h-10 rounded-full border-2 border-indigo-500")}
                            resizeMode="cover"
                            onError={() => setAvatarError(true)}
                        />
                    ) : (
                        <View
                            style={tw(
                                "w-10 h-10 rounded-full bg-indigo-600 items-center justify-center"
                            )}
                        >
                            <Text style={tw("text-white text-sm font-kh-semibold")}>
                                {comment.username.charAt(0).toUpperCase()}
                            </Text>
                        </View>
                    )}
                </Pressable>

                <View style={tw("flex-1")}>
                    <View style={tw("flex-row items-center gap-2 mb-1")}>
                        <Pressable onPress={navigateToUser}>
                            <Text style={tw("text-sm font-kh-semibold text-gray-900")}>
                                {comment.username}
                            </Text>
                        </Pressable>
                        <Text style={tw("text-xs text-gray-500")}>
                            {getTimeAgo(comment.createdAt)}
                        </Text>
                    </View>

                    <Text style={tw("text-sm text-gray-700 leading-relaxed mb-2")}>
                        {comment.description}
                    </Text>

                    <View style={tw("flex-row items-center gap-4")}>
                        {!isReadOnly ? (
                            <>
                                <Pressable
                                    onPress={handleCommentLike}
                                    disabled={isLiking}
                                    style={tw(
                                        `flex-row items-center gap-1 px-2 py-1.5 rounded-full ${
                                            commentUpvoted ? "bg-indigo-50" : "bg-gray-100"
                                        }`
                                    )}
                                >
                                    <ThumbsUp
                                        size={14}
                                        color={commentUpvoted ? "#4F46E5" : "#6B7280"}
                                    />
                                    <Text
                                        style={tw(
                                            `text-xs font-kh-medium ${
                                                commentUpvoted ? "text-indigo-600" : "text-gray-600"
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

                        <Pressable
                            onPress={fetchReplies}
                            disabled={isLoadingReplies}
                            style={tw("flex-row items-center gap-1")}
                        >
                            <MessageCircle size={14} color="#4F46E5" />
                            <Text style={tw("text-xs text-gray-500")}>
                                {isLoadingReplies
                                    ? "កំពុងដំណើរការ..."
                                    : isShowingReplies
                                    ? "លាក់ការឆ្លើយតប"
                                    : "បង្ហាញការឆ្លើយតប"}
                            </Text>
                        </Pressable>
                    </View>

                    {!isReadOnly && isReplying && (
                        <View style={tw("mt-3 gap-2")}>
                            <TextInput
                                value={replyText}
                                onChangeText={setReplyText}
                                placeholder="សរសេរការឆ្លើយតប..."
                                placeholderTextColor="#9CA3AF"
                                style={tw(
                                    "px-4 py-3 text-sm border border-gray-200 rounded-full bg-white"
                                )}
                                onSubmitEditing={handleSubmitDirectReply}
                                returnKeyType="send"
                            />
                            <View style={tw("flex-row gap-2")}>
                                <Pressable
                                    onPress={() => {
                                        setIsReplying(false);
                                        setReplyText("");
                                    }}
                                    style={tw("px-4 py-2 rounded-full bg-gray-100")}
                                >
                                    <Text style={tw("text-sm text-gray-600")}>បោះបង់</Text>
                                </Pressable>
                                <Pressable
                                    onPress={handleSubmitDirectReply}
                                    disabled={!replyText.trim()}
                                    style={tw(
                                        `px-4 py-2 rounded-full ${
                                            replyText.trim() ? "bg-indigo-600" : "bg-gray-300"
                                        }`
                                    )}
                                >
                                    <Text style={tw("text-sm text-white")}>បោះផ្សាយ</Text>
                                </Pressable>
                            </View>
                        </View>
                    )}
                </View>
            </View>

            {isShowingReplies && (
                <View style={tw("mt-3 gap-2")}>
                    {repliesError ? (
                        <View style={tw("px-3 py-2 bg-red-50 rounded-full")}>
                            <Text style={tw("text-xs text-red-600")}>{repliesError}</Text>
                        </View>
                    ) : isLoadingReplies ? (
                        <ActivityIndicator color="#4F46E5" size="small" />
                    ) : replies.length > 0 ? (
                        replies.map((reply, index) => (
                            <ReplyComponent
                                key={`${commentType}-reply-${reply.id || `temp-${index}`}`}
                                reply={reply as ForumReply | VideoReply}
                                commentId={comment.id}
                                onSubmitReply={handleSubmitReply}
                                replyType={commentType}
                                isReadOnly={isReadOnly}
                            />
                        ))
                    ) : (
                        <Text style={tw("text-xs text-gray-400 ml-8")}>មិនមានការឆ្លើយតប</Text>
                    )}
                </View>
            )}
        </View>
    );
}

