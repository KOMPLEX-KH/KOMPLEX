import React from "react";

import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { HintBox } from "@/components/pages/docs/boxes/HintBox";
import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";

// import ChemicalSlowReactionDiagram from './diagram'

const FirstTopicContent: TopicContent = {
  definition: {
    title: "១. កត្តាពេលក្នុងប្រតិកម្មគីមី",
    content: (
      <>
        <div className="flex flex-col items-start">
          <p>សុីនេទិចគីមីគឺជាការសិក្សាអំពីបម្រែបម្រួលល្បឿននៃប្រតិកម្មគីមី។</p>
        </div>
      </>
    ),
  },
};

const SecondTopic: TopicContent = {
  definition: {
    title: "១.១ ប្រតិកម្មរហ័ស",
    content: (
      <div>
        <div className="flex flex-col items-start gap-3">
          <p>ប្រតិកម្មរហ័សគឺជាប្រតិកម្មដែលកើតឡើងក្នុងរយៈពេលខ្លី។</p>
        </div>
      </div>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start" key="q1">
        <div className="flex items-center flex-wrap">
          <BlockMath math="Ag^{+}(aq) + Cl^{-}(aq)" />
          <BlockMath math="\rightarrow AgCl(s)" />
        </div>
        <div className="flex items-center flex-wrap">
          <BlockMath math="Cu^{2+}(aq) + 2OH^{-}(aq)" />
          <BlockMath math="\rightarrow Cu(OH)_{2}(s)" />
        </div>
      </div>,
    ],
  },
};

const ThirdTopic: TopicContent = {
  definition: {
    title: "១.២ ប្រតិកម្មយឺត",
    content: (
      <div>
        <div className="flex flex-col items-start gap-3">
          <p>
            ប្រតិកម្មយឺតគឺជាប្រតិកម្មដែលកកេីតឡេីងក្នុងរយៈពេលច្រើននវិនាទី នាទី
            ឬច្រេីនម៉ោង។
          </p>
        </div>
      </div>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col gap-3" key="q1">
        <p>
          ឌីស្មូតកម្មអុីយ៉ុងត្យូស៊ុលផាត <InlineMath math="S_{2}O_{3}^{2-}" />{" "}
          ក្នុងមជ្ឈដ្ធានអាសុីត ឲផលជា <InlineMath math="S" /> និង{" "}
          <InlineMath math="SO_{2}" /> ។
        </p>

        {/* Show this image only on tablet (md) and above */}
        <div className="hidden md:block">
          <img src="/chemistry/pic27.png" alt="" />
        </div>

        {/* Show these two images only on mobile (below md) */}
        <div className="flex flex-col gap-2 md:hidden">
          <img src="/chemistry/pic25.png" alt="" />
          <img src="/chemistry/pic26.png" alt="" />
        </div>
      </div>,
    ],
  },
};

const FourthTopic: TopicContent = {
  definition: {
    title: "១.៣ ប្រតិកម្មយឺតបំផុត",
    content: (
      <div>
        <div className="flex flex-col items-start gap-3">
          <p>
            ប្រតិកម្មយឺតបំផុតគឺជាប្រតិកម្មដែលប្រព្រឹត្តិទៅច្រេីនថ្ងៃ ច្រេីនខែ
            ឬច្រេីនឆ្នាំ។
          </p>
        </div>
      </div>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col gap-3" key="q1">
        <p>
          ប្រតិកម្មបំបែកទឹកអុកសុីសេនេ <InlineMath math="H_{2}O_{2}" />{" "}
        </p>

        <div className="hidden md:block w-130">
          <img src="/chemistry/pic33.png" alt="" />
        </div>

        {/* Show these two images only on mobile (below md) */}
        <div className="flex flex-col gap-2 md:hidden">
          <img src="/chemistry/pic31.png" alt="" />
          <img src="/chemistry/pic32.png" alt="" />
        </div>
      </div>,
    ],
  },
};

