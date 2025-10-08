import React from "react";

import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { HintBox } from "@/components/pages/docs/boxes/HintBox";
import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { WarningBox } from "@/components/pages/docs/boxes/WarningBox";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import { div } from "three/tsl";

const FirstTopicContent: TopicContent = {
  definition: {
    title: "១. ស្វ័យអុីយ៉ុងកម្ម ឬអូតូប្រូតូលីសនៃទឹក",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <ul className="list-disc pl-5 flex flex-col items-start gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <li>
                ម៉ូលេគុលទឹកមួយបោះបង់ប្រូតុងផ្តល់ទៅទឹកមួយទៀត ហៅថាអុីយ៉ុងកម្មនៃទឹក
                ឬអូតូប្រូតូលីសនៃទឹក។
              </li>
              <span className="text-[13px]">
                <InlineMath math="H_{2}O (l) + H_{2}O (l) \rightleftharpoons H_{3}O^{+} (aq) + OH^{-} (aq)" />
              </span>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <p>នៅសីតុណ្ហភាព (25 °C) ទឹកសុទ្ធមាន pH = 7 និងមានកំហាប់</p>
              <span className="text-[13px]">
                <InlineMath math="[H_{3}O^{+}] = [OH^{-}] =  10^{-7} mol.L^{-1}" />
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center flex-wrap gap-2">
                <li>ផលគុណរវាងកំហាប់អុីយ៉ុង </li>
                <span className="text-[13px]">
                  {" "}
                  <InlineMath math="H_{3}O^{+} " />
                </span>
                <span>និង</span>
                <span className="text-[13px]">
                  <InlineMath math="OH^{-}" />
                </span>
                <p>ហៅថាផលគុណអុីយ៉ុងនៃទឹក (ke ឬ kw) ។</p>
              </div>
            </div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[13px]">
                <InlineMath math="[H_{3}O^{+}] * [OH^{-}] =  Ke" />
              </span>
              <p>
                ផលគុណនេះមានតម្លៃថេរជានិច្ច (ជាទំហំគ្មានខ្នាត
                ប្រែប្រួលតាមសីតុណ្ហភាព) ។
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <li>មជ្ឈដ្ធានសូលុយស្យុងមានបីគឺ :</li>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[13px]">
                _ <InlineMath math="[H_{3}O^{+}] = [OH^{-}] " />
              </span>
              <p>ជាសូលុយស្យុងណឺត</p>
              <span className="text-[13px]">
                <InlineMath math="(pH = 7 )" />
              </span>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[13px]">
                _ <InlineMath math="[H_{3}O^{+}] > [OH^{-}] " />
              </span>
              <p>ជាសូលុយស្យុងអាសុីត</p>
              <span className="text-[13px]">
                <InlineMath math="(pH < 7 )" />
              </span>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[13px]">
                _ <InlineMath math="[H_{3}O^{+}] < [OH^{-}] " />
              </span>
              <p>ជាសូលុយស្យុងបាស</p>
              <span className="text-[13px]">
                <InlineMath math="(pH > 7 )" />
              </span>
            </div>
          </div>
        </ul>
      </>
    ),
  },
};

