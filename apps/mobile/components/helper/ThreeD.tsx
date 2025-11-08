import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, ActivityIndicator, Pressable, PanResponder, Dimensions } from 'react-native';
import { GLView } from 'expo-gl';
import { Renderer, loadAsync } from 'expo-three';
import * as THREE from 'three';
import { Asset } from 'expo-asset';
import { ThreeDTextItem, TwoDTextItem } from '@core-types/docs/boxProps';
import { Text } from '@/components/common/Text';
import { tw } from '@/utils/styles';

/**
 * ThreeD Component for React Native using expo-gl and expo-three
 * 
 * Note: Texture loading errors may appear in the console but are non-fatal.
 * React Native doesn't support Blob creation from ArrayBuffer, which three.js
 * GLTFLoader uses for textures. Models will render successfully without textures.
 * 
 * To avoid texture errors:
 * - Use GLB files with embedded textures (not external texture files)
 * - Pre-process models to embed all textures into the GLB file
 * - Use models without textures or with vertex colors
 */

export interface ThreeDProps {
  src?: string | React.ReactNode;
  scale?: number;
  target?: [number, number, number];
  canvasBackground?: React.ReactNode;
  canvasBackgroundColor?: string;
  threeDText?: ThreeDTextItem | ThreeDTextItem[];
  twoDText?: TwoDTextItem | TwoDTextItem[];
  height?: number;
  style?: any;
}

