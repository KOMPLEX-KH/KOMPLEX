import { View, Pressable } from 'react-native';
import { tw } from '@/utils/styles';
import { useRouter, usePathname, Href } from 'expo-router';
import {
    Home,
    BookOpen,
    Edit,
    Bot,
    MessageSquare,
    User,
    Search,
    BotIcon,
    Video,
    Clapperboard
} from 'lucide-react-native';
import { TAILWIND_COLORS } from '@/constants/styles/tailwind-colors';
import { BlurView } from 'expo-blur';

const NAV_ITEMS = [
    { name: 'home', icon: Home, href: '/' },
    { name: 'lessons', icon: BookOpen, href: '/docs' },
    { name: 'exercises', icon: Edit, href: '/exercises' },
    // { name: 'search', icon: Search, href: '/search' },
    { name: 'community', icon: MessageSquare, href: '/forums' },
    { name: 'profile2', icon: Clapperboard, href: '/profile' },
    { name: 'profile', icon: User, href: '/profile' },
];

export default function NavBar() {
    const router = useRouter();
    const pathname = usePathname();


    return (
        <View style={tw("absolute bottom-4 left-4 right-4 z-50 flex-row items-center gap-2 bg-transparent")}>
            <BlurView intensity={5} style={tw("rounded-full bg-indigo-50/40  flex-1  border border-indigo-50 px-1 py-2 overflow-hidden")}>
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
            <BlurView intensity={5} style={tw("rounded-full bg-indigo-50/50  border border-indigo-50 p-2 overflow-hidden")}>
                <Pressable
                    style={tw(`p-2 rounded-full ${pathname === '/ai' ? 'bg-indigo-600' : 'bg-transparent'}`)}
                    onPress={() => router.push('/ai' as Href)}
                >
                    <BotIcon
                        size={20}
                        color={pathname === '/ai' ? "white" : `${TAILWIND_COLORS["gray-500"]}`}
                    />
                </Pressable>
            </BlurView>
        </View>
    );
}
