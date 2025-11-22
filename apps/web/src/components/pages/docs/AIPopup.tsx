"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { X, Send, Square, Bot, AlertCircle, Maximize, Minimize } from "lucide-react";
import { Message, AIHistoryItem, AIResponseType } from "@/types/content/ai";
import { meAiService } from "@/services/index";
import MarkdownRenderer from "@/components/helper/MarkDownRenderer";
import { useAuth } from "@hooks/useAuth";
import MessageItem from "@/components/pages/ai/MessageItem";
import ResponseTypeDropdown, { ResponseTypeOption } from "@/components/pages/ai/ResponseTypeDropdown";
import PromptTextarea from "@/components/pages/ai/PromptTextarea";
import AiRating from "@/components/pages/ai/AiRating";
import ResponseLoadingState from "@/components/pages/ai/ResponseLoadingState";
import { AnimatePresence, motion } from "framer-motion";
import { useParams } from "next/navigation";
import type { Params } from "next/dist/server/request/params";
import type { Grade, Lesson, Subject, Topic } from "@core-types/docs/curriculum";

interface AIPopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const responseTypeOptions: readonly ResponseTypeOption[] = [
    { id: "normal", name: "ធម្មតា", description: "បង្ហាញជា Markdown" },
    { id: "komplex", name: "KOMPLEX", description: "បង្ហាញជាប្រអប់ទាក់ទាញ" }
] as const;

const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState<boolean>(() => {
        if (typeof window === "undefined") return false;
        return window.matchMedia(query).matches;
    });

    useEffect(() => {
        const media = window.matchMedia(query);
        const handler = () => setMatches(media.matches);
        handler();
        media.addEventListener("change", handler);
        return () => media.removeEventListener("change", handler);
    }, [query]);

    return matches;
};

const convertHistoryToMessages = (historyItems: AIHistoryItem[]): Message[] => {
    const historyMessages: Message[] = [];
    historyItems.forEach((item) => {
        historyMessages.push({
            id: `user-${item.id}`,
            content: item.prompt,
            sender: "user",
            timestamp: new Date(item.createdAt),
            isFromHistory: true
        });
        historyMessages.push({
            id: `ai-${item.id}`,
            content: item.aiResult,
            sender: "ai",
            timestamp: new Date(item.createdAt),
            isFromHistory: true,
            responseType: item.responseType ?? "normal"
        });
    });
    return historyMessages;
};

