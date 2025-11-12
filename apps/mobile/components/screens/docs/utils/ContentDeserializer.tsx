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
 * Separate text styling classes from layout classes in className
 * Returns { textClasses: string, layoutClasses: string }
 */
function separateTextAndLayoutClasses(className?: string): { textClasses: string; layoutClasses: string } {
    if (!className) return { textClasses: '', layoutClasses: '' };

    const classes = className.split(/\s+/).filter(c => c.length > 0);
    const textClassPrefixes = ['text-', 'font-', 'italic', 'bold', 'underline', 'line-through'];
    const layoutClassPrefixes = ['flex', 'grid', 'gap', 'p', 'm', 'w', 'h', 'max-w', 'min-w', 'max-h', 'min-h',
        'items-', 'justify-', 'self-', 'align-', 'border', 'rounded', 'bg-', 'opacity'];

    const textClasses: string[] = [];
    const layoutClasses: string[] = [];

    classes.forEach(cls => {
        const isTextClass = textClassPrefixes.some(prefix => cls.startsWith(prefix));
        const isLayoutClass = layoutClassPrefixes.some(prefix => cls.startsWith(prefix));

        if (isTextClass) {
            textClasses.push(cls);
        } else if (isLayoutClass) {
            layoutClasses.push(cls);
        } else {
            // Unknown class - assume layout by default
            layoutClasses.push(cls);
        }
    });

    return {
        textClasses: textClasses.join(' '),
        layoutClasses: layoutClasses.join(' ')
    };
}

/**
 * Check if serialized children contain a br tag as DIRECT children
 */
function hasBrAsDirectChild(children: SerializedContent | SerializedContent[] | undefined): boolean {
    if (!children) return false;

    const childrenArray = Array.isArray(children) ? children : [children];

    return childrenArray.some(child => {
        if (!child || typeof child !== 'object' || !('type' in child)) return false;

        const serialized = child as SerializedContent;

        // Direct br tag found
        if (serialized.type === 'br') return true;

        return false;
    });
}

/**
 * Check if serialized children contain InlineMath as DIRECT children (not nested deep)
 * Returns true only if InlineMath is a direct child or sibling of text nodes
 */
function hasInlineMathAsDirectChild(children: SerializedContent | SerializedContent[] | undefined): boolean {
    if (!children) return false;

    const childrenArray = Array.isArray(children) ? children : [children];

    return childrenArray.some(child => {
        if (!child || typeof child !== 'object' || !('type' in child)) return false;

        const serialized = child as SerializedContent;

        // Direct InlineMath - this is what we're looking for
        if (serialized.type === 'InlineMath') return true;

        // Text nodes are fine - they can be siblings of InlineMath
        if (serialized.type === 'text') return false;

        // br tags are fine - we'll handle them specially to create line breaks
        if (serialized.type === 'br') return false;

        // If it's any other element type, InlineMath is nested, so return false
        // We only want to apply flex layout to direct parents of InlineMath
        return false;
    });
}

/**
 * Process children when InlineMath is present - separate text and math nodes
 * Handles br tags by splitting content into line segments
 */
