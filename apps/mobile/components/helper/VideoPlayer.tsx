import React, { useState, useRef } from 'react';
import { View, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { Play, Pause } from 'lucide-react-native';

interface VideoPlayerProps {
    src: string;
    poster?: string;
    style?: any;
    onPlay?: () => void;
    onPause?: () => void;
    onEnded?: () => void;
    onTimeUpdate?: (currentTime: number) => void;
}

export default function VideoPlayer({
    src,
    poster,
    style,
    onPlay,
    onPause,
    onEnded,
    onTimeUpdate,
}: VideoPlayerProps) {
    const videoRef = useRef<Video>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showButton, setShowButton] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    const togglePlay = async () => {
        if (videoRef.current) {
            if (isPlaying) {
                await videoRef.current.pauseAsync();
                setIsPlaying(false);
                onPause?.();
            } else {
                await videoRef.current.playAsync();
                setIsPlaying(true);
                onPlay?.();
                // Auto-hide button after 2 seconds
                setTimeout(() => {
                    setShowButton(false);
                }, 2000);
            }
        }
    };

    return (
        <View style={[styles.container, style]}>
            <Video
                ref={videoRef}
                source={{ uri: src }}
                style={styles.video}
                resizeMode={ResizeMode.CONTAIN}
                useNativeControls={false}
                onPlaybackStatusUpdate={(status) => {
                    if (status.isLoaded) {
                        setIsLoading(false);
                        if (status.isPlaying !== isPlaying) {
                            setIsPlaying(status.isPlaying || false);
                        }
                        if (status.didJustFinish) {
                            setIsPlaying(false);
                            onEnded?.();
                        }
                        onTimeUpdate?.(status.positionMillis / 1000);
                    }
                }}
            />

            {isLoading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#ffffff" />
                </View>
            )}

            <Pressable
                onPress={togglePlay}
                style={[
                    styles.playButton,
                    { opacity: showButton ? 1 : 0 },
                ]}
                onPressIn={() => setShowButton(true)}
            >
                {isPlaying ? (
                    <Pause size={20} color="#ffffff" />
                ) : (
                    <Play size={20} color="#ffffff" />
                )}
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        borderRadius: 12,
        overflow: 'hidden',
        position: 'relative',
    },
    video: {
        width: '100%',
        height: '100%',
    },
    loadingContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    playButton: {
        position: 'absolute',
        bottom: 16,
        left: 16,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 8,
        borderRadius: 20,
    },
});
