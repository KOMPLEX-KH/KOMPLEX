import { Text } from "@/components/common/Text";
import { tw } from "@/utils/styles";
import { View } from "react-native";

export default function LessonsScreen() {
    return (
        <View style={tw("flex-1 bg-white")}>
            <Text>Lessons</Text>
        </View>
    )
}