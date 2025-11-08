import { View } from 'react-native';
import MathView from 'react-native-katex';
import { tw } from '@/utils/styles';

interface MathRendererProps {
    math: string;
    inline?: boolean;
}

export default function MathRenderer({ math, inline = false }: MathRendererProps) {
    // react-native-katex uses 'expression' prop and 'displayMode' prop directly
    return (
        <View style={inline ? tw("inline") : tw("my-2")}>
            <MathView
                expression={math}
                displayMode={!inline}
                throwOnError={false}
                errorColor="#cc0000"
                style={inline ? { minHeight: 24 } : { minHeight: 48 }}
            />
        </View>
    );
}

