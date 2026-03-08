import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { View, ScrollView, Pressable, ActivityIndicator, Alert } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { Video as ExpoVideo, ResizeMode } from 'expo-av';
import { Edit, Trash, Clock, MessageSquare, BookOpen } from 'lucide-react-native';
import Sidebar from '@/components/screens/me/Sidebar';
import MeSkeleton from '@/components/screens/me/MeSkeleton';
import { useAuth } from '@/hooks/useAuth';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import { feedVideoService, meVideoService } from '@/services/index';
import type { VideoPost } from '@core-types/api-types/videos';
import DeleteConfirm from '@/components/common/DeleteConfirm';
import ContentError from '@/components/common/ContentError';
import Comments from '@/components/common/comments/Comments';
// import Exercise from '@/components/screens/videos/Exercise';
import EditVideo from '@/components/screens/me/videos/EditVideo';
import { BackButton } from '@/components/common/BackButton';
// import MarkDownRenderer from '@/components/helper/MarkDownRenderer';
import { HEADER_CONFIG } from '@/constants/header-config';

export default function MyVideoDetailPage() {
    const navigation = useNavigation();
    const router = useRouter();
    const { id } = useLocalSearchParams<{ id: string }>();
    const { user, loading: authLoading } = useAuth();

    const [videoPost, setVideoPost] = useState<VideoPost | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<'comments' | 'exercise'>('comments');
    const [isEditMode, setIsEditMode] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'វីដេអូរបស់ខ្ញុំ',
            ...HEADER_CONFIG,
        });
    }, [navigation]);

    useEffect(() => {
        if (!authLoading && !user) {
            router.replace('/auth');
        }
    }, [authLoading, user, router]);

    useEffect(() => {
        const fetchVideo = async () => {
            if (!id || !user) return;
            try {
                setIsLoading(true);
                setError(null);
                const video = await feedVideoService.getVideoById(id.toString());
                setVideoPost(video.data);
            } catch (err) {
                console.error('Error fetching video:', err);
                setError('មានបញ្ហាកើតឡើងពេលផ្ទុកវីដេអូ សូមព្យាយាមம្តងទៀត');
            } finally {
                setIsLoading(false);
            }
        };

        fetchVideo();
    }, [id, user]);

    const handleDeleteVideo = async () => {
        if (!id) return;
        try {
            setIsDeleting(true);
            await meVideoService.deleteVideo(id.toString());
            setShowDeleteModal(false);
            router.replace('/me/videos');
        } catch (err) {
            console.error('Error deleting video:', err);
            Alert.alert('បរាជ័យ', 'មានបញ្ហាកើតឡើងពេលលុបវីដេអូ សូមព្យាយាមម្ដងទៀត');
        } finally {
            setIsDeleting(false);
        }
    };

    const handleVideoUpdated = (updatedVideo: VideoPost) => {
        setVideoPost(updatedVideo);
        setIsEditMode(false);
    };

    const formatDuration = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const formattedDate = useMemo(() => {
        if (!videoPost?.createdAt) return '';
        return new Date(videoPost.createdAt).toLocaleDateString('km-KH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });
    }, [videoPost?.createdAt]);

    if (authLoading || (!authLoading && !user)) {
        return <MeSkeleton />;
    }

    if (isLoading) {
        return (
            <View style={tw('flex-1 bg-gray-50')}>
                <Sidebar />
                <View style={tw('flex-1 pt-20 px-4')}>
                    <View style={tw('items-center justify-center flex-1')}>
                        <ActivityIndicator size="large" color="#4F46E5" />
                        <Text style={tw('mt-3 text-gray-500 font-kh-medium')}>កំពុងផ្ទុកវីដេអូ...</Text>
                    </View>
                </View>
            </View>
        );
    }

    if (error || !videoPost) {
        return (
            <View style={tw('flex-1 bg-gray-50')}>
                <Sidebar />
                <ScrollView style={tw('flex-1')} contentContainerStyle={tw('p-4 pt-20')}>
                    <BackButton href="/me/videos" />
                    <View style={tw('mt-6')}>
                        <ContentError type="error" message={error ?? 'មានបញ្ហាក្នុងការទាញយកវីដេអូ'} />
                    </View>
                </ScrollView>
            </View>
        );
    }

    if (isEditMode) {
        return (
            <View style={tw('flex-1 bg-gray-50')}>
                <Sidebar />
                <ScrollView
                    style={tw('flex-1')}
                    contentContainerStyle={tw('pt-20')}
                    keyboardShouldPersistTaps="handled"
                >
                    <EditVideo video={videoPost} onSave={handleVideoUpdated} onCancel={() => setIsEditMode(false)} />
                </ScrollView>
            </View>
        );
    }

    return (
        <View style={tw('flex-1 bg-gray-50')}>
            <Sidebar />
            <ScrollView
                style={tw('flex-1')}
                contentContainerStyle={tw('p-4 pt-20 gap-6')}
                showsVerticalScrollIndicator={false}
            >
                <BackButton href="/me/videos" />

                <View style={tw('flex-row justify-end gap-2')}>
                    <Pressable
                        onPress={() => setShowDeleteModal(true)}
                        style={tw('flex-row items-center gap-2 px-4 py-2 bg-red-500 rounded-full')}
                    >
                        <Trash size={16} color="white" />
                        <Text style={tw('text-white font-kh-medium text-sm')}>លុប</Text>
                    </Pressable>
                    <Pressable
                        onPress={() => setIsEditMode(true)}
                        style={tw('flex-row items-center gap-2 px-4 py-2 bg-indigo-600 rounded-full')}
                    >
                        <Edit size={16} color="white" />
                        <Text style={tw('text-white font-kh-medium text-sm')}>កែប្រែ</Text>
                    </Pressable>
                </View>

                <View style={tw('bg-black rounded-3xl overflow-hidden shadow-lg')}>
                    <ExpoVideo
                        source={{ uri: videoPost.videoUrl }}
                        posterSource={videoPost.thumbnailUrl ? { uri: videoPost.thumbnailUrl } : undefined}
                        useNativeControls
                        resizeMode={ResizeMode.CONTAIN}
                        style={tw('w-full aspect-video')}
                    />
                </View>

                <View style={tw('bg-white rounded-3xl p-6 gap-4 border border-gray-200')}>
                    <Text style={tw('text-2xl font-kh-bold text-gray-900')}>
                        {videoPost.title}
                    </Text>

                    <View style={tw('flex-row items-center justify-between flex-wrap gap-y-2')}>
                        <View style={tw('flex-row items-center gap-3')}>
                            <View style={tw('w-10 h-10 rounded-full bg-indigo-600 items-center justify-center')}>
                                <Text style={tw('text-white font-kh-semibold text-base')}>
                                    {videoPost.username.charAt(0)}
                                </Text>
                            </View>
                            <View>
                                <Text style={tw('font-kh-medium text-gray-900')}>{videoPost.username}</Text>
                                <Text style={tw('text-xs text-gray-500')}>{formattedDate}</Text>
                            </View>
                        </View>

                        <View style={tw('flex-row items-center gap-4')}>
                            <View style={tw('flex-row items-center gap-1')}>
                                <Clock size={16} color="#6B7280" />
                                <Text style={tw('text-sm text-gray-600')}>
                                    {formatDuration(videoPost.duration)}
                                </Text>
                            </View>
                            <View style={tw('flex-row items-center gap-1')}>
                                <MessageSquare size={16} color="#6B7280" />
                            </View>
                        </View>
                    </View>

                    <View style={tw('border-t border-gray-200 pt-4')}>
                        <Text >{videoPost.description} </Text>
                    </View>
                </View>

                <View style={tw('bg-white rounded-3xl border border-gray-200 overflow-hidden')}>
                    <View style={tw('flex-row')}>
                        <Pressable
                            onPress={() => setActiveTab('comments')}
                            style={tw(
                                `flex-1 px-4 py-3 flex-row items-center justify-center gap-2 ${activeTab === 'comments' ? 'bg-indigo-50' : ''
                                }`
                            )}
                        >
                            <MessageSquare
                                size={16}
                                color={activeTab === 'comments' ? '#4F46E5' : '#6B7280'}
                            />
                            <Text
                                style={tw(
                                    `text-sm font-kh-medium ${activeTab === 'comments' ? 'text-indigo-600' : 'text-gray-600'
                                    }`
                                )}
                            >
                                មតិតិការ
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={() => setActiveTab('exercise')}
                            style={tw(
                                `flex-1 px-4 py-3 flex-row items-center justify-center gap-2 ${activeTab === 'exercise' ? 'bg-indigo-50' : ''
                                }`
                            )}
                        >
                            <BookOpen
                                size={16}
                                color={activeTab === 'exercise' ? '#4F46E5' : '#6B7280'}
                            />
                            <Text
                                style={tw(
                                    `text-sm font-kh-medium ${activeTab === 'exercise' ? 'text-indigo-600' : 'text-gray-600'
                                    }`
                                )}
                            >
                                លំហាត់
                            </Text>
                        </Pressable>
                    </View>

                    <View style={tw('p-4')}>
                        <Comments
                            type="video"
                            parentId={videoPost.id}
                            focusInput={false}
                            isReadOnly
                            onClose={() => { }}
                        />
                    </View>
                </View>
            </ScrollView>

            <DeleteConfirm
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleDeleteVideo}
                title="លុបវីដេអូ"
                message="តើអ្នកប្រាកដជាចង់លុបវីដេអូនេះមែនទេ?"
            />
        </View>
    );
}
