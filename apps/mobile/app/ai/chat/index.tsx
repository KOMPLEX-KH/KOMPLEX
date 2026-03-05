import React, { useState, useRef, useEffect, useCallback, useMemo, useLayoutEffect } from 'react';
import { View, ScrollView, Pressable, KeyboardAvoidingView, Platform, ActivityIndicator } from 'react-native';
import { Text } from '@/components/common/Text';
import { tw } from '@/utils/styles';
import { meAiService } from '@/services/index';
import { useAuth } from '@/hooks/useAuth';
import { router, useLocalSearchParams } from 'expo-router';
import { Message, AIHistoryItem, AIResponseType } from '@core-types/api-types/ai';
import MessageItem from '@/components/screens/ai/MessageItem';
import ChatSkeleton from '@/components/screens/ai/ChatSkeleton';
import ResponseLoadingState from '@/components/screens/ai/ResponseLoadingState';
import ResponseTypeDropdown, { ResponseTypeOption } from '@/components/screens/ai/ResponseTypeDropdown';
import PromptTextarea from '@/components/screens/ai/PromptTextarea';
import AiRating from '@/components/screens/ai/AiRating';
import SideBar from '@/components/screens/ai/SideBar';
import MarkdownRenderer from '@/components/helper/MarkDownRenderer';
import ContentRenderer from '@/components/screens/docs/utils/ContentRenderer';
import { deserializeTopicContentV3 } from '@/components/screens/docs/utils/ContentDeserializer';
import { Send, Bot, RefreshCw, Square, AlertCircle } from 'lucide-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { HEADER_CONFIG } from '@/constants/header-config';
import { ApiWrapper } from '@core-types/api-types/apiWrapper';

const responseTypeOptions: readonly ResponseTypeOption[] = [
    { id: 'komplex', name: 'KOMPLEX', description: 'បង្ហាញជាប្រអប់ទាក់ទាញ' },
    { id: 'normal', name: 'ធម្មតា', description: 'បង្ហាញជាទម្រង់ Markdown' },
] as const;

const isKomplexType = (responseType?: AIResponseType | null) => responseType === 'komplex';

const NEW_TAB_PROMPT_KEY_PREFIX = 'ai:newTabFirstPrompt:';
const NEW_TAB_RESPONSE_TYPE_KEY_PREFIX = 'ai:newTabFirstPromptResponseType:';

