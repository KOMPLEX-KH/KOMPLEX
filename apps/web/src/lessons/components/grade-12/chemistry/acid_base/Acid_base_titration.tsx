import React from 'react'

import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox"
import TipBox from "@/components/pages/docs/boxes/TipBox"
import { TopicContent } from "@/types/docs/topic"
import { InlineMath } from "react-katex"
import 'katex/dist/katex.min.css'
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox"




const FirstTopicContent: TopicContent = {
  definition: {
    title: "១. អត្រាកម្ម",
    content:
      <>
        <div className="flex flex-col items-start">
          <p> <span className='font-bold'>អត្រាកម្មអាសុីត-បាស</span> ជាលំនាំឬបច្ចេកទេសដែល គេប្រេីនៅទីពិសោធន៍ដេីម្បីកំណត់កំហាប់សូលុយស្យុងអាសុីត ឬបាសមិនស្គាល់កំហាប់ ដោយប្រេីសូលុយស្យុងបាស​ ឬអាសុីតដែលស្គាល់កំហាប់ច្បាស់លាស់។ សូលុយស្យុងដែលគេស្គាល់កំហាប់ ហៅថា <span className='font-bold'>សូលុយស្យុងស្តង់ដារ</span> ។</p>
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <div className='flex flex-col gap-3 items-start'>
          <div className='flex items-center gap-3 flex-wrap'>
            <p className='font-bold'>ប្រតិកម្មបន្សាប </p>
            <p>ជាប្រតិកម្មរវាងអុីយ៉ុង </p>
            <span className='text-[13px]'><InlineMath math="[H_{3}O^{+}]" /></span>
            <p>របស់អាសុីត និងអុីយ៉ុង </p>
            <span className='text-[13px]'><InlineMath math="[OH^{-}]" /></span>
            <p>របស់បាស ។</p>
          </div>

        </div>
      </>
    ),
  },

  example: {
    question: [
      <div className="flex flex-col items-start gap-3 text-[13px]" key="q1">
        <InlineMath math="NaOH (s) \rightarrow Na^{+} (aq) + OH^{-} (aq)" />
        <InlineMath math="HCl + H_{2}O \rightarrow H_{3}O^{+} + Cl^{-} " />
        <InlineMath math="H_{3}O^{+} (aq) + OH^{-} (aq) \rightarrow 2H_{2}O" />
      </div>,
    ],
  },
  exercise: {
    questions: [

    ]
  },
}

