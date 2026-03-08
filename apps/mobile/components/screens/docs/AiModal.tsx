import React, { useState, useRef, useEffect, useCallback } from 'react';
import { View, ScrollView, Pressable, KeyboardAvoidingView, Platform, Modal, Dimensions } from 'react-native';
import { Text } from '@/components/common/Text';
import { tw } from '@/utils/styles';
import { meAiService } from '@/services/index';
import { useAuth } from '@/hooks/useAuth';
import { Message, AIHistoryItem, AIResponseType } from '@core-types/api-types/ai';
import MessageItem from '@/components/screens/ai/MessageItem';
import ChatSkeleton from '@/components/screens/ai/ChatSkeleton';
import ResponseLoadingState from '@/components/screens/ai/ResponseLoadingState';
import ResponseTypeDropdown, { ResponseTypeOption } from '@/components/screens/ai/ResponseTypeDropdown';
import PromptTextarea from '@/components/screens/ai/PromptTextarea';
import AiRating from '@/components/screens/ai/AiRating';
import MarkdownRenderer from '@/components/helper/MarkDownRenderer';
import ContentRenderer from '@/components/screens/docs/utils/ContentRenderer';
import { deserializeTopicContentV3 } from '@/components/screens/docs/utils/ContentDeserializer';
import { Send, Bot, RefreshCw, Square, AlertCircle, X } from 'lucide-react-native';
import { BlurView } from 'expo-blur';

const responseTypeOptions: readonly ResponseTypeOption[] = [
    { id: 'komplex', name: 'KOMPLEX', description: 'បង្ហាញជាប្រអប់ទាក់ទាញ' },
    { id: 'normal', name: 'ធម្មតា', description: 'បង្ហាញជាទម្រង់ Markdown' },
] as const;

const isKomplexType = (responseType?: AIResponseType | null) => responseType === 'komplex';

interface AiModalProps {
    isOpen: boolean;
    onClose: () => void;
    topicId: number;
    topicTitle: string | null;
}

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