const FifthTopic: TopicContent = {
  definition: {
    title: "២. ល្បឿនប្រតិកម្មគីមី",
    content: <div></div>,
  },
};
const SixthTopic: TopicContent = {
  definition: {
    title: "២.១ ល្បឿនកំណអង្គធាតុកកេីត",
    content: <div></div>,
  },
};

const SeventhTopicContent: TopicContent = {
  definition: {
    title: "ក. ល្បឿនមធ្យមកំណ I₂",
    content: (
      <div className="flex flex-col items-start gap-3 ">
        <p>
          ល្បឿនមធ្យមកំណ <InlineMath math="I_{2}" /> នៅចន្លោះពេល{" "}
          <InlineMath math="t_{1}" /> និង <InlineMath math="t_{2}" />{" "}
          គឹជាផលធៀបរវាងបម្រែបម្រួលកំហាប់ <InlineMath math="I_{2}" />{" "}
          ជាមួយបម្រែបម្រួលរយៈពេល <InlineMath math="t" /> ។
        </p>
      </div>
    ),
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <p className="">
          រូបមន្ត{" "}
          <InlineMath math="v_{m} = \frac{[I_{2}]_{2} - [I_{2}]_{1}}{t_{2} - t_{1}} = \frac{\Delta [I_{2}]}{\Delta t}" />
        </p>
      </>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-3 text-[13px]" key="q1">
        <p>
          ថ្មកំបោរ <InlineMath math="CaCO_{3}" /> (កាល់ស្យូមកាបូណាត)
          មានប្រតិកម្មជាមួយ <InlineMath math="HCl" /> (អាស៊ីតក្លរីឌ្រិច)
          តាមសមីការ
        </p>
        <InlineMath math="CaCO_{3}(s) + 2HCl(aq) \rightarrow CaCl_{2}(aq) + H_{2}O(l) + CO_{2}(g)" />
        <p>
          នៅខណៈ t = 15 s កំហាប់ <InlineMath math="CaCl_{2}" /> កើតបាន{" "}
          <InlineMath math="1.8 \times 10^{-3}mol.L^{-1}" /> និងនៅខណៈ t = 30 s
          កំហាប់ <InlineMath math="CaCl_{2}" /> កើតបាន{" "}
          <InlineMath math="3.13 \times 10^{-3}mol.L^{-1}" />{" "}
          ។ចូរកំណត់ល្បឿនមធ្យមនៃកំណកាល់ស្យូមក្លរួ នៅចន្លោះពេលខាងលើ ។
        </p>
      </div>,
    ],
    steps: [
      {
        title: "កំណត់ល្បឿនមធ្យមនៃកំណកាល់ស្យូមក្លរួ",
        content: (
          <>
            <div className="flex flex-col items-start gap-3 text-[13px]">
              <p>សមីការតាងប្រតិកម្ម</p>
              <InlineMath math="CaCO_{3}(s) + 2HCl(aq) \rightarrow CaCl_{2}(aq) + H_{2}O(l) + CO_{2}(g)" />
              <p>
                តាមរូបមន្ត{" "}
                <InlineMath math="v_{m} = \frac{[CaCl_{2}]_{2} - [CaCl_{2}]_{1}}{t_{2} - t_{1}}" />
              </p>
              <p>
                ដោយ កំហាប់ <InlineMath math="[CaCl_{2}]_{1}" /> នៅខណៈ{" "}
                <InlineMath math="t_{1} = 15 s " /> គឺ{" "}
                <InlineMath math="1.8 \times 10^{-3}mol.L^{-1}" />
              </p>
              <p>
                កំហាប់ <InlineMath math="[CaCl_{2}]_{2}" /> នៅខណៈ{" "}
                <InlineMath math="t_{2} = 30 s " /> គឺ{" "}
                <InlineMath math="3.13 \times 10^{-3}mol.L^{-1}" />
              </p>
              <InlineMath math="\Rightarrow V_{m} = \frac{3.13 \times 10^{-3} - 1.8 \times 10^{-3}}{30 - 15}" />
              <InlineMath math="V_{m} = 8.9 \times 10^{-5}mol.L^{-1}.s^{-1}" />
            </div>
          </>
        ),
      },
    ],
  },
};

