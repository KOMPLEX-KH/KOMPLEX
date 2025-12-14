import React from "react";
import { View } from "react-native";
import { tw } from "@/utils/styles";

const ChatSkeleton = React.memo(() => {
    return (
        <View style={tw("gap-6 p-4")}>
            <View style={tw("flex items-end")}>
                <View style={[tw("bg-gray-200 rounded-3xl px-4 py-3"), { maxWidth: '70%' }]}>
                    <View style={tw("h-4 bg-gray-300 rounded w-32")} />
                </View>
            </View>

            <View style={tw("w-full")}>
                <View style={tw("gap-3")}>
                    <View style={[tw("h-4 bg-gray-200 rounded"), { width: '100%' }]} />
                    <View style={[tw("h-4 bg-gray-200 rounded"), { width: '80%' }]} />
                    <View style={[tw("h-4 bg-gray-200 rounded"), { width: '75%' }]} />
                    <View style={[tw("h-4 bg-gray-200 rounded"), { width: '85%' }]} />
                </View>
            </View>

            <View style={tw("flex items-end")}>
                <View style={[tw("bg-gray-200 rounded-3xl px-4 py-3"), { maxWidth: '70%' }]}>
                    <View style={tw("h-4 bg-gray-300 rounded w-24")} />
                </View>
            </View>

            <View style={tw("w-full")}>
                <View style={tw("gap-3")}>
                    <View style={[tw("h-4 bg-gray-200 rounded"), { width: '100%' }]} />
                    <View style={[tw("h-4 bg-gray-200 rounded"), { width: '80%' }]} />
                    <View style={[tw("h-4 bg-gray-200 rounded"), { width: '65%' }]} />
                </View>
            </View>
        </View>
    );
});

ChatSkeleton.displayName = "ChatSkeleton";

export default ChatSkeleton;
