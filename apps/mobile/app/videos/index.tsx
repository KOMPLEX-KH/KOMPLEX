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
                <FlatList
                    data={[1, 2, 3, 4, 5, 6]}
                    renderItem={() => (
                        <View style={tw("p-4")}>
                            <VideoCardSkeleton />
                        </View>
                    )}
                    keyExtractor={(item) => item.toString()}
                    numColumns={2}
                    columnWrapperStyle={tw("gap-4")}
                    contentContainerStyle={tw("p-4")}
                />
            </View>
        );
    }

    if (error) {
        return (
            <View style={tw("flex-1 bg-gray-50")}>
                <ScrollView
                    style={tw("flex-1")}
                    contentContainerStyle={tw("p-4")}
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
            <FlatList
                data={videos}
                renderItem={({ item }) => (
                    <View style={tw("flex-1 p-2")}>
                        <VideoCard video={item} variant="compact" />
                    </View>
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                columnWrapperStyle={tw("gap-2")}
                contentContainerStyle={tw("p-4")}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
                ListEmptyComponent={
                    <View style={tw("p-4")}>
                        <ContentError type="no-results" message="រកមិនឃើញវីដេអូ" />
                    </View>
                }
            />
        </View>
    );
}
