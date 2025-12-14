import { View } from 'react-native';
import { Text } from '@/components/common/Text';
import { tw } from '@/utils/styles';
import { Lightbulb } from 'lucide-react-native';
import { HintBoxProps } from "@core-types/docs/boxProps";

export default function HintBox({ content, title = "សំគាល់" }: HintBoxProps) {
    return (
        <View style={tw("bg-indigo-50 border border-indigo-600 p-4 my-6 rounded-3xl")}>
            <View style={tw("flex-row items-center gap-3 mb-3")}>
                <Lightbulb size={20} color="#4f46e5" />
                <Text style={tw("text-indigo-600 font-semibold text-lg")}>{title}</Text>
            </View>

            {typeof content === 'string' ? (
                <Text style={tw("text-gray-700")}>{content}</Text>
            ) : (
                <View>{content}</View>
            )}
        </View>
    );
}
