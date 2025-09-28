import TopicPracticeBox from "../../../common/box/TopicPracticeBox";
import { InlineMath } from "react-katex";

import SummaryBox from "../../../common/box/SummaryBox";
import { BookAIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/docs/topic";

const Acid_base_practice = () => {


  const summary: SummarySection[] = [
    {
      key: "formulas",
      title: "ល្បឿនមធ្យមកំណ",
      icon: BookAIcon,
      content: (
        <div className="text-[13px] flex flex-col items-start gap-4" key={"f2"}>
          <InlineMath math="v_{m} = \frac{[I_{2}]_{2} - [I_{2}]_{1}}{t_{2} - t_{1}} = \frac{\Delta [I_{2}]}{\Delta t}" />
        </div>
      )
    },
    {
      key: "formulas",
      title: "ល្បឿនខណៈ",
      icon: BookAIcon,
      content: (
        <div className="text-[13px] flex flex-col items-start gap-4" key={"f2"}>
          <InlineMath math="v_{t} = \lim_{\Delta t \to 0} \frac{ [I_{2}]_{2} - [I_{2}]_{1}}{t_{2} - t_{1}} = \frac{\Delta [I_{2}]}{\Delta t}" />
        </div>
      )
    },
    {
      key: "formulas",
      title: "ល្បឿនបំបាត់អង្គធាតុប្រតិករ",
      icon: BookAIcon,
      content: (
        <div className="text-[13px] flex flex-col items-start gap-4" key={"f2"}>
          <InlineMath math="v_{m} = - \frac{[H_{2}O_{2}]_{2} - [H_{2}O_{2}]_{1}}{t_{2} - t_{1}} = - \frac{\Delta [H_{2}O_{2}]}{\Delta t}" />
        </div>
      )
    },
    {
      key: "formulas",
      title: "ល្បឿនខណៈបំបាត់",
      icon: BookAIcon,
      content: (
        <div className="text-[13px] flex flex-col items-start gap-4" key={"f2"}>
          <InlineMath math="v_{t} = - \lim_{\Delta t \to 0} \frac{ [H_{2}O_{2}]_{2} - [H_{2}O_{2}]_{1}}{t_{2} - t_{1}} = - \frac{\Delta [H_{2}O_{2}]}{\Delta t}" />
        </div>
      )
    },
  ];



  const practiceExercises: PracticeExercise[] = [
    {
      id: "ex1",
      title: "លំហាត់ទី ១",
      description: "លំហាត់ទី ១",
      problemType: "First Exercise",
      problems: [
        <p key="p1">តើទំហំភាគល្អិតនៃអង្គធាតុប្រតិកម្មមានឥទ្ធិពលដូចម្តេចដល់ល្បឿនប្រតិកម្ម?</p>,
        <p key="p2">ចូរប្រាប់ពីកត្តាបួនយ៉ាងដែលជះឥទ្ធិពលដល់ល្បឿនប្រតិកម្ម។</p>,
        <p key="p3">ហេតុអ្វីបានជាល្បឿនប្រតិកម្មអាស្រ័យលើសីតុណ្ហភាព? ចូរបកស្រាយ។</p>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start gap-3">
          <p>ទំហំភាគល្អិតនៃអង្គធាតុប្រតិករមានឥទ្ធិពលដល់ល្បឿនប្រតិកម្ម</p>
          <p>_ ភាគល្អិតអង្គធាតុរឹងនៃអង្គធាតុប្រតិករទំហំកាន់តែតូចផ្ទៃប៉ះកាន់តែធំធ្វើអោយអង្គធាតុប្រតិករទង្គិចកាន់តែ ញឹកញាប់បណ្តាលអោយប្រតិកម្មប្រព្រឹត្តទៅកាន់តែលឿន។</p>
          <p>_ ភាគល្អិតអង្គធាតុរឹងនៃអង្គធាតុប្រតិករទំហំកាន់តែធំផ្ទៃប៉ះកាន់តែតូចធ្វើអោយអង្គធាតុប្រតិករទង្គិចបានតិចបណ្តាលអោយប្រតិកម្មប្រព្រឹត្តទៅកាន់តែយឺត។</p>
        </div>,
        <div key="a2" className="flex flex-col items-start gap-3">
          <p>កត្តាបួនយ៉ាងដែលជះឥទ្ធិពលដល់ល្បឿនប្រតិកម្ម</p>
          <p>_ ទំហំភាគល្អិត</p>
          <p>_ កំហាប់អង្គធាតុប្រតិករ</p>
          <p>_ សីតុណ្ហភាព និងសម្ពាធ</p>
          <p>_ កាតាលីករ</p>
        </div>,
        <div key="a3" className="flex flex-col items-start gap-3">
          <p>បានជាល្បឿនប្រតិកម្មអាស្រ័យលើសីតុណ្ហភាពព្រោះកាលណាសីតុណ្ហភាពកើនឡើង ធ្វើអោយអាតូមរឺ ម៉ូលេគុលមានចលនាកាន់តែលឿនដែលនាំអោយចំនួនទង្គិចប្រសិទ្ធកើនឡើង ជាហេតុធ្វើអោយល្បឿនប្រតិកម្ម កើនឡើងដែរ។</p>
        </div>,
      ]
    },
    {
      id: "ex2",
      title: "លំហាត់ទី ២",
      description: "លំហាត់ទី ២",
      problemType: "Second Exercise",
      problems: [
        <div className="flex flex-col gap-3 items-start text-[13px]" key="p1">
          <p key="p1">គេមានប្រតិកម្ម ៖ <InlineMath math="ClO^{-} + 2H^{+} + 2I^{-} \rightleftharpoons Cl^{-} + I_{2} + 2H_{2}O" /></p>
          <p key="p2">ក. តើប្រភេទគីមីណាខ្លះជាអង្គធាតុប្រតិករ និងណាខ្លះជាអង្គធាតុកកើត?</p>
          <p key="p3">ខ. ចូរឱ្យនិយមន័យល្បឿនមធ្យមកំណអ៊ីយ៉ូត I₂ នៅចន្លោះពេល t₁ និង t₂។</p>
          <p key="p4">គ. ចូរឱ្យនិយមន័យល្បឿនខណៈកំណអ៊ីយ៉ូតនៅខណៈ t និងល្បឿនខណៈបំបាត់អ៊ីយ៉ុងអ៊ីយ៉ូតនៅខណៈ t ។</p>
          <p key="p5">ឃ. តើល្បឿនទាំងពីរនេះស្មើគ្នា ឬខុសគ្នា? ចូរសរសេរទំនាក់ទំនងរវាងល្បឿនទាំងពីរនេះ។</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <p className="font-bold">ក. សមីការតុល្យការប្រតិកម្ម</p>
          <InlineMath math="ClO^{-} + 2H^{+} + 2I^{-} \rightleftharpoons Cl^{-} + I_{2} + H_{2}O" />
          <p>ប្រភេទគីមីអង្គធាតុប្រតិករគឺ <InlineMath math="ClO^{-} , H^{+} , I^{-}" /> </p>
          <p>ប្រភេទគីមីអង្គធាតុកកើតគឺ <InlineMath math="Cl^{-} , I_{2} , H_{2}O" /> </p>
          <p>ខ. ល្បឿនមធ្យមកំណអ៊ីយ៉ូត I₂ នៅចន្លោះពេល t₁ និង t₂ គឺជាផលធៀបរវាងបម្រែបម្រួលកំហាប់ I₂ ធៀបជាមួយនឹងបម្រែបម្រួលរយះពេល ។</p>
          <p>គ. ល្បឿនខណៈកំណអ៊ីយ៉ូតនៅខណៈ t គឺជាលីមីតនៃល្បឿនមធ្យមកំណ I₂ កាលណាចន្លោះពេលខិតទៅកាន់សូន្យ ។</p>
          <InlineMath math="v_{t} = \lim_{\Delta t \to 0} \frac{ [I_{2}]_{2} - [I_{2}]_{1}}{t_{2} - t_{1}} = \frac{\Delta [I_{2}]}{\Delta t}" />
          <p>_ ល្បឿនខណៈបំបាត់អ៊ីយ៉ុងអ៊ីយ៉ូតនៅខណៈ t គឺជាលីមីតនៃល្បឿនមធ្យមកំណ I₂ កាលណាចន្លោះពេលខិតទៅកាន់សូន្យ ។</p>
          <InlineMath math="v_{t} = - \lim_{\Delta t \to 0} \frac{ [H_{2}O_{2}]_{2} - [H_{2}O_{2}]_{1}}{t_{2} - t_{1}} = - \frac{\Delta [H_{2}O_{2}]}{\Delta t}" />
          <p>ឃ. ល្បឿនទាំងពីរនេះមិនស្មេីគ្នាទេតាមសមីការ <InlineMath math="n(I^{-}) = 2 \times n(I_{2})" /></p>
          <InlineMath math="\Rightarrow V(I^{-})_{t} = 2 \times V(I_{2})_{t}" />
        </div>,
      ]
    },
    {
      id: "ex3",
      title: "លំហាត់ទី ៣",
      description: "លំហាត់ទី ៣",
      problemType: "Third Exercise",
      problems: [
        <div className="flex flex-col gap-3 items-start text-[13px]" key="p1">
          <p>ថ្មកំបោរអាចមានអំពើជាមួយអាស៊ីតក្លរីឌ្រិចតាមសមីការតុល្យការៈ </p>
          <InlineMath math="CaCO_{3} + 2H^{+} \rightarrow Ca^{2+} + CO_{2} + H_{2}O" />
          <p>នៅខណៈ t = 0 កំហាប់អីយ៉ុង <InlineMath math="Ca^{2+}" /> មានតម្លៃស្មើសូន្យ។ នៅខណៈ t = 15s កំហាប់អឺយ៉ុង <InlineMath math="Ca^{2+}" /> កើតឡើងស្មើនឹង <InlineMath math="1.8 \times 10^{-5} mol.L^{-1}" /> និងនៅខណៈ t = 30s មានតម្លៃស្មើនឹង <InlineMath math="3.13 \times 10^{-5} mol.L^{-1}" />។ គណនាល្បឿនមធ្យមកំណអ៊ីយ៉ុង <InlineMath math="Ca^{2+}" /> នៅចន្លោះពេល 15s និង 30s ។ គណនាល្បឿនមធ្យមកំណអុីយ៉ុង ចូរទាញរកល្បឿនមធ្យមបំបាត់អុីយ៉ុង <InlineMath math="H^{+}" /> ។</p>

        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <p className="font-bold">គណនាល្បឿនមធ្យមកំណអ៊ីយ៉ុង <InlineMath math="Ca^{2+}" /> </p>
          <p>តាមរូបមន្ត <InlineMath math="V_{m}(Ca^{2+}) = \frac{[Ca^{2+}]_{2} - [Ca^{2+}]_{1}}{t_{2}-t_{1}}" /></p>
          <p>ដោយ t = 15s ត្រូវនឹង <InlineMath math="[Ca^{2+}] = 1.8 \times 10^{-5} mol.L^{-1}" /></p>
          <p>t = 30s ត្រូវនឹង <InlineMath math="[Ca^{2+}] = 3.13 \times 10^{-5} mol.L^{-1}" /></p>
          <p>យេីងបាន <InlineMath math="V_{m}(Ca^{2+}) = \frac{3.13 \times 10^{-5} - 1.8 \times 10^{-5}}{30 - 15}" /></p>
          <InlineMath math="\Rightarrow V_{m}(Ca^{2+}) = 8.8 \times 10^{-5} mol.L^{-1}.s^{-1}" />
          <p className="font-bold">ទាញរកល្បឿនមធ្យមបំបាត់អុីយ៉ុង <InlineMath math="H^{+}" /> </p>
          <p>សមីការតុល្យការ </p>
          <InlineMath math="CaCO_{3} + 2H^{+} \rightarrow Ca^{2+} + CO_{2} + H_{2}O" />
          <p>តាមសមីការ <InlineMath math="n(H^{+}) = 2 \times n(Ca^{2+})" /></p>
          <InlineMath math="\Rightarrow V_{m}(H^{+})_{15.30} = 2 \times V_{m}(Ca^{2+})_{15.30}" />
          <InlineMath math=" = 2 \times 8.8 \times 10^{-5}" />
          <InlineMath math="\Rightarrow V_{m}(H^{+})_{15.30} = 17.6 \times 10^{-5} mol.L^{-1}.s^{-1}" />

        </div>,
      ]
    },
    {
      id: "ex4",
      title: "លំហាត់ទី ៤",
      description: "លំហាត់ទី ៤",
      problemType: "Fourth Exercise",
      problems: [
        <div className="flex flex-col gap-4 items-start text-[13px]" key="p1">
          <p>គេលាយមាឌស្មើគ្នា (25 mL) កំហាប់ដូចគ្នា <InlineMath math="(2 \cdot 10^{-2}) M" />នៃសូ.ពីរ មួយជាសូ. KI មួយទៀត ជាសូ. <InlineMath math="K_{2}S_{2}O_{3}" />ទៅក្នុងកែវមួយនៅសីតុ.ធម្មតា។ រយៈពេលប្រហែល ១នាទីមានពណ៌លេចឡើងក្នុងសូ. ។</p>
          <p>ក. តើប្រភេទគីមីណាដែលទទួលអុកស៊ីតកម្ម ហើយដោយអុកស៊ីតករណា ។</p>
          <p>ខ. ចូរសរសេរសមីការតុល្យការ (1) នៃប្រតិកម្មរវាងគូរេដុក <InlineMath math="S_{2}O_{8}^{2-} / SO_{4}^{2-} , I_{2}/I^{-}" /> </p>
          <p>គ. ប្រតិកម្មអុកស៊ីដូរេដុកម្មដូចតទៅជាប្រតិកម្មលឿន៖</p>
          <InlineMath math="2Fe^{3+} + 2I^{-} \rightarrow 2Fe^{2+} + I_{2} (2)" />
          <InlineMath math="2Fe^{2+} + S_{2}O_{8}^{2-} \rightarrow 2Fe^{3+} + 2SO_{4}^{2-} (3)" />
          <p>បង្ហាញថាអ៊ីយ៉ុង <InlineMath math="Fe^{2+}" /> និង <InlineMath math="Fe^{3+}" /> ជាកាតាលីករនៃប្រតិកម្ម (1)</p>
          <InlineMath math="E^{0} = S_{2}O_{8}^{2-} / SO_{4}^{2-} = 2.01 V ,  E^{0}= I_{2}/I^{-} = 0.54 V" />
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">

        </div>,
      ]
    },
    {
      id: "ex7",
      title: "លំហាត់ទី ៧",
      description: "បាក់ឌុប ២០២៤",
      problemType: "Seventh Exercise",
      problems: [
        <div className="flex flex-col gap-4 items-start text-[13px]" key="p1">
          <p>គេប៉ូតង់ស្យែលស្តង់ដារគូរេដុក <InlineMath math="H_{2}O_{2}/ H_{2}O " /> មាន <InlineMath math="E^{0}= 1.77 V" /> និង <InlineMath math="O_{2}/H_{2}O_{2}" /> មាន <InlineMath math="E^{0}= 0.68 V" /></p>
          <p>ក. សរសេរសមីការតុល្យការនៃប្រតិកម្មរវាងគូរេដុកទាំងពីរខាងលេី ។</p>
          <p>ខ. គេចង់រកកាតាលីករមួយសម្រាប់ប្រតិកម្មខាងលេី តេីអុីយ៉ុង<InlineMath math="Fe^{3+}" />  ប្រេីបានដែរឬទេ ? ព្រោះអ្វី ?</p>
          <p>គ. ចូរសរសេរសមីការបញ្ជាក់ដែលមានការចូលរួមពីកាតាលីករ ។</p>
          <p>គេឲ <InlineMath math="Fe^{3+}/ Fe^{2+} " /> មាន <InlineMath math="E^{0}= 0.77 V" /></p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <p>ក. សមីការតុល្យការនៃប្រតិកម្មគូរេដុក</p>
          <img className="w-70 h-60" src="/chemistry/pic37.png" alt="" />
          <p>ខ. គេអាចប្រេីអុីយ៉ុង <InlineMath math="Fe^{3+}" />  ធ្វេីជាកាតាលីករនៃប្រតិកម្មបាន ព្រោះតម្លៃប៉ូតង់ស្យែលស្តង់ដារនៃគូ <InlineMath math="Fe^{3+}/ Fe^{2+} = 0.77 V " /> ស្ថិតនៅចន្លោះប៉ូតង់ស្យែលស្តង់ដារនៃគូរេដុកទាំងពីរនៃសមីការ ។</p>
          <p>គ. សមីការបញ្ជាក់ដែលមានការចូលរួមពីកាតាលីករ ​<InlineMath math="Fe^{3+}" /></p>
          <img className="w-70 h-44" src="/chemistry/pic38.png" alt="" />
          <p className="font-bold text-[15px]">ដំណាក់កាលទី ១</p>
          <img className="w-90 h-40" src="/chemistry/pic39.png" alt="" />
          <p className="font-bold text-[15px]">ដំណាក់កាលទី ២</p>
          <img className="w-90 h-40" src="/chemistry/pic40.png" alt="" />
          <p className="font-bold text-[15px]">បូកសមីការ (1) និង (2) គេបានសមីការតុល្យការឌីស្មួតកម្ម ​<InlineMath math="H_{2}O_{2}" /></p>
          <img className="w-90 h-40" src="/chemistry/pic41.png" alt="" />
        </div>,
      ]
    },
    {
      id: "ex8",
      title: "លំហាត់ទី ៨",
      description: "បាក់ឌុប ២០២៣",
      problemType: "Eighth Exercise",
      problems: [
        <div className="flex flex-col gap-4 items-start text-[13px]" key="p1">
          <p>គេឱ្យប៉ូតង់ស្យែលស្តង់ដានៃគូរេដុកដូចតទៅ៖ </p>
          <InlineMath math="MnO_{4}^{-} / Mn^{2+} : E^{0} = 1.51 V និង O_{2} / H_{2}O_{2} : E^{0} = 0.68 V" />
          <p>ក. ចូរសរសេរសមីការប្រតិកម្មកើតឯងរវាងគូទាំងពីរ។</p>
          <p>ខ. ល្បឿនកំណអឺយ៉ុង  <InlineMath math="Mn^{2+}" />នៅខណៈ t គឺ  <InlineMath math="2 \cdot 10^{-5} M" />ទាញរកល្បឿនកំណ <InlineMath math="O_{2}" /> ។ </p>
          <p>គ. បើគេបន្ថែមកំហាប់ <InlineMath math="H^{+}" /> ទៅក្នុងប្រតិកម្ម តើល្បឿនប្រតិកម្មប្រែប្រួលដូចម្តេច? ព្រោះអ្វី?។</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <p className="font-bold">ក. សមីការប្រតិកម្មគូរេដុក</p>
          <img className="w-80 h-50" src="/chemistry/pic43.png" alt="" />
          <p className="font-bold">ខ. ទាញរកល្បឿនកំណ <InlineMath math="O_{2}" /></p>
          <p>បម្រាប់ <InlineMath math="V(Mn^{2+})" /> = <InlineMath math="2 \times 10^{-5} M" /></p>
          <p>តាមសមីការ <InlineMath math="n(O_{2}) = \frac{5}{2} \cdot n(Mn^{2+})" /></p>
          <InlineMath math="\Rightarrow V(O_{2}) = \frac{5}{2} \cdot V(Mn^{2+})" />
          <InlineMath math="= \frac{5}{2} \cdot 2 \times 10^{-5} = 5 \times 10^{-5} M" />
          <p>គេបាន <InlineMath math="V(O_{2}) = 5 \times 10^{-5} M" /></p>
          <p>គ. កាលណាគេបន្ថែមកំហាប់ <InlineMath math="H^{+}" /> ទៅក្នុងប្រតិកម្ម ធ្វេីឲល្បឿនប្រតិកម្មកេីនឡេីង ព្រោះកំហាប់កេីនឡេីង ចំនួនទង្គិចប្រសិទ្ធកេីនឡេីង ។</p>
        </div>,
      ]
    },
    {
      id: "ex9",
      title: "លំហាត់ទី 9",
      description: "បាក់ឌុប ២០២១",
      problemType: "Ninth Exercise",
      problems: [
        <div className="flex flex-col gap-4 items-start text-[13px]" key="p1">
          <p>ចូរសរសេរសមីការតុល្យការនៃប្រតិកម្ម បើគេឱ្យគូរេដុកនីមួយៗ៖</p>
          <p>ក. <InlineMath math="Cr_{2}O / Cr^{3+} E^{0} = 1.33 V និង NO_{3}^{-}/NO E^{0} = 0.96 V" /></p>
          <p>ខ. <InlineMath math="S_{2}O_{3}^{2-} / S E^{0} = 0.5 V និង SO_{2}/S_{2}O_{3}^{2-} E^{0} = 0.4 V" /></p>
          <p>គ. តើប្រតិកម្មណាមួយជាប្រតិកម្មឌីស្មូតកម្ម? ព្រោះអ្វី?</p>
          <p>ឃ. ចូរបកស្រាយកត្តាពីរយ៉ាងដើម្បីបង្កើនល្បឿនប្រតិកម្មរវាង <InlineMath math="CaCO_{3} " />ជាមួយសូលុយស្យុង HCl (aq) ក្នុងករណីកំហាប់ HCI ថេរ។</p>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start text-[13px] gap-3">
          <p className="font-bold">ក. សមីការប្រតិកម្មគូរេដុក</p>
          <img className="w-60 h-30" src="/chemistry/pic45.png" alt="" />
          <img className="w-80 h-40" src="/chemistry/pic46.png" alt="" />
          <img className="w-80 h-40" src="/chemistry/pic47.png" alt="" />
          <p>គ. ប្រតិកម្ម (ខ) ជាប្រតិកម្មឌីស្មូតកម្ម ព្រោះអឺយ៉ុង <InlineMath math="S_{2}O_{3}^{2-}" /> ជាអង្គធាតុប្រតិករហើយអាចដើរតួជារេដុករផង និងជាអុកស៊ីតករផង។</p>
          <p>ឃ. បកស្រាយកត្តាពីរយ៉ាងដើម្បីបង្កើនល្បឿនប្រតិកម្មរវាង <InlineMath math="CaCO_{3} " /> ជាមួយសូលុយស្យុង HCl (aq) ក្នុងករណីកំហាប់ HCl ថេរ សមីការៈ </p>
          <InlineMath math="CaCO_{3} + 2HCl \rightarrow CaCl_{2} + H_{2}O + CO_{2}" />
          <p>_ កត្តាទំហំភាគល្អិត ប្រើ <InlineMath math="CaCO_{3} " /> ក្នុងភាពជាម្សៅ៖ ទំហំភាគល្អិតតូច ផ្ទៃប៉ះធំ ចំនួនទង្គិចប្រសិទ្ធកើន នាំឲ្យល្បឿនប្រតិកម្មលឿន។</p>
          <p>_ កត្តាសីតុណ្ហភាពបង្កើនសីតុណ្ហភាពនៃប្រតិកម្ម៖ សីតុណ្ហភាពកើន អង្គធាតុប្រតិករមានថាមពលខ្ពស់ ភាគល្អិតមានចលនាលឿន ចំនួនទង្គិចប្រសិទ្ធកើនឡើង នាំឲ្យល្បឿនប្រតិកម្មលឿន។</p>

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
