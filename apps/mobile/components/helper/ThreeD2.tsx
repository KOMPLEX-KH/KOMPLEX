import React, { useRef, useState, useEffect, Suspense } from 'react';
import { View, StyleSheet, PanResponder, Pressable, ActivityIndicator } from 'react-native';
import { Canvas, useFrame, useThree } from '@react-three/fiber/native';
import * as THREE from 'three';
import { Asset } from 'expo-asset';
import { loadAsync } from 'expo-three';
import { ZoomIn, ZoomOut, ArrowLeft, ArrowRight, ArrowUp, ArrowDown } from 'lucide-react-native';
import { tw } from '@/utils/styles';
import Slider from '@react-native-community/slider';
import { Text } from '@/components/common/Text';

// Camera controller component to update camera position in render loop
// Uses a ref callback to get the latest distance value
function CameraController({
    distanceRef,
    positionXRef,
    positionYRef,
    cameraRef
}: {
    distanceRef: React.MutableRefObject<number>;
    positionXRef: React.MutableRefObject<number>;
    positionYRef: React.MutableRefObject<number>;
    cameraRef: React.MutableRefObject<THREE.PerspectiveCamera | null>;
}) {
    const { camera } = useThree();

    // Store camera in ref when component mounts
    // Check for PerspectiveCamera properties instead of instanceof (handles multiple Three.js instances)
    useEffect(() => {
        if (camera && 'fov' in camera && typeof (camera as any).updateProjectionMatrix === 'function') {
            cameraRef.current = camera as THREE.PerspectiveCamera;
            console.log('[CameraController] Camera ref set, position:', camera.position.toArray());
        }
    }, [camera, cameraRef]);

    useFrame(() => {
        // Update camera position every frame based on refs
        // This ensures smooth updates even if state hasn't updated yet
        if (camera && 'fov' in camera) {
            const targetDistance = distanceRef.current;
            const targetX = positionXRef.current;
            const targetY = positionYRef.current;

            // Update position if changed
            let needsUpdate = false;
            if (Math.abs(camera.position.z - targetDistance) > 0.001) {
                camera.position.z = targetDistance;
                needsUpdate = true;
            }
            if (Math.abs(camera.position.x - targetX) > 0.001) {
                camera.position.x = targetX;
                needsUpdate = true;
            }
            if (Math.abs(camera.position.y - targetY) > 0.001) {
                camera.position.y = targetY;
                needsUpdate = true;
            }

            if (needsUpdate) {
                (camera as any).updateProjectionMatrix();
            }
        }
    });

    return null;
}

export interface ThreeD2Props {
    src?: string;
    scale?: number;
    target?: [number, number, number];
    height?: number;
    interactive?: boolean; // Enable rotation controls
    canvasBackgroundColor?: string;
}

