import { useState, useEffect, useLayoutEffect } from 'react';
import { View, ScrollView, Pressable, Image, ActivityIndicator } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { UserPlus, UserCheck, BookOpen, Video, MessageSquare } from 'lucide-react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import ContentError from '@/components/common/ContentError';
import Blogs from '@/components/screens/users/Blogs';
import Videos from '@/components/screens/users/Videos';
import Forums from '@/components/screens/users/Forums';
import { userProfileService } from '@/services/index';
import { User } from '@core-types/content/profile';
import { useAuth } from '@/hooks/useAuth';
import { meFollowService } from '@/services/index';
import { useNavigation } from '@react-navigation/native';
import { HEADER_CONFIG } from '@/constants/header-config';

const tabs = [
    { id: 'blogs', label: 'ប្លុក', icon: BookOpen },
    { id: 'videos', label: 'វីដេអូ', icon: Video },
    { id: 'forums', label: 'ការពិភាក្សា', icon: MessageSquare }
];

export default function UserProfilePage() {
    const navigation = useNavigation();
    const { id } = useLocalSearchParams<{ id: string }>();
    const userId = id as string;
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('blogs');
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isFollowLoading, setIsFollowLoading] = useState(false);
    const [avatarError, setAvatarError] = useState(false);
    const { user: currentUser } = useAuth();

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
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user:', error);
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

        // Check if user is logged in
        if (!currentUser) {
            router.replace('/auth');
            return;
        }

        // Prevent following self
        if (currentUser.id === user.id) {
            return;
        }

        try {
            setIsFollowLoading(true);

            if (user.isFollowing) {
                await meFollowService.unfollowUser(Number(userId));
            } else {
                await meFollowService.followUser(Number(userId));
            }

            setUser(prev => prev ? {
                ...prev,
                isFollowing: !prev.isFollowing,
                numberOfFollowers: prev.isFollowing ? prev.numberOfFollowers - 1 : prev.numberOfFollowers + 1
            } : null);
        } catch (error) {
            console.error('Error toggling follow:', error);
        } finally {
            setIsFollowLoading(false);
        }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'blogs':
                return <Blogs userId={userId} />;
            case 'videos':
                return <Videos userId={userId} />;
            case 'forums':
                return <Forums userId={userId} />;
            default:
                return <Blogs userId={userId} />;
        }
    };

    if (isLoading) {
        return (
            <ScrollView style={tw("flex-1 bg-gray-50")} contentContainerStyle={tw("p-4 pt-20")}>
                <View style={tw("bg-white rounded-3xl p-6 shadow-sm border border-gray-200 mb-6")}>
                    <View style={tw("flex-col items-center gap-6 mb-6")}>
                        <View style={tw("w-24 h-24 bg-gray-200 rounded-full")} />
                        <View style={tw("flex-1 w-full items-center")}>
                            <View style={tw("h-8 bg-gray-200 rounded w-64 mb-2")} />
                            <View style={tw("h-4 bg-gray-200 rounded w-48 mb-4")} />
                            <View style={tw("h-10 bg-gray-200 rounded w-32")} />
                        </View>
                    </View>
                </View>
                <View style={tw("bg-white rounded-3xl p-6 shadow-sm border border-gray-200")}>
                    <View style={tw("h-6 bg-gray-200 rounded w-32 mb-4")} />
                    <View style={tw("gap-4")}>
                        <View style={tw("h-4 bg-gray-200 rounded w-full")} />
                        <View style={tw("h-4 bg-gray-200 rounded w-3/4")} />
                    </View>
                </View>
            </ScrollView>
        );
    }

    if (error) {
        return (
            <View style={tw("flex-1 bg-gray-50 pt-20")}>
                <View style={tw("p-4")}>
                    <ContentError
                        type="error"
                        message={error}
                    />
                </View>
            </View>
        );
    }

    if (!user) {
        return (
            <View style={tw("flex-1 bg-gray-50 pt-20")}>
                <View style={tw("p-4")}>
                    <ContentError
                        type="error"
                        message="មិនអាចរកឃើញអ្នកប្រើប្រាស់នេះទេ។"
                    />
                </View>
            </View>
        );
    }

    return (
        <View style={tw("flex-1 bg-gray-50")}>
            <ScrollView
                style={tw("flex-1")}
                contentContainerStyle={tw("p-4 pt-20")}
                showsVerticalScrollIndicator={false}
            >
                {/* Profile Header */}
                <View style={tw("bg-white rounded-3xl p-6 shadow-sm border border-gray-200 mb-6")}>
                    <View style={tw("flex-col items-center gap-6 mb-6")}>
                        {/* Avatar */}
                        <View style={tw("w-24 h-24 rounded-full bg-indigo-600 items-center justify-center overflow-hidden")}>
                            {user.profileImage && !avatarError ? (
                                <Image
                                    source={{ uri: user.profileImage }}
                                    style={tw("w-full h-full")}
                                    resizeMode="cover"
                                    onError={() => setAvatarError(true)}
                                />
                            ) : (
                                <Text style={tw("text-white font-kh-bold text-2xl")}>
                                    {user.username.charAt(0).toUpperCase()}
                                </Text>
                            )}
                        </View>

                        {/* User Info */}
                        <View style={tw("flex-1 w-full items-center")}>
                            <View style={tw("flex-col items-center gap-2 mb-2")}>
                                <View style={tw("flex-row items-center gap-2")}>
                                    <Text style={tw("text-2xl font-kh-bold text-gray-900")}>
                                        {user.firstName && user.lastName
                                            ? `${user.firstName} ${user.lastName}`.trim()
                                            : user.username
                                        }
                                    </Text>
                                    {user.isVerified && (
                                        <View style={tw("flex-row items-center gap-1")}>
                                            <Text style={tw("text-indigo-600 text-xs font-kh-medium")}>
                                                ✓ Verified
                                            </Text>
                                        </View>
                                    )}
                                </View>
                                {user.firstName && user.lastName && user.username !== `${user.firstName} ${user.lastName}`.trim() && (
                                    <Text style={tw("text-sm text-gray-500")}>@{user.username}</Text>
                                )}
                            </View>

                            {user.bio && (
                                <Text style={tw("text-gray-600 mb-4 text-center")}>
                                    {user.bio}
                                </Text>
                            )}

                            {/* Additional Info */}
                            <View style={tw("flex-col items-center gap-4 mb-4")}>
                                <View style={tw("flex-row items-center gap-2")}>
                                    <Text style={tw("text-sm text-gray-600")}>
                                        ចូលរួម {new Date(user.createdAt).toLocaleDateString('km-KH')}
                                    </Text>
                                </View>
                                {user.location && (
                                    <View style={tw("flex-row items-center gap-2")}>
                                        <Text style={tw("text-sm text-gray-600")}>
                                            {user.location}
                                        </Text>
                                    </View>
                                )}
                            </View>
                        </View>

                        {/* Follow Button - Only show if not current user's profile */}
                        {currentUser && currentUser.id !== user.id && (
                            <Pressable
                                onPress={handleFollow}
                                disabled={isFollowLoading}
                                style={tw(
                                    `px-6 py-2 rounded-lg ${user.isFollowing
                                        ? 'bg-gray-100'
                                        : 'bg-indigo-600'
                                    } ${isFollowLoading ? 'opacity-50' : ''}`
                                )}
                            >
                                {isFollowLoading ? (
                                    <View style={tw("flex-row items-center gap-2")}>
                                        <ActivityIndicator size="small" color={user.isFollowing ? "#374151" : "#FFFFFF"} />
                                        <Text style={tw(`text-sm font-kh-medium ${user.isFollowing ? 'text-gray-700' : 'text-white'}`)}>
                                            {user.isFollowing ? 'កំពុងបញ្ឈប់' : 'កំពុងតាមដាន'}
                                        </Text>
                                    </View>
                                ) : user.isFollowing ? (
                                    <View style={tw("flex-row items-center gap-2")}>
                                        <UserCheck size={16} color="#374151" />
                                        <Text style={tw("text-sm font-kh-medium text-gray-700")}>
                                            បានតាមដាន
                                        </Text>
                                    </View>
                                ) : (
                                    <View style={tw("flex-row items-center gap-2")}>
                                        <UserPlus size={16} color="#FFFFFF" />
                                        <Text style={tw("text-sm font-kh-medium text-white")}>
                                            តាមដាន
                                        </Text>
                                    </View>
                                )}
                            </Pressable>
                        )}
                    </View>

                    {/* Stats Grid */}
                    <View style={tw("flex-row flex-wrap gap-4")}>
                        <View style={tw("flex-1 min-w-[30%] items-center p-4 bg-gray-50 rounded-lg border border-indigo-500/20")}>
                            <Text style={tw("text-2xl font-kh-bold text-gray-900")}>
                                {user.numberOfFollowers}
                            </Text>
                            <Text style={tw("text-sm text-gray-600")}>អ្នកតាមដាន</Text>
                        </View>
                        <View style={tw("flex-1 min-w-[30%] items-center p-4 bg-gray-50 rounded-lg border border-indigo-500/20")}>
                            <Text style={tw("text-2xl font-kh-bold text-gray-900")}>
                                {user.numberOfFollowing}
                            </Text>
                            <Text style={tw("text-sm text-gray-600")}>កំពុងតាមដាន</Text>
                        </View>
                        <View style={tw("flex-1 min-w-[30%] items-center p-4 bg-gray-50 rounded-lg border border-indigo-500/20")}>
                            <Text style={tw("text-2xl font-kh-bold text-gray-900")}>
                                {user.totalLikesAndSaves}
                            </Text>
                            <Text style={tw("text-sm text-gray-600")}>ចូលចិត្ត និងរក្សាទុក</Text>
                        </View>
                    </View>
                </View>

                {/* Tab Navigation */}
                <View style={tw("bg-white rounded-3xl shadow-sm border border-gray-200 mb-6")}>
                    <View style={tw("flex-row border-b border-gray-200")}>
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <Pressable
                                    key={tab.id}
                                    onPress={() => setActiveTab(tab.id)}
                                    style={tw(
                                        `flex-1 flex-row items-center justify-center gap-2 px-6 py-4 ${activeTab === tab.id
                                            ? 'border-b-2 border-indigo-600 bg-indigo-50'
                                            : ''
                                        }`
                                    )}
                                >
                                    <Icon size={16} color={activeTab === tab.id ? '#4F46E5' : '#6B7280'} />
                                    <Text
                                        style={tw(
                                            `text-sm font-kh-medium ${activeTab === tab.id
                                                ? 'text-indigo-600'
                                                : 'text-gray-600'
                                            }`
                                        )}
                                    >
                                        {tab.label}
                                    </Text>
                                </Pressable>
                            );
                        })}
                    </View>
                </View>

                {/* Tab Content */}
                <View style={tw("bg-white rounded-3xl shadow-sm border border-gray-200")}>
                    {renderTabContent()}
                </View>
            </ScrollView>
        </View>
    );
}