export default function ThreeD({
  src = "/test.glb",
  scale = 0.7,
  target = [0, 0, 0],
  canvasBackground,
  canvasBackgroundColor = 'black',
  threeDText,
  twoDText,
  height = 400,
  style,
}: ThreeDProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const glViewRef = useRef<any>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const modelRef = useRef<THREE.Group | null>(null);
  const rotationRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number | null>(null);

  const modelUrl = typeof src === 'string'
    ? (src.startsWith('http') ? src : `https://assets.komplex.app${src}`)
    : null;

  // Convert background color to hex
  const getBackgroundColor = (): number => {
    if (canvasBackgroundColor === 'black') return 0x000000;
    if (canvasBackgroundColor === 'white') return 0xffffff;
    if (canvasBackgroundColor === 'grey' || canvasBackgroundColor === 'gray') return 0x808080;
    // Try to parse hex color
    const hex = canvasBackgroundColor.replace('#', '');
    return parseInt(hex, 16) || 0x000000;
  };

  // Pan responder for touch controls
  // Using a separate invisible layer to capture touches and prevent ScrollView scrolling
  const panResponder = useRef(
    PanResponder.create({
      // Aggressively capture ALL gestures immediately to prevent ScrollView from scrolling
      onStartShouldSetPanResponder: () => true,
      onStartShouldSetPanResponderCapture: () => true, // Capture at the capture phase
      onMoveShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponderCapture: () => true, // Always capture moves
      // Never allow termination - we own this gesture
      onPanResponderTerminationRequest: () => false,
      onPanResponderGrant: (evt) => {
        // Touch started - we've captured the gesture
        console.log('Pan responder granted');
      },
      onPanResponderMove: (evt, gestureState) => {
        // Rotate all objects in scene based on gesture
        if (sceneRef.current) {
          // User adjusted rotation speed back to 0.01
          rotationRef.current.y += gestureState.dx * 0.01;
          rotationRef.current.x += gestureState.dy * 0.01;

          // Rotate model if it exists
          if (modelRef.current) {
            modelRef.current.rotation.y = rotationRef.current.y;
            modelRef.current.rotation.x = rotationRef.current.x;
          }

          // Also rotate test objects for visual feedback
          sceneRef.current.children.forEach((child) => {
            if (child instanceof THREE.Mesh && (child.geometry.type === 'BoxGeometry' || child.geometry.type === 'SphereGeometry')) {
              child.rotation.y = rotationRef.current.y;
              child.rotation.x = rotationRef.current.x;
            }
          });
        }
      },
      onPanResponderRelease: () => {
        // Touch released
        console.log('Pan responder released');
      },
      onPanResponderTerminate: () => {
        // Gesture was terminated - shouldn't happen with our settings
      },
    })
  ).current;

  // Load GLB model from URL
  const loadModel = async (url: string) => {
    try {
      setLoading(true);
      setError(null);

      let localUri: string;

      // Handle remote URLs by creating an Asset
      if (url.startsWith('http')) {
        // Create an Asset from the remote URL
        const asset = Asset.fromURI(url);
        await asset.downloadAsync();
        // Use the localUri from the downloaded asset
        if (!asset.localUri) {
          throw new Error('Failed to download model file');
        }
        localUri = asset.localUri;
      } else {
        // For local paths, use as-is
        localUri = url;
      }

      // Suppress texture loading errors (non-fatal, model will still render)
      // These errors occur because React Native doesn't support Blob creation from ArrayBuffer
      const originalConsoleError = console.error;
      const textureErrorFilter = (message: any, ...args: any[]) => {
        // Check if this is a texture-related error
        const messageStr = String(message);
        const firstArg = args[0];
        const firstArgStr = firstArg ? JSON.stringify(firstArg) : '';

        if (
          messageStr.includes('GLTFLoader') ||
          messageStr.includes('texture') ||
          messageStr.includes('Blob') ||
          firstArgStr.includes('Creating blobs') ||
          firstArgStr.includes('ArrayBuffer')
        ) {
          // Suppress texture loading errors - they're non-fatal
          // Model will render without textures
          return;
        }
        originalConsoleError(message, ...args);
      };
      console.error = textureErrorFilter as typeof console.error;

      try {
        // Load GLB using expo-three's loadAsync with local URI
        // Texture errors are non-fatal - model will render without textures
        const { scene: modelScene } = await loadAsync(localUri);

        // Restore original console.error
        console.error = originalConsoleError;

        // Remove previous model if exists
        if (modelRef.current && sceneRef.current) {
          sceneRef.current.remove(modelRef.current);
          modelRef.current.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              child.geometry.dispose();
              if (Array.isArray(child.material)) {
                child.material.forEach((mat) => mat.dispose());
              } else {
                child.material.dispose();
              }
            }
          });
        }

        // Add new model
        const model = modelScene;
        modelRef.current = model;

        if (sceneRef.current && cameraRef.current) {
          // Ensure all materials are properly set up for visibility
          model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              // Make sure material is visible
              if (child.material) {
                if (Array.isArray(child.material)) {
                  child.material.forEach((mat) => {
                    mat.visible = true;
                    mat.needsUpdate = true;
                  });
                } else {
                  child.material.visible = true;
                  child.material.needsUpdate = true;
                  // If material has no color or is black, give it a default color
                  if (child.material instanceof THREE.MeshStandardMaterial ||
                    child.material instanceof THREE.MeshBasicMaterial ||
                    child.material instanceof THREE.MeshPhongMaterial) {
                    if (!child.material.color || child.material.color.getHex() === 0x000000) {
                      child.material.color = new THREE.Color(0x888888);
                    }
                  }
                }
              }
            }
          });

          sceneRef.current.add(model);

          // Calculate bounding box to auto-center and scale the model
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          const size = box.getSize(new THREE.Vector3());

          // Check if model has valid bounds
          if (size.x === 0 && size.y === 0 && size.z === 0) {
            console.warn('Model has zero size - might not be visible');
          }

          // Check if bounding box is valid
          if (size.x === 0 && size.y === 0 && size.z === 0) {
            console.warn('Model bounding box is zero - using default positioning');
            // Model might be at origin, just apply scale and position
            model.position.set(target[0], target[1], target[2]);
            // For tiny models, use aggressive scaling (reduced from 30 to 20)
            const defaultScale = scale > 0 ? scale * 20 : 20;
            model.scale.set(defaultScale, defaultScale, defaultScale);

            // Position camera at default distance - keep same as test objects
            cameraRef.current.position.set(0, 2, 8);
            cameraRef.current.lookAt(target[0], target[1], target[2]);
            cameraRef.current.updateProjectionMatrix();
          } else {
            // Center the model
            model.position.sub(center);
            model.position.add(new THREE.Vector3(target[0], target[1], target[2]));

            // Calculate scaled size after applying user scale
            const maxDim = Math.max(size.x, size.y, size.z);

            // Apply user-provided scale, or auto-scale to fit
            // Since the model is VERY small (0.01-0.027 units), we need to scale it up significantly
            // Further reduced scale multiplier for smaller size
            let finalScale = scale;
            if (scale <= 0 || scale > 10) {
              // Auto-scale: make the model fit nicely in the view
              // Reduced from 30 to 20 for even smaller, more manageable size
              finalScale = maxDim > 0 ? 20 / maxDim : 20; // Scale to ~20 units
            } else {
              // Even with user scale, multiply by a factor for tiny models
              // Reduced multiplier from 30 to 20
              finalScale = scale * (maxDim < 0.1 ? 20 : 1);
            }
            model.scale.set(finalScale, finalScale, finalScale);
            console.log('Applied scale:', finalScale, 'to model with size:', maxDim);

            // Calculate the actual size after scaling (create a new vector to avoid mutating)
            const scaledSize = size.clone().multiplyScalar(finalScale);
            const scaledMaxDim = Math.max(scaledSize.x, scaledSize.y, scaledSize.z);

            // Adjust camera to fit the scaled model with some padding
            const cameraTarget = new THREE.Vector3(target[0], target[1], target[2]);
            // Use a more conservative distance calculation
            const fov = cameraRef.current.fov * (Math.PI / 180);
            const distance = Math.max(scaledMaxDim / (2 * Math.tan(fov / 2)) * 2, 5);

            // Keep camera at similar position to test objects for consistency
            // Don't move camera too far - keep it close enough to see small models
            const finalDistance = Math.min(Math.max(distance, 3), 10); // Between 3 and 10 units
            cameraRef.current.position.set(
              cameraTarget.x,
              cameraTarget.y + 2, // Slight elevation like test objects
              cameraTarget.z + finalDistance
            );
            cameraRef.current.lookAt(cameraTarget);
            console.log('Camera positioned at:', cameraRef.current.position.toArray(), 'looking at:', cameraTarget.toArray(), 'scaledSize:', scaledMaxDim);
          }
          cameraRef.current.updateProjectionMatrix();

          const cameraTarget = new THREE.Vector3(target[0], target[1], target[2]);
          console.log('Model loaded successfully:', {
            originalCenter: center.toArray(),
            originalSize: size.toArray(),
            finalScale: model.scale.x,
            modelPosition: model.position.toArray(),
            cameraPosition: cameraRef.current.position.toArray(),
            cameraTarget: cameraTarget.toArray(),
            modelChildren: model.children.length,
            sceneChildren: sceneRef.current.children.length,
            cameraFOV: cameraRef.current.fov,
            cameraNear: cameraRef.current.near,
            cameraFar: cameraRef.current.far
          });

          // Force renderer update
          if (rendererRef.current) {
            rendererRef.current.render(sceneRef.current, cameraRef.current);
            console.log('Forced render after model load');
          }

          // Check if model has any meshes
          let meshCount = 0;
          model.traverse((child) => {
            if (child instanceof THREE.Mesh) {
              meshCount++;
              console.log('Found mesh:', {
                geometry: child.geometry?.type,
                material: child.material?.type || (Array.isArray(child.material) ? 'MultiMaterial' : 'unknown'),
                visible: child.visible,
                position: child.position.toArray()
              });
            }
          });
          console.log('Total meshes in model:', meshCount);
        }

        // Add 3D text if provided
        if (threeDText && sceneRef.current) {
          const texts = Array.isArray(threeDText) ? threeDText : [threeDText];
          texts.forEach((textItem) => {
            // Note: 3D text rendering in React Native is complex
            // For now, we'll skip it or implement a simplified version
            // You may want to use a library or render text as sprites
          });
        }

        setLoading(false);
      } catch (loadError) {
        // Restore original console.error before throwing
        console.error = originalConsoleError;
        throw loadError;
      }
    } catch (err) {
      // Only show error if it's not a texture-related error
      const errorMessage = err instanceof Error ? err.message : String(err);
      if (!errorMessage.includes('texture') && !errorMessage.includes('Blob')) {
        console.error('Error loading model:', err);
        setError(errorMessage);
      } else {
        // Texture errors are non-fatal, model might still render
        setLoading(false);
      }
      setLoading(false);
    }
  };

  // Initialize 3D scene
  const onContextCreate = async (gl: any) => {
    try {
      console.log('=== GL CONTEXT CREATED ===');
      console.log('GL Context:', {
        drawingBufferWidth: gl.drawingBufferWidth,
        drawingBufferHeight: gl.drawingBufferHeight,
        vendor: gl.getParameter(gl.VENDOR),
        renderer: gl.getParameter(gl.RENDERER),
        version: gl.getParameter(gl.VERSION)
      });

      // Create renderer
      const renderer = new Renderer({ gl });
      const { drawingBufferWidth, drawingBufferHeight } = gl;

      if (drawingBufferWidth === 0 || drawingBufferHeight === 0) {
        console.error('ERROR: GLView has zero dimensions!');
        setError('GLView has invalid dimensions');
        return;
      }

      renderer.setSize(drawingBufferWidth, drawingBufferHeight);

      // Force visible background color
      const bgColor = getBackgroundColor();
      const visibleBgColor = bgColor === 0 ? 0x888888 : bgColor; // Use light grey instead of black
      renderer.setClearColor(visibleBgColor, 1.0);
      renderer.shadowMap.enabled = false;
      renderer.autoClear = true;
      rendererRef.current = renderer;

      console.log('Renderer initialized:', {
        width: drawingBufferWidth,
        height: drawingBufferHeight,
        clearColor: visibleBgColor,
        glContext: !!gl,
        hasEndFrameEXP: typeof gl.endFrameEXP === 'function'
      });

      // Create scene with visible background
      const scene = new THREE.Scene();
      scene.background = new THREE.Color(visibleBgColor);
      sceneRef.current = scene;
      console.log('Scene created with background color:', visibleBgColor);

      // Create camera with wider field of view
      const camera = new THREE.PerspectiveCamera(
        50, // Reduced FOV for better viewing
        drawingBufferWidth / drawingBufferHeight,
        0.1,
        1000
      );
      // Initial camera position - will be adjusted when model loads
      camera.position.set(target[0], target[1], target[2] + 5);
      camera.lookAt(target[0], target[1], target[2]);
      cameraRef.current = camera;

      // Add lighting - multiple lights for better visibility
      const ambientLight = new THREE.AmbientLight(0xffffff, 1.0);
      scene.add(ambientLight);

      // Add directional lights from multiple angles
      const light1 = new THREE.DirectionalLight(0xffffff, 0.8);
      light1.position.set(5, 5, 5);
      scene.add(light1);

      const light2 = new THREE.DirectionalLight(0xffffff, 0.5);
      light2.position.set(-5, 5, -5);
      scene.add(light2);

      const light3 = new THREE.DirectionalLight(0xffffff, 0.3);
      light3.position.set(0, -5, 0);
      scene.add(light3);

      // Add a LARGE test cube to verify rendering works
      // Make it big and bright to ensure it's visible
      const testGeometry = new THREE.BoxGeometry(3, 3, 3);
      const testMaterial = new THREE.MeshBasicMaterial({
        color: 0x00ff00,
        wireframe: false,
        side: THREE.DoubleSide
      });
      const testCube = new THREE.Mesh(testGeometry, testMaterial);
      testCube.position.set(0, 0, 0);
      scene.add(testCube);
      console.log('Added LARGE green test cube (3x3x3) at origin');

      // Add another test object - a sphere
      const sphereGeometry = new THREE.SphereGeometry(1.5, 16, 16);
      const sphereMaterial = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: false,
        side: THREE.DoubleSide
      });
      const testSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
      testSphere.position.set(5, 0, 0);
      scene.add(testSphere);
      console.log('Added RED sphere at x=5');

      // Add a plane as background to verify rendering
      const planeGeometry = new THREE.PlaneGeometry(20, 20);
      const planeMaterial = new THREE.MeshBasicMaterial({
        color: 0x4444ff,
        side: THREE.DoubleSide
      });
      const plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.rotation.x = -Math.PI / 2;
      plane.position.y = -5;
      scene.add(plane);
      console.log('Added blue plane at y=-5');

      // Position camera to see all test objects clearly
      cameraRef.current.position.set(0, 2, 8);
      cameraRef.current.lookAt(0, 0, 0);
      cameraRef.current.updateProjectionMatrix();
      console.log('Camera positioned at [0, 2, 8] looking at origin');

      // Force initial render multiple times to ensure it works
      try {
        for (let i = 0; i < 5; i++) {
          renderer.render(scene, cameraRef.current);
          // @ts-ignore - endFrameEXP is provided by expo-gl
          gl.endFrameEXP();
        }
        console.log('✓ Initial render test completed - you should see GREEN CUBE, RED SPHERE, and BLUE PLANE');
      } catch (renderErr) {
        console.error('✗ Render test failed:', renderErr);
      }

      // Load model if URL is provided
      if (modelUrl) {
        await loadModel(modelUrl);
        // Keep test objects visible for now to verify everything works
        console.log('Model loaded - keeping test objects visible for debugging');
      } else {
        setLoading(false);
      }

      // Animation loop - make sure it runs continuously
      let frameCount = 0;
      let lastRenderTime = Date.now();
      const animate = () => {
        if (rendererRef.current && sceneRef.current && cameraRef.current) {
          try {
            // No auto-rotation - user controls rotation via pan responder gestures

            rendererRef.current.render(sceneRef.current, cameraRef.current);
            // @ts-ignore - endFrameEXP is provided by expo-gl
            gl.endFrameEXP();

            // Log every 60 frames to verify animation is running
            frameCount++;
            const now = Date.now();
            if (frameCount % 60 === 0) {
              const fps = 60000 / (now - lastRenderTime);
              console.log('Animation running:', {
                sceneObjects: sceneRef.current.children.length,
                fps: fps.toFixed(1),
                frameCount
              });
              lastRenderTime = now;
            }
          } catch (renderError) {
            console.error('Render error:', renderError);
          }
          animationFrameRef.current = requestAnimationFrame(animate);
        } else {
          console.error('Animation stopped - missing refs:', {
            renderer: !!rendererRef.current,
            scene: !!sceneRef.current,
            camera: !!cameraRef.current
          });
        }
      };
      animate();

      // Handle resize
      const subscription = Dimensions.addEventListener('change', () => {
        if (glViewRef.current && cameraRef.current && rendererRef.current && gl) {
          const { width, height } = Dimensions.get('window');
          cameraRef.current.aspect = width / height;
          cameraRef.current.updateProjectionMatrix();
          rendererRef.current.setSize(width, height);
        }
      });

      return () => {
        subscription?.remove();
      };
    } catch (err) {
      console.error('Error initializing 3D scene:', err);
      setError(err instanceof Error ? err.message : 'មានបញ្ហាក្នុងការចាប់ផ្តើមឆានែល 3D');
      setLoading(false);
    }
  };

  useEffect(() => {
    return () => {
      // Cleanup
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (modelRef.current && sceneRef.current) {
        sceneRef.current.remove(modelRef.current);
        modelRef.current.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.geometry.dispose();
            if (Array.isArray(child.material)) {
              child.material.forEach((mat) => mat.dispose());
            } else {
              child.material.dispose();
            }
          }
        });
      }
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  if (!modelUrl) {
    return (
      <View style={[styles.container, { height }, style]}>
        <View style={styles.errorContainer}>
          <Text style={tw("text-red-600")}>ម៉ូឌែល 3D មិនត្រូវបានផ្តល់ឱ្យ</Text>
        </View>
      </View>
    );
  }

  return (
    <View
      style={[styles.container, { height }, style]}
      {...panResponder.panHandlers}
      collapsable={false}
    >
      <GLView
        ref={glViewRef}
        style={[styles.glView, { height: height || 400 }]}
        onContextCreate={onContextCreate}
        msaaSamples={0}
      />
      {loading && (
        <View style={styles.loadingContainer} pointerEvents="none">
          <ActivityIndicator size="large" color="#4f46e5" />
          <Text style={tw("text-white mt-4")}>កំពុងទាញយកម៉ូឌែល 3D...</Text>
        </View>
      )}
      {error && (
        <View style={styles.errorContainer} pointerEvents="box-none">
          <Text style={tw("text-red-600")}>{error}</Text>
          <Pressable
            onPress={() => {
              setError(null);
              setLoading(true);
              if (modelUrl) {
                loadModel(modelUrl);
              }
            }}
            style={tw("mt-4 bg-red-600 px-4 py-2 rounded-lg")}
          >
            <Text style={tw("text-white")}>ព្យាយាមម្តងទៀត</Text>
          </Pressable>
        </View>
      )}
      {/* 2D Text Overlay */}
      {twoDText && !loading && !error && (
        <View style={styles.textOverlay} pointerEvents="none">
          {Array.isArray(twoDText) ? (
            twoDText.map((item, index) => (
              <Text key={index} style={[tw("text-white text-center"), item.style]}>
                {item.content}
              </Text>
            ))
          ) : (
            <Text style={[tw("text-white text-center"), twoDText.style]}>
              {twoDText.content}
            </Text>
          )}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333', // Changed to grey so we can see if container is visible
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    minHeight: 200, // Ensure minimum height
  },
  glView: {
    width: '100%',
    height: '100%',
    backgroundColor: '#666', // Grey background to verify GLView is visible
    minHeight: 200,
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
  textOverlay: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    alignItems: 'center',
    zIndex: 5,
  },
});
