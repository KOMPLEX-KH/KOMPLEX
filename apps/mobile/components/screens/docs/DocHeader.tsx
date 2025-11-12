import { View, Pressable, ScrollView, Animated } from 'react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import * as LucideIcons from 'lucide-react-native';
import { TAILWIND_COLORS } from '@/constants/styles/tailwind-colors';
import { Dropdown } from '@/components/common/Dropdown';
import { useEffect, useRef, useState } from 'react';
import { feedCurriculumsService } from '../../../services';
import { Grade } from '@core-types/docs/curriculum';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

interface DocHeaderProps {
    currentGrade?: string;
    currentSubject?: string;
    currentLesson?: string;
    currentTopic?: string;
    isVisible?: boolean;
}

// Icon map - use all lucide icons dynamically
const ICON_MAP: Record<string, React.ComponentType<any>> = {
    ...(LucideIcons as unknown as Record<string, React.ComponentType<any>>),
};

export default function DocHeader({
    currentGrade,
    currentSubject,
    currentLesson,
    currentTopic,
    isVisible = true
}: DocHeaderProps) {
    const router = useRouter();
    const [curriculum, setCurriculum] = useState<Grade[]>([]);

    const translateY = useRef(new Animated.Value(-200)).current;
    const opacity = useRef(new Animated.Value(0)).current;

    // Track navigation to prevent loops - must be declared before early returns
    const navigatingRef = useRef(false);

    useEffect(() => {
        Animated.timing(translateY, {
            toValue: isVisible ? 0 : -200,
            duration: 300,
            useNativeDriver: true,
        }).start();
        Animated.timing(opacity, {
            toValue: isVisible ? 1 : 0,
            duration: 50,
            useNativeDriver: true,
        }).start();
    }, [isVisible, translateY, opacity]);

    // Load curriculum from AsyncStorage or fetch from API
    useEffect(() => {
        const loadCurriculum = async () => {
            try {
                const stored = await AsyncStorage.getItem("curriculum");
                if (stored) {
                    setCurriculum(JSON.parse(stored));
                } else {
                    const curriculumData = await feedCurriculumsService.getCurriculum();
                    setCurriculum(curriculumData);
                    await AsyncStorage.setItem("curriculum", JSON.stringify(curriculumData));
                }
            } catch (error) {
                console.error('Error loading curriculum:', error);
                try {
                    const curriculumData = await feedCurriculumsService.getCurriculum();
                    setCurriculum(curriculumData);
                    await AsyncStorage.setItem("curriculum", JSON.stringify(curriculumData));
                } catch (fetchError) {
                    console.error('Error fetching curriculum:', fetchError);
                }
            }
        };
        loadCurriculum();
    }, []);

    // Find current grade and subject data
    const gradeId = currentGrade ? parseInt(currentGrade) : undefined;
    const subjectId = currentSubject ? parseInt(currentSubject) : undefined;
    const lessonId = currentLesson ? parseInt(currentLesson) : undefined;
    const topicId = currentTopic ? parseInt(currentTopic) : undefined;

    const gradeData = curriculum.find(g => g.id === gradeId);
    const subjectData = gradeData?.subjects.find(s => s.id === subjectId);
    const lessonData = subjectData?.lessons.find(l => l.id === lessonId);

    if (!gradeData || !subjectData || curriculum.length === 0) {
        return null; // Return nothing while loading
    }

    const subjects = gradeData.subjects;
    const grades = curriculum.map(g => ({ id: g.id, name: g.name }));
    const lessons = subjectData.lessons;
    const topics = lessonData?.topics || [];

    const handleChangeGrade = (gradeId: number) => {
        if (navigatingRef.current) return;
        // Only navigate if grade actually changed
        if (gradeId === parseInt(currentGrade || '0')) return;

        const targetGrade = curriculum.find(g => g.id === gradeId);
        if (targetGrade && targetGrade.subjects.length > 0) {
            const firstSubject = targetGrade.subjects[0];
            if (firstSubject.lessons.length > 0) {
                const firstLesson = firstSubject.lessons[0];
                if (firstLesson.topics.length > 0) {
                    const firstTopic = firstLesson.topics[0];
                    navigatingRef.current = true;
                    router.replace(`/docs/${targetGrade.id}/${firstSubject.id}/${firstLesson.id}/${firstTopic.id}` as any);
                    setTimeout(() => { navigatingRef.current = false; }, 100);
                }
            }
        }
    };

    const handleChangeSubject = (subjectId: number) => {
        if (navigatingRef.current) return;
        // Only navigate if subject actually changed
        if (subjectId === parseInt(currentSubject || '0')) return;

        if (gradeData) {
            const targetSubject = gradeData.subjects.find(s => s.id === subjectId);
            if (targetSubject && targetSubject.lessons.length > 0) {
                const firstLesson = targetSubject.lessons[0];
                if (firstLesson.topics.length > 0) {
                    const firstTopic = firstLesson.topics[0];
                    navigatingRef.current = true;
                    router.replace(`/docs/${gradeData.id}/${targetSubject.id}/${firstLesson.id}/${firstTopic.id}` as any);
                    setTimeout(() => { navigatingRef.current = false; }, 100);
                }
            }
        }
    };

    const handleChangeLesson = (lessonId: number) => {
        if (navigatingRef.current) return;
        // Only navigate if lesson actually changed
        if (lessonId === parseInt(currentLesson || '0')) return;

        if (gradeData && subjectData) {
            const targetLesson = subjectData.lessons.find(l => l.id === lessonId);
            if (targetLesson && targetLesson.topics.length > 0) {
                const firstTopic = targetLesson.topics[0];
                navigatingRef.current = true;
                router.replace(`/docs/${gradeData.id}/${subjectData.id}/${targetLesson.id}/${firstTopic.id}` as any);
                setTimeout(() => { navigatingRef.current = false; }, 100);
            }
        }
    };

    const handleChangeTopic = (topicId: number) => {
        if (navigatingRef.current) return;
        // Only navigate if topic actually changed
        if (topicId === parseInt(currentTopic || '0')) return;

        if (gradeData && subjectData && lessonData) {
            navigatingRef.current = true;
            router.replace(`/docs/${gradeData.id}/${subjectData.id}/${lessonData.id}/${topicId}` as any);
            setTimeout(() => { navigatingRef.current = false; }, 100);
        }
    };

    return (
        <Animated.View style={[tw("absolute top-12 left-0 right-0 z-10"), { transform: [{ translateY: translateY }], opacity }]}>
            <View style={tw("bg-white/95 border-b border-indigo-500/10")}>
                <View style={tw("flex gap-1 py-2 px-4")}>
                    {/* Grade and Subject Header */}
                    <View style={tw("flex-row items-center justify-between gap-2")}>
                        {/* Subject Navigation */}
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={tw("flex-row flex-1")}
                            contentContainerStyle={tw("gap-2")}
                        >
                            {subjects.map((subject) => {
                                const Icon = ICON_MAP[subject.icon] || LucideIcons.BookOpen;
                                const isActive = subjectId === subject.id;
                                return (
                                    <Pressable
                                        key={subject.id}
                                        onPress={() => handleChangeSubject(subject.id)}
                                        style={tw(`flex-row items-center gap-2 px-3 py-2 rounded-full ${isActive
                                            ? 'bg-indigo-50/90 border border-indigo-500/20'
                                            : 'bg-white/80 border border-indigo-500/10'
                                            }`)}
                                    >
                                        <Icon size={16} color={isActive ? TAILWIND_COLORS["indigo-600"] : TAILWIND_COLORS["gray-500"]} />
                                        <Text style={tw(`text-xs font-medium ${isActive ? 'text-indigo-600' : 'text-gray-600'}`)}>
                                            {subject.name}
                                        </Text>
                                    </Pressable>
                                );
                            })}
                        </ScrollView>

                        {/* Grade Selector */}
                        <Dropdown
                            data={grades.map(grade => ({ key: grade.id.toString(), value: grade.name }))}
                            placeholder={gradeData.name}
                            defaultOption={gradeData ? { key: gradeData.id.toString(), value: gradeData.name } : undefined}
                            setSelected={(selectedKey) => {
                                // Only handle selection if it's a valid string and different from current
                                if (selectedKey && typeof selectedKey === 'string') {
                                    const selectedGradeId = parseInt(selectedKey);
                                    const currentGradeId = parseInt(currentGrade || '0');
                                    // Only navigate if grade actually changed
                                    if (selectedGradeId !== currentGradeId) {
                                        handleChangeGrade(selectedGradeId);
                                    }
                                }
                            }}
                            position="right-0 top-8"
                        />
                    </View>

                    {/* Lesson and Topic Navigation */}
                    <View style={tw("flex-row items-center justify-between gap-2")}>
                        <View style={tw("flex-row items-center gap-3")}>
                            {/* Lesson Selector */}
                            {lessonData && (
                                <Dropdown
                                    data={lessons.map(lesson => ({ key: lesson.id.toString(), value: lesson.name }))}
                                    placeholder={lessonData.name}
                                    defaultOption={{ key: lessonData.id.toString(), value: lessonData.name }}
                                    setSelected={(selectedKey) => {
                                        // Only handle selection if it's a valid string and different from current
                                        if (selectedKey && typeof selectedKey === 'string') {
                                            const selectedLessonId = parseInt(selectedKey);
                                            const currentLessonId = parseInt(currentLesson || '0');
                                            // Only navigate if lesson actually changed
                                            if (selectedLessonId !== currentLessonId) {
                                                handleChangeLesson(selectedLessonId);
                                            }
                                        }
                                    }}
                                    position="left-0 top-8"
                                    width='w-32'
                                />
                            )}
                        </View>

                        {/* Topics Navigation */}
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={tw("flex-row")}
                            contentContainerStyle={tw("gap-2")}
                        >
                            {topics.map((topic) => {
                                const isActive = topicId === topic.id;
                                return (
                                    <Pressable
                                        key={topic.id}
                                        onPress={() => handleChangeTopic(topic.id)}
                                        style={tw(`px-3 py-2 rounded-full ${isActive
                                            ? 'bg-indigo-50/90 border border-indigo-500/20'
                                            : 'bg-white/80 border border-indigo-500/10'
                                            }`)}
                                    >
                                        <Text style={tw(`text-xs font-medium ${isActive ? 'text-indigo-600' : 'text-gray-600'}`)}>
                                            {topic.name}
                                        </Text>
                                    </Pressable>
                                );
                            })}
                        </ScrollView>
                    </View>
                </View>
            </View>
        </Animated.View>
    );
}
