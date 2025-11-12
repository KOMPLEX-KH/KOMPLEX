// ===== 3D COMPONENT TYPES =====
// These types define the structure for 3D content and text elements
// Used across ThreeD, 3DBox, and 3DExplanationBox components

// Import shared types
import { ThreeDTextItem, TwoDTextItem } from "@core-types/docs/boxProps";

// Re-export for backwards compatibility
export type { ThreeDTextItem, TwoDTextItem };

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
