'use client';

import React, { useRef, useState, useCallback } from 'react';
import { Play, Pause } from 'lucide-react';

interface VideoPlayerProps {
    src: string;
    poster?: string;
    className?: string;
    onPlay?: () => void;
    onPause?: () => void;
    onEnded?: () => void;
    onTimeUpdate?: (currentTime: number) => void;
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
    src,
    poster,
    className = '',
    onPlay,
    onPause,
    onEnded,
    onTimeUpdate
}) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showButton, setShowButton] = useState(true);

    // Handle play/pause
    const togglePlay = useCallback(() => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
        }
    }, [isPlaying]);

    // Event handlers
    const handleLoadedMetadata = () => {
        // Video loaded, no action needed for simple player
    };

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            onTimeUpdate?.(videoRef.current.currentTime);
        }
    };

    const handlePlay = () => {
        setIsPlaying(true);
        onPlay?.();
    };

    const handlePause = () => {
        setIsPlaying(false);
        onPause?.();
    };

    const handleEnded = () => {
        setIsPlaying(false);
        onEnded?.();
    };

    // Auto-hide button after a delay
    React.useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (isPlaying) {
            timeout = setTimeout(() => {
                setShowButton(false);
            }, 2000);
        } else {
            setShowButton(true);
        }

        return () => {
            if (timeout) clearTimeout(timeout);
        };
    }, [isPlaying]);

    return (
        <div
            className={`relative group bg-black rounded-3xl overflow-hidden ${className}`}
            onClick={togglePlay}
            onMouseEnter={() => setShowButton(true)}
            onMouseLeave={() => {
                if (isPlaying) {
                    setShowButton(false);
                }
            }}
        >
            <video
                ref={videoRef}
                src={src}
                poster={poster}
                className="w-full h-full object-contain"
                onLoadedMetadata={handleLoadedMetadata}
                onTimeUpdate={handleTimeUpdate}
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handleEnded}
            />

            {/* Bottom Left Play/Pause Button */}
            <div className="absolute bottom-4 left-4">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        togglePlay();
                    }}
                    className={`p-2 bg-black/50 rounded-full hover:bg-black/70 transition-all duration-300 ${showButton ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                        }`}
                >
                    {isPlaying ? (
                        <Pause size={20} className="text-white" />
                    ) : (
                        <Play size={20} className="text-white ml-0.5" />
                    )}
                </button>
            </div>
        </div>
    );
};
