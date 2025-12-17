// 'use client';

// import { useState, useRef, useEffect } from 'react';
// import { ArrowLeft, Book, Trash, Plus, Save, Eye } from 'lucide-react';
// import Link from 'next/link';
// import { Blog } from '@/types/content/blogs';
// import { Media } from '@/types/content/media';
// import { meBlogService, feedBlogService } from '@/services/index';
// import BlogEditor from '@/components/common/Editor';
// import MarkDownRenderer from '@/components/helper/MarkDownRenderer';
// import { BackButton } from '@/components/common/BackButton';

// interface EditBlogProps {
//     blog: Blog;
//     onSave: (updatedBlog: Blog) => void;
//     onCancel: () => void;
// }

// export default function EditBlog({ blog, onSave, onCancel }: EditBlogProps) {
//     // Edit form states
//     const [title, setTitle] = useState(blog.title);
//     const [bodyText, setBodyText] = useState(blog.description);
//     const [selectedImages, setSelectedImages] = useState<File[]>([]);
//     const [imagePreviews, setImagePreviews] = useState<string[]>([]);
//     const [existingImages, setExistingImages] = useState<Media[]>([]);
//     const [removedImages, setRemovedImages] = useState<string[]>([]);
//     const [previewSources, setPreviewSources] = useState<('existing' | 'new')[]>([]);
//     const [titleCharCount, setTitleCharCount] = useState(blog.title.length);
//     const [blogTypes, setBlogTypes] = useState<string[]>(blog.type ? [blog.type] : []);
//     const [topics, setSelectedTopics] = useState<string[]>(blog.topic ? [blog.topic] : []);
//     const [isSaving, setIsSaving] = useState(false);
//     const [showPreview, setShowPreview] = useState(false);
//     const fileInputRef = useRef<HTMLInputElement>(null);


//     // Initialize form with existing blog data
//     useEffect(() => {
//         setTitle(blog.title);
//         setTitleCharCount(blog.title.length);
//         setBodyText(blog.description);
//         setBlogTypes(blog.type ? [blog.type] : []);
//         setSelectedTopics(blog.topic ? [blog.topic] : []);

//         // Set existing images as previews and track them separately
//         if (blog.media && blog.media.length > 0) {
//             setExistingImages(blog.media);
//             const urls = blog.media.map((media: Media) => media.url);
//             setImagePreviews(urls);
//             setPreviewSources(new Array(urls.length).fill('existing'));
//         } else {
//             setExistingImages([]);
//             setImagePreviews([]);
//             setPreviewSources([]);
//         }
//     }, [blog]);

//     // Debug useEffect to monitor state changes
//     useEffect(() => {
//         console.log('State changed - imagePreviews:', imagePreviews);
//         console.log('State changed - previewSources:', previewSources);
//         console.log('State changed - existingImages:', existingImages);
//         console.log('State changed - removedImages:', removedImages);
//     }, [imagePreviews, previewSources, existingImages, removedImages]);

//     const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const value = e.target.value;
//         setTitle(value);
//         setTitleCharCount(value.length);
//     };

//     const handleBodyTextChange = (value: string) => {
//         setBodyText(value);
//     };

//     const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const files = Array.from(e.target.files || []);
//         const remainingSlots = 4 - imagePreviews.length;
//         const filesToAdd = files.slice(0, remainingSlots);

//         if (filesToAdd.length > 0) {
//             const newImages = [...selectedImages, ...filesToAdd];
//             setSelectedImages(newImages);

//             // Generate previews for new images
//             filesToAdd.forEach(file => {
//                 const reader = new FileReader();
//                 reader.onload = (e) => {
//                     setImagePreviews(prev => [...prev, e.target?.result as string]);
//                     setPreviewSources(prev => [...prev, 'new']);
//                 };
//                 reader.readAsDataURL(file);
//             });
//         }
//     };

//     const handleImageClick = () => {
//         if (imagePreviews.length < 4) {
//             fileInputRef.current?.click();
//         }
//     };

//     const removeImage = (index: number) => {
//         const removedPreview = imagePreviews[index];
//         const source = previewSources[index];

//         console.log('Removing image at index:', index, 'Source:', source, 'Preview:', removedPreview);

