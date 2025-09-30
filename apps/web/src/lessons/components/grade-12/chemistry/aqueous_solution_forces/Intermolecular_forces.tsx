import React from 'react'

import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox"
import TipBox from "@/components/pages/docs/boxes/TipBox"
import HintBox from "@/components/pages/docs/boxes/HintBox"
import { TopicContent } from "@/types/docs/topic"
import { BlockMath, InlineMath } from "react-katex"
import 'katex/dist/katex.min.css'
import WarningBox from "@/components/pages/docs/boxes/WarningBox"
import ExerciseBox from "@/components/pages/docs/boxes/ExerciseBox"
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox"
import { div } from "three/tsl"




const FirstTopicContent: TopicContent = {
  definition: {
    title: "១. ការប្រៀបធៀបសមាសធាតុអុីយ៉ុង និងសមាសធាតុកូវ៉ាឡង់",
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
        <div className='flex items-start gap-10 flex-col sm:flex-row sm:gap-40'>
          <div className='flex items-start flex-col gap-3'>
            <p className='font-bold pl-5'>សមាសធាតុអុីយ៉ុង </p>
            <ul className='list-disc pl-3'>
              <li>ភាគច្រេីនជាអង្គធាតុរឹង ឬក្រាម</li>
              <li>ភាគច្រេីនបង្កពីលោហះ និងអលោហះ</li>
              <li>មានសីតុណ្ហភាពរលាយ និងរំពុះខ្ពស់</li>
              <li>ដង់សុីតេខ្ពស់</li>
            </ul>
          </div>
          <div className='flex items-start flex-col gap-3'>
            <p className='font-bold pl-5'>សមាសធាតុកូវ៉ាឡង់</p>
            <ul className='list-disc pl-3'>
              <li>ភាគច្រេីនជាអង្គធាតុរាង​ ឬឧស្ម័ន</li>
              <li>ភាគច្រេីនបង្កពីអលោហះ និងអលោហះ</li>
              <li>មានសីតុណ្ហភាពរលាយ និងរំពុះទាប</li>
              <li>ដង់សុីតេទាប</li>
            </ul>
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
    steps: [


    ],
    answer: (
      <div>

      </div>
    )
  },
  exercise: {
    questions: [

    ]
  },
}

const SecondTopic: TopicContent = {
  definition: {
    title: "២. អុីយ៉ុងមានបន្ទុកផ្ទុយគ្នាប្រទាញគ្នាទៅវិញទៅមក",
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
        <ul className='list-disc pl-3 flex flex-col items-start gap-5'>
          <li>សមាសធាតុអុីយ៉ុងផ្សំឡេីងពីអុីយ៉ុងវិជ្ជមាននិងអវិជ្ជមាន។ អុីយ៉ុងដែលមានបន្ទុកផ្ទុយគ្នាប្រទាញគ្នាទៅវិញទៅមកបង្កេីតបានជាកម្លាំងអុីយ៉ុង(កម្លាំងអេឡិចត្រូស្តាទិច)។</li>
          <li>អុីយ៉ុងដែលមានទំហំតូចចូលផ្សំគ្នាបង្កេីតបានជាសមាសធាតុមានចំណុចរំពុះខ្ពស់ជាងអុីយ៉ុងដែលមានទំហំធំ។</li>
          <li>សមាសធាតុបង្កពីអុីយ៉ុងដែលមានបន្ទុកធំមានចំណុចរំពុះខ្ពស់ជាងសមាសធាតុដែលបង្កពីអុីយ៉ុងដែលមានបន្ទុកតូច។</li>
        </ul>
      </>
    ),
  },

  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">

      </div>,
    ],
    steps: [


    ],
    answer: (
      <div>

      </div>
    )
  },
  exercise: {
    questions: [

    ]
  },
}