// Model component that loads GLB
function Model({
    url,
    scale = 1,
    target = [0, 0, 0],
    rotation,
    interactive,
    onLoad,
    onError
}: {
    url: string;
    scale?: number;
    target?: [number, number, number];
    rotation?: { x: number; y: number };
    interactive?: boolean;
    onLoad?: () => void;
    onError?: (error: string) => void;
}) {
    const [scene, setScene] = useState<THREE.Group | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const sceneRef = useRef<THREE.Group | null>(null);

    useEffect(() => {
        let isMounted = true;

        const loadModel = async () => {
            try {
                setLoading(true);
                let localUri: string;

                if (url.startsWith('http') || url.startsWith('https://')) {
                    const asset = Asset.fromURI(url);
                    await asset.downloadAsync();
                    if (!asset.localUri) {
                        throw new Error('Failed to download model');
                    }
                    localUri = asset.localUri;
                } else {
                    const fullUrl = `https://assets.komplex.app${url}`;
                    const asset = Asset.fromURI(fullUrl);
                    await asset.downloadAsync();
                    if (!asset.localUri) {
                        throw new Error('Failed to download model');
                    }
                    localUri = asset.localUri;
                }

                // Suppress texture errors
                const originalError = console.error;
                console.error = (...args: any[]) => {
                    const msg = String(args[0] || '');
                    if (msg.includes('texture') || msg.includes('Blob') || msg.includes('GLTFLoader')) {
                        return;
                    }
                    originalError(...args);
                };

                try {
                    const { scene: modelScene } = await loadAsync(localUri);
                    console.error = originalError;

                    if (!isMounted) return;

                    // Calculate bounding box and center
                    const box = new THREE.Box3().setFromObject(modelScene);
                    const center = box.getCenter(new THREE.Vector3());
                    const size = box.getSize(new THREE.Vector3());

                    // Center the model
                    modelScene.position.sub(center);
                    modelScene.position.add(new THREE.Vector3(target[0], target[1], target[2]));

                    // Apply scale
                    if (size.x === 0 && size.y === 0 && size.z === 0) {
                        modelScene.scale.set(scale * 20, scale * 20, scale * 20);
                    } else {
                        const maxDim = Math.max(size.x, size.y, size.z);
                        let finalScale = scale;
                        if (scale <= 0 || scale > 10) {
                            finalScale = maxDim > 0 ? 20 / maxDim : 20;
                        } else {
                            finalScale = scale * (maxDim < 0.1 ? 20 : 1);
                        }
                        modelScene.scale.set(finalScale, finalScale, finalScale);
                    }

                    // Ensure materials are visible
                    modelScene.traverse((child) => {
                        if (child instanceof THREE.Mesh) {
                            if (child.material) {
                                if (Array.isArray(child.material)) {
                                    child.material.forEach((mat) => {
                                        mat.visible = true;
                                        mat.needsUpdate = true;
                                    });
                                } else {
                                    child.material.visible = true;
                                    child.material.needsUpdate = true;
                                    if (
                                        child.material instanceof THREE.MeshStandardMaterial ||
                                        child.material instanceof THREE.MeshBasicMaterial ||
                                        child.material instanceof THREE.MeshPhongMaterial
                                    ) {
                                        if (!child.material.color || child.material.color.getHex() === 0x000000) {
                                            child.material.color = new THREE.Color(0x888888);
                                        }
                                    }
                                }
                            }
                        }
                    });

                    setScene(modelScene);
                    sceneRef.current = modelScene;
                    if (isMounted) {
                        setLoading(false);
                        setError(null);
                        onLoad?.();
                    }
                } catch (err) {
                    console.error = originalError;
                    const errorMessage = err instanceof Error ? err.message : String(err);
                    if (isMounted) {
                        setLoading(false);
                        setError(errorMessage);
                        onError?.(errorMessage);
                    }
                }
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : String(err);
                console.error('Error loading model:', err);
                if (isMounted) {
                    setLoading(false);
                    setError(errorMessage);
                    onError?.(errorMessage);
                }
            }
        };

        loadModel();

        return () => {
            isMounted = false;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url, scale, target]); // onLoad and onError are stable refs, no need to include

    // Apply rotation when interactive
    useEffect(() => {
        if (sceneRef.current && rotation && interactive) {
            sceneRef.current.rotation.y = rotation.x;
            sceneRef.current.rotation.x = rotation.y;
        }
    }, [rotation, interactive]);

    if (error) {
        return null; // Error will be handled by parent component
    }

    if (loading || !scene) {
        return null; // Loading will be handled by parent component
    }

    // @ts-ignore
    return <primitive object={scene} />;
}

// Simple cube for testing
function TestCube({ rotation }: { rotation?: { x: number; y: number } }) {
    return (
        // @ts-ignore
        <mesh scale={3} rotation={rotation ? [rotation.y, rotation.x, 0] : [0, 0, 0]}>
            {/* @ts-ignore */}
            <boxGeometry />
            {/* @ts-ignore */}
            <meshStandardMaterial color="tomato" />
            {/* @ts-ignore */}
        </mesh>
    );
}

export default function ThreeD2({
    src,
    scale = 0.7,
    target = [0, 0, 0],
    height = 400,
    interactive = false,
    canvasBackgroundColor = 'white',
}: ThreeD2Props) {
    const [rotation, setRotation] = useState({ x: 0, y: 0 });
    const [cameraDistance, setCameraDistance] = useState(5); // Zoom level (2-20)
    const [cameraX, setCameraX] = useState(0); // Camera X position
    const [cameraY, setCameraY] = useState(0); // Camera Y position
    const [loading, setLoading] = useState(!!src); // Loading state
    const [error, setError] = useState<string | null>(null); // Error state
    const [modelKey, setModelKey] = useState(0); // Key to force Model re-render on retry

    const cameraDistanceRef = useRef(5); // Ref to store current distance for useFrame
    const cameraXRef = useRef(0); // Ref to store current X position for useFrame
    const cameraYRef = useRef(0); // Ref to store current Y position for useFrame
    const lastTouch = useRef({ x: 0, y: 0 });
    const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
    const showTestCube = !src;

    // Keep refs in sync with state
    useEffect(() => {
        cameraDistanceRef.current = cameraDistance;
    }, [cameraDistance]);

    useEffect(() => {
        cameraXRef.current = cameraX;
    }, [cameraX]);

    useEffect(() => {
        cameraYRef.current = cameraY;
    }, [cameraY]);

    // Zoom limits
    const MIN_ZOOM = 2;
    const MAX_ZOOM = 20;
    const ZOOM_STEP = 0.5;

    // Camera position limits
    const MIN_POSITION = -10;
    const MAX_POSITION = 10;
    const POSITION_STEP = 0.5;

    // Zoom functions
    // Note: Lower camera distance = closer = more zoomed in
    //       Higher camera distance = further = more zoomed out
    const zoomIn = () => {
        // Zoom in = decrease camera distance (bring camera closer)
        setCameraDistance((prev) => {
            const newDistance = Math.max(MIN_ZOOM, prev - ZOOM_STEP);
            cameraDistanceRef.current = newDistance;
            // CameraController's useFrame will update the camera
            return newDistance;
        });
    };

    const zoomOut = () => {
        // Zoom out = increase camera distance (move camera away)
        setCameraDistance((prev) => {
            const newDistance = Math.min(MAX_ZOOM, prev + ZOOM_STEP);
            cameraDistanceRef.current = newDistance;
            // CameraController's useFrame will update the camera
            return newDistance;
        });
    };

    const handleZoomChange = (value: number) => {
        // Slider value is 0-100, map to MIN_ZOOM-MAX_ZOOM
        // 0% = zoomed out (MAX_ZOOM), 100% = zoomed in (MIN_ZOOM)
        // Reverse the mapping so slider right = zoom in
        const zoomValue = MAX_ZOOM - (value / 100) * (MAX_ZOOM - MIN_ZOOM);
        const clampedValue = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, zoomValue));

        // Update ref first (for CameraController) - CRITICAL
        // CameraController's useFrame will pick this up and update the camera every frame
        cameraDistanceRef.current = clampedValue;

        // Update state (triggers useEffect as backup)
        setCameraDistance(clampedValue);
    };

    // Camera position functions
    const moveCameraLeft = () => {
        setCameraX((prev) => {
            const newX = Math.max(MIN_POSITION, prev - POSITION_STEP);
            cameraXRef.current = newX;
            return newX;
        });
    };

    const moveCameraRight = () => {
        setCameraX((prev) => {
            const newX = Math.min(MAX_POSITION, prev + POSITION_STEP);
            cameraXRef.current = newX;
            return newX;
        });
    };

    const moveCameraUp = () => {
        setCameraY((prev) => {
            const newY = Math.min(MAX_POSITION, prev + POSITION_STEP);
            cameraYRef.current = newY;
            return newY;
        });
    };

    const moveCameraDown = () => {
        setCameraY((prev) => {
            const newY = Math.max(MIN_POSITION, prev - POSITION_STEP);
            cameraYRef.current = newY;
            return newY;
        });
    };

    const handleXPositionChange = (value: number) => {
        // Slider value is 0-100, map to MIN_POSITION-MAX_POSITION
        const positionValue = MIN_POSITION + (value / 100) * (MAX_POSITION - MIN_POSITION);
        const clampedValue = Math.max(MIN_POSITION, Math.min(MAX_POSITION, positionValue));
        cameraXRef.current = clampedValue;
        setCameraX(clampedValue);
    };

    const handleYPositionChange = (value: number) => {
        // Slider value is 0-100, map to MIN_POSITION-MAX_POSITION
        const positionValue = MIN_POSITION + (value / 100) * (MAX_POSITION - MIN_POSITION);
        const clampedValue = Math.max(MIN_POSITION, Math.min(MAX_POSITION, positionValue));
        cameraYRef.current = clampedValue;
        setCameraY(clampedValue);
    };

    const getXSliderValue = () => {
        const value = ((cameraX - MIN_POSITION) / (MAX_POSITION - MIN_POSITION)) * 100;
        return Math.max(0, Math.min(100, value));
    };

    const getYSliderValue = () => {
        const value = ((cameraY - MIN_POSITION) / (MAX_POSITION - MIN_POSITION)) * 100;
        return Math.max(0, Math.min(100, value));
    };

    // Model loading handlers
    const handleModelLoad = useRef(() => {
        setLoading(false);
        setError(null);
    }).current;

    const handleModelError = useRef((errorMessage: string) => {
        setLoading(false);
        setError(errorMessage);
    }).current;

    const handleRetry = () => {
        setError(null);
        setLoading(true);
        // Force re-render of Model component by updating key
        setModelKey((prev) => prev + 1);
    };

    // Get slider value from camera distance
    // Reverse: camera distance 2 (zoomed in) = 100%, distance 20 (zoomed out) = 0%
    const getSliderValue = () => {
        const value = ((MAX_ZOOM - cameraDistance) / (MAX_ZOOM - MIN_ZOOM)) * 100;
        return Math.max(0, Math.min(100, value));
    };

    // Pan responder for interactive mode - only capture touches on the canvas, not controls
    const responder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: (_, g) => {
                // Only capture if interactive and single touch
                return interactive && g.numberActiveTouches === 1;
            },
            onStartShouldSetPanResponderCapture: () => false, // Don't capture at capture phase
            onMoveShouldSetPanResponder: (_, g) => interactive && g.numberActiveTouches === 1,
            onMoveShouldSetPanResponderCapture: () => false, // Don't capture at capture phase
            onPanResponderGrant: (_, g) => {
                if (interactive) {
                    lastTouch.current = { x: g.moveX, y: g.moveY };
                }
            },
            onPanResponderMove: (_, g) => {
                if (interactive && g.numberActiveTouches === 1) {
                    const dx = g.moveX - lastTouch.current.x;
                    const dy = g.moveY - lastTouch.current.y;
                    lastTouch.current = { x: g.moveX, y: g.moveY };
                    setRotation((r) => ({
                        x: r.x + dx * 0.01,
                        y: Math.max(-Math.PI / 2, Math.min(Math.PI / 2, r.y + dy * 0.01)),
                    }));
                }
            },
        })
    ).current;

    // Get background color
    const getBackgroundColor = (): string => {
        if (canvasBackgroundColor === 'black') return '#000000';
        if (canvasBackgroundColor === 'white') return '#ffffff';
        if (canvasBackgroundColor === 'grey' || canvasBackgroundColor === 'gray') return '#808080';
        return canvasBackgroundColor.startsWith('#') ? canvasBackgroundColor : `#${canvasBackgroundColor}`;
    };

    const containerProps = interactive ? responder.panHandlers : {};

    // Update camera position when distance changes (backup, CameraController handles it primarily)
    useEffect(() => {
        if (cameraRef.current && 'fov' in cameraRef.current) {
            cameraRef.current.position.z = cameraDistance;
            (cameraRef.current as any).updateProjectionMatrix();
        }
    }, [cameraDistance]);

    return (
        <>
            <View style={[styles.container, height ? { height } : styles.flexContainer]}>
                {/* Canvas Container - Takes full space */}
                <View style={styles.canvasContainer} {...containerProps}>
                    <Canvas
                        camera={{ position: [cameraX, cameraY, cameraDistance], fov: 60 }}
                        onCreated={({ scene, camera }) => {
                            scene.background = new THREE.Color(getBackgroundColor());
                            // Check if camera has PerspectiveCamera properties (fov, aspect, etc.)
                            // This avoids instanceof issues with multiple Three.js instances
                            if (camera && 'fov' in camera && typeof (camera as any).updateProjectionMatrix === 'function') {
                                cameraRef.current = camera as THREE.PerspectiveCamera;
                                camera.position.set(cameraX, cameraY, cameraDistance);
                                (camera as any).updateProjectionMatrix();
                                console.log('[Canvas] Camera ref set, position:', camera.position.toArray());
                            }
                        }}
                    >
                        {/* Camera controller to update zoom and position continuously */}
                        <CameraController
                            distanceRef={cameraDistanceRef}
                            positionXRef={cameraXRef}
                            positionYRef={cameraYRef}
                            cameraRef={cameraRef}
                        />
                        {/* @ts-ignore - R3F light props are valid */}
                        <ambientLight intensity={0.6} />
                        {/* @ts-ignore - R3F light props are valid */}
                        <directionalLight position={[5, 5, 5]} intensity={1} />

                        {showTestCube ? (
                            <TestCube rotation={interactive ? rotation : undefined} />
                        ) : (
                            <Suspense fallback={null} key={modelKey}>
                                <Model
                                    url={src!}
                                    scale={scale}
                                    target={target}
                                    rotation={interactive ? rotation : undefined}
                                    interactive={interactive}
                                    onLoad={handleModelLoad}
                                    onError={handleModelError}
                                />
                            </Suspense>
                        )}
                    </Canvas>

                    {/* Loading Overlay */}
                    {loading && src && (
                        <View style={styles.loadingContainer} pointerEvents="none">
                            <ActivityIndicator size="large" color="#4f46e5" />
                            <Text style={tw("text-white mt-4")}>កំពុងទាញយកម៉ូឌែល 3D...</Text>
                        </View>
                    )}

                    {/* Error Overlay */}
                    {error && (
                        <View style={styles.errorContainer} pointerEvents="box-none">
                            <Text style={tw("text-red-600 text-center mb-4")}>{error}</Text>
                            <Pressable
                                onPress={handleRetry}
                                style={tw("bg-red-600 px-4 py-2 rounded-lg")}
                            >
                                <Text style={tw("text-white")}>ព្យាយាមម្តងទៀត</Text>
                            </Pressable>
                        </View>
                    )}
                </View>
            </View>

            {/* Camera Controls - Floating below, detached from container */}
            {interactive && (
                <View style={tw("px-3 py-2 gap-2")}>
                    {/* Zoom Controls */}
                    <View style={tw("flex-row items-center gap-2")}>
                        <Pressable
                            onPress={zoomOut}
                            style={tw("w-8 h-8 rounded-full border border-indigo-600 bg-indigo-50 justify-center items-center")}
                            disabled={cameraDistance >= MAX_ZOOM}
                        >
                            <ZoomOut
                                size={16}
                                color={cameraDistance >= MAX_ZOOM ? "#9ca3af" : "#4f46e5"}
                            />
                        </Pressable>

                        <View style={tw("flex-1 h-6 justify-center")}>
                            <Slider
                                style={tw("w-full h-5")}
                                minimumValue={0}
                                maximumValue={100}
                                value={getSliderValue()}
                                onValueChange={handleZoomChange}
                                onSlidingComplete={handleZoomChange}
                                minimumTrackTintColor="#4f46e5"
                                maximumTrackTintColor="#e5e7eb"
                                thumbTintColor="#4f46e5"
                            />
                        </View>

                        <Pressable
                            onPress={zoomIn}
                            style={tw("w-8 h-8 rounded-full border border-indigo-600 bg-indigo-50 justify-center items-center")}
                            disabled={cameraDistance <= MIN_ZOOM}
                        >
                            <ZoomIn
                                size={16}
                                color={cameraDistance <= MIN_ZOOM ? "#9ca3af" : "#4f46e5"}
                            />
                        </Pressable>
                    </View>

                    {/* X Position Controls */}
                    <View style={tw("flex-row items-center gap-2")}>
                        <Pressable
                            onPress={moveCameraLeft}
                            style={tw("w-8 h-8 rounded-full border border-indigo-600 bg-indigo-50 justify-center items-center")}
                            disabled={cameraX <= MIN_POSITION}
                        >
                            <ArrowLeft
                                size={16}
                                color={cameraX <= MIN_POSITION ? "#9ca3af" : "#4f46e5"}
                            />
                        </Pressable>

                        <View style={tw("flex-1 h-6 justify-center")}>
                            <Slider
                                style={tw("w-full h-5")}
                                minimumValue={0}
                                maximumValue={100}
                                value={getXSliderValue()}
                                onValueChange={handleXPositionChange}
                                onSlidingComplete={handleXPositionChange}
                                minimumTrackTintColor="#4f46e5"
                                maximumTrackTintColor="#e5e7eb"
                                thumbTintColor="#4f46e5"
                            />
                        </View>

                        <Pressable
                            onPress={moveCameraRight}
                            style={tw("w-8 h-8 rounded-full border border-indigo-600 bg-indigo-50 justify-center items-center")}
                            disabled={cameraX >= MAX_POSITION}
                        >
                            <ArrowRight
                                size={16}
                                color={cameraX >= MAX_POSITION ? "#9ca3af" : "#4f46e5"}
                            />
                        </Pressable>
                    </View>

                    {/* Y Position Controls */}
                    <View style={tw("flex-row items-center gap-2")}>
                        <Pressable
                            onPress={moveCameraDown}
                            style={tw("w-8 h-8 rounded-full border border-indigo-600 bg-indigo-50 justify-center items-center")}
                            disabled={cameraY <= MIN_POSITION}
                        >
                            <ArrowDown
                                size={16}
                                color={cameraY <= MIN_POSITION ? "#9ca3af" : "#4f46e5"}
                            />
                        </Pressable>

                        <View style={tw("flex-1 h-6 justify-center")}>
                            <Slider
                                style={tw("w-full h-5")}
                                minimumValue={0}
                                maximumValue={100}
                                value={getYSliderValue()}
                                onValueChange={handleYPositionChange}
                                onSlidingComplete={handleYPositionChange}
                                minimumTrackTintColor="#4f46e5"
                                maximumTrackTintColor="#e5e7eb"
                                thumbTintColor="#4f46e5"
                            />
                        </View>

                        <Pressable
                            onPress={moveCameraUp}
                            style={tw("w-8 h-8 rounded-full border border-indigo-600 bg-indigo-50 justify-center items-center")}
                            disabled={cameraY >= MAX_POSITION}
                        >
                            <ArrowUp
                                size={16}
                                color={cameraY >= MAX_POSITION ? "#9ca3af" : "#4f46e5"}
                            />
                        </Pressable>
                    </View>
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#fff',
        borderRadius: 12,
        overflow: 'hidden',
        position: 'relative',
    },
    flexContainer: {
        flex: 1,
    },
    canvasContainer: {
        flex: 1,
    },
    loadingContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 10,
    },
    errorContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        zIndex: 10,
        padding: 20,
    },
});
