// import { useEffect, useMemo, useState } from 'react';
// import { View, ScrollView, Pressable, Image, TextInput, Alert, ActivityIndicator } from 'react-native';
// import { Eye, Image as ImageIcon, Plus, Save, X } from 'lucide-react-native';
// import * as ImagePicker from 'expo-image-picker';
// import { Blog } from '@core-types/api-types/blogs';
// import { Media } from '@core-types/api-types/media';
// import { meBlogService, feedBlogService } from '@/services/index';
// import { tw } from '@/utils/styles';
// import { Text } from '@/components/common/Text';
// // import MarkDownRenderer from '@/components/helper/MarkDownRenderer';

// interface EditBlogProps {
//     blog: Blog;
//     onSave: (updatedBlog: Blog) => void;
//     onCancel: () => void;
// }

// interface SelectedImage {
//     uri: string;
//     name: string;
//     type: string;
// }

// export default function EditBlog({ blog, onSave, onCancel }: EditBlogProps) {
//     const [title, setTitle] = useState(blog.title);
//     const [description, setDescription] = useState(blog.description);
//     const [blogType, setBlogType] = useState(blog.type ?? '');
//     const [topic, setTopic] = useState(blog.topic ?? '');
//     const [existingImages, setExistingImages] = useState<Media[]>(blog.media ?? []);
//     const [removedImages, setRemovedImages] = useState<string[]>([]);
//     const [selectedImages, setSelectedImages] = useState<SelectedImage[]>([]);
//     const [isSaving, setIsSaving] = useState(false);
//     const [showPreview, setShowPreview] = useState(false);

//     useEffect(() => {
//         setTitle(blog.title);
//         setDescription(blog.description);
//         setBlogType(blog.type ?? '');
//         setTopic(blog.topic ?? '');
//         setExistingImages(blog.media ?? []);
//         setRemovedImages([]);
//         setSelectedImages([]);
//     }, [blog]);

//     const hasChanges = useMemo(() => {
//         const hasImageChanges = removedImages.length > 0 || selectedImages.length > 0;
//         return (
//             title.trim() !== blog.title.trim() ||
//             description.trim() !== blog.description.trim() ||
//             blogType.trim() !== (blog.type ?? '').trim() ||
//             topic.trim() !== (blog.topic ?? '').trim() ||
//             hasImageChanges
//         );
//     }, [title, description, blogType, topic, removedImages, selectedImages, blog]);

//     const handlePickImage = async () => {
//         try {
//             const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
//             if (status !== 'granted') {
//                 Alert.alert('ការអនុញ្ញាត', 'សូមផ្តល់ការអនុញ្ញាតដើម្បីជ្រើសរើសរូបភាពពីក្លែងថតរបស់អ្នក');
//                 return;
//             }

//             const result = await ImagePicker.launchImageLibraryAsync({
//                 mediaTypes: ImagePicker.MediaTypeOptions.Images,
//                 allowsEditing: false,
//                 quality: 0.8,
//             });

//             if (result.canceled) return;

//             const asset = result.assets?.[0];
//             if (!asset || !asset.uri) return;

//             setSelectedImages((prev) => [
//                 ...prev,
//                 {
//                     uri: asset.uri,
//                     name: asset.fileName ?? `image_${prev.length + 1}.${asset.type ?? 'jpg'}`,
//                     type: asset.mimeType ?? 'image/jpeg',
//                 },
//             ]);
//         } catch (error) {
//             console.error('Error picking image:', error);
//             Alert.alert('បរាជ័យ', 'មិនអាចជ្រើសរើសរូបភាពបានទេ។ សូមព្យាយាមម្ដងទៀត។');
//         }
//     };

//     const handleRemoveExistingImage = (url: string) => {
//         setExistingImages((prev) => prev.filter((image) => image.url !== url));
//         setRemovedImages((prev) => [...prev, url]);
//     };

//     const handleRemoveNewImage = (uri: string) => {
//         setSelectedImages((prev) => prev.filter((image) => image.uri !== uri));
//     };

//     const resetForm = () => {
//         setTitle(blog.title);
//         setDescription(blog.description);
//         setBlogType(blog.type ?? '');
//         setTopic(blog.topic ?? '');
//         setExistingImages(blog.media ?? []);
//         setRemovedImages([]);
//         setSelectedImages([]);
//     };

//     const handleSave = async () => {
//         if (!title.trim() || !description.trim()) {
//             Alert.alert('ព័ត៍មានមិនគ្រប់គ្រាន់', 'សូមបំពេញចំណងជើង និងមាតិកាប្លុករបស់អ្នក');
//             return;
//         }

//         try {
//             setIsSaving(true);
//             const formData = new FormData();
//             formData.append('title', title.trim());
//             formData.append('description', description.trim());
//             formData.append('type', blogType.trim());
//             formData.append('topic', topic.trim());

