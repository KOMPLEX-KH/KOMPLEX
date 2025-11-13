'use client';

import { View, TextInput, Image, Pressable } from 'react-native';
import { Image as ImageIcon } from 'lucide-react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';

interface DescriptionProps {
    title: string;
    description: string;
    thumbnail?: string;
    onTitleChange: (title: string) => void;
    onDescriptionChange: (description: string) => void;
    onPickThumbnail: () => void;
}

export default function Description({
    title,
    description,
    thumbnail,
    onTitleChange,
    onDescriptionChange,
    onPickThumbnail,
}: DescriptionProps) {
    return (
        <View style={tw('bg-white rounded-3xl border border-gray-200 p-4 gap-4')}>
            <Text style={tw('text-lg font-kh-semibold text-gray-900')}>ព័ត៌មានវីដេអូ</Text>

            <View style={tw('gap-2')}>
                <Text style={tw('text-sm font-kh-medium text-gray-700')}>ចំណងជើង</Text>
                <TextInput
                        value={title}
                    onChangeText={onTitleChange}
                    placeholder="សរសេរចំណងជើងវីដេអូ..."
                    placeholderTextColor="#9CA3AF"
                    style={tw('border border-gray-300 rounded-3xl px-4 py-3 text-base font-kh-medium text-gray-900')}
                    />
            </View>

            <View style={tw('gap-2')}>
                <Text style={tw('text-sm font-kh-medium text-gray-700')}>ការពិពណ៌នា</Text>
                <TextInput
                        value={description}
                    onChangeText={onDescriptionChange}
                    placeholder="សរសេរការពិពណ៌នាវីដេអូរបស់អ្នក..."
                    placeholderTextColor="#9CA3AF"
                    multiline
                    textAlignVertical="top"
                    style={tw('border border-gray-300 rounded-3xl px-4 py-3 min-h-[180px] font-kh-medium text-base text-gray-900')}
                />
            </View>

            <View style={tw('gap-2')}>
                <Text style={tw('text-sm font-kh-medium text-gray-700')}>រូបភាពតូច</Text>
                {thumbnail ? (
                    <View style={tw('gap-2')}>
                        <Image source={{ uri: thumbnail }} style={tw('w-full aspect-video rounded-3xl')} resizeMode="cover" />
                        <Pressable
                            onPress={onPickThumbnail}
                            style={tw('self-start flex-row items-center gap-2 px-3 py-2 bg-indigo-600 rounded-full')}
                        >
                            <ImageIcon size={16} color="white" />
                            <Text style={tw('text-white font-kh-medium text-sm')}>ប្ដូររូបភាពតូច</Text>
                        </Pressable>
                    </View>
                ) : (
                    <Pressable
                        onPress={onPickThumbnail}
                        style={tw('flex-row items-center gap-2 px-3 py-2 bg-indigo-100 rounded-full self-start')}
                    >
                        <ImageIcon size={16} color="#4F46E5" />
                        <Text style={tw('text-indigo-600 font-kh-medium text-sm')}>ជ្រើសរើសរូបភាពតូច</Text>
                    </Pressable>
                )}
            </View>
        </View>
    );
}
