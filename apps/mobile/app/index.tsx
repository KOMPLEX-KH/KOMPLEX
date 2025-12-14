import { Pressable, View, Modal, ScrollView, Animated } from 'react-native';
import { useEffect, useState, useRef } from 'react';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import { BookOpen, Bot, Camera, Library, MessageSquare, ArrowRight, FileText, Calculator, GraduationCap } from 'lucide-react-native'
import FeatureCard from '@/components/screens/home/FeatureCard';
import { TAILWIND_COLORS } from '@/constants/styles/tailwind-colors';
import { useRouter } from 'expo-router';
import HomeHeader from '@/components/screens/home/HomeHeader';
import NewsCard from '@/components/screens/news/NewsCard';
import NewsSkeleton from '@/components/screens/news/NewsSkeleton';

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

interface NewsItem {
    id: string | number;
    image: string;
    title: string;
    description: string;
}

interface ContinueItem {
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
    const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
    const [loadingNews, setLoadingNews] = useState<boolean>(true);
    const [showComingSoon, setShowComingSoon] = useState<boolean>(false);
    const [continueItems, setContinueItems] = useState<ContinueItem[]>([]);
    const scrollY = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // TODO: Replace with actual news API call
        const loadNews = async () => {
            try {
                setLoadingNews(true);
                // Static data for now
                const staticNews: NewsItem[] = [
                    {
                        id: 1,
                        image: 'https://via.placeholder.com/400x300',
                        title: 'ព័ត៌មានថ្មីៗ',
                        description: 'សូមអានព័ត៌មានថ្មីៗរបស់យើង',
                    },
                    {
                        id: 2,
                        image: 'https://via.placeholder.com/400x300',
                        title: 'ព័ត៌មានសំខាន់',
                        description: 'ព័ត៌មានសំខាន់ៗដែលអ្នកមិនគួរខកខាន',
                    },
                    {
                        id: 3,
                        image: 'https://via.placeholder.com/400x300',
                        title: 'ព័ត៌មានអប់រំ',
                        description: 'ព័ត៌មានអប់រំនិងការអភិវឌ្ឍន៍',
                    },
                ];
                setNewsItems(staticNews);
            } catch (err) {
                console.error("Error loading news:", err);
            } finally {
                setLoadingNews(false);
            }
        };
        loadNews();
    }, []);

    useEffect(() => {
        // TODO: Replace with actual continue progress API calls
        // For now, using static/mock data
        const loadContinueItems = () => {
            const items: ContinueItem[] = [];

            // Continue Lesson
            items.push({
                type: 'lesson',
                title: 'គណិតវិទ្យា - ចំនួនកុំផ្លិច',
                icon: <BookOpen size={20} color="#4F46E5" />,
                onPress: () => {
                    // TODO: Navigate to last lesson
                    router.push('/docs');
                },
            });

            // Continue Video
            items.push({
                type: 'video',
                title: 'ការរៀនគណិតវិទ្យា',
                icon: <Camera size={20} color="#4F46E5" />,
                onPress: () => {
                    // TODO: Navigate to last video
                    router.push('/videos');
                },
            });

            // Continue Chat
            items.push({
                type: 'chat',
                title: 'សន្ទនាអំពីគណិតវិទ្យា',
                icon: <Bot size={20} color="#4F46E5" />,
                onPress: () => {
                    // TODO: Navigate to last chat tab
                    router.push('/ai/chat');
                },
            });

            setContinueItems(items);
        };

        loadContinueItems();
    }, [router]);

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
                // TODO: Navigate to notes
                console.log('Take notes');
            },
        },
        {
            id: 'calculator',
            title: 'គណនាពន្ទុ',
            icon: <Calculator size={24} color="#4F46E5" />,
            onPress: () => {
                // TODO: Navigate to calculator
                console.log('Calculator');
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
                                    href={MAIN_FEATURES.utilities.href as any}
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
                        <View style={tw("mb-8")}>
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
                        </View>

                        <View style={tw(" mb-6 ")}>
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

                            <View style={tw("gap-4")}>
                                {loadingNews ? (
                                    <NewsSkeleton count={3} />
                                ) : (
                                    newsItems.map((item) => (
                                        <NewsCard
                                            key={item.id}
                                            id={item.id}
                                            image={"https://plus.unsplash.com/premium_photo-1677567996070-68fa4181775a?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
                                            title={item.title}
                                            description={item.description}
                                            onPress={() => {
                                                // TODO: Navigate to news detail page
                                                console.log('Navigate to news:', item.id);
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
                                    <Library size={24} color={TAILWIND_COLORS["indigo-600"]} />
                                </View>
                                <Text style={tw("text-xl font-kh-bold text-gray-900")}>
                                    ជំនួយ
                                </Text>
                            </View>
                        </View>
                        <Text style={tw("text-base font-kh-normal text-gray-600 mb-6")}>
                            មុខងារនេះនឹងមកដល់ឆាប់ៗនេះ។ សូមរង់ចាំ!
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