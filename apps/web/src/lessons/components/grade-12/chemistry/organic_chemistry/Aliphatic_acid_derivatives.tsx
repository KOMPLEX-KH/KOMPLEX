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
    title: "១. អាមីន",
    content:
      <>
        <div className="flex flex-col items-start">
          <p>អាមីន ជាសមាសធាតុសរីរាង្គ ដែលបានពីការជំនួសអាតូមអុីដ្រូសែនរបស់ម៉ូលេគុល <InlineMath math="NH_{3}" /> ដោយរ៉ាឌីកាល់ <InlineMath math="R" />។</p>
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>

      </>
    ),
  },
}


const SecondTopicContent: TopicContent = {
  definition: {
    title: "ក. រូបមន្ត",
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
        <div className="flex flex-col items-start gap-3">
          <div className='flex items-start gap-4 flex-wrap'>
            <div className='flex items-start gap-1'>
              <div className='text-[13px]'>
                <InlineMath math="H-" />
              </div>
              <div className='flex flex-col items-start text-[13px]'>
                <InlineMath math="N-H" />
                <InlineMath math="|" />
                <InlineMath math="H" />
              </div>
              <span className='text-[13px]'> <InlineMath math=" \rightarrow R-" /></span>
              <div className='flex flex-col items-start text-[13px]'>
                <InlineMath math="N-H" />
                <InlineMath math="|" />
                <InlineMath math="H" />
              </div>
            </div>

            <div className='flex items-center gap-1'>
              <span>ឬ</span>
              <span className='text-[13px]'><InlineMath math="NH_{3} \rightarrow R-NH_{2}" /></span>
            </div>
          </div>
          <div className='flex items-center gap-5 flex-wrap'>
            <p><InlineMath math="R-NH_{2}" /> ជាអាមីន</p>
            <p><InlineMath math="NH_{3}" /> ជាអាម៉ូញ៉ាក</p>
          </div>
          <p>R ជារ៉ាឌីកាល់អុីដ្រូកាបួខ្សែបេីក ។ បេី R ជារ៉ាឌីកាល់អុីដ្រូកាបួឆ្អែតគេបានរូបមន្តទូទៅ <span className='text-[13px]'><InlineMath math="C_{n}H_{2n+1^{-}}NH_{2}" /></span>   ឬ <span className='text-[13px]'><InlineMath math="C_{n}H_{2n+3}N" /></span></p>

        </div>
      </>
    ),
  },
}

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "ខ. ចំណាត់ថ្នាក់អាមីន",
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
        <div className='flex items-start gap-3 flex-col'>
          <p>គេចែកអាមីនជាបីថ្នាក់ទៅតាមចំនួនអាតូមអុីដ្រូសែនរបស់អាម៉ូញ៉ាកដែលត្រូវជំនួសដោយរ៉ាឌីកាល់ R ។</p>
          <div className='flex items-start gap-3 flex-wrap'>
            <div className='flex items-start gap-3 text-[13px]'>
              <InlineMath math="R_{1}-" />
              <div className='flex items-start flex-col'>
                <InlineMath math="N-H" />
                <InlineMath math="|" />
                <InlineMath math="H" />
              </div>
            </div>
            <p>អាមីនថ្នាក់ទីI</p>
          </div>
          <div className='flex items-start gap-3 flex-wrap'>
            <div className='flex items-start gap-3 text-[13px]'>
              <InlineMath math="R_{1}-" />
              <div className='flex items-start flex-col text-[13px]'>
                <InlineMath math="N-R_{2}" />
                <InlineMath math="|" />
                <InlineMath math="H" />
              </div>
            </div>
            <p>អាមីនថ្នាក់ទីII</p>
          </div>
          <div className='flex items-start gap-3 flex-wrap'>
            <div className='flex items-start gap-3'>
              <InlineMath math="R_{1}-" />
              <div className='flex items-start flex-col text-[13px]'>
                <InlineMath math="N-R_{2}" />
                <InlineMath math="|" />
                <InlineMath math="R_{3}" />
              </div>
            </div>
            <p>អាមីនថ្នាក់ទីIII</p>
          </div>
        </div>
      </>
    ),
  },
}

