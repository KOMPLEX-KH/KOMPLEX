import { Pressable, View } from "react-native";
import { ChevronLeft } from "lucide-react-native";
import { tw } from "@/utils/styles";
import { useRouter, Href } from "expo-router";

interface BackButtonProps {
    href?: Href;
    onPress?: () => void;
}

export const BackButton = ({ href, onPress }: BackButtonProps) => {
    const router = useRouter();

    const handlePress = () => {
        if (onPress) {
            onPress();
            return;
        }

        if (href) {
            router.push(href);
            return;
        }

        router.back();
    };

    return (
        <View style={tw("mb-3 z-50")}>
            <Pressable
                onPress={handlePress}
                style={tw("flex-row items-center gap-2 rounded-full")}
                accessibilityRole="button"
                accessibilityLabel="Go back"
            >
                <View style={tw("p-1 rounded-full bg-white shadow-md")}>
                    <ChevronLeft size={24} color="#4F46E5" />
                </View>
            </Pressable>
        </View>
    );
};