'use client'

import { useCallback, useMemo, useState } from "react";
import { Loader, Send, Star, X } from "lucide-react";
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
    const [feedback, setFeedback] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const currentFill = useMemo(() => hoveredRating ?? selectedRating, [hoveredRating, selectedRating]);

    const submitRating = useCallback(async (skipFeedback = false) => {
        if (!selectedRating || isSubmitting) {
            return;
        }
        setIsSubmitting(true);
        setErrorMessage(null);
        const ratingFeedback = skipFeedback ? "" : feedback.trim();
        try {
            if (scope === "topic") {
                await meAiService.rateTopicAiResponse(responseId, selectedRating, ratingFeedback);
            } else {
                await meAiService.rateAiResponse(responseId, selectedRating, ratingFeedback);
            }
            setSuccessMessage("អរគុណសម្រាប់ការផ្ញើមតិ!");
        } catch (error) {
            console.error("Failed to submit AI rating", error);
            setErrorMessage("មានបញ្ហាក្នុងការផ្ញើការវាយតម្លៃ។ សូមព្យាយាមម្តងទៀត។");
        } finally {
            setIsSubmitting(false);
            setSelectedRating(null);
            setFeedback("");
            setTimeout(() => {
                setSuccessMessage(null);
                setErrorMessage(null);
                onComplete?.();
            }, 1200);
        }
    }, [selectedRating, isSubmitting, scope, responseId, feedback, onComplete]);

    const showFeedbackInput = Boolean(selectedRating);
    const hasFeedback = feedback.trim().length > 0;
    const isSubmitDisabled = !selectedRating || isSubmitting;

    return (
        <div
            className={`w-full rounded-3xl  px-4 py-5  ${className ?? ""
                }`}
        >
            <div className="flex flex-col gap-4 items-center">
                {successMessage ? (
                    <div className="rounded-full bg-green-50 px-3 py-2 text-sm text-green-700">{successMessage}</div>
                ) : errorMessage ? (
                    <div className="rounded-full bg-red-50 px-3 py-2 text-sm text-red-700">{errorMessage}</div>
                ) : showFeedbackInput ? (
                    <div className="flex flex-col gap-3 flex-1 w-full max-w-xl">
                        <div className="flex gap-2 ">
                            <textarea
                                id="ai-rating-feedback"
                                className="flex-1 bg-white rounded-full border max-h-10 min-h-10 border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                                rows={2}
                                maxLength={320}
                                placeholder="ចូរផ្ដល់មតិ..."
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                                disabled={isSubmitting}
                            />
                            <button
                                type="button"
                                onClick={() => submitRating()}
                                disabled={isSubmitDisabled}
                                className=" rounded-full bg-indigo-600  p-2 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
                            >
                                {isSubmitting ? <Loader className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
                            </button>
                            {!hasFeedback && (
                                <button
                                    type="button"
                                    onClick={() => submitRating(true)}
                                    disabled={isSubmitDisabled}
                                    className=" rounded-full border border-gray-200 px-2 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-300 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            )}
                        </div>
                    </div>
                ) : (
                    <div>
                        <p className="text-sm font-medium text-gray-900 mb-2">តើអ្នកយល់យ៉ាងណា ចំពោះការឆ្លើយតបនេះ?</p>
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
                                        }}
                                        aria-label={`វាយតម្លៃ ${value} ផ្កាយ`}
                                    >
                                        <Star
                                            className={`h-7 w-7 transition-colors ${isActive ? "fill-indigo-600 text-indigo-600" : "text-gray-300"
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
