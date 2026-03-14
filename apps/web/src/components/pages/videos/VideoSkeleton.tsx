import React from 'react';

export default function VideoSkeleton() {
    return (
        <div className="dark bg-gray-50 dark:bg-zinc-900 min-h-screen pt-15">
            <div className="w-full mx-auto px-5 py-6">
                {/* Main Grid Layout - Desktop */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-0 lg:gap-6 items-start">
                    {/* Left Column - Video Player and Info */}
                    <div className="space-y-4">
                        {/* Video Player Skeleton */}
                        <div className="bg-gray-200 dark:bg-zinc-800 rounded-3xl overflow-hidden shadow-lg">
                            <div className="w-full aspect-video bg-gray-300 dark:bg-zinc-900 animate-pulse flex items-center justify-center">
                                <div className="w-16 h-16 bg-gray-400 dark:bg-zinc-900 rounded-full flex items-center justify-center">
                                    <div className="w-6 h-6 bg-gray-500 dark:bg-zinc-900 rounded-sm"></div>
                                </div>
                            </div>
                        </div>

                        {/* Video Info Skeleton */}
                        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm p-6">
                            <div className="flex items-center gap-4 justify-between">
                                <div className="flex-1">
                                    <div className="h-8 bg-gray-200 dark:bg-zinc-900 rounded-lg animate-pulse mb-3 w-3/4"></div>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="h-4 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-20"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-16"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-12"></div>
                                        <div className="h-4 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-24"></div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="h-10 w-20 bg-gray-200 dark:bg-zinc-900 rounded-md animate-pulse"></div>
                                    <div className="h-10 w-24 bg-gray-200 dark:bg-zinc-900 rounded-md animate-pulse"></div>
                                    <div className="h-10 w-20 bg-gray-200 dark:bg-zinc-900 rounded-md animate-pulse"></div>
                                </div>
                            </div>
                            <div className="space-y-2 mt-4">
                                <div className="h-4 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-full"></div>
                                <div className="h-4 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-5/6"></div>
                                <div className="h-4 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-4/6"></div>
                            </div>
                        </div>

                        {/* Exercise Section - Under Video for Desktop */}
                        <div className="hidden lg:block">
                            <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm p-6">
                                <div className="space-y-4">
                                    <div className="h-6 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-32"></div>
                                    <div className="space-y-3">
                                        <div className="h-4 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-full"></div>
                                        <div className="space-y-2">
                                            <div className="h-8 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-full"></div>
                                            <div className="h-8 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-full"></div>
                                            <div className="h-8 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Sidebar */}
                    <div className="self-start h-fit lg:top-6">
                        {/* Desktop Tabs Skeleton */}
                        <div className="hidden lg:block">
                            <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm mb-4">
                                <div className="flex">
                                    <div className="flex-1 px-4 py-3">
                                        <div className="h-4 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-24 mx-auto"></div>
                                    </div>
                                    <div className="flex-1 px-4 py-3">
                                        <div className="h-4 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-20 mx-auto"></div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm">
                                <div className="p-6">
                                    <div className="space-y-4">
                                        {/* Recommended Videos Skeleton */}
                                        {[...Array(3)].map((_, i) => (
                                            <div key={i} className="flex gap-3">
                                                <div className="w-24 h-16 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse"></div>
                                                <div className="flex-1 space-y-2">
                                                    <div className="h-4 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-full"></div>
                                                    <div className="h-3 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-3/4"></div>
                                                    <div className="h-3 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-1/2"></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Tab System Skeleton */}
                <div className="lg:hidden mt-8">
                    {/* Mobile Tab Navigation Skeleton */}
                    <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm mb-4">
                        <div className="flex">
                            <div className="flex-1 px-4 py-3">
                                <div className="h-4 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-16 mx-auto"></div>
                            </div>
                            <div className="flex-1 px-4 py-3">
                                <div className="h-4 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-20 mx-auto"></div>
                            </div>
                            <div className="flex-1 px-4 py-3">
                                <div className="h-4 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-16 mx-auto"></div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Tab Content Skeleton */}
                    <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm p-6">
                        <div className="space-y-4">
                            <div className="h-6 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-32"></div>
                            <div className="space-y-3">
                                <div className="h-4 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-full"></div>
                                <div className="space-y-2">
                                    <div className="h-8 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-full"></div>
                                    <div className="h-8 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-full"></div>
                                    <div className="h-8 bg-gray-200 dark:bg-zinc-900 rounded animate-pulse w-full"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
