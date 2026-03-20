import { View } from 'react-native';

type SpacerAxis = 'vertical' | 'horizontal';

interface SpacerProps {
    size?: number;
    axis?: SpacerAxis;
}

const toSafeSize = (value: number | undefined, fallback = 8): number => {
    if (typeof value !== 'number' || Number.isNaN(value) || value < 0) return fallback;
    return value;
};

export default function Spacer({ size = 8, axis = 'vertical' }: SpacerProps) {
    const safeSize = toSafeSize(size, 8);

    if (axis === 'horizontal') {
        return <View style={{ width: safeSize }} />;
    }

    return <View style={{ height: safeSize }} />;
}