const EighthTopicContent: TopicContent = {
  definition: {
    title: "ខ. ល្បឿនខណៈ I₂",
    content: (
      <div className="flex flex-col items-start gap-3">
        <p>
          ល្បឿនខណៈនៃកំណ <InlineMath math="I_{2}" /> នៅខណៈពេល t
          គឺជាលីមីតនៃល្បឿនមធ្យមកាលណាបម្រែបម្រួលរយៈពេលខិតទៅរកសូន្យ ។{" "}
        </p>
      </div>
    ),
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <p className="">
          រូបមន្ត{" "}
          <InlineMath math="v_{t} = \lim_{\Delta t \to 0} \frac{ [I_{2}]_{2} - [I_{2}]_{1}}{t_{2} - t_{1}} = \frac{\Delta [I_{2}]}{\Delta t}" />
        </p>
      </>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-3 text-[13px]" key="q1">
        <p>
          គេមានប្រតិកម្ម​{" "}
          <InlineMath math="2NaI(aq) + Cl_{2}(g) \rightarrow 2NaCl(aq) + I_{2}(aq)" />
        </p>

        <p>
          នៅខណៈ t = 20 s កំហាប់ <InlineMath math="I_{2}" /> គឺ{" "}
          <InlineMath math="2.0 \times 10^{-3} mol.L^{-1}" /> ហើយនៅខណៈ t = 20.1
          s កំហាប់ <InlineMath math="I_{2}" /> គឺ{" "}
          <InlineMath math="2.05 \times 10^{-3} mol.L^{-1}" /> ។
          ចូរកំណត់ល្បឿនខណៈនៃកំណ <InlineMath math="I_{2}" /> នៅពេល t = 20 s ។
        </p>
      </div>,
    ],
    steps: [
      {
        title: "កំណត់ល្បឿនខណៈនៃកំណ I₂",
        content: (
          <>
            <div className="flex flex-col items-start gap-3 text-[13px]">
              <p>
                តាមរូបមន្ត{" "}
                <InlineMath math="v_{t} = \lim_{\Delta t \to 0} \frac{ [I_{2}]_{2} - [I_{2}]_{1}}{t_{2} - t_{1}}" />
              </p>
              <p>
                ដោយ{" "}
                <InlineMath math="[I_{2}]_{1} = 2.0 \times 10^{-3} mol.L^{-1}" />{" "}
                នៅខណៈ t= 20 s
              </p>
              <p>
                <InlineMath math="[I_{2}]_{2} = 2.05 \times 10^{-3} mol.L^{-1}" />{" "}
                នៅខណៈ t= 20.1 s
              </p>
              <p>
                <InlineMath math="\Rightarrow t_{2} - t_{1} = 20.1 - 20 = 0.1 s" />
              </p>
              <p>
                គេបាន{" "}
                <InlineMath math="v_{t} = \lim_{\Delta t \to 0} \frac{2.05 \times 10^{-3} - 2.0 \times 10^{-3}}{0.1}" />
              </p>
              <p>
                <InlineMath math="= \frac{0.05 \times 10^{-3}}{0.1} = 5.0 \times 10^{-4} mol.L^{-1}.s^{-1}" />
              </p>
            </div>
          </>
        ),
      },
    ],
  },
};

const NinethTopicContent: TopicContent = {
  definition: {
    title: "២.២ ល្បឿនបំបាត់អង្គធាតុប្រតិករ",
    content: <div></div>,
  },
};

