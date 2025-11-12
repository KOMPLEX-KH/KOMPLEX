import { View,  Pressable, Image } from "react-native";
import { Play, Eye, Clock } from "lucide-react-native";
import { useRouter, Href } from "expo-router";
import { tw } from "@/utils/styles";
import {Text} from '@/components/common/Text'

interface RecommendedVideoCardProps {
    video: {
        id: string;
        title: string;
        thumbnail: string;
        channel: string;
        views: string;
        duration: string;
        uploaded: string;
    };
}

export default function RecommendedVideoCard({ video }: RecommendedVideoCardProps) {
    const router = useRouter();

    const handlePress = () => {
        router.push(`/video/${video.id}` as Href);
    };

    return (
        <Pressable
            onPress={handlePress}
            style={tw("flex-row gap-3 px-2 py-2 rounded-3xl bg-white border border-indigo-50")}
        >
            <View style={tw("relative w-32 h-24 rounded-3xl overflow-hidden bg-gray-100")}>
                <Image
                    source={{ uri: video.thumbnail }}
                    style={tw("w-full h-full")}
                    resizeMode="cover"
                />
                <View style={tw("absolute bottom-1 right-1 px-2 py-0.5 rounded-2xl bg-black/70")}>
                    <Text style={tw("text-xs text-white font-kh-medium")}>{video.duration}</Text>
                </View>
                <View style={tw("absolute inset-0 items-center justify-center")}>
                    <Play size={20} color="#FFFFFF" />
                </View>
            </View>

            <View style={tw("flex-1 gap-1")}>
                <Text style={tw("text-sm font-kh-semibold text-gray-900")} numberOfLines={2}>
                    {video.title}
                </Text>
                <Text style={tw("text-xs text-gray-600")} numberOfLines={1}>
                    {video.channel}
                </Text>
                <View style={tw("flex-row items-center gap-2")}>
                    <View style={tw("flex-row items-center gap-1")}>
                        <Eye size={12} color="#6B7280" />
                        <Text style={tw("text-xs text-gray-500")}>{video.views}</Text>
                    </View>
                    <Text style={tw("text-xs text-gray-400")}>•</Text>
                    <View style={tw("flex-row items-center gap-1")}>
                        <Clock size={12} color="#6B7280" />
                        <Text style={tw("text-xs text-gray-500")}>{video.uploaded}</Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}

