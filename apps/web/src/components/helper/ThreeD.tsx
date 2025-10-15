'use client';

import React, { Suspense, useEffect, useState, Component, ReactNode } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Text, Html, useProgress } from '@react-three/drei';
import { Object3D, Mesh } from 'three';
import { ThreeDProps } from '@/types/docs/threeD';
import { Logo } from '../common/Logo';

// Error Boundary for catching React rendering errors
class ThreeDErrorBoundary extends Component<
    { children: ReactNode; onError: (error: Error) => void },
    { hasError: boolean }
> {
    constructor(props: { children: ReactNode; onError: (error: Error) => void }) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(): { hasError: boolean } {
        return { hasError: true };
    }

    componentDidCatch(error: Error) {
        this.props.onError(error);
    }

    render() {
        if (this.state.hasError) {
            return null; // Let the parent handle the error UI
        }

        return this.props.children;
    }
}


// Progress tracker component
const ProgressTracker = ({ onProgress }: { onProgress: (progress: number) => void }) => {
    const { progress } = useProgress();

    useEffect(() => {
        onProgress(progress);
    }, [progress, onProgress]);

    return null;
};

// Model component for GLB files with error handling
const Model = ({ modelUrl, scale = 0.1, onError }: {
    modelUrl: string;
    scale: number;
    onError: (error: Error) => void;
}) => {
    const { scene } = useGLTF(modelUrl);

    useEffect(() => {
        try {
            const findMesh = (obj: Object3D): Mesh | null => {
                if (obj.type === 'Mesh') return obj as Mesh;
                for (const child of obj.children) {
                    const found = findMesh(child);
                    if (found) return found;
                }
                return null;
            };
            const mesh = findMesh(scene);
            if (mesh) mesh.position.set(0, 0, 0);
        } catch (err) {
            onError(err as Error);
        }
    }, [scene, onError]);

    return <primitive object={scene} scale={scale} position={[0, 0, 0]} />;
};

// Modern overlay loader component
const ModelLoader: React.FC<{ progress: number }> = () => {
    return (
        <div className="absolute inset-0 bg-gray-400 backdrop-blur-sm flex items-center justify-center z-10">
            <div className="text-center">
                {/* Spinning loader */}
                <Logo isLoading={true} size="xl" isVertical={true} showText={false} />

                <div className="text-white/70 text-lg my-4">
                    កំពុងទាញយកម៉ូឌែល 3D...
                </div>
            </div>
        </div>
    );
};

// Error overlay component
const ModelError: React.FC<{
    error: Error;
    onRetry: () => void;
    modelUrl: string;
}> = ({ error, onRetry, modelUrl }) => {
    const is404 = error.message.includes('404') || error.message.includes('Not Found');
    const isNetworkError = error.message.includes('Network') || error.message.includes('fetch');

    return (
        <div className="absolute inset-0 bg-red-50/50 backdrop-blur-sm flex items-center justify-center z-10">
            <div className="text-center max-w-md mx-auto p-6">
                {/* Error Icon */}
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                    </svg>
                </div>

                {/* Error Message */}
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                    {is404 ? 'ម៉ូឌែល 3D រកមិនឃើញ' : 'មានបញ្ហាក្នុងការផ្ទុកម៉ូឌែល'}
                </h3>

                <p className="text-red-600 text-sm mb-4">
                    {is404
                        ? 'ម៉ូឌែល 3D នេះមិនមានឬមិនអាចចូលដំណើរការបានទេ។'
                        : isNetworkError
                            ? 'មានបញ្ហាក្នុងការតភ្ជាប់។ សូមពិនិត្យការតភ្ជាប់អ៊ីនធឺណិតរបស់អ្នក។'
                            : 'មានបញ្ហាក្នុងការផ្ទុកម៉ូឌែល 3D នេះ។'
                    }
                </p>

                {/* Technical Details (for development)
                {process.env.NODE_ENV === 'development' && (
                    <details className="text-xs text-red-500 mb-4 text-left">
                        <summary className="cursor-pointer mb-2">Technical Details</summary>
                        <div className="bg-red-100 p-2 rounded text-xs">
                            <p><strong>URL:</strong> {modelUrl}</p>
                            <p><strong>Error:</strong> {error.message}</p>
                        </div>
                    </details>
                )} */}

                {/* Retry Button */}
                <button
                    onClick={onRetry}
                    className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-2 mx-auto"
                >

                    ព្យាយាមម្តងទៀត
                </button>
            </div>
        </div>
    );
};

