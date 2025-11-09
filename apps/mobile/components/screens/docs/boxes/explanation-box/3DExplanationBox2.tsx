import { useState } from 'react';
import { View, TouchableOpacity, Modal, Pressable, StyleSheet } from 'react-native';
import { Box, Eye, X } from 'lucide-react-native';
import ThreeD2 from '@/components/helper/ThreeD2';
import { ThreeDExplanationBoxProps } from "@core-types/docs/boxProps";
import { Text } from "@/components/common/Text";
import { tw } from "@/utils/styles";
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ThreeDExplanationBox({
  src,
  explanation,
  scale = 0.7,
  target = [0, 0, 0],
  canvasBackground,
  canvasBackgroundColor = 'grey',
  threeDText,
  twoDText,
  height = 400,
  title = "ការពន្យល់",
  ...rest
}: ThreeDExplanationBoxProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modelSrc = typeof src === 'string' ? src : undefined;

  return (
    <>
      <View style={tw("gap-2 my-6")}>
        <View style={tw("bg-indigo-50 border border-indigo-600 p-4 rounded-3xl")}>
          <View style={tw("relative bg-white rounded-3xl overflow-hidden")}>
            {/* Non-interactive 3D view */}
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
          <View style={tw("mt-6")}>
            <View style={tw("flex-row items-center gap-3 mb-4")}>
              <Box size={20} color="#4f46e5" />
              <Text style={tw("text-xl font-bold text-gray-900")}>{title}</Text>
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

      {/* Fullscreen Popup Modal */}
      <Modal
        visible={isModalOpen}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setIsModalOpen(false)}
      >
        <View style={tw("flex-1 bg-black/80")}>
          <Pressable
            style={StyleSheet.absoluteFill}
            onPress={() => setIsModalOpen(false)}
          />
          <SafeAreaView style={tw("flex-1")} edges={['bottom']} pointerEvents="box-none">
            {/* Close button */}
            <Pressable
              onPress={() => setIsModalOpen(false)}
              style={tw("absolute top-12 right-4 z-50 bg-black/70 p-4 rounded-full")}
            >
              <X size={28} color="#ffffff" />
            </Pressable>

            {/* Centered 3D view with padding */}
            <View style={tw("flex-1 justify-center px-6 py-12")} pointerEvents="box-none">
              <Pressable onPress={(e) => e.stopPropagation()} style={tw("w-full")}>
                <ThreeD2
                  src={modelSrc}
                  scale={scale * 1.2}
                  target={target}
                  interactive={true}
                  canvasBackgroundColor={canvasBackgroundColor}
                />
              </Pressable>
            </View>
          </SafeAreaView>
        </View>
      </Modal>
    </>
  );
}
