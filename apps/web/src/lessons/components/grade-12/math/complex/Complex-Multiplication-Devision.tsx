"use client";

import React from "react";
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
    serializeTopicContentV3,
    deserializeTopicContentV3,
} from "@/components/pages/docs/utils/ContentSerializerV2";
import { InlineMath } from "react-katex";

// Stage 1: Original authoring shape (TopicContent_V3)
const content: TopicContent_V3[] = [
    {
        type: "definition",
        title: "ប្រមាណវិធីគុណចំនួនកុំផ្លិច",
        content: <div>ការគុណ ចំនួនកុំផ្លិចគឺគេគុណជាលក្ខណៈពន្លាតកន្សោម </div>,
    },
    {
        type: "tip",
        title: (
            <div className="flex flex-col">
                <div>
                    បើ <InlineMath math="z_1 = a + bi" /> ,{" "}
                    <InlineMath math="z_2 = c + di" /> នោះ
                </div>
            </div>
        ),
        content: (
            <div className="flex flex-row gap-x-2.5">
                <div className="flex flex-col">
                    <div>
                        <InlineMath math="z_1 \times z_2 = (ac - bd) + (ad + bc)i" />
                    </div>
                    <div className="text-sm text-gray-500">ដែល a, b, c, d ជាចំនួនពិត</div>
                </div>
            </div>
        ),
    },
    {
        type: "example",
        question: (
            <div className="flex flex-col items-start ml-4 text-lg">
                <div className="flex flex-row items-start gap-x-2">
                    <div>គេមាន</div>
                    <div>
                        <InlineMath math="z_1 = 3 + 4i" /> និង{" "}
                        <InlineMath math="z_2 = 2 - 3i" />
                    </div>
                </div>
                <div className="flex flex-row items-start gap-x-2">
                    <div>គណនា</div>
                    <div>
                        <InlineMath math="z_1 \times z_2" />
                    </div>
                </div>
            </div>
        ),
        steps: [
            {
                title: "ពិនិត្យមើលទម្រង់",
                content: (
                    <div className="text-base">
                        ចំពោះ <InlineMath math="z_1 = 3 + 4i" />
                        <br />
                        ផ្នែក​ a : គឺ​ 3<br />
                        ផ្នែក b​ :គឺ 4<br />
                        <br />
                        ចំពោះ <InlineMath math="z_2 = 2 - 3i" />
                        <br />
                        ផ្នែក c​ : គឺ​ 2<br />
                        ផ្នែក d​ :គឺ -3
                        <br />
                    </div>
                ),
            },
            {
                title: "ពន្លាតកន្សោមទាំងពីរ",
                content: (
                    <div>
                        <InlineMath math="z_1 \times z_2 = (a \cdot c) + (a \cdot di) + (c \cdot bi) + (b \cdot d )i^2" />
                        <br />
                        តែ <InlineMath math="i^2 = -1" />
                        <br />
                        គេបាន{" "}
                        <InlineMath math="z_1 \times z_2 = (a \cdot c) + (a \cdot di) + (c \cdot bi) - (b \cdot d)" />
                        <br />
                    </div>
                ),
            },
            {
                title: "រៀបផ្នែកពិតជាមួយផ្នែកពិត និងផ្នែកនិមិត្តជាមួយផ្នែកនិមិត្ត",
                content: (
                    <div>
                        នោះគេបាន{" "}
                        <InlineMath math="z_1 \times z_2 = (ac - bd) + (ad + bc)i" />
                        <br />
                    </div>
                ),
            },
            {
                title: "គណនាផ្នែកពិតជាមួយផ្នែកពិត ហើយផ្នែកនិមិត្តជាមួយផ្នែកនិមិត្ត",
                content: (
                    <div>
                        <InlineMath math="z_1 \times z_2 = (3 \cdot 2) + (3 \cdot (-3))i + (4 \cdot 2)i + (4 \cdot (-3))i^2" />
                        <br />
                        <InlineMath math="= 6 - 9i + 8i - 12i^2" />
                        <br />
                        <InlineMath math="= 6 - 9i + 8i + 12" />
                        <br />
                        <InlineMath math="= 18 - i" />
                        <br />
                    </div>
                ),
            },
        ],
        answer: (
            <div>
                ដូច្នេះ <InlineMath math="z_1 \times z_2 = 18 -i" />
            </div>
        ),
    },
    // Division starts here
    {
        type: "definition",
        title: "ប្រមាណវិធីចែកចំនួនកុំផ្លិច",
        content: <div>ការចែក ចំនួនកុំផ្លិចគឺគេធ្វើតាមបែបកន្សោមឆ្លាស់</div>,
    },
    {
        type: "tip",
        title: (
            <div className="flex gap-y-2">
                <div className="text-lg">
                    បើ <InlineMath math="z_1 = a + bi" /> និង{" "}
                    <InlineMath math="z_2 = c + di" /> នោះ
                </div>
            </div>
        ),
        content: (
            <div className="mt-3">
                <div className="flex flex-col items-start gap-x-2  gap-y-2 text-xl">
                    <div>
                        <InlineMath math="\frac{z_1}{z_2} = \frac{a + bi}{c + di} = \frac{(a + bi)(c - di)}{(c + di)(c - di)}" />
                    </div>
                    <div>
                        <InlineMath math="= \frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}" />
                    </div>
                    <div>ដែល a, b, c, d ជាចំនួនពិត</div>
                </div>
            </div>
        ),
    },
    {
        type: "example",
        question: (
            <div className="flex flex-col items-start ml-4 text-lg">
                <div className="flex flex-row items-start gap-x-2">
                    <div>គេមាន</div>
                    <div>
                        <InlineMath math="z_1 = 3 + 4i" /> និង{" "}
                        <InlineMath math="z_2 = 2 - 3i" />
                    </div>
                </div>
                <div className="flex flex-row items-start gap-x-2">
                    <div>គណនា</div>
                    <div>
                        <InlineMath math="\frac{z_1}{z_2}" />
                    </div>
                </div>
            </div>
        ),
        steps: [
            {
                title: "ពិនិត្យមើលទម្រង់",
                content: (
                    <div>
                        ចំពោះ <InlineMath math="z_1 = 3 + 4i" />
                        <br />
                        ផ្នែក​ a : គឺ​ 3<br />
                        ផ្នែក b​ :គឺ 4<br />
                        <br />
                        ចំពោះ <InlineMath math="z_2 = 2 - 3i" />
                        <br />
                        ផ្នែក c​ : គឺ​ 2<br />
                        ផ្នែក d​ :គឺ -3
                        <br />
                    </div>
                ),
            },
            {
                title: "ពន្លាតកន្សោមទាំងពីរ",
                content: (
                    <div className="text-lg flex flex-col gap-y-2">
                        <div>
                            <InlineMath math="\frac{z_1}{z_2} = \frac{(a + bi)(c - di)}{(c + di)(c - di)}" />
                        </div>
                        <div>
                            តាមរូបមន្ត <InlineMath math="(a^2-b^2) = (a-b)(a+b)" />
                            នោះ
                        </div>
                        <div>
                            <InlineMath math="\frac{z_1}{z_2} =\frac{(ac + bd) + (bc - ad)i}{c^2 - (d^2 \cdot i^2) } " />
                            <br />
                        </div>
                        <div>
                            តែ​ <InlineMath math="i^2 = -1" />
                            <br />
                        </div>
                        <div>
                            គេបាន{" "}
                            <InlineMath math="\frac{z_1}{z_2} = \frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}" />
                            <br />
                        </div>
                    </div>
                ),
            },
            {
                title: "គណនា",
                content: (
                    <div className="text-lg flex flex-col gap-y-2">
                        <div>
                            <InlineMath math="\frac{z_1}{z_2} = \frac{(3 \cdot 2) + (4 \cdot (-3)) + (3 \cdot (-3)) + (4 \cdot 2)i}{2^2 - (-3)^2}" />
                        </div>
                        <div>
                            <InlineMath math="= \frac{6 - 12 + (-9 + 8)i}{4 + 9}" />
                        </div>
                        <div>
                            <InlineMath math="= \frac{-6 - i}{13}" /> ឬ{" "}
                            <InlineMath math=" \frac{-6}{13} - \frac{i}{13}" />
                        </div>
                    </div>
                ),
            },
        ],
        answer: (
            <div>
                ដូច្នេះ{" "}
                <InlineMath math="\frac{z_1}{z_2} = \frac{-6}{13} - \frac{i}{13}" />
            </div>
        ),
    },
    {
        type: "exercise",
        questions: [
            {
                id: "q1",
                question: (
                    <div className="flex flex-col items-start ml-4 text-lg">
                        <div className="flex flex-row items-start gap-x-2">
                            <div>គេមាន</div>
                            <div>
                                <InlineMath math="z= 8 -i" /> និង{" "}
                                <InlineMath math="w= 2 + 3i" />
                            </div>
                        </div>
                        <div className="flex flex-row items-start gap-x-2">
                            <div>គណនា</div>
                            <div>
                                <InlineMath math="z \times w" />
                            </div>
                        </div>
                    </div>
                ),
                options: ["-19+22i", "-19-22i", "19+22i", "19-22i"],
                correctAnswer: 2,
            },
            {
                id: "q2",
                question: (
                    <div className="flex flex-col items-start ml-4 text-lg">
                        <div className="flex flex-row items-start gap-x-2">
                            <div>គេមាន</div>
                            <div>
                                <InlineMath math="z= 8 -i" /> និង{" "}
                                <InlineMath math="w= 2 + 3i" />
                            </div>
                        </div>
                        <div className="flex flex-row items-start gap-x-2">
                            <div>គណនា</div>
                            <div>
                                <InlineMath math="z \div w" />
                            </div>
                        </div>
                    </div>
                ),
                options: ["1+2i", "-1-2i", "-1+2i", "1-2i"],
                correctAnswer: 3,
            },
            {
                id: "q3",
                question: (
                    <div className="flex flex-row items-start text-sm gap-x-2 ml-2">
                        <div className="flex flex-row items-center gap-x-2 text-sm">
                            <p>គេមាន</p>
                            <div>
                                <InlineMath math="a = 2(3-2i)" />
                            </div>
                            <div>
                                <InlineMath math="b= 3i(1+i)" />
                            </div>
                        </div>

                        <div className="flex flex-row items-center gap-x-2.5">
                            <p>គណនា</p>
                            <div>
                                <InlineMath math="a \times b" /> ,{" "}
                            </div>
                            <div>
                                <InlineMath math=" \frac{a}{b}" />
                            </div>
                        </div>
                    </div>
                ),
                options: [
                    <InlineMath key="1" math="(-6+30i),(\frac{-2}{3}+\frac{3}{10}i)" />,
                    <InlineMath key="2" math="(6-30i),(\frac{-2}{3}+\frac{-10}{3}i)" />,
                    <InlineMath key="3" math=" (-6+30i),(\frac{-2}{3}+\frac{10}{3}i)" />,
                    <InlineMath key="4" math="(6+30i),(\frac{-2}{3}+\frac{10}{3}i)" />,
                ],
                correctAnswer: 2,
            },
            {
                id: "q4",
                question: (
                    <div className="flex flex-row items-start text-sm gap-x-2 ml-2">
                        <div className="flex flex-row items-center gap-x-2.5">
                            <p>គេមាន</p>
                            <div>
                                <InlineMath math="a = 5 -4i" />
                            </div>
                            <div>
                                <InlineMath math="b= - 4 + 2i" />
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-x-2.5">
                            <p>គណនា</p>
                            <div>
                                <InlineMath math="a \times b" /> ,{" "}
                            </div>
                            <div>
                                <InlineMath math=" \frac{a}{b}" />
                            </div>
                        </div>
                    </div>
                ),
                options: [
                    <InlineMath key="1" math="(12+26i),(\frac{-7}{5}+\frac{3}{10}i)" />,
                    <InlineMath key="2" math="(-12+26i),(\frac{-7}{5}+\frac{3}{10}i)" />,
                    <InlineMath key="3" math=" (-12-26i),(\frac{7}{5}+\frac{-3}{10}i)" />,
                    <InlineMath key="4" math="(-12+26i),(\frac{7}{5}+\frac{3}{10}i)" />,
                ],
                correctAnswer: 1,
            },
            {
                id: "q5",
                question: (
                    <div className="flex flex-row items-start text-sm gap-x-2 ml-2">
                        <div className="flex flex-row items-center gap-x-2.5 text-sm">
                            <p>គេមាន</p>
                            <div>
                                <InlineMath math="z_1 = 4 + 2i" />
                            </div>
                            <div>
                                <InlineMath math="z_2 = 3 - 2i" />
                            </div>
                        </div>
                        <div className="flex flex-row items-center gap-x-2.5">
                            <p>គណនា</p>
                            <div>
                                <InlineMath math="z_1 \times z_2" /> ,{" "}
                            </div>
                            <div>
                                <InlineMath math="\frac{z_1}{z_2}" />
                            </div>
                        </div>
                    </div>
                ),
                options: [
                    <InlineMath key="1" math="(16-2i)(\frac{8}{13}+\frac{14}{13}i)" />,
                    <InlineMath key="2" math="(16+2i)\frac{8}{13}+\frac{14}{13}i)" />,
                    <InlineMath key="3" math=" (-16-2i),(\frac{8}{13}+\frac{14}{13}i)" />,
                    <InlineMath key="4" math="(16+2i),(\frac{8}{13}+\frac{14}{13}i)" />,
                ],
                correctAnswer: 0,
            },
        ],
    },
];

// Stage 2: Serialized JSON
const jsonV3 = serializeTopicContentV3(content);

// Stage 3: Deserialized V3 with live React nodes (renderable)
const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

const ComplexMultiplicationDivision = () => {
    return <ContentRendererV3 content={restoredContent} />;
};

export default ComplexMultiplicationDivision;