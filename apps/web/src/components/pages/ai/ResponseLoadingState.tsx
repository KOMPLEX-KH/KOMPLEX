"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Check, Loader2, Sparkles } from "lucide-react";
import { AIResponseType } from "@core-types/content/ai";

interface Props {
    responseType: AIResponseType;
}

type Step = {
    id: number;
    label: string;
};

const steps: Step[] = [
    { id: 0, label: "តារាកំពុងយល់ពីសំណួរ" },
    { id: 1, label: "កំពុងគិត..." },
    { id: 2, label: "កំពុងរៀបចំចម្លើយ" },
    { id: 3, label: "តារាកំពុងសរសេរចម្លើយ..." }
];

const TOTAL_DURATION = 18000;

const ResponseLoadingState: React.FC<Props> = React.memo(({ responseType }) => {
    const [activeStep, setActiveStep] = useState(0);

    useEffect(() => {
        setActiveStep(0);
        const interval = Math.floor(TOTAL_DURATION / steps.length);
        const timers: ReturnType<typeof setTimeout>[] = [];

        for (let i = 1; i < steps.length; i += 1) {
            timers.push(setTimeout(() => setActiveStep(i), interval * i));
        }

        return () => {
            timers.forEach(clearTimeout);
        };
    }, [responseType]);

    const progress = useMemo(() => ((activeStep + 1) / steps.length) * 100, [activeStep]);

    const renderTimeline = () => (
        <div className="space-y-3 mt-4">
            {steps.map((step, index) => {
                const isActive = index === activeStep;
                const isComplete = index < activeStep;
                const baseColor = "bg-gray-50/80";
                const activeColor = "bg-white border-indigo-100";
                const textColor = "text-gray-800";

                return (
                    <div
                        key={step.id}
                        className={`flex items-center gap-3 rounded-3xl border px-3 py-2 transition-colors ${isActive ? activeColor : baseColor
                            } border-gray-200`}
                    >
                        <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${isComplete
                                ? "bg-indigo-500 text-white"
                                : isActive
                                    ? "bg-indigo-100 text-indigo-700 animate-pulse"
                                    : "bg-gray-100 text-gray-500"
                                }`}
                        >
                            {isComplete ? <Check className="w-4 h-4" /> : <Loader2 className="w-4 h-4 animate-spin" />}
                        </div>
                        <p className={`text-sm ${textColor}`}>{step.label}</p>
                    </div>
                );
            })}
        </div>
    );

    return (
        <div className="w-full">
            <div className="bg-indigo-50 border border-indigo-500 rounded-3xl p-6 shadow-sm">
                <div className="flex items-center gap-2 text-indigo-600 font-semibold text-sm">
                    <Sparkles className="w-4 h-4 animate-pulse" />
                    <p className="text-sm font-medium text-gray-900">តារាកំពុងត្រៀមចម្លើយឱ្យអ្នក...</p>
                </div>
                <div className="mt-4 h-2 rounded-full bg-indigo-100 overflow-hidden">
                    <div className="h-full bg-indigo-500 transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
                </div>
                {renderTimeline()}
            </div>
        </div>
    );


});

ResponseLoadingState.displayName = "ResponseLoadingState";

export default ResponseLoadingState;
