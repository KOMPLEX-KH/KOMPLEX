"use client";

import React from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import { serializeTopicContentV3 } from "@/components/pages/docs/utils/ContentSerializerV2";

const content: TopicContent_V3[] = [
  // ---------------- Definition ----------------
  {
    type: "definition",
    title: "ព្រឹត្តការណ៍សមាស",
    content: (
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-3 flex-wrap w-full">
          <p>
            ព្រឹត្តការណ៍សមាសគឺជាព្រឹត្តការណ៍ដែលអាចសរសេរជាប្រជុំនៃព្រឹត្តការណ៍ផ្សេងៗ។
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
        <p>
          ប្រូបាបនៃព្រឹត្តការណ៍សមាស គេអាចគណនាដោយប្រើស្វីតផលគុណ និងស្វីតផលបូក៖
        </p>

        <p className="mt-2 font-semibold">
          1. ស្វីតផលគុណ (ករណីព្រឹត្តការណ៍មិនទាក់ទងគ្នា)
        </p>
        <div className="pl-5">
          <BlockMath math={"P(A \\cap B) = P(A) \\cdot P(B)"} />
        </div>

        <p className="mt-2 font-semibold">2. ស្វីតផលបូក</p>
        <div className="pl-5">
          <BlockMath math={"P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"} />
        </div>

        <p className="mt-2">ក្នុងនោះ៖</p>
        <p className="pl-5">P(A) គឺប្រូបាបនៃព្រឹត្តការណ៍ A</p>
        <p className="pl-5">P(B) គឺប្រូបាបនៃព្រឹត្តការណ៍ B</p>
      </div>
    ),
  },

  // ---------------- Example ----------------
  {
    type: "example",
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <p>
              ក្នុងថង់មួយមានឃ្លីក្រហម ២ និងឃ្លីខៀវ ៣។ គេចាប់ឃ្លី ២
              ចេញពីថង់ម្តងមួយៗដោយចៃដន្យ។
            </p>
          </div>
          <div className="flex gap-5 flex-col">
            <div className="flex flex-col gap-3">
              <p>ក. ក្នុងករណីយកហេីយដាក់វិញ ចូររកប្រូបាបដែលចាប់បាន</p>
              <p>_ ឃ្លីក្រហមមុន និងឃ្លីខៀវក្រោយ</p>
              <p>_ ឃ្លីក្រហមមុន ឬឃ្លីខៀវក្រោយ</p>
            </div>
            <div className="flex flex-col gap-3">
              <p>ខ. ក្នុងករណីយកហេីយមិនដាក់វិញ ចូររកប្រូបាបដែលចាប់បាន</p>
              <p>_ ឃ្លីក្រហមមុន និងឃ្លីខៀវក្រោយ</p>
              <p>_ ឃ្លីក្រហមមុន ឬឃ្លីខៀវក្រោយ</p>
            </div>
          </div>
        </div>
      </div>,
    ],
    steps: [
      {
        title: "ក. ក្នុងករណីយកហេីយដាក់វិញ",
        content: (
          <div>
            <div className="flex flex-col gap-3">
              <p>តាងព្រឹត្តការណ៍</p>
              <div className="flex flex-col items-start gap-2">
                <p>A ចាប់បានឃ្លីក្រហមមុន</p>
                <p>B ចាប់បានឃ្លីខៀវក្រោយ</p>
              </div>
            </div>

            <div className="mt-3 flex flex-col gap-3">
              <p>គេបានចំនួនឃ្លីនៅក្នុងថង់សម្រាប់ចាប់មុន និងក្រោយស្មើគ្នា</p>
              <p>ដូចនេះការចាប់ឃ្លីទី១ និងទី២ ជាព្រឹត្តការណ៍២ មិនទាក់ទងគ្នាទេ</p>
              <p>គេបាន</p>
            </div>

            <div className="flex flex-col gap-3 items-start">
              <BlockMath math={"P(A) = \\frac{2}{5}, P(B) = \\frac{3}{5}"} />
            </div>

            <div className="flex flex-col">
              <p>
                ព្រឹត្តការណ៍ចាប់បានឃ្លីក្រហមមុន
                និងឃ្លីខៀវក្រោយជាព្រឹត្តការណ៍ផលគុណ
              </p>
              <div className="flex items-center flex-wrap gap-2">
                <BlockMath math={"P(A \\cap B) = P(A) \\cdot P(B)"} />
                <BlockMath math={"\\frac{2}{5} \\cdot \\frac{3}{5}"} />
                <BlockMath math={"= \\frac{6}{25}"} />
              </div>
            </div>

            <div className="flex flex-col">
              <p>
                ព្រឹត្តការណ៍ចាប់បានឃ្លីក្រហមមុន ឬឃ្លីខៀវក្រោយជាព្រឹត្តការណ៍ផលបូក
              </p>
              <div className="flex items-center flex-wrap gap-2">
                <BlockMath math={"P(A \\cup B) = P(A) + P(B) -"} />
                <BlockMath
                  math={
                    "P(A \\cap B) = \\frac{2}{5} + \\frac{3}{5} - \\frac{6}{25}= \\frac{19}{25}"
                  }
                />
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "ខ. ក្នុងករណីយកហេីយមិនដាក់វិញ",
        content: (
          <div>
            <div className="flex flex-col gap-3">
              <p>តាងព្រឹត្តការណ៍</p>
              <div className="flex flex-col">
                <p>A ចាប់បានឃ្លីក្រហមមុន</p>
                <p>B ចាប់បានឃ្លីខៀវក្រោយ</p>
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <p>
                ចំនួន​ឃ្លីក្នុងថង់សម្រាប់ចាប់លើកទី១ មាន ៥ នោះហើយលើកទី២ មានតែ ៤។
              </p>

              <div className="flex flex-col gap-3">
                <p>+ ចាប់បានឃ្លីក្រហម និងចាប់បានឃ្លីខៀវ</p>
                <div className="flex flex-wrap items-center gap-3">
                  <p>នោះប្រូបាបដែលចាប់បានឃ្លីក្រហមមុនគឺ</p>
                  <BlockMath math={"\\frac{2}{5}"} />
                  <p>និងប្រូបាបចាប់បានឃ្លីខៀវក្រោយគឺ</p>
                  <BlockMath math={"\\frac{3}{4}"} />
                  <p>ប្រូបាបនៃផលគុណ A និង B គឺ</p>
                </div>
                <div className="items-start flex flex-wrap">
                  <BlockMath math={"P(A \\cap B) = P(A) \\cdot P(B)"} />
                  <BlockMath
                    math={
                      "= \\frac{2}{5} \\cdot \\frac{3}{4} = \\frac{6}{20} = \\frac{3}{10}"
                    }
                  />
                </div>
              </div>

              <div>
                <p>
                  + ចាប់បានឃ្លីក្រហម ឬចាប់បានឃ្លីខៀវប្រូបាបនៃព្រឹត្តការណ៍ផលបូក A
                  និង B គឺ
                </p>
                <div className="flex flex-wrap items-center gap-3">
                  <BlockMath math={"P(A \\cup B) = P(A) + P(B) -"} />
                  <BlockMath
                    math={
                      "P(A \\cap B) = \\frac{2}{5} + \\frac{3}{5} - \\frac{3}{10} = \\frac{7}{10}"
                    }
                  />
                </div>
              </div>
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
        id: "pc-q1",
        question: (
          <div className="flex flex-col gap-3">
            <p>
              កីឡាករម្នាក់បាញ់គោលដៅ ២ ដង។ ប្រូបាបបាញ់ត្រូវគោលដៅក្នុងពេលណាមួយគឺ
              0.7។
            </p>
            <p>រកប្រូបាបដែលបាញ់ត្រូវទាំងពីរដង។</p>
          </div>
        ),
        options: [
          <p key="pc-q1-o1">0.49</p>,
          <p key="pc-q1-o2">0.70</p>,
          <p key="pc-q1-o3">0.84</p>,
          <p key="pc-q1-o4">0.21</p>,
        ],
        correctAnswer: 0,
      },
      {
        id: "pc-q2",
        question: (
          <div className="flex flex-col gap-3">
            <p>
              ក្នុងក្រុមសិស្ស 20 នាក់ មានសិស្សប្រុស 12 នាក់ និងសិស្សស្រី 8 នាក់។
              គេចាប់ឈ្មោះសិស្សពីរនាក់ ដោយមិនដាក់ឈ្មោះវិញ។
            </p>
            <p>រកប្រូបាបដែលចាប់បានសិស្សប្រុសទាំងពីរ។</p>
          </div>
        ),
        options: [
          <p key="pc-q2-o1">0.1895</p>,
          <p key="pc-q2-o2">0.3210</p>,
          <p key="pc-q2-o3">0.2580</p>,
          <p key="pc-q2-o4">0.5000</p>,
        ],
        correctAnswer: 1,
      },
    ],
  },
];

const jsonV2 = serializeTopicContentV3(content);

const ProbabCompound = () => (
  <ContentRendererV3 content={content} />
);

export default ProbabCompound;
