"use client";

import React, { useMemo, useRef, useState } from "react";
import { Check, Copy, AlertCircle, Download, Loader } from "lucide-react";
import { Message } from "@core-types/api-types/ai";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import { deserializeTopicContentV3 } from "@/components/pages/docs/utils/ContentSerializerV2";
import MarkdownRenderer from "@/components/helper/MarkDownRenderer";
import domtoimage from "dom-to-image";

interface MessageItemProps {
    message: Message;
    onCopyMessage: (messageId: string, content: string) => void;
    copiedMessageId: string | null;
}

export default function MessageItem({ message, onCopyMessage, copiedMessageId }: MessageItemProps) {
    const isKomplexMessage = message.responseType === "komplex";
    const contentRef = useRef<HTMLDivElement>(null);
    const footerRef = useRef<HTMLDivElement>(null);
    const [isDownloading, setIsDownloading] = useState(false);

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

    const handleDownloadAsImage = async () => {
        if (!contentRef.current) return;

        setIsDownloading(true);

        // Hide footer during download
        if (footerRef.current) {
            footerRef.current.style.display = "none";
        }

        try {
            const dataUrl = await domtoimage.toPng(contentRef.current, {
                quality: 2.0,
                bgcolor: "#ffffff",
                width: contentRef.current.offsetWidth * 2,
                height: contentRef.current.offsetHeight * 2,
                style: {
                    transform: "scale(2)",
                    transformOrigin: "top left",
                },
            });

            const link = document.createElement("a");
            link.download = `komplex_response_${message.id}.png`;
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error("Error downloading image:", error);
            alert("មានបញ្ហាក្នុងការទាញយករូបភាព");
        } finally {
            // Restore footer visibility
            if (footerRef.current) {
                footerRef.current.style.display = "";
            }
            setIsDownloading(false);
        }
    };

    if (message.sender === "user") {
        return (
            <div className="mb-8">
                <div className="flex justify-end">
                    <div className="bg-indigo-600 dark:bg-indigo-400 text-white rounded-2xl px-4 py-3 max-w-[70%]">
                        <p className="text-md font-medium">{message.content}</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="mb-8">
            <div className="w-full">
                <div className="relative bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-3xl p-4 shadow-sm">
                    <div ref={contentRef}>
                        {isKomplexMessage ? (
                            canRenderKomplex ? (
                                <ContentRendererV3 content={komplexContent} />
                            ) : (
                                <div className="flex items-center gap-3 p-4 bg-yellow-50 dark:bg-yellow-900 border border-yellow-200 dark:border-yellow-800 rounded-lg">
                                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
                                    <p className="text-sm text-yellow-800 dark:text-yellow-300">
                                        សូមអភ័យទោស មានបញ្ហាក្នុងការបង្ហាញចម្លើយ
                                    </p>
                                </div>
                            )
                        ) : (
                            <MarkdownRenderer content={message.content} />
                        )}
                    </div>
                    <div className="flex items-center justify-between mt-2" ref={footerRef}>
                        {isKomplexMessage && canRenderKomplex ? (
                            <button
                                onClick={handleDownloadAsImage}
                                disabled={isDownloading}
                                className="text-sm text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                title="Download as image"
                            >
                                {isDownloading ? (
                                    <div className="flex items-center gap-2">
                                        <Loader className="w-4 h-4 animate-spin text-gray-600 dark:text-zinc-400" />
                                        <span>កំពុងទាញយក...</span>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <Download className="w-4 h-4 text-gray-600 dark:text-zinc-400" />
                                        <span>ទាញយក</span>
                                    </div>
                                )}
                            </button>
                        ) : (
                            <button
                                onClick={() => onCopyMessage(message.id, message.content)}
                                className="text-sm text-gray-500 dark:text-zinc-400 hover:text-gray-700 dark:hover:text-zinc-300 transition-colors"
                                title="Copy response"
                            >
                                {copiedMessageId === message.id ? (
                                    <div className="flex items-center gap-2">
                                        <Check className="w-4 h-4 text-green-600 dark:text-green-400" />
                                        បានចម្លង
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <Copy className="w-4 h-4 text-gray-600 dark:text-zinc-400" />
                                        ចម្លង
                                    </div>
                                )}
                            </button>
                        )}
                        <div className="text-xs text-gray-500 dark:text-zinc-400">
                            <span className="text-indigo-600 dark:text-indigo-400 font-bold">KOM</span>
                            <span className="text-black dark:text-white font-bold">PLEX</span> Beta -{" "}
                            <span className="font-medium text-gray-500 dark:text-zinc-400">តារា AI</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