export const ThreeD: React.FC<ThreeDProps> = ({
    src,
    scale = 0.7,
    target = [0, 0, 0],
    canvasBackground,
    canvasBackgroundColor = 'black',
    threeDText,
    twoDText,
    height = 400,
    className = ''
}) => {
    const [loadingProgress, setLoadingProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [source, setSource] = useState("https://assets.komplex.app" + src);

    // Determine if src is a string (GLB model) or ReactNode (custom content)
    const isModelUrl = typeof src === 'string';
    const customContent = !isModelUrl ? src : null;

    const handleProgress = (progress: number) => {
        setLoadingProgress(progress);
        if (progress === 100) {
            // Add a small delay before hiding loader for smooth transition
            setTimeout(() => setIsLoading(false), 300);
        }
    };

    const handleError = (err: Error) => {
        console.error('3D Model loading error:', err);
        setError(err);
        setHasError(true);
        setIsLoading(false);
    };

    const handleRetry = () => {
        setHasError(false);
        setError(null);
        setIsLoading(true);
        setLoadingProgress(0);
        // Force re-render by updating source
        setSource(prev => prev + '?retry=' + Date.now());
    };

    // Reset loading state when src changes
    useEffect(() => {
        if (isModelUrl) {
            setSource("https://assets.komplex.app" + src);
            setIsLoading(true);
            setLoadingProgress(0);
            setHasError(false);
            setError(null);
        } else {
            setIsLoading(false);
            setHasError(false);
            setError(null);
        }
    }, [src, isModelUrl]);

    return (
        <div
            className={`w-full rounded-3xl overflow-hidden border border-indigo-200 relative ${className}`}
            style={{ height: `${height}px` }}
        >
            {/* Loading overlay */}
            {isModelUrl && isLoading && !hasError && (
                <ModelLoader progress={loadingProgress} />
            )}

            {/* Error overlay */}
            {isModelUrl && hasError && error && (
                <ModelError
                    error={error}
                    onRetry={handleRetry}
                    modelUrl={source}
                />
            )}

            {customContent ? (
                // Render custom React Three Fiber content
                <Canvas className="w-full h-full">
                    <OrbitControls
                        enablePan
                        enableZoom
                        enableRotate
                        minDistance={1}
                        maxDistance={20}
                        target={target}
                    />
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[3, 5, 2]} intensity={1} />
                    <Suspense fallback={null}>
                        {customContent}
                    </Suspense>
                </Canvas>
            ) : isModelUrl ? (
                // Render GLB model
                <ThreeDErrorBoundary onError={handleError}>
                    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
                        <color attach="background" args={[canvasBackgroundColor]} />

                        <OrbitControls
                            enablePan
                            enableZoom
                            enableRotate
                            minDistance={1}
                            maxDistance={20}
                            target={target}
                        />

                        <Suspense fallback={null}>
                            <ProgressTracker onProgress={handleProgress} />
                            <Model
                                modelUrl={source}
                                scale={scale}
                                onError={handleError}
                            />
                        </Suspense>

                        {/* Procedural or custom background */}
                        {canvasBackground}

                        {/* 3D Text */}
                        {threeDText && (
                            Array.isArray(threeDText) ? (
                                threeDText.map((item, index) => (
                                    <Text
                                        key={index}
                                        position={item.position || [0, 2, -5]}
                                        fontSize={item.fontSize || 0.5}
                                        color={item.color || "white"}
                                        anchorX="center"
                                        anchorY="middle"
                                        rotation={item.rotation || [0, 0, 0]}
                                        font={"/fonts/Battambang-Regular.ttf"}
                                    >
                                        {item.content}
                                    </Text>
                                ))
                            ) : (
                                <Text
                                    position={threeDText.position || [0, 2, -5]}
                                    fontSize={threeDText.fontSize || 0.5}
                                    color={threeDText.color || "white"}
                                    anchorX="center"
                                    anchorY="middle"
                                    rotation={threeDText.rotation || [0, 0, 0]}
                                >
                                    {threeDText.content}
                                </Text>
                            )
                        )}

                        {/* 2D Text */}
                        {twoDText && (
                            <Html fullscreen>
                                {Array.isArray(twoDText) ? (
                                    twoDText.map((item, index) => (
                                        <div
                                            key={index}
                                            style={{
                                                color: 'white',
                                                fontSize: '1.2rem',
                                                textAlign: 'center',
                                                ...item.style
                                            }}
                                        >
                                            {item.content}
                                        </div>
                                    ))
                                ) : (
                                    <div
                                        style={{
                                            color: 'white',
                                            fontSize: '1.2rem',
                                            textAlign: 'center',
                                            ...twoDText.style
                                        }}
                                    >
                                        {twoDText.content}
                                    </div>
                                )}
                            </Html>
                        )}

                        <ambientLight intensity={0.5} />
                        <directionalLight position={[3, 5, 2]} intensity={1} />
                    </Canvas>
                </ThreeDErrorBoundary>
            ) : (
                // Fallback when no src is provided
                <div className="w-full h-full bg-gray-200 rounded-lg shadow-md flex items-center justify-center">
                    <div className="text-center">
                        <div className="w-16 h-16 text-gray-400 mx-auto mb-4">📦</div>
                        <p className="text-gray-500">3D content will be displayed here</p>
                    </div>
                </div>
            )}
        </div>
    );
};
