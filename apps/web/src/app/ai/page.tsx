'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Bot, RefreshCw, Square, ChevronDown } from 'lucide-react';
import { meAiService } from '@/services/index';
import MarkdownRenderer from '@/components/helper/MarkDownRenderer';
import { useAuth } from '@hooks/useAuth';
import { Message, AIHistoryItem, AIResponseType } from '@/types/content/ai';
import { useRouter } from 'next/navigation';
import MessageItem from '../../components/pages/ai/MessageItem';
import ChatSkeleton from '../../components/pages/ai/ChatSkeleton';
import ResponseLoadingState from '../../components/pages/ai/ResponseLoadingState';
import ResponseTypeDropdown, { ResponseTypeOption } from '../../components/pages/ai/ResponseTypeDropdown';
import PromptTextarea from '../../components/pages/ai/PromptTextarea';
import AiRating from '../../components/pages/ai/AiRating';

const responseTypeOptions: readonly ResponseTypeOption[] = [
    { id: 'normal', name: 'ធម្មតា', description: 'បង្ហាញជាទម្រង់ Markdown' },
    { id: 'komplex', name: 'KOMPLEX', description: 'បង្ហាញជាប្រអប់ទាក់ទាញ' }
] as const;


const isKomplexType = (responseType?: AIResponseType | null) => responseType === 'komplex';

