import { BotIcon } from "lucide-react";
import { useState } from "react";
import AIPopup from "./AIPopup";

export default function AiButton() {
    const [isAiPopupOpen, setIsAiPopupOpen] = useState(false);

    const handleAiPopupOpen = () => {
        setIsAiPopupOpen(true);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2">
            <button
                onClick={handleAiPopupOpen}
                className="group flex items-center gap-2 text-indigo-600 rounded-full"
            >
                <div className="relative flex items-center">
                    <span className="pointer-events-none absolute right-full mr-2 overflow-hidden rounded-full bg-transparent group-hover:bg-indigo-50 group-hover:border-indigo-600 shadow-lg shadow-indigo-500/20 transition-all duration-300 ease-out max-w-0 group-hover:max-w-[220px]">
                        <span className="flex items-center px-4 py-2 text-sm font-semibold text-indigo-700 transform translate-x-6 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 ease-out whitespace-nowrap">
                            សួរតារា AI ពីមេរៀននេះ
                        </span>
                    </span>
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-500/40 transition-transform duration-300 group-hover:scale-105 group-hover:bg-indigo-700">
                        <BotIcon className="w-6 h-6" />
                    </div>  
                </div>
            </button>
            <AIPopup isOpen={isAiPopupOpen} onClose={() => setIsAiPopupOpen(false)} />
        </div>
    );
}