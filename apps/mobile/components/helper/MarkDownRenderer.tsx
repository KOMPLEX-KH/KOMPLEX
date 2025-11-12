import React, { useMemo } from 'react';
import { View, StyleSheet } from 'react-native';
import Markdown from 'react-native-markdown-display';
import MathRenderer from './MathRenderer';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';

interface Props {
    content: string;
}

/**
 * Preprocess markdown to replace math expressions with HTML-like tags
 * that we can detect and render with MathRenderer in custom rules
 */
function preprocessMarkdown(markdown: string): {
    processedMarkdown: string;
    mathExpressions: Map<string, { math: string; inline: boolean }>;
} {
    const mathExpressions = new Map<string, { math: string; inline: boolean }>();
    let processedMarkdown = markdown;
    let placeholderIndex = 0;

    // Extract block math: $$...$$ or \[...\]
    const blockMathPattern = /\$\$([\s\S]*?)\$\$|\\\[([\s\S]*?)\\\]/g;
    processedMarkdown = processedMarkdown.replace(blockMathPattern, (match, content1, content2) => {
        const math = (content1 || content2).trim();
        const placeholder = `__MATHBLOCK_${placeholderIndex}__`;
        mathExpressions.set(placeholder, { math, inline: false });
        placeholderIndex++;
        // Use HTML-like tag that markdown parser won't break
        return `\n\n<mathblock id="${placeholder}"></mathblock>\n\n`;
    });

    // Extract inline math: $...$ or \(...\) (but not $$)
    const inlineMathPattern = /(?<!\$)\$(?!\$)([^\$\n]+?)\$(?!\$)|\\\(([^\n]+?)\\\)/g;
    processedMarkdown = processedMarkdown.replace(inlineMathPattern, (match, content1, content2) => {
        const math = (content1 || content2).trim();
        const placeholder = `__MATHINLINE_${placeholderIndex}__`;
        mathExpressions.set(placeholder, { math, inline: true });
        placeholderIndex++;
        // Use HTML-like tag for inline math
        return `<mathinline id="${placeholder}"></mathinline>`;
    });

    return { processedMarkdown, mathExpressions };
}