//             selectedImages.forEach((image, index) => {
//                 formData.append('images', {
//                     uri: image.uri,
//                     name: image.name ?? `image_${index}.jpg`,
//                     type: image.type ?? 'image/jpeg',
//                 } as any);
//             });

//             if (removedImages.length > 0) {
//                 const payload = JSON.stringify(removedImages.map((url) => ({ url })));
//                 formData.append('photosToRemove', payload);
//             }

//             await meBlogService.updateBlog(blog.id.toString(), formData);
//             const updatedBlog = await feedBlogService.getBlogById(blog.id.toString());
//             onSave(updatedBlog);
//             setRemovedImages([]);
//             setSelectedImages([]);
//         } catch (error) {
//             console.error('Error updating blog:', error);
//             Alert.alert('បរាជ័យ', 'មានបញ្ហាកើតឡើងពេលរក្សាទុកប្លុក សូមព្យាយាមម្ដងទៀត');
//         } finally {
//             setIsSaving(false);
//         }
//     };

//     return (
//         <ScrollView
//             style={tw('flex-1')}
//             contentContainerStyle={tw('p-4 pb-12 gap-6')}
//             showsVerticalScrollIndicator={false}
//         >
//             <View style={tw('flex-row justify-between items-center')}>
//                 <Text style={tw('text-2xl font-kh-bold text-gray-900')}>កែប្រែអត្ថបទ</Text>
//                 <Pressable
//                     onPress={() => {
//                         resetForm();
//                         onCancel();
//                     }}
//                     style={tw('flex-row items-center gap-2 px-4 py-2 bg-gray-600 rounded-full')}
//                 >
//                     <Eye size={16} color="white" />
//                     <Text style={tw('text-white font-kh-medium text-sm')}>មើល</Text>
//                 </Pressable>
//             </View>

//             <View style={tw('gap-4 bg-white rounded-3xl p-4 border border-gray-200')}>
//                 <View style={tw('gap-2')}>
//                     <Text style={tw('text-sm font-kh-medium text-gray-700')}>ចំណងជើង</Text>
//                     <TextInput
//                         value={title}
//                         onChangeText={setTitle}
//                         placeholder="សរសេរចំណងជើងអត្ថបទរបស់អ្នក..."
//                         placeholderTextColor="#9CA3AF"
//                         style={tw('border border-gray-300 rounded-3xl px-4 py-3 font-kh-medium text-base text-gray-900')}
//                         maxLength={300}
//                     />
//                     <View style={tw('flex-row justify-end')}>
//                         <Text style={tw('text-xs text-gray-500')}>{title.length}/300</Text>
//                     </View>
//                 </View>

//                 <View style={tw('gap-2')}>
//                     <Text style={tw('text-sm font-kh-medium text-gray-700')}>ប្រភេទប្លុក</Text>
//                     <TextInput
//                         value={blogType}
//                         onChangeText={setBlogType}
//                         placeholder="វាយបញ្ចូលប្រភេទប្លុក..."
//                         placeholderTextColor="#9CA3AF"
//                         style={tw('border border-gray-300 rounded-3xl px-4 py-3 font-kh-medium text-base text-gray-900')}
//                     />
//                 </View>

//                 <View style={tw('gap-2')}>
//                     <Text style={tw('text-sm font-kh-medium text-gray-700')}>ប្រធានបទ</Text>
//                     <TextInput
//                         value={topic}
//                         onChangeText={setTopic}
//                         placeholder="វាយបញ្ចូលប្រធានបទ..."
//                         placeholderTextColor="#9CA3AF"
//                         style={tw('border border-gray-300 rounded-3xl px-4 py-3 font-kh-medium text-base text-gray-900')}
//                     />
//                 </View>

//                 <View style={tw('gap-2')}>
//                     <View style={tw('flex-row justify-between items-center')}>
//                         <Text style={tw('text-sm font-kh-medium text-gray-700')}>រូបគំរូ (អតិបរមា 4)</Text>
//                         <Pressable
//                             onPress={handlePickImage}
//                             disabled={existingImages.length + selectedImages.length >= 4}
//                             style={tw(
//                                 `flex-row items-center gap-2 px-3 py-1.5 rounded-full ${existingImages.length + selectedImages.length >= 4
//                                     ? 'bg-gray-200'
//                                     : 'bg-indigo-100'
//                                 }`
//                             )}
//                         >
//                             <ImageIcon
//                                 size={16}
//                                 color={existingImages.length + selectedImages.length >= 4 ? '#9CA3AF' : '#4F46E5'}
//                             />
//                             <Text
//                                 style={tw(
//                                     `text-xs font-kh-medium ${existingImages.length + selectedImages.length >= 4
//                                         ? 'text-gray-500'
//                                         : 'text-indigo-600'
//                                     }`
//                                 )}
//                             >
//                                 បន្ថែមរូបភាព
//                             </Text>
//                         </Pressable>
//                     </View>

