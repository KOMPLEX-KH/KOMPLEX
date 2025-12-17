'use client';

export default function NotesContentSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-white rounded-2xl border border-gray-200 overflow-hidden animate-pulse">
          {/* Header skeleton */}
          <div className="bg-gray-300 h-32 relative">
            <div className="absolute bottom-4 left-4 right-4">
              <div className="h-4 bg-gray-400 rounded w-20 mb-2"></div>
              <div className="h-6 bg-gray-400 rounded w-3/4 mb-1"></div>
              <div className="h-3 bg-gray-400 rounded w-1/2"></div>
            </div>
          </div>

          {/* Formula display skeleton */}
          <div className="p-6 bg-gray-50">
            <div className="bg-gray-200 rounded-xl h-20"></div>
          </div>

          {/* Footer skeleton */}
          <div className="p-4">
            <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-3 bg-gray-200 rounded w-4/5 mb-3"></div>
            <div className="flex items-center justify-between">
              <div className="h-3 bg-gray-200 rounded w-24"></div>
              <div className="h-3 bg-gray-200 rounded w-20"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
