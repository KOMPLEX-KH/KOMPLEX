import { ScrollView } from 'react-native';
import { tw } from '@/utils/styles';
import Logo from '@/components/logo';
import { Text } from '@/components/common/Text';

export default function HomeScreen() {
    return (
        <ScrollView contentContainerStyle={tw("bg-white h-full p-2  gap-2 ")}>
            <Logo />
            <Text style={tw(" text-xl text-red-500 font-extrabold italic")}>សួស្ដីរក្សា Hello World</Text>
            <Text style={tw(" text-xl text-red-500 font-extrabold italic")}>Hello World</Text>

        </ScrollView>
    );
}



