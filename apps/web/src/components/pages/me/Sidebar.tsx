'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import {
    LayoutDashboard,
    BookOpen,
    MessageSquare,
    Video,
    Pencil,
    User
} from 'lucide-react';

const navItems = [
    {
        label: 'ផ្ទាំងគ្រប់គ្រង',
        href: '/me',
        icon: LayoutDashboard
    },

    // {
    //     label: 'អត្ថបទ',
    //     href: '/me/blogs',
    //     icon: BookOpen
    // },
    {
        label: 'ពិភាក្សា',
        href: '/me/forums',
        icon: MessageSquare
    },
    {
        label: 'វីដេអូ',
        href: '/me/videos',
        icon: Video
    },
    {
        label: 'លំហាត់',
        href: '/me/exercises',
        icon: Pencil
    },
    {
        label: 'ប្រវត្តិរូប',
        href: '/me/profile',
        icon: User
    },
];


export default function Sidebar() {
    const pathname = usePathname();
    const mobileNavRef = useRef<HTMLDivElement>(null);

    const isActive = (href: string) => {
        if (href === '/me') {
            return pathname === '/me';
        }
        return pathname?.startsWith(href);
    };

    // Auto-scroll mobile top bar to ensure active item is visible
    useEffect(() => {
        const container = mobileNavRef.current;
        if (!container) return;

        const activeEl = container.querySelector('[data-active="true"]') as HTMLElement | null;
        if (!activeEl) return;

        const containerRect = container.getBoundingClientRect();
        const elRect = activeEl.getBoundingClientRect();
        const desiredLeft = elRect.left - containerRect.left + container.scrollLeft - (container.clientWidth / 2 - elRect.width / 2);
        container.scrollTo({ left: Math.max(0, desiredLeft) });
    }, [pathname]);

    return (
        <>
            {/* Desktop Sidebar */}
            <div className="hidden lg:block w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-14 overflow-y-auto">
                <div className="p-6">
                    {/* Main Navigation */}
                    <div className="mb-8">
                        <nav className="space-y-1">
                            {navItems.map((item) => {
                                const Icon = item.icon;
                                const active = isActive(item.href);

                                return (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`group flex items-center gap-3 px-3 py-3 rounded-3xl text-sm font-medium transition-all duration-200 ${active
                                            ? 'text-indigo-600 bg-indigo-50 border border-indigo-500 shadow-sm'
                                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50 border border-transparent hover:border-gray-300'
                                            }`}
                                    >
                                        <div className={`p-2 rounded-3xl transition-colors duration-200 ${active
                                            ? 'bg-indigo-100 text-indigo-600'
                                            : 'bg-gray-100 text-gray-600 group-hover:bg-indigo-100 group-hover:text-indigo-600'
                                            }`}>
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <div className="font-medium">{item.label}</div>
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </div>
            </div>

            {/* Mobile Top Navigation */}
            <div className="lg:hidden fixed top-14 left-0 right-0 bg-white border-b border-gray-200 z-40">
                <div className="px-5 py-2">
                    <nav ref={mobileNavRef} className="flex justify-between items-center gap-2 overflow-x-auto scrollbar-hide">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const active = isActive(item.href);

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    data-active={active ? 'true' : 'false'}
                                    className={`flex-shrink-0 flex flex-col items-center gap-1 px-3 py-2 rounded-3xl text-xs font-medium transition-all duration-200 min-w-[70px] ${active
                                        ? 'text-indigo-600 bg-indigo-50 border border-indigo-500'
                                        : 'text-gray-700 hover:text-black hover:bg-gray-50 border border-transparent hover:border-gray-300'
                                        }`}
                                >
                                    <div className={`p-1.5 rounded-3xl transition-colors duration-200 ${active
                                        ? 'bg-indigo-100 text-indigo-600'
                                        : 'bg-gray-100 text-gray-600 group-hover:bg-indigo-100 group-hover:text-indigo-600'
                                        }`}>
                                        <Icon className="w-3.5 h-3.5" />
                                    </div>
                                    <span className="text-center leading-tight">{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </>
    );
}
