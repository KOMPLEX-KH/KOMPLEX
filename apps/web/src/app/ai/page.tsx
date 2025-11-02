'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Send, Bot, ChevronUp, Copy, Check, RefreshCw, Square, ChevronDown } from 'lucide-react';
import { Listbox, Transition } from '@headlessui/react';
import { meAiService } from '@/services/index';
import MarkdownRenderer from '@/components/helper/MarkDownRenderer';
import { useAuth } from '@hooks/useAuth';
import { Message, AIHistoryItem } from '@/types/content/ai';
import { useRouter } from 'next/navigation';

const languages = [
    { id: 'khmer', name: 'ភាសាខ្មែរ', acronym: 'KH' },
    { id: 'english', name: 'English', acronym: 'ENG' },
    { id: 'chinese', name: '中文', acronym: 'CH' },
    { id: 'japanese', name: '日本語', acronym: 'JAP' },
    { id: 'korean', name: '한국어', acronym: 'KOR' },
    { id: 'vietnamese', name: 'Tiếng Việt', acronym: 'VN' },
    { id: 'french', name: 'Français', acronym: 'FR' },
    { id: 'german', name: 'Deutsch', acronym: 'DE' },
    { id: 'spanish', name: 'Español', acronym: 'ES' },
];

// Simplified Language Option Component for better performance
const LanguageOption = React.memo(({ language, isSelected, isActive }: {
    language: typeof languages[0];
    isSelected: boolean;
    isActive: boolean;
}) => {
    const baseClasses = "relative cursor-pointer select-none px-3 py-2 text-sm transition-colors duration-75";
    const selectedClasses = "bg-indigo-50 text-indigo-600 font-medium";
    const activeClasses = "bg-gray-50 text-gray-700";
    const defaultClasses = "text-gray-700";

    const className = isSelected ? `${baseClasses} ${selectedClasses}` :
        isActive ? `${baseClasses} ${activeClasses}` :
            `${baseClasses} ${defaultClasses}`;

    return (
        <div className={className}>
            {language.name}
        </div>
    );
});

LanguageOption.displayName = 'LanguageOption';

