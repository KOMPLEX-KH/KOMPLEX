'use client';

import { useEffect, useState } from "react";

export default function SidebarSkeleton() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;
    return (
        <div className="hidden lg:block w-70 bg-white dark:bg-zinc-900/95 backdrop-blur-md border-r border-indigo-500/10 overflow-y-auto fixed h-[calc(100vh-56px)] top-28 z-40 shadow-lg scrollbar-hide">
            <div className="pb-12">
                <div className="p-4">
                    <div className="space-y-4">
                        {/* Render 5 lesson skeletons */}
                        {Array.from({ length: 5 }).map((_, lessonIndex) => (
                            <div key={lessonIndex} className="space-y-2">
                                {/* Lesson Header Skeleton */}
                                <div className="w-full flex items-center justify-between p-4 rounded-full shadow-lg shadow-indigo-500/15 bg-gray-50 dark:bg-zinc-800">
                                    <div className="flex items-center gap-3">
                                        {/* Icon skeleton */}
                                        <div className="w-4 h-4 bg-gray-300 dark:bg-zinc-700 rounded animate-pulse"></div>
                                        {/* Lesson title skeleton */}
                                        <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded animate-pulse w-32"></div>
                                    </div>
                                    {/* Chevron skeleton */}
                                    <div className="w-4 h-4 bg-gray-300 dark:bg-zinc-700 rounded animate-pulse"></div>
                                </div>

                                {/* Topics Skeleton - Show 3-4 topics per lesson */}
                                <div className="ml-4 space-y-2">
                                    {Array.from({ length: Math.floor(Math.random() * 2) + 3 }).map((_, topicIndex) => (
                                        <div
                                            key={topicIndex}
                                            className="block px-4 py-3 rounded-full"
                                        >
                                            {/* Topic title skeleton */}
                                            <div className="h-3 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse w-24"></div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
