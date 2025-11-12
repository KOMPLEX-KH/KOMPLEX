import { View, Pressable } from "react-native";
import {
    Home,
    Play,
    Clock,
    TrendingUp,
    History,
    Plus,
} from "lucide-react-native";
import { useRouter, Href } from "expo-router";
import { tw } from "@/utils/styles";
import {Text} from '@/components/common/Text'

const videoSidebar = [
    { href: "/video", label: "ទំព័រដើម", icon: Home, disabled: false },
    { href: "/me/video-history?tab=videoHistory", label: "ប្រវត្តិ", icon: History, disabled: false },
    { href: "/me/create-video", label: "បង្កើតវីដេអូ", icon: Plus, disabled: false },
    { href: "/new-videos", label: "ថ្មីៗ", icon: Clock, disabled: true },
    { href: "/short-videos", label: "វីដេអូខ្លី", icon: Play, disabled: true },
    { href: "/trending-videos", label: "ពេញនិយម", icon: TrendingUp, disabled: true },
] as const;

interface SidebarProps {
    sidebarOpen: boolean;
    onSidebarToggle: () => void;
}

export default function Sidebar({ sidebarOpen, onSidebarToggle }: SidebarProps) {
    const router = useRouter();

    if (!sidebarOpen) {
        return null;
    }

    return (
        <Pressable
            onPress={onSidebarToggle}
            style={tw("absolute inset-0 bg-black/20 z-50")}
        >
            <Pressable
                onPress={(event) => event.stopPropagation()}
                style={tw("absolute top-16 left-4 right-4 rounded-3xl bg-white border border-indigo-50 p-4")}
            >
                <View style={tw("gap-2")}>
                    {videoSidebar.map((item) => {
                        const Icon = item.icon;
                        return (
                            <Pressable
                                key={item.href}
                                disabled={item.disabled}
                                onPress={() => {
                                    if (item.disabled) return;
                                    router.push(item.href as Href);
                                    onSidebarToggle();
                                }}
                                style={tw(
                                    `flex-row items-center gap-3 px-3 py-3 rounded-2xl ${
                                        item.disabled ? "opacity-40" : "bg-transparent"
                                    }`
                                )}
                            >
                                <Icon size={20} color="#4F46E5" />
                                <Text style={tw("text-base text-gray-700 font-kh-medium")}>
                                    {item.label}
                                </Text>
                            </Pressable>
                        );
                    })}
                </View>
            </Pressable>
        </Pressable>
    );
}

