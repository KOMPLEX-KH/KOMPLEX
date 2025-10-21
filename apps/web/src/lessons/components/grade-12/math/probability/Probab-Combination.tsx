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

const ProbabilityCombination_V3: TopicContent_V3[] = [
  {
    type: "definition",
    title: "បន្សំនៃ r ធាតុក្នុង n ធាតុ",
    content: (
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-3 flex-wrap w-full">
          <p>បន្សំគឺជាតម្រៀបមិនគិតពីលំដាប់។</p>
        </div>
      </div>
    ),
  },

  {
    type: "tip",
    title: "ជាទូទៅ",
    content: (
      <div className="flex flex-col">
        <p>
          បន្សំនៃ r ធាតុក្នុង n ធាតុ គឺជាការយកព្រមគ្នាម្តង r ធាតុពី n ធាតុ
          ខុសៗគ្នាដោយមិនគិតពីលំដាប់នៃការយកចេញ។
        </p>
        <BlockMath math={"C(n,r) = \\frac{n!}{r!(n-r)!}"} />
      </div>
    ),
  },

  {
    type: "example",
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <p>
              នៅក្នុងថង់មួយមានសន្លឹកកាតុង៤សន្លឹក ដែលចុះលេខ ១, ២, ៣, ៤។
              គេហូតយកកាតុង៣សន្លឹកព្រមគ្នាចេញពីក្នុងថង់ដោយចៃដន្យ។
            </p>
            <p>រកចំនួនករណីដែលអាចកេីតឡេីងទាំងអស់។</p>
          </div>
        </div>
      </div>,
    ],
    steps: [
      {
        title: "រកចំនួនករណីដែលអាចកេីតឡេីងទាំងអស់",
        content: (
          <div className="flex flex-col gap-2 items-start">
            <p>
              ដោយគេហូតយកកាតុង៣សន្លឹកព្រមគ្នាចេញពីក្នុងថង់ដោយចៃដន្យមិនគិតពីលំដាប់នៃការយកចេញគឺជាបន្សំនៃ
              ៤ យក៣ធាតុ
            </p>
            <p>នោះករណីដែលអាចកេីតឡេីងទាំងអស់គឺ</p>
            <BlockMath math={"C(4,3) = \\frac{4!}{3!(4-3)!} = 4"} />
          </div>
        ),
      },
    ],
    answer: (
      <div className="flex items-center gap-3 flex-col">
        <div className="flex items-center gap-3 flex-wrap">
          <p>ករណីដែលអាចកើតឡើងគឺ 4 ករណី</p>
        </div>
      </div>
    ),
  },

  {
    type: "example",
    question: [
      <div className="flex flex-col items-start gap-3" key="q2">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <p>
              គេជ្រេីសរេីសសិស្ស ៣នាក់ដោយចៃដន្យមកធ្វេីជាប្រធានថ្នាក់
              ក្នុងនោះមានសិស្សស្រី ៨នាក់ និង សិស្សប្រុស ១១នាក់។
            </p>
          </div>
          <div className="flex gap-5 flex-col">
            <p>ក. តេីគេអាចរៀបសិស្សបានប៉ុន្មានរបៀប?</p>
            <p>ខ. រកប្រូបាបព្រឹត្តការណ៍ដែលជ្រេីសរេីសបានសុទ្ធតែស្រី</p>
            <p>
              គ. រកប្រូបាបព្រឹត្តការណ៍ដែលជ្រេីសរេីសបានប្រុស ២នាក់ និងសិស្សស្រី
              ១នាក់
            </p>
          </div>
        </div>
      </div>,
    ],
    steps: [
      {
        title: "ក. តេីគេអាចរៀបសិស្សបានប៉ុន្មានរបៀប?",
        content: (
          <div>
            <div className="flex flex-col items-start gap-3">
              <p>
                គេជ្រេីសរេីសសិស្ស ៣នាក់ពីសិស្ស ១៩ នាក់ ដោយសិស្សម្នាក់ៗមិនដូចគ្នា{" "}
              </p>
              <p>នោះចំនួនករណីអាចគឺ</p>
            </div>
            <div className="flex items-center gap-2 justify-start flex-wrap">
              <BlockMath math={"\\Rightarrow n(s)= C(19,3) = \\frac{19!}{3!(19-3)!}"} />
              <BlockMath math={"= 969"} />
              <p>ករណី</p>
            </div>
          </div>
        ),
      },
      {
        title: "ខ. រកប្រូបាបព្រឹត្តការណ៍ដែលជ្រេីសរេីសបានសុទ្ធតែស្រី",
        content: (
          <div>
            <div className="flex flex-col items-start gap-3">
              <p>តាង B ជាព្រឹត្តការណ៍ដែលជ្រេីសរេីសបានសុទ្ធតែស្រី</p>
              <p>ដោយសិស្សស្រីមានចំនួន ៨ នាក់ហេីយគេជ្រេីសរេីស ៣ នាក់</p>
              <p>នោះចំនួនករណីស្របគឺ</p>
            </div>
            <div className="flex items-center gap-2 justify-start flex-wrap">
              <BlockMath math={"n(B) = C(8,3) = \\frac{8!}{3!(8-3)!}"} />
              <BlockMath math={"= 56"} />
            </div>
            <div className="flex items-center gap-4 flex-wrap">
              <p>នោះប្រូបាបព្រឹត្តការណ៍ B គឺ</p>
              <BlockMath math={"P(B) = \\frac{n(B)}{n(s)} = \\frac{56}{969}"} />
            </div>
          </div>
        ),
      },
      {
        title: "គ. រកប្រូបាបព្រឹត្តការណ៍ដែលជ្រេីសរេីសបានប្រុស ២នាក់ និងសិស្សស្រី ១នាក់",
        content: (
          <div>
            <div className="flex flex-col gap-3">
              <p>
                តាង C ជាព្រឹត្តការណ៍ដែលជ្រេីសរេីសបានប្រុស ២នាក់ និងសិស្សស្រី ១នាក់
              </p>
              <p>
                ដោយសិស្សស្រីមានចំនួន ៨ នាក់ហេីយគេជ្រេីសរេីស ១
                នាក់និងសិស្សប្រុសមាន ១១ នាក់ ហេីយគេជ្រេីសរេីស ២ នាក់
              </p>
              <p>នោះចំនួនករណីស្របគឺ</p>
            </div>
            <div className="flex items-center gap-2 justify-center">
              <div className="flex items-center justify-start gap-2 flex-wrap w-full">
                <BlockMath math={"n(C) = C(8,1) * C(11,2) = "} />
                <BlockMath math={" \\frac{8!}{1!(8-1)!} * \\frac{11!}{2!(11-2)!}= 440"} />
              </div>
            </div>
            <div className="flex flex-col items-start">
              <p>នោះប្រូបាបព្រឹត្តការណ៍ C គឺ</p>
              <BlockMath math={"P(C) = \\frac{n(C)}{n(s)} = \\frac{440}{969}"} />
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
          <div className="flex flex-col gap-3">
            <p>
              គេរៀបចំឆ្នោត ១៥០សន្លឹកដេីម្បីលក់ឲ្យអស់មុនពេលចេញផ្ទៀង
              ដែលក្នុងនោះសន្លឹកឆ្នោតមានរង្វាន់មានសន្លឹក៥សន្លឹក។ បុរសទិញឆ្នោត ១០
              សន្លឹក។ រកប្រូបាបដែលគ្មានត្រូវរង្វាន់
            </p>
          </div>
        ),
        options: [
          <p key="fp-q1-o1">0.7048</p>,
          <p key="fp-q1-o2">0.6500</p>,
          <p key="fp-q1-o3">0.7200</p>,
          <p key="fp-q1-o4">0.6800</p>,
        ],
        correctAnswer: 0,
      },
      {
        id: "fp-q2",
        question: (
          <div className="flex flex-col gap-3">
            <p>
              គេរៀបចំឆ្នោត ១៥០សន្លឹកដេីម្បីលក់ឲ្យអស់មុនពេលចេញផ្ទៀង
              ដែលក្នុងនោះសន្លឹកឆ្នោតមានរង្វាន់មានសន្លឹក៥សន្លឹក។ បុរសទិញឆ្នោត ១០
              សន្លឹក។ រកប្រូបាបដែលគ្មានត្រូវយ៉ាងតិចមួយរង្វាន់
            </p>
          </div>
        ),
        options: [
          <p key="fp-q2-o2">0.3050</p>,
          <p key="fp-q2-o1">0.2952</p>,
          <p key="fp-q2-o3">0.2900</p>,
          <p key="fp-q2-o4">0.3100</p>,
        ],
        correctAnswer: 1,
      },
      {
        id: "fp-q3",
        question: (
          <div className="flex flex-col gap-3">
            <p>
              គេរៀបចំឆ្នោត ១៥០សន្លឹកដេីម្បីលក់ឲ្យអស់មុនពេលចេញផ្ទៀង
              ដែលក្នុងនោះសន្លឹកឆ្នោតមានរង្វាន់មានសន្លឹក៥សន្លឹក។ បុរសទិញឆ្នោត ១០
              សន្លឹក។ រកប្រូបាបដែលគ្មានត្រូវរង្វាន់៣សន្លឹកគត់
            </p>
          </div>
        ),
        options: [
          <p key="fp-q3-o1">0.003</p>,
          <p key="fp-q3-o2">0.001</p>,
          <p key="fp-q3-o3">0.002</p>,
          <p key="fp-q3-o4">0.100</p>,
        ],
        correctAnswer: 2,
      },
    ],
  },
];

const jsonV2 = serializeTopicContentV3(ProbabilityCombination_V3);
const restoredV3 = deserializeTopicContentV3(jsonV2) as TopicContent_V3[];
const restoredV3Tree = deserializeTopicContentV3ToTree(jsonV2) as TopicContent_V3[];

const ProbabilityCombination = () => (
  <ContentRendererV3 content={ProbabilityCombination_V3} />
);

export default ProbabilityCombination;