export default function AiModal({ isOpen, onClose, topicId, topicTitle }: AiModalProps) {
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
    const [isInputDisabled, setIsInputDisabled] = useState(false);
    const [pendingResponseType, setPendingResponseType] = useState<AIResponseType | null>(null);
    const [activeRating, setActiveRating] = useState<{ id: number; scope: 'topic' } | null>(null);

    const streamingRafRef = useRef<number | null>(null);
    const scrollViewRef = useRef<ScrollView>(null);
    const messagesEndRef = useRef<View>(null);
    const textareaRef = useRef<any>(null);

    const handleRatingComplete = useCallback(() => {
        setActiveRating(null);
    }, []);

    const queueRating = useCallback((id: number) => {
        setActiveRating({ id, scope: 'topic' });
    }, []);

    const loadHistory = useCallback(async () => {
        if (!user || !topicId) return;

        try {
            setIsLoadingHistory(true);
            const response = await meAiService.getAiGeneralHistoryBasedOnTopic(topicId, 1, 20);
            const historyMessages = convertHistoryToMessages(response.data);
            setMessages(historyMessages);
            setError(null);
        } catch (err) {
            console.error('Error loading AI history:', err);
            setError('មានបញ្ហាក្នុងការផ្ទុកប្រវត្តិសន្ទនា។ សូមព្យាយាមម្តងទៀត។');
        } finally {
            setIsLoadingHistory(false);
        }
    }, [user, topicId]);

    useEffect(() => {
        if (!isOpen) {
            setMessages([]);
            setInputMessage('');
            setStreamingMessage('');
            setIsStreaming(false);
            setIsLoading(false);
            setError(null);
            setActiveRating(null);
            if (streamingRafRef.current !== null) {
                cancelAnimationFrame(streamingRafRef.current);
                streamingRafRef.current = null;
            }
            return;
        }

        if (user && topicId) {
            loadHistory();
        }
    }, [isOpen, user, topicId, loadHistory]);

    const scrollToBottom = useCallback(() => {
        setTimeout(() => {
            scrollViewRef.current?.scrollToEnd({ animated: true });
        }, 100);
    }, []);

    useEffect(() => {
        if (messages.length && isOpen) {
            scrollToBottom();
        }
    }, [messages, scrollToBottom, isOpen]);

    useEffect(() => {
        setIsInputDisabled(
            isAuthLoading || isLoading || isStreaming || isRequestInProgress || Boolean(activeRating)
        );
    }, [isAuthLoading, isLoading, isStreaming, isRequestInProgress, activeRating]);

    const handleSendMessage = async () => {
        if (!inputMessage.trim() || activeRating || !topicId) return;

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
            const response: { data: { aiResult: string; id: number; responseType?: AIResponseType } } =
                await meAiService.callAiTopic(currentInput, topicId, responseType);
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
                queueRating(response.data.id);
            } else {
                streamText(response.data.aiResult, resolvedResponseType, {
                    onComplete: () => queueRating(response.data.id),
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

    const handleTryAgain = async () => {
        if (messages.length === 0 || activeRating || !topicId) {
            setError(null);
            return;
        }
        const responseType = selectedResponseType.id as AIResponseType;
        setIsLoading(true);
        setIsRequestInProgress(true);
        setPendingResponseType(responseType);
        setError(null);

        try {
            const response: { data: { aiResult: string; id: number; responseType?: AIResponseType } } =
                await meAiService.callAiTopic(
                    messages[messages.length - 1].content,
                    topicId,
                    responseType,
                );
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
                queueRating(response.data.id);
            } else {
                streamText(response.data.aiResult, resolvedResponseType, {
                    onComplete: () => queueRating(response.data.id),
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

    useEffect(() => {
        return () => {
            if (streamingRafRef.current !== null) {
                cancelAnimationFrame(streamingRafRef.current);
            }
        };
    }, []);

    if (!isOpen) return null;

    return (
        <Modal
            visible={isOpen}
            transparent
            animationType="slide"
            onRequestClose={onClose}
        >
            <KeyboardAvoidingView
                style={tw('flex-1')}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <BlurView intensity={5} style={tw('flex-1 ')}>
                    <Pressable
                        style={tw('flex-1')}
                        onPress={onClose}
                    />
                    <View style={[tw(' bg-white rounded-t-3xl border border-indigo-50'), { minHeight: Dimensions.get('window').height - 100 }]}>
                        {/* Header */}
                        <View style={tw('flex-row items-center justify-between px-5 py-4 border-b border-gray-200')}>
                            <View style={tw('flex-row items-center gap-3')}>
                                <View style={tw('w-10 h-10 rounded-full bg-indigo-100 items-center justify-center')}>
                                    <Bot size={20} color="#4F46E5" />
                                </View>
                                <View style={tw('flex-row items-center gap-1')}>
                                    <Text style={tw('text-indigo-600 font-kh-bold')}>តារា AI 1.0</Text>
                                    {topicTitle && (
                                        <Text style={tw('text-gray-600 font-kh-medium')}> - {topicTitle}</Text>
                                    )}
                                </View>
                            </View>
                            <Pressable
                                onPress={onClose}
                                disabled={isRequestInProgress}
                                style={tw('p-2 rounded-full')}
                            >
                                <X size={20} color="#6B7280" />
                            </Pressable>
                        </View>

                        {/* Chat body */}
                        <ScrollView
                            ref={scrollViewRef}
                            style={tw('flex-1')}
                            contentContainerStyle={tw('p-4')}
                            showsVerticalScrollIndicator={false}
                        >
                            {isLoadingHistory ? (
                                <ChatSkeleton />
                            ) : messages.length === 0 && error ? (
                                <View style={tw('items-center justify-center py-10')}>
                                    <View style={tw('w-20 h-20 bg-red-100 rounded-full items-center justify-center mb-6')}>
                                        <AlertCircle size={40} color="#DC2626" />
                                    </View>
                                    <Text style={tw('text-sm text-gray-500')}>{error}</Text>
                                </View>
                            ) : messages.length === 0 && !error ? (
                                <View style={tw('items-center justify-center py-10')}>
                                    <View style={tw('w-20 h-20 bg-indigo-100 rounded-full items-center justify-center mb-6')}>
                                        <Bot size={40} color="#4F46E5" />
                                    </View>
                                    <Text style={tw('text-gray-600 mb-4 font-kh-bold text-lg text-center')}>
                                        <Text style={tw('text-indigo-600')}>តារា AI</Text> សូមស្វាគមន៍!
                                    </Text>
                                    {topicTitle && (
                                        <Text style={tw('text-gray-600 mb-4 text-center font-kh-medium')}>
                                            តើអ្នកចង់សួរអ្វីអំពី <Text style={tw('font-kh-bold text-indigo-600')}>{topicTitle}</Text> ដែរ?
                                        </Text>
                                    )}
                                </View>
                            ) : (
                                <>
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

                                        let content = null;
                                        if (isKomplex) {
                                            try {
                                                const komplexContent = deserializeTopicContentV3(streamingMessage);
                                                content = <ContentRenderer content={komplexContent} />;
                                            } catch (err) {
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
                                        <View>
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
                    </View>
                </BlurView>
            </KeyboardAvoidingView>
        </Modal>
    );
}
