import { useState, useEffect } from 'react';
import { View, Modal, Pressable } from 'react-native';
import { Video, Maximize2, X } from 'lucide-react-native';
import VideoPlayer from '@/components/helper/VideoPlayer';
import { VideoBoxProps } from "@core-types/docs/boxProps";
import { Text } from "@/components/common/Text";
import { tw } from "@/utils/styles";

export default function VideoExplanationBox({ src, videoTitle, explanation }: VideoBoxProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [source, setSource] = useState("https://assets.komplex.app" + src);

    useEffect(() => {
        setSource("https://assets.komplex.app" + src);
    }, [src]);

    return (
        <>
            <View style={tw("gap-2 my-6")}>
                <View style={tw("bg-indigo-50 border border-indigo-600 p-4 rounded-3xl")}>
                    <View style={tw("relative")}>
                        {source ? (
                            <>
                                <VideoPlayer
                                    src={source}
                                    style={tw("rounded-lg h-64 w-full")}
                                />
                                <Pressable
                                    onPress={() => setIsModalOpen(true)}
                                    style={tw("absolute top-2 right-2 bg-black/50 p-2 rounded-lg")}
                                >
                                    <Maximize2 size={16} color="#ffffff" />
                                </Pressable>
                            </>
                        ) : (
                            <View style={tw("w-full h-64 bg-gray-200 rounded-xl items-center justify-center")}>
                                <Video size={64} color="#9ca3af" />
                                <Text style={tw("text-gray-500 mt-4")}>
                                    {videoTitle || 'Video content will be displayed here'}
                                </Text>
                            </View>
                        )}
                    </View>
                    <View style={tw("mt-6")}>
                        <View style={tw("flex-row items-center gap-3 mb-4")}>
                            <Video size={20} color="#4f46e5" />
                            <Text style={tw("text-xl font-bold text-gray-900")}>ការពន្យល់</Text>
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
                            style={tw("absolute top-4 right-4 z-10 bg-black/50 p-2 rounded-lg")}
                        >
                            <X size={20} color="#ffffff" />
                        </Pressable>
                        {source ? (
                            <View style={tw("h-full")}>
                                <VideoPlayer
                                    src={source}
                                    style={tw("w-full h-full")}
                                />
                            </View>
                        ) : (
                            <View style={tw("w-full h-96 bg-gray-200 items-center justify-center")}>
                                <Video size={64} color="#9ca3af" />
                                <Text style={tw("text-gray-500 mt-4")}>
                                    {videoTitle || 'Video content will be displayed here'}
                                </Text>
                            </View>
                        )}
                    </View>
                </View>
            </Modal>
        </>
    );
}
