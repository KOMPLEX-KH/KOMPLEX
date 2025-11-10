import React, { ReactNode } from "react";
import { View, Image, Pressable, Linking } from "react-native";
import { Text } from "@/components/common/Text";
import * as LucideIcons from "lucide-react-native";
import MathRenderer from "@/components/helper/MathRenderer";
import { tw } from "@/utils/styles";
import { TopicContent_V3 } from "@core-types/docs/topic";

interface SerializedContent {
    type: string;
    value?: string | number;
    props?: Record<string, unknown>;
}

/**
 * HTML to React Native element mapping
 */
const HTML_TO_RN_MAP: Record<string, React.ComponentType<any>> = {
    div: View,
    span: Text,
    p: Text,
    a: Pressable,
    ul: View,
    ol: View,
    li: View,
    br: Text,
    strong: Text,
    em: Text,
    b: Text,
    i: Text,
    h1: Text,
    h2: Text,
    h3: Text,
    h4: Text,
    h5: Text,
    h6: Text,
    img: Image,
    code: Text,
    pre: View,
    blockquote: View,
    article: View,
    section: View,
    header: View,
    footer: View,
    nav: View,
    main: View,
    aside: View,
    table: View,
    thead: View,
    tbody: View,
    tr: View,
    td: View,
    th: View,
};

/**
 * Convert className string to React Native style using tw()
 */
function convertClassNameToStyle(className?: string, defaultStyle?: any): any {
    if (!className) return defaultStyle || {};

    try {
        const style = tw(className);
        return defaultStyle ? [defaultStyle, style] : style;
    } catch {
        return defaultStyle || {};
    }
}

/**
 * Convert HTML props to React Native props
 */
function convertPropsToRN(props: Record<string, unknown> = {}): Record<string, any> {
    const rnProps: Record<string, any> = {};

    for (const [key, value] of Object.entries(props)) {
        // Skip children - handled separately
        if (key === 'children') continue;

        // Convert className to style
        if (key === 'className') {
            rnProps.style = convertClassNameToStyle(value as string);
            continue;
        }

        // Convert href to onPress for links
        if (key === 'href') {
            rnProps.onPress = () => {
                if (typeof value === 'string') {
                    Linking.openURL(value).catch(() => { });
                }
            };
            continue;
        }

        // Convert src for images
        if (key === 'src') {
            if (typeof value === 'string') {
                // Handle relative paths
                const imageUrl = value.startsWith('http')
                    ? value
                    : `https://assets.komplex.app${value}`;
                rnProps.source = { uri: imageUrl };
            }
            continue;
        }

        // Convert alt to accessibilityLabel
        if (key === 'alt') {
            rnProps.accessibilityLabel = value as string;
            continue;
        }

        // Pass through other props as-is (id, key, etc.)
        rnProps[key] = value;
    }

    return rnProps;
}

/**
 * Check if a component type is a text component
 */
