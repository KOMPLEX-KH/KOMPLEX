import { View } from 'react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';

export interface DefinitionBoxProps {
    title: string | React.ReactNode;
    content: string | string[] | React.ReactNode;
}

export default function DefinitionBox({ title, content }: DefinitionBoxProps) {
    return (
        <View style={tw(" gap-4")}>
            <Text style={tw("text-black font-bold text-2xl")}>{title}</Text>
            {typeof content === 'string' ? (
                <Text style={tw("text-gray-700 leading-relaxed text-base")}>{content}</Text>
            ) : Array.isArray(content) ? (
                <View style={tw("gap-2")}>
                    {content.map((item, index) => (
                        <View key={index} style={tw("flex-row items-start gap-2")}>
                            <Text style={tw("text-indigo-600 font-bold")}>•</Text>
                            <Text style={tw("text-gray-700 leading-relaxed text-base flex-1")}>{item}</Text>
                        </View>
                    ))}
                </View>
            ) : (
                <Text style={tw("text-gray-700 leading-relaxed text-base")}>{content}</Text>
            )}
        </View>
    )
}