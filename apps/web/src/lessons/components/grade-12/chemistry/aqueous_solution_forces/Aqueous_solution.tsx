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
import { p } from "framer-motion/client";

const FirstTopicContent: TopicContent = {
  definition: {
    title: "១. ការបំបែកអុីយ៉ុងក្នុងទឹក",
    content: (
      <>
        <div className="flex flex-col items-start">
          <p>សមាសធាតុភាគច្រេីនរលាយក្នុងទឹកអាចបំបែកជាអុីយ៉ុងបាន។</p>
        </div>
      </>
    ),
  },

  example: {
    question: [
      <div className="flex flex-col items-start gap-3  text-[13px]" key="q1">
        <InlineMath math="NaCl(s) \rightarrow Na^{+}(aq) + Cl^{-}(aq)" />
        <InlineMath math="HCl + H_{2}O \rightarrow H_{3}O^{+} + Cl^{-}" />
        <InlineMath math="Ca(NO_{3})_{2} \rightarrow Ca^{2+} + 2NO_{3}^{-}" />
      </div>,
    ],
  },
  exercise: {
    questions: [
      {
        id: "q1",
        question: (
          <>
            <div className="flex flex-col gap-3">
              <p>សមាសធាតុមួយណាដែលអាចបំបែកជាអុីយ៉ុងនៅក្នុងទឹក?</p>
            </div>
          </>
        ),
        options: [
          <p className="text-[13px]" key="q1-o1">
            <InlineMath math="NaCl" />
          </p>,
          <p className="text-[13px]" key="q1-o2">
            <InlineMath math="C_{6}H_{12}O_{6}" />
          </p>,
          <p className="text-[13px]" key="q1-o3">
            <InlineMath math="CCl_{4}" />
          </p>,
          <p className="text-[13px]" key="q1-o4">
            <InlineMath math="CH_{3}OH" />
          </p>,
        ],
        correctAnswer: 1,
      },
      {
        id: "q2",
        question: (
          <>
            <div className="flex flex-col gap-3">
              <p>សមីការណាដែលបង្ហាញពីការបំបែករបស់ HCl ក្នុងទឹក?</p>
            </div>
          </>
        ),
        options: [
          <p className="text-[13px]" key="q1-o1">
            <InlineMath key="q2-o1" math="HCl \rightarrow H^{+} + Cl^{-}" />
          </p>,
          <p className="text-[13px]" key="q2-o2">
            <InlineMath
              key="q2-o2"
              math="HCl + H_{2}O \rightarrow H_{3}O^{+} + Cl^{-}"
            />
          </p>,
          <p className="text-[13px]" key="q2-o3">
            <InlineMath key="q2-o3" math="HCl \rightarrow H_{2} + Cl_{2}" />
          </p>,
          <p className="text-[13px]" key="q2-o4">
            <InlineMath key="q2-o4" math="HCl \rightarrow HCl(aq)" />
          </p>,
        ],
        correctAnswer: 2,
      },
      {
        id: "q3",
        question: (
          <>
            <div className="flex flex-col gap-3">
              <p>
                បើ{" "}
                <span className="text-[13px]">
                  <InlineMath math="Ca(NO_{3})_{2}" />
                </span>{" "}
                រលាយក្នុងទឹក វាបំបែកបានជាអុីយ៉ុងអ្វីខ្លះ?
              </p>
            </div>
          </>
        ),
        options: [
          <p className="text-[13px]" key="q3-o1">
            <InlineMath key="q3-o1" math="Ca^{2+} + NO_{3}^{-}" />
          </p>,
          <p className="text-[13px]" key="q3-o2">
            <InlineMath key="q3-o2" math="Ca^{+} + 2NO_{3}^{-}" />
          </p>,
          <p className="text-[13px]" key="q3-o3">
            <InlineMath key="q3-o3" math="Ca^{2+} + 2NO_{3}^{-}" />
          </p>,
          <p className="text-[13px]" key="q3-o4">
            <InlineMath key="q3-o4" math="Ca + NO_{3}" />
          </p>,
        ],
        correctAnswer: 3,
      },
    ],
  },
};

