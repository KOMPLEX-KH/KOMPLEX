import { View } from "react-native";
import { Text } from "@components/common/Text"
import { useNavigation } from "@react-navigation/native"
import { useLayoutEffect } from "react"
import { HEADER_CONFIG } from "@/constants/header-config"
import { tw } from "@/utils/styles"

export default function BlogScreen() {
    const navigation = useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            ...HEADER_CONFIG,
            headerTitle: 'អត្ថបទ',

        })
    }, [navigation])
    return (
        <View style={tw("flex-1 bg-white px-4")}>
            <Text>Blog</Text>
        </View>
    )
}