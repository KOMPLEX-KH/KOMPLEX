'use client';

import React from 'react';

const TabSkeleton: React.FC = () => {
    return (
        <div className="px-2 py-3 space-y-2">
            {Array.from({ length: 5 }).map((_, index) => (
                <div
                    key={index}
                    className="h-8 rounded-full bg-indigo-50/80 dark:bg-indigo-900/80 animate-pulse"
                />
            ))}
        </div>
    );
};

export default TabSkeleton;


