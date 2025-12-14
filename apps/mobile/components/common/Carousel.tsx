import React, { useCallback, useEffect, useRef, useState } from "react";
import { View, Image, Pressable, FlatList, Dimensions } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { ChevronLeft, ChevronRight } from "lucide-react-native";
import { Media } from "@/types/content/media";
import { tw } from "@/utils/styles";
import { Text } from "@/components/common/Text";

interface CarouselProps {
    media: Media[];
    autoPlay?: boolean;
    showControls?: boolean;
}

export default function Carousel({
    media,
    autoPlay = false,
    showControls = true,
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(autoPlay);
    const [isMuted] = useState(true);
    const flatListRef = useRef<FlatList<Media>>(null);
    const videoRefs = useRef<Record<number, Video | null>>({});
    const screenWidth = Dimensions.get("window").width;

    useEffect(() => {
        setCurrentIndex(0);
        setIsPlaying(autoPlay);
    }, [media.length, autoPlay]);

    useEffect(() => {
        // Pause all videos except the current one
        Object.entries(videoRefs.current).forEach(([idx, ref]) => {
            const i = Number(idx);
            if (!ref) return;
            if (i === currentIndex && media[i]?.type === "video" && isPlaying) {
                ref.playAsync().catch(() => { });
            } else {
                ref.pauseAsync().catch(() => { });
            }
        });
    }, [currentIndex, isPlaying, media]);

    const scrollToIndex = useCallback(
        (index: number) => {
            if (!flatListRef.current) return;
            const clampedIndex = Math.max(0, Math.min(index, media.length - 1));
            flatListRef.current.scrollToOffset({ offset: clampedIndex * screenWidth, animated: true });
            setCurrentIndex(clampedIndex);
        },
        [media.length, screenWidth]
    );

    const goNext = useCallback(() => {
        const nextIndex = currentIndex + 1 < media.length ? currentIndex + 1 : 0;
        scrollToIndex(nextIndex);
    }, [currentIndex, media.length, scrollToIndex]);

    const goPrev = useCallback(() => {
        const prevIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : media.length - 1;
        scrollToIndex(prevIndex);
    }, [currentIndex, media.length, scrollToIndex]);

    const onViewableItemsChanged = useRef(({ viewableItems }: any) => {
        if (viewableItems?.length > 0) {
            const nextIndex = viewableItems[0].index ?? 0;
            setCurrentIndex(nextIndex);
        }
    }).current;

    const viewabilityConfig = { viewAreaCoveragePercentThreshold: 60 };

    const renderItem = ({ item, index }: { item: Media; index: number }) => {
        const baseStyle = { width: screenWidth, aspectRatio: 16 / 9 };

        if (item.type === "video") {
            return (
                <View style={[tw("bg-black"), baseStyle]}>
                    <Video
                        ref={(ref) => {
                            videoRefs.current[index] = ref;
                        }}
                        source={{ uri: item.url }}
                        style={tw("w-full h-full")}
                        resizeMode={ResizeMode.CONTAIN}
                        shouldPlay={isPlaying && currentIndex === index}
                        isMuted={isMuted}
                        onPlaybackStatusUpdate={(status) => {
                            if (!status.isLoaded) return;
                            if (status.didJustFinish && autoPlay) {
                                goNext();
                            }
                        }}
                    />
                </View>
            );
        }

        return (
            <View style={baseStyle}>
                <Image
                    source={{ uri: item.url }}
                    style={tw("w-full h-full rounded-2xl bg-gray-100")}
                    resizeMode={ResizeMode.COVER}
                />
            </View>
        );
    };

    if (!media || media.length === 0) {
        return <View style={tw("w-full h-48 bg-gray-100 rounded-2xl")} />;
    }

    return (
        <View style={tw("w-full rounded-3xl overflow-hidden relative")}>
            <FlatList
                ref={flatListRef}
                data={media}
                horizontal
                pagingEnabled
                snapToAlignment="center"
                decelerationRate="fast"
                showsHorizontalScrollIndicator={false}
                keyExtractor={(_, idx) => idx.toString()}
                renderItem={renderItem}
                onViewableItemsChanged={onViewableItemsChanged}
                viewabilityConfig={viewabilityConfig}
            />

            {media.length > 1 && (
                <View style={tw("absolute top-3  right-3 flex-row justify-center items-center gap-2 bg-black/30 rounded-full px-3 py-1")}>
                    <Text style={tw("text-white text-sm font-kh-medium")}>{currentIndex + 1} / {media.length}</Text>
                </View>
            )}
            {media.length > 1 && (
                <View style={tw("absolute bottom-3 left-0 right-0 flex-row justify-center items-center gap-2")}>
                    {media.map((_, idx) => (
                        <View
                            key={idx}
                            style={tw(
                                `h-2 rounded-full ${idx === currentIndex ? "w-4 bg-indigo-500" : "w-2 bg-white/60"}`
                            )}
                        />
                    ))}
                </View>
            )}

            {showControls && media.length > 1 && (
                <>
                    <Pressable
                        onPress={goPrev}
                        style={tw(
                            "absolute left-2 top-1/2  w-10 h-10 rounded-full bg-black/30 items-center justify-center"
                        )}
                        accessibilityLabel="Previous"
                    >
                        <ChevronLeft color="white" size={20} />
                    </Pressable>
                    <Pressable
                        onPress={goNext}
                        style={tw(
                            "absolute right-2 top-1/2  w-10 h-10 rounded-full bg-black/30 items-center justify-center"
                        )}
                        accessibilityLabel="Next"
                    >
                        <ChevronRight color="white" size={20} />
                    </Pressable>
                </>
            )}
        </View>
    );
}