//         if (source === 'existing') {
//             // This is an existing image, add it to removedImages
//             setRemovedImages(prev => {
//                 const newRemoved = [...prev, removedPreview];
//                 console.log('Updated removedImages:', newRemoved);
//                 return newRemoved;
//             });
//         } else {
//             // This is a newly selected image, remove it from selectedImages
//             const newImagesBeforeThis = previewSources.slice(0, index).filter(s => s === 'new').length;
//             setSelectedImages(prev => prev.filter((_, i) => i !== newImagesBeforeThis));
//         }

//         // Remove from previews and sources
//         setImagePreviews(prev => prev.filter((_, i) => i !== index));
//         setPreviewSources(prev => prev.filter((_, i) => i !== index));

//         if (fileInputRef.current) {
//             fileInputRef.current.value = '';
//         }
//     };


//     const handleSave = async () => {
//         if (!title.trim() || !bodyText.trim()) {
//             alert('សូមបំពេញចំណងជើងនិងមាតិកា');
//             return;
//         }

//         try {
//             setIsSaving(true);

//             // Build multipart form data per new controller
//             const formData = new FormData();
//             formData.append('title', title.trim());
//             formData.append('description', bodyText.trim());
//             formData.append('type', blogTypes[0] || '');
//             formData.append('topic', topics[0] || '');

//             // Newly added images (field name must be 'images')
//             if (selectedImages.length > 0) {
//                 selectedImages.forEach((file) => {
//                     formData.append('images', file);
//                 });
//             }

//             // Photos to remove must be a JSON string of objects { url }
//             if (removedImages.length > 0) {
//                 const photosPayload = JSON.stringify(removedImages.map((url) => ({ url })));
//                 formData.append('photosToRemove', photosPayload);
//             }

//             await meBlogService.updateBlog(blog.id.toString(), formData);

//             // Fetch updated blog data
//             const updatedResponse = await feedBlogService.getBlogById(blog.id.toString());
//             onSave(updatedResponse);

//             // Reset edit form states
//             setSelectedImages([]);
//             setRemovedImages([]);
//         } catch (error) {
//             console.error('Error updating blog:', error);
//             alert('មានបញ្ហាកើតឡើងពេលរក្សាទុកប្លុក សូមព្យាយាមម្តងទៀត');
//         } finally {
//             setIsSaving(false);
//         }
//     };

//     const resetEditForm = () => {
//         setTitle(blog.title);
//         setTitleCharCount(blog.title.length);
//         setBodyText(blog.description);
//         setBlogTypes(blog.type ? [blog.type] : []);
//         setSelectedTopics(blog.topic ? [blog.topic] : []);
//         setSelectedImages([]);
//         setRemovedImages([]);

//         if (blog.media && blog.media.length > 0) {
//             setExistingImages(blog.media);
//             setImagePreviews(blog.media.map(media => media.url));
//             setPreviewSources(new Array(blog.media.length).fill('existing'));
//         } else {
//             setExistingImages([]);
//             setImagePreviews([]);
//             setPreviewSources([]);
//         }
//     };

//     return (
//         <div className=" mx-auto p-5">
//             {/* Header */}
//             <BackButton href="/me/blogs" />
//             <div className="mb-6 flex items-center justify-end">
//                 <button
//                     onClick={() => {
//                         resetEditForm();
//                         onCancel();
//                     }}
//                     className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors font-medium"
//                 >
//                     <Eye className="w-4 h-4" />
//                     មើល
//                 </button>
//             </div>

//             {/* Edit Post Form */}
//             <div className="lg:rounded-3xl lg:shadow-lg lg:p-6 lg:transition-colors lg:duration-200 lg:bg-white lg:border lg:border-gray-200">
//                 {/* Header */}
//                 <div className="mb-6">
//                     <h1 className="text-2xl font-bold mb-2 flex items-center gap-2 text-gray-700">
//                         <Book className='w-6 h-6' style={{ color: '#6366f1' }} />
//                         កែប្រែអត្ថបទ
//                     </h1>
//                 </div>

//                 {/* Title Input */}
//                 <div className="mb-6">
//                     <label className="block text-sm font-medium mb-2" style={{ color: 'var(--text-primary)' }}>
//                         ចំណងជើង
//                     </label>
//                     <input
//                         type="text"
//                         value={title}
//                         onChange={handleTitleChange}
//                         placeholder="សរសេរចំណងជើងអត្ថបទរបស់អ្នក..."
//                         className="w-full px-4 py-3 bg-white rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 border border-gray-200"
//                         maxLength={300}
//                     />
//                     <div className="flex justify-between items-center mt-2">
//                         <span className="text-xs text-gray-500">
//                             {titleCharCount}/300
//                         </span>
//                     </div>
//                 </div>

