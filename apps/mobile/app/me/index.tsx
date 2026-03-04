import { useState, useEffect, useLayoutEffect } from 'react';
import { View, ScrollView, Pressable, Image } from 'react-native';
import { useRouter, Href } from 'expo-router';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import { MessageSquare, Video, Plus, Edit } from 'lucide-react-native';
import { useAuth } from '@/hooks/useAuth';
import MeSkeleton from '@/components/screens/me/MeSkeleton';
import { useNavigation } from '@react-navigation/native';
import { HEADER_CONFIG } from '@/constants/header-config';
import { meForumService, meVideoService, authService } from '@/services/index';
import { ForumPost } from '@core-types/content/forums';
import { VideoPost } from '@core-types/content/videos';
import ForumCard from '@/components/screens/me/forums/ForumCard';
import ContentError from '@/components/common/ContentError';

type TabType = 'forums' | 'videos';

export default function MyContent() {
    const navigation = useNavigation();
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<TabType>('forums');

    // Forum state
    const [forumPosts, setForumPosts] = useState<ForumPost[]>([]);
    const [isLoadingForums, setIsLoadingForums] = useState(true);
    const [forumError, setForumError] = useState<string | null>(null);

    // Video state
    const [videos, setVideos] = useState<VideoPost[]>([]);
    const [isLoadingVideos, setIsLoadingVideos] = useState(true);
    const [videoError, setVideoError] = useState<string | null>(null);

    // Profile stats from backend
    const [followers, setFollowers] = useState<number>(0);
    const [following, setFollowing] = useState<number>(0);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'ប្រវត្តិរូប',
            ...HEADER_CONFIG,
        });
    }, [navigation]);

    // Redirect to auth if not authenticated
    useEffect(() => {
        if (!authLoading && !user) {
            router.replace('/auth');
        }
    }, [user, authLoading, router]);

    // Fetch profile stats (followers / following)
    useEffect(() => {
        const fetchProfileStats = async () => {
            try {
                if (!user) return;
                const profile = await authService.getCurrentUserProfile();
                // Backend returns numberOfFollowers and numberOfFollowing on the profile
                setFollowers((profile as any).numberOfFollowers ?? 0);
                setFollowing((profile as any).numberOfFollowing ?? 0);
            } catch (error) {
                console.error('Error fetching profile stats:', error);
                setFollowers(0);
                setFollowing(0);
            }
        };

        fetchProfileStats();
    }, [user]);

    // Fetch forums
    useEffect(() => {
        if (user && activeTab === 'forums') {
            const fetchForums = async () => {
                try {
                    setIsLoadingForums(true);
                    setForumError(null);
                    const forums = await meForumService.getUserForums();
                    setForumPosts(forums.data);
                } catch (error) {
                    console.error('Error fetching forums:', error);
                    setForumError('មានបញ្ហាកើតឡើងពេលទាញយកទិន្នន័យ។ សូមព្យាយាមម្តងទៀត។');
                } finally {
                    setIsLoadingForums(false);
                }
            };
            fetchForums();
        }
    }, [user, activeTab]);

    // Fetch videos
    useEffect(() => {
        if (user && activeTab === 'videos') {
            const fetchVideos = async () => {
                try {
                    setIsLoadingVideos(true);
                    setVideoError(null);
                    const userVideos = await meVideoService.getUserVideos();
                    setVideos(userVideos.data.map((v: VideoPost) => ({
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

                        isFollowing: v.isFollowing,
                    })));
                } catch (error) {
                    console.error('Error fetching videos:', error);
                    setVideoError('មានបញ្ហាកើតឡើងពេលទាញយកទិន្នន័យ។ សូមព្យាយាមម្តងទៀត។');
                } finally {
                    setIsLoadingVideos(false);
                }
            };
            fetchVideos();
        }
    }, [user, activeTab]);

    const getAvatar = (username: string): string => {
        return username.charAt(0).toUpperCase();
    };

    // Show loading while checking auth
    if (authLoading) {
        return <MeSkeleton />;
    }

    // Don't render anything if not authenticated (will redirect)
    if (!user) {
        return null;
    }

    return (
        <View style={tw("flex-1 bg-gray-50")}>
            <ScrollView
                style={tw("flex-1")}
                showsVerticalScrollIndicator={false}
            >
                {/* Profile Header */}
                <View style={tw("bg-white pb-6 pt-20 px-4")}>
                    <View style={tw("items-center mb-6")}>
                        {user.profileImage ? (
                            <Image
                                source={{ uri: user.profileImage }}
                                style={tw("w-24 h-24 rounded-full border-4 border-indigo-500")}
                                resizeMode="cover"
                            />
                        ) : (
                            <View style={tw("w-24 h-24 rounded-full bg-indigo-600 items-center justify-center border-4 border-indigo-500")}>
                                <Text style={tw("text-white font-kh-bold text-3xl")}>
                                    {getAvatar(user.username)}
                                </Text>
                            </View>
                        )}
                        <Text style={tw("text-2xl font-kh-bold text-gray-900 mt-4")}>
                            {user.username}
                        </Text>
                        <Text style={tw("text-gray-600 mt-1")}>
                            {user.email}
                        </Text>
                    </View>

                    {/* Stats Row */}
                    <View style={tw("flex-row justify-around  pt-6")}>
                        <View style={tw("items-center")}>
                            <Text style={tw("text-2xl font-kh-bold text-gray-900")}>
                                {followers}
                            </Text>
                            <Text style={tw("text-sm text-gray-600 mt-1")}>
                                អ្នកតាម
                            </Text>
                        </View>
                        <View style={tw("items-center")}>
                            <Text style={tw("text-2xl font-kh-bold text-gray-900")}>
                                {following}
                            </Text>
                            <Text style={tw("text-sm text-gray-600 mt-1")}>
                                កំពុងតាម
                            </Text>
                        </View>
                    </View>
                </View>

                {/* Tabs */}
                <View style={tw("bg-white border-b border-gray-200 px-4")}>
                    <View style={tw("flex-row justify-around")}>
                        <Pressable
                            onPress={() => setActiveTab('forums')}
                            style={tw(`flex-1 items-center py-4 border-b-2 ${activeTab === 'forums' ? 'border-indigo-600' : 'border-transparent'
                                }`)}
                        >
                            <MessageSquare
                                size={24}
                                color={activeTab === 'forums' ? '#4F46E5' : '#9CA3AF'}
                            />
                        </Pressable>
                        <Pressable
                            onPress={() => setActiveTab('videos')}
                            style={tw(`flex-1 items-center py-4 border-b-2 ${activeTab === 'videos' ? 'border-indigo-600' : 'border-transparent'
                                }`)}
                        >
                            <Video
                                size={24}
                                color={activeTab === 'videos' ? '#4F46E5' : '#9CA3AF'}
                            />
                        </Pressable>
                    </View>
                </View>

                {/* Tab Content */}
                <View style={tw("px-6 pt-6")}>
                    {activeTab === 'forums' && (
                        <View>
                            <View style={tw("flex-row items-center justify-between mb-4")}>
                                <Text style={tw("text-xl font-kh-bold text-gray-900")}>
                                    អត្ថបទវេទិកា
                                </Text>
                                <Pressable
                                    onPress={() => router.push('/me/create-forum' as Href)}
                                    style={tw("flex-row items-center gap-2 px-4 py-2 bg-indigo-600 rounded-full")}
                                >
                                    <Plus size={16} color="white" />
                                    <Text style={tw("text-white font-kh-medium text-sm")}>
                                        បង្កើត
                                    </Text>
                                </Pressable>
                            </View>

                            {isLoadingForums ? (
                                <View style={tw("gap-4")}>
                                    {[1, 2, 3].map((i) => (
                                        <View key={i} style={tw("bg-white rounded-3xl p-6 border border-gray-200")}>
                                            <View style={tw("w-12 h-12 bg-gray-200 rounded-full mb-4")} />
                                            <View style={tw("h-4 w-3/4 bg-gray-200 rounded mb-2")} />
                                            <View style={tw("h-4 w-1/2 bg-gray-100 rounded")} />
                                        </View>
                                    ))}
                                </View>
                            ) : forumError ? (
                                <ContentError type="error" message={forumError} />
                            ) : forumPosts.length === 0 ? (
                                <ContentError type="no-results" message="អ្នកមិនទាន់មានអត្ថបទវេទិកាណាមួយទេ" />
                            ) : (
                                <View style={tw("gap-4")}>
                                    {forumPosts.map((post) => (
                                        <ForumCard key={post.id} post={post} isFromMePage={true} />
                                    ))}
                                </View>
                            )}
                        </View>
                    )}

                    {activeTab === 'videos' && (
                        <View>
                            <View style={tw("flex-row items-center justify-between mb-4")}>
                                <Text style={tw("text-xl font-kh-bold text-gray-900")}>
                                    វីដេអូ
                                </Text>
                                <Pressable
                                    onPress={() => router.push('/me/create-video' as Href)}
                                    style={tw("flex-row items-center gap-2 px-4 py-2 bg-indigo-600 rounded-full")}
                                >
                                    <Edit size={16} color="white" />
                                    <Text style={tw("text-white font-kh-medium text-sm")}>
                                        បង្ហោះ
                                    </Text>
                                </Pressable>
                            </View>

                            {isLoadingVideos ? (
                                <View style={tw("gap-4")}>
                                    {[1, 2, 3].map((i) => (
                                        <View key={i} style={tw("bg-white rounded-3xl overflow-hidden border border-gray-200")}>
                                            <View style={tw("w-full h-48 bg-gray-200")} />
                                            <View style={tw("p-4")}>
                                                <View style={tw("h-4 w-3/4 bg-gray-200 rounded mb-2")} />
                                                <View style={tw("h-4 w-1/2 bg-gray-100 rounded")} />
                                            </View>
                                        </View>
                                    ))}
                                </View>
                            ) : videoError ? (
                                <ContentError type="error" message={videoError} />
                            ) : videos.length === 0 ? (
                                <ContentError type="no-results" message="រកមិនឃើញវីដេអូ។ សូមបង្ហោះវីដេអូដំបូងរបស់អ្នក!" />
                            ) : (
                                <View style={tw("gap-4")}>
                                    {videos.map((video) => (
                                        <Pressable
                                            key={video.id}
                                            onPress={() => router.push(`/me/videos/${video.id}` as Href)}
                                            style={tw("bg-white rounded-3xl overflow-hidden border border-gray-200")}
                                        >
                                            <Image
                                                source={{ uri: video.thumbnailUrl || '' }}
                                                style={tw("w-full h-48")}
                                                resizeMode="cover"
                                            />
                                            <View style={tw("p-4")}>
                                                <Text style={tw("font-kh-semibold text-gray-900 mb-2")} numberOfLines={2}>
                                                    {video.title || 'Untitled Video'}
                                                </Text>
                                                <Text style={tw("text-sm text-gray-600")} numberOfLines={2}>
                                                    {video.description || 'No description'}
                                                </Text>
                                            </View>
                                        </Pressable>
                                    ))}
                                </View>
                            )}
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    );
}
