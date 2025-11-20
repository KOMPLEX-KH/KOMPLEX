import { useEffect, useLayoutEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import Sidebar from '@/components/screens/me/Sidebar';
import { useAuth } from '@/hooks/useAuth';
import MeSkeleton from '@/components/screens/me/MeSkeleton';
import VideoHistoryComponent from '@/components/screens/me/videos/VideoHistory';
import { HEADER_CONFIG } from '@/constants/header-config';

export default function VideoHistoryPage() {
    const navigation = useNavigation();
    const router = useRouter();
    const { user, loading: authLoading } = useAuth();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'ប្រវត្តិវីដេអូ',
            ...HEADER_CONFIG,
        });
    }, [navigation]);

    useEffect(() => {
        if (!authLoading && !user) {
            router.replace('/auth');
        }
    }, [authLoading, user, router]);

    if (authLoading || (!authLoading && !user)) {
        return <MeSkeleton />;
    }

    return (
        <View style={tw('flex-1 bg-gray-50')}>
            <Sidebar />
            <ScrollView
                style={tw('flex-1')}
                contentContainerStyle={tw('p-4 pt-20 gap-6')}
                showsVerticalScrollIndicator={false}
            >
                <View style={tw('gap-2')}>
                    <Text style={tw('text-3xl font-kh-bold text-gray-900')}>
                        ប្រវត្តិវីដេអូ
                    </Text>
                    <Text style={tw('text-gray-600')}>
                        វីដេអូដែលអ្នកបានមើលពេលថ្មីៗ
                    </Text>
                </View>

                <VideoHistoryComponent />
            </ScrollView>
        </View>
    );
}
