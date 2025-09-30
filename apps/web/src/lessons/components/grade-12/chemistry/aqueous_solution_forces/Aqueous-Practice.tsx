import TopicPracticeBox from "@/components/pages/docs/boxes/TopicPracticeBox";
import { InlineMath } from "react-katex";

import { PracticeExercise } from "@/types/docs/topic";

const AqueousPractice = () => {

  const practiceExercises: PracticeExercise[] = [
    {
      id: "ex1",
      title: "សរសេរសមីការតុល្យការនិងសមីការអ៊ីយ៉ុងសម្រួល (ក្នុងសូលុយស្យុងទឹក )",
      description: "សរសេរសមីការតុល្យការនិងសមីការអ៊ីយ៉ុងសម្រួល (ក្នុងសូលុយស្យុងទឹក )",
      problemType: "First Exercise",
      problems: [
        <span className='text-[13px]' key="p1">បារត (II) ក្លរួ + ប៉ូតាស្យូមស៊ុលជួ</span>,
        <span className='text-[13px]' key="p2">សូដ្យូមកាបូណាត + កាល់ស្យូមក្លរួ</span>,
        <span className='text-[13px]' key="p3">ទង់ដែង (II) ក្លរួ + អាម៉ូញ៉ូមផូស្វាត</span>,
        <span className='text-[13px]' key="p4">ទង់ដែង (II) ក្លរួ + អាម៉ូញ៉ូមផូស្វាត</span>,
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[12px] gap-2">
          <p>សមីការម៉ូលេគុល៖</p>
          <span className='text-[12px]'><InlineMath math="BaCl_{2}(aq) + K_{2}SO_{4}(aq) \rightarrow BaSO_{4}(s) + 2KCl(aq)" /></span>
          <p>សមីការអ៊ីយ៉ុងសព្វ៖</p>
          <InlineMath math="Ba^{2+}(aq) + 2Cl^{-}(aq) + 2K^{+}(aq) + SO_{4}^{2-}(aq) \rightarrow BaSO_{4}(s) + 2K^{+}(aq) + 2Cl^{-}(aq)" />
          <p>សមីការអ៊ីយ៉ុងសម្រួល៖</p>
          <InlineMath math="Ba^{2+}(aq) + SO_{4}^{2-}(aq) \rightarrow BaSO_{4}(s)" />
        </div>,

        <div key="a2" className="flex flex-col items-start text-[12px] gap-2">
          <p>សមីការម៉ូលេគុល៖</p>
          <InlineMath math="Na_{2}CO_{3}(aq) + CaCl_{2}(aq) \rightarrow CaCO_{3}(s) + 2NaCl(aq)" />
          <p>សមីការអ៊ីយ៉ុងសព្វ៖</p>
          <InlineMath math="2Na^{+}(aq) + CO_{3}^{2-}(aq) + Ca^{2+}(aq) + 2Cl^{-}(aq) \rightarrow CaCO_{3}(s) + 2Na^{+}(aq) + 2Cl^{-}(aq)" />
          <p>សមីការអ៊ីយ៉ុងសម្រួល៖</p>
          <InlineMath math="Ca^{2+}(aq) + CO_{3}^{2-}(aq) \rightarrow CaCO_{3}(s)" />
        </div>,

        <div key="a3" className="flex flex-col items-start text-[12px] gap-2">
          <p>សមីការម៉ូលេគុល៖</p>
          <InlineMath math="3CuCl_{2}(aq) + 2(NH_{4})_{3}PO_{4}(aq) \rightarrow Cu_{3}(PO_{4})_{2}(s) + 6NH_{4}Cl(aq)" />
          <p>សមីការអ៊ីយ៉ុងសព្វ៖</p>
          <InlineMath math="3Cu^{2+}(aq) + 6Cl^{-}(aq) + 6NH_{4}^{+}(aq) + 2PO_{4}^{3-}(aq) \rightarrow Cu_{3}(PO_{4})_{2}(s) + 6NH_{4}^{+}(aq) + 6Cl^{-}(aq)" />
          <p>សមីការអ៊ីយ៉ុងសម្រួល៖</p>
          <InlineMath math="3Cu^{2+}(aq) + 2PO_{4}^{3-}(aq) \rightarrow Cu_{3}(PO_{4})_{2}(s)" />
        </div>,
      ]
    },
    {
      id: "ex2",
      title: "លំហាត់ទី ២",
      description: "លំហាត់ទី ២",
      problemType: "Second Exercise",
      problems: [
        <span className='text-[13px]' key="p1">
          ចូរបង្ហាញអីយ៉ុងទស្សនិកក្នុងប្រតិកម្មរវាង <InlineMath math="KCl" /> និង <InlineMath math="AgNO_{3}" /> ក្នុងសូលុយស្យុងទឹក ។
        </span>,
        <span className='text-[13px]' key="p2">
          ចូរបង្ហាញអីយ៉ុងទស្សនិកក្នុងប្រតិកម្មរវាង <InlineMath math="Na_{2}SO_{4}" /> និង <InlineMath math="BaCl_{2}" /> ក្នុងសូលុយស្យុងទឹក ។
        </span>,
        <span className='text-[13px]' key="p3">
          ចូរបង្ហាញអីយ៉ុងទស្សនិកក្នុងប្រតិកម្មរវាង <InlineMath math="CaCl_{2}" /> និង <InlineMath math="Na_{2}CO_{3}" /> ក្នុងសូលុយស្យុងទឹក ។
        </span>,
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[12px] gap-2">
          <p>សមីការតុល្យការ៖</p>
          <InlineMath math="KCl(aq) + AgNO_{3}(aq) \rightarrow AgCl(s) + KNO_{3}(aq)" />
          <p>សមីការអ៊ីយ៉ុងសព្វ៖</p>
          <InlineMath math="K^{+}(aq) + Cl^{-}(aq) + Ag^{+}(aq) + NO_{3}^{-}(aq) \rightarrow AgCl(s) + K^{+}(aq) + NO_{3}^{-}(aq)" />
          <p>អ៊ីយ៉ុងទស្សនិក៖</p>
          <InlineMath math="K^{+}(aq), NO_{3}^{-}(aq)" />
        </div>,

        <div key="a2" className="flex flex-col items-start text-[12px] gap-2">
          <p>សមីការតុល្យការ៖</p>
          <InlineMath math="Na_{2}SO_{4}(aq) + BaCl_{2}(aq) \rightarrow BaSO_{4}(s) + 2NaCl(aq)" />
          <p>សមីការអ៊ីយ៉ុងសព្វ៖</p>
          <InlineMath math="2Na^{+}(aq) + SO_{4}^{2-}(aq) + Ba^{2+}(aq) + 2Cl^{-}(aq) \rightarrow BaSO_{4}(s) + 2Na^{+}(aq) + 2Cl^{-}(aq)" />
          <p>អ៊ីយ៉ុងទស្សនិក៖</p>
          <InlineMath math="Na^{+}(aq), Cl^{-}(aq)" />
        </div>,

        <div key="a3" className="flex flex-col items-start text-[12px] gap-2">
          <p>សមីការតុល្យការ៖</p>
          <InlineMath math="CaCl_{2}(aq) + Na_{2}CO_{3}(aq) \rightarrow CaCO_{3}(s) + 2NaCl(aq)" />
          <p>សមីការអ៊ីយ៉ុងសព្វ៖</p>
          <InlineMath math="Ca^{2+}(aq) + 2Cl^{-}(aq) + 2Na^{+}(aq) + CO_{3}^{2-}(aq) \rightarrow CaCO_{3}(s) + 2Na^{+}(aq) + 2Cl^{-}(aq)" />
          <p>អ៊ីយ៉ុងទស្សនិក៖</p>
          <InlineMath math="Na^{+}(aq), Cl^{-}(aq)" />
        </div>,
      ]
    },
    {
      id: "ex3",
      title: "លំហាត់ទី ៣",
      description: "លំហាត់ទី ៣",
      problemType: "Third Exercise",
      problems: [
        <span className='text-[13px]' key="p1">ចូរកំណត់សមាសធាតុនីមួយៗជាសមាសធាតុរលាយ ឬមិនរលាយ <InlineMath math="Ca_{3}(PO_{4})_{2} , Mn(OH)_{2} , AgNO_{3} , K_{2}S , Hg(NO_{3})_{2} , CaCO_{3}" /> </span>,
        <span className='text-[13px]' key="p2">ចូរកំណត់សមាសធាតុនីមួយៗជាអេឡិចត្រូលីតខ្លាំង ឬអេឡិចត្រូលីតខ្សោយ <InlineMath math="H_{2}O , KCl , HNO_{3} , CH_{3}COOH , C_{12}H_{22}O_{11}" /> </span>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[12px] gap-2">
          <div className="flex items-center gap-2">
            <p>សមាសធាតុរលាយ :</p>
            <span className='text-[12px]'><InlineMath math="AgNO_{3} , K_{2}S , Hg(NO_{3})_{2}" /></span>
          </div>
          <div className="flex items-center gap-2">
            <p>សមាសធាតុមិនរលាយ :</p>
            <span className='text-[12px]'><InlineMath math="Ca_{3}(PO_{4})_{2} , Mn(OH)_{2} , CaCO_{3}" /></span>
          </div>
        </div>,
        <div key="a2" className="flex flex-col items-start text-[12px] gap-2">
          <div className="flex items-center gap-2">
            <p>អេឡិចត្រូលីតខ្លាំង :</p>
            <span className='text-[12px]'><InlineMath math="HNO_{3} , KCl" /></span>
          </div>
          <div className="flex items-center gap-2">
            <p>អេឡិចត្រូលីតខ្សោយ :</p>
            <span className='text-[12px]'><InlineMath math="H_{2}O , CH_{3}COOH , C_{12}H_{22}O_{11}" /></span>
          </div>
        </div>,
      ]
    },


    {
      id: "ex4",
      title: "លំហាត់ទី ៤",
      description: "បាក់ឌុប ២០២៤",
      problemType: "Fourth Exercise",
      problems: [
        <div className="flex flex-col items-start gap-4 text-[13px]" key="p1">
          <p>គេយកសូលុយស្យុងទង់ដែង(II) ស៊ុលផាត ឱ្យមានប្រតិកម្មជាមួយសូលុយស្យុងសូដ្យូមអុីដ្រុកសុីតចំនួន ILគេទទួលបានកករទង់ដែង (II) អុីដ្រុកសុីតចំនួន 0.49g ។</p>
          <p>ក. ចូរសរសេរសមីការគីមី សមីការអ៊ីយ៉ុងសព្វ និងសមីការអ៊ីយ៉ុងសម្រួល ។ </p>
          <p>ខ. ចូរគណនា pH នៃសូលុយស្យុងសូដ្យូមអ៊ីដ្រុកស៊ីត ។</p>
          <p>ម៉ាសម៉ូល៖ (Cu = 64, O= 16, H = 1) g/mol</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[12px] gap-2">
          <p className="font-bold">ក. សមីការគីមី</p>
          <InlineMath math="CuSO_{4} + 2NaOH \rightarrow Na_{2}SO_{4} + Cu(OH)_{2} " />
          <p className="font-bold"> សមីការអុីយ៉ុងសព្វ</p>
          <InlineMath math="Cu^{2+} + SO_{4}^{2-} + 2Na^{+} + 2OH^{-} \rightarrow 2Na^{+} + SO_{4}^{2-} + Cu(OH)_{2} " />
          <p className="font-bold"> សមីការអុីយ៉ុងសម្រួល</p>
          <InlineMath math="Cu^{2+} + 2OH^{-} \rightarrow Cu(OH)_{2} " />
          <p className="font-bold">ខ. គណនា pH នៃសូលុយស្យុងសូដ្យូមអុីដ្រុកសុីត</p>
          <p>គណនា pH នៃសូលុយស្យុងសូដ្យូមអុីដ្រុកសុីត</p>
          <p>តាមរូបមន្ត <InlineMath math="n_{Cu(OH)_{2}} = \frac{m}{M} = \frac{0.49}{98} = 5 \times 10^{-3} mol" /></p>
          <p>គណនាកំហាប់អុីយ៉ុង <InlineMath math="[OH^{-}] " /> នៅក្នុងសូលុយស្យុង NaOH</p>
          <p>តាមរូបមន្ត <InlineMath math="[OH^{-}] = \frac{n}{V}" /></p>
          <p>តាមសមីការ <InlineMath math="n_{OH^{-}} = 2 \times n_{Cu(OH)_{2}} = 2 \times 5 \times 10^{-3} =  10^{-2} mol" /></p>
          <p>នាំឲ <InlineMath math="[OH^{-}] = \frac{10^{-2}}{1} = 10^{-2} M" /></p>
          <p>តាមរូបមន្ត <InlineMath math="pH = 14 - pOH = 14 + log[OH^{-}]" /></p>
          <p>យេីងបាន <InlineMath math="pH = 14 + log(10^{-2})" /></p>
          <InlineMath math="\Rightarrow pH = 12" />


        </div>,

      ]
    },
    {
      id: "ex5",
      title: "លំហាត់ទី ៥",
      description: "បាក់ឌុប ២០២៣",
      problemType: "Fifth Exercise",
      problems: [
        <div className="flex flex-col items-start gap-4 text-[13px]" key="p1">
          <p>គេបន្ថែមសូលុយស្យុង <InlineMath math="FeSO_{4}" /> ទៅក្នុងសូលុយស្យុង NaOH 1L ។ ក្រោយប្រតិកម្ម គេទទួលបានកករ <InlineMath math="Fe(OH)_{2}" /> ចំនួន 0.45g ។</p>
          <p>ក. ចូរសរសេរសមីការគីមី សមីការអ៊ីយ៉ុងសព្វ និងសមីការអ៊ីយ៉ុងសម្រួលសម្រាប់ប្រតិកម្មខាងលើនេះ។</p>
          <p>ខ. គណនាកំហាប់ជាម៉ូលអ៊ីយ៉ុង <InlineMath math="OH^{-}" /> និង pH នៃសូលុយស្យុង NaOH។</p>
          <p>គេឱ្យម៉ាសម៉ូលៈ Fe = 56 g/mol, O = 16 g/mol, H = 1 g/mol</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[12px] gap-2">
          <p className="font-bold">ក. សមីការតាងប្រតិកម្ម</p>
          <p>សមីការគីមី៖</p>
          <InlineMath math="FeSO_{4} + 2NaOH \rightarrow Fe(OH)_{2} + Na_{2}SO_{4}" />
          <p>សមីការអ៊ីយ៉ុងសព្វ៖</p>
          <InlineMath math="Fe^{2+} + SO_{4}^{2-} + 2Na^{+} + 2OH^{-} \rightarrow Fe(OH)_{2} + 2Na^{+} + SO_{4}^{2-}" />
          <p>សមីការអ៊ីយ៉ុងសម្រួល៖</p>
          <InlineMath math="Fe^{2+} + 2OH^{-} \rightarrow Fe(OH)_{2}" />

          <p className="font-bold mt-2">ខ. គណនាកំហាប់ <InlineMath math="OH^{-}" /> និង pH</p>
          <p className="font-bold">គណនាចំនួនម៉ូល <InlineMath math="Fe(OH)_{2}" /> :</p>
          <p>គេមាន <InlineMath math="m = 0.45 \; g" /></p>
          <InlineMath math="M(Fe(OH)_{2}) = 56 + 2(16+1) = 90 \; g/mol" />
          <InlineMath math="n = \frac{m}{M} = \frac{0.45}{90} = 0.005 \; mol" />

          <p>តាមសមីការៈ <InlineMath math="Fe^{2+} + 2OH^{-} \rightarrow Fe(OH)_{2}" /></p>
          <p>ម៉ូល <InlineMath math="OH^{-}" /> = <InlineMath math="2 \times 0.005 = 0.010 \; mol" /></p>
          <p>គេបាន</p>
          <InlineMath math="C(OH^{-}) = \frac{n}{V} = \frac{0.010}{1} = 0.010 \; M" />

          <p className="font-bold">គណនា pH:</p>
          <InlineMath math="pOH = -\log[OH^{-}] = -\log(0.010) = 2" />
          <InlineMath math="pH = 14 - pOH = 14 - 2 = 12" />

        </div>,
      ]
    },
    {
      id: "ex6",
      title: "លំហាត់ទី ៦",
      description: "បាក់ឌុប ២០២២",
      problemType: "Sixth Exercise",
      problems: [
        <div className="flex flex-col items-start gap-4 text-[13px]" key="p1">
          <p>គេលាយ 40mL នៃសូលុយស្យុង <InlineMath math="AgNO_{3}" /> នៅកំហាប់ 5M ជាមួយសូលុយស្យុង  <InlineMath math="Na_{2}SO_{4}" /> បរិមាណគ្រប់គ្រាន់ ។</p>
          <p>ក. សរសេរសមីការបីសណ្ឋានសម្រាប់ប្រតិកម្មនេះ។</p>
          <p>ខ. គណនាម៉ាសកករដែលទទួលបាន </p>
          <p>គេឲ Ag= 108 g/mol , S= 32 g/mol , O= 16 g/mol</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[12px] gap-2">
          <p className="font-bold">ក. សមីការតាងប្រតិកម្ម (បីសណ្ឋាន)</p>
          <p>សមីការគីមី៖</p>
          <InlineMath math="2AgNO_{3}(aq) + Na_{2}SO_{4}(aq) \rightarrow Ag_{2}SO_{4}(s) + 2NaNO_{3}(aq)" />
          <p>សមីការអ៊ីយ៉ុងសព្វ៖</p>
          <InlineMath math="2Ag^{+} + 2NO_{3}^{-} + 2Na^{+} + SO_{4}^{2-} \rightarrow Ag_{2}SO_{4}(s) + 2Na^{+} + 2NO_{3}^{-}" />
          <p>សមីការអ៊ីយ៉ុងសម្រួល៖</p>
          <InlineMath math="2Ag^{+}(aq) + SO_{4}^{2-}(aq) \rightarrow Ag_{2}SO_{4}(s)" />

          <p className="font-bold mt-2">ខ. គណនាម៉ាសកករ</p>
          <p>បរិមាណ <InlineMath math="AgNO_{3}" />៖ <InlineMath math="V = 40\;mL = 0.040\;L,\; C = 5\;M" /></p>
          <InlineMath math="n(AgNO_{3}) = C \times V = 5 \times 0.040 = 0.20\;mol" />
          <p>តាមសមីការ៖ <InlineMath math="2AgNO_{3} \rightarrow Ag_{2}SO_{4}" /> ដូច្នេះ</p>
          <InlineMath math="n(Ag_{2}SO_{4}) = \frac{0.20}{2} = 0.10\;mol" />
          <p>ដោយ <InlineMath math="M(Ag_{2}SO_{4}) = 2\times108 + 32 + 4\times16 = 312\;g/mol" /></p>
          <p>នាំឲ <InlineMath math="m = n \times M = 0.10 \times 312 = 31.2\;g" /></p>
        </div>,

      ]
    },
    {
      id: "ex7",
      title: "លំហាត់ទី ៧",
      description: "បាក់ឌុប ២០២១",
      problemType: "Seventh Exercise",
      problems: [
        <div className="flex flex-col items-start gap-4 text-[13px]" key="p1">
          <p>គេដាក់ 200 mL នៃសូលុយស្យុងអាម៉ូញ៉ូមកាបូណាតដែលមានកំហាប់ 0.1 M អោយមានប្រតិកម្មសព្វជាមួយសូលុយស្យុងកាល់ស្យូមនីត្រាត។</p>
          <p>ក. ចូរសរសេរសមីការគីមី សមីការអ៊ីយ៉ុងសព្វ និងសមីការអ៊ីយ៉ុងសម្រួលនៃប្រតិកម្មនេះ។</p>
          <p>ខ. ចូរកំណត់អ៊ីយ៉ុងទស្សនិក។</p>
          <p>គ. ចូរគណនាម៉ាសកករដែលទទួលបាន។</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[12px] gap-2">
          <p className="font-semibold">ក. សមីការតាងប្រតិកម្ម</p>
          <p>សមីការគីមី៖</p>
          <InlineMath math="(NH_{4})_{2}CO_{3} + Ca(NO_{3})_{2} \rightarrow CaCO_{3} + 2NH_{4}NO_{3}" />
          <p>សមីការអ៊ីយ៉ុងសព្វ៖</p>
          <InlineMath math="2NH_{4}^{+} + CO_{3}^{2-} + Ca^{2+} + 2NO_{3}^{-} \rightarrow CaCO_{3} + 2NH_{4}^{+} + 2NO_{3}^{-}" />
          <p>សមីការអ៊ីយ៉ុងសម្រួល៖</p>
          <InlineMath math="Ca^{2+} + CO_{3}^{2-} \rightarrow CaCO_{3}" />

          <p className="font-semibold">ខ. អ៊ីយ៉ុងទស្សនិក</p>
          <p>អ៊ីយ៉ុងទស្សនិកៈ <InlineMath math="NH_{4}^{+} \text{ និង } NO_{3}^{-}" /></p>

          <p className="font-semibold">គ. គណនាម៉ាសកករ</p>
          <p>រកចំនួនម៉ូលនៃ <InlineMath math="(NH_{4})_{2}CO_{3}" /> :</p>
          <p>ដោយ <InlineMath math="V = 200\;mL = 0.200\;L,\; C = 0.1\;M" /></p>
          <p>នាំឲ <InlineMath math="n = C\times V = 0.1 \times 0.200 = 0.020\;mol" /></p>

          <p>តាមសមីការ <InlineMath math="(NH_{4})_{2}CO_{3}" /> = <InlineMath math="CaCO_{3}" /> :</p>
          <InlineMath math="➡ n(CaCO_{3}) = 0.020\;mol" />

          <InlineMath math="M(CaCO_{3}) = 40 + 12 + 3\times16 = 100\;g/mol" />

          <p>គេបាន : <InlineMath math="m = n \times M = 0.020 \times 100 = 2.0\;g" /></p>

        </div>,
      ]
    },
  ];

  return (
    <>
      <TopicPracticeBox exercises={practiceExercises} />
    </>
  );
}

export default AqueousPractice