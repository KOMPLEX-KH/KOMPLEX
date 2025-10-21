"use client";

import React from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  serializeTopicContentV3,
  deserializeTopicContentV3,
  deserializeTopicContentV3ToTree,
} from "@/components/pages/docs/utils/ContentSerializerV2";

const ProbabilityDefinition_V3: TopicContent_V3[] = [
  // ---------------- Definition ----------------
  {
    type: "definition",
    title: "ប្រូបាប",
    content: (
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-3 flex-wrap w-full">
          <p>
            ប្រូបាបគឺជាផលធៀបរវាងចំនួនករណីស្របនិងចំនួនករណីអាចដែលនៅចន្លោះ 0 - 1។
          </p>
        </div>
      </div>
    ),
  },

  // ---------------- Tip ----------------
  {
    type: "tip",
    title: "ជាទូទៅ",
    content: (
      <div className="flex flex-col">
        <p>គេកំណត់ប្រូបាបនៃព្រឹត្តការណ៍ A មួយដោយ:</p>
        <BlockMath math={"P(A) = \\frac{n(A)}{n(s)}"} />
        <p>n(A) គឺជាចំនួនករណីស្រប</p>
        <p>n(s) គឺជាចំនួនករណីអាច</p>
      </div>
    ),
  },

  // ---------------- Example ----------------
  {
    type: "example",
    question: [
      <div className="flex flex-col items-start gap-3" key="q2">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <p>
              គេរេីសសិស្សម្នាក់ធ្វេីជាប្រធានថ្នាក់ក្នុងចំណោមសិស្សស្រី ៥ នាក់
              និងសិស្សប្រុស ៣ នាក់។រកប្រូបាបដែល :
            </p>
          </div>
          <div className="flex gap-5 flex-col">
            <p>ក. ប្រធានថ្នាក់ជាស្រី</p>
            <p>ខ. ប្រធានថ្នាក់ជាប្រុស</p>
          </div>
        </div>
      </div>,
    ],
    steps: [
      {
        title: "រកចំនួនករណីអាច",
        content: (
          <div className="flex flex-col items-start">
            <p>សិស្សទាំងអស់មាន ៨ នាក់</p>
            <BlockMath math={"\\Rightarrow n(s) = 8"} />
          </div>
        ),
      },
      {
        title: "ក. ប្រធានថ្នាក់ជាស្រី",
        content: (
          <div>
            <div className="flex items-center flex-wrap gap-2">
              <p>សិស្សស្រីមាន ៥ នាក់</p>
              <BlockMath math={"\\Rightarrow n(A) = 5"} />
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p>គេបាន</p>
              <BlockMath math={"P(A) = \\frac{n(A)}{n(s)} = \\frac{5}{8}"} />
            </div>
          </div>
        ),
      },
      {
        title: "ខ. ប្រធានថ្នាក់ជាប្រុស",
        content: (
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3 flex-wrap">
              <p>សិស្សប្រុសមាន ៣ នាក់</p>
              <BlockMath math={"\\Rightarrow n(A) = 3"} />
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <p>គេបាន</p>
              <BlockMath math={"P(A) = \\frac{n(A)}{n(s)} = \\frac{3}{8}"} />
            </div>
          </div>
        ),
      },
    ],
  },

  // ---------------- Exercise ----------------
  {
    type: "exercise",
    questions: [
      {
        id: "ex-q1",
        question: (
          <div className="flex flex-col gap-3">
            <p>
              ក្នុងប្រអប់មួយមានបាល់ពណ៌ក្រហម ៣ បាល់ និងបាល់ពណ៌បៃតង ៧ បាល់។
              ចាប់យកបាល់មួយដោយចៃដន្យ។ រកប្រូបាបនៃការចាប់យកបាល់ពណ៌បៃតង។
            </p>
          </div>
        ),
        options: [
          <p key="ex-q1-o1">3/10</p>,
          <p key="ex-q1-o2">7/10</p>,
          <p key="ex-q1-o3">1/2</p>,
          <p key="ex-q1-o4">2/5</p>,
        ],
        correctAnswer: 1,
      },
      {
        id: "ex-q2",
        question: (
          <div className="flex flex-col gap-3">
            <p>
              មានកាត ៥០ សន្លឹក។ ជ្រើសរើសកាតមួយសន្លឹកដោយចៃដន្យ។
              រកប្រូបាបនៃការជ្រើសរើសកាតដែលមានលេខចាប់ពី ១ ទៅ ១០។
            </p>
          </div>
        ),
        options: [
          <p key="ex-q2-o1">10/50</p>,
          <p key="ex-q2-o2">1/5</p>,
          <p key="ex-q2-o3">1/10</p>,
          <p key="ex-q2-o4">5/10</p>,
        ],
        correctAnswer: 0,
      },
      {
        id: "ex-q3",
        question: (
          <div className="flex flex-col gap-3">
            <p>
              ក្នុងថ្នាក់មានសិស្ស ២៥ នាក់ ដែលមានសិស្សស្រី ១៥ នាក់។
              ចាប់យកសិស្សម្នាក់ដោយចៃដន្យ។ រកប្រូបាបនៃការចាប់យកសិស្សប្រុស។
            </p>
          </div>
        ),
        options: [
          <p key="ex-q3-o1">10/25</p>,
          <p key="ex-q3-o2">15/25</p>,
          <p key="ex-q3-o3">1/5</p>,
          <p key="ex-q3-o4">3/5</p>,
        ],
        correctAnswer: 0,
      },
    ],
  },
];

const jsonV2 = serializeTopicContentV3(ProbabilityDefinition_V3);
const restoredV3 = deserializeTopicContentV3(jsonV2) as TopicContent_V3[];
const restoredV3Tree = deserializeTopicContentV3ToTree(jsonV2) as TopicContent_V3[];

const ProbabilityDefinition = () => (
  <ContentRendererV3 content={ProbabilityDefinition_V3} />
);

export default ProbabilityDefinition;