function isTextComponent(componentType: string): boolean {
    const textTypes = ['span', 'p', 'strong', 'em', 'b', 'i', 'code', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    return textTypes.includes(componentType);
}

/**
 * Deserialize a serialized content node to React Native elements
 */
function deserializeElementValue(
    obj: SerializedContent | SerializedContent[] | string | number | null | undefined,
    key?: string | number,
    parentIsText: boolean = false
): ReactNode {
    if (obj === null || obj === undefined) return null;

    // Handle primitives
    if (typeof obj === "string" || typeof obj === "number") {
        // If parent is Text component, return as-is, otherwise wrap
        return parentIsText ? obj : <Text key={key}>{obj}</Text>;
    }

    // Handle arrays
    if (Array.isArray(obj)) {
        return obj.map((item, index) => {
            // Recursively deserialize each item
            return deserializeElementValue(item, key !== undefined ? `${key}-${index}` : index, parentIsText);
        });
    }

    // Handle objects
    if (typeof obj === "object" && "type" in obj) {
        const serialized = obj as SerializedContent;

        // Handle text nodes
        if (serialized.type === "text") {
            const value = serialized.value;
            if (parentIsText) {
                return value as ReactNode;
            }
            return <Text key={key}>{value}</Text>;
        }

        // Handle InlineMath
        if (serialized.type === "InlineMath") {
            const math = (serialized.props as any)?.math;
            if (math && typeof math === 'string') {
                return <MathRenderer key={key} math={math} inline />;
            }
            return null;
        }

        // Handle BlockMath
        if (serialized.type === "BlockMath") {
            const math = (serialized.props as any)?.math;
            if (math && typeof math === 'string') {
                return <MathRenderer key={key} math={math} inline={false} />;
            }
            return null;
        }

        // Handle Lucide icons
        if (serialized.type === "LucideIcon") {
            const { name, size, color, strokeWidth } = (serialized.props || {}) as any;
            const Icon = name && typeof name === 'string' ? (LucideIcons as any)[name] : null;
            if (Icon) {
                return <Icon key={key} size={size} color={color} strokeWidth={strokeWidth} />;
            }
            return null;
        }

        // Handle HTML elements
        const Component = HTML_TO_RN_MAP[serialized.type];
        if (Component) {
            const { children, ...restProps } = serialized.props || {};
            const rnProps = convertPropsToRN(restProps);
            const isTextComponentType = isTextComponent(serialized.type);
            const childrenNode = children
                ? deserializeElementValue(children as SerializedContent | SerializedContent[], key, isTextComponentType)
                : null;

            // Special handling for specific HTML elements
            if (serialized.type === "br") {
                return <Text key={key}>{"\n"}</Text>;
            }

            if (serialized.type === "a") {
                // Links need special handling
                const href = (serialized.props as any)?.href;
                return (
                    <Pressable
                        key={key}
                        onPress={() => {
                            if (href && typeof href === 'string') {
                                Linking.openURL(href).catch(() => { });
                            }
                        }}
                        style={rnProps.style}
                    >
                        <Text style={tw("text-blue-600 underline")}>
                            {childrenNode || (href as string) || ""}
                        </Text>
                    </Pressable>
                );
            }

            if (serialized.type === "img") {
                const src = (serialized.props as any)?.src;
                const alt = (serialized.props as any)?.alt || "";
                const imageUrl = src && typeof src === 'string'
                    ? (src.startsWith('http') ? src : `https://assets.komplex.app${src}`)
                    : 'https://assets.komplex.app/image-error.png';

                return (
                    <Image
                        key={key}
                        source={{ uri: imageUrl }}
                        style={[rnProps.style, tw("w-full h-auto")]}
                        accessibilityLabel={alt}
                        resizeMode="contain"
                    />
                );
            }

            if (serialized.type === "ul" || serialized.type === "ol") {
                // Lists - render children with bullets/numbers
                const listItems = Array.isArray(children) ? children : (children ? [children] : []);
                return (
                    <View key={key} style={rnProps.style}>
                        {listItems.map((item: unknown, index: number) => {
                            if (item && typeof item === 'object' && 'type' in (item as Record<string, unknown>) && (item as SerializedContent).type === 'li') {
                                const bullet = serialized.type === "ul" ? "•" : `${index + 1}.`;
                                const liItem = item as SerializedContent;
                                const liChildren = liItem.props?.children;
                                const liChildrenNode = liChildren ? deserializeElementValue(liChildren as SerializedContent, `${key}-li-${index}`, false) : null;
                                // Wrap text content in list items
                                const wrappedLiChildren = React.Children.toArray(liChildrenNode).map((child, idx) => {
                                    if (typeof child === "string" || typeof child === "number") {
                                        return <Text key={`li-content-${key}-${index}-${idx}`}>{child}</Text>;
                                    }
                                    return child;
                                });
                                return (
                                    <View key={index} style={tw("flex-row items-start gap-2 mb-2")}>
                                        <Text style={tw("text-indigo-600 font-bold")}>{bullet}</Text>
                                        <View style={tw("flex-1")}>
                                            {wrappedLiChildren}
                                        </View>
                                    </View>
                                );
                            }
                            const deserialized = deserializeElementValue(item as SerializedContent, `${key}-item-${index}`, false);
                            // Wrap if it's a string
                            if (typeof deserialized === "string" || typeof deserialized === "number") {
                                return <Text key={index}>{deserialized}</Text>;
                            }
                            return <React.Fragment key={index}>{deserialized}</React.Fragment>;
                        })}
                    </View>
                );
            }

            if (serialized.type === "li") {
                // List items are handled by parent ul/ol, but handle standalone li
                // Wrap text content properly
                const wrappedChildren = React.Children.toArray(childrenNode).map((child, idx) => {
                    if (typeof child === "string" || typeof child === "number") {
                        return <Text key={`li-${key}-${idx}`}>{child}</Text>;
                    }
                    return child;
                });
                return (
                    <View key={key} style={tw("flex-row items-start gap-2 mb-2")}>
                        <Text style={tw("text-indigo-600 font-bold")}>•</Text>
                        <View style={tw("flex-1")}>
                            {wrappedChildren}
                        </View>
                    </View>
                );
            }

            if (serialized.type === "p") {
                // Check if children contain non-text elements (like inline math)
                const childrenArray = React.Children.toArray(childrenNode);
                const hasNonTextChildren = childrenArray.some(child => {
                    return React.isValidElement(child) &&
                        typeof (child as any).type === 'function' &&
                        (child as any).type.name !== 'Text';
                });

                if (hasNonTextChildren) {
                    // Process children to group consecutive text nodes and intersperse with math
                    const processedChildren: ReactNode[] = [];
                    let textBuffer: (string | number)[] = [];

                    childrenArray.forEach((child) => {
                        const isText = typeof child === "string" || typeof child === "number";

                        if (isText) {
                            textBuffer.push(child as string | number);
                        } else {
                            // Flush text buffer before adding non-text element
                            if (textBuffer.length > 0) {
                                processedChildren.push(
                                    <Text key={`p-text-${key}-${processedChildren.length}`}>
                                        {textBuffer.join('')}
                                    </Text>
                                );
                                textBuffer = [];
                            }
                            // Add the non-text element (like MathRenderer)
                            if (React.isValidElement(child)) {
                                processedChildren.push(
                                    React.cloneElement(child, { key: `p-elem-${key}-${processedChildren.length}` })
                                );
                            } else if (child !== null && child !== undefined) {
                                // Handle other non-text, non-element children
                                processedChildren.push(child);
                            }
                        }
                    });

                    // Flush remaining text buffer
                    if (textBuffer.length > 0) {
                        processedChildren.push(
                            <Text key={`p-text-${key}-${processedChildren.length}`}>
                                {textBuffer.join('')}
                            </Text>
                        );
                    }

                    // Render as View with flex-row for inline flow
                    // Use flex-wrap and align-items baseline for natural text flow
                    return (
                        <View key={key} style={[tw("mb-2 flex-row flex-wrap"), { alignItems: 'baseline' }, rnProps.style]}>
                            {processedChildren}
                        </View>
                    );
                }

                // Pure text content - use Text component
                return (
                    <Text key={key} style={[tw("mb-2"), rnProps.style]}>
                        {childrenNode}
                    </Text>
                );
            }

            if (serialized.type === "strong" || serialized.type === "b") {
                return (
                    <Text key={key} style={[tw("font-bold"), rnProps.style]}>
                        {childrenNode}
                    </Text>
                );
            }

            if (serialized.type === "em" || serialized.type === "i") {
                return (
                    <Text key={key} style={[tw("italic"), rnProps.style]}>
                        {childrenNode}
                    </Text>
                );
            }

            if (serialized.type.startsWith("h") && /^h[1-6]$/.test(serialized.type)) {
                // Headings
                const fontSizeMap: Record<string, string> = {
                    h1: "text-4xl",
                    h2: "text-3xl",
                    h3: "text-2xl",
                    h4: "text-xl",
                    h5: "text-lg",
                    h6: "text-base",
                };
                return (
                    <Text key={key} style={[tw(`${fontSizeMap[serialized.type]} font-bold mb-2`), rnProps.style]}>
                        {childrenNode}
                    </Text>
                );
            }

            if (serialized.type === "code") {
                return (
                    <Text key={key} style={[tw("font-mono bg-gray-100 p-1 rounded"), rnProps.style]}>
                        {childrenNode}
                    </Text>
                );
            }

            if (serialized.type === "pre") {
                return (
                    <View key={key} style={[tw("bg-gray-100 p-4 rounded mb-2"), rnProps.style]}>
                        <Text style={tw("font-mono")}>
                            {childrenNode}
                        </Text>
                    </View>
                );
            }

            if (serialized.type === "blockquote") {
                // Wrap text content in blockquote
                const wrappedChildren = React.Children.toArray(childrenNode).map((child, idx) => {
                    if (typeof child === "string" || typeof child === "number") {
                        return <Text key={`blockquote-${key}-${idx}`}>{child}</Text>;
                    }
                    return child;
                });
                return (
                    <View key={key} style={[tw("border-l-4 border-gray-300 pl-4 my-2"), rnProps.style]}>
                        {wrappedChildren}
                    </View>
                );
            }

            // Generic HTML element
            // If Component is View and children contain text, wrap text in Text component
            if (Component === View && childrenNode) {
                // Check if childrenNode contains strings that need wrapping
                const processedChildren = React.Children.toArray(childrenNode).map((child, idx) => {
                    if (typeof child === "string" || typeof child === "number") {
                        return <Text key={`${key}-wrapped-${idx}`}>{child}</Text>;
                    }
                    return child;
                });
                return (
                    <Component key={key} {...rnProps}>
                        {processedChildren}
                    </Component>
                );
            }

            return (
                <Component key={key} {...rnProps}>
                    {childrenNode}
                </Component>
            );
        }

        // Unknown element type - try to render children
        if (serialized.props && 'children' in serialized.props) {
            return deserializeElementValue(serialized.props.children as SerializedContent, key, parentIsText);
        }
    }

    return null;
}

/**
 * Deserialize JSON string to TopicContent_V3[] with React Native elements
 */
export function deserializeTopicContentV3(jsonString: string): TopicContent_V3[] {
    const data = JSON.parse(jsonString) as {
        type: TopicContent_V3["type"];
        props: Record<string, unknown>;
    }[];

    const reviveMixed = (node: unknown): unknown => {
        if (node == null) return node;
        if (typeof node === "string" || typeof node === "number") return node;
        if (Array.isArray(node)) return node.map(reviveMixed);
        if (typeof node === "object") {
            // If this object is a serialized element (has type), build a ReactNode
            if ("type" in (node as Record<string, unknown>)) {
                return deserializeElementValue(node as SerializedContent);
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
