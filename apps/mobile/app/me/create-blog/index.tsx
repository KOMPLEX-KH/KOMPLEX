// import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
// import { View, ScrollView, TextInput, Pressable, ActivityIndicator, Alert, Image } from 'react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { useRouter } from 'expo-router';
// import { useNavigation } from '@react-navigation/native';
// import Sidebar from '@/components/screens/me/Sidebar';
// import MeSkeleton from '@/components/screens/me/MeSkeleton';
// import { useAuth } from '@/hooks/useAuth';
// import { tw } from '@/utils/styles';
// import { Text } from '@/components/common/Text';
// import { meBlogService } from '@/services/index';
// import { BackButton } from '@/components/common/BackButton';
// import { HEADER_CONFIG } from '@/constants/header-config';
// import { BookOpen, Plus } from 'lucide-react-native';

// interface PickedImage {
//     uri: string;
//     mimeType?: string;
//     fileName?: string;
// }

// const blogTypeOptions = ['បទពិសោធន៍', 'វិធីសាស្ត្ររៀន', 'រឿងរ៉ាវ', 'គន្លឹះ'];
// const topicOptions = ['គណិតវិទ្យា', 'រូបវិទ្យា', 'គីមីវិទ្យា', 'ជីវវិទ្យា', 'អូឡាំពិច'];

// const blogTypeMapping: Record<string, string> = {
//     'បទពិសោធន៍': 'experience',
//     'វិធីសាស្ត្ររៀន': 'learning',
//     'រឿងរ៉ាវ': 'story',
//     'គន្លឹះ': 'tips',
// };

// const blogTopicMapping: Record<string, string> = {
//     'គណិតវិទ្យា': 'math',
//     'រូបវិទ្យា': 'physics',
//     'គីមីវិទ្យា': 'chemistry',
//     'ជីវវិទ្យា': 'biology',
//     'អូឡាំពិច': 'general',
// };

// export default function CreateBlogScreen() {
//     const navigation = useNavigation();
//     const router = useRouter();
//     const { user, loading: authLoading } = useAuth();

