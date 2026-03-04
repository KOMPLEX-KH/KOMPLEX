import { useEffect, useMemo, useState } from 'react';
import { View, TextInput, Pressable, ScrollView, Alert, ActivityIndicator } from 'react-native';
import { Video as ExpoVideo, ResizeMode } from 'expo-av';
import { Eye, Save } from 'lucide-react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import type { VideoPost } from '@core-types/content/videos';
import { meVideoService, feedVideoService } from '@/services/index';

interface EditVideoProps {
  video: VideoPost;
  onSave: (updatedVideo: VideoPost) => void;
  onCancel: () => void;
}

export default function EditVideo({ video, onSave, onCancel }: EditVideoProps) {
  const [title, setTitle] = useState(video.title);
  const [description, setDescription] = useState(video.description ?? '');
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setTitle(video.title);
    setDescription(video.description ?? '');
    setIsSaving(false);
  }, [video]);

  const hasChanges = useMemo(() => {
    return (
      title.trim() !== video.title.trim() ||
      description.trim() !== video.description.trim()
    );
  }, [title, description, video]);

  const handleSave = async () => {
    if (!title.trim() || !description.trim()) {
      Alert.alert('ព័ត៍មានមិនគ្រប់គ្រាន់', 'សូមបំពេញចំណងជើង និងមាតិកាវីដេអូ');
      return;
    }

    try {
      setIsSaving(true);
      await meVideoService.updateVideo(video.id.toString(), {
        title: title.trim(),
        description: description.trim(),
      });

      const updated = await feedVideoService.getVideoById(video.id.toString());
      onSave(updated.data);
    } catch (error) {
      console.error('Error updating video:', error);
      Alert.alert('បរាជ័យ', 'មានបញ្ហាកើតឡើងពេលរក្សាទុកវីដេអូ សូមព្យាយាមម្ដងទៀត');
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
      <View style={tw('flex-row justify-end')}>
        <Pressable
          onPress={onCancel}
          style={tw('flex-row items-center gap-2 px-4 py-2 bg-gray-600 rounded-full')}
        >
          <Eye size={16} color="white" />
          <Text style={tw('text-white font-kh-medium text-sm')}>មើល</Text>
        </Pressable>
      </View>

      <View style={tw('gap-4 bg-white rounded-3xl p-4 border border-gray-200')}>
        <Text style={tw('text-2xl font-kh-bold text-gray-900')}>កែប្រែវីដេអូ</Text>

        <View style={tw('gap-2')}>
          <Text style={tw('text-sm font-kh-medium text-gray-700')}>វីដេអូបច្ចុប្បន្ន</Text>
          <View style={tw('rounded-3xl overflow-hidden bg-black')}>
            <ExpoVideo
              source={{ uri: video.videoUrl }}
              posterSource={video.thumbnailUrl ? { uri: video.thumbnailUrl } : undefined}
              useNativeControls
              resizeMode={ResizeMode.CONTAIN}
              style={tw('w-full aspect-video')}
            />
          </View>
        </View>

        <View style={tw('gap-2')}>
          <Text style={tw('text-sm font-kh-medium text-gray-700')}>ចំណងជើង</Text>
          <TextInput
            value={title}
            onChangeText={setTitle}
            placeholder="សរសេរចំណងជើងវីដេអូរបស់អ្នក..."
            placeholderTextColor="#9CA3AF"
            style={tw('border border-gray-300 rounded-3xl px-4 py-3 font-kh-medium text-base text-gray-900')}
          />
        </View>

        <View style={tw('gap-2')}>
          <Text style={tw('text-sm font-kh-medium text-gray-700')}>មាតិកា</Text>
          <TextInput
            value={description}
            onChangeText={setDescription}
            placeholder="សរសេរការពិពណ៌នាវីដេអូរបស់អ្នក..."
            placeholderTextColor="#9CA3AF"
            multiline
            textAlignVertical="top"
            style={tw('border border-gray-300 rounded-3xl px-4 py-3 min-h-[200px] font-kh-medium text-base text-gray-900')}
          />
        </View>

        <View style={tw('flex-row justify-end gap-3 pt-2')}>
          <Pressable
            onPress={() => {
              setTitle(video.title);
              setDescription(video.description);
              onCancel();
            }}
            style={tw('px-4 py-2 bg-gray-500 rounded-full')}
          >
            <Text style={tw('text-white font-kh-medium text-sm')}>បោះបង់</Text>
          </Pressable>
          <Pressable
            onPress={handleSave}
            disabled={!hasChanges || isSaving}
            style={tw(
              `flex-row items-center gap-2 px-4 py-2 rounded-full ${!hasChanges || isSaving ? 'bg-indigo-200' : 'bg-indigo-500'
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
