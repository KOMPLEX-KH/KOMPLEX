import { View, Text, Image, Animated } from 'react-native'
import { tw } from '@/utils/styles'
import { useEffect, useRef } from 'react'
import { useTheme } from '@/src/providers/ThemeProvider'

interface LogoProps {
    isVertical?: boolean
    size?: "xl" | "lg" | "md" | "sm"
    isLoading?: boolean
    variant?: "default" | "light" | "dark"
    showText?: boolean
}

export default function Logo({
    isVertical = false,
    size = "md",
    isLoading = false,
    variant = "default",
    showText = true
}: LogoProps) {
    const fadeAnim = useRef(new Animated.Value(1)).current
    const { resolvedMode } = useTheme()

    // Size configurations
    const sizeConfig = {
        sm: {
            image: tw("w-4 h-4"),
            text: tw("text-base"),
            gap: tw("gap-1")
        },
        md: {
            image: tw("w-5 h-5"),
            text: tw("text-xl"),
            gap: tw("gap-4")
        },
        lg: {
            image: tw("w-6 h-6"),
            text: tw("text-2xl"),
            gap: tw("gap-3")
        },
        xl: {
            image: tw("w-16 h-16"),
            text: tw("text-4xl"),
            gap: tw("gap-4")
        }
    }

    // Variant configurations
    const variantConfig = {
        default: {
            logo: require("@/assets/images/logo.png"),
            textColor: tw("text-indigo-600"),
            textColor2: tw("text-gray-900")
        },
        light: {
            logo: require("@/assets/images/logo-light.png"),
            textColor: tw("text-white"),
            textColor2: tw("text-white")
        },
        dark: {
            logo: require("@/assets/images/logo-dark.png"),
            textColor: tw("text-black"),
            textColor2: tw("text-black")
        }
    }

    useEffect(() => {
        if (isLoading) {
            const pulseAnimation = Animated.sequence([
                Animated.timing(fadeAnim, {
                    toValue: 0.6,
                    duration: 1000,
                    useNativeDriver: true,
                }),
                Animated.timing(fadeAnim, {
                    toValue: 1,
                    duration: 1000,
                    useNativeDriver: true,
                })
            ])

            Animated.loop(pulseAnimation).start()

            return () => {
                fadeAnim.stopAnimation()
            }
        }
    }, [isLoading, fadeAnim])

    const currentSize = sizeConfig[size]
    const effectiveVariant = variant === "default"
        ? (resolvedMode === "dark" ? "light" : "default")
        : variant
    const currentVariant = variantConfig[effectiveVariant]

    return (
        <Animated.View style={[
            tw(`flex items-center gap-1 ${currentSize.gap}`),
            {
                flexDirection: isVertical ? 'column' : 'row',
                opacity: fadeAnim
            }
        ]}>
            <Image
                source={currentVariant.logo}
                style={[currentSize.image, tw("resize-contain")]}
            />
            {showText && (
                <View style={tw("flex-row items-center ")}>
                    <Text style={[currentSize.text, currentVariant.textColor, tw("font-bold")]}>
                        KOM
                    </Text>
                    <Text style={[currentSize.text, currentVariant.textColor2, tw("font-bold")]}>
                        PLEX
                    </Text>
                </View>
            )}
        </Animated.View>
    )
}