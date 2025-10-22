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

const AQUEOUS_SOLUTION_CONTENT: TopicContent_V3[] = [
  {
    type: "definition",
    title: "១. ការបំបែកអុីយ៉ុងក្នុងទឹក",
    content: (
      <div className="flex flex-col items-start">
        <p>សមាសធាតុភាគច្រេីនរលាយក្នុងទឹកអាចបំបែកជាអុីយ៉ុងបាន។</p>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div className="flex flex-col items-start gap-3 text-[13px]">
        <InlineMath math="NaCl(s) \rightarrow Na^{+}(aq) + Cl^{-}(aq)" />
        <InlineMath math="HCl + H_{2}O \rightarrow H_{3}O^{+} + Cl^{-}" />
        <InlineMath math="Ca(NO_{3})_{2} \rightarrow Ca^{2+} + 2NO_{3}^{-}" />
      </div>
    ),
  },
  {
    type: "exercise",
    questions: [
        {
            id: "q1",
            question: (
                <p>សមាសធាតុមួយណាដែលអាចបំបែកជាអុីយ៉ុងនៅក្នុងទឹក?</p>
            ),
            options: [
              <InlineMath key="q1-o1" math="NaCl" />,
              <InlineMath key="q1-o2" math="C_{6}H_{12}O_{6}" />,
              <InlineMath key="q1-o3" math="CCl_{4}" />,
              <InlineMath key="q1-o4" math="CH_{3}OH" />,
            ],
            correctAnswer: 1,
        },
        {
        id: "q2",
        question: <p>សមីការណាដែលបង្ហាញពីការបំបែករបស់ HCl ក្នុងទឹក?</p>,
        options: [
          <InlineMath key="q2-o1" math="HCl \rightarrow H^{+} + Cl^{-}" />,
          <InlineMath
            key="q2-o2"
            math="HCl + H_{2}O \rightarrow H_{3}O^{+} + Cl^{-}"
          />,
          <InlineMath key="q2-o3" math="HCl \rightarrow H_{2} + Cl_{2}" />,
          <InlineMath key="q2-o4" math="HCl \rightarrow HCl(aq)" />,
        ],
        correctAnswer: 2,
      },
      {
        id: "q3",
        question: (
          <p>
            បើ <InlineMath math="Ca(NO_{3})_{2}" /> រលាយក្នុងទឹក វាបំបែកបានជាអុីយ៉ុងអ្វីខ្លះ?
          </p>
        ),
        options: [
          <InlineMath key="q3-o1" math="Ca^{2+} + NO_{3}^{-}" />,
          <InlineMath key="q3-o2" math="Ca^{+} + 2NO_{3}^{-}" />,
          <InlineMath key="q3-o3" math="Ca^{2+} + 2NO_{3}^{-}" />,
          <InlineMath key="q3-o4" math="Ca + NO_{3}" />,
        ],
        correctAnswer: 3,
      },
    ],
  },
  {
    type: "definition",
    title: "១.១ ប្រតិកម្មបង្កេីតកករ",
    content: <></>,
  },
  {
    type: "tip",
    title: "ជាទូទៅ",
    content: (
      <ul className="list-disc pl-5 flex flex-col items-start gap-4 text-[13px]">
        <li>សមាសធាតុអុីយ៉ុងមួយចំនួនមិនរលាយក្នុងទឹកទេ។</li>
        <li>
          ដេីម្បីសន្មតសមាសធាតុរលាយឬមិនរលាយក្នុងទឹក យេីងត្រូវមេីលក្នុងតារាងសមាសធាតុ ។
        </li>
      </ul>
    ),
  },
  {
    type: "example",
    question: (
      <div className="flex flex-col items-start gap-3 text-[13px]">
        <InlineMath math="AgNO_{3} \rightarrow Ag^{+} + NO_{3}^{-}" />
        <InlineMath math="2NaOH \rightarrow 2Na^{+} + 2OH^{-}" />
      </div>
    ),
  },
  {
    type: "definition",
    title: "១.២ សមីការអុីយ៉ុងសម្រួល",
    content: <></>,
  },
  {
    type: "tip",
    title: "ជាទូទៅ",
    content: (
      <div className="flex flex-col items-start">
        <p>សមាសធាតុភាគច្រេីនរលាយក្នុងទឹកអាចបំបែកជាអុីយ៉ុងបាន។</p>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div className="flex flex-col items-start gap-3">
        <p>សមីការម៉ូលេគុល</p>
          <div className="sm:text-[13px] text-[12px]">
            <InlineMath math="AgNO_{3}(aq) + NaCl(aq) \rightarrow AgCl(s)  + NaNO_{3}(aq)" />
          </div>
          <p>សមីការអុីយ៉ុងសព្វ</p>
  
          <div className="sm:text-[13px] text-[12px]">
            <InlineMath math="Ag^{+}(aq) + NO_{3}^{-}(aq) + Na^{+}(aq) + Cl^{-}(aq) \rightarrow AgCl(s) + Na^{+}(aq) + Cl^{-}(aq)" />
          </div>
  
          <p>សមីការអុីយ៉ុងសម្រួល</p>
          <div className="sm:text-[13px] text-[12px]">
            <InlineMath math="Ag^{+}(aq) + Cl^{-}(aq) \rightarrow AgCl(s)" />
          </div>
      </div>
    ),
  },
  {
   type: "exercise",
    questions: [
      {
        id: "q1",
        question: <p>ជ្រេីសសមីការបំបែកជាអុីយ៉ុងនៅក្នុងទឹករបស់ <InlineMath math="KI" /></p>,
        options: [
          <InlineMath key="q1-o1" math="KI \rightarrow K^{+} + I^{-}" />,
          <InlineMath key="q1-o2" math="KI \rightarrow K^{2+} + I^{2-}" />,
          <InlineMath key="q1-o3" math="KI \rightarrow K + I" />,
          <InlineMath key="q1-o4" math="KI \rightarrow KI(aq)" />,
        ],
        correctAnswer: 1,
      },
      {
        id: "q2",
        question: <p>ជ្រេីសសមីការបំបែកជាអុីយ៉ុងនៅក្នុងទឹករបស់ <InlineMath math="NaNO_{3}" /></p>,
        options: [
          <InlineMath key="q2-o1" math="NaNO_{3} \rightarrow Na^{+} + NO_{3}^{-}" />,
          <InlineMath key="q2-o2" math="NaNO_{3} \rightarrow Na^{2+} + NO_{3}^{2-}" />,
          <InlineMath key="q2-o3" math="NaNO_{3} \rightarrow Na + NO_{3}" />,
          <InlineMath key="q2-o4" math="NaNO_{3} \rightarrow NaNO_{3}(aq)" />,
        ],
        correctAnswer: 1,
      },
      {
        id: "q3",
        question: <p>ជ្រេីសសមីការបំបែកជាអុីយ៉ុងនៅក្នុងទឹករបស់ <InlineMath math="MgCl_{2}" /></p>,
        options: [
          <InlineMath key="q3-o1" math="MgCl_{2} \rightarrow Mg^{2+} + 2Cl^{-}" />,
          <InlineMath key="q3-o2" math="MgCl_{2} \rightarrow Mg^{+} + Cl^{-}" />,
          <InlineMath key="q3-o3" math="MgCl_{2} \rightarrow Mg^{2+} + Cl_{2}^{-}" />,
          <InlineMath key="q3-o4" math="MgCl_{2} \rightarrow Mg + 2Cl" />,
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    type: "hint",
    content: (
      <p>
        ពេលដែលគេចង់បានសមីការបីសណ្ធាន មានន័យថា គេចង់បានសមីការទាំងបីគឺ
        សមីការគីមី , សមីការអុីយ៉ុងសព្វ , សមីការអុីយ៉ុងសម្រួល។
      </p>
    ),
  },
  {
    type: "definition",
    title: "២. អុីយ៉ុងកម្ម",
    content: (
      <div className="flex flex-col items-start">
        <p>
          អុីយ៉ុងកម្មគឺជាលំនាំបំបែកជាអុីយ៉ុងកនៃសារធាតុរលាយដោយអំពេីនៃសារធាតុរំលាយ។
        </p>
      </div>
    ),
  },
  {
    type: "tip",
    title: "ជាទូទៅ",
    content: (
      <p>
        កាលណាសមាសធាតុអុីយ៉ុងរលាយ អុីយ៉ុងត្រូវបានផ្តាច់ចេញពីគ្នាហេីយត្រូវហ៊ុំព័ទ្ធដោយម៉ូលេគុលសារធាតុរំលាយ។
      </p>
    ),
  },
  {
    type: "example",
    question: [
      <div className="flex flex-col items-start gap-3 sm:text-[13px] text-[12px]" key="q1">
        <InlineMath math="NaCl(s) \rightarrow Na^{+}(aq) + Cl^{-}(aq) + Cl^{-}(aq)" />
        <InlineMath math="HCl(g) + H_{2}O(l) \rightarrow H_{3}O^{+}(aq)" />
      </div>,
    ],
  },
  {
    type: "definition",
    title: "៣. អុីយ៉ុងអុីដ្រូញ៉ូម",
    content: (
      <div className="flex flex-col items-start">
        <p>អុីយ៉ុងអុីដ្រូញ៉ូមគឺជាអុីយ៉ុងដែលមានសមាសធាតុជាអុីដ្រូញ៉ូម។</p>
      </div>
    ),
  },
  {
    type: "tip",
    title: "ជាទូទៅ",
    content: (
      <div className="flex items-start flex-col">
        <div className="flex items-center gap-2 flex-wrap">
          <p>ទឹកចាប់យកអុីយ៉ុង </p>
          <div className="text-[12px]"><InlineMath math="H^{+}" /></div>
          <p>ពីអាសុីត</p>
          <p>បង្កេីតបានជា</p>
          <p>អុីយ៉ុងអុីដ្រូញ៉ូម</p>
          <div className="text-[12px]"><InlineMath math="H_{3}O^{+}" /></div>
        </div>
      </div>
    ),
  },
  {
    type: "example",
    question: [
      <div className="flex flex-col items-start gap-5" key="q2">
        <div className="flex items-center gap-2 flex-wrap text-[13px]">
          <InlineMath math="HCl(g) \xrightarrow{H_{2}O} H^{+}(aq) + Cl^{-}(aq)" />
          <span>(1)</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap text-[13px]">
          <InlineMath math="H^{+}(aq) + H_{2}O(l) \rightarrow H_{3}O^{+}(aq)" />
          <span>(2)</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap text-[13px] ">
          <span>ជាសរុប</span>
          <InlineMath math="HCl(g) + H_{2}O(l) \rightarrow H_{3}O^{+}(aq) + Cl^{-}(aq)" />
        </div>
      </div>,
    ],
  },
  {
    type: "definition",
    title: "៤. អេឡិចត្រូលីតខ្លាំង និងអេឡិចត្រូលីតខ្សោយ",
    content: (
      <div className="flex flex-col items-start">
        <p>
          អេឡិចត្រូលីតគឺជាសារធាតុដែលផ្តល់ផលជាអុីយ៉ុង និងចម្លងចរន្តអគ្គិសនីក្នុងសូលុយស្យុងទឹក។
        </p>
      </div>
    ),
  },
  {
    type: "tip",
    title: "ជាទូទៅ",
    content: (
      <p>
        សារធាតុដែលមិនផ្តល់ផលជាអុីយ៉ុង និងមិនចម្លងចរន្តអគ្គិសនីក្នុងសូលុយស្យុងទឹក មិនមែនជាអេឡិចត្រូលីតទេ។
      </p>
    ),
  },
  {
    type: "definition",
    title: "៤.១ អេឡិចត្រូលីតខ្លាំង",
    content: (
      <p>
        អេឡិចត្រូលីតខ្លាំងគឺជាសារធាតុដែលអាចបំបែកជាអុីយ៉ុងទាំងស្រុងនៅក្នុងទឹក។
      </p>
    ),
  },
  {
    type: "example",
    question: [
      <div className="flex flex-col items-start gap-5" key="q3">
        <p>បាសខ្លាំង អាសុីតខ្លាំង អំបិលរលាយសព្វក្នុងទឹក</p>
        <div className="flex flex-col text-[13px] gap-3">
          <InlineMath math="Ba(OH)_{2}(s) \xrightarrow{H_{2}O} Ba^{2+}(aq) + 2OH^{-}(aq)" />
          <InlineMath math="HCl(g) + H_{2}O(l) \rightarrow H_{3}O^{+}(aq) + Cl^{-}(aq)" />
          <InlineMath math="NaCl(s) \xrightarrow{H_{2}O} Na^{+}(aq) + Cl^{-}(aq)" />
        </div>
      </div>,
    ],
  },
  {
    type: "definition",
    title: "៤.២ អេឡិចត្រូលីតខ្សោយ",
    content: (
      <p>
        អេឡិចត្រូលីតខ្សោយគឺជាសារធាតុដែលបំបែកជាអុីយ៉ុងដោយផ្នែកមួយនៅក្នុងទឹក។
      </p>
    ),
  },
  {
    type: "example",
    question: [
      <div className="flex flex-col items-start gap-5" key="q4">
        <p>បាសខ្សោយ អាសុីតខ្សោយ</p>
        <div className="flex flex-col text-[13px] gap-3">
          <InlineMath math="NH_{3}(aq) + H_{2}O(l) \rightleftharpoons NH_{4}^{+}(aq) + OH^{-}(aq)" />
          <InlineMath math="CH_{3}COOH(aq) + H_{2}O(l) \rightleftharpoons H_{3}O^{+}(aq) + CH_{3}COO^{-}(aq)" />
        </div>
      </div>,
    ],
  },
  {
    type: "example",
    question: [
      <div className="flex flex-col items-start gap-3" key="q5">
        <p>
          តើករណីនឹងកើតមានឡើយឬទេ កាលណាគេលាយសូលុយស្យុងទឹកនៃស័ង្កសីនីត្រាត និង អាម៉ូញូមស៊ុលផាតចូលគ្នា? ចូរសរសេរសមីការប្រតិកម្មជំនួសទ្វេដែលអាចមាន។ បន្ទាប់មកសរសេរសមីការគីមី, សមីការអុីយ៉ុងសព្វ និងសមីការអុីយ៉ុងសម្រួល។
        </p>
      </div>,
    ],
    steps: [
      {
        title: "សមីការប្រតិកម្មជំនួសទ្វេ",
        content: (
          <div>
            <div className="flex flex-col items-start">
              <div className="text-[13px]">
                <InlineMath math="Zn(NO_{3})_{2}(aq) + (NH_{4})_{2}SO_{4}(aq) \rightarrow ZnS(?) + 2NH_{4}NO_{3}(?)" />
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "សមីការប្រតិកម្មគីមី",
        content: (
          <div>
            <div className="flex flex-col items-start gap-3">
              <p>
                ដោយ ZnS គឺជាស៊ុលផួមិនរលាយ​ ចំណេក{" "}
                <InlineMath math="NH_{4}NO_{3}" /> ជាសមាសធាតុរលាយក្នុងទឹក
                នោះគេបាន :
              </p>
              <div className="text-[13px]">
                <InlineMath math="Zn(NO_{3})_{2}(aq) + (NH_{4})_{2}SO_{4}(aq) \rightarrow ZnS(s) + 2NH_{4}NO_{3}(aq)" />
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "សមីការអុីយ៉ុងសព្វ",
        content: (
          <div>
            <div className="text-[13px]">
              <InlineMath math="Zn^{2+}(aq) + 2NO_{3}^{-}(aq) + 2NH_{4}^{+}(aq) + S^{2-}(aq) \rightarrow ZnS(s) + 2NH_{4}^{+}(aq) + 2NO_{3}^{-}(aq)" />
            </div>
          </div>
        ),
      },
      {
        title: "សមីការអុីយ៉ុងសម្រួល",
        content: (
          <div>
            <div className="flex flex-col items-start gap-3">
              <p>
                សមីការអុីយ៉ុងសម្រួលគឺជាសមីការដែលសរសេរតែប្រភេទគីមីទាំងឡាយណាដែលរងនូវបម្រែបម្រួលគីមីក្នុងលំនាំប្រតិកម្ម។
              </p>
              <div className="text-[13px]">
                <InlineMath math="Zn^{2+}(aq) + S^{2-}(aq) \rightarrow ZnS(s)" />
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
];

const jsonV2 = serializeTopicContentV3(AQUEOUS_SOLUTION_CONTENT);

// Stage 3a: Deserialized V3 with live React nodes (renderable)
const restoredV3 = deserializeTopicContentV3(jsonV2) as TopicContent_V3[];

// Stage 3b: Deserialized V3 raw node tree (no React elements) for inspection
const restoredV3Tree = deserializeTopicContentV3ToTree(jsonV2) as TopicContent_V3[];



export default function AqueousSolutionPage() {
  return <ContentRendererV3 content={AQUEOUS_SOLUTION_CONTENT} />;
}
