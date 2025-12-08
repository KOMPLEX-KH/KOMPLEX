'use client';

import React, { useEffect, useState, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { meAiService } from '@/services/index';
import { ChevronLeft, ChevronRight, Edit, Menu, X, MoreVertical, Check, Trash2 } from 'lucide-react';
import { AiTab } from '@core-types/content/ai';
import TabSkeleton from './TabSkeleton';
import Link from 'next/link';
import { Transition } from '@headlessui/react';
import DeleteConfirm from '@/components/common/DeleteConfirm';

type ActiveTab = 'general' | 'topic';

type SideBarProps = {
    onCollapsedChange?: (collapsed: boolean) => void;
};

const SideBar: React.FC<SideBarProps> = ({ onCollapsedChange }) => {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeTab, setActiveTab] = useState<ActiveTab>('general');
    const [generalTabs, setGeneralTabs] = useState<AiTab[]>([]);
    const [topicTabs, setTopicTabs] = useState<AiTab[]>([]);
    const [isLoadingGeneral, setIsLoadingGeneral] = useState(false);
    const [isLoadingTopics, setIsLoadingTopics] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Editing state
    const [editingId, setEditingId] = useState<number | null>(null);
    const [editValue, setEditValue] = useState<string>('');
    const [hoveredId, setHoveredId] = useState<number | null>(null);
    const [openMenuId, setOpenMenuId] = useState<number | null>(null);
    const editInputRef = useRef<HTMLInputElement>(null);

    // Delete confirmation state
    const [isDeleteConfirmOpen, setIsDeleteConfirmOpen] = useState(false);
    const [itemToDelete, setItemToDelete] = useState<AiTab | null>(null);

    // Hide-on-scroll state (for mobile header)
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const lastScrollYRef = useRef(0);
    const scrollUpThresholdRef = useRef(0);

    useEffect(() => {
        const fetchTabs = async () => {
            try {
                setIsLoadingGeneral(true);
                setIsLoadingTopics(true);

                const [general, topics] = await Promise.all([
                    meAiService.getAllAiGeneralTabNames(),
                    meAiService.getAllAiTopicTabNames(),
                ]);

                const generalItems = Array.isArray(general) ? general : [];
                const topicItems = Array.isArray(topics) ? topics : [];

                setGeneralTabs(generalItems);
                setTopicTabs(topicItems);
            } catch (error) {
                console.error('Failed to load AI tabs:', error);
            } finally {
                setIsLoadingGeneral(false);
                setIsLoadingTopics(false);
            }
        };

        fetchTabs();
    }, []);

    // Sync activeTab with search params
    useEffect(() => {
        const tabId = searchParams.get('tabId');
        const topicId = searchParams.get('topicId');
        if (topicId) {
            setActiveTab('topic');
        } else if (tabId) {
            setActiveTab('general');
        }
    }, [searchParams]);

    // Notify parent when collapse state changes (for adjusting main content margin)
    useEffect(() => {
        onCollapsedChange?.(isCollapsed);
    }, [isCollapsed, onCollapsedChange]);

    // Hide-on-scroll behavior for mobile header
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const lastScrollY = lastScrollYRef.current;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Scrolling down and past initial threshold
                setIsScrollingDown(true);
                scrollUpThresholdRef.current = 0;
            } else if (currentScrollY < lastScrollY) {
                // Scrolling up
                scrollUpThresholdRef.current += lastScrollY - currentScrollY;

                // Only show after scrolling up enough or near the top
                if (scrollUpThresholdRef.current >= 100 || currentScrollY <= 100) {
                    setIsScrollingDown(false);
                    scrollUpThresholdRef.current = 0;
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

    const items = activeTab === 'general' ? generalTabs : topicTabs;
    const isLoading = activeTab === 'general' ? isLoadingGeneral : isLoadingTopics;
    const activeTabId = searchParams.get('tabId');
    const activeTopicId = searchParams.get('topicId');

    // Focus input when editing starts
    useEffect(() => {
        if (editingId && editInputRef.current) {
            editInputRef.current.focus();
            editInputRef.current.select();
        }
    }, [editingId]);

    // Close menu when clicking outside
    useEffect(() => {
        if (openMenuId === null) return;

        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement;
            // Check if click is outside menu and button
            if (!target.closest('[data-menu-container]') && !target.closest('[data-menu-button]')) {
                setOpenMenuId(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [openMenuId]);

    // Handle edit start
    const handleEditStart = (item: AiTab, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setEditingId(item.id);
        setEditValue(item.name);
    };

    // Handle edit save
    const handleEditSave = async (item: AiTab, e?: React.MouseEvent) => {
        e?.preventDefault();
        e?.stopPropagation();

        if (!editValue.trim() || editValue === item.name) {
            setEditingId(null);
            setEditValue('');
            return;
        }

        try {
            if (activeTab === 'general') {
                await meAiService.updateAiGeneralTabName(item.id, editValue.trim());
                setGeneralTabs(prev => prev.map(tab =>
                    tab.id === item.id ? { ...tab, name: editValue.trim() } : tab
                ));
            }
            setEditingId(null);
            setEditValue('');
        } catch (error) {
            console.error('Failed to update tab name:', error);
            // Optionally show error toast
        }
    };

    // Handle edit cancel
    const handleEditCancel = (e?: React.MouseEvent) => {
        e?.preventDefault();
        e?.stopPropagation();
        setEditingId(null);
        setEditValue('');
    };

    // Handle delete click - opens confirmation dialog
    const handleDeleteClick = (item: AiTab, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setItemToDelete(item);
        setIsDeleteConfirmOpen(true);
        setOpenMenuId(null);
    };

    // Handle delete confirmation
    const handleDeleteConfirm = async () => {
        if (!itemToDelete) return;

        try {
            if (activeTab === 'general') {
                await meAiService.deleteAiGeneralTab(itemToDelete.id);
                setGeneralTabs(prev => prev.filter(tab => tab.id !== itemToDelete.id));
                // Navigate away if this was the active tab
                if (String(itemToDelete.id) === activeTabId) {
                    router.push('/ai');
                }
            } else {
                await meAiService.deleteAiTopicTab(itemToDelete.id);
                setTopicTabs(prev => prev.filter(tab => tab.id !== itemToDelete.id));
                // Navigate away if this was the active topic
                if (String(itemToDelete.id) === activeTopicId) {
                    router.push('/ai');
                }
            }
            // Close any open menus/overlays after deletion
            setOpenMenuId(null);
            setIsMobileMenuOpen(false);
        } catch (error) {
            console.error('Failed to delete tab:', error);
            // Optionally show error toast
        } finally {
            setItemToDelete(null);
        }
    };

    // Tab item component for desktop
    const TabItemDesktop = ({ item }: { item: AiTab }) => {
        const isActiveItem =
            activeTab === 'general'
                ? String(item.id) === activeTabId
                : String(item.id) === activeTopicId;
        const isEditing = editingId === item.id;
        const isHovered = hoveredId === item.id;

        return (
            <div
                className={`group relative w-full flex items-center gap-2 px-4 py-1.5 rounded-full border transition-colors ${isActiveItem
                    ? 'bg-indigo-50 text-indigo-900 border-indigo-500'
                    : 'bg-transparent text-indigo-900 border-transparent hover:bg-indigo-50 hover:border-indigo-200'
                    }`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
            >
                {isEditing ? (
                    <div className='relative flex items-center justify-between w-full gap-2'>
                        <input
                            ref={editInputRef}
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleEditSave(item);
                                } else if (e.key === 'Escape') {
                                    handleEditCancel();
                                }
                            }}
                            className="flex-1 bg-transparent outline-none border-none text-sm font-medium text-indigo-900"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <div className="flex items-center gap-1">
                            <button
                                onClick={(e) => handleEditCancel(e)}
                                className="p-1 text-gray-500 hover:text-gray-700 transition-colors"
                                aria-label="បោះបង់"
                            >
                                <X className="w-4 h-4" />
                            </button>
                            <button
                                onClick={(e) => handleEditSave(item, e)}
                                className="p-1 text-indigo-600 hover:text-indigo-800 transition-colors"
                                aria-label="រក្សាទុក"
                            >
                                <Check className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='relative flex items-center justify-between w-full'>
                        <Link
                            href={activeTab === 'general' ? `/ai/chat?tabId=${item.id}` : `/ai/chat?topicId=${item.id}`}
                            className="flex-1 line-clamp-1 font-medium"
                        >
                            <span className="line-clamp-1">{item.name}</span>
                        </Link>
                        <div className="relative" data-menu-container>
                            <button
                                data-menu-button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setOpenMenuId(openMenuId === item.id ? null : item.id);
                                }}
                                className={`p-1 text-gray-500 hover:text-indigo-600 transition-colors focus:outline-none ${isHovered || openMenuId === item.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}
                                aria-label="ជម្រើស"
                            >
                                <MoreVertical className="w-3 h-3" />
                            </button>
                            <Transition
                                show={openMenuId === item.id}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <div className="absolute right-0 top-0 ml-2 z-[9999] w-40 bg-white rounded-2xl p-1 border border-gray-200 shadow-lg focus:outline-none">
                                    {activeTab === 'general' && (
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setOpenMenuId(null);
                                                handleEditStart(item, e);
                                            }}
                                            className="w-full text-left px-3 py-2 text-sm rounded-xl transition-colors flex items-center gap-2 hover:bg-indigo-50 hover:text-indigo-700 text-gray-700"
                                        >
                                            <Edit className="w-4 h-4" />
                                            កែប្រែ
                                        </button>
                                    )}
                                    <button
                                        onClick={(e) => handleDeleteClick(item, e)}
                                        className="w-full text-left px-3 py-2 text-sm rounded-xl transition-colors flex items-center gap-2 hover:bg-red-50 hover:text-red-700 text-gray-700"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                        លុប
                                    </button>
                                </div>
                            </Transition>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    // Tab item component for mobile
    const TabItemMobile = ({ item }: { item: AiTab }) => {
        const isActiveItem =
            activeTab === 'general'
                ? String(item.id) === activeTabId
                : String(item.id) === activeTopicId;
        const isEditing = editingId === item.id;
        const isHovered = hoveredId === item.id;

        return (
            <div
                className={`group relative w-full flex items-center gap-2 px-4 py-1.5 rounded-full border transition-colors my-2 ${isActiveItem
                    ? 'bg-indigo-50 text-indigo-900 border-indigo-500'
                    : 'bg-transparent text-indigo-900 border-transparent hover:bg-indigo-50 hover:border-indigo-200'
                    }`}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
            >
                {isEditing ? (
                    <div className='relative flex items-center justify-between w-full gap-2 min-w-0'>
                        <input
                            ref={editInputRef}
                            type="text"
                            value={editValue}
                            onChange={(e) => setEditValue(e.target.value)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleEditSave(item);
                                } else if (e.key === 'Escape') {
                                    handleEditCancel();
                                }
                            }}
                            className="flex-1 min-w-0 bg-transparent outline-none border-none text-sm font-medium text-indigo-900"
                            onClick={(e) => e.stopPropagation()}
                            onFocus={(e) => e.stopPropagation()}
                        />
                        <div className="flex items-center gap-1 flex-shrink-0">
                            <button
                                onClick={(e) => handleEditCancel(e)}
                                className="p-1 text-gray-500 hover:text-gray-700 transition-colors flex-shrink-0"
                                aria-label="បោះបង់"
                            >
                                <X className="w-4 h-4" />
                            </button>
                            <button
                                onClick={(e) => handleEditSave(item, e)}
                                className="p-1 text-indigo-600 hover:text-indigo-800 transition-colors flex-shrink-0"
                                aria-label="រក្សាទុក"
                            >
                                <Check className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='relative flex items-center justify-between w-full'>
                        <Link
                            href={activeTab === 'general' ? `/ai/chat?tabId=${item.id}` : `/ai/chat?topicId=${item.id}`}
                            className="flex-1 line-clamp-1 text-sm font-medium"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            <span className="line-clamp-1">{item.name}</span>
                        </Link>
                        <div className="relative">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    e.stopPropagation();
                                    setOpenMenuId(openMenuId === item.id ? null : item.id);
                                }}
                                className={`p-1 text-gray-500 hover:text-indigo-600 transition-colors focus:outline-none ${isHovered || openMenuId === item.id ? 'opacity-100' : 'opacity-100 lg:opacity-0 lg:group-hover:opacity-100'}`}
                                aria-label="ជម្រើស"
                            >
                                <MoreVertical className="w-4 h-4" />
                            </button>
                            <Transition
                                show={openMenuId === item.id}
                                enter="transition duration-100 ease-out"
                                enterFrom="transform scale-95 opacity-0"
                                enterTo="transform scale-100 opacity-100"
                                leave="transition duration-75 ease-out"
                                leaveFrom="transform scale-100 opacity-100"
                                leaveTo="transform scale-95 opacity-0"
                            >
                                <div className="absolute right-0 top-0 ml-2 w-40 bg-white rounded-2xl p-1 border border-gray-200 shadow-lg z-[100] focus:outline-none">
                                    {activeTab === 'general' && (
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                e.stopPropagation();
                                                setOpenMenuId(null);
                                                handleEditStart(item, e);
                                            }}
                                            className="w-full text-left px-3 py-2 text-sm rounded-xl transition-colors flex items-center gap-2 hover:bg-indigo-50 hover:text-indigo-700 text-gray-700"
                                        >
                                            <Edit className="w-4 h-4" />
                                            កែប្រែ
                                        </button>
                                    )}
                                    <button
                                        onClick={(e) => handleDeleteClick(item, e)}
                                        className="w-full text-left px-3 py-2 text-sm rounded-xl transition-colors flex items-center gap-2 hover:bg-red-50 hover:text-red-700 text-gray-700"
                                    >
                                        <Trash2 className="w-4 h-4" />
                                        លុប
                                    </button>
                                </div>
                            </Transition>
                        </div>
                    </div>
                )}
            </div>
        );
    };

    return (
        <>
            {/* Desktop sidebar */}
            <div className="fixed inset-y-0 left-0 z-40 pointer-events-none">
                <div className="hidden lg:flex h-full pointer-events-auto">
                    {isCollapsed ? (
                        // Collapsed: only two circular icon buttons (no background card)
                        <div className="pl-6 pt-20 pb-6 flex flex-col items-center gap-3">
                            <button
                                type="button"
                                onClick={() => setIsCollapsed(false)}
                                className="w-10 h-10 rounded-full flex items-center justify-center text-indigo-600 hover:text-indigo-800 transition-colors shadow-lg border border-gray-200 bg-white"
                                aria-label="បើក Sidebar វិញ"
                            >
                                <ChevronRight className="w-5 h-5" />
                            </button>
                            <Link
                                href="/ai"
                                className="w-10 h-10 rounded-full flex items-center justify-center text-indigo-600 hover:text-indigo-800 transition-colors shadow-lg border border-gray-200 bg-white"
                                aria-label="សន្ទនាថ្មី"
                            >
                                <Edit className="w-5 h-5" />
                            </Link>
                        </div>
                    ) : (
                        <div className="pl-6 pt-20 pb-6 h-full">
                            <div className="bg-white/95 backdrop-blur-sm shadow-xl border border-indigo-100 rounded-3xl flex flex-col w-72 h-full transition-all duration-200 ease-out overflow-hidden">
                                {/* Header */}
                                <div className="flex items-center justify-between px-4 py-3 border-b border-indigo-50">
                                    <div className="flex items-center gap-4">
                                        <div className="flex ">
                                            <span className="text-xl font-bold tracking-wide text-indigo-600 uppercase">
                                                តា
                                            </span>
                                            <span className="text-xl font-bold tracking-wide text-indigo-500 uppercase">
                                                រា  <span className="text-base text-gray-500 "> AI 1.0</span>
                                            </span>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => setIsCollapsed(true)}
                                        className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-indigo-100 bg-white text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 transition-colors"
                                        aria-label="បិទ Sidebar"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </button>
                                </div>

                                {/* New chat button */}
                                <div className="px-4 pt-3 pb-2">
                                    <Link
                                        href="/ai"
                                        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 text-white text-sm font-medium py-2.5 shadow-md hover:bg-indigo-700 transition-colors"
                                    >
                                        <Edit className="w-4 h-4" />
                                        <span className="text-sm font-medium">សន្ទនាថ្មី</span>
                                    </Link>
                                </div>

                                {/* Tabs */}
                                <div className="px-3 pt-2 pb-3">
                                    <div className="flex p-1 rounded-full bg-indigo-50">
                                        <button
                                            type="button"
                                            onClick={() => setActiveTab('general')}
                                            className={`flex-1 px-4 py-2 text-sm font-semibold rounded-full transition-colors ${activeTab === 'general'
                                                ? 'bg-white text-indigo-700 shadow-sm'
                                                : 'text-indigo-500 hover:text-indigo-700'
                                                }`}
                                        >
                                            ទូទៅ
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setActiveTab('topic')}
                                            className={`flex-1 px-4 py-2 text-sm font-semibold rounded-full transition-colors ${activeTab === 'topic'
                                                ? 'bg-white text-indigo-700 shadow-sm'
                                                : 'text-indigo-500 hover:text-indigo-700'
                                                }`}
                                        >
                                            មេរៀន
                                        </button>
                                    </div>
                                </div>

                                {/* List */}
                                <div className="flex-1 px-4 pb-3 overflow-y-auto scrollbar-hide">
                                    <div className="h-full overflow-y-auto scrollbar-hide space-y-1.5 ">
                                        {isLoading ? (
                                            <TabSkeleton />
                                        ) : (
                                            items.map((item) => (
                                                <TabItemDesktop key={`${activeTab}-${item.id}`} item={item} />
                                            ))
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Mobile secondary header + overlay menu */}
            <div
                className={`fixed top-14 left-0 right-0 z-30 px-4 py-2 flex items-center justify-between bg-white/95 lg:hidden transition-transform duration-300 ${isScrollingDown ? '-translate-y-[200%]' : 'translate-y-0'
                    }`}
            >
                {/* Left: menu button */}
                <button
                    type="button"
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="inline-flex items-center justify-center w-10 h-10  text-gray-700 hover:text-indigo-600 transition-colors"
                    aria-label="បើកបញ្ជីសន្ទនា"
                >
                    <Menu className="w-5 h-5" />
                </button>

                {/* Right: new chat button */}
                <Link
                    href="/ai"
                    className="inline-flex items-center justify-center rounded-full bg-indigo-600 text-white text-sm font-medium p-2 shadow-md hover:bg-indigo-700 transition-colors"
                >
                    <Edit className="w-4 h-4" />
                </Link>
            </div>

            {/* Mobile overlay menu */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 z-40 lg:hidden bg-black/10 backdrop-blur-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    <div
                        className="absolute top-16 left-3 right-12 max-w-xs bg-white/95 backdrop-blur-sm shadow-xl border border-indigo-100 rounded-3xl flex flex-col overflow-hidden h-[calc(100vh-5rem)]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Tabs header inside overlay */}
                        <div className="flex items-center justify-between px-4 py-3 border-b border-indigo-50">
                            <div className="flex ">
                                <span className="text-xl font-bold tracking-wide text-indigo-600 uppercase">
                                    តា
                                </span>
                                <span className="text-xl font-bold tracking-wide text-indigo-500 uppercase">
                                    រា  <span className="text-base text-gray-500 "> AI 1.0</span>
                                </span>
                            </div>
                            <button
                                type="button"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="inline-flex items-center justify-center w-7 h-7 rounded-full border border-gray-200 bg-white text-gray-500 hover:text-gray-700 hover:border-gray-300 transition-colors"
                                aria-label="បិទបញ្ជីសន្ទនា"
                            >
                                <X className="w-3 h-3" />
                            </button>
                        </div>

                        {/* Tabs switcher */}
                        <div className="px-3 pt-2 pb-2">
                            <div className="flex p-1 rounded-full bg-indigo-50">
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('general')}
                                    className={`flex-1 px-3 py-1.5 text-sm font-semibold rounded-full transition-colors ${activeTab === 'general'
                                        ? 'bg-white text-indigo-700 shadow-sm'
                                        : 'text-indigo-500 hover:text-indigo-700'
                                        }`}
                                >
                                    ទូទៅ
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setActiveTab('topic')}
                                    className={`flex-1 px-3 py-1.5 text-sm font-semibold rounded-full transition-colors ${activeTab === 'topic'
                                        ? 'bg-white text-indigo-700 shadow-sm'
                                        : 'text-indigo-500 hover:text-indigo-700'
                                        }`}
                                >
                                    មេរៀន
                                </button>
                            </div>
                        </div>

                        {/* List - full height & scrollable */}
                        <div className="flex-1 px-4 pb-3 overflow-y-auto scrollbar-hide space-y-1.5 ">
                            {isLoading ? (
                                <TabSkeleton />
                            ) : (
                                items.map((item) => (
                                    <TabItemMobile key={`${activeTab}-${item.id}`} item={item} />
                                ))
                            )}
                        </div>
                    </div>
                </div>
            )}

            {/* Delete Confirmation Dialog */}
            <DeleteConfirm
                isOpen={isDeleteConfirmOpen}
                onClose={() => {
                    setIsDeleteConfirmOpen(false);
                    setItemToDelete(null);
                }}
                onConfirm={handleDeleteConfirm}
                title="លុបសន្ទនា"
                message={itemToDelete ? `តើអ្នកពិតជាចង់លុប "${itemToDelete.name}" ចោលមែនទេ?` : 'តើអ្នកពិតជាចង់លុបចោលមែនទេ?'}
            />
        </>
    );
};

export default SideBar;