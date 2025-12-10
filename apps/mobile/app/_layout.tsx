import { tw } from "@/utils/styles";
import { SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import NavBar from "@/components/common/NavBar";
import AppStack from "@/navigation/AppStack";
SplashScreen.preventAutoHideAsync(); // keep splash until fonts are loaded

export default function RootLayout() {



  return (
    <SafeAreaView style={tw("flex-1")} edges={["top", "left", "right"]}>
      <AppStack />
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <NavBar />
    </SafeAreaView>
  );

}
