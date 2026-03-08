import { useState, useEffect, useCallback, useLayoutEffect } from "react";
import { View, ScrollView, RefreshControl, Pressable } from "react-native";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { tw } from "@/utils/styles";
import { Text } from "@/components/common/Text";
import VideoPlayer from "@/components/helper/VideoPlayer";
import VideoDescription from "@/components/screens/videos/VideoDescription";
import VideoSkeleton from "@/components/screens/videos/VideoSkeleton";
import ContentError from "@/components/common/ContentError";
import Comments from "@/components/common/comments/Comments";
// import Exercise from "@/components/screens/videos/Exercise";
import { MessageSquare, BookOpen } from "lucide-react-native";
import { VideoPost } from "@core-types/api-types/videos";
import { feedVideoService, meVideoService } from "@/services/index";
import { useAuth } from "@/hooks/useAuth";
import { HEADER_CONFIG } from "@/constants/header-config";

export default function VideoDetailScreen() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const { user } = useAuth();
    const navigation = useNavigation();


    const [videoPost, setVideoPost] = useState<VideoPost | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isCommentInputActive, setIsCommentInputActive] = useState(false);
    const [activeTab, setActiveTab] = useState<"comments" | "exercise">("comments");
    const [refreshing, setRefreshing] = useState(false);


    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'វីដេអូ',
            ...HEADER_CONFIG,
        })
    }, [navigation])

    const fetchVideo = useCallback(async () => {
        if (!id) return;

        try {
            setIsLoading(true);
            setError(null);
            const video = await feedVideoService.getVideoById(id);
            setVideoPost(video.data);
        } catch (error) {
            console.error("Error fetching video:", error);
            setError("មានបញ្ហាកើតឡើងពេលផ្ទុកវីដេអូ សូមព្យាយាមម្តងទៀត");
        } finally {
            setIsLoading(false);
        }
    }, [id]);

    useEffect(() => {
        fetchVideo();
    }, [fetchVideo]);

    const onRefresh = async () => {
        setRefreshing(true);
        await fetchVideo();
        setRefreshing(false);
    };

    const handleLike = async (videoId: number, isLiked: boolean, video: VideoPost) => {
        try {
            if (!user) return;
            await meVideoService.toggleVideoLike(videoId.toString(), isLiked);
            setVideoPost((prev) =>
                prev
                    ? {
                        ...prev,
                        isLiked: !isLiked,
                        likeCount: isLiked ? prev.likeCount - 1 : prev.likeCount + 1,
                    }
                    : null
            );
        } catch (error) {
            console.error("Error toggling like:", error);
        }
    };

    const handleBookmark = async (videoId: number, isSaved: boolean, video: VideoPost) => {
        try {
            if (!user) return;
            await meVideoService.toggleVideoSave(videoId.toString(), isSaved);
            setVideoPost((prev) =>
                prev
                    ? {
                        ...prev,
                        isSaved: !isSaved,
                        saveCount: isSaved ? prev.saveCount - 1 : prev.saveCount + 1,
                    }
                    : null
            );
        } catch (error) {
            console.error("Error toggling bookmark:", error);
        }
    };

    const handleCommentClose = () => {
        setIsCommentInputActive(false);
    };

    if (isLoading) {
        return (
            <View style={tw("flex-1 bg-gray-50")}>
                <ScrollView style={tw("flex-1")} contentContainerStyle={tw("px-4 py-20")}>
                    <VideoSkeleton />
                </ScrollView>
            </View>
        );
    }

    if (error || !videoPost) {
        return (
            <View style={tw("flex-1 bg-gray-50")}>
                <ScrollView
                    style={tw("flex-1")}
                    contentContainerStyle={tw("px-4 py-20")}
                >
                    <ContentError
                        type="error"
                        message={error || "មានបញ្ហាក្នុងការទាញយកវីដេអូ"}
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

                {/* Video Player */}
                <View style={tw("rounded-3xl overflow-hidden")}>
                    <VideoPlayer
                        src={videoPost.videoUrl}
                        poster={videoPost.thumbnailUrl}
                        style={tw("w-full")}
                    />
                </View>

                {/* Video Description */}
                <VideoDescription
                    video={videoPost}
                    onLike={handleLike}
                    onBookmark={handleBookmark}
                />

                {/* Tab Navigation */}
                <View style={tw("bg-white rounded-3xl border border-indigo-50")}>
                    <View style={tw("flex-row")}>
                        <Pressable
                            onPress={() => setActiveTab("comments")}
                            style={tw(
                                `flex-1 px-4 py-3 ${activeTab === "comments"
                                    ? "border-b-2 border-indigo-600"
                                    : ""
                                }`
                            )}
                        >
                            <View style={tw("flex-row items-center justify-center gap-2")}>
                                <MessageSquare size={16} color={activeTab === "comments" ? "#4F46E5" : "#6B7280"} />
                                <Text
                                    style={tw(
                                        `text-sm font-kh-medium ${activeTab === "comments"
                                            ? "text-indigo-600"
                                            : "text-gray-500"
                                        }`
                                    )}
                                >
                                    មតិតិការ
                                </Text>
                            </View>
                        </Pressable>
                        <Pressable
                            onPress={() => setActiveTab("exercise")}
                            style={tw(
                                `flex-1 px-4 py-3 ${activeTab === "exercise"
                                    ? "border-b-2 border-indigo-600"
                                    : ""
                                }`
                            )}
                        >
                            <View style={tw("flex-row items-center justify-center gap-2")}>
                                <BookOpen size={16} color={activeTab === "exercise" ? "#4F46E5" : "#6B7280"} />
                                <Text
                                    style={tw(
                                        `text-sm font-kh-medium ${activeTab === "exercise"
                                            ? "text-indigo-600"
                                            : "text-gray-500"
                                        }`
                                    )}
                                >
                                    លំហាត់
                                </Text>
                            </View>
                        </Pressable>
                    </View>
                </View>

                {/* Tab Content */}
                <View style={tw("bg-white rounded-3xl border border-indigo-50 p-4")}>
                    {activeTab === "comments" && (
                        <Comments
                            type="video"
                            parentId={videoPost.id}
                            focusInput={isCommentInputActive}
                            isReadOnly={true}
                            onClose={handleCommentClose}
                        />
                    )}

                    {/* {activeTab === "exercise" && (
                        // <Exercise exercises={videoPost.exercises || []} />
                    )} */}
                </View>
            </ScrollView>
        </View>
    );
}

