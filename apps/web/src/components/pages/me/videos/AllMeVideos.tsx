'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
    Plus,
    Eye,
    Heart,
    Play,
    Calendar,
} from 'lucide-react';
import { meVideoService } from '@/services/index';
import { VideoPost } from '@core-types/api-types/videos';
import ContentError from '@/components/common/ContentError';
import MeSkeleton from '@/components/pages/me/MeSkeleton';
import { useAuth } from '@hooks/useAuth';

export default function AllMeVideos() {
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();

    const [videos, setVideos] = useState<VideoPost[] | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Redirect to auth if not authenticated
    useEffect(() => {
        if (!authLoading && !user) {
            router.push('/auth');
        }
    }, [user, authLoading, router]);

    useEffect(() => {
        if (user) {
            const fetchVideos = async () => {
                try {
                    setIsLoading(true);
                    setError(null);
                    const userVideos = await meVideoService.getUserVideos();
                    setVideos(userVideos.data.map((v) => {
                        return {
                            id: v.id,
                            userId: v.userId,
                            profileImage: v.profileImage,
                            title: v.title,
                            description: v.description,
                            duration: Number(v.duration),
                            videoUrl: v.videoUrl,
                            thumbnailUrl: v.thumbnailUrl,
                            videoUrlForDeletion: v.videoUrl,
                            thumbnailUrlForDeletion: v.thumbnailUrl,
                            viewCount: Number(v.viewCount),
                            createdAt: v.createdAt,
                            updatedAt: v.updatedAt,
                            username: v.username,
                            isSaved: v.isSaved,
                            isLiked: v.isLiked,
                            likeCount: Number(v.likeCount),
                            saveCount: Number(v.saveCount),
                            // exercises: v.exercises,
                            isFollowing: v.isFollowing,
                        }
                    }));
                } catch (error) {
                    console.error('Error fetching videos:', error);
                    setError('មានបញ្ហាកើតឡើងពេលទាញយកទិន្នន័យ។ សូមព្យាយាមម្តងទៀត។');
                } finally {
                    setIsLoading(false);
                }
            };

            fetchVideos();
        }
    }, [user]);

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
        return <MeSkeleton />;
    }

    // Don't render anything if not authenticated (will redirect)
    if (!user) {
        return null;
    }

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-gray-200 dark:border-zinc-800">
            <div className="p-6 border-b border-gray-200 dark:border-zinc-800">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900 dark:text-zinc-400">វីដេអូ</h2>
                    <Link
                        href="/me/create-video"
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 dark:bg-zinc-800 hover:bg-indigo-700 dark:hover:bg-zinc-700 text-white rounded-full font-medium transition-colors"
                    >
                        <Plus className="w-4 h-4" />
                        បង្ហោះវីដេអូថ្មី
                    </Link>
                </div>
            </div>
            <div className="p-6">
                {error ? (
                    <ContentError
                        type="error"
                        message={error}
                    />
                ) : videos && videos.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {videos.map((video) => (
                            <Link
                                key={video.id}
                                href={`/me/videos/${video.id}`}
                                className="group bg-white dark:bg-zinc-900 rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 border border-gray-200 dark:border-zinc-800 hover:border-indigo-300"
                            >
                                {/* Thumbnail */}
                                <div className="relative">
                                    <img
                                        src={video.thumbnailUrl || '/image-error.png'}
                                        alt={video.title || 'Video'}
                                        className="w-full h-48 object-cover"
                                        onError={(e) => {
                                            e.currentTarget.src = '/image-error.png';
                                        }}
                                    />

                                    {/* Duration Badge */}
                                    {video.duration && (
                                        <div className="absolute bottom-2 right-2 bg-black/80 dark:bg-zinc-800 text-white text-xs px-2 py-1 rounded">
                                            {formatDuration(video.duration)}
                                        </div>
                                    )}

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                        <div className="bg-white/90 p-3 rounded-full shadow-lg">
                                            <Play className="w-6 h-6 text-indigo-600 dark:text-zinc-400 ml-1" />
                                        </div>
                                    </div>
                                </div>

                                {/* Video Info */}
                                <div className="p-4">
                                    <h3 className="font-semibold text-gray-900 dark:text-zinc-400 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                                        {video.title || 'Untitled Video'}
                                    </h3>
                                    <div className="text-sm text-gray-600 mb-3 line-clamp-2">
                                        <p className="text-sm text-gray-600 dark:text-zinc-400 mb-3 line-clamp-2">
                                            {video.description || 'No description available'}
                                        </p>
                                    </div>

                                    {/* Stats */}
                                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-zinc-400">
                                        <div className="flex items-center gap-4">
                                            <span className="flex items-center gap-1">
                                                <Eye className="w-4 h-4 text-zinc-400" />
                                                {(video.viewCount || 0).toLocaleString()}
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Heart className="w-4 h-4 text-zinc-400" />
                                                {video.likeCount || 0}
                                            </span>
                                        </div>
                                        {video.createdAt && (
                                            <span className="flex items-center gap-1">
                                                <Calendar className="w-4 h-4" />
                                                {formatDate(video.createdAt)}
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <ContentError
                        type="no-results"
                        message="រកមិនឃើញវីដេអូ។ សូមបង្ហោះវីដេអូដំបូងរបស់អ្នក!"
                    />
                )}
            </div>
        </div>
    );
}