const TenthTopicContent: TopicContent = {
  definition: {
    title: "ក. ល្បឿនមធ្យមបំបាត់ H₂O₂",
    content: (
      <div className="flex flex-col items-start gap-3">
        <p>
          ល្បឿនមធ្យមបំបាត់ <InlineMath math="H_{2}O_{2}" /> នៅចន្លោះពេល{" "}
          <InlineMath math="t_{1}" /> និង <InlineMath math="t_{2}" />{" "}
          គឺជាផលធៀបរវាងបម្រែបម្រួលកំហាប់ <InlineMath math="H_{2}O_{2}" />{" "}
          ជាមួយនឹងបម្រែបម្រួលរយៈពេល t ។
        </p>
      </div>
    ),
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <p className="">
          រូបមន្ត{" "}
          <InlineMath math="v_{m} = - \frac{[H_{2}O_{2}]_{2} - [H_{2}O_{2}]_{1}}{t_{2} - t_{1}} = - \frac{\Delta [H_{2}O_{2}]}{\Delta t}" />
        </p>
      </>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-3 text-[13px]" key="q1">
        <p>
          គេមានប្រតិកម្មបំបាត់ <InlineMath math="H_{2}O_{2}" />{" "}
          <InlineMath math="2H_{2}O_{2}(aq) \rightarrow 2H_{2}O(l) + O_{2}(g)" />
        </p>

        <p>
          នៅខណៈ <InlineMath math="t_{1} = 0\,s" /> កំហាប់{" "}
          <InlineMath math="H_{2}O_{2}" /> គឺ{" "}
          <InlineMath math="0.50\, mol.L^{-1}" /> ហើយនៅខណៈ{" "}
          <InlineMath math="t_{2} = 50\,s" /> កំហាប់{" "}
          <InlineMath math="H_{2}O_{2}" /> គឺ{" "}
          <InlineMath math="0.30\, mol.L^{-1}" /> ។ ចូរកំណត់ល្បឿនមធ្យមបំបាត់{" "}
          <InlineMath math="H_{2}O_{2}" /> នៅចន្លោះពេលខាងលើ។
        </p>
      </div>,
    ],
    steps: [
      {
        title: "កំណត់ល្បឿនមធ្យមបំបាត់ H₂O₂",
        content: (
          <>
            <div
              className="flex flex-col items-start gap-3 text-[13px]"
              key="q1"
            >
              <p>សមីការតាងប្រតិកម្ម៖</p>
              <InlineMath math="2H_{2}O_{2}(aq) \rightarrow 2H_{2}O(l) + O_{2}(g)" />
              <p>
                តាមរូបមន្ត:{" "}
                <InlineMath math="v_{m} = -\frac{[H_{2}O_{2}]_{2}-[H_{2}O_{2}]_{1}}{t_{2}-t_{1}}" />
              </p>
              <p>
                ដោយ <InlineMath math="[H_{2}O_{2}]_{1}=0.50\, mol.L^{-1}" /> នៅ{" "}
                <InlineMath math="t_{1}=0\,s" />
              </p>
              <p>
                <InlineMath math="[H_{2}O_{2}]_{2}=0.30\, mol.L^{-1}" /> នៅ{" "}
                <InlineMath math="t_{2}=50\,s" />
              </p>
              <InlineMath math="\Rightarrow v_{m} = -\frac{0.30-0.50}{50-0}" />
              <InlineMath math="= -\frac{-0.20}{50}" />
              <InlineMath math="v_{m} = 4.0 \times 10^{-3}\, mol.L^{-1}.s^{-1}" />
            </div>
          </>
        ),
      },
    ],
  },
};

