import { useState, useEffect, useLayoutEffect } from "react";
import { View, ScrollView, RefreshControl, FlatList } from "react-native";
import { tw } from "@/utils/styles";
import VideoCard from "@/components/screens/videos/VideoCard";
import VideoCardSkeleton from "@/components/screens/videos/VideoCardSkeleton";
import ContentError from "@/components/common/ContentError";
import { VideoPost } from "@/types/content/videos";
import { feedVideoService } from "@/services/index";
import { useNavigation } from "expo-router";
import { HEADER_CONFIG } from "@/constants/header-config";
import { Scroll } from "lucide-react-native";

export default function VideosScreen() {
    const navigation = useNavigation();
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