function processMixedChildren(
    children: SerializedContent | SerializedContent[] | undefined,
    baseKey: string | number | undefined
): ReactNode[] {
    if (!children) return [];

    const childrenArray = Array.isArray(children) ? children : [children];

    // Check if there are any br tags - if so, split into segments
    const hasBr = childrenArray.some(child =>
        child && typeof child === 'object' && 'type' in child && (child as SerializedContent).type === 'br'
    );

    if (hasBr) {
        // Split children into segments separated by br tags
        const segments: SerializedContent[][] = [];
        let currentSegment: SerializedContent[] = [];

        childrenArray.forEach(child => {
            if (child && typeof child === 'object' && 'type' in child && (child as SerializedContent).type === 'br') {
                // Found a br - save current segment and start a new one
                if (currentSegment.length > 0) {
                    segments.push(currentSegment);
                    currentSegment = [];
                }
            } else {
                currentSegment.push(child as SerializedContent);
            }
        });

        // Add the last segment (even if empty - represents content after last br)
        segments.push(currentSegment);

        // Process each segment as a separate inline row
        return segments
            .filter(segment => segment.length > 0) // Filter out empty segments (multiple consecutive brs or br at start)
            .map((segment, segmentIndex) => {
                const segmentKey = baseKey !== undefined ? `${baseKey}-seg-${segmentIndex}` : `seg-${segmentIndex}`;
                const segmentChildren: ReactNode[] = [];
                let textBuffer: (string | number)[] = [];

                segment.forEach((child, index) => {
                    const childKey = `${segmentKey}-${index}`;

                    if (!child || typeof child !== 'object' || !('type' in child)) {
                        if (typeof child === 'string' || typeof child === 'number') {
                            textBuffer.push(child);
                        }
                        return;
                    }

                    const serialized = child as SerializedContent;

                    // Text node - add to buffer
                    if (serialized.type === 'text') {
                        textBuffer.push(serialized.value as string | number);
                        return;
                    }

                    // Math node - flush buffer and add math
                    if (serialized.type === 'InlineMath' || serialized.type === 'BlockMath') {
                        if (textBuffer.length > 0) {
                            segmentChildren.push(
                                <Text key={`${segmentKey}-text-${segmentChildren.length}`}>
                                    {textBuffer.join('')}
                                </Text>
                            );
                            textBuffer = [];
                        }
                        segmentChildren.push(deserializeElementValue(child, childKey, false));
                        return;
                    }

                    // Other element - flush buffer and deserialize recursively
                    if (textBuffer.length > 0) {
                        segmentChildren.push(
                            <Text key={`${segmentKey}-text-${segmentChildren.length}`}>
                                {textBuffer.join('')}
                            </Text>
                        );
                        textBuffer = [];
                    }
                    segmentChildren.push(deserializeElementValue(child, childKey, false));
                });

                // Flush remaining text in segment
                if (textBuffer.length > 0) {
                    segmentChildren.push(
                        <Text key={`${segmentKey}-text-${segmentChildren.length}`}>
                            {textBuffer.join('')}
                        </Text>
                    );
                }

                // Wrap each segment in a View with flex-row to maintain inline layout
                // Segments will stack vertically due to parent's flex-col (if any)
                return (
                    <View key={segmentKey} style={tw("flex flex-row flex-wrap items-baseline gap-1")}>
                        {segmentChildren}
                    </View>
                );
            });
    }

    // No br tags - process normally as a single inline row
    const processed: ReactNode[] = [];
    let textBuffer: (string | number)[] = [];

    childrenArray.forEach((child, index) => {
        const childKey = baseKey !== undefined ? `${baseKey}-${index}` : index;

        if (!child || typeof child !== 'object' || !('type' in child)) {
            // Primitive value
            if (typeof child === 'string' || typeof child === 'number') {
                textBuffer.push(child);
            }
            return;
        }

        const serialized = child as SerializedContent;

        // Text node - add to buffer
        if (serialized.type === 'text') {
            textBuffer.push(serialized.value as string | number);
            return;
        }

        // Math node - flush buffer and add math
        if (serialized.type === 'InlineMath' || serialized.type === 'BlockMath') {
            if (textBuffer.length > 0) {
                processed.push(
                    <Text key={`${baseKey}-text-${processed.length}`}>
                        {textBuffer.join('')}
                    </Text>
                );
                textBuffer = [];
            }
            processed.push(deserializeElementValue(child, childKey, false));
            return;
        }

        // Other element - flush buffer and deserialize recursively
        if (textBuffer.length > 0) {
            processed.push(
                <Text key={`${baseKey}-text-${processed.length}`}>
                    {textBuffer.join('')}
                </Text>
            );
            textBuffer = [];
        }
        processed.push(deserializeElementValue(child, childKey, false));
    });

    // Flush remaining text
    if (textBuffer.length > 0) {
        processed.push(
            <Text key={`${baseKey}-text-${processed.length}`}>
                {textBuffer.join('')}
            </Text>
        );
    }

    return processed;
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

            // Check if children contain InlineMath as DIRECT children (not nested)
            // Only apply inline math flex layout to direct parents, not ancestor containers
            const hasInlineMathAsDirect = hasInlineMathAsDirectChild(children as SerializedContent | SerializedContent[]);

            // Container elements that should use flex layout when InlineMath is present
            const containerTypes = ['div', 'span', 'p', 'strong', 'em', 'b', 'i', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

            // Special handling for specific HTML elements
            if (serialized.type === "br") {
                return <Text key={key}>{"\n"}</Text>;
            }

            if (serialized.type === "a") {
                // Links need special handling
                const href = (serialized.props as any)?.href;
                const linkChildrenNode = children
                    ? deserializeElementValue(children as SerializedContent | SerializedContent[], key, isTextComponentType)
                    : null;
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
                            {linkChildrenNode || (href as string) || ""}
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
                const liChildrenNode = children
                    ? deserializeElementValue(children as SerializedContent | SerializedContent[], key, false)
                    : null;
                const wrappedChildren = React.Children.toArray(liChildrenNode).map((child, idx) => {
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

            // Handle container elements with InlineMath as DIRECT children only
            // Only apply inline math flex layout to direct parents, not ancestor containers
            if (containerTypes.includes(serialized.type) && hasInlineMathAsDirect) {
                // This element has InlineMath as a direct child - apply inline math layout
                // processMixedChildren will handle br tags by splitting into segments (each wrapped in a View)
                const processedChildren = processMixedChildren(
                    children as SerializedContent | SerializedContent[],
                    key
                );

                // Check if there are br tags - if so, processedChildren will be Views (one per line segment)
                const hasBr = hasBrAsDirectChild(children as SerializedContent | SerializedContent[]);

                // Extract text and layout classes from className
                const className = (serialized.props as any)?.className as string | undefined;
                const { textClasses, layoutClasses } = separateTextAndLayoutClasses(className);
                const textStyleFromClassName = textClasses ? convertClassNameToStyle(textClasses) : {};
                const layoutStyleFromClassName = layoutClasses ? convertClassNameToStyle(layoutClasses) : {};

                // Add element-specific styles
                let elementStyles = {};
                if (serialized.type === 'p') {
                    elementStyles = tw("mb-2");
                } else if (serialized.type.startsWith('h') && /^h[1-6]$/.test(serialized.type)) {
                    const fontSizeMap: Record<string, string> = {
                        h1: "text-4xl",
                        h2: "text-3xl",
                        h3: "text-2xl",
                        h4: "text-xl",
                        h5: "text-lg",
                        h6: "text-base",
                    };
                    elementStyles = tw(`${fontSizeMap[serialized.type]} font-bold mb-2`);
                } else if (serialized.type === 'strong' || serialized.type === 'b') {
                    elementStyles = tw("font-bold");
                } else if (serialized.type === 'em' || serialized.type === 'i') {
                    elementStyles = tw("italic");
                }

                if (hasBr) {
                    // When there are br tags, processedChildren are Views (one per line segment)
                    // We need to wrap them in a flex-col container and apply text styling to Text children within segments
                    const styledChildren = processedChildren.map((segmentView, idx) => {
                        if (React.isValidElement(segmentView) && segmentView.type === View) {
                            // Apply text styling to ALL Text children within this segment
                            // Combine elementStyles (for strong, em, headings) with textStyleFromClassName (from className like text-base)
                            const segmentProps = segmentView.props as any;
                            const segmentChildren = React.Children.toArray(segmentProps.children).map((child: any, childIdx: number) => {
                                if (React.isValidElement(child) && child.type === Text) {
                                    const childProps = child.props as any;
                                    // Apply elementStyles only if this is a styled element (strong, em, heading)
                                    // Always apply textStyleFromClassName (from className like text-base)
                                    const shouldApplyElementStyles =
                                        serialized.type === 'strong' || serialized.type === 'b' ||
                                        serialized.type === 'em' || serialized.type === 'i' ||
                                        (serialized.type.startsWith('h') && /^h[1-6]$/.test(serialized.type));

                                    const stylesToApply = shouldApplyElementStyles
                                        ? [textStyleFromClassName, elementStyles, childProps.style]
                                        : [textStyleFromClassName, childProps.style];

                                    return React.cloneElement(child as React.ReactElement<any>, {
                                        key: child.key || `${key}-styled-${idx}-${childIdx}`,
                                        style: stylesToApply.filter(s => s && (typeof s === 'object' ? Object.keys(s).length > 0 : true))
                                    });
                                }
                                return child;
                            });

                            return React.cloneElement(segmentView as React.ReactElement<any>, {
                                key: segmentView.key || `${key}-seg-${idx}`,
                                children: segmentChildren
                            });
                        }
                        return segmentView;
                    });

                    // Wrap segments in a flex-col container so they stack vertically
                    // Use layout classes from className (if any), but don't apply text classes to container
                    const containerStyles = [layoutStyleFromClassName, elementStyles].filter(style =>
                        style && (typeof style === 'object' ? Object.keys(style).length > 0 : true)
                    );

                    return (
                        <View
                            key={key}
                            style={containerStyles.length > 0 ? containerStyles : undefined}
                        >
                            {styledChildren}
                        </View>
                    );
                } else {
                    // No br tags - single inline row, apply flex-row layout
                    const baseFlexStyles = tw("flex flex-row flex-wrap items-baseline gap-1");

                    // Apply text styling to Text children
                    // Combine elementStyles (for strong, em, headings) with textStyleFromClassName (from className)
                    const styledChildren = processedChildren.map((child, idx) => {
                        if (React.isValidElement(child) && child.type === Text) {
                            const childProps = child.props as any;
                            // Apply elementStyles only if this is a styled element
                            const shouldApplyElementStyles =
                                serialized.type === 'strong' || serialized.type === 'b' ||
                                serialized.type === 'em' || serialized.type === 'i' ||
                                (serialized.type.startsWith('h') && /^h[1-6]$/.test(serialized.type));

                            const stylesToApply = shouldApplyElementStyles
                                ? [textStyleFromClassName, elementStyles, childProps.style]
                                : [textStyleFromClassName, childProps.style];

                            return React.cloneElement(child as React.ReactElement<any>, {
                                key: `${key}-styled-${idx}`,
                                style: stylesToApply.filter(s => s && (typeof s === 'object' ? Object.keys(s).length > 0 : true))
                            });
                        }
                        return child;
                    });

                    // Build final styles array:
                    // Combine flexStyles (for inline math), layout classes from className, and elementStyles
                    // Text classes are already applied to Text children
                    const finalStyles = [baseFlexStyles, layoutStyleFromClassName, elementStyles].filter(style =>
                        style && (typeof style === 'object' ? Object.keys(style).length > 0 : true)
                    );

                    return (
                        <View
                            key={key}
                            style={finalStyles}
                        >
                            {styledChildren}
                        </View>
                    );
                }
            }

            // Handle paragraph without InlineMath
            if (serialized.type === "p") {
                const childrenNode = children
                    ? deserializeElementValue(children as SerializedContent | SerializedContent[], key, isTextComponentType)
                    : null;
                return (
                    <Text key={key} style={[tw("mb-2"), rnProps.style]}>
                        {childrenNode}
                    </Text>
                );
            }

            // Handle text styling elements without InlineMath
            if (serialized.type === "strong" || serialized.type === "b") {
                const childrenNode = children
                    ? deserializeElementValue(children as SerializedContent | SerializedContent[], key, isTextComponentType)
                    : null;
                return (
                    <Text key={key} style={[tw("font-bold"), rnProps.style]}>
                        {childrenNode}
                    </Text>
                );
            }

            if (serialized.type === "em" || serialized.type === "i") {
                const childrenNode = children
                    ? deserializeElementValue(children as SerializedContent | SerializedContent[], key, isTextComponentType)
                    : null;
                return (
                    <Text key={key} style={[tw("italic"), rnProps.style]}>
                        {childrenNode}
                    </Text>
                );
            }

            // Handle headings without InlineMath
            if (serialized.type.startsWith("h") && /^h[1-6]$/.test(serialized.type)) {
                const childrenNode = children
                    ? deserializeElementValue(children as SerializedContent | SerializedContent[], key, isTextComponentType)
                    : null;
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

            // Handle span and div without InlineMath (fallback to default behavior)
            if (serialized.type === "span") {
                const childrenNode = children
                    ? deserializeElementValue(children as SerializedContent | SerializedContent[], key, isTextComponentType)
                    : null;
                return (
                    <Text key={key} style={rnProps.style}>
                        {childrenNode}
                    </Text>
                );
            }

            if (serialized.type === "code") {
                const codeChildrenNode = children
                    ? deserializeElementValue(children as SerializedContent | SerializedContent[], key, isTextComponentType)
                    : null;
                return (
                    <Text key={key} style={[tw("font-mono bg-gray-100 p-1 rounded"), rnProps.style]}>
                        {codeChildrenNode}
                    </Text>
                );
            }

            if (serialized.type === "pre") {
                const preChildrenNode = children
                    ? deserializeElementValue(children as SerializedContent | SerializedContent[], key, isTextComponentType)
                    : null;
                return (
                    <View key={key} style={[tw("bg-gray-100 p-4 rounded mb-2"), rnProps.style]}>
                        <Text style={tw("font-mono")}>
                            {preChildrenNode}
                        </Text>
                    </View>
                );
            }

            if (serialized.type === "blockquote") {
                const blockquoteChildrenNode = children
                    ? deserializeElementValue(children as SerializedContent | SerializedContent[], key, false)
                    : null;
                // Wrap text content in blockquote
                const wrappedChildren = React.Children.toArray(blockquoteChildrenNode).map((child, idx) => {
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

            // Generic HTML element (div, article, section, etc.)
            // If Component is View and children contain text, wrap text in Text component
            if (Component === View) {
                const childrenNode = children
                    ? deserializeElementValue(children as SerializedContent | SerializedContent[], key, false)
                    : null;

                if (childrenNode) {
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

            // Fallback for other components
            const childrenNode = children
                ? deserializeElementValue(children as SerializedContent | SerializedContent[], key, isTextComponentType)
                : null;
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
