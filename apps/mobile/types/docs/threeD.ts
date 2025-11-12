// ===== 3D COMPONENT TYPES =====
// These types define the structure for 3D content and text elements
// Used across ThreeD, 3DBox, and 3DExplanationBox components

// 3D Text item for positioning text in 3D space
export interface ThreeDTextItem {
  content: string;
  position?: [number, number, number];
  fontSize?: number;
  color?: string;
  rotation?: [number, number, number];
}

// 2D Text item for HTML overlay text
export interface TwoDTextItem {
  content: string;
  style?: React.CSSProperties;
}

// Props interface for the ThreeD component
export interface ThreeDProps {
  src?: string | React.ReactNode;
  scale?: number;
  target?: [number, number, number];
  canvasBackground?: React.ReactNode;
  canvasBackgroundColor?: string;
  threeDText?: ThreeDTextItem | ThreeDTextItem[];
  twoDText?: TwoDTextItem | TwoDTextItem[];
  height?: number;
  className?: string;
}
