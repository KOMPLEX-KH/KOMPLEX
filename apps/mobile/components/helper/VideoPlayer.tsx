import React, { useState, useEffect } from 'react';
import { View, Pressable, StyleSheet, ActivityIndicator } from 'react-native';
import { VideoView, useVideoPlayer } from 'expo-video';
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
    const player = useVideoPlayer({ uri: src });

    const [showButton, setShowButton] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    // Configure player settings
    useEffect(() => {
        if (player) {
            player.loop = false;
            player.muted = false;
        }
    }, [player]);

    // Update source when src changes
    useEffect(() => {
        if (player && src) {
            player.replace({ uri: src });
        }
    }, [src, player]);

    // Monitor player state
    useEffect(() => {
        if (!player) return;

        // Track loading and playback state
        const updateInterval = setInterval(() => {
            // Check if video is loaded (has duration)
            if (player.duration > 0 && isLoading) {
                setIsLoading(false);
            }

            // Track time updates
            if (player.currentTime > 0) {
                onTimeUpdate?.(player.currentTime);
            }

            // Check if video ended
            if (player.duration > 0 && player.currentTime >= player.duration - 0.1) {
                if (player.playing) {
                    player.pause();
                    onEnded?.();
                }
            }
        }, 200);

        return () => {
            clearInterval(updateInterval);
        };
    }, [player, isLoading, onTimeUpdate, onEnded]);

    // Auto-hide button after playing starts
    useEffect(() => {
        if (player?.playing) {
            onPlay?.();
            const timer = setTimeout(() => {
                setShowButton(false);
            }, 2000);
            return () => clearTimeout(timer);
        } else if (player && !player.playing) {
            onPause?.();
            setShowButton(true);
        }
    }, [player?.playing, onPlay, onPause]);

    const togglePlay = () => {
        if (player) {
            if (player.playing) {
                player.pause();
            } else {
                player.play();
            }
        }
    };

    if (!player) {
        return (
            <View style={[styles.container, style]}>
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#ffffff" />
                </View>
            </View>
        );
    }

    return (
        <View style={[styles.container, style]}>
            <VideoView
                player={player}
                style={styles.video}
                contentFit="contain"
                nativeControls={false}
                allowsFullscreen={false}
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
                {player.playing ? (
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
        aspectRatio: 16 / 9,
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
