import { getFontWeightName, tw } from '@/utils/styles';
import { Text as RNText, StyleProp, StyleSheet, TextProps, TextStyle } from 'react-native';

function renderMixedText(input: string, props: TextProps, weight: number, isItalic: boolean) {
    const khmerRegex = /[\u1780-\u17FF]/;

    return input.split(/(\s+)/).map((word, i) => {
        const isKhmer = khmerRegex.test(word);
        const fontFamily = isKhmer ? `Noto-Sans-${getFontWeightName(weight)}` : `Poppins-${getFontWeightName(weight)}-${isItalic ? 'Italic' : ''}`;
        const propsWithoutStyle = { ...props, style: undefined };
        const style = props.style as StyleProp<TextStyle>;

        return (
            <RNText key={i} {...propsWithoutStyle} style={[style, { fontFamily }]}>{word}</RNText >
        );
    });
}

function resolveNumericWeight(style: StyleProp<TextStyle>): number {
    const flattened = StyleSheet.flatten(style) as TextStyle | undefined;
    const fw = flattened?.fontWeight;

    if (typeof fw === 'number') return fw;
    if (typeof fw === 'string') {
        if (fw === 'normal') return 400;
        if (fw === 'bold') return 700;
        const parsed = parseInt(fw, 10);
        if (!Number.isNaN(parsed)) return parsed;
    }
    return 500; // default Medium
}

export function Text(props: TextProps & { children: string | React.ReactNode }) {
    const { children, style, ...rest } = props;

    // If children is not a string, use React Native Text directly
    if (typeof children !== 'string') {
        return <RNText style={style} {...rest}>{children}</RNText>;
    }

    // If children is a string, use the mixed text renderer for Khmer font support
    const weight = resolveNumericWeight(style as StyleProp<TextStyle>);
    const flattenedStyle = StyleSheet.flatten(style) as TextStyle | undefined;
    const isItalic = flattenedStyle?.fontStyle === 'italic';
    const renderedText = renderMixedText(children, { ...rest, style }, weight, isItalic);
    return <RNText style={tw("flex-row gap-0")}>{renderedText}</RNText>;
}