//                 {/* Blog Type and Topic Selection */}
//                 {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//                     <div className="lg:bg-white bg-gray-50 rounded-2xl lg:shadow-sm lg:p-6">
//                         <div className="flex items-center justify-between mb-6 pb-4">
//                             <div className="text-indigo-600 font-semibold text-xl flex gap-3 items-center">
//                                 <Tag className="text-indigo-600" />
//                                 ប្រភេទប្លុក
//                             </div>
//                         </div>
//                         <div className="space-y-6">
//                             <div className="relative">
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     ប្រភេទប្លុក
//                                 </label>
//                                 <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent">
//                                     <Tag size={18} className="text-gray-400" />
//                                     <input
//                                         type="text"
//                                         placeholder="វាយបញ្ចូលប្រភេទប្លុក..."
//                                         className="flex-1 outline-none"
//                                         onKeyPress={(e) => {
//                                             if (e.key === 'Enter') {
//                                                 const target = e.target as HTMLInputElement;
//                                                 if (target.value.trim() && !blogTypes.includes(target.value.trim())) {
//                                                     addBlogType(target.value.trim());
//                                                     target.value = '';
//                                                 }
//                                             }
//                                         }}
//                                     />
//                                 </div>
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     អនុសាសន៍
//                                 </label>
//                                 <div className="flex flex-wrap gap-2">
//                                     {suggestedBlogTypes.map((type) => (
//                                         <button
//                                             key={type}
//                                             onClick={() => addBlogType(type)}
//                                             disabled={blogTypes.includes(type)}
//                                             className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                                         >
//                                             {type}
//                                         </button>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     ប្រភេទដែលបានជ្រើសរើស
//                                 </label>
//                                 <div className="flex flex-wrap gap-2">
//                                     {blogTypes.map((type, index) => (
//                                         <span
//                                             key={index}
//                                             className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-100 text-indigo-700 rounded-full border border-indigo-200"
//                                         >
//                                             {type}
//                                             <button
//                                                 onClick={removeBlogType}
//                                                 className="text-indigo-600 hover:text-indigo-800"
//                                             >
//                                                 <X className="w-4 h-4" />
//                                             </button>
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="lg:bg-white bg-gray-50 rounded-2xl lg:shadow-sm lg:p-6">
//                         <div className="flex items-center justify-between mb-6 pb-4">
//                             <div className="text-indigo-600 font-semibold text-xl flex gap-3 items-center">
//                                 <Tag className="text-indigo-600" />
//                                 ប្រធានបទ
//                             </div>
//                         </div>
//                         <div className="space-y-6">
//                             <div className="relative">
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     ប្រធានបទ
//                                 </label>
//                                 <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent">
//                                     <Tag size={18} className="text-gray-400" />
//                                     <input
//                                         type="text"
//                                         placeholder="វាយបញ្ចូលប្រធានបទ..."
//                                         className="flex-1 outline-none"
//                                         onKeyPress={(e) => {
//                                             if (e.key === 'Enter') {
//                                                 const target = e.target as HTMLInputElement;
//                                                 if (target.value.trim() && !topics.includes(target.value.trim())) {
//                                                     addTopic(target.value.trim());
//                                                     target.value = '';
//                                                 }
//                                             }
//                                         }}
//                                     />
//                                 </div>
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     អនុសាសន៍
//                                 </label>
//                                 <div className="flex flex-wrap gap-2">
//                                     {suggestedTopics.map((topic) => (
//                                         <button
//                                             key={topic}
//                                             onClick={() => addTopic(topic)}
//                                             disabled={topics.includes(topic)}
//                                             className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
//                                         >
//                                             {topic}
//                                         </button>
//                                     ))}
//                                 </div>
//                             </div>

