import { View, Pressable, ScrollView } from 'react-native';
import { usePathname, useRouter, Href } from 'expo-router';
import {
    LayoutDashboard,
    BookOpen,
    MessageSquare,
    Video,
    Pencil,
    User
} from 'lucide-react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';

const navItems = [
    {
        label: 'ផ្ទាំងគ្រប់គ្រង',
        href: '/me',
        icon: LayoutDashboard
    },
    {
        label: 'ពិភាក្សា',
        href: '/me/forums',
        icon: MessageSquare
    },
    {
        label: 'វីដេអូ',
        href: '/me/videos',
        icon: Video
    },
    {
        label: 'លំហាត់',
        href: '/me/exercises',
        icon: Pencil
    },
    {
        label: 'ប្រវត្តិរូប',
        href: '/me/profile',
        icon: User
    },
];

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    const isActive = (href: string) => {
        if (href === '/me') {
            return pathname === '/me';
        }
        return pathname?.startsWith(href);
    };

    return (
        <View style={tw("w-full bg-white border-b border-gray-200")}>
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={tw("px-4 py-2 gap-2")}
            >
                {navItems.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);

                    return (
                        <Pressable
                            key={item.href}
                            onPress={() => router.push(item.href as Href)}
                            style={tw(
                                `flex-row items-center gap-2 px-4 py-2 rounded-3xl ${active
                                    ? 'bg-indigo-50 border border-indigo-500'
                                    : 'bg-gray-100 border border-transparent'
                                }`
                            )}
                        >
                            <View
                                style={tw(
                                    `p-2 rounded-3xl ${active
                                        ? 'bg-indigo-100'
                                        : 'bg-gray-200'
                                    }`
                                )}
                            >
                                <Icon
                                    size={16}
                                    color={active ? '#4F46E5' : '#6B7280'}
                                />
                            </View>
                            <Text
                                style={tw(
                                    `text-sm font-kh-medium ${active ? 'text-indigo-600' : 'text-gray-700'
                                    }`
                                )}
                            >
                                {item.label}
                            </Text>
                        </Pressable>
                    );
                })}
            </ScrollView>
        </View>
    );
}
