interface ForumSkeletonProps {
    count: number;
}

export default function ForumSkeleton({ count }: ForumSkeletonProps) {
    return (
        <div className="space-y-5">
            {[...Array(count)].map((_, index) => (
                <div key={index} className="lg:bg-white dark:bg-zinc-900 lg:rounded-3xl lg:p-6 lg:shadow-sm lg:border lg:border-gray-200 dark:border-zinc-700 animate-pulse">
                    <div className="w-12 h-12 bg-gray-300 dark:bg-zinc-800 rounded-full"></div>
                    <div className="flex items-start gap-4 mt-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                                <div className="h-4 bg-gray-300 dark:bg-zinc-800 rounded w-24"></div>
                                <div className="h-3 bg-gray-200 dark:bg-zinc-800 rounded w-16"></div>
                            </div>
                            <div className="h-6 bg-gray-300 dark:bg-zinc-800 rounded w-3/4 mb-3"></div>
                            <div className="space-y-2">
                                <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-2/3"></div>
                            </div>
                            <div className="bg-gray-200 dark:bg-zinc-800 rounded w-full h-96 my-4"></div>
                            <div className="flex items-center gap-4 mt-4">
                                <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-16"></div>
                                <div className="h-4 bg-gray-200 dark:bg-zinc-700 rounded w-16"></div>
                                <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-16"></div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
