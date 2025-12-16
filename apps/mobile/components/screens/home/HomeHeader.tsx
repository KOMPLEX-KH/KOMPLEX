import { LogIn } from "lucide-react-native";
import Logo from "@/components/common/Logo";
import { tw } from "@/utils/styles";
import { View, Pressable, Text, Image, Alert } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/hooks/useAuth";
import { signOut } from "firebase/auth";
import { auth } from "@/configs/firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function HomeHeader() {
    const router = useRouter();
    const { user } = useAuth();

    const handlePress = () => {
        if (user) {
            router.push('/me');
        } else {
            router.push('/auth');
        }
    };

    const handleLongPress = () => {
        if (user) {
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
        }
    };

    return (
        <View style={tw("flex-row items-center justify-between mb-6")}>
            <Logo />
            <Pressable
                style={tw(`flex-row items-center justify-center rounded-full border-2 border-indigo-600 overflow-hidden  ${user ? 'w-8 h-8' : 'w-8 h-8'}`)}
                onPress={handlePress}
                onLongPress={handleLongPress}
            >
                {user ? user.profileImage ? <Image source={{ uri: user.profileImage }} style={tw("w-8 h-8 rounded-full")} /> : <Text style={tw("text-white font-bold")}>{user.firstName?.charAt(0).toUpperCase() || user.username?.charAt(0).toUpperCase() || user.email?.charAt(0).toUpperCase() || 'U'}</Text> : <LogIn size={20} color="white" />}
            </Pressable>
        </View>
    );
}