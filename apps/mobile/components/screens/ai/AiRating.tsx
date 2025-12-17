import React, { useCallback, useMemo, useState } from "react";
import { View, Pressable } from "react-native";
import { Star } from "lucide-react-native";
import { meAiService } from "@/services/index";
import { Text } from "@/components/common/Text";
import { tw } from "@/utils/styles";

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
    const [pressedRating, setPressedRating] = useState<number | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const currentFill = useMemo(() => pressedRating ?? selectedRating, [pressedRating, selectedRating]);

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
        <View style={tw(`w-full rounded-3xl px-4 py-2 ${className ?? ""}`)}>
            <View style={tw("flex-col gap-4 items-center")}>
                {successMessage ? (
                    <View style={tw("rounded-full bg-green-50 px-3 py-2")}>
                        <Text style={tw("text-sm text-green-700")}>{successMessage}</Text>
                    </View>
                ) : errorMessage ? (
                    <View style={tw("rounded-full bg-red-50 px-3 py-2")}>
                        <Text style={tw("text-sm text-red-700")}>{errorMessage}</Text>
                    </View>
                ) : (
                    <View>
                        <Text style={tw("text-sm font-medium text-gray-900 mb-2 text-center")}>
                            តើអ្នកយល់យ៉ាងណា ចំពោះការឆ្លើយតបនេះ?
                        </Text>
                        <View style={tw("flex-row items-center gap-2 justify-center")}>
                            {STAR_VALUES.map((value) => {
                                const isActive = currentFill != null && value <= currentFill;
                                return (
                                    <Pressable
                                        key={value}
                                        onPressIn={() => setPressedRating(value)}
                                        onPressOut={() => setPressedRating(null)}
                                        onPress={() => {
                                            setSelectedRating(value);
                                            setSuccessMessage(null);
                                            setErrorMessage(null);
                                            submitRating(value);
                                        }}
                                        disabled={isSubmitting}
                                    >
                                        <Star
                                            size={28}
                                            color={isActive ? "#4F46E5" : "#D1D5DB"}
                                            fill={isActive ? "#4F46E5" : "transparent"}
                                        />
                                    </Pressable>
                                );
                            })}
                        </View>
                    </View>
                )}
            </View>
        </View>
    );
}