const EleventhTopicContent: TopicContent = {
  definition: {
    title: "ខ. ល្បឿនខណៈបំបាត់ H₂O₂",
    content: (
      <div className="flex flex-col items-start gap-3">
        <p>
          ល្បឿនខណៈបំបាត់ <InlineMath math="H_{2}O_{2}" /> នៅចន្លោះពេល{" "}
          <InlineMath math="t_{1}" /> និង <InlineMath math="t_{2}" />{" "}
          គឺជាលីមីតនៃល្បឿនមធ្យមកាលណាបម្រែបម្រួលរយៈពេលខិតទៅរកសូន្យ ។{" "}
        </p>
      </div>
    ),
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <p className="">
          រូបមន្ត{" "}
          <InlineMath math="v_{t} = - \lim_{\Delta t \to 0} \frac{ [H_{2}O_{2}]_{2} - [H_{2}O_{2}]_{1}}{t_{2} - t_{1}} = - \frac{\Delta [H_{2}O_{2}]}{\Delta t}" />
        </p>
      </>
    ),
  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-3 text-[13px]" key="q1">
        <p>
          ប្រតិកម្មបំបាត់{" "}
          <InlineMath math="2H_{2}O_{2}(aq) \rightarrow 2H_{2}O(l) + O_{2}(g)" />
        </p>
        <p>
          នៅខណៈ <InlineMath math="t = 100\,s" /> កំហាប់{" "}
          <InlineMath math="[H_{2}O_{2}] = 0.500\, mol.L^{-1}" /> និងនៅខណៈ{" "}
          <InlineMath math="t = 102\,s" /> កំហាប់{" "}
          <InlineMath math="[H_{2}O_{2}] = 0.498\, mol.L^{-1}" /> ។
          ចូរកំណត់ល្បឿនខណៈបំបាត់ <InlineMath math="H_{2}O_{2}" /> នៅប្រហែល{" "}
          <InlineMath math="t = 101\,s" /> (ប្រើលីមីតដោយយក Δt = 2 s)។
        </p>
      </div>,
    ],
    steps: [
      {
        title: "កំណត់ល្បឿនខណៈបំបាត់ H₂O₂",
        content: (
          <>
            <div className="flex flex-col items-start gap-3 text-[13px]">
              <p>
                តាមរូបមន្ត{" "}
                <InlineMath math="v_{t} = -\lim_{\Delta t \to 0}\frac{[H_{2}O_{2}]_{2}-[H_{2}O_{2}]_{1}}{t_{2}-t_{1}}" />
              </p>
              <p>
                ដោយ <InlineMath math="[H_{2}O_{2}]_{1}= 0.500\, mol.L^{-1}" />{" "}
                នៅខណៈ t = 100\,s
              </p>
              <p>
                <InlineMath math="[H_{2}O_{2}]_{2}= 0.498\, mol.L^{-1}" /> នៅខណៈ
                t = 102\,s
              </p>
              <p>
                <InlineMath math="\Rightarrow t_{2} - t_{1} = 102 - 100 = 2\,s" />
              </p>
              <InlineMath math="\Rightarrow v_{t} =  - \lim_{\Delta t \to 0} \frac{0.498-0.5}{2}" />
              <InlineMath math="= - \frac{-0.002}{2} = 10^{-3}\, mol.L^{-1}.s^{-1}" />
            </div>
          </>
        ),
      },
    ],
  },
  hint: {
    content: (
      <>
        <div className="flex flex-col items-start gap-3">
          <p>
            កំហាប់គិតជា <InlineMath math="mol.L^{-1}" />{" "}
          </p>
          <p>
            រយៈពេលគិតជា <InlineMath math="min" /> ឬ <InlineMath math="s" />
          </p>
          <p>
            ល្បឿនគិតជា <InlineMath math="mol.L^{-1}.min^{-1}" /> ឬ{" "}
            <InlineMath math="mol.L^{-1}.s^{-1}" />
          </p>
        </div>
      </>
    ),
  },
};