const SecondTopicContent: TopicContent = {
  definition: {
    title: "មាត្រដ្ឋាន pH",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <ul className="list-disc pl-5 flex flex-col items-start gap-4">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <li>
                pH នៃសូលុយស្យុងរាវ
                ជាទំហំផ្ទុយនឹងឡូការីតគោលដប់នៃកំហាប់អុីយ៉ុងអុីដ្រូញ៉ូម
              </li>
              <span className="text-[13px]">
                <InlineMath math="[H_{3}O^{+}]" />
              </span>
              <p>របស់សូលុយស្យុងនោះ។</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap text-[13px]">
              <InlineMath math="pH = -log[H_{3}O^{+}]" />
              <InlineMath math="\Leftrightarrow [H_{3}O^{+}] = 10^{-pH}" />
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <li>
                pOH នៃសូលុយស្យុងរាវ
                ជាទំហំផ្ទុយនឹងឡូការីតគោលដប់នៃកំហាប់អុីយ៉ុងអុីដ្រុកសុីត
              </li>
              <span className="text-[13px]">
                <InlineMath math="[OH^{-}]" />
              </span>
              <p>របស់សូលុយស្យុងនោះ។</p>
            </div>
            <div className="flex items-center gap-2 flex-wrap text-[13px]">
              <InlineMath math="pOH = -log[OH^{-}]" />
              <InlineMath math="\Leftrightarrow [OH^{-}] = 10^{-pOH}" />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <li>នៅសីតុណ្ហភាព 25°C ទឹកសុទ្ធមាន</li>
              <div className="text-[13px]">
                <InlineMath math="K_{w}= 10^{-14}" />
                <InlineMath math="\Leftrightarrow pK_{w} = -log 10^{-14} = 14" />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <li>សូលុយស្យុងណឺតនៅគ្រប់សីតុណ្ហភាពមាន</li>
              <span className="text-[13px]">
                <InlineMath math="[H_{3}O^{+}] = [OH^{-}]" />
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 flex-wrap">
              <li>កំណត់ pH ដោយប្រេីក្រដាស pH ឬប្រេីឧបករណ៍ pH ម៉ែត្រ។</li>
            </div>
          </div>
        </ul>
      </>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <p>១. ចូរកំណត់ pH នៃអូតូប្រូលីសរបស់ទឹកនៅសីតុណ្ហភាព 30°C</p>
        <p>២. សូលុយស្យុងមួយមាន pH= 7.52 ។ គណនា :</p>
        <div className="flex flex-col items-start pl-5">
          <p>ក. កំហាប់អុីយ៉ុងអុីដ្រូញ៉ូម</p>
          <p>ខ. កំហាប់អុីយ៉ុងអុីដ្រុកសុីត</p>
          <p>គ. តេីវាជាសូលុយស្យុងអាសុីត ឬសូលុយស្យុងបាស ?</p>
        </div>
      </div>,
    ],
    steps: [
      {
        title: "១. កំណត់តម្លៃ pH",
        content: (
          <>
            <div className="flex flex-col items-start gap-3">
              <div className="flex items-center gap-3 flex-wrap">
                <p>យេីងមាន </p>
                <span className="text-[13px]">
                  <InlineMath math="K_{e} = [H_{3}O^{+}] \cdot [OH^{-}]" />
                </span>
              </div>
              <div className="flex items-center gap-3 flex-wrap">
                <p>ដោយនៅសីតុណ្ហភាព 30°C របស់ទឹកគឺ</p>
                <span className="text-[13px]">
                  <InlineMath math="1.471  \cdot 10^{-14} " />
                </span>
              </div>
              <span className="text-[13px]">
                <InlineMath math="\Rightarrow K_{e} = 1.471  \cdot 10^{-14}" />
              </span>
              <div className="flex items-center gap-3 flex-wrap">
                <p>ដោយវាជាអូតូប្រូលីសរបស់ទឹកយេីងបាន </p>
                <span className="text-[13px]">
                  <InlineMath math="[H_{3}O^{+}] = [OH^{-}]" />
                </span>
              </div>
              <div className="flex items-center gap-3 flex-wrap text-[13px]">
                <InlineMath math="[H_{3}O^{+}]^{2} = 1.471  \cdot 10^{-14}" />
                <InlineMath math="\Rightarrow [H_{3}O^{+}] = 1.213 \cdot 10^{-7}" />
              </div>
              <div className="flex items-center gap-3 flex-wrap text-[13px]">
                <InlineMath math="pH = -log[H_{3}O^{+}]" />
                <InlineMath math="= log[1.213 \cdot 10^{-7} ]" />
                <InlineMath math="= -(log 1.213 + log 10^{-7} )" />
                <InlineMath math="= 6.92" />
              </div>
              <p>ដូចនេះ pH= 6.92</p>
            </div>
          </>
        ),
      },
      {
        title: (
          <>
            <div className="flex items-center gap-2 flex-wrap">
              <p>២-ក. រកកំហាប់អុីយ៉ុង​ </p>
              <span className="text-[13px]">
                <InlineMath math="[H_{3}O^{+}]" />
              </span>
            </div>
          </>
        ),
        content: (
          <>
            <div className="flex flex-col items-start gap-3">
              <div className="flex items-center gap-3 flex-wrap">
                <p>តាមសមីការ </p>
                <div className="text-[13px]">
                  <InlineMath math="pH= -[H_{3}O^{+}]" />
                  <InlineMath math="\Rightarrow [H_{3}O^{+}] = 10^{-pH}" />
                </div>
              </div>
              <span className="text-[13px]">
                <InlineMath math="= 10^{-7.52} = 10^{-8} \cdot 10^{0.48}" />
              </span>
              <span className="text-[13px]">
                <InlineMath math="= 3.0 \cdot 10^{-8} M" />
              </span>
              <div className="flex items-center gap-3 flex-wrap">
                <p>ដូចនេះ </p>
                <span className="text-[13px]">
                  <InlineMath math="[H_{3}O^{+}] = 3.0 \cdot 10^{-8} M" />
                </span>
              </div>
            </div>
          </>
        ),
      },
      {
        title: (
          <>
            <div className="flex items-center gap-2 flex-wrap">
              <p>២-ខ. រកកំហាប់អុីយ៉ុង​ </p>
              <span className="text-[13px]">
                <InlineMath math="[OH^{-}]" />
              </span>
            </div>
          </>
        ),
        content: (
          <>
            <div className="flex flex-col items-start gap-3">
              <div className="flex items-center gap-3 flex-wrap">
                <p>តាមសមីការ </p>
                <span className="text-[13px]">
                  <InlineMath math="k_{w} = [H_{3}O^{+}][OH^{-}]" />
                </span>
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[13px]">
                    <InlineMath math="\Rightarrow [OH^{-}] = " />
                  </span>
                  <div className="text-[18px]">
                    <InlineMath math="\frac{K_{w}}{[H_{3}O^{+}]}" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="text-[18px]">
                  <InlineMath math="= \frac{1.0 . 10^{-14}}{3.0 . 10^{-8}}" />
                </div>
                <span className="text-[13px]">
                  <InlineMath math="= 3.3 \cdot 10^{-7} M" />
                </span>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <p>ដូចនេះ </p>
                <span className="text-[13px]">
                  <InlineMath math="[OH^{-}] = 3.3 \cdot 10^{-7} M" />
                </span>
              </div>
            </div>
          </>
        ),
      },
      {
        title: "២-គ. កំណត់ប្រភេទនៃសូលុយស្យុង",
        content: (
          <>
            <div className="flex flex-col items-start gap-3">
              <p>
                ដោយ pH = 7.25 ធំជាង pH= 7 មានន័យថា សូលុយស្យុងនេះជាសូលុយស្យុងបាស
                ។
              </p>
            </div>
          </>
        ),
      },
    ],
  },
};

