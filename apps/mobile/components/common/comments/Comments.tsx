import { useState, useEffect } from "react";
import {
    View,
    Text,
    Pressable,
    TextInput,
    ActivityIndicator,
    ScrollView,
} from "react-native";
import { AlertCircle } from "lucide-react-native";
import CommentComponent from "./Comment";
import ContentError from "@/components/common/ContentError";
import {
    feedVideoCommentService,
    meForumCommentService,
    meVideoCommentService,
    feedForumCommentService,
} from "@/services/index";
import { ForumComment } from "@/types/content/forums";
import { VideoComment } from "@/types/content/videos";
import { useAuth } from "@/hooks/useAuth";
import { tw } from "@/utils/styles";
import { useRouter } from "expo-router";

interface CommentProps {
    type: "forum" | "video";
    parentId: number;
    focusInput?: boolean;
    isReadOnly?: boolean;
    onClose?: () => void;
}

const CommentSkeleton = () => (
    <View style={tw("flex-row gap-3 mb-4")}>
        <View style={tw("w-10 h-10 rounded-full bg-gray-200")} />
        <View style={tw("flex-1 gap-2")}>
            <View style={tw("h-4 w-32 bg-gray-200 rounded")} />
            <View style={tw("h-4 w-40 bg-gray-100 rounded")} />
            <View style={tw("h-4 w-full bg-gray-100 rounded")} />
        </View>
    </View>
);

