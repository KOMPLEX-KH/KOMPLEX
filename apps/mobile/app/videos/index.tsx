import { useState, useEffect, useLayoutEffect } from "react";
import { View, ScrollView, RefreshControl, FlatList, Pressable, TextInput } from "react-native";
import { tw } from "@/utils/styles";
import VideoCard from "@/components/screens/videos/VideoCard";
import VideoCardSkeleton from "@/components/screens/videos/VideoCardSkeleton";
import ContentError from "@/components/common/ContentError";
import { VideoPost } from "@core-types/content/videos";
import { feedSearchVideoService, feedVideoService } from "@/services/index";
import { useNavigation, useRouter } from "expo-router";
import { HEADER_CONFIG } from "@/constants/header-config";
import SearchBar from "@/components/common/SearchBar";

export default function VideosScreen() {
    const navigation = useNavigation();
    const router = useRouter();
    const [videos, setVideos] = useState<VideoPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [refreshing, setRefreshing] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    const [match, setMatch] = useState(true);

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

    const handleSearch = async (query: string) => {
        setSearchQuery(query);

        if (query.trim() === "") {
            fetchVideos();
            return;
        }

        try {
            setIsSearching(true);
            setError(null);
            const searchResults = await feedSearchVideoService.searchVideos(query, 50, 0);

            if (searchResults.data.length === 0) {
                setError("រកមិនឃើញអត្ថបទ");
                setVideos([]);
            } else {
                setMatch(searchResults.isMatch);
                setVideos(searchResults.data);
            }
        } catch {
            setError("មានបញ្ហាក្នុងការស្វែងរកអត្ថបទ");
        } finally {
            setIsSearching(false);
        }
    };

    useEffect(() => {
        fetchVideos();
    }, []);

    if (loading || isSearching) {
        return (
            <View style={tw("flex-1 bg-gray-50")}>
                <SearchBar
                    type="videos"
                    onSearch={handleSearch}
                    isDisabled={loading || isSearching}
                />
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
                <SearchBar
                    type="videos"
                    onSearch={handleSearch}
                    isDisabled={true}
                />
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
            <SearchBar type="videos" onSearch={handleSearch} />
            <ScrollView
                style={tw("flex-1")}
                contentContainerStyle={tw("px-4 py-20")}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            >
                <View style={tw("flex gap-4")}>
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
