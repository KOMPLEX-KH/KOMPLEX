'use client';

import React from 'react';
import { User, Eye } from 'lucide-react';
import Link from 'next/link';
import { VideoPost } from '@core-types/content/videos';

interface VideoCardProps {
    video: VideoPost;
    variant?: 'default' | 'compact' | 'sidebar';
    onClick?: () => void;
}

export default function VideoCard({ video, variant = 'default', onClick }: VideoCardProps) {

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

    const handleCardHover = (e: React.MouseEvent<HTMLDivElement>) => {
        const videoElement = e.currentTarget.querySelector('video') as HTMLVideoElement;
        if (videoElement) {
            videoElement.play();
        }
    };

    const handleCardLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const videoElement = e.currentTarget.querySelector('video') as HTMLVideoElement;
        if (videoElement) {
            videoElement.pause();
            videoElement.currentTime = 0;
        }
    };

    if (variant === 'sidebar') {
        return (
            <Link href={`/videos/${video.id}`} className="block group overflow-hidden">
                <div
                    className="flex gap-3 hover:bg-gray-50 p-2 rounded-3xl transition-colors flex-wrap items-center cursor-pointer overflow-hidden"
                    onMouseEnter={handleCardHover}
                    onMouseLeave={handleCardLeave}
                >
                    <div className="relative w-32 h-36 flex-1 overflow-hidden">
                        <video
                            poster={video.thumbnailUrl ?? ''}
                            className="w-full h-full object-cover rounded-3xl"
                            muted
                            preload="metadata"
                        >
                            <source src={video.videoUrl ?? ''} type="video/mp4" />
                        </video>
                        {/* <div className="absolute bottom-1 right-1 bg-black/50 text-white text-xs px-1 py-0.5 rounded-3xl">
                            {formatDuration(video.duration)}
                        </div> */}
                    </div>
                    <div className="min-w-0 flex-2">
                        <h4 className="font-bold text-gray-900 text-md line-clamp-2 group-hover:text-indigo-600 transition-colors">
                            {video.title}
                        </h4>
                        <Link href={`/users/${video.userId}`} className="text-xs text-gray-600 mt-1 hover:text-indigo-600 hover:underline transition-colors">
                            {video.username}
                        </Link>
                        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                            <span className='flex items-center gap-1'>
                                <Eye size={12} />
                                {video.viewCount}
                            </span>
                            <span>•</span>
                            <span>{formatDate(video.createdAt)}</span>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    if (variant === 'compact') {
        return (
            <div className="block group cursor-pointer" onClick={onClick}>
                <div
                    className=" lg:rounded-3xl lg:bg-white lg:border lg:border-gray-200  backdrop-blur-sm  transition-all duration-300 transform overflow-hidden cursor-pointer"
                    onMouseEnter={handleCardHover}
                    onMouseLeave={handleCardLeave}
                >
                    <div className="relative overflow-hidden">
                        <video
                            className="w-full h-64 object-cover rounded-t-2xl z-10 group-hover:scale-105 transition-all duration-300"
                            poster={video.thumbnailUrl}
                            muted
                            preload="metadata"
                        >
                            <source src={video.videoUrl} type="video/mp4" />
                        </video>
                        {/* <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-xl">
                            {formatDuration(video.duration)}
                        </div> */}
                    </div>

                    <div className="p-3">
                        <h4 className="font-bold text-gray-900 text-sm line-clamp-2 mb-2">
                            {video.title}
                        </h4>

                        <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                            <Link href={`/users/${video.userId}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                                {video.profileImage ? (
                                    <img
                                        src={video.profileImage}
                                        alt={video.username}
                                        className="w-6 h-6 rounded-full object-cover border border-indigo-600"
                                        onError={(e) => {
                                            e.currentTarget.style.display = 'none';
                                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                        }}
                                    />
                                ) : null}
                                <div className={`rounded-full p-1 bg-indigo-50 border border-indigo-600 ${video.profileImage ? 'hidden' : ''}`}>
                                    <User size={12} />
                                </div>
                                <span className="hover:underline">{video.username}</span>
                            </Link>
                            <span>•</span>
                            <span>{formatDate(video.createdAt)}</span>
                        </div>

                        <span className="text-xs text-gray-500 flex items-center gap-1">
                            <Eye size={12} />
                            {video.viewCount}
                        </span>
                    </div>
                </div>
            </div>
        );
    }

    // Default variant (main video grid)
    return (
        <div
            className="block cursor-pointer group"
            onClick={onClick}
            onMouseEnter={handleCardHover}
            onMouseLeave={handleCardLeave}
        >
            <div className=" lg:rounded-3xl lg:bg-white lg:border lg:border-gray-200  backdrop-blur-sm  transition-all duration-300 transform overflow-hidden">
                <div className="relative overflow-hidden">
                    <video
                        className="w-full aspect-video object-cover lg:rounded-t-3xl lg:rounded-b-none rounded-3xl z-10 group-hover:scale-105 transition-all duration-300 overflow-hidden"
                        poster={video.thumbnailUrl}
                        muted
                        preload="metadata"
                    >
                        <source src={video.videoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-3xl">
                        {formatDuration(video.duration)}
                    </div> */}
                </div>

                <div className="p-4">
                    <h3 className="font-bold text-gray-900 text-md line-clamp-2 mb-2">
                        {video.title}
                    </h3>

                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                        <Link href={`/users/${video.userId}`} className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                            {video.profileImage ? (
                                <img
                                    src={video.profileImage}
                                    alt={video.username}
                                    className="w-8 h-8 rounded-full object-cover border-2 border-indigo-600"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                    }}
                                />
                            ) : null}
                            <div className={`rounded-full p-1 bg-indigo-50 border-2  border-indigo-600 ${video.profileImage ? 'hidden' : ''}`}>
                                <User size={16} />
                            </div>
                            <span className="hover:underline">{video.username}</span>
                        </Link>
                        <span>•</span>
                        <span>{formatDate(video.createdAt)}</span>
                    </div>

                    <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Eye size={16} />
                        {video.viewCount}
                    </span>
                </div>
            </div>
        </div>
    );
}
