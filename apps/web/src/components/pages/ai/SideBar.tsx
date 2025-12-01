'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { meAiService } from '@/services/index';
import { ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import { AiTab } from '@core-types/content/ai';
import TabSkeleton from './TabSkeleton';

type ActiveTab = 'general' | 'topic';

const SideBar: React.FC = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [activeTab, setActiveTab] = useState<ActiveTab>('general');
    const [generalTabs, setGeneralTabs] = useState<AiTab[]>([]);
    const [topicTabs, setTopicTabs] = useState<AiTab[]>([]);
    const [isLoadingGeneral, setIsLoadingGeneral] = useState(false);
    const [isLoadingTopics, setIsLoadingTopics] = useState(false);

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

    const handleNewChat = () => {
        router.push('/ai');
    };

    const handleSelectTabItem = (id: number) => {
        if (activeTab === 'general') {
            router.push(`/ai/chat?tabId=${id}`);
        } else {
            router.push(`/ai/chat?topicId=${id}`);
        }
    };

    const items = activeTab === 'general' ? generalTabs : topicTabs;
    const isLoading = activeTab === 'general' ? isLoadingGeneral : isLoadingTopics;
    const activeTabId = searchParams.get('tabId');
    const activeTopicId = searchParams.get('topicId');

    return (
        <div className="fixed inset-y-0 left-0 z-40 flex items-stretch pointer-events-none">
            <div className="pl-3 pt-20 pb-6 h-full pointer-events-auto">
                <div className="bg-white/95 backdrop-blur-sm shadow-xl border border-indigo-100 rounded-3xl flex flex-col w-72 h-full transition-all duration-200 ease-out overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-indigo-50">
                        <div className="flex items-center gap-4">
                            <div className="flex flex-col">
                                <span className="text-lg font-bold tracking-wide text-indigo-500 uppercase">
                                    តារា AI <span className='text-gray-500 text-sm'>1.0</span>
                                </span>
                            </div>
                        </div>
                        <button
                            type="button"
                            onClick={() => setIsCollapsed((prev) => !prev)}
                            className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-indigo-100 bg-white text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200 transition-colors"
                        >
                            {isCollapsed ? (
                                <ChevronRight className="w-4 h-4" />
                            ) : (
                                <ChevronLeft className="w-4 h-4" />
                            )}
                        </button>
                    </div>

                    {!isCollapsed && (
                        <>
                            {/* New chat button */}
                            <div className="px-4 pt-3 pb-2">
                                <button
                                    type="button"
                                    onClick={handleNewChat}
                                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 text-white text-sm font-medium py-2.5 shadow-md hover:bg-indigo-700 transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                    <span>សន្ទនាថ្មី</span>
                                </button>
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
                            <div className="flex-1 px-2 pb-3">
                                <div className="h-full overflow-y-auto scrollbar-hide space-y-1.5 pr-1">
                                    {isLoading ? (
                                        <TabSkeleton />
                                    ) : items.length === 0 ? (
                                        <div className="px-2 py-4 text-xs text-gray-400">
                                            មិនទាន់មានប្រវត្តិសន្ទនា
                                        </div>
                                    ) : (
                                        items.map((item) => {
                                            const isActiveItem =
                                                activeTab === 'general'
                                                    ? String(item.id) === activeTabId
                                                    : String(item.id) === activeTopicId;
                                            return (
                                                <button
                                                    key={`${activeTab}-${item.id}`}
                                                    type="button"
                                                    onClick={() => handleSelectTabItem(item.id)}
                                                    className={`w-full text-left px-4 py-2.5 rounded-full line-clamp-1 font-medium border transition-colors ${isActiveItem
                                                        ? 'bg-indigo-50 text-indigo-900 border-indigo-500'
                                                        : 'bg-transparent text-indigo-900 border-transparent hover:bg-indigo-50 hover:border-indigo-200'
                                                        }`}
                                                >
                                                    <span className="line-clamp-2">{item.name}</span>
                                                </button>
                                            );
                                        })
                                    )}
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SideBar;


