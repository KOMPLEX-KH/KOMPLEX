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

const content: TopicContent_V3[] = [
    {
        type: "definition",
        title: "សមីការអូម៉ូសែន",
        content: (
            <div>
                សមីការឌីផែរ៉ង់ស្សែលលីនេអែអូម៉ូសែនលំដាប់ទី២មានមេគុណថេរគឺគ្រប់សមីការដែលមានទម្រង់ 
                <InlineMath math="ay'' + by' + cy = 0" /> ; a,b,c ជាចំនួនថេរ។
            </div>
        ),
    },
    {
        type: "tip",
        title: "ជាទូទៅ",
        content: (
            <div>
                <p>ដេីម្បីដោះស្រាយសមីការ</p>
                <BlockMath math="ay'' + by' + cy = 0" />
                <p>គេត្រូវបង្កេីតសមីការសម្គាល់ដែលមានរាង</p>
                <BlockMath math="a \lambda^2 + b\lambda + c = 0" />
                <p>រួចដោះស្រាយរកឫសនៃសមីការ។</p>
            </div>
        ),
    },
    {
        type: "example",
        question: (
            <div className="flex flex-col items-start gap-3">
              <div className="flex flex-col gap-3">
                <p>ដោះស្រាយសមីការឌីផែរ៉ង់ស្សែលអូម៉ូសែនលំដាប់ទី២</p>
                <div className="flex items-center gap-5 flex-wrap">
                  <div className="flex items-center gap-2">
                    1. <BlockMath math="2y'' - 3y' + y = 0" />
                  </div>

                  <div className="flex items-center gap-2">
                    2. <BlockMath math="y'' - 6y' + 9y = 0" />
                  </div>
                </div>
              </div>
            </div>
        ),
        steps: [
            {
              title: "ដោះស្រាយសមីការទី១",
              content: (
                <div className="flex flex-col items-start">
                  <BlockMath math="2y'' - 3y' + y = 0" />
                  <div className="flex items-center gap-3 flex-wrap">
                    <p>គេមាន : សមីការសម្គាល់គឺ</p>
                    <BlockMath math="2\lambda^2 - 3 \lambda + 1 = 0" />
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p>មានឫស</p>
                    <BlockMath math="\lambda_1 = 1 , \lambda_2 = \frac{1}{2}" />
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p>ចម្លើយទូទៅនៃសមីការគឺ</p>
                    <BlockMath math="y = Ae^{x} + Be^{\left(\frac{1}{2} x\right)}  \ A,B \in \mathbb{R}" />
                  </div>
                </div>
              ),
            },
            {
              title: "ដោះស្រាយសមីការទី២",
              content: (
                <div className="flex flex-col items-start">
                  <BlockMath math="y'' - 6y' + 9y = 0" />
                  <div className="flex items-center gap-3 flex-wrap">
                    <p>គេមាន : សមីការសម្គាល់គឺ</p>
                    <BlockMath math="\lambda^2 - 6 \lambda + 9 = 0" />
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p>មានឫសឌុប</p>
                    <BlockMath math="\lambda_1 = \lambda_2 = 3" />
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p>ចម្លើយទូទៅនៃសមីការគឺ</p>
                    <BlockMath math="y = ( A + Bx)e^{3x} \ A,B \in \mathbb{R}" />
                  </div>
                </div>
              ),
            },
        ],
        answer: (
            <div>
                <div className="justify-center items-start flex flex-col">
                  <BlockMath math="y = Ae^{x} + Be^{\left(\frac{1}{2} x\right)} \ A,B \in \mathbb{R}" />
                  <BlockMath math="y = ( A + Bx)e^{3x} \ A,B \in \mathbb{R}" />
                </div>
            </div>
        ),
    },
    {
        type: "example",
        question: (
            <div className="flex flex-col gap-3">
                <p>ក. ដោះស្រាយសមីការ y'' - 3y' + 2y = 0</p>
                <p>ខ. រកចម្លេីយ f មួយនៃសមីការ បេីគេដឹងថាក្រាបនៃអនុគមន៍ចម្លេីយ
                ប៉ះនឹងបន្ទាត់ y= x+2 ត្រង់ចំណុច A(0,2)</p>
            </div>
        ),
        steps: [
            {
              title: "ដោះស្រាយសមីការ y'' - 3y' + 2y = 0",
              content: (
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-3 flex-wrap">
                    <p>គេមាន : សមីការសម្គាល់គឺ</p>
                    <BlockMath math="\lambda^2 - 3 \lambda + 2 = 0" />
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p>មានឫស</p>
                    <BlockMath math="\lambda_1 = 1  ,  \lambda_2 = 2" />
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p>ចម្លើយទូទៅនៃសមីការគឺ</p>
                    <BlockMath math="y = Ae^x + Be^{2x}" />
                    <p>, A, B ជាចំនួនថេរ។</p>
                  </div>
                </div>
              ),
            },
            {
              title: "រកចម្លេីយ f មួយនៃសមីការ",
              content: (
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-3 flex-wrap">
                    <p>គេមាន : </p>
                    <BlockMath math="f(x) = Ae^x + Be^{2x}" />
                  </div>
              
                  <BlockMath math="\Rightarrow f'(x) = Ae^x + 2Be^{2x}" />
                  <p>
                    ម៉្យាងទៀត: ដោយក្រាបនៃអនុគមន៍ចម្លេីយប៉ះនឹងបន្ទាត់ y=x+2 ត្រង់ចំណុច
                    A(0,2)
                  </p>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p>គេបាន : </p>
                    <BlockMath
                      math="\begin{cases} 
                                f(0)  = 2 \\ 
                                f'(0) = 1 
                                \end{cases}"
                    />
                  </div>
              
                  <div className="flex items-center gap-3 flex-wrap">
                    <p>នាំឲ្យ : </p>
                    <BlockMath
                      math="\begin{cases} 
                                Ae^0 + Be^0  = 2 \\ 
                                Ae^0 + 2Be^0 = 1
                                \end{cases}"
                    />
                  </div>
                  <BlockMath
                    math="\Rightarrow \begin{cases} 
                            A + B  = 2 \\ 
                            A + 2B = 1
                            \end{cases}"
                  />

                  <BlockMath
                    math="\Rightarrow \begin{cases} 
                            A =  3 \\ 
                            B = -1
                            \end{cases}"
                  />
                </div>
              ),
            },      
        ],
        answer: (
           <div>
              <p>អនុគមន៍ចម្លេីយគឺ</p>
              <div className="justify-center items-center flex flex-col">
                <BlockMath math="f(x) = 3e^x - e^{2x}" />
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
                <>
                  <div className="flex flex-col gap-3">
                    <p>ដោះស្រាយសមីការ</p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                      <InlineMath math={"y'' + 5y' + 6y = 0"} />
                    </div>
                  </div>
                </>
              ),
              options: [
                <InlineMath key="q1-o1" math={"y = Ae^{2x} + Be^{3x}"} />,
                <InlineMath key="q1-o2" math={"y = Ae^{-x} + Be^{-5x}"} />,
                <InlineMath key="q1-o3" math={"y = Ae^{-2x} + Be^{-3x}"} />,
                <InlineMath key="q1-o4" math={"y = Ae^{x} + Be^{5x}"} />,
              ],
              correctAnswer: 2,
            },
            {
              id: "q2",
              question: (
                <>
                  <div className="flex flex-col gap-3">
                    <p>ដោះស្រាយសមីការ</p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                      <InlineMath math={"4y'' - 4y' + y = 0"} />
                    </div>
                  </div>
                </>
              ),
              options: [
                <InlineMath key="q2-o1" math={"y = Ae^{x} + Be^{-x}"} />,
                <InlineMath key="q2-o2" math={"y = (A + Bx)e^{\\frac{1}{2}x}"} />,
                <InlineMath
                  key="q2-o3"
                  math={"y = Ae^{\\frac{1}{2}x} + Be^{-\\frac{1}{2}x}"}
                />,
                <InlineMath key="q2-o4" math={"y = (A + Bx)e^{-\\frac{1}{2}x}"} />,
              ],
              correctAnswer: 1,
            },
            {
              id: "q3",
              question: (
                <>
                  <div className="flex flex-col gap-3">
                    <p>ដោះស្រាយសមីការ</p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                      <InlineMath math={"y'' + 4y = 0"} />
                    </div>
                  </div>
                </>
              ),
              options: [
                <InlineMath key="q3-o1" math={"y = Ae^{2x} + Be^{-2x}"} />,
                <InlineMath key="q3-o2" math={"y = (A + Bx)e^{2x}"} />,
                <InlineMath key="q3-o3" math={"y = A\\cos(2x) + B\\sin(2x)"} />,
                <InlineMath key="q3-o4" math={"y = A\\cos(x) + B\\sin(x)"} />,
              ],
              correctAnswer: 2,
            },
        ],
    },
    {
        type: "hint",
        content: (
            <div>
                <p>
                  នៅពេលដោះស្រាយសមីការឌីផែរ៉ង់ស្សែលលំដាប់ទី២ អូម៉ូសែន
                  ត្រូវចាប់ផ្តើមដោយសរសេរសមីការសម្គាល់
                  <InlineMath math={"a\\lambda^2 + b\\lambda + c = 0"} />
                  រួចដោះស្រាយរកឫស។
                </p>
                <p>
                  បើឫសទាំងពីរផ្សេងគ្នា ចម្លើយទូទៅមានទម្រង់
                  <InlineMath math={"y = Ae^{\\lambda_1 x} + Be^{\\lambda_2 x}"} />។
                </p>
                <p>
                  បើឫសស្មើគ្នា (ឌុប) ចម្លើយទូទៅមានទម្រង់
                  <InlineMath math={"y = (A + Bx)e^{\\lambda x}"} />។
                </p>
                <p>
                  បើឫសជាគូស្មុគស្មាញ
                  <InlineMath math={"p \\pm qi"} />
                  ចម្លើយទូទៅមានទម្រង់
                  <InlineMath math={"y = e^{px}(A\\cos(qx) + B\\sin(qx))"} />។
                </p>
            </div>
        ),
    },
    {
        type: "definition",
        title: "សមីការមិនអូម៉ូសែន",
        content: (
            <div>
                សមីការឌីផែរ៉ង់ស្សែលលីនេអែមិនអូម៉ូសែនលំដាប់ទី២មានមេគុណថេរគឺគ្រប់សមីការដែលមានទម្រង់
                <InlineMath math="ay'' + by' + cy = P(x)" /> ដែល P(x) ≠ 0
            </div>
        ),
    },
    {
        type: "tip",
        title: "ជាទូទៅ",
        content: (
            <div>
                <ul className="list-disc pl-3">
                    <li className="gap-2">
                      រកអនុគមន៍ចម្លើយទូទៅនៃសមីការ
                      <InlineMath math={"ay'' + by' + cy = 0 "} />
                      តាងដោយអនុគមន៍
                      <InlineMath math={"y_c"} />
                    </li>
                    <li>
                      រកអនុគមន៍ចម្លើយពិសេសនៃសមីការ
                      <InlineMath math={"ay'' + by' + cy = P(x) "} />
                      តាងដោយអនុគមន៍
                      <InlineMath math={"y_p"} />
                    </li>
                    <li>
                      ចម្លេីយទូទៅនៃសមីការ (E) គឺអនុគមន៍ដែល
                      <InlineMath math={"y = y_c + y_p"} />
                    </li>
                </ul>
            </div>
        ),
    },
    {
        type: "example",
        question: 
            <div className="flex flex-col items-start gap-3" key="q1">
                <div className="flex flex-col gap-3 w-full">
                  <p>ដោះស្រាយសមីការឌីផែរ៉ង់ស្សែលមិនអូម៉ូសែនលំដាប់ទី២</p>
                  <div className="flex items-center gap-5 flex-wrap  w-full justify-center">
                    <BlockMath math="y'' - 3y' + 5y = 4x^3 - 2x" />
                  </div>
                </div>
            </div>,
        steps: [
            {
              title: "រកចម្លេីយទូទៅនៃសមីការអូម៉ូសែន y'' - 3y' + 5y = 0",
              content: (
                <div className="flex flex-col items-start">
                  <BlockMath math="y'' - 3y' + 5y = 0" />
                  <div className="flex items-center gap-3 flex-wrap">
                    <p>សមីការសម្គាល់គឺ</p>
                    <BlockMath math="\lambda^2 - 3\lambda + 5 = 0" />
                  </div>
                  <BlockMath math="\Rightarrow \lambda = \frac{3 \pm \sqrt{9 - 20}}{2} = \frac{3 \pm \sqrt{-11}}{2}" />
                  <div className="flex items-center gap-3 flex-wrap">
                    <p>គេបាន</p>
                    <BlockMath math="\lambda = \frac{3}{2} \pm \frac{\sqrt{11}}{2} i" />
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <p>កំណត់</p>
                    <BlockMath math="\alpha = \frac{3}{2}, \quad \beta = \frac{\sqrt{11}}{2}" />
                  </div>
              
                  <p>ចម្លើយទូទៅនៃសមីការ</p>
                  <div className="flex items-center flex-wrap">
                    <BlockMath
                      math={`y = e^{\\frac{3}{2} x} ( A \\cos( \\frac{\\sqrt{11}}{2} x ) + B \\sin( \\frac{\\sqrt{11}}{2} x ) )`}
                    />
                  </div>
              
                  <p>ដែល A, Bជាចំនួនថេរ។</p>
                </div>
              ),
            },
        ],
    },
    {
        type: "exercise",
        questions: [
            {
              id: "q1",
              question: (
                <>
                  <div className="flex flex-col gap-3">
                    <p>ដោះស្រាយសមីការ</p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                      <InlineMath math={"y'' - 2y' + y = e^x"} />
                    </div>
                  </div>
                </>
              ),
              options: [
                <InlineMath key="q1-o1" math={"y = (A + Bx)e^{x} + e^{x}"} />,
                <InlineMath key="q1-o2" math={"y = Ae^{x} + Be^{x} + xe^{x}"} />,
                <InlineMath key="q1-o3" math={"y = Ae^{x} + Be^{x} + e^{-x}"} />,
                <InlineMath key="q1-o4" math={"y = (A + Bx)e^{x} + xe^{-x}"} />,
              ],
              correctAnswer: 0,
            },
            {
              id: "q2",
              question: (
                <>
                  <div className="flex flex-col gap-3">
                    <p>ចម្លើយទូទៅនៃសមីការ</p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                      <InlineMath math={"y'' + y = sin x :"} />
                    </div>
                  </div>
                </>
              ),
              options: [
                <InlineMath
                  key="q2-o1"
                  math={"y = A\\cos x + B\\sin x + \\frac{1}{2} x \\cos x"}
                />,
                <InlineMath
                  key="q2-o2"
                  math={"y = A\\cos x + B\\sin x + x \\sin x"}
                />,
                <InlineMath key="q2-o3" math={"y = Ae^{x} + Be^{-x} + \\sin x"} />,
                <InlineMath key="q2-o4" math={"y = A\\cos x + B\\sin x + \\cos x"} />,
              ],
              correctAnswer: 0,
            },      
            {
              id: "q3",
              question: (
                <>
                  <div className="flex flex-col gap-3">
                    <p>ចម្លើយទូទៅនៃសមីការ</p>
                    <div className="flex items-center justify-center gap-3 flex-wrap">
                      <InlineMath math={"y'' + 4y = 4x"} />
                    </div>
                  </div>
                </>
              ),
              options: [
                <InlineMath key="q3-o1" math={"y = A\\cos 2x + B\\sin 2x + x"} />,
                <InlineMath key="q3-o2" math={"y = A\\cos 2x + B\\sin 2x + x^2"} />,
                <InlineMath
                  key="q3-o3"
                  math={"y = A\\cos 2x + B\\sin 2x + x^2 + 1"}
                />,
                <InlineMath
                  key="q3-o4"
                  math={"y = A\\cos 2x + B\\sin 2x + x^2 - 1"}
                />,
              ],
              correctAnswer: 1,
            },
        ],
    },
    {
        type: "hint",
        content: <p>ប្រើគន្លឹះថា ចម្លើយទូទៅ = ចម្លើយអូម៉ូសែន + ចម្លើយពិសេស</p>,
    },
];

// Stage 2: Serialized JSON
const jsonV2 = serializeTopicContentV3(content);

// Stage 3a: Deserialized V3 with live React nodes (renderable)
const restoredV3 = deserializeTopicContentV3(jsonV2) as TopicContent_V3[];

// Stage 3b: Deserialized V3 raw node tree (no React elements) for inspection
const restoredV3Tree = deserializeTopicContentV3ToTree(jsonV2) as TopicContent_V3[];

const LDE2_V3 = () => {
    return (
        <div>
            <ContentRendererV3 content={content} />
        </div>
    );
};

export default LDE2_V3;
