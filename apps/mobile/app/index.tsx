import { Image, Pressable, View, Modal, ScrollView, Animated, TextInput } from 'react-native';
import { useEffect, useState, useRef, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import { BookOpen, Bot, Camera, Library, MessageSquare, ArrowRight, FileText, Calculator, AlertCircle, User, Play, Edit, Space } from 'lucide-react-native'
import FeatureCard from '@/components/screens/home/featureCard';
import { TAILWIND_COLORS } from '@/constants/styles/tailwind-colors';
import { useRouter } from 'expo-router';
import HomeHeader from '@/components/screens/home/HomeHeader';
import NewsCard from '@/components/screens/news/NewsCard';
import NewsSkeleton from '@/components/screens/news/NewsSkeleton';
import ContinueSkeleton from '@/components/screens/home/ContinueSkeleton';
import { feedNewsService, meLastAccessedService, feedSearchNewsService} from '@/services';
import type { News } from '@core-types/api-types/news';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAuth } from '@/hooks/useAuth';
import SearchBar from '@/components/common/SearchBar';
import { useTheme } from '@/src/providers/ThemeProvider';
import Logo from '@/components/common/Logo';
import { LinearGradient } from 'expo-linear-gradient';
import { cardShadow } from '@/utils/shadow';
import HomeCtaCard from '@/components/screens/home/ContinueLessonCard';
import Divider from '@/components/common/Divider';
import Spacer from '@/components/common/Spacer';

interface ContinueItem {
    id: number;
    title: string;
    type: "lesson" | "video" | "chat";
    icon: React.ReactNode;
    onPress: () => void;
}

interface FeatureItem {
    id: string;
    title: string;
    icon: React.ReactNode;
    onPress: () => void;
}

interface QuickAction {
    id: string;
    title: string;
    icon: React.ReactNode;
    onPress: () => void;
}

// const FALLBACK_NEWS_IMAGE = "https://via.placeholder.com/800x500";

// const SECTION_TITLE_STYLE = { fontSize: 20, fontWeight: "700" as const };

// const getContinueLabel = (type: "lesson" | "video" | "chat") => {
//     if (type === "lesson") return "មេរៀនចុងក្រោយ";
//     if (type === "video") return "វីដេអូចុងក្រោយ";
//     return "ការសន្ទនា AI ចុងក្រោយ";
// };

// const formatNewsTime = (input: string | null) => {
//     if (!input) return "ថ្មីៗ";

//     const date = new Date(input);
//     if (Number.isNaN(date.getTime())) return "ថ្មីៗ";

//     const now = Date.now();
//     const diff = Math.max(0, now - date.getTime());
//     const minute = 60_000;
//     const hour = 60 * minute;
//     const day = 24 * hour;

//     if (diff < hour) return `${Math.max(1, Math.floor(diff / minute))} នាទីមុន`;
//     if (diff < day) return `${Math.floor(diff / hour)} ម៉ោងមុន`;
//     return `${Math.floor(diff / day)} ថ្ងៃមុន`;
// };

