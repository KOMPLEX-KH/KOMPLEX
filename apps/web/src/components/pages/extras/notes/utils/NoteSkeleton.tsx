'use client';

import { Search, Plus } from "lucide-react";

export default function NotesContentSkeleton() {
  return (
    <div className="min-h-screen animate-pulse">
      <div className="max-w-5xl mx-auto">

        {/* Header Skeleton */}
        <div className="flex items-center gap-3 mb-6">

          {/* Search input skeleton */}
          <div className="relative flex-1">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 bg-gray-300 rounded-full"></div>
            <div className="w-full h-12 bg-gray-300 rounded-xl"></div>
          </div>

          {/* Add note button skeleton */}
          <div className="w-12 h-12 bg-gray-300 rounded-full"></div>

        </div>

        {/* Notes List Skeleton: simulate 4 notes */}
        <div className="space-y-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="p-6 border border-gray-200 rounded-xl bg-white shadow-sm">
              {/* Title */}
              <div className="h-6 w-3/5 bg-gray-300 rounded mb-3"></div>
              {/* Date */}
              <div className="h-4 w-1/4 bg-gray-200 rounded mb-5"></div>
              {/* Content lines */}
              <div className="space-y-2">
                <div className="h-4 w-full bg-gray-300 rounded"></div>
                <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
                <div className="h-4 w-4/6 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
