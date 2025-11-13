import { View, Pressable } from 'react-native';
import { Video as ExpoVideo, ResizeMode } from 'expo-av';
import { Upload, X } from 'lucide-react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';

export interface PickedVideo {
    uri: string;
    name?: string;
    size?: number;
    type?: string;
}

interface VideoUploadProps {
    video?: PickedVideo;
    onPickVideo: () => void;
    onRemoveVideo: () => void;
    onDurationChange?: (durationSeconds: number) => void;
}

export default function VideoUpload({
    video,
    onPickVideo,
    onRemoveVideo,
    onDurationChange,
}: VideoUploadProps) {
    return (
        <View style={tw('bg-white rounded-3xl border border-gray-200 p-4 gap-4')}>
            <Text style={tw('text-lg font-kh-semibold text-gray-900')}>វីដេអូ</Text>

            {!video ? (
                <Pressable
                    onPress={onPickVideo}
                    style={tw('border-2 border-dashed border-gray-300 rounded-3xl p-10 items-center gap-3')}
                >
                    <Upload size={36} color="#6B7280" />
                    <Text style={tw('text-gray-600 font-kh-medium')}>ជ្រើសរើសវីដេអូ</Text>
                    <Text style={tw('text-xs text-gray-400')}>MP4, MOV ឬ WebM</Text>
                </Pressable>
            ) : (
                <View style={tw('gap-3')}>
                    <View style={tw('relative rounded-3xl overflow-hidden bg-black')}>
                        <ExpoVideo
                            source={{ uri: video.uri }}
                            useNativeControls
                            resizeMode={ResizeMode.CONTAIN}
                            style={tw('w-full aspect-video')}
                            onLoad={(status) => {
                                if (!onDurationChange) return;
                                if ('durationMillis' in status && status.durationMillis) {
                                    onDurationChange(status.durationMillis / 1000);
                                }
                            }}
                        />
                        <Pressable
                            onPress={onRemoveVideo}
                            style={tw('absolute top-3 right-3 w-8 h-8 rounded-full bg-red-500 items-center justify-center')}
                        >
                            <X size={16} color="white" />
                        </Pressable>
                    </View>

                    <View style={tw('bg-gray-100 rounded-2xl p-3 gap-1')}>
                        <Text style={tw('text-sm text-gray-700 font-kh-medium')}>
                            {video.name || 'វីដេអូ'}
                        </Text>
                        {typeof video.size === 'number' && (
                            <Text style={tw('text-xs text-gray-500')}>
                                {(video.size / (1024 * 1024)).toFixed(2)} MB
                            </Text>
                        )}
                    </View>
                </View>
            )}
        </View>
    );
}
