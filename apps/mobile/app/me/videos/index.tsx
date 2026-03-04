import { useState, useEffect, useLayoutEffect } from 'react';
import { View, ScrollView, Pressable, Image } from 'react-native';
import { useRouter, useLocalSearchParams, Href } from 'expo-router';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import Sidebar from '@/components/screens/me/Sidebar';
import {
    Video,
    Plus,
    Eye,
    Heart,
    Play,
    Clock,
    Calendar,
    History,
} from 'lucide-react-native';
import { meVideoService } from '@/services/index';
import { VideoPost } from '@core-types/content/videos';
import ContentError from '@/components/common/ContentError';
import MeSkeleton from '@/components/screens/me/MeSkeleton';
import VideoHistoryComponent from '@/components/screens/me/videos/VideoHistory';
import { useAuth } from '@/hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { HEADER_CONFIG } from '@/constants/header-config';

export default function MyVideos() {
    const navigation = useNavigation();
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();
    const { tab } = useLocalSearchParams<{ tab?: string }>();
    const activeTab = tab || 'myVideos';

    const [videos, setVideos] = useState<VideoPost[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'វីដេអូរបស់ខ្ញុំ',
            ...HEADER_CONFIG,
        });
    }, [navigation]);

    // Redirect to auth if not authenticated
    useEffect(() => {
        if (!authLoading && !user) {
            router.replace('/auth');
        }
    }, [user, authLoading, router]);

    useEffect(() => {
        if (user && activeTab === 'myVideos') {
            const fetchVideos = async () => {
                try {
                    setIsLoading(true);
                    setError(null);
                    const userVideos = await meVideoService.getUserVideos();
                    setVideos(userVideos.data.map((v) => {
                        return {
                            id: v.id,
                            userId: v.userId,
                            profileImage: v.profileImage,
                            title: v.title,
                            description: v.description,
                            duration: Number(v.duration),
                            videoUrl: v.videoUrl,
                            thumbnailUrl: v.thumbnailUrl,
                            videoUrlForDeletion: v.videoUrl,
                            thumbnailUrlForDeletion: v.thumbnailUrl,
                            viewCount: Number(v.viewCount),
                            createdAt: v.createdAt,
                            updatedAt: v.updatedAt,
                            username: v.username,
                            isSaved: v.isSaved,
                            isLiked: v.isLiked,
                            likeCount: Number(v.likeCount),
                            saveCount: Number(v.saveCount),
                            // exercises: v.exercises,
                            isFollowing: v.isFollowing,
                        }
                    }));
                } catch (error) {
                    console.error('Error fetching videos:', error);
                    setError('មានបញ្ហាកើតឡើងពេលទាញយកទិន្នន័យ។ សូមព្យាយាមម្តងទៀត។');
                } finally {
                    setIsLoading(false);
                }
            };

            fetchVideos();
        }
    }, [user, activeTab]);

    const formatDuration = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('km-KH', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const stats = {
        total: videos?.length ?? 0,
        totalViews: videos?.reduce((acc, v) => acc + (v.viewCount ?? 0), 0) ?? 0,
        totalLikes: videos?.reduce((acc, v) => acc + (v.likeCount ?? 0), 0) ?? 0,
        totalDuration: videos?.reduce((acc, v) => acc + (v.duration ?? 0), 0) ?? 0
    };

    // Show loading while checking auth or fetching data
    if (authLoading || (isLoading && activeTab === 'myVideos')) {
        return <MeSkeleton />;
    }

    // Don't render anything if not authenticated (will redirect)
    if (!user) {
        return null;
    }

    return (
        <View style={tw("flex-1 bg-gray-50")}>
            <Sidebar />
            <ScrollView
                style={tw("flex-1")}
                contentContainerStyle={tw("p-4 pt-20")}
                showsVerticalScrollIndicator={false}
            >
                {/* Header */}
                <View style={tw("mb-8")}>
                    <Text style={tw("text-3xl font-kh-bold text-gray-900 mb-2")}>
                        វីដេអូរបស់ខ្ញុំ
                    </Text>
                    <Text style={tw("text-gray-600")}>
                        គ្រប់គ្រងវីដេអូនិងមើលដំណើរការរបស់អ្នក
                    </Text>
                </View>

                {/* Stats Cards - Only show for My Videos tab */}
                {activeTab === 'myVideos' && (
                    <View style={tw("flex-row flex-wrap gap-4 mb-8")}>
                        <View style={tw("flex-1 min-w-[48%] lg:min-w-[23%] bg-white rounded-3xl p-6 shadow-sm border border-gray-200")}>
                            <View style={tw("flex-row items-center justify-between")}>
                                <View>
                                    <Text style={tw("text-sm font-kh-medium text-gray-600")}>វីដេអូសរុប</Text>
                                    <Text style={tw("text-2xl font-kh-bold text-gray-900")}>
                                        {stats.total}
                                    </Text>
                                </View>
                                <View style={tw("p-3 bg-indigo-100 rounded-full")}>
                                    <Video size={24} color="#4F46E5" />
                                </View>
                            </View>
                        </View>

                        <View style={tw("flex-1 min-w-[48%] lg:min-w-[23%] bg-white rounded-3xl p-6 shadow-sm border border-gray-200")}>
                            <View style={tw("flex-row items-center justify-between")}>
                                <View>
                                    <Text style={tw("text-sm font-kh-medium text-gray-600")}>ទស្សនាសរុប</Text>
                                    <Text style={tw("text-2xl font-kh-bold text-blue-600")}>
                                        {stats.totalViews.toLocaleString()}
                                    </Text>
                                </View>
                                <View style={tw("p-3 bg-blue-100 rounded-full")}>
                                    <Eye size={24} color="#3B82F6" />
                                </View>
                            </View>
                        </View>

                        <View style={tw("flex-1 min-w-[48%] lg:min-w-[23%] bg-white rounded-3xl p-6 shadow-sm border border-gray-200")}>
                            <View style={tw("flex-row items-center justify-between")}>
                                <View>
                                    <Text style={tw("text-sm font-kh-medium text-gray-600")}>ចូលចិត្តសរុប</Text>
                                    <Text style={tw("text-2xl font-kh-bold text-green-600")}>
                                        {stats.totalLikes}
                                    </Text>
                                </View>
                                <View style={tw("p-3 bg-green-100 rounded-full")}>
                                    <Heart size={24} color="#10B981" />
                                </View>
                            </View>
                        </View>

                        <View style={tw("flex-1 min-w-[48%] lg:min-w-[23%] bg-white rounded-3xl p-6 shadow-sm border border-gray-200")}>
                            <View style={tw("flex-row items-center justify-between")}>
                                <View>
                                    <Text style={tw("text-sm font-kh-medium text-gray-600")}>ពេលវេលាសរុប</Text>
                                    <Text style={tw("text-2xl font-kh-bold text-purple-600")}>
                                        {Math.floor(stats.totalDuration / 60)} នាទី
                                    </Text>
                                </View>
                                <View style={tw("p-3 bg-purple-100 rounded-full")}>
                                    <Clock size={24} color="#9333EA" />
                                </View>
                            </View>
                        </View>
                    </View>
                )}

                {/* Tabs */}
                <View style={tw("mb-8")}>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={tw("gap-2")}
                    >
                        <Pressable
                            onPress={() => router.push('/me/videos?tab=myVideos' as Href)}
                            style={tw(
                                `px-4 py-2 rounded-full ${activeTab === 'myVideos' || activeTab === null
                                    ? 'bg-indigo-600'
                                    : 'bg-white border border-gray-200'
                                }`
                            )}
                        >
                            <View style={tw("flex-row items-center gap-2")}>
                                <Video size={16} color={activeTab === 'myVideos' || activeTab === null ? 'white' : '#6B7280'} />
                                <Text style={tw(`text-sm font-kh-medium ${activeTab === 'myVideos' || activeTab === null ? 'text-white' : 'text-gray-600'}`)}>
                                    វីដេអូរបស់ខ្ញុំ
                                </Text>
                            </View>
                        </Pressable>

                        <Pressable
                            onPress={() => router.push('/me/videos?tab=videoHistory' as Href)}
                            style={tw(
                                `px-4 py-2 rounded-full ${activeTab === 'videoHistory'
                                    ? 'bg-indigo-600'
                                    : 'bg-white border border-gray-200'
                                }`
                            )}
                        >
                            <View style={tw("flex-row items-center gap-2")}>
                                <History size={16} color={activeTab === 'videoHistory' ? 'white' : '#6B7280'} />
                                <Text style={tw(`text-sm font-kh-medium ${activeTab === 'videoHistory' ? 'text-white' : 'text-gray-600'}`)}>
                                    ប្រវត្តិវីដេអូ
                                </Text>
                            </View>
                        </Pressable>
                    </ScrollView>
                </View>

                {/* Tab Content */}
                {activeTab === 'myVideos' && (
                    <View style={tw("bg-white rounded-3xl shadow-sm border border-gray-200")}>
                        <View style={tw("p-6 border-b border-gray-200")}>
                            <View style={tw("flex-row items-center justify-between")}>
                                <Text style={tw("text-lg font-kh-semibold text-gray-900")}>វីដេអូ</Text>
                                <Pressable
                                    onPress={() => router.push('/me/create-video' as Href)}
                                    style={tw("flex-row items-center gap-2 px-4 py-2 bg-indigo-600 rounded-full")}
                                >
                                    <Plus size={16} color="white" />
                                    <Text style={tw("text-white font-kh-medium text-sm")}>
                                        បង្ហោះវីដេអូថ្មី
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                        <View style={tw("p-6")}>
                            {error ? (
                                <ContentError
                                    type="error"
                                    message={error}
                                />
                            ) : videos && videos.length > 0 ? (
                                <View style={tw("flex-row flex-wrap gap-4")}>
                                    {videos.map((video) => (
                                        <Pressable
                                            key={video.id}
                                            onPress={() => router.push(`/me/videos/${video.id}` as Href)}
                                            style={tw("w-full sm:w-[48%] lg:w-[31%] bg-white rounded-3xl shadow-sm overflow-hidden border border-gray-200")}
                                        >
                                            {/* Thumbnail */}
                                            <View style={tw("relative")}>
                                                {!imageErrors[video.id] ? (
                                                    <Image
                                                        source={{ uri: video.thumbnailUrl || '' }}
                                                        style={tw("w-full h-48")}
                                                        resizeMode="cover"
                                                        onError={() => setImageErrors(prev => ({ ...prev, [video.id]: true }))}
                                                    />
                                                ) : (
                                                    <View style={tw("w-full h-48 bg-gray-200 items-center justify-center")}>
                                                        <Text style={tw("text-gray-400")}>No Image</Text>
                                                    </View>
                                                )}

                                                {/* Duration Badge */}
                                                {video.duration && (
                                                    <View style={tw("absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded")}>
                                                        <Text style={tw("text-white text-xs")}>
                                                            {formatDuration(video.duration)}
                                                        </Text>
                                                    </View>
                                                )}

                                                {/* Play Button Overlay */}
                                                <View style={tw("absolute inset-0 items-center justify-center bg-black/20")}>
                                                    <View style={tw("bg-white/90 p-3 rounded-full")}>
                                                        <Play size={24} color="#4F46E5" fill="currentColor" />
                                                    </View>
                                                </View>
                                            </View>

                                            {/* Video Info */}
                                            <View style={tw("p-4")}>
                                                <Text style={tw("font-kh-semibold text-gray-900 mb-2")} numberOfLines={2}>
                                                    {video.title || 'Untitled Video'}
                                                </Text>
                                                <Text style={tw("text-sm text-gray-600 mb-3")} numberOfLines={2}>
                                                    {video.description || 'No description available'}
                                                </Text>

                                                {/* Stats */}
                                                <View style={tw("flex-row items-center justify-between")}>
                                                    <View style={tw("flex-row items-center gap-4")}>
                                                        <View style={tw("flex-row items-center gap-1")}>
                                                            <Eye size={16} color="#6B7280" />
                                                            <Text style={tw("text-sm text-gray-500")}>
                                                                {(video.viewCount || 0).toLocaleString()}
                                                            </Text>
                                                        </View>
                                                        <View style={tw("flex-row items-center gap-1")}>
                                                            <Heart size={16} color="#6B7280" />
                                                            <Text style={tw("text-sm text-gray-500")}>
                                                                {video.likeCount || 0}
                                                            </Text>
                                                        </View>
                                                    </View>
                                                    {video.createdAt && (
                                                        <View style={tw("flex-row items-center gap-1")}>
                                                            <Calendar size={16} color="#6B7280" />
                                                            <Text style={tw("text-sm text-gray-500")}>
                                                                {formatDate(video.createdAt)}
                                                            </Text>
                                                        </View>
                                                    )}
                                                </View>
                                            </View>
                                        </Pressable>
                                    ))}
                                </View>
                            ) : (
                                <ContentError
                                    type="no-results"
                                    message="រកមិនឃើញវីដេអូ។ សូមបង្ហោះវីដេអូដំបូងរបស់អ្នក!"
                                />
                            )}
                        </View>
                    </View>
                )}

                {activeTab === 'videoHistory' && (
                    <VideoHistoryComponent onError={setError} />
                )}
            </ScrollView>
        </View>
    );
}

