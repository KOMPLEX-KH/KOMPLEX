import { Pressable, View, Modal, ScrollView, Animated, TextInput } from 'react-native';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import { BookOpen, Bot, Camera, Library, MessageSquare, ArrowRight, FileText, Calculator, AlertCircle } from 'lucide-react-native'
import FeatureCard from '@/components/screens/home/FeatureCard';
import { TAILWIND_COLORS } from '@/constants/styles/tailwind-colors';
import { useRouter } from 'expo-router';
import HomeHeader from '@/components/screens/home/HomeHeader';
import NewsCard from '@/components/screens/news/NewsCard';
import NewsSkeleton from '@/components/screens/news/NewsSkeleton';
import ContinueSkeleton from '@/components/screens/home/ContinueSkeleton';
import { feedNewsService, meLastAccessedService, feedSearchNewsService } from '@/services';
import type { News } from '@core-types/content/news';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '@/hooks/useAuth';
import SearchBar from '@/components/common/SearchBar';

const MAIN_FEATURES = {
    lessons: {
        title: 'មេរៀន',
        icon: <BookOpen size={32} color={"white"} />,
        href: '/docs',
        spanRows: 2,
        isImportant: true,
    },
    ai: {
        title: 'តារា AI',
        icon: <Bot size={32} color={"white"} />,
        href: '/ai',
        spanRows: 1,
        isImportant: true,
    },
    videos: {
        title: 'វីដេអូ',
        icon: <Camera size={28} color={"white"} />,
        href: '/videos',
        spanRows: 1,
    },
    forums: {
        title: 'ការពិភាក្សា',
        icon: <MessageSquare size={28} color={"white"} />,
        href: '/forums',
        spanRows: 1,
    },
    utilities: {
        title: 'បន្ថែម',
        icon: <Library size={28} color={"white"} />,
        href: '/utilities',
        spanRows: 1,
    },
}


interface ContinueItem {
    id: number;
    title: string;
    type: 'lesson' | 'video' | 'chat';
    icon: React.ReactNode;
    onPress: () => void;
}

interface QuickAction {
    id: string;
    title: string;
    icon: React.ReactNode;
    onPress: () => void;
}

