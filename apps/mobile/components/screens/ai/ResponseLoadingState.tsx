import React, { useEffect, useMemo, useState } from "react";
import { View, Animated } from "react-native";
import { Check, Loader2, Sparkles } from "lucide-react-native";
import { AIResponseType } from "@core-types/content/ai";
import { Text } from "@/components/common/Text";
import { tw } from "@/utils/styles";

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
    const pulseAnim = useMemo(() => new Animated.Value(1), []);
    const spinAnim = useMemo(() => new Animated.Value(0), []);

    useEffect(() => {
        setActiveStep(0);
        const interval = Math.floor(TOTAL_DURATION / steps.length);
        const timers: ReturnType<typeof setTimeout>[] = [];

        for (let i = 1; i < steps.length; i += 1) {
            timers.push(setTimeout(() => setActiveStep(i), interval * i));
        }

        // Pulse animation
        const pulseAnimation = Animated.loop(
            Animated.sequence([
                Animated.timing(pulseAnim, {
                    toValue: 0.5,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(pulseAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                }),
            ])
        );
        pulseAnimation.start();

        // Spin animation
        const spinAnimation = Animated.loop(
            Animated.timing(spinAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            })
        );
        spinAnimation.start();

        return () => {
            timers.forEach(clearTimeout);
            pulseAnimation.stop();
            spinAnimation.stop();
        };
    }, [responseType, pulseAnim, spinAnim]);

    const progress = useMemo(() => ((activeStep + 1) / steps.length) * 100, [activeStep]);

    const renderTimeline = () => (
        <View style={tw("gap-3 mt-4")}>
            {steps.map((step, index) => {
                const isActive = index === activeStep;
                const isComplete = index < activeStep;

                return (
                    <View
                        key={step.id}
                        style={tw(
                            `flex-row items-center gap-3 rounded-3xl border px-3 py-2 ${isActive
                                ? "bg-white border-indigo-100"
                                : "bg-gray-50/80 border-gray-200"
                            }`
                        )}
                    >
                        <View
                            style={tw(
                                `w-6 h-6 rounded-full items-center justify-center ${isComplete
                                    ? "bg-indigo-500"
                                    : isActive
                                        ? "bg-indigo-100"
                                        : "bg-gray-100"
                                }`
                            )}
                        >
                            {isComplete ? (
                                <Check size={16} color="#FFFFFF" />
                            ) : (
                                <Animated.View
                                    style={{
                                        transform: [
                                            {
                                                rotate: spinAnim.interpolate({
                                                    inputRange: [0, 1],
                                                    outputRange: ['0deg', '360deg'],
                                                }),
                                            },
                                        ],
                                    }}
                                >
                                    <Loader2 size={16} color={isActive ? "#4F46E5" : "#6B7280"} />
                                </Animated.View>
                            )}
                        </View>
                        <Text
                            style={tw(
                                `text-sm ${isActive || isComplete
                                    ? "text-gray-800"
                                    : "text-gray-600"
                                }`
                            )}
                        >
                            {step.label}
                        </Text>
                    </View>
                );
            })}
        </View>
    );

    return (
        <View style={tw("w-full")}>
            <View style={tw("bg-indigo-50 border border-indigo-500 rounded-3xl p-6 shadow-sm")}>
                <View style={tw("flex-row items-center gap-2")}>
                    <Animated.View style={{ opacity: pulseAnim }}>
                        <Sparkles size={16} color="#4F46E5" />
                    </Animated.View>
                    <Text style={tw("text-sm font-medium text-gray-900")}>
                        តារាកំពុងត្រៀមចម្លើយឱ្យអ្នក...
                    </Text>
                </View>
                <View style={tw("mt-4 h-2 rounded-full bg-indigo-100 overflow-hidden")}>
                    <View
                        style={[
                            tw("h-full bg-indigo-500 rounded-full"),
                            { width: `${progress}%` }
                        ]}
                    />
                </View>
                {renderTimeline()}
            </View>
        </View>
    );
});

ResponseLoadingState.displayName = "ResponseLoadingState";

export default ResponseLoadingState;
