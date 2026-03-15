'use client';

import React from 'react';
import {
    Home,
    Play,
    Clock,
    TrendingUp,
    History,
    Plus
} from 'lucide-react';
import { useRouter } from 'next/navigation';

const videoSidebar = [
    {
        href: '/video',
        label: 'ទំព័រដើម',
        icon: Home,
        disabled: false,
    },
    {
        href: '/me/video-history?tab=videoHistory',
        label: 'ប្រវត្តិ',
        icon: History,
        disabled: false,
    },
    {
        href: '/me/create-video',
        label: 'បង្កើតវីដេអូ',
        icon: Plus,
        disabled: false,
    },
    {
        href: '/new-videos',
        label: 'ថ្មីៗ',
        icon: Clock,
        disabled: true,
    },
    {
        href: '/short-videos',
        label: 'វីដេអូខ្លី',
        icon: Play,
        disabled: true,
    },
    {
        href: '/trending-videos',
        label: 'ពេញនិយម',
        icon: TrendingUp,
        disabled: true,
    },
]

interface SidebarProps {
    sidebarOpen: boolean;
    onSidebarToggle: () => void;
}

export default function Sidebar({
    sidebarOpen,
    onSidebarToggle
}: SidebarProps) {
    const router = useRouter();
    return (
        <>
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/20 dark:bg-zinc-900/20 backdrop-blur-sm z-40 lg:hidden"
                    onClick={onSidebarToggle}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed lg:static h-full top-14 left-0 z-50 w-64 bg-white dark:bg-zinc-900 overflow-y-auto scrollbar-hide border-r border-gray-200 dark:border-zinc-800 transform transition-transform duration-300 ease-in-out max-h-[calc(100vh-3.5rem)] ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
                }`}>
                {/* Navigation */}
                <nav className="p-4 space-y-2">
                    {videoSidebar.map((item) => {
                        return (
                            <button onClick={() => {
                                if (item.disabled) {
                                    return;
                                }
                                router.push(item.href);
                            }} key={item.href} className={`flex w-full items-center gap-3 px-3 py-2 text-gray-700 dark:text-zinc-400  rounded-3xl hover:bg-indigo-100 dark:hover:bg-indigo-900 transition-colors ${item.disabled ? 'opacity-50 cursor-not-allowed user-select-none' : ''}`}>
                                <item.icon size={20} className="text-indigo-600" />
                                <span>{item.label}</span>
                            </button>
                        )
                    })}
                </nav>

            </div>
        </>
    );
}