const FourthTopicContent: TopicContent = {
  definition: {
    title: "គ. នាមវលី",
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
          <div>
            <li>អាមីនថ្នាក់ទីI ហៅឈ្មោះរ៉ាឌីកាល់ (R) រួចបន្ថែមបច្ឆឹមបទ អាមីន ។</li>
          </div>
          <div>
            <li>អាមីនថ្នាក់ទីII អាមីនថ្នាក់ទីIII</li>
            <p>ទី១ ហៅឈ្មោះរ៉ាឌីកាល់ (R) ដែលមានកាបូនខ្សែខ្លីដោយបញ្ជាក់ទីតាំង N- ( ឬ N,N- ក្នុងករណីមានរ៉ាឌីកាល់ពីរ ) ។</p>
            <p>ទី២ ហៅឈ្មោះដូចអាមីនថ្នាក់ទីI ចំពោះរ៉ាឌីកាល់ដែលមានខ្សែកាបូនវែង ឬសាំញុាំ ។</p>
          </div>
        </ul>
      </>
    ),
  },
  example: {
    question: [
      <>
        <div className='flex items-start gap-3 flex-col'>
          <div className='flex items-start gap-3 '>
            <span className='text-[13px]'><InlineMath math="CH_{3}-NH_{2}" /></span>
            <p>មេទីលឡាមីន</p>
          </div>
          <div className='flex items-start gap-3'>
            <span className='text-[13px]'><InlineMath math="CH_{3}-CH_{2}-NH_{2}" /></span>
            <p>អេទីលឡាមីន</p>
          </div>
          <div className='flex items-start gap-3'>
            <span className='text-[13px]'><InlineMath math="C_{2}H_{5}-NH-CH_{3}" /></span>
            <p>N-មេទីល អេទីលឡាមីន</p>
          </div>
          <div className='flex items-start gap-3 flex-wrap'>
            <div className='flex items-start gap-3 text-[13px]'>
              <InlineMath math="CH_{3}-CH_{2}-" />
              <div className='flex items-start flex-col text-[13px]'>
                <InlineMath math="CH-CH_{2}-NH_{2}" />
                <InlineMath math="|" />
                <InlineMath math="CH_{3}" />
              </div>
            </div>
            <p>2-មេទីល ប៊ុយទីលឡាមីន </p>
          </div>

          <div className='flex items-start gap-3 flex-wrap'>
            <div className='flex items-start gap-3 text-[13px]'>
              <InlineMath math="C_{2}H_{5}-" />
              <div className='flex items-start flex-col text-[13px]'>
                <InlineMath math="N-CH_{3}" />
                <InlineMath math="|" />
                <InlineMath math="CH_{3}" />
              </div>
            </div>
            <p>N,N-ឌីមេទីល អេទីលឡាមីន</p>
          </div>
          <div className='flex items-start gap-3 flex-wrap'>
            <div className='flex items-start gap-3 text-[13px]'>
              <InlineMath math="C_{6}H_{5}-" />
              <div className='flex items-start flex-col text-[13px]'>
                <InlineMath math="N-C_{2}H_{5}" />
                <InlineMath math="|" />
                <InlineMath math="CH_{3}" />
              </div>
            </div>
            <p>N-អេទីល N-មេទីល ផេនីលឡាមីន</p>
          </div>
        </div>
      </>
    ],
  },
}

const FifthTopicContent: TopicContent = {
  definition: {
    title: "១.១ លក្ខណៈរូប",
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
        <p>អាមីនដែលមានភាពរូបជាឧស្ម័នមានក្លិនពុំសូវល្អ ព្រោះមានលាយអាម៉ូញាក់ ។ អាមីនដែល
          មានម៉ាសម៉ូលធំមាន កាបូនពី ៦ ឡើងទៅ មិនរលាយក្នុងទឹកទេ ប៉ុន្តែរលាយក្នុងអង្គធាតុរំលាយ
          សរីរាង្គ ។ អាមីនមានចំណុចរំពុះខ្ពស់ជាងអាល់កាន តែទាបជាងអាល់កុលដែលមានម៉ាសម៉ូល
          ប្រហែលគ្នា ។ ក្នុងចំណោមអីសូមែរបស់វា អាមីនថ្នាក់ទី ១ មានចំណុចរំពុះខ្ពស់ជាងគេ ហើយ
          អាមីនថ្នាក់ III ទាបជាងគេ ។
        </p>
      </>
    ),
  },
}

