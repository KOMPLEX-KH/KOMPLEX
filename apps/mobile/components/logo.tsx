import { View, Text, Image } from 'react-native';
import { tw } from '@/utils/styles';

export default function Logo() {
    return (
        <View style={tw("flex-row items-center gap-2")}>
            <Image source={require("@/assets/images/logo.png")} style={tw("w-6 h-6")} />
            <View style={tw("flex-row items-center ")}>
                <Text style={tw("text-2xl font-bold text-indigo-600")}>KOM</Text>
                <Text style={tw("text-2xl font-bold text-gray-900 ")}>PLEX</Text>
            </View>
        </View>
    );
}
