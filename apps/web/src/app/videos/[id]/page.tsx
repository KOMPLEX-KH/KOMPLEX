'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { Play, MessageSquare, BookOpen } from 'lucide-react';
import { useParams } from 'next/navigation';
import Comments from '@/components/common/comments/Comments';
import Exercise from '@/components/pages/videos/Exercise';
import VideoCard from '@/components/pages/videos/VideoCard';
import VideoSkeleton from '@/components/pages/videos/VideoSkeleton';
import ContentError from '@/components/common/ContentError';
import type { VideoPost } from '@/types/content/videos';
import { feedVideoService, meVideoService } from '@/services/index';
import VideoDescription from '@/components/pages/videos/VideoDescription';
import { useAuth } from '@hooks/useAuth';


// API function to fetch recommended videos
const fetchRecommendedVideos = async (userId: number, videoId: number, limit: number = 5): Promise<VideoPost[]> => {
    try {
        const data = await feedVideoService.getRecommendedVideos(userId, videoId, limit, 0);
        return data;
    } catch (error) {
        console.error('Error fetching recommended videos:', error);
        // Fallback to fetching all videos and filtering
        try {
            const { data } = await feedVideoService.getAllVideos();
            return data.filter(v => v.id !== videoId).slice(0, limit);
        } catch (fallbackError) {
            console.error('Error in fallback video fetch:', fallbackError);
            return [];
        }
    }
};

// API function to fetch video by ID
const fetchVideoById = async (id: number): Promise<VideoPost | null> => {
    try {
        return await feedVideoService.getVideoById(id.toString());
    } catch (error) {
        console.error('Error fetching video:', error);
        return null;
    }
};

