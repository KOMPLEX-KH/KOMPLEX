'use client'

import React from 'react'
import "katex/dist/katex.min.css";
import { BlockMath, InlineMath } from "react-katex";
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";


const newTopicContent: TopicContent_V3[] = [
    {
        type: "definition",
        title: "និយមន័យដេរីវេ",
        content: (
            <div>
                <ul className="list-disc pl-5 space-y-3">
                    <li>
                        <p>
                            បើ
                            <InlineMath math={String.raw`f`} />
                            ជាអនុគមន៍មួយលើចន្លោះមួយ <InlineMath math={String.raw`I`} />
                            និងមានដេរីវេត្រង់គ្រប់ចំណុចទាំងអស់នៅក្នុងចន្លោះ​{" "}
                            <InlineMath math={String.raw`I`} /> នោះគេថាអនុគមន៍
                            <InlineMath math={String.raw`f`} /> មានដេរីវេលើចន្លោះ​{" "}
                            <InlineMath math={String.raw`I`} />។
                        </p>
                    </li>

                    <li>
                        <p>
                            អនុគមន៍ដែលគ្រប់
                            <InlineMath math={String.raw`x\in I`} /> ផ្សំបានចំនួនដេរីវេ
                            <InlineMath math={String.raw`f`} />
                            ត្រង់
                            <InlineMath math={String.raw`x`} />
                            ហៅថាអនុគមន៍ដេរីវេនៃ
                            <InlineMath math={String.raw`f`} /> ដែលគេកំណត់សរសេរ{" "}
                            <InlineMath math={String.raw`f': x\mapsto f'(x)`} />។
                        </p>
                    </li>

                    <li>
                        <p>
                            ដេរីវេ​ <InlineMath math={String.raw`f'(x)`} />
                            នៃអនុគមន៍ <InlineMath math={String.raw`y=f(x)`} />{" "}
                            គឺជាអនុគមន៍ដែលកំណត់ដោយ
                        </p>
                        <BlockMath
                            math={String.raw`f'(x)=\lim_{h\to 0}\frac{f(x+h)-f(x)}{h}`}
                        />
                    </li>
                </ul>
            </div>
        )
    },
    {
        type: "tip",
        title: "ចំណុចសំខាន់ៗ",
        content: (
            <div>
                <p>
                    គេអាចប្រើនិមិត្តសញ្ញា{" "}
                    <InlineMath
                        math={String.raw`y' = f'(x) = \frac{dy}{dx} = \frac{df(x)}{dx}`}
                    />
                </p>
            </div>
        ),
    },
    {
        type: "example",
        question: (
            <BlockMath
                math={String.raw`\text{រក } f'(2) \text{ ដោយនិយមន័យ សម្រាប់ } f(x)=x^2+3x-2`}
            />
        ),
        steps: [
            {
                title: "សរសេរនិយមន័យ",
                content: (
                    <BlockMath
                        math={String.raw`f'(2)=\lim_{h\to0}\frac{f(2+h)-f(2)}{h}`}
                    />
                ),
            },
            {
                title: "ជំនួសអនុគមន៍",
                content: (
                    <>
                        <BlockMath math={String.raw`f(2+h)=(2+h)^2+3(2+h)-2`} />
                        <BlockMath math={String.raw`f(2)=2^2+3\cdot2-2`} />
                    </>
                ),
            },
            {
                title: "រៀបចំប្រភាគ",
                content: (
                    <BlockMath
                        math={String.raw`\frac{(2+h)^2+3(2+h)-2-\big(2^2+3\cdot2-2\big)}{h}
=\frac{h^2+7h}{h}=h+7`}
                    />
                ),
            },
            {
                title: "យកលីមីត",
                content: <BlockMath math={String.raw`\lim_{h\to0}(h+7)=7`} />,
            },
        ],
        answer: "f'(2) = 7",
    },
    {
        type: "exercise",
        questions: [
            // 1
            {
                id: "dd1",
                question: (
                    <BlockMath
                        math={String.raw`\text{គណនា }f'(2)\text{ ដោយនិយមន័យ សម្រាប់ }f(x)=x^2+3x-2`}
                    />
                ),
                options: [
                    <BlockMath key="dd1o0" math={String.raw`6`} />,
                    <BlockMath key="dd1o1" math={String.raw`7`} />,
                    <BlockMath key="dd1o2" math={String.raw`8`} />,
                    <BlockMath key="dd1o3" math={String.raw`9`} />,
                ],
                correctAnswer: 1,
            },
            // 2
            {
                id: "dd2",
                question: (
                    <BlockMath
                        math={String.raw`\text{ជ្រើសរើសនិយមន័យត្រឹមត្រូវរបស់ }f'(a)`}
                    />
                ),
                options: [
                    <BlockMath
                        key="dd2o0"
                        math={String.raw`\lim_{h\to0}\frac{f(a+h)-f(a)}{h}`}
                    />,
                    <BlockMath
                        key="dd2o1"
                        math={String.raw`\lim_{h\to0}\frac{f(a)-f(a+h)}{h}`}
                    />,
                    <BlockMath
                        key="dd2o2"
                        math={String.raw`\lim_{x\to a}\frac{f(a)-f(x)}{x-a}`}
                    />,
                    <BlockMath
                        key="dd2o3"
                        math={String.raw`\lim_{h\to0}\frac{f(a+h)}{h}`}
                    />,
                ],
                correctAnswer: 0,
            },
            // 3
            {
                id: "dd3",
                question: (
                    <BlockMath
                        math={String.raw`\text{រក }f'(a)\text{ ដោយនិយមន័យ សម្រាប់ }f(x)=x^2`}
                    />
                ),
                options: [
                    <BlockMath key="dd3o0" math={String.raw`2a`} />,
                    <BlockMath key="dd3o1" math={String.raw`a^2`} />,
                    <BlockMath key="dd3o2" math={String.raw`2`} />,
                    <BlockMath key="dd3o3" math={String.raw`a`} />,
                ],
                correctAnswer: 0,
            },
            // 4
            {
                id: "dd4",
                question: (
                    <BlockMath
                        math={String.raw`\text{រក }f'(1)\ \text{សម្រាប់}\ f(x)=x^3+1`}
                    />
                ),
                options: [
                    <BlockMath key="dd4o0" math={String.raw`1`} />,
                    <BlockMath key="dd4o1" math={String.raw`2`} />,
                    <BlockMath key="dd4o2" math={String.raw`3`} />,
                    <BlockMath key="dd4o3" math={String.raw`4`} />,
                ],
                correctAnswer: 2,
            },
            // 5
            {
                id: "dd5",
                question: (
                    <BlockMath
                        math={String.raw`\text{រក }f'(a)\ \text{សម្រាប់}\ f(x)=mx+b`}
                    />
                ),
                options: [
                    <BlockMath key="dd5o0" math={String.raw`m`} />,
                    <BlockMath key="dd5o1" math={String.raw`b`} />,
                    <BlockMath key="dd5o2" math={String.raw`a`} />,
                    <BlockMath key="dd5o3" math={String.raw`0`} />,
                ],
                correctAnswer: 0,
            },
            // 6
            {
                id: "dd6",
                question: (
                    <BlockMath
                        math={String.raw`\text{រក }f'(1)\ \text{សម្រាប់}\ f(x)=\frac{1}{x}`}
                    />
                ),
                options: [
                    <BlockMath key="dd6o0" math={String.raw`1`} />,
                    <BlockMath key="dd6o1" math={String.raw`-1`} />,
                    <BlockMath key="dd6o2" math={String.raw`-2`} />,
                    <BlockMath key="dd6o3" math={String.raw`0`} />,
                ],
                correctAnswer: 1,
            },
            // 7
            {
                id: "dd7",
                question: (
                    <BlockMath
                        math={String.raw`\text{រក }f'(4)\ \text{សម្រាប់}\ f(x)=\sqrt{x}`}
                    />
                ),
                options: [
                    <BlockMath key="dd7o0" math={String.raw`\tfrac12`} />,
                    <BlockMath key="dd7o1" math={String.raw`\tfrac14`} />,
                    <BlockMath key="dd7o2" math={String.raw`\tfrac18`} />,
                    <BlockMath key="dd7o3" math={String.raw`1`} />,
                ],
                correctAnswer: 1,
            },
            // 8
            {
                id: "dd8",
                question: (
                    <BlockMath math={String.raw`\lim_{h\to0}\frac{(2+h)^2-4}{h}=\ ?`} />
                ),
                options: [
                    <BlockMath key="dd8o0" math={String.raw`2`} />,
                    <BlockMath key="dd8o1" math={String.raw`3`} />,
                    <BlockMath key="dd8o2" math={String.raw`4`} />,
                    <BlockMath key="dd8o3" math={String.raw`5`} />,
                ],
                correctAnswer: 2,
            },
            // 9
            {
                id: "dd9",
                question: (
                    <BlockMath
                        math={String.raw`\lim_{h\to0}\frac{(2+h)^2+3(2+h)-2-\big(2^2+3\cdot2-2\big)}{h}=\ ?`}
                    />
                ),
                options: [
                    <BlockMath key="dd9o0" math={String.raw`6`} />,
                    <BlockMath key="dd9o1" math={String.raw`7`} />,
                    <BlockMath key="dd9o2" math={String.raw`8`} />,
                    <BlockMath key="dd9o3" math={String.raw`9`} />,
                ],
                correctAnswer: 1,
            },
            // 10
            {
                id: "dd10",
                question: (
                    <BlockMath math={String.raw`\text{ជ្រើសរើសទម្រង់ស្មើនៃ } f'(a)`} />
                ),
                options: [
                    <BlockMath
                        key="dd10o0"
                        math={String.raw`\lim_{x\to a}\frac{f(x)-f(a)}{x-a}`}
                    />,
                    <BlockMath
                        key="dd10o1"
                        math={String.raw`\lim_{x\to a}\frac{f(a)-f(x)}{h}`}
                    />,
                    <BlockMath
                        key="dd10o2"
                        math={String.raw`\lim_{h\to0}\frac{f(x+h)-f(a)}{x-a}`}
                    />,
                    <BlockMath key="dd10o3" math={String.raw`\frac{f(a+h)-f(a)}{h}`} />,
                ],
                correctAnswer: 0,
            },
            // 11
            {
                id: "dd11",
                question: (
                    <BlockMath
                        math={String.raw`\text{រក }f'(a)\ \text{សម្រាប់}\ f(x)=x^4`}
                    />
                ),
                options: [
                    <BlockMath key="dd11o0" math={String.raw`2a^3`} />,
                    <BlockMath key="dd11o1" math={String.raw`3a^2`} />,
                    <BlockMath key="dd11o2" math={String.raw`4a^3`} />,
                    <BlockMath key="dd11o3" math={String.raw`a^4`} />,
                ],
                correctAnswer: 2,
            },
            // 12
            {
                id: "dd12",
                question: (
                    <BlockMath
                        math={String.raw`\text{រក }f'(x)\ \text{សម្រាប់}\ f(x)=x^2+3x`}
                    />
                ),
                options: [
                    <BlockMath key="dd12o0" math={String.raw`2x+3`} />,
                    <BlockMath key="dd12o1" math={String.raw`2x`} />,
                    <BlockMath key="dd12o2" math={String.raw`3x`} />,
                    <BlockMath key="dd12o3" math={String.raw`x^2`} />,
                ],
                correctAnswer: 0,
            },
            // 13
            {
                id: "dd13",
                question: (
                    <BlockMath
                        math={String.raw`\text{រក }f'(a)\ \text{សម្រាប់}\ f(x)=x^{-1}`}
                    />
                ),
                options: [
                    <BlockMath key="dd13o0" math={String.raw`-\frac{1}{a^2}`} />,
                    <BlockMath key="dd13o1" math={String.raw`\frac{1}{a^2}`} />,
                    <BlockMath key="dd13o2" math={String.raw`-\frac{1}{a}`} />,
                    <BlockMath key="dd13o3" math={String.raw`\frac{1}{a}`} />,
                ],
                correctAnswer: 0,
            },
            // 14
            {
                id: "dd14",
                question: (
                    <BlockMath
                        math={String.raw`\text{រក }f'(a)\ \text{សម្រាប់}\ f(x)=\sqrt{x}`}
                    />
                ),
                options: [
                    <BlockMath key="dd14o0" math={String.raw`\frac{1}{2\sqrt{a}}`} />,
                    <BlockMath key="dd14o1" math={String.raw`\frac{1}{\sqrt{a}}`} />,
                    <BlockMath key="dd14o2" math={String.raw`\frac{1}{2a}`} />,
                    <BlockMath key="dd14o3" math={String.raw`\frac{a}{2}`} />,
                ],
                correctAnswer: 0,
            },
            // 15
            {
                id: "dd15",
                question: (
                    <BlockMath
                        math={String.raw`\text{រក }f'(2)\ \text{សម្រាប់}\ f(x)=3x-5`}
                    />
                ),
                options: [
                    <BlockMath key="dd15o0" math={String.raw`3`} />,
                    <BlockMath key="dd15o1" math={String.raw`-5`} />,
                    <BlockMath key="dd15o2" math={String.raw`1`} />,
                    <BlockMath key="dd15o3" math={String.raw`0`} />,
                ],
                correctAnswer: 0,
            },
            // 16
            {
                id: "dd16",
                question: (
                    <BlockMath
                        math={String.raw`\text{រក }f'(a)\ \text{សម្រាប់}\ f(x)=x^n\ (n\in\mathbb{N})`}
                    />
                ),
                options: [
                    <BlockMath key="dd16o0" math={String.raw`n a^{\,n-1}`} />,
                    <BlockMath key="dd16o1" math={String.raw`a^n`} />,
                    <BlockMath key="dd16o2" math={String.raw`(n-1)a^{\,n}`} />,
                    <BlockMath key="dd16o3" math={String.raw`n a^{\,n}`} />,
                ],
                correctAnswer: 0,
            },
            // 17
            {
                id: "dd17",
                question: (
                    <BlockMath
                        math={String.raw`\text{សូមជ្រើសរើស៖ }(c)'\ \text{ស្មើ} \ ?`}
                    />
                ),
                options: [
                    <BlockMath key="dd17o0" math={String.raw`0`} />,
                    <BlockMath key="dd17o1" math={String.raw`c`} />,
                    <BlockMath key="dd17o2" math={String.raw`1`} />,
                    <BlockMath key="dd17o3" math={String.raw`x`} />,
                ],
                correctAnswer: 0,
            },
            // 18
            {
                id: "dd18",
                question: (
                    <BlockMath
                        math={String.raw`\text{គណនា } \lim_{h\to0}\frac{(a+h)^2-a^2}{h}`}
                    />
                ),
                options: [
                    <BlockMath key="dd18o0" math={String.raw`a`} />,
                    <BlockMath key="dd18o1" math={String.raw`2a`} />,
                    <BlockMath key="dd18o2" math={String.raw`a^2`} />,
                    <BlockMath key="dd18o3" math={String.raw`2`} />,
                ],
                correctAnswer: 1,
            },
            // 19
            {
                id: "dd19",
                question: (
                    <BlockMath
                        math={String.raw`\text{គណនា } \lim_{h\to0}\frac{\sqrt{a+h}-\sqrt{a}}{h}\ \ (a>0)`}
                    />
                ),
                options: [
                    <BlockMath key="dd19o0" math={String.raw`\frac{1}{2\sqrt{a}}`} />,
                    <BlockMath key="dd19o1" math={String.raw`\frac{1}{\sqrt{a}}`} />,
                    <BlockMath key="dd19o2" math={String.raw`\frac{1}{a}`} />,
                    <BlockMath key="dd19o3" math={String.raw`\frac{1}{2a}`} />,
                ],
                correctAnswer: 0,
            },
            // 20
            {
                id: "dd20",
                question: (
                    <>
                        <p>ដេរីវេនៅ x = 0 សម្រាប់អនុគមន៍ខាងក្រោម៖</p>
                        <BlockMath math={String.raw`f(x)=|x|`} />
                    </>
                ),
                options: [
                    <span key="dd20o0">មាន និងស្មើ 0</span>,
                    <span key="dd20o1">មាន និងស្មើ 1</span>,
                    <span key="dd20o2">មាន និងស្មើ −1</span>,
                    <span key="dd20o3">មិនមាន</span>,
                ],
                correctAnswer: 3,
            },
        ],
    },
    {
        type: "hint",
        content: <div></div>,
    },
    {
        type: "warning",
        content: (
            <>
                <p>
                    • អាចមិនមានដេរីវេនៅចំណុចដែលអនុគមន៍មានជ្រុង/កាត់ទ្វេដង (ឧ.{" "}
                    <BlockMath math={String.raw`f(x)=|x|`} /> នៅ x=0).
                </p>
                <p>
                    • ប្រយ័ត្ននឹងសញ្ញាគុណ <BlockMath math={String.raw`\cdot`} />{" "}
                    និងការប្រើ <code>String.raw</code> នៅក្នុង{" "}
                    <code>&lt;BlockMath&gt;</code> ដើម្បីជៀសវាង escape ខុស។
                </p>
            </>
        ),
    },
];

export default function DerivativeDefinition() {
    return <ContentRendererV3 content={newTopicContent} />;
}