const ThirdTopic: TopicContent = {
  definition: {
    title: "៣. កម្លាំងអន្តរម៉ូលេគុល",
    content:
      <>
        <div className="flex flex-col items-start">
          <p>កម្លាំងអន្តរម៉ូលេគុលគឺជាកម្លាំងប្រទាញគ្នាទៅវិញទៅមករវាងម៉ូលេគុលនិងម៉ូលេគុល។</p>
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <ul className='list-disc pl-3 flex flex-col items-start gap-5'>
          <li>កម្លាំងអាចជាកម្លាំងឌីប៉ូល-ឌីប៉ូល និងកម្លាំងរបាយឡុនដុន។ កម្លាំងទាំងពីរនេះអាចកេីតមាននៅពេលវានៅជិតគ្នា។ កម្លាំងនេះខ្សោយកាលណាម៉ូលេគុលនៅឆ្ងាយពីគ្នាខ្លាំង ឬមានសីតុណ្ហភាពជិតតម្លៃសូន្យដាច់ខាត (0 K = -273.15 °C)</li>
          <li>ម៉ូលេគុលដែលមានចំណុចរំពុះខ្ពស់ជាង មានកម្លាំងអន្តរម៉ូលេគុលខ្ពស់ជាង។</li>
        </ul>
      </>
    ),
  },

  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">

      </div>,
    ],
    steps: [


    ],
    answer: (
      <div>

      </div>
    )
  },
  exercise: {
    questions: [

    ]
  },
}


const FourthTopicContent: TopicContent = {
  definition: {
    title: "៤. កម្លាំងរបាយឡុនដុន",
    content:
      <>
        <div className="flex flex-col items-start">
          <p>កម្លាំងរបាយឡុនដុនគឺជាកម្លាំងប្រទាញគ្នារវាងម៉ូលេគុល និងម៉ូលេគុលដែលមិនប៉ូលែ។</p>
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <ul className='list-disc pl-3 flex flex-col items-start gap-5'>
          <li>ម៉ូលេគុលដែលមានម៉ាសកាន់តែធំ ឬមានអេឡិចត្រុងកាន់តែច្រេីន នោះមានកម្លាំងប្រទាញរវាងម៉ូលេគុល និងម៉ូលេគុលកាន់តែខ្លាំង។ កម្លាំងប្រទាញកាន់តែខ្លាំងចំណុចរលាយ ឬចំណុចរំពុះកាន់តែខ្ពស់។</li>
          <li>កម្លាំងរបាយឡុនដុនមានលក្ខណៈខ្សោយជាងគេក្នុងចំណោមកម្លាំងអន្តរម៉ូលេគុលទាំងអស់។</li>
          <li>គេពិចារណាទៅលេីកម្លាំងរបាយឡុនដុនតែក្នុងករណីម៉ូលេគុលមិនប៉ូលែប៉ុណ្ណោះ។</li>
        </ul>
      </>
    ),
  },

  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">

      </div>,
    ],
    steps: [


    ],
    answer: (
      <div>

      </div>
    )
  },
  exercise: {
    questions: [

    ]
  },
}

const FifthTopicContent: TopicContent = {
  definition: {
    title: "៥. កម្លាំងឌីប៉ូល-ឌីប៉ូល",
    content:
      <>
        <div className="flex flex-col items-start">
          <p>ម៉ូលេគុលឌីប៉ូលជាម៉ូលេគុលដែលអាតូមក្នុងម៉ូលេគុលមានអេឡិចត្រូអវិជ្ជមានខុសគ្នា។</p>
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <ul className='list-disc pl-3 flex flex-col items-start gap-5'>
          <li>កម្លាំងឌីប៉ូល-ឌីប៉ូល កេីតឡេីងរវាងប៉ូលវិជ្ជមាននៃម៉ូលេគុលមួយ ជាមួយប៉ូលអវិជ្ជមាននៃម៉ូលេគុលមួយទៀត។</li>
          <li>ម៉ូលេគុលកាន់តែធំ កម្លាំងឌីប៉ូល-ឌីប៉ូលកាន់តែខ្លាំង។</li>
          <li>កាលណាកម្លាំងឌីប៉ូល-ឌីប៉ូលកាន់តែខ្លាំង នោះចំណុចរលាយនិងចំណុចរំពុះនៃសមាសធាតុកាន់តែខ្ពស់។</li>
          <li>កម្លាំងឌីប៉ូល-ឌីប៉ូលធំជាងកម្លាំងរបាយឡុនដុន។ គេអាចហៅថា កម្លាំងរបាយឡុនដុនថាជាកម្លាំង ឌីប៉ូលអន្ទង។</li>
        </ul>
      </>
    ),
  },

  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">

      </div>,
    ],
    steps: [


    ],
    answer: (
      <div>

      </div>
    )
  },
  exercise: {
    questions: [

    ]
  },
}