const SecondTopic: TopicContent = {
  definition: {
    title: "១.១ ប្រតិកម្មបង្កេីតកករ",
    content: <></>,
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <ul className="list-disc pl-5 flex flex-col items-start gap-4">
          <li>សមាសធាតុអុីយ៉ុងមួយចំនួនមិនរលាយក្នុងទឹកទេ។</li>
          <li>
            ដេីម្បីសន្មតសមាសធាតុរលាយឬមិនរលាយក្នុងទឹក
            យេីងត្រូវមេីលក្នុងតារាងសមាសធាតុ ។
          </li>
        </ul>
      </>
    ),
  },

  example: {
    question: [
      <div className="flex flex-col items-start gap-3 text-[13px]" key="q1">
        <InlineMath math="AgNO_{3} \rightarrow Ag^{+} + NO_{3}^{-}" />
        <InlineMath math="2NaOH \rightarrow 2Na^{+} + 2OH^{-}" />
      </div>,
    ],
  },
};

const ThirdTopic: TopicContent = {
  definition: {
    title: "១.២ សមីការអុីយ៉ុងសម្រួល",
    content: <></>,
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <div className="flex flex-col items-start">
          <p>សមាសធាតុភាគច្រេីនរលាយក្នុងទឹកអាចបំបែកជាអុីយ៉ុងបាន។</p>
        </div>
      </>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <p>សមីការម៉ូលេគុល</p>

        <div className="sm:text-[13px] text-[12px]">
          <InlineMath math="AgNO_{3}(aq) + NaCl(aq) \rightarrow AgCl(s)  + NaNO_{3}(aq)" />
        </div>
        <p>សមីការអុីយ៉ុងសព្វ</p>

        <div className="sm:text-[13px] text-[12px]">
          <InlineMath math="Ag^{+}(aq) + NO_{3}^{-}(aq) + Na^{+}(aq) + Cl^{-}(aq) \rightarrow AgCl(s) + Na^{+}(aq) + Cl^{-}(aq)" />
        </div>

        <p>សមីការអុីយ៉ុងសម្រួល</p>
        <div className="sm:text-[13px] text-[12px]">
          <InlineMath math="Ag^{+}(aq) + Cl^{-}(aq) \rightarrow AgCl(s)" />
        </div>
      </div>,
    ],
  },

  exercise: {
    questions: [
      {
        id: "q1",
        question: (
          <>
            <div className="flex flex-col gap-3">
              <p>
                ជ្រេីសសមីការបំបែកជាអុីយ៉ុងនៅក្នុងទឹករបស់{" "}
                <span className="text-[13px]">
                  <InlineMath math="KI" />
                </span>
              </p>
            </div>
          </>
        ),
        options: [
          <p className="text-[13px]" key="q1-o1">
            <InlineMath math="KI \rightarrow K^{+} + I^{-}" />
          </p>,
          <p className="text-[13px]" key="q1-o2">
            <InlineMath math="KI \rightarrow K^{2+} + I^{2-}" />
          </p>,
          <p className="text-[13px]" key="q1-o3">
            <InlineMath math="KI \rightarrow K + I" />
          </p>,
          <p className="text-[13px]" key="q1-o4">
            <InlineMath math="KI \rightarrow KI(aq)" />
          </p>,
        ],
        correctAnswer: 1,
      },
      {
        id: "q2",
        question: (
          <>
            <div className="flex flex-col gap-3">
              <p>
                ជ្រេីសសមីការបំបែកជាអុីយ៉ុងនៅក្នុងទឹករបស់{" "}
                <span className="text-[13px]">
                  <InlineMath math="NaNO_{3}" />
                </span>
              </p>
            </div>
          </>
        ),
        options: [
          <p className="text-[13px]" key="q2-o1">
            <InlineMath math="NaNO_{3} \rightarrow Na^{+} + NO_{3}^{-}" />
          </p>,
          <p className="text-[13px]" key="q2-o2">
            <InlineMath math="NaNO_{3} \rightarrow Na^{2+} + NO_{3}^{2-}" />
          </p>,
          <p className="text-[13px]" key="q2-o3">
            <InlineMath math="NaNO_{3} \rightarrow Na + NO_{3}" />
          </p>,
          <p className="text-[13px]" key="q2-o4">
            <InlineMath math="NaNO_{3} \rightarrow NaNO_{3}(aq)" />
          </p>,
        ],
        correctAnswer: 1,
      },
      {
        id: "q3",
        question: (
          <>
            <div className="flex flex-col gap-3">
              <p>
                ជ្រេីសសមីការបំបែកជាអុីយ៉ុងនៅក្នុងទឹករបស់{" "}
                <span className="text-[13px]">
                  <InlineMath math="MgCl_{2}" />
                </span>
              </p>
            </div>
          </>
        ),
        options: [
          <p className="text-[13px]" key="q3-o1">
            <InlineMath math="MgCl_{2} \rightarrow Mg^{2+} + 2Cl^{-}" />
          </p>,
          <p className="text-[13px]" key="q3-o2">
            <InlineMath math="MgCl_{2} \rightarrow Mg^{+} + Cl^{-}" />
          </p>,
          <p className="text-[13px]" key="q3-o3">
            <InlineMath math="MgCl_{2} \rightarrow Mg^{2+} + Cl_{2}^{-}" />
          </p>,
          <p className="text-[13px]" key="q3-o4">
            <InlineMath math="MgCl_{2} \rightarrow Mg + 2Cl" />
          </p>,
        ],
        correctAnswer: 1,
      },
    ],
  },
  hint: {
    content: (
      <>
        <p>
          ពេលដែលគេចង់បានសមីការបីសណ្ធាន មានន័យថា គេចង់បានសមីការទាំងបីគឺ
          សមីការគីមី , សមីការអុីយ៉ុងសព្វ , សមីការអុីយ៉ុងសម្រួល។
        </p>
      </>
    ),
  },
};