export default function Comments({
    type,
    parentId,
    focusInput = false,
    isReadOnly = false,
    onClose,
}: CommentProps) {
    const { user } = useAuth();
    const router = useRouter();

    const [comments, setComments] = useState<(ForumComment | VideoComment)[]>([]);
    const [newComment, setNewComment] = useState("");
    const [isCommentActive, setIsCommentActive] = useState(focusInput);
    const [error, setError] = useState<string>("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [commentsError, setCommentsError] = useState<string | null>(null);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                setIsLoading(true);
                setCommentsError(null);

                let fetchedComments: ForumComment[] | VideoComment[];
                if (type === "video") {
                    fetchedComments = await feedVideoCommentService.getVideoComments(
                        parentId.toString()
                    );
                } else {
                    fetchedComments = await feedForumCommentService.getForumComments(
                        parentId.toString()
                    );
                }

                setComments(fetchedComments);
            } catch (err) {
                console.error("Error fetching comments:", err);
                setCommentsError("មានបញ្ហាក្នុងការទាញយកការឆ្លើយតប។ សូមព្យាយាមម្តងទៀត។");
            } finally {
                setIsLoading(false);
            }
        };

        fetchComments();
    }, [type, parentId]);

    useEffect(() => {
        setIsCommentActive(focusInput);
    }, [focusInput]);

    const handleSubmitComment = async () => {
        if (!user) {
            router.replace("/auth");
            return;
        }
        if (!newComment.trim()) {
            setError("សូមបំពេញមាតិកាការឆ្លើយតប");
            return;
        }

        setIsSubmitting(true);
        setError("");

        try {
            let newCommentData: ForumComment | VideoComment;

            if (type === "video") {
                newCommentData = await meVideoCommentService.createVideoComment(
                    parentId,
                    newComment
                );
            } else {
                newCommentData = await meForumCommentService.createForumComment(parentId, newComment);
            }

            const commentWithDefaults = {
                ...newCommentData,
                id: newCommentData.id || Date.now(),
                createdAt: newCommentData.createdAt || new Date().toISOString(),
                userId: newCommentData.userId || user?.id || 0,
                username: newCommentData.username || user?.username || "Unknown",
                profileImage: newCommentData.profileImage || "",
                isLiked: newCommentData.isLiked || false,
                media: newCommentData.media || [],
                description: newCommentData.description || newComment,
            };

            setComments((prev) => {
                const exists = prev.some((item) => item.id === commentWithDefaults.id);
                if (exists) {
                    return prev;
                }
                return [...prev, commentWithDefaults];
            });

            setNewComment("");
            setIsCommentActive(false);

            onClose?.();
        } catch (err) {
            console.error("Error submitting comment:", err);
            setError("មានបញ្ហាក្នុងការបោះផ្សាយការឆ្លើយតប។ សូមព្យាយាមម្តងទៀត។");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCancel = () => {
        setNewComment("");
        setIsCommentActive(false);
        setError("");
        onClose?.();
    };

    const handleInputClick = () => {
        setIsCommentActive(true);
        setError("");
    };

    const renderContent = () => {
        if (isLoading) {
            return (
                <View style={tw("gap-3")}>
                    <CommentSkeleton />
                    <CommentSkeleton />
                    <CommentSkeleton />
                </View>
            );
        }

        if (commentsError) {
            return <ContentError type="error" message={commentsError} />;
        }

        if (!comments || comments.length === 0) {
            return (
                <ContentError
                    type="no-results"
                    message="មិនមានការឆ្លើយតបទេ។ ជាអ្នកដំបូងដែលឆ្លើយតប!"
                />
            );
        }

        return (
            <View style={tw("gap-4")}>
                {comments.map((comment, index) => (
                    <CommentComponent
                        key={`${type}-${comment.id || `temp-${index}`}-${comment.createdAt || Date.now()}`}
                        comment={comment as ForumComment | VideoComment}
                        commentType={type}
                        isReadOnly={isReadOnly}
                    />
                ))}
            </View>
        );
    };

    return (
        <ScrollView
            style={tw("rounded-3xl bg-white border border-indigo-50 p-6")}
            contentContainerStyle={tw("pb-4 gap-6")}
            keyboardShouldPersistTaps="handled"
        >
            <Text style={tw("text-lg font-kh-bold text-gray-900")}>ការឆ្លើយតប</Text>

            {error ? (
                <View style={tw("flex-row items-center gap-2 px-4 py-3 bg-red-50 rounded-full")}>
                    <AlertCircle size={16} color="#DC2626" />
                    <Text style={tw("text-sm text-red-600")}>{error}</Text>
                </View>
            ) : null}

            {!isReadOnly && (
                <View>
                    {!isCommentActive ? (
                        <Pressable
                            onPress={handleInputClick}
                            style={tw(
                                "w-full px-4 py-3 border border-gray-300 rounded-full bg-white"
                            )}
                        >
                            <Text style={tw("text-sm text-gray-500")}>ចូលរួមការសន្ទនា...</Text>
                        </Pressable>
                    ) : (
                        <View style={tw("border border-gray-300 rounded-3xl overflow-hidden")}>
                            <TextInput
                                value={newComment}
                                onChangeText={setNewComment}
                                placeholder="សរសេរការឆ្លើយតបរបស់អ្នក..."
                                placeholderTextColor="#9CA3AF"
                                multiline
                                style={[tw("p-4 text-sm text-gray-800"), { minHeight: 96 }]}
                            />
                            <View style={tw("flex-row justify-end gap-3 px-4 pb-4")}>
                                <Pressable
                                    onPress={handleCancel}
                                    style={tw("px-4 py-2 rounded-full bg-gray-100")}
                                >
                                    <Text style={tw("text-sm text-gray-600")}>បោះបង់</Text>
                                </Pressable>
                                <Pressable
                                    onPress={handleSubmitComment}
                                    disabled={!newComment.trim() || isSubmitting}
                                    style={tw(
                                        `px-4 py-2 rounded-full flex-row items-center gap-2 ${newComment.trim() && !isSubmitting
                                            ? "bg-indigo-600"
                                            : "bg-gray-300"
                                        }`
                                    )}
                                >
                                    {isSubmitting ? (
                                        <ActivityIndicator size="small" color="#FFFFFF" />
                                    ) : null}
                                    <Text style={tw("text-sm text-white")}>
                                        {isSubmitting ? "កំពុងបោះផ្សាយ..." : "បោះផ្សាយ"}
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    )}
                </View>
            )}

            {renderContent()}
        </ScrollView>
    );
}

