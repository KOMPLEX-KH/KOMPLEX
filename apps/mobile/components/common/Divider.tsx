import { View, type StyleProp, type ViewStyle } from 'react-native';

interface DividerProps {
    color?: string;
    thickness?: number;
    opacity?: number;
    marginVertical?: number;
    style?: StyleProp<ViewStyle>;
}

const toSafeNumber = (value: number | undefined, fallback: number, min = 0): number => {
    if (typeof value !== 'number' || Number.isNaN(value)) return fallback;
    return Math.max(min, value);
};

export default function Divider({
    color = '#E5E7EB',
    thickness = 1,
    opacity = 0.7,
    marginVertical = 0,
    style,
}: DividerProps) {
    const safeThickness = toSafeNumber(thickness, 1, 0.5);
    const safeOpacity = toSafeNumber(opacity, 0.7, 0);
    const safeMarginVertical = toSafeNumber(marginVertical, 0, 0);

    return (
        <View
            style={[
                {
                    height: safeThickness,
                    backgroundColor: color,
                    opacity: safeOpacity,
                    marginVertical: safeMarginVertical,
                },
                style,
            ]}
        />
    );
}