const SixthTopicContent: TopicContent = {
  definition: {
    title: "១.២ លក្ខណៈគីមី",
    content:
      <>
        <div className="flex flex-col items-start">

        </div>
      </>
  },
  tip: {
    title: "ចំណុចសំខាន់",
    content: (
      <>
        <ul className='list-disc pl-5 flex flex-col items-start gap-4'>
          <div className='flex items-start flex-col'>
            <li>លក្ខណៈជាបាសនៃអាម៉ូញ៉ាក់</li>
            <p> <span className='text-[13px]'><InlineMath math="NH_{3}" /></span> មានលក្ខណៈជាបាស ហេីយអាសុីតឆ្លាស់របស់វាគឺ  <span className='text-[13px]'><InlineMath math="NH_{4}^{+}" /></span> ។ វាបង្កេីតបានជាគូអាសុីត-បាស <span className='text-[13px]'><InlineMath math="NH_{4}^{+}/NH_{3}" /></span> ។</p>
            <span className='text-[13px]'><InlineMath math="NH_{3} + H_{2}O \rightleftharpoons NH_{4}^{+} + OH^{-}" /></span>

          </div>
          <div className='flex items-start flex-col'>
            <li>លក្ខណៈជាបាសនៃអាមីន</li>
            <p>អេទីលឡាមីន <span className='text-[13px]'><InlineMath math="C_{2}H_{5}-NH_{2}" /></span> រលាយក្នុងទឹក បង្កេីតជាសូលុយស្យុងបាស ។ កំហាប់ 0.1M មាន​ pH= 11.9 នៅ 25°C ។ ដូចនេះ អេទីលឡាមីនជាបាសខ្សោយ ។</p>
            <span className='text-[13px]'><InlineMath math="C_{2}H_{5}-NH_{2} + H^{+} \rightleftharpoons C_{2}H_{5}-NH_{3}^{+}" /></span>

            <span className='text-[13px]'><InlineMath math="C_{2}H_{5}-NH_{2} + H_{2}O \rightleftharpoons C_{2}H_{5}-NH_{3}^{+} + OH^{-}" /></span>
            <p>ជាទូទៅ អាមីនទាំងអស់ជាបាសខ្សោយ ប៉ុន្តែខ្លាំងជាងអាម៉ូញ៉ាក់ ។</p>
          </div>
          <div className='flex items-start flex-col'>
            <li>ប្រតិកម្មរវាងអាមីន និងអង្គធាតុស្រលាយអាឡូសែន (R-X)</li>
          </div>
          <div className='flex items-start flex-col'>
            <li>ប្រតិកម្មអាមីនថ្នាក់ទី I ជាមួយអាសុីលក្លរួ (R-CO-Cl)</li>
            <span className='text-[13px]'><InlineMath math="R-CO-Cl + R_{1}-NH_{2} \rightarrow R-CO-NH-R_{1} + HCl" /></span>
          </div>
          <div>
            <li>ប្រតិកម្មបង្កេីតអំបិល</li>
            <span className='text-[13px]'><InlineMath math="R-NH_{2} + HCl \rightleftharpoons R-NH_{3}^{+} + Cl^{-}" /></span>
          </div>
        </ul>
      </>
    ),
  },
}

const SeventhTopicContent: TopicContent = {
  definition: {
    title: "១.៣ ទង្វេីអាមីន",
    content:
      <>
        <div className="flex flex-col items-start">

        </div>
      </>
  },
  tip: {
    title: "ចំណុចសំខាន់",
    content: (
      <>
        <ul className='list-disc pl-5 flex flex-col items-start gap-4'>
          <div className='flex flex-col items-start gap-2'>
            <li>អាម៉ូញ៉ាក់មានអំពេីជាមួយអាល់គីលអាឡូសែនូ ឲជាអាមីនថ្នាក់ទី I</li>
            <span className='text-[13px]'> <InlineMath math="R-X + NH_{3} \rightarrow R-NH_{2} + HX" /></span>

            <span className='text-[13px]'><InlineMath math="C_{2}H_{5}-Cl + NH_{3} \rightarrow C_{2}H_{5}-NH_{2} + HCl" /></span>
            <p>អាមីនថ្នាក់ទី I កកេីតធ្វេីប្រតិកម្មជាមួយ R-X បង្កេីតអាមីនថ្នាក់ទី II , អាមីនថ្នាក់ទី II ក៏ធ្វេីប្រតិកម្មជាមួយ R-X បង្កេីតអាមីនថ្នាក់ទី III ។ អាមីនថ្នាក់ទី III ក៏ធ្វេីប្រតិកម្មបន្តបង្កេីតជាអំបិលអាម៉ូញ៉ូម ។</p>
            <p> <span className='text-[13px]'><InlineMath math="R-X + NH_{3} \rightarrow R-NH_{2} + HX" /></span> (អាមីនថ្នាក់ទី I)</p>
            <p><span className='text-[13px]'><InlineMath math="R-NH_{2} + R-X \rightarrow R-NH-R + HX" /></span> (អាមីនថ្នាក់ទី II)</p>
            <p><span className='text-[13px]'><InlineMath math="R-NH-R + R-X \rightarrow R_{3}N + HX" /></span> (អាមីនថ្នាក់ទី III)</p>
            <p><span className='text-[13px]'><InlineMath math="R_{3}N + R-X \rightarrow R_{4}NX" /></span> (អំបិលអាម៉ូញ៉ូម)</p>
          </div>
          <div className='flex flex-col items-start gap-2'>
            <li>ប្រតិកម្មរេដុកម្មនៃក្រុមនីទ្រីល ផ្តល់បានអាមីនថ្នាក់ទី I</li>
            <span className='text-[13px]'><InlineMath math="R-C\equiv + 4 H \xrightarrow{\text{Ni, 200 atm}} R-CH_2-NH_2" /></span>
          </div>
        </ul>
      </>
    ),
  },
  example: {
    question: [
      <>
        <div className='flex items-start gap-3 flex-col text-[13px]'>
          <InlineMath math="CH_{3}-Cl + NH_{3} \rightarrow CH_{3}-NH_{2} + HCl" />
          <InlineMath math="CH_{3}-NH_{2} + CH_{3}-Cl \rightarrow CH_{3}-NH-CH_{3} + HCl" />
          <InlineMath math="CH_{3}-NH-CH_{3} + CH_{3}-Cl \rightarrow (CH_{3})_{3}N + HCl" />
          <InlineMath math="(CH_{3})_{3}N + CH_{3}-Cl \rightarrow (CH_{3})_{4}NCl" />

        </div>
      </>
    ],
  },
}

