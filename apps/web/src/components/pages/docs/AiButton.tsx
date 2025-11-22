'use client';

import { BotIcon, Sparkle, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@hooks/useAuth";
import AIPopup from "./AIPopup";

export default function AiButton() {
    const [isAiPopupOpen, setIsAiPopupOpen] = useState(false);
    const router = useRouter();
    const { user } = useAuth();

    const handleAiPopupOpen = () => {
        if (!user) {
            router.push("/auth");
            return;
        }
        setIsAiPopupOpen(true);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
            <button
                onClick={handleAiPopupOpen}
                className={`group flex items-center gap-2 rounded-full text-indigo-600`}
            >
                <div className="relative flex items-center">
                    <span
                        className={`pointer-events-none absolute right-full mr-2 overflow-hidden rounded-full   transition-all duration-300 ease-out max-w-0 group-hover:max-w-[240px] bg-transparent  group-hover:bg-indigo-50 group-hover:border-indigo-600`}
                    >
                        <span
                            className={`flex items-center px-4 py-2 text-sm font-semibold transform translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out whitespace-nowrap text-indigo-700`}
                        >
                            សួរតារា AI ពីមេរៀននេះ
                        </span>
                    </span>
                    <div
                        className={`flex items-center justify-center w-12 h-12 rounded-full text-white shadow-lg shadow-indigo-500/40 transition-transform duration-300 bg-indigo-600 group-hover:scale-105 group-hover:bg-indigo-700`}
                    >
                        <BotIcon className="w-6 h-6" />
                    </div>
                    <Sparkles className="w-5 h-5 text-indigo-500 fill-indigo-500 absolute -top-2 -left-2 animate-pulse" />
                </div>
            </button>
            <AIPopup isOpen={isAiPopupOpen} onClose={() => setIsAiPopupOpen(false)} />
        </div>
    );
}
