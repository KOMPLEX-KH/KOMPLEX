// packages/types/docs/topic.ts
// ===== TOPIC CONTENT TYPES =====
// These types define the structure for educational topic content
// Each type corresponds to a specific box component used in topic pages

// Import all box prop interfaces from shared types
import {
  DefinitionBoxProps,
  TipBoxProps,
  ExampleBoxProps,
  ExerciseBoxProps,
  HintBoxProps,
  WarningBoxProps,
  CustomBoxProps,
  GraphBoxProps,
  ThreeDBoxProps,
  SummaryBoxProps,
  TopicPracticeBoxProps,
  ImageBoxProps,
  VideoBoxProps,
  GraphExplanationBoxProps,
  ThreeDExplanationBoxProps,
  Step,
  ExerciseQuestion,
  SummarySection,
  PracticeExercise,
} from "./boxProps";

// Re-export supporting types for convenience
export type { Step, ExerciseQuestion, SummarySection, PracticeExercise };

// ===== MAIN TOPIC CONTENT INTERFACE =====
// This interface defines the complete structure for a topic's content
// Each field is optional, allowing topics to use only the sections they need
// All fields use the exact prop interfaces from their corresponding box components

export interface TopicContent {
  // Definition section - explains the core concept
  definition?: DefinitionBoxProps;

  // Tip section - provides helpful hints or tips
  tip?: TipBoxProps;

  // Example section - shows worked examples with steps
  example?: ExampleBoxProps;

  example2?: ExampleBoxProps;

  // Exercise section - interactive practice questions
  exercise?: ExerciseBoxProps;

  // Hint section - additional guidance or notes
  hint?: HintBoxProps;

  // Warning section - important cautions or common mistakes
  warning?: WarningBoxProps;

  // Custom section - flexible custom content
  custom?: CustomBoxProps;

  // 3D section - 3D model with wrapper
  threeD?: ThreeDBoxProps;

  // Graph section - mathematical graph with wrapper
  graph?: GraphBoxProps;

  // ===== EXPLANATION BOXES =====
  // These boxes have content on the left and explanation on the right
  // They are responsive and follow a specific layout pattern

  // Image explanation section - image with explanation
  imageExplanation?: ImageBoxProps | ImageBoxProps[];

  // Video explanation section - video with explanation
  videoExplanation?: VideoBoxProps;

  // Graph explanation section - Desmos graph with explanation
  graphExplanation?: GraphExplanationBoxProps;

  // 3D explanation section - 3D content with explanation
  threeDExplanation?: ThreeDExplanationBoxProps | ThreeDExplanationBoxProps[];
}

export interface TopicContent_V2 {
  definition?: DefinitionBoxProps[];

  // Tip section - provides helpful hints or tips
  tip?: TipBoxProps[];

  // Example section - shows worked examples with steps
  example?: ExampleBoxProps[];

  // Exercise section - interactive practice questions
  exercise?: ExerciseBoxProps[];

  // Hint section - additional guidance or notes
  hint?: HintBoxProps[];

  // Warning section - important cautions or common mistakes
  warning?: WarningBoxProps[];

  // Custom section - flexible custom content
  custom?: CustomBoxProps[];

  // 3D section - 3D model with wrapper
  threeD?: ThreeDBoxProps[];

  // Graph section - mathematical graph with wrapper
  graph?: GraphBoxProps[];

  // ===== EXPLANATION BOXES =====
  // These boxes have content on the left and explanation on the right
  // They are responsive and follow a specific layout pattern

  // Image explanation section - image with explanation
  imageExplanation?: ImageBoxProps[];

  // Video explanation section - video with explanation
  videoExplanation?: VideoBoxProps[];

  // Graph explanation section - Desmos graph with explanation
  graphExplanation?: GraphExplanationBoxProps[];

  // 3D explanation section - 3D content with explanation
  threeDExplanation?: ThreeDExplanationBoxProps[];

  //Summary section
  summary?: SummaryBoxProps[];

  //Practice section
  practice?: TopicPracticeBoxProps[];
}

export type TopicContent_V3 =
  | ({ type: "definition" } & DefinitionBoxProps)
  | ({ type: "tip" } & TipBoxProps)
  | ({ type: "example" } & ExampleBoxProps)
  | ({ type: "exercise" } & ExerciseBoxProps)
  | ({ type: "hint" } & HintBoxProps)
  | ({ type: "warning" } & WarningBoxProps)
  | ({ type: "custom" } & CustomBoxProps)
  | ({ type: "threeD" } & ThreeDBoxProps)
  | ({ type: "graph" } & GraphBoxProps)
  | ({ type: "imageExplanation" } & ImageBoxProps)
  | ({ type: "videoExplanation" } & VideoBoxProps)
  | ({ type: "graphExplanation" } & GraphExplanationBoxProps)
  | ({ type: "threeDExplanation" } & ThreeDExplanationBoxProps)
  | ({ type: "summary" } & SummaryBoxProps)
  | ({ type: "practice" } & TopicPracticeBoxProps);