const EighthTopicContent: TopicContent = {
  definition: {
    title: "២. អាមីត",
    content:
      <>
        <div className="flex flex-col items-start">
          <p>អាមីត គឺជាស្រឡាយនៃអាសុីតកាបុកសុីលិច (R-COOH) ដែលក្នុងនោះបង្គុំ (-OH) របស់អាសុីតត្រូវបានជំនួសដោយបង្គុំអាមីន <span className='text-[13px]'><InlineMath math="(-NH_{2})" /></span></p>
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>

      </>
    ),
  },
}

const NinethTopicContent: TopicContent = {
  definition: {
    title: "ក. រូបមន្ត",
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
        <div className='flex flex-col items-start gap-3'>
          <div className='flex items-center gap-2 '>
            <p>រូបមន្តទូទៅអាមីត :</p>
            <span className='text-[13px]'><InlineMath math="R-CO-NH_{2}" /></span>
          </div>
          <p>អាតូមអុីដ្រូសែនរបស់បង្គុំ <span className='text-[13px]'><InlineMath math="(-NH_{2})" /></span> ត្រូវបានជំនួសដោយរ៉ាឌីកាល់អុីដ្រូកាបួ បង្កេីតជាថ្នាក់អាមីត ។</p>
          <div className='flex items-center gap-2 '>
            <span className='text-[13px]'><InlineMath math="R-CO-NH_{2}" /></span>
            <p>អាមីតថ្នាក់ទី I</p>
          </div>
          <div className='flex items-center gap-2 '>
            <span className='text-[13px]'><InlineMath math="R-CO-NH-R_{1}" /></span>
            <p>អាមីតថ្នាក់ទី II</p>
          </div>
          <div className='flex items-start gap-2 '>
            <div className='flex items-start text-[13px]'>
              <InlineMath math="R-CO-" />
              <div className='flex flex-col'>
                <InlineMath math="N-R_{1}" />
                <InlineMath math="|" />
                <InlineMath math="R_{2}" />
              </div>
            </div>
            <p>អាមីតថ្នាក់ទី III</p>
          </div>
        </div>
      </>
    ),
  },
}


const TenthTopicContent: TopicContent = {
  definition: {
    title: "ខ. នាមវលី",
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
          <div className='flex items-start gap-3 flex-col'>
            <li>ឈ្មោះរបស់អាមីតបានមកពីឈ្មោះអាសុីតដោយប្តូរបច្ឆឹមបទ អូអុីចរបស់អាសុីតទៅជាអាមីត ។</li>
            <p> <span className='text-[13px]'><InlineMath math="H-CO-NH_{2}" /></span> មេតាណាមីត</p>
            <p><span className='text-[13px]'><InlineMath math="CH_{3}-CO-NH_{2}" /></span> អេតាណាមីត</p>
          </div>
          <div className='flex items-start gap-3 flex-col'>
            <li>ដេីម្បីហៅឈ្មោះអាមីតថ្នាក់ទី II និង III គេត្រូវហៅរ៉ាឌីកាល់កាបួដោយបញ្ជាក់ទីតាំង</li>
            <p><span className='text-[13px]'><InlineMath math="CH_{3}-CO-NH-CH_{3}" /></span> N-មេទីល អេតាណាមីត</p>
            <div className='flex items-start gap-2 '>
              <div className='flex items-start flex-wrap'>
                <span className='text-[13px]'><InlineMath math="CH_{3}-CO-" /></span>
                <div className='flex flex-col text-[13px]'>
                  <InlineMath math="N-CH_{3}" />
                  <InlineMath math="|" />
                  <InlineMath math="CH_{3}" />
                </div>
              </div>
            </div>
            <p>N,N-ឌីមេទីល អេតាណាមីត</p>
          </div>
        </ul>
      </>
    ),
  },
}

