import { useState, useEffect, useLayoutEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import Sidebar from '@/components/screens/me/Sidebar';
import {
    MessageSquare,
    Video,
    Pencil,
} from 'lucide-react-native';
import { formatToKhmerDate } from '@core-utils/formater';
import api from '@/configs/axios';
import { useAuth } from '@/hooks/useAuth';
import MeSkeleton from '@/components/screens/me/MeSkeleton';
import { useNavigation } from '@react-navigation/native';
import { HEADER_CONFIG } from '@/constants/header-config';

interface RecentActivity {
    title: string;
    createdAt: string;
    contentType: string;
}

interface ContentStats {
    dashboardData: {
        numOfForums: number;
        numOfVideos: number;
        numOfExercises: number;
    };
    recentActivities: RecentActivity[];
}

const getContentTypeIcon = (contentType: string) => {
    switch (contentType) {
        case 'video':
            return (
                <View style={tw("p-2 rounded-full bg-green-100")}>
                    <Video size={16} color="#10B981" />
                </View>
            );
        case 'exercise':
            return (
                <View style={tw("p-2 rounded-full bg-purple-100")}>
                    <Pencil size={16} color="#9333EA" />
                </View>
            );
        case 'forum':
            return (
                <View style={tw("p-2 rounded-full bg-blue-100")}>
                    <MessageSquare size={16} color="#3B82F6" />
                </View>
            );
        default:
            return (
                <View style={tw("p-2 rounded-full bg-gray-100")}>
                    <Pencil size={16} color="#6B7280" />
                </View>
            );
    }
};

export default function MyContent() {
    const navigation = useNavigation();
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();
    const [stats, setStats] = useState<ContentStats>({
        dashboardData: {
            numOfForums: 0,
            numOfVideos: 0,
            numOfExercises: 0,
        },
        recentActivities: []
    });
    const [isLoading, setIsLoading] = useState(true);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'ផ្ទាំងគ្រប់គ្រង',
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
            const fetchStats = async () => {
                try {
                    setIsLoading(true);
                    const response = await api.get('/me/dashboard');
                    setStats(response.data);
                } catch (error) {
                    console.error('Error fetching dashboard stats:', error);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchStats();
        }
    }, [user]);

    // Show loading while checking auth or fetching data
    if (authLoading || isLoading) {
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
                        ផ្ទាំងគ្រប់គ្រង
                    </Text>
                    <Text style={tw("text-gray-600")}>
                        ស្វាគមន៍មកកាន់មាតិការបស់អ្នក និងមើលវឌ្ឍនភាពរបស់អ្នក
                    </Text>
                </View>

                {/* Stats Cards */}
                <View style={tw("flex-row flex-wrap gap-4 mb-8")}>
                    {/* Videos */}
                    <View style={tw("flex-1 min-w-[48%] bg-white rounded-3xl p-6 shadow-sm border border-gray-200")}>
                        <View style={tw("flex-row items-center justify-between")}>
                            <View>
                                <Text style={tw("text-sm font-kh-medium text-gray-600")}>វីដេអូ</Text>
                                <Text style={tw("text-2xl font-kh-bold text-gray-900")}>
                                    {stats.dashboardData.numOfVideos}
                                </Text>
                            </View>
                            <View style={tw("p-3 bg-green-100 rounded-full")}>
                                <Video size={24} color="#10B981" />
                            </View>
                        </View>
                    </View>

                    {/* Exercises */}
                    <View style={tw("flex-1 min-w-[48%] bg-white rounded-3xl p-6 shadow-sm border border-gray-200")}>
                        <View style={tw("flex-row items-center justify-between")}>
                            <View>
                                <Text style={tw("text-sm font-kh-medium text-gray-600")}>លំហាត់</Text>
                                <Text style={tw("text-2xl font-kh-bold text-gray-900")}>
                                    {stats.dashboardData.numOfExercises}
                                </Text>
                            </View>
                            <View style={tw("p-3 bg-purple-100 rounded-full")}>
                                <Pencil size={24} color="#9333EA" />
                            </View>
                        </View>
                    </View>

                    {/* Forums */}
                    <View style={tw("flex-1 min-w-[48%] bg-white rounded-3xl p-6 shadow-sm border border-gray-200")}>
                        <View style={tw("flex-row items-center justify-between")}>
                            <View>
                                <Text style={tw("text-sm font-kh-medium text-gray-600")}>វេទិកា</Text>
                                <Text style={tw("text-2xl font-kh-bold text-gray-900")}>
                                    {stats.dashboardData.numOfForums}
                                </Text>
                            </View>
                            <View style={tw("p-3 bg-blue-100 rounded-full")}>
                                <MessageSquare size={24} color="#3B82F6" />
                            </View>
                        </View>
                    </View>
                </View>

                {/* Recent Activity */}
                <View style={tw("bg-white rounded-3xl shadow-sm border border-gray-200")}>
                    <View style={tw("p-6 border-b border-gray-200")}>
                        <Text style={tw("text-lg font-kh-semibold text-gray-900")}>
                            សកម្មភាពថ្មីៗ
                        </Text>
                        <Text style={tw("text-sm text-gray-600")}>
                            សកម្មភាពថ្មីៗរបស់អ្នកនៅលើវេទិកា
                        </Text>
                    </View>
                    <View style={tw("p-6")}>
                        <View style={tw("gap-4")}>
                            {stats.recentActivities.map((activity, index) => {
                                const Icon = getContentTypeIcon(activity.contentType);
                                return (
                                    <View key={index} style={tw("flex-row items-center gap-4")}>
                                        <View style={tw("p-2 rounded-full")}>
                                            {Icon}
                                        </View>
                                        <View style={tw("flex-1")}>
                                            <Text style={tw("text-sm font-kh-medium text-gray-900")} numberOfLines={1}>
                                                {activity.title}
                                            </Text>
                                        </View>
                                        <Text style={tw("text-xs text-gray-500")}>
                                            {activity.createdAt.split('T')[0]}
                                        </Text>
                                    </View>
                                );
                            })}
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

