import { View } from 'react-native';
import { Text } from '@/components/common/Text';
import { tw } from '@/utils/styles';
import { Lightbulb } from 'lucide-react-native';
import { TipBoxProps } from '@core-types/docs/boxProps';

export default function TipBox({
    title,
    content,
    icon: Icon = Lightbulb
}: TipBoxProps) {
    return (
        <View style={tw("bg-indigo-50 border-l-4 border-indigo-600 p-4 my-6 rounded-r-3xl")}>
            {title && (
                <View style={tw("flex-row items-center gap-3 mb-3")}>
                    <Icon size={20} color="#4f46e5" />
                    <Text style={tw("text-indigo-600 font-semibold text-lg")}>
                        {title}
                    </Text>
                </View>
            )}
            {typeof content === 'string' ? (
                <Text style={tw("text-gray-700 leading-relaxed text-base")}>{content}</Text>
            ) : (
                content
            )}
        </View>
    );
}