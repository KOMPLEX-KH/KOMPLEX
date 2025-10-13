import { Text } from "@/components/common/Text";
import { tw } from "@/utils/styles";
import { View, Image, Pressable } from "react-native";
import { Href, Link } from "expo-router";
import { ArrowRight, User } from "lucide-react-native";

interface PostCardProps {
    username: string;
    createdAt: string;
    title: string;
    description: string;
    image: string;
    href: Href;
}

export default function PostCard({ username, createdAt, title, description, image, href }: PostCardProps) {
    return (
        <View style={tw("rounded-3xl bg-white shadow-md p-4 flex  justify-between gap-4")}>
            <View style={tw("flex-row items-center gap-2")}>
                <View style={tw("rounded-full bg-indigo-600 p-1 w-8 h-8 items-center justify-center")}>
                    <User size={20} color="white" />
                </View>
                <View style={tw("flex-col ")}>
                    <Text style={tw("text-sm font-bold")}>{username}</Text>
                    <Text style={tw("text-xs text-gray-500")}>{createdAt}</Text>
                </View>
            </View>
            <Text style={tw("text-lg font-bold leading-relaxed")}>{title}</Text>
            <Text style={tw("text-sm text-gray-500 leading-relaxed")}>{description}</Text>
            <Image
                source={{ uri: image }}
                style={tw("w-full h-40 rounded-3xl")}
            />
        </View>
    )
}