const TwelfthTopicContent: TopicContent = {
  definition: {
    title: "៣. ការវិវត្តន៏កំហាប់អង្គធាតុប្រតិករ (R) និងកំហាប់អង្គធាតុកកេីត (P)",
    content: <div className="flex flex-col items-start gap-3"></div>,
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <div className="flex flex-col items-start gap-3">
          <ul className="list-disc ml-5 flex flex-col gap-2">
            <li>
              កំហាប់អង្គធាតុប្រតិករថយចុះជាអនុគមន៍ទៅនឹងរយៈពេល
              ហើយនៅពេលអានន្តកំហាប់អង្គធាតុប្រតិករវិវត្តទៅរកកំហាប់អានន្តដែរ [R] ។
            </li>
            <li>
              កំហាប់អង្គធាតុកកើតកើនឡើងជាអនុគមន៍ទៅនឹងកំណើនរយៈពេល ហើយនៅពេលអានន្ត
              កំហាប់អង្គធាតុកកើតវិវត្តទៅរកកំហាប់អានន្តដែរ [P]។
            </li>
          </ul>
          <p>
            {" "}
            <span className="font-bold">ជាទូទៅ:</span> ក្នុងពេលប្រតិកម្ម
            កំហាប់អង្គធាតុប្រតិករថយចុះ ឯកំហាប់អង្គធាតុកកើតកើនឡើង។
          </p>
          <ul className="list-disc ml-5 flex flex-col gap-2">
            <li>
              ពេលពាក់កណ្តាលប្រតិកម្ម <InlineMath math="t_{frac{1}{2}}" />{" "}
              គឺជាពេលដែលត្រូវនឹងកំហាប់ផលិតផល កកើតបានពាក់កណ្តាល ឬ
              កំហាប់អង្គធាតុប្រតិករអស់ពាក់កណ្តាល។
            </li>
            <li>
              កំហាប់ផលិតផលកកើតបានពាក់កណ្តាល{" "}
              <InlineMath math="[P]t_{frac{1}{2}} = \frac{[P]_{\infty}}{2}" />
            </li>
            <li>
              កំហាប់អង្គធាតុប្រតិករនៅសល់ពាក់កណ្តាល{" "}
              <InlineMath math="[R]t_{frac{1}{2}} = \frac{[R]_{0}-[R]_{\infty}}{2}" />
            </li>
          </ul>
        </div>
      </>
    ),
  },
};

const ThirdTeenthTopicContent: TopicContent = {
  definition: {
    title:
      "៤. ការវិវត្តន៏ល្បឿនបំបាត់អង្គធាតុប្រតិករ (R) និងល្បឿនកំណអង្គធាតុកកេីត (P)",
    content: <div className="flex flex-col items-start gap-3"></div>,
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <div className="flex flex-col items-start gap-3">
          <ul className="list-disc ml-5 flex flex-col gap-2">
            <li>
              ល្បឿនបំបាត់អង្គធាតុប្រតិករថយចុះ ជាអនុគមន៍ទៅនឹងកំណើនរយៈពេល
              ហើយខ្សែកោង [R] = f(t)ខិតជិតអាស៊ីមតូតដេក{" "}
              <InlineMath math="[R]_{\infty}" /> ។
            </li>
            <li>
              ល្បឿនកំណអង្គធាតុកកើតថយចុះ ជាអនុគមន៍ ទៅនឹងកំណើនរយៈពេល
              ហើយនៅពេលអានន្តខ្សែកោង [P] = f(t) ខិតជិតអាស៊ីមតូតដេក{" "}
              <InlineMath math="[P]_{\infty}" /> ។
            </li>
          </ul>
        </div>
      </>
    ),
  },
  hint: {
    content: (
      <>
        <div className="hidden md:block w-130">
          <img src="/chemistry/pic30.png" alt="" />
        </div>

        {/* Show these two images only on mobile (below md) */}
        <div className="flex flex-col gap-2 md:hidden">
          <img src="/chemistry/pic28.png" alt="" />
          <img src="/chemistry/pic29.png" alt="" />
        </div>
      </>
    ),
  },
};

