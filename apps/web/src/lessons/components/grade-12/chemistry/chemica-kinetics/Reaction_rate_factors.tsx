"use client";

import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
    serializeTopicContentV3,
    deserializeTopicContentV3,
    deserializeTopicContentV3ToTree,
} from "@/components/pages/docs/utils/ContentSerializerV2";

const ReactionRateFactors: TopicContent_V3[] = [
  {
    type: "definition",
    title: "១. កត្តាទំហំភាគល្អិត",
    content: (
      <div className="flex flex-col items-start"></div>
    ),
  },
  {
    type: "tip",
    title: "ជាទូទៅ",
    content: (
      <div className="flex items-start gap-3 flex-col">
        <p>
          បេីដុំអង្គធាតុប្រតិករកាន់តែតូច នោះផ្ទៃប៉ះរបស់វាកាន់តែធំ
          ដែលធ្វេីឲល្បឿនប្រតិកម្មកាន់តែលឿន។
        </p>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div className="flex flex-col items-start gap-3">
        <p>
            ពិសោធន៍៖ គេដាក់{" "}
            <span className="text-[13px]">
              <InlineMath math="CaCO_{3}" />
            </span>{" "}
            ទំហំល្មមចំនួន 20g , ដុំ{" "}
            <span className="text-[13px]">
              <InlineMath math="CaCO_{3}" />
            </span>{" "}
            តូចៗ20g និងម្សៅ{" "}
            <span className="text-[13px]">
              <InlineMath math="CaCO_{3}" />
            </span>{" "}
            20g ទៅក្នុងសូលុយស្យុង{" "}
            <span className="text-[13px]">
              <InlineMath math="HCl" />
            </span>{" "}
            ក្នុងកែវបីផ្សេងគ្នារៀង ដែលកែវនីមួយៗមានកំហាប់ 1M មាឌ 200mL ។
          </p>
          <img className="w-130" src="/chemistry/pic20.png" alt="" />
          <p>
            សង្កេត៖ ប្រតិកម្មដោយប្រេីម្សៅ{" "}
            <span className="text-[13px]">
              <InlineMath math="CaCO_{3}" />
            </span>{" "}
            ជាមួយ{" "}
            <span className="text-[13px]">
              <InlineMath math="HCl" />
            </span>{" "}
            លឿនជាងប្រេីដុំតូចៗ និងលឿនជាដុំធំតាមរៀង ។
          </p>
          <p>
            សន្និដ្ឋាន៖ ល្បឿនប្រិតកម្មអាស្រ័យលើទំហំភាគល្អិត។
            ទំហំភាគល្អិតនៃអង្គធាតុប្រតិករ កាន់តែតូច ល្បឿនប្រតិកម្មកាន់តែលឿន។
          </p>
          <p>
            បកស្រាយ៖ កាលណាទំហំភាគល្អិតកាន់តែតូច នាំឲ្យមានការទង្គិចប្រសិទ្ធ
            រវាងអង្គធាតុប្រតិករកាន់តែច្រើនជាហេតុធ្វើឲ្យល្បឿនប្រតិកម្មកាន់តែលឿន។
          </p>
      </div>
    ),
  },
  {
    type: "definition",
    title: "២. កត្តាកំហាប់អង្គធាតុប្រតិករ",
    content: (
      <div className="flex flex-col items-start"></div>
    ),
  },
  {
    type: "tip",
    title: "ជាទូទៅ",
    content: (
      <div className="flex items-start gap-3 flex-col">
        <p>
          កាលណាកំហាប់អង្គធាតុប្រតិករកាន់តែធំ នោះល្បឿនប្រតិកម្មកាន់តែលឿន។
        </p>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div className="flex flex-col items-start gap-3">
        <p>
            ពិសោធន៍៖ រៀបចំកែវបីដាក់សូលុយស្យុង KI ដែលមានកំហាប់ខុសគ្នាៗ
            ដោយមានបន្ថែមសូលុយស្យុង{" "}
            <span className="text-[13px]">
              <InlineMath math="H_{2}SO_{4}" />
            </span>{" "}
            បន្តិច ។​ បន្ទាប់មកចាក់{" "}
            <span className="text-[13px]">
              <InlineMath math="H_{2}O_{2}" />
            </span>{" "}
            ក្នុងបរិមាណស្មេីគ្នា កំហាប់ស្មេីគ្នាចូលក្នុងកែវទាំងបីក្នុងពេលតែមួយ ។
          </p>
          <img className="w-100" src="/chemistry/pic21.png" alt="" />
          <p>
            សង្កេត៖ កែវដែលមានកំហាប់{" "}
            <span className="text-[13px]">
              <InlineMath math="KI" />
            </span>{" "}
            ខាប់ខ្លាំង{" "}
            <span className="text-[13px]">
              <InlineMath math="(I^{-})" />
            </span>{" "}
            នោះការឡេីងពណ៌ក្រហមត្នោតនៃ{" "}
            <span className="text-[13px]">
              <InlineMath math="I_{2}" />
            </span>{" "}
            លឿនជាងកែវដែលមានកំហាប់{" "}
            <span className="text-[13px]">
              <InlineMath math="KI" />
            </span>{" "}
            រាវ ឬ{" "}
            <span className="text-[13px]">
              <InlineMath math="(I^{-})" />
            </span>{" "}
            តិច ។
          </p>
          <p>
            សន្និដ្ឋាន៖ ល្បឿនកំណអង្គធាតុកកើត ឬល្បឿនបំបាត់អង្គធាតុប្រតិករ
            កើនកាលណាកំហាប់អង្គធាតុប្រតិករកើនឡើង។
          </p>
          <p>
            បំណកស្រាយ៖ កំហាប់អង្គធាតុប្រតិករកើន នាំឲ្យមានទង្គិចប្រសិទ្ធច្រើន
            ដូចនេះល្បឿនបំបាត់ឬល្បឿនកំណក៏កើនឡើងដែរ។
          </p>
      </div>
    ),
  },
  {
    type: "definition",
    title: "៣. កត្តាសម្ពាធ",
    content: (
      <div className="flex flex-col items-start"></div>
    ),
  },
  {
    type: "tip",
    title: "ចំណាំ",
    content: (
      <div className="flex items-start gap-3 flex-col">
        <p>
          សម្ពាធមានឥទ្ធិពលតែទៅលើប្រព័ន្ធប្រតិកម្មដែលមានភាពរូបជាឧស្ម័នតែប៉ុណ្ណោះ។កាលណាសម្ពាធកើនឡើង
          នាំឲ្យចំនួនទង្គិចប្រសិទ្ធកើនឡើងដែរនោះល្បឿនប្រតិកម្មកើនឡើង។
        </p>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div className="flex flex-col items-start gap-3">
        <p>
          ទង្វេីអាម៉ូញាក់តាមលំនាំហេប៊េីត្រូវការសីតុណ្ហភាពនិងសម្ពាធខ្ពស់ចំពោះមុខកាតាលីករដែក។
        </p>
        <span className="text-[13px]">
          <InlineMath math="N_{2} + 3H_{2} \rightleftharpoons 2NH_{3}" />
        </span>
        <p>សន្និដ្ឋាន៖ កាលណាសម្ពាធកើន នាំឲ្យការកកើតអាម៉ូញាក់ក៏កើនដែរ។</p>
        <p>
          បំណកស្រាយ៖ កាលណាសម្ពាធកើន នាំឲ្យម៉ូលេគុលឧស្ម័ននៅកៀកគ្នា
          ជាហេតុធ្វើឲ្យមានទង្គិចប្រសិទ្ធកើនឡើង។ ដូចនេះល្បឿនកំណអង្គធាតុកកើត
          កើនឡើង។
        </p>
      </div>
    ),
  },
  {
    type: "definition",
    title: "៤. កត្តាសីតុណ្ហភាព",
    content: <div className="flex flex-col items-start"></div>,
  },
  {
    type: "tip",
    title: "ចំណាំ",
    content: (
      <div className="flex items-start gap-3 flex-col">
        <p>
          ល្បឿនកំណអង្គធាតុកកេីត និងបំបាត់អង្គធាតុប្រតិករកេីនជាមួយកំណេីនសីតុណ្ហភាព។
          ដេីម្បីបង្កេីនល្បឿនប្រតិកម្មមួយ គេត្រូវបង្កេីនសីតុណ្ហភាព
          ចំណែកដើម្បីបន្ថយល្បឿនប្រតិកម្ម គេត្រូវបន្ថយសីតុណ្ហភាព។
        </p>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div className="flex flex-col items-start gap-3">
        <p>
          ពិសោធន៍៖ បំពង់សាកពីរ A និង B ដាក់សូលុយស្យុង{" "}
          <span className="text-[13px]">
            <InlineMath math="I^{-}" />
          </span>{" "}
          ប្រហែល{" "}
          <span className="text-[13px]">
            <InlineMath math="\frac{1}{4}" />
          </span>
          នៃបំពង់សាកដោយមាន លាយសូលុយស្យុង{" "}
          <span className="text-[13px]">
            <InlineMath math="H_{2}SO_{4}" />
          </span>{" "}
          បន្តិច។ បន្ទាប់មក យកបំពង់សាក A ដាក់ត្រាំក្នុង ទឹកកក និងបំពង់សាក B
          ត្រាំក្នុងទឹកក្តៅ។ ចាក់សូលុយស្យុង{" "}
          <span className="text-[13px]">
            <InlineMath math="H_{2}SO_{4}" />
          </span>{" "}
          ប្រហែល{" "}
          <span className="text-[13px]">
            <InlineMath math="\frac{1}{4}" />
          </span>{" "}
          ដែរ ទៅក្នុង បំពង់សាកទាំងពីរខាងលើក្នុងពេលដំណាលគ្នា។
        </p>
        <img className="w-100" src="/chemistry/pic22.png" alt="" />
        <p>
          សង្កេត៖ ចូរកំណត់កម្លាំងអន្តរម៉ូលេគុលនិងសម្ព័ន្ធអ៊ីដ្រូសែ
          នៃគូក្នុងសមាសធាតុខាងក្រោម៖
        </p>
        <p>
          បកស្រាយ៖ នៅពេលសីតុណ្ហភាពកើន ភាគល្អិត (ម៉ូលេគុល អាតូម ឬអីយ៉ុង)
          ធ្វើចលនាកាន់តែលឿន នាំឲ្យមានទង្គិចប្រសិទ្ធកាន់តែច្រើន។ដូចនេះ
          ល្បឿននៃប្រតិកម្មកាន់តែលឿនដែរ។
        </p>
      </div>
    ),
  },
  {
    type: "definition",
    title: "៥. កត្តាកាតាលីករ",
    content: <div className="flex flex-col items-start"></div>,
  },
  {
    type: "definition",
    title: "៥.១ កាតាលីករ",
    content: <div className="flex flex-col items-start"></div>,
  },
  {
    type: "tip",
    title: "ចំណាំ",
    content: (
      <div className="flex items-start gap-3 flex-col">
        <p>
          កាតាលីករ គឺជាសារធាតុដែលជួយពន្លឿនល្បឿនប្រតិកម្មគីមីកើតឯង
          ហើយវាកើតឡើងវិញដោយគ្មានបាត់បង់លក្ខណៈគីមីនៅពេលប្រតិកម្មចប់។
        </p>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div className="flex flex-col items-start gap-3">
        <p>
          ពិសោធន៍៖ គេមានបំពង់សាកពីរ A និង B ដែលមានមានដាក់{" "}
          <InlineMath math="H_{2}O_{2}" /> ប្រហែល{" "}
          <InlineMath math="\frac{1}{4} " /> នៃបំពង់សាកនោះ ។
          គេពុំឃេីញមានបាតុភូតអ្វីកេីតឡេីងទេ ។ ប៉ុន្តែប្រសិនបេីគេបន្ថែមបរិមាណនៃ{" "}
          <InlineMath math="MnO_{2} " /> ចូលក្នុងបំពង់សាក A ។
        </p>
        <img className="w-100" src="/chemistry/pic23.png" alt="" />
        <p>
          សង្កេត៖ វត្តមាន <InlineMath math="MnO_{2} " /> ក្នុងបំពង់សាក​ A
          គេឃេីញមានពពុះឧស្ម័នកេីតឡេីង និងអាចធ្វេីរងេីកភ្លេីងធូបឆេះច្រាល ។
          ចំណេកបំពង់សាក B ដែលគ្មានវត្តមាន <InlineMath math="MnO_{2} " />{" "}
          គេគ្មានឃេីញបាតុភូតអ្វីកេីតឡេីងទេ​ ។
        </p>
        <p>
          សន្និដ្ឋាន៖ <InlineMath math="MnO_{2} " /> ជាកាតាលីករ ។{" "}
        </p>
        <p>
          បកស្រាយ៖ វត្តមាន <InlineMath math="MnO_{2} " /> ក្នុងបំពង់សាក​ A
          បានជួយបំបែកឧស្ម័នអុកសុីសែន និងទឹកដោយ <InlineMath math="MnO_{2} " />{" "}
          រក្សាបរិមាណនៅដដែល ។{" "}
        </p>
      </div>
    ),
  },
  {
    type: "definition",
    title: "៥.២ កាតាលីស",
    content: (
      <div className="flex flex-col items-start">
        <p>កាតាលីស គឺជាអំពីនៃកាតាលីករទៅលើប្រតិកម្មគីមី។</p>
      </div>
    ),
  },
  {
    type: "tip",
    title: "ចំណាំ",
    content: (
      <div className="flex items-start gap-3 flex-col">
        <p>គេចែកកាតាលីសជាបីប្រភេទ៖</p>
        <ul className="list-disc pl-5 flex flex-col items-start gap-4">
          <div className="flex flex-col gap-2">
            <li>
              កាតាលីសអូម៉ូសែន ៖ គឺជាកាតាលីសដែលកាតាលីករនិងអង្គធាតុប្រតិករមានផាសដូចគ្នា។
            </li>
            <span className="text-[13px]">
              <InlineMath math="H_{2}O_{2} \xrightarrow{Fe^{2+}} H_{2}O + \frac{1}{2} O_{2}" />
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <li>
              កាតាលីសអេតេរ៉ូសែន ៖ ជាកាតាលីសដែលកាតាលីករនិងអង្គធាតុប្រតិករមានផាសខុសគ្នា។
            </li>
            <span className="text-[13px]">
              <InlineMath math="H_{2}O_{2} \xrightarrow{MnO_{2}} H_{2}O + \frac{1}{2} O_{2}" />
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <li>
              កាតាលីសអង់ស៊ីម ៖ ជាកាតាលីសដែលកាតាលីករជាអង់ស៊ីម (ដូចជាប្រូតេអ៊ីនដែលបង្កឡើងពីភាវរស់)។
            </li>
            <span className="text-[13px]">
              <InlineMath math="H_{2}O_{2} \xrightarrow{អង់ស៊ីមក្នុងថ្លើម} H_{2}O + \frac{1}{2} O_{2}" />
            </span>
          </div>
        </ul>
      </div>
    ),
  },
  {
    type: "definition",
    title: "៥.៣ លក្ខណៈកាតាលីករ",
    content: <div className="flex flex-col items-start"></div>,
  },
  {
    type: "tip",
    title: "ចំណាំ",
    content: (
      <ul className="list-disc pl-5 flex flex-col items-start gap-4">
        <div className="flex flex-col gap-2">
          <li>
            {" "}
            <span className="font-bold">នាទីលើស៊ីនេទិច:</span>{" "}
            កាតាលីករអាចបង្កើនល្បឿនតែទៅលើប្រតិកម្មទាំងឡាយណាដែលប្រព្រឹត្តទៅតាមទែម៉ូឌីណាមិចប៉ុណ្ណោះ។
            ចំពោះប្រតិកម្មដែលមានភាពរាំងខ្ទប់ស៊ីនេទិច
            គ្មានកាតាលីករណាអាចធ្វើឲ្យប្រតិកម្មប្រព្រឹត្តទៅបានទេ។
          </li>
          <span className="text-[13px]">
            <InlineMath math="Cu (s) + HCl (aq) \rightarrow ​គ្មានប្រតិកម្មកើតឡេីងទេ" />
          </span>
        </div>
        <div>
          <li>
            <span className="font-bold">បាតុភូតវិសេសភាព:</span>
            កាលណាកាតាលីករមួយមានសកម្មភាពលើប្រតិកម្មគីមីមួយច្បាស់លាស់គេនិយាយថាកាតាលីករមានវិសេសភាពចំពោះប្រតិកម្មនោះ។
          </li>
        </div>
        <li>កាតាលីករប្រជាទូទៅមានបរិមាណតិច តែទទួលបានអង្គធាតុកកេីតច្រេីន</li>
        <li>កាតាលីករចូលរួមប្រតិកម្ម</li>
      </ul>
    ),
  },
  {
    type: "example",
    question: (
      <div className="flex flex-col items-start gap-3">
        <p>
          ប្រតិកម្មឌីស្មួតកម្មទឹកអុកសុីសែនដោយប្រេីកាតាលីករ{" "}
          <InlineMath math="Fe^{2+}" /> គូរេដុកដែលចូលរួមប្រតិកម្មមាន{" "}
          <InlineMath math="H_{2}O_{2} / H_{2}O E^{0} = 1.77 v" /> ,{" "}
          <InlineMath math="Fe^{3+} / Fe^{2+} E^{0} = 0.77 v" /> ,{" "}
          <InlineMath math="O_{2} / H_{2}O_{2} E^{0} = 0.68 v" />{" "}
        </p>
      </div>
    ),
    steps: [
      {
        title: "",
        content: (
          <>
            <div className="flex flex-col items-start gap-5 text-[13px]">
              <div className="h-50 w-50 ">
                <img src="/chemistry/pic48.png" alt="" />
              </div>
              <p className="font-bold text-[15px]">ដំណាក់កាលទី ១</p>
              <div className="sm:w-80">
                <img src="/chemistry/pic49.png" alt="" />
              </div>
              <p className="font-bold text-[15px]">ដំណាក់កាលទី ២</p>
              <div className="sm:w-80">
                <img src="/chemistry/pic50.png" alt="" />
              </div>
              <p className="font-bold text-[15px]">យក ១ + ២ យេីងបាន</p>
              <div className="sm:w-80">
                <img src="/chemistry/pic51.png" alt="" />
              </div>
              <p>
                ដូចនេះអុីយ៉ុង <InlineMath math="Fe^{2+}" /> ចូលរួមប្រតិកម្ម
                តែក្រោយប្រតិកម្មចប់ វាកកេីតឡេីងវិញដដែល ។
              </p>
            </div>
          </>
        ),
      },
    ],
  },
  {
    type: "definition",
    title: "៥.៤ ស្វ័យកាតាលីស",
    content: <div className="flex flex-col items-start"></div>,
  },
  {
    type: "tip",
    title: "ចំណាំ",
    content: (
      <p>
        ស្វ័យកាតាលីសគឺជាកាតាលីសដែលអង្គធាតុកកើតមាននាទីជាកាតាលីករក្នុងប្រតិកម្ម។
      </p>
    ),
  },
  {
    type: "example",
    question: (
      <div className="flex flex-col items-start gap-3">
        <p>
          រេដុកម្មអុីយ៉ុងពែម៉ង់កាណាត <InlineMath math="MnO_{4}^{-}" /> ដោយអាសុីតអុកសាលិច <InlineMath math="H_{2}C_{2}O_{4}" />។
        </p>
        <img className="w-130" src="/chemistry/pic24.png" alt="" />
        <p>
          អុីយ៉ុង <InlineMath math="Mn^{2+}" /> មានតួនាទីជាកាតាលីករក្នុងប្រតិកម្ម។
        </p>
      </div>
    ),
  },
];

const jsonV2 = serializeTopicContentV3(ReactionRateFactors);

// Stage 3a: Deserialized V3 with live React nodes (renderable)
const restoredV3 = deserializeTopicContentV3(jsonV2) as TopicContent_V3[];

// Stage 3b: Deserialized V3 raw node tree (no React elements) for inspection
const restoredV3Tree = deserializeTopicContentV3ToTree(jsonV2) as TopicContent_V3[];


const ReactionRateFactorsV3 = () => {
  return (
    <div>
      <ContentRendererV3 content={ReactionRateFactors} />
    </div>
  );
};

export default ReactionRateFactorsV3;
