import { View } from 'react-native';
import { tw } from '@/utils/styles';

interface NewsSkeletonProps {
    count?: number;
}

export default function NewsSkeleton({ count = 3 }: NewsSkeletonProps) {
    return (
        <View style={tw("gap-4")}>
            {Array.from({ length: count }).map((_, index) => (
                <View key={index} style={tw("rounded-3xl overflow-hidden mb-4")}>
                    <View style={tw("w-full h-64 bg-gray-200 animate-pulse")} />
                </View>
            ))}
        </View>
    );
}

