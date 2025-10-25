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
    title: "ប្រមាណវិធីបូក និង ដកចំនួនកុំផ្លិច",
    content:
      "​ការបូក​ ដក ចំនួនកុំផ្លិចគឺត្រូវធ្វើប្រមាណវិធី​តាមផ្នែកពិតជាមួយផ្នែកពិត​ ផ្នែកនិមិត្តជាមួយផ្នែកនិមិត្ត ",
  },
  {
    type: "tip",
    title: (
      <div>
        <div className="text-sm">
          បើ <InlineMath math="z_1 = a + bi" /> និង{" "}
          <InlineMath math="z_2 = c + di" /> នោះគេបាន
        </div>
      </div>
    ),
    content: (
      <div>
        <div className="flex flex-col">
          <div>
            <InlineMath math="z_1 + z_2 = (a + c) + (b + d)i" />
          </div>
          <div className="flex flex-row items-center gap-x-2.5">
            <div>
              <InlineMath math="z_1 - z_2 = (a - c) + (b - d)i" />
            </div>
            <div className="text-xs text-gray-500"> a, b, c, d ជាចំនួនពិត</div>
          </div>
        </div>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div className="flex flex-col ">
        <div className="flex flex-row justify-start items-center gap-2">
          <div>គេមាន</div>
          <div>
            <InlineMath math="z_1 = 3 + 4i" />{" "}
          </div>
          និង{" "}
          <div>
            {" "}
            <InlineMath math="z_2 = 2 - 3i" />
          </div>
        </div>

        <div className="flex flex-row justify-start items-center gap-2">
          <div>គណនា</div>
          <InlineMath math="z_1 + z_2 ," /> , <InlineMath math="z_1 - z_2" />
        </div>
      </div>
    ),
    steps: [
      {
        title: "ពិនិត្យមើលទម្រង់",
        content: (
          <div>
            ចំពោះ <InlineMath math="z_1 = 3 + 4i" />
            <br />
            ផ្នែកពិត​ : គឺ​ 3<br />
            ផ្នែកនិមិត្ត​ :គឺ 4i
            <br />
            <br />
            ចំពោះ <InlineMath math="z_2 = 2 - 3i" />
            <br />
            ផ្នែកពិត​ : គឺ​ 2<br />
            ផ្នែកនិមិត្ត​ :គឺ -3i
            <br />
          </div>
        ),
      },
      {
        title: "រៀបផ្នែកពិតជាមួយផ្នែកពិត និងផ្នែកនិមិត្តជាមួយផ្នែកនិមិត្ត",
        content: (
          <div>
            <InlineMath math="z_1 + z_2 = (3 + 2) + (4 - 3)i" />
            <br />
            <InlineMath math="z_1 - z_2 = (3 - 2) + [4 -(-3)]i " />
            <br />
            <InlineMath math="        = (3 - 2) + (4 +3)i " />
            <br />
          </div>
        ),
      },
      {
        title: "គណនាផ្នែកពិតជាមួយផ្នែកពិត ហើយផ្នែកនិមិត្តជាមួយផ្នែកនិមិត្ត",
        content: (
          <div>
            <InlineMath math="z_1 + z_2 = (3 + 2) + (4 - 3)i " />
            <br />
            <div>= 5 + i</div>
            <InlineMath math="z_1 - z_2 = (3 - 2) + (4 + 3)i" />
            <br />
            <div>= 1 + 7i</div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="flex flex-col">
        ដូច្នេះ{" "}
        <div>
          <InlineMath math="z_1 + z_2 = 5 + i" /> ,{" "}
          <InlineMath math="z_1 - z_2 = 1 + 7i" />
        </div>
      </div>
    ),
  },
  {
    type: "exercise",
    questions: [
      {
        id: "q1",
        question: "រកកុំផ្លិចឆ្នាស់នៃ z = 2-7i",
        options: ["-2-7i", "2+7i", "-2+7i", "មិនមាន"],
        correctAnswer: 1,
      },
      {
        id: "q2",
        question: "រកកុំផ្លិចឆ្នាស់នៃ z = -4+2i",
        options: ["-4-2i", "4+2i", "4-2i", "មិនមាន"],
        correctAnswer: 0,
      },
      {
        id: "q3",
        question: (
          <div className="flex flex-col ">
            <div className="flex flex-row justify-start items-center gap-2 ">
              <div>គេមាន</div>
              <div>
                <InlineMath math="z_1 = 9 -7i" />{" "}
              </div>
              និង{" "}
              <div>
                {" "}
                <InlineMath math="z_2 = -3 +2i" />
              </div>
            </div>

            <div className="flex flex-row justify-start items-center gap-2">
              <div>គណនា</div>
              <InlineMath math="z_1 + z_2 ," /> ,{" "}
              <InlineMath math="z_1 - z_2" />
            </div>
          </div>
        ),
        options: [
          "(6+5i),(12-9i)",
          "(6-5i),(12+9i)",
          "(6+5i),(12+9i)",
          "(6-5i),(12-9i)",
        ],
        correctAnswer: 2,
      },
      {
        id: "q4",
        question: (
          <div className="flex flex-col ">
            <div className="flex flex-row justify-start items-center gap-2 ">
              <div>គេមាន</div>
              <div>
                <InlineMath math="z_1 = 4 + 2i" />{" "}
              </div>
              និង{" "}
              <div>
                {" "}
                <InlineMath math="z_2 = 3 - 2i" />
              </div>
            </div>

            <div className="flex flex-row justify-start items-center gap-2">
              <div>គណនា</div>
              <InlineMath math="z_1 + z_2" /> , <InlineMath math="z_1 - z_2" />
            </div>
          </div>
        ),
        options: ["(7+0i),(1+4i)", "(7+0i),(1-4i)", "(7),(1-4i)", "មិនមាន"],
        correctAnswer: 0,
      },
    ],
  },
];

// Stage 2: Serialized JSON
const jsonV3 = serializeTopicContentV3(content);

// Stage 3: Deserialized V3 with live React nodes (renderable)
const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

const ComplexOperations = () => {
  return <ContentRendererV3 content={restoredContent} />;
};

export default ComplexOperations;
