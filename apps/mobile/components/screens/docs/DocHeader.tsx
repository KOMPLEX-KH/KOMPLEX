import { View, Pressable, ScrollView, Animated } from 'react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import { Atom, Calculator, Dna, FlaskConical } from 'lucide-react-native';
import { TAILWIND_COLORS } from '@/constants/styles/tailwind-colors';
import { Dropdown } from '@/components/common/Dropdown';
import { BlurView } from 'expo-blur';
import { useEffect, useRef } from 'react';

interface DocHeaderProps {
    currentGrade?: string;
    currentSubject?: string;
    currentLesson?: string;
    currentTopic?: string;
    isVisible?: boolean;
}

export default function DocHeader({
    currentGrade = 'grade-12',
    currentSubject = 'math',
    currentLesson = 'limits',
    currentTopic = 'zero-over-zero',
    isVisible = true
}: DocHeaderProps) {

    const translateY = useRef(new Animated.Value(-200)).current; // start hidden
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(translateY, {
            toValue: isVisible ? 0 : -200,
            duration: 300,
            useNativeDriver: true,
        }).start();
        Animated.timing(opacity, {
            toValue: isVisible ? 1 : 0,
            duration: 100,
            useNativeDriver: true,
        }).start();
    }, [isVisible]);

    // Mock data - replace with your actual curriculum data
    const subjects = [
        { subject: 'math', title: 'គណិតវិទ្យា', icon: Calculator },
        { subject: 'physics', title: 'រូបវិទ្យា', icon: Atom },
        { subject: 'chemistry', title: 'គីមីវិទ្យា', icon: FlaskConical },
        { subject: 'biology', title: 'ជីវវិទ្យា', icon: Dna },
    ];

    const grades = [
        { value: 'grade-10', label: 'ថ្នាក់ទី១០' },
        { value: 'grade-11', label: 'ថ្នាក់ទី១១' },
        { value: 'grade-12', label: 'ថ្នាក់ទី១២' },
    ];

    const lessons = [
        { lesson: 'limits', title: 'លីមីត' },
        { lesson: 'derivatives', title: 'ដេរីវេ' },
        { lesson: 'integrals', title: 'អាំងតេក្រាល' },
    ];

    const topics = [
        { englishTitle: 'zero-over-zero', title: 'សូន្យលើសូន្យ' },
        { englishTitle: 'infinity-over-infinity', title: 'អនន្តលើអនន្ត' },
        { englishTitle: 'lhopital-rul1', title: 'ច្បាប់ឡូពីតាល់' },
        { englishTitle: 'lhopital-rul2', title: 'ច្បាប់ឡូពីតាល់' },
        { englishTitle: 'lhopital-rul3', title: 'ច្បាប់ឡូពីតាល់' },
    ];

    const currentGradeData = grades.find(g => g.value === currentGrade);
    const currentSubjectData = subjects.find(s => s.subject === currentSubject);
    const currentLessonData = lessons.find(l => l.lesson === currentLesson);

    return (
        <Animated.View style={[tw(`absolute top-12 left-0 right-0 z-10`), { transform: [{ translateY }], opacity }]}>
            <View style={[tw("bg-white/95 border-b border-indigo-500/10 transition-all duration-300")]}>
                <View style={tw("flex gap-1 py-2 px-4")}>
                    {/* Grade and Subject Header */}
                    <View style={tw("flex-row items-center justify-between gap-2 ")}>
                        {/* Subject Navigation */}
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={tw("flex-row flex-1")}
                            contentContainerStyle={tw("gap-2")}
                        >
                            {subjects.map((subject) => {
                                const isActive = currentSubject === subject.subject;
                                return (
                                    <Pressable
                                        key={subject.subject}
                                        style={tw(`flex-row items-center gap-2 px-3 py-2 rounded-full ${isActive
                                            ? 'bg-indigo-50/90 border border-indigo-500/20'
                                            : 'bg-white/80 border border-indigo-500/10'
                                            }`)}
                                    >
                                        <subject.icon size={16} color={isActive ? TAILWIND_COLORS["indigo-600"] : TAILWIND_COLORS["gray-500"]} />
                                        <Text style={tw(`text-xs font-medium ${isActive ? 'text-indigo-600' : 'text-gray-600'}`)}>
                                            {subject.title}
                                        </Text>
                                    </Pressable>
                                );
                            })}
                        </ScrollView>

                        {/* Grade Selector */}
                        <Dropdown
                            data={grades.map(grade => ({ key: grade.value, value: grade.label }))}
                            placeholder={grades[0].label}
                            setSelected={() => { }}
                            position="right-0 top-8"
                        />
                    </View>

                    {/* Lesson and Topic Navigation */}
                    <View style={tw("flex-row items-center justify-between gap-2 ")}>
                        <View style={tw("flex-row items-center gap-3 ")}>
                            {/* Lesson Selector */}
                            <Dropdown
                                data={lessons.map(lesson => ({ key: lesson.lesson, value: lesson.title }))}
                                placeholder={lessons[0].title}
                                setSelected={() => { }}
                                position="left-0 top-8"
                                width='w-32'
                            />
                        </View>

                        {/* Topics Navigation */}
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            style={tw("flex-row")}
                            contentContainerStyle={tw("gap-2")}
                        >
                            {topics.map((topic) => {
                                const isActive = currentTopic === topic.englishTitle;
                                return (
                                    <Pressable
                                        key={topic.englishTitle}
                                        style={tw(`px-3 py-2 rounded-full ${isActive
                                            ? 'bg-indigo-50/90 border border-indigo-500/20'
                                            : 'bg-white/80 border border-indigo-500/10'
                                            }`)}
                                    >
                                        <Text style={tw(`text-xs font-medium whitespace-nowrap ${isActive ? 'text-indigo-600' : 'text-gray-600'}`)}>
                                            {topic.title}
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
