import { View, Pressable, Image } from "react-native";
import { Eye, User } from "lucide-react-native";
import { useRouter, Href } from "expo-router";
import { VideoPost } from "@/types/content/videos";
import { tw } from "@/utils/styles";
import {Text} from '@/components/common/Text'

interface VideoCardProps {
    video: VideoPost;
    variant?: "default" | "compact" | "sidebar";
    onClick?: () => void;
}

const formatDuration = (seconds?: number) => {
    if (!seconds && seconds !== 0) {
        return "0:00";
    }
    const total = Math.max(0, seconds);
    const minutes = Math.floor(total / 60);
    const remainingSeconds = total % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
};

const formatDate = (dateString: string) =>
    new Date(dateString).toLocaleDateString("km-KH", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });

const Thumbnail = ({ uri, duration }: { uri: string; duration: number }) => (
    <View style={tw("relative overflow-hidden rounded-3xl bg-gray-100")}>
        <Image
            source={{ uri }}
            style={tw("w-full h-full")}
            resizeMode="cover"
        />
        <View style={tw("absolute bottom-2 right-2 px-2 py-0.5 rounded-2xl bg-black/70")}>
            <Text style={tw("text-xs text-white font-kh-medium")}>{formatDuration(duration)}</Text>
        </View>
    </View>
);

export default function VideoCard({ video, variant = "default", onClick }: VideoCardProps) {
    const router = useRouter();

    const handlePress = () => {
        if (onClick) {
            onClick();
            return;
        }
        router.push(`/videos/${video.id}` as Href);
    };

    if (variant === "sidebar") {
        return (
            <Pressable
                onPress={handlePress}
                style={tw("flex-row gap-3 px-2 py-2 rounded-3xl bg-white border border-indigo-50")}
            >
                <View style={tw("w-28 h-20")}>
                    <Thumbnail uri={video.thumbnailUrl} duration={video.duration ?? 0} />
                </View>
                <View style={tw("flex-1 gap-1")}>
                    <Text
                        style={tw("text-sm font-kh-semibold text-gray-900")}
                        numberOfLines={2}
                    >
                        {video.title}
                    </Text>
                    <Pressable onPress={() => router.push(`/users/${video.userId}` as Href)}>
                        <Text style={tw("text-xs text-gray-600")}>{video.username}</Text>
                    </Pressable>
                    <View style={tw("flex-row items-center gap-2")}>
                        <View style={tw("flex-row items-center gap-1")}>
                            <Eye size={12} color="#6B7280" />
                            <Text style={tw("text-xs text-gray-500")}>{video.viewCount}</Text>
                        </View>
                        <Text style={tw("text-xs text-gray-400")}>•</Text>
                        <Text style={tw("text-xs text-gray-500")}>{formatDate(video.createdAt)}</Text>
                    </View>
                </View>
            </Pressable>
        );
    }

    if (variant === "compact") {
        return (
            <Pressable
                onPress={handlePress}
                style={tw("rounded-3xl bg-white border border-indigo-50 overflow-hidden")}
            >
                <View style={tw("h-48")}>
                    <Thumbnail uri={video.thumbnailUrl} duration={video.duration ?? 0} />
                </View>
                <View style={tw("p-4 gap-3")}>
                    <Text style={tw("text-base font-kh-semibold text-gray-900")} numberOfLines={2}>
                        {video.title}
                    </Text>
                    <View style={tw("flex-row items-center gap-2")}>
                        {video.profileImage ? (
                            <Image
                                source={{ uri: video.profileImage }}
                                style={tw("w-6 h-6 rounded-full border border-indigo-600")}
                                resizeMode="cover"
                            />
                        ) : (
                            <View style={tw("w-6 h-6 rounded-full bg-indigo-100 items-center justify-center")}>
                                <User size={14} color="#4F46E5" />
                            </View>
                        )}
                        <Pressable onPress={() => router.push(`/users/${video.userId}` as Href)}>
                            <Text style={tw("text-xs text-gray-600")}>{video.username}</Text>
                        </Pressable>
                        <Text style={tw("text-xs text-gray-400")}>•</Text>
                        <Text style={tw("text-xs text-gray-500")}>{formatDate(video.createdAt)}</Text>
                    </View>
                    <View style={tw("flex-row items-center gap-1")}>
                        <Eye size={12} color="#6B7280" />
                        <Text style={tw("text-xs text-gray-500")}>{video.viewCount}</Text>
                    </View>
                </View>
            </Pressable>
        );
    }

    return (
        <Pressable
            onPress={handlePress}
            style={tw("rounded-3xl bg-white border border-indigo-50 overflow-hidden")}
        >
            <View style={tw("aspect-video")}>
                <Thumbnail uri={video.thumbnailUrl} duration={video.duration ?? 0} />
            </View>
            <View style={tw("p-4 gap-3")}>
                <Text style={tw("text-lg font-kh-bold text-gray-900")} numberOfLines={2}>
                    {video.title}
                </Text>
                <View style={tw("flex-row items-center gap-2")}>
                    {video.profileImage ? (
                        <Image
                            source={{ uri: video.profileImage }}
                            style={tw("w-8 h-8 rounded-full border-2 border-indigo-600")}
                            resizeMode="cover"
                        />
                    ) : (
                        <View style={tw("w-8 h-8 rounded-full bg-indigo-100 items-center justify-center")}>
                            <User size={18} color="#4F46E5" />
                        </View>
                    )}
                    <Pressable onPress={() => router.push(`/users/${video.userId}` as Href)}>
                        <Text style={tw("text-sm text-gray-700")}>{video.username}</Text>
                    </Pressable>
                    <Text style={tw("text-xs text-gray-400")}>•</Text>
                    <Text style={tw("text-xs text-gray-500")}>{formatDate(video.createdAt)}</Text>
                </View>
                <View style={tw("flex-row items-center gap-1")}>
                    <Eye size={14} color="#6B7280" />
                    <Text style={tw("text-xs text-gray-500")}>{video.viewCount}</Text>
                </View>
            </View>
        </Pressable>
    );
}

