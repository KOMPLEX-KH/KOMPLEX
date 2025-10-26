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

const VariousForms_V3: TopicContent_V3[] = [
  {
    type: "definition",
    title: (
      <div className="flex items-center gap-2 sm:flex-row flex-col">
        <p>សមីការឌីផែរ៉ង់ស្សែលរាង </p>
        <BlockMath math="\frac{d_y}{d_x} = f(x)" />
      </div>
    ),
    content: <></>,
  },
  {
    type: "tip",
    title: "ជាទូទៅ",
    content: (
      <>
        <p>ដេីម្បីដោះស្រាយសមីការ គេបំពាក់អាំងតេក្រាលលេីអង្គទាំងពីរ រួចគណនាអាំងតេក្រាលនោះ</p>
      </>
    ),
  },
  {
    type: "example",
    question: [
      <>
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-col gap-3">
            <p>ដោះស្រាយសមីការឌីផែរ៉ង់ស្សែល</p>
            <div className="flex items-center gap-5 flex-wrap">
              <div className="flex items-center gap-2">
                1. <BlockMath math="y' = 3x^2 -e^x + 1" />
              </div>
              <div className="flex items-center gap-2">
                2. <BlockMath math="y' = xe^{x^2} + 2" />
              </div>
            </div>
          </div>
        </div>
      </>,
    ],
    steps: [
      {
        title: "ដោះស្រាយសមីការទី១",
        content: (
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 flex-wrap">
              <p>សមីការ៖ </p>
              <BlockMath math="y' = 3x^2 - e^x + 1" />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p>គេបាន</p>
              <BlockMath math="y = \int (3x^2 - e^x + 1) dx " />
            </div>
            <BlockMath math="\Rightarrow y = x^3 - e^x + x + c ,\ c \in \mathbb{R}" />
          </div>
        ),
      },
      {
        title: "ដោះស្រាយសមីការទី២",
        content: (
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 flex-wrap">
              <p>សមីការ៖ </p>
              <BlockMath math="y' = x e^{x^2} + 2" />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p>គេបាន</p>
              <BlockMath math="y = \int (xe^2 + 2) dx " />
            </div>
            <div className="flex items-center flex-col">
              <BlockMath math="\Rightarrow y = \int xe^{x^2} dx  + \int 2 dx" />
              <BlockMath math="\Rightarrow y = \frac{1}{2} \int xe^{x^2} d(x^2)  + 2x" />
              <BlockMath math="\Rightarrow y = \frac{1}{2} e^{x^2}  + 2x + c ,\ c \in \mathbb{R}" />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="flex flex-col items-start">
        <BlockMath math="y = x^3 - e^x + x + c" />
        <BlockMath math="y = \frac{1}{2} e^{x^2}  + 2x + c" />
      </div>
    ),
  },
  {
    type: "exercise",
    questions: [
      {
        id: "q1",
        question: <InlineMath math={"y' = 3x^2 - e^x + 1"} />,
        options: [
          <InlineMath key="q1-o1" math={"y = 3x^3 - e^x + C"} />,
          <InlineMath key="q1-o2" math={"y = x^3 - e^x + x + C"} />,
          <InlineMath key="q1-o3" math={"y = x^3 + e^x + x + C"} />,
          <InlineMath key="q1-o4" math={"y = x^2 - e^x + x + C"} />,
        ],
        correctAnswer: 1,
      },
      {
        id: "q2",
        question: <InlineMath math={"y' = x e^{x^2} + 2"} />,
        options: [
          <InlineMath key="q2-o1" math={"y = \\frac{1}{2} e^{x^2} + 2x + C"} />,
          <InlineMath key="q2-o2" math={"y = e^{x^2} + 2x + C"} />,
          <InlineMath key="q2-o3" math={"y = \\frac{1}{2} e^{x} + 2x + C"} />,
          <InlineMath key="q2-o4" math={"y = \\frac{1}{2} e^{x^2} + x + C"} />,
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    type: "definition",
    title: "សមីការឌីផែរ៉ង់ស្សែលដែលញែកអថេរបាន",
    content: (
      <>
        <p>
          សមីការដែលក្រោយពីសម្រួលរួចមានទម្រង់{" "}
          <InlineMath math={"\\frac{d_y}{d_x} = \\frac{M(x)}{N(y)}"} />{" "}
          ហៅថាសមីការញែកអថេរបាន ហើយមានចម្លើយទូទៅគឺ
          <InlineMath math={"\\int N(y)d_y = \\int M(x)d_x + C "} />
        </p>
      </>
    ),
  },
  {
    type: "example",
    question: [
      <>
        <div className="flex flex-col items-start gap-3">
          <p>ដោះស្រាយសមីការឌីផែរ៉ង់ស្សែល</p>
          <div className="flex items-center gap-5 flex-wrap">
            <div className="flex items-center gap-2">
              1. <BlockMath math="\frac{d_y}{d_x} = e^{x+y}" />
            </div>
            <div className="flex items-center gap-2">
              2. <BlockMath math="\frac{d_y}{d_x} = \frac{y^2 -1}{x}" /> បើ y(1)=2
            </div>
          </div>
        </div>
      </>,
    ],
    steps: [
      {
        title: "ដោះស្រាយសមីការទី១",
        content: (
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 flex-wrap">
              <p>សមីការ៖ </p>
              <BlockMath math="\frac{d_y}{d_x} = e^{x+y}" />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p>គេបាន:</p>
              <div className="flex items-center gap-2">
                <BlockMath math="\frac{d_y}{d_x} = e^{x+y}" />
                <BlockMath math="\Rightarrow \frac{d_y}{d_x} = e^{x} e^{y}" />
              </div>
            </div>

            <div className="flex items-center sm:flex-row flex-col gap-2 justify-center">
              <div className="flex items-center gap-2">
                <BlockMath math="\frac{d_y}{e^y} = e^{x} d_x" />
                <BlockMath math="\Rightarrow \int \frac{d_y}{e^y} = \int e^{x} d_x" />
              </div>
            </div>

            <div className="flex items-center gap-2 justify-center">
              <div className="flex items-center gap-2 sm:flex-row flex-col">
                <BlockMath math="\Rightarrow -e^{-y} + c_1 = e^x + c_2" />
                <div className="flex items-center gap-3">
                  <BlockMath math="\Rightarrow -e^{-y} = -e^x + c " />
                  <BlockMath math=", c= c_1 - c_2" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <div className="flex items-center gap-2 sm:flex-row flex-col">
                <BlockMath math="\Rightarrow -y = \ ln|-e^x + c |" />
                <BlockMath math="\Rightarrow  y = - \ln|-e^x + c |" />
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "ដោះស្រាយសមីការទី២",
        content: (
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 flex-wrap">
              <p>សមីការ៖ </p>
              <BlockMath math="\frac{dy}{dx} = \frac{y^2 - 1}{x}" />
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <p>គេបាន:</p>
              <div className="flex items-center gap-2">
                <BlockMath math="\frac{dy}{dx} = \frac{y^2 - 1}{x}" />
                <BlockMath math="\Rightarrow \frac{dy}{y^2 - 1} = \frac{dx}{x}" />
              </div>
            </div>

            <div className="flex items-center gap-2">
              <BlockMath math="\Rightarrow \int \frac{dy}{y^2 - 1} = \int \frac{dx}{x}" />
            </div>

            <div className="flex items-center gap-2">
              <BlockMath math="\Rightarrow \frac{1}{2} \ln\left|\frac{y-1}{y+1}\right| = \ln|x| + C" />
            </div>
            <p>តែដោយ y(1)=2</p>
            <div className="flex items-center gap-2">
              <BlockMath math="\Rightarrow \frac{1}{2} \ln\left|\frac{2-1}{2+1}\right| = \ln|1| + C" />
            </div>
            <div className="flex items-center gap-2">
              <BlockMath math="\Rightarrow c= - \frac{1}{2} \ln3 " />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="flex flex-col items-start">
        <BlockMath math="y = - \ln|-e^x + c | ,\ c \in \mathbb{R}" />
        <BlockMath math="\frac{1}{2} \ln\left|\frac{y-1}{y+1}\right| =  \ln|x| - \frac{1}{2} \ln3" />
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
                <InlineMath math={"\\frac{dy}{dx} = x(1 + y^2)"} />
              </div>
            </div>
          </>
        ),
        options: [
          <InlineMath key="q1-o1" math={"\\arctan y = \\frac{x^2}{2} + C"} />,
          <InlineMath key="q1-o2" math={"\\arctan y = x^2 + C"} />,
          <InlineMath key="q1-o3" math={"y^2 = x^2 + C"} />,
          <InlineMath key="q1-o4" math={"y = e^{x^2} + C"} />,
        ],
        correctAnswer: 0,
      },
      {
        id: "q2",
        question: (
          <>
            <div className="flex flex-col gap-3">
              <p>ដោះស្រាយសមីការ</p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <InlineMath math={"\\frac{dy}{dx} = \\frac{2y}{x}"} />
              </div>
            </div>
          </>
        ),
        options: [
          <InlineMath key="q2-o1" math={"y = 2Cx"} />,
          <InlineMath key="q2-o2" math={"y = Cx^2"} />,
          <InlineMath key="q2-o3" math={"y^2 = Cx"} />,
          <InlineMath key="q2-o4" math={"y = Cx"} />,
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
                <InlineMath math={"\\frac{dy}{dx} = e^x e^{-y}"} />
              </div>
            </div>
          </>
        ),
        options: [
          <InlineMath key="q3-o1" math={"y = e^{x} + C"} />,
          <InlineMath key="q3-o2" math={"e^{-y} = e^{x} + C"} />,
          <InlineMath key="q3-o3" math={"y = x + C"} />,
          <InlineMath key="q3-o4" math={"e^{y} = e^{x} + C"} />,
        ],
        correctAnswer: 3,
      },
    ],
  },
];

const jsonV2 = serializeTopicContentV3(VariousForms_V3);

// Stage 3a: Deserialized V3 with live React nodes (renderable)
const restoredV3 = deserializeTopicContentV3(jsonV2) as TopicContent_V3[];

// Stage 3b: Deserialized V3 raw node tree (no React elements) for inspection
const restoredV3Tree = deserializeTopicContentV3ToTree(jsonV2) as TopicContent_V3[];

const VariousForms = () => <ContentRendererV3 content={VariousForms_V3} />;

export default VariousForms;
