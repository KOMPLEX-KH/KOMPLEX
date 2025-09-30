import React from 'react'

import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox"
import TipBox from "@/components/pages/docs/boxes/TipBox"
import { TopicContent } from "@/types/docs/topic"
import { InlineMath } from "react-katex"
import 'katex/dist/katex.min.css'
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox"


const FirstTopicContent: TopicContent = {
  definition: {
    title: "១. អាស៊ីត-បាសឆ្លាស់",
    content:
      <>
        <div className="flex flex-col items-start">

        </div>
      </>
  }
}

const SecondTopicContent: TopicContent = {
  definition: {
    title: "១.១ អាស៊ីត",
    content:
      <>
        <div className="flex flex-col items-start">
          <p>អាសុីតឆ្លាស់ គឺជាប្រភេទគីមីដែលកេីតឡេីងពេលបាសប្រុងស្ទែត-ឡូរីចាប់យកប្រូតុង១ ។</p>
        </div>
      </>
  },

  example: {
    question: [
      <div className="flex flex-col items-start gap-3 text-[13px]" key="q1">
        <InlineMath math="HCOOH + H_{2}O \rightleftharpoons HCOO^{-} + H_{3}O^{+}" />
        <InlineMath math="CH_{3}COOH + H_{2}O \rightleftharpoons CH_{3}COO^{-} + H_{3}O^{+}" />
        <InlineMath math="C_{6}H_{5}COOH + H_{2}O \rightleftharpoons C_{6}H_{5}COO^{-} + H_{3}O^{+}" />
      </div>,
    ],
  },
  exercise: {
    questions: [

    ]
  },
}

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "១.២ បាស",
    content:
      <>
        <div className="flex flex-col items-start">
          <p>បាសឆ្លាស់ គឺជាប្រភេទគីមីដែលនៅសល់ក្រោយពីអាសុីតប្រុងស្ទែតឡូរីបោះបង់ប្រូតុង១ ។</p>
        </div>
      </>
  },

  example: {
    question: [
      <div className="flex flex-col items-start gap-3 text-[13px]" key="q1">
        <InlineMath math="HCOO^{-} + H_{2}O \rightleftharpoons HCOOH + OH^{-}" />
        <InlineMath math="CH_{3}COO^{-} + H_{2}O \rightleftharpoons CH_{3}COOH + OH^{-}" />
        <InlineMath math="C_{6}H_{5}COO^{-} + H_{2}O \rightleftharpoons C_{6}H_{5}COOH + OH^{-}" />
      </div>,
    ],
  },
  example2: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <div className='flex items-center gap-2 flex-wrap'>
          <p>ក. ចូរផ្តល់បាសឆ្លាស់របស់អាសុីតបន្តបន្ទាប់នេះ</p>
          <div className='text-[13px]'>
            <InlineMath math="CH_{2}ClCOOH , HIO_{4} , " />
            <InlineMath math="H_{3}PO_{4} , " />
            <InlineMath math="NH_{4}^{+} , " />
            <InlineMath math=" H_{2}S" />
          </div>
        </div>
        <div className='flex items-center gap-2 flex-wrap'>
          <p>ខ. ចូរផ្តល់អាសុីតឆ្លាស់របស់បាសបន្តបន្ទាប់នេះ</p>
          <div className='text-[13px]'>
            <InlineMath math="NH_{3} , HSO_{4}^{-} , " />
            <InlineMath math="NO_{2}^{-} , " />
            <InlineMath math=" CH_{3}CH_{2}COO^{-}" />
          </div>
        </div>
      </div>,
    ],
    steps: [
      {
        title: "កំណត់ប្រភេទសមាសធាតុខាងក្រោម :",
        content: (
          <>
            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-start gap-2 flex-col'>
                <p>បាសឆ្លាស់របស់អាសុីត :</p>
                <div className='flex items-center gap-2 flex-wrap'>
                  <span className='text-[13px]'><InlineMath math="CH_{2}ClCOOH " /></span>
                  <span>គឺ </span>
                  <span className='text-[13px]'><InlineMath math="CH_{2}ClCOO^{-} " /></span>
                </div>
                <div className='flex items-center gap-2 flex-wrap'>
                  <span className='text-[13px]'><InlineMath math="HIO_{4} " /></span>
                  <span>គឺ </span>
                  <span className='text-[13px]'><InlineMath math="IO_{4}^{-} " /></span>
                </div>
                <div className='flex items-center gap-2 flex-wrap'>
                  <span className='text-[13px]'><InlineMath math="H_{2}PO_{4} " /></span>
                  <span>គឺ </span>
                  <span className='text-[13px]'><InlineMath math="H_{2}PO_{4}^{-} " /></span>
                </div>
                <div className='flex items-center gap-2 flex-wrap'>
                  <span className='text-[13px]'><InlineMath math="NH_{4}^{+} " /></span>
                  <span>គឺ </span>
                  <span className='text-[13px]'><InlineMath math="NH_{3} " /></span>
                </div>
                <div className='flex items-center gap-2 flex-wrap'>
                  <span className='text-[13px]'><InlineMath math="H_{2}S " /></span>
                  <span>គឺ </span>
                  <span className='text-[13px]'><InlineMath math="HS^{-} " /></span>
                </div>
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <p>អាសុីតឆ្លាស់របស់បាស :</p>
                <div className='flex items-center gap-2 flex-wrap'>
                  <span className='text-[13px]'><InlineMath math="NH_{3}" /></span>
                  <span>គឺ </span>
                  <span className='text-[13px]'><InlineMath math="NH_{4}^{+} " /></span>
                </div>
                <div className='flex items-center gap-2 flex-wrap'>
                  <span className='text-[13px]'><InlineMath math="HSO_{4}^{-} " /></span>
                  <span>គឺ </span>
                  <span className='text-[13px]'><InlineMath math="H_{2}SO_{4} " /></span>
                </div>
                <div className='flex items-center gap-2 flex-wrap'>
                  <span className='text-[13px]'><InlineMath math="NO_{2}^{-} " /></span>
                  <span>គឺ </span>
                  <span className='text-[13px]'><InlineMath math="HNO_{2} " /></span>
                </div>
                <div className='flex items-center gap-2 flex-wrap'>
                  <span className='text-[13px]'><InlineMath math="CH_{3}CH_{2}COO^{-} " /></span>
                  <span>គឺ </span>
                  <span className='text-[13px]'><InlineMath math="CH_{3}CH_{2}COOH " /></span>
                </div>
              </div>
            </div>
          </>
        )
      },
    ]
  },
  exercise: {
    questions: [

    ]
  },
}


