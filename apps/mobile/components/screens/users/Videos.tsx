import { useState, useEffect } from 'react';
import { View, Pressable, Image, ActivityIndicator } from 'react-native';
import { Play, Eye, ThumbsUp, Clock } from 'lucide-react-native';
import { useRouter, Href } from 'expo-router';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import ContentError from '@/components/common/ContentError';
import { userVideoService } from '@/services/index';

interface Video {
    id: number;
    title: string;
    description: string;
    thumbnailUrl: string;
    videoUrl: string;
    username: string;
    viewCount: number;
    likeCount: number;
    duration: number;
    createdAt: string;
}

interface VideoProps {
    userId: string;
}

const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export default function Videos({ userId }: VideoProps) {
    const router = useRouter();
    const [videos, setVideos] = useState<Video[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

    useEffect(() => {
        const fetchUserVideos = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await userVideoService.getUserVideos(userId);
                setVideos(data);
            } catch (error) {
                console.error('Error fetching user videos:', error);
                setError('មានបញ្ហាក្នុងការទាញយកវីដេអូរបស់អ្នកប្រើប្រាស់។ សូមព្យាយាមម្តងទៀត។');
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserVideos();
    }, [userId]);

    if (isLoading) {
        return (
            <View style={tw("p-4")}>
                <Text style={tw("text-2xl font-kh-bold text-gray-900 mb-6")}>វីដេអូ</Text>
                <View style={tw("flex-row flex-wrap gap-4")}>
                    {[...Array(6)].map((_, index) => (
                        <View key={index} style={tw("w-full sm:w-[48%] lg:w-[31%]")}>
                            <View style={tw("aspect-video bg-gray-200 rounded-3xl mb-4")} />
                            <View style={tw("h-4 bg-gray-200 rounded w-3/4 mb-2")} />
                            <View style={tw("h-3 bg-gray-200 rounded w-1/2")} />
                        </View>
                    ))}
                </View>
            </View>
        );
    }

    if (error) {
        return (
            <View style={tw("p-4")}>
                <Text style={tw("text-2xl font-kh-bold text-gray-900 mb-6")}>វីដេអូ</Text>
                <ContentError
                    type="error"
                    message={error}
                />
            </View>
        );
    }

    if (videos.length === 0) {
        return (
            <View style={tw("p-4")}>
                <Text style={tw("text-2xl font-kh-bold text-gray-900 mb-6")}>វីដេអូ</Text>
                <ContentError
                    type="no-results"
                    message="អ្នកប្រើប្រាស់នេះមិនទាន់មានវីដេអូទេ។"
                />
            </View>
        );
    }

    return (
        <View style={tw("p-4")}>
            <Text style={tw("text-2xl font-kh-bold text-gray-900 mb-6")}>
                វីដេអូ ({videos.length})
            </Text>

            <View style={tw("flex-row flex-wrap gap-4")}>
                {videos.map((video) => (
                    <Pressable
                        key={video.id}
                        onPress={() => router.push(`/videos/${video.id}` as Href)}
                        style={tw("w-full sm:w-[48%] lg:w-[31%]")}
                    >
                        <View style={tw("bg-white rounded-3xl shadow-lg border border-indigo-500/10 overflow-hidden")}>
                            {/* Video Thumbnail */}
                            <View style={tw("relative aspect-video")}>
                                {!imageErrors[video.id] ? (
                                    <Image
                                        source={{ uri: video.thumbnailUrl }}
                                        style={tw("w-full h-full")}
                                        resizeMode="cover"
                                        onError={() => setImageErrors(prev => ({ ...prev, [video.id]: true }))}
                                    />
                                ) : (
                                    <View style={tw("w-full h-full bg-gray-200 items-center justify-center")}>
                                        <Text style={tw("text-gray-400")}>No Image</Text>
                                    </View>
                                )}

                                {/* Play Button Overlay */}
                                <View style={tw("absolute inset-0 items-center justify-center bg-black/20")}>
                                    <View style={tw("w-16 h-16 bg-white/90 rounded-full items-center justify-center")}>
                                        <Play size={24} color="#1F2937" fill="currentColor" />
                                    </View>
                                </View>

                                {/* Duration Badge */}
                                <View style={tw("absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded-full flex-row items-center gap-1")}>
                                    <Clock size={12} color="white" />
                                    <Text style={tw("text-white text-xs")}>
                                        {formatDuration(video.duration)}
                                    </Text>
                                </View>
                            </View>

                            {/* Video Info */}
                            <View style={tw("p-4")}>
                                <Text style={tw("font-kh-bold text-gray-900 mb-2")} numberOfLines={2}>
                                    {video.title}
                                </Text>

                                <View style={tw("flex-row items-center gap-4 mb-3")}>
                                    <View style={tw("flex-row items-center gap-1")}>
                                        <Eye size={16} color="#6B7280" />
                                        <Text style={tw("text-sm text-gray-600")}>
                                            {video.viewCount}
                                        </Text>
                                    </View>
                                    <View style={tw("flex-row items-center gap-1")}>
                                        <ThumbsUp size={16} color="#6B7280" />
                                        <Text style={tw("text-sm text-gray-600")}>
                                            {video.likeCount}
                                        </Text>
                                    </View>
                                </View>

                                <Text style={tw("text-xs text-gray-500")}>
                                    {new Date(video.createdAt).toLocaleDateString('km-KH', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </Text>
                            </View>
                        </View>
                    </Pressable>
                ))}
            </View>
        </View>
    );
}
