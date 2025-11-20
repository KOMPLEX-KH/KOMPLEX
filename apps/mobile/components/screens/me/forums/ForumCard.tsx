import { View, Pressable, Image, ScrollView } from 'react-native';
import { ForumPost } from '@/types/content/forums';
import { Media } from '@/types/content/media';
import { useRouter, Href } from 'expo-router';
import { Eye, MessageCircle, ThumbsUp } from 'lucide-react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import MarkDownRenderer from '@/components/helper/MarkDownRenderer';

interface ForumCardProps {
    post: ForumPost;
    isFromMePage: boolean;
}

export default function ForumCard({ post, isFromMePage }: ForumCardProps) {
    const router = useRouter();

    const getTimeAgo = (dateString: string): string => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffHours / 24);

        if (diffDays > 0) {
            return `មុន ${diffDays} ថ្ងៃ`;
        } else if (diffHours > 0) {
            return `មុន ${diffHours} ម៉ោង`;
        } else {
            return 'ថ្មីៗនេះ';
        }
    };

    const getAvatar = (username: string): string => {
        return username.charAt(0);
    };

    const getImageUrls = (media: Media[]): string[] => {
        return media.filter(m => m.type === 'image').map(m => m.url);
    };

    const handleCardClick = () => {
        if (isFromMePage) {
            router.push(`/me/forums/${post.id}` as Href);
        }
    };

    const imageUrls = getImageUrls(post.media || []);

    return (
        <Pressable
            onPress={handleCardClick}
            style={tw("bg-white rounded-3xl p-6 border border-indigo-500/10")}
        >
            <View style={tw("flex-row items-center gap-3 mb-4")}>
                <View style={tw("flex-row items-center gap-3")}>
                    {post.profileImage ? (
                        <Image
                            source={{ uri: post.profileImage }}
                            style={tw("w-10 h-10 rounded-full border-2 border-indigo-500")}
                            resizeMode="cover"
                        />
                    ) : null}
                    <View style={tw(`w-10 h-10 rounded-full bg-indigo-600 items-center justify-center ${post.profileImage ? 'hidden' : ''}`)}>
                        <Text style={tw("text-white font-kh-semibold text-base")}>
                            {getAvatar(post.username)}
                        </Text>
                    </View>
                    <View style={tw("flex-1")}>
                        <Text style={tw("font-kh-semibold text-gray-900 text-sm mb-0.5")}>
                            {post.username}
                        </Text>
                        <Text style={tw("text-gray-500 text-xs")}>
                            {getTimeAgo(post.createdAt)}
                        </Text>
                    </View>
                </View>
            </View>

            <Text style={tw("text-lg font-kh-bold text-gray-900 mb-2.5")}>
                {post.title}
            </Text>

            <View style={tw("mb-4")}>
                <MarkDownRenderer content={post.description} />
            </View>

            {imageUrls.length > 0 && (
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={tw("mb-4")}
                    contentContainerStyle={tw("gap-2")}
                >
                    {imageUrls.map((url, idx) => (
                        <Image
                            key={idx}
                            source={{ uri: url }}
                            style={tw("w-32 h-32 rounded-2xl")}
                            resizeMode="cover"
                        />
                    ))}
                </ScrollView>
            )}

            <View style={tw("flex-row items-center gap-4")}>
                <View style={tw("flex-row items-center gap-1")}>
                    <Eye size={16} color="#6B7280" />
                    <Text style={tw("text-sm text-gray-600")}>
                        {post.viewCount}
                    </Text>
                </View>
                <View style={tw("flex-row items-center gap-1")}>
                    <ThumbsUp size={16} color="#6B7280" />
                    <Text style={tw("text-sm text-gray-600")}>
                        {post.likeCount}
                    </Text>
                </View>
                <View style={tw("flex-row items-center gap-1")}>
                    <MessageCircle size={16} color="#6B7280" />
                    <Text style={tw("text-sm text-gray-600")}>
                        {post.commentCount}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
}
