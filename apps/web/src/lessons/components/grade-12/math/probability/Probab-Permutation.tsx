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

const ProbabilityPermutation_V3: TopicContent_V3[] = [
  // ---------------- First Topic ----------------
  {
    type: "definition",
    title: "ចម្លាស់ច្រំដែល",
    content: (
      <div className="flex flex-col items-start">
        <p>
          ចម្លាស់ច្រំដែលគឺជាតម្រៀបធាតុតាមលំដាប់ហើយ អាចមានធាតុច្រំដែលច្រើនជាងមួយ។
        </p>
      </div>
    ),
  },
  {
    type: "example",
    question: [
      <div key="ex1-q1" className="flex flex-col gap-3">
        <p>គេបោះគ្រាប់ឡុកឡាក់មួយគ្រាប់ចំនួន២ដង។</p>
        <div className="flex flex-col gap-3">
          <p>ក. រកប្រូបាបដែលបោះបានទាំងពីរលើកមានលេខខុសគ្នា</p>
          <p>ខ. រកប្រូបាបដែលបោះបានទាំងពីរលើកមានលេខគូ</p>
          <p>គ. រកប្រូបាបដែលបោះបានទាំងពីរលើកមានលេខខុសគ្នា និងជាលេខគូ</p>
        </div>
      </div>,
    ],
    steps: [
      {
        title: "រកចំនួនករណីអាច",
        content: (
          <div>
            <p>
              ការបោះគ្រាប់ឡុកឡាក់មួយគ្រាប់ចំនួន២ដងជាចម្លាស់ច្រំដែលនៃ២
              ធាតុយកពី៦ធាតុ។
            </p>
            <p>នោះចំនួនករណីអាចគឺ</p>
            <div className="flex items-center gap-2 justify-start">
              <BlockMath math={"\\Rightarrow n(s) = 6^2= 36"} />
              <p>ករណី</p>
            </div>
          </div>
        ),
      },
      {
        title: "ក. រកប្រូបាបដែលបោះបានទាំងពីរលេីកមានលេខខុសគ្នា",
        content: (
          <div className="flex flex-col gap-2">
            <p>តាង A ជាព្រឹត្តិការណ៍ដែលបោះបានទាំងពីរលេីកមានលេខខុសគ្នា</p>
            <p>មានន័យថា បានទាំងពីរលេីកមានលេខខុសគ្នា ជាចម្លាស់២ធាតុយកពី៦ធាតុ។</p>
            <div className="flex flex-col items-start">
              <p>នោះចំនួនស្រប</p>
              <BlockMath math={"n(A) = P(6,2) = \\frac{6!}{(6-2)!} = 30"} />
            </div>
            <div className="flex flex-col items-start">
              <p>គេបាន</p>
              <BlockMath
                math={
                  "P(A) = \\frac{n(A)}{n(s)} = \\frac{30}{36} = \\frac{5}{6}"
                }
              />
            </div>
          </div>
        ),
      },
      {
        title: "ខ. រកប្រូបាបដែលបោះបានទាំងពីរលេីកមានលេខគូ",
        content: (
          <div className="flex flex-col gap-2">
            <p>តាង B ជាព្រឹត្តិការណ៍ដែលបោះបានទាំងពីរលេីកមានលេខគូ</p>
            <p>មានន័យថា ជាចម្លាស់ច្រំដែល២ធាតុយកពី៦ធាតុ។</p>
            <div className="flex flex-col items-start">
              <p>នោះចំនួនស្រប</p>
              <BlockMath math={"n(B)= 3^2= 9"} />
            </div>
            <div className="flex flex-col items-start">
              <p>គេបាន</p>
              <BlockMath
                math={
                  "P(B) = \\frac{n(B)}{n(s)} = \\frac{9}{36} = \\frac{1}{4}"
                }
              />
            </div>
          </div>
        ),
      },
    ],
  },
  {
    type: "exercise",
    questions: [
      {
        id: "fp-q1",
        question: (
          <p>
            ក្នុងប្រអប់មួយមានបាល់ពណ៌ក្រហម ៤ និងបាល់ពណ៌ខៀវ ២។ ចាប់យកបាល់ពីរ ដោយដាក់ត្រឡប់វិញក្រោយពេលចាប់យក។ រកប្រូបាបដែលចាប់បានបាល់ពណ៌ដូចគ្នាទាំងពីរលើក។
          </p>
        ),
        options: [
          <p key="fp-q1-o1">4/9</p>,
          <p key="fp-q1-o2">5/9</p>,
          <p key="fp-q1-o3">8/9</p>,
          <p key="fp-q1-o4">2/3</p>,
        ],
        correctAnswer: 0,
      },
      {
        id: "fp-q2",
        question: <p>គេបោះគ្រាប់ឡុកឡាក់ ២ ដង។ រកប្រូបាបដែលលេខទាំងពីរខុសគ្នា។</p>,
        options: [
          <p key="fp-q2-o1">5/6</p>,
          <p key="fp-q2-o2">1/6</p>,
          <p key="fp-q2-o3">2/3</p>,
          <p key="fp-q2-o4">4/5</p>,
        ],
        correctAnswer: 0,
      },
    ],
  },

  // ---------------- Second Topic ----------------
  {
    type: "definition",
    title: "ចម្លាស់នៃ r ធាតុក្នុង n ធាតុ",
    content: (
      <div className="flex flex-col">
        <p>
          តម្រៀបនៃ r ធាតុយកចេញពី n ធាតុដោយគិតលំដាប់ ហៅថា ចម្លាស់ដែលកំណត់សរសេរដោយ
        </p>
        <BlockMath math={"P(n,r) = \\frac{n!}{(n-r)!}"} />
      </div>
    ),
  },
  {
    type: "example",
    question: [
      <div key="ex2-q1" className="flex flex-col gap-3">
        <p>
          ក្មេងប្រុស៤នាក់និងស្រី៥នាក់ឈរតម្រង់ជួរគ្នាដើម្បីទិញការ៉េម បើដឹងថាក្មេងស្រីត្រូវឈរចុងសងខាងនៃជួរនោះ តើគេអាចឈរបានប៉ុន្មានរបៀប?
        </p>
      </div>,
    ],
    steps: [
      {
        title: "រកចំនួននៃការតម្រង់ជួរ",
        content: (
          <div>
            <div>
              <p>
                ដោយក្មេងប្រុស៤នាក់និងស្រី៥នាក់
                សរុប៩នាក់ឈរតម្រង់ជួរគ្នាដេីម្បីទិញការ៉េមហេីយក្នុងនោះស្រីត្រូវឈរសងខាង
              </p>
              <p>
                មានន័យថា ក្នុងចំណោមក្មេងស្រី ៥នាក់​ ត្រូវមាន ២នាក់ឈរនៅចុងសងខាង
                ជាចម្លាស់នៃ ៥ យក ២
              </p>
              <p>នៅសល់មនុស្ស ៧នាក់ចល័តដោយសេរីគេបាន</p>
            </div>

            <div className="flex items-center gap-1 flex-wrap justify-start">
              <BlockMath math={"N= P(5,2) * 7! = "} />
              <BlockMath math={"\\frac{5!}{(5-2)!} * 7! = 100800"} />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="flex items-center gap-3">
        <BlockMath math={"N = 100800"} />
        <p>របៀប។</p>
      </div>
    ),
  },
  {
    type: "exercise",
    questions: [
      {
        id: "sp-q1",
        question: (
          <div className="flex flex-col gap-3">
            <p>មានអក្សរ ៧ តួ តើអាចតម្រៀបយក ៤ តួឱ្យបានប៉ុន្មានរបៀប?</p>
          </div>
        ),
        options: [
          <p key="sp-q1-o1">840</p>,
          <p key="sp-q1-o2">1680</p>,
          <p key="sp-q1-o3">720</p>,
          <p key="sp-q1-o4">5040</p>,
        ],
        correctAnswer: 1, // P(7,4) = 1680
      },
      {
        id: "sp-q2",
        question: (
          <div className="flex flex-col gap-3">
            <p>
              មានសៀវភៅ ៨ ក្បាល តើអាចជ្រើសរើស និងតម្រៀប ៣ ក្បាល
              ឱ្យបានប៉ុន្មានរបៀប?
            </p>
          </div>
        ),
        options: [
          <p key="sp-q2-o1">336</p>,
          <p key="sp-q2-o2">512</p>,
          <p key="sp-q2-o3">3360</p>,
          <p key="sp-q2-o4">672</p>,
        ],
        correctAnswer: 0,
      },
    ],
  },
];

const jsonV2 = serializeTopicContentV3(ProbabilityPermutation_V3);
const restoredV3 = deserializeTopicContentV3(jsonV2) as TopicContent_V3[];
const restoredV3Tree = deserializeTopicContentV3ToTree(jsonV2) as TopicContent_V3[];

const ProbabilityPermutationDefinition = () => (
  <ContentRendererV3 content={ProbabilityPermutation_V3} />
);

export default ProbabilityPermutationDefinition;
