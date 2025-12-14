import { useState, useEffect, useLayoutEffect } from "react";
import { View, ScrollView, RefreshControl, Pressable } from "react-native";
import { Text } from "@/components/common/Text";
import { tw } from "@/utils/styles";
import ForumCard from "@/components/screens/forums/ForumCard";
import ForumSkeleton from "@/components/screens/forums/ForumSkeleton";
import ContentError from "@/components/common/ContentError";
import { ForumPost } from "@/types/content/forums";
import { feedForumService, feedSearchForumService, meForumService } from "@/services/index";
import { useNavigation } from "expo-router";
import { HEADER_CONFIG } from "@/constants/header-config";
import { Plus } from "lucide-react-native";
import { TAILWIND_COLORS } from "@/constants/styles/tailwind-colors";
import { TextInput } from "react-native";
import { useRouter } from "expo-router";

export default function ForumsScreen() {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState("");
    const [forumPosts, setForumPosts] = useState<ForumPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [isSearching, setIsSearching] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [match, setMatch] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const router = useRouter();


    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'ការពិភាក្សា',
            ...HEADER_CONFIG,
        })
    }, [navigation])

    const fetchForumPosts = async () => {
        try {
            setLoading(true);
            setError(null);
            const { forums } = await feedForumService.getAllForums();
            if (forums.length > 0) {
                setForumPosts(forums);
            } else {
                setError("រកមិនឃើញអត្ថបទ");
            }
        } catch (err) {
            console.error("Error fetching forum posts:", err);
            setError("មានបញ្ហាក្នុងការទាញយកទិន្នន័យ។ សូមព្យាយាមម្តងទៀត។");
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (query: string) => {
        setSearchQuery(query);

        if (query.trim() === "") {
            fetchForumPosts();
            return;
        }

        try {
            setIsSearching(true);
            setError(null);
            const searchResults = await feedSearchForumService.searchForums(query, 50, 0);

            if (searchResults.data.length === 0) {
                setError("រកមិនឃើញអត្ថបទ");
                setForumPosts([]);
            } else {
                setMatch(searchResults.isMatch);
                setForumPosts(searchResults.data);
            }
        } catch {
            setError("មានបញ្ហាក្នុងការស្វែងរកអត្ថបទ");
        } finally {
            setIsSearching(false);
        }
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await fetchForumPosts();
        setRefreshing(false);
    };

    useEffect(() => {
        fetchForumPosts();
    }, []);

    const handleLikeClick = async (postId: number, isLiked: boolean) => {
        try {
            await meForumService.toggleForumLike(postId.toString(), isLiked);
            setForumPosts((prev) =>
                prev.map((post) =>
                    post.id === postId
                        ? { ...post, likeCount: isLiked ? post.likeCount - 1 : post.likeCount + 1, isLiked: !isLiked }
                        : post
                )
            );
        } catch (error) {
            console.error("Error liking post:", error);
        }
    };

    if (loading || isSearching) {
        return (
            <View style={tw("flex-1 bg-gray-50")}>
                <View style={tw("fixed top-14 left-0 right-0 z-10 flex-row items-center justify-between gap-2  p-4 bg-white shadow-sm")}>
                    <TextInput placeholder="ស្វែងរក" placeholderTextColor={TAILWIND_COLORS["gray-500"]} style={tw("border border-gray-300 rounded-full px-3 py-2 flex-1 font-kh-medium")} />
                    <Pressable style={tw("rounded-full bg-indigo-600 p-2")} onPress={() => router.push('/me/create-forum')}>
                        <Plus size={20} color="white" />
                    </Pressable>
                </View>
                <ScrollView
                    style={tw("flex-1")}
                    contentContainerStyle={tw("px-4 py-20 gap-4")}
                >
                    <ForumSkeleton count={6} />
                </ScrollView>
            </View>
        );
    }

    if (error) {
        return (
            <View style={tw("flex-1 bg-gray-50")}>
                <View style={tw("fixed top-14 left-0 right-0 z-10 flex-row items-center justify-between gap-2  p-4 bg-white shadow-sm")}>
                    <TextInput placeholder="ស្វែងរក" placeholderTextColor={TAILWIND_COLORS["gray-500"]} style={tw("border border-gray-300 rounded-full px-3 py-2 flex-1 font-kh-medium")} />
                    <Pressable style={tw("rounded-full bg-indigo-600 p-2")} onPress={() => router.push('/me/create-forum')}>
                        <Plus size={20} color="white" />
                    </Pressable>
                </View>
                <ScrollView
                    style={tw("flex-1")}
                    contentContainerStyle={tw("px-4 py-20")}
                >
                    <ContentError
                        type={error === "រកមិនឃើញអត្ថបទ" ? "no-results" : "error"}
                        message={error}
                    />
                </ScrollView>
            </View>
        );
    }

    return (
        <View style={tw("flex-1 bg-gray-50")}>
            <View style={tw("fixed top-14 left-0 right-0 z-10 flex-row items-center justify-between gap-2  p-4 bg-white shadow-sm")}>
                <TextInput placeholder="ស្វែងរក" placeholderTextColor={TAILWIND_COLORS["gray-500"]} style={tw("border border-gray-300 rounded-full px-3 py-2 flex-1 font-kh-medium")} />
                <Pressable style={tw("rounded-full bg-indigo-600 p-2")} onPress={() => router.push('/me/create-forum')}>
                    <Plus size={20} color="white" />
                </Pressable>
            </View>
            <ScrollView
                style={tw("flex-1")}
                contentContainerStyle={tw("px-4 py-20 gap-4")}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                {searchQuery && (
                    <View style={tw("mb-2")}>
                        <Text
                            style={tw(
                                `text-lg font-kh-semibold ${match ? "text-gray-700" : "text-red-600"
                                }`
                            )}
                        >
                            {match ? "លទ្ធផលស្វែងរក" : "គ្មានលទ្ធផល"}: &quot;{searchQuery}&quot;
                        </Text>
                    </View>
                )}

                {forumPosts.length > 0 ? (
                    forumPosts.map((post) => (
                        <ForumCard
                            key={post.id}
                            post={post}
                            isFromBasePage={true}
                            onLikeClick={() => handleLikeClick(post.id, post.isLiked)}
                        />
                    ))
                ) : (
                    <ContentError type="no-results" message="រកមិនឃើញអត្ថបទ" />
                )}
            </ScrollView>
        </View>
    );
}
