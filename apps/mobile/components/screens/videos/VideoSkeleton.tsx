import { View } from "react-native";
import { tw } from "@/utils/styles";

export default function VideoSkeleton() {
    return (
        <View style={tw("gap-6")}>
            <View style={tw("rounded-3xl bg-gray-100 overflow-hidden")}>
                <View style={tw("aspect-video bg-gray-200")} />
            </View>

            <View style={tw("rounded-3xl bg-white border border-indigo-50 p-6 gap-4")}>
                <View style={tw("h-6 w-3/4 bg-gray-200 rounded")} />
                <View style={tw("flex-row gap-3")}>
                    <View style={tw("w-10 h-10 rounded-full bg-gray-100")} />
                    <View style={tw("flex-1 gap-2")}>
                        <View style={tw("h-4 w-40 bg-gray-200 rounded")} />
                        <View style={tw("h-4 w-32 bg-gray-100 rounded")} />
                    </View>
                </View>
                <View style={tw("gap-2")}>
                    <View style={tw("h-4 bg-gray-100 rounded")} />
                    <View style={tw("h-4 w-5/6 bg-gray-100 rounded")} />
                    <View style={tw("h-4 w-4/6 bg-gray-100 rounded")} />
                </View>
            </View>

            <View style={tw("rounded-3xl bg-white border border-indigo-50 p-6 gap-4")}>
                <View style={tw("h-5 w-24 bg-gray-200 rounded")} />
                <View style={tw("gap-3")}>
                    {Array.from({ length: 3 }).map((_, index) => (
                        <View key={index} style={tw("flex-row gap-3")}>
                            <View style={tw("w-28 h-16 bg-gray-100 rounded-2xl")} />
                            <View style={tw("flex-1 gap-2")}>
                                <View style={tw("h-4 bg-gray-200 rounded")} />
                                <View style={tw("h-3 w-3/4 bg-gray-100 rounded")} />
                                <View style={tw("h-3 w-1/2 bg-gray-100 rounded")} />
                            </View>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}

