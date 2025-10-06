'use client';

import React, { Suspense, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { useGLTF, OrbitControls, Text, Html } from '@react-three/drei';
import { Object3D, Mesh } from 'three';
import { ThreeDProps, ThreeDTextItem, TwoDTextItem } from '@/types/docs/threeD';


// Model component for GLB files
const Model = ({ modelUrl, scale = 0.1 }: { modelUrl: string; scale: number }) => {
    const { scene } = useGLTF(modelUrl);

    useEffect(() => {
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
    }, [scene]);

    return <primitive object={scene} scale={scale} position={[0, 0, 0]} />;
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
    // Determine if src is a string (GLB model) or ReactNode (custom content)
    const isModelUrl = typeof src === 'string';
    const customContent = !isModelUrl ? src : null;
    console.log(customContent);

    return (
        <div
            className={`w-full rounded-3xl overflow-hidden border border-indigo-200 ${className}`}
            style={{ height: `${height}px` }}
        >
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
                        <Model modelUrl={src} scale={scale} />
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