const FourthTopicContent: TopicContent = {
  definition: {
    title: "២. គូអាសុីត-បាស",
    content:
      <>
        <div className="flex flex-col items-start">
          <p>គូអាសុីត-បាស គឺជាគូនៃប្រភេទគីមីឆ្លាស់គ្នាដែលប្តូរប្រូតុងគ្នាទៅមក ។ គូអាសុីត-បាសមានអាសុីតមួយគូ គេសរសេរ អាសុីត/បាស។</p>
        </div>
      </>
  },

  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <span className='text-[13px]'><InlineMath math="NH_{3} (aq) + HF (aq) \rightleftharpoons NH_{4}^{+} (aq) + F^{-} (aq)" /></span>
        <div className='flex items-center gap-2 flex-wrap'>
          <p>គេបានគូអាសុីត-បាស ២គូរ គឺ </p>
          <span className='text-[13px]'><InlineMath math="NH_{4}^{+} / NH_{3} " /></span>
          <span>និង</span>
          <span className='text-[13px]'><InlineMath math="HF / F^{-}" /></span>
        </div>
      </div>,
    ],
  },
  example2: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <p>ចូរកំណត់គូអាសុីត-បាសនៃប្រតិកម្មនីមួយៗខាងក្រោមនេះ :</p>
        <div className='flex items-center gap-2 flex-wrap'>
          <span className='text-[13px]'>a. <InlineMath math="CH_{3}COO^{-} + HCN \rightleftharpoons CH_{3}COOH + CN^{-}" /></span>
        </div>
        <div className='flex items-center gap-2 flex-wrap'>
          <span className='text-[13px]'>b.<InlineMath math="HClO + CH_{3}NH_{2} \rightleftharpoons CH_{3}NH_{3}^{+} + ClO^{-}" /></span>

        </div>
        <div className='flex items-center gap-2 flex-wrap'>
          <span className='text-[12px]'>c. <InlineMath math="CH_{3}CH_{2}COO^{-} + H_{2}O \rightleftharpoons CH_{3}CH_{2}COOH + OH^{-}" /></span>
        </div>
      </div>,
    ],
    steps: [
      {
        title: "កំណត់គូអាសុីត-បាសនៃប្រតិកម្មនីមួយៗ :",
        content: (
          <>
            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-center gap-2 flex-wrap'>
                <span>a. </span>
                <span className='text-[13px]'><InlineMath math="CH_{3}COOH / CH_{3}COO^{-}" /></span>
                <span>និង</span>
                <span className='text-[13px]'><InlineMath math="HCN / CN^{-}" /></span>
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <span>b. </span>
                <span className='text-[13px]'><InlineMath math="HClO / ClO^{-}" /></span>
                <span>និង</span>
                <span className='text-[13px]'><InlineMath math="CH_{3}NH_{3}^{+} / CH_{3}NH_{2}" /></span>
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <span>c. </span>
                <span className='text-[13px]'><InlineMath math="CH_{3}CH_{2}COOH / CH_{3}CH_{2}COO^{-}" /></span>
                <span>និង</span>
                <span className='text-[13px]'><InlineMath math="H_{2}O / OH^{-}" /></span>
              </div>
            </div>
          </>
        )
      },
    ]
  },
  exercise: {
    questions: [

    ]
  },
}



