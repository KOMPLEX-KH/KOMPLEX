import React, { useMemo } from "react";
import { View, Pressable, Alert } from "react-native";
import { Check, Copy, AlertCircle } from "lucide-react-native";
import { Message } from "@core-types/api-types/ai";
import ContentRenderer from "@/components/screens/docs/utils/ContentRenderer";
import { deserializeTopicContentV3 } from "@/components/screens/docs/utils/ContentDeserializer";
import MarkdownRenderer from "@/components/helper/MarkDownRenderer";
import { Text } from "@/components/common/Text";
import { tw } from "@/utils/styles";
import * as Clipboard from "expo-clipboard";

interface MessageItemProps {
    message: Message;
    onCopyMessage: (messageId: string, content: string) => void;
    copiedMessageId: string | null;
}

export default function MessageItem({ message, onCopyMessage, copiedMessageId }: MessageItemProps) {
    const isKomplexMessage = message.responseType === "komplex";

    const { komplexContent, canRenderKomplex } = useMemo(() => {
        if (!isKomplexMessage) {
            return { komplexContent: null, canRenderKomplex: false };
        }
        try {
            return {
                komplexContent: deserializeTopicContentV3(message.content),
                canRenderKomplex: true
            };
        } catch (err) {
            console.error("Failed to deserialize KOMPLEX content", err);
            return { komplexContent: null, canRenderKomplex: false };
        }
    }, [isKomplexMessage, message.content]);

    const handleCopy = async () => {
        try {
            await Clipboard.setStringAsync(message.content);
            onCopyMessage(message.id, message.content);
        } catch (error) {
            console.error("Error copying to clipboard:", error);
            Alert.alert("មានបញ្ហា", "មិនអាចចម្លងបានទេ");
        }
    };

    if (message.sender === "user") {
        return (
            <View style={tw("mb-8")}>
                <View style={tw("flex items-end")}>
                    <View style={tw("bg-indigo-600 rounded-3xl px-4 py-3 max-w-[85%]")}>
                        <Text style={tw("text-base font-medium text-white")}>
                            {message.content}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={tw("mb-8")}>
            <View style={tw("w-full")}>
                <View style={tw("bg-white border border-gray-200 rounded-3xl p-4 shadow-sm")}>
                    <View>
                        {isKomplexMessage ? (
                            canRenderKomplex ? (
                                <ContentRenderer content={komplexContent} />
                            ) : (
                                <View style={tw("flex-row items-center gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-xl")}>
                                    <AlertCircle size={20} color="#D97706" />
                                    <Text style={tw("text-sm text-yellow-800")}>
                                        សូមអភ័យទោស មានបញ្ហាក្នុងការបង្ហាញចម្លើយ
                                    </Text>
                                </View>
                            )
                        ) : (
                            <MarkdownRenderer content={message.content} />
                        )}
                    </View>
                    <View style={tw("flex-row items-center justify-between mt-2")}>
                        <Pressable
                            onPress={handleCopy}
                            style={tw("flex-row items-center gap-2")}
                        >
                            {copiedMessageId === message.id ? (
                                <>
                                    <Check size={16} color="#16A34A" />
                                    <Text style={tw("text-sm text-green-600")}>បានចម្លង</Text>
                                </>
                            ) : (
                                <>
                                    <Copy size={16} color="#6B7280" />
                                    <Text style={tw("text-sm text-gray-500")}>ចម្លង</Text>
                                </>
                            )}
                        </Pressable>
                        <View style={tw("flex-row items-center gap-1")}>
                            <Text style={tw("text-xs text-indigo-600 font-bold")}>KOM</Text>
                            <Text style={tw("text-xs text-black font-bold")}>PLEX</Text>
                            <Text style={tw("text-xs text-gray-500")}> Beta - </Text>
                            <Text style={tw("text-xs text-gray-500 font-medium")}>តារា AI</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
