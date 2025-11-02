'use client';

import { useEffect, useState, useRef } from "react";

export default function DocHeaderSkeleton() {
    const [mounted, setMounted] = useState(false);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const lastScrollYRef = useRef(0);
    const scrollUpThresholdRef = useRef(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Handle scroll direction detection for mobile header hiding
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const lastScrollY = lastScrollYRef.current;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Scrolling down and past initial 50px
                setIsScrollingDown(true);
                scrollUpThresholdRef.current = 0; // Reset threshold
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up - accumulate threshold
                scrollUpThresholdRef.current += (lastScrollY - currentScrollY);

                // Only show when scrolling up by at least 20px
                if (scrollUpThresholdRef.current >= 100 || currentScrollY <= 100) {
                    setIsScrollingDown(false);
                    scrollUpThresholdRef.current = 0; // Reset after showing
                }
            } else if (currentScrollY <= 50) {
                // Near top - always show
                setIsScrollingDown(false);
                scrollUpThresholdRef.current = 0;
            }

            lastScrollYRef.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (!mounted) return null;

    return (
        <>
            {/* Desktop Subject Header Skeleton */}
            <div className="hidden lg:block fixed w-full top-14 z-40 bg-white/95 backdrop-blur-md border-b border-indigo-500/10">
                <div className="max-w-full mx-auto px-5 py-2">
                    <div className="flex items-center justify-between gap-5">
                        <div className="flex items-center gap-4">
                            {/* Subject buttons skeleton */}
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200"
                                >
                                    {/* Icon skeleton */}
                                    <div className="w-[18px] h-[18px] bg-gray-300 rounded animate-pulse"></div>
                                    {/* Subject name skeleton */}
                                    <div className="h-4 bg-gray-300 rounded animate-pulse w-20"></div>
                                </div>
                            ))}
                        </div>
                        {/* Grade select for desktop skeleton */}
                        <div className="hidden lg:flex items-center bg-indigo-50/50 p-1 gap-4 rounded-full">
                            {Array.from({ length: 4 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 p-2 rounded-full bg-gray-100 border border-gray-200"
                                >
                                    <div className="h-4 bg-gray-300 rounded animate-pulse w-12"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Subject Navigation Skeleton */}
            <div className={`lg:hidden fixed w-full top-14 z-40 bg-white/95 backdrop-blur-md border-b border-indigo-500/10 transition-transform duration-300 ${isScrollingDown ? '-translate-y-[300%]' : 'translate-y-0'
                }`}>
                <div className="max-w-full mx-auto px-5 py-2">
                    <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
                            {/* Subject buttons skeleton */}
                            {Array.from({ length: 5 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 border border-gray-200 whitespace-nowrap flex-shrink-0"
                                >
                                    {/* Icon skeleton */}
                                    <div className="w-[18px] h-[18px] bg-gray-300 rounded animate-pulse"></div>
                                    {/* Subject name skeleton */}
                                    <div className="h-3 bg-gray-300 rounded animate-pulse w-16"></div>
                                </div>
                            ))}
                        </div>
                        {/* Mobile Grade Dropdown Skeleton */}
                        <div className="relative">
                            <div className="bg-gray-100 border border-gray-200 rounded-full px-2 py-2 flex items-center justify-between max-w-[80px] min-w-[60px]">
                                <div className="h-3 bg-gray-300 rounded animate-pulse w-8"></div>
                                <div className="w-[14px] h-[14px] bg-gray-300 rounded animate-pulse flex-shrink-0"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Content Navigation Skeleton */}
            <div className={`lg:hidden fixed w-full top-27 z-30 bg-white/95 backdrop-blur-md border-b border-indigo-500/10 transition-transform duration-300 ${isScrollingDown ? '-translate-y-[300%]' : 'translate-y-0'
                }`}>
                <div className="max-w-full mx-auto px-5 py-2">
                    <div className="flex items-center justify-start gap-3">
                        {/* Mobile Lesson Dropdown Skeleton */}
                        <div className="relative">
                            <div className="bg-gray-100 border border-gray-200 rounded-full px-2 py-2 flex items-center justify-between max-w-[80px] min-w-[60px]">
                                <div className="h-3 bg-gray-300 rounded animate-pulse w-10"></div>
                                <div className="w-[14px] h-[14px] bg-gray-300 rounded animate-pulse flex-shrink-0"></div>
                            </div>
                        </div>
                        {/* Mobile Topics Skeleton */}
                        <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 px-3 py-2 rounded-full bg-gray-100 border border-gray-200 whitespace-nowrap flex-shrink-0"
                                >
                                    <div className="h-3 bg-gray-300 rounded animate-pulse w-16"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