const FourthTopicContent: TopicContent = {
  definition: {
    title: "២. អុីយ៉ុងកម្ម",
    content: (
      <>
        <div className="flex flex-col items-start">
          <p>
            អុីយ៉ុងកម្មគឺជាលំនាំបំបែកជាអុីយ៉ុងកនៃសារធាតុរលាយដោយអំពេីនៃសារធាតុរំលាយ។
          </p>
        </div>
      </>
    ),
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <p>
          កាលណាសមាសធាតុអុីយ៉ុងរលាយ
          អុីយ៉ុងត្រូវបានផ្តាច់ចេញពីគ្នាហេីយត្រូវហ៊ុំព័ទ្ធដោយម៉ូលេគុលសារធាតុរំលាយ។
        </p>
      </>
    ),
  },

  example: {
    question: [
      <div
        className="flex flex-col items-start gap-3 sm:text-[13px] text-[12px]"
        key="q1"
      >
        <InlineMath math="NaCl(s) \rightarrow Na^{+}(aq) + Cl^{-}(aq) + Cl^{-}(aq)" />
        <InlineMath math="HCl(g) + H_{2}O(l) \rightarrow H_{3}O^{+}(aq)" />
      </div>,
    ],
  },
  exercise: {
    questions: [],
  },
};

const FifthTopicContent: TopicContent = {
  definition: {
    title: "៣. អុីយ៉ុងអុីដ្រូញ៉ូម",
    content: (
      <>
        <div className="flex flex-col items-start">
          <p>អុីយ៉ុងអុីដ្រូញ៉ូមគឺជាអុីយ៉ុងដែលមានសមាសធាតុជាអុីដ្រូញ៉ូម។</p>
        </div>
      </>
    ),
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <div className="flex items-start flex-col">
        <div className="flex items-center gap-2 flex-wrap">
          <p>ទឹកចាប់យកអុីយ៉ុង </p>
          <div className="text-[12px]">
            <InlineMath math="H^{+}" />
          </div>
          <p>ពីអាសុីត</p>
          <p>បង្កេីតបានជា</p>
          <p>អុីយ៉ុងអុីដ្រូញ៉ូម</p>
          <div className="text-[12px]">
            <InlineMath math="H_{3}O^{+}" />
          </div>
        </div>
      </div>
    ),
  },

  example: {
    question: [
      <div className="flex flex-col items-start gap-5" key="q1">
        <div className="flex items-center gap-2 flex-wrap text-[13px]">
          <InlineMath math="HCl(g) \xrightarrow{H_{2}O} H^{+}(aq) + Cl^{-}(aq)" />
          <span>(1)</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap text-[13px]">
          <InlineMath math="H^{+}(aq) + H_{2}O(l) \rightarrow H_{3}O^{+}(aq)" />
          <span>(2)</span>
        </div>
        <div className="flex items-center gap-2 flex-wrap text-[13px] ">
          <span>ជាសរុប</span>
          <InlineMath math="HCl(g) + H_{2}O(l) \rightarrow H_{3}O^{+}(aq) + Cl^{-}(aq)" />
        </div>
      </div>,
    ],
  },
  exercise: {
    questions: [],
  },
};

