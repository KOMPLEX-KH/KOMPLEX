import { useEffect, useLayoutEffect, useState } from 'react';
import { View, ScrollView, Pressable, Alert, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { Edit, Trash } from 'lucide-react-native';
import Sidebar from '@/components/screens/me/Sidebar';
import MeSkeleton from '@/components/screens/me/MeSkeleton';
import { useAuth } from '@/hooks/useAuth';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import { feedForumService, meForumService } from '@/services/index';
import { ForumPost } from '@core-types/content/forums';
import DeleteConfirm from '@/components/common/DeleteConfirm';
import ContentError from '@/components/common/ContentError';
import EditForum from '@/components/screens/me/forums/EditForum';
import ForumCard from '@/components/screens/me/forums/ForumCard';
import Comments from '@/components/common/comments/Comments';
import { BackButton } from '@/components/common/BackButton';
import { HEADER_CONFIG } from '@/constants/header-config';

export default function MyForumDetailPage() {
    const navigation = useNavigation();
    const router = useRouter();
    const { id } = useLocalSearchParams<{ id: string }>();
    const { user, loading: authLoading } = useAuth();

    const [post, setPost] = useState<ForumPost | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'វេទិការបស់ខ្ញុំ',
            ...HEADER_CONFIG,
        });
    }, [navigation]);

    useEffect(() => {
        if (!authLoading && !user) {
            router.replace('/auth');
        }
    }, [authLoading, user, router]);

    useEffect(() => {
        const fetchForumPost = async () => {
            if (!id || !user) return;
            try {
                setIsLoading(true);
                setError(null);
                const forumPost = await feedForumService.getForumById(id.toString());
                setPost(forumPost.data);
            } catch (err) {
                console.error('Error fetching forum post:', err);
                setError('មានបញ្ហាកើតឡើងពេលទាញយកទិន្នន័យ។ សូមព្យាយាមម្ដងទៀត។');
            } finally {
                setIsLoading(false);
            }
        };

        fetchForumPost();
    }, [id, user]);

    const handleDeleteForum = async () => {
        if (!id) return;
        try {
            setIsDeleting(true);
            await meForumService.deleteForum(id.toString());
            setShowDeleteModal(false);
            router.replace('/me/forums');
        } catch (err) {
            console.error('Error deleting forum:', err);
            Alert.alert('បរាជ័យ', 'មានបញ្ហាកើតឡើងពេលលុបវេទិកា សូមព្យាយាមម្ដងទៀត');
        } finally {
            setIsDeleting(false);
        }
    };

    const handleCancelEdit = () => {
        setIsEditMode(false);
    };

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
                        <Text style={tw('mt-3 text-gray-500 font-kh-medium')}>កំពុងផ្ទុកវេទិកា...</Text>
                    </View>
                </View>
            </View>
        );
    }

    if (error || !post) {
        return (
            <View style={tw('flex-1 bg-gray-50')}>
                <Sidebar />
                <ScrollView
                    style={tw('flex-1')}
                    contentContainerStyle={tw('p-4 pt-20')}
                >
                    <BackButton href="/me/forums" />
                    <View style={tw('mt-6')}>
                        <ContentError type="error" message={error ?? 'មានបញ្ហាក្នុងការទាញយកអត្ថបទវេទិកា'} />
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
                    <EditForum forum={post} onCancel={handleCancelEdit} />
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
                <BackButton href="/me/forums" />

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

                <ForumCard post={post} isFromMePage={false} />

                <View style={tw('bg-white rounded-3xl p-4 border border-gray-200')}>
                    <Comments
                        type="forum"
                        parentId={post.id}
                        focusInput={false}
                        isReadOnly
                        onClose={() => {}}
                    />
                </View>
            </ScrollView>

            <DeleteConfirm
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleDeleteForum}
                title="លុបវេទិកា"
                message="តើអ្នកពិតជាចង់លុបវេទិកានេះមែនទេ?"
            />
        </View>
    );
}
