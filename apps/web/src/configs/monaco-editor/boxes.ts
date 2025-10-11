export const EDITOR_BOXES = `
// Basic box types with essential props
declare const DefinitionBox: React.ComponentType<{
  title: string | React.ReactNode;
  content: string | string[] | React.ReactNode;
}>;

declare const TipBox: React.ComponentType<{
  title?: string | React.ReactNode;
  icon?: React.ComponentType<any>;
  content: string | string[] | React.ReactNode;
}>;

declare const ExampleBox: React.ComponentType<{
  question: string | React.ReactNode;
  content?: string | string[] | React.ReactNode;
  steps?: Array<{
    title?: string | React.ReactNode;
    content?: string | string[] | React.ReactNode;
  }>;
  answer?: string | React.ReactNode;
}>;

declare const ExerciseBox: React.ComponentType<{
  questions: Array<{
    id: string;
    question: string | React.ReactNode;
    options: string[] | React.ReactNode[];
    correctAnswer: number | React.ReactNode;
  }>;
}>;

declare const HintBox: React.ComponentType<{
  content: string | string[] | React.ReactNode;
}>;

declare const WarningBox: React.ComponentType<{
  icon?: React.ComponentType<any>;
  content: string | string[] | React.ReactNode;
}>;

declare const CustomBox: React.ComponentType<{
  title?: string | React.ReactNode;
  content: string | string[] | React.ReactNode;
}>;

declare const GraphBox: React.ComponentType<{
  expressions: Array<{
    id: string;
    latex: string;
    color?: string;
    hidden?: boolean;
  }>;
  options?: any; // Simplified for now
}>;

declare const ThreeDBox: React.ComponentType<{
  src?: string;
  title?: string;
  content?: any;
  height?: number;
  scale?: number;
  target?: [number, number, number];
  threeDText?: any; // Keep complex types as 'any' for now
  twoDText?: any;
  canvasBackground?: any;
  canvasBackgroundColor?: string;
}>;

declare const SummaryBox: React.ComponentType<{
  title?: string | React.ReactNode;
  content: string | string[] | React.ReactNode;
}>;

declare const ExamQuestionBox: React.ComponentType<{
  title?: string | React.ReactNode;
  content: string | string[] | React.ReactNode;
}>;

declare const ExerciseCreationBox: React.ComponentType<{
  title?: string | React.ReactNode;
  content: string | string[] | React.ReactNode;
}>;

declare const TopicPracticeBox: React.ComponentType<{
  title?: string | React.ReactNode;
  content: string | string[] | React.ReactNode;
}>;

declare const ThreeDExplanationBox: React.ComponentType<{
  src?: string | React.ReactNode;
  explanation: string | string[] | React.ReactNode;
  scale?: number;
  target?: [number, number, number];
  canvasBackground?: React.ReactNode;
  canvasBackgroundColor?: string;
  threeDText?: any;
  twoDText?: any;
  height?: number;
  title?: string;
}>;

declare const GraphExplanationBox: React.ComponentType<{
  expressions: Array<{
    id: string;
    latex: string;
    color?: string;
    hidden?: boolean;
  }>;
  options?: any;
  explanation: string | string[] | React.ReactNode;
}>;

declare const ImageExplanationBox: React.ComponentType<{
  src?: string;
  imageAlt: string;
  explanation: string | string[] | React.ReactNode;
  title?: string;
}>;

declare const VideoExplanationBox: React.ComponentType<{
  src?: string;
  videoTitle?: string;
  explanation: string | string[] | React.ReactNode;
}>;
`;