import { View } from "react-native";
import { tw } from "@/utils/styles";

interface ForumSkeletonProps {
    count: number;
}

export default function ForumSkeleton({ count }: ForumSkeletonProps) {
    return (
        <View style={tw("gap-5")}>
            {Array.from({ length: count }).map((_, index) => (
                <View key={index} style={tw("rounded-3xl bg-white border border-indigo-50 p-6")}>
                    <View style={tw("w-12 h-12 bg-gray-200 rounded-full")} />

                    <View style={tw("mt-4 gap-4")}>
                        <View style={tw("flex-row items-center gap-2")}>
                            <View style={tw("h-4 w-24 bg-gray-200 rounded")} />
                            <View style={tw("h-3 w-16 bg-gray-100 rounded")} />
                        </View>

                        <View style={tw("h-6 w-3/4 bg-gray-200 rounded mb-3")} />

                        <View style={tw("gap-2")}>
                            <View style={tw("h-4 bg-gray-100 rounded")} />
                            <View style={tw("h-4 w-2/3 bg-gray-100 rounded")} />
                        </View>

                        <View style={tw("h-52 bg-gray-100 rounded-3xl my-4")} />

                        <View style={tw("flex-row items-center gap-4")}>
                            <View style={tw("h-4 w-16 bg-gray-100 rounded")} />
                            <View style={tw("h-4 w-16 bg-gray-100 rounded")} />
                            <View style={tw("h-4 w-16 bg-gray-100 rounded")} />
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
}
