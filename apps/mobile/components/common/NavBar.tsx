import { View, Pressable, Animated } from 'react-native';
import { tw } from '@/utils/styles';
import { useRouter, usePathname, Href } from 'expo-router';
import {
    Home,
    BookOpen,
    MessageSquare,
    BotIcon,
    Video,
    Library,
    User,
} from 'lucide-react-native';
import { TAILWIND_COLORS } from '@/constants/styles/tailwind-colors';
import { BlurView } from 'expo-blur';
import { useEffect, useRef } from 'react';

const NAV_ITEMS = [
    { name: 'home', icon: Home, href: '/' },
    { name: 'lessons', icon: BookOpen, href: '/docs' },
    // { name: 'exercises', icon: Edit, href: '/exercises' },
    { name: 'videos', icon: Video, href: '/videos' },
    { name: 'community', icon: MessageSquare, href: '/forums' },
    { name: 'utilities', icon: Library, href: '/utilities' },
    { name: 'profile', icon: User, href: '/me' },
];

export default function NavBar() {
    const router = useRouter();
    const pathname = usePathname();
    const isDocsPath = pathname?.startsWith('/docs');
    const aiButtonTranslate = useRef(new Animated.Value(24)).current;

    useEffect(() => {
        if (isDocsPath) {
            aiButtonTranslate.setValue(32);
            Animated.spring(aiButtonTranslate, {
                toValue: 0,
                useNativeDriver: true,
                damping: 12,
                stiffness: 150,
            }).start();
        }
    }, [aiButtonTranslate, isDocsPath]);


    return (
        <View style={tw("absolute bottom-4 left-4 right-4 z-50 bg-transparent")}>
            <BlurView intensity={5} style={tw("rounded-full bg-indigo-50/40  border border-indigo-50 px-1 py-2 overflow-hidden w-full")}>
                <View style={tw("flex-row items-center justify-around")}>
                    {NAV_ITEMS.map((item) => {
                        const Icon = item.icon;
                        const isActive = pathname === item.href;

                        return (
                            <Pressable
                                key={item.name}
                                style={tw(`p-2 rounded-full ${isActive ? 'bg-indigo-600' : 'bg-transparent'}`)}
                                onPress={() => router.push(item.href as Href)}
                            >
                                <Icon
                                    size={20}
                                    color={isActive ? "white" : `${TAILWIND_COLORS["gray-500"]}`}
                                />
                            </Pressable>
                        );
                    })}
                </View>
            </BlurView>
            {
                isDocsPath ? (
                    <Animated.View style={[tw("absolute bottom-16 right-2"), { transform: [{ translateY: aiButtonTranslate }] }]}>
                        < BlurView intensity={5} style={tw("rounded-full bg-indigo-50/50 border border-indigo-50 p-2 shadow-lg shadow-indigo-500 overflow-hidden")}>
                            <Pressable
                                style={tw(`p-2 rounded-full bg-indigo-600`)}
                                onPress={() => router.push('/(modal)/ai' as Href)}
                            >
                                <BotIcon
                                    size={20}
                                    color="white"
                                />
                            </Pressable>
                        </ BlurView>
                    </Animated.View>) : null
            }
        </View >
    );
}