const EleventhTopicContent: TopicContent = {
  definition: {
    title: "២.១ លក្ខណៈរូប និងគីមី",
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
        <p>អាមីតមានចំណុចរំពុះខ្ពស់ ។ អាមីតភាគច្រើនមានទម្រង់ជាក្រាមរឹង។ អាមីតរលាយក្នុង
          ទឹកបានច្រើនជាងអាល់កុលបន្តិច
          ដោយដុតកម្ដៅជាមួយទឹក
          និងអាម៉ូញាក់។
          កាលណាម៉ូលេគុលទាំងពីរមានចំនួនអាតូមកាបួនស្មើគ្នា។
          អាមីតរងអីដ្រូលីសយឺតៗបង្កើតបានជាអាស៊ីតកាបុកស៊ីលិចនិងអាម៉ូញាក់ ។</p>
        <span className='text-[13px]'><InlineMath math="CH_{3}-CO-NH_{2} + H-OH \rightarrow CH_{3}-COOH + NH_{3}" /></span>
      </>
    ),
  },
}

const TwelfthTopicContent: TopicContent = {
  definition: {
    title: "២.២ ទង្វេីអាមីត",
    content:
      <>
        <div className="flex flex-col items-start">

        </div>
      </>
  },
  tip: {
    title: "ចំណុចសំខាន់",
    content: (
      <>
        <ul className='list-disc pl-5 flex flex-col items-start gap-4'>
          <div>
            <li>ប្រតិកម្មរវាងអេស្ទែ និងអាម៉ូញាក់</li>
            <span className='text-[13px]'>
              <InlineMath math="CH_{3}-COO-C_{2}H_{5} + NH_{3} \rightarrow CH_{3}-CO-NH_{2} + C_{2}H_{5}-OH" />
            </span>
          </div>
          <div>
            <li>ប្រតិកម្មរវាងអាសុីលក្លរួ និងអាម៉ូញាក់</li>
            <span className='text-[13px]'>
              <InlineMath math="CH_{3}-CO-Cl + 2NH_{3} \rightarrow CH_{3}-CO-NH_{2} + NH_{4}Cl" />
            </span>
          </div>
          <div>
            <li>ប្រតិកម្មរវាងអានីឌ្រីតអាសុីត និងអាម៉ូញាក់</li>
            <span className='text-[13px]'>
              <InlineMath math="CH_{3}-CO-O-CO-CH_{3} + NH_{3} \rightarrow CH_{3}-CO-NH_{2} + CH_{3}-COOH" />
            </span>
          </div>
          <div>
            <li>ប្រតិកម្មរវាងអាសុីតកាបុកសុីលិច និងអាម៉ូញាក់</li>
            <span className='text-[13px]'>
              <InlineMath math="CH_{3}-COOH + NH_{3} \rightarrow CH_{3}-CO-NH_{2} + H_{2}O" />
            </span>
          </div>
        </ul>
      </>
    ),
  },
}
const ThirdTeenthTopicContent: TopicContent = {
  definition: {
    title: "២.៣ អាមីតពិសេស(អ៊ុយរ៉េ)",
    content:
      <>
        <div className="flex flex-col items-start">
          <p>អ៊ុយរ៉េ គឺជាឌីអាមីននៃក្រុមកាបូនីល ។</p>
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <div className='flex flex-col items-start gap-3'>
          <p><span className='text-[13px]'><InlineMath math="H_{2}CO_{3}" /></span> អាសុីតកាបូនិច</p>
          <p><span className='text-[13px]'><InlineMath math="H_{2}N-CO-NH_{2}" /></span> អ៊ុយរ៉េ</p>
          <p>ទង្វេី <span className='text-[13px]'><InlineMath math="CO_{2} + 2NH_{3} \rightarrow H_{2}N-CO-NH_{2} + H_{2}O" /></span></p>
        </div>
      </>
    ),
  },
}

const FourthTeenTopicContent: TopicContent = {
  definition: {
    title: "៣. អាសុីតអាមីណេ",
    content:
      <>
        <div className="flex flex-col items-start">
          <p>អាសុីតអាមីណេ គឺជាសមាសធាតុសរីរាង្គដែលមានបង្គំកាបុកសុីល <span className='text-[13px]'><InlineMath math="(-COOH)" /></span> មួយនិងបង្គុំអាមីន <span className='text-[13px]'><InlineMath math="(-NH_{2})" /></span> មួយ។ កាលណាបង្គុំទាំងពីរភ្ជាប់នឹងកាបូនតែមួយ គេបានអាសុីត <span className='text-[13px]'><InlineMath math="\alpha" /></span> -អាមីណេ ។</p>
        </div>
      </>
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>

      </>
    ),
  },
}
const FifthTeenTopicContent: TopicContent = {
  definition: {
    title: "ក. ទម្រង់ម៉ូលេគុល",
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
        <div className='flex items-start gap-3 flex-wrap'>
          <p>រូបមន្តទូទៅនៃអាសុីត​<InlineMath math="\alpha" /> -អាមីណេ </p>
          <div className='flex items-start text-[13px]'>
            <InlineMath math="R-" />
            <div className='flex flex-col'>
              <InlineMath math="CH-COOH" />
              <InlineMath math="|" />
              <InlineMath math="NH_{2}" />
            </div>
          </div>
        </div>
      </>
    ),
  },
}

