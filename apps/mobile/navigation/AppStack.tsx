import Header from "@/components/common/Header";
import FONTS from "@/constants/styles/fonts";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { ExtendedStackNavigationOptions } from "expo-router/build/layouts/StackClient";
import { useEffect } from "react";

const screenOptions: ExtendedStackNavigationOptions = {
    headerStyle: {
        backgroundColor: "transparent"
    },
    headerTransparent: true,
    headerBackVisible: true,
    headerShown: false,
    headerBackTitle: "",
    headerTitle: "",
    headerBackButtonDisplayMode: "minimal",
    headerTintColor: "#374151",
    headerTitleStyle: {
        fontFamily: "Noto-Sans-Bold",
        fontSize: 18,
        color: "#374151",

    },
    headerShadowVisible: false,
    contentStyle: { backgroundColor: "transparent", borderRadius: 0 }, // flatten
    presentation: "card", // no modal-style rounding
    animation: "simple_push",
};

export default function AppStack() {
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
        <Stack screenOptions={{
            ...screenOptions,
        }}>
            <Stack.Screen
                name="index"
            />

            <Stack.Screen
                name="docs"
            />

            <Stack.Screen
                name="ai"
            />

            <Stack.Screen
                name="blogs"
            />

            <Stack.Screen
                name="exercises"
            />

            <Stack.Screen
                name="forums"
            />

            <Stack.Screen
                name="videos"
            />

            <Stack.Screen
                name="utilities"
            />

            <Stack.Screen
                name="auth"
            />

            {/* Dynamic routes for docs */}
            <Stack.Screen
                name="docs/[grade]/[subject]/[lesson]/[topic]"

            />
        </Stack>
    );
}