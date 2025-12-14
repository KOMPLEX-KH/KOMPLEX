import { View } from 'react-native';
import { Text } from '@/components/common/Text';
import { tw } from '@/utils/styles';
import { DefinitionBoxProps } from '@core-types/docs/boxProps';

export default function DefinitionBox({ title, content }: DefinitionBoxProps) {
    return (
        <View style={tw("my-6 gap-4")}>
            <Text style={tw("text-black font-bold text-2xl")}>{title}</Text>
            {typeof content === 'string' ? (
                <Text style={tw("text-gray-700 leading-relaxed text-base")}>{content}</Text>
            ): (
                <Text style={tw("text-gray-700 leading-relaxed text-base")}>{content}</Text>
            )}
        </View>
    );
}