import { View } from "react-native";
import { tw } from "@/utils/styles";

interface VideoCardSkeletonProps {
    count?: number;
}

export default function VideoCardSkeleton({ count = 6 }: VideoCardSkeletonProps) {
    return (
        <View style={tw("gap-4")}>
            {Array.from({ length: count }).map((_, index) => (
                <View
                    key={index}
                    style={tw("rounded-3xl bg-white border border-indigo-50 overflow-hidden")}
                >
                    <View style={tw("aspect-video bg-gray-100")} />
                    <View style={tw("p-4 flex-row gap-3")}>
                        <View style={tw("w-10 h-10 rounded-full bg-gray-200")} />
                        <View style={tw("flex-1 gap-2")}>
                            <View style={tw("h-4 bg-gray-200 rounded w-3/4")} />
                            <View style={tw("h-4 bg-gray-100 rounded w-2/3")} />
                            <View style={tw("flex-row items-center gap-2")}>
                                <View style={tw("h-3 bg-gray-200 rounded w-16")} />
                                <View style={tw("h-3 bg-gray-200 rounded w-12")} />
                            </View>
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
}

