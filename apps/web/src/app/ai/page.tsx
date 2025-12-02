'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
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
    { id: 'normal', name: 'ធម្មតា', description: 'បង្ហាញជាទម្រង់ Markdown' },
    { id: 'komplex', name: 'KOMPLEX', description: 'បង្ហាញជាប្រអប់ទាក់ទាញ' },
] as const;

export default function AIWelcomePage() {
    const router = useRouter();
    const [inputMessage, setInputMessage] = useState('');
    const [selectedResponseType, setSelectedResponseType] = useState<ResponseTypeOption>(
        responseTypeOptions[0]
    );
    const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const debounceRef = useRef<NodeJS.Timeout | null>(null);

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

    const handleSendFirstMessage = async () => {
        if (!inputMessage.trim() || isLoading) return;

        setIsLoading(true);
        setError(null);

        try {
            const response = await meAiService.callAiGeneralFirstTime(inputMessage, {
                responseType: selectedResponseType.id as AIResponseType,
            });

            // Backend returns tab metadata on first call
            const data = response as unknown as { tabId?: number; tabID?: number; tabid?: number };
            const tabId: number | undefined = data.tabId ?? data.tabID ?? data.tabid;

            if (!tabId) {
                throw new Error('Missing tabId in response');
            }

            // Seamlessly navigate to the new tab chat page
            router.push(`/ai/${tabId}`);
        } catch (e) {
            console.error('Error starting first AI chat:', e);
            setError('មានបញ្ហាក្នុងការចាប់ផ្តើមសន្ទនាថ្មី។ សូមព្យាយាមម្តងទៀត។');
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendFirstMessage();
        }
    };

    return (
        <div className="min-h-screen relative bg-gray-50 pt-16 pb-16">
            <SideBar onCollapsedChange={setIsSideBarCollapsed} />

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
                                disabled={isLoading}
                                placeholder={
                                    isLoading
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
                                    disabled={!inputMessage.trim() || isLoading}
                                    className="px-3 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
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

