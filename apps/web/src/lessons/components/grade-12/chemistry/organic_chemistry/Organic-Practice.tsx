import { TopicPracticeBox } from "@/components/pages/docs/boxes/TopicPracticeBox";
import { InlineMath } from "react-katex";

import { SummaryBox } from "@/components/pages/docs/boxes/SummaryBox";
import { BookAIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/docs/topic";

const OrganicPractice = () => {


  const summary: SummarySection[] = [
    {
      key: "formulas",
      title: "អាមីន",
      icon: BookAIcon,
      content: (
        <div className="text-[13px] flex flex-col gap-4" key={"f1"}>
          <p>អាមីន ជាសមាសធាតុសរីរាង្គ ដែលបានពីការជំនួសអាតូមអុីដ្រូសែនរបស់ម៉ូលេគុល <InlineMath math="NH_{3}" />​  ដោយរ៉ាឌីកាល់ R។</p>
          <p>ទម្រង់ទូទៅ <InlineMath math="R-NH_{2}" />។</p>
        </div>
      )
    },
    {
      key: "formulas",
      title: "អាមីត",
      icon: BookAIcon,
      content: (
        <div className="text-[13px] flex flex-col items-start gap-4" key={"f2"}>
          <p>អាមីត គឺជាស្រឡាយនៃអាសុីតកាបុកសុីលិច <InlineMath math="(R-COOH)" />​ដែលក្នុងនោះបង្គុំ <InlineMath math="(-OH)" />​របស់អាសុីតត្រូវបានជំនួសដោយបង្គុំអាមីន <InlineMath math="(-NH_{2})" />​។</p>
          <p>ទម្រង់ទូទៅ <InlineMath math="R-NH_{3}^{+}" />។</p>
        </div>
      )
    },
  ];



  const practiceExercises: PracticeExercise[] = [
    {
      id: "ex1",
      title: "លំហាត់ទី ១",
      description: "សំណួរ",
      problemType: "First Exercise",
      problems: [
        <span className="text-[13px]" key="q1">ហេតុអ្វីបានជាគេចាត់ទុកអាមីន ជាអង្គធាតុស្រឡាយនៃអាម៉ូញ៉ាក់ ? ចូរពន្យល់ ។</span>,
        <span className="text-[13px]" key="q2">ចូរសរសេរសមីការបង្កេីតទ្រីបុិបទីតពីអាសុីត <InlineMath math="\alpha" /> អាមីណូប្រូប្យូនិច ឬអាឡានីន</span>,


      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <p>អាមីនជាស្រលាយអាម៉ូញ៉ាក់ ព្រោះអាមីនបានមកពីការជំនួសអាតូមអុីដ្រូសែន នៃម៉ូលេគុលអាម៉ូញ៉ាក់ដោយរ៉ាឌីកាល់ R ហេីយអាមីនខ្លះទៀតមានលក្ខណ:រូប ក្លិន និងលក្ខណ:គីមីដូចគ្នាទៅនឹងអាម៉ូញ៉ាក់​ ។</p>
        </div>,
        <div key="a2" className="flex flex-col items-start text-[13px] gap-3">
          <p>សមីការបង្កើតទ្រីបុិបទីតពីអាឡានីន៖</p>
          <span className='text-[10px]'><InlineMath math="3H_2NCH(CH_3)COOH \rightarrow H_2NCH(CH_3)CONHCH(CH_3)CONHCH(CH_3)COOH + 2H_2O" /></span>

        </div>,
      ]
    },
    {
      id: "ex2",
      title: "លំហាត់ទី ២",
      description: "ចូរសរសេររូបមន្តសមាសធាតុ",
      problemType: "Second Exercise",
      problems: [
        <span className="text-[13px]" key="q1">ប៊ុយតាណាមីត</span>,
        <span className="text-[13px]" key="q2">N,N- ឌីមេទីលអាសេតាមីត</span>,
        <span className="text-[13px]" key="q3">N,N- ឌីមេទីលផរម៉ាមីត</span>,
        <span className="text-[13px]" key="q4">អាសុីត 3- អាមីណូប៊ូតាណូអុិច</span>,

      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <InlineMath math="CH_{3}-CH_{2}-CH_{2}-C(=O)NH_{2}" />
        </div>,
        <div key="a2" className="flex flex-col items-start text-[13px] gap-3">
          <InlineMath math="CH_{3}-C(=O)-N(CH_{3})_{2}" />
        </div>,
        <div key="a3" className="flex flex-col items-start text-[13px] gap-3">
          <InlineMath math="H-C(=O)-N(CH_{3})_{2}" />
        </div>,
        <div key="a4" className="flex flex-col items-start text-[13px] gap-3">
          <InlineMath math="H_{2}N-CH_{2}-CH_{2}-CH(COOH)-CH_{3}" />
        </div>,
      ]
    },
    {
      id: "ex3",
      title: "លំហាត់ទី ៣",
      description: "លំហាត់ទី ៣",
      problemType: "Third Exercise",
      problems: [
        <div className="text-[13px] flex flex-col gap-3 items-start" key="q1">
          <p>ម៉ូណូអាស៊ីតកាបុកស៊ីលិចឆ្អែត A មួយមានម៉ាស 60 g/moL ។​ </p>
          <p>១. កំណត់រូបមន្តម៉ូលេគុលនៃ A សរសេររូបមន្តស្នើលាត និង ឲ្យឈ្មោះផ្លូវការនៃ A ។</p>
          <p>២. គេយកសមាសធាតុ A ឲ្យមានប្រតិកម្មជាមួយមេតាណុល គេទទួលបានសមាសធាតុ អេស្ទែ B ចំនួន 22.2 g ។គេដឹងថាទិន្នផលប្រតិកម្មគឺ 67% ។</p>
          <p>ក. សរសេរសមីការតាងប្រតិកម្មអេស្ទែកម្ម</p>
          <p>ខ.គណនាសមាសធាតុ A ដែលយកមកប្រើ ។</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[12px] gap-3">
          <p className="font-bold">១. កំណត់រូបមន្តម៉ូលេគុលនៃ A </p>
          <p>គេមាន ម៉ាសម៉ូលេគុល A = 60 g/mol។ សម្រាប់ម៉ូណូអាស៊ីតកាបូកស៊ីលិចឆ្អែត៖</p>
          <InlineMath math="C_{n}H_{2n+1}COOH" />
          <p>ដោយ <InlineMath math="M = 12n + (2n+1) + 45 = 14n + 46" /></p>
          <p><InlineMath math="14n + 46 = 60 \Rightarrow n = 1" /></p>
          <p>⟹ រូបមន្តម៉ូលេគុល៖ <InlineMath math="C_{2}H_{4}O_{2}" /></p>
          <p>រូបមន្តស្នើលាត៖ <InlineMath math="CH_{3}COOH" /></p>
          <p>ឈ្មោះផ្លូវការ៖ អាស៊ីតអាសេទិច</p>
          <p className="font-bold">២,ក. សមីការប្រតិកម្មអេស្ទែកម្ម</p>
          <span className='text-[11px]'><InlineMath math="CH_{3}COOH + CH_{3}OH \xrightarrow{H_{2}SO_{4}} CH_{3}COOCH_{3} + H_{2}O" /></span>
          <p className="font-bold">ខ.គណនាសមាសធាតុ A </p>
          <p>តាមរូបមន្ត <InlineMath math="Rd = \frac{m_{ទទួល} \cdot 100}{m_{ទ្រឹស្តី}} " /></p>
          <p><InlineMath math="\rightarrow m_{ទទួល}= \frac{Rd \cdot m_{ទ្រឹស្តី}}{100} " /></p>
          <p>ដោយ Rd= 67%</p>
          <p>រកម៉ាសទ្រឹស្តីអាមីត</p>
          <p>តាមរូបមន្ត <InlineMath math="m = n \cdot M" /></p>
          <p>ដោយ <InlineMath math="M = 60 g/mol" /></p>
          <p>រកម៉ូលអេស្ទែ B</p>
          <p>តាមរូបមន្ត <InlineMath math="n = \frac{m}{M}" /></p>
          <p>ដោយ <InlineMath math="M_{B} = 74 g/mol" /></p>
          <p>m = 22.2 g</p>
          <p>គេបាន <InlineMath math="n_{B}  = \frac{22.2}{74} = 0.3 mol" /></p>
          <p>តាមសមីការ <InlineMath math="n_{A} = n_{B} = 0.3 mol" /></p>
          <p>គេបាន <InlineMath math="m_{ទ្រឹស្តី} = 0.3 \cdot 60 = 18 g" /></p>
          <p>នាំឲ <InlineMath math=" m_{ទទួល}= \frac{18 \cdot 67}{100} = 12.06 g" /></p>
        </div>,
      ]
    },
    {
      id: "ex4",
      title: "លំហាត់ទី ៤",
      description: "លំហាត់ទី ៤",
      problemType: "Fourth Exercise",
      problems: [
        <div className="text-[13px] flex flex-col gap-3 items-start" key="q1">
          <p>គេយកអាស៊ីតអាសេទិច 0.18mol ចំនួន 1L ឲ្យធ្វើប្រតិកម្មជាមួយអាម៉ូញ៉ាក់ គេទទួលបានអាមីត <InlineMath math="(CH_{3}CONH_{2})" />និងទឹក ។</p>
          <p>១. សរសេរសមីការតាងប្រតិកម្មទង្វើអាមីត ។ ចូរប្រាប់ឈ្មោះអាមីតដែលទទួលបាន។</p>
          <p>២. កំណត់ pH នៃសូលុយស្យុងអាស៊ីតអាសេទិច បើ <InlineMath math="K_{a} = 1.8 \cdot 10^{-5}" /> ។</p>
          <p>៣.គណនាម៉ាសអាមីតដែលទទួលបាន បើទិន្នផលប្រតិកម្មស្មើនឹង 80% ។គេឲ្យ <InlineMath math="log 1.8 = 0.25" /> ។</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[12px] gap-3">
          <p className="font-bold">១. សមីការតាងប្រតិកម្មទង្វើអាមីត</p>
          <InlineMath math="CH_{3}COOH + NH_{3} \rightarrow CH_{3}CONH_{2} + H_{2}O" />
          <p>អាមីតដែលទទួលបាន៖ </p>
          <p><InlineMath math="CH_{3}CONH_{2}" />អេតាណាមីត</p>
          <p className="font-bold">២. កំណត់ pH នៃសូលុយស្យុងអាស៊ីតអាសេទិច</p>
          <p>គេមាន <InlineMath math="n=0.18\ mol" /></p>
          <InlineMath math="V=1\ L" />
          <p>រកកំហាប់អាសុីត​</p>
          <p>តាមរូបមន្ត <InlineMath math="C= \frac{n}{V}" /></p>
          <InlineMath math="= \frac{0.18}{1} = 0.18 M" />
          <p>សម្រាប់អាស៊ីតខ្សោយ៖ <InlineMath math="[H^{+}] = \sqrt{K_{a}\,C}" />។</p>
          <p><InlineMath math="[H^{+}] = \sqrt{(1.8\times10^{-5})\times 0.18} = \sqrt{3.24\times10^{-6}} \approx 1.8\times10^{-3}\ M" /></p>
          <p>
            <InlineMath math="pH=-\log(1.8\times10^{-3})=3-\log(1.8)" /> ហើយគេឲ្យ{" "}
            <InlineMath math="\log(1.8)=0.25" /> ⟹ <InlineMath math="pH\approx 3-0.25=2.75" />។
          </p>
          <p className="font-bold">៣. គណនាម៉ាស​អាមីត​ទទួលបាន</p>
          <p>តាមរូបមន្ត <InlineMath math="Rd = \frac{m_{ទទួល} \cdot 100}{m_{ទ្រឹស្តី}} " /></p>
          <p><InlineMath math="\rightarrow m_{ទទួល}= \frac{Rd \cdot m_{ទ្រឹស្តី}}{100} " /></p>
          <p>ដោយ Rd= 80%</p>
          <p>រកម៉ាសទ្រឹស្តីអាមីត</p>
          <p>តាមរូបមន្ត <InlineMath math="m = n \cdot M" /></p>
          <p>ដោយ <InlineMath math="M_{CH_{3}CONH_{2}} = 12 + (1 \cdot 3) + 12 + 16 + 14 + (1 \cdot 2) = 59 g/mol" /></p>
          <p>គេបាន <InlineMath math="m_{ទ្រឹស្តី} = 0.18 \cdot 59 = 10.62 g" /></p>
          <p>នាំឲ <InlineMath math=" m_{ទទួល}= \frac{10.62 \cdot 80}{100} = 8.496 g" /></p>
        </div>,
      ]
    },
    {
      id: "ex12",
      title: "លំហាត់ទី ១២",
      description: "បាក់ឌុប ២០២៤",
      problemType: "Twelve Exercise",
      problems: [
        <div className="text-[13px] flex flex-col gap-3 items-start" key="q1">
          <p>គេធ្វើប្រតិកម្មអេស្អែកម្មរវាងអាស៊ីត A និងអាល់កុល B គេទទួលបានអេស្ទែ E ដែលមានម៉ាសម៉ូល<InlineMath math="M_{E} = 102 g/mol" /> ។</p>
          <p>ក. ចូរកំណត់រូបមន្តដុលរបស់អេស្ទែ E ។ អេស្ទែ E កើតពីអាស៊ីតមានមួយអាតូមកាបូន និងអាល់កុលថ្នាក់ 1 ខ្សែកាបួនគ្មានខ្នែង ។ ចូរសរសេររូបមន្តស្ទើរលាតនៃអេស្ទែ E ។ ចូរសរសេរសមីការតាងប្រតិកម្មសំយោគអេស្ទែ E ។</p>
          <p>ខ. គេប្រើ 4.6g អាស៊ីត A និង 14.8g អាល់កុល B ។ គណនាម៉ាសអេស្ទែ E ដែលទទួលបាន បើទិន្នផលនៃប្រតិកម្ម Rd = 67% ។ </p>
          <p>ម៉ាសម៉ូល៖ ( C = 12, O=16, H = 1) g/mol. <InlineMath math="M_{A} = 46 g/mol" />, <InlineMath math="M_{B} = 74 g/mol" /></p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[12px] gap-3">
          <p className="font-bold">ក. កំណត់រូបមន្តដុលរបស់អេស្ទែ E</p>
          <p>ដោយ អេស្ទែមានរូបមន្តទូទៅ <InlineMath math="C_{n}H_{2n}O_{2}" /></p>
          <p>នោះ <InlineMath math="M_{C_{n}H_{2n}O_{2}} = 102 g/mol" /></p>
          <p>ទាញបាន <InlineMath math="14n + 32 = 102 \Rightarrow n = 5" /></p>
          <p>គេបាន រូបមន្តដុលរបស់អេស្ទែ E គឺ <strong><InlineMath math="C_{5}H_{10}O_{2}" /></strong></p>
          <p className="font-bold">សរសេររូបមន្តស្ទេីរលាតរបស់អេស្ទែ </p>
          <p>ដោយ អេស្ទែកេីតពីអាសុីតមានមួយអាតូមកាបូន និងអាល់កុលថ្នាក់ 1 ខ្សែកាបួនគ្មានខ្នែងនោះរូបមន្តស្ទេីរលាតពិតប្រាកដគឺ </p>
          <InlineMath math="H-COO-CH_{2}-CH_{2}-CH_{2}-CH_{3}" />
          <p className="font-bold">សរសេរសមីការសំយោគ E </p>
          <span className='text-[10px]'><InlineMath math="H-COOH + CH_{3}-CH_{2}-CH_{2}-CH_{2}-OH \rightleftharpoons H-COO-CH_{2}-CH_{2}-CH_{2}-CH_{3} + H_{2}O" /></span>
          <p className="font-bold">ខ. គណនាម៉ាសអេស្ទែ E ដែលទទួលបាន</p>
          <p>តាមរូបមន្ត <InlineMath math="Rd = \frac{m_{Eទទួល} \cdot 100}{m_{Eទ្រឹស្តី}}" /></p>
          <InlineMath math="\Rightarrow m_{Eទទួល} =  \frac{Rd \cdot m_{Eទ្រឹស្តី}}{100}" />
          <p>គណនាម៉ូលដេីមនៃអាសុីត A</p>
          <p>តាមរូបមន្ត <InlineMath math="n_{A} = \frac{m_{A}}{M_{A}} = \frac{4.6}{46} = 0.1 mol" /></p>
          <p>គណនាម៉ូលដេីមអាល់កុល B</p>
          <p>តាមរូបមន្ត <InlineMath math="n_{B} = \frac{m_{B}}{M_{B}} = \frac{14.8}{74} = 0.2 mol" /></p>
          <p>ដោយ <InlineMath math="n_{A} < n_{B} " />នោះអាសុីត A ជាអ្នកកំណត់ប្រតិកម្ម ។</p>
          <p>គណនាម៉ាសអេស្ទែតាមទ្រឹស្តី</p>
          <p>តាមរូបមន្ត <InlineMath math="m_{Eទ្រឹស្តី} = n_{E} \cdot M_{E}" /></p>
          <p>ដោយ <InlineMath math="M_{E} = 102 g/mol" /></p>
          <p>តាមសមីការ <InlineMath math="n_{E} = n_{A} = 0.1 mol" /></p>
          <p>នោះ <InlineMath math="m_{Eទ្រឹស្តី} = 0.1 \cdot 102 = 10.2 g" /></p>
          <p>យេីងបាន <InlineMath math="m_{Eទទួល}  = \frac{67 \cdot 10.2}{100} = 6.834 g" /></p>

        </div>,
      ]
    },
    {
      id: "ex9",
      title: "លំហាត់ទី ៩",
      description: "បាក់ឌុប ២០២៣",
      problemType: "Ninth Exercise",
      problems: [
        <div className="text-[13px] flex flex-col gap-3 items-start" key="q1">
          <p>១. ចូរសរសេរសមីការតាងប្រតិកម្ម :</p>
          <p>ក. <InlineMath math="CH_{3}COOH" /> និង <InlineMath math="CH_{3}-CH_{2}OH" /> </p>
          <p>ខ. <InlineMath math="CH_{3}COOH" /> និង <InlineMath math="NH_{3}" /> </p>
          <p>ខ. <InlineMath math="CO_{2}" /> និង <InlineMath math="NH_{3}" /> </p>
          <p>២. ក. ចូរគណនាម៉ាសម៉ូលអាសុីតខ្លាញ់ដែលបានពីអុីដ្រូលីសខ្លាញ់ ឬប្រេង (ទ្រីគ្លីសេរីត) មួយដែល 0.02 mol របស់វាមានម៉ាស 17.68 g ។</p>
          <p>ខ. ចូរកំណត់រូបមន្តរបស់អាស៊ីតខ្លាញ់នោះ បើគេដឹងថាថា ម៉ូលេគុលរបស់វាមានសម្ព័ន្ធពីរជាន់មួយ។</p>
          <p>គេឱ្យម៉ាសម៉ូលៈ C = 12 g/mol, O = 16 g/mol, H = 1 g/mol</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <p className="font-bold">១. សរសេរសមីការតាងប្រតិកម្ម :</p>
          <  p>ក. <InlineMath math="CH_{3}COOH + CH_{3}-CH_{2}OH \rightarrow CH_{3}-COO-CH_{2}-CH_{3} + H_{2}O" /></p>
          <p>ខ. <InlineMath math="CH_{3}COOH + NH_{3} \rightarrow CH_{3}-CO-NH_{2} + H_{2}O" /></p>
          <p>គ. <InlineMath math="CO_{2} + NH_{3} \rightarrow H_{2}N-CO-NH_{2} + H_{2}O" /></p>
          <p className="font-bold">២. ក. ចូរគណនាម៉ាសម៉ូលអាសុីតខ្លាញ់</p>
          <p>បម្រាប់ <InlineMath math="m_{ខ្លាញ់}= 17.68 g , n_{ខ្លាញ់} = 0.02 mol" /> </p>
          <p>តាមរូបមន្ត <InlineMath math="M_{ខ្លាញ់} = \frac{m}{n} = \frac{17.68}{0.02} = 884 g/mol" /></p>
          <div className="flex items-center gap-3">
            <p>តាមរូបមន្តទូទៅខ្លាញ់</p>
            <div className="flex flex-col">
              <InlineMath math="CH_{2}-O-CO-R" />
              <InlineMath math="|" />
              <InlineMath math="CH-O-CO-R" />
              <InlineMath math="|" />
              <InlineMath math="CH_{2}-O-CO-R" />
            </div>
          </div>
          <p>ដោយ <InlineMath math="M_{ខ្លាញ់}" /> = (12 x 6) + (1 x 5) + (16 x 6) + <InlineMath math="3M_{R}" /></p>
          <p>72 + 5 + 96 + <InlineMath math="3M_{R}" /> = 884</p>
          <InlineMath math="M_{R} = \frac{884 - 173}{3} = \frac{711}{3} = 237 g/mol" />
          <p>ដោយអាសុីតខ្លាញ់មានរូបមន្ត <InlineMath math="R-COOH" /></p>
          <p>គេបាន <InlineMath math="M_{R-COOH} = 237 + 12 + (16 x 2 ) +1 = 282 g/mol" /></p>
          <p className="font-bold">ខ. កំណត់រូបមន្តរបស់អាស៊ីតខ្លាញ់នោះ បើគេដឹងថាថា ម៉ូលេគុលរបស់វាមានសម្ព័ន្ធពីរជាន់មួយ។</p>
          <p>បម្រាប់ <InlineMath math="M_{ខ្លាញ់}" /> = 282 g/mol</p>
          <p>តាមរូបមន្តទូទៅអាសុីតខ្លាញ់ឆ្អែត <InlineMath math="C_{n}H_{2n+1} - COOH" /></p>
          <InlineMath math="M_{C_{n}H_{2n+1} - COOH} = 282 g/mol" />
          <p>12n + 2n + 1 + 12 + (16 x 2) + 1 = 282</p>
          <InlineMath math="n = \frac{282 - 46}{14} = 16.8 = 17" />
          <p>គេបានរូបមន្តដុលអាសុីតខ្លាញ់ <InlineMath math="C_{17}H_{35}-COOH" />អាសុីតស្ពេអារិច</p>
          <p>ដោយដឹងថារូបមន្តដុលអាសុីតខ្លាញ់របស់វាគឺសម្ព័ន្ធជាន់ មួយ </p>
          <p>គេបានរូបមន្តដុលអាសុីតខ្លាញ់ <InlineMath math="C_{17}H_{33}-COOH" /> អាសុីតអូលេអុិច</p>
        </div>,
      ]
    },
    {
      id: "ex10",
      title: "លំហាត់ទី ១០",
      description: "បាក់ឌុប ២០២២",
      problemType: "Tenth Exercise",
      problems: [
        <div className="text-[13px] flex flex-col gap-3 items-start" key="q1">
          <p>ចំហេះសព្វ 2.2g អេស្ទែ <InlineMath math="C_{n}H_{2n}O_{2}" /> មួយផ្តល់ឧស្ម័នកាបូនិច 4.4g និងទឹក ។ គេដឹងថាផ្នែកអាល់កុល និងផ្នែកអាសុីតបង្កអេស្ទែនេះជាសមាសធាតុឆ្អែត ។</p>
          <p>ក. ចូរកំណត់រូបមន្តដុលរបស់អេស្ទែនេះ </p>
          <p>ខ. ចូរសរសេររូបមន្តស្ទេីរលាត និងឈ្មោះរបស់អេស្ទែដែលអាចមាន </p>

        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <p className="font-bold">ក. ចូរកំណត់រូបមន្តដុលរបស់អេស្ទែនេះ </p>
          <p>តាងរូបមន្តទូទៅនៃអេស្ទែឆ្អែតគឺ <InlineMath math="C_{n}H_{2n}O_{2}" /></p>
          <p>សមីការចំហេះសព្វអេស្ទែ</p>
          <div className="flex items-start gap-1">
            <div className="flex flex-col gap-2">
              <InlineMath math="C_{n}H_{2n}O_{2}" />
              <p>(14n + 32 ) g</p>
              <p>(2.2 ) g</p>
            </div>
            <InlineMath math=" + (\frac{3n}{2} -1 ) O_{2} \rightarrow" />
            <div className="flex flex-col gap-2">
              <InlineMath math="nCO_{2}" />
              <p>(2.2 ) g</p>
              <p>(4.4 ) g</p>
            </div>
            <InlineMath math=" + nH_{2}O" />
          </div>
          <p>តាមសមាមាត្រ គេបាន </p>
          <div className="flex items-center gap-3 text-[14px]">
            <InlineMath math="\frac{14n + 32}{(2.2)} = \frac{44n}{4.4}" />
          </div>
          <div className="flex items-center gap-3">
            <InlineMath math="\frac{14n + 32}{(2.2)} = 10n" />
          </div>
          <InlineMath math="\Rightarrow 14n + 32 = 22n" />
          <InlineMath math="\Rightarrow 8n = 32" />
          <InlineMath math="\Rightarrow n = 4" />
          <p>ដូចនេះ អេស្ទែរូបមន្តដុលគឺ <strong><InlineMath math="C_{4}H_{8}O_{2}" /></strong></p>

          <p>ខ. សរសេររូបមន្តស្ទេីរលាត និងឈ្មោះរបស់អេស្ទែដែលអាចមាន </p>
          <div className="flex items-center flex-wrap gap-3">
            <InlineMath math="H-COO-CH_{2}-CH_{2}-CH_{3}" />
            <p>ប្រូពីលមេតាណូអាត</p>
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <InlineMath math="H-COO-CH(-CH_{3})-CH_{3}" />
            <p>មេទីលអេទីលមេតាណូអាត</p>
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <InlineMath math="CH_{3}-COO-CH_{2}-CH_{3}" />
            <p>អេទីលអេតាណូអាត</p>
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <InlineMath math="CH_{3}-CH_{2}-COO-CH_{3}" />
            <p>មេទីលប្រូប៉ាណូអាត</p>
          </div>
        </div>,
      ]
    },



  ];

  return (
    <>
      <SummaryBox
        title="រូបមន្តសំខាន់ៗ"
        sections={summary}
      />
      <TopicPracticeBox exercises={practiceExercises} />
    </>
  );
}

export default OrganicPractice
