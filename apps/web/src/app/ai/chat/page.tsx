'use client';

import React, { Suspense, useState, useRef, useEffect, useCallback } from 'react';
import { Send, Bot, RefreshCw, Square, ChevronDown, AlertCircle } from 'lucide-react';
import { meAiService } from '@/services/index';
import MarkdownRenderer from '@/components/helper/MarkDownRenderer';
import { useAuth } from '@hooks/useAuth';
import { Message, AIHistoryItem, AIResponseType } from '@/types/content/ai';
import { useRouter, useSearchParams } from 'next/navigation';
import MessageItem from '../../../components/pages/ai/MessageItem';
import ChatSkeleton from '../../../components/pages/ai/ChatSkeleton';
import ResponseLoadingState from '../../../components/pages/ai/ResponseLoadingState';
import ResponseTypeDropdown, { ResponseTypeOption } from '../../../components/pages/ai/ResponseTypeDropdown';
import PromptTextarea from '../../../components/pages/ai/PromptTextarea';
import AiRating from '../../../components/pages/ai/AiRating';
import SideBar from '../../../components/pages/ai/SideBar';
import { Logo } from '@/components/common/Logo';

const responseTypeOptions: readonly ResponseTypeOption[] = [
    { id: 'komplex', name: 'KOMPLEX', description: 'បង្ហាញជាប្រអប់ទាក់ទាញ' },
    { id: 'normal', name: 'ធម្មតា', description: 'បង្ហាញជាទម្រង់ Markdown' },
] as const;

const isKomplexType = (responseType?: AIResponseType | null) => responseType === 'komplex';

const NEW_TAB_PROMPT_KEY_PREFIX = 'ai:newTabFirstPrompt:';
const NEW_TAB_RESPONSE_TYPE_KEY_PREFIX = 'ai:newTabFirstPromptResponseType:';

