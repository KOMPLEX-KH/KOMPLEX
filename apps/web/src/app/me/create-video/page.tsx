'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import {
    ArrowLeft,
    Save
} from 'lucide-react';
// import { ExerciseCreationBox } from '@/components/pages/docs/boxes/ExerciseCreationBox';
import VideoUpload from '@/components/pages/me/create-video/VideoUpload';
import Description from '@/components/pages/me/create-video/Description';
// import { ExerciseQuestion } from '@core-types/docs/topic';
import Link from 'next/link';
import { uploadService, meVideoService } from '@/services/index';
import { useAuth } from '@hooks/useAuth';
import { BackButton } from '@/components/common/BackButton';

// Commented out exercises related fields
// interface VideoFormData {
//     title: string;
//     description: string;
//     thumbnail: string;
//     exercises: ExerciseQuestion[];
// }

interface VideoFormData {
    title: string;
    description: string;
    thumbnail: string;
    // exercises: ExerciseQuestion[];
}

export default function CreateVideoPage() {
    const { user, loading: authLoading, openLoginModal } = useAuth();
    const router = useRouter();
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [videoFile, setVideoFile] = useState<File | null>(null);
    const [videoPreview, setVideoPreview] = useState<string>('');
    const [videoDuration, setVideoDuration] = useState<number>(0);
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState(false);

    // Prompt auth modal if not authenticated (no redirect)
    const hasPromptedRef = React.useRef(false);
    useEffect(() => {
        if (!user) {
            router.push("/auth");
            hasPromptedRef.current = true;
        }
    }, []);

    // const [formData, setFormData] = useState<VideoFormData>({
    //     title: '',
    //     description: '',
    //     thumbnail: '',
    //     exercises: []
    // });

    const [formData, setFormData] = useState<VideoFormData>({
        title: '',
        description: '',
        thumbnail: '',
        // exercises: []
    });

    const handleVideoSelect = (file: File) => {
        setVideoFile(file);

        // Create preview URL
        const url = URL.createObjectURL(file);
        setVideoPreview(url);

        // Get video duration
        getVideoDuration(url);

        // Auto-generate thumbnail from video
        generateThumbnail(url);

        // Clear error when user selects a new video
        if (error) setError('');
    };

    const getVideoDuration = (videoUrl: string) => {
        const video = document.createElement('video');
        video.src = videoUrl;

        video.addEventListener('loadedmetadata', () => {
            setVideoDuration(Math.round(video.duration));
        });

        video.addEventListener('error', () => {
            console.error('Error loading video metadata');
            setVideoDuration(0);
        });
    };

    const generateThumbnail = (videoUrl: string) => {
        const video = document.createElement('video');
        video.src = videoUrl;
        video.currentTime = 1; // Seek to 1 second

        video.addEventListener('loadeddata', () => {
            const canvas = document.createElement('canvas');
            canvas.width = 320;
            canvas.height = 180;
            const ctx = canvas.getContext('2d');

            if (ctx) {
                ctx.drawImage(video, 0, 0, 320, 180);
                const thumbnailUrl = canvas.toDataURL('image/jpeg');
                setFormData(prev => ({ ...prev, thumbnail: thumbnailUrl }));
            }
        });
    };

    // Handle form changes
    const handleInputChange = (field: keyof VideoFormData, value: string /* | ExerciseQuestion[] */) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user makes changes
        if (error) setError('');
    };

    // Handle MCQ exercises
    // const handleExercisesChange = (newExercises: ExerciseQuestion[]) => {
    //     setFormData(prev => ({
    //         ...prev,
    //         exercises: newExercises
    //     }));
    //     // Clear error when user makes changes
    //     if (error) setError('');
    // };

    // Convert base64 thumbnail to blob for upload
    const base64ToBlob = (base64: string): Blob => {
        const byteString = atob(base64.split(',')[1]);
        const mimeString = base64.split(',')[0].split(':')[1].split(';')[0];
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);

        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }

        return new Blob([ab], { type: mimeString });
    };

    // Convert ExerciseQuestion to the backend format
    // const convertExercisesToBackendFormat = (exercises: ExerciseQuestion[]): {
    //     title: string;
    //     choices: {
    //         text: string;
    //         isCorrect: boolean;
    //     }[];
    // }[] => {
    //     return exercises.map(exercise => ({
    //         title: exercise.question as string,
    //         choices: exercise.options.map((option, index) => ({
    //             text: option as string,
    //             isCorrect: index === exercise.correctAnswer
    //         }))
    //     }));
    // };

    // Handle upload process
    const handleUpload = async () => {
        if (!videoFile) return;

        setIsUploading(true);
        setUploadProgress(0);
        setError('');
        setSuccess(false);

        try {

            // Step 1: Upload video file
            setUploadProgress(20);
            const videoKey = await uploadService.uploadFile(videoFile);

            // Step 2: Upload thumbnail
            setUploadProgress(50);
            const thumbnailBlob = base64ToBlob(formData.thumbnail);
            const thumbnailFile = new File([thumbnailBlob], `thumbnail_${Date.now()}.jpg`, {
                type: 'image/jpeg'
            });

            const thumbnailKey = await uploadService.uploadFile(thumbnailFile);

            setUploadProgress(80);

            // Step 3: Create video record using the service
            const createdVideo = await meVideoService.createVideo({
                videoKey, // The service expects videoUrl but we're passing the key
                title: formData.title,
                description: formData.description,
                thumbnailKey, // The service expects thumbnailUrl but we're passing the key
                duration: videoDuration,
                questions: undefined
            });

            setUploadProgress(90);

            setUploadProgress(100);
            setSuccess(true);

            // Success! Redirect to videos page after a short delay
            setTimeout(() => {
                router.push('/me?tab=videos');
            }, 1500);

        } catch (error) {
            console.error('Error during upload:', error);
            setError('មានបញ្ហាក្នុងការផ្ទុកវីដេអូ។ សូមព្យាយាមម្តងទៀត។');
        } finally {
            setIsUploading(false);
        }
    };

    const isFormValid = () => {
        return videoFile &&
            formData.title.trim() &&
            formData.description.trim() &&
            !error;
        // && (
        //     formData.exercises.every(ex => {
        //         const questionText = typeof ex.question === 'string' ? ex.question : '';
        //         const optionsText = ex.options.map(opt => typeof opt === 'string' ? opt : '');
        //         const correctAnswer = typeof ex.correctAnswer === 'number' ? ex.correctAnswer : 0;

        //         return questionText.trim() !== '' &&
        //             optionsText.every(opt => opt.trim() !== '') &&
        //             correctAnswer >= 0 &&
        //             correctAnswer < ex.options.length;
        //     })
        // );
    };

    // Show loading while checking auth
    if (authLoading) {
        return (
            <div className='min-h-screen bg-gray-50 pt-32 lg:pt-20'>
                <div className='max-w-6xl mx-auto p-6'>
                    <div className='animate-pulse space-y-6'>
                        <div className='h-8 bg-gray-200 rounded w-1/3'></div>
                        <div className='h-64 bg-gray-200 rounded'></div>
                    </div>
                </div>
            </div>
        );
    }

    // Don't render anything if not authenticated (will redirect)
    if (!user) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-32 lg:pt-20">
            <div className="max-w-6xl mx-auto p-6">
                <BackButton href='/me?tab=videos' />


                {/* Video Upload Component */}
                <VideoUpload
                    videoFile={videoFile}
                    videoPreview={videoPreview}
                    onVideoSelect={handleVideoSelect}
                    onVideoRemove={() => {
                        setVideoFile(null);
                        setVideoPreview('');
                        setVideoDuration(0);
                        setFormData(prev => ({ ...prev, thumbnail: '' }));
                    }}
                />

                {/* Single Column Layout for Description */}
                <div className="mb-8 mt-8">
                    <Description
                        title={formData.title}
                        description={formData.description}
                        thumbnail={formData.thumbnail}
                        onTitleChange={(title) => handleInputChange('title', title)}
                        onDescriptionChange={(description) => handleInputChange('description', description)}
                    />
                </div>

                {/* MCQ Exercises - Using ExerciseCreationBox */}
                {/* <ExerciseCreationBox
                    questions={formData.exercises}
                    onQuestionsChange={handleExercisesChange}
                /> */}

                {/* Error Message */}
                {error && (
                    <div className="mt-8 max-w-md mx-auto">
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-red-800">{error}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Success Message */}
                {success && (
                    <div className="mt-8 max-w-md mx-auto">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <div className="ml-3">
                                    <p className="text-sm text-green-800">ផ្ទុកវីដេអូបានជោគជ័យ! កំពុងបញ្ជូនទៅទំព័រវីដេអូ...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Upload Button */}
                <div className="mt-12 flex justify-center">
                    <button
                        onClick={handleUpload}
                        disabled={!isFormValid() || isUploading}
                        className={`flex items-center gap-3 px-10 py-4 rounded-lg font-semibold text-lg transition-all duration-200 ${isFormValid() && !isUploading
                            ? 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                            }`}
                    >
                        {isUploading ? (
                            <>
                                <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                                កំពុងផ្ទុក... {uploadProgress}%
                            </>
                        ) : success ? (
                            <>
                                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                បានផ្ទុកជោគជ័យ
                            </>
                        ) : (
                            <>
                                <Save size={24} />
                                ផ្ទុកវីដេអូ
                            </>
                        )}
                    </button>
                </div>

                {/* Upload Progress */}
                {isUploading && (
                    <div className="mt-8 max-w-md mx-auto">
                        <div className="bg-white rounded-lg p-6 shadow-lg border border-gray-200">
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-sm font-medium text-gray-700">
                                    {uploadProgress < 70 ? 'កំពុងផ្ទុកវីដេអូ...' :
                                        uploadProgress < 90 ? 'កំពុងផ្ទុករូបភាព...' :
                                            uploadProgress < 95 ? 'កំពុងបង្កើតវីដេអូ...' :
                                                /* 'កំពុងបន្ថែមលំហាត់...' */ 'កំពុងបន្ថែមវីដេអូ...'
                                    }
                                </span>
                                <span className="text-sm text-indigo-600 font-semibold">{uploadProgress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                                <div
                                    className="bg-gradient-to-r from-indigo-500 to-indigo-600 h-3 rounded-full transition-all duration-500 ease-out"
                                    style={{ width: `${uploadProgress}%` }}
                                ></div>
                            </div>
                            <div className="mt-2 text-xs text-gray-500 text-center">
                                សូមកុំបិទអេក្រង់នេះ
                            </div>
                        </div>
                    </div>
                )}

                {/* Retry Button for Errors */}
                {error && !isUploading && (
                    <div className="mt-4 flex justify-center">
                        <button
                            onClick={handleUpload}
                            className="flex items-center gap-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
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
    );
}