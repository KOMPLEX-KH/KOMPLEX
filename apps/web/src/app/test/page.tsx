'use client'

import { ThreeDExplanationBox } from '@/components/pages/docs/boxes/explanation-box/3DExplanationBox'
import { TopicContent_V3 } from '@/types/docs/topic';
import { InlineMath } from 'react-katex';
import { Calculator } from 'lucide-react';
import { deserializeTopicContentV3, serializeTopicContentV3 } from '@/components/pages/docs/utils/ContentSerializerV2';
import ContentRendererV3 from '@/components/pages/docs/utils/ContentRendererV2';

const content: TopicContent_V3[] = [
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
                <Calculator size={16} color="red"></Calculator>
                <Calculator size={16} color="red"></Calculator>
                <Calculator size={16} color="red"></Calculator>
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

export default function SerializationTest() {
    const serialized = serializeTopicContentV3(content);
    const deserialized = deserializeTopicContentV3(serialized);
    return (
        <>
            <ContentRendererV3 content={content} />
            <ContentRendererV3 content={deserialized} />
        </>
    )
}
