import { View, Animated } from "react-native"
import { tw } from "@/utils/styles"
import Logo from "@/components/common/Logo"
import { useEffect, useRef } from "react"

export default function Skeleton() {
    const fadeAnim = useRef(new Animated.Value(0.3)).current

    useEffect(() => {
        const pulseAnimation = Animated.sequence([
            Animated.timing(fadeAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: 0.3,
                duration: 1000,
                useNativeDriver: true,
            }),
        ])

        Animated.loop(pulseAnimation).start()

        return () => {
            fadeAnim.stopAnimation()
        }
    }, [fadeAnim])

    const SkeletonBlock = ({ width = "100%", height = 20 }) => (
        <Animated.View
            style={[
                tw("bg-gray-200 rounded-lg"),
                {
                    width,
                    height,
                    opacity: fadeAnim,
                },
            ]}
        />
    )

    return (
        <View style={tw("flex-1 p-4")}>
            {/* Logo at the center */}
            <View style={tw("items-center justify-center absolute top-1/4 left-1/4  z-10 ")}>
                <Logo size="xl" isVertical isLoading />
            </View>

            {/* Content skeleton */}
            <View style={tw("flex-col gap-6")}>
                {/* Title skeleton */}
                <SkeletonBlock width="75%" height={24} />

                {/* Paragraph skeletons */}
                <View style={tw("space-y-4")}>
                    <SkeletonBlock />
                    <SkeletonBlock width="90%" />
                    <SkeletonBlock width="85%" />
                </View>

                {/* Box skeleton */}
                <View style={tw("bg-gray-100 rounded-xl p-4 space-y-3")}>
                    <SkeletonBlock width="50%" />
                    <SkeletonBlock width="100%" />
                    <SkeletonBlock width="80%" />
                </View>

                {/* Another paragraph section */}
                <View style={tw("space-y-4")}>
                    <SkeletonBlock width="95%" />
                    <SkeletonBlock width="88%" />
                    <SkeletonBlock width="92%" />
                </View>
            </View>
        </View>
    )
}