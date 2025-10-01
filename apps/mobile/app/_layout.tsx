import { tw } from "@/utils/styles";
import { SplashScreen, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Image, View } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import { FONTS } from "@/constants/styles/fonts";
import { SafeAreaView } from "react-native-safe-area-context";
SplashScreen.preventAutoHideAsync(); // keep splash until fonts are loaded



export default function RootLayout() {
  const [fontsLoaded] = useFonts(FONTS);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // don’t render until fonts ready
  }


  return (
    <SafeAreaView style={tw("flex-1 bg-white")}>
      <View
        style={tw("w-full h-20 bg-indigo-600 absolute top-0 left-0 right-0 bottom-0 -z-10")}
      />
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
      </Stack>
      <StatusBar style="light" translucent backgroundColor="transparent" />
    </SafeAreaView>
  );

}