const SixthTopicContent: TopicContent = {
  definition: {
    title: "៤. អេឡិចត្រូលីតខ្លាំង និងអេឡិចត្រូលីតខ្សោយ",
    content: (
      <>
        <div className="flex flex-col items-start">
          <p>
            អេឡិចត្រូលីតគឺជាសារធាតុដែលផ្តល់ផលជាអុីយ៉ុង
            និងចម្លងចរន្តអគ្គិសនីក្នុងសូលុយស្យុងទឹក។
          </p>
        </div>
      </>
    ),
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <div className="flex items-start flex-col">
        <p>
          សារធាតុដែលមិនផ្តល់ផលជាអុីយ៉ុង
          និងមិនចម្លងចរន្តអគ្គិសនីក្នុងសូលុយស្យុងទឹក មិនមែនជាអេឡិចត្រូលីតទេ។
        </p>
      </div>
    ),
  },
};

const SeventhTopicContent: TopicContent = {
  definition: {
    title: "៤.១ អេឡិចត្រូលីតខ្លាំង ",
    content: (
      <>
        <div className="flex flex-col items-start">
          <p>
            អេឡិចត្រូលីតខ្លាំងគឺជាសារធាតុដែលអាចបំបែកជាអុីយ៉ុងទាំងស្រុងនៅក្នុងទឹក។
          </p>
        </div>
      </>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-5" key="q1">
        <p>បាសខ្លាំង អាសុីតខ្លាំង អំបិលរលាយសព្វក្នុងទឹក</p>

        <div className="flex flex-col text-[13px] gap-3">
          <InlineMath math="Ba(OH)_{2}(s) \xrightarrow{H_{2}O} Ba^{2+}(aq) + 2OH^{-}(aq)" />
          <InlineMath math="HCl(g) + H_{2}O(l) \rightarrow H_{3}O^{+}(aq) + Cl^{-}(aq)" />
          <InlineMath math="NaCl(s) \xrightarrow{H_{2}O} Na^{+}(aq) + Cl^{-}(aq)" />
        </div>
      </div>,
    ],
  },
};

const EighthTopicContent: TopicContent = {
  definition: {
    title: "៤.២ អេឡិចត្រូលីតខ្សោយ",
    content: (
      <>
        <div className="flex flex-col items-start">
          <p>
            អេឡិចត្រូលីតខ្សោយគឺជាសារធាតុដែលបំបែកជាអុីយ៉ុងដោយផ្នែកមួយនៅក្នុងទឹក។
          </p>
        </div>
      </>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-5" key="q1">
        <p>បាសខ្សោយ អាសុីតខ្សោយ</p>

        <div className="flex flex-col text-[13px] gap-3">
          <InlineMath math="NH_{3}(aq) + H_{2}O(l) \rightleftharpoons NH_{4}^{+}(aq) + OH^{-}(aq)" />
          <InlineMath math="CH_{3}COOH(aq) + H_{2}O(l) \rightleftharpoons H_{3}O^{+}(aq) + CH_{3}COO^{-}(aq)" />
        </div>
      </div>,
    ],
  },
};

