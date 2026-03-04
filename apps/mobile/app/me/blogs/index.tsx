// import { useState, useEffect, useLayoutEffect } from 'react';
// import { View, ScrollView, Pressable, Image } from 'react-native';
// import { useRouter, Href } from 'expo-router';
// import { Eye, Plus, Book } from 'lucide-react-native';
// import { tw } from '@/utils/styles';
// import { Text } from '@/components/common/Text';
// import Sidebar from '@/components/screens/me/Sidebar';
// import ContentError from '@/components/common/ContentError';
// import { Blog } from '@/types/content/blogs';
// import { meBlogService } from '@/services/index';
// import MeSkeleton from '@/components/screens/me/MeSkeleton';
// import { useAuth } from '@/hooks/useAuth';
// import { useNavigation } from '@react-navigation/native';
// import { HEADER_CONFIG } from '@/constants/header-config';

// export default function MyBlogs() {
//     const navigation = useNavigation();
//     const { user, loading: authLoading } = useAuth();
//     const router = useRouter();
//     const [blogPosts, setBlogPosts] = useState<Blog[]>([]);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//     const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

//     useLayoutEffect(() => {
//         navigation.setOptions({
//             headerTitle: 'ប្លុករបស់ខ្ញុំ',
//             ...HEADER_CONFIG,
//         });
//     }, [navigation]);

//     // Redirect to auth if not authenticated
//     useEffect(() => {
//         if (!authLoading && !user) {
//             router.replace('/auth');
//         }
//     }, [user, authLoading, router]);

//     const fetchMyBlogs = async () => {
//         try {
//             setIsLoading(true);
//             setError(null);
//             const data = await meBlogService.getUserBlogs();
//             if (data.blogs && data.blogs.length > 0) {
//                 setBlogPosts(data.blogs);
//             } else {
//                 setError('អ្នកមិនទាន់មានប្លុកទេ');
//             }
//         } catch (error) {
//             console.error('Error fetching my blogs:', error);
//             setError('មានបញ្ហាក្នុងការទាញយកប្លុករបស់អ្នក');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (user) {
//             fetchMyBlogs();
//         }
//     }, [user]);

//     // Show loading while checking auth or fetching data
//     if (authLoading || isLoading) {
//         return <MeSkeleton />;
//     }

//     // Don't render anything if not authenticated (will redirect)
//     if (!user) {
//         return null;
//     }

//     const totalViews = blogPosts.reduce((acc, post) => acc + post.viewCount, 0);

//     return (
//         <View style={tw("flex-1 bg-gray-50")}>
//             <Sidebar />
//             <ScrollView
//                 style={tw("flex-1")}
//                 contentContainerStyle={tw("p-4 pt-20")}
//                 showsVerticalScrollIndicator={false}
//             >
//                 {/* Header */}
//                 <View style={tw("mb-8")}>
//                     <Text style={tw("text-3xl font-kh-bold text-gray-900 mb-2")}>
//                         ប្លុករបស់ខ្ញុំ
//                     </Text>
//                     <Text style={tw("text-gray-600")}>
//                         គ្រប់គ្រងប្លុកនិងមើលដំណើរការរបស់អ្នក
//                     </Text>
//                 </View>

//                 {/* Stats Cards */}
//                 <View style={tw("flex-row flex-wrap gap-4 mb-8")}>
//                     <View style={tw("flex-1 min-w-[48%] bg-white rounded-3xl p-6 shadow-sm border border-gray-200")}>
//                         <View style={tw("flex-row items-center justify-between")}>
//                             <View>
//                                 <Text style={tw("text-sm font-kh-medium text-gray-600")}>ប្លុកសរុប</Text>
//                                 <Text style={tw("text-2xl font-kh-bold text-gray-900")}>
//                                     {blogPosts.length}
//                                 </Text>
//                             </View>
//                             <View style={tw("p-3 bg-indigo-100 rounded-full")}>
//                                 <Book size={24} color="#4F46E5" />
//                             </View>
//                         </View>
//                     </View>

