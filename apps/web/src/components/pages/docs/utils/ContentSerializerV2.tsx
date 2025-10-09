/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { ReactNode } from "react";
import { InlineMath, BlockMath } from "react-katex";

// Import all box components for type checking
import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
import { HintBox } from "@/components/pages/docs/boxes/HintBox";
import { WarningBox } from "@/components/pages/docs/boxes/WarningBox";
import { CustomBox } from "@/components/pages/docs/boxes/CustomBox";
import { GraphBox } from "@/components/pages/docs/boxes/GraphBox";
import { ThreeDBox } from "@/components/pages/docs/boxes/3DBox";
import { SummaryBox } from "@/components/pages/docs/boxes/SummaryBox";
import { ExamQuestionBox } from "@/components/pages/docs/boxes/ExamQuestionBox";
import { ExerciseCreationBox } from "@/components/pages/docs/boxes/ExerciseCreationBox";
import { TopicPracticeBox } from "@/components/pages/docs/boxes/TopicPracticeBox";
import { ThreeDExplanationBox } from "@/components/pages/docs/boxes/explanation-box/3DExplanationBox";
import { GraphExplanationBox } from "@/components/pages/docs/boxes/explanation-box/GraphExplanationBox";
import { ImageExplanationBox } from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import { VideoExplanationBox } from "@/components/pages/docs/boxes/explanation-box/VideoExplanationBox";
import { TopicContent_V3 } from "@/types/docs/topic";

interface SerializedContent {
  type: string;
  value?: string | number;
  props?: Record<string, unknown>;
}

interface ReactElementLike {
  type: unknown;
  props: {
    math?: string;
    children?: unknown;
    [key: string]: unknown;
  };
}

// Map of component types to their string names for serialization
// Use direct component reference instead of .name for reliability
// Using loose typing for heterogeneous component constructors
const CUSTOM_COMPONENTS = new Map<unknown, string>([
  [DefinitionBox, "DefinitionBox"],
  [TipBox, "TipBox"],
  [ExampleBox, "ExampleBox"],
  [ExerciseBox, "ExerciseBox"],
  [HintBox, "HintBox"],
  [WarningBox, "WarningBox"],
  [CustomBox, "CustomBox"],
  [GraphBox, "GraphBox"],
  [ThreeDBox, "ThreeDBox"],
  [SummaryBox, "SummaryBox"],
  // [ExamQuestionBox, "ExamQuestionBox"],
  // [ExerciseCreationBox, "ExerciseCreationBox"],
  [TopicPracticeBox, "TopicPracticeBox"],
  [ThreeDExplanationBox, "ThreeDExplanationBox"],
  [GraphExplanationBox, "GraphExplanationBox"],
  [ImageExplanationBox, "ImageBox"],
  [VideoExplanationBox, "VideoBox"],
]);



// =============================
// V3 FORMAT SERIALIZER/DESERIALIZER
// =============================

// Helper: serialize any ReactNode value used inside V3 props
function serializeElementValue(
  value: unknown
): SerializedContent | SerializedContent[] | string | unknown {
  // Reuse element serializer logic by calling serializeContent on a wrapper
  // but avoid stringifying; directly mirror internal serialize() from above
  // Inline the same rules used in serializeContent

  if (typeof value === "string" || typeof value === "number") {
    return { type: "text", value };
  }

  if (Array.isArray(value)) {
    return value.map((item) => serializeElementValue(item)) as unknown[];
  }

  // Handle non-objects and plain objects that are not React elements
  if (!value || typeof value !== "object") {
    return value;
  }

  // Defensive: avoid serializing DOM nodes or other cyclic objects
  const isLikelyDomNode = (obj: unknown): boolean => {
    // Works in both browser and SSR without throwing
    // Detect by presence of nodeType/ownerDocument to avoid relying on global Node
    return !!(
      obj &&
      typeof obj === "object" &&
      "nodeType" in (obj as Record<string, unknown>) &&
      "ownerDocument" in (obj as Record<string, unknown>)
    );
  };

  if (isLikelyDomNode(value)) {
    // Replace DOM nodes with a placeholder
    return "[DOMNode]";
  }

  // If it's not a React element (no 'type' field), treat as a plain object and recurse
  if (!("type" in (value as Record<string, unknown>))) {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      if (typeof v === "function" || typeof v === "symbol") {
        // Drop non-serializable entries
        continue;
      }
      if (Array.isArray(v)) {
        out[k] = v.map((item) => serializeElementValue(item));
      } else if (v && typeof v === "object") {
        if (isLikelyDomNode(v)) {
          out[k] = "[DOMNode]";
        } else if ("type" in (v as Record<string, unknown>)) {
          out[k] = serializeElementValue(v);
        } else {
          out[k] = serializeElementValue(v);
        }
      } else {
        out[k] = v as unknown;
      }
    }
    return out;
  }

  const el = value as ReactElementLike;

  if (el.type === InlineMath) {
    return { type: "InlineMath", props: { math: el.props.math } };
  }
  if (el.type === BlockMath) {
    return { type: "BlockMath", props: { math: el.props.math } };
  }

  // Custom boxes handled as generic element trees for inner props
  const componentType = el.type;
  const componentName =
    typeof componentType === "function"
      ? CUSTOM_COMPONENTS.get(componentType as React.ComponentType<unknown>)
      : null;

  if (componentName) {
    const { /* children, */ ...restProps } = el.props;
    const serializedProps: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(restProps)) {
      if (Array.isArray(v)) {
        serializedProps[k] = v.map((item) => serializeElementValue(item));
      } else if (typeof v === "object" && v !== null) {
        if ("type" in (v as any)) {
          serializedProps[k] = serializeElementValue(v);
        } else {
          const inner: Record<string, unknown> = {};
          for (const [ik, iv] of Object.entries(v as Record<string, unknown>)) {
            inner[ik] = serializeElementValue(iv);
          }
          serializedProps[k] = inner;
        }
      } else {
        serializedProps[k] = v;
      }
    }

    return {
      type: componentName,
      props: {
        ...serializedProps,
        children: el.props?.children
          ? serializeElementValue(el.props.children)
          : undefined,
      },
    } as SerializedContent;
  }

  // HTML element
  const tagName =
    typeof el.type === "string"
      ? el.type
      : ((el.type as { name?: string }).name || "div");

  const { /* children, */ ...restProps } = el.props;
  return {
    type: tagName,
    props: {
      ...restProps,
      children: el.props?.children ? serializeElementValue(el.props.children) : undefined,
    },
  } as SerializedContent;
}