const FifthTopicContent: TopicContent = {
  definition: {
    title: "៣. ប្រតិកម្មអាស៊ីត-បាស",
    content:
      <>
        <div className="flex flex-col items-start">

        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <ul className='list-disc pl-5 flex flex-col items-start gap-4'>
          <div className='flex items-center gap-2 flex-wrap'>
            <li>អាសុីតខ្លាំង បាសខ្លាំង :</li>
            <span className='text-[13px]'><InlineMath math="HCl (aq) + NaOH (aq) \rightleftharpoons NaCl (aq) + H_{2}O (l)" /></span>
            <p>ល្បាយក្រោយប្រតិកម្មជាសូលុយស្យុងណឺត។</p>
          </div>
          <div className='flex items-center gap-2 flex-wrap'>
            <li>អាសុីតខ្លាំង បាសខ្សោយ :</li>
            <span className='text-[13px]'><InlineMath math="HCl (aq) + CH_{3}COONa (aq) \rightleftharpoons NaCl (aq) + CH_{3}COOH (aq)" /></span>
            <p>ល្បាយក្រោយប្រតិកម្មជាសូលុយស្យុងអាសុីតខ្សោយ។</p>
          </div>
          <div className='flex items-center gap-2 flex-wrap'>
            <li>អាសុីតខ្សោយ បាសខ្លាំង :</li>
            <span className='text-[13px]'><InlineMath math="CH_{3}COOH (aq) + NaOH (aq) \rightleftharpoons CH_{3}COONa (aq) + H_{2}O (l)" /></span>
            <p>ល្បាយក្រោយប្រតិកម្មជាសូលុយស្យុងបាសខ្លាំង។</p>
          </div>
          <div className='flex items-center flex-wrap gap-3'>
            <p className='font-bold'>ចំណាំ :</p>
            <p>ប្រតិកម្មទាំងបីប្រភេទខាងលេីជាប្រតិកម្មសព្វ។</p>
          </div>
        </ul>
      </>
    ),
  },
}



const AcidbaseReaction = () => {
  return (
    <div>
      <div>
        {FirstTopicContent.definition && (
          <DefinitionBox title={FirstTopicContent.definition.title} content={FirstTopicContent.definition.content} />
        )}
        {FirstTopicContent.tip && (
          <TipBox title={FirstTopicContent.tip.title} content={FirstTopicContent.tip.content} />
        )}
      </div>
      <div>
        {SecondTopicContent.definition && (
          <DefinitionBox title={SecondTopicContent.definition.title} content={SecondTopicContent.definition.content} />
        )}
        {SecondTopicContent.tip && (
          <TipBox title={SecondTopicContent.tip.title} content={SecondTopicContent.tip.content} />
        )}
        {SecondTopicContent.example && (
          <ExampleBox question={SecondTopicContent.example.question} />
        )}
      </div>
      <div>
        {ThirdTopicContent.definition && (
          <DefinitionBox title={ThirdTopicContent.definition.title} content={ThirdTopicContent.definition.content} />
        )}
        {ThirdTopicContent.tip && (
          <TipBox title={ThirdTopicContent.tip.title} content={ThirdTopicContent.tip.content} />
        )}
        {ThirdTopicContent.example && (
          <ExampleBox question={ThirdTopicContent.example.question} />
        )}
        {ThirdTopicContent.example2 && (
          <ExampleBox question={ThirdTopicContent.example2.question} steps={ThirdTopicContent.example2.steps} />
        )}
      </div>
      <div>
        {FourthTopicContent.definition && (
          <DefinitionBox title={FourthTopicContent.definition.title} content={FourthTopicContent.definition.content} />
        )}
        {FourthTopicContent.tip && (
          <TipBox title={FourthTopicContent.tip.title} content={FourthTopicContent.tip.content} />
        )}
        {FourthTopicContent.example && (
          <ExampleBox question={FourthTopicContent.example.question} />
        )}
        {FourthTopicContent.example2 && (
          <ExampleBox question={FourthTopicContent.example2.question} steps={FourthTopicContent.example2.steps} />
        )}
      </div>
      <div>
        {FifthTopicContent.definition && (
          <DefinitionBox title={FifthTopicContent.definition.title} content={FifthTopicContent.definition.content} />
        )}
        {FifthTopicContent.tip && (
          <TipBox title={FifthTopicContent.tip.title} content={FifthTopicContent.tip.content} />
        )}
        {FifthTopicContent.example && (
          <ExampleBox question={FifthTopicContent.example.question} />
        )}
      </div>
    </div>
  )
}

export default AcidbaseReaction
