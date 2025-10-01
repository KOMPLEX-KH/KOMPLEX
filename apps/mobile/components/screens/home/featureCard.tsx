import { tw } from "@/utils/styles";
import { Pressable, View } from "react-native";
import { Text } from '@components/common/Text'
import { ExternalPathString, RelativePathString, useRouter } from "expo-router";

interface props {
    title: string;
    icon: React.ReactNode;
    // ! to change
    link: RelativePathString | ExternalPathString | "/" | `/?${string}` | `/#${string}` | "/_sitemap" | `/_sitemap?${string}` | `/_sitemap#${string}` | "/ai" | `/ai?${string}` | `/ai#${string}`;
}

export default function FeatureCard({ title, icon, link }: props) {
    const router = useRouter();
    return (
        <Pressable style={tw("rounded-3xl bg-white shadow px-4 py-6 flex items-center justify-between gap-4")} onPress={() => router.push(link)}>
            <View style={tw("p-3 rounded-full bg-indigo-600 text-white")}>{icon}</View>
            <Text style={tw("text-lg font-bold ")}>{title}</Text>
        </Pressable>
    );
}