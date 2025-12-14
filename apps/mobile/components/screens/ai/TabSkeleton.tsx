import React from "react";
import { View } from "react-native";
import { tw } from "@/utils/styles";

const TabSkeleton: React.FC = () => {
    return (
        <View style={tw("px-2 py-3 gap-2")}>
            {Array.from({ length: 5 }).map((_, index) => (
                <View
                    key={index}
                    style={tw("h-8 rounded-full bg-indigo-50/80")}
                />
            ))}
        </View>
    );
};

export default TabSkeleton;