const MarkdownRenderer: React.FC<Props> = ({ content }) => {
    // Preprocess markdown to extract math
    const { processedMarkdown, mathExpressions } = useMemo(
        () => preprocessMarkdown(content),
        [content]
    );

    // Custom render rules for markdown elements
    const markdownRules = useMemo(
        () => ({
            // Custom rule for math blocks
            html_inline: (node: any) => {
                if (node.content) {
                    const mathInlineMatch = node.content.match(/<mathinline id="([^"]+)"><\/mathinline>/);
                    if (mathInlineMatch) {
                        const placeholder = mathInlineMatch[1];
                        const mathData = mathExpressions.get(placeholder);
                        if (mathData) {
                            return (
                                <MathRenderer
                                    key={node.key}
                                    math={mathData.math}
                                    inline={true}
                                />
                            );
                        }
                    }
                }
                return null;
            },
            html_block: (node: any) => {
                if (node.content) {
                    const mathBlockMatch = node.content.match(/<mathblock id="([^"]+)"><\/mathblock>/);
                    if (mathBlockMatch) {
                        const placeholder = mathBlockMatch[1];
                        const mathData = mathExpressions.get(placeholder);
                        if (mathData) {
                            return (
                                <View key={node.key} style={tw('my-4')}>
                                    <MathRenderer math={mathData.math} inline={false} />
                                </View>
                            );
                        }
                    }
                }
                return null;
            },
            // Headings
            heading1: (node: any, children: any) => (
                <Text key={node.key} style={tw('text-3xl font-bold mb-4 mt-6')}>
                    {children}
                </Text>
            ),
            heading2: (node: any, children: any) => (
                <Text key={node.key} style={tw('text-2xl font-bold mb-3 mt-5')}>
                    {children}
                </Text>
            ),
            heading3: (node: any, children: any) => (
                <Text key={node.key} style={tw('text-xl font-semibold mb-2 mt-4')}>
                    {children}
                </Text>
            ),
            heading4: (node: any, children: any) => (
                <Text key={node.key} style={tw('text-lg font-semibold mb-2 mt-3')}>
                    {children}
                </Text>
            ),
            heading5: (node: any, children: any) => (
                <Text key={node.key} style={tw('text-base font-semibold mb-2 mt-3')}>
                    {children}
                </Text>
            ),
            heading6: (node: any, children: any) => (
                <Text key={node.key} style={tw('text-sm font-semibold mb-2 mt-2')}>
                    {children}
                </Text>
            ),
            // Paragraphs - handle inline math
            paragraph: (node: any, children: any) => {
                // Check if children contain MathRenderer components
                const childrenArray = React.Children.toArray(children);
                const hasMath = childrenArray.some(
                    (child) => React.isValidElement(child) && child.type === MathRenderer
                );

                if (hasMath) {
                    // Wrap in flex-row for inline math
                    return (
                        <View
                            key={node.key}
                            style={tw('mb-4 flex-row flex-wrap items-baseline gap-1')}
                        >
                            {children}
                        </View>
                    );
                }

                return (
                    <View key={node.key} style={tw('mb-4')}>
                        <Text style={tw('text-base leading-6')}>{children}</Text>
                    </View>
                );
            },
            // Text - check for math placeholders in text nodes
            text: (node: any) => {
                const text = node.content || '';
                // Check if text contains math placeholder (from inline math)
                const parts: React.ReactNode[] = [];
                let lastIndex = 0;

                // Find all math placeholders in this text node
                const mathInlinePattern = /<mathinline id="([^"]+)"><\/mathinline>/g;
                let match;
                while ((match = mathInlinePattern.exec(text)) !== null) {
                    // Add text before math
                    if (match.index > lastIndex) {
                        const textPart = text.substring(lastIndex, match.index);
                        if (textPart) {
                            parts.push(<Text key={`text-${lastIndex}`}>{textPart}</Text>);
                        }
                    }

                    // Add math component
                    const placeholder = match[1];
                    const mathData = mathExpressions.get(placeholder);
                    if (mathData) {
                        parts.push(
                            <MathRenderer
                                key={`math-${placeholder}`}
                                math={mathData.math}
                                inline={true}
                            />
                        );
                    }

                    lastIndex = match.index + match[0].length;
                }

                // Add remaining text
                if (lastIndex < text.length) {
                    const textPart = text.substring(lastIndex);
                    if (textPart) {
                        parts.push(<Text key={`text-${lastIndex}`}>{textPart}</Text>);
                    }
                }

                // If no math found, return text as-is
                if (parts.length === 0) {
                    return <Text key={node.key}>{text}</Text>;
                }

                // Return fragments for text with math
                return <>{parts}</>;
            },
            // Code blocks
            code_inline: (node: any) => (
                <Text key={node.key} style={tw('bg-gray-100 px-2 py-1 rounded font-mono text-sm')}>
                    {node.content}
                </Text>
            ),
            code_block: (node: any) => (
                <View key={node.key} style={tw('bg-gray-100 p-4 rounded-lg mb-4')}>
                    <Text style={tw('font-mono text-sm')}>{node.content}</Text>
                </View>
            ),
            fence: (node: any) => (
                <View key={node.key} style={tw('bg-gray-100 p-4 rounded-lg mb-4')}>
                    <Text style={tw('font-mono text-sm')}>{node.content}</Text>
                </View>
            ),
            // Lists
            bullet_list: (node: any, children: any) => (
                <View key={node.key} style={tw('mb-4 ml-4')}>
                    {children}
                </View>
            ),
            ordered_list: (node: any, children: any) => (
                <View key={node.key} style={tw('mb-4 ml-4')}>
                    {children}
                </View>
            ),
            list_item: (node: any, children: any) => (
                <View key={node.key} style={tw('mb-2 flex-row')}>
                    <Text style={tw('mr-2')}>•</Text>
                    <View style={tw('flex-1')}>
                        <Text>{children}</Text>
                    </View>
                </View>
            ),
            // Links
            link: (node: any, children: any) => (
                <Text key={node.key} style={tw('text-blue-600 underline')}>
                    {children}
                </Text>
            ),
            // Strong and emphasis
            strong: (node: any, children: any) => (
                <Text key={node.key} style={tw('font-bold')}>
                    {children}
                </Text>
            ),
            em: (node: any, children: any) => (
                <Text key={node.key} style={tw('italic')}>
                    {children}
                </Text>
            ),
            // Blockquote
            blockquote: (node: any, children: any) => (
                <View key={node.key} style={tw('border-l-4 border-gray-300 pl-4 my-4')}>
                    <Text style={tw('text-gray-700')}>{children}</Text>
                </View>
            ),
            // Horizontal rule
            hr: () => <View key="hr" style={tw('border-t border-gray-300 my-4')} />,
        }),
        [mathExpressions]
    );

    return (
        <View style={tw('flex-1')}>
            <Markdown rules={markdownRules} style={markdownStyles}>
                {processedMarkdown}
            </Markdown>
        </View>
    );
};

const markdownStyles = StyleSheet.create({
    body: {
        flex: 1,
    },
    paragraph: {
        marginBottom: 16,
    },
});

export default MarkdownRenderer;