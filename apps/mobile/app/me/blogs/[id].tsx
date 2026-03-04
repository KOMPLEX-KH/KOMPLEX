// import { useEffect, useLayoutEffect, useState } from 'react';
// import { View, ScrollView, Pressable, Image, Alert, ActivityIndicator } from 'react-native';
// import { useLocalSearchParams, useRouter } from 'expo-router';
// import { useNavigation } from '@react-navigation/native';
// import { Edit, Trash } from 'lucide-react-native';
// import { tw } from '@/utils/styles';
// import { Text } from '@/components/common/Text';
// import Sidebar from '@/components/screens/me/Sidebar';
// import { useAuth } from '@/hooks/useAuth';
// import MeSkeleton from '@/components/screens/me/MeSkeleton';
// import { feedBlogService, meBlogService } from '@/services/index';
// import { Blog } from '@/types/content/blogs';
// import DeleteConfirm from '@/components/common/DeleteConfirm';
// import ContentError from '@/components/common/ContentError';
// import EditBlog from '@/components/screens/me/blogs/EditBlog';
// // import MarkDownRenderer from '@/components/helper/MarkDownRenderer';
// import { BackButton } from '@/components/common/BackButton';
// import { HEADER_CONFIG } from '@/constants/header-config';

// export default function MyBlogDetailPage() {
//     const navigation = useNavigation();
//     const router = useRouter();
//     const { id } = useLocalSearchParams<{ id: string }>();
//     const { user, loading: authLoading } = useAuth();

//     const [blogPost, setBlogPost] = useState<Blog | null>(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//     const [isEditMode, setIsEditMode] = useState(false);
//     const [showDeleteModal, setShowDeleteModal] = useState(false);
//     const [isDeleting, setIsDeleting] = useState(false);

//     useLayoutEffect(() => {
//         navigation.setOptions({
//             headerTitle: 'ប្លុករបស់ខ្ញុំ',
//             ...HEADER_CONFIG,
//         });
//     }, [navigation]);

//     useEffect(() => {
//         if (!authLoading && !user) {
//             router.replace('/auth');
//         }
//     }, [authLoading, user, router]);

//     useEffect(() => {
//         const fetchBlog = async () => {
//             if (!id || !user) return;
//             try {
//                 setIsLoading(true);
//                 setError(null);
//                 const blog = await feedBlogService.getBlogById(id.toString());
//                 setBlogPost(blog);
//             } catch (err) {
//                 console.error('Error fetching blog:', err);
//                 setError('មានបញ្ហាក្នុងការទាញយកប្លុក');
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchBlog();
//     }, [id, user]);

//     const handleDeleteBlog = async () => {
//         if (!id) return;
//         try {
//             setIsDeleting(true);
//             await meBlogService.deleteBlog(id.toString());
//             setShowDeleteModal(false);
//             router.replace('/me/blogs');
//         } catch (err) {
//             console.error('Error deleting blog:', err);
//             Alert.alert('បរាជ័យ', 'មានបញ្ហាកើតឡើងពេលលុបប្លុក សូមព្យាយាមម្ដងទៀត');
//         } finally {
//             setIsDeleting(false);
//         }
//     };

//     const handleSave = (updatedBlog: Blog) => {
//         setBlogPost(updatedBlog);
//         setIsEditMode(false);
//     };

//     if (authLoading || (!authLoading && !user)) {
//         return <MeSkeleton />;
//     }

//     if (isLoading) {
//         return (
//             <View style={tw('flex-1 bg-gray-50')}>
//                 <Sidebar />
//                 <View style={tw('flex-1 pt-20 px-4')}>
//                     <View style={tw('items-center justify-center flex-1')}>
//                         <ActivityIndicator size="large" color="#4F46E5" />
//                         <Text style={tw('mt-3 text-gray-500 font-kh-medium')}>កំពុងផ្ទុកប្លុក...</Text>
//                     </View>
//                 </View>
//             </View>
//         );
//     }

//     if (error || !blogPost) {
//         return (
//             <View style={tw('flex-1 bg-gray-50')}>
//                 <Sidebar />
//                 <ScrollView
//                     style={tw('flex-1')}
//                     contentContainerStyle={tw('p-4 pt-20')}
//                 >
//                     <BackButton href="/me/blogs" />
//                     <View style={tw('mt-6')}>
//                         <ContentError type="error" message={error ?? 'រកមិនឃើញប្លុក'} />
//                     </View>
//                 </ScrollView>
//             </View>
//         );
//     }

