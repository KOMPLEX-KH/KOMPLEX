import { useState, useEffect, useCallback, useLayoutEffect } from "react";
import { View, ScrollView, RefreshControl } from "react-native";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { tw } from "@/utils/styles";
import ForumCard from "@/components/screens/forums/ForumCard";
import ForumSkeleton from "@/components/screens/forums/ForumSkeleton";
import ContentError from "@/components/common/ContentError";
import Comments from "@/components/common/comments/Comments";
import { BackButton } from "@/components/common/BackButton";
import { ForumPost } from "@/types/content/forums";
import { feedForumService, meForumService } from "@/services/index";
import { useAuth } from "@/hooks/useAuth";
import { HEADER_CONFIG } from "@/constants/header-config";

export default function ForumDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const router = useRouter();
    const { user } = useAuth();

    const [isCommentInputActive, setIsCommentInputActive] = useState(false);
    const [post, setPost] = useState<ForumPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [refreshing, setRefreshing] = useState(false);
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'ពិភាក្សា',
            ...HEADER_CONFIG,
        })
    }, [navigation])

    const fetchData = useCallback(async () => {
        if (!id) return;

        try {
            setLoading(true);
            setError(null);
            const postData = await feedForumService.getForumById(id);
            setPost(postData);
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("មានបញ្ហាក្នុងការទាញយកទិន្នន័យ។ សូមព្យាយាមម្តងទៀត។");
        } finally {
            setLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    const onRefresh = async () => {
        setRefreshing(true);
        await fetchData();
        setRefreshing(false);
    };

    const handleLikeClick = async (postId: number, isLiked: boolean) => {
        try {
            if (!user) {
                router.replace("/auth");
                return;
            }
            await meForumService.toggleForumLike(postId.toString(), isLiked);
            setPost((prev) =>
                prev
                    ? {
                        ...prev,
                        likeCount: isLiked ? prev.likeCount - 1 : prev.likeCount + 1,
                        isLiked: !isLiked,
                    }
                    : null
            );
        } catch (error) {
            console.error("Error liking post:", error);
        }
    };

    const handleCommentToggle = () => {
        setIsCommentInputActive(!isCommentInputActive);
    };

    const handleCommentClose = () => {
        setIsCommentInputActive(false);
    };

    if (loading) {
        return (
            <View style={tw("flex-1 bg-gray-50")}>
                <ScrollView
                    style={tw("flex-1")}
                    contentContainerStyle={tw("px-4 py-20")}
                >
                    <ForumSkeleton count={1} />
                </ScrollView>
            </View>
        );
    }

    if (error || !post) {
        return (
            <View style={tw("flex-1 bg-gray-50")}>
                <ScrollView
                    style={tw("flex-1")}
                    contentContainerStyle={tw("px-4 py-20")}
                >
                    <ContentError
                        type="error"
                        message={error || "រកមិនឃើញអត្ថបទ"}
                    />
                </ScrollView>
            </View>
        );
    }

    return (
        <View style={tw("flex-1 bg-gray-50")}>
            <ScrollView
                style={tw("flex-1")}
                contentContainerStyle={tw("px-4 py-20 gap-4")}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >

                <ForumCard
                    post={post}
                    isFromBasePage={false}
                    onCommentClick={handleCommentToggle}
                    onLikeClick={() => handleLikeClick(post.id, post.isLiked)}
                />

                <View style={tw("w-full h-px bg-gray-200")} />

                <Comments
                    type="forum"
                    parentId={post.id}
                    focusInput={isCommentInputActive}
                    onClose={handleCommentClose}
                />
            </ScrollView>
        </View>
    );
}

