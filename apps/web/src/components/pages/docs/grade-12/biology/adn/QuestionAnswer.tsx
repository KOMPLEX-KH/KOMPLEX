import TopicPracticeBox from "../../../common/box/TopicPracticeBox";
import { BlockMath, InlineMath } from "react-katex";

import HintBox from "../../../common/box/HintBox";
import SummaryBox from "../../../common/box/SummaryBox";
import { AlertTriangleIcon, BookAIcon, ChartBarIcon, LightbulbIcon, WrenchIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/docs/topic";
import { div } from "three/tsl";
import { p } from "framer-motion/client";



const QuestionAnswer = () => {

  const practiceExercises: PracticeExercise[] = [
    {
      id: "ex1",
      title: "",
      description: "សំណួរទី ១",
      problemType: "First Exercise",
      problems: [
        <p key="q1">តើនុយក្លេអូទីតជាអ្វី? វាផ្សំឡើងពីធាតុអ្វីខ្លះ? តើវាមានប៉ុន្មានប្រភេទ?</p>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[15px]" key="a1">
          <p>_ នុយក្លេអូទីត ជាម៉ូណូមែ(ឬជាឯកតានៃធាតុបង្ក) របស់ADN។</p>
          <p>_ នុយក្លេអូទីតផ្សំឡើងពីអាស៊ីតផូស្វ័រិចមួយម៉ូលេគុល ស្ករដេអុកស៊ីរីបូសមួយម៉ូលេគុល និងបាសអាសូតមួយម៉ូលេគុល។</p>
          <p>_ ដោយសារបាសអាស៊ូតមាន៤ប្រភេទ A, T, C, G ដូចនេះនុយក្លេអូទីតក៏មាន៤ប្រភេទដែរ។</p>
        </div>
      ]
    },
    {
      id: "ex2",
      title: "",
      description: "សំណួរទី ២",
      problemType: "Second Exercise",
      problems: [
        <p key="q2">ហេតុអ្វីបានជានុយក្លេអូទីតតែ៤ប្រភេទ អាចបង្កើតម៉ូលេគុលADNខុសគ្នាជាច្រើន?</p>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[15px]" key="a2">
          <p>បានជានុយក្លេអូទីតតែ៤ប្រភេទ អាចបង្កើតម៉ូលេគុលADNខុសគ្នាយ៉ាងច្រើន ពីព្រោះម៉ូលេគុលADNនីមួយៗកើត
            ពីនុយក្លេអូទីតពីរាប់ម៉ឺនទៅរាប់លាន ដែលតម្រៀបទៅតាមតំនលំដាប់នុយក្លេអូទីតជាក់លាក់។ ដូចនេះម៉ូលេគុលADN
            នីមួយៗខុសគ្នាដោយសារចំនួននុយក្លេអូទីត ប្រភេទនុយក្លេអូទីត និងទីតាំងនុយក្លេអូទីត។</p>
        </div>
      ]
    },
    {
      id: "ex3",
      title: "",
      description: "សំណួរទី ៣",
      problemType: "Third Exercise",
      problems: [
        <p key="q3">ចូរបកស្រាយពីចលនការស្វ័យដំឡើងទ្វេADN។</p>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[15px]" key="a3">
          <p>បកស្រាយពីចលនការស្វ័យដំឡើងទ្វេADN៖</p>
          <p>ចលនការស្វ័យដំឡើងទ្វេADNប្រព្រឹត្តទៅក្នុងណ្វៃយ៉ូក្នុងវគ្គ S នៃចន្លោះវគ្គ ក្រោមអំពើអង់ស៊ីមADNប៉ូលីមេរ៉ាស។</p>
          <ul className="list-disc pl-5">
            <li>ដំបូងច្រវាក់ទាំងពីររបស់ADNចាប់ផ្តើមរលា។</li>
            <li>ច្រវាក់ទាំងពីររបស់ADN បែកចេញពីគ្នាដោយផ្តាច់សម្ព័ន្ធអ៊ីដ្រូសែនខ្សោយដែលភ្ជាប់ច្រវាក់ទាំងពីរ។</li>
            <li>នុយក្លេអូទីតសេរីក្នុងណ្វៃយ៉ូ រត់ទៅបំពេញជាមួយនុយក្លេអូទីតច្រវាក់ម្ខាងៗរបស់ម៉ូលេគុលADNមេ តាមគោលការណ៍បំពេញបាស A-T,C-G។</li>
          </ul>
        </div>
      ]
    },
    {
      id: "ex4",
      title: "",
      description: "សំណួរទី ៤",
      problemType: "Fourth Exercise",
      problems: [
        <p key="q4">ក្រោយពេលដំឡើងទ្វេហើយ ហេតុអ្វីបានជាម៉ូលេគុលADNកូនទាំងពីរដូចបេះបិទទៅនឹងម៉ូលេគុលADNមេ?</p>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[15px]" key="a4">
          <p>ក្រោយពេលដំឡើងទ្វេហើយ បានជាម៉ូលេគុលADNកូនទាំងពីរដូចបេះបិទទៅនឹងម៉ូលេគុលADNមេ ពីព្រោះនៅ
            ពេលស្វ័យដំឡើងទ្វេច្រវាក់ទាំងពីររបស់ADNមេ មាននាទីជាពុម្ពគំរូ ឯនុយក្លេអូទីតសេរីរត់ទៅបំពេញតាមគោលការណ៍
            បំពេញបាស A-T,C-G។ ហេតុនេះគេបានADNកូនពីរ ដែលកូននីមួយៗមានច្រវាក់ម្ខាងជាពុម្ពគំរូរបស់ADNមេ ឯច្រវាក់ម្ខាង
            ទៀតជាច្រវាក់កើតថ្មី គឺវាដូចបេះបិទ ហើយដូចADNមេទៀត។</p>
        </div>
      ]
    },
    {
      id: "ex5",
      title: "",
      description: "សំណួរទី ៥",
      problemType: "Fifth Exercise",
      problems: [
        <p key="q5">គេថាADNជាទម្រព័ត៌មានសេនេទិច។ តើពិតឬទេ? ពីព្រោះអ្វី?</p>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[15px]" key="a5">
          <p>ពិត ពីព្រោះក្នុងម៉ូលេគុលADN មានតំនលំដាប់នុយក្លេអូទីតជាក់លាក់ ហើយតំនលំដាប់នុយក្លេអូទីតនេះហើយជាព័ត៌មានសេនេទិចដែលជាប្លង់សម្រាប់ដឹកនាំការសាងសង់លក្ខណះរបស់សារពាង្គកាយ។</p>
        </div>
      ]
    },
    {
      id: "ex6",
      title: "",
      description: "លំហាត់ទី ១",
      problemType: "Sixth Exercise",
      problems: [
        <div className="flex flex-col gap-3 items-start" key="q6">
          <p>ម៉ូលេគុល ADN មួយមាន 3000 នុយក្លេអូទីត ។</p>
          <p>ក-តើម៉ូលេគុលនេះមានប្រវែងប៉ុន្មានណាណូម៉ែត ?</p>
          <p>ខ-បើនុយក្លេអូទីតប្រភេទអាដេនីន A = 20% នៃចំនួននុយក្លេអូទីតសរុប តើម៉ូលេគុលADN មានសម្ពន្ធ័អ៊ីដ្រូសែនប៉ុន្មាន?</p>
          <p>គ-ពេលម៉ូលេគុល ADN ស្វ័យដំឡើងទ្វេដង តើវាត្រូវកានុយក្លេអូទីតសេរីចំនួនប៉ុន្មាន?</p>
        </div>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[14px]" key="a6">
          <p className="font-bold">ក- គណនាប្រវែងម៉ូលេគុល ADN</p>
          <p>បំរាប់ M= 3000 នុយក្លេអូទីត</p>
          <p>A= 20% នៃ M</p>
          <p>ម៉ូលេគុលADNស្វ័យដំឡើងទ្វេ3ដង</p>
          <p>ដោយពីនុយក្លេអូទីតមួយទៅនុយក្លេអូទីតមួយទៀតប្រវែង 0.34nm</p>
          <InlineMath math="\Rightarrow l = \frac{M}{2} \times 0.34 nm" />
          <InlineMath math="\Rightarrow l = \frac{3000}{2} \times 0.34" />
          <InlineMath math="\Rightarrow l = 510 nm" />
          <p className="font-bold">ខ-គណនាចំនួនសម្ពន្ធ័អ៊ីដ្រូសែនសរុប</p>
          <p>យេីងបាន </p>
          <p>ចំនួននុយក្លេអូទីត <InlineMath math="A = \frac{3000 \times 20}{100} = 600 " /> នុយក្លេអូទីត</p>
          <p>តាមគោលការណ៏បំពេញបាស <InlineMath math="A-T , C-G \Rightarrow A=T , C=G" /></p>
          <p>យេីងបាន <InlineMath math="M = A + T + C + G" /></p>
          <InlineMath math="M = 2A + 2C" />
          <InlineMath math="\Rightarrow C = \frac{M}{2} -A" />
          <p><InlineMath math="\Rightarrow C = \frac{3000}{2} - 600 = 600" /> នុយក្លេអូទីត</p>
          <p>A ចងភ្ជាប់ T ដោយសម្ព័ន្ធអុីដ្រូសែន2</p>
          <p>C ចងភ្ជាប់ G ដោយសម្ព័ន្ធអុីដ្រូសែន3</p>
          <InlineMath math="\Rightarrow L = 2A + 3C" />
          <InlineMath math="\Rightarrow L = 2 \times 600 + 3 \times 600" />
          <p><InlineMath math="\Rightarrow L = 3900" /> សម្ព័ន្ធអុីដ្រូសែន</p>
          <p className="font-bold">គ-គណនាចំនួននុយក្លេអូទីតសេរីសរុបទាំងអស់</p>
          <p>ម៉ូលេគុល ADN ស្វ័យដំឡេីងទ្វេ </p>
          <p>1 ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{1}" /></p>
          <p>2 ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{2}" /></p>
          <p>3 ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{3}" /></p>
          <p>n ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{n}" /></p>
          <p>ដោយម៉ូលេគុលADN ស្វ័យដំឡេីងទ្វេ 3 ដង បង្កេីតបានADNកូន = <InlineMath math="2^{3}" /> ដែលក្នុងនោះមានADNមេ1</p>
          <p><InlineMath math="\Rightarrow " /> ចំនួនADNកេីតថ្មី = <InlineMath math="2^{3} - 1" /></p>
          <InlineMath math="\Rightarrow M' = M_{ADN} \cdot (2^{3} - 1)" />
          <InlineMath math="\Rightarrow M' = 3000 \cdot (2^{3} - 1)" />
          <p><InlineMath math="\Rightarrow M' = 21000" /> នុយក្លេអូទីតសេរី</p>
        </div>
      ]
    },
    {
      id: "ex7",
      title: "",
      description: "លំហាត់ទី ២",
      problemType: "Seventh Exercise",
      problems: [
        <div className="flex flex-col gap-3 items-start" key="q1">
          <p>ម៉ូលេគុល ADNមួយមានផលបូកនុយក្លេអូទីត C និង Gស្មើ 40% នៃចំនួននុយក្លេអូទីតទាំងអស់។ ម៉ូលេគុលADNនេះត្រូវការ នុយក្លេអូទីតសេរីចំនួន ១០០០ ដើម្បីធ្វើស្វ័យដំឡើង ទ្វេដង។ គេដឹងទៀតថា ក្នុងច្រវាក់ទី១មាននុយក្លេអូទីតប្រភេទ A = 727 និង G = 497 ។</p>
          <p>ក-គណនាប្រវែងរបស់ម៉ូលេគុល ADN ?</p>
          <p>ខ-គណនាចំនួននុយក្លេអូទីតប្រភេទនីមួយៗមុនស្វ័យដំឡើងទ្វេ ?</p>
          <p>គ-គណនាចំនួននុយក្លេអូទីតប្រភេទនីមួយៗនៅលើច្រវាក់នីមួយៗរបស់ម៉ូលេគុល ADN?</p>
        </div>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[14px]" key="q1">
          <p className="font-bold">ក- គណនាប្រវែងម៉ូលេគុល ADN</p>
          <p>បំរាប់ <InlineMath math="M' = 9000" /> នុយក្លេអូទីតសេរី</p>
          <p>ម៉ូលេគុលADNស្វ័យតំឡេីងទ្វេ 2ដង</p>
          <InlineMath math="\%C + \%G = 40\%" />
          <p><InlineMath math="A_{1} = 727 " /> នុយក្លេអូទីត , <InlineMath math="G_{1} = 497 " /> នុយក្លេអូទីត</p>
          <p>ម៉ូលេគុល ADN ស្វ័យដំឡេីងទ្វេ </p>
          <p>1 ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{1}" /></p>
          <p>2 ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{2}" /></p>
          <p>3 ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{3}" /></p>
          <p>n ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{n}" /></p>
          <p>ដោយម៉ូលេគុលADN ស្វ័យដំឡេីងទ្វេ 2 ដង បង្កេីតបានADNកូន = <InlineMath math="2^{3}" /> ដែលក្នុងនោះមានADNមេ1</p>
          <p><InlineMath math="\Rightarrow " /> ចំនួនADNកេីតថ្មី = <InlineMath math="2^{2} - 1" /></p>
          <InlineMath math="\Rightarrow M' = M_{ADN} \cdot (2^{n} - 1)" />
          <InlineMath math="\Rightarrow M' = M_{ADN} \cdot (2^{2} - 1)" />
          <InlineMath math="\Rightarrow M = \frac{M'}{2^{2}-1} = \frac{9000}{3}" />
          <p><InlineMath math="\Rightarrow M = 3000" /> នុយក្លេអូទីត</p>
          <p>ដោយពីនុយក្លេអូទីតមួយទៅនុយក្លេអូទីតមួយទៀតប្រវែង 0.34nm</p>
          <InlineMath math="\Rightarrow l = \frac{M}{2} \times 0.34 nm" />
          <InlineMath math="\Rightarrow l = \frac{3000}{2} \times 0.34" />
          <InlineMath math="\Rightarrow l = 510 nm" />
          <p className="font-bold">ខ. គណនាចំនួននុយក្លេអូទីតប្រភេទនីមួយៗមុនតំឡេិងទ្វេ</p>
          <p>តាមគោលការណ៏បំពេញបាស <InlineMath math="A-T , C-G \Rightarrow A=T , C=G" /></p>
          <InlineMath math="2\%C = 40\% \Rightarrow \%C = \frac{40\%}{2} = 20\%" />
          <p>យេីងបាន <InlineMath math="\%A + \%T + \%C + \%G = 100\%" /></p>
          <p>យេីងបាន <InlineMath math="2\%A + 2\%C = 50\%" /></p>
          <InlineMath math="\Rightarrow \%A = 50\% - 20\% = 30\%" />
          <p>ចំនួននុយក្លេអូទីត <InlineMath math="A = \frac{3000 \times 30}{100} = 900 " /> នុយក្លេអូទីត</p>
          <p>ចំនួននុយក្លេអូទីត <InlineMath math="C = \frac{3000 \times 20}{100} = 600 " /> នុយក្លេអូទីត</p>
          <p>ដូច្នេះ <InlineMath math="A=T = 900" /> នុយក្លេអូទីត</p>
          <p><InlineMath math="C=G = 600" /> នុយក្លេអូទីត</p>
          <p className="font-bold">គ. គណនាចំនួននុយក្លេអូទីតប្រភេទនីមួយៗនៅលើច្រវាក់នីមួយៗរបស់ម៉ូលេគុលADN</p>
          <InlineMath math="A_{ADN} = A_{1} + T_{1} \Rightarrow T_{1} = A_{ADN} - A_{1}" />
          <p><InlineMath math="\Rightarrow T_{1} = 900 - 727 = 173" /> នុយក្លេអូទីត</p>
          <InlineMath math="G{ADN} = C_{1} + G_{1} \Rightarrow C_{1} = G_{ADN} - G_{1}" />
          <p><InlineMath math="\Rightarrow C_{1} = 600 - 497 = 103 " /> នុយក្លេអូទីត</p>
          <p>តាមគោលការណ៏បំពេញបាស <InlineMath math="A-T , C-G \Rightarrow A=T , C=G" /></p>
          <p>ដូចនេះ <InlineMath math="A_{1} = T_{2} = 727" /> នុយក្លេអូទីត</p>
          <p><InlineMath math="T_{1} = A_{2} = 173" /> នុយក្លេអូទីត</p>
          <p><InlineMath math="C_{1} = G_{2} = 103" /> នុយក្លេអូទីត</p>
          <p><InlineMath math="G_{1} = C_{2} = 497" /> នុយក្លេអូទីត</p>
        </div>
      ]
    },
    {
      id: "ex8",
      title: "",
      description: "លំហាត់ទី ៣",
      problemType: "Eighth Exercise",
      problems: [
        <div className="flex flex-col gap-3 items-start" key='q1'>
          <p>ម៉ូលេគុល ADN មួយមានចំនួននុយក្លេអូទីតប្រភេទ A លើសប្រភេទនុយក្លេអូទីតដែលមិនមែនជាគូបាសបំពេញគ្នាចំនួន <InlineMath math="2 \times 10^{4} " /> នុយក្លេអូទីត។ ម៉ូលេគុលនេះមានប្រវែង68មីក្រូម៉ែត ។</p>
          <p>ក-ចូររកចំនួននុយក្លេអូទីតប្រភេទនីមួយៗរបស់ ADN?</p>
          <p>ខ-បើក្នុងច្រវាក់ទី១ Aមានចំនួន <InlineMath math="3 \times 10^{4} " /> នុយក្លេអូទីត និង Cមានចំនួន <InlineMath math="4 \times 10^{4} " /> នុយក្លេអូទីត។ តើក្នុងច្រវាក់នីមួយៗរបស់ADNមាននុយក្លេអូទីតប្រភេទនីមួយៗស្មើប៉ុន្មាន ?</p>
        </div>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[14px]" key="a1">
          <p className="font-bold">ក. រកចំនួននុយក្លេអូទីតប្រភេទនីមួយៗរបស់ ADN</p>
          <p>បំរាប់ <InlineMath math="A-C = 2 \times 10^{4}" /> នុយក្លេអូទីត</p>
          <p>ប្រវែង <InlineMath math="l = 68 u" /></p>
          <p><InlineMath math="A_{1} = 30000" /> នុយក្លេអូទីត</p>
          <p><InlineMath math="C_{1} = 40000" /> នុយក្លេអូទីត</p>
          <p>ដោយ <InlineMath math="1 um = 10^{3} nm" /></p>
          <p>ប្រវែង <InlineMath math="l = 68000 nm" /></p>
          <p>ដោយពីនុយក្លេអូទីតមួយទៅនុយក្លេអូទីតមួយទៀតប្រវែង 0.34nm</p>
          <InlineMath math="\Rightarrow l = \frac{M}{2} \times 0.34 nm" />
          <InlineMath math="\Rightarrow M = \frac{2 \times l}{0.34}" />
          <InlineMath math="\Rightarrow M = \frac{2 \times 68000}{0.34}" />
          <p><InlineMath math="\Rightarrow M = 4 \times 10^{5}" /> នុយក្លេអូទីត</p>
          <p>តាមគោលការណ៏បំពេញបាស <InlineMath math="A-T , C-G \Rightarrow A=T , C=G" /></p>
          <p>យេីងបាន <InlineMath math="M = A + T + C + G" /></p>
          <InlineMath math="\Rightarrow M = 2A + 2C" />
          <InlineMath math="2A + 2C = 4 \times 10^{5}" />
          <InlineMath math="\Rightarrow A + C = 20 \times 10^{4} (2)" />
          <p>ចង (1) និង (2) ជាប្រព័ន្ធសមីការ</p>
          <p><InlineMath math="2A = 22 \times 10^{4} " /></p>
          <p><InlineMath math="\Rightarrow A = 11 \times 10^{4} " /> នុយក្លេអូទីត</p>
          <p><InlineMath math="(2) \Rightarrow C= 20 \times 10^{4} - 11 \times 10^{4}" /></p>
          <p><InlineMath math="\Rightarrow  C = 9 \times 10^{4} " /> នុយក្លេអូទីត</p>
          <p>ដូច្នេះ <InlineMath math="A=T= 11 \times 10^{4}" /> នុយក្លេអូទីត</p>
          <p><InlineMath math="C=G= 9 \times 10^{4}" /> នុយក្លេអូទីត</p>
          <p className="font-bold">ខ. រកចំនួននុយក្លេអូទីតនីមួយៗក្នុងច្រវ៉ាក់ម្ខាងៗរបស់ADN</p>
          <p>ដោយ <InlineMath math="A_{ADN} = A_{1} + T_{1} \Rightarrow T_{1} = A_{ADN} - A_{1}" /></p>
          <p><InlineMath math="\Rightarrow T_{1} = 11 \times 10^{4} - 3 \times 10^{4} = 8 \times 10^{4}" /> នុយក្លេអូទីត</p>
          <InlineMath math="G_{ADN} = C_{1} + G_{1} \Rightarrow G_{1} = G_{ADN} - C_{1}" />
          <p><InlineMath math="\Rightarrow G_{1} = 9 \times 10^{4} - 4 \times 10^{4} = 5 \times 10^{4}" /> នុយក្លេអូទីត</p>
          <p>តាមគោលការណ៏បំពេញបាស <InlineMath math="A-T , C-G \Rightarrow A=T , C=G" /></p>
          <p>ដូចនេះ <InlineMath math="A_{1} = T_{2} = 3 \times 10^{4}" /> នុយក្លេអូទីត</p>
          <p><InlineMath math="T_{1} = A_{2} = 8 \times 10^{4}" /> នុយក្លេអូទីត</p>
          <p><InlineMath math="C_{1} = G_{2} = 4 \times 10^{4}" /> នុយក្លេអូទីត</p>
          <p><InlineMath math="G_{1} = C_{2} = 5 \times 10^{4}" /> នុយក្លេអូទីត</p>


        </div>
      ]
    },
    {
      id: "ex9",
      title: "",
      description: "លំហាត់ទី ៤",
      problemType: "Nineth Exercise",
      problems: [
        <div className="flex flex-col gap-3 items-start" key="q1">
          <p>ម៉ូលេគុលADNមួយមានចំនួននុយក្លេអូទីតប្រភេទA តិចជាងចំនួននុយក្លេអូទីតC ចំនួន <InlineMath math="\frac{1}{10}" /> នៃចំនួននុយក្លេអូទីតទាំងអស់ ហើយមានចំនួនសម្ព័ន្ធអ៊ីដ្រូសែនសរុប <InlineMath math="195 \times 10^{3} " /> ។</p>
          <p>ក-ចូររកប្រវែងម៉ូលេគុលADN នេះគិតជាមីក្រូម៉ែត ?</p>
          <p>ខ-ពេលម៉ូលេគុលADN ធ្វើស្វ័យដំឡើងទ្វេ2ដង តើវាត្រូវការនុយក្លេអូទីតសេរីសរុបប៉ុន្មាន ?</p>
          <p>គ-តើម៉ូលេគុលADN នេះមានចំនួនប៉ុន្មានជំហាន ?</p>
        </div>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[14px]" key="a1">
          <p className="font-bold">ក. រកចំនួននុយក្លេអូទីតប្រភេទនីមួយៗរបស់ ADN</p>
          <p>បំរាប់ : <InlineMath math="\%C - \%A = \frac{1}{10} = 10\% (1)" /></p>
          <p><InlineMath math="L = 195 \times 10^{3}" /> សម្ព័ន្ធអុីដ្រូសែន</p>
          <p>ម៉ូលេគុលADNស្វ័យដំឡេីងទ្វេ2ដង</p>
          <p>តាមគោលការណ៏បំពេញបាស <InlineMath math="A-T , C-G \Rightarrow A=T , C=G" /></p>
          <p>យេីងបាន <InlineMath math="\%A + \%T + \%C + \%G = 100\%" /></p>
          <InlineMath math="\Rightarrow \%A + \%C = 50\% (2)" />
          <p>ចង (1) និង (2) ជាប្រព័ន្ធសមីការ</p>
          <InlineMath math="\Rightarrow 2\%C = 60\% \Rightarrow \%C = 30\%" />
          <InlineMath math="(2) \Rightarrow 2\%A = 50\% \Rightarrow \%A = 20\%" />
          <p>ចំនួននុយក្លេអូទីត <InlineMath math="A = \frac{M \times 20}{100} = \frac{20M}{100}" /></p>
          <p>ចំនួននុយក្លេអូទីត <InlineMath math="C= \frac{M \times 30}{100} = \frac{30M}{100}" /></p>
          <p>Aចងភ្ជាប់Tដោយសម្ព័ន្ធអុីដ្រូសែន2</p>
          <p>Cចងភ្ជាប់Gដោយសម្ព័ន្ធអុីដ្រូសែន3</p>
          <InlineMath math="\Rightarrow L = 2A + 3C" />
          <InlineMath math="\Rightarrow 2A + 3C = 195 \times 10^{3}" />
          <InlineMath math="\Rightarrow 2 \cdot (\frac{20M}{100}) + 3(\frac{30M}{100}) = 195 \times 10^{3}" />
          <InlineMath math="\Rightarrow 40M + 90M = 195 \times 10^{3}" />
          <InlineMath math="\Rightarrow 130M = 195 \times 10^{3}" />
          <p><InlineMath math="\Rightarrow M = 15 \times 10^{3}" /> នុយក្លេអូទីត</p>
          <p>ដោយពីនុយក្លេអូទីតមួយទៅនុយក្លេអូទីតមួយទៀតប្រវែង 0.34nm</p>
          <InlineMath math="\Rightarrow l = \frac{M}{2} \times 0.34 nm" />
          <InlineMath math="\Rightarrow l = \frac{15 \times 10^{4}}{2} \times 0.34" />
          <InlineMath math="\Rightarrow l = 25500 nm" />
          <p>ដោយ <InlineMath math="1nm = 10^{-3} um" /></p>
          <p>ដូច្នេះ <InlineMath math=" l = 25.5 um" /></p>
          <p className="font-bold">ខ. គណនាចំនួននុយក្លេអូទីតសេរីសរុប</p>
          <p>ម៉ូលេគុល ADN ស្វ័យដំឡេីងទ្វេ </p>
          <p>1 ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{1}" /></p>
          <p>2 ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{2}" /></p>
          <p>3 ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{3}" /></p>
          <p>n ដង <InlineMath math="\Rightarrow " /> ADNកូន = <InlineMath math="2^{n}" /></p>
          <p>ដោយម៉ូលេគុលADN ស្វ័យដំឡេីងទ្វេ 2 ដង បង្កេីតបានADNកូន = <InlineMath math="2^{3}" /> ដែលក្នុងនោះមានADNមេ1</p>
          <p><InlineMath math="\Rightarrow " /> ចំនួនADNកេីតថ្មី = <InlineMath math="2^{2} - 1" /></p>
          <InlineMath math="\Rightarrow M' = M_{ADN} \cdot (2^{n} - 1)" />
          <p><InlineMath math="\Rightarrow M' = 15 \times 10^{4} \times 3 = 45 \times 10^{4}" /> នុយក្លេអូទីតសេរី</p>
          <p>ដូចនេះ <InlineMath math=" M' =  45 \times 10^{4}" /> នុយក្លេអូទីតសេរី</p>
          <p className="font-bold">គ. គណនាចំនួនជំហានក្នុងម៉ូលេគុល ADN</p>
          <p>ដោយ1ជំហានស្មេីនឹង20នុយក្លេអូទីត</p>
          <p><InlineMath math="\Rightarrow " /> ចំនួនជំហាន = <InlineMath math="\frac{M}{2} = \frac{15 \times 10^{4}}{20} = 7500 " /> ជំហាន</p>
          <p>ដូចនេះ ចំនួនជំហាន = 7500 ជំហាន</p>





        </div>
      ]
    },
    {
      id: "ex10",
      title: "",
      description: "លំហាត់ទី ៥",
      problemType: "Tenth Exercise",
      problems: [
        <div className="flex flex-col gap-3 items-start" key="q1">
          <p>ម៉ូលេគុលADN មួយមានប្រវែង 15.3 មីក្រូម៉ែត ។</p>
          <p>ក-គណនាចំនួននុយក្លេអូទីតទាំងអស់របស់ម៉ូលេគុលADN ?</p>
          <p>ខ-គណនាចំនួននុយក្លេអូទីតប្រភេទនីមួយៗរបស់ម៉ូលេគុលADN បើគេដឹងថាផលដករវាង នុយក្លេអូទីត អាដេនីន និង ស៊ីតូស៊ីន ស្មើនឹង 20% នៃចំនួននុយក្លេអូទីតទាំងអស់ ។</p>
        </div>
      ],
      answers: [
        <div className="flex flex-col gap-3 text-[14px]" key="a1">
          <p className="font-bold">ក. គណនាចំនួននុយក្លេអូទីតទាំងអស់របស់ម៉ូលេគុលADN</p>
          <p>បំរាប់: ប្រវែង <InlineMath math="l = 15.3 um" /></p>
          <InlineMath math="\%A - \%C = 20\% (1)" />
          <p>ដោយពីនុយក្លេអូទីតមួយទៅនុយក្លេអូទីតមួយទៀតប្រវែង 0.34nm</p>
          <InlineMath math="\Rightarrow l = \frac{M}{2} \times 0.34 nm" />
          <InlineMath math="\Rightarrow M = \frac{2 \times l}{0.34}" />
          <p><InlineMath math="\Rightarrow M = 9 \times 10^{4}" /> នុយក្លេអូទីត</p>
          <p className="font-bold">ខ. គណនាចំនួននុយក្លេអូទីតប្រភេទនីមួយៗរបស់ម៉ូលេគុលADN</p>
          <p>តាមគោលការណ៏បំពេញបាស <InlineMath math="A-T , C-G \Rightarrow A=T , C=G" /></p>
          <p>យេីងបាន <InlineMath math="\%A + \%T + \%C + \%G = 100\%" /></p>
          <InlineMath math="\Rightarrow \%A + \%C = 50\% (2)" />
          <p>ចង (1) និង (2) ជាប្រព័ន្ធសមីការ</p>
          <InlineMath math="\Rightarrow 2\%A = 70\% \Rightarrow \%A = 35\%" />
          <InlineMath math="(2) \Rightarrow \%C = 50\% - A = 50\% - 35\% = 15\%" />
          <p><InlineMath math="\Rightarrow A = \frac{35M}{100} = \frac{35 \times 9 \cdot 10^{4}}{100} = 31500" /> នុយក្លេអូទីត</p>
          <p><InlineMath math="\Rightarrow C = \frac{15M}{100} = \frac{15 \times 9 \cdot 10^{4}}{100} = 13500" /> នុយក្លេអូទីត</p>
          <p>ដូចនេះ <InlineMath math="A=T= 31500" /> នុយក្លេអូទីត</p>
          <p><InlineMath math="C=G= 13500" /> នុយក្លេអូទីត</p>




        </div>
      ]
    },
  ];
  return (
    <div>
      <>
        <TopicPracticeBox exercises={practiceExercises} />
      </>
    </div>
  )
}

export default QuestionAnswer
