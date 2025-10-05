import { View } from 'react-native';
import { Text } from '@/components/common/Text';
import { toKhmerNumbering } from '@core-utils/khmerNumber';
import { tw } from '@/utils/styles';

export default function BulletList({ content }: { content: string[] }) {
    return (
        <View style={tw("ml-2")}>
            {content.map((item, index) => (
                <View key={index} style={tw("flex-row items-start mb-1")}>
                    <Text style={tw("font-bold text-lg mr-2")}>{toKhmerNumbering(index + 1)}</Text>
                    <Text style={tw("text-gray-700 leading-relaxed text-base flex-1")}>{item}</Text>
                </View>
            ))}
        </View>
    );
}