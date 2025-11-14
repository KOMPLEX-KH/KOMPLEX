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
                style={tw("rounded-full bg-indigo-600 p-2")}
                onPress={handlePress}
                onLongPress={handleLongPress}
            >
                {user && user.profileImage ?
                    <View style={tw("w-6 h-6 rounded-full bg-indigo-600 items-center justify-center")}>
                        <Image source={{ uri: user.profileImage }} style={tw("w-full h-full rounded-full")} />
                    </View>
                    : user ? <Text style={tw("text-white font-bold")}>{user.firstName.charAt(0)}</Text> : <LogIn size={20} color="white" />}
            </Pressable>
        </View>
    );
}