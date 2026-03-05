'use client';

import { useState, useRef, useEffect } from 'react';
import { Save, X, Eye } from 'lucide-react';
import { ForumPost } from '@core-types/api-types/forums';
import { Media } from '@core-types/api-types/media';
import { meForumService, feedForumService } from '@/services/index';
import { useRouter } from 'next/navigation';
import BlogEditor from '@/components/common/Editor';
import MarkDownRenderer from '@/components/helper/MarkDownRenderer';

interface EditForumProps {
    forum: ForumPost;
    onCancel: () => void;
}

export default function EditForum({ forum, onCancel }: EditForumProps) {
    const router = useRouter();
    // Edit form states
    const [title, setTitle] = useState(forum.title);
    const [description, setDescription] = useState(forum.description);
    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [existingImages, setExistingImages] = useState<Media[]>([]);
    const [removedImages, setRemovedImages] = useState<string[]>([]);
    const [previewSources, setPreviewSources] = useState<('existing' | 'new')[]>([]);
    const [isSaving, setIsSaving] = useState(false);
    const [showPreview, setShowPreview] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Initialize form with existing forum data
    useEffect(() => {
        setTitle(forum.title);
        setDescription(forum.description);
        setSelectedImages([]);
        setRemovedImages([]);

        if (forum.media && forum.media.length > 0) {
            setExistingImages(forum.media.map(media => media as Media) || []);
            const urls = forum.media.map(media => media.url) || [];
            setImagePreviews(urls);
            setPreviewSources(new Array(urls.length).fill('existing'));
        } else {
            setExistingImages([]);
            setImagePreviews([]);
            setPreviewSources([]);
        }
    }, [forum]);

    const handleDescriptionChange = (value: string) => {
        setDescription(value);
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        const remainingSlots = 4 - imagePreviews.length;
        const filesToAdd = files.slice(0, remainingSlots);

        if (filesToAdd.length > 0) {
            const newImages = [...selectedImages, ...filesToAdd];
            setSelectedImages(newImages);

            filesToAdd.forEach(file => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    setImagePreviews(prev => [...prev, e.target?.result as string]);
                    setPreviewSources(prev => [...prev, 'new']);
                };
                reader.readAsDataURL(file);
            });
        }
    };

    const handleImageClick = () => {
        if (imagePreviews.length < 4) {
            fileInputRef.current?.click();
        }
    };

    const removeImage = (index: number) => {
        const removedPreview = imagePreviews[index];
        const source = previewSources[index];

        if (source === 'existing') {
            setRemovedImages(prev => [...prev, removedPreview]);
        } else {
            const newImagesBeforeThis = previewSources.slice(0, index).filter(s => s === 'new').length;
            setSelectedImages(prev => prev.filter((_, i) => i !== newImagesBeforeThis));
        }

        setImagePreviews(prev => prev.filter((_, i) => i !== index));
        setPreviewSources(prev => prev.filter((_, i) => i !== index));

        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSave = async () => {
        if (!title.trim() || !description.trim()) {
            alert('សូមបំពេញចំណងជើងនិងមាតិកា');
            return;
        }

        try {
            setIsSaving(true);

            // Build multipart form data per new controller
            const formData = new FormData();
            formData.append('title', title.trim());
            formData.append('description', description.trim());

            // Newly added images (field name must be 'images')
            if (selectedImages.length > 0) {
                selectedImages.forEach((file) => {
                    formData.append('images', file);
                });
            }

            // Photos to remove must be a JSON string of objects { url }
            if (removedImages.length > 0) {
                const photosPayload = JSON.stringify(removedImages.map((url) => ({ url })));
                formData.append('photosToRemove', photosPayload);
            }
            await meForumService.updateForum(forum.id.toString(), formData);
            const updatedForum = await feedForumService.getForumById(forum.id.toString());
            router.push(`/me/forums/${forum.id}`);

            // Update the forum state with the new data
            setTitle(updatedForum.data.title);
            setDescription(updatedForum.data.description);
            setExistingImages(updatedForum.data.media.map(media => media as Media) || []);
            setImagePreviews(updatedForum.data.media.map(media => media.url) || []);
            setPreviewSources(updatedForum.data.media.map(() => 'existing') || []);

            // Reset edit form states
            setSelectedImages([]);
            setRemovedImages([]);
        } catch (error) {
            console.error('Error updating forum:', error);
            alert('មានបញ្ហាកើតឡើងពេលរក្សាទុកវេទិកា សូមព្យាយាមម្តងទៀត');
        } finally {
            setIsSaving(false);
        }
    };

    const resetEditForm = () => {
        setTitle(forum.title);
        setDescription(forum.description);
        setSelectedImages([]);
        setRemovedImages([]);

        if (forum.media && forum.media.length > 0) {
            setExistingImages(forum.media.map(media => media as Media) || []);
            setImagePreviews(forum.media.map(media => media.url) || []);
            setPreviewSources(new Array(forum.media.length).fill('existing'));
        } else {
            setExistingImages([]);
            setImagePreviews([]);
            setPreviewSources([]);
        }
    };

    return (
        <div className="max-w-7xl mx-auto ">

            {/* Edit Form */}
            <div className="rounded-2xl shadow-lg p-6 transition-colors duration-200 bg-white border border-gray-200">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold mb-2 flex items-center gap-2 text-gray-700">
                        កែប្រែវេទិកា
                    </h1>
                </div>

                {/* Title Input */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                        ចំណងជើង
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="សរសេរចំណងជើងវេទិការបស់អ្នក..."
                        className="w-full px-4 py-3 bg-indigo-50 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-colors duration-200 border border-gray-200"
                    />
                </div>

                {/* Image Upload Area */}
                <div className="mb-6">
                    <label className="block text-sm font-medium mb-2 text-gray-700">
                        រូបគំរូ (អតិបរមា 4 រូប)
                    </label>
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                        className="hidden"
                    />

                    {/* 2x2 Grid for Images */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                        {imagePreviews.map((preview, index) => (
                            <div key={index} className="relative aspect-video rounded-3xl overflow-hidden border border-gray-200">
                                <img
                                    src={preview}
                                    alt={`Preview ${index + 1}`}
                                    className="w-full h-full object-contain"
                                />
                                <button
                                    onClick={() => removeImage(index)}
                                    className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </div>
                        ))}

                        {/* Upload Button (if less than 4 images) */}
                        {imagePreviews.length < 4 && (
                            <div
                                onClick={handleImageClick}
                                className="aspect-video border-2 border-dashed border-gray-300 rounded-3xl flex flex-col items-center justify-center hover:border-indigo-400 transition-colors duration-200 cursor-pointer"
                            >
                                <div className="text-4xl text-gray-400 mb-2">+</div>
                                <p className="text-xs text-gray-500 text-center">អូសរូបឬ</p>
                                <button className="text-xs font-medium text-indigo-600">
                                    ជ្រើសរើសរូប
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Image Count Info */}
                    <div className="mt-2 text-xs text-gray-500">
                        {imagePreviews.length}/4 រូប
                    </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                        <label className="block text-sm font-medium text-gray-700">
                            មាតិកា
                        </label>
                        <button
                            type="button"
                            onClick={() => setShowPreview(!showPreview)}
                            className="flex items-center gap-2 px-3 py-1.5 text-sm bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors"
                        >
                            <Eye className="w-4 h-4" />
                            {showPreview ? 'កែប្រែ' : 'មើលជាមុន'}
                        </button>
                    </div>

                    {!showPreview ? (
                        <BlogEditor
                            value={description}
                            onChange={handleDescriptionChange}
                            height="400px"
                        />
                    ) : (
                        <div className="border border-gray-200 rounded-3xl p-4 bg-white min-h-[400px]">
                            <div className="prose prose-lg max-w-none">
                                <MarkDownRenderer content={description} />
                            </div>
                        </div>
                    )}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end gap-3 pt-4 border-t border-gray-200">
                    <button
                        onClick={() => {
                            resetEditForm();
                            onCancel();
                        }}
                        className="px-6 py-2 bg-gray-500 text-white rounded-full transition-colors duration-200 hover:bg-gray-600 font-medium"
                    >
                        បោះបង់
                    </button>
                    <button
                        onClick={handleSave}
                        disabled={!title.trim() || !description.trim() || isSaving}
                        className="px-6 py-2 bg-indigo-500 text-white rounded-full transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed font-medium flex items-center gap-2"
                    >
                        {isSaving ? (
                            <>
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                កំពុងរក្សាទុក...
                            </>
                        ) : (
                            <>
                                <Save className="w-4 h-4" />
                                រក្សាទុក
                            </>
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}
