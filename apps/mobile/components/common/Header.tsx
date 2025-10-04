import { View, Text, Pressable } from "react-native";
import { tw } from "@/utils/styles";
import { ArrowLeft, ChevronLeft } from "lucide-react-native";
import { BlurView } from "expo-blur";
import { router } from "expo-router";

interface HeaderProps {
    title: string;
    icon?: React.ReactNode;
    showBackButton?: boolean;
    onBackPress?: () => void;
}

export default function Header({
    title,
    icon,
    showBackButton = true,
    onBackPress
}: HeaderProps) {

    const handleBackPress = () => {
        if (onBackPress) {
            onBackPress();
        } else {
            router.back();
        }
    };

    return (
        <View style={tw("absolute top-0 left-0 right-0 z-50")}>
            <View  style={tw("bg-white/95 ")}>
                <View style={tw("flex-row items-center justify-center px-4 py-3 border-b border-indigo-500/10 ")}>
                    {/* Back Button */}
                    {showBackButton && (
                        <Pressable
                            style={tw("absolute left-4 p-2 rounded-full bg-indigo-50/50 border border-indigo-50")}
                            onPress={handleBackPress}
                        >
                            <ChevronLeft
                                size={24}
                                color="#374151"
                            />
                        </Pressable>
                    )}

                    <View style={tw("flex-row items-center justify-center")}>
                        {icon && <View style={tw("mr-2 p-1 rounded-full bg-indigo-50/50 border border-indigo-50")}>{icon}</View>}
                        {/* Title */}
                        <Text
                            style={tw("text-lg font-kh-bold text-gray-700 text-center")}
                            numberOfLines={1}
                            ellipsizeMode="tail"
                        >
                            {title}
                        </Text>
                    </View>

                </View>
            </View>
        </View>
    );
}