const SixthTopicContent: TopicContent = {
  definition: {
    title: "៦. សម្ព័ន្ធអុីដ្រូសែន",
    content:
      <>
        <div className="flex flex-col items-start">
          <p>សម្ព័ន្ធអុីដ្រូសែនគឺជាកម្លាំងអន្តរម៉ូលេគុលកេីតឡេីងរវាងអាតូមអុីដ្រូសែនក្នុងម៉ូលេគុលមួយ ជាមួយអាតូមមួយ ក្នុងម៉ូលេគុលផ្សេងទៀតដែលមានកម្រិតអេឡិចត្រូអវិជ្ជមានធំ(មានធាតុ N, O, F) ។</p>
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <div className='flex flex-col items-start gap-3'>
          <div className='flex items-center gap-3 flex-wrap'>
            <p>កម្លាំងអន្តរកម្មនេះ សរសេរជា: A - H ... B</p>
            <p>ឬ A - H ... A</p>
            <p>(A និង B អាចជា N, O ឬ F) ។</p>
          </div>
        </div>
      </>
    ),
  },

  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <div className='flex items-center flex-wrap'>

          <div className='flex items-center'>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1">
                <span>H</span>
                <span>–</span>
                <span>O</span>
              </div>
              <div className="flex flex-col items-center  pl-7">
                <span>|</span>
                <span>H</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center pl-1 gap-1">
                <span>---</span>
                <span>H</span>
                <span>–</span>
                <span>O</span>
              </div>
              <div className="flex flex-col items-center pl-13">
                <span>|</span>
                <span>H</span>
              </div>
            </div>
          </div>



        </div>

      </div>,
    ],
  },

  example2: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <p>ចូរកំណត់កម្លាំងអន្តរម៉ូលេគុលនិងសម្ព័ន្ធអុីដ្រូសែន នៃគូក្នុងសមាសធាតុខាងក្រោម៖</p>
        <div className='flex items-start gap-3 flex-col'>
          <div className='flex items-center gap-2 flex-wrap'>
            <p>ក. </p>
            <div className='text-[13px]'>
              <InlineMath math="HBr" />
            </div>
            <p>និង</p>
            <div className='text-[13px]'>
              <InlineMath math="H_{2}S" />
            </div>
          </div>
          <div className='flex items-center gap-2 flex-wrap'>
            <p>ខ. </p>
            <div className='text-[13px]'>
              <InlineMath math="Cl_{2}" />
            </div>
            <p>និង</p>
            <div className='text-[13px]'>
              <InlineMath math="CBr_{4}" />
            </div>
          </div>
          <div className='flex items-center gap-2 flex-wrap'>
            <p>គ. </p>
            <div className='text-[13px]'>
              <InlineMath math="NH_{3}" />
            </div>
            <p>និង</p>
            <div className='text-[13px]'>
              <InlineMath math="H_{2}O" />
            </div>
          </div>
        </div>
      </div>,
    ],
    steps: [
      {
        title:
          <div className='flex items-center gap-2 flex-wrap'>
            <p>ក. </p>
            <div className='text-[13px]'>
              <InlineMath math="HBr" />
            </div>
            <p>និង</p>
            <div className='text-[13px]'>
              <InlineMath math="H_{2}S" />
            </div>

          </div>,
        content:
          <div>
            <div className="flex flex-col items-start gap-3">
              <div className='flex items-center gap-2 flex-wrap'>
                <div className='text-[13px]'>
                  <InlineMath math="HBr" />
                </div>
                <p>និង</p>
                <div className='text-[13px]'>
                  <InlineMath math="H_{2}S" />
                </div>
                <p>គឺជាម៉ូលេគុលប៉ូលែ។</p>
              </div>
              <p>ដូចនេះរវាងកម្លាំងម៉ូលេគុលទាំងពីរជាកម្លាំងឌីប៉ូល-ឌីប៉ូល ហេីយវាក៏មានកម្លាំងឡុនដុនផងដែរ។</p>
            </div>
          </div>
      },
      {
        title:
          <div className='flex items-center gap-2 flex-wrap'>
            <p>ខ. </p>
            <div className='text-[13px]'>
              <InlineMath math="Cl_{2}" />
            </div>
            <p>និង</p>
            <div className='text-[13px]'>
              <InlineMath math="CBr_{4}" />
            </div>
          </div>,
        content:
          <div>
            <div className="flex flex-col items-start gap-3">
              <div className='flex items-center gap-1 flex-wrap'>
                <div className='text-[13px]'>
                  <InlineMath math="Cl_{2}" />
                </div>
                <p>និង</p>
                <div className='text-[13px]'>
                  <InlineMath math="CBr_{4}" />
                </div>
                <p>គឺជាម៉ូលេគុល</p>
                <p>មិនប៉ូលែ។</p>
              </div>
              <p>ដូចនេះរវាងកម្លាំងម៉ូលេគុលទាំងពីរជាកម្លាំងឡុនដុនតែមួយគត់។</p>
            </div>
          </div>
      },
      {
        title:
          <div className='flex items-center gap-2 flex-wrap'>
            <p>គ. </p>
            <div className='text-[13px]'>
              <InlineMath math="NH_{3}" />
            </div>
            <p>និង</p>
            <div className='text-[13px]'>
              <InlineMath math="H_{2}O" />
            </div>
          </div>,
        content:
          <div>
            <div className="flex flex-col items-start gap-3">
              <div className='flex items-center gap-2 flex-wrap'>
                <div className='text-[13px]'>
                  <InlineMath math="NH_{3}" />
                </div>
                <p>និង</p>
                <div className='text-[13px]'>
                  <InlineMath math="H_{2}O" />
                </div>
                <p>គឺជាម៉ូលេគុលប៉ូលែ។</p>
              </div>
              <p>ដូចនេះរវាងកម្លាំងម៉ូលេគុលទាំងពីរជាកម្លាំងឌីប៉ូល-ឌីប៉ូល ហេីយវាក៏មានសម្ព័ន្ធអុីដ្រូសែនផងដែរ។</p>
            </div>
          </div>
      },
    ]
  },
  exercise: {
    questions: [

    ]
  },
}









