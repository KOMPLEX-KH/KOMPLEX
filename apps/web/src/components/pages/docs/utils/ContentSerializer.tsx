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
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CUSTOM_COMPONENTS = new Map<React.ComponentType<any>, string>([
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


/**
 * Serialize React content to JSON for database storage
 * Handles all custom box components, KaTeX, and HTML elements
 */
export function serializeContent(content: ReactNode): string {
  const serialize = (
    element: unknown
  ): SerializedContent | SerializedContent[] | string => {
    if (typeof element === "string" || typeof element === "number") {
      return { type: "text", value: element };
    }

    if (Array.isArray(element)) {
      return element.map(serialize) as SerializedContent[];
    }

    if (!element || typeof element !== "object" || !("type" in element)) {
      return { type: "text", value: String(element) };
    }

    const reactElement = element as ReactElementLike;

    // Handle KaTeX components
    if (reactElement.type === InlineMath) {
      return {
        type: "InlineMath",
        props: { math: reactElement.props.math },
      };
    }

    if (reactElement.type === BlockMath) {
      return {
        type: "BlockMath",
        props: { math: reactElement.props.math },
      };
    }

    // Handle custom box components
    const componentType = reactElement.type;
    const componentName = typeof componentType === 'function'
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ? CUSTOM_COMPONENTS.get(componentType as React.ComponentType<any>)
      : null;


    if (componentName) {
      const { children, ...restProps } = reactElement.props;

      // Recursively serialize nested content
      const serializedProps: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(restProps)) {
        // Handle complex props like arrays of objects (e.g., expressions, questions, steps)
        if (Array.isArray(value)) {
          serializedProps[key] = value.map((item) => {
            if (typeof item === "object" && item !== null) {
              if ("type" in item) {
                // This is a React element
                return serialize(item);
              } else {
                // This is a plain object (like {title: "...", content: <Component />})
                // Recursively serialize its properties
                const serializedItem: Record<string, unknown> = {};
                for (const [itemKey, itemValue] of Object.entries(item)) {
                  if (
                    typeof itemValue === "object" &&
                    itemValue !== null &&
                    "type" in itemValue
                  ) {
                    serializedItem[itemKey] = serialize(itemValue);
                  } else {
                    serializedItem[itemKey] = itemValue;
                  }
                }
                return serializedItem;
              }
            }
            return item;
          });
        } else if (
          typeof value === "object" &&
          value !== null &&
          "type" in value
        ) {
          serializedProps[key] = serialize(value);
        } else {
          serializedProps[key] = value;
        }
      }

      return {
        type: componentName,
        props: {
          ...serializedProps,
          children: children ? serialize(children) : undefined,
        },
      };
    }

    // Handle HTML elements
    const tagName =
      typeof reactElement.type === "string"
        ? reactElement.type
        : (reactElement.type as { name?: string }).name || "div";

    const { children, ...restProps } = reactElement.props;

    return {
      type: tagName,
      props: {
        ...restProps,
        children: children ? serialize(children) : undefined,
      },
    };
  };

  return JSON.stringify(serialize(content), null, 2);
}

/**
 * Deserialize JSON content from database back to React elements
 * Handles all custom box components, KaTeX, and HTML elements
 */
export function deserializeContent(jsonString: string): ReactNode {
  try {
    const data = JSON.parse(jsonString);

    const deserialize = (
      obj: SerializedContent | SerializedContent[] | string | null
    ): ReactNode => {
      if (!obj) return null;

      if (typeof obj === "string") return obj;

      if (Array.isArray(obj)) {
        return obj.map((item, index) => {
          const deserialized = deserialize(item);
          // If the deserialized item is already a valid React element, just return it with a key
          if (React.isValidElement(deserialized)) {
            return React.cloneElement(deserialized, { key: index });
          }
          // Otherwise wrap primitives in a fragment
          return <React.Fragment key={index}>{deserialized}</React.Fragment>;
        });
      }

      if (obj.type === "text") {
        return obj.value;
      }

      // Handle KaTeX components
      if (obj.type === "InlineMath") {
        return (
          <InlineMath key={Math.random()} math={obj.props?.math as string} />
        );
      }

      if (obj.type === "BlockMath") {
        return (
          <BlockMath key={Math.random()} math={obj.props?.math as string} />
        );
      }

      // Handle custom box components
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const componentMap: Record<string, React.ComponentType<any>> = {
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
        const Component = componentMap[obj.type];
        const { children, ...restProps } = obj.props || {};

        // Recursively deserialize nested props
        const deserializedProps: Record<string, unknown> = {};
        for (const [key, value] of Object.entries(restProps)) {
          if (Array.isArray(value)) {
            deserializedProps[key] = value.map(
              (item: unknown, index: number) => {
                // Handle objects that might contain nested React elements (like {title: "...", content: <Component />})
                if (typeof item === "object" && item !== null) {
                  if ("type" in item) {
                    // This is a serialized React element
                    const deserialized = deserialize(item as SerializedContent);
                    if (React.isValidElement(deserialized)) {
                      return React.cloneElement(deserialized, { key: index });
                    }
                    return deserialized;
                  } else {
                    // This is a plain object (like {title: "...", content: ...})
                    // Recursively deserialize its properties
                    const deserializedItem: Record<string, unknown> = {};
                    for (const [itemKey, itemValue] of Object.entries(item)) {
                      if (
                        typeof itemValue === "object" &&
                        itemValue !== null &&
                        "type" in itemValue
                      ) {
                        deserializedItem[itemKey] = deserialize(
                          itemValue as SerializedContent
                        );
                      } else {
                        deserializedItem[itemKey] = itemValue;
                      }
                    }
                    return deserializedItem;
                  }
                }
                return item;
              }
            );
          } else if (
            typeof value === "object" &&
            value !== null &&
            "type" in value
          ) {
            deserializedProps[key] = deserialize(value as SerializedContent);
          } else {
            deserializedProps[key] = value;
          }
        }

        return React.createElement(
          Component,
          { key: Math.random(), ...deserializedProps },
          children ? deserialize(children as SerializedContent) : undefined
        );
      }

      // Handle HTML elements
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

        if (children) {
          const deserialized = deserialize(children as SerializedContent);
          return React.createElement(
            Tag,
            { key: Math.random(), ...restProps },
            deserialized
          );
        }

        return React.createElement(Tag, { key: Math.random(), ...restProps });
      }

      return null;
    };

    return deserialize(data);
  } catch (error) {
    console.error("Error deserializing content:", error);
    return null;
  }
}