export default function AIChat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedResponseType, setSelectedResponseType] = useState<ResponseTypeOption>(responseTypeOptions[0]);
    const [isMultiLine, setIsMultiLine] = useState(false);
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
    const [activeRating, setActiveRating] = useState<{ id: number; scope: "general" } | null>(null);
    const streamingIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const streamingRafRef = useRef<number | null>(null);
    const streamingCompletionRef = useRef<(() => void) | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const debounceRef = useRef<NodeJS.Timeout | null>(null);
    const chatContainerRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const { user, loading } = useAuth();

    useEffect(() => {
        // Only redirect if auth is done loading and user is null
        if (!loading && !user) {
            router.push('/auth');
        }
    }, [user, loading, router]);

    const convertHistoryToMessages = (historyItems: AIHistoryItem[]): Message[] => {
        const messages: Message[] = [];
        historyItems.forEach((item) => {
            // Add user message
            messages.push({
                id: `user-${item.id}`,
                content: item.prompt,
                sender: 'user',
                timestamp: new Date(item.createdAt),
                isFromHistory: true
            });
            // Add AI response
            messages.push({
                id: `ai-${item.id}`,
                content: item.aiResult,
                sender: 'ai',
                timestamp: new Date(item.createdAt),
                isFromHistory: true,
                responseType: item.responseType ?? 'normal'
            });
        });
        return messages;
    };

    const handleRatingComplete = useCallback(() => {
        setActiveRating(null);
    }, []);

    const queueRating = useCallback((id: number) => {
        setActiveRating({ id, scope: 'general' });
    }, []);

    const loadHistory = useCallback(async (page: number = 1, append: boolean = false) => {
        if (!user) return;

        try {
            if (page === 1) {
                setIsLoadingHistory(true);
            } else {
                setIsLoadingMore(true);
            }

            const response = await meAiService.getAiHistory(page, 20);
            const historyMessages = convertHistoryToMessages(response.data);

            if (append) {
                setMessages(prev => [...historyMessages, ...prev]);
            } else {
                setMessages(historyMessages);
            }

            setHasMoreHistory(response.hasMore);
            setCurrentPage(page);
        } catch (error) {
            console.error('Error loading AI history:', error);
            setError('មានបញ្ហាក្នុងការផ្ទុកប្រវត្តិសន្ទនា។ សូមព្យាយាមម្តងទៀត។');
        } finally {
            setIsLoadingHistory(false);
            setIsLoadingMore(false);
        }
    }, [user]);



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

    // Load AI history on component mount - only when auth is ready and user exists
    useEffect(() => {
        if (!loading && user) {
            loadHistory();
        }
    }, [user, loading, loadHistory]);

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
        setIsInputDisabled(loading || isLoading || isStreaming || isRequestInProgress || Boolean(activeRating));
    }, [loading, isLoading, isStreaming, isRequestInProgress, activeRating]);

    const handleSendMessage = async () => {
        if (!inputMessage.trim() || activeRating) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            content: inputMessage,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const currentInput = inputMessage;
        const responseType = selectedResponseType.id;
        setInputMessage('');
        setIsLoading(true);
        setIsRequestInProgress(true);
        setPendingResponseType(responseType);
        setError(null); // Clear any previous errors

        try {
            const response = await meAiService.callAiAndWriteToHistory(currentInput, {
                responseType
            });
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
                    responseType: resolvedResponseType
                };
                setMessages(prev => [...prev, aiResponse]);
                setPendingResponseType(null);
                queueRating(response.data.id);
            } else {
                // Start streaming animation
                streamText(response.data.aiResult, resolvedResponseType, {
                    onComplete: () => queueRating(response.data.id)
                });
            }
        } catch (error) {
            console.error('Error calling AI:', error);
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
        } catch (error) {
            console.error('Failed to copy text: ', error);
        }
    }, []);

    const streamText = (
        text: string,
        responseType: AIResponseType,
        options?: {
            onComplete?: () => void;
        }
    ) => {
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
                    responseType
                };
                setMessages(prev => [...prev, aiResponse]);
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
            const newHeight = Math.min(Math.max(scrollHeight, 30), 120);
            textareaRef.current.style.height = newHeight + 'px';

            // Detect if we have multiple lines with hysteresis to prevent flickering
            // Use a buffer zone: if currently single-line, need > 45px to switch to multi-line
            // If currently multi-line, need < 38px to switch back to single-line
            const hasMultipleLines = isMultiLine
                ? newHeight > 35  // If already multi-line, need to go below 38px to switch back
                : newHeight > 38; // If single-line, need to go above 45px to switch to multi-line

            setIsMultiLine(hasMultipleLines);
        }
    }, [isMultiLine]);

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
        const responseType = selectedResponseType.id;
        setIsLoading(true);
        setIsRequestInProgress(true);
        setPendingResponseType(responseType);
        setError(null);

        try {
            const response = await meAiService.callAiAndWriteToHistory(messages[messages.length - 1].content, {
                responseType
            });
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
                    responseType: resolvedResponseType
                };
                setMessages(prev => [...prev, aiResponse]);
                setPendingResponseType(null);
                queueRating(response.data.id);
            } else {
                // Start streaming animation
                streamText(response.data.aiResult, resolvedResponseType, {
                    onComplete: () => queueRating(response.data.id)
                });
            }
        } catch (error) {
            console.error('Error calling AI:', error);
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
                    responseType: 'normal'
                };
                setMessages(prev => [...prev, aiResponse]);
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
        <div className="min-h-screen relative bg-gray-50 pt-16 pb-32">
            {/* Main Chat Area */}
            <div
                ref={chatContainerRef}
                className="overflow-y-auto p-4 space-y-4 max-w-4xl mx-auto w-full scrollbar-hide"
            >
                {loading || isLoadingHistory ? (
                    // Loading auth state
                    <ChatSkeleton />
                )
                    : messages.length === 0 ? (
                        // Welcome screen
                        <div className="flex flex-col items-center justify-center h-full">
                            <div className="text-center max-w-2xl">
                                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Bot className="w-10 h-10 text-indigo-600" />
                                </div>
                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">ស្វាគមន៍!</h2>
                                <p className="text-gray-600 mb-8">ខ្ញុំឈ្មោះតារា ជា AI ជំនួយការរៀន។ តើអ្នកចង់សួរអ្វីអំពីអ្វីដែរ?</p>
                            </div>
                        </div>
                    ) : (
                        // Messages
                        <>
                            {/* History Controls */}
                            <div className="flex justify-center gap-2 py-4">
                                {hasMoreHistory && (
                                    <button
                                        onClick={loadMoreHistory}
                                        disabled={isLoadingMore}
                                        className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isLoadingMore ? (
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 border-2 border-gray-600 border-t-transparent rounded-full animate-spin"></div>
                                                កំពុងទាញយកប្រវត្តិសន្ទនា...
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
                                <ResponseLoadingState responseType={(pendingResponseType ?? selectedResponseType.id)} />
                            )}

                            {isStreaming && (
                                <div className="w-full">
                                    <div className="relative bg-white border border-gray-200 rounded-3xl p-4 shadow-sm">
                                        <MarkdownRenderer content={streamingMessage} />
                                        <div className="flex items-center justify-end mt-2">
                                            <div className="text-xs text-gray-500">
                                                <span className="text-purple-600">KOM</span><span className="text-black font-bold">PLEX</span> Beta - <span className="font-medium">តារា AI</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {error && (
                                <div className="w-full">
                                    <div className="bg-red-50 border border-red-200 rounded-2xl p-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
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

            {/* Fixed Input Area */}
            <div className='bg-gray-50 fixed h-20 w-full bottom-0 '></div>
            <div className="fixed bottom-0 left-0 right-0 px-4 py-2">
                <div className="max-w-4xl mx-auto">
                    {activeRating ? (
                        <div className="mb-2">
                            <AiRating responseId={activeRating.id} scope="general" onComplete={handleRatingComplete} />
                        </div>
                    ) : (
                        <div className={`bg-white shadow-lg border border-gray-200 p-2 mb-2 transition-all duration-200 ${isMultiLine ? 'rounded-3xl' : 'rounded-full'}`}>
                            {/* Single line.layout - show when not multi-line */}
                            <div className="flex items-center gap-2">
                                <ResponseTypeDropdown
                                    className={isMultiLine ? 'hidden' : 'flex'}
                                    options={responseTypeOptions}
                                    value={selectedResponseType}
                                    onChange={setSelectedResponseType}
                                    disabled={isInputDisabled}
                                    variant="compact"
                                />

                                <div className="flex-1 relative min-h-[40px] flex items-center">
                                    <PromptTextarea
                                        ref={textareaRef}
                                        value={inputMessage}
                                        onChange={(e) => setInputMessage(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        disabled={isInputDisabled}
                                        placeholder={isInputDisabled ? "កំពុងដំណើរការ..." : "សរសេរសំណួររបស់អ្នក..."}
                                        style={{
                                            minHeight: '30px',
                                            maxHeight: '120px',
                                            height: 'auto'
                                        }}
                                    />
                                </div>

                                {!isLoading && !isStreaming ? (
                                    <button
                                        onClick={handleSendMessage}
                                        disabled={!inputMessage.trim() || isInputDisabled}
                                        className={`flex-shrink-0 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200.disabled:opacity-50 disabled:cursor-not-allowed ${isMultiLine ? 'hidden' : 'flex'}`}
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                ) : (
                                    <button
                                        className="flex-shrink-0 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-200"
                                        onClick={handleStopStreaming}
                                        title={isRequestInProgress ? "បញ្ឈប់ការស្នើសុំ" : "បញ្ឈប់ការសរសេរ"}
                                    >
                                        <Square className="w-4 h-4" />
                                    </button>
                                )}
                            </div>

                            {/* Multi-line layout - show when multi-line */}
                            <div className={`space-y-3 ${isMultiLine ? 'block' : 'hidden'}`}>

                                {/* Controls row */}
                                <div className="flex items-center justify-between">
                                    <ResponseTypeDropdown
                                        options={responseTypeOptions}
                                        value={selectedResponseType}
                                        onChange={setSelectedResponseType}
                                        disabled={isInputDisabled}
                                        variant="default"
                                    />

                                    {!isLoading && !isStreaming ? (
                                        <button
                                            onClick={handleSendMessage}
                                            disabled={!inputMessage.trim() || isInputDisabled}
                                            className="p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <Send className="w-4 h-4" />
                                        </button>
                                    ) : (
                                        <button
                                            onClick={handleStopStreaming}
                                            className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-200"
                                            title={isRequestInProgress ? "បញ្ឈប់ការស្នើសុំ" : "បញ្ឈប់ការសរសេរ"}
                                        >
                                            <Square className="w-4 h-4" />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                    {/* Warning Text */}
                    <div className="text-center">
                        <p className="text-xs text-gray-500"><span className='font-black'>តារា</span> អាចមានកំហុស។ សូមពិនិត្យព័ត៌មានសំខាន់។</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
