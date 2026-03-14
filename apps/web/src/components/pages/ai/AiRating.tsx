'use client'

import { useCallback, useMemo, useState } from "react";
import { Star } from "lucide-react";
import { meAiService } from "@/services/index";

type RatingScope = "general" | "topic";

interface AiRatingProps {
    responseId: number;
    scope?: RatingScope;
    onComplete?: () => void;
    className?: string;
}

const STAR_VALUES = [1, 2, 3, 4, 5] as const;

export default function AiRating({ responseId, scope = "general", onComplete, className }: AiRatingProps) {
    const [selectedRating, setSelectedRating] = useState<number | null>(null);
    const [hoveredRating, setHoveredRating] = useState<number | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const currentFill = useMemo(() => hoveredRating ?? selectedRating, [hoveredRating, selectedRating]);

    const submitRating = useCallback(
        async (rating: number) => {
            if (!rating || isSubmitting) {
                return;
            }
            setIsSubmitting(true);
            setErrorMessage(null);
            const ratingFeedback = "";
            try {
                if (scope === "topic") {
                    await meAiService.rateTopicAiResponse(responseId, rating, ratingFeedback);
                } else {
                    await meAiService.rateAiResponse(responseId, rating, ratingFeedback);
                }
                setSuccessMessage("អរគុណសម្រាប់ការផ្ញើការវាយតម្លៃ!");
            } catch (error) {
                console.error("Failed to submit AI rating", error);
                setErrorMessage("មានបញ្ហាក្នុងការផ្ញើការវាយតម្លៃ។ សូមព្យាយាមម្តងទៀត។");
            } finally {
                setIsSubmitting(false);
                setSelectedRating(null);
                setTimeout(() => {
                    setSuccessMessage(null);
                    setErrorMessage(null);
                    onComplete?.();
                }, 1200);
            }
        },
        [isSubmitting, scope, responseId, onComplete],
    );

    return (
        <div
            className={`w-full rounded-3xl  px-4 py-5  ${className ?? ""
                }`}
        >
            <div className="flex flex-col gap-4 items-center">
                {successMessage ? (
                    <div className="rounded-full bg-green-50 dark:bg-green-900 px-3 py-2 text-sm text-green-700 dark:text-green-300">{successMessage}</div>
                ) : errorMessage ? (
                    <div className="rounded-full bg-red-50 dark:bg-red-900 px-3 py-2 text-sm text-red-700 dark:text-red-300">{errorMessage}</div>
                ) : (
                    <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-zinc-400 mb-2">តើអ្នកយល់យ៉ាងណា ចំពោះការឆ្លើយតបនេះ?</p>
                        <div className="flex items-center gap-2">
                            {STAR_VALUES.map((value) => {
                                const isActive = currentFill != null && value <= currentFill;
                                return (
                                    <button
                                        key={value}
                                        type="button"
                                        className="p-1"
                                        onMouseEnter={() => setHoveredRating(value)}
                                        onMouseLeave={() => setHoveredRating(null)}
                                        onFocus={() => setHoveredRating(value)}
                                        onBlur={() => setHoveredRating(null)}
                                        onClick={() => {
                                            setSelectedRating(value);
                                            setSuccessMessage(null);
                                            setErrorMessage(null);
                                            submitRating(value);
                                        }}
                                        aria-label={`វាយតម្លៃ ${value} ផ្កាយ`}
                                    >
                                        <Star
                                            className={`h-7 w-7 transition-colors ${isActive ? "fill-indigo-600 text-indigo-600" : "text-gray-300 dark:text-zinc-400"
                                                }`}
                                        />
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
