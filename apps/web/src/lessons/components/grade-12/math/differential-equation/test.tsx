"use client";

import React from "react";
import { InlineMath } from "react-katex";
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
    serializeTopicContentV3,
    deserializeTopicContentV3,
    deserializeTopicContentV3ToTree,
} from "@/components/pages/docs/utils/ContentSerializerV2";

// Stage 1: Original authoring shape (TopicContent_V3)
const TOPIC_CONTENT_V3: TopicContent_V3[] = [
    {
        type: "definition",
        title: "តើចំនួនកុំផ្លិចជាអ្វី?",
        content: (
            <div>
                ចំនួនកុំផ្លិចមានរាង <InlineMath math="z = a + bi" />
            </div>
        ),
    },
    {
        type: "tip",
        title: "ចំណាំ",
        content: (
            <div>
                i គឺ <InlineMath math="i^2 = -1" />
            </div>
        ),
    },
    {
        type: "example",
        question: (
            <span>
                គណនា <InlineMath math="(2+3i) + (1-2i)" />
            </span>
        ),
        steps: [
            { title: "បូកផ្នែកពិត", content: <InlineMath math="2+1=3" /> },
            { title: "បូកផ្នែកនិមិត្ត", content: <InlineMath math="3i+(-2i)=i" /> },
        ],
        answer: <InlineMath math="3 + i" />,
    },
    {
        type: "exercise",
        questions: [
            {
                id: "q1",
                question: (
                    <span>
                        តើ <InlineMath math="i^2" /> ស្មើអ្វី?
                    </span>
                ),
                options: ["1", "-1", "i", "2i"],
                correctAnswer: 1,
            },
        ],
    },
    {
        type: "hint",
        content: (
            <div>
                ចងចាំថា <InlineMath math="\\overline{a+bi}=a-bi" />
            </div>
        ),
    },
    { type: "warning", content: "កុំបន្លំ a និង b ជាមួយគ្នា" },
    {
        type: "custom",
        title: "ប្លុកផ្ទាល់ខ្លួន",
        content: <div>ខ្លឹមសារតាមតម្រូវការ</div>,
        backgroundColor: "bg-white",
        borderColor: "border-gray-200",
    },
    {
        type: "threeD",
        src: "/test.glb",
        title: "គំរូ 3D",
        content: "ការពន្យល់អំពីរូបភាព 3D",
        height: 300,
    },
    {
        type: "graph",
        expressions: [
            { id: "1", latex: "y=x^2", color: "#2563eb" },
            { id: "2", latex: "y=2x+1", color: "#dc2626" },
        ],
    },
    {
        type: "imageExplanation",
        src: "/triangle.png",
        imageAlt: "រូបភាព",
        explanation: "នេះជាការពន្យល់អំពីរូបភាព",
        title: "រូបភាព",
    },
    {
        type: "videoExplanation",
        src: "/test.mp4",
        videoTitle: "វីដេអូ",
        explanation: "ពន្យល់អំពីវីដេអូ",
    },
    {
        type: "graphExplanation",
        expressions: [{ id: "1", latex: "y=\\sin(x)", color: "#16a34a" }],
        explanation: (
            <div>
                ក្រាប <InlineMath math="y=\\sin(x)" /> មានរយៈពេល <InlineMath math="2\\pi" />
            </div>
        ),
    },
    {
        type: "threeDExplanation",
        src: "/plant-cell.glb",
        explanation: "ការពន្យល់អំពីគំរូ 3D",
        height: 600,
    },
];

// Stage 2: Serialized JSON
const jsonV2 = serializeTopicContentV3(TOPIC_CONTENT_V3);

// Stage 3a: Deserialized V3 with live React nodes (renderable)
const restoredV3 = deserializeTopicContentV3(jsonV2) as TopicContent_V3[];

// Stage 3b: Deserialized V3 raw node tree (no React elements) for inspection
const restoredV3Tree = deserializeTopicContentV3ToTree(jsonV2) as TopicContent_V3[];

// Helper: visualize type sequence
const originalTypes = TOPIC_CONTENT_V3.map((i) => i.type);

const TestingRenderer = () => {
    return (
        <div className="p-6 space-y-10">
            {/* Stage 1: Original authoring data */}
            <div className="space-y-3">
                <h2 className="text-xl font-bold">Stage 1: Original TopicContent_V3 (authoring)</h2>
                <div className="text-sm text-gray-500">Types in sequence:</div>
                <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">{JSON.stringify(originalTypes, null, 2)}</pre>
                <div className="text-sm text-gray-500">Rendered (authoring):</div>
                <ContentRendererV3 content={TOPIC_CONTENT_V3} />
            </div>

            {/* Stage 2: Serialized JSON */}
            <div className="space-y-3">
                <h2 className="text-xl font-bold">Stage 2: Serialized JSON (V2)</h2>
                <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">{jsonV2}</pre>
            </div>

            {/* Stage 3a: Deserialized and rendered */}
            <div className="space-y-3">
                <h2 className="text-xl font-bold">Stage 3a: Deserialized TopicContent_V3 (renderable)</h2>
                <ContentRendererV3 content={restoredV3} />
            </div>

            {/* Stage 3b: Deserialized raw node tree */}
            <div className="space-y-3">
                <h2 className="text-xl font-bold">Stage 3b: Deserialized TopicContent_V3 (raw node tree)</h2>
                <pre className="bg-gray-100 p-3 rounded text-xs overflow-auto">{JSON.stringify(restoredV3Tree, null, 2)}</pre>
            </div>
        </div>
    );
};

export default TestingRenderer;

