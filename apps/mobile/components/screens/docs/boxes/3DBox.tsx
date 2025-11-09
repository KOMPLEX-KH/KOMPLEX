import { useState } from "react";
import { View, TouchableOpacity, Modal, Pressable } from "react-native";
import { Eye, X } from "lucide-react-native";
import ThreeD2 from "@/components/helper/ThreeD2";
import { ThreeDBoxProps } from "@core-types/docs/boxProps";
import { Text } from "@/components/common/Text";
import { tw } from "@/utils/styles";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ThreeDBox({
  src = "/test.glb",
  scale = 0.1,
  target = [0, 0, 0],
  title = "រូបភាព 3D",
  content,
  canvasBackground,
  canvasBackgroundColor,
  threeDText,
  twoDText,
  height = 500,
}: ThreeDBoxProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modelSrc = typeof src === 'string' ? src : undefined;

  return (
    <>
      <View style={tw("bg-indigo-50 border border-indigo-600 my-6 rounded-3xl p-4")}>
        {/* 3D Canvas - Non-interactive */}
        <View style={tw("relative bg-white rounded-3xl overflow-hidden")}>
          <ThreeD2
            src={modelSrc}
            scale={scale}
            target={target}
            height={height}
            interactive={false}
            canvasBackgroundColor={canvasBackgroundColor}
          />
          {/* Overlay button to open modal */}
          <TouchableOpacity
            onPress={() => setIsModalOpen(true)}
            style={tw("absolute inset-0 items-center justify-center bg-black/20")}
            activeOpacity={0.8}
          >
            <View style={tw("bg-white/90 px-4 py-2 rounded-full flex-row items-center gap-2")}>
              <Eye size={18} color="#4f46e5" />
              <Text style={tw("text-indigo-600 font-semibold")}>View 3D Model</Text>
            </View>
          </TouchableOpacity>
        </View>

        {/* Content Section */}
        {content && (
          <View style={tw("mt-4")}>
            {typeof content === "string" ? (
              <Text style={tw("text-gray-700 text-base")}>{content}</Text>
            ) : Array.isArray(content) ? (
              <View style={tw("gap-2")}>
                {content.map((item, index) => (
                  <Text key={index} style={tw("text-gray-700 text-base")}>{item}</Text>
                ))}
              </View>
            ) : (
              <View>{content}</View>
            )}
          </View>
        )}
      </View>

      {/* Fullscreen Popup Modal */}
      <Modal
        visible={isModalOpen}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <Pressable
          style={tw("flex-1 bg-black/95")}
          onPress={() => setIsModalOpen(false)}
        >
          <SafeAreaView style={tw("flex-1")} edges={['top', 'bottom']}>
            {/* Close button */}
            <Pressable
              onPress={() => setIsModalOpen(false)}
              style={tw("absolute top-4 right-4 z-50 bg-black/70 p-3 rounded-full")}
            >
              <X size={24} color="#ffffff" />
            </Pressable>

            {/* Centered 3D view with padding */}
            <View style={tw("flex-1 justify-center px-4 py-8")}>
              <Pressable onPress={(e) => e.stopPropagation()}>
                <ThreeD2
                  src={modelSrc}
                  scale={scale * 1.2}
                  target={target}
                  interactive={true}
                  canvasBackgroundColor={canvasBackgroundColor || 'grey'}
                />
              </Pressable>
            </View>
          </SafeAreaView>
        </Pressable>
      </Modal>
    </>
  );
}