//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [blogType, setBlogType] = useState(blogTypeOptions[0]);
//     const [topic, setTopic] = useState(topicOptions[0]);
//     const [images, setImages] = useState<PickedImage[]>([]);
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     useLayoutEffect(() => {
//         navigation.setOptions({
//             headerTitle: 'បង្កើតប្លុក',
//             ...HEADER_CONFIG,
//         });
//     }, [navigation]);

//     useEffect(() => {
//         if (!authLoading && !user) {
//             router.replace('/auth');
//         }
//     }, [authLoading, user, router]);

//     const canSubmit = useMemo(() => {
//         return Boolean(title.trim() && description.trim());
//     }, [title, description]);

//     const pickImage = async () => {
//         if (images.length >= 4) return;

//         const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//         if (status !== 'granted') {
//             Alert.alert('ការអនុញ្ញាត', 'សូមផ្តល់ការអនុញ្ញាតដើម្បីជ្រើសរើសរូបភាព');
//             return;
//         }

//         const result = await ImagePicker.launchImageLibraryAsync({
//             mediaTypes: ImagePicker.MediaTypeOptions.Images,
//             quality: 0.8,
//             allowsEditing: true,
//         });

//         if (result.canceled || !result.assets?.length) {
//             return;
//         }

//         const asset = result.assets[0];
//         setImages((prev) => [
//             ...prev,
//             {
//                 uri: asset.uri,
//                 mimeType: asset.mimeType ?? 'image/jpeg',
//                 fileName: asset.fileName ?? `blog_${prev.length + 1}.jpg`,
//             },
//         ]);
//     };

//     const removeImage = (uri: string) => {
//         setImages((prev) => prev.filter((image) => image.uri !== uri));
//     };

//     const handleSubmit = async () => {
//         if (!canSubmit) return;
//         try {
//             setIsSubmitting(true);
//             const formData = new FormData();
//             formData.append('title', title.trim());
//             formData.append('description', description.trim());
//             formData.append('type', blogTypeMapping[blogType] ?? 'experience');
//             formData.append('topic', blogTopicMapping[topic] ?? 'general');

//             images.forEach((image, index) => {
//                 formData.append('images', {
//                     uri: image.uri,
//                     type: image.mimeType ?? 'image/jpeg',
//                     name: image.fileName ?? `blog_image_${index + 1}.jpg`,
//                 } as any);
//             });

//             await meBlogService.createBlog(formData);
//             Alert.alert('បានបង្កើត', 'ប្លុកត្រូវបានបង្កើតដោយជោគជ័យ', [
//                 {
//                     text: 'យល់ព្រម',
//                     onPress: () => router.replace('/me/blogs'),
//                 },
//             ]);
//         } catch (error) {
//             console.error('Error creating blog:', error);
//             Alert.alert('បរាជ័យ', 'មានបញ្ហាកើតឡើងពេលបង្កើតប្លុក សូមព្យាយាមម្ដងទៀត');
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     if (authLoading) {
//         return <MeSkeleton />;
//     }

//     if (!user) {
//         return null;
//     }

//     return (
//         <View style={tw('flex-1 bg-gray-50')}>
//             <Sidebar />
//             <ScrollView
//                 style={tw('flex-1')}
//                 contentContainerStyle={tw('p-4 pt-20 gap-6 pb-24')}
//                 keyboardShouldPersistTaps="handled"
//                 showsVerticalScrollIndicator={false}
//             >
//                 <BackButton href="/me/blogs" />

//                 <View style={tw('bg-white rounded-3xl border border-gray-200 p-4 gap-4')}>
//                     <View style={tw('flex-row items-center gap-2')}>
//                         <BookOpen size={18} color="#4F46E5" />
//                         <Text style={tw('text-lg font-kh-semibold text-gray-900')}>ព័ត៌មានប្លុក</Text>
//                     </View>

//                     <View style={tw('gap-2')}>
//                         <Text style={tw('text-sm font-kh-medium text-gray-700')}>ចំណងជើង</Text>
//                         <TextInput
//                             value={title}
//                             onChangeText={setTitle}
//                             placeholder="សរសេរចំណងជើងប្លុក..."
//                             placeholderTextColor="#9CA3AF"
//                             style={tw('border border-gray-300 rounded-3xl px-4 py-3 font-kh-medium text-base text-gray-900')}
//                         />
//                     </View>

//                     <View style={tw('gap-2')}>
//                         <Text style={tw('text-sm font-kh-medium text-gray-700')}>មាតិកា</Text>
//                         <TextInput
//                             value={description}
//                             onChangeText={setDescription}
//                             placeholder="សរសេរមាតិកាប្លុក..."
//                             placeholderTextColor="#9CA3AF"
//                             multiline
//                             textAlignVertical="top"
//                             style={tw('border border-gray-300 rounded-3xl px-4 py-3 min-h-[240px] font-kh-medium text-base text-gray-900')}
//                         />
//                     </View>
//                 </View>

//                 <View style={tw('bg-white rounded-3xl border border-gray-200 p-4 gap-4')}>
//                     <Text style={tw('text-sm font-kh-medium text-gray-700')}>ប្រភេទប្លុក</Text>
//                     <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={tw('gap-2')}>
//                         {blogTypeOptions.map((option) => (
//                             <Pressable
//                                 key={option}
//                                 onPress={() => setBlogType(option)}
//                                 style={tw(
//                                     `px-4 py-2 rounded-full border ${
//                                         blogType === option ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'
//                                     }`
//                                 )}
//                             >
//                                 <Text
//                                     style={tw(
//                                         `text-sm font-kh-medium ${
//                                             blogType === option ? 'text-indigo-600' : 'text-gray-600'
//                                         }`
//                                     )}
//                                 >
//                                     {option}
//                                 </Text>
//                             </Pressable>
//                         ))}
//                     </ScrollView>

//                     <Text style={tw('text-sm font-kh-medium text-gray-700')}>ប្រធានបទ</Text>
//                     <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={tw('gap-2')}>
//                         {topicOptions.map((option) => (
//                             <Pressable
//                                 key={option}
//                                 onPress={() => setTopic(option)}
//                                 style={tw(
//                                     `px-4 py-2 rounded-full border ${
//                                         topic === option ? 'border-indigo-500 bg-indigo-50' : 'border-gray-200'
//                                     }`
//                                 )}
//                             >
//                                 <Text
//                                     style={tw(
//                                         `text-sm font-kh-medium ${
//                                             topic === option ? 'text-indigo-600' : 'text-gray-600'
//                                         }`
//                                     )}
//                                 >
//                                     {option}
//                                 </Text>
//                             </Pressable>
//                         ))}
//                     </ScrollView>
//                 </View>

//                 <View style={tw('bg-white rounded-3xl border border-gray-200 p-4 gap-4')}>
//                     <Text style={tw('text-sm font-kh-medium text-gray-700')}>រូបភាព (អតិបរមា 4)</Text>
//                     <View style={tw('flex-row flex-wrap gap-3')}>
//                         {images.map((image) => (
//                             <View key={image.uri} style={tw('relative w-[48%] aspect-video rounded-3xl overflow-hidden border border-gray-200')}>
//                                 <Image source={{ uri: image.uri }} style={tw('w-full h-full')} resizeMode="cover" />
//                                 <Pressable
//                                     onPress={() => removeImage(image.uri)}
//                                     style={tw('absolute top-2 right-2 w-7 h-7 rounded-full bg-red-500 items-center justify-center')}
//                                 >
//                                     <Text style={tw('text-white font-kh-medium text-sm')}>×</Text>
//                                 </Pressable>
//                             </View>
//                         ))}
//                         {images.length < 4 && (
//                             <Pressable
//                                 onPress={pickImage}
//                                 style={tw('w-[48%] aspect-video border-2 border-dashed border-gray-300 rounded-3xl items-center justify-center gap-2')}
//                             >
//                                 <Plus size={20} color="#6B7280" />
//                                 <Text style={tw('text-sm text-gray-500 font-kh-medium')}>ជ្រើសរើសរូប</Text>
//                             </Pressable>
//                         )}
//                     </View>
//                 </View>

//                 <Pressable
//                     onPress={handleSubmit}
//                     disabled={!canSubmit || isSubmitting}
//                     style={tw(
//                         `self-center flex-row items-center gap-2 px-6 py-3 rounded-full ${
//                             !canSubmit || isSubmitting ? 'bg-indigo-200' : 'bg-indigo-600'
//                         }`
//                     )}
//                 >
//                     {isSubmitting ? (
//                         <ActivityIndicator color="#FFFFFF" size="small" />
//                     ) : (
//                         <Plus size={16} color="white" />
//                     )}
//                     <Text style={tw('text-white font-kh-medium text-sm')}>
//                         {isSubmitting ? 'កំពុងបង្កើត...' : 'បង្កើតប្លុក'}
//                     </Text>
//                 </Pressable>

//                 {!canSubmit && !isSubmitting && (
//                     <Text style={tw('text-xs text-center text-gray-500 font-kh-medium')}>
//                         សូមបំពេញចំណងជើង និងមាតិកា ជាមុនសិន
//                     </Text>
//                 )}
//             </ScrollView>
//         </View>
//     );
// }
