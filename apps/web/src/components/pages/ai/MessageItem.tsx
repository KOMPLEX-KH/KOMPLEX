"use client";

import React, { useMemo } from "react";
import { Check, Copy } from "lucide-react";
import { Message } from "@/types/content/ai";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import { deserializeTopicContentV3 } from "@/components/pages/docs/utils/ContentSerializerV2";
import MarkdownRenderer from "@/components/helper/MarkDownRenderer";

interface MessageItemProps {
    message: Message;
    onCopyMessage: (messageId: string, content: string) => void;
    copiedMessageId: string | null;
}

export default function MessageItem({ message, onCopyMessage, copiedMessageId }: MessageItemProps) {
    const isKomplexMessage = message.responseType === "komplex";

    const { komplexContent, canRenderKomplex } = useMemo(() => {
        if (!isKomplexMessage) {
            return { komplexContent: null, canRenderKomplex: false };
        }
        try {
            return {
                komplexContent: deserializeTopicContentV3(message.content),
                canRenderKomplex: true
            };
        } catch (err) {
            console.error("Failed to deserialize KOMPLEX content", err);
            return { komplexContent: null, canRenderKomplex: false };
        }
    }, [isKomplexMessage, message.content]);

    if (message.sender === "user") {
        return (
            <div className="mb-8">
                <div className="flex justify-end">
                    <div className="bg-indigo-600 text-white rounded-2xl px-4 py-3 max-w-[70%]">
                        <p className="text-md font-medium">{message.content}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="mb-8">
            <div className="w-full">
                <div className="relative bg-white border border-gray-200 rounded-3xl p-4 shadow-sm">
                    {canRenderKomplex ? (
                        <ContentRendererV3 content={komplexContent} />
                    ) : (
                        <MarkdownRenderer content={message.content} />
                    )}
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
                        <div className="text-xs text-gray-500">
                            <span className="text-indigo-600 font-bold">KOM</span>
                            <span className="text-black font-bold">PLEX</span> Beta -{" "}
                            <span className="font-medium">តារា AI</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