const RateChemicalReaction = () => {
  return (
    <>
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
      </div>
      <div>
        {FourthTopic.definition && (
          <DefinitionBox
            title={FourthTopic.definition.title}
            content={FourthTopic.definition.content}
          />
        )}
        {FourthTopic.tip && (
          <TipBox
            title={FourthTopic.tip.title}
            content={FourthTopic.tip.content}
          />
        )}
        {FourthTopic.example && (
          <ExampleBox
            question={FourthTopic.example.question}
            steps={FourthTopic.example.steps}
            answer={FourthTopic.example.answer}
          />
        )}
      </div>
      <div>
        {FifthTopic.definition && (
          <DefinitionBox
            title={FifthTopic.definition.title}
            content={FifthTopic.definition.content}
          />
        )}
        {FifthTopic.tip && (
          <TipBox
            title={FifthTopic.tip.title}
            content={FifthTopic.tip.content}
          />
        )}
      </div>
      <div>
        {SixthTopic.definition && (
          <DefinitionBox
            title={SixthTopic.definition.title}
            content={SixthTopic.definition.content}
          />
        )}
        {SixthTopic.tip && (
          <TipBox
            title={SixthTopic.tip.title}
            content={SixthTopic.tip.content}
          />
        )}
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
      <div>
        {NinethTopicContent.definition && (
          <DefinitionBox
            title={NinethTopicContent.definition.title}
            content={NinethTopicContent.definition.content}
          />
        )}
        {NinethTopicContent.tip && (
          <TipBox
            title={NinethTopicContent.tip.title}
            content={NinethTopicContent.tip.content}
          />
        )}
        {NinethTopicContent.example && (
          <ExampleBox
            question={NinethTopicContent.example.question}
            steps={NinethTopicContent.example.steps}
            answer={NinethTopicContent.example.answer}
          />
        )}
      </div>
      <div>
        {TenthTopicContent.definition && (
          <DefinitionBox
            title={TenthTopicContent.definition.title}
            content={TenthTopicContent.definition.content}
          />
        )}
        {TenthTopicContent.tip && (
          <TipBox
            title={TenthTopicContent.tip.title}
            content={TenthTopicContent.tip.content}
          />
        )}
        {TenthTopicContent.example && (
          <ExampleBox
            question={TenthTopicContent.example.question}
            steps={TenthTopicContent.example.steps}
            answer={TenthTopicContent.example.answer}
          />
        )}
      </div>
      <div>
        {EleventhTopicContent.definition && (
          <DefinitionBox
            title={EleventhTopicContent.definition.title}
            content={EleventhTopicContent.definition.content}
          />
        )}
        {EleventhTopicContent.tip && (
          <TipBox
            title={EleventhTopicContent.tip.title}
            content={EleventhTopicContent.tip.content}
          />
        )}
        {EleventhTopicContent.example && (
          <ExampleBox
            question={EleventhTopicContent.example.question}
            steps={EleventhTopicContent.example.steps}
            answer={EleventhTopicContent.example.answer}
          />
        )}
        {EleventhTopicContent.hint && (
          <HintBox content={EleventhTopicContent.hint.content} />
        )}
      </div>
      <div>
        {TwelfthTopicContent.definition && (
          <DefinitionBox
            title={TwelfthTopicContent.definition.title}
            content={TwelfthTopicContent.definition.content}
          />
        )}
        {TwelfthTopicContent.tip && (
          <TipBox
            title={TwelfthTopicContent.tip.title}
            content={TwelfthTopicContent.tip.content}
          />
        )}
        {TwelfthTopicContent.example && (
          <ExampleBox
            question={TwelfthTopicContent.example.question}
            steps={TwelfthTopicContent.example.steps}
            answer={TwelfthTopicContent.example.answer}
          />
        )}
      </div>
      <div>
        {ThirdTeenthTopicContent.definition && (
          <DefinitionBox
            title={ThirdTeenthTopicContent.definition.title}
            content={ThirdTeenthTopicContent.definition.content}
          />
        )}
        {ThirdTeenthTopicContent.tip && (
          <TipBox
            title={ThirdTeenthTopicContent.tip.title}
            content={ThirdTeenthTopicContent.tip.content}
          />
        )}
        {ThirdTeenthTopicContent.example && (
          <ExampleBox
            question={ThirdTeenthTopicContent.example.question}
            steps={ThirdTeenthTopicContent.example.steps}
            answer={ThirdTeenthTopicContent.example.answer}
          />
        )}
        {ThirdTeenthTopicContent.hint && (
          <HintBox content={ThirdTeenthTopicContent.hint.content} />
        )}
      </div>
    </>
  );
};

export default RateChemicalReaction;
