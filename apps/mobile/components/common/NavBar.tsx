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
import { useTheme } from '@/src/providers/ThemeProvider';

const NAV_ITEMS = [
    { name: 'home', icon: Home, href: '/' },
    { name: 'lessons', icon: BookOpen, href: '/docs' },
    { name: 'ai', icon: BotIcon, href: '/ai' },
    { name: 'videos', icon: Video, href: '/videos' },
    { name: 'utilities', icon: Library, href: '/utilities' },
    { name: 'profile', icon: User, href: '/me' },
];

export default function NavBar() {
    const router = useRouter();
    const pathname = usePathname();
    const aiButtonTranslate = useRef(new Animated.Value(24));
    const { theme, resolvedMode } = useTheme();


    const isDocsPath = pathname?.startsWith('/docs');
    const isHomePath = pathname === '/';
    const isAiPath = pathname === '/ai' || pathname === '/(modal)/ai' || pathname === '/ai/chat';
    const isMePath = pathname === '/me';

    useEffect(() => {
        if (isDocsPath) {
            aiButtonTranslate.current.setValue(32);
            Animated.spring(aiButtonTranslate.current, {
                toValue: 0,
                useNativeDriver: true,
                damping: 12,
                stiffness: 150,
            }).start();
        }
    }, [aiButtonTranslate, isDocsPath]);

    // don't show on /ai or /ai/chat
    if (pathname === '/ai' || pathname === '/ai/chat') {
        return null;
    }


    const isActiveTab = (href: string) => {
        if (href === '/') return NAV_ITEMS.some(item => item.href === pathname);
        if (href === '/docs') return isDocsPath;
        if (href === '/ai') return NAV_ITEMS.some(item => item.href === pathname);
        if (href === '/me') return NAV_ITEMS.some(item => item.href === pathname);
        return pathname === href;
    };

    return (
        <View style={tw("absolute bottom-4 left-4 right-4 z-50 bg-transparent")}>
            <View
                style={{
                    borderRadius: 999,
                    backgroundColor: theme.colors.navBackground,
                    borderWidth: 1,
                    borderColor: theme.colors.navBorder,
                    paddingHorizontal: 8,
                    paddingVertical: 10,
                    shadowColor: theme.colors.shadow,
                    shadowOpacity: resolvedMode === 'dark' ? 0.35 : 0.12,
                    shadowRadius: 10,
                    shadowOffset: { width: 0, height: 4 },
                    elevation: 8,
                }}
            >
                <View style={tw("flex-row items-center justify-around")}>
                    {NAV_ITEMS.map((item) => {
                        const Icon = item.icon;
                        const isActive = isActiveTab(item.href);

                        return (
                            <Pressable
                                key={item.name}
                                style={{
                                    width: 44,
                                    height: 44,
                                    borderRadius: 999,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    backgroundColor: isActive ? theme.colors.primary : 'transparent',
                                }}
                                onPress={() => router.push(item.href as Href)}
                            >
                                <Icon
                                    size={20}
                                    color={isActive ? theme.colors.textInverse : TAILWIND_COLORS["gray-500"]}
                                />
                            </Pressable>
                        );
                    })}
                </View>
            </View>

            {isDocsPath ? (
                <Animated.View style={[tw("absolute bottom-16 right-2"), { transform: [{ translateY: aiButtonTranslate }] }]}>
                    <Pressable
                        style={{
                            width: 44,
                            height: 44,
                            borderRadius: 999,
                            alignItems: 'center',
                            justifyContent: 'center',
                            backgroundColor: theme.colors.primary,
                            shadowColor: theme.colors.shadow,
                            shadowOpacity: 0.2,
                            shadowRadius: 8,
                            shadowOffset: { width: 0, height: 4 },
                            elevation: 6,
                        }}
                        onPress={() => router.push('/(modal)/ai' as Href)}
                    >
                        <BotIcon size={20} color={theme.colors.textInverse} />
                    </Pressable>
                </Animated.View>
            ) : null}
        </View>
    );
}