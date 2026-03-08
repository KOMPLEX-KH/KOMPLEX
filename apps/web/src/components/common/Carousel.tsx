'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { Media } from '@core-types/api-types/media';


interface CarouselProps {
    media: Media[];
    autoPlay?: boolean;
    showControls?: boolean;
}

export default function Carousel({
    media,
    autoPlay = false,
    showControls = true
}: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const videoRefs = useRef<HTMLVideoElement[]>([]);

    useEffect(() => {
        setCurrentIndex(0);
        setIsPlaying(false);
    }, [media.length]);

    useEffect(() => {
        if (autoPlay && media[currentIndex]?.type === 'video') {
            setIsPlaying(true);
        }
    }, [currentIndex, autoPlay, media]);

    const goToNext = useCallback((e?: React.MouseEvent<HTMLButtonElement>) => {
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        if (currentIndex < media.length - 1) {
            setCurrentIndex((prev) => (prev + 1));
        } else {
            setCurrentIndex(0);
        }
    }, [currentIndex, media.length]);

    const goToPrevious = useCallback((e?: React.MouseEvent<HTMLButtonElement>) => {
        if (e) {
            e.preventDefault();
            e.stopPropagation();
        }
        if (currentIndex > 0) {
            setCurrentIndex((prev) => (prev - 1));
        } else {
            setCurrentIndex(media.length - 1);
        }
    }, [currentIndex, media.length]);

    const handleVideoRef = useCallback((el: HTMLVideoElement | null, index: number) => {
        if (el) {
            videoRefs.current[index] = el;
        }
    }, []);

    const togglePlayPause = useCallback(() => {
        const currentVideo = videoRefs.current[currentIndex];
        if (currentVideo && media[currentIndex]?.type === 'video') {
            if (isPlaying) {
                currentVideo.pause();
                setIsPlaying(false);
            } else {
                currentVideo.play();
                setIsPlaying(true);
            }
        }
    }, [currentIndex, media, isPlaying]);

    const toggleMute = () => {
        const currentVideo = videoRefs.current[currentIndex];
        if (currentVideo && media[currentIndex]?.type === 'video') {
            currentVideo.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    const handleVideoEnded = () => {
        if (autoPlay) {
            goToNext();
        } else {
            setIsPlaying(false);
        }
    };

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                goToPrevious();
            } else if (e.key === 'ArrowRight') {
                goToNext();
            } else if (e.key === ' ' && media[currentIndex]?.type === 'video') {
                e.preventDefault();
                togglePlayPause();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [goToNext, goToPrevious, currentIndex, media, togglePlayPause]);

    if (!media || media.length === 0) {
        return (
            <div className="w-full h-64 bg-gray-200 rounded-3xl flex items-center justify-center">
                <p className="text-gray-500">No media available</p>
            </div>
        );
    }

    return (
        <div className="relative w-full overflow-hidden rounded-3xl">
            {/* Carousel Container */}
            <div className="relative w-full h-full">
                {/* Media Container */}
                <div
                    className="flex transition-transform duration-300 ease-out"
                    style={{
                        width: `${media.length * 100}%`
                    }}
                >
                    {media.map((item, index) => (
                        <div
                            key={index}
                            className="w-full h-full flex-shrink-0"
                            style={{ width: `${100 / media.length}%`, transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {item.type === 'image' ? (
                                <img
                                    src={item.url}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full object-cover aspect-video"
                                    draggable={false}
                                    onError={(e) => {
                                        e.currentTarget.src = "/image-error.png";
                                    }}
                                />
                            ) : (
                                <video
                                    ref={(el) => handleVideoRef(el, index)}
                                    src={item.url}
                                    className="w-full h-full object-cover aspect-video"
                                    onEnded={handleVideoEnded}
                                    onPlay={() => setIsPlaying(true)}
                                    onPause={() => setIsPlaying(false)}
                                    muted={isMuted}
                                    loop={!autoPlay}
                                    playsInline
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Video Controls */}
            {showControls && media[currentIndex]?.type === 'video' && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-4 py-2 z-20">
                    <button
                        onClick={togglePlayPause}
                        className="text-white hover:text-gray-200 transition-colors"
                        aria-label={isPlaying ? 'Pause' : 'Play'}
                    >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                    </button>
                    <button
                        onClick={toggleMute}
                        className="text-white hover:text-gray-200 transition-colors"
                        aria-label={isMuted ? 'Unmute' : 'Mute'}
                    >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                    </button>
                </div>
            )}

            {/* Navigation Arrows */}
            {media.length > 1 && (
                <>
                    <button
                        onClick={goToPrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 hover:bg-black/50 flex items-center justify-center transition-all duration-200 hover:scale-105 z-10 rounded-r-full"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft className="w-5 h-5 text-white" />
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/30 hover:bg-black/50 flex items-center justify-center transition-all duration-200 hover:scale-105 z-10 rounded-l-full"
                        aria-label="Next slide"
                    >
                        <ChevronRight className="w-5 h-5 text-white" />
                    </button>
                </>
            )}

            {/* Media Counter */}
            {media.length > 1 && (
                <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm z-10">
                    {currentIndex + 1} / {media.length}
                </div>
            )}
        </div>
    );
}