const SecondTopicContent: TopicContent = {
  definition: {
    title: "២. ចំណុចសមមូលអាសុីត-បាស",
    content:
      <>
        <div className="flex flex-col items-start">
          <p> <span className='font-bold'>ចំណុចសមមូលអាសុីត-បាស</span> ជាចំណុចដែលបរិមាណអាសុីត និងបរិមាណបាសប្រតិកម្មអស់ពីសូលុយស្យុង ។ គេប្រេីអង្គធាតុចង្អុលពណ៌ជាសញ្ញាប្រាប់ឲដឹងថាចំណុចសមមូលកេីតមាន ។</p>
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <div className='flex flex-col gap-3 items-start'>
          <div className='flex items-center gap-3 flex-wrap'>
            <p>ទំនាក់ទំនងបរិមាណនៅចំណុចសមមូលអាសុីតបាស </p>
            <span className='text-[13px]'><InlineMath math="C_{a} \cdot V_{a} = C_{b} \cdot V_{b} " /></span>
          </div>
          <div className='flex items-start gap-7 flex-wrap'>
            <div className='flex items-start gap-2 flex-wrap'>
              <span className='text-[13px]'><InlineMath math="C_{a} " /></span>
              <p>កំហាប់អាសុីត</p>
            </div>
            <div className='flex items-start gap-2 flex-wrap'>
              <span className='text-[13px]'><InlineMath math="C_{b} " /></span>
              <p>កំហាប់បាស</p>
            </div>
          </div>
          <div className='flex items-start gap-11 flex-wrap'>
            <div className='flex items-start gap-2 flex-wrap'>
              <span className='text-[13px]'><InlineMath math="V_{a} " /></span>
              <p>មាឌអាសុីត</p>
            </div>
            <div className='flex items-start gap-2 flex-wrap'>
              <span className='text-[13px]'><InlineMath math="V_{b} " /></span>
              <p>មាឌបាស</p>
            </div>
          </div>
        </div>
      </>
    ),
  },

  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">

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
    title: "៣. ជម្រេីសអង្គធាតុចង្អុលពណ៌",
    content:
      <>
        <div className="flex flex-col items-start">
          <p> <span className='font-bold'>អង្គធាតុចង្អុលពណ៌</span> ជាសារធាតុសរីរាង្គដែលពណ៌របស់វាអាស្រ័យនឹងតម្លៃ pH ។</p>
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <ul className='list-disc pl-2 flex flex-col items-start gap-4'>
          <li>អត្រាកម្មអាសុីតខ្លាំង-បាសខ្លាំង ប្រេីអង្គធាតុចង្អុលពណ៌ ប្រូម៉ូទីម៉ុលខៀវ ។</li>
          <li>អត្រាកម្មអាសុីតខ្សោយដោយបាសខ្លាំង ប្រេីអង្គធាតុចង្អុលពណ៌ ផេណុលផ្តាលេអុីន ។</li>
          <li>អត្រាកម្មបាសខ្សោយដោយអាសុីតខ្លាំង ប្រេីអង្គធាតុចង្អុលពណ៌ អេល៉្យង់ទីន ។</li>
        </ul>
      </>
    ),
  },

  example: {
    question: [
      <div className="flex flex-col items-start" key="q1">
        <p>សិស្សម្នាក់ធ្វេីអត្រាកម្មសូលុយស្យុង HCI មិនស្គាល់កំហាប់ចំនួន 40.00mL ជាមួយនឹងសូលុយស្យុង NaOH កំហាប់ 0.5500M ។ មាឌសូលុយស្យុងបាសដែលត្រូវការចាំបាច់សម្រាប់ឲដល់ចំណុចសមមូលមាន 24.64mL ។</p>
        <p>រកកំហាប់ជាម៉ូលរបស់សូលុយស្យុង HCI ។</p>
      </div>,
    ],
    steps: [
      {
        title: "រកកំហាប់ជាម៉ូលរបស់សូលុយស្យុង HCI",
        content: (
          <>
            <div className='flex flex-col items-start gap-3'>
              <div className='flex items-center gap-2 flex-wrap'>
                <p>តាមសម្មតិកម្ម : </p>
                <span className='text-[13px]'><InlineMath math="V(H_{3}O^{+}) = 40mL = 0.04L " /></span>
              </div>
              <span className='text-[13px]'><InlineMath math="V(OH^{-}) = 24.64mL = 0.02464L " /></span>
              <span className='text-[13px]'><InlineMath math="C(OH^{-}) = 0.55 M" /></span>
              <p>តាមរូបមន្តនៅចំណុចសមមូល</p>
              <div className='flex items-center gap-2 flex-wrap'>
                <span className='text-[13px]'><InlineMath math="C_{A} \cdot V_{A} = C_{B} \cdot V_{B} " /></span>
                <div className='flex items-center gap-2 flex-wrap'>
                  <span className='text-[13px]'><InlineMath math="\Leftrightarrow C_{A} = " /></span>
                  <div className='text-[16px]'>
                    <InlineMath math="\frac{C_{B}V_{B}}{V_{A}}" />
                  </div>
                </div>
              </div>
              <div className='flex items-center gap-2 flex-wrap'>
                <div className='text-[16px]'>
                  <InlineMath math="= \frac{0.55 \cdot 0.02464}{0.04}" />
                </div>
                <span className='text-[13px]'><InlineMath math="= 0.338 M" /></span>

              </div>

              <div className='flex items-center gap-2 flex-wrap'>
                <p>ដូចនេះកំហាប់របស់ HCI គឺ </p>
                <InlineMath math="= 0.338 M" />
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





const Acid_base_titration = () => {
  return (
    <div>
      <div>
        {FirstTopicContent.definition && (
          <DefinitionBox title={FirstTopicContent.definition.title} content={FirstTopicContent.definition.content} />
        )}
        {FirstTopicContent.tip && (
          <TipBox title={FirstTopicContent.tip.title} content={FirstTopicContent.tip.content} />
        )}
        {FirstTopicContent.example && (
          <ExampleBox question={FirstTopicContent.example.question} />
        )}
      </div>
      <div>
        {SecondTopicContent.definition && (
          <DefinitionBox title={SecondTopicContent.definition.title} content={SecondTopicContent.definition.content} />
        )}
        {SecondTopicContent.tip && (
          <TipBox title={SecondTopicContent.tip.title} content={SecondTopicContent.tip.content} />
        )}

      </div>
      <div>
        {ThirdTopicContent.definition && (
          <DefinitionBox title={ThirdTopicContent.definition.title} content={ThirdTopicContent.definition.content} />
        )}
        {ThirdTopicContent.tip && (
          <TipBox title={ThirdTopicContent.tip.title} content={ThirdTopicContent.tip.content} />
        )}
        <div className="w-full overflow-x-auto ">
          <table className="min-w-max border border-gray-300 rounded-lg text-sm sm:text-base">
            <thead className=' bg-indigo-600 text-white'>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left">អង្គធាតុចង្អុលពណ៌</th>
                <th className="border border-gray-300 px-4 py-2 text-left">តំបន់ប្រែពណ៌</th>
                <th className="border border-gray-300 px-4 py-2 text-left">ពណ៌អាសុីត</th>
                <th className="border border-gray-300 px-4 py-2 text-left">ពណ៌បាស</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border border-gray-300 px-4 py-2 text-left">
                <td className="border border-gray-300 px-4 py-2 text-left">អេល៉្យង់ទីន (H)</td>
                <td className="border border-gray-300 px-4 py-2 text-left">3.1 - 4.4</td>
                <td className="border border-gray-300 px-4 py-2 text-left">ក្រហម</td>
                <td className="border border-gray-300 px-4 py-2 text-left">លឿងខ្ចី</td>
              </tr>
              <tr className="border border-gray-300 px-4 py-2 text-left">
                <td className="border border-gray-300 px-4 py-2 text-left">ប្រូម៉ូទីម៉ុលខៀវ (BBT)</td>
                <td className="border border-gray-300 px-4 py-2 text-left">6.0 - 7.6</td>
                <td className="border border-gray-300 px-4 py-2 text-left">លឿង</td>
                <td className="border border-gray-300 px-4 py-2 text-left">ខៀវ</td>
              </tr>
              <tr className="border border-gray-300 px-4 py-2 text-left">
                <td className="border border-gray-300 px-4 py-2 text-left">ផេណុលផ្តាលេអុីន (PP)</td>
                <td className="border border-gray-300 px-4 py-2 text-left">8.2 - 10.0</td>
                <td className="border border-gray-300 px-4 py-2 text-left">គ្មានពណ៌</td>
                <td className="border border-gray-300 px-4 py-2 text-left">កូឡាប</td>
              </tr>
            </tbody>
          </table>
        </div>
        {ThirdTopicContent.example && (
          <ExampleBox question={ThirdTopicContent.example.question} steps={ThirdTopicContent.example.steps} />
        )}
      </div>

    </div>
  )
}

export default Acid_base_titration
