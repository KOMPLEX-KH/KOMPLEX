import React from "react";
import { View } from "react-native";
import { Text } from "@/components/common/Text";
import MathRenderer from "@/components/helper/MathRenderer";
import { tw } from "@/utils/styles";

interface Props {
    content: string;
}

/**
 * Simple renderer without external markdown libs.
 * - Renders plain text.
 * - Treats any $$...$$ segment as LaTeX (inline) via MathRenderer.
 */
export default function MarkDownRenderer({ content }: Props) {
    const segments: { type: "text" | "math"; value: string }[] = [];
    const regex = /\$\$([\s\S]*?)\$\$/g;
    let lastIndex = 0;
    let match: RegExpExecArray | null;

    while ((match = regex.exec(content)) !== null) {
        if (match.index > lastIndex) {
            segments.push({ type: "text", value: content.slice(lastIndex, match.index) });
        }
        segments.push({ type: "math", value: (match[1] || "").trim() });
        lastIndex = regex.lastIndex;
    }

    if (lastIndex < content.length) {
        segments.push({ type: "text", value: content.slice(lastIndex) });
    }

    return (
        <View style={tw("flex flex-row flex-wrap items-baseline gap-1")}>
            {segments.map((seg, idx) => {
                if (seg.type === "math") {
                    return (
                        <MathRenderer key={`math-${idx}`} math={seg.value} inline />
                    );
                }
                return (
                    <Text key={`text-${idx}`} style={tw("text-base leading-6 text-gray-800")}>
                        {seg.value}
                    </Text>
                );
            })}
        </View>
    );
}
// import React from 'react';
// import { View, Text } from 'react-native';
// import Markdown from '@ronradtke/react-native-markdown-display';

// const rules = {
//     heading1: (node, children) => (
//         <Text key={node.key} style={{ fontSize: 32, fontWeight: 'bold', marginBottom: 16 }}>
//             [{children}]
//         </Text>
//     ),
//     heading2: (node, children) => (
//         <Text key={node.key} style={{ fontSize: 28, fontWeight: 'bold', marginBottom: 12 }}>
//             [{children}]
//         </Text>
//     ),
//     heading3: (node, children) => (
//         <Text key={node.key} style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
//             [{children}]
//         </Text>
//     ),
// };

// const copy = `
// # h1 Heading 8-)
// ## h2 Heading 8-)
// ### h3 Heading 8-)

// **Bold text test**

// Normal paragraph text

// | Option | Description |
// | ------ | ----------- |
// | data   | path to data files to supply the data that will be passed into templates. |
// | engine | engine to be used for processing templates. Handlebars is the default. |
// | ext    | extension to be used for dest files. |
// `;

// export default function MarkDownRenderer({ content }: { content: string }) {
//     return (
//         <Markdown rules={rules}>
//             {content}
//         </Markdown>
//     );
// }
