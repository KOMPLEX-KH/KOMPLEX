import { useState, useEffect } from 'react';
import { View, Pressable, Image } from 'react-native';
import { Eye } from 'lucide-react-native';
import { useRouter, Href } from 'expo-router';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import ContentError from '@/components/common/ContentError';
import { userBlogService } from '@/services/index';

interface Blog {
    id: number;
    title: string;
    description: string;
    media: { url: string }[];
    username: string;
    viewCount: number;
    createdAt: string;
}

interface BlogsProps {
    userId: string;
}

export default function Blogs({ userId }: BlogsProps) {
    const router = useRouter();
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

    useEffect(() => {
        const fetchUserBlogs = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await userBlogService.getUserBlogs(userId);
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching user blogs:', error);
                setError('មានបញ្ហាក្នុងការទាញយកប្លុករបស់អ្នកប្រើប្រាស់។ សូមព្យាយាមម្តងទៀត។');
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserBlogs();
    }, [userId]);

    if (isLoading) {
        return (
            <View style={tw("p-4")}>
                <Text style={tw("text-2xl font-kh-bold text-gray-900 mb-6")}>ប្លុក</Text>
                <View style={tw("flex-row flex-wrap gap-4")}>
                    {[...Array(3)].map((_, index) => (
                        <View key={index} style={tw("w-full sm:w-[48%] lg:w-[31%]")}>
                            <View style={tw("aspect-[16/9] bg-gray-200 rounded-3xl")} />
                        </View>
                    ))}
                </View>
            </View>
        );
    }

    if (error) {
        return (
            <View style={tw("p-4")}>
                <Text style={tw("text-2xl font-kh-bold text-gray-900 mb-6")}>ប្លុក</Text>
                <ContentError
                    type="error"
                    message={error}
                />
            </View>
        );
    }

    if (blogs.length === 0) {
        return (
            <View style={tw("p-4")}>
                <Text style={tw("text-2xl font-kh-bold text-gray-900 mb-6")}>ប្លុក</Text>
                <ContentError
                    type="no-results"
                    message="អ្នកប្រើប្រាស់នេះមិនទាន់មានប្លុកទេ។"
                />
            </View>
        );
    }

    return (
        <View style={tw("p-4")}>
            <Text style={tw("text-2xl font-kh-bold text-gray-900 mb-6")}>
                ប្លុក ({blogs.length})
            </Text>

            <View style={tw("flex-row flex-wrap gap-4")}>
                {blogs.map((blog) => (
                    <Pressable
                        key={blog.id}
                        onPress={() => router.push(`/blogs/${blog.id}` as Href)}
                        style={tw("w-full sm:w-[48%] lg:w-[31%]")}
                    >
                        <View style={tw("relative aspect-[16/9] rounded-3xl overflow-hidden shadow-lg border border-indigo-500/10")}>
                            {/* Background Image */}
                            {blog.media[0]?.url && !imageErrors[blog.id] ? (
                                <Image
                                    source={{ uri: blog.media[0].url }}
                                    style={tw("absolute inset-0 w-full h-full")}
                                    resizeMode="cover"
                                    onError={() => setImageErrors(prev => ({ ...prev, [blog.id]: true }))}
                                />
                            ) : (
                                <View style={tw("absolute inset-0 bg-gray-200")} />
                            )}

                            {/* Gradient Overlay */}
                            <View style={tw("absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent")} />

                            {/* Content */}
                            <View style={tw("absolute bottom-0 left-0 right-0 p-5")}>
                                <View style={tw("flex-row items-center gap-4 mb-3")}>
                                    <View style={tw("flex-row items-center gap-1.5")}>
                                        <View style={tw("w-4.5 h-4.5 rounded-full bg-indigo-600 items-center justify-center border border-white/30")}>
                                            <Text style={tw("text-white font-kh-semibold text-xs")}>
                                                {blog.username.charAt(0)}
                                            </Text>
                                        </View>
                                        <Text style={tw("text-white text-xs opacity-90")}>
                                            {blog.username}
                                        </Text>
                                    </View>
                                    <Text style={tw("text-white text-xs opacity-90")}>|</Text>
                                    <Text style={tw("text-white text-xs opacity-90")}>
                                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </Text>
                                </View>

                                <Text style={tw("text-lg font-kh-bold text-white mb-2")} numberOfLines={2}>
                                    {blog.title}
                                </Text>
                                <View style={tw("flex-row items-center gap-2")}>
                                    <Eye size={16} color="white" />
                                    <Text style={tw("text-white text-sm")}>
                                        {blog.viewCount} ទស្សនា
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
