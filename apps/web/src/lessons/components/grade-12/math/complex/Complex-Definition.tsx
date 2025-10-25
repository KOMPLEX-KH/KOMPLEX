"use client";

import React from "react";
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  serializeTopicContentV3,
  deserializeTopicContentV3,
} from "@/components/pages/docs/utils/ContentSerializerV2";
import { BlockMath, InlineMath } from "react-katex";

// Stage 1: Original authoring shape (TopicContent_V3)
const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "តើកុំផ្លិចជាអ្វី?",
    content: "ចំនួនកុំផ្លិច គឺជាចំនួនដែលមានរាង a + bi ដែល a និង b ជាចំនួនពិត ",
  },
  {
    type: "tip",
    title: "ចំណាំ !",
    content: (
      <div>
        i ហៅថាតម្លៃនិមិត្ត ដែល <InlineMath math="i^2 = -1" /> និង{" "}
        <InlineMath math="i = \sqrt{-1}" />
        <br />
        សំណុំចំនួនកុំផ្លិចតាងដោយ​​ C
        <br />
        a ហៅថាផ្នែកពិតដែលគេកំណត់តាងដោយ​ <InlineMath math="Re(z) = a" />
        <br />
        b ហៅថាផ្នែកនិមិត្តដែលគេកំណត់តាងដោយ​ <InlineMath math="Im(z) = b" />
      </div>
    ),
  },
  {
    type: "definition",
    title: "កុំផ្លិចឆ្លាស់ជាអ្វី?",
    content: (
      <div>
        កុំផ្លិចឆ្លាស់​នៃកុំផ្លិចជាចំនួនកុំផ្លិចដែលតាងដោយ :{" "}
        <InlineMath math="\bar{z} = a - bi" />
      </div>
    ),
  },
  {
    type: "tip",
    title: "ទម្រង់នៃចំនួនកុំផ្លិចឆ្លាស់",
    content: (
      <div className="text-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="flex justify-start">
            <BlockMath math="\overline{(z_1 + z_2)} = \overline{z_1} + \overline{z_2}" />
          </div>
          <div className="flex justify-start">
            <BlockMath math="\overline{(z_1 - z_2)} = \overline{z_1} - \overline{z_2}" />
          </div>
          <div className="flex justify-start">
            <BlockMath math="\overline{(z_1 \cdot z_2)} = \overline{z_1} \cdot \overline{z_2}" />
          </div>
          <div className="flex justify-start">
            <BlockMath math="\overline{\left(\frac{z_1}{z_2}\right)} = \frac{\overline{z_1}}{\overline{z_2}}" />
          </div>
        </div>
      </div>
    ),
  },
  {
    type: "definition",
    title: "កុំផ្លិចពីរស្មើគ្នា",
    content:
      "កាលណាកុំផ្លិចពីរស្មើគ្នាគេបានផ្នែកពិតនៃកុំផ្លិចទាំងពីរស្មើគ្នា និងផ្នែកនិមិត្តនៃកុំផ្លិចទាំងពីរស្មើគ្នា",
  },
  {
    type: "tip",
    title: "ជាទូទៅបើ",
    content: (
      <div className="flex justify-start text-sm gap-2">
        <BlockMath
          math={`
      A + i.B = a + i.b \\Leftrightarrow \\begin{cases}
      A = a \\\\
      B = b
      \\end{cases} \\text{ដែល} a, b, A, B \\in \\mathbb{R}
      `}
        />
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div className="flex flex-col gap-2">
        <div className="flex flex-row text-[14px] gap-2">
          <div>
            គេមានកុំផ្លិច <InlineMath math="z = (3a + 1) + i(2b - 5)" />{" "}
          </div>
          <div>
            និង <InlineMath math="w = 7 + 3i" />{" "}
          </div>
        </div>
        <div>ដែល ​a និង b ជាចំនួនពិត​​ ។</div>
        <div>
          កំណត់តម្លៃ a និង b ដើម្បីឲ្យ <InlineMath math="z = w" />
        </div>
      </div>
    ),
    steps: [
      {
        title: "កំណត់ផ្នែកពិត និងផ្នែកនិមិត្ត",
        content: (
          <div>
            ចំពោះ​ <InlineMath math="z = (3a + 1) + i(2b - 5)" />
            <br />
            ផ្នែកពិតគឺ <InlineMath math="3a + 1" />
            <br />
            ផ្នែកនិមិត្តគឺ <InlineMath math="2b - 5" />
            <br />
            <br />
            ចំពោះ​ <InlineMath math="w = 7 + 3i" />
            <br />
            ផ្នែកពិតគឺ <InlineMath math="7" />
            <br />
            ផ្នែកនិមិត្តគឺ <InlineMath math="3" />
            <br />
            <br />
          </div>
        ),
      },
      {
        title: "អោយកុំផ្លិចពីរស្មើគ្នា",
        content: (
          <div className="flex justify-start gap-2">
            <BlockMath
              math={`
          \\text{ ដោយ } z = w \\text{ គេបាន}
                  \\begin{cases}
                  3a + 1 = 7 \\\\
                  2b - 5 = 3 \\\\
                  \\end{cases}
                      `}
            />
          </div>
        ),
      },
      {
        title: "ទាញរកតម្លៃនៃ a និង b",
        content: (
          <div className="flex justify-start text-sm gap-1">
            <BlockMath
              math={`
                  \\begin{cases}
                  3a + 1 = 7 \\\\
                  2b - 5 = 3 \\\\
                  \\end{cases}
                  \\Leftrightarrow
                  \\begin{cases}
                  3a = 6 \\Leftrightarrow a = 2 \\\\
                  2b = 8 \\Leftrightarrow b = 4
                  \\end{cases}
                      `}
            />
          </div>
        ),
      },
    ],
    answer: (
      <div>
        ដូច្នេះ <InlineMath math="a = 2" /> និង <InlineMath math="b = 4" />
      </div>
    ),
  },
];

// Stage 2: Serialized JSON
const jsonV3 = serializeTopicContentV3(content);

// Stage 3: Deserialized V3 with live React nodes (renderable)
const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

const ComplexDefinition = () => {
  return <ContentRendererV3 content={restoredContent} />;
};

export default ComplexDefinition;
