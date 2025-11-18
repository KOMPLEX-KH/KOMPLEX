"use client";

import React from "react";
import { Loader2 } from "lucide-react";
import { AIResponseType } from "@/types/content/ai";

interface Props {
    responseType: AIResponseType;
}

const ResponseLoadingState: React.FC<Props> = React.memo(({ responseType }) => {
    if (responseType === "komplex") {
        return (
            <div className="w-full">
                <div className="bg-white border border-gray-200 rounded-3xl p-5 shadow-sm space-y-4 animate-pulse">
                    <div className="h-4 bg-gray-200 rounded w-1/3" />
                    <div className="space-y-2">
                        <div className="h-3 bg-gray-100 rounded w-full" />
                        <div className="h-3 bg-gray-100 rounded w-5/6" />
                        <div className="h-3 bg-gray-100 rounded w-2/3" />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="h-20 bg-gray-50 rounded-xl" />
                        <div className="h-20 bg-gray-50 rounded-xl" />
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full">
            <div className="flex items-start gap-3 bg-white border border-gray-200 rounded-3xl p-4 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center">
                    <Loader2 className="w-4 h-4 text-indigo-500 animate-spin" />
                </div>
                <div className="flex-1 space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-2/3 animate-pulse" />
                    <div className="h-3 bg-gray-200 rounded w-full animate-pulse" />
                    <div className="h-3 bg-gray-200 rounded w-4/5 animate-pulse" />
                </div>
            </div>
        </div>
    );
});

ResponseLoadingState.displayName = "ResponseLoadingState";

export default ResponseLoadingState;