const Aqueous_solution_ph = () => {
  return (
    <div>
      <div>
        {FirstTopicContent.definition && (
          <DefinitionBox
            title={FirstTopicContent.definition.title}
            content={FirstTopicContent.definition.content}
          />
        )}
        {FirstTopicContent.tip && (
          <TipBox
            title={FirstTopicContent.tip.title}
            content={FirstTopicContent.tip.content}
          />
        )}
        <div className="flex flex-col gap-5 items-start">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="font-bold text-xl sm:text-2xl">
              តម្លៃ​ Ke របស់ទឹកប្រែប្រួលតាមសីតុណ្ហភាព
            </h2>
          </div>
          <div className="w-full overflow-x-auto">
            <table className="min-w-max border border-gray-300 rounded-lg text-sm sm:text-base">
              <thead className=" text-white-800">
                <tr className="bg-gray-50">
                  <th className="border border-gray-300 px-4 py-2 text-left bg-blue-500 text-white">
                    សីតុ.(°C)
                  </th>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    0
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    10
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    20
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    25
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    30
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    40
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    50
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    100
                  </td>
                </tr>
                <tr className="">
                  <th className="border border-gray-300 px-4 py-2 text-left bg-blue-500 text-white">
                    <InlineMath math="K_{e}(10^{-14})" />
                  </th>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    0.114
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    0.293
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    0.681
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    1.008
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    1.471
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    2.916
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    5.476
                  </td>
                  <td className="border border-gray-300 px-4 py-2 text-center">
                    51.3
                  </td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
      <div>
        {SecondTopicContent.definition && (
          <DefinitionBox
            title={SecondTopicContent.definition.title}
            content={SecondTopicContent.definition.content}
          />
        )}
        {SecondTopicContent.tip && (
          <TipBox
            title={SecondTopicContent.tip.title}
            content={SecondTopicContent.tip.content}
          />
        )}
        {SecondTopicContent.example && (
          <ExampleBox
            question={SecondTopicContent.example.question}
            steps={SecondTopicContent.example.steps}
          />
        )}
      </div>
    </div>
  );
};

export default Aqueous_solution_ph;
