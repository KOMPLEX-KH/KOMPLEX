interface BookSkeletonProps {
    count: number;
}

export default function BookSkeleton({ count }: BookSkeletonProps) {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-pulse">
            {[...Array(count)].map((_, index) => (
                <div
                    key={index}
                    className="bg-white rounded-xl shadow-md overflow-hidden"
                >
                    {/* Book image placeholder */}
                    <div className="w-full h-48 bg-gray-200"></div>

                    {/* Text placeholders */}
                    <div className="p-4 space-y-3">
                        <div className="h-5 bg-gray-300 rounded w-2/3"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/3"></div>
                    </div>
                </div>
            ))}
        </div>
    );
}
