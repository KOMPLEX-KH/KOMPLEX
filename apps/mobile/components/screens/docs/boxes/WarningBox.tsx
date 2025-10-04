import { View } from 'react-native';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import { AlertTriangle } from 'lucide-react-native';

export interface WarningBoxProps {
    icon?: React.ComponentType<{ size?: number; color?: string }>;
    content: string | string[] | React.ReactNode;
}

export default function WarningBox({
    content,
    icon: Icon = AlertTriangle
}: WarningBoxProps) {
    return (
        <View style={tw("bg-red-50/80 border rounded-3xl border-red-600 p-4  shadow-lg")}>
            <View style={tw("flex-row items-center gap-3 mb-3")}>
                <Icon size={20} color="#dc2626" />
                <Text style={tw("text-red-600 font-semibold text-lg")}>
                    ប្រុងប្រយត្ន័
                </Text>
            </View>
            {typeof content === 'string' ? (
                <Text style={tw("text-gray-700 leading-relaxed text-base")}>
                    {content}
                </Text>
            ) : Array.isArray(content) ? (
                <View style={tw("space-y-2")}>
                    {content.map((item, index) => (
                        <View key={index} style={tw("flex-row items-start gap-2")}>
                            <Text style={tw("text-red-600 font-bold")}>•</Text>
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
