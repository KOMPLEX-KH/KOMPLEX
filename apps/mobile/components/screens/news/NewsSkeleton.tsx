import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';
import { tw } from '@/utils/styles';
import { LinearGradient } from 'expo-linear-gradient';

interface NewsSkeletonProps {
    count?: number;
}

export default function NewsSkeleton({ count = 3 }: NewsSkeletonProps) {
    const pulseAnim = useRef(new Animated.Value(0.3)).current;

    useEffect(() => {
        const pulseAnimation = Animated.sequence([
            Animated.timing(pulseAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            }),
            Animated.timing(pulseAnim, {
                toValue: 0.3,
                duration: 1000,
                useNativeDriver: true,
            }),
        ]);

        Animated.loop(pulseAnimation).start();

        return () => {
            pulseAnim.stopAnimation();
        };
    }, [pulseAnim]);

    const SkeletonText = ({ width, height = 16 }: { width: string | number; height?: number }) => (
        <Animated.View
            style={[
                {
                    width: typeof width === 'string' ? width : width,
                    height,
                    borderRadius: 4,
                    opacity: pulseAnim,
                },
                tw('bg-white/30'),
            ]}
        />
    );

    return (
        <View style={tw("gap-4")}>
            {Array.from({ length: count }).map((_, index) => (
                <View key={index} style={tw("rounded-3xl overflow-hidden mb-4")}>
                    <View style={tw("relative w-full h-64")}>
                        {/* Background Image Placeholder */}
                        <Animated.View
                            style={[
                                tw("w-full h-full bg-gray-200"),
                                {
                                    opacity: pulseAnim,
                                },
                            ]}
                        />

                        {/* Dark Gradient Overlay */}
                        <LinearGradient
                            colors={['transparent', 'rgba(0,0,0,0.4)', 'rgba(0,0,0,0.8)']}
                            locations={[0, 0.6, 1]}
                            style={StyleSheet.absoluteFill}
                        />

                        {/* Fake Text Content */}
                        <View style={tw("absolute bottom-0 left-0 right-0 p-4")}>
                            <View style={tw("mb-2")}>
                                <SkeletonText width="85%" height={20} />
                            </View>
                            <View style={tw("mb-1")}>
                                <SkeletonText width="90%" height={16} />
                            </View>
                            <SkeletonText width="70%" height={16} />
                        </View>
                    </View>
                </View>
            ))}
        </View>
    );
}

