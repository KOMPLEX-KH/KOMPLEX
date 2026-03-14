"use client"

import { ArrowLeft, ArrowRight, Share2, Download, Copy, X, Maximize2 } from "lucide-react";
import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useRef, useState } from "react";
import domtoimage from "dom-to-image";
import ReactDOM from "react-dom";

interface NavigationItem {
    title: string;
    link: string;
}

interface TopicWrapperProps {
    title: string;
    children: React.ReactNode;
    prev?: NavigationItem | null;
    next?: NavigationItem | null;
}

export default function TopicWrapper({ title, children, prev, next }: TopicWrapperProps) {
    const contentRef = useRef<HTMLDivElement>(null);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const shareItemsRef = useRef<HTMLDivElement>(null);
    const handleDownloadAsImage = async () => {
        if (!contentRef.current) return;

        if (shareItemsRef.current) {
            shareItemsRef.current.style.display = "none";
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
            link.download = `${title.replace(/\s+/g, "_")}.png`;
            link.href = dataUrl;
            link.click();
        } catch (error) {
            console.error("Error downloading image:", error);
            alert("មានបញ្ហាក្នុងការទាញយករូបភាព");
        }
    };

    const handleShare = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href);
        } catch (error) {
            console.error("Error copying to clipboard:", error);
            alert("មានបញ្ហាក្នុងការចម្លងតំណភ្ជាប់");
        }
    };

    const handleFullScreen = () => {
        setIsFullScreen(!isFullScreen);
    };

    const content = (
        <div
            ref={contentRef}
            className={`bg-zinc-50 dark:lg:bg-zinc-900 dark:bg-transparent rounded-3xl lg:p-5 p-0 ${isFullScreen ? "w-full h-full p-6" : "lg:shadow-lg lg:bg-white dark:lg:bg-zinc-900"
                }`}
        >
            <div className="flex items-center justify-between">
                <div className="flex flex-col gap-4">
                    <div className="flex gap-2 items-center">
                        <h1 className="text-3xl font-black text-indigo-500">{title}</h1>
                    </div>
                </div>

                <div className="relative">
                    <Menu as="div" className="relative inline-block text-left">
                        <div className="flex items-center gap-2">
                            {isFullScreen ? (
                                <button
                                    onClick={handleFullScreen}
                                    className="text-zinc-700 dark:text-zinc-300 group flex w-full items-center text-sm"
                                >
                                    <X className="mr-3 h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                                </button>
                            ) : (
                                <button
                                    onClick={handleFullScreen}
                                    className="text-zinc-700 dark:text-zinc-300 group flex w-full items-center text-sm"
                                >
                                    <Maximize2 className="mr-3 h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                                </button>
                            )}
                            <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100 focus:outline-none">
                                <Share2 className="w-4 h-4 text-zinc-600 dark:text-zinc-300" />
                            </Menu.Button>
                        </div>

                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items
                                ref={shareItemsRef}
                                className="absolute right-2 z-10 mt-2 p-2 w-56 origin-top-right rounded-3xl bg-white dark:bg-zinc-900 shadow-lg border border-gray-200 dark:border-zinc-700 ring-opacity-5 focus:outline-none"
                            >
                                <div className="py-1">
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={handleDownloadAsImage}
                                                className={`rounded-full ${
                                                    active
                                                        ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                                                        : "text-zinc-700 dark:text-zinc-300"
                                                } group flex w-full items-center px-4 py-2 text-sm`}
                                            >
                                                <Download className="mr-3 h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                                                ទាញយកជារូបភាព
                                            </button>
                                        )}
                                    </Menu.Item>
                                    <Menu.Item>
                                        {({ active }) => (
                                            <button
                                                onClick={handleShare}
                                                className={`rounded-full ${
                                                    active
                                                        ? "bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100"
                                                        : "text-zinc-700 dark:text-zinc-300"
                                                } group flex w-full items-center px-4 py-2 text-sm`}
                                            >
                                                <Copy className="mr-3 h-4 w-4 text-zinc-400 dark:text-zinc-500" />
                                                ចម្លងតំណភ្ជាប់
                                            </button>
                                        )}
                                    </Menu.Item>
                                </div>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
            <div className="w-full h-0.5 bg-zinc-100 dark:bg-zinc-800 mt-6"></div>
            {children}
            <div className="w-full flex justify-between items-center mt-6 gap-6">
                {prev ? (
                    <Link href={prev.link} className="max-w-[150px] lg:max-w-none">
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-indigo-600 transition-colors">
                            <ArrowLeft className="w-4 h-4" />
                            <span className="line-clamp-1">{prev.title}</span>
                        </button>
                    </Link>
                ) : (
                    <button
                        className="bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 px-4 py-2 rounded-full flex items-center gap-2 cursor-not-allowed"
                        disabled
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>មុន</span>
                    </button>
                )}

                {next ? (
                    <Link href={next.link} className="max-w-[150px] lg:max-w-none">
                        <button className="bg-indigo-600 text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-indigo-600 transition-colors">
                            <span className="line-clamp-1">{next.title}</span>
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                ) : (
                    <button
                        className="bg-zinc-100 dark:bg-zinc-800 text-zinc-400 dark:text-zinc-500 px-4 py-2 rounded-full flex items-center gap-2 cursor-not-allowed"
                        disabled
                    >
                        <span>បន្ទាប់</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                )}
            </div>
        </div>
    );

    return (
        <>
            {isFullScreen
                ? ReactDOM.createPortal(
                    <div className="fixed inset-0 z-50 bg-zinc-50 dark:bg-zinc-900 overflow-auto  ">
                        <div className="pb-2">{content}</div>
                    </div>,
                    document.body
                )
                : content}
        </>
    );
}