//     if (isEditMode) {
//         return (
//             <View style={tw('flex-1 bg-gray-50')}>
//                 <Sidebar />
//                 <ScrollView
//                     style={tw('flex-1')}
//                     contentContainerStyle={tw('pt-20')}
//                     keyboardShouldPersistTaps="handled"
//                 >
//                     <EditBlog blog={blogPost} onSave={handleSave} onCancel={() => setIsEditMode(false)} />
//                 </ScrollView>
//             </View>
//         );
//     }

//     return (
//         <View style={tw('flex-1 bg-gray-50')}>
//             <Sidebar />
//             <ScrollView
//                 style={tw('flex-1')}
//                 contentContainerStyle={tw('p-4 pt-20 gap-6')}
//                 showsVerticalScrollIndicator={false}
//             >

//                 <View style={tw('flex-row justify-end gap-2')}>
//                     <Pressable
//                         onPress={() => setShowDeleteModal(true)}
//                         style={tw('flex-row items-center gap-2 px-4 py-2 bg-red-500 rounded-full')}
//                     >
//                         <Trash size={16} color="white" />
//                         <Text style={tw('text-white font-kh-medium text-sm')}>លុប</Text>
//                     </Pressable>
//                     <Pressable
//                         onPress={() => setIsEditMode(true)}
//                         style={tw('flex-row items-center gap-2 px-4 py-2 bg-indigo-600 rounded-full')}
//                     >
//                         <Edit size={16} color="white" />
//                         <Text style={tw('text-white font-kh-medium text-sm')}>កែប្រែ</Text>
//                     </Pressable>
//                 </View>

//                 <View style={tw('gap-4 bg-white rounded-3xl p-4 border border-indigo-50')}>
//                     <Text style={tw('text-3xl font-kh-bold text-gray-900')}>
//                         {blogPost.title}
//                     </Text>
//                     <View style={tw('flex-row items-center gap-2')}>
//                         <View style={tw('w-10 h-10 rounded-full bg-indigo-600 items-center justify-center')}>
//                             <Text style={tw('text-white font-kh-semibold text-base')}>
//                                 {blogPost.username.charAt(0)}
//                             </Text>
//                         </View>
//                         <View>
//                             <Text style={tw('font-kh-medium text-gray-900')}>{blogPost.username}</Text>
//                             <Text style={tw('text-xs text-gray-500')}>
//                                 {new Date(blogPost.createdAt).toLocaleDateString('km-KH', {
//                                     year: 'numeric',
//                                     month: 'long',
//                                     day: 'numeric',
//                                 })}
//                             </Text>
//                         </View>
//                     </View>

//                     {(blogPost.media ?? []).length > 0 && (
//                         <ScrollView
//                             horizontal
//                             showsHorizontalScrollIndicator={false}
//                             contentContainerStyle={tw('gap-3')}
//                         >
//                             {blogPost.media?.map((item) => (
//                                 <Image
//                                     key={item.url}
//                                     source={{ uri: item.url }}
//                                     style={tw('w-72 h-44 rounded-3xl')}
//                                     resizeMode="cover"
//                                 />
//                             ))}
//                         </ScrollView>
//                     )}

//                     <View style={tw('gap-3')}>
//                         <Text style={tw('text-sm text-gray-500 font-kh-medium')}>
//                             ប្រភេទ: {blogPost.type || 'មិនមាន'}
//                         </Text>
//                         <Text style={tw('text-sm text-gray-500 font-kh-medium')}>
//                             ប្រធានបទ: {blogPost.topic || 'មិនមាន'}
//                         </Text>
//                     </View>

//                     <View style={tw('border-t border-gray-200 pt-4')}>
//                         <Text >{blogPost.description} </Text>
//                     </View>
//                 </View>
//             </ScrollView>

//             <DeleteConfirm
//                 isOpen={showDeleteModal}
//                 onClose={() => setShowDeleteModal(false)}
//                 onConfirm={handleDeleteBlog}
//                 title="លុបប្លុក"
//                 message="តើអ្នកប្រាកដជាចង់លុបប្លុកនេះមែនទេ?"
//             />
//         </View>
//     );
// }