//                             <div>
//                                 <label className="block text-sm font-medium text-gray-700 mb-2">
//                                     ប្រធានបទដែលបានជ្រើសរើស
//                                 </label>
//                                 <div className="flex flex-wrap gap-2">
//                                     {topics.map((topic, index) => (
//                                         <span
//                                             key={index}
//                                             className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-100 text-indigo-700 rounded-full border border-indigo-200"
//                                         >
//                                             {topic}
//                                             <button
//                                                 onClick={removeTopic}
//                                                 className="text-indigo-600 hover:text-indigo-800"
//                                             >
//                                                 <X className="w-4 h-4" />
//                                             </button>
//                                         </span>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div> */}

//                 {/* Image Upload Area */}
//                 <div className="mb-6">
//                     <label className="block text-sm font-medium mb-2 text-gray-700">
//                         រូបគំរូ (អតិបរមា 4 រូប)
//                     </label>
//                     <input
//                         ref={fileInputRef}
//                         type="file"
//                         accept="image/*"
//                         multiple
//                         onChange={handleImageUpload}
//                         className="hidden"
//                     />

//                     {/* 2x2 Grid for Images */}
//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
//                         {imagePreviews.map((preview, index) => (
//                             <div key={index} className="relative aspect-video rounded-3xl overflow-hidden border border-gray-200">
//                                 <img
//                                     src={preview}
//                                     alt={`Preview ${index + 1}`}
//                                     className="w-full h-full object-contain"
//                                 />
//                                 <button
//                                     onClick={() => removeImage(index)}
//                                     className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200 cursor-pointer"
//                                 >
//                                     <Trash className="w-3 h-3" />
//                                 </button>
//                             </div>
//                         ))}

//                         {/* Upload Button (if less than 4 images) */}
//                         {imagePreviews.length < 4 && (
//                             <div
//                                 onClick={handleImageClick}
//                                 className="aspect-video border-2 border-dashed rounded-3xl flex flex-col items-center justify-center hover:border-indigo-400 transition-colors duration-200 cursor-pointer"
//                             >
//                                 <Plus className="w-6 h-6 mb-2 text-gray-500" />
//                                 <p className="text-xs text-gray-500 text-center">អូសរូបឬ</p>
//                                 <button className="text-xs font-medium" style={{ color: '#6366f1' }}>
//                                     ជ្រើសរើសរូប
//                                 </button>
//                             </div>
//                         )}
//                     </div>

//                     {/* Image Count Info */}
//                     <div className="mt-2 text-xs text-gray-500">
//                         {imagePreviews.length}/4 រូប
//                     </div>
//                 </div>

//                 {/* Body Text */}
//                 <div className="mb-6">
//                     <div className="flex items-center justify-between mb-2">
//                         <label className="block text-sm font-medium text-gray-700">
//                             មាតិកា
//                         </label>
//                         <button
//                             type="button"
//                             onClick={() => setShowPreview(!showPreview)}
//                             className="flex items-center gap-2 px-3 py-1.5 text-sm bg-indigo-50 text-indigo-600 rounded-full hover:bg-indigo-100 transition-colors"
//                         >
//                             <Eye className="w-4 h-4" />
//                             {showPreview ? 'កែប្រែ' : 'មើលជាមុន'}
//                         </button>
//                     </div>

//                     {!showPreview ? (
//                         <BlogEditor
//                             value={bodyText}
//                             onChange={handleBodyTextChange}
//                             height="400px"
//                         />
//                     ) : (
//                         <div className="border border-gray-200 rounded-3xl p-4 bg-white min-h-[400px]">
//                             <div className="prose prose-lg max-w-none">
//                                 <MarkDownRenderer content={bodyText} />
//                             </div>
//                         </div>
//                     )}
//                 </div>

//                 {/* Action Buttons */}
//                 <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
//                     <button
//                         onClick={() => {
//                             resetEditForm();
//                             onCancel();
//                         }}
//                         className="px-6 py-2 bg-gray-500 text-white rounded-full transition-colors duration-200 hover:bg-gray-600 font-medium"
//                     >
//                         បោះបង់
//                     </button>
//                     <button
//                         onClick={handleSave}
//                         disabled={!title.trim() || !bodyText.trim() || isSaving}
//                         className="px-6 py-2 bg-indigo-500 text-white rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center gap-2"
//                     >
//                         {isSaving ? (
//                             <>
//                                 <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
//                                 កំពុងរក្សាទុក...
//                             </>
//                         ) : (
//                             <>
//                                 <Save className="w-4 h-4" />
//                                 រក្សាទុក
//                             </>
//                         )}
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }
