'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { Trash, Edit, Eye, Clock, MessageSquare, BookOpen } from 'lucide-react';
import { feedVideoService, meVideoService } from '@/services/index';
import Comments from '@/components/common/comments/Comments';
import EditVideo from '@/components/pages/me/videos/EditVideo';
import ContentError from '@/components/common/ContentError';
import DeleteConfirm from '@/components/common/DeleteConfirm';
// import Exercise from '@/components/pages/videos/Exercise';
import type { VideoPost } from '@core-types/api-types/videos';
import { useAuth } from '@hooks/useAuth';
import MarkDownRenderer from '@/components/helper/MarkDownRenderer';
import { BackButton } from '@/components/common/BackButton';

// Skeleton Loading Component for Display Mode
function VideoPostSkeleton() {
    return (
        <div className="min-h-screen bg-gray-50 pt-32 lg:pt-20">
            <div className="max-w-6xl mx-auto p-5">
                {/* Back Button Skeleton */}
                <div className="mb-6">
                    <div className="w-32 h-6 bg-gray-200 rounded animate-pulse"></div>
                </div>

                {/* Video Post Skeleton */}
                <article className="bg-white rounded-3xl shadow-lg shadow-indigo-500/10 border border-indigo-500/10 overflow-hidden">
                    <div className="p-6 md:p-8">
                        {/* Video Player Skeleton */}
                        <div className="w-full h-96 bg-gray-200 rounded-lg animate-pulse mb-6"></div>

                        {/* Title Skeleton */}
                        <div className="mb-2">
                            <div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse"></div>
                        </div>

                        {/* User Info Skeleton */}
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse"></div>
                            <div className="flex items-center gap-2">
                                <div className="w-24 h-4 bg-gray-200 rounded animate-pulse"></div>
                                <div className="w-2 h-4 bg-gray-200 rounded animate-pulse"></div>
                                <div className="w-32 h-4 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                        </div>

                        {/* Stats Skeleton */}
                        <div className="flex items-center gap-6 mb-6">
                            <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-20 h-6 bg-gray-200 rounded animate-pulse"></div>
                        </div>

                        {/* Description Skeleton */}
                        <div className="space-y-3">
                            <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-5/6 h-4 bg-gray-200 rounded animate-pulse"></div>
                            <div className="w-4/5 h-4 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}

export default function VideoPost() {
    const { user, loading: authLoading } = useAuth();
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;

    const [videoPost, setVideoPost] = useState<VideoPost>();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [isCommentInputActive, setIsCommentInputActive] = useState(false);
    const [activeTab, setActiveTab] = useState<'comments' | 'exercise'>('comments');
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    // Redirect to auth if not authenticated
    useEffect(() => {
        if (!authLoading && !user) {
            router.push('/auth');
        }
    }, [user, authLoading, router]);

    // Fetch existing video data
    useEffect(() => {
        if (id && user) {
            const fetchVideo = async () => {
                try {
                    setIsLoading(true);
                    setError(null);
                    const video = await feedVideoService.getVideoById(id);
                    setVideoPost(video.data);
                } catch (error) {
                    console.error('Error fetching video:', error);
                    setError('មានបញ្ហាកើតឡើងពេលផ្ទុកវីដេអូ សូមព្យាយាមម្តងទៀត');
                } finally {
                    setIsLoading(false);
                }
            };

            fetchVideo();
        }
    }, [id, user]);

    const handleDeleteClick = () => {
        setShowDeleteModal(true);
    };

    const handleDeleteConfirm = async () => {
        try {
            await meVideoService.deleteVideo(id);
            router.push('/me?tab=videos');
        } catch (error) {
            console.error('Error deleting video:', error);
            alert('មានបញ្ហាកើតឡើងពេលលុបវីដេអូ សូមព្យាយាមម្តងទៀត');
        }
    };

    const handleSave = async (updatedVideo: VideoPost) => {
        try {
            await meVideoService.updateVideo(id, {
                title: updatedVideo.title,
                description: updatedVideo.description,
            });
            setIsEditMode(false);
        } catch (error) {
            console.error('Error updating video:', error);
            alert('មានបញ្ហាកើតឡើងពេលកែប្រែវីដេអូ សូមព្យាយាមម្តងទៀត');
        }
    };

    const handleCancel = () => {
        setIsEditMode(false);
    };

    const handleCommentClose = () => {
        setIsCommentInputActive(false);
    };


    const formatDuration = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('km-KH', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    // Show loading while checking auth or fetching data
    if (authLoading || isLoading) {
        return <VideoPostSkeleton />;
    }

    // Don't render anything if not authenticated (will redirect)
    if (!user) {
        return null;
    }

    if (error || !videoPost) {
        return (
            <div className="min-h-screen bg-gray-50 pt-32 lg:pt-20">
                <div className="max-w-6xl mx-auto p-5">
                    <div className="mb-6">
                        <BackButton href="/me?tab=videos" />
                    </div>
                    <ContentError
                        type="error"
                        message={error || 'មានបញ្ហាក្នុងការទាញយកវីដេអូ'}
                    />
                </div>
            </div>
        );
    }

    // Display Mode
    if (!isEditMode) {
        return (
            <>
                <div className="min-h-screen bg-gray-50 pt-32 lg:pt-20">
                    <div className="max-w-6xl mx-auto p-5">
                        <div className="mb-6">
                            <BackButton href="/me?tab=videos" />
                        </div>
                        {/* Header with Back Button and Edit Button */}
                        <div className="mb-6 flex items-center justify-end">
                            <div className='flex gap-2 items-center'>
                                <button
                                    onClick={handleDeleteClick}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors font-medium"
                                >
                                    <Trash className="w-4 h-4" />
                                    លុប
                                </button>
                                <button
                                    onClick={() => setIsEditMode(true)}
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors font-medium"
                                >
                                    <Edit className="w-4 h-4" />
                                    កែប្រែ
                                </button>
                            </div>
                        </div>

                        {/* Main Grid Layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-0 lg:gap-6 items-start">
                            {/* Left Column - Video Player and Info */}
                            <div className="space-y-4">
                                {/* Video Player */}
                                <div className="bg-black rounded-3xl overflow-hidden shadow-lg">
                                    <video
                                        className="w-full aspect-video"
                                        controls
                                        poster={videoPost.thumbnailUrl}
                                        preload="metadata"
                                        onError={(e) => {
                                            console.error('Video loading error:', e);
                                        }}
                                    >
                                        <source src={videoPost.videoUrl} type="video/mp4" />
                                        Your browser does not support the video tag.
                                    </video>
                                </div>

                                {/* Video Description */}
                                <div className="bg-white rounded-3xl shadow-sm p-6">
                                    <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                                        {videoPost.title}
                                    </h1>

                                    {/* User Info and Stats */}
                                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                                                {videoPost.username.split(" ")[0].charAt(0)}
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <span className="font-semibold text-gray-900">{videoPost.username}</span>
                                                <span>|</span>
                                                <span className="text-gray-500 text-sm">{formatDate(videoPost.createdAt)}</span>
                                            </div>
                                        </div>

                                        {/* Action Buttons */}
                                        {/* <div className="flex items-center gap-2">
                                            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                                                <ThumbsUp className="w-4 h-4" />
                                                {videoPost.likeCount}
                                            </button>
                                            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                                                <Bookmark className="w-4 h-4" />
                                                រក្សាទុក
                                            </button>
                                            <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                                                <Share2 className="w-4 h-4" />
                                                ចែករំលែក
                                            </button>
                                        </div> */}
                                    </div>

                                    {/* Stats */}
                                    <div className="flex items-center gap-6 mb-6 text-gray-600">
                                        <span className="flex items-center gap-2">
                                            <Eye className="w-5 h-5" />
                                            {videoPost.viewCount.toLocaleString()} ទស្សនា
                                        </span>
                                        <span className="flex items-center gap-2">
                                            <Clock className="w-5 h-5" />
                                            {formatDuration(videoPost.duration)}
                                        </span>
                                    </div>

                                    {/* Description */}
                                    <div className="prose prose-lg max-w-none">
                                        <MarkDownRenderer content={videoPost.description} />
                                    </div>
                                </div>

                                {/* Exercise Section - Under Video for Desktop */}
                                {/* <div className="hidden lg:block">
                                    <Exercise exercises={videoPost.exercises || []} />
                                </div> */}
                            </div>

                            {/* Right Column - Tabs */}
                            <div className="self-start h-fit lg:top-6">
                                {/* Tab Navigation */}
                                <div className="bg-white rounded-3xl shadow-sm mb-4">
                                    <div className="flex">
                                        <button
                                            onClick={() => setActiveTab('comments')}
                                            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'comments'
                                                ? 'text-indigo-600 underline underline-offset-8'
                                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                                }`}
                                        >
                                            <div className="flex items-center gap-2 justify-center">
                                                <MessageSquare size={16} />
                                                មតិតិការ
                                            </div>
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('exercise')}
                                            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'exercise'
                                                ? 'text-indigo-600 underline underline-offset-8'
                                                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                                }`}
                                        >
                                            <div className="flex items-center gap-2 justify-center">
                                                <BookOpen size={16} />
                                                លំហាត់
                                            </div>
                                        </button>
                                    </div>
                                </div>

                                {/* Tab Content */}
                                <div className="bg-white rounded-3xl shadow-sm">
                                    {activeTab === 'comments' && (
                                        <div>
                                            <Comments
                                                type='video'
                                                parentId={videoPost.id}
                                                focusInput={isCommentInputActive}
                                                isReadOnly={true}
                                                onClose={handleCommentClose}
                                            />
                                        </div>
                                    )}

                                    {/* {activeTab === 'exercise' && (
                                        <div className="p-6">
                                            <Exercise exercises={videoPost.exercises || []} />
                                        </div>
                                    )} */}
                                </div>
                            </div>
                        </div>

                        {/* Mobile Tab System */}
                        <div className="lg:hidden mt-8">
                            {/* Mobile Tab Navigation */}
                            <div className="bg-white rounded-3xl shadow-sm mb-4">
                                <div className="flex">
                                    <button
                                        onClick={() => setActiveTab('comments')}
                                        className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'comments'
                                            ? 'text-indigo-600 underline underline-offset-8'
                                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2 justify-center">
                                            <MessageSquare size={16} />
                                            មតិតិការ
                                        </div>
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('exercise')}
                                        className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'exercise'
                                            ? 'text-indigo-600 underline underline-offset-8'
                                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                                            }`}
                                    >
                                        <div className="flex items-center gap-2 justify-center">
                                            <BookOpen size={16} />
                                            លំហាត់
                                        </div>
                                    </button>
                                </div>
                            </div>

                            {/* Mobile Tab Content */}
                            {activeTab === 'comments' && (
                                <div className="bg-white rounded-3xl p-4 shadow-sm">
                                    <Comments
                                        type='video'
                                        parentId={videoPost.id}
                                        focusInput={isCommentInputActive}
                                        isReadOnly={true}
                                        onClose={handleCommentClose}
                                    />
                                </div>
                            )}
                            {/* {activeTab === 'exercise' && (
                                <div className="bg-white rounded-3xl p-4 shadow-sm">
                                    <Exercise exercises={videoPost.exercises || []} />
                                </div>
                            )} */}
                        </div>
                    </div>
                </div>

                {/* Delete Confirmation Modal */}
                <DeleteConfirm
                    isOpen={showDeleteModal}
                    onClose={() => setShowDeleteModal(false)}
                    onConfirm={handleDeleteConfirm}
                    title="លុបវីដេអូ"
                    message="តើអ្នកប្រាកដជាចង់លុបវីដេអូនេះមែនទេ? សកម្មភាពនេះមិនអាចបញ្ច្រាស់បានទេ។"
                />
            </>
        );
    }

    // Edit Mode
    return (
        <>
            <div className="min-h-screen bg-gray-50 pt-32 lg:pt-20">
                <div className="max-w-6xl mx-auto p-5">
                    <div className="mb-6">
                        <BackButton href="/me?tab=videos" />
                    </div>
                    {/* Header with Back Button */}
                    <div className="mb-6 flex items-center justify-end">
                        <button className='bg-gray-500 text-white rounded-full p-2 flex items-center gap-2' onClick={() => setIsEditMode(false)}><Eye className="w-4 h-4" />មើល</button>
                    </div>

                    {/* Edit Video Component */}
                    <EditVideo
                        video={videoPost}
                        onSave={handleSave}
                        onCancel={handleCancel}
                    />
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            <DeleteConfirm
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleDeleteConfirm}
                title="លុបវីដេអូ"
                message="តើអ្នកប្រាកដជាចង់លុបវីដេអូនេះមែនទេ? សកម្មភាពនេះមិនអាចបញ្ច្រាស់បានទេ។"
            />
        </>
    );
}