//                     <View style={tw("flex-1 min-w-[48%] bg-white rounded-3xl p-6 shadow-sm border border-gray-200")}>
//                         <View style={tw("flex-row items-center justify-between")}>
//                             <View>
//                                 <Text style={tw("text-sm font-kh-medium text-gray-600")}>ទស្សនាសរុប</Text>
//                                 <Text style={tw("text-2xl font-kh-bold text-blue-600")}>
//                                     {totalViews.toLocaleString()}
//                                 </Text>
//                             </View>
//                             <View style={tw("p-3 bg-blue-100 rounded-full")}>
//                                 <Eye size={24} color="#3B82F6" />
//                             </View>
//                         </View>
//                     </View>
//                 </View>

//                 {/* Blog Posts List */}
//                 <View style={tw("bg-white rounded-3xl shadow-sm border border-gray-200")}>
//                     <View style={tw("p-6 border-b border-gray-200")}>
//                         <View style={tw("flex-row items-center justify-between")}>
//                             <Text style={tw("text-lg font-kh-semibold text-gray-900")}>ប្លុក</Text>
//                             <Pressable
//                                 onPress={() => router.push('/me/create-blog' as Href)}
//                                 style={tw("flex-row items-center gap-2 px-4 py-2 bg-indigo-600 rounded-full")}
//                             >
//                                 <Plus size={16} color="white" />
//                                 <Text style={tw("text-white font-kh-medium text-sm")}>
//                                     បង្កើតប្លុកថ្មី
//                                 </Text>
//                             </Pressable>
//                         </View>
//                     </View>
//                     <View style={tw("p-6")}>
//                         {error ? (
//                             <ContentError
//                                 type={error === 'អ្នកមិនទាន់មានប្លុកទេ' ? 'no-results' : 'error'}
//                                 message={error}
//                             />
//                         ) : blogPosts.length > 0 ? (
//                             <View style={tw("flex-row flex-wrap gap-4")}>
//                                 {blogPosts.map((post) => (
//                                     <Pressable
//                                         key={post.id}
//                                         onPress={() => router.push(`/me/blogs/${post.id}` as Href)}
//                                         style={tw("w-full sm:w-[48%] lg:w-[31%] h-72 rounded-3xl overflow-hidden shadow-lg border border-indigo-500/10")}
//                                     >
//                                         {/* Background Image */}
//                                         {post.media && post.media.length > 0 && !imageErrors[post.id] ? (
//                                             <Image
//                                                 source={{ uri: post.media[0].url }}
//                                                 style={tw("absolute inset-0 w-full h-full")}
//                                                 resizeMode="cover"
//                                                 onError={() => setImageErrors(prev => ({ ...prev, [post.id]: true }))}
//                                             />
//                                         ) : (
//                                             <View style={tw("absolute inset-0 bg-gray-200")} />
//                                         )}

//                                         {/* Gradient Overlay */}
//                                         <View style={tw("absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent")} />

//                                         {/* Content */}
//                                         <View style={tw("absolute bottom-0 left-0 right-0 p-5")}>
//                                             <Text style={tw("text-white text-xs opacity-90 mb-3")}>
//                                                 {new Date(post.createdAt).toLocaleDateString('km-KH', {
//                                                     year: 'numeric',
//                                                     month: 'long',
//                                                     day: 'numeric'
//                                                 })}
//                                             </Text>
//                                             <Text style={tw("text-lg font-kh-bold text-white mb-2")} numberOfLines={2}>
//                                                 {post.title}
//                                             </Text>
//                                         </View>
//                                     </Pressable>
//                                 ))}
//                             </View>
//                         ) : (
//                             <ContentError type="no-results" message="អ្នកមិនទាន់មានប្លុកណាមួយទេ" />
//                         )}
//                     </View>
//                 </View>
//             </ScrollView>
//         </View>
//     );
// }