export default function HomeScreen() {
    const router = useRouter();
    const { theme, resolvedMode } = useTheme();

    const [newsItems, setNewsItems] = useState<News[]>([]);
    const [loadingNews, setLoadingNews] = useState<boolean>(true);
    const [loadingContinue, setLoadingContinue] = useState<boolean>(true);
    const [showComingSoon, setShowComingSoon] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [continueItems, setContinueItems] = useState<ContinueItem[]>([]);
    const scrollY = useRef(new Animated.Value(0)).current;
    const { user } = useAuth();
    const loadNews = useCallback(async () => {
        try {
            setLoadingNews(true);
            const response = await feedNewsService.getAllNews();
            setNewsItems(response.data);
        } catch (err) {
            console.error("Error loading news:a", err);
        } finally {
            setLoadingNews(false);
        }
    }, []);

    const loadContinueItems = useCallback(async () => {
        try {
            if (!user) {
                setContinueItems([]);
                return;
            }

            setLoadingContinue(true);
            const response = await meLastAccessedService.getLastAccessed();
            const lastAccessed = response.data;
            const items: ContinueItem[] = [];

            // Continue Lesson
            if (lastAccessed.lastTopic) {
                items.push({
                    id: lastAccessed.lastTopic.id,
                    type: "lesson",
                    title: lastAccessed.lastTopic.name,
                    icon: <BookOpen size={20} color="#4F46E5" />,
                    onPress: async () => {
                        try {
                            const storedCurriculum = await AsyncStorage.getItem("curriculum");
                            if (!storedCurriculum) {
                                router.push("/docs" as any);
                                return;
                            }

                            const curriculumData = JSON.parse(storedCurriculum);
                            const topicId = lastAccessed.lastTopic.id;

                            // Search through all grades, subjects, lessons to find the topic
                            let foundGrade: any = null;
                            let foundSubject: any = null;
                            let foundLesson: any = null;
                            let foundTopic: any = null;

                            for (const grade of curriculumData) {
                                for (const subject of grade.subjects || []) {
                                    for (const lesson of subject.lessons || []) {
                                        const topic = lesson.topics?.find((item: any) => item.id === topicId);
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
                                router.push('/docs' as any);
                            }
                        } catch (error) {
                            console.error("Error resuming lesson:", error);
                            router.push("/docs" as any);
                        }
                    },
                });
                
            }

            // Continue Video
            if (lastAccessed.lastVideo) {
                items.push({
                    id: lastAccessed.lastVideo.id,
                    type: "video",
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
                    type: "chat",
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
    }, [router, user]);

    // Initial load on mount
    useEffect(() => {
        loadNews();
        loadContinueItems();
    }, [loadNews, loadContinueItems]);

    useFocusEffect(
        useCallback(() => {
            loadNews();
            loadContinueItems();
        }, [loadNews, loadContinueItems])
    );

    const resumeLessonItem = continueItems.find((item) => item.type === "lesson");

    const features: FeatureItem[] = [
        {
            id: "lessons",
            title: "មេរៀន",
            icon: <BookOpen size={24} color={theme.colors.primary} />,
            onPress: () => router.push("/docs" as any),
        },
        {
            id: "ai",
            title: "AI Tutor",
            icon: <Bot size={24} color={theme.colors.primary} />,
            onPress: () => router.push("/ai" as any),
        },
        {
            id: "videos",
            title: "វីដេអូ",
            icon: <Camera size={24} color={theme.colors.primary} />,
            onPress: () => router.push("/videos" as any),
        },
        {
            id: "forums",
            title: "វេទិកា",
            icon: <MessageSquare size={24} color={theme.colors.primary} />,
            onPress: () => router.push("/forums" as any),
        },
    ];

    const MENU_FEATURE = [
        {
            id: "lessons",
            title: "មេរៀន",
            icon: <BookOpen size={26} color="#6D5EF6" />,
            href: '/docs',
            onPress: () => router.push("/docs" as any),
        },
        {
            id: "videos",
            title: "វីដេអូ",
            icon: <Camera size={26} color="#6D5EF6" />,
            href: '/videos',
            onPress: () => router.push("/videos" as any),
        },
        {
            id: "exercises",
            title: "សំហាត់",
            icon: <Edit size={26} color="#6D5EF6" />,
            href: '/me/exercises',
            onPress: () => router.push("/me/exercises" as any),
        },
        {
            id: "ai",
            title: "តារា AI",
            icon: <Bot size={26} color="#6D5EF6" />,
            href: '/ai',
            onPress: () => router.push("/ai" as any),
        },
        {
            id: "forums",
            title: "ការពិភាក្សា",
            icon: <MessageSquare size={26} color="#6D5EF6" />,
            href: '/forums',   
            onPress: () => router.push("/forums" as any),
        },
        {
            id: "library",
            title: "បណ្ណាល័យ",
            icon: <Library size={26} color="#6D5EF6" />,
            onPress: () => setShowComingSoon(true),
        },
    ];

    const quickActions: QuickAction[] = [
        {
            id: "create-forum",
            title: "បង្កើតវេទិកា",
            icon: <MessageSquare size={18} color={theme.colors.primary} />,
            onPress: () => router.push("/me/create-forum" as any),
        },
        {
            id: "upload-video",
            title: "បង្ហោះវីដេអូ",
            icon: <Camera size={18} color={theme.colors.primary} />,
            onPress: () => router.push("/me/create-video" as any),
        },
        {
            id: "notes",
            title: "កំណត់ត្រា",
            icon: <FileText size={18} color={theme.colors.primary} />,
            onPress: () => setShowComingSoon(true),
        },
        {
            id: "calculator",
            title: "គណនាពិន្ទុ",
            icon: <Calculator size={18} color={theme.colors.primary} />,
            onPress: () => setShowComingSoon(true),
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
            <ScrollView
                style={{ backgroundColor: theme.colors.background, flex: 1 }}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{ paddingBottom: theme.spacing.x3 }}
            >
                <LinearGradient
                    colors={[theme.colors.primary, theme.colors.secondary]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                    style={{
                        paddingHorizontal: theme.spacing.x2,
                        paddingTop: theme.spacing.x2,
                        paddingBottom: theme.spacing.x3,
                        borderBottomLeftRadius: theme.radius.xl,
                        borderBottomRightRadius: theme.radius.xl,
                    }}
                >
                    <HomeHeader />

                    <View style={{ marginTop: theme.spacing.x2 }}>
                        <Text
                            style={{
                                color: theme.colors.textInverse,
                                fontSize: 24,
                                fontWeight: "700",
                            }}
                        >
                            សួស្តី, {user?.name || "សិស្សជាទីស្រឡាញ់"}!
                        </Text>
                        <Text
                            style={{
                                color: "rgba(255,255,255,0.9)",
                                marginTop: 4,
                                fontSize: 14,
                                fontWeight: "500",
                            }}
                        >
                            តោះបន្តការសិក្សារបស់អ្នកថ្ងៃនេះ
                        </Text>
                    </View>
                
                    {/* <View style={{ paddingHorizontal: theme.spacing.x2, paddingBottom: theme.spacing.x2 }}>
                        <Divider color={theme.colors.border} opacity={0.7} />
                    </View> */}

                    <Spacer size={30} />

                    <View style={{ paddingHorizontal: theme.spacing.x2 }}>
                        <HomeCtaCard 
                        title={resumeLessonItem?.title || "អ្នកមិនទាន់បានចូលមើលមេរៀននៅឡើយទេ"}
                        buttonLabel={resumeLessonItem ? "បន្តរៀន" : "ចាប់ផ្តើមមេរៀន"}
                        hasLastLesson={Boolean(resumeLessonItem)}
                        onPress={resumeLessonItem ? resumeLessonItem.onPress : () => router.push("/docs" as any)}
                        />
                    </View>

                    {/* Features Grid */}
                    <View style={{ paddingHorizontal: theme.spacing.x2, paddingTop: theme.spacing.x3 }}>
                        <View
                            style={tw("flex-row flex-wrap justify-between mt-6")}
                        >
                            {MENU_FEATURE.map((feature) => (
                                <View key={feature.id} style={{ width: "31%", marginBottom: 12 }}>
                                    <FeatureCard title={feature.title} icon={feature.icon} onPress={feature.onPress} />
                                </View>
                            ))}
                        </View>
                    </View>
                

                    <View style={{ paddingHorizontal: theme.spacing.x2, paddingBottom: theme.spacing.x3 }}>
                        <Divider color={theme.colors.border} opacity={0.7} thickness={3} />
                    </View>

                    <Animated.View
                        style={[
                            {
                                transform: [{ translateY: indigoTranslateY }],
                                shadowOpacity: shadowOpacity,
                                shadowRadius: 25,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 8 },
                                elevation: 15,
                            }
                        ]}   
                    >
                        <View style={tw(" mb-1 ")}>
                                {/* <Text style={tw("text-xl font-kh-bold text-white mb-4")}>ចូលទៅកាន់</Text> */}
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
                    </Animated.View>
                </LinearGradient>
            


                
                    <View>
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
                     
            </ScrollView>
       </> 
    );
}