export default function AIPopup({ isOpen, onClose }: AIPopupProps) {
    const isDesktop = useMediaQuery("(min-width: 768px)");
    const { user } = useAuth();

    const [messages, setMessages] = useState<Message[]>([]);
    const [inputMessage, setInputMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [isStreaming, setIsStreaming] = useState(false);
    const [streamingMessage, setStreamingMessage] = useState("");
    const [isRequestInProgress, setIsRequestInProgress] = useState(false);
    const [copiedMessageId, setCopiedMessageId] = useState<string | null>(null);
    const [selectedResponseType, setSelectedResponseType] = useState<ResponseTypeOption>(responseTypeOptions[0]);
    const [pendingResponseType, setPendingResponseType] = useState<AIResponseType | null>(null);
    const [isHistoryLoading, setIsHistoryLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isPopupMaximized, setIsPopupMaximized] = useState(false);
    const [activeRating, setActiveRating] = useState<{ id: number; scope: "topic" } | null>(null);
    const params = useParams() as Params;
    const topicParam = params?.topic;
    const parsedTopicId =
        Array.isArray(topicParam) ? Number(topicParam[0]) : typeof topicParam === "string" ? Number(topicParam) : NaN;
    const topicId = Number.isNaN(parsedTopicId) ? null : parsedTopicId;
    const isTopicScoped = typeof topicId === "number" && !Number.isNaN(parsedTopicId);
    const [topicTitle, setTopicTitle] = useState<string | null>(null);

    const chatBodyRef = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const streamingCompletionRef = useRef<(() => void) | null>(null);
    const isInputDisabled =
        !user || !isTopicScoped || topicId == null || isLoading || isStreaming || isRequestInProgress || Boolean(activeRating);

    const closePopup = useCallback(() => {
        if (isRequestInProgress) return;
        onClose();
    }, [isRequestInProgress, onClose]);

    const handleRatingComplete = useCallback(() => {
        setActiveRating(null);
    }, []);

    const queueRating = useCallback((id: number) => {
        setActiveRating({ id, scope: "topic" });
    }, []);

    const handleBackdropClick = useCallback(
        (event: React.MouseEvent<HTMLDivElement>) => {
            if (event.target === event.currentTarget) {
                closePopup();
            }
        },
        [closePopup]
    );

    useEffect(() => {
        if (!isTopicScoped || topicId == null) {
            setTopicTitle(null);
            return;
        }
        if (typeof window === "undefined") return;
        try {
            const stored = localStorage.getItem("curriculum");
            if (!stored) return;
            const curriculum: Grade[] = JSON.parse(stored);
            const grade = curriculum.find((g) => g.id === Number(params?.grade));
            const subject = grade?.subjects?.find((s: Subject) => s.id === Number(params?.subject));
            const lesson = subject?.lessons?.find((l: Lesson) => l.id === Number(params?.lesson));
            const topic = lesson?.topics?.find((t: Topic) => t.id === topicId);
            setTopicTitle(topic?.name ?? null);
        } catch (err) {
            console.error("Failed to parse curriculum for topic title", err);
        }
    }, [isTopicScoped, params, topicId]);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const scrollToBottom = useCallback(() => {
        chatBodyRef.current?.scrollTo({
            top: chatBodyRef.current.scrollHeight,
            behavior: "smooth"
        });
    }, []);

    useEffect(() => {
        if (!isOpen) {
            setMessages([]);
            setInputMessage("");
            setStreamingMessage("");
            setIsStreaming(false);
            setIsLoading(false);
            setActiveRating(null);
            streamingCompletionRef.current = null;
            return;
        }
        if (!user) return;
        if (!isTopicScoped || topicId == null) {
            setError("ការសន្ទនានេះអាចប្រើបានតែនៅទំព័រមេរៀនប៉ុណ្ណោះ។");
            return;
        }
        (async () => {
            try {
                setIsHistoryLoading(true);
                const history = await meAiService.getAiTopicHistory(topicId, 1, 20);
                setMessages(convertHistoryToMessages(history.data));
                setError(null);
            } catch (err) {
                console.error("Failed to load AI topic history:", err);
                setError("មិនអាចផ្ទុកប្រវត្តិការសន្ទនាសម្រាប់មេរៀននេះបានទេ។");
            } finally {
                setIsHistoryLoading(false);
            }
        })();
    }, [isOpen, user, isTopicScoped, topicId]);

    useEffect(() => {
        if (messages.length && (isOpen || isStreaming)) {
            scrollToBottom();
        }
    }, [messages, isStreaming, scrollToBottom, isOpen]);

    const handleCopy = useCallback(async (messageId: string, content: string) => {
        try {
            await navigator.clipboard.writeText(content);
            setCopiedMessageId(messageId);
            setTimeout(() => setCopiedMessageId(null), 2000);
        } catch (err) {
            console.error("Failed to copy message:", err);
        }
    }, []);

    const streamText = useCallback(
        (
            text: string,
            options?: {
                onComplete?: () => void;
            }
        ) => {
            streamingCompletionRef.current = options?.onComplete ?? null;
            setIsStreaming(true);
            setStreamingMessage("");
            let index = 0;
            const maxStep = 32;
            const minStep = 3;

            const tick = () => {
                if (index < text.length) {
                    const dynamicStep = Math.min(minStep + Math.floor(index / 50), maxStep);
                    index = Math.min(index + dynamicStep, text.length);
                    setStreamingMessage(text.slice(0, index));
                    requestAnimationFrame(tick);
                } else {
                    setIsStreaming(false);
                    const aiResponse: Message = {
                        id: (Date.now() + 1).toString(),
                        content: text,
                        sender: "ai",
                        timestamp: new Date(),
                        responseType: "normal"
                    };
                    setMessages((prev) => [...prev, aiResponse]);
                    setStreamingMessage("");
                    setPendingResponseType(null);
                    if (streamingCompletionRef.current) {
                        streamingCompletionRef.current();
                        streamingCompletionRef.current = null;
                    }
                }
            };

            requestAnimationFrame(tick);
        },
        []
    );

    const handleSendMessage = async () => {
        if (!inputMessage.trim() || isLoading || isStreaming || !user || activeRating) return;
        const userMessage: Message = {
            id: Date.now().toString(),
            content: inputMessage,
            sender: "user",
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, userMessage]);
        const payload = inputMessage;
        setInputMessage("");
        setIsLoading(true);
        setIsRequestInProgress(true);
        setPendingResponseType(selectedResponseType.id);
        setError(null);
        if (!isTopicScoped || topicId == null) {
            setError("មិនមានមេរៀនដែលត្រូវបានជ្រើសសម្រាប់ការសរសេរ។");
            setIsLoading(false);
            setIsRequestInProgress(false);
            return;
        }
        try {
            const response = await meAiService.callAiTopicAndWriteToTopicHistory(
                payload,
                topicId,
                selectedResponseType.id
            );

            const resolvedResponseType =
                response.responseType ?? (response as { format?: AIResponseType }).format ?? "normal";

            if (resolvedResponseType === "komplex") {
                const aiResponse: Message = {
                    id: (Date.now() + 1).toString(),
                    content: response.data.aiResult,
                    sender: "ai",
                    timestamp: new Date(),
                    responseType: resolvedResponseType
                };
                setMessages((prev) => [...prev, aiResponse]);
                setPendingResponseType(null);
                queueRating(response.data.id);
            } else {
                streamText(response.data.aiResult, {
                    onComplete: () => queueRating(response.data.id)
                });
            }
        } catch (err) {
            console.error("Failed to send AI popup message:", err);
            setError("មានបញ្ហាក្នុងការទាក់ទងតារា។ សូមព្យាយាមម្តងទៀត។");
            setPendingResponseType(null);
        } finally {
            setIsLoading(false);
            setIsRequestInProgress(false);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (event.key === "Enter" && !event.shiftKey) {
            event.preventDefault();
            handleSendMessage();
        }
    };

    const handleStop = () => {
        if (isRequestInProgress) {
            setIsRequestInProgress(false);
            setIsLoading(false);
            setPendingResponseType(null);
            setError("បានបញ្ឈប់ការស្នើសុំ។");
            return;
        }
        if (isStreaming) {
            setIsStreaming(false);
            if (streamingMessage.trim()) {
                const aiResponse: Message = {
                    id: (Date.now() + 1).toString(),
                    content: streamingMessage,
                    sender: "ai",
                    timestamp: new Date(),
                    responseType: "normal"
                };
                setMessages((prev) => [...prev, aiResponse]);
            }
            setStreamingMessage("");
            setPendingResponseType(null);
            if (streamingCompletionRef.current) {
                streamingCompletionRef.current();
                streamingCompletionRef.current = null;
            }
        }
    };

    const handleMaximize = () => {
        setIsPopupMaximized(!isPopupMaximized);
    }

    useEffect(() => {
        if (!textareaRef.current) return;
        textareaRef.current.style.height = "30px";
        textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }, [inputMessage]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex">
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="absolute inset-0 bg-black/30 "
                            onClick={handleBackdropClick}
                        />
                        <motion.div
                            initial={isDesktop ? { x: "100%", opacity: 0 } : { y: "100%", opacity: 0 }}
                            animate={{ x: 0, y: 0, opacity: 1 }}
                            exit={isDesktop ? { x: "100%", opacity: 0 } : { y: "100%", opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className={`relative flex w-full h-full ${isDesktop ? "justify-end p-6" : "items-end"}`}
                        >
                            <div
                                className={`pointer-events-auto flex flex-col  transition-all duration-300 ease-out ${isDesktop
                                    ? `${isPopupMaximized ? "w-full h-full" : "w-[700px] h-full"} rounded-3xl bg-white/95 backdrop-blur-xl border border-gray-200 shadow-2xl`
                                    : "w-full h-[80vh] rounded-t-3xl bg-white"
                                    }`}
                            >
                                <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200 rounded-t-3xl">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                                            <Bot className="w-5 h-5 text-indigo-500" />
                                        </div>
                                        <p className="text-lg font-semibold text-gray-900">តារា AI - {topicTitle}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {isDesktop && <button
                                            onClick={handleMaximize}
                                            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                                            disabled={isRequestInProgress}
                                        >
                                            {isPopupMaximized ? <Minimize className="w-5 h-5 text-gray-600" /> : <Maximize className="w-5 h-5 text-gray-600" />}
                                        </button>}
                                        <button
                                            onClick={closePopup}
                                            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                                            disabled={isRequestInProgress}
                                        >
                                            <X className="w-5 h-5 text-gray-600" />
                                        </button>
                                    </div>
                                </div>

                                {/* Chat body */}
                                <div className={`flex-1 overflow-y-auto px-4 py-6 space-y-4 scrollbar-hide ${isPopupMaximized ? "max-w-4xl mx-auto" : ""}`} ref={chatBodyRef}>
                                    {isHistoryLoading ? (
                                        <div className="flex items-center justify-center py-10">
                                            <div className="text-sm text-gray-500">កំពុងផ្ទុកប្រវត្តិ...</div>
                                        </div>
                                    ) : messages.length === 0 && error ? (
                                        <div className="flex items-center justify-center py-10">
                                            <div className="text-sm text-gray-500">{error}</div>
                                            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                                <AlertCircle className="w-10 h-10 text-red-600" />
                                            </div>
                                        </div>
                                    ) : messages.length === 0 && !error ? (
                                        // Welcome screen
                                        <div className="flex flex-col items-center justify-center h-full">
                                            <div className="text-center max-w-2xl">
                                                <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                                    <Bot className="w-10 h-10 text-indigo-600" />
                                                </div>
                                                <h2 className="text-2xl font-semibold text-gray-900 mb-4">ស្វាគមន៍!</h2>
                                                <p className="text-gray-600 mb-8">ខ្ញុំឈ្មោះតារា ជា AI ជំនួយការរៀន។ តើអ្នកចង់សួរអ្វីអំពី <span className="font-bold text-indigo-600">{topicTitle}</span > ដែរ?</p>
                                            </div>
                                        </div>
                                    ) : (
                                        <>
                                            {messages.map((message) => (
                                                <MessageItem
                                                    key={message.id}
                                                    message={message}
                                                    onCopyMessage={handleCopy}
                                                    copiedMessageId={copiedMessageId}
                                                />
                                            ))}
                                            {isLoading && (
                                                <ResponseLoadingState
                                                    responseType={pendingResponseType ?? selectedResponseType.id}
                                                />
                                            )}
                                            {isStreaming && (
                                                <div className="flex justify-start">
                                                    <div className="bg-white border border-gray-200 rounded-3xl p-4 shadow-sm w-full">
                                                        <MarkdownRenderer content={streamingMessage} />
                                                        <div className="flex justify-end mt-2 text-[10px] text-gray-500 uppercase tracking-wider">
                                                            <span className="text-purple-600">KOM</span><span className="font-bold text-black">PLEX</span> Beta - <span className="font-medium">តារា AI</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>

                                {/* Error */}
                                {error && (
                                    <div className="px-4 pb-2">
                                        <div className="bg-red-50 border border-red-200 text-sm text-red-600 rounded-2xl px-4 py-2">
                                            {error}
                                        </div>
                                    </div>
                                )}

                                {/* Input */}
                                <div className={`px-4 lg:px-2 ${isPopupMaximized ? "max-w-4xl mx-auto w-full" : ""}`}>
                                    {activeRating ? (
                                        <AiRating responseId={activeRating.id} scope="topic" onComplete={handleRatingComplete} />
                                    ) : (
                                        <div className='lg:px-2 lg:max-w-4xl lg:mx-auto'>
                                            <div className="bg-white max-w-4xl mx-auto shadow-lg border border-gray-200 rounded-3xl p-2 transition-all duration-200">
                                                <div className="flex-1  ">
                                                    <PromptTextarea
                                                        ref={textareaRef}
                                                        value={inputMessage}
                                                        onChange={(e) => setInputMessage(e.target.value)}
                                                        onKeyPress={handleKeyDown}
                                                        disabled={isInputDisabled}
                                                        placeholder={isInputDisabled ? "កំពុងដំណើរការ..." : "សរសេរសំណួររបស់អ្នក..."}
                                                        className="min-h-[0px] text-base leading-relaxed"
                                                        style={{
                                                            // minHeight: '10px',
                                                            maxHeight: '200px',
                                                            height: 'auto'
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
                                                                className="px-2 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                                            >
                                                                <Send className="w-4 h-4" />
                                                            </button>
                                                        ) : (
                                                            <button
                                                                onClick={handleStop}
                                                                className="px-2 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors.duration-200 flex items-center gap-2"
                                                            >
                                                                <Square className="w-4 h-4" />
                                                            </button>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                    <div className="text-center text-xs text-gray-500 mb-1">
                                        តារា អាចមានកំហុស។ សូមពិនិត្យព័ត៌មានសំខាន់។
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
