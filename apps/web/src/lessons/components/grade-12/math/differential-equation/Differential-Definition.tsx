"use client";

import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
    serializeTopicContentV3,
    deserializeTopicContentV3,
    deserializeTopicContentV3ToTree,
} from "@/components/pages/docs/utils/ContentSerializerV2";

// ===== TOPIC CONTENT DATA =====

const TOPIC_CONTENT_V3: TopicContent_V3[] = [
    {
            type: "definition",
            title: "តេីសមីការឌីផែរ៉ង់ស្សែលគឺជាអ្វី?",
            content: (
                <div>
                    សមីការឌីផែរ៉ង់ស្សែលគឺជាជាសមីការដែលមានអនុគមន៍និងដេរីវេមួយឬច្រេីននៃអនុគមន៍នោះ។
                </div>
            ),
    },
    {
        type: "tip",
        title: "ចំណុចសំខាន់ៗ",
        content: (
            <div>
                ដើម្បីសម្គាល់សមីការឌីផែរ៉ង់ស្សែល សូមពិនិត្យមើលថាតើវាមានដេរីវេ (Derivative) របស់អនុគមន៍ឬទេ។
            </div>
        ),
    },
    {
        type: "example",
        question: (
            <div className="flex flex-col items-start gap-3">
                <p>សមីការ​ :</p>
                <div className="flex items-center gap-2 flex-wrap">
                    <BlockMath math="y' + y = 3" />,
                    <BlockMath math="y'' - 4y' + 6y = 0" />,
                    <BlockMath math="xy' - 5y = x^2" />,
                    <BlockMath math="\frac{dy}{dx} + 7y = 8x + 2" />,
                    <BlockMath math="\frac{d^2y}{dx^2} + 2 \frac{dy}{dx} - 3y = \cos{x}" />
                    <span>,... សុទ្ធតែជាសមីការឌីផែរ៉ង់ស្សែល។</span>
                </div>
            </div>
        ),        
    },
    {
        type: "exercise",
        questions: [
            {
                id: "q1",
                question: (
                    <span>
                       y' + y = x  តើសមីការនេះជាសមីការឌីផែរ៉ង់ស្សែលឬទេ?
                    </span>
                ),
                options: ["ត្រឹមត្រូវ", "មិនត្រឹមត្រូវ"],
                correctAnswer: 0,
            },
            {
                id: "q2",
                question: (
                    <span>
                        x² + y² = 25  តើសមីការនេះជាសមីការឌីផែរ៉ង់ស្សែលឬទេ?
                    </span>
                ),
                options: ["ត្រឹមត្រូវ", "មិនត្រឹមត្រូវ"],
                correctAnswer: 1,
            },
            {
                id: "q3",
                question: (
                    <span>
                        តើ <InlineMath math="i^2" /> ស្មើអ្វី?
                    </span>
                ),
                options: ["ត្រឹមត្រូវ", "មិនត្រឹមត្រូវ"],
                correctAnswer: 0,
            },
            {
                id: "q4",
                question: (
                    <span>
                        y = mx + b  តើសមីការនេះជាសមីការឌីផែរ៉ង់ស្សែលឬទេ?
                    </span>
                ),
                options: ["ត្រឹមត្រូវ", "មិនត្រឹមត្រូវ"],
                correctAnswer: 1,
            },
        ],
    },

    { type: "warning", content: "កុំច្រឡំសមីការដែលមានអថេរច្រើនជាសមីការឌីផែរ៉ង់ស្សែល បើសិនវាមិនមានដេរីវេទេ។", },
];

// Stage 2: Serialized JSON
const jsonV2 = serializeTopicContentV3(TOPIC_CONTENT_V3);

// Stage 3a: Deserialized V3 with live React nodes (renderable)
const restoredV3 = deserializeTopicContentV3(jsonV2) as TopicContent_V3[];

// Stage 3b: Deserialized V3 raw node tree (no React elements) for inspection
const restoredV3Tree = deserializeTopicContentV3ToTree(jsonV2) as TopicContent_V3[];

// Helper: visualize type sequence
const originalTypes = TOPIC_CONTENT_V3.map((i) => i.type);



const differentialdefinition = () => {
    return (
        <>
            <div>
                <ContentRendererV3 content={TOPIC_CONTENT_V3} />
            </div>
        </>
    );
};

export default differentialdefinition;