export default function AIChat() {
    const navigation = useNavigation();
    const searchParams = useLocalSearchParams();
    const { user, loading: isAuthLoading } = useAuth();
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedResponseType, setSelectedResponseType] = useState<ResponseTypeOption>(responseTypeOptions[0]);
    const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [streamingMessage, setStreamingMessage] = useState<string>('');
    const [isStreaming, setIsStreaming] = useState(false);
    const [isRequestInProgress, setIsRequestInProgress] = useState(false);
    const [isLoadingHistory, setIsLoadingHistory] = useState(false);
    const [hasMoreHistory, setHasMoreHistory] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoadingMore, setIsLoadingMore] = useState(false);
    const [isInputDisabled, setIsInputDisabled] = useState(false);
    const [pendingResponseType, setPendingResponseType] = useState<AIResponseType | null>(null);
    const [activeRating, setActiveRating] = useState<{ id: number; scope: 'general' | 'topic' } | null>(null);

    const streamingRafRef = useRef<number | null>(null);
    const scrollViewRef = useRef<ScrollView>(null);
    const messagesEndRef = useRef<View>(null);
    const textareaRef = useRef<any>(null);
    const initialLoadDoneRef = useRef(false);
    const lastContextKeyRef = useRef<string | null>(null);

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: 'តារា AI',
            ...HEADER_CONFIG,
        });
    }, [navigation]);

    useEffect(() => {
        if (!isAuthLoading && !user) {
            router.replace('/auth');
        }
    }, [user, isAuthLoading]);

    const convertHistoryToMessages = (historyItems: AIHistoryItem[]): Message[] => {
        const msgs: Message[] = [];
        historyItems.forEach((item) => {
            msgs.push({
                id: `user-${item.id}`,
                content: item.prompt,
                sender: 'user',
                timestamp: new Date(item.createdAt),
                isFromHistory: true,
            });
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

            const tabId = searchParams.tabId as string | undefined;
            const topicId = searchParams.topicId as string | undefined;

            try {
                if (page === 1) {
                    setIsLoadingHistory(true);
                } else {
                    setIsLoadingMore(true);
                }

                let response;
                if (tabId) {
                    response = await meAiService.getAiGeneralHistoryBasedOnTab(tabId, page, 20);
                } else if (topicId) {
                    const topicIdNum = Number(topicId);
                    if (Number.isNaN(topicIdNum)) {
                        throw new Error('Invalid topicId');
                    }
                    response = await meAiService.getAiGeneralHistoryBasedOnTopic(topicIdNum, page, 20);
                } else {
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
                setError('មានបញ្ហាក្នុងការផ្ទុកប្រវត្តិសន្ទនា។ សូមព្យាយាមម្តងទៀត។');
            } finally {
                setIsLoadingHistory(false);
                setIsLoadingMore(false);
            }
        },
        [user, searchParams],
    );

    const runInitialLoad = useCallback(async () => {
        if (!user) return;

        const tabId = searchParams.tabId as string | undefined;
        const topicId = searchParams.topicId as string | undefined;

        if (!tabId || topicId) {
            await loadHistory();
            return;
        }

        const promptKey = `${NEW_TAB_PROMPT_KEY_PREFIX}${tabId}`;
        const typeKey = `${NEW_TAB_RESPONSE_TYPE_KEY_PREFIX}${tabId}`;
        const storedPrompt = await AsyncStorage.getItem(promptKey) || '';
        const storedType = (await AsyncStorage.getItem(typeKey)) as AIResponseType | null;

        if (!storedPrompt.trim()) {
            await loadHistory();
            return;
        }

        // Clear immediately to avoid duplicate sends on refresh
        try {
            await AsyncStorage.removeItem(promptKey);
            await AsyncStorage.removeItem(typeKey);
        } catch (e) {
            console.error('Failed to clear initial prompt from storage', e);
        }

        const tabIdNum = Number(tabId);
        if (Number.isNaN(tabIdNum)) {
            await loadHistory();
            return;
        }

        const effectiveType = (storedType as AIResponseType) ?? (responseTypeOptions[0].id as AIResponseType);

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
            const response = await meAiService.callAiGeneralAndWriteToHistory(storedPrompt, tabIdNum, {
                responseType: effectiveType,
            });
            setIsLoading(false);
            setIsRequestInProgress(false);

            const resolvedResponseType = response.data.responseType ?? 'normal';

            if (isKomplexType(resolvedResponseType as AIResponseType)) {
                const aiResponse: Message = {
                    id: (Date.now() + 1).toString(),
                    content: response.data.aiResult,
                    sender: 'ai',
                    timestamp: new Date(),
                    responseType: resolvedResponseType as AIResponseType,
                };
                setMessages((prev) => [...prev, aiResponse]);
                setPendingResponseType(null);
                queueRating(response.data.id, 'general');
            } else {
                streamText(response.data.aiResult, resolvedResponseType as AIResponseType, {
                    onComplete: () => queueRating(response.data.id, 'general'),
                });
            }
        } catch (err) {
            console.error('Error sending initial AI message:', err);
            setIsLoading(false);
            setIsRequestInProgress(false);
            setPendingResponseType(null);
            setError('មានបញ្ហាក្នុងការចាប់ផ្តើមសន្ទនា។ សូមព្យាយាមម្តងទៀត។');

            try {
                await loadHistory();
            } catch (e) {
                console.error('Error loading history after failed initial send', e);
            }
        }
    }, [user, searchParams, loadHistory, queueRating]);

    useEffect(() => {
        return () => {
            if (streamingRafRef.current !== null) {
                cancelAnimationFrame(streamingRafRef.current);
            }
        };
    }, []);

    const contextKey = useMemo(
        () => `${searchParams.tabId ?? ''}|${searchParams.topicId ?? ''}`,
        [searchParams],
    );

    useEffect(() => {
        if (contextKey !== lastContextKeyRef.current) {
            lastContextKeyRef.current = contextKey;
            initialLoadDoneRef.current = false;
        }
    }, [contextKey]);

    useEffect(() => {
        if (!isAuthLoading && user && !initialLoadDoneRef.current) {
            initialLoadDoneRef.current = true;
            void runInitialLoad();
        }
    }, [user, isAuthLoading, runInitialLoad, contextKey]);

    const loadMoreHistory = () => {
        if (hasMoreHistory && !isLoadingMore) {
            loadHistory(currentPage + 1, true);
        }
    };

    const scrollToBottom = useCallback(() => {
        setTimeout(() => {
            scrollViewRef.current?.scrollToEnd({ animated: true });
        }, 100);
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, scrollToBottom]);

    useEffect(() => {
        setIsInputDisabled(
            isAuthLoading || isLoading || isStreaming || isRequestInProgress || Boolean(activeRating)
        );
    }, [isAuthLoading, isLoading, isStreaming, isRequestInProgress, activeRating]);

    const handleSendMessage = async () => {
        if (!inputMessage.trim() || activeRating) return;

        const tabId = searchParams.tabId as string | undefined;
        const topicId = searchParams.topicId as string | undefined;

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
        setError(null);

        try {
            let response: ApiWrapper<any>;
            let ratingScope: 'general' | 'topic' = 'general';

            if (tabId) {
                const tabIdNum = Number(tabId);
                if (Number.isNaN(tabIdNum)) {
                    throw new Error('Invalid tabId');
                }
                response = await meAiService.callAiGeneralAndWriteToHistory(currentInput, tabIdNum, {
                    responseType: responseType as AIResponseType,
                });
                ratingScope = 'general';
            } else if (topicId) {
                const topicIdNum = Number(topicId);
                if (Number.isNaN(topicIdNum)) {
                    throw new Error('Invalid topicId');
                }
                response = await meAiService.callAiTopic(currentInput, topicIdNum, responseType as AIResponseType);
                ratingScope = 'topic';
            } else {
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

    const handleCopyMessage = useCallback(async (messageId: string, content: string) => {
        try {
            const { setStringAsync } = await import('expo-clipboard');
            await setStringAsync(content);
            setCopiedMessageId(messageId);
            setTimeout(() => setCopiedMessageId(null), 2000);
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
        setIsStreaming(true);
        setStreamingMessage('');
        let index = 0;
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
                options?.onComplete?.();
            }
        };

        streamingRafRef.current = requestAnimationFrame(tick);
    };

    const handleTryAgain = async () => {
        if (messages.length === 0 || activeRating) {
            setError(null);
            return;
        }
        const responseType = selectedResponseType.id as AIResponseType;
        setIsLoading(true);
        setIsRequestInProgress(true);
        setPendingResponseType(responseType);
        setError(null);

        const tabId = searchParams.tabId as string | undefined;
        const topicId = searchParams.topicId as string | undefined;

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
            setIsRequestInProgress(false);
            setIsLoading(false);
            setPendingResponseType(null);
            setError('បានបញ្ឈប់ការស្នើសុំ។');
        } else if (isStreaming) {
            if (streamingRafRef.current !== null) {
                cancelAnimationFrame(streamingRafRef.current);
                streamingRafRef.current = null;
            }
            setIsStreaming(false);

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
        }
    };

    if (isAuthLoading) {
        return (
            <View style={tw('flex-1 bg-gray-50 items-center justify-center')}>
                <ActivityIndicator size="large" color="#4f46e5" />
            </View>
        );
    }

    return (
        <KeyboardAvoidingView
            style={tw('flex-1 bg-gray-50')}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 90 : 0}
        >
            <SideBar />

            <ScrollView
                ref={scrollViewRef}
                style={tw('flex-1')}
                contentContainerStyle={tw('p-4 pt-32')}
                showsVerticalScrollIndicator={false}
            >
                {isLoadingHistory ? (
                    <ChatSkeleton />
                ) : messages.length === 0 && !error && !isLoading ? (
                    <View style={tw('flex-1 items-center justify-center py-20')}>
                        <View style={tw('w-20 h-20 bg-indigo-100 rounded-full items-center justify-center mb-6')}>
                            <Bot size={40} color="#4F46E5" />
                        </View>
                        <Text style={tw('text-2xl font-semibold text-gray-900 mb-4')}>
                            ស្វាគមន៍!
                        </Text>
                        <Text style={tw('text-gray-600 mb-8 text-center')}>
                            ខ្ញុំឈ្មោះតារា ជា AI ជំនួយការរៀន។ តើអ្នកចង់សួរអ្វីអំពីអ្វីដែរ?
                        </Text>
                    </View>
                ) : messages.length === 0 && error ? (
                    <View style={tw('flex-1 items-center justify-center py-20')}>
                        <View style={tw('w-20 h-20 bg-red-100 rounded-full items-center justify-center mb-6')}>
                            <AlertCircle size={40} color="#DC2626" />
                        </View>
                    </View>
                ) : (
                    <>
                        {hasMoreHistory && (
                            <Pressable
                                onPress={loadMoreHistory}
                                disabled={isLoadingMore}
                                style={tw('bg-gray-100 rounded-full px-4 py-2 mb-4 self-center')}
                            >
                                {isLoadingMore ? (
                                    <View style={tw('flex-row items-center gap-2')}>
                                        <ActivityIndicator size="small" color="#4F46E5" />
                                        <Text style={tw('text-sm text-gray-600')}>
                                            កំពុងទាញយកប្រវត្តិសន្ទនា...
                                        </Text>
                                    </View>
                                ) : (
                                    <Text style={tw('text-sm text-gray-600')}>
                                        ទាញយកប្រវត្តិសន្ទនាបន្ថែម
                                    </Text>
                                )}
                            </Pressable>
                        )}

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

                        {isStreaming && (() => {
                            const currentResponseType = pendingResponseType ?? selectedResponseType.id;
                            const isKomplex = isKomplexType(currentResponseType);

                            // For komplex, try to deserialize and render with ContentRenderer
                            // For normal, use MarkdownRenderer
                            let content = null;
                            if (isKomplex) {
                                try {
                                    const komplexContent = deserializeTopicContentV3(streamingMessage);
                                    content = <ContentRenderer content={komplexContent} />;
                                } catch (err) {
                                    // If deserialization fails during streaming, fall back to MarkdownRenderer
                                    console.error("Failed to deserialize KOMPLEX content during streaming:", err);
                                    content = <MarkdownRenderer content={streamingMessage} />;
                                }
                            } else {
                                content = <MarkdownRenderer content={streamingMessage} />;
                            }

                            return (
                                <View style={tw('w-full mb-6')}>
                                    <View style={tw('bg-white border border-gray-200 rounded-3xl p-4 shadow-sm')}>
                                        {content}
                                        <View style={tw('flex-row items-center justify-end mt-2')}>
                                            <View style={tw('flex-row items-center gap-1')}>
                                                <Text style={tw('text-xs text-indigo-600 font-bold')}>KOM</Text>
                                                <Text style={tw('text-xs text-black font-bold')}>PLEX</Text>
                                                <Text style={tw('text-xs text-gray-500')}> Beta - </Text>
                                                <Text style={tw('text-xs text-gray-500 font-medium')}>តារា AI</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            );
                        })()}

                        {error && (
                            <View style={tw('w-full mb-6')}>
                                <View style={tw('bg-red-50 border border-red-200 rounded-2xl p-4')}>
                                    <View style={tw('flex-row items-center gap-2')}>
                                        <View style={tw('w-2 h-2 bg-red-500 rounded-full')} />
                                        <Text style={tw('text-sm text-red-700 flex-1')}>{error}</Text>
                                        <Pressable onPress={handleTryAgain}>
                                            <RefreshCw size={16} color="#EF4444" />
                                        </Pressable>
                                    </View>
                                </View>
                            </View>
                        )}
                        <View ref={messagesEndRef} />
                    </>
                )}
            </ScrollView>

            {/* Bottom input & rating area */}
            <View style={tw('bg-gray-50 border-t border-gray-200 p-4')}>
                {activeRating ? (
                    <View style={tw('px-4')}>
                        <AiRating
                            responseId={activeRating.id}
                            scope={activeRating.scope}
                            onComplete={handleRatingComplete}
                        />
                    </View>
                ) : (
                    <>
                        <View style={tw('bg-white shadow-lg border border-gray-200 rounded-3xl p-4 mb-2 gap-2')}>
                            <View style={tw('')}>
                                <PromptTextarea
                                    ref={textareaRef}
                                    value={inputMessage}
                                    onChangeText={setInputMessage}
                                    editable={!isInputDisabled}
                                    placeholder={
                                        isInputDisabled
                                            ? 'កំពុងដំណើរការ...'
                                            : 'សរសេរសំណួររបស់អ្នក...'
                                    }
                                />
                            </View>

                            <View style={tw('flex-row items-center justify-between')}>
                                <ResponseTypeDropdown
                                    options={responseTypeOptions}
                                    value={selectedResponseType}
                                    onChange={setSelectedResponseType}
                                    disabled={isInputDisabled}
                                    variant="default"
                                    style={{
                                        left: 120,
                                        bottom: 5,
                                        maxHeight: 250,
                                        maxWidth: 160,
                                    }}
                                />

                                {!isLoading && !isStreaming ? (
                                    <Pressable
                                        onPress={handleSendMessage}
                                        disabled={!inputMessage.trim() || isInputDisabled}
                                        style={tw('px-2 py-2 bg-indigo-600 rounded-full disabled:opacity-50')}
                                    >
                                        <Send size={16} color="#FFFFFF" />
                                    </Pressable>
                                ) : (
                                    <Pressable
                                        onPress={handleStopStreaming}
                                        style={tw('px-2 py-2 bg-red-600 rounded-full')}
                                    >
                                        <Square size={16} color="#FFFFFF" />
                                    </Pressable>
                                )}
                            </View>
                        </View>
                        <Text style={tw('text-xs text-gray-500 text-center font-kh-bold')}>
                            <Text style={tw('font-bold text-indigo-600')}>តារា</Text> អាចមានកំហុស។ សូមពិនិត្យព័ត៌មានសំខាន់។
                        </Text>
                    </>
                )}
            </View>
        </KeyboardAvoidingView>
    );
}