// Memoized Message Component to prevent unnecessary re-renders
const MessageItem = React.memo(({
    message,
    onCopyMessage,
    copiedMessageId
}: {
    message: Message;
    onCopyMessage: (messageId: string, content: string) => void;
    copiedMessageId: string | null;
}) => {
    return (
        <div className="mb-8">
            {message.sender === 'user' ? (
                // User message
                <div className="flex justify-end">
                    <div className="bg-indigo-600 text-white rounded-2xl px-4 py-3 max-w-[70%]">
                        <p className="text-sm leading-relaxed">{message.content}</p>
                    </div>
                </div>
            ) : (
                // AI message
                <div className="w-full">
                    <div className="relative">
                        <MarkdownRenderer content={message.content} />
                        <div className="flex items-center justify-between mt-2">
                            <button
                                onClick={() => onCopyMessage(message.id, message.content)}
                                className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                                title="Copy response"
                            >
                                {copiedMessageId === message.id ? (
                                    <div className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-green-600" />
                                        បានចម្លង
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <Copy className="w-4 h-4 text-gray-600" />
                                        ចម្លង
                                    </div>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
});

MessageItem.displayName = 'MessageItem';

// Chat Skeleton Component
const ChatSkeleton = React.memo(() => {
    return (
        <div className="space-y-6 p-4">
            {/* User message skeleton */}
            <div className="flex justify-end">
                <div className="bg-gray-200 rounded-2xl px-4 py-3 max-w-[70%] animate-pulse">
                    <div className="h-4 bg-gray-300 rounded w-32"></div>
                </div>
            </div>

            {/* AI message skeleton */}
            <div className="w-full">
                <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
                </div>
            </div>

            {/* User message skeleton */}
            <div className="flex justify-end">
                <div className="bg-gray-200 rounded-2xl px-4 py-3 max-w-[70%] animate-pulse">
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                </div>
            </div>

            {/* AI message skeleton */}
            <div className="w-full">
                <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                </div>
            </div>
        </div>
    );
});

ChatSkeleton.displayName = 'ChatSkeleton';

export default function AIChat() {
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
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
    const streamingIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const streamingRafRef = useRef<number | null>(null);
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
                isFromHistory: true
            });
        });
        return messages;
    };

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
        } finally {
            setIsLoadingHistory(false);
            setIsLoadingMore(false);
            setError('មានបញ្ហាក្នុងការផ្ទុកប្រវត្តិសន្ទនា។ សូមព្យាយាមម្តងទៀត។');
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
        setIsInputDisabled(loading || isLoading || isStreaming || isRequestInProgress);
    }, [loading, isLoading, isStreaming, isRequestInProgress]);

    const handleSendMessage = async () => {
        if (!inputMessage.trim()) return;

        const userMessage: Message = {
            id: Date.now().toString(),
            content: inputMessage,
            sender: 'user',
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        const currentInput = inputMessage;
        setInputMessage('');
        setIsLoading(true);
        setIsRequestInProgress(true);
        setError(null); // Clear any previous errors

        try {
            const response = await meAiService.callAiAndWriteToHistory(currentInput, selectedLanguage.id);
            setIsLoading(false);
            setIsRequestInProgress(false);

            // Start streaming animation
            streamText(response.data);
        } catch (error) {
            console.error('Error calling AI:', error);
            setIsLoading(false);
            setIsRequestInProgress(false);
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

    const streamText = (text: string) => {
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
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, aiResponse]);
                setStreamingMessage('');

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
        setIsLoading(true);
        setIsRequestInProgress(true);
        setError(null);

        try {
            const response = await meAiService.callAiAndWriteToHistory(messages[messages.length - 1].content, selectedLanguage.id);
            setIsLoading(false);
            setIsRequestInProgress(false);

            // Start streaming animation
            streamText(response.data);
        } catch (error) {
            console.error('Error calling AI:', error);
            setIsLoading(false);
            setIsRequestInProgress(false);
            setError('មានបញ្ហាក្នុងការទាក់ទងតារា។ សូមព្យាយាមម្តងទៀត។');
        }
    };

    const handleStopStreaming = () => {
        if (isRequestInProgress) {
            // Case 1: Stop the actual API request (if still in progress)
            setIsRequestInProgress(false);
            setIsLoading(false);
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
                    timestamp: new Date()
                };
                setMessages(prev => [...prev, aiResponse]);
            }
            setStreamingMessage('');

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
                                        className="px-4 py-2 text-sm text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
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
                                <div className="w-full h-96">
                                    <div className="flex items-center gap-2">
                                        <div className="flex space-x-1">
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                        </div>
                                        <span className="text-sm text-gray-500">កំពុងគិត...</span>
                                    </div>
                                </div>
                            )}

                            {isStreaming && (
                                <div className="w-full">
                                    <div className="relative">
                                        <MarkdownRenderer content={streamingMessage} />
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
                    {/* Input Container */}
                    <div className={`bg-white shadow-lg border border-gray-200 p-2 mb-2 transition-all duration-200 ${isMultiLine ? 'rounded-2xl' : 'rounded-full'}`}>
                        {/* Single line layout - show when not multi-line */}
                        <div className={`flex items-center gap-2`}>
                            {/* Language Dropdown */}
                            <div className={`relative flex-shrink-0 ${isMultiLine ? 'hidden' : 'flex'}`}>
                                <Listbox
                                    value={selectedLanguage}
                                    onChange={setSelectedLanguage}
                                    disabled={isInputDisabled}
                                >
                                    <Listbox.Button
                                        disabled={isInputDisabled}
                                        className={`flex items-center gap-1 px-3 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all ${isInputDisabled
                                            ? 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'
                                            : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                                            }`}
                                    >
                                        <span className="text-xs font-medium">{selectedLanguage.acronym}</span>
                                        <ChevronUp size={14} className={`transition-transform ui-open:rotate-180 ${isInputDisabled ? 'text-gray-400' : 'text-gray-500'
                                            }`} />
                                    </Listbox.Button>

                                    <Transition
                                        enter="transition duration-100 ease-out"
                                        enterFrom="transform scale-95 opacity-0"
                                        enterTo="transform scale-100 opacity-100"
                                        leave="transition duration-75 ease-in"
                                        leaveFrom="transform scale-100 opacity-100"
                                        leaveTo="transform scale-95 opacity-0"
                                    >
                                        <Listbox.Options className="absolute bottom-full mb-2 left-0 w-32 bg-white rounded-lg border border-gray-200 shadow-lg z-50 focus:outline-none max-h-48 overflow-y-auto">
                                            {languages.map((language) => (
                                                <Listbox.Option
                                                    key={language.id}
                                                    value={language}
                                                >
                                                    {({ active, selected }) => (
                                                        <LanguageOption
                                                            language={language}
                                                            isActive={active}
                                                            isSelected={selected}
                                                        />
                                                    )}
                                                </Listbox.Option>
                                            ))}
                                        </Listbox.Options>
                                    </Transition>
                                </Listbox>
                            </div>

                            {/* Textarea Container */}
                            <div className="flex-1 relative min-h-[40px] flex items-center">
                                <textarea
                                    ref={textareaRef}
                                    value={inputMessage}
                                    onChange={(e) => setInputMessage(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    disabled={isInputDisabled}
                                    placeholder={isInputDisabled ? "កំពុងដំណើរការ..." : "សរសេរសំណួររបស់អ្នក..."}
                                    className={`w-full px-3 py-2 text-sm focus:outline-none resize-none bg-transparent border-none ${isInputDisabled
                                        ? 'placeholder-gray-300 text-gray-400 cursor-not-allowed'
                                        : 'placeholder-gray-400'
                                        }`}
                                    style={{
                                        minHeight: '30px',
                                        maxHeight: '120px',
                                        height: 'auto'
                                    }}
                                />
                            </div>

                            {/* Send Button */}
                            {
                                !isLoading && !isStreaming ? (<button
                                    onClick={handleSendMessage}
                                    disabled={!inputMessage.trim() || isInputDisabled}
                                    className={`flex-shrink-0 p-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${isMultiLine ? 'hidden' : 'flex'}`}
                                >
                                    <Send className="w-4 h-4" />
                                </button>) : (
                                    <button className="flex-shrink-0 p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-200"
                                        onClick={handleStopStreaming}
                                        title={isRequestInProgress ? "បញ្ឈប់ការស្នើសុំ" : "បញ្ឈប់ការសរសេរ"}
                                    >
                                        <Square className="w-4 h-4" />
                                    </button>
                                )
                            }
                        </div>

                        {/* Multi-line layout - show when multi-line */}
                        <div className={`space-y-3 ${isMultiLine ? 'block' : 'hidden'}`}>

                            {/* Controls row */}
                            <div className="flex items-center justify-between">
                                {/* Language Dropdown */}
                                <div className="relative">
                                    <Listbox
                                        value={selectedLanguage}
                                        onChange={setSelectedLanguage}
                                        disabled={isInputDisabled}
                                    >
                                        <Listbox.Button
                                            disabled={isInputDisabled}
                                            className={`flex items-center gap-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all ${isInputDisabled
                                                ? 'bg-gray-50 border-gray-200 text-gray-400 cursor-not-allowed'
                                                : 'bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200'
                                                }`}
                                        >
                                            <span className="text-xs font-medium">{selectedLanguage.acronym}</span>
                                            <ChevronUp size={14} className={`transition-transform ui-open:rotate-180 ${isInputDisabled ? 'text-gray-400' : 'text-gray-500'
                                                }`} />
                                        </Listbox.Button>

                                        <Transition
                                            enter="transition duration-100 ease-out"
                                            enterFrom="transform scale-95 opacity-0"
                                            enterTo="transform scale-100 opacity-100"
                                            leave="transition duration-75 ease-in"
                                            leaveFrom="transform scale-100 opacity-100"
                                            leaveTo="transform scale-95 opacity-0"
                                        >
                                            <Listbox.Options className="absolute bottom-full mb-2 left-0 w-32 bg-white rounded-lg border border-gray-200 shadow-lg z-50 max-h-48 overflow-y-auto">
                                                {languages.map((language) => (
                                                    <Listbox.Option
                                                        key={language.id}
                                                        value={language}
                                                    >
                                                        {({ active, selected }) => (
                                                            <LanguageOption
                                                                language={language}
                                                                isActive={active}
                                                                isSelected={selected}
                                                            />
                                                        )}
                                                    </Listbox.Option>
                                                ))}
                                            </Listbox.Options>
                                        </Transition>
                                    </Listbox>
                                </div>

                                {/* Send Button */}
                                {!isLoading && !isStreaming ? (
                                    <button
                                        onClick={handleSendMessage}
                                        disabled={!inputMessage.trim() || isInputDisabled}
                                        className="p-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Send className="w-4 h-4" />
                                    </button>
                                ) : (
                                    <button
                                        onClick={handleStopStreaming}
                                        className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                                        title={isRequestInProgress ? "បញ្ឈប់ការស្នើសុំ" : "បញ្ឈប់ការសរសេរ"}
                                    >
                                        <Square className="w-4 h-4" />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Warning Text */}
                    <div className="text-center">
                        <p className="text-xs text-gray-500"><span className='font-black'>តារា</span> អាចមានកំហុស។ សូមពិនិត្យព័ត៌មានសំខាន់។</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
