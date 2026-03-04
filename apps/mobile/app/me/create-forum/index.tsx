import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import { View, ScrollView, TextInput, Pressable, ActivityIndicator, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useRouter } from 'expo-router';
import { useNavigation } from '@react-navigation/native';
import MeSkeleton from '@/components/screens/me/MeSkeleton';
import { useAuth } from '@/hooks/useAuth';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import { meForumService } from '@/services/index';
import { HEADER_CONFIG } from '@/constants/header-config';
import { Plus, Trash } from 'lucide-react-native';

interface PickedImage {
    uri: string;
    mimeType?: string;
    fileName?: string;
}

export default function CreateForumScreen() {
    const navigation = useNavigation();
    const router = useRouter();
    const { user, loading: authLoading } = useAuth();

    const [title, setTitle] = useState('');
    const [bodyText, setBodyText] = useState('');
    const [titleCharCount, setTitleCharCount] = useState(0);
    const [selectedImages, setSelectedImages] = useState<PickedImage[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'បង្កើតការពិភាក្សា',
            ...HEADER_CONFIG,
        });
    }, [navigation]);

    useEffect(() => {
        if (!authLoading && !user) {
            router.replace('/auth');
        }
    }, [authLoading, user, router]);

    const handleTitleChange = (value: string) => {
        if (value.length <= 300) {
            setTitle(value);
            setTitleCharCount(value.length);
            if (error) setError('');
        }
    };

    const handleBodyTextChange = (value: string) => {
        setBodyText(value);
        if (error) setError('');
    };

    const isFormValid = useMemo(() => {
        return Boolean(title.trim() && bodyText.trim() && !error);
    }, [title, bodyText, error]);

    const pickImage = async () => {
        if (selectedImages.length >= 4) return;

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

        const asset = result.assets[0];
        setSelectedImages((prev) => [
            ...prev,
            {
                uri: asset.uri,
                mimeType: asset.mimeType ?? 'image/jpeg',
                fileName: asset.fileName ?? `forum_${prev.length + 1}.jpg`,
            },
        ]);
        if (error) setError('');
    };

    const removeImage = (uri: string) => {
        setSelectedImages((prev) => prev.filter((image) => image.uri !== uri));
        if (error) setError('');
    };

    const handleSubmit = async () => {
        if (!title.trim() || !bodyText.trim()) {
            setError('សូមបំពេញចំណងជើងនិងមាតិកា');
            return;
        }

        setIsSubmitting(true);
        setError('');
        setSuccess(false);

        try {
            const formData = new FormData();
            formData.append('title', title.trim());
            formData.append('description', bodyText.trim());
            formData.append('type', 'discussion');
            formData.append('topic', 'general');

            if (selectedImages.length > 0) {
                selectedImages.forEach((image, index) => {
                    formData.append('images', {
                        uri: image.uri,
                        type: image.mimeType ?? 'image/jpeg',
                        name: image.fileName ?? `forum_image_${index + 1}.jpg`,
                    } as any);
                });
            }

            await meForumService.createForum(formData);

            setSuccess(true);

            setTimeout(() => {
                setTitle('');
                setBodyText('');
                setTitleCharCount(0);
                setSelectedImages([]);
                setError('');
                setSuccess(false);
                router.replace('/me/forums');
            }, 1500);
        } catch (error) {
            console.error('Error creating forum:', error);
            setError('មានបញ្ហាកើតឡើងពេលបង្កើតវេទិកា សូមព្យាយាមម្តងទៀត');
        } finally {
            setIsSubmitting(false);
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
                contentContainerStyle={tw('p-6  pt-20 gap-6 ')}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >

                <View style={tw('')}>

                    {/* Title Input */}
                    <View style={tw('mb-6')}>
                        <Text style={tw('block text-sm font-kh-bold text-gray-700 mb-2')}>
                            ចំណងជើង
                        </Text>
                        <TextInput
                            value={title}
                            onChangeText={handleTitleChange}
                            placeholder="សរសេរចំណងជើងការឆ្លើយតបរបស់អ្នក..."
                            placeholderTextColor="#9CA3AF"
                            maxLength={300}
                            style={tw('w-full bg-white px-4 py-3 border border-gray-300 rounded-full text-sm font-kh-medium text-gray-900')}
                        />
                        <View style={tw('flex-row justify-between items-center mt-2')}>
                            <Text style={tw('text-xs text-gray-500')}>
                                {titleCharCount}/300
                            </Text>
                        </View>
                    </View>

                    {/* Image Upload */}
                    <View style={tw('mb-6')}>
                        <Text style={tw('block text-sm font-kh-bold text-gray-700 mb-2')}>
                            រូបភាព ឬ វីដេអូ
                        </Text>

                        {/* 2x2 Grid for Images */}
                        <View style={tw('flex-row flex-wrap gap-2')}>
                            {selectedImages.map((image, index) => (
                                <View
                                    key={index}
                                    style={[tw('relative    rounded-3xl overflow-hidden border border-gray-200'), { width: '48%' }]}
                                >
                                    <Image
                                        source={{ uri: image.uri }}
                                        style={tw('w-full h-48')}
                                        resizeMode="cover"
                                    />
                                    <Pressable
                                        onPress={() => removeImage(image.uri)}
                                        style={tw('absolute top-2 right-2 w-6 h-6 bg-red-500 rounded-full items-center justify-center')}
                                    >
                                        <Trash size={12} color="#FFFFFF" />
                                    </Pressable>
                                </View>
                            ))}

                            {/* Upload Button (if less than 4 images) */}
                            {selectedImages.length < 4 && (
                                <Pressable
                                    onPress={pickImage}
                                    style={[tw('w-1/2 py-16 bg-white border-2 border-dashed border-gray-300 rounded-3xl items-center justify-center gap-2'), { width: '48%' }]}
                                >
                                    <Plus size={24} color="#6B7280" />
                                    <Text style={tw('text-xs font-medium text-indigo-600')}>
                                        ជ្រើសរើស
                                    </Text>
                                </Pressable>
                            )}
                        </View>

                        {/* Image Count Info */}
                        <View style={tw('mt-2')}>
                            <Text style={tw('text-xs text-gray-500')}>
                                {selectedImages.length}/4
                            </Text>
                        </View>
                    </View>

                    {/* Body Text */}
                    <View style={tw('mb-6')}>
                        <Text style={tw('block text-sm font-kh-bold text-gray-700 mb-2')}>
                            មាតិកា
                        </Text>
                        <TextInput
                            value={bodyText}
                            onChangeText={handleBodyTextChange}
                            placeholder="សរសេរមាតិកាវេទិការបស់អ្នក..."
                            placeholderTextColor="#9CA3AF"
                            multiline
                            textAlignVertical="top"
                            style={[tw('border border-gray-300 bg-white rounded-3xl px-4 py-3 font-kh-medium text-base text-gray-900'), { minHeight: 200 }]}
                        />
                    </View>

                    {/* Error Message */}
                    {error && (
                        <View style={tw('mb-6')}>
                            <View style={tw('bg-red-50 border border-red-200 rounded-xl p-4')}>
                                <View style={tw('flex-row items-center')}>
                                    <View style={tw('flex-shrink-0')}>
                                        <View style={tw('w-5 h-5 bg-red-400 rounded-full')} />
                                    </View>
                                    <View style={tw('ml-3')}>
                                        <Text style={tw('text-sm text-red-800')}>{error}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}

                    {/* Success Message */}
                    {success && (
                        <View style={tw('mb-6')}>
                            <View style={tw('bg-green-50 border border-green-200 rounded-xl p-4')}>
                                <View style={tw('flex-row items-center')}>
                                    <View style={tw('flex-shrink-0')}>
                                        <View style={tw('w-5 h-5 bg-green-400 rounded-full')} />
                                    </View>
                                    <View style={tw('ml-3')}>
                                        <Text style={tw('text-sm text-green-800')}>
                                            បង្កើតវេទិកាបានជោគជ័យ! កំពុងបញ្ជូនទៅទំព័រវេទិកា...
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )}

                    {/* Action Buttons */}
                    <View style={tw('flex-row justify-end gap-3 pt-4 border-t border-gray-200')}>
                        <Pressable
                            onPress={handleSubmit}
                            disabled={!isFormValid || isSubmitting}
                            style={tw(
                                `px-6 py-2 rounded-full ${isFormValid && !isSubmitting
                                    ? 'bg-indigo-600'
                                    : 'bg-gray-300'
                                }`
                            )}
                        >
                            {isSubmitting ? (
                                <View style={tw('flex-row items-center gap-2')}>
                                    <ActivityIndicator size="small" color="#FFFFFF" />
                                    <Text style={tw('text-white font-medium')}>កំពុងបង្កើត...</Text>
                                </View>
                            ) : success ? (
                                <View style={tw('flex-row items-center gap-2')}>
                                    <View style={tw('w-4 h-4 bg-white rounded-full')} />
                                    <Text style={tw('text-white font-medium')}>បានបង្កើតជោគជ័យ</Text>
                                </View>
                            ) : (
                                <Text style={tw('text-white font-medium')}>បោះផ្សាយ</Text>
                            )}
                        </Pressable>
                    </View>

                    {/* Retry Button for Errors */}
                    {error && !isSubmitting && (
                        <View style={tw('mt-4 items-center')}>
                            <Pressable
                                onPress={handleSubmit}
                                style={tw('flex-row items-center gap-2 px-6 py-2 bg-red-600 rounded-full')}
                            >
                                <View style={tw('w-4 h-4')} />
                                <Text style={tw('text-white font-medium')}>ព្យាយាមម្តងទៀត</Text>
                            </Pressable>
                        </View>
                    )}
                </View>
            </ScrollView>
        </View>
    );
}
