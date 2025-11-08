import { useState, useEffect } from 'react';
import { View, Modal, Pressable, Image, ScrollView } from 'react-native';
import { Image as ImageIcon, Maximize2, X } from 'lucide-react-native';
import { ImageBoxProps } from "@core-types/docs/boxProps";
import { Text } from "@/components/common/Text";
import { tw } from "@/utils/styles";

export default function ImageExplanationBox({ src, imageAlt, explanation, title }: ImageBoxProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [source, setSource] = useState("https://assets.komplex.app" + src);

    useEffect(() => {
        setSource("https://assets.komplex.app" + src);
    }, [src]);

    return (
        <>
            <View style={tw("gap-2 my-6")}>
                <View style={tw("bg-indigo-50 border border-indigo-600 p-4 rounded-3xl")}>
                    <View style={tw("relative bg-white rounded-3xl")}>
                        <Image
                            source={{ uri: source || 'https://assets.komplex.app/image-error.png' }}
                            style={tw("w-full h-64 rounded-3xl")}
                            resizeMode="contain"
                        />
                        <Pressable
                            onPress={() => setIsModalOpen(true)}
                            style={tw("absolute -top-2 -right-2 bg-black/50 p-2 rounded-full")}
                        >
                            <Maximize2 size={16} color="#ffffff" />
                        </Pressable>
                    </View>
                    <View style={tw("mt-6")}>
                        <View style={tw("flex-row items-center gap-3 mb-4")}>
                            <ImageIcon size={20} color="#4f46e5" />
                            <Text style={tw("text-xl font-bold text-gray-900")}>
                                {title || "ការពន្យល់"}
                            </Text>
                        </View>
                        {typeof explanation === 'string' ? (
                            <Text style={tw("text-gray-700 text-base")}>{explanation}</Text>
                        ) : Array.isArray(explanation) ? (
                            <View style={tw("gap-2")}>
                                {explanation.map((item, index) => (
                                    <Text key={index} style={tw("text-gray-700 text-base")}>{item}</Text>
                                ))}
                            </View>
                        ) : (
                            <View>{explanation}</View>
                        )}
                    </View>
                </View>
            </View>

            {/* Fullscreen Modal */}
            <Modal
                visible={isModalOpen}
                animationType="fade"
                transparent={true}
                onRequestClose={() => setIsModalOpen(false)}
            >
                <View style={tw("flex-1 bg-black/80 items-center justify-center p-4")}>
                    <View style={tw("bg-white rounded-3xl w-full h-[80vh] relative")}>
                        <Pressable
                            onPress={() => setIsModalOpen(false)}
                            style={tw("absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-full")}
                        >
                            <X size={20} color="#ffffff" />
                        </Pressable>
                        <ScrollView contentContainerStyle={tw("items-center justify-center p-4")}>
                            <Image
                                source={{ uri: source || 'https://assets.komplex.app/image-error.png' }}
                                style={tw("w-full h-96")}
                                resizeMode="contain"
                            />
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </>
    );
}
