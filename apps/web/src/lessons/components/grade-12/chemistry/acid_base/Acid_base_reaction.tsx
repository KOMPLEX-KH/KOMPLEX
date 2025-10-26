"use client";

import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  serializeTopicContentV3,
  deserializeTopicContentV3,
  deserializeTopicContentV3ToTree,
} from "@/components/pages/docs/utils/ContentSerializerV2";

const TOPIC_CONTENT_V3: TopicContent_V3[] = [
  {
    type: "definition",
    title: "១. អាស៊ីត-បាសឆ្លាស់",
    content: <div className="flex flex-col items-start"></div>,
  },

  {
    type: "definition",
    title: "១.១ អាស៊ីត",
    content: (
      <div className="flex flex-col items-start">
        <p>
          អាសុីតឆ្លាស់ គឺជាប្រភេទគីមីដែលកើតឡើងពេលបាសប្រុងស្ទែត-ឡូរីចាប់យកប្រូតុង១។
        </p>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div className="flex flex-col items-start gap-3 text-[13px]">
        <InlineMath math="HCOOH + H_{2}O \rightleftharpoons HCOO^{-} + H_{3}O^{+}" />
        <InlineMath math="CH_{3}COOH + H_{2}O \rightleftharpoons CH_{3}COO^{-} + H_{3}O^{+}" />
        <InlineMath math="C_{6}H_{5}COOH + H_{2}O \rightleftharpoons C_{6}H_{5}COO^{-} + H_{3}O^{+}" />
      </div>
    ),
  },

  {
    type: "definition",
    title: "១.២ បាស",
    content: (
      <div className="flex flex-col items-start">
        <p>
          បាសឆ្លាស់ គឺជាប្រភេទគីមីដែលនៅសល់ក្រោយពីអាសុីតប្រុងស្ទែតឡូរីបោះបង់ប្រូតុង១។
        </p>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div className="flex flex-col items-start gap-3 text-[13px]">
        <InlineMath math="HCOO^{-} + H_{2}O \rightleftharpoons HCOOH + OH^{-}" />
        <InlineMath math="CH_{3}COO^{-} + H_{2}O \rightleftharpoons CH_{3}COOH + OH^{-}" />
        <InlineMath math="C_{6}H_{5}COO^{-} + H_{2}O \rightleftharpoons C_{6}H_{5}COOH + OH^{-}" />
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div className="flex flex-col items-start gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <p>ក. ចូរផ្តល់បាសឆ្លាស់របស់អាសុីតបន្តបន្ទាប់នេះ</p>
          <div className="text-[13px]">
            <InlineMath math="CH_{2}ClCOOH , HIO_{4} , " />
            <InlineMath math="H_{3}PO_{4} , " />
            <InlineMath math="NH_{4}^{+} , " />
            <InlineMath math=" H_{2}S" />
          </div>
        </div>
        <div className="flex items-center gap-2 flex-wrap">
          <p>ខ. ចូរផ្តល់អាសុីតឆ្លាស់របស់បាសបន្តបន្ទាប់នេះ</p>
          <div className="text-[13px]">
            <InlineMath math="NH_{3} , HSO_{4}^{-} , " />
            <InlineMath math="NO_{2}^{-} , " />
            <InlineMath math=" CH_{3}CH_{2}COO^{-}" />
          </div>
        </div>
      </div>
    ),
    steps: [
      {
        title: "កំណត់ប្រភេទសមាសធាតុខាងក្រោម :",
        content: (
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-start gap-2 flex-col">
                <p>បាសឆ្លាស់របស់អាសុីត :</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[13px]">
                    <InlineMath math="CH_{2}ClCOOH " />
                  </span>
                  <span>គឺ </span>
                  <span className="text-[13px]">
                    <InlineMath math="CH_{2}ClCOO^{-} " />
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[13px]">
                    <InlineMath math="HIO_{4} " />
                  </span>
                  <span>គឺ </span>
                  <span className="text-[13px]">
                    <InlineMath math="IO_{4}^{-} " />
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[13px]">
                    <InlineMath math="H_{2}PO_{4} " />
                  </span>
                  <span>គឺ </span>
                  <span className="text-[13px]">
                    <InlineMath math="H_{2}PO_{4}^{-} " />
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[13px]">
                    <InlineMath math="NH_{4}^{+} " />
                  </span>
                  <span>គឺ </span>
                  <span className="text-[13px]">
                    <InlineMath math="NH_{3} " />
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[13px]">
                    <InlineMath math="H_{2}S " />
                  </span>
                  <span>គឺ </span>
                  <span className="text-[13px]">
                    <InlineMath math="HS^{-} " />
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <p>អាសុីតឆ្លាស់របស់បាស :</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[13px]">
                    <InlineMath math="NH_{3}" />
                  </span>
                  <span>គឺ </span>
                  <span className="text-[13px]">
                    <InlineMath math="NH_{4}^{+} " />
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[13px]">
                    <InlineMath math="HSO_{4}^{-} " />
                  </span>
                  <span>គឺ </span>
                  <span className="text-[13px]">
                    <InlineMath math="H_{2}SO_{4} " />
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[13px]">
                    <InlineMath math="NO_{2}^{-} " />
                  </span>
                  <span>គឺ </span>
                  <span className="text-[13px]">
                    <InlineMath math="HNO_{2} " />
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[13px]">
                    <InlineMath math="CH_{3}CH_{2}COO^{-} " />
                  </span>
                  <span>គឺ </span>
                  <span className="text-[13px]">
                    <InlineMath math="CH_{3}CH_{2}COOH " />
                  </span>
                </div>
              </div>
          </div>
        ),
      },
    ],
  },

  {
    type: "definition",
    title: "២. គូអាសុីត-បាស",
    content: (
      <div className="flex flex-col items-start">
        <p>
          គូអាសុីត-បាស គឺជាគូនៃប្រភេទគីមីឆ្លាស់គ្នាដែលប្តូរប្រូតុងគ្នាទៅមក ។
          គូអាសុីត-បាសមានអាសុីតមួយគូ គេសរសេរ អាសុីត/បាស។
        </p>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div className="flex flex-col items-start gap-3">
        <span className="text-[13px]">
          <InlineMath math="NH_{3} (aq) + HF (aq) \rightleftharpoons NH_{4}^{+} (aq) + F^{-} (aq)" />
        </span>
        <div className="flex items-center gap-2 flex-wrap">
          <p>គេបានគូអាសុីត-បាស ២គូរ គឺ </p>
          <span className="text-[13px]">
            <InlineMath math="NH_{4}^{+} / NH_{3} " />
          </span>
          <span>និង</span>
          <span className="text-[13px]">
            <InlineMath math="HF / F^{-}" />
          </span>
        </div>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div className="flex flex-col items-start gap-3">
        <p>ចូរកំណត់គូអាសុីត-បាសនៃប្រតិកម្មនីមួយៗខាងក្រោមនេះ :</p>
        <InlineMath math="a. CH_{3}COO^{-} + HCN \rightleftharpoons CH_{3}COOH + CN^{-}" />
        <InlineMath math="b. HClO + CH_{3}NH_{2} \rightleftharpoons CH_{3}NH_{3}^{+} + ClO^{-}" />
        <InlineMath math="c. CH_{3}CH_{2}COO^{-} + H_{2}O \rightleftharpoons CH_{3}CH_{2}COOH + OH^{-}" />
      </div>
    ),
    steps: [
      {
        title: "កំណត់គូអាសុីត-បាសនៃប្រតិកម្មនីមួយៗ :",
        content: (
          <>
            <div className="flex flex-col items-start gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span>a. </span>
                <span className="text-[13px]">
                  <InlineMath math="CH_{3}COOH / CH_{3}COO^{-}" />
                </span>
                <span>និង</span>
                <span className="text-[13px]">
                  <InlineMath math="HCN / CN^{-}" />
                </span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span>b. </span>
                <span className="text-[13px]">
                  <InlineMath math="HClO / ClO^{-}" />
                </span>
                <span>និង</span>
                <span className="text-[13px]">
                  <InlineMath math="CH_{3}NH_{3}^{+} / CH_{3}NH_{2}" />
                </span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span>c. </span>
                <span className="text-[13px]">
                  <InlineMath math="CH_{3}CH_{2}COOH / CH_{3}CH_{2}COO^{-}" />
                </span>
                <span>និង</span>
                <span className="text-[13px]">
                  <InlineMath math="H_{2}O / OH^{-}" />
                </span>
              </div>
            </div>
          </>
        ),
      },
    ],
  },

  {
    type: "definition",
    title: "៣. ប្រតិកម្មអាស៊ីត-បាស",
    content: <div className="flex flex-col items-start"></div>,
  },
  {
    type: "tip",
    title: "ជាទូទៅ",
    content: (
      <ul className="list-disc pl-5 flex flex-col items-start gap-4">
        <li className="flex flex-wrap items-center gap-2">
          អាសុីតខ្លាំង បាសខ្លាំង :
          <InlineMath math="HCl (aq) + NaOH (aq) \rightleftharpoons NaCl (aq) + H_{2}O (l)" />
          <p>ល្បាយក្រោយប្រតិកម្មជាសូលុយស្យុងណឺត។</p>
        </li>
        <li className="flex flex-wrap items-center gap-2">
          អាសុីតខ្លាំង បាសខ្សោយ :
          <InlineMath math="HCl (aq) + CH_{3}COONa (aq) \rightleftharpoons NaCl (aq) + CH_{3}COOH (aq)" />
          <p>ល្បាយក្រោយប្រតិកម្មជាសូលុយស្យុងអាសុីតខ្សោយ។</p>
        </li>
        <li className="flex flex-wrap items-center gap-2">
          អាសុីតខ្សោយ បាសខ្លាំង :
          <InlineMath math="CH_{3}COOH (aq) + NaOH (aq) \rightleftharpoons CH_{3}COONa (aq) + H_{2}O (l)" />
          <p>ល្បាយក្រោយប្រតិកម្មជាសូលុយស្យុងបាសខ្លាំង។</p>
        </li>
        <li className="flex items-center flex-wrap gap-3">
          <p className="font-bold">ចំណាំ :</p>
          <p>ប្រតិកម្មទាំងបីប្រភេទខាងលើជាប្រតិកម្មសព្វ។</p>
        </li>
      </ul>
    ),
  },
];

// Serialization steps (optional for debugging)
const jsonV2 = serializeTopicContentV3(TOPIC_CONTENT_V3);
const restoredV3 = deserializeTopicContentV3(jsonV2) as TopicContent_V3[];
const restoredV3Tree = deserializeTopicContentV3ToTree(jsonV2) as TopicContent_V3[];
const originalTypes = TOPIC_CONTENT_V3.map((i) => i.type);

const AcidbaseReaction = () => {
  return (
    <div>
      <ContentRendererV3 content={TOPIC_CONTENT_V3} />
    </div>
  );
};

export default AcidbaseReaction;
