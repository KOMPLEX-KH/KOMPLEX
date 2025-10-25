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
    title: "សមីការដឺក្រេទី២នៃកុំផ្លិចជាអ្វី?",
    content: "សមីការដឺក្រេទី២នៃកុំផ្លិច គឺជាសមីការដឺក្រេទី២ដែលមានមេគុណជាកុំផ្លិច និងមានចំនួនជាកុំផ្លិចជាមួយនឹងមេគុណជាកុំផ្លិច",
  },
  {
    type: "tip",
    title: "ជាទូទៅ",
    content: (
      <div className="flex flex-col items-start text-xl gap-x-2">
        <div className="flex flex-row items-center gap-x-2.5">
          <p>សមីការមានរាង</p>
          <div>
            <InlineMath math="az^2 + bz + c = 0" />
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-2.5">
          <p>ដែល</p>
          <div>
            <InlineMath math="a, b, c" /> ជាចំនួនពិត និង <InlineMath math="z" />{" "}
            ជាកុំផ្លិច
          </div>
        </div>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div>
        បើ <InlineMath math="\Delta = b^2 - 4ac" /> ជាការេប្រាកដ
        យើងត្រូវពិនិត្យមើលករណីដូចខាងក្រោម
      </div>
    ),
    steps: [
      {
        title: (
          <div>
            ករណី <InlineMath math="\Delta > 0" />
          </div>
        ),
        content: (
          <div className="text-base">
            សមីការមានឬស 2 គឺ{" "}
            <div className="flex flex-row items-center gap-x-2">
              <div>
                <InlineMath math="z_1 = \frac{-b + \sqrt{\Delta}}{2a}" />
              </div>
              <div>
                <InlineMath math="z_2 = \frac{-b - \sqrt{\Delta}}{2a}" />
              </div>
            </div>
          </div>
        ),
      },
      {
        title: (
          <div>
            ករណី <InlineMath math="\Delta < 0" />
          </div>
        ),
        content: (
          <div className="text-base">
            សមីការមានឬស 2 គឺ{" "}
            <div className="flex flex-row items-center gap-x-2">
              <div>
                <InlineMath math="z_1 = \frac{-b + i\sqrt{|\Delta|}}{2a}" />
              </div>
              <div>
                <InlineMath math="z_2 = \frac{-b - i\sqrt{|\Delta|}}{2a}" />
              </div>
            </div>
            <div className="text-sm -500">
              ដែល <InlineMath math="z_1" /> និង <InlineMath math="z_2" />{" "}
              ជាកុំផ្លិចឆ្លាស់
            </div>
          </div>
        ),
      },
      {
        title: (
          <div>
            ករណី <InlineMath math="\Delta = 0" />
          </div>
        ),
        content: (
          <div className="text-base">
            សមីការមានឬសឌុប គឺ <InlineMath math="z_1 = z_2 = \frac{-b}{2a}" />{" "}
            <br />
          </div>
        ),
      },
    ],
  },
  {
    type: "tip",
    title: "តើគេត្រូវដោះស្រាយបែបណា ?",
    content: "លំហាត់បែបនេះវិធីដោះស្រាយគឺដូចតែសមីការដឺក្រេទី2តែប៉ុណ្ណោះ",
  },
  {
    type: "example",
    question: (
      <div className="text-lg ml-2">
        គេមានសមីការ <InlineMath math="z^2 + 4z + 16 = 0" /> រកឬសនៃសមីការនេះ
      </div>
    ),
    steps: [
      {
        title: (
          <div>
            រក <InlineMath math="\Delta" />​ របស់សមីការតាមរូបមន្ត{" "}
            <InlineMath math="(\Delta = b^2 - 4ac)" />{" "}
            <div>ដែលយើងឃើញថា a = 1, b = 4, c = 16</div>
          </div>
        ),
        content: (
          <div className="text-base flex flex-col gap-y-2">
            <div>
              តាមរូបមន្ត <InlineMath math="\Delta = b^2 - 4ac" />
            </div>
            <div>
              <InlineMath math="\Delta = 4^2 -4 \cdot(1\cdot16) = 16 - 64 = -48 > 0" />
            </div>
            <div>
              នោះ{" "}
              <InlineMath math="\sqrt{\Delta} = \sqrt{|-48|} = \pm 4i\sqrt{3}" />
            </div>
          </div>
        ),
      },
      {
        title: "រកឬសនៃសមីការ",
        content: (
          <div className="text-base flex flex-col gap-y-2">
            <div>
              តាមរូបមន្ត{" "}
              <InlineMath math="z = \frac{-b \pm \sqrt{|\Delta|}}{2a}" />
            </div>
            <div>
              គេបាន{" "}
              <InlineMath math="z_1 = \frac{-4 + 4i\sqrt{3}}{2} = -2 + 2i\sqrt{3}" />
            </div>
            <div>
              និង{" "}
              <InlineMath math="z_2 = \frac{-4 - 4i\sqrt{3}}{2} = -2 - 2i\sqrt{3}" />
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="flex flex-row items-center gap-x-2">
        <div>
          <InlineMath math="z_1 = -2 + 2i\sqrt{3}" />
        </div>
        <div>
          <InlineMath math="z_2 = -2 - 2i\sqrt{3}" />
        </div>
      </div>
    ),
  },
  {
    type: "warning",
    content: "គប្បីសិក្សាឡើងវិញនូវវិធីដោះស្រាយសមីការដឺក្រេទី2 ក្នុងករណីសិស្សមិនទាន់ចេះឬមិនទាន់យល់ច្បាស់",
  },
];

// Stage 2: Serialized JSON
const jsonV3 = serializeTopicContentV3(content);

// Stage 3: Deserialized V3 with live React nodes
const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

const QuadraticEquation = () => {
  return <ContentRendererV3 content={restoredContent} />;
};

export default QuadraticEquation;