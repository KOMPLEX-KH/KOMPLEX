import { tw } from "@/utils/styles";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";


export default function RootLayout() {
  return (
    <View style={tw("flex-1 bg-white p-0")}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "" }} />
      </Stack>
      <StatusBar style="auto" />
    </View>
  );
}

