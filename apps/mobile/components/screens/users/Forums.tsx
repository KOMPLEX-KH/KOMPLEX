import { useState, useEffect } from 'react';
import { View, Pressable, Image, ScrollView } from 'react-native';
import { Eye, ThumbsUp, MessageCircle, Calendar } from 'lucide-react-native';
import { useRouter, Href } from 'expo-router';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import ContentError from '@/components/common/ContentError';
import { userForumService } from '@/services/index';
// import MarkDownRenderer from '@/components/helper/MarkDownRenderer';

interface Forum {
    id: number;
    title: string;
    description: string;
    username: string;
    viewCount: number;
    likeCount: number;
    commentCount: number;
    createdAt: string;
    media: { url: string; type: string }[];
}

interface ForumsProps {
    userId: string;
}

export default function Forums({ userId }: ForumsProps) {
    const router = useRouter();
    const [forums, setForums] = useState<Forum[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

    useEffect(() => {
        const fetchUserForums = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await userForumService.getUserForums(userId);
                setForums(data);
            } catch (error) {
                console.error('Error fetching user forums:', error);
                setError('មានបញ្ហាក្នុងការទាញយកព័ត៌មានរបស់អ្នកប្រើប្រាស់។ សូមព្យាយាមម្តងទៀត។');
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserForums();
    }, [userId]);

    if (isLoading) {
        return (
            <View style={tw("p-4")}>
                <Text style={tw("text-2xl font-kh-bold text-gray-900 mb-6")}>ព័ត៌មាន</Text>
                <View style={tw("gap-4")}>
                    {[...Array(3)].map((_, index) => (
                        <View key={index} style={tw("bg-white rounded-3xl p-6 shadow-sm border border-gray-200")}>
                            <View style={tw("flex-row items-center gap-3 mb-4")}>
                                <View style={tw("w-10 h-10 bg-gray-200 rounded-full")} />
                                <View style={tw("flex-1")}>
                                    <View style={tw("h-4 bg-gray-200 rounded w-32 mb-2")} />
                                    <View style={tw("h-3 bg-gray-200 rounded w-24")} />
                                </View>
                            </View>
                            <View style={tw("h-6 bg-gray-200 rounded w-3/4 mb-3")} />
                            <View style={tw("gap-2")}>
                                <View style={tw("h-4 bg-gray-200 rounded w-full")} />
                                <View style={tw("h-4 bg-gray-200 rounded w-2/3")} />
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        );
    }

    if (error) {
        return (
            <View style={tw("p-4")}>
                <Text style={tw("text-2xl font-kh-bold text-gray-900 mb-6")}>ព័ត៌មាន</Text>
                <ContentError
                    type="error"
                    message={error}
                />
            </View>
        );
    }

    if (forums.length === 0) {
        return (
            <View style={tw("p-4")}>
                <Text style={tw("text-2xl font-kh-bold text-gray-900 mb-6")}>ព័ត៌មាន</Text>
                <ContentError
                    type="no-results"
                    message="អ្នកប្រើប្រាស់នេះមិនទាន់មានព័ត៌មានទេ។"
                />
            </View>
        );
    }

    return (
        <View style={tw("p-4")}>
            <Text style={tw("text-2xl font-kh-bold text-gray-900 mb-6")}>
                ព័ត៌មាន ({forums.length})
            </Text>

            <View style={tw("flex-row flex-wrap gap-4")}>
                {forums.map((forum) => (
                    <Pressable
                        key={forum.id}
                        onPress={() => router.push(`/forums/${forum.id}` as Href)}
                        style={tw("w-full sm:w-[48%] lg:w-[31%]")}
                    >
                        <View style={tw("bg-white rounded-3xl p-6 shadow-sm border border-gray-200")}>
                            <View style={tw("flex-row items-center gap-3 mb-4")}>
                                <View style={tw("w-10 h-10 rounded-full bg-indigo-600 items-center justify-center")}>
                                    <Text style={tw("text-white font-kh-semibold text-sm")}>
                                        {forum.username.charAt(0)}
                                    </Text>
                                </View>
                                <View style={tw("flex-1")}>
                                    <Text style={tw("font-kh-semibold text-gray-900 text-sm mb-0.5")}>
                                        {forum.username}
                                    </Text>
                                    <View style={tw("flex-row items-center gap-1")}>
                                        <Calendar size={12} color="#6B7280" />
                                        <Text style={tw("text-gray-500 text-xs")}>
                                            {new Date(forum.createdAt).toLocaleDateString('km-KH', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <Text style={tw("text-lg font-kh-bold text-gray-900 mb-2.5")}>
                                {forum.title}
                            </Text>

                            <View style={tw("mb-4")}>
                                <Text style={tw("text-gray-700 text-sm")} numberOfLines={2}>
                                    <Text >{forum.description} </Text>
                                </Text>
                            </View>

                            {/* Media Carousel */}
                            {forum.media && forum.media.length > 0 && (
                                <ScrollView
                                    horizontal
                                    showsHorizontalScrollIndicator={false}
                                    style={tw("mb-4")}
                                    contentContainerStyle={tw("gap-2")}
                                >
                                    {forum.media.map((media, idx) => (
                                        <View key={idx} style={tw("w-32 h-32 rounded-2xl overflow-hidden")}>
                                            {media.type === 'image' ? (
                                                <Image
                                                    source={{ uri: media.url }}
                                                    style={tw("w-full h-full")}
                                                    resizeMode="cover"
                                                />
                                            ) : (
                                                <View style={tw("w-full h-full bg-gray-200 items-center justify-center")}>
                                                    <Text style={tw("text-gray-400 text-xs")}>Video</Text>
                                                </View>
                                            )}
                                        </View>
                                    ))}
                                </ScrollView>
                            )}

                            <View style={tw("flex-row items-center gap-4")}>
                                <View style={tw("flex-row items-center gap-1")}>
                                    <Eye size={16} color="#6B7280" />
                                    <Text style={tw("text-gray-600 text-sm")}>
                                        {forum.viewCount}
                                    </Text>
                                </View>
                                <View style={tw("flex-row items-center gap-1")}>
                                    <ThumbsUp size={16} color="#6B7280" />
                                    <Text style={tw("text-gray-600 text-sm")}>
                                        {forum.likeCount}
                                    </Text>
                                </View>
                                <View style={tw("flex-row items-center gap-1")}>
                                    <MessageCircle size={16} color="#6B7280" />
                                    <Text style={tw("text-gray-600 text-sm")}>
                                        {forum.commentCount}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </Pressable>
                ))}
            </View>
        </View>
    );
}
