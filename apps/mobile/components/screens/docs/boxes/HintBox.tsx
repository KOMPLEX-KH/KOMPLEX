import { View } from 'react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import { Lightbulb } from 'lucide-react-native';

export interface HintBoxProps {
    content: string | string[] | React.ReactNode;
}

export default function HintBox({ content }: HintBoxProps) {
    return (
        <View style={tw("bg-indigo-50/80 border border-indigo-600 p-4  rounded-3xl shadow-lg")}>
            <View style={tw("flex-row items-center gap-3 mb-3")}>
                <Lightbulb size={20} color="#4f46e5" />
                <Text style={tw("text-indigo-600 font-semibold text-lg")}>
                    សំគាល់
                </Text>
            </View>

            {typeof content === 'string' ? (
                <Text style={tw("text-gray-700 leading-relaxed text-base")}>
                    {content.replace(/\n/g, '\n')}
                </Text>
            ) : Array.isArray(content) ? (
                <View style={tw("space-y-2")}>
                    {content.map((item, index) => (
                        <View key={index} style={tw("flex-row items-start gap-2")}>
                            <Text style={tw("text-indigo-600 font-bold")}>•</Text>
                            <Text style={tw("text-gray-700 leading-relaxed text-base flex-1")}>{item}</Text>
                        </View>
                    ))}
                </View>
            ) : (
                <Text style={tw("text-gray-700 leading-relaxed text-base")}>
                    {content}
                </Text>
            )}
        </View>
    );
}