function deserializeElementValue(
  obj: SerializedContent | SerializedContent[] | string | null
): ReactNode {
  if (!obj) return null;
  if (typeof obj === "string") return obj;
  if (Array.isArray(obj)) {
    return obj.map((item, index) => {
      const node = deserializeElementValue(item);
      return React.isValidElement(node)
        ? React.cloneElement(node, { key: index })
        : <React.Fragment key={index}>{node}</React.Fragment>;
    });
  }

  // Heuristic: handle raw React element-shaped objects that lost their `type`
  // e.g., { key:null, props:{ math:"..." }, _owner:null, _store:{} }
  // Treat as InlineMath if it exposes props.math
  if (
    typeof obj === "object" &&
    obj !== null &&
    !("type" in (obj as unknown as Record<string, unknown>)) &&
    "props" in (obj as unknown as Record<string, unknown>) &&
    (obj as unknown as Record<string, any>).props &&
    typeof (obj as unknown as Record<string, any>).props === "object" &&
    "math" in (obj as unknown as Record<string, any>).props
  ) {
    return (
      <InlineMath
        key={Math.random()}
        math={(obj as Record<string, any>).props.math as string}
      />
    );
  }

  if (obj.type === "text") return obj.value as ReactNode;

  if (obj.type === "InlineMath") {
    return <InlineMath key={Math.random()} math={(obj.props as any)?.math} />;
  }
  if (obj.type === "BlockMath") {
    return <BlockMath key={Math.random()} math={(obj.props as any)?.math} />;
  }

  // Map names to components for inner trees (same as deserializeContent)
  const componentMap: Record<string, unknown> = {
    DefinitionBox,
    TipBox,
    ExampleBox,
    ExerciseBox,
    HintBox,
    WarningBox,
    CustomBox,
    GraphBox,
    ThreeDBox,
    SummaryBox,
    ExamQuestionBox,
    ExerciseCreationBox,
    TopicPracticeBox,
    ThreeDExplanationBox,
    GraphExplanationBox,
    ImageBox: ImageExplanationBox,
    VideoBox: VideoExplanationBox,
  };

  if (componentMap[obj.type]) {
    const Component = componentMap[obj.type] as any;
    const { children, ...restProps } = obj.props || {};
    const deserializedProps: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(restProps)) {
      if (Array.isArray(v)) {
        deserializedProps[k] = v.map((item, index) => {
          const node = deserializeElementValue(item as any);
          return React.isValidElement(node)
            ? React.cloneElement(node, { key: index })
            : node;
        });
      } else if (typeof v === "object" && v !== null && "type" in (v as any)) {
        deserializedProps[k] = deserializeElementValue(v as any);
      } else {
        deserializedProps[k] = v as unknown;
      }
    }
    return React.createElement(
      Component,
      { key: Math.random(), ...deserializedProps },
      children ? deserializeElementValue(children as any) : undefined
    );
  }

  // HTML element
  const validHtmlTags = [
    "div",
    "span",
    "p",
    "a",
    "ul",
    "ol",
    "li",
    "br",
    "strong",
    "em",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
  ];
  if (validHtmlTags.includes(obj.type)) {
    const { children, ...restProps } = obj.props || {};
    const Tag = obj.type as keyof JSX.IntrinsicElements;
    const child = children ? deserializeElementValue(children as any) : undefined;
    return React.createElement(Tag, { key: Math.random(), ...restProps }, child);
  }
  return null;
}

