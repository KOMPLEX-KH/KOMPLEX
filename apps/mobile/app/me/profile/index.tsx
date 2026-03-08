import { useState, useEffect, useLayoutEffect } from 'react';
import { View, ScrollView, Image, Pressable } from 'react-native';
import { useRouter } from 'expo-router';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import Sidebar from '@/components/screens/me/Sidebar';
import ContentError from '@/components/common/ContentError';
import { authService } from '@/services/index';
import { Profile } from '@core-types/api-types/profile';
import { Mail, Calendar, Phone, User as UserIcon, AtSign, ShieldCheck, ShieldAlert, UserCircle } from 'lucide-react-native';
import { useAuth } from '@/hooks/useAuth';
import { useNavigation } from '@react-navigation/native';
import { HEADER_CONFIG } from '@/constants/header-config';

export default function ProfilePage() {
    const navigation = useNavigation();
    const { user: authUser, loading: authLoading } = useAuth();
    const router = useRouter();
    const [user, setUser] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [avatarError, setAvatarError] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'ប្រវត្តិរបស់ខ្ញុំ',
            ...HEADER_CONFIG,
        });
    }, [navigation]);

    // Redirect to auth if not authenticated
    useEffect(() => {
        if (!authLoading && !authUser) {
            router.replace('/auth');
        }
    }, [authUser, authLoading, router]);

    useEffect(() => {
        if (authUser) {
            const fetchProfile = async () => {
                try {
                    setLoading(true);
                    setError(null);
                    const userData = await authService.getCurrentUserProfile();
                    setUser(userData.data);
                } catch (error) {
                    console.error('Error fetching profile:', error);
                    setError('មានបញ្ហាក្នុងការទាញយកព័ត៌មានប្រវត្តិ។ សូមព្យាយាមម្តងទៀត។');
                    setUser(null);
                } finally {
                    setLoading(false);
                }
            };
            fetchProfile();
        }
    }, [authUser]);

    // Show loading while checking auth or fetching data
    if (authLoading || loading) {
        return (
            <View style={tw("flex-1 bg-gray-50")}>
                <Sidebar />
                <View style={tw("flex-1 pt-20")}>
                    <ScrollView contentContainerStyle={tw("p-4")}>
                        {/* Header Skeleton */}
                        <View style={tw("mb-8")}>
                            <View style={tw("h-8 bg-gray-200 rounded w-2/3 mb-2")} />
                            <View style={tw("h-4 bg-gray-200 rounded w-3/4")} />
                        </View>

                        {/* Profile Card Skeleton */}
                        <View style={tw("bg-white border border-gray-200 rounded-3xl p-6")}>
                            <View style={tw("flex-col gap-4 mb-6")}>
                                <View style={tw("flex-row items-center gap-4")}>
                                    <View style={tw("w-16 h-16 bg-gray-200 rounded-full")} />
                                    <View>
                                        <View style={tw("h-6 bg-gray-200 rounded w-32 mb-2")} />
                                        <View style={tw("h-4 bg-gray-200 rounded w-24")} />
                                    </View>
                                </View>
                            </View>

                            <View style={tw("h-px bg-gray-200 mb-6")} />

                            <View style={tw("flex-row flex-wrap gap-4")}>
                                {[...Array(6)].map((_, i) => (
                                    <View key={i} style={tw("flex-1 min-w-[48%] bg-gray-50 rounded-xl p-4")}>
                                        <View style={tw("flex-row items-center gap-3")}>
                                            <View style={tw("w-7 h-7 bg-gray-200 rounded-lg")} />
                                            <View style={tw("flex-1")}>
                                                <View style={tw("h-3 bg-gray-200 rounded w-16 mb-2")} />
                                                <View style={tw("h-4 bg-gray-200 rounded w-20")} />
                                            </View>
                                        </View>
                                    </View>
                                ))}
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        );
    }

    // Don't render anything if not authenticated (will redirect)
    if (!authUser) {
        return null;
    }

    // Handle all error states at the top level
    if (error) {
        return (
            <View style={tw("flex-1 bg-gray-50")}>
                <Sidebar />
                <View style={tw("flex-1 pt-20")}>
                    <View style={tw("p-4")}>
                        <View style={tw("mb-8")}>
                            <View style={tw("flex-row items-center gap-3 mb-2")}>
                                <UserCircle size={32} color="#4F46E5" />
                                <Text style={tw("text-3xl font-kh-bold text-gray-900")}>
                                    ប្រវត្តិរបស់ខ្ញុំ
                                </Text>
                            </View>
                            <Text style={tw("text-gray-600")}>
                                ព័ត៌មានផ្ទាល់ខ្លួននិងការកំណត់
                            </Text>
                        </View>
                        <ContentError type="error" message={error} />
                    </View>
                </View>
            </View>
        );
    }

    if (!user) {
        return (
            <View style={tw("flex-1 bg-gray-50")}>
                <Sidebar />
                <View style={tw("flex-1 pt-20")}>
                    <View style={tw("p-4")}>
                        <View style={tw("mb-8")}>
                            <View style={tw("flex-row items-center gap-3 mb-2")}>
                                <UserCircle size={32} color="#4F46E5" />
                                <Text style={tw("text-3xl font-kh-bold text-gray-900")}>
                                    ប្រវត្តិរបស់ខ្ញុំ
                                </Text>
                            </View>
                            <Text style={tw("text-gray-600")}>
                                ព័ត៌មានផ្ទាល់ខ្លួននិងការកំណត់
                            </Text>
                        </View>
                        <View style={tw("bg-white border border-gray-200 rounded-3xl p-12 items-center")}>
                            <View style={tw("w-16 h-16 rounded-full bg-gray-100 items-center justify-center mb-4")}>
                                <UserCircle size={32} color="#9CA3AF" />
                            </View>
                            <Text style={tw("text-lg font-kh-medium text-gray-900 mb-2")}>
                                អ្នកមិនទាន់បានចូលគណនីទេ
                            </Text>
                            <Text style={tw("text-gray-500 mb-6 text-center")}>
                                សូមចូលគណនីដើម្បីមើលព័ត៌មានប្រវត្តិរបស់អ្នក
                            </Text>
                            <Pressable
                                onPress={() => router.replace('/auth')}
                                style={tw("flex-row items-center gap-2 px-6 py-3 bg-indigo-600 rounded-lg")}
                            >
                                <Text style={tw("text-white font-kh-medium")}>
                                    ចូលទៅកាន់
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </View>
        );
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
                    <View style={tw("flex-row items-center gap-3 mb-2")}>
                        <UserCircle size={32} color="#4F46E5" />
                        <Text style={tw("text-3xl font-kh-bold text-gray-900")}>
                            ប្រវត្តិរបស់ខ្ញុំ
                        </Text>
                    </View>
                    <Text style={tw("text-gray-600")}>
                        ព័ត៌មានផ្ទាល់ខ្លួននិងការកំណត់
                    </Text>
                </View>

                {/* Profile Card */}
                <View style={tw("bg-white border border-gray-200 rounded-3xl p-6 shadow-sm")}>
                    <View style={tw("flex-row items-start justify-between gap-4 mb-6")}>
                        <View style={tw("flex-row items-center gap-4")}>
                            {user.profileImage && !avatarError ? (
                                <Image
                                    source={{ uri: user.profileImage }}
                                    style={tw("w-20 h-20 rounded-full border-2 border-indigo-500")}
                                    resizeMode="cover"
                                    onError={() => setAvatarError(true)}
                                />
                            ) : (
                                <View style={tw("w-20 h-20 rounded-full bg-indigo-600 items-center justify-center")}>
                                    <Text style={tw("text-white text-2xl font-kh-bold")}>
                                        {((`${user.firstName || ''} ${user.lastName || ''}`.trim()) || user.username || user.email || 'U').charAt(0)}
                                    </Text>
                                </View>
                            )}
                            <View>
                                <View style={tw("flex-row items-center gap-3 flex-wrap mb-1")}>
                                    <Text style={tw("text-2xl font-kh-semibold text-gray-900")}>
                                        {`${user.firstName || ''} ${user.lastName || ''}`.trim() || user.username}
                                    </Text>
                                    {user.isVerified && (
                                        <View style={tw("flex-row items-center gap-1 px-2 py-1 bg-green-100 rounded-full")}>
                                            <ShieldCheck size={12} color="#10B981" />
                                            <Text style={tw("text-green-700 text-xs font-kh-medium")}>
                                                បានផ្ទៀងផ្ទាត់
                                            </Text>
                                        </View>
                                    )}
                                </View>
                                <View style={tw("flex-row items-center gap-2 mt-1")}>
                                    <Mail size={16} color="#6B7280" />
                                    <Text style={tw("text-sm text-gray-600")}>
                                        {user.email}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={tw("h-px bg-gray-200 mb-6")} />

                    <View style={tw("flex-row flex-wrap gap-4")}>
                        <View style={tw("flex-1 min-w-[48%] bg-white rounded-full p-4 border border-gray-200")}>
                            <View style={tw("flex-row items-center gap-3")}>
                                <View style={tw("p-2 rounded-lg bg-indigo-100")}>
                                    <AtSign size={16} color="#4F46E5" />
                                </View>
                                <View>
                                    <Text style={tw("text-xs text-gray-500 font-kh-medium")}>
                                        ឈ្មោះអ្នកប្រើប្រាស់
                                    </Text>
                                    <Text style={tw("text-gray-900 font-kh-semibold")}>
                                        {user.username}
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View style={tw("flex-1 min-w-[48%] bg-white rounded-full p-4 border border-gray-200")}>
                            <View style={tw("flex-row items-center gap-3")}>
                                <View style={tw("p-2 rounded-lg bg-indigo-100")}>
                                    <UserIcon size={16} color="#4F46E5" />
                                </View>
                                <View>
                                    <Text style={tw("text-xs text-gray-500 font-kh-medium")}>
                                        ឈ្មោះ
                                    </Text>
                                    <Text style={tw("text-gray-900 font-kh-semibold")}>
                                        {user.firstName || '-'}
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View style={tw("flex-1 min-w-[48%] bg-white rounded-full p-4 border border-gray-200")}>
                            <View style={tw("flex-row items-center gap-3")}>
                                <View style={tw("p-2 rounded-lg bg-indigo-100")}>
                                    <UserIcon size={16} color="#4F46E5" />
                                </View>
                                <View>
                                    <Text style={tw("text-xs text-gray-500 font-kh-medium")}>
                                        នាមត្រកូល
                                    </Text>
                                    <Text style={tw("text-gray-900 font-kh-semibold")}>
                                        {user.lastName || '-'}
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View style={tw("flex-1 min-w-[48%] bg-white rounded-full p-4 border border-gray-200")}>
                            <View style={tw("flex-row items-center gap-3")}>
                                <View style={tw("p-2 rounded-lg bg-indigo-100")}>
                                    <Calendar size={16} color="#4F46E5" />
                                </View>
                                <View>
                                    <Text style={tw("text-xs text-gray-500 font-kh-medium")}>
                                        ថ្ងៃខែឆ្នាំកំណើត
                                    </Text>
                                    <Text style={tw("text-gray-900 font-kh-semibold")}>
                                        {user.dateOfBirth || '-'}
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View style={tw("flex-1 min-w-[48%] bg-white rounded-full p-4 border border-gray-200")}>
                            <View style={tw("flex-row items-center gap-3")}>
                                <View style={tw("p-2 rounded-lg bg-indigo-100")}>
                                    <Phone size={16} color="#4F46E5" />
                                </View>
                                <View>
                                    <Text style={tw("text-xs text-gray-500 font-kh-medium")}>
                                        លេខទូរស័ព្ទ
                                    </Text>
                                    <Text style={tw("text-gray-900 font-kh-semibold")}>
                                        {user.phone || '-'}
                                    </Text>
                                </View>
                            </View>
                        </View>

                        <View style={tw("flex-1 min-w-[48%] bg-white rounded-full p-4 border border-gray-200")}>
                            <View style={tw("flex-row items-center gap-3")}>
                                <View style={tw(`p-2 rounded-lg ${user.isVerified ? 'bg-green-100' : 'bg-amber-100'}`)}>
                                    {user.isVerified ? (
                                        <ShieldCheck size={16} color="#10B981" />
                                    ) : (
                                        <ShieldAlert size={16} color="#F59E0B" />
                                    )}
                                </View>
                                <View>
                                    <Text style={tw("text-xs text-gray-500 font-kh-medium")}>
                                        ស្ថានភាព
                                    </Text>
                                    <Text style={tw("text-gray-900 font-kh-semibold")}>
                                        {user.isVerified ? 'បានផ្ទៀងផ្ទាត់' : 'មិនទាន់ផ្ទៀងផ្ទាត់'}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

