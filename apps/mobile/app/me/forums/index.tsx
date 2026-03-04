import { useState, useEffect, useLayoutEffect } from 'react';
import { View, ScrollView, Pressable } from 'react-native';
import { useRouter, Href } from 'expo-router';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import Sidebar from '@/components/screens/me/Sidebar';
import ContentError from '@/components/common/ContentError';
import {
    MessageSquare,
    Plus,
    Eye,
    Heart,
} from 'lucide-react-native';
import { ForumPost } from '@core-types/content/forums';
import { meForumService } from '@/services/index';
import ForumCard from '@/components/screens/me/forums/ForumCard';
import MeSkeleton from '@/components/screens/me/MeSkeleton';
import { useAuth } from '@/hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { HEADER_CONFIG } from '@/constants/header-config';

export default function MyForums() {
    const navigation = useNavigation();
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();
    const [forumPosts, setForumPosts] = useState<ForumPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'វេទិការបស់ខ្ញុំ',
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
        if (user) {
            const fetchForums = async () => {
                try {
                    setIsLoading(true);
                    setError(null);
                    const forums = await meForumService.getUserForums();
                    setForumPosts(forums.data);
                } catch (error) {
                    console.error('Error fetching forums:', error);
                    setError('មានបញ្ហាកើតឡើងពេលទាញយកទិន្នន័យ។ សូមព្យាយាមម្តងទៀត។');
                } finally {
                    setIsLoading(false);
                }
            };
            fetchForums();
        }
    }, [user]);

    let stats = {
        total: 0,
        totalViews: 0,
        totalLikes: 0,
    };

    if (forumPosts) {
        stats = {
            total: forumPosts.length,
            totalViews: forumPosts.reduce((acc, p) => acc + p.viewCount, 0),
            totalLikes: forumPosts.reduce((acc, p) => acc + p.likeCount, 0),
        };
    }

    // Show loading while checking auth or fetching data
    if (authLoading || isLoading) {
        return (
            <View style={tw("flex-1 bg-gray-50")}>
                <Sidebar />
                <View style={tw("flex-1")}>
                    <MeSkeleton />
                </View>
            </View>
        );
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
                        វេទិការបស់ខ្ញុំ
                    </Text>
                    <Text style={tw("text-gray-600")}>
                        គ្រប់គ្រងអត្ថបទនិងការសន្ទនារបស់អ្នក
                    </Text>
                </View>

                {/* Stats Cards */}
                <View style={tw("flex-row flex-wrap gap-4 mb-8")}>
                    <View style={tw("flex-1 min-w-[48%] lg:min-w-[31%] bg-white rounded-3xl p-6 shadow-sm border border-gray-200")}>
                        <View style={tw("flex-row items-center justify-between")}>
                            <View>
                                <Text style={tw("text-sm font-kh-medium text-gray-600")}>អត្ថបទសរុប</Text>
                                <Text style={tw("text-2xl font-kh-bold text-gray-900")}>
                                    {stats.total}
                                </Text>
                            </View>
                            <View style={tw("p-3 bg-indigo-100 rounded-full")}>
                                <MessageSquare size={24} color="#4F46E5" />
                            </View>
                        </View>
                    </View>

                    <View style={tw("flex-1 min-w-[48%] lg:min-w-[31%] bg-white rounded-3xl p-6 shadow-sm border border-gray-200")}>
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

                    <View style={tw("flex-1 min-w-[48%] lg:min-w-[31%] bg-white rounded-3xl p-6 shadow-sm border border-gray-200")}>
                        <View style={tw("flex-row items-center justify-between")}>
                            <View>
                                <Text style={tw("text-sm font-kh-medium text-gray-600")}>ចូលចិត្តសរុប</Text>
                                <Text style={tw("text-2xl font-kh-bold text-indigo-600")}>
                                    {stats.totalLikes}
                                </Text>
                            </View>
                            <View style={tw("p-3 bg-indigo-100 rounded-full")}>
                                <Heart size={24} color="#4F46E5" />
                            </View>
                        </View>
                    </View>
                </View>

                {/* Forum Posts List */}
                <View style={tw("bg-white rounded-3xl shadow-sm border border-gray-200")}>
                    <View style={tw("p-6 border-b border-gray-200")}>
                        <View style={tw("flex-row items-center justify-between")}>
                            <Text style={tw("text-lg font-kh-semibold text-gray-900")}>អត្ថបទវេទិកា</Text>
                            <Pressable
                                onPress={() => router.push('/me/create-forum' as Href)}
                                style={tw("flex-row items-center gap-2 px-4 py-2 bg-indigo-600 rounded-full")}
                            >
                                <Plus size={16} color="white" />
                                <Text style={tw("text-white font-kh-medium text-sm")}>
                                    បង្កើតអត្ថបទថ្មី
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={tw("p-6")}>
                        {error ? (
                            <ContentError type="error" message={error} />
                        ) : !forumPosts || forumPosts.length === 0 ? (
                            <ContentError type="no-results" message="អ្នកមិនទាន់មានអត្ថបទវេទិកាណាមួយទេ" />
                        ) : (
                            <View style={tw("flex-row flex-wrap gap-4")}>
                                {forumPosts.map((post) => (
                                    <View key={post.id} style={tw("w-full sm:w-[48%] lg:w-[31%]")}>
                                        <ForumCard post={post} isFromMePage={true} />
                                    </View>
                                ))}
                            </View>
                        )}
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