const Intermolecular_forces = () => {
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
        {SecondTopic.definition && (
          <DefinitionBox title={SecondTopic.definition.title} content={SecondTopic.definition.content} />
        )}
        {SecondTopic.tip && (
          <TipBox title={SecondTopic.tip.title} content={SecondTopic.tip.content} />
        )}
      </div>
      <div>
        {ThirdTopic.definition && (
          <DefinitionBox title={ThirdTopic.definition.title} content={ThirdTopic.definition.content} />
        )}
        {ThirdTopic.tip && (
          <TipBox title={ThirdTopic.tip.title} content={ThirdTopic.tip.content} />
        )}
      </div>
      <div>
        {FourthTopicContent.definition && (
          <DefinitionBox title={FourthTopicContent.definition.title} content={FourthTopicContent.definition.content} />
        )}
        {FourthTopicContent.tip && (
          <TipBox title={FourthTopicContent.tip.title} content={FourthTopicContent.tip.content} />
        )}
      </div>
      <div>
        {FifthTopicContent.definition && (
          <DefinitionBox title={FifthTopicContent.definition.title} content={FifthTopicContent.definition.content} />
        )}
        {FifthTopicContent.tip && (
          <TipBox title={FifthTopicContent.tip.title} content={FifthTopicContent.tip.content} />
        )}
      </div>
      <div>
        {SixthTopicContent.definition && (
          <DefinitionBox title={SixthTopicContent.definition.title} content={SixthTopicContent.definition.content} />
        )}
        {SixthTopicContent.tip && (
          <TipBox title={SixthTopicContent.tip.title} content={SixthTopicContent.tip.content} />
        )}
        {SixthTopicContent.example && (
          <ExampleBox question={SixthTopicContent.example.question} steps={SixthTopicContent.example.steps} answer={SixthTopicContent.example.answer} />
        )}
        {SixthTopicContent.example2 && (
          <ExampleBox question={SixthTopicContent.example2.question} steps={SixthTopicContent.example2.steps} answer={SixthTopicContent.example2.answer} />
        )}

      </div>

    </div>
  )
}

export default Intermolecular_forces