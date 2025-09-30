import { View, Text } from 'react-native';
import { tw } from '@/utils/styles';

export default function HomeScreen() {
    return (
        <View style={tw("bg-white h-full p-2 ")}>
            <Text style={tw(" text-3xl font-bold")}>Hello World</Text>
        </View>
    );
}