// V3 mapping helpers for type names
// (kept for reference) mapping from component names to V3 types
// const V3_TYPE_MAP: Record<string, TopicContent_V3["type"]> = {
//   DefinitionBox: "definition",
//   TipBox: "tip",
//   ExampleBox: "example",
//   ExerciseBox: "exercise",
//   HintBox: "hint",
//   WarningBox: "warning",
//   CustomBox: "custom",
//   ThreeDBox: "threeD",
//   GraphBox: "graph",
//   ImageBox: "imageExplanation",
//   VideoBox: "videoExplanation",
//   GraphExplanationBox: "graphExplanation",
//   ThreeDExplanationBox: "threeDExplanation",
// };

// const V3_COMPONENT_BY_TYPE: {
//   [K in TopicContent_V3["type"]]: React.ComponentType<unknown>;
// } = {
//   definition: DefinitionBox,
//   tip: TipBox,
//   example: ExampleBox,
//   exercise: ExerciseBox,
//   hint: HintBox,
//   warning: WarningBox,
//   custom: CustomBox,
//   threeD: ThreeDBox,
//   graph: GraphBox,
//   imageExplanation: ImageExplanationBox,
//   videoExplanation: VideoExplanationBox,
//   graphExplanation: GraphExplanationBox,
//   threeDExplanation: ThreeDExplanationBox,
// };

/**
 * Serialize TopicContent_V3[] to JSON
 * Converts any ReactNode props to JSON trees using element serialization
 */
export function serializeTopicContentV3(items: TopicContent_V3[]): string {
  const result = items.map((item) => {
    const { type, ...rest } = item as unknown as { type: TopicContent_V3["type"] } & Record<string, unknown>;
    const serializedProps: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(rest)) {
      if (Array.isArray(v)) {
        serializedProps[k] = v.map((child) => serializeElementValue(child));
      } else if (typeof v === "object" && v !== null) {
        serializedProps[k] = serializeElementValue(v);
      } else {
        serializedProps[k] = v as unknown;
      }
    }
    return { type, props: serializedProps };
  });
  return JSON.stringify(result, null, 2);
}

/**
 * Deserialize JSON back to TopicContent_V3[]
 * Rebuilds ReactNode props using element deserialization
 */
export function deserializeTopicContentV3(jsonString: string): TopicContent_V3[] {
  const data = JSON.parse(jsonString) as Array<{
    type: TopicContent_V3["type"];
    props: Record<string, unknown>;
  }>;

  const reviveMixed = (node: unknown): unknown => {
    if (node == null) return node;
    if (typeof node === "string" || typeof node === "number") return node;
    if (Array.isArray(node)) return node.map(reviveMixed);
    if (typeof node === "object") {
      // If this object is a serialized element (has type), build a ReactNode
      if ("type" in (node as Record<string, unknown>)) {
        return deserializeElementValue(node as any);
      }
      // Plain object: deep-walk properties and revive nested serialized nodes
      const out: Record<string, unknown> = {};
      for (const [k, v] of Object.entries(node as Record<string, unknown>)) {
        out[k] = reviveMixed(v);
      }
      return out;
    }
    return node;
  };

  return data.map((entry) => {
    const { type, props } = entry;
    const restoredProps: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(props || {})) {
      restoredProps[k] = reviveMixed(v);
    }
    return { type, ...(restoredProps as object) } as TopicContent_V3;
  });
}

/**
 * Alternative: Deserialize JSON back to TopicContent_V3[] but KEEP a raw JSON node tree
 * for any ReactNode props (no React elements created). This yields an exact
 * TopicContent_V3-shaped object where content/question/answer/etc. contain
 * { type, props } objects for tags and InlineMath/BlockMath.
 */
export function deserializeTopicContentV3ToTree(jsonString: string): TopicContent_V3[] {
  const data = JSON.parse(jsonString) as Array<{
    type: TopicContent_V3["type"];
    props: Record<string, unknown>;
  }>;

  const passThrough = (node: unknown): unknown => {
    if (node == null) return node;
    if (typeof node === "string" || typeof node === "number") return node;
    if (Array.isArray(node)) return node.map(passThrough);
    if (typeof node === "object") {
      // Already a serialized node (text, InlineMath, BlockMath, div, span, etc.)
      // Just recurse props/children without converting to React elements
      const out: Record<string, unknown> = {};
      for (const [k, v] of Object.entries(node as Record<string, unknown>)) {
        out[k] = passThrough(v);
      }
      return out;
    }
    return node;
  };

  return data.map((entry) => {
    const { type, props } = entry;
    const restoredProps: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(props || {})) {
      restoredProps[k] = passThrough(v);
    }
    return { type, ...(restoredProps as object) } as TopicContent_V3;
  });
}
