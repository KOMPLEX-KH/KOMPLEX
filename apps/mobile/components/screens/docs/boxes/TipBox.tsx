import { View } from 'react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import { Lightbulb } from 'lucide-react-native';

export interface TipBoxProps {
    title?: string | React.ReactNode;
    icon?: React.ComponentType<{ size?: number; color?: string }>;
    content: string | string[] | React.ReactNode;
}

export default function TipBox({
    title,
    content,
    icon: Icon = Lightbulb
}: TipBoxProps) {
    return (
        <View style={tw("bg-indigo-50/80 border-l-4 border-indigo-600 p-4 rounded-r-3xl shadow-lg")}>
            {title && (
                <View style={tw("flex-row items-center gap-3 mb-3")}>
                    <Icon size={20} color="#4f46e5" />
                    <Text style={tw("text-indigo-600 font-semibold text-lg")}>
                        {title}
                    </Text>
                </View>
            )}
            {typeof content === 'string' ? (
                <Text style={tw("text-gray-700 leading-relaxed text-base")}>
                    {content}
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
