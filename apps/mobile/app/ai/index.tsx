import { View } from "react-native";
import { Text } from "@/components/common/Text"
import { useLayoutEffect } from "react"
import { useNavigation } from "@react-navigation/native"
import { HEADER_CONFIG } from "@/constants/header-config";
import { tw } from "@/utils/styles";

export default function AiScreen() {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            ...HEADER_CONFIG,
            headerTitle: 'តារា AI',

        })
    }, [navigation])
    return (
        <View style={tw("flex-1 bg-white px-4")}>
            <Text>តារា AI</Text>
        </View>
    )
}