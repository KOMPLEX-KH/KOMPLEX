import { useState, useEffect, useLayoutEffect } from "react";
import { View, ScrollView, RefreshControl, FlatList, Pressable, TextInput } from "react-native";
import { tw } from "@/utils/styles";
import VideoCard from "@/components/screens/videos/VideoCard";
import VideoCardSkeleton from "@/components/screens/videos/VideoCardSkeleton";
import ContentError from "@/components/common/ContentError";
import { VideoPost } from "@/types/content/videos";
import { feedVideoService } from "@/services/index";
import { useNavigation, useRouter } from "expo-router";
import { HEADER_CONFIG } from "@/constants/header-config";
import { Plus, Scroll } from "lucide-react-native";
import { TAILWIND_COLORS } from "@/constants/styles/tailwind-colors";

export default function VideosScreen() {
    const navigation = useNavigation();
    const router = useRouter();
    const [videos, setVideos] = useState<VideoPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [refreshing, setRefreshing] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'វីដេអូ',
            ...HEADER_CONFIG,
        })
    }, [navigation])


    const fetchVideos = async () => {
        try {
            setLoading(true);
            setError(null);
            const { data: fetchedVideos } = await feedVideoService.getAllVideos();
            if (fetchedVideos.length > 0) {
                setVideos(fetchedVideos);
            } else {
                setError("រកមិនឃើញវីដេអូ");
            }
        } catch (err) {
            console.error("Error fetching videos:", err);
            setError("មានបញ្ហាក្នុងការទាញយកទិន្នន័យ។ សូមព្យាយាមម្តងទៀត។");
        } finally {
            setLoading(false);
        }
    };

    const onRefresh = async () => {
        setRefreshing(true);
        await fetchVideos();
        setRefreshing(false);
    };

    useEffect(() => {
        fetchVideos();
    }, []);

    if (loading) {
        return (
            <View style={tw("flex-1 bg-gray-50")}>
                <View style={tw("fixed top-14 left-0 right-0 z-10 flex-row items-center justify-between gap-2  p-4 bg-white shadow-sm")}>
                    <TextInput placeholder="ស្វែងរក" placeholderTextColor={TAILWIND_COLORS["gray-500"]} style={tw("border border-gray-300 rounded-full px-3 py-2 flex-1 font-kh-medium")} />
                    <Pressable style={tw("rounded-full bg-indigo-600 p-2")} onPress={() => router.push('/me/create-video')}>
                        <Plus size={20} color="white" />
                    </Pressable>
                </View>
                <ScrollView
                    style={tw("flex-1")}
                    contentContainerStyle={tw("px-4 py-20")}
                >
                    <VideoCardSkeleton count={6} />
                </ScrollView>
            </View>
        );
    }

    if (error) {
        return (
            <View style={tw("flex-1 bg-gray-50")}>
                <View style={tw("fixed top-14 left-0 right-0 z-10 flex-row items-center justify-between gap-2  p-4 bg-white shadow-sm")}>
                    <TextInput placeholder="ស្វែងរក" placeholderTextColor={TAILWIND_COLORS["gray-500"]} style={tw("border border-gray-300 rounded-full px-3 py-2 flex-1 font-kh-medium")} />
                    <Pressable style={tw("rounded-full bg-indigo-600 p-2")} onPress={() => router.push('/me/create-video')}>
                        <Plus size={20} color="white" />
                    </Pressable>
                </View>
                <ScrollView
                    style={tw("flex-1")}
                    contentContainerStyle={tw("px-4 py-20")}
                >
                    <ContentError
                        type={error === "រកមិនឃើញវីដេអូ" ? "no-results" : "error"}
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
                <Pressable style={tw("rounded-full bg-indigo-600 p-2")} onPress={() => router.push('/me/create-video')}>
                    <Plus size={20} color="white" />
                </Pressable>
            </View>
            <ScrollView
                style={tw("flex-1")}
                contentContainerStyle={tw("px-4 py-20")}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <View >
                    {videos.length > 0 ? (
                        videos.map((video) => (
                            <VideoCard key={video.id} video={video} variant="compact" />
                        ))
                    ) : (
                        <ContentError type="no-results" message="រកមិនឃើញវីដេអូ" />
                    )}
                </View>
            </ScrollView>
        </View>
    );
}
