"use client";

import React from "react";

const ChatSkeleton = React.memo(() => {
    return (
        <div className="space-y-6 p-4">
            <div className="flex justify-end">
                <div className="bg-gray-200 dark:bg-zinc-800 rounded-2xl px-4 py-3 max-w-[70%] animate-pulse">
                    <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded w-32" />
                </div>
            </div>

            <div className="w-full">
                <div className="space-y-3">
                    <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse" />
                    <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-4/5 animate-pulse" />
                    <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-3/4 animate-pulse" />
                    <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-5/6 animate-pulse" />
                </div>
            </div>

            <div className="flex justify-end">
                <div className="bg-gray-200 dark:bg-zinc-800 rounded-2xl px-4 py-3 max-w-[70%] animate-pulse">
                    <div className="h-4 bg-gray-300 dark:bg-zinc-700 rounded w-24" />
                </div>
            </div>

            <div className="w-full">
                <div className="space-y-3">
                    <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse" />
                    <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-4/5 animate-pulse" />
                    <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-2/3 animate-pulse" />
                </div>
            </div>
        </div>
    );
});

ChatSkeleton.displayName = "ChatSkeleton";

export default ChatSkeleton;

