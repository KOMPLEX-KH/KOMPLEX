import React from 'react';

interface VideoCardSkeletonProps {
    count?: number;
}

export default function VideoCardSkeleton({ count = 6 }: VideoCardSkeletonProps) {
    return (
        <>
            {[...Array(count)].map((_, index) => (
                <div key={index} className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm overflow-hidden">
                    {/* Video Thumbnail Skeleton */}
                    <div className="relative aspect-video bg-gray-200 dark:bg-zinc-800 animate-pulse">
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-12 h-12 bg-gray-300 dark:bg-zinc-800 rounded-full flex items-center justify-center">
                                <div className="w-4 h-4 bg-gray-400 rounded-sm"></div>
                            </div>
                        </div>
                        {/* Duration badge skeleton */}
                        <div className="absolute bottom-2 right-2 bg-black dark:bg-zinc-900 bg-opacity-70 rounded-3xl     px-1.5 py-0.5">
                            <div className="w-8 h-3 bg-gray-300 dark:bg-zinc-800 rounded animate-pulse"></div>
                        </div>
                    </div>

                    {/* Video Info Skeleton */}
                    <div className="p-4">
                        <div className="flex gap-3">
                            {/* Channel Avatar Skeleton */}
                            <div className="w-10 h-10 bg-gray-200 dark:bg-zinc-800 rounded-full animate-pulse flex-shrink-0"></div>

                            {/* Video Details Skeleton */}
                            <div className="flex-1 space-y-2">
                                {/* Title Skeleton */}
                                <div className="space-y-1">
                                    <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse w-full"></div>
                                    <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse w-4/5"></div>
                                </div>

                                {/* Channel Name Skeleton */}
                                <div className="h-3 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse w-24"></div>

                                {/* Stats Skeleton */}
                                <div className="flex items-center gap-2">
                                    <div className="h-3 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse w-16"></div>
                                    <div className="h-3 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse w-12"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
}
