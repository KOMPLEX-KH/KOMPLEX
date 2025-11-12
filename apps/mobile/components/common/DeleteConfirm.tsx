import { Modal, View, Text, Pressable } from "react-native";
import { tw } from "@/utils/styles";

interface DeleteConfirmProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmLabel?: string;
    cancelLabel?: string;
}

export default function DeleteConfirm({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmLabel = "Delete",
    cancelLabel = "Cancel",
}: DeleteConfirmProps) {
    const handleConfirm = () => {
        onConfirm();
        onClose();
    };

    return (
        <Modal
            visible={isOpen}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={tw("flex-1 items-center justify-center bg-black/40 px-6")}>
                <View style={tw("w-full max-w-md rounded-3xl bg-white border border-indigo-100 p-6")}>
                    <Text style={tw("text-lg font-kh-bold text-gray-900 mb-2")}>
                                    {title}
                    </Text>
                    <Text style={tw("text-sm font-kh-normal text-gray-600 mb-6")}>
                                        {message}
                    </Text>

                    <View style={tw("flex-row justify-end gap-3")}>
                        <Pressable
                            onPress={onClose}
                            style={tw("px-4 py-2 rounded-full border border-indigo-100")}
                            accessibilityRole="button"
                            accessibilityLabel={cancelLabel}
                        >
                            <Text style={tw("text-sm font-kh-medium text-indigo-700")}>
                                {cancelLabel}
                            </Text>
                        </Pressable>
                        <Pressable
                            onPress={handleConfirm}
                            style={tw("px-4 py-2 rounded-full bg-indigo-600")}
                            accessibilityRole="button"
                            accessibilityLabel={confirmLabel}
                        >
                            <Text style={tw("text-sm font-kh-medium text-white")}>
                                {confirmLabel}
                            </Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </Modal>
    );
} 