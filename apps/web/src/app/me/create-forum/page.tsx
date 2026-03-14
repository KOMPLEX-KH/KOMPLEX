'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageCircle, Trash, Tag, X, Plus } from 'lucide-react';
import { meForumService } from '@/services/index';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuth } from '@hooks/useAuth';
import BlogEditor from '@/components/common/Editor';
import { BackButton } from '@/components/common/BackButton';

export default function CreateForum() {
    const { user, loading: authLoading, openLoginModal } = useAuth();
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [bodyText, setBodyText] = useState('');
    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const [imagePreviews, setImagePreviews] = useState<string[]>([]);
    const [titleCharCount, setTitleCharCount] = useState(0);
    const [forumTypes, setForumTypes] = useState<string[]>([]);
    const [topics, setTopics] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // Prompt auth modal if not authenticated (no redirect)
    const hasPromptedRef = useRef(false);
    useEffect(() => {
        if (!user) {
            router.push("/auth");
            hasPromptedRef.current = true;
        }
    }, []);

    const suggestedForumTypes = ['បទពិសោធន៍', 'វិធីសាស្ត្ររៀន', 'រឿងរ៉ាវ', 'គន្លឹះ'];
    const suggestedTopics = ['គណិតវិទ្យា', 'រូបវិទ្យា', 'គីមីវិទ្យា', 'ជីវវិទ្យា', 'អូឡាំពិច'];

    const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setTitle(value);
        setTitleCharCount(value.length);
        // Clear error when user makes changes
        if (error) setError('');
    };

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        const remainingSlots = 4 - selectedImages.length;
        const filesToAdd = files.slice(0, remainingSlots);

        if (filesToAdd.length > 0) {
            const newImages = [...selectedImages, ...filesToAdd];
            setSelectedImages(newImages);

            filesToAdd.forEach(file => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    setImagePreviews(prev => [...prev, e.target?.result as string]);
                };
                reader.readAsDataURL(file);
            });

            // Clear error when user uploads images
            if (error) setError('');
        }
    };

    const handleImageClick = () => {
        if (selectedImages.length < 4) {
            fileInputRef.current?.click();
        }
    };

    const removeImage = (index: number) => {
        setSelectedImages(prev => prev.filter((_, i) => i !== index));
        setImagePreviews(prev => prev.filter((_, i) => i !== index));
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        // Clear error when user removes images
        if (error) setError('');
    };

    const addForumType = (type: string) => {
        if (type.trim() && !forumTypes.includes(type)) {
            setForumTypes([type.trim()]);
        }
    };

    const removeForumType = () => {
        setForumTypes([]);
    };

    const addTopic = (topic: string) => {
        if (topic.trim() && !topics.includes(topic)) {
            setTopics([topic.trim()]);
        }
    };

    const removeTopic = () => {
        setTopics([]);
    };

    const handleBodyTextChange = (value: string) => {
        setBodyText(value);
        // Clear error when user makes changes
        if (error) setError('');
    };

    const isFormValid = () => {
        return title.trim() && bodyText.trim() && !error;
    };

    // Show loading while checking auth
    if (authLoading) {
        return (
            <div className='min-h-screen bg-gray-50 dark:bg-zinc-900 pt-32 lg:pt-20'>
                <div className='max-w-6xl mx-auto p-5'>
                    <div className='animate-pulse space-y-6'>
                        <div className='h-8 bg-gray-200 dark:bg-zinc-800 rounded w-1/3'></div>
                        <div className='h-64 bg-gray-200 dark:bg-zinc-800 rounded'></div>
                    </div>
                </div>
            </div>
        );
    }

    // Keep rendering even if unauthenticated; modal will be shown

    const handleSubmit = async () => {
        if (!title.trim() || !bodyText.trim()) {
            setError('សូមបំពេញចំណងជើងនិងមាតិកា');
            return;
        }

        setIsSubmitting(true);
        setError('');
        setSuccess(false);

        try {
            // Build multipart form data for backend upload
            const formData = new FormData();
            formData.append('title', title.trim());
            formData.append('description', bodyText.trim());

            // Use selected types or defaults
            const selectedType = forumTypes.length > 0 ? forumTypes[0] : 'បទពិសោធន៍';
            const selectedTopic = topics.length > 0 ? topics[0] : 'គណិតវិទ្យា';

            // Map to backend expected values
            const typeMapping: { [key: string]: "discussion" | "question" | "announcement" } = {
                'បទពិសោធន៍': 'discussion',
                'វិធីសាស្ត្ររៀន': 'question',
                'រឿងរ៉ាវ': 'discussion',
                'គន្លឹះ': 'announcement'
            };

            const topicMapping: { [key: string]: "math" | "physics" | "chemistry" | "biology" | "general" } = {
                'គណិតវិទ្យា': 'math',
                'រូបវិទ្យា': 'physics',
                'គីមីវិទ្យា': 'chemistry',
                'ជីវវិទ្យា': 'biology',
                'អូឡាំពិច': 'general'
            };

            // TODO: Remove this after testing
            formData.append('type', 'discussion');
            formData.append('topic', 'general');

            // Add images if selected
            if (selectedImages.length > 0) {
                selectedImages.forEach((file) => {
                    formData.append('images', file);
                });
            }

            // Create forum using the service - backend handles file uploads
            await meForumService.createForum(formData);

            setSuccess(true);

            // Reset form and redirect after success
            setTimeout(() => {
                setTitle('');
                setBodyText('');
                setSelectedImages([]);
                setImagePreviews([]);
                setTitleCharCount(0);
                setForumTypes([]);
                setTopics([]);
                router.push('/me?tab=forums');
            }, 1500);

        } catch (error) {
            console.error('Error creating forum:', error);
            setError('មានបញ្ហាកើតឡើងពេលបង្កើតវេទិកា សូមព្យាយាមម្តងទៀត');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-zinc-900">

            {/* Main Content */}
            <div className="flex-1  pt-32 lg:pt-20">
                <div className="max-w-6xl mx-auto p-5">
                    {/* Header */}
                    <div className="sticky top-20 mb-6">
                        <BackButton href="/me?tab=forums" />
                    </div>

                    {/* Create Post Form */}
                    <div className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg shadow-indigo-500/10 border border-indigo-500/10 p-6">
                        {/* Header */}
                        <div className="mb-6">
                            <h1 className="text-2xl font-bold text-gray-900 dark:text-zinc-400 mb-2 flex items-center gap-2"><MessageCircle className='w-6 h-6 text-indigo-500' />បង្កើតការពិភាក្សា</h1>
                        </div>

                        {/* Title Input */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 dark:text-zinc-400 mb-2">
                                ចំណងជើង
                            </label>
                            <input
                                type="text"
                                value={title}
                                onChange={handleTitleChange}
                                placeholder="សរសេរចំណងជើងការឆ្លើយតបរបស់អ្នក..."
                                className="w-full px-4 py-3 border border-gray-300 dark:border-zinc-800 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                                maxLength={300}
                            />
                            <div className="flex justify-between items-center mt-2">
                                <span className="text-xs text-gray-500 dark:text-zinc-400">
                                    {titleCharCount}/300
                                </span>
                            </div>
                        </div>

                        {/* Forum Type and Topic Selection */}
                        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                            <div className="lg:bg-white bg-gray-50 rounded-2xl lg:shadow-sm lg:p-6">
                                <div className="flex items-center justify-between mb-6 pb-4">
                                    <div className="text-indigo-600 font-semibold text-xl flex gap-3 items-center">
                                        <Tag className="text-indigo-600" />
                                        ប្រភេទវេទិកា
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            ប្រភេទវេទិកា
                                        </label>
                                        <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent">
                                            <Tag size={18} className="text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="វាយបញ្ចូលប្រភេទវេទិកា..."
                                                className="flex-1 outline-none"
                                                onKeyPress={(e) => {
                                                    if (e.key === 'Enter') {
                                                        const target = e.target as HTMLInputElement;
                                                        if (target.value.trim() && !forumTypes.includes(target.value.trim())) {
                                                            addForumType(target.value.trim());
                                                            target.value = '';
                                                        }
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            អនុសាសន៍
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {suggestedForumTypes.map((type) => (
                                                <button
                                                    key={type}
                                                    onClick={() => addForumType(type)}
                                                    disabled={forumTypes.includes(type)}
                                                    className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    {type}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            ប្រភេទដែលបានជ្រើសរើស
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {forumTypes.map((type, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-100 text-indigo-700 rounded-full border border-indigo-200"
                                                >
                                                    {type}
                                                    <button
                                                        onClick={removeForumType}
                                                        className="text-indigo-600 hover:text-indigo-800"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:bg-white bg-gray-50 rounded-2xl lg:shadow-sm lg:p-6">
                                <div className="flex items-center justify-between mb-6 pb-4">
                                    <div className="text-indigo-600 font-semibold text-xl flex gap-3 items-center">
                                        <Tag className="text-indigo-600" />
                                        ប្រធានបទ
                                    </div>
                                </div>
                                <div className="space-y-6">
                                    <div className="relative">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            ប្រធានបទ
                                        </label>
                                        <div className="flex items-center gap-2 p-3 border border-gray-300 rounded-full focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent">
                                            <Tag size={18} className="text-gray-400" />
                                            <input
                                                type="text"
                                                placeholder="វាយបញ្ចូលប្រធានបទ..."
                                                className="flex-1 outline-none"
                                                onKeyPress={(e) => {
                                                    if (e.key === 'Enter') {
                                                        const target = e.target as HTMLInputElement;
                                                        if (target.value.trim() && !topics.includes(target.value.trim())) {
                                                            addTopic(target.value.trim());
                                                            target.value = '';
                                                        }
                                                    }
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            អនុសាសន៍
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {suggestedTopics.map((topic) => (
                                                <button
                                                    key={topic}
                                                    onClick={() => addTopic(topic)}
                                                    disabled={topics.includes(topic)}
                                                    className="px-3 py-1 text-xs bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    {topic}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            ប្រធានបទដែលបានជ្រើសរើស
                                        </label>
                                        <div className="flex flex-wrap gap-2">
                                            {topics.map((topic, index) => (
                                                <span
                                                    key={index}
                                                    className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-100 text-indigo-700 rounded-full border border-indigo-200"
                                                >
                                                    {topic}
                                                    <button
                                                        onClick={removeTopic}
                                                        className="text-indigo-600 hover:text-indigo-800"
                                                    >
                                                        <X className="w-4 h-4" />
                                                    </button>
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 dark:text-zinc-400 mb-2">
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
                                    <div key={index} className="relative aspect-video rounded-3xl overflow-hidden border border-gray-200 dark:border-zinc-800">
                                        <Image
                                            src={preview}
                                            alt={`Preview ${index + 1}`}
                                            fill
                                            className="object-contain"
                                        />
                                        <button
                                            onClick={() => removeImage(index)}
                                            className="absolute top-2 right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors duration-200 cursor-pointer"
                                        >
                                            <Trash className="w-3 h-3" />
                                        </button>
                                    </div>
                                ))}

                                {/* Upload Button (if less than 4 images) */}
                                {imagePreviews.length < 4 && (
                                    <div
                                        onClick={handleImageClick}
                                        className="aspect-video border-2 border-dashed rounded-3xl flex flex-col items-center justify-center hover:border-indigo-400 transition-colors duration-200 cursor-pointer"
                                    >
                                        <Plus className="w-6 h-6 mb-2 text-gray-500" />
                                        <p className="text-xs text-gray-500 text-center">អូសរូបឬ</p>
                                        <button className="text-xs font-medium" style={{ color: '#6366f1' }}>
                                            ជ្រើសរើសរូប
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* Image Count Info */}
                            <div className="mt-2 text-xs text-gray-500 dark:text-zinc-400">
                                {imagePreviews.length}/4 រូប
                            </div>
                        </div>

                        {/* Body Text */}
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 dark:text-zinc-400 mb-2">
                                មាតិកា
                            </label>
                            <BlogEditor
                                value={bodyText}
                                onChange={handleBodyTextChange}
                                height="400px"
                            />
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="mb-6">
                                <div className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-800 rounded-lg p-4">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm text-red-800 dark:text-red-200">{error}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Success Message */}
                        {success && (
                            <div className="mb-6">
                                <div className="bg-green-50 dark:bg-green-900 border border-green-200 dark:border-green-800 rounded-lg p-4">
                                    <div className="flex items-center">
                                        <div className="flex-shrink-0">
                                            <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div className="ml-3">
                                            <p className="text-sm text-green-800 dark:text-green-200">បង្កើតវេទិកាបានជោគជ័យ! កំពុងបញ្ជូនទៅទំព័រវេទិកា...</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Action Buttons */}
                        <div className="flex justify-end gap-3 pt-4 border-t border-gray-200 dark:border-zinc-800">
                            <button
                                onClick={handleSubmit}
                                disabled={!isFormValid() || isSubmitting}
                                className={`px-6 py-2 rounded-full transition-all duration-200 font-medium ${isFormValid() && !isSubmitting
                                    ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                                    : 'bg-gray-300 dark:bg-zinc-800 text-gray-500 dark:text-zinc-400 cursor-not-allowed'
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white inline-block mr-2"></div>
                                        កំពុងបង្កើត...
                                    </>
                                ) : success ? (
                                    <>
                                        <svg className="h-4 w-4 text-white inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        បានបង្កើតជោគជ័យ
                                    </>
                                ) : (
                                    'បោះផ្សាយ'
                                )}
                            </button>
                        </div>

                        {/* Retry Button for Errors */}
                        {error && !isSubmitting && (
                            <div className="mt-4 flex justify-center">
                                <button
                                    onClick={handleSubmit}
                                    className="flex items-center gap-2 px-6 py-2 bg-red-600 dark:bg-red-900 text-white dark:text-white rounded-full hover:bg-red-700 dark:hover:bg-red-800 transition-colors duration-200"
                                >
                                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                    </svg>
                                    ព្យាយាមម្តងទៀត
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
