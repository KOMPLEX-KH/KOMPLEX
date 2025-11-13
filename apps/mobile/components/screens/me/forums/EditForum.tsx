import { useEffect, useMemo, useState } from 'react';
import { View, ScrollView, TextInput, Pressable, Image, Alert, ActivityIndicator } from 'react-native';
import { Eye, Image as ImageIcon, Plus, Save, X } from 'lucide-react-native';
import * as ImagePicker from 'expo-image-picker';
import { ForumPost } from '@/types/content/forums';
import { Media } from '@/types/content/media';
import { meForumService, feedForumService } from '@/services/index';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
// import MarkDownRenderer from '@/components/helper/MarkDownRenderer';

interface EditForumProps {
    forum: ForumPost;
    onCancel: () => void;
}

interface SelectedImage {
    uri: string;
    name: string;
    type: string;
}

export default function EditForum({ forum, onCancel }: EditForumProps) {
    const [title, setTitle] = useState(forum.title);
    const [description, setDescription] = useState(forum.description);
    const [existingImages, setExistingImages] = useState<Media[]>(forum.media ?? []);
    const [removedImages, setRemovedImages] = useState<string[]>([]);
    const [selectedImages, setSelectedImages] = useState<SelectedImage[]>([]);
    const [isSaving, setIsSaving] = useState(false);
    const [showPreview, setShowPreview] = useState(false);

    useEffect(() => {
        setTitle(forum.title);
        setDescription(forum.description);
        setExistingImages(forum.media ?? []);
        setRemovedImages([]);
        setSelectedImages([]);
    }, [forum]);

    const hasChanges = useMemo(() => {
        return (
            title.trim() !== forum.title.trim() ||
            description.trim() !== forum.description.trim() ||
            removedImages.length > 0 ||
            selectedImages.length > 0
        );
    }, [title, description, removedImages, selectedImages, forum]);

    const handlePickImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('ការអនុញ្ញាត', 'សូមផ្តល់ការអនុញ្ញាតដើម្បីជ្រើសរើសរូបភាព');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            quality: 0.8,
        });

        if (result.canceled) return;

        const asset = result.assets?.[0];
        if (!asset || !asset.uri) return;

        setSelectedImages((prev) => [
            ...prev,
            {
                uri: asset.uri,
                name: asset.fileName ?? `forum-image-${prev.length + 1}.${asset.type ?? 'jpg'}`,
                type: asset.mimeType ?? 'image/jpeg',
            },
        ]);
    };

    const handleRemoveExistingImage = (url: string) => {
        setExistingImages((prev) => prev.filter((image) => image.url !== url));
        setRemovedImages((prev) => [...prev, url]);
    };

    const handleRemoveSelectedImage = (uri: string) => {
        setSelectedImages((prev) => prev.filter((image) => image.uri !== uri));
    };

    const resetForm = () => {
        setTitle(forum.title);
        setDescription(forum.description);
        setExistingImages(forum.media ?? []);
        setRemovedImages([]);
        setSelectedImages([]);
        onCancel();
    };

    const handleSave = async () => {
        if (!title.trim() || !description.trim()) {
            Alert.alert('ព័ត៍មានមិនគ្រប់គ្រាន់', 'សូមបំពេញចំណងជើង និងមាតិកាវេទិកា');
            return;
        }

        try {
            setIsSaving(true);
            const formData = new FormData();
            formData.append('title', title.trim());
            formData.append('description', description.trim());

            selectedImages.forEach((image, index) => {
                formData.append('images', {
                    uri: image.uri,
                    name: image.name ?? `image_${index}.jpg`,
                    type: image.type ?? 'image/jpeg',
                } as any);
            });

            if (removedImages.length > 0) {
                const payload = JSON.stringify(removedImages.map((url) => ({ url })));
                formData.append('photosToRemove', payload);
            }

            await meForumService.updateForum(forum.id.toString(), formData);
            const updatedForum = await feedForumService.getForumById(forum.id.toString());

            setTitle(updatedForum.title);
            setDescription(updatedForum.description);
            setExistingImages(updatedForum.media ?? []);
            setRemovedImages([]);
            setSelectedImages([]);
            onCancel();
        } catch (error) {
            console.error('Error updating forum:', error);
            Alert.alert('បរាជ័យ', 'មានបញ្ហាកើតឡើងពេលរក្សាទុកវេទិកា សូមព្យាយាមម្ដងទៀត');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <ScrollView
            style={tw('flex-1')}
            contentContainerStyle={tw('p-4 gap-6')}
            keyboardShouldPersistTaps="handled"
        >
            <Text style={tw('text-2xl font-kh-bold text-gray-900')}>កែប្រែវេទិកា</Text>

            <View style={tw('gap-4 bg-white rounded-3xl p-4 border border-gray-200')}>
                <View style={tw('gap-2')}>
                    <Text style={tw('text-sm font-kh-medium text-gray-700')}>ចំណងជើង</Text>
                    <TextInput
                        value={title}
                        onChangeText={setTitle}
                        placeholder="សរសេរចំណងជើងវេទិការបស់អ្នក..."
                        placeholderTextColor="#9CA3AF"
                        style={tw('border border-gray-300 rounded-3xl px-4 py-3 font-kh-medium text-base text-gray-900')}
                    />
                </View>

                <View style={tw('gap-2')}>
                    <View style={tw('flex-row justify-between items-center')}>
                        <Text style={tw('text-sm font-kh-medium text-gray-700')}>រូបគំរូ (អតិបរមា 4)</Text>
                        <Pressable
                            onPress={handlePickImage}
                            disabled={existingImages.length + selectedImages.length >= 4}
                            style={tw(
                                `flex-row items-center gap-2 px-3 py-1.5 rounded-full ${
                                    existingImages.length + selectedImages.length >= 4
                                        ? 'bg-gray-200'
                                        : 'bg-indigo-100'
                                }`
                            )}
                        >
                            <ImageIcon
                                size={16}
                                color={existingImages.length + selectedImages.length >= 4 ? '#9CA3AF' : '#4F46E5'}
                            />
                            <Text
                                style={tw(
                                    `text-xs font-kh-medium ${
                                        existingImages.length + selectedImages.length >= 4 ? 'text-gray-500' : 'text-indigo-600'
                                    }`
                                )}
                            >
                                បន្ថែមរូបភាព
                            </Text>
                        </Pressable>
                    </View>

                    <View style={tw('flex-row flex-wrap gap-3')}>
                        {existingImages.map((image) => (
                            <View
                                key={image.url}
                                style={tw('relative w-[48%] aspect-video border border-gray-200 rounded-3xl overflow-hidden')}
                            >
                                <Image source={{ uri: image.url }} style={tw('w-full h-full')} resizeMode="cover" />
                                <Pressable
                                    onPress={() => handleRemoveExistingImage(image.url)}
                                    style={tw('absolute top-2 right-2 w-7 h-7 rounded-full bg-red-500 items-center justify-center')}
                                >
                                    <X size={16} color="white" />
                                </Pressable>
                            </View>
                        ))}

                        {selectedImages.map((image) => (
                            <View
                                key={image.uri}
                                style={tw('relative w-[48%] aspect-video border border-gray-200 rounded-3xl overflow-hidden')}
                            >
                                <Image source={{ uri: image.uri }} style={tw('w-full h-full')} resizeMode="cover" />
                                <Pressable
                                    onPress={() => handleRemoveSelectedImage(image.uri)}
                                    style={tw('absolute top-2 right-2 w-7 h-7 rounded-full bg-red-500 items-center justify-center')}
                                >
                                    <X size={16} color="white" />
                                </Pressable>
                            </View>
                        ))}

                        {existingImages.length + selectedImages.length === 0 && (
                            <Pressable
                                onPress={handlePickImage}
                                style={tw('w-full aspect-video border-2 border-dashed border-gray-300 rounded-3xl items-center justify-center gap-2')}
                            >
                                <Plus size={20} color="#6B7280" />
                                <Text style={tw('text-sm text-gray-500 font-kh-medium')}>
                                    ជ្រើសរើសរូបភាពដំបូងរបស់អ្នក
                                </Text>
                            </Pressable>
                        )}
                    </View>

                    <Text style={tw('text-xs text-gray-500')}>
                        {existingImages.length + selectedImages.length}/4 រូប
                    </Text>
                </View>

                <View style={tw('gap-2')}>
                    <View style={tw('flex-row justify-between items-center')}>
                        <Text style={tw('text-sm font-kh-medium text-gray-700')}>មាតិកា</Text>
                        <Pressable
                            onPress={() => setShowPreview((prev) => !prev)}
                            style={tw('flex-row items-center gap-2 px-3 py-1.5 bg-indigo-50 rounded-full')}
                        >
                            <Eye size={16} color="#4F46E5" />
                            <Text style={tw('text-xs font-kh-medium text-indigo-600')}>
                                {showPreview ? 'កែប្រែ' : 'មើលជាមុន'}
                            </Text>
                        </Pressable>
                    </View>

                    {!showPreview ? (
                        <TextInput
                            value={description}
                            onChangeText={setDescription}
                            placeholder="សរសេរមាតិកាវេទិការបស់អ្នក..."
                            placeholderTextColor="#9CA3AF"
                            multiline
                            textAlignVertical="top"
                            style={tw('border border-gray-300 rounded-3xl px-4 py-3 min-h-[240px] font-kh-medium text-base text-gray-900')}
                        />
                    ) : (
                        <View style={tw('border border-gray-200 rounded-3xl p-4 bg-white min-h-[240px]')}>
                            <Text >{description} </Text>
                        </View>
                    )}
                </View>

                <View style={tw('flex-row justify-end gap-3 pt-2')}>
                    <Pressable onPress={resetForm} style={tw('px-4 py-2 bg-gray-500 rounded-full')}>
                        <Text style={tw('text-white font-kh-medium text-sm')}>បោះបង់</Text>
                    </Pressable>
                    <Pressable
                        onPress={handleSave}
                        disabled={!hasChanges || isSaving}
                        style={tw(
                            `flex-row items-center gap-2 px-4 py-2 rounded-full ${
                                !hasChanges || isSaving ? 'bg-indigo-200' : 'bg-indigo-500'
                            }`
                        )}
                    >
                        {isSaving ? (
                            <ActivityIndicator color="#FFFFFF" size="small" />
                        ) : (
                            <Save size={16} color="white" />
                        )}
                        <Text style={tw('text-white font-kh-medium text-sm')}>
                            {isSaving ? 'កំពុងរក្សាទុក...' : 'រក្សាទុក'}
                        </Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
}
