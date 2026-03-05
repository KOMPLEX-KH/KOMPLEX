import { View, Pressable, ScrollView, Animated } from 'react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import * as LucideIcons from 'lucide-react-native';
import { TAILWIND_COLORS } from '@/constants/styles/tailwind-colors';
import Dropdown2 from '@/components/common/DropDown2';
import { useEffect, useRef, useState } from 'react';
import { feedCurriculumsService } from '../../../services';
import { Grade } from '@core-types/api-types/curriculum';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

interface DocHeaderProps {
    currentGrade?: string;
    currentSubject?: string;
    currentLesson?: string;
    currentTopic?: string;
    isVisible?: boolean;
    scrollY?: Animated.Value;
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
    isVisible = true,
    scrollY,
}: DocHeaderProps) {
    const router = useRouter();
    const [curriculum, setCurriculum] = useState<Grade[]>([]);

    const translateY = useRef(new Animated.Value(-200)).current;
    const opacity = useRef(new Animated.Value(0)).current;
    const headerOpacity = useRef(new Animated.Value(1)).current;
    const headerTranslateY = useRef(new Animated.Value(0)).current;

    // Track navigation to prevent loops - must be declared before early returns
    const navigatingRef = useRef(false);
    const lastScrollY = useRef(0);
    const scrollDirection = useRef<'up' | 'down'>('up');

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

    // Handle scroll-based fade in/out
    useEffect(() => {
        if (!scrollY) return;

        const listenerId = scrollY.addListener(({ value }) => {
            const currentScrollY = value;
            const delta = currentScrollY - lastScrollY.current;

            // Determine scroll direction
            if (delta > 0) {
                scrollDirection.current = 'down';
            } else if (delta < 0) {
                scrollDirection.current = 'up';
            }

            // Only animate if scroll is significant (more than 10px)
            if (Math.abs(delta) > 10) {
                if (scrollDirection.current === 'down' && currentScrollY > 50) {
                    // Fade out when scrolling down
                    Animated.timing(headerOpacity, {
                        toValue: 0,
                        duration: 200,
                        useNativeDriver: true,
                    }).start();
                    Animated.timing(headerTranslateY, {
                        toValue: -100,
                        duration: 200,
                        useNativeDriver: true,
                    }).start();
                } else if (scrollDirection.current === 'up' || currentScrollY <= 50) {
                    // Fade in when scrolling up or near top
                    Animated.timing(headerOpacity, {
                        toValue: 1,
                        duration: 200,
                        useNativeDriver: true,
                    }).start();
                    Animated.timing(headerTranslateY, {
                        toValue: 0,
                        duration: 200,
                        useNativeDriver: true,
                    }).start();
                }
            }

            lastScrollY.current = currentScrollY;
        });

        return () => {
            scrollY.removeListener(listenerId);
        };
    }, [scrollY, headerOpacity, headerTranslateY]);

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

    const gradeOptions = grades.map(grade => ({ id: grade.id.toString(), value: grade.name }));
    const lessonOptions = lessons.map(lesson => ({ id: lesson.id.toString(), value: lesson.name }));

    // Combine both animations - visibility toggle and scroll-based fade
    const combinedTranslateY = scrollY ? Animated.add(
        translateY,
        headerTranslateY
    ) : translateY;
    const combinedOpacity = scrollY ? Animated.multiply(
        opacity,
        headerOpacity
    ) : opacity;

    return (
        <Animated.View style={[
            tw("absolute top-12 left-0 right-0 z-10"),
            {
                transform: [{ translateY: combinedTranslateY }],
                opacity: combinedOpacity
            }
        ]}>
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
                        <Dropdown2
                            data={gradeOptions}
                            placeholder={gradeData.name}
                            selectedId={gradeData.id.toString()}
                            onChange={(item) => {
                                const selectedGradeId = parseInt(item.id, 10);
                                if (!Number.isNaN(selectedGradeId)) {
                                    handleChangeGrade(selectedGradeId);
                                }
                            }}
                            style={
                                {
                                    right: 20,
                                    top: 150,
                                    maxHeight: 250,
                                    maxWidth: 160,
                                }
                            }
                        />
                    </View>

                    {/* Lesson and Topic Navigation */}
                    <View style={tw("flex-row items-center justify-between gap-2")}>
                        <View style={tw("flex-row items-center gap-3")}>
                            {/* Lesson Selector */}
                            {lessonData && (
                                <Dropdown2
                                    data={lessonOptions}
                                    placeholder={lessonData.name}
                                    selectedId={lessonData.id.toString()}
                                    onChange={(item) => {
                                        const selectedLessonId = parseInt(item.id, 10);
                                        if (!Number.isNaN(selectedLessonId)) {
                                            handleChangeLesson(selectedLessonId);
                                        }
                                    }}
                                    style={
                                        {
                                            left: 20,
                                            top: 190,
                                            maxHeight: 250,
                                            maxWidth: 160,
                                        }
                                    }
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
