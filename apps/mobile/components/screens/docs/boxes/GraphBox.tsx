import { useState } from 'react';
import { View, Modal, Pressable } from 'react-native';
import { Maximize2, X } from "lucide-react-native";
import Graph from "@/components/helper/Graph";
import { GraphBoxProps } from "@core-types/docs/boxProps";
import { Text } from "@/components/common/Text";
import { tw } from "@/utils/styles";

export default function GraphBox({ expressions, options }: GraphBoxProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <View style={tw("bg-indigo-50 border border-indigo-600 my-6 rounded-3xl p-4")}>
        <View style={tw("relative bg-white rounded-3xl")}>
          <Graph expressions={expressions} options={options} height={400} />
          <Pressable
            onPress={() => setIsModalOpen(true)}
            style={tw("absolute -top-2 -right-2 bg-black/50 p-2 rounded-full")}
          >
            <Maximize2 size={16} color="#ffffff" />
          </Pressable>
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
              <Graph expressions={expressions} options={options} height={600} />
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
}
