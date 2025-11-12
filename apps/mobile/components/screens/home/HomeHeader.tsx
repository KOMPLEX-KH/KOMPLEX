import { LogIn, User } from "lucide-react-native";
import Logo from "@/components/common/Logo";
import { tw } from "@/utils/styles";
import { View, Pressable, Text, Image } from "react-native";
import { useRouter } from "expo-router";
import { useAuth } from "@/hooks/useAuth";


export default function HomeHeader() {
    const router = useRouter();
    const { user } = useAuth();

    return (
        <View style={tw("flex-row items-center justify-between mb-6")}>
            <Logo />
            <Pressable style={tw("rounded-full bg-indigo-600 p-2")} onPress={() => user ? router.push('/me') : router.push('/auth')}>
                {user && user.profileImage ?
                    <View style={tw("w-6 h-6 rounded-full bg-indigo-600 items-center justify-center")}>
                        <Image source={{ uri: user.profileImage }} style={tw("w-full h-full rounded-full")} />
                    </View>
                    : user ? <Text style={tw("text-white font-bold")}>{user.firstName.charAt(0)}</Text> : <LogIn size={20} color="white" />}
            </Pressable>
        </View>
    );
}