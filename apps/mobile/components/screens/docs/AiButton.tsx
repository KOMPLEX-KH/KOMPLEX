import { tw } from "@/utils/styles";
import { Animated, Pressable } from "react-native";
import { BotIcon } from "lucide-react-native";
import { BlurView } from "expo-blur";
import { useEffect, useRef, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AiModal from "./AiModal";
import type { Grade, Subject, Lesson, Topic } from "@core-types/docs/curriculum";

export default function AiButton() {
    const aiButtonTranslate = useRef(new Animated.Value(24));
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [topicTitle, setTopicTitle] = useState<string | null>(null);
    const params = useLocalSearchParams();
    const topicId = params.topic ? Number(params.topic) : null;

    useEffect(() => {
        aiButtonTranslate.current.setValue(32);
        Animated.spring(aiButtonTranslate.current, {
            toValue: 0,
            useNativeDriver: true,
            damping: 12,
            stiffness: 150,
        }).start();
    }, []);

    useEffect(() => {
        const loadTopicTitle = async () => {
            if (!topicId) return;
            try {
                const stored = await AsyncStorage.getItem("curriculum");
                if (!stored) return;
                const curriculum: Grade[] = JSON.parse(stored);
                const grade = curriculum.find((g) => g.id === Number(params.grade));
                const subject = grade?.subjects?.find((s: Subject) => s.id === Number(params.subject));
                const lesson = subject?.lessons?.find((l: Lesson) => l.id === Number(params.lesson));
                const topic = lesson?.topics?.find((t: Topic) => t.id === topicId);
                setTopicTitle(topic?.name ?? null);
            } catch (err) {
                console.error("Failed to parse curriculum for topic title", err);
            }
        };
        loadTopicTitle();
    }, [topicId, params.grade, params.subject, params.lesson]);

    const handleOpenModal = () => {
        if (topicId) {
            setIsModalOpen(true);
        }
    };

    if (!topicId) return null;

    return (
        <>
            <Animated.View style={[tw("absolute bottom-6 right-6"), { transform: [{ translateY: aiButtonTranslate.current }] }]}>
                <BlurView intensity={5} style={tw("rounded-full bg-indigo-50/50 border border-indigo-50 p-2 shadow-lg shadow-indigo-500 overflow-hidden")}>
                    <Pressable
                        style={tw(`p-2 rounded-full bg-indigo-600`)}
                        onPress={handleOpenModal}
                    >
                        <BotIcon
                            size={20}
                            color="white"
                        />
                    </Pressable>
                </BlurView>
            </Animated.View>
            <AiModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                topicId={topicId}
                topicTitle={topicTitle}
            />
        </>
    );
}