const SixteenthTopicContent: TopicContent = {
  definition: {
    title: "ខ. នាមវលី",
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
        <div className='flex items-start gap-3 flex-col'>
          <p>គេហៅអាសុីតអាមីណេតាមឈ្មោះធ្លាប់ប្រេី ។ កាលណាបង្គុំអាមីនជាប់នឹងអាតូមកាបូនក្នុងទីតាំង​<InlineMath math="\beta" /> ឈ្មោះអាសុីតអាមីណេត្រូវបន្ថែមបុព្វបទ​<InlineMath math="\beta" />-អាមីណូ ទៅលេីឈ្មោះអាសុីតកាបុកសុីលិច ។</p>
          <div className='flex items-start gap-3 flex-wrap'>
            <div className='flex items-start text-[13px]'>
              <InlineMath math="H-" />
              <div className='flex flex-col'>
                <InlineMath math="CH-COOH" />
                <InlineMath math="|" />
                <InlineMath math="NH_{2}" />
              </div>
            </div>
            <p>អាសុីត <span className='text-[13px]'><InlineMath math="\alpha" /></span> -អាមីណូអាសេទិច</p>
          </div>
          <div className='flex items-start gap-3 flex-wrap'>
            <span className='text-[13px]'><InlineMath math="H_{2}N-CH_{2}-COOH" /></span>
            <p>អាសុីត <span className='text-[13px]'><InlineMath math="\beta" /></span> -អាមីណូប្រ៉ូប្យូទិច</p>
          </div>
        </div>
      </>
    ),
  },
}


const SeventeenthTopicContent: TopicContent = {
  definition: {
    title: "៣.១ លក្ខណៈ",
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
          <div>
            <li>អាស៊ីតអាមីណេ គឺជាអង្គធាតុក្រាមដែលរលាយ ឬបំបែកនៅសីតុណ្ហភាពខ្ពស់ ។
              ប៉ុន្តែមិនរលាយក្នុងអង្គធាតុរំលាយសរីរាង្គ ដូចជា បង់សែនវាងាយរលាយក្នុងទឹកអាល់កុល អេទែ... ទេ។</li>
          </div>
          <div className='flex flex-col gap-3'>
            <li>ក្នុងម៉ូលេគុលអាស៊ីតអាមីណេ បង្គុំកាបុកស៊ីលមានលក្ខណៈជាអាស៊ីត ឯបង្គំអាមីនមានលក្ខណៈជាបាស ។</li>
            <p>នៅក្នុងភាពជាសូលុយស្យុងទឹក អាស៊ីតអាមីណេមានទម្រង់បីបែប ៖</p>
            <div className='flex items-start gap-3 flex-wrap'>
              <div className='flex items-start text-[13px]'>
                <InlineMath math="R-" />
                <div className='flex flex-col'>
                  <InlineMath math="CH-COO^{-}" />
                  <InlineMath math="|" />
                  <InlineMath math="NH_{3}^{+}" />
                </div>
              </div>
              <p>ក្នុងសូលុយស្យុងណឺត</p>
            </div>
            <div className='flex items-start gap-3 flex-wrap'>
              <div className='flex items-start text-[13px]'>
                <InlineMath math="R-" />
                <div className='flex flex-col'>
                  <InlineMath math="CH-COOH" />
                  <InlineMath math="|" />
                  <InlineMath math="NH_{3}^{+}" />
                </div>
              </div>
              <p>ក្នុងសូលុយស្យុងអាសុីត</p>
            </div>
            <div className='flex items-start gap-3 flex-wrap'>
              <div className='flex items-start text-[13px]'>
                <InlineMath math="R-" />
                <div className='flex flex-col'>
                  <InlineMath math="CH-COO^{-}" />
                  <InlineMath math="|" />
                  <InlineMath math="NH_{2}" />
                </div>
              </div>
              <p>ក្នុងសូលុយស្យុងបាស</p>
            </div>
          </div>

          <div>
            <li>អាសុីតអាមីណេ មានលក្ខណៈអំផូទែគឺវាអាចចាប់យកប្រូតុងពីអាសុីតខ្លាំង ឬផ្តល់ប្រូតុងទៅបាសខ្លាំង ។</li>
          </div>
        </ul>
      </>
    ),
  },
}

