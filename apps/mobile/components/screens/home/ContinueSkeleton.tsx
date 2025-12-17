import { View } from 'react-native';
import { tw } from '@/utils/styles';

interface ContinueSkeletonProps {
    count?: number;
}

export default function ContinueSkeleton({ count = 3 }: ContinueSkeletonProps) {
    return (
        <View style={tw("gap-3")}>
            {Array.from({ length: count }).map((_, index) => (
                <View
                    key={index}
                    style={tw("bg-white rounded-3xl border border-gray-200 p-4 flex-row items-center justify-between shadow-sm")}
                >
                    <View style={tw("flex-row items-center gap-3 flex-1")}>
                        <View style={tw("p-2 rounded-full bg-gray-200 w-12 h-12")} />
                        <View style={tw("flex-1 gap-2")}>
                            <View style={tw("h-3 bg-gray-200 rounded w-24")} />
                            <View style={tw("h-4 bg-gray-200 rounded w-32")} />
                        </View>
                    </View>
                    <View style={tw("ml-2")}>
                        <View style={tw("w-10 h-10 rounded-full bg-gray-200")} />
                    </View>
                </View>
            ))}
        </View>
    );
}