export default function HomeScreen() {
    const router = useRouter();
    const [newsItems, setNewsItems] = useState<News[]>([]);
    const [loadingNews, setLoadingNews] = useState<boolean>(true);
    const [loadingContinue, setLoadingContinue] = useState<boolean>(true);
    const [showComingSoon, setShowComingSoon] = useState<boolean>(false);
    const [continueItems, setContinueItems] = useState<ContinueItem[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const scrollY = useRef(new Animated.Value(0)).current;
    const { user } = useAuth();
    const loadNews = useCallback(async () => {
        try {
            setLoadingNews(true);
            const response = await feedNewsService.getAllNews();
            setNewsItems(response.data);
        } catch (err) {
            console.error("Error loading news:", err);
        } finally {
            setLoadingNews(false);
        }
    }, []);

    const loadContinueItems = useCallback(async () => {
        try {
            if (!user) {
                return;
            }
            setLoadingContinue(true);
            const response = await meLastAccessedService.getLastAccessed();
            const items: ContinueItem[] = [];

            const lastAccessed = response.data;

            // Continue Lesson
            if (lastAccessed.lastTopic) {
                items.push({
                    type: 'lesson',
                    id: lastAccessed.lastTopic.id,
                    title: lastAccessed.lastTopic.name,
                    icon: <BookOpen size={20} color="#4F46E5" />,
                    onPress: async () => {
                        try {
                            const stored = await AsyncStorage.getItem('curriculum');
                            if (stored) {
                                const curriculumData = JSON.parse(stored);
                                const topicId = lastAccessed.lastTopic.id;

                                // Search through all grades, subjects, lessons to find the topic
                                let foundGrade: any = null;
                                let foundSubject: any = null;
                                let foundLesson: any = null;
                                let foundTopic: any = null;

                                for (const grade of curriculumData) {
                                    for (const subject of grade.subjects || []) {
                                        for (const lesson of subject.lessons || []) {
                                            const topic = lesson.topics?.find((t: any) => t.id === topicId);
                                            if (topic) {
                                                foundGrade = grade;
                                                foundSubject = subject;
                                                foundLesson = lesson;
                                                foundTopic = topic;
                                                break;
                                            }
                                        }
                                        if (foundTopic) break;
                                    }
                                    if (foundTopic) break;
                                }

                                if (foundGrade && foundSubject && foundLesson && foundTopic) {
                                    router.push(`/docs/${foundGrade.id}/${foundSubject.id}/${foundLesson.id}/${foundTopic.id}` as any);
                                } else {
                                    // Fallback to docs page if topic not found
                                    router.push('/docs' as any);
                                }
                            } else {
                                // If no curriculum in storage, navigate to docs page
                                router.push('/docs' as any);
                            }
                        } catch (error) {
                            console.error('Error navigating to topic:', error);
                            router.push('/docs' as any);
                        }
                    },
                });
            }

            // Continue Video
            if (lastAccessed.lastVideo) {
                items.push({
                    type: 'video',
                    id: lastAccessed.lastVideo.id,
                    title: lastAccessed.lastVideo.title,
                    icon: <Camera size={20} color="#4F46E5" />,
                    onPress: () => {
                        router.push(`/videos/${lastAccessed.lastVideo.id}` as any);
                    },
                });
            }

            // Continue Chat
            if (lastAccessed.lastAiTab) {
                items.push({
                    id: lastAccessed.lastAiTab.id,
                    type: 'chat',
                    title: lastAccessed.lastAiTab.name,
                    icon: <Bot size={20} color="#4F46E5" />,
                    onPress: () => {
                        router.push(`/ai/chat?tabId=${lastAccessed.lastAiTab.id}` as any);
                    },
                });
            }

            setContinueItems(items);
        } catch (err) {
            console.error("Error loading last accessed:", err);
            setContinueItems([]);
        } finally {
            setLoadingContinue(false);
        }
    }, [router]);

    // Initial load on mount
    useEffect(() => {
        loadNews();
        loadContinueItems();
    }, [loadNews, loadContinueItems]);

    // Refresh data when screen comes into focus
    useFocusEffect(
        useCallback(() => {
            loadNews();
            loadContinueItems();
        }, [loadNews, loadContinueItems])
    );

    const quickActions: QuickAction[] = [
        {
            id: 'create-forum',
            title: 'បង្កើតវេទិកា',
            icon: <MessageSquare size={24} color="#4F46E5" />,
            onPress: () => router.push('/me/create-forum'),
        },
        {
            id: 'create-video',
            title: 'បង្ហោះវីដេអូ',
            icon: <Camera size={24} color="#4F46E5" />,
            onPress: () => router.push('/me/create-video'),
        },
        {
            id: 'take-notes',
            title: 'កត់ត្រា',
            icon: <FileText size={24} color="#4F46E5" />,
            onPress: () => {
                setShowComingSoon(true);
            },
        },
        {
            id: 'calculator',
            title: 'គណនាពិន្ទុ',
            icon: <Calculator size={24} color="#4F46E5" />,
            onPress: () => {
                setShowComingSoon(true);
            },
        },
    ];

    const handleScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
    );

    // Animation for indigo section to glide over feature cards
    const indigoTranslateY = scrollY.interpolate({
        inputRange: [0, 400],
        outputRange: [0, -200],
        extrapolate: 'clamp',
    });

    // Shadow opacity increases as we scroll
    const shadowOpacity = scrollY.interpolate({
        inputRange: [0, 200, 400],
        outputRange: [0, 0.4, 0.8],
        extrapolate: 'clamp',
    });

    const handleNewsSearch = async () => {
        try {
            setLoadingNews(true);
            const response = await feedSearchNewsService.searchNews(searchQuery);
            setNewsItems(response.data);
        } catch (err) {
            console.error("Error searching news:", err);
        } finally {
            setLoadingNews(false);
        }
    }

    return (
        <>
            <Animated.ScrollView
                style={tw("bg-white flex-1")}
                showsVerticalScrollIndicator={false}
                onScroll={handleScroll}
                scrollEventThrottle={16}
            >
                <View style={tw("px-4 py-6")}>
                    <HomeHeader />

                    {/* Feature Cards Grid */}
                    <View style={tw("flex-row gap-2 mt-4")}>
                        {/* Left Column */}
                        <View style={tw("flex-col flex-1 gap-2")}>
                            {/* Lessons - spans 2 rows */}
                            <View style={tw("flex-1")}>
                                <FeatureCard
                                    title={MAIN_FEATURES.lessons.title}
                                    icon={MAIN_FEATURES.lessons.icon}
                                    href={MAIN_FEATURES.lessons.href as any}
                                    isImportant={MAIN_FEATURES.lessons.isImportant}
                                />
                            </View>
                            {/* AI */}
                            <View style={tw("flex-1")}>
                                <FeatureCard
                                    title={MAIN_FEATURES.ai.title}
                                    icon={MAIN_FEATURES.ai.icon}
                                    href={MAIN_FEATURES.ai.href as any}
                                    isImportant={MAIN_FEATURES.ai.isImportant}
                                />
                            </View>
                        </View>
                        {/* Right Column */}
                        <View style={tw("flex-col flex-1 gap-2")}>
                            {/* Videos */}
                            <View style={tw("flex-1")}>
                                <FeatureCard
                                    title={MAIN_FEATURES.videos.title}
                                    icon={MAIN_FEATURES.videos.icon}
                                    href={MAIN_FEATURES.videos.href as any}
                                />
                            </View>
                            {/* Forums */}
                            <View style={tw("flex-1")}>

                                <FeatureCard
                                    title={MAIN_FEATURES.forums.title}
                                    icon={MAIN_FEATURES.forums.icon}
                                    href={MAIN_FEATURES.forums.href as any}
                                />
                            </View>
                            {/* Utilities */}
                            <View style={tw("flex-1")}>
                                <FeatureCard
                                    title={MAIN_FEATURES.utilities.title}
                                    icon={MAIN_FEATURES.utilities.icon}
                                    onPress={() => setShowComingSoon(true)}
                                />
                            </View>
                        </View>
                    </View>
                </View>

                {/* Quick Actions Section */}


                {/* Bottom Section with Indigo Background */}
                <Animated.View
                    style={[
                        tw("bg-indigo-600 rounded-t-3xl mt-8 h-full"),
                        {
                            transform: [{ translateY: indigoTranslateY }],
                            shadowOpacity: shadowOpacity,
                            shadowRadius: 25,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: -8 },
                            elevation: 15,
                        }
                    ]}
                >
                    <View style={tw("px-4 pt-6 pb-6")}>
                        {/* Continue Progress Section */}
                        <View style={tw(` ${continueItems.length > 0 ? 'mb-8' : 'mb-0'}`)}>
                            {loadingContinue ? (
                                <ContinueSkeleton count={3} />
                            ) : continueItems.length > 0 ? (
                                <View style={tw("gap-3")}>
                                    {continueItems.map((item, index) => (
                                        <Pressable
                                            key={index}
                                            onPress={item.onPress}
                                            style={tw("bg-white rounded-3xl border border-gray-200 p-4 flex-row items-center justify-between shadow-sm")}
                                        >
                                            <View style={tw("flex-row items-center gap-3 flex-1")}>
                                                <View style={tw("p-2 rounded-full bg-indigo-50 border border-indigo-600")}>
                                                    {item.icon}
                                                </View>
                                                <View style={tw("flex-1")}>
                                                    <Text style={tw("text-sm font-kh-medium text-gray-500 mb-1")}>
                                                        បន្ត{item.type === 'lesson' ? 'មេរៀន' : item.type === 'video' ? 'វីដេអូ' : 'សន្ទនា'}
                                                    </Text>
                                                    <Text style={tw("text-base font-kh-bold text-gray-900")} numberOfLines={1}>
                                                        {item.title}
                                                    </Text>
                                                </View>
                                            </View>
                                            <View style={tw("ml-2")}>
                                                <View style={tw("w-10 h-10 rounded-full bg-indigo-600 items-center justify-center")}>
                                                    <ArrowRight size={16} color="white" />
                                                </View>
                                            </View>
                                        </Pressable>
                                    ))}
                                </View>
                            ) : null}
                        </View>

                        <View style={tw(" mb-6 ")}>
                            <Text style={tw("text-xl font-kh-bold text-white mb-4")}>ចូលទៅកាន់</Text>
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={tw("gap-3")}
                            >
                                {quickActions.map((action) => (
                                    <Pressable
                                        key={action.id}
                                        onPress={action.onPress}
                                        style={tw("bg-white rounded-3xl border border-gray-200 px-8 py-4 items-center justify-center gap-2 min-w-[120px] shadow-sm")}
                                    >
                                        <View style={tw("p-3 rounded-full bg-indigo-50 border border-indigo-600")}>
                                            {action.icon}
                                        </View>
                                        <Text style={tw("text-sm font-kh-bold text-gray-900 text-center")} numberOfLines={2}>
                                            {action.title}
                                        </Text>
                                    </Pressable>
                                ))}
                            </ScrollView>
                        </View>

                        {/* News Section */}
                        <View>
                            {/* News Section Header */}
                            <View style={tw("flex-row items-center gap-2 mb-4")}>
                                <Text style={tw("text-xl font-kh-bold text-white")}>ព័ត៌មាន</Text>
                            </View>

                            <TextInput
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                                returnKeyType="search"
                                onSubmitEditing={handleNewsSearch}
                                placeholder="ស្វែងរក"
                                placeholderTextColor={TAILWIND_COLORS["gray-500"]}
                                style={tw("border border-gray-300 rounded-full px-3 py-2 flex-1 font-kh-medium bg-white mb-6")}
                            />

                            <View style={tw("gap-4")}>
                                {loadingNews ? (
                                    <NewsSkeleton count={3} />
                                ) : (
                                    newsItems.map((item) => (
                                        <NewsCard
                                            key={item.id}
                                            id={item.id}
                                            image={item.media && item.media.length > 0 ? item.media[0].url : 'https://via.placeholder.com/400x300'}
                                            title={item.title}
                                            description={item.description}
                                            onPress={() => {
                                                router.push(`/news/${item.id}` as any);
                                            }}
                                        />
                                    ))
                                )}
                            </View>
                        </View>
                    </View>
                </Animated.View>
            </Animated.ScrollView>
            {/* Coming Soon Modal */}
            <Modal
                visible={showComingSoon}
                transparent
                animationType="fade"
                onRequestClose={() => setShowComingSoon(false)}
            >
                <View style={tw("flex-1 items-center justify-center bg-black/40 px-6")}>
                    <View style={tw("w-full max-w-md rounded-3xl bg-white border border-indigo-100 p-6")}>
                        <View style={tw("flex-row items-center justify-between mb-4")}>
                            <View style={tw("flex-row items-center gap-3")}>
                                <View style={tw("p-2 rounded-full bg-indigo-100")}>
                                    <AlertCircle size={24} color={TAILWIND_COLORS["indigo-600"]} />
                                </View>
                                <Text style={tw("text-xl font-kh-bold text-gray-900")}>
                                    សូមរង់ចាំ!
                                </Text>
                            </View>
                        </View>
                        <Text style={tw("text-base font-kh-normal text-gray-600 mb-6")}>
                            មុខងារនេះនឹងមកដល់ឆាប់ៗនេះ។
                        </Text>
                        <Pressable
                            onPress={() => setShowComingSoon(false)}
                            style={tw("bg-indigo-600 rounded-full py-3  items-center")}
                        >
                            <Text style={tw("text-white font-kh-medium text-base")}>
                                យល់ព្រម
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </>
    );
}