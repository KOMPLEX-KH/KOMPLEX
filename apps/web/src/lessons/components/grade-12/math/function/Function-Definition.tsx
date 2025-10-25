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
    title: "អនុគមន៍សនិទាន",
    content: (
      <>
        អនុគមន៍គឺជាគំនិតមួយក្នុងគណិតវិទ្យា​ដែលបង្ហាញពីទំនាក់ទំនងរវាងរវាងសំណុំទិន្នន័យ
        2
      </>
    ),
  },
  {
    type: "tip",
    title: "ដែនកំណត់",
    content: (
      <>
        <p>ជាសំណុំតម្លៃអថេរធ្វើអោយភាគបែងមានតម្លៃខុសពីសូន្យ</p>
      </>
    ),
  },
  {
    type: "example",
    question: (
      <div className="ml-2">
        រកដែនកំណត់នៃអនុគមន៍ <InlineMath math="f(x) = - \frac{1}{2x+3}" />
      </div>
    ),
    steps: [
      {
        title: "អោយភាគបែងស្មើរសូន្យ",
        content: (
          <>
            <InlineMath math="-2x-3 = 0" />
            <br />
            <InlineMath math="x = - \frac{3}{2}" />
          </>
        ),
      },
      {
        title: "ចម្លើយ",
        content: (
          <>
            <div>
              <div>
                f(x) មានដែនកំណត់កាលណា​ x​ ខុសពី​​{" "}
                <InlineMath math="-\frac{3}{2}" />
              </div>
              <div>
                <InlineMath math="D_f = \mathbb{R} \setminus \left\{ - \frac{3}{2} \right\}" />
              </div>
            </div>
          </>
        ),
      },
    ],
    answer: (
      <div>
        ដូចនេះ{" "}
        <InlineMath math="D_f = \mathbb{R} \setminus \left\{ - \frac{3}{2} \right\}" />
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
            កំំណត់ដែនកំណត់នៃអនុគមន៍ <InlineMath math="f(x) = \frac{1}{x-3}" />
          </>
        ),
        options: ["7", "-3", "0", "3"],
        correctAnswer: 3,
      },
      {
        id: "q2",
        question: (
          <>
            រកដែនកំណត់នៃអនុ​ .{" "}
            <InlineMath math="f(x) = \frac{x^2-3x+2}{x^2-4}" />
          </>
        ),
        options: ["(2,-2)", "2", "-2", "គ្មាន"],
        correctAnswer: 0,
      },
      {
        id: "q3",
        question: (
          <>
            រកដែនកំណត់នៃអនុ . <InlineMath math="f(x) = \frac{1}{x^2-3x+2}" />
          </>
        ),
        options: ["(-1,-2)", "(-1,2)", "(1,-2)", "(1,2)"],
        correctAnswer: 3,
      },
    ],
  },
  {
    type: "hint",
    content: <>ក្នុងអនុគមន៍សនិទានដែនកំណត់​គឺជាអាស៊ីមតូតឈរ</>,
  },
  {
    type: "warning",
    content: (
      <>
        កុំច្រឡំអនុគមន៍សនិទានជាមួយអនុគមន៍បន្ទាត់ទ្រេត{" "}
        <InlineMath math="f(x) = mx + b" /> ព្រោះអនុគមន៍សនិទានមាន{" "}
        <InlineMath math="m = 0" /> ប៉ុណ្ណោះ។
      </>
    ),
  },
  {
    type: "graphExplanation",
    expressions: [{ id: "1", latex: "f(x)=5", color: "#FF4136" }],
    explanation: (
      <>
        ក្រាបបង្ហាញអនុគមន៍ <InlineMath math="f(x) = 5" />{" "}
        ជាបន្ទាត់ផ្តេកកាត់អ័ក្ស y នៅចំណុច <InlineMath math="y = 5" />។
      </>
    ),
    options: {
      showGrid: true,
      expressions: true,
      xAxisLabel: "x",
      yAxisLabel: "y",
    },
  },
  {
    type: "definition",
    title: "អនុគមន៍កើន",
    content: (
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span>✧</span>
          <span>
            <InlineMath math="f" /> ជាអនុគមន៍កើនចន្លោះ <InlineMath math="I" />{" "}
            លុះត្រាតែ
            <InlineMath math="f'(x) > 0" /> គ្រប់ <InlineMath math="x \in I" />
          </span>
        </div>
        <div>
          <span>
            ✧ លក្ខណ: ៖ បើ <InlineMath math="\alpha, \beta \in I" /> ដែល{" "}
            <InlineMath math="\alpha > \beta" /> នាំឱ្យ{" "}
            <InlineMath math="f(\alpha) < f(\beta)" /> ។
          </span>
        </div>
      </div>
    ),
  },
  {
    type: "tip",
    title: "អនុគមន៍ចុះ",
    content: (
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span>✧</span>
          <span>
            <InlineMath math="f" /> ជាអនុគមន៍ចុះចន្លោះ <InlineMath math="I" />{" "}
            លុះត្រា
            <InlineMath math="f'(x) < 0" /> គ្រប់ <InlineMath math="x \in I" />
          </span>
        </div>
        <div>
          <span>
            ✧ សកម្មភាព៖ បើ <InlineMath math="\alpha, \beta \in I" /> ដែល{" "}
            <InlineMath math="\alpha > \beta" /> នាំឱ្យ{" "}
            <InlineMath math="f(\alpha) > f(\beta)" /> ។
          </span>
        </div>
      </div>
    ),
  },
  {
    type: "definition",
    title: "អតិបរមាធៀប",
    content: (
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span>✧</span>
          <span>
            អនុគមន៍ <InlineMath math="f" /> មានអតិបរមាធៀបត្រង់{" "}
            <InlineMath math="x = x_0" /> ​កាលណា{" "}
            <InlineMath math="\begin{cases} f'(x_0) = 0 \\ f''(x_0) < 0 \end{cases}" />
          </span>
        </div>
        <div>
          <span>
            ✧ <InlineMath math="f(x_0) = m" /> ជាតម្លៃអតិបរមាធៀប
          </span>
        </div>
      </div>
    ),
  },
  {
    type: "tip",
    title: "អប្បបរមាធៀប",
    content: (
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span>✧</span>
          <span>
            អនុគមន៍ <InlineMath math="f" /> មានអប្បរមាធៀបត្រង់{" "}
            <InlineMath math="x = x_0" /> ​កាលណា{" "}
            <InlineMath math="\begin{cases} f'(x_0) = 0 \\ f''(x_0) > 0 \end{cases}" />
          </span>
        </div>
        <div>
          <span>
            ✧ <InlineMath math="f(x_0) = m" /> ជាតម្លៃអប្បរមាធៀប
          </span>
        </div>
      </div>
    ),
  },
];

// Stage 2: Serialized JSON
const jsonV3 = serializeTopicContentV3(content);

// Stage 3: Deserialized V3 with live React nodes
const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

const AnukomSanitean = () => {
  return <ContentRendererV3 content={restoredContent} />;
};

export default AnukomSanitean;