import { useState } from 'react';
import { View, Modal, Pressable } from 'react-native';
import { Box, Maximize2, X } from 'lucide-react-native';
import ThreeD from '@/components/helper/ThreeD';
import { ThreeDExplanationBoxProps } from "@core-types/docs/boxProps";
import { Text } from "@/components/common/Text";
import { tw } from "@/utils/styles";

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
  title = "ការពន្យល់"
}: ThreeDExplanationBoxProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <View style={tw("gap-2 my-6")}>
        <View style={tw("bg-indigo-50 border border-indigo-600 p-4 rounded-3xl")}>
          <View style={tw("relative bg-white rounded-3xl")}>
            <ThreeD
              src={src}
              scale={scale}
              target={target}
              canvasBackground={canvasBackground}
              canvasBackgroundColor={canvasBackgroundColor}
              threeDText={threeDText}
              twoDText={twoDText}
              height={height}
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
            <View style={tw("h-full")}>
              <ThreeD
                src={src}
                scale={scale * 1.2}
                target={target}
                canvasBackground={canvasBackground}
                canvasBackgroundColor={canvasBackgroundColor}
                threeDText={threeDText}
                twoDText={twoDText}
                height={600}
              />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
