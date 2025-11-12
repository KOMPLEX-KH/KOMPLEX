import { tw } from "@/utils/styles";
import { Pressable, View } from "react-native";
import { Text } from '@/components/common/Text'
import { Href, useRouter } from "expo-router";

interface props {
    title: string;
    icon: React.ReactNode;
    // ! to change
    href: Href;
}

export default function FeatureCard({ title, icon, href }: props) {
    const router = useRouter();
    return (
        <Pressable style={tw("rounded-3xl bg-indigo-50 border border-indigo-600 shadow-md px-5 py-5 flex items-center justify-between gap-1")} onPress={() => router.push(href)}>
            <View style={tw("p-2 rounded-full bg-indigo-600 text-white")}>{icon}</View>
            <Text style={tw("text-lg font-medium ")}>{title}</Text>
        </Pressable>
    );
}