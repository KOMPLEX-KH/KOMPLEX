'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Play, Eye, ThumbsUp, Clock } from 'lucide-react';
import ContentError from '@/components/common/ContentError';
import { userVideoService } from '@/services/index';
import { VideoPost } from '@core-types/api-types/videos';

interface VideoProps {
    userId: string;
}

const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export default function Videos({ userId }: VideoProps) {
    const [videos, setVideos] = useState<VideoPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserVideos = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await userVideoService.getUserVideos(userId);
                setVideos(data.data);
            } catch (error) {
                console.error('Error fetching user videos:', error);
                setError('មានបញ្ហាក្នុងការទាញយកវីដេអូរបស់អ្នកប្រើប្រាស់។ សូមព្យាយាមម្តងទៀត។');
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserVideos();
    }, [userId]);

    if (isLoading) {
        return (
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-400 mb-6">វីដេអូ</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="animate-pulse">
                            <div className="aspect-video bg-gray-200 rounded-2xl mb-4"></div>
                            <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-3/4 mb-2"></div>
                            <div className="h-3 bg-gray-200 dark:bg-zinc-800 rounded w-1/2"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-400 mb-6">វីដេអូ</h2>
                <ContentError
                    type="error"
                    message={error}
                />
            </div>
        );
    }

    if (videos.length === 0) {
        return (
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-400 mb-6">វីដេអូ</h2>
                <ContentError
                    type="no-results"
                    message="អ្នកប្រើប្រាស់នេះមិនទាន់មានវីដេអូទេ។"
                />
            </div>
        );
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-zinc-400 mb-6">វីដេអូ ({videos.length})</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                    <Link
                        key={video.id}
                        href={`/videos/${video.id}`}
                        className="group block"
                    >
                        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-lg shadow-indigo-500/10 border border-indigo-500/10 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/15 hover:-translate-y-1 overflow-hidden">
                            {/* Video Thumbnail */}
                            <div className="relative aspect-video">
                                <img
                                    src={video.thumbnailUrl}
                                    alt={video.title}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.src = '/image-error.png';
                                    }}
                                />

                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                                        <Play className="w-6 h-6 text-gray-900 ml-1" fill="currentColor" />
                                    </div>
                                </div>

                                {/* Duration Badge */}
                                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                                    <Clock className="w-3 h-3" />
                                    {formatDuration(video.duration)}
                                </div>
                            </div>

                            {/* Video Info */}
                            <div className="p-4">
                                <h3 className="font-bold text-gray-900 dark:text-zinc-400 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                                    {video.title}
                                </h3>

                                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-zinc-400 mb-3">
                                    <div className="flex items-center gap-1">
                                        <Eye className="w-4 h-4" />
                                        {video.viewCount}
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <ThumbsUp className="w-4 h-4" />
                                        {video.likeCount}
                                    </div>
                                </div>

                                <div className="text-xs text-gray-500 dark:text-zinc-400">
                                    {new Date(video.createdAt).toLocaleDateString('km-KH', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
