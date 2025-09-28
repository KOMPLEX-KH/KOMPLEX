import TopicPracticeBox from "../../../common/box/TopicPracticeBox";
import { InlineMath } from "react-katex";

import SummaryBox from "../../../common/box/SummaryBox";
import { BookAIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/docs/topic";


const Acid_base_practice = () => {


  const summary: SummarySection[] = [
    {
      key: "formulas",
      title: "ចំណុចសមមូលអាសុីតបាស",
      icon: BookAIcon,
      content: (
        <div className="text-[13px] flex flex-col gap-4" key={"f1"}>
          <InlineMath math="C_{a} \cdot V_{a} = C_{b} \cdot V_{b}" />
          <div className='flex items-center gap-3 flex-wrap'>
            <span className='text-[13px]'><InlineMath math="[H_{3}O^{+}] = [OH^{-}] " /></span>
            <p>ជាសូលុយស្យុងណឺត</p>
            <span className='text-[13px]'><InlineMath math="(pH = 7 )" /></span>
          </div>
          <div className='flex items-center gap-3 flex-wrap'>
            <span className='text-[13px]'><InlineMath math="[H_{3}O^{+}] > [OH^{-}] " /></span>
            <p>ជាសូលុយស្យុងបាស </p>
            <span className='text-[13px]'><InlineMath math="(pH < 7 )" /></span>

          </div>
          <div className='flex items-center gap-3 flex-wrap'>
            <span className='text-[13px]'><InlineMath math="[H_{3}O^{+}] < [OH^{-}] " /></span>
            <p>ជាសូលុយស្យុងអាសុីត</p>
            <span className='text-[13px]'><InlineMath math="(pH > 7 )" /></span>
          </div>
        </div>
      )
    },
    {
      key: "formulas",
      title: "មាត្រដ្ឋាន pH",
      icon: BookAIcon,
      content: (
        <div className="text-[13px] flex flex-col items-start gap-4" key={"f2"}>
          <InlineMath math="pH = -log[H_{3}O^{+}]" />
          <InlineMath math="[H_{3}O^{+}] = 10^{-pH}" />
          <InlineMath math="pOH = -log[OH^{-}]" />
          <InlineMath math="[OH^{-}] = 10^{-pOH}" />
        </div>
      )
    },
  ];



  const practiceExercises: PracticeExercise[] = [
    {
      id: "ex1",
      title: "លំហាត់ទី ១",
      description: "សំណួរទី ១",
      problemType: "First Exercise",
      problems: [
        <p key="p1">តេីមានវិធីប៉ុន្មានយ៉ាងសម្រាប់វាស់ pH របស់សូលុយស្យុង ?</p>,
        <p key="p2">ដូចម្តេចហៅថា ស្វ័យអុីយ៉ុងកម្មនៃទឹក ?</p>,
        <p key="p3">តេីគេប្រេី pH សម្រាប់វាស់អ្វី ? ឲនិយមន័យ pH ។</p>,
        <p key="p4">ដូចម្តេចហៅថា សូលុយស្យុងណឺត ? វាមាន PH ស្មេីប៉ុន្មាន ?</p>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <p>មានវិធីសាស្ត្រ ពីរយ៉ាង ប្រើប្រាស់អង្គថាតុចង្អុលពណ៍ឬក្រដាសpH និង ឧបករណ៍ pH ម៉ែត្រ។</p>
        </div>,
        <div key="a2" className="flex flex-col items-start text-[13px] gap-3">
          <p>ស្វ័យអុីយ៉ុងកម្មនៃទឹក គឺជាប្រតិកម្មបន្ទេរប្រូតុងរវាងពីរម៉ូលេគុលទឹក។</p>
        </div>,
        <div key="a3" className="flex flex-col items-start text-[13px] gap-3">
          <p>គេប្រើpHសម្រាប់វាស់រកកម្រិតអាសុីតឬបាស់ក្នុងសូលុយស្យុង។ pH គឺជារង្វាស់នៃកំហាប់អ៊ីដ្រូសែនដែលជារង្វាស់ នៃសូលុយស្យុងអាស៊ីតឬអាល់កាឡាំង។ ខ្នាត pH ជាធម្មតាមានចាប់ពី ០ ដល់ ១៤ ។ </p>
        </div>,
        <div key="a4" className="flex flex-col items-start text-[13px] gap-3">
          <p>សូលុយស្យុងណឺត គឺជាសូលុយស្យុងដែលមានpHស្មើ 7។</p>
        </div>,
      ]
    },
    {
      id: "ex2",
      title: "លំហាត់ទី ២",
      description: "លំហាត់ទី ២",
      problemType: "Second Exercise",
      problems: [
        <span key="q1" className='text-[13px]'>ចូរកំណត់សមាសធាតុនីមួយៗជាអាសុីត បាស ឬមិនមែន ។ <InlineMath math="HCl , NaCl , Ca(OH)_{2} , NH_{4}Cl , CH_{4} , H_{2}CO_{3} , CaCO_{3} , NaOH" /> </span>,
        <span key="q2" className='text-[13px]'>ចូរកំណត់សមាសធាតុនីមួយៗជាម៉ូណូប្រទិច ឌីប្រូទិច និងទ្រីប្រូទិច ។ <InlineMath math="HCl , HClO_{4} , H_{2}SO_{4} , H_{2}SO_{3} , CH_{3}COOH , HNO_{3} , H_{3}PO_{2} , H_{3}PO_{4}" /> </span>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[12px] gap-2">
          <div className="flex items-center gap-2">
            <p>អាសុីត :</p>
            <span className='text-[12px]'><InlineMath math="HCl , H_{2}CO_{3}" /></span>
          </div>
          <div className="flex items-center gap-2">
            <p>បាស :</p>
            <span className='text-[12px]'><InlineMath math="Ca(OH)_{2} , NaOH" /></span>
          </div>
          <div className="flex items-center gap-2">
            <p>មិនមែនទាំងពីរ :</p>
            <span className='text-[12px]'><InlineMath math="NaCl , NH_{4}Cl , CH_{4} , CaCO_{3}" /></span>
          </div>
        </div>,
        <div key="a2" className="flex flex-col items-start text-[12px] gap-2">
          <div className="flex items-center gap-2">
            <p>ម៉ូណូប្រទិច :</p>
            <span className='text-[12px]'><InlineMath math="HCl , HClO_{4} , HNO_{3} , CH_{3}COOH" /></span>
          </div>
          <div className="flex items-center gap-2">
            <p>ឌីប្រូទិចអាសុីត :</p>
            <span className='text-[12px]'><InlineMath math="H_{2}SO_{4} , H_{2}SO_{3} , H_{3}PO_{2}" /></span>
          </div>
          <div className="flex items-center gap-2">
            <p>ទ្រីប្រូទិចអាសុីត :</p>
            <span className='text-[12px]'><InlineMath math="H_{3}PO_{4}" /></span>
          </div>
        </div>,
      ]
    },
    {
      id: "ex3",
      title: "សរសេររូបមន្តបាសឆ្លាស់របស់អាសុីត",
      description: "សរសេររូបមន្តបាសឆ្លាស់របស់អាសុីត",
      problemType: "Third Exercise",
      problems: [
        <span key="q1" className='text-[13px]'><InlineMath math="HNO_{2}" /></span>,
        <span key="q2" className='text-[13px]'><InlineMath math="H_{2}SO_{4}" /></span>,
        <span key="q3" className='text-[13px]'><InlineMath math="H_{2}S" /></span>,
        <span key="q4" className='text-[13px]'><InlineMath math="HCN" /></span>,
        <span key="q5" className='text-[13px]'><InlineMath math="HCOOH" /></span>,
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px]">
          <p><InlineMath math="HNO_{2} \rightarrow NO_{2}^{-}" /></p>
        </div>,

        <div key="a2" className="flex flex-col items-start text-[13px]">
          <p><InlineMath math="H_{2}SO_{4} \rightarrow HSO_{4}^{-}" /></p>
        </div>,

        <div key="a3" className="flex flex-col items-start text-[13px]">
          <p><InlineMath math="H_{2}S \rightarrow HS^{-}" /></p>
        </div>,

        <div key="a4" className="flex flex-col items-start text-[13px]">
          <p><InlineMath math="HCN \rightarrow CN^{-}" /></p>
        </div>,

        <div key="a5" className="flex flex-col items-start text-[13px]">
          <p><InlineMath math="HCOOH \rightarrow HCOO^{-}" /></p>
        </div>,
      ]
    },
    {
      id: "ex4",
      title: "បញ្ជាក់ពីគូអាសុីត បាសឆ្លាស់",
      description: "បញ្ជាក់ពីគូអាសុីត បាសឆ្លាស់",
      problemType: "Fourth Exercise",
      problems: [
        <span key="q1" className='text-[13px]'><InlineMath math="CH_{3}COO^{-} + HCN \rightleftharpoons CH_{3}COOH + CN^{-}" /></span>,
        <span key="q2" className='text-[13px]'><InlineMath math="HCO_{3}^{-} + HCO_{3}^{-} \rightleftharpoons H_{2}CO_{3} + CO_{3}^{2-}" /></span>,
        <span key="q3" className='text-[13px]'><InlineMath math="H_{2}SO_{4} + SO_{3}^{2-} \rightleftharpoons HSO_{4}^{-} + HSO_{3}^{-}" /></span>,
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <p><InlineMath math="CH_{3}COOH / CH_{3}COO^{-}" /></p>
          <p><InlineMath math="HCN / CN^{-}" /></p>
        </div>,

        <div key="a2" className="flex flex-col items-start text-[13px] gap-3">
          <p><InlineMath math="H_{2}CO_{3} / HCO_{3}^{-}" /></p>
          <p><InlineMath math="HCO_{3}^{-} / CO_{3}^{2-}" /></p>
        </div>,

        <div key="a3" className="flex flex-col items-start text-[13px] gap-3">
          <p><InlineMath math="H_{2}SO_{4} / HSO_{4}^{-}" /></p>
          <p><InlineMath math="HSO_{3}^{-} / SO_{3}^{2-}" /></p>
        </div>,
      ]
    },
    {
      id: "ex5",
      title: "សរសេររូបមន្តអាសុីតឆ្លាស់របស់អាសុីត",
      description: "សរសេររូបមន្តអាសុីតឆ្លាស់របស់អាសុីត",
      problemType: "Fifth Exercise",
      problems: [
        <span key="q1" className='text-[13px]'><InlineMath math="HS^{-}" /></span>,
        <span key="q2" className='text-[13px]'><InlineMath math="HCO_{3}^{-}" /></span>,
        <span key="q3" className='text-[13px]'><InlineMath math="CO_{3}^{2-}" /></span>,
        <span key="q4" className='text-[13px]'><InlineMath math="H_{2}PO_{4}^{-}" /></span>,
        <span key="q5" className='text-[13px]'><InlineMath math="HPO_{4}^{2-}" /></span>,
        <span key="q6" className='text-[13px]'><InlineMath math="HSO_{4}^{-}" /></span>,
        <span key="q7" className='text-[13px]'><InlineMath math="SO_{4}^{2-}" /></span>,
        <span key="q8" className='text-[13px]'><InlineMath math="SO_{3}^{2-}" /></span>,
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px]">
          <p><InlineMath math="HS^{-} \rightarrow H_{2}S" /></p>
        </div>,

        <div key="a2" className="flex flex-col items-start text-[13px]">
          <p><InlineMath math="HCO_{3}^{-} \rightarrow H_{2}CO_{3}" /></p>
        </div>,

        <div key="a3" className="flex flex-col items-start text-[13px]">
          <p><InlineMath math="CO_{3}^{2-} \rightarrow HCO_{3}^{-}" /></p>
        </div>,

        <div key="a4" className="flex flex-col items-start text-[13px]">
          <p><InlineMath math="H_{2}PO_{4}^{-} \rightarrow H_{3}PO_{4}" /></p>
        </div>,

        <div key="a5" className="flex flex-col items-start text-[13px]">
          <p><InlineMath math="HPO_{4}^{2-} \rightarrow H_{2}PO_{4}^{-}" /></p>
        </div>,

        <div key="a6" className="flex flex-col items-start text-[13px]">
          <p><InlineMath math="HSO_{4}^{-} \rightarrow H_{2}SO_{4}" /></p>
        </div>,

        <div key="a7" className="flex flex-col items-start text-[13px]">
          <p><InlineMath math="SO_{4}^{2-} \rightarrow HSO_{4}^{-}" /></p>
        </div>,

        <div key="a8" className="flex flex-col items-start text-[13px]">
          <p><InlineMath math="SO_{3}^{2-} \rightarrow HSO_{3}^{-}" /></p>
        </div>,
      ]
    },
    {
      id: "ex6",
      title: "លំហាត់ទី ៦",
      description: "លំហាត់ទី ៦",
      problemType: "Sixth Exercise",
      problems: [
        <div key="q1" className="flex flex-col items-start text-[13px] gap-3">
          <p>គណនាកំហាប់អុីយ៉ុងអុីដ្រូញ៉ូមរបស់សូលុយស្យុងមួយ ដែលមានកំហាប់អុីយ៉ុងអុីដ្រុកសុីត <InlineMath math="2.8 \cdot 10^{-9} M" /> ។</p>
        </div>,
        <div key="q2" className="flex flex-col items-start text-[13px] gap-3">
          <p>សូលុយស្យុងមួយមាន pH ស្មេីនឹង 1.50 ។ គណនាកំហាប់របស់អុីយ៉ុង <InlineMath math="[H_{3}O^{+}]" /> និង <InlineMath math="[OH^{-}]" /> ។</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <p>គេមាន <InlineMath math="[OH^-] = 2.8 \cdot 10^{-9}\;M" /></p>
          <p>តាមរូបមន្ត <InlineMath math="[H_3O^+][OH^-] = 10^{-14}" /></p>
          <p>នាំឲ <InlineMath math="[H_3O^+] = \dfrac{10^{-14}}{[OH^-]} = \dfrac{10^{-14}}{2.8 \cdot 10^{-9}} = 3.57 \cdot 10^{-6}\;M" /></p>

          <p>ដូចនេះ, កំហាប់អុីយ៉ុងអុីដ្រូញ៉ូមរបស់សូលុយស្យុងនេះគឺ <InlineMath math="[H_3O^+] = 3.57 \cdot 10^{-6}\;M" />។</p>
        </div>,
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <p>គណនាកំហាប់របស់អុីយ៉ុង <InlineMath math="[H_{3}O^{+}]" /></p>
          <p>គេមាន pH= 1.50</p>
          <p>តាមរូបមន្ត <InlineMath math="pH = -\log_{10}[H_{3}O^{+}]" /></p>
          <p>នាំឲ <InlineMath math=" [H_{3}O^{+}] = 10^{-pH} = 10^{-1.50}" /></p>
          <p><InlineMath math="[H_{3}O^{+}] = 3.16 \cdot 10^{-2} M" /></p>
          <p>គណនាកំហាប់របស់អុីយ៉ុង <InlineMath math="[OH^{-}]" /></p>
          <p>គេមាន <InlineMath math="K_{w} = 1.0 \cdot 10^{-14}" /></p>
          <p>តាមរូបមន្ត <InlineMath math="[OH^{-}] = \dfrac{K_{w}}{[H_{3}O^{+}]} = \dfrac{1.0 \cdot 10^{-14}}{3.16 \cdot 10^{-2}}" /></p>
          <p><InlineMath math="[OH^{-}] = 3.16 \cdot 10^{-13} M" /></p>
        </div>,
      ]
    },


    {
      id: "ex7",
      title: "លំហាត់ទី ៧",
      description: "លំហាត់ទី ៧",
      problemType: "Seventh Exercise",
      problems: [
        <div key="q1" className="flex flex-col items-start text-[13px] gap-3">
          <p>គេដាក់ស័ង្កសីឲមានប្រតិកម្មជាមួយសូលុយស្យុង <InlineMath math="H_{2}SO_{4}" /> ចំនួន 100mL នៅកំហាប់ 6M ។ គណនា:</p>
          <p>ក. ម៉ាសស័ង្កសីស៊ុលផាតដែលទទួលបាន</p>
          <p>ខ. មាឌឧស្ម័នអុីដ្រូសែនដែលភាយចេញពីប្រតិកម្មនៅសីតុណ្ហភាព STP ។</p>
          <p>(Zn = 65 , S= 32 , O= 16 , H = 1 ឧស្ម័ន 1mol នៅ STP មានមាឌ 22.4L)</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <p className="font-bold">ក. គណនាម៉ាសស័ង្កសីស៊ុលផាតដែលទទួលបាន</p>
          <div className="flex flex-wrap items-center gap-2">
            <p>សមីការតាងប្រតិកម្ម</p>
            <InlineMath math="Zn + H_{2}SO_{4} \rightarrow ZnSO_{4} + H_{2}" />
          </div>
          <p>តាមរូបមន្ត <InlineMath math="m = n \cdot M" /></p>
          <p>ដោយ <InlineMath math="M_{ZnSO_{4}}" /> = 65 + 32 + 4 x 16 = 98 g/mol</p>
          <p>រក <InlineMath math="n_{ZnSO_{4}}" /></p>
          <p>គេមាន <InlineMath math="V_{a}" /> = 100mL = 0.1 L</p>
          <p><InlineMath math="C_{a}" /> = 6M</p>

          <p>តាមរូបមន្ត <InlineMath math="n_{a} = C_{a} \cdot V_{a}" /></p>
          <p>= 6 x 0.1 = 0.6 mol</p>
          <p>ដោយ <InlineMath math="n_{ZnSO_{4}} = n_{a}" /></p>
          <p>នាំឲ <InlineMath math="n_{ZnSO_{4}} = 0.6 mol" /></p>
          <p>គេបាន <InlineMath math="m_{ZnSO_{4}} = n_{ZnSO_{4}} \cdot M_{ZnSO_{4}}" /></p>
          <p>= 0.6 x 98 = 58.8 g</p>
          <p>ដូច្នេះ ម៉ាសស័ង្កសីស៊ុលផាតដែលទទួលបានគឺ 58.8g</p>
          <p className="font-bold">ខ. គណនាមាឌឧស្ម័នអុីដ្រូសែនដែលភាយចេញពីប្រតិកម្ម</p>
          <p>តាមរូបមន្ត <InlineMath math="V_{H_{2}} = n_{H_{2}} \cdot V_{m}" /></p>
          <p>ដោយ <InlineMath math="V_{m} = 22.4 L" /></p>
          <p>នាំឲ <InlineMath math="n_{H_{2}} = n_{a} = 0.6 mol" /></p>
          <p>គេបាន <InlineMath math="V_{H_{2}} = n_{H_{2}} \cdot V_{m}" /></p>
          <p>= 0.6 x 22.4 = 13.44 L</p>
          <p>ដូច្នេះ មាឌឧស្ម័នអុីដ្រូសែនដែលភាយចេញពីប្រតិកម្មគឺ 13.44L</p>
        </div>,
      ]
    },

    {
      id: "ex8",
      title: "លំហាត់ទី ៨",
      description: "លំហាត់ទី ៨",
      problemType: "Eighth Exercise",
      problems: [
        <div key="q1" className="flex flex-col items-start text-[13px] gap-3">
          <p>សំបកខ្យងមួយផ្សំពី <InlineMath math="CaCO_{3}" /> មានប្រតិកម្មជាមួយសូលុយស្យុង HCl គេទទួលបាន 1500mL ឧស្ម័ន​ <InlineMath math="CO_{2}" /> នៅសីតុណ្ហភាព STP រួមទាំង <InlineMath math="CaCl_{2}" /> និងទឹក ។ គណនា:</p>
          <p>ក. បរិមាណ <InlineMath math="CaCO_{3}" /> ចូលរួមប្រតិកម្ម</p>
          <p>ខ. មាឌសូលុយស្យុង HCl នៅ 2M ដែលប្រេីក្នុងប្រតិកម្ម</p>
          <p>(Ca = 40 , C= 12 , O= 16 , H = 1 , Cl = 35.5 ឧស្ម័ន 1mol នៅ STP មានមាឌ 22.4L)</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <p className="font-bold">ក. គណនាបរិមាណ <InlineMath math="CaCO_{3}" /> ចូលរួមប្រតិកម្ម</p>
          <div className="flex flex-wrap items-center gap-2">
            <p>សមីការតាងប្រតិកម្ម</p>
            <InlineMath math="CaCO_{3} + 2HCl \rightarrow CaCl_{2} + H_{2}O + CO_{2}" />
          </div>
          <p>គេបាន <InlineMath math="V_{CO_{2}}" /> = 1500mL = 1.5 L</p>
          <p>ដោយ <InlineMath math="V_{m}" /> = 22.4 L/mol</p>
          <p>តាមរូបមន្ត <InlineMath math="n = \frac{V}{V_{m}}" /></p>
          <p><InlineMath math="n_{CO_{2}} = \frac{1.5}{22.4} = 0.067 mol" /></p>
          <p>តាមសមីការ <InlineMath math="n_{CaCO_{3}} = n_{CO_{2}}" /></p>
          <p>នាំឲ <InlineMath math="n_{CaCO_{3}} = 0.067 mol" /></p>
          <p>ដូច្នេះ បរិមាណ <InlineMath math="CaCO_{3}" /> ចូលរួមប្រតិកម្មគឺ 0.067 mol</p>

          <p className="font-bold">ខ. គណនាមាឌសូលុយស្យុង HCl</p>
          <p>តាមសមីការ៖ <InlineMath math="CaCO_{3} + 2HCl \rightarrow CaCl_{2} + H_{2}O + CO_{2}" /></p>
          <p><InlineMath math="n_{HCl} = 2 \times n_{CaCO_{3}}" /></p>
          <p>= 2 × 0.067 = 0.134 mol</p>
          <p>តាមរូបមន្ត C = <span className='text-[16px]'><InlineMath math="\frac{n}{V}" /></span></p>
          <p><InlineMath math="V_{HCl} = \frac{0.134}{2} = 0.067 L" /></p>
          <p>ដូច្នេះ មាឌសូលុយស្យុង HCl ដែលបានប្រើគឺ 0.067 L</p>
        </div>,
      ]
    },

    {
      id: "ex9",
      title: "លំហាត់ទី ៩",
      description: "លំហាត់ទី ៩",
      problemType: "Ninth Exercise",
      problems: [
        <div key="q1" className="flex flex-col items-start text-[13px] gap-3">
          <p>សូលុយស្យុងអាសុីត HCl មួយមានកំហាប់ <InlineMath math="4.5 \cdot 10^{-3} M" /> ។ គណនាកំហាប់របស់អុីយ៉ុង <InlineMath math="[H_{3}O^{+}]" /> និង <InlineMath math="[OH^{-}]" /> ។ ចូរគណនា :</p>
          <p>ក. កំហាប់អុីយ៉ុង <InlineMath math="[H_{3}O^{+}]" /></p>
          <p>ខ. កំហាប់អុីយ៉ុង <InlineMath math="[OH^{-}]" /></p>
          <p>គ. pH របស់សូលុយស្យុង</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <p className="font-bold">ក. គណនាកំហាប់អុីយ៉ុង <InlineMath math="[H_{3}O^{+}]" /></p>
          <p>ដោយ HCl ជាអាសុីតខ្លាំង</p>
          <p>នាំឲ <InlineMath math="[H_{3}O^{+}] = C_{HCl} = 4.5 \cdot 10^{-3} M" /></p>

          <p className="font-bold">ខ. កំហាប់អុីយ៉ុង <InlineMath math="[OH^{-}]" /></p>
          <p>យើងដឹងថា <InlineMath math="K_{w} = [H_{3}O^{+}] \cdot [OH^{-}] = 1 \cdot 10^{-14}" /></p>
          <p>នាំឲ <InlineMath math="[OH^{-}] =" /> <span className='text-[16px]'><InlineMath math="\frac{1 \cdot 10^{-14}}{[H_{3}O^{+}]}" /></span></p>
          <p>= <span className='text-[16px]'><InlineMath math="\frac{1 \cdot 10^{-14}}{4.5 \cdot 10^{-3}}" /></span></p>
          <p>= <InlineMath math="2.22 \cdot 10^{-12} M" /></p>

          <p className="font-bold">គ. គណនា pH</p>
          <p>តាមរូបមន្ត <InlineMath math="pH = - \log [H_{3}O^{+}]" /></p>
          <p>= - log(4.5 × 10⁻³)</p>
          <p>= 2.35</p>

        </div>,
      ]
    },

    {
      id: "ex10",
      title: "លំហាត់ទី ១០",
      description: "លំហាត់ទី ១០",
      problemType: "Tenth Exercise",
      problems: [
        <div key="q1" className="flex flex-col items-start text-[13px] gap-3">
          <p>ត្រីទឹកសាបអាចរស់បាន នៅក្នុងទឹកដែលមាន pH = 6.5 ទៅ 7.5 ។ អាងចិញ្ចឹមត្រីមួយមាន ទឹកសុទ្ធ 100L (pH = 7.0) ។ គេបានច្រលំចាក់អាសុីតក្លរីឌ្រិច (HCl = 1 mol/L) ចំនួន 10ml ទៅក្នុងអាងនោះ ។</p>
          <p>ក. គណនាកំហាប់អុីយ៉ុងក្លរួ និងអុីយ៉ុងអុីដ្រូញ៉ូម ក្នុងអាង</p>
          <p>ខ. គណនា pH នៃទឹកក្នុងអាងចិញ្ចឹមត្រី ។ តេីត្រីអាចរស់ក្នុងមជ្ឈដ្ឋាននេះបានទេ ?</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <p>ក. គណនាកំហាប់អុីយ៉ុង Cl⁻ និង H₃O⁺</p>
          <p>គេមាន <InlineMath math="C_{HCl} = 1 M" />, <InlineMath math="V = 10 mL = 0.01 L" /></p>
          <p>តាមរូបមន្ត <InlineMath math="n = C \cdot V" /></p>
          <p>នាំឲ <InlineMath math="n_{HCl} = 1 \cdot 0.01 = 0.01 mol" /></p>
          <p>ដោយ HCl ជាអាសុីតខ្លាំង</p>
          <p><InlineMath math="n_{H_{3}O^{+}} = n_{Cl^{-}} = 0.01 mol" /></p>
          <p>ទឹកក្នុងអាងសរុប <InlineMath math="V_{total} = 100 L" /></p>
          <p>តាមរូបមន្ត <InlineMath math="[H_{3}O^{+}] =" /> <span className='text-[17px]'><InlineMath math="\frac{n_{H_{3}O^{+}}}{V_{total}}" /></span></p>
          <p><InlineMath math="[H_{3}O^{+}] =" /> <span className='text-[16px]'><InlineMath math="\frac{0.01}{100}" /></span> = <InlineMath math="10^{-4} M" /></p>
          <p>តាមរូបមន្ត <InlineMath math="[Cl^{-}] =" /> <span className='text-[17px]'><InlineMath math="\frac{n_{Cl^{-}}}{V_{total}}" /></span></p>
          <p><InlineMath math="[Cl^{-}] =" /> <span className='text-[16px]'><InlineMath math="\frac{0.01}{100}" /></span> = <InlineMath math="10^{-4} M" /></p>
          <p>ខ. គណនាថា pH</p>
          <p><InlineMath math="pH = -\log [H_{3}O^{+}]" /></p>
          <p>= -log(1 × 10⁻⁴)</p>
          <p>= 4</p>

          <p>ដូច្នេះ pH នៃទឹកក្នុងអាងគឺ 4</p>
          <p>ត្រីអាចរស់បានត្រឹម pH = 6.5 → 7.5 ប៉ុណ្ណោះ។</p>
          <p>គេបាន pH = 4 ដែលអាស៊ីតខ្លាំងពេក → ត្រីមិនអាចរស់នៅក្នុងមជ្ឈដ្ឋាននេះបានទេ។</p>
        </div>,
      ]
    },
    {
      id: "ex11",
      title: "លំហាត់ទី ១១",
      description: "លំហាត់ទី ១១",
      problemType: "Eleventh Exercise",
      problems: [
        <div key="q1" className="flex flex-col items-start text-[13px] gap-3">
          <p>
            គេបន្ថែមសូ. <InlineMath math="Pb(NO_{3})_{2}" /> លេីសទៅក្នុង 500mL សូ.{" "}
            <InlineMath math="H_{2}SO_{4}" /> គេទទួលបានកករ 3.03g ។
          </p>
          <p>ក. គណនា pH និង pOH នៃសូលុយស្យុងអាសុីតស៊ុលផួរិច </p>
          <p>
            ខ. គេលាយ 50mL នៃអាសុីតនេះទៅលាយជាមួយ 50mL នៃសូ.{" "}
            <InlineMath math="NaOH" /> កំហាប់ 0.01M ។​ គណនា pH នៃល្បាយក្រោយប្រតិកម្ម ។
          </p>
        </div>,
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <p className="font-bold">ក. គណនា pH និង pOH នៃសូលុយស្យុងអាសុីតស៊ុលផួរិច</p>
          <p>សមីការតាងប្រតិកម្ម៖</p>
          <InlineMath math="Pb(NO_{3})_{2} + H_{2}SO_{4} \rightarrow PbSO_{4} + 2HNO_{3}" />
          <p>គេមាន <InlineMath math="m_{PbSO_{4}} = 3.03 g" /></p>
          <p><InlineMath math="M_{PbSO_{4}} = 303 g/mol" /></p>
          <p>
            ⟹ <InlineMath math="n_{PbSO_{4}} = \frac{3.03}{303} = 0.01 mol" />
          </p>
          <p>
            ដោយ <InlineMath math="n_{H_{2}SO_{4}} = n_{PbSO_{4}}" /> ⟹{" "}
            <InlineMath math="n_{H_{2}SO_{4}} = 0.01 mol" />
          </p>
          <p>
            ⟹ <InlineMath math="C = \frac{0.01}{0.5} = 0.02 M" />
          </p>
          <p>
            H₂SO₄ ជាអាសុីតខ្លាំង  ⟹{" "}
            <InlineMath math="[H_{3}O^{+}] = 2 \cdot C = 0.04 M" />
          </p>
          <p>
            <InlineMath math="pH = -\log(0.04) = 1.40" />
          </p>
          <p>
            <InlineMath math="pOH = 14 - pH = 12.60" />
          </p>

          <p className="font-bold">
            ខ. គណនា pH នៃល្បាយក្រោយប្រតិកម្ម
          </p>
          <p>
            ចំណុះអាសុីត 50mL ⟹{" "}
            <InlineMath math="n_{H_{2}SO_{4}} = 0.02 \cdot 0.05 = 0.001 mol" />
          </p>
          <p>
            ⟹{" "}
            <InlineMath math="n_{H^{+}} = 2 \cdot 0.001 = 0.002 mol" />
          </p>
          <p>
            ចំណុះ NaOH 50mL (0.01M) ⟹{" "}
            <InlineMath math="n_{OH^{-}} = 0.01 \cdot 0.05 = 0.0005 mol" />
          </p>
          <p>
            ក្រោយប្រតិកម្ម៖{" "}
            <InlineMath math="n_{H^{+}} - n_{OH^{-}} = 0.002 - 0.0005 = 0.0015 mol" />
          </p>
          <p>
            ចំណុះសរុប = 100mL = 0.1L ⟹{" "}
            <InlineMath math="[H^{+}] = \frac{0.0015}{0.1} = 0.015 M" />
          </p>
          <p>
            ⟹ <InlineMath math="pH = -\log(0.015) = 1.82" />
          </p>
        </div>,
      ],
    },
    {
      id: "ex12",
      title: "លំហាត់ទី ១២",
      description: "លំហាត់ទី ១២",
      problemType: "Twelfth Exercise",
      problems: [
        <div key="q1" className="flex flex-col items-start text-[13px] gap-3">
          <p>
            គេមានសូ.អាសុីត HA ដែលមានកំហាប់ Ca ។ គេដឹងថា pH នៃសូ.អាសុីត នេះមានតម្លៃស្មេី2 ។
            បេីគេយកសូ.អាសុីត HA ចំនួន Va = 20mL ទៅធ្វេីអត្រាកម្មជាមួយសូ.ស៊ូតនៅសមមួល
            VbE = 20mL ។
          </p>
          <p>ក. ចូរបង្ហាញថាសូ.អាសុីត HA ជាអាសុីតខ្លាំង ឬ អាសុីតខ្សោយ ។</p>
          <p>ខ. សរសេរសមីការតាងប្រតិកម្មរវាង អាសុីតHA ជាមួយទឹក ។</p>
        </div>,
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <p className="font-bold">ក. បង្ហាញថាសូ.អាសុីត HA ជាអាសុីតខ្លាំង ឬ អាសុីតខ្សោយ ។</p>
          <p>
            គេមាន
            <InlineMath math="pH = 2" /> ⟹{" "}
            <InlineMath math="[H^{+}] = 10^{-2} = 0.01 M" />
          </p>
          <p>
            ប្រសិនបើ HA ជា <b>អាសុីតខ្លាំង</b> ⟹{" "}
            <InlineMath math="C_{a} = [H^{+}] = 0.01 M" />។
          </p>
          <p>
            គណនា៖ <InlineMath math="n_{HA} = C_{a} \cdot V_{a} = 0.01 \cdot 0.020 = 2.0 \times 10^{-4} mol" />
          </p>
          <p>
            នៅសមមូល៖ <InlineMath math="n_{NaOH} = n_{HA}" /> ⟹{" "}
            <InlineMath math="C_{b} = \frac{n}{V_{bE}} = \frac{2.0 \times 10^{-4}}{0.020} = 0.01 M" />។
          </p>
          <p>
            លទ្ធផលស្របតាមការសន្និដ្ឋានថា HA ជា <b>អាសុីតខ្លាំង</b>។
          </p>

          <p>ខ. សមីការប្រតិកម្មជាមួយទឹក</p>
          <p>
            <InlineMath math="HA + H_{2}O \rightarrow H_{3}O^{+} + A^{-}" />
          </p>
        </div>,
      ],
    },
    {
      id: "ex13",
      title: "លំហាត់ទី ១៣",
      description: "លំហាត់ទី ១៣",
      problemType: "Thirteenth Exercise",
      problems: [
        <div key="q1" className="flex flex-col items-start text-[13px] gap-3">
          <p>ក្នុងទីពីសោធន៍អត្រាកម្មនៃ 20,4mL សូ.អាស៊ីតក្លរីឌ្រីចនៅកំហាប់ 0,883M ធ្វើប្រតិកម្ម បន្សាបជាមួយ <InlineMath math="Ba(OH)_{2}" /> មាឌ 19,3mL ។ គណនាកំហាប់សូ. <InlineMath math="Ba(OH)_{2}" /> និងគណនា pH។ គេរំលាយអ៊ីដ្រូសែនក្លរួ 0,56L ក្នុងទឹកបិទគេទទួលបានសូលុយស្យុងអាស៊ីតក្លរីឌ្រីច 500 mL (មាឌឧស្ម័នវាស់ក្នុងលក្ខខណ្ឌធម្មតា <InlineMath math="V_m = 22,4 L.mol^{-1}" />)។</p>
          <p>1. សរសេរសមីការតុល្យការប្រតិកម្មអ៊ីដ្រូសែនក្លរួ និង ទឹក ។</p>
          <p>2. តើសូលុយស្យុងអាស៊ីតក្លរីឌ្រីចមាន pH ប៉ុន្មាន ។</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">

          <p><strong>១. គណនាកំហាប់ Ba(OH)₂</strong></p>
          <p>គេមាន <InlineMath math="C_{HCl} = 0.883 \; M" />  </p>
          <InlineMath math="V_{HCl} = 0.0204 \; L" />
          <p>តាមរូបមន្ត <InlineMath math="n_{HCl} = C \times V " /></p>
          <InlineMath math="= 0.883 \times 0.0204 = 0.0180 \; mol" />
          <p>សមីការតុល្យការ៖</p>
          <p> <InlineMath math="2HCl + Ba(OH)_{2} \rightarrow BaCl_{2} + 2H_{2}O" /></p>
          <p>តាមសមីការ៖ <InlineMath math="n_{Ba(OH)_{2}} = \tfrac{1}{2}n_{HCl} = 0.0090 \; mol" /></p>
          <p><InlineMath math="C_{Ba(OH)_{2}} = \tfrac{n}{V} = \tfrac{0.0090}{0.0193} = 0.466 \; M" /></p>

          <p><strong>២. គណនា pH នៃ Ba(OH)₂</strong></p>
          <p>គេមាន <InlineMath math="C_{Ba(OH)_{2}} =  0.466 \; M" /></p>
          <p>សមីការតាងប្រតិកម្ម <InlineMath math="Ba(OH)_{2} \rightarrow Ba^{2+} + 2OH^{-}" /></p>
          <p>ដោយ Ba(OH)₂ ជាបាសខ្លាំង <InlineMath math="[OH^{-}] = 2C_{Ba(OH)_{2}} = 0.932 \; M" /></p>
          <p><InlineMath math="pOH = -\log [OH^{-}] = -\log(0.932) = 0.03" /></p>
          <p><InlineMath math="pH + pOH = 14" /></p>
          <p><InlineMath math="pH = 14 - 0.03 = 13.97" /></p>
          <p className="font-bold">1. សមីការតុល្យការប្រតិកម្មអ៊ីដ្រូសែនក្លរួ និង ទឹក</p>
          <p> <InlineMath math="HCl + H_{2}O \rightarrow H_{3}O^{+} + Cl^{-}" /></p>
          <p className="font-bold">2. គណនា pH នៃសូលុយស្យុងអាស៊ីតក្លរីឌ្រីច</p>
          <p>គេមាន <InlineMath math="V_{HCl} = 0.56 \; L" /></p>
          <InlineMath math="V_{m} = 22.4 \; L" />
          <p>តាមរូបមន្ត <InlineMath math="n_{HCl} = \tfrac{V}{V_m}" /></p>
          <InlineMath math="= \tfrac{0.56}{22.4} = 0.025 \; mol" />
          <p>គណនាកំហាប់ <InlineMath math="C_{HCl}" /></p>
          <p>តាមរូបមន្ត <InlineMath math="C = \tfrac{n}{V}" /></p>
          <p>គេបាន <InlineMath math="C = \tfrac{0.025}{0.500} = 0.05 \; M" /></p>
          <p>ដោយ HCl ជាអាសុីតខ្លាំង <InlineMath math="[H^{+}] = C_{HCl} = 0.05 \; M" /></p>
          <p><InlineMath math="pH = -\log [H^{+}] = -\log(0.05) = 1.3" /></p>
        </div>,
      ]
    },

    {
      id: "ex14",
      title: "លំហាត់ទី ១៤",
      description: "លំហាត់ទី ១៤",
      problemType: "Fourteenth Exercise",
      problems: [
        <div key="q1" className="flex flex-col items-start text-[13px] gap-3">
          <p>ដើម្បីបានសមមូលអាស៊ីត បាសគេត្រូវបន្តក់សូ.ប៉ូតាស្យូមអ៊ីស្រុកស៊ីត16 mLនៅកំហាប់ <InlineMath math="Cb = 4 \cdot 10^{-2} mol.L^{-1}" /> ទៅក្នុងសូ.អាស៊ីតក្លរីឌ្រីច 20mL នៅកំហាប់ Ca ។</p>
          <p>ក. សរសេរសមីការតាងប្រតិកម្ម ។</p>
          <p>ខ. រកកំហាប់ Ca នៃសូ.អាស៊ីតក្លរីឌ្រីច ។</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <p><strong>ក.</strong> សរសេរសមីការតាងប្រតិកម្ម ៖</p>
          <p><InlineMath math="KOH + HCl \;\longrightarrow\; KCl + H_{2}O" /></p>
          <p><strong>ខ.</strong> គណនាកំហាប់ Ca នៃសូ.អាស៊ីតក្លរីឌ្រីច៖</p>
          <p>គេមាន  <InlineMath math="n_{b} = 4 \cdot 10^{-2} mol.L^{-1}" /></p>
          <InlineMath math="V_{b} = 16 mL = 0.016 L" />
          <p>រកចំនួនម៉ូលនៃសូ.ប៉ូតាស្យូមអ៊ីស្រុកស៊ីត៖</p>
          <p><InlineMath math="n_b = C_b \times V_b = 4 \cdot 10^{-2} \times 0.016 = 6.4 \cdot 10^{-4}\; mol" /></p>
          <p>តាមសមីការតុល្យការ ៖ <InlineMath math="n_a = n_b = 6.4 \cdot 10^{-4}\; mol" /></p>
          <p><InlineMath math="C_a = \frac{n_a}{V_a} = \frac{6.4 \cdot 10^{-4}}{0.020} = 3.2 \cdot 10^{-2}\; mol.L^{-1}" /></p>
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

export default Acid_base_practice