const EighteenthTopicContent: TopicContent = {
  definition: {
    title: "៣.២ ទង្វេី",
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
        <p>មានវិធីជាច្រេីនដេីម្បីបង្កេីតអាសុីតអាមីណេ៖</p>
        <ul className='list-disc pl-5 flex flex-col items-start gap-4'>
          <div>
            <li>គេឲ្យអាស៊ីត​<InlineMath math="\alpha" /> អាឡូសែណូកាបុកស៊ីលិច មានប្រតិកម្មជាមួយអាម៉ូញាក់ គេទទួលបានអាស៊ីត​<InlineMath math="\alpha" />-អាមីណូកាបុកស៊ីលិច ។ </li>
            <div className='flex items-start gap-3'>
              <div className='flex items-start text-[13px]'>
                <div className='flex flex-col'>
                  <InlineMath math="CH_{2}-COOH" />
                  <InlineMath math="|" />
                  <InlineMath math="Cl" />
                </div>
                <InlineMath math="+ 2NH_{3} \rightarrow CH_{2}-COOH + NH_{4}Cl" />
              </div>
            </div>
          </div>
          <div>
            <li>គេឲ្យអាល់ដេអុីតមានអំពើជាមួយអ៊ីដ្រូសែនស្សានួ ចំពោះវត្តមានអាម៉ូញាក់ បង្កើតបានជាអាមីណូនីទ្រីល ។ អ៊ីដ្រូលីសអាមីណូនីទ្រីលផ្តល់អាស៊ីតអាមីណេ ។</li>
          </div>
        </ul>
      </>
    ),
  },
}

const NineteenthTopicContent: TopicContent = {
  definition: {
    title: "៣.៤ បុិបទីត និងប្រូតេអុីន",
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

      </>
    ),
  },
}

const TwentyTopicContent: TopicContent = {
  definition: {
    title: "ក. សម្ព័ន្ធបុិបទីត",
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
        <p>សម្ព័ន្ធប៉ិបទីត (-CO-NH-) កើតឡើងដោយម៉ូលេគុលអាស៊ីតអាមីណេចំនួនពីរភ្ជាប់គ្នាដោយការដកទឹកចេញចំនួន ១ ម៉ូលេគុល។</p>
        <div className='flex items-start text-[6px] sm:text-xs mt-3'>
          <InlineMath math="H_{2}N-CH_{2}-" />
          <div className='flex flex-col'>
            <InlineMath math="C-OH" />
            <InlineMath math="||" />
            <InlineMath math="O" />
          </div>
          <InlineMath math="+ H-NH-" />
          <div className='flex flex-col'>
            <InlineMath math="CH-COOH \rightarrow" />
            <InlineMath math="|" />
            <InlineMath math="CH_{3}" />
          </div>
          <InlineMath math="H_{2}N-CH_{2}-" />
          <div className='flex flex-col'>
            <InlineMath math="C-NH-" />
            <InlineMath math="||" />
            <InlineMath math="O" />
          </div>
          <div className='flex flex-col'>
            <InlineMath math="CH-COOH" />
            <InlineMath math="|" />
            <InlineMath math="CH_{3}" />
          </div>
        </div>
        <ul className='list-disc pl-5 flex flex-col items-start gap-4'>
          <li>ប៉ិបទីតដែលបង្កដោយអាស៊ីតអាមីណេចំនួន ៣, ៤ ឬ ៥ មានឈ្មោះថា ទ្រីប៉ិបទីតតេត្រាប៉ិបទីត ប៉ង់តាប៉ិបទីត។</li>
          <li>ប៉ិបទីតដែលបង្កដោយអាស៊ីតអាមីណេតិចជាង 60 ហៅថា ប៉ូលីប៉ិបទីត ។</li>
          <li>ប៉ិបទីតដែលបង្កដោយអាស៊ីតអាមីណេច្រើនជាង 60 ហៅថា ប្រូតេអ៊ីន ។</li>
          <li>ប្រូតេអ៊ីនធម្មជាតិផ្តល់អាស៊ីតអាមីណេចំនួន 20 ប្រភេទដែលក្នុងនោះមាន អាស៊ីតអាមីណេចំនួន ៨ ដែលមនុស្សត្រូវផ្តល់ឲ្យសារពាង្គកាយមិនអាចខ្វះបានតាមរយៈអាហារព្រោះសរីរាង្គមនុស្សមិនអាចសំយោគវាបាន។</li>
          <li>អាស៊ីតអាមីណេចំនួន៨ដែលសំខាន់សម្រាប់សារពាង្គកាយរួមមាន៖ វ៉ាលីន ឡឺស៊ីនអ៊ីសូឡឺស៊ីន ត្រេអូនីន មេត្យូនីន លីស៊ីន ផេនីឡាមីន និង ទ្រីបតូផាន។</li>
        </ul>
      </>
    ),
  },
}



