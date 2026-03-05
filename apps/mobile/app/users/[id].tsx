import { useState, useEffect, useLayoutEffect } from 'react';
import { View, ScrollView, Pressable, Image, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Video, MessageSquare, UserPlus, UserCheck } from 'lucide-react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import ContentError from '@/components/common/ContentError';
import Videos from '@/components/screens/users/Videos';
import Forums from '@/components/screens/users/Forums';
import { userProfileService, meFollowService } from '@/services/index';
import { useAuth } from '@/hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { HEADER_CONFIG } from '@/constants/header-config';
import { UserProfile } from '@core-types/api-types/profile';

type TabType = 'videos' | 'forums';

export default function UserProfilePage() {
    const navigation = useNavigation();
    const { id } = useLocalSearchParams<{ id: string }>();
    const userId = id as string;
    const router = useRouter();

    const { user: currentUser } = useAuth();

    const [activeTab, setActiveTab] = useState<TabType>('videos');
    const [user, setUser] = useState<UserProfile | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isFollowLoading, setIsFollowLoading] = useState(false);
    const [avatarError, setAvatarError] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'ប្រវត្តិរូប',
            ...HEADER_CONFIG,
        });
    }, [navigation]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const userData = await userProfileService.getUserProfile(userId);
                setUser(userData.data);
            } catch (err) {
                console.error('Error fetching user:', err);
                setError('មានបញ្ហាក្នុងការទាញយកព័ត៌មានអ្នកប្រើប្រាស់។ សូមព្យាយាមម្តងទៀត។');
            } finally {
                setIsLoading(false);
            }
        };

        if (userId) {
            fetchUser();
        }
    }, [userId]);

    const handleFollow = async () => {
        if (!user) return;
        if (!currentUser) {
            router.replace('/auth');
            return;
        }
        if (currentUser.id === user.id) return;

        try {
            setIsFollowLoading(true);
            if (user.isFollowing) {
                await meFollowService.unfollowUser(Number(userId));
            } else {
                await meFollowService.followUser(Number(userId));
            }
            setUser((prev) =>
                prev
                    ? {
                        ...prev,
                        isFollowing: !prev.isFollowing,
                        numberOfFollowers: prev.isFollowing ? prev.numberOfFollowers - 1 : prev.numberOfFollowers + 1,
                    }
                    : null
            );
        } catch (err) {
            console.error('Error toggling follow:', err);
        } finally {
            setIsFollowLoading(false);
        }
    };

    const getAvatar = (username: string) => username.charAt(0).toUpperCase();

    if (isLoading) {
        return (
            <View style={tw('flex-1 items-center justify-center bg-gray-50')}>
                <ActivityIndicator size="large" color="#4F46E5" />
            </View>
        );
    }

    if (error) {
        return (
            <View style={tw('flex-1 bg-gray-50 pt-20')}>
                <View style={tw('p-4')}>
                    <ContentError type="error" message={error} />
                </View>
            </View>
        );
    }

    if (!user) {
        return (
            <View style={tw('flex-1 bg-gray-50 pt-20')}>
                <View style={tw('p-4')}>
                    <ContentError type="error" message="មិនអាចរកឃើញអ្នកប្រើប្រាស់នេះទេ។" />
                </View>
            </View>
        );
    }

    return (
        <View style={tw('flex-1 bg-gray-50')}>
            <ScrollView style={tw('flex-1')} showsVerticalScrollIndicator={false}>
                {/* Profile Header */}
                <View style={tw('bg-white pb-6 pt-20 px-4')}>
                    <View style={tw('items-center mb-6')}>
                        {user.profileImage && !avatarError ? (
                            <Image
                                source={{ uri: user.profileImage }}
                                style={tw('w-24 h-24 rounded-full border-4 border-indigo-500')}
                                resizeMode="cover"
                                onError={() => setAvatarError(true)}
                            />
                        ) : (
                            <View style={tw('w-24 h-24 rounded-full bg-indigo-600 items-center justify-center border-4 border-indigo-500')}>
                                <Text style={tw('text-white font-kh-bold text-3xl')}>{getAvatar(user.username)}</Text>
                            </View>
                        )}
                        <Text style={tw('text-2xl font-kh-bold text-gray-900 mt-4')}>
                            {user.firstName && user.lastName
                                ? `${user.firstName} ${user.lastName}`.trim()
                                : user.username}
                        </Text>
                        {user.username && user.firstName && user.lastName && (
                            <Text style={tw('text-gray-500 mt-1')}>@{user.username}</Text>
                        )}
                        {user.bio ? (
                            <Text style={tw('text-gray-600 mt-2 text-center px-4')}>{user.bio}</Text>
                        ) : null}
                    </View>

                    {/* Follow Button */}
                    {currentUser && currentUser.id !== user.id && (
                        <View style={tw('items-center ')}>
                            <Pressable
                                onPress={handleFollow}
                                disabled={isFollowLoading}
                                style={tw(
                                    `px-6 py-2 rounded-full ${user.isFollowing ? 'bg-gray-100' : 'bg-indigo-600'} ${isFollowLoading ? 'opacity-50' : ''
                                    }`
                                )}
                            >
                                {isFollowLoading ? (
                                    <View style={tw('flex-row items-center gap-2')}>
                                        <ActivityIndicator size="small" color={user.isFollowing ? '#374151' : '#FFFFFF'} />
                                        <Text style={tw(`text-sm font-kh-medium ${user.isFollowing ? 'text-gray-700' : 'text-white'}`)}>
                                            {user.isFollowing ? 'កំពុងបញ្ឈប់' : 'កំពុងតាមដាន'}
                                        </Text>
                                    </View>
                                ) : user.isFollowing ? (
                                    <View style={tw('flex-row items-center gap-2')}>
                                        <UserCheck size={16} color="#374151" />
                                        <Text style={tw('text-sm font-kh-medium text-gray-700')}>បានតាមដាន</Text>
                                    </View>
                                ) : (
                                    <View style={tw('flex-row items-center gap-2')}>
                                        <UserPlus size={16} color="#FFFFFF" />
                                        <Text style={tw('text-sm font-kh-medium text-white')}>តាមដាន</Text>
                                    </View>
                                )}
                            </Pressable>
                        </View>
                    )}

                    {/* Stats Row */}
                    <View style={tw('flex-row justify-around border-t border-gray-200 pt-6')}>
                        <View style={tw('items-center')}>
                            <Text style={tw('text-2xl font-kh-bold text-gray-900')}>
                                {user.numberOfFollowers ?? 0}
                            </Text>
                            <Text style={tw('text-sm text-gray-600 mt-1')}>អ្នកតាម</Text>
                        </View>
                        <View style={tw('items-center')}>
                            <Text style={tw('text-2xl font-kh-bold text-gray-900')}>
                                {user.numberOfFollowing ?? 0}
                            </Text>
                            <Text style={tw('text-sm text-gray-600 mt-1')}>កំពុងតាម</Text>
                        </View>
                    </View>


                </View>

                {/* Tabs */}
                <View style={tw('bg-white border-b border-gray-200 px-4')}>
                    <View style={tw('flex-row justify-around')}>
                        <Pressable
                            onPress={() => setActiveTab('videos')}
                            style={tw(`flex-1 items-center py-4 border-b-2 ${activeTab === 'videos' ? 'border-indigo-600' : 'border-transparent'
                                }`)}
                        >
                            <Video size={24} color={activeTab === 'videos' ? '#4F46E5' : '#9CA3AF'} />
                        </Pressable>
                        <Pressable
                            onPress={() => setActiveTab('forums')}
                            style={tw(`flex-1 items-center py-4 border-b-2 ${activeTab === 'forums' ? 'border-indigo-600' : 'border-transparent'
                                }`)}
                        >
                            <MessageSquare size={24} color={activeTab === 'forums' ? '#4F46E5' : '#9CA3AF'} />
                        </Pressable>
                    </View>
                </View>

                {/* Tab Content */}
                <View style={tw('px-4 pt-6')}>
                    {activeTab === 'videos' ? (
                        <Videos userId={userId} />
                    ) : (
                        <Forums userId={userId} />
                    )}
                </View>
            </ScrollView>
        </View>
    );
}
