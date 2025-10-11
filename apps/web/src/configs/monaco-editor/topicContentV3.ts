export const TOPIC_CONTENT_V3 = `
declare type TopicContent_V3 =
  | ({ type: "definition" } & {
      title: string | React.ReactNode;
      content: string | string[] | React.ReactNode;
    })

  // Tip section - provides helpful hints or tips
  | ({ type: "tip" } & {
      title?: string | React.ReactNode;
      icon?: React.ComponentType<{ size?: number; className?: string }>;
      content: string | string[] | React.ReactNode;
    })

  // Example section - shows worked examples with steps
  | ({ type: "example" } & {
      question: string | React.ReactNode;
      content?: string | string[] | React.ReactNode;
      steps?: {
        title?: string | React.ReactNode;
        content?: string | string[] | React.ReactNode;
      }[];
      answer?: string | React.ReactNode;
    })

  // Exercise section - interactive practice questions
  | ({ type: "exercise" } & {
      questions: {
        id: string;
        question: string | React.ReactNode;
        options: string[] | React.ReactNode[];
        correctAnswer: number | React.ReactNode;
      }[];
    })

  // Hint section - additional guidance or notes
  | ({ type: "hint" } & {
      content: string | string[] | React.ReactNode;
    })

  // Warning section - important cautions or common mistakes
  | ({ type: "warning" } & {
      icon?: React.ComponentType<{ size?: number; className?: string }>;
      content: string | string[] | React.ReactNode;
    })

  // 3D section - 3D model with wrapper
  | ({ type: "threeD" } & {
      src?: string | React.ReactNode;
      scale?: number;
      target?: [number, number, number];
      title?: string;
      content?: string | string[] | React.ReactNode;
      canvasBackground?: React.ReactNode;
      canvasBackgroundColor?: string;
      threeDText?:
        | {
            content: string;
            position?: [number, number, number];
            fontSize?: number;
            color?: string;
            rotation?: [number, number, number];
          }
        | {
            content: string;
            position?: [number, number, number];
            fontSize?: number;
            color?: string;
            rotation?: [number, number, number];
          }[];
      twoDText?:
        | {
            content: string;
            style?: React.CSSProperties;
          }
        | {
            content: string;
            style?: React.CSSProperties;
          }[];
      height?: number;
    })

  // Graph section - mathematical graph with wrapper
  | ({ type: "graph" } & {
      expressions: {
        id: string;
        latex: string;
        color?: string;
        hidden?: boolean;
      }[];
      options?: Partial<{
    xAxisLabel?: string;
    yAxisLabel?: string;
    xAxisStep?: number;
    yAxisStep?: number;
    showGrid?: boolean;
    showXAxis?: boolean;
    showYAxis?: boolean;
    expressions?: boolean;
  }>;
    })

  // ===== EXPLANATION BOXES =====
  // These boxes have content on the left and explanation on the right
  // They are responsive and follow a specific layout pattern

  // Image explanation section - image with explanation
  | ({ type: "imageExplanation" } & {
      src?: string;
      imageAlt: string;
      explanation: string | string[] | React.ReactNode;
      title?: string;
    })

  // Video explanation section - video with explanation
  | ({ type: "videoExplanation" } & {
      src?: string;
      videoTitle?: string;
      explanation: string | string[] | React.ReactNode;
    })

  // Graph explanation section - Desmos graph with explanation
  | ({ type: "graphExplanation" } & {
      expressions: {
        id: string;
        latex: string;
        color?: string;
        hidden?: boolean;
      }[];
      options?: Partial<{
    xAxisLabel?: string;
    yAxisLabel?: string;
    xAxisStep?: number;
    yAxisStep?: number;
    showGrid?: boolean;
    showXAxis?: boolean;
    showYAxis?: boolean;
    expressions?: boolean;
  }>;
      explanation: string | string[] | React.ReactNode;
    })

  // 3D explanation section - 3D content with explanation
  | ({ type: "threeDExplanation" } & {
      src?: string | React.ReactNode;
      explanation: string | string[] | React.ReactNode;
      scale?: number;
      target?: [number, number, number];
      canvasBackground?: React.ReactNode;
      canvasBackgroundColor?: string;
      threeDText?:
        | {
            content: string;
            position?: [number, number, number];
            fontSize?: number;
            color?: string;
            rotation?: [number, number, number];
          }
        | {
            content: string;
            position?: [number, number, number];
            fontSize?: number;
            color?: string;
            rotation?: [number, number, number];
          }[];
      twoDText?:
        | {
            content: string;
            style?: React.CSSProperties;
          }
        | {
            content: string;
            style?: React.CSSProperties;
          }[];
      height?: number;
      title?: string;
    });
`;