const NinethTopicContent: TopicContent = {
  definition: {
    title: "",
    content: <></>,
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q3">
        <p>
          តេីកករនឹងកេីតមានឡេីងឬទេ
          កាលណាគេលាយសូលុយស្យុងទឹកនៃស័ង្កសីនីត្រាតនិងអាម៉ូញូមស៊ុលផាតចូលគ្នា?
          ចូរសរសេរសមីការប្រតិកម្មជំនួសទ្វេដែលអាចមាន។ បន្ទាប់មកសរសេរសមីការគីមី
          សមីការអុីយ៉ុងសព្វ និងសមីការអុីយ៉ុងសម្រួល។
        </p>
      </div>,
    ],
    steps: [
      {
        title: "សមីការប្រតិកម្មជំនួសទ្វេ",
        content: (
          <div>
            <div className="flex flex-col items-start">
              <div className="text-[13px]">
                <InlineMath math="Zn(NO_{3})_{2}(aq) + (NH_{4})_{2}SO_{4}(aq) \rightarrow ZnS(?) + 2NH_{4}NO_{3}(?)" />
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "សមីការប្រតិកម្មគីមី",
        content: (
          <div>
            <div className="flex flex-col items-start gap-3">
              <p>
                ដោយ ZnS គឺជាស៊ុលផួមិនរលាយ​ ចំណេក{" "}
                <InlineMath math="NH_{4}NO_{3}" /> ជាសមាសធាតុរលាយក្នុងទឹក
                នោះគេបាន :
              </p>
              <div className="text-[13px]">
                <InlineMath math="Zn(NO_{3})_{2}(aq) + (NH_{4})_{2}SO_{4}(aq) \rightarrow ZnS(s) + 2NH_{4}NO_{3}(aq)" />
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "សមីការអុីយ៉ុងសព្វ",
        content: (
          <div>
            <div className="text-[13px]">
              <InlineMath math="Zn^{2+}(aq) + 2NO_{3}^{-}(aq) + 2NH_{4}^{+}(aq) + S^{2-}(aq) \rightarrow ZnS(s) + 2NH_{4}^{+}(aq) + 2NO_{3}^{-}(aq)" />
            </div>
          </div>
        ),
      },
      {
        title: "សមីការអុីយ៉ុងសម្រួល",
        content: (
          <div>
            <div className="flex flex-col items-start gap-3">
              <p>
                សមីការអុីយ៉ុងសម្រួលគឺជាសមីការដែលសរសេរតែប្រភេទគីមីទាំងឡាយណាដែលរងនូវបម្រែបម្រួលគីមីក្នុងលំនាំប្រតិកម្ម។
              </p>
              <div className="text-[13px]">
                <InlineMath math="Zn^{2+}(aq) + S^{2-}(aq) \rightarrow ZnS(s)" />
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
};

const Aqueous_solution = () => {
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
        {FirstTopicContent.example && (
          <ExampleBox
            question={FirstTopicContent.example.question}
            steps={FirstTopicContent.example.steps}
            answer={FirstTopicContent.example.answer}
          />
        )}
        {FirstTopicContent.exercise && (
          <ExerciseBox questions={FirstTopicContent.exercise.questions} />
        )}
      </div>
      <div>
        {SecondTopic.definition && (
          <DefinitionBox
            title={SecondTopic.definition.title}
            content={SecondTopic.definition.content}
          />
        )}
        {SecondTopic.tip && (
          <TipBox
            title={SecondTopic.tip.title}
            content={SecondTopic.tip.content}
          />
        )}
        {SecondTopic.example && (
          <ExampleBox
            question={SecondTopic.example.question}
            steps={SecondTopic.example.steps}
            answer={SecondTopic.example.answer}
          />
        )}
        {/* {SecondTopic.example2 && (
                      <ExampleBox question={SecondTopic.example2.question} steps={SecondTopic.example2.steps} answer={SecondTopic.example2.answer} />
                  )} */}
      </div>
      <div>
        {ThirdTopic.definition && (
          <DefinitionBox
            title={ThirdTopic.definition.title}
            content={ThirdTopic.definition.content}
          />
        )}
        {ThirdTopic.tip && (
          <TipBox
            title={ThirdTopic.tip.title}
            content={ThirdTopic.tip.content}
          />
        )}
        {ThirdTopic.example && (
          <ExampleBox
            question={ThirdTopic.example.question}
            steps={ThirdTopic.example.steps}
            answer={ThirdTopic.example.answer}
          />
        )}
        {NinethTopicContent.example && (
          <ExampleBox
            question={NinethTopicContent.example.question}
            steps={NinethTopicContent.example.steps}
          />
        )}
        {ThirdTopic.exercise && (
          <ExerciseBox questions={ThirdTopic.exercise.questions} />
        )}
        {ThirdTopic.hint && <HintBox content={ThirdTopic.hint.content} />}
      </div>
      <div>
        {FourthTopicContent.definition && (
          <DefinitionBox
            title={FourthTopicContent.definition.title}
            content={FourthTopicContent.definition.content}
          />
        )}
        {FourthTopicContent.tip && (
          <TipBox
            title={FourthTopicContent.tip.title}
            content={FourthTopicContent.tip.content}
          />
        )}
        {FourthTopicContent.example && (
          <ExampleBox
            question={FourthTopicContent.example.question}
            steps={FourthTopicContent.example.steps}
            answer={FourthTopicContent.example.answer}
          />
        )}
      </div>
      <div>
        {FifthTopicContent.definition && (
          <DefinitionBox
            title={FifthTopicContent.definition.title}
            content={FifthTopicContent.definition.content}
          />
        )}
        {FifthTopicContent.tip && (
          <TipBox
            title={FifthTopicContent.tip.title}
            content={FifthTopicContent.tip.content}
          />
        )}
        {FifthTopicContent.example && (
          <ExampleBox
            question={FifthTopicContent.example.question}
            steps={FifthTopicContent.example.steps}
            answer={FifthTopicContent.example.answer}
          />
        )}
      </div>
      <div>
        {SixthTopicContent.definition && (
          <DefinitionBox
            title={SixthTopicContent.definition.title}
            content={SixthTopicContent.definition.content}
          />
        )}
        {SixthTopicContent.tip && (
          <TipBox
            title={SixthTopicContent.tip.title}
            content={SixthTopicContent.tip.content}
          />
        )}
        {/* {SixthTopicContent.example && (
                        <ExampleBox question={SixthTopicContent.example.question} steps={SixthTopicContent.example.steps} answer={SixthTopicContent.example.answer} />
                    )} */}
      </div>
      <div>
        {SeventhTopicContent.definition && (
          <DefinitionBox
            title={SeventhTopicContent.definition.title}
            content={SeventhTopicContent.definition.content}
          />
        )}
        {SeventhTopicContent.tip && (
          <TipBox
            title={SeventhTopicContent.tip.title}
            content={SeventhTopicContent.tip.content}
          />
        )}
        {SeventhTopicContent.example && (
          <ExampleBox
            question={SeventhTopicContent.example.question}
            steps={SeventhTopicContent.example.steps}
            answer={SeventhTopicContent.example.answer}
          />
        )}
      </div>
      <div>
        {EighthTopicContent.definition && (
          <DefinitionBox
            title={EighthTopicContent.definition.title}
            content={EighthTopicContent.definition.content}
          />
        )}
        {EighthTopicContent.tip && (
          <TipBox
            title={EighthTopicContent.tip.title}
            content={EighthTopicContent.tip.content}
          />
        )}
        {EighthTopicContent.example && (
          <ExampleBox
            question={EighthTopicContent.example.question}
            steps={EighthTopicContent.example.steps}
            answer={EighthTopicContent.example.answer}
          />
        )}
      </div>
    </div>
  );
};

export default Aqueous_solution;
