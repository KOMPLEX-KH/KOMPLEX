'use client';

import React, { useState, useCallback, useRef, useEffect, useTransition, Suspense } from 'react';
import { Bot, Send } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { meAiService } from '@/services/index';
import SideBar from '../../components/pages/ai/SideBar';
import PromptTextarea from '../../components/pages/ai/PromptTextarea';
import ResponseTypeDropdown, {
    ResponseTypeOption,
} from '../../components/pages/ai/ResponseTypeDropdown';
import { AIResponseType } from '@/types/content/ai';

const responseTypeOptions: readonly ResponseTypeOption[] = [
    { id: 'komplex', name: 'KOMPLEX', description: 'បង្ហាញជាប្រអប់ KOMPLEX' },
    { id: 'normal', name: 'ធម្មតា', description: 'បង្ហាញជាទម្រង់ Markdown' },
] as const;

const NEW_TAB_PROMPT_KEY_PREFIX = 'ai:newTabFirstPrompt:';
const NEW_TAB_RESPONSE_TYPE_KEY_PREFIX = 'ai/newTabFirstPromptResponseType:';

function AIWelcomePageInner() {
    const router = useRouter();
    const [inputMessage, setInputMessage] = useState('');
    const [selectedResponseType, setSelectedResponseType] = useState<ResponseTypeOption>(
        responseTypeOptions[0]
    );
    const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isPending, startTransition] = useTransition();
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
        }, 16);
    }, [autoResizeTextarea]);

    useEffect(() => {
        debouncedAutoResize();
        return () => {
            if (debounceRef.current) {
                clearTimeout(debounceRef.current);
            }
        };
    }, [inputMessage, debouncedAutoResize]);

    const handleSendFirstMessage = () => {
        if (!inputMessage.trim() || isLoading || isPending) return;

        startTransition(async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await meAiService.callAiGeneralFirstTime(inputMessage, {
                    responseType: selectedResponseType.id as AIResponseType,
                });

                // Backend now returns the new tab metadata without calling AI:
                // response.data: { id, name, prompt, responseType, ... }
                const base = (response as {
                    data?: { id?: number; name?: string; prompt?: string; responseType?: string };
                }) || {};
                const payload = (base.data ?? base) as {
                    id?: number;
                    name?: string;
                    prompt?: string;
                    responseType?: string;
                };

                const tabId: number | undefined = payload.id;
                const prompt: string | undefined = payload.prompt ?? inputMessage;
                const respType: string | undefined = payload.responseType ?? selectedResponseType.id;

                if (!tabId) {
                    throw new Error('Missing tabId in response');
                }

                // Persist the first prompt & response type so the /ai/chat page
                // can perform the actual first AI call and make the transition seamless.
                try {
                    if (typeof window !== 'undefined') {
                        window.localStorage.setItem(
                            `${NEW_TAB_PROMPT_KEY_PREFIX}${tabId}`,
                            String(prompt ?? ''),
                        );
                        window.localStorage.setItem(
                            `${NEW_TAB_RESPONSE_TYPE_KEY_PREFIX}${tabId}`,
                            String(respType ?? ''),
                        );
                    }
                } catch (storageErr) {
                    console.error('Failed to persist first prompt for new tab:', storageErr);
                }

                // Seamlessly navigate to the new chat page using replace (ChatGPT-style)
                router.replace(`/ai/chat?tabId=${tabId}`);
            } catch (e) {
                console.error('Error starting first AI chat:', e);
                setError('មានបញ្ហាក្នុងការចាប់ផ្តើមសន្ទនាថ្មី។ សូមព្យាយាមម្តងទៀត។');
            } finally {
                setIsLoading(false);
            }
        });
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendFirstMessage();
        }
    };

    return (
        <div className="min-h-screen relative bg-gray-50 pt-16 pb-16">
            <Suspense fallback={null}>
                <SideBar onCollapsedChange={setIsSideBarCollapsed} />
            </Suspense>

            {/* Main content area shifted right of the sidebar */}
            <div className={`${isSideBarCollapsed ? 'lg:ml-4' : 'lg:ml-76'} px-4 min-h-[calc(100vh-10rem)] flex items-center`}>
                <div className="max-w-4xl mx-auto w-full space-y-2">
                    {/* Centered welcome card */}
                    <div className="flex items-center justify-center">
                        <div className="max-w-4xl w-full">
                            <div className=" max-w-4xl mx-auto rounded-3xl px-6 py-10 flex flex-col items-center text-center">
                                <div className=" bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6 p-4">
                                    <Bot className="w-10 h-10 text-indigo-600" />
                                </div>
                                <p className="text-gray-600 mb-4 font-bold text-lg">
                                    <span className='text-indigo-600'>តារា AI</span> សូមស្វាគមន៍!
                                </p>
                                <p className="text-gray-600 mb-4">
                                    តើអ្នកចង់សួរអ្វីអំពី អ្វីដែរ?
                                </p>
                                {error && (
                                    <p className="mt-2 text-sm text-red-600">
                                        {error}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Input area (no longer fixed, centered with max width) */}
                    <div className="bg-white max-w-4xl mx-auto shadow-lg border border-gray-200 rounded-3xl p-2 transition-all duration-200 space-y-2">
                        <div className="flex-1">
                            <PromptTextarea
                                ref={textareaRef}
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                onKeyPress={handleKeyPress}
                                disabled={isLoading || isPending}
                                placeholder={
                                    isLoading || isPending
                                        ? 'កំពុងដំណើរការ...'
                                        : 'សរសេរសំណួររបស់អ្នកដំបូងនៅទីនេះ...'
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
                                disabled={isLoading}
                                variant="default"
                            />

                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handleSendFirstMessage}
                                    disabled={!inputMessage.trim() || isLoading || isPending}
                                    className="px-2 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function AIWelcomePage() {
    return (
        <Suspense fallback={null}>
            <AIWelcomePageInner />
        </Suspense>
    );
}