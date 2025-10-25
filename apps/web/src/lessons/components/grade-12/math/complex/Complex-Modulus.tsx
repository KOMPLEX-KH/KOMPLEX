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
    title: "ម៉ូឌុលនៃចំនួនកុំផ្លិច",
    content: (
      <div>
        ម៉ូឌុលនៃចំនួនកុំផ្លិច​ <InlineMath math="z = a + bi" /> គឺ{" "}
        <InlineMath math="|z| = \sqrt{a^2 + b^2}" />
      </div>
    ),
  },
  {
    type: "tip",
    title: "ស្វ័យគុណនៃ i",
    content: (
      <div>
        គ្រប់​ k ជាចំនួនគត់ គេមានស្វ័យគុណនៃ​ i គឺ <br />
        <InlineMath math="i^{4k} = 1" /> <br />
        <InlineMath math="i^{4k+1} = i" /> <br />
        <InlineMath math="i^{4k+2}= -1" /> <br />
        <InlineMath math="i^{4k+3} = -i" />
      </div>
    ),
  },
  {
    type: "definition",
    title: "អាគុយម៉ង់",
    content: (
      <div>
        អាគុយម៉ង់នៃចំនួនកុំផ្លិច គឺជាមុំ <InlineMath math="\theta" />{" "}
        ដែលផ្គុំដោយវ៉ិចទ័រ <InlineMath math="\overrightarrow{OM}" /> និង(ox)
        <br />
        <br />
      </div>
    ),
  },
  {
    type: "imageExplanation",
    imageAlt: "ក្រាប",
    explanation: (
      <div>
        ក្នុងក្រាបខាងឆ្វេងនេះ ៖
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>ចំណុច M តំណាងឱ្យចំនួនកុំផ្លិច z = a + bi</li>
          <li>r = |z| គឺជាម៉ូឌុល (ចម្ងាយពីចំណុចកណ្តាល)</li>
          <li>θ = arg(z) គឺជាអាគុយម៉ង់ (មុំរវាង r ជាមួយអ័ក្ស ox)</li>
          <li>
            គេសរសេរ <InlineMath math="\arg(z) = \theta" /> ដែល{" "}
            <InlineMath math="\cos(\theta) = \frac{a}{r}" /> និង​{" "}
            <InlineMath math="sin(\theta) = \frac{b}{r}" />
          </li>
        </ul>
      </div>
    ),
    src: "/argument.png",
  },
];

// Stage 2: Serialized JSON
const jsonV3 = serializeTopicContentV3(content);

// Stage 3: Deserialized V3 with live React nodes (renderable)
const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

const ComplexModulus = () => {
  return <ContentRendererV3 content={restoredContent} />;
};

export default ComplexModulus;
