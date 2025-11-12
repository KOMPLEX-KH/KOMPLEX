import { getFontWeightName, tw } from '@/utils/styles';
import { Text as RNText, StyleProp, StyleSheet, TextProps, TextStyle } from 'react-native';

function renderMixedText(input: string, props: TextProps, weight: number, isItalic: boolean) {
    // Expanded Khmer Unicode range - includes all Khmer characters, combining marks, and symbols
    // \u1780-\u17FF: Khmer (basic characters, vowels, diacritics, independent vowels)
    // \u19E0-\u19FF: Khmer Symbols
    const khmerRegex = /[\u1780-\u17FF\u19E0-\u19FF]/;

    // Check if entire string contains Khmer
    const containsKhmer = khmerRegex.test(input);

    // If text contains Khmer, render as a single segment to preserve combining marks
    // This is critical for proper rendering of Khmer vowels and diacritics
    if (containsKhmer) {
        const fontFamily = `Nokora-${getFontWeightName(weight)}`;
        const propsWithoutStyle = { ...props, style: undefined };
        const style = props.style as StyleProp<TextStyle>;

        return (
            <RNText {...propsWithoutStyle} style={[style, { fontFamily }]}>
                {input}
            </RNText>
        );
    }

    // For non-Khmer text, split by words and apply Poppins
    return input.split(/(\s+)/).map((word, i) => {
        const fontFamily = `Poppins-${getFontWeightName(weight)}${isItalic ? '-Italic' : ''}`;
        const propsWithoutStyle = { ...props, style: undefined };
        const style = props.style as StyleProp<TextStyle>;

        return (
            <RNText key={i} {...propsWithoutStyle} style={[style, { fontFamily }]}>
                {word}
            </RNText>
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

    // If renderedText is a single element (Khmer text - not an array), return it directly
    // This avoids unnecessary wrapping which can break Khmer combining marks
    if (!Array.isArray(renderedText)) {
        return renderedText;
    }

    // For multiple text segments (non-Khmer text split by words), wrap in flex-row
    return <RNText style={tw("flex-row gap-0")}>{renderedText}</RNText>;
}