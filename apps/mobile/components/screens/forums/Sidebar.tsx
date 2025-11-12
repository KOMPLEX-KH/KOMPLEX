import { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { Search, Plus } from "lucide-react-native";
import { useRouter, Href } from "expo-router";
import { tw } from "@/utils/styles";

interface SidebarProps {
    onSearch?: (query: string) => void;
}

export default function Sidebar({ onSearch }: SidebarProps) {
    const router = useRouter();
    const [searchTerm, setSearchTerm] = useState("");

    const subjects = ["ទាំងអស់", "គណិតវិទ្យា", "រូបវិទ្យា", "គីមីវិទ្យា", "ជីវវិទ្យា"];
    const types = ["ទាំងអស់", "សំណួរ", "ចែករំលែក", "ពិភាក្សា"];

    const handleSearch = () => {
        const value = searchTerm.trim();
        onSearch?.(value);
    };

    const handleCreate = () => {
        router.push("/me/create-forum" as Href);
    };

    return (
        <View style={tw("rounded-3xl bg-white border border-indigo-50 p-6 gap-6")}>
            <View style={tw("gap-2")}>
                <Text style={tw("text-2xl font-kh-semibold text-indigo-600")}>ពិភាក្សា</Text>
                <Text style={tw("text-sm text-gray-500")}>
                    ចែករំលែកចំណេះដឹង និងសួរសំណួររបស់អ្នក
                </Text>
            </View>

            <Pressable
                style={tw("flex-row items-center justify-center gap-2 px-5 py-3 rounded-full bg-indigo-600")}
                onPress={handleCreate}
            >
                <Plus size={16} color="#FFFFFF" />
                <Text style={tw("text-white text-sm font-kh-medium")}>បង្កើតការពិភាក្សាថ្មី</Text>
            </Pressable>

            <View style={tw("gap-2")}>
                <View style={tw("flex-row items-center gap-2")}>
                    <Search size={16} color="#1F2937" />
                    <Text style={tw("text-sm font-kh-medium text-gray-900")}>ស្វែងរក</Text>
                </View>
                <View style={tw("flex-row items-center gap-3 rounded-full border border-indigo-100 px-4 py-2 bg-white")}>
                    <TextInput
                        value={searchTerm}
                        onChangeText={setSearchTerm}
                        onSubmitEditing={handleSearch}
                        placeholder="ស្វែងរកការពិភាក្សា..."
                        placeholderTextColor="#9CA3AF"
                        style={tw("flex-1 text-sm text-gray-700")}
                        returnKeyType="search"
                    />
                    <Pressable
                        onPress={handleSearch}
                        style={tw("px-3 py-1 rounded-full bg-indigo-600")}
                    >
                        <Text style={tw("text-white text-xs font-kh-medium")}>ស្វែងរក</Text>
                    </Pressable>
                </View>
            </View>

            <View style={tw("opacity-60 gap-3")}>
                <Text style={tw("text-sm font-kh-medium text-gray-400")}>មុខវិជ្ជា</Text>
                <View style={tw("gap-2")}>
                    {subjects.map((subject) => (
                        <View
                            key={subject}
                            style={tw("flex-row items-center gap-2 px-3 py-2 rounded-full bg-gray-50")}
                        >
                            <Text style={tw("text-sm text-gray-400")}>{subject}</Text>
                        </View>
                    ))}
                </View>
            </View>

            <View style={tw("opacity-60 gap-3")}>
                <Text style={tw("text-sm font-kh-medium text-gray-400")}>ប្រភេទ</Text>
                <View style={tw("gap-2")}>
                    {types.map((type) => (
                        <View
                            key={type}
                            style={tw("flex-row items-center gap-2 px-3 py-2 rounded-full bg-gray-50")}
                        >
                            <Text style={tw("text-sm text-gray-400")}>{type}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}