export default function VideoDetailPage() {
    const params = useParams();
    const videoId = parseInt(params.id as string);
    const [activeTab, setActiveTab] = useState<'related' | 'comments' | 'exercise'>('related');
    const [video, setVideo] = useState<VideoPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [recommendedVideos, setRecommendedVideos] = useState<VideoPost[]>([]);
    const [videosLoading, setVideosLoading] = useState(false);

    const { user, openLoginModal } = useAuth();

    // Function to refresh recommendations when user changes
    const refreshRecommendations = useCallback(async () => {
        if (video) {
            try {
                setVideosLoading(true);
                const userId = user?.id || 0;
                const recommendedVideosData = await fetchRecommendedVideos(userId, video.id, 5);
                setRecommendedVideos(recommendedVideosData);
            } catch (error) {
                console.error('Error refreshing recommendations:', error);
            } finally {
                setVideosLoading(false);
            }
        }
    }, [video, user?.id]);

    // Refresh recommendations when user changes
    useEffect(() => {
        if (video) {
            refreshRecommendations();
        }
    }, [video, refreshRecommendations]);

    useEffect(() => {
        const loadAllData = async () => {
            if (!videoId || isNaN(videoId)) {
                setError('វីដេអូរកមិនឃើញវ');
                setLoading(false);
                return;
            }

            setLoading(true);
            setError(null);

            try {
                // Fetch video data first
                const videoData = await fetchVideoById(videoId);

                // Set video data
                if (videoData) {
                    setVideo(videoData);

                    // Fetch recommended videos based on current video
                    // Use user ID if available, otherwise use 0 for anonymous users
                    const userId = user?.id || 0;
                    const recommendedVideosData = await fetchRecommendedVideos(userId, videoId, 5);
                    setRecommendedVideos(recommendedVideosData);
                } else {
                    setError('វីដេអូរកមិនឃើញ');
                }

            } catch (error) {
                console.error('Failed to load data:', error);
                setError('មានបញ្ហាក្នុងការទាញយកទិន្នន័យវីដេអូ');
            } finally {
                setLoading(false);
                setVideosLoading(false);
            }
        };

        loadAllData();
    }, [videoId, user]);

    const handleLike = async (videoId: number, isLiked: boolean, video: VideoPost) => {
        try {
            if (!user) {
                openLoginModal();
                return;
            }
            await meVideoService.toggleVideoLike(videoId.toString(), isLiked);
            setVideo({ ...video!, isLiked: !isLiked, likeCount: isLiked ? video.likeCount - 1 : video.likeCount + 1 });
        } catch (error) {
            console.error('Error liking video:', error);
        }
    }

    const handleSave = async (videoId: number, isSaved: boolean, video: VideoPost) => {
        try {
            if (!user) {
                openLoginModal();
                return;
            }
            await meVideoService.toggleVideoSave(videoId.toString(), isSaved);
            setVideo({ ...video!, isSave: !isSaved });
        } catch (error) {
            console.error('Error saving video:', error);
        }
    }

    // Loading state
    if (loading) {
        return <VideoSkeleton />;
    }

    // Error state
    if (error || !video) {
        return (
            <div className="min-h-screen bg-gray-50 pt-15">
                <div className="w-full mx-auto px-5 py-6">
                    <ContentError
                        type="error"
                        message={error || 'វីដេអូរកមិនឃើញ'}
                    />
                </div>
            </div>
        );
    }

    const renderVideoPlayer = () => (
        <div className="bg-black rounded-3xl overflow-hidden shadow-lg">
            <video
                className="w-full aspect-video"
                controls
                poster={video.thumbnailUrl}
                preload="metadata"
            >
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );

    const renderVideoInfo = () => (
        <VideoDescription video={video} onLike={handleLike} onBookmark={handleSave}></VideoDescription>
    );

    const renderDesktopTabs = () => (
        <div className="hidden lg:block">
            {/* Tab Navigation */}
            <div className="lg:bg-white lg:rounded-3xl lg:shadow-sm mb-4">
                <div className="flex">
                    <button
                        onClick={() => setActiveTab('related')}
                        className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'related'
                            ? 'text-indigo-600 underline underline-offset-8'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <div className="flex items-center gap-2 justify-center">
                            <Play size={16} />
                            វីដេអូដទៃទៀត
                        </div>
                    </button>
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
                </div>
            </div>

            {/* Tab Content */}
            <div className="lg:bg-white lg:rounded-3xl lg:shadow-sm">
                {activeTab === 'related' && (
                    <div className="p-6">
                        {videosLoading ? (
                            <div className="text-center">
                                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                                <p className="text-gray-600">កំពុងផ្ទុកវីដេអូ...</p>
                            </div>
                        ) : recommendedVideos.length > 0 ? (
                            <div className="space-y-4">
                                {recommendedVideos.map((relatedVideo) => (
                                    <VideoCard key={relatedVideo.id} video={relatedVideo} variant="compact" />
                                ))}
                            </div>
                        ) : (
                            <ContentError type="no-results" message="មិនមានវីដេអូដទៃទៀត" />
                        )}
                    </div>
                )}

                {activeTab === 'comments' && (
                    <div>
                        <Comments type='video' parentId={videoId} isReadOnly={false} />
                    </div>
                )}
            </div>
        </div>
    );

    const renderMobileTabs = () => (
        <div className="lg:hidden mt-8">
            {/* Mobile Tab Navigation */}
            <div className="lg:bg-white lg:rounded-3xl lg:shadow-sm mb-4">
                <div className="flex">
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
                    <button
                        onClick={() => setActiveTab('related')}
                        className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${activeTab === 'related'
                            ? 'text-indigo-600 underline underline-offset-8'
                            : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <div className="flex items-center gap-2 justify-center">
                            <Play size={16} />
                            វីដេអូដទៃទៀត
                        </div>
                    </button>
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
                </div>
            </div>

            {/* Mobile Tab Content */}
            {activeTab === 'exercise' && (
                <Exercise exercises={video.exercises} />
            )}
            {activeTab === 'comments' && (
                <Comments type='video' parentId={videoId} isReadOnly={true} />
            )}
            {activeTab === 'related' && (
                <div className="lg:bg-white lg:rounded-3xl lg:p-4 lg:shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-4 text-lg">វីដេអូដទៃទៀត</h3>
                    {videosLoading ? (
                        <div className="text-center py-8">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600 mx-auto mb-4"></div>
                            <p className="text-gray-600">កំពុងផ្ទុកវីដេអូ...</p>
                        </div>
                    ) : recommendedVideos.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {recommendedVideos.slice(0, 6).map((relatedVideo) => (
                                <VideoCard
                                    key={relatedVideo.id}
                                    video={relatedVideo}
                                    variant="compact"
                                />
                            ))}
                        </div>
                    ) : (
                        <ContentError type="no-results" message="មិនមានវីដេអូដទៃទៀត" />
                    )}
                </div>
            )}
        </div>
    );

    return (
        <div className="min-h-screen bg-gray-50 pt-15">
            <div className="w-full mx-auto px-5 py-6">
                {/* Main Grid Layout - Desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-0 lg:gap-6 items-start">
                    {/* Left Column - Video Player and Info */}
                    <div className="space-y-4">
                        {renderVideoPlayer()}
                        {renderVideoInfo()}

                        {/* Exercise Section - Under Video for Desktop */}
                        <div className="hidden lg:block">
                            <Exercise exercises={video.exercises} />
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="self-start h-fit lg:top-6">
                        {renderDesktopTabs()}
                    </div>
                </div>

                {/* Mobile Tab System */}
                {renderMobileTabs()}
            </div>
        </div>
    );
}