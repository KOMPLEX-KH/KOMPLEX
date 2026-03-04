import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { View, ScrollView, Pressable, ActivityIndicator, Alert, TextInput, Image } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, useRouter } from 'expo-router';
import MeSkeleton from '@/components/screens/me/MeSkeleton';
import { useAuth } from '@/hooks/useAuth';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import { uploadService, meVideoService } from '@/services/index';
import { Upload, X, Image as ImageIcon } from 'lucide-react-native';
import { Video as ExpoVideo, ResizeMode } from 'expo-av';
import { HEADER_CONFIG } from '@/constants/header-config';

export interface PickedVideo {
    uri: string;
    name?: string;
    size?: number;
    type?: string;
}

export default function CreateVideoScreen() {
    const router = useRouter();
    const { user, loading: authLoading } = useAuth();

    const [video, setVideo] = useState<PickedVideo | undefined>(undefined);
    const [thumbnailUri, setThumbnailUri] = useState<string | undefined>(undefined);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [durationSeconds, setDurationSeconds] = useState<number>(0);
    const [isUploading, setIsUploading] = useState(false);
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'បង្កើតវីដេអូ',
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
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Videos,
                quality: 0.8,
                allowsEditing: true,
            });

            if (result.canceled || !result.assets?.length) {
                return;
            }

            const asset = result.assets[0];
            setVideo({
                uri: asset.uri,
                name: asset.fileName,
                size: asset.fileSize,
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

            const videoKey = await uploadService.getUploadUrl(video.name, video.type);

            const thumbnailKey = await uploadService.getUploadUrl(`thumbnail_${Date.now()}.jpg`, 'image/jpeg');

            await meVideoService.createVideo({
                videoKey: videoKey.data.key,
                title: title.trim(),
                description: description.trim(),
                duration: Math.round(durationSeconds),
                thumbnailKey: thumbnailKey.data.key,
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
            <ScrollView
                style={tw('flex-1')}
                contentContainerStyle={tw('p-6 pt-20 gap-6')}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View style={tw('')}>
                    {/* Video Upload */}
                    <View style={tw('mb-6')}>
                        {!video ? (
                            <Pressable
                                onPress={pickVideo}
                                style={tw('border-2 border-dashed border-gray-300 rounded-3xl p-20 items-center gap-3 bg-white')}
                            >
                                <Upload size={36} color="#6B7280" />
                                <Text style={tw('text-gray-600 font-kh-medium')}>ជ្រើសរើសវីដេអូ</Text>
                            </Pressable>
                        ) : (
                            <View style={tw('gap-3')}>
                                <View style={tw('relative rounded-3xl overflow-hidden bg-black')}>
                                    <ExpoVideo
                                        source={{ uri: video.uri }}
                                        useNativeControls
                                        resizeMode={ResizeMode.CONTAIN}
                                        style={tw('w-full h-48')}
                                        onLoad={(status) => {
                                            if ('durationMillis' in status && status.durationMillis) {
                                                setDurationSeconds(status.durationMillis / 1000);
                                            }
                                        }}
                                    />
                                    <Pressable
                                        onPress={() => {
                                            setVideo(undefined);
                                            setDurationSeconds(0);
                                        }}
                                        style={tw('absolute top-3 right-3 w-8 h-8 rounded-full bg-red-500 items-center justify-center')}
                                    >
                                        <X size={16} color="white" />
                                    </Pressable>
                                </View>
                            </View>
                        )}
                    </View>

                    {/* Title Input */}
                    <View style={tw('mb-6')}>
                        <Text style={tw('block text-sm font-kh-bold text-gray-700 mb-2')}>
                            ចំណងជើង
                        </Text>
                        <TextInput
                            value={title}
                            onChangeText={setTitle}
                            placeholder="សរសេរចំណងជើងវីដេអូ..."
                            placeholderTextColor="#9CA3AF"
                            style={tw('w-full bg-white px-4 py-3 border border-gray-300 rounded-full text-sm font-kh-medium text-gray-900')}
                        />
                    </View>

                    {/* Description */}
                    <View style={tw('mb-6')}>
                        <Text style={tw('block text-sm font-kh-bold text-gray-700 mb-2')}>
                            ការពិពណ៌នា
                        </Text>
                        <TextInput
                            value={description}
                            onChangeText={setDescription}
                            placeholder="សរសេរការពិពណ៌នាវីដេអូរបស់អ្នក..."
                            placeholderTextColor="#9CA3AF"
                            multiline
                            textAlignVertical="top"
                            style={[tw('border border-gray-300 bg-white rounded-3xl px-4 py-3 font-kh-medium text-base text-gray-900'), { minHeight: 200 }]}
                        />
                    </View>

                    {/* Submit Button */}
                    <Pressable
                        onPress={handleUpload}
                        disabled={!canSubmit || isUploading}
                        style={tw(
                            `w-full flex-row justify-center items-center gap-2 px-6 py-3 rounded-full ${!canSubmit || isUploading ? 'bg-indigo-200' : 'bg-indigo-600'
                            }`
                        )}
                    >
                        {isUploading ? (
                            <ActivityIndicator color="#FFFFFF" size="small" />
                        ) : (
                            <Upload size={16} color="white" />
                        )}
                        <Text style={tw('text-white font-kh-medium text-sm')}>
                            {isUploading ? 'កំពុងផ្ទុក...' : 'បង្ហោះវីដេអូ'}
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
}