const Aliphatic_acid_derivatives = () => {
  return (
    <div>
      <div>
        {FirstTopicContent.definition && (
          <DefinitionBox title={FirstTopicContent.definition.title} content={FirstTopicContent.definition.content} />
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
      </div>
      <div>
        {SeventhTopicContent.definition && (
          <DefinitionBox title={SeventhTopicContent.definition.title} content={SeventhTopicContent.definition.content} />
        )}
        {SeventhTopicContent.tip && (
          <TipBox title={SeventhTopicContent.tip.title} content={SeventhTopicContent.tip.content} />
        )}
        {SeventhTopicContent.example && (
          <ExampleBox question={SeventhTopicContent.example.question} />
        )}
      </div>
      <div>
        {EighthTopicContent.definition && (
          <DefinitionBox title={EighthTopicContent.definition.title} content={EighthTopicContent.definition.content} />
        )}
        {EighthTopicContent.tip && (
          <TipBox title={EighthTopicContent.tip.title} content={EighthTopicContent.tip.content} />
        )}
      </div>
      <div>
        {NinethTopicContent.definition && (
          <DefinitionBox title={NinethTopicContent.definition.title} content={NinethTopicContent.definition.content} />
        )}
        {NinethTopicContent.tip && (
          <TipBox title={NinethTopicContent.tip.title} content={NinethTopicContent.tip.content} />
        )}
      </div>
      <div>
        {TenthTopicContent.definition && (
          <DefinitionBox title={TenthTopicContent.definition.title} content={TenthTopicContent.definition.content} />
        )}
        {TenthTopicContent.tip && (
          <TipBox title={TenthTopicContent.tip.title} content={TenthTopicContent.tip.content} />
        )}
      </div>
      <div>
        {EleventhTopicContent.definition && (
          <DefinitionBox title={EleventhTopicContent.definition.title} content={EleventhTopicContent.definition.content} />
        )}
        {EleventhTopicContent.tip && (
          <TipBox title={EleventhTopicContent.tip.title} content={EleventhTopicContent.tip.content} />
        )}
      </div>
      <div>
        {TwelfthTopicContent.definition && (
          <DefinitionBox title={TwelfthTopicContent.definition.title} content={TwelfthTopicContent.definition.content} />
        )}
        {TwelfthTopicContent.tip && (
          <TipBox title={TwelfthTopicContent.tip.title} content={TwelfthTopicContent.tip.content} />
        )}
      </div>
      <div>
        {ThirdTeenthTopicContent.definition && (
          <DefinitionBox title={ThirdTeenthTopicContent.definition.title} content={ThirdTeenthTopicContent.definition.content} />
        )}
        {ThirdTeenthTopicContent.tip && (
          <TipBox title={ThirdTeenthTopicContent.tip.title} content={ThirdTeenthTopicContent.tip.content} />
        )}
      </div>
      <div>
        {FourthTeenTopicContent.definition && (
          <DefinitionBox title={FourthTeenTopicContent.definition.title} content={FourthTeenTopicContent.definition.content} />
        )}
      </div>
      <div>
        {FifthTeenTopicContent.definition && (
          <DefinitionBox title={FifthTeenTopicContent.definition.title} content={FifthTeenTopicContent.definition.content} />
        )}
        {FifthTeenTopicContent.tip && (
          <TipBox title={FifthTeenTopicContent.tip.title} content={FifthTeenTopicContent.tip.content} />
        )}
      </div>
      <div>
        {SixteenthTopicContent.definition && (
          <DefinitionBox title={SixteenthTopicContent.definition.title} content={SixteenthTopicContent.definition.content} />
        )}
        {SixteenthTopicContent.tip && (
          <TipBox title={SixteenthTopicContent.tip.title} content={SixteenthTopicContent.tip.content} />
        )}
      </div>
      <div>
        {SeventeenthTopicContent.definition && (
          <DefinitionBox title={SeventeenthTopicContent.definition.title} content={SeventeenthTopicContent.definition.content} />
        )}
        {SeventeenthTopicContent.tip && (
          <TipBox title={SeventeenthTopicContent.tip.title} content={SeventeenthTopicContent.tip.content} />
        )}
      </div>
      <div>
        {EighteenthTopicContent.definition && (
          <DefinitionBox title={EighteenthTopicContent.definition.title} content={EighteenthTopicContent.definition.content} />
        )}
        {EighteenthTopicContent.tip && (
          <TipBox title={EighteenthTopicContent.tip.title} content={EighteenthTopicContent.tip.content} />
        )}
      </div>
      <div>
        {NineteenthTopicContent.definition && (
          <DefinitionBox title={NineteenthTopicContent.definition.title} content={NineteenthTopicContent.definition.content} />
        )}
      </div>
      <div>
        {TwentyTopicContent.definition && (
          <DefinitionBox title={TwentyTopicContent.definition.title} content={TwentyTopicContent.definition.content} />
        )}
        {TwentyTopicContent.tip && (
          <TipBox title={TwentyTopicContent.tip.title} content={TwentyTopicContent.tip.content} />
        )}
      </div>
    </div>
  )
}

export default Aliphatic_acid_derivatives
