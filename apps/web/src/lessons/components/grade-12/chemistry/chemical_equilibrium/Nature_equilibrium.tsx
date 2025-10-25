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


const TOPIC_CONTENT_V3: TopicContent_V3[] = [
  {
    type: "definition",
    title: "១. ប្រតិកម្មទៅមក",
    content: (
      <div>
        ប្រតិកម្មទៅមកគឺជាប្រតិកម្មដែលក្នុងនោះអង្គធាតុកកើត (ផលិតផល)
        អាចមានប្រតិកម្មជាមួយគ្នាបង្កើតអង្គធាតុប្រតិករវិញ ។
      </div>
    ),
  },
  {
    type: "tip",
    title: "ជាទូទៅ",
    content: (
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <p>
            ប្រតិកម្មចំហេះម៉ាញេស្យូមក្នុងខ្យល់បង្កើតបានម៉ាញេស្យូមអុកសុីត​ ។
          </p>
          <InlineMath math="2Mg(s) + O_{2} (g) \rightarrow 2MgO (s)" />
          <p>
            ក្នុងប្រតិកម្មនេះ ម៉ាញេស្យូមអុកសុីតមិនអាចប្រតិកម្មជាមួយគ្នាបង្កើតជា
            ម៉ាញេស្យូមនិងអុកស៊ីសែនវិញទេ ។
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p>
            នៅពេលដុតកម្តៅ បារត (II) អុកសុីត បំបែកជា បារត និងឧស្ម័នអុកស៊ីសែន ។
          </p>
          <InlineMath math="2HgO (s) \rightarrow 2Hg (l) + O_{2} (g) (1)" />
          <p>
            ក្នុងពេលប្រតិកម្មបំបែកកំពុងប្រព្រឹត្តទៅ បារតមានអំពើជាមួយអុកស៊ីសែន
            ​ឲផលជាបារត (II) អុកសុីតវិញ
          </p>
          <InlineMath math="2Hg (l) + O_{2} \rightarrow 2HgO (s)" />
          <p>ប្រតិកម្មបែបនេះ ហៅថាប្រតិកម្មទៅមកដែលអាចសរសេរជា</p>
          <InlineMath math="2HgO (s) \xrightleftharpoons[(2)]{(1)} 2Hg (l) + O_{2} (g)" />
        </div>
      </div>
    ),
  },
  {
    type: "definition",
    title: "២. លំនឹងគីមី",
    content: (
      <div>
        លំនឹងគីមីជាច្រើន ជាប្រតិកម្មទៅមកនៅក្រោមលក្ខខណ្ឌសីតុណ្ហភាព
        និងកំហាប់ប្រក្រតី ។ ប្រតិកម្មទាំងនោះទៅដល់ស្ថានភាពលំនឹង
        បើគ្មានសារធាតុមួយត្រូវបានរំដោះចេញពីប្រព័ន្ធគីមី ។
      </div>
    ),
  },
  {
    type: "tip",
    title: "ជាទូទៅ",
    content: (
      <div className="flex flex-col gap-4">
        <p>
          ករណីខ្លះ ប្រតិកម្មតាមទិសបណ្តោយប្រព្រឹត្តទៅស្ទើរទាំងស្រុង ទើបមានប្រតិកម្មតាមទិសច្រាសកើតឡើង ។ ដូចនេះនៅពេលមានលំនឹងគីមី កំហាប់អង្គធាតុកើតធំជាង អង្គធាតុប្រតិករ គេថាលំនឹងទោរទៅខាងស្តាំ ជាប្រតិកម្មនាំមុខ ។
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          <p>ឧទាហរណ៍. </p>
          <span className="text-[14px]">
            <InlineMath math="2SO_{2} (g) + O_{2} (g) \rightleftharpoons 2SO_{3} (g)" />
          </span>
        </div>
        <p>
          ករណីខ្លះ ប្រតិកម្មតាមទិសបណ្តោយប្រព្រឹត្តទៅដោយលំបាក និងប្រតិកម្មតាមទិសច្រាសប្រព្រឹត្តទៅងាយស្រួល ។ ដូចនេះនៅពេលមានលំនឹងគីមី កំហាប់អង្គធាតុប្រតិករធំជាងអង្គធាតុកើត គេថា លំនឹងទោរទៅខាងឆ្វេង ជាប្រតិកម្មនាំមុខ ។
        </p>
        <div className="flex items-center gap-2 flex-wrap">
          <p>ឧទាហរណ៍. </p>
          <span className="text-[14px]">
            <InlineMath math="H_{2}CO_{3} (aq) + H_{2}O (l) \rightleftharpoons H_{3}O^{+} (aq) + HCO_{3}^{-} (aq)" />
          </span>
        </div>
      </div>
    ),
  },
  {
    type: "definition",
    title: "៣. កន្សោមថេរលំនឹង",
    content: (
      <div>

      </div>
    ),
  },
  {
    type: "tip",
    title: "កន្សោមថេរលំនឹង",
    content: (
      <div>
          <div className="flex items-start gap-3 flex-col">
              <p>
                ឧបមាថា គេមានអង្គធាតុ A និង B មានប្រតិកម្មនឹងគ្នា
                បង្កេីតបានជាអង្គធាតុ C និង​ D ហេីយអង្គធាតុ C និង D
                មានប្រតិកម្មជាមួយគ្នាបង្កេីតបានជាអង្គធាតុ A និង​ B វិញ ។
                នៅពេលលំនឹងគីមី គេបានសមីការតុល្យការ :
              </p>
              <InlineMath math="aA + bB \rightleftharpoons cC + dD" />
              <div className="flex items-center flex-wrap gap-3">
                <p>គេបានកន្សោមថេរលំនឹង</p>
                <div className="flex items-center gap-2">
                  <InlineMath math="K = " />
                  <div className="text-[17px]">
                    <InlineMath math="\frac{[C]^{c} \cdot [D]^{d}}{[A]^{a} \cdot [B]^{b}} " />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <p>
                  ថេរ K ឬថេរលំនឹង K ជាទំហំគ្មានខ្នាត ឯកំហាប់ប្រភេទគីមី គិតជា{" "}
                  <InlineMath math="mol.L^{-1}" /> ។
                </p>
              </div>
              <p>ថេរ K មិនអាស្រ័យនឹងកំហាប់ប្រភេទគីមីទេ តែអាស្រ័យនឹងសីតុណ្ហភាព ។</p>
            </div>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div className="flex flex-col items-start gap-3" key="q1">
        <p>គេមានប្រតិកម្មមួយស្ថិតក្នុងភាពលំនឹង :</p>
        <span className="text-[13px]">
          <InlineMath math="2SO_{2} (g) + O_{2} (g) \rightleftharpoons 2SO_{3} (g)" />{" "}
        </span>

        <p>ចូរសរសេរកន្សោមថេរលំនឹងនៃប្រតិកម្មខាងលេី ។</p>
    </div>
    ),
    steps: [
      {
        title: "កន្សោមថេរលំនឹង",
        content: (
          <>
            <div className="flex flex-col items-start gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <p>កន្សោមថេរលំនឹងនៃប្រតិកម្ម</p>
                <span className="text-[13px]">
                  <InlineMath math="2SO_{2} (g) + O_{2} (g) \rightleftharpoons 2SO_{3} (g)" />{" "}
                </span>
                <p>គឺ :</p>
              </div>
              <div className="flex items-center gap-2">
                <InlineMath math="K = " />
                <div className="text-[17px]">
                  <InlineMath math="\frac{[SO_{3}^{2}]}{[SO_{2}^{2} \cdot [O_{2}]]} " />
                </div>
              </div>
            </div>
          </>
        ),
      },
    ],
  },
  {
    type: "example",
    question: (
      <div className="flex flex-col items-start gap-3" key="q2">
        <div className="flex items-center gap-2 flex-wrap">
          <p>ល្បាយនៃ </p>
          <span className="text-[13px]">
            <InlineMath math="H_{2} 0.5 mol" />
          </span>
          <p>និង </p>
          <span className="text-[13px]">
            <InlineMath math="I_{2} 0.5 mol" />
          </span>
          <p>
            ត្រូវបានដាក់ក្នុងកែវដែកថែបដែល គ្មានច្រេះចំនុះ 1L នៅសីតុណ្ហភាព 430 °C
            ។ ថេរលំនឹងសម្រាប់ប្រតិកម្មគឺ 54.3
          </p>
        </div>
        <InlineMath math="H_{2} (g) + I_{2} (g) \rightleftharpoons 2HI" />
        <div className="flex items-center gap-2 flex-wrap">
          <p>ចូរគណនាកំហាប់នៃ </p>
          <span className="text-[13px]">
            <InlineMath math="H_{2} , I_{2}" />
          </span>
          <p>និង </p>
          <span className="text-[13px]">
            <InlineMath math="HI" />
          </span>
          <p>នៅពេលលំនឹង ។ </p>
        </div>
      </div>
    ),
    steps: [
      {
        title: "",
        content: (
          <>
            <div className="flex flex-col items-start gap-3" key={"q1"}>
              <div className="flex items-center gap-10 sm:gap-15 ">
                <p>សមីការ</p>
                <span className="text-[13px]">
                  <InlineMath math="H_{2} + I_{2} \rightleftharpoons 2HI" />
                </span>
              </div>
              <div className="flex items-center gap-6 sm:gap-10 ">
                <p>កំហាប់ដេីម</p>
                <div className="flex items-center gap-5">
                  <span>0.5</span>
                  <span>0.5</span>
                  <span>0</span>
                </div>
              </div>
              <div className="flex items-center gap-5 ">
                <p>កំហាប់ប្រែប្រួល</p>
                <div className="flex items-center gap-5">
                  <InlineMath math="-x" />
                  <InlineMath math="-x" />
                  <InlineMath math="+2x" />
                </div>
              </div>
              <div className="flex items-center gap-1 sm:gap-2 ">
                <p>កំហាប់លំនឹង</p>
                <div className="flex items-center gap-2 sm:gap-5 text-xs">
                  <InlineMath math="(0.5 -x)" />
                  <InlineMath math="(0.5 -x)" />
                  <InlineMath math="2x" />
                </div>
              </div>
            </div>
          </>
        ),
      },
      {
        title: "កន្សោមថេរលំនឹង",
        content: (
          <>
            <div className="flex flex-col items-start gap-3" key={"q2"}>
              <div className="flex items-center flex-wrap gap-3">
                <p>កន្សោមថេរលំនឹងគឺ :</p>
                <div className="flex items-center gap-2">
                  <InlineMath math="K = " />
                  <div className="text-[14px]">
                    <InlineMath math="\frac{[SO_{3}^{2}]}{[SO_{2}^{2} \cdot [O_{2}]]} " />
                  </div>
                </div>
              </div>
              <p>ដោយជំនួសកំហាប់ចូលយេីងបាន </p>
              <div className="flex items-center flex-wrap gap-2">
                <InlineMath math="54.3 = " />
                <div className="text-[15px]">
                  <InlineMath math="\frac{(2x)^{2}}{(0.5-x)(0.5-x)} " />
                </div>
                <div className="text-[15px]">
                  <InlineMath math="= \frac{(2x)^{2}}{(0.5-x)^{2}} " />
                </div>
              </div>
              <p>បំពាក់រឺសការ៉េលេីអង្គទាំងសងខាងយេីងបាន </p>
              <div className="flex items-center gap-2 flex-wrap">
                <InlineMath math="7.37 " />
                <div className="text-[17px]">
                  <InlineMath math="= \frac{2x}{0.5-x} " />
                </div>
                <InlineMath math="\Leftrightarrow x = 0.393 M" />
              </div>
            </div>
          </>
        ),
      },
      {
        title: "",
        content: (
          <>
            <div className="flex flex-col items-start gap-3" key={"q3"}>
              <p>នៅលំនឹង កំហាប់របស់ប្រភេទគីមីគឺ </p>
              <div className="flex items-center gap-2 flex-wrap text-[13px]">
                <InlineMath math="[H_{2}] = ( 0.5 - 0.393) " />
                <InlineMath math="= 0.107 M " />
              </div>
              <div className="flex items-center gap-2 flex-wrap text-[13px]">
                <InlineMath math="[I_{2}] = ( 0.5 - 0.393) " />
                <InlineMath math="= 0.107 M " />
              </div>
              <div className="flex items-center gap-2 flex-wrap text-[13px]">
                <InlineMath math="[H_{2}] = ( 2 \cdot 0.393 ) " />
                <InlineMath math="= 0.786 M " />
              </div>
            </div>
          </>
        ),
      },
    ],
    answer: [
      <div className="flex flex-col items-start gap-4" key="q1">
        <p>កំហាប់នៅពេលមានលំនឹងនៃ </p>
        <div className="flex flex-col items-start sm:items-center sm:justify-center justify-start w-full text-[13px]">
          <InlineMath math="[H_{2}] = 0.107 M" />
          <InlineMath math="[I_{2}] = 0.107 M " />
          <InlineMath math="[H_{2}] = 0.786 M " />
        </div>
      </div>,
    ],
  },
];

// Stage 2: Serialized JSON
const jsonV2 = serializeTopicContentV3(TOPIC_CONTENT_V3);

// Stage 3a: Deserialized V3 with live React nodes (renderable)
const restoredV3 = deserializeTopicContentV3(jsonV2) as TopicContent_V3[];

// Stage 3b: Deserialized V3 raw node tree (no React elements) for inspection
const restoredV3Tree = deserializeTopicContentV3ToTree(jsonV2) as TopicContent_V3[];

// Helper: visualize type sequence
const originalTypes = TOPIC_CONTENT_V3.map((i) => i.type);


const NatureEquilibriumV3 = () => {
  return <ContentRendererV3 content={TOPIC_CONTENT_V3} />;
};

export default NatureEquilibriumV3;
