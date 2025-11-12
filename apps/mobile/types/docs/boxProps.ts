// packages/types/docs/boxProps.ts
import type { ReactNode } from "react";

// ===== SUPPORTING TYPES =====

/**
 * Expression type for Desmos graphs
 */
export type Expression = {
  id: string;
  latex: string;
  color?: string;
  hidden?: boolean;
};

/**
 * 3D Text item for positioning text in 3D space
 */
export interface ThreeDTextItem {
  content: string;
  position?: [number, number, number];
  fontSize?: number;
  color?: string;
  rotation?: [number, number, number];
}

/**
 * 2D Text item for HTML overlay text
 */
export interface TwoDTextItem {
  content: string;
  style?: Record<string, any>; // Platform-agnostic style object
}

/**
 * Step type for example boxes
 */
export interface Step {
  title?: string | ReactNode;
  content?: string | string[] | ReactNode;
}

/**
 * Exercise question type
 */
export interface ExerciseQuestion {
  id: string;
  question: string | ReactNode;
  options: string[] | ReactNode[];
  correctAnswer: number | ReactNode;
}

/**
 * Summary section type
 */
export interface SummarySection {
  key?: string;
  title: string | ReactNode;
  icon?: React.ComponentType<{
    size?: number;
    className?: string;
    color?: string;
  }>;
  content: ReactNode;
}

/**
 * Practice exercise type
 */
export interface PracticeExercise {
  id: string;
  title: string;
  description?: string;
  problemType?: string;
  problems: string[] | ReactNode[];
  answers?: ReactNode[];
}

// ===== BOX PROP INTERFACES =====

/**
 * DefinitionBox Props
 */
export interface DefinitionBoxProps {
  title: string | ReactNode;
  content: string | string[] | ReactNode;
}

/**
 * TipBox Props
 */
export interface TipBoxProps {
  title?: string | ReactNode;
  icon?: React.ComponentType<{
    size?: number;
    className?: string;
    color?: string;
  }>;
  content: string | string[] | ReactNode;
}

/**
 * ExampleBox Props
 */
export interface ExampleBoxProps {
  question: string | ReactNode;
  content?: string | string[] | ReactNode;
  steps?: Step[];
  answer?: string | ReactNode;
}

/**
 * ExerciseBox Props
 */
export interface ExerciseBoxProps {
  questions: ExerciseQuestion[];
}

/**
 * HintBox Props
 */
export interface HintBoxProps {
  content: string | string[] | ReactNode;
  title?: string;
}

/**
 * WarningBox Props
 */
export interface WarningBoxProps {
  icon?: React.ComponentType<{
    size?: number;
    className?: string;
    color?: string;
  }>;
  content: string | string[] | ReactNode;
}

/**
 * CustomBox Props
 */
export interface CustomBoxProps {
  // Content
  content: string | string[] | ReactNode;

  // Title and Icon
  title?: string;
  titleIcon?: React.ComponentType<{
    size?: number;
    className?: string;
    color?: string;
  }>;

  // Colors (with defaults)
  backgroundColor?: string;
  borderColor?: string;
  titleColor?: string;
  iconColor?: string;
  contentColor?: string;

  // Styling
  showTitle?: boolean;
  showIcon?: boolean;
  borderWidth?: "1" | "2" | "4";
  shadow?: "sm" | "md" | "lg" | "xl" | "2xl";
  padding?: "2" | "4" | "6" | "8";
  margin?: "2" | "4" | "6" | "8";
  rounded?: "lg" | "xl" | "2xl" | "3xl";

  // Additional features
  backdropBlur?: boolean;
  gradient?: boolean;
  gradientFrom?: string;
  gradientTo?: string;
  gradientDirection?:
    | "to-r"
    | "to-l"
    | "to-t"
    | "to-b"
    | "to-tr"
    | "to-tl"
    | "to-br"
    | "to-bl";

  // Interactive
  hoverEffect?: boolean;
  clickable?: boolean;
  onClick?: () => void;
}

/**
 * GraphBox Props
 */
export interface GraphBoxProps {
  expressions: Expression[];
  options?: Record<string, any>; // Partial<CalculatorOptions> from desmos - using Record for platform compatibility
}

/**
 * ThreeDBox Props
 */
export interface ThreeDBoxProps {
  src?: string | ReactNode;
  scale?: number;
  target?: [number, number, number];
  title?: string;
  content?: string | string[] | ReactNode;
  canvasBackground?: ReactNode;
  canvasBackgroundColor?: string;
  threeDText?: ThreeDTextItem | ThreeDTextItem[];
  twoDText?: TwoDTextItem | TwoDTextItem[];
  height?: number;
}

/**
 * SummaryBox Props
 */
export interface SummaryBoxProps {
  title?: string | ReactNode;
  icon?: string;
  sections: SummarySection[];
}

/**
 * TopicPracticeBox Props
 */
export interface TopicPracticeBoxProps {
  exercises: PracticeExercise[];
}

/**
 * ImageExplanationBox Props
 */
export interface ImageBoxProps {
  src?: string;
  imageAlt: string;
  explanation: string | string[] | ReactNode;
  title?: string;
}

/**
 * VideoExplanationBox Props
 */
export interface VideoBoxProps {
  src?: string;
  videoTitle?: string;
  explanation: string | string[] | ReactNode;
}

/**
 * GraphExplanationBox Props
 */
export interface GraphExplanationBoxProps {
  expressions: Expression[];
  options?: Record<string, any>; // Partial<CalculatorOptions> from desmos
  explanation: string | string[] | ReactNode;
}

/**
 * ThreeDExplanationBox Props
 */
export interface ThreeDExplanationBoxProps {
  src?: string | ReactNode;
  explanation: string | string[] | ReactNode;
  scale?: number;
  target?: [number, number, number];
  canvasBackground?: ReactNode;
  canvasBackgroundColor?: string;
  threeDText?: ThreeDTextItem | ThreeDTextItem[];
  twoDText?: TwoDTextItem | TwoDTextItem[];
  height?: number;
  title?: string;
}
