import { TAILWIND_COLORS } from "@/constants/styles/tailwind-colors";
import { tw } from "@/utils/styles";
import { router } from "expo-router";
import { Plus } from "lucide-react-native";
import { useState } from "react";
import { Pressable, TextInput } from "react-native";
import { View } from "react-native";

interface SearchBarProps {
    type: "forums" | "videos";
    onSearch?: (query: string, type: "forums" | "videos") => void;
    isDisabled?: boolean;
}

export default function SearchBar({ type, onSearch, isDisabled = false }: SearchBarProps) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        onSearch?.(searchQuery.trim(), type);
    };

    return (
        <View style={tw("fixed top-14 left-0 right-0 z-10 flex-row items-center justify-between gap-2  p-4 bg-white shadow-sm")}>
            <TextInput
                value={searchQuery}
                onChangeText={setSearchQuery}
                returnKeyType="search"
                onSubmitEditing={handleSearch}
                placeholder="ស្វែងរក"
                placeholderTextColor={TAILWIND_COLORS["gray-500"]}
                style={tw("border border-gray-300 rounded-full px-3 py-2 flex-1 font-kh-medium")}
                editable={!isDisabled}
            />
            <Pressable disabled={isDisabled} style={tw("rounded-full bg-indigo-600 p-2")} onPress={() => router.push(`${type === "forums" ? "/me/create-forum" : "/me/create-video"}`)}>
                <Plus size={20} color={isDisabled ? TAILWIND_COLORS["gray-500"] : "white"} />
            </Pressable>
        </View>
    );
}