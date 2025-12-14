import { View, Text, Pressable, Alert } from "react-native";
import { tw } from "@/utils/styles";
import { ChevronLeft, LogOut } from "lucide-react-native";
import { router, usePathname } from "expo-router";
import { signOut } from "firebase/auth";
import { auth } from "@/configs/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    const pathname = usePathname();
    const isMePage = pathname === '/me';

    const handleBackPress = () => {
        if (onBackPress) {
            onBackPress();
        } else {
            router.back();
        }
    };

    const handleLogout = () => {
        Alert.alert(
            "ចេញពីគណនី",
            "តើអ្នកចង់ចេញពីគណនីរបស់អ្នកទេ?",
            [
                {
                    text: "បោះបង់",
                    style: "cancel"
                },
                {
                    text: "ចេញ",
                    style: "destructive",
                    onPress: async () => {
                        try {
                            await signOut(auth);
                            await AsyncStorage.removeItem("user");
                            router.replace('/auth');
                        } catch (error) {
                            console.error("Logout error:", error);
                            Alert.alert("កំហុស", "មានបញ្ហាក្នុងការចេញពីគណនី");
                        }
                    }
                }
            ]
        );
    };

    return (
        <View style={tw("absolute top-0 left-0 right-0 z-50")}>
            <View style={tw("bg-white/95 ")}>
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

                    {/* Logout Button */}
                    {isMePage && (
                        <Pressable
                            style={tw("absolute right-4 p-2 rounded-full bg-red-50/80 ")}
                            onPress={handleLogout}
                        >
                            <LogOut
                                size={24}
                                color="#DC2626"
                            />
                        </Pressable>
                    )}

                </View>
            </View>
        </View>
    );
}
