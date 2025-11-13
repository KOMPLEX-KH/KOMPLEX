import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { View, ScrollView, Pressable, ActivityIndicator, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import Sidebar from '@/components/screens/me/Sidebar';
import MeSkeleton from '@/components/screens/me/MeSkeleton';
import { useAuth } from '@/hooks/useAuth';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import VideoUpload, { PickedVideo } from '@/components/screens/me/create-video/VideoUpload';
import Description from '@/components/screens/me/create-video/Description';
import { uploadService, meVideoService } from '@/services/index';
import { BackButton } from '@/components/common/BackButton';
import { HEADER_CONFIG } from '@/constants/header-config';
import { Save } from 'lucide-react-native';

export default function CreateVideoScreen() {
    const navigation = useNavigation();
    const router = useRouter();
    const { user, loading: authLoading } = useAuth();

    const [video, setVideo] = useState<PickedVideo | undefined>(undefined);
    const [thumbnailUri, setThumbnailUri] = useState<string | undefined>(undefined);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [durationSeconds, setDurationSeconds] = useState<number>(0);
    const [isUploading, setIsUploading] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'បង្ហោះវីដេអូ',
            ...HEADER_CONFIG,
        });
    }, [navigation]);

    useEffect(() => {
        if (!authLoading && !user) {
            router.replace('/auth');
        }
    }, [authLoading, user, router]);

    const pickVideo = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({
                type: 'video/*',
                multiple: false,
                copyToCacheDirectory: true,
            });

            if (result.canceled || !result.assets?.length) {
                return;
            }

            const asset = result.assets[0];
            setVideo({
                uri: asset.uri,
                name: asset.name,
                size: asset.size,
                type: asset.mimeType,
            });
            setDurationSeconds(0);
        } catch (error) {
            console.error('Error picking video:', error);
            Alert.alert('បរាជ័យ', 'មិនអាចជ្រើសរើសវីដេអូបានទេ');
        }
    };

    const pickThumbnail = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('ការអនុញ្ញាត', 'សូមផ្តល់ការអនុញ្ញាតដើម្បីជ្រើសរើសរូបភាព');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.8,
            allowsEditing: true,
        });

        if (result.canceled || !result.assets?.length) {
            return;
        }

        setThumbnailUri(result.assets[0].uri);
    };

    const canSubmit = useMemo(() => {
        return Boolean(video && title.trim() && description.trim() && thumbnailUri && durationSeconds > 0);
    }, [video, title, description, thumbnailUri, durationSeconds]);

    const handleUpload = async () => {
        if (!video || !thumbnailUri) return;
        try {
            setIsUploading(true);

            const videoKey = await uploadService.uploadUri(video.uri, {
                fileName: video.name,
                mimeType: video.type,
            });

            const thumbnailKey = await uploadService.uploadUri(thumbnailUri, {
                fileName: `thumbnail_${Date.now()}.jpg`,
                mimeType: 'image/jpeg',
            });

            await meVideoService.createVideo({
                videoKey,
                title: title.trim(),
                description: description.trim(),
                duration: Math.round(durationSeconds),
                thumbnailKey,
                questions: undefined,
            });

            Alert.alert('បានជោគជ័យ', 'វីដេអូត្រូវបានបង្ហោះដោយជោគជ័យ', [
                {
                    text: 'យល់ព្រម',
                    onPress: () => router.replace('/me/videos'),
                },
            ]);
        } catch (error) {
            console.error('Error uploading video:', error);
            Alert.alert('បរាជ័យ', 'មានបញ្ហាកើតឡើងពេលផ្ទុកវីដេអូ សូមព្យាយាមម្ដងទៀត');
        } finally {
            setIsUploading(false);
        }
    };

    if (authLoading) {
        return <MeSkeleton />;
    }

    if (!user) {
        return null;
    }

    return (
        <View style={tw('flex-1 bg-gray-50')}>
            <Sidebar />
            <ScrollView
                style={tw('flex-1')}
                contentContainerStyle={tw('p-4 pt-20 gap-6 pb-24')}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >
                <BackButton href="/me/videos" />

                <VideoUpload
                    video={video}
                    onPickVideo={pickVideo}
                    onRemoveVideo={() => {
                        setVideo(undefined);
                        setDurationSeconds(0);
                    }}
                    onDurationChange={setDurationSeconds}
                />

                <Description
                    title={title}
                    description={description}
                    thumbnail={thumbnailUri}
                    onTitleChange={setTitle}
                    onDescriptionChange={setDescription}
                    onPickThumbnail={pickThumbnail}
                />

                <Pressable
                    onPress={handleUpload}
                    disabled={!canSubmit || isUploading}
                    style={tw(
                        `self-center flex-row items-center gap-2 px-6 py-3 rounded-full ${!canSubmit || isUploading ? 'bg-indigo-200' : 'bg-indigo-600'
                        }`
                    )}
                >
                    {isUploading ? (
                        <ActivityIndicator color="#FFFFFF" size="small" />
                    ) : (
                        <Save size={16} color="white" />
                    )}
                    <Text style={tw('text-white font-kh-medium text-sm')}>
                        {isUploading ? 'កំពុងផ្ទុក...' : 'បង្ហោះវីដេអូ'}
                    </Text>
                </Pressable>

                {!canSubmit && !isUploading && (
                    <Text style={tw('text-xs text-center text-gray-500 font-kh-medium')}>
                        សូមជ្រើសរើសវីដេអូ រូបភាពតូច និងបំពេញព័ត៌មានទាំងអស់ជាមុនសិន
                    </Text>
                )}
            </ScrollView>
        </View>
    );
}