//                     <View style={tw('flex-row flex-wrap gap-3')}>
//                         {existingImages.map((image) => (
//                             <View
//                                 key={image.url}
//                                 style={tw('relative w-[48%] aspect-video border border-gray-200 rounded-3xl overflow-hidden')}
//                             >
//                                 <Image source={{ uri: image.url }} style={tw('w-full h-full')} resizeMode="cover" />
//                                 <Pressable
//                                     onPress={() => handleRemoveExistingImage(image.url)}
//                                     style={tw('absolute top-2 right-2 w-7 h-7 rounded-full bg-red-500 items-center justify-center')}
//                                 >
//                                     <X size={16} color="white" />
//                                 </Pressable>
//                             </View>
//                         ))}
//                         {selectedImages.map((image) => (
//                             <View
//                                 key={image.uri}
//                                 style={tw('relative w-[48%] aspect-video border border-gray-200 rounded-3xl overflow-hidden')}
//                             >
//                                 <Image source={{ uri: image.uri }} style={tw('w-full h-full')} resizeMode="cover" />
//                                 <Pressable
//                                     onPress={() => handleRemoveNewImage(image.uri)}
//                                     style={tw('absolute top-2 right-2 w-7 h-7 rounded-full bg-red-500 items-center justify-center')}
//                                 >
//                                     <X size={16} color="white" />
//                                 </Pressable>
//                             </View>
//                         ))}
//                         {existingImages.length + selectedImages.length === 0 && (
//                             <Pressable
//                                 onPress={handlePickImage}
//                                 style={tw('w-full aspect-video border-2 border-dashed border-gray-300 rounded-3xl items-center justify-center gap-2')}
//                             >
//                                 <Plus size={20} color="#6B7280" />
//                                 <Text style={tw('text-sm text-gray-500 font-kh-medium')}>
//                                     ជ្រើសរើសរូបភាពដំបូងរបស់អ្នក
//                                 </Text>
//                             </Pressable>
//                         )}
//                     </View>
//                 </View>

//                 <View style={tw('gap-2')}>
//                     <View style={tw('flex-row justify-between items-center')}>
//                         <Text style={tw('text-sm font-kh-medium text-gray-700')}>មាតិកា</Text>
//                         <Pressable
//                             onPress={() => setShowPreview((prev) => !prev)}
//                             style={tw('flex-row items-center gap-2 px-3 py-1.5 bg-indigo-50 rounded-full')}
//                         >
//                             <Eye size={16} color="#4F46E5" />
//                             <Text style={tw('text-xs font-kh-medium text-indigo-600')}>
//                                 {showPreview ? 'កែប្រែ' : 'មើលជាមុន'}
//                             </Text>
//                         </Pressable>
//                     </View>

//                     {!showPreview ? (
//                         <TextInput
//                             value={description}
//                             onChangeText={setDescription}
//                             placeholder="សរសេរមាតិកាប្លុករបស់អ្នក..."
//                             placeholderTextColor="#9CA3AF"
//                             multiline
//                             textAlignVertical="top"
//                             style={tw('border border-gray-300 rounded-3xl px-4 py-3 min-h-[240px] font-kh-medium text-base text-gray-900')}
//                         />
//                     ) : (
//                         <View style={tw('border border-gray-200 rounded-3xl p-4 bg-white min-h-[240px]')}>
//                             <Text >{description} </Text>
//                         </View>
//                     )}
//                 </View>

//                 <View style={tw('flex-row justify-end gap-3 pt-2')}>
//                     <Pressable
//                         onPress={() => {
//                             resetForm();
//                             onCancel();
//                         }}
//                         style={tw('px-4 py-2 bg-gray-500 rounded-full')}
//                     >
//                         <Text style={tw('text-white font-kh-medium text-sm')}>បោះបង់</Text>
//                     </Pressable>
//                     <Pressable
//                         onPress={handleSave}
//                         disabled={!hasChanges || isSaving}
//                         style={tw(
//                             `flex-row items-center gap-2 px-4 py-2 rounded-full ${!hasChanges || isSaving ? 'bg-indigo-200' : 'bg-indigo-500'
//                             }`
//                         )}
//                     >
//                         {isSaving ? (
//                             <ActivityIndicator color="#FFFFFF" size="small" />
//                         ) : (
//                             <Save size={16} color="white" />
//                         )}
//                         <Text style={tw('text-white font-kh-medium text-sm')}>
//                             {isSaving ? 'កំពុងរក្សាទុក...' : 'រក្សាទុក'}
//                         </Text>
//                     </Pressable>
//                 </View>
//             </View>
//         </ScrollView>
//     );
// }