function AIChatInner() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedResponseType, setSelectedResponseType] =
        useState<ResponseTypeOption>(responseTypeOptions[0]);
    const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [streamingMessage, setStreamingMessage] = useState<string>('');
    const [isStreaming, setIsStreaming] = useState(false);
    const [isRequestInProgress, setIsRequestInProgress] = useState(false);
    const [isLoadingHistory, setIsLoadingHistory] = useState(false);
    const [hasMoreHistory, setHasMoreHistory] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [isInputDisabled, setIsInputDisabled] = useState(false);
    const [pendingResponseType, setPendingResponseType] = useState<AIResponseType | null>(null);
    const [activeRating, setActiveRating] = useState<{ id: number; scope: 'general' | 'topic' } | null>(
        null,
    );
    const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(false);
    const streamingIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const streamingRafRef = useRef<number | null>(null);
    const streamingCompletionRef = useRef<(() => void) | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const debounceRef = useRef<NodeJS.Timeout | null>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const initialLoadDoneRef = useRef(false);

    const router = useRouter();
    const searchParams = useSearchParams();
    const { user, loading } = useAuth();

    useEffect(() => {
        // Only redirect if auth is done loading and user is null
        if (!loading && !user) {
            router.push('/auth');
        }
    }, [user, loading, router]);

    const convertHistoryToMessages = (historyItems: AIHistoryItem[]): Message[] => {
        const msgs: Message[] = [];
        historyItems.forEach((item) => {
            // Add user message
            msgs.push({
                id: `user-${item.id}`,
                content: item.prompt,
                sender: 'user',
                timestamp: new Date(item.createdAt),
                isFromHistory: true,
            });
            // Add AI response
            msgs.push({
                id: `ai-${item.id}`,
                content: item.aiResult,
                sender: 'ai',
                timestamp: new Date(item.createdAt),
                isFromHistory: true,
                responseType: item.responseType ?? 'normal',
            });
        });
        return msgs;
    };

    const handleRatingComplete = useCallback(() => {
        setActiveRating(null);
    }, []);

    const queueRating = useCallback((id: number, scope: 'general' | 'topic') => {
        setActiveRating({ id, scope });
    }, []);

    const loadHistory = useCallback(
        async (page: number = 1, append: boolean = false) => {
            if (!user) return;

            const tabId = searchParams.get('tabId');
            const topicId = searchParams.get('topicId');

            try {
                if (page === 1) {
                    setIsLoadingHistory(true);
                } else {
                    setIsLoadingMore(true);
                }

                let response;
                if (tabId) {
                    // General tab history
                    response = await meAiService.getAiGeneralHistoryBasedOnTab(tabId, page, 20);
                } else if (topicId) {
                    // Topic tab history
                    const topicIdNum = Number(topicId);
                    if (Number.isNaN(topicIdNum)) {
                        throw new Error('Invalid topicId');
                    }
                    response = await meAiService.getAiGeneralHistoryBasedOnTopic(topicIdNum, page, 20);
                } else {
                    // No tab/topic selected yet
                    setMessages([]);
                    setHasMoreHistory(false);
                    setCurrentPage(1);
                    return;
                }

                const historyMessages = convertHistoryToMessages(response.data);

                if (append) {
                    setMessages((prev) => [...historyMessages, ...prev]);
                } else {
                    setMessages(historyMessages);
                }

                setHasMoreHistory(response.hasMore);
                setCurrentPage(page);
            } catch (err) {
                console.error('Error loading AI history:', err);
                setError('មានบញ្ហាក្នុងការផ្ទុកប្រវត្តិសន្ទនា។ សូមព្យាយាមម្តងទៀត។');
            } finally {
                setIsLoadingHistory(false);
                setIsLoadingMore(false);
            }
        },
        [user, searchParams],
    );

    const runInitialLoad = useCallback(async () => {
        if (!user) return;

        const tabId = searchParams.get('tabId');
        const topicId = searchParams.get('topicId');

        // For topic chats or missing tabId, just load history as usual
        if (!tabId || topicId) {
            await loadHistory();
            return;
        }

        if (typeof window === 'undefined') {
            await loadHistory();
            return;
        }

        const promptKey = `${NEW_TAB_PROMPT_KEY_PREFIX}${tabId}`;
        const typeKey = `${NEW_TAB_RESPONSE_TYPE_KEY_PREFIX}${tabId}`;
        const storedPrompt = window.localStorage.getItem(promptKey) || '';
        const storedType = window.localStorage.getItem(typeKey) as AIResponseType | null;

        if (!storedPrompt.trim()) {
            await loadHistory();
            return;
        }

        // Clear immediately to avoid duplicate sends on refresh
        try {
            window.localStorage.removeItem(promptKey);
            window.localStorage.removeItem(typeKey);
        } catch (e) {
            console.error('Failed to clear initial prompt from storage', e);
        }

        const tabIdNum = Number(tabId);
        if (Number.isNaN(tabIdNum)) {
            await loadHistory();
            return;
        }

        const effectiveType = (storedType as AIResponseType) ?? (responseTypeOptions[0].id as AIResponseType);

        // Optimistically show the first user message
        const userMessage: Message = {
            id: `user-first-${tabId}-${Date.now()}`,
            content: storedPrompt,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages([userMessage]);
        setHasMoreHistory(false);
        setCurrentPage(1);
        setIsLoading(true);
        setIsRequestInProgress(true);
        setPendingResponseType(effectiveType);
        setError(null);

        try {
            const response: { data: { aiResult: string; id: number; responseType?: AIResponseType } } =
                await meAiService.callAiGeneralAndWriteToHistory(storedPrompt, tabIdNum, {
                    responseType: effectiveType,
                });

            setIsLoading(false);
            setIsRequestInProgress(false);

            const resolvedResponseType = response.data.responseType ?? 'normal';

            if (isKomplexType(resolvedResponseType)) {
                const aiResponse: Message = {
                    id: (Date.now() + 1).toString(),
                    content: response.data.aiResult,
                    sender: 'ai',
                    timestamp: new Date(),
                    responseType: resolvedResponseType,
                };
                setMessages((prev) => [...prev, aiResponse]);
                setPendingResponseType(null);
                queueRating(response.data.id, 'general');
            } else {
                // Use streaming path for normal responses
                streamText(response.data.aiResult, resolvedResponseType, {
                    onComplete: () => queueRating(response.data.id, 'general'),
                });
            }
        } catch (err) {
            console.error('Error sending initial AI message:', err);
            setIsLoading(false);
            setIsRequestInProgress(false);
            setPendingResponseType(null);
            setError('មានបញ្ហាក្នុងការចាប់ផ្តើមសន្ទនា។ សូមព្យាយាមម្តងទៀត។');

            // Fallback to loading history so the user still sees the chat (likely empty)
            try {
                await loadHistory();
            } catch (e) {
                console.error('Error loading history after failed initial send', e);
            }
        }
    }, [user, searchParams, loadHistory, queueRating]);

    // Cleanup all timeouts and intervals on unmount
    useEffect(() => {
        return () => {
            if (streamingIntervalRef.current) {
                clearInterval(streamingIntervalRef.current);
            }
            if (streamingRafRef.current !== null) {
                cancelAnimationFrame(streamingRafRef.current);
            }
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
        };
    }, []);

    // Initial load: either replay first prompt for new tab or load history
    useEffect(() => {
        if (!loading && user && !initialLoadDoneRef.current) {
            initialLoadDoneRef.current = true;
            void runInitialLoad();
        }
    }, [user, loading, runInitialLoad]);

    const loadMoreHistory = () => {
        if (hasMoreHistory && !isLoadingMore) {
            loadHistory(currentPage + 1, true);
        }
    };

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    // Handle scroll detection for scroll-to-bottom button
    const handleScroll = useCallback(() => {
        if (chatContainerRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = chatContainerRef.current;
            const isNearBottom = scrollHeight - scrollTop - clientHeight < 150;
            setShowScrollButton(!isNearBottom && scrollHeight > clientHeight);
        }
    }, []);

    // Scroll to bottom when new messages arrive
    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    // Add scroll listener and initial check
    useEffect(() => {
        const chatContainer = chatContainerRef.current;
        if (chatContainer) {
            chatContainer.addEventListener('scroll', handleScroll);
            // Initial check for scroll button
            handleScroll();
            return () => chatContainer.removeEventListener('scroll', handleScroll);
        }
    }, [handleScroll]);

    // Manage input disabled state
    useEffect(() => {
        setIsInputDisabled(
            loading || isLoading || isStreaming || isRequestInProgress || Boolean(activeRating),
        );
    }, [loading, isLoading, isStreaming, isRequestInProgress, activeRating]);

    const handleSendMessage = async () => {
        if (!inputMessage.trim() || activeRating) return;

        const tabId = searchParams.get('tabId');
        const topicId = searchParams.get('topicId');

        const userMessage: Message = {
            id: Date.now().toString(),
            content: inputMessage,
            sender: 'user',
            timestamp: new Date(),
        };

        setMessages((prev) => [...prev, userMessage]);
        const currentInput = inputMessage;
        const responseType = selectedResponseType.id as AIResponseType;
        setInputMessage('');
        setIsLoading(true);
        setIsRequestInProgress(true);
        setPendingResponseType(responseType);
        setError(null); // Clear any previous errors

        try {
            let response: { data: { aiResult: string; id: number; responseType?: AIResponseType } };
            let ratingScope: 'general' | 'topic' = 'general';

            if (tabId) {
                // Existing general tab
                const tabIdNum = Number(tabId);
                if (Number.isNaN(tabIdNum)) {
                    throw new Error('Invalid tabId');
                }
                response = await meAiService.callAiGeneralAndWriteToHistory(currentInput, tabIdNum, {
                    responseType,
                });
                ratingScope = 'general';
            } else if (topicId) {
                // Topic chat
                const topicIdNum = Number(topicId);
                if (Number.isNaN(topicIdNum)) {
                    throw new Error('Invalid topicId');
                }
                response = await meAiService.callAiTopic(currentInput, topicIdNum, responseType);
                ratingScope = 'topic';
            } else {
                // No tab/topic selected; ignore send
                throw new Error('No tabId or topicId specified');
            }
            setIsLoading(false);
            setIsRequestInProgress(false);

            const resolvedResponseType = response.data.responseType ?? 'normal';

            if (isKomplexType(resolvedResponseType)) {
                const aiResponse: Message = {
                    id: (Date.now() + 1).toString(),
                    content: response.data.aiResult,
                    sender: 'ai',
                    timestamp: new Date(),
                    responseType: resolvedResponseType,
                };
                setMessages((prev) => [...prev, aiResponse]);
                setPendingResponseType(null);
                queueRating(response.data.id, ratingScope);
            } else {
                // Start streaming animation
                streamText(response.data.aiResult, resolvedResponseType, {
                    onComplete: () => queueRating(response.data.id, ratingScope),
                });
            }
        } catch (err) {
            console.error('Error calling AI:', err);
            setIsLoading(false);
            setIsRequestInProgress(false);
            setPendingResponseType(null);
            setError('មានបញ្ហាក្នុងការទាក់ទងតារា។ សូមព្យាយាមម្តងទៀត។');
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleCopyMessage = useCallback(async (messageId: string, content: string) => {
        try {
            await navigator.clipboard.writeText(content);
            setCopiedMessageId(messageId);
            setTimeout(() => setCopiedMessageId(null), 2000); // Reset after 2 seconds
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    }, []);

    const streamText = (
        text: string,
        responseType: AIResponseType,
        options?: {
            onComplete?: () => void;
        },
    ): void => {
        if (responseType !== 'normal') {
            options?.onComplete?.();
            return;
        }
        streamingCompletionRef.current = options?.onComplete ?? null;
        setIsStreaming(true);
        setStreamingMessage('');
        let index = 0;
        // Adaptive step: starts small, increases as content grows
        const maxStep = 32;
        const minStep = 3;

        const tick = () => {
            if (index < text.length) {
                const dynamicStep = Math.min(minStep + Math.floor(index / 50), maxStep);
                index = Math.min(index + dynamicStep, text.length);
                setStreamingMessage(text.slice(0, index));
                streamingRafRef.current = requestAnimationFrame(tick);
            } else {
                if (streamingRafRef.current !== null) {
                    cancelAnimationFrame(streamingRafRef.current);
                    streamingRafRef.current = null;
                }
                if (streamingIntervalRef.current) {
                    clearInterval(streamingIntervalRef.current);
                    streamingIntervalRef.current = null;
                }
                setIsStreaming(false);
                const aiResponse: Message = {
                    id: (Date.now() + 1).toString(),
                    content: text,
                    sender: 'ai',
                    timestamp: new Date(),
                    responseType,
                };
                setMessages((prev) => [...prev, aiResponse]);
                setStreamingMessage('');
                setPendingResponseType(null);
                if (streamingCompletionRef.current) {
                    streamingCompletionRef.current();
                    streamingCompletionRef.current = null;
                }

                // No need to refresh history - the new message is already added to the UI
            }
        };

        streamingRafRef.current = requestAnimationFrame(tick);
    };

    const autoResizeTextarea = useCallback(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = '30px';
            const scrollHeight = textareaRef.current.scrollHeight;
            const newHeight = Math.min(Math.max(scrollHeight, 30), 160);
            textareaRef.current.style.height = newHeight + 'px';
        }
    }, []);

    const debouncedAutoResize = useCallback(() => {
        if (debounceRef.current) {
            clearTimeout(debounceRef.current);
        }
        debounceRef.current = setTimeout(() => {
            autoResizeTextarea();
        }, 16); // ~60fps
    }, [autoResizeTextarea]);

    useEffect(() => {
        debouncedAutoResize();

        // Cleanup timeout on unmount
        return () => {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
        };
    }, [inputMessage, debouncedAutoResize]);

    const handleTryAgain = async () => {
        if (!messages.length || activeRating) {
            setError(null);
            return;
        }
        const responseType = selectedResponseType.id as AIResponseType;
        setIsLoading(true);
        setIsRequestInProgress(true);
        setPendingResponseType(responseType);
        setError(null);

        const tabId = searchParams.get('tabId');
        const topicId = searchParams.get('topicId');

        try {
            let response;
            let ratingScope: 'general' | 'topic' = 'general';

            if (tabId) {
                const tabIdNum = Number(tabId);
                if (Number.isNaN(tabIdNum)) {
                    throw new Error('Invalid tabId');
                }
                response = await meAiService.callAiGeneralAndWriteToHistory(
                    messages[messages.length - 1].content,
                    tabIdNum,
                    {
                        responseType,
                    },
                );
                ratingScope = 'general';
            } else if (topicId) {
                const topicIdNum = Number(topicId);
                if (Number.isNaN(topicIdNum)) {
                    throw new Error('Invalid topicId');
                }
                response = await meAiService.callAiTopic(
                    messages[messages.length - 1].content,
                    topicIdNum,
                    responseType,
                );
                ratingScope = 'topic';
            } else {
                throw new Error('No tabId or topicId specified');
            }
            setIsLoading(false);
            setIsRequestInProgress(false);

            const resolvedResponseType =
                response.responseType ??
                (response as { format?: AIResponseType }).format ??
                'normal';

            if (isKomplexType(resolvedResponseType)) {
                const aiResponse: Message = {
                    id: (Date.now() + 1).toString(),
                    content: response.data.aiResult,
                    sender: 'ai',
                    timestamp: new Date(),
                    responseType: resolvedResponseType,
                };
                setMessages((prev) => [...prev, aiResponse]);
                setPendingResponseType(null);
                queueRating(response.data.id, ratingScope);
            } else {
                // Start streaming animation
                streamText(response.data.aiResult, resolvedResponseType, {
                    onComplete: () => queueRating(response.data.id, ratingScope),
                });
            }
        } catch (err) {
            console.error('Error calling AI:', err);
            setIsLoading(false);
            setIsRequestInProgress(false);
            setPendingResponseType(null);
            setError('មានបញ្ហាក្នុងការទាក់ទងតារា។ សូមព្យាយាមម្តងទៀត។');
        }
    };

    const handleStopStreaming = () => {
        if (isRequestInProgress) {
            // Case 1: Stop the actual API request (if still in progress)
            setIsRequestInProgress(false);
            setIsLoading(false);
            setPendingResponseType(null);
            setError('បានបញ្ឈប់ការស្នើសុំ។');
        } else if (isStreaming) {
            // Case 2: Stop the fake streaming and keep what has been streamed
            if (streamingRafRef.current !== null) {
                cancelAnimationFrame(streamingRafRef.current);
                streamingRafRef.current = null;
            }
            if (streamingIntervalRef.current) {
                clearInterval(streamingIntervalRef.current);
                streamingIntervalRef.current = null;
            }
            setIsStreaming(false);

            // Add the partial message to the messages array
            if (streamingMessage.trim()) {
                const aiResponse: Message = {
                    id: (Date.now() + 1).toString(),
                    content: streamingMessage,
                    sender: 'ai',
                    timestamp: new Date(),
                    responseType: 'normal',
                };
                setMessages((prev) => [...prev, aiResponse]);
            }
            setStreamingMessage('');
            setPendingResponseType(null);
            if (streamingCompletionRef.current) {
                streamingCompletionRef.current();
                streamingCompletionRef.current = null;
            }

            // No need to refresh history - the partial message is already added to the UI
        }
    };

    return (
        <div className="min-h-screen relative bg-gray-50 pt-16 pb-4">
            <SideBar onCollapsedChange={setIsSideBarCollapsed} />

            {/* Right panel with sidebar offset */}
            <div className={`${isSideBarCollapsed ? 'lg:ml-4' : 'lg:ml-76'} px-4 min-h-[calc(100vh-4rem)] flex`}>
                <div className="max-w-5xl mx-auto w-full flex flex-col">
                    {/* Main Chat Area */}
                    <div
                        ref={chatContainerRef}
                        className="flex-1 overflow-y-auto space-y-4 w-full scrollbar-hide pb-32"
                    >
                        {loading || isLoadingHistory ? (
                            <ChatSkeleton />
                        ) : messages.length === 0 && !error && !isLoading ? (
                            // Welcome screen
                            <div className="flex flex-col items-center justify-center h-full">
                                <div className="text-center max-w-2xl">
                                    <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Bot className="w-10 h-10 text-indigo-600" />
                                    </div>
                                    <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                                        ស្វាគមន៍!
                                    </h2>
                                    <p className="text-gray-600 mb-8">
                                        ខ្ញុំឈ្មោះតារា ជា AI ជំនួយការរៀន។ តើអ្នកចង់សួរអ្វីអំពីអ្វីដែរ?
                                    </p>
                                </div>
                            </div>
                        ) : messages.length === 0 && error ? (
                            // Error screen
                            <div className="flex flex-col items-center justify-center h-full">
                                <div className="text-center max-w-2xl">
                                    <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <AlertCircle className="w-10 h-10 text-red-600" />
                                    </div>
                                </div>
                            </div>
                        ) : (
                            // Messages
                            <>
                                {/* History Controls */}
                                <div className="flex justify-center gap-2 py-4 ">
                                    {hasMoreHistory && (
                                        <button
                                            onClick={loadMoreHistory}
                                            disabled={isLoadingMore}
                                            className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isLoadingMore ? (
                                                <div className="flex items-center gap-2">
                                                    <div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
                                                    <span>កំពុងទាញយកប្រវត្តិសន្ទនា...</span>
                                                </div>
                                            ) : (
                                                'ទាញយកប្រវត្តិសន្ទនាបន្ថែម'
                                            )}
                                        </button>
                                    )}
                                </div>

                                {messages.map((message) => (
                                    <MessageItem
                                        key={message.id}
                                        message={message}
                                        onCopyMessage={handleCopyMessage}
                                        copiedMessageId={copiedMessageId}
                                    />
                                ))}

                                {isLoading && (
                                    <ResponseLoadingState
                                        responseType={pendingResponseType ?? selectedResponseType.id}
                                    />
                                )}

                                {isStreaming && (
                                    <div className="w-full">
                                        <div className="relative bg-white border border-gray-200 rounded-3xl p-4 shadow-sm">
                                            <MarkdownRenderer content={streamingMessage} />
                                            <div className="flex items-center justify-end mt-2">
                                                <div className="text-xs text-gray-500">
                                                    <span className="text-purple-600">KOM</span>
                                                    <span className="text-black font-bold">PLEX</span> Beta -{' '}
                                                    <span className="font-medium">តារា AI</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {error && (
                                    <div className="w-full">
                                        <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-red-500 rounded-full" />
                                                <span className="text-sm text-red-700">{error}</span>
                                                <button
                                                    onClick={handleTryAgain}
                                                    className="ml-auto text-red-500 hover:text-red-700 transition-colors"
                                                >
                                                    <RefreshCw className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </>
                        )}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Bottom input & rating area, anchored within right panel */}
                    <div className={`mt-3 px-4 pb-2 fixed bottom-0 ${isSideBarCollapsed ? 'lg:left-4' : 'lg:left-76'} left-0 right-0  `}>
                        <div className="absolute bottom-0 left-0 right-0 bg-gray-50 max-w-5xl mx-auto h-36 "></div>
                        {activeRating ? (
                            <div className=" px-4 relative z-10">
                                <AiRating
                                    responseId={activeRating.id}
                                    scope={activeRating.scope}
                                    onComplete={handleRatingComplete}
                                />
                            </div>
                        ) : (
                            <div className=" max-w-5xl mx-auto w-full">
                                <div className="bg-white max-w-5xl mx-auto shadow-lg border border-gray-200 rounded-3xl p-2 mb-2 transition-all duration-200 space-y-2 relative z-10">
                                    <div className="flex-1">
                                        <PromptTextarea
                                            ref={textareaRef}
                                            value={inputMessage}
                                            onChange={(e) => setInputMessage(e.target.value)}
                                            onKeyPress={handleKeyPress}
                                            disabled={isInputDisabled}
                                            placeholder={
                                                isInputDisabled
                                                    ? 'កំពុងដំណើរការ...'
                                                    : 'សរសេរសំណួររបស់អ្នក...'
                                            }
                                            className="min-h-[0px] text-base leading-relaxed"
                                            style={{
                                                maxHeight: '200px',
                                                height: 'auto',
                                            }}
                                        />
                                    </div>

                                    <div className="flex flex-row items-center justify-between">
                                        <ResponseTypeDropdown
                                            options={responseTypeOptions}
                                            value={selectedResponseType}
                                            onChange={setSelectedResponseType}
                                            disabled={isInputDisabled}
                                            variant="default"
                                        />

                                        <div className="flex items-center gap-2">
                                            {!isLoading && !isStreaming ? (
                                                <button
                                                    onClick={handleSendMessage}
                                                    disabled={!inputMessage.trim() || isInputDisabled}
                                                    className="px-2 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                                >
                                                    <Send className="w-4 h-4" />
                                                </button>
                                            ) : (
                                                <button
                                                    onClick={handleStopStreaming}
                                                    className="px-2 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-200"
                                                >
                                                    <Square className="w-4 h-4" />
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {/* Warning Text */}
                        <div className="text-center mt-1 relative z-10">
                            <p className="text-xs text-gray-500">
                                <span className="font-black">តារា</span> អាចមានកំហុស។ សូមពិនិត្យព័ត៌មានសំខាន់។
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Bottom Button */}
            {showScrollButton && (
                <div className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50">
                    <button
                        onClick={scrollToBottom}
                        className="bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-200 flex items-center gap-2"
                        title="Scroll to bottom"
                    >
                        <ChevronDown className="w-4 h-4" />
                        <span className="text-sm font-medium">Scroll to bottom</span>
                    </button>
                </div>
            )}
        </div>
    );
}

export default function AIChat() {
    return (
        <Suspense
            fallback={
                <Logo showBeta={false} isVertical={true} isLoading={true} />
            }
        >
            <AIChatInner />
        </Suspense>
    );
}