import React from "react";

import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { HintBox } from "@/components/pages/docs/boxes/HintBox";
import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { WarningBox } from "@/components/pages/docs/boxes/WarningBox";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import {
  ThreeDExplanationBox,
  ThreeDExplanationBoxProps,
} from "@/components/pages/docs/boxes/explanation-box/3DExplanationBox";
import { div } from "three/tsl";
import {
  ImageExplanationBox,
  ImageBoxProps,
} from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import { span } from "framer-motion/client";

const FirstTopicContent: TopicContent = {
  definition: {
    title: "",
    content: (
      <>
        <div className="flex flex-col items-start">
          <p>
            សមាសធាតុប្រហេីរ ជាសមាសធាតុសរីរាង្គដែលមានវង់បង់សែន{" "}
            <span className="text-[13px]">
              <InlineMath math="(C_{6}H_{6})" />
            </span>{" "}
            ក្នុងសមាសធាតុរបស់វា ។
          </p>
        </div>
      </>
    ),
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <p>ប្រតិកម្មជំនួសសំខាន់ៗដែលកេីតមានលេីបង់សែនរួមមាន :</p>
        <ul className="list-disc pl-5 flex flex-col items-start gap-4">
          <div className="flex items-center gap-5 flex-wrap">
            <li>
              ប្រតិកម្មក្លរកម្ម (បូកក្លរ{" "}
              <span className="text-[13px]">
                <InlineMath math="Cl_{2}" />
              </span>{" "}
              )
            </li>
            <span className="text-[13px]">
              <InlineMath math="C_{6}H_{6} + Cl_{2} \rightarrow C_{6}H_{5}Cl + HCl" />
            </span>
          </div>
          <div className="flex items-center gap-5 flex-wrap">
            <li>
              ប្រតិកម្មប្រូមកម្ម (បូកប្រូម{" "}
              <span className="text-[13px]">
                <InlineMath math="Br_{2}" />
              </span>
              )
            </li>
            <span className="text-[13px]">
              <InlineMath math="C_{6}H_{6} + Br_{2} \rightarrow C_{6}H_{5}Br + HBr" />
            </span>
          </div>
          <div className="flex items-center gap-5 flex-wrap">
            <li>
              ប្រតិកម្មនីទ្រកម្ម (បូក{" "}
              <span className="text-[13px]">
                <InlineMath math="HNO_{3}" />
              </span>
              )
            </li>
            <span className="text-[13px]">
              {" "}
              <InlineMath math="C_{6}H_{6} + HNO_{3} \rightarrow C_{6}H_{5}NO_{2} + H_{2}O" />
            </span>
          </div>
          <div className="flex items-center gap-5 flex-wrap">
            <li>
              ប្រតិកម្មស៊ុលផូកម្ម (បូក{" "}
              <span className="text-[13px]">
                <InlineMath math="H_{2}SO_{4}" />
              </span>
              )
            </li>
            <span className="text-[13px]">
              <InlineMath math="C_{6}H_{6} + H_{2}SO_{4} \rightarrow C_{6}H_{5}SO_{3}H + H_{2}O" />
            </span>
          </div>
          <div className="flex items-center gap-5 flex-wrap">
            <li>
              ប្រតិកម្មអាល់គីលកម្ម (បូក{" "}
              <span className="text-[13px]">
                <InlineMath math="R-X" />
              </span>
              )
            </li>
            <span className="text-[13px]">
              <InlineMath math="C_{6}H_{6} + R-Cl \rightarrow C_{6}H_{5}R + HCl" />
            </span>
          </div>
        </ul>
      </>
    ),
  },
};

const SecondTopicContent: TopicContent = {
  definition: {
    title: "១. ស្រឡាយបង់សែន",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  tip: {
    title: "ចំណុចសំខាន់",
    content: (
      <>
        <ul className="list-disc pl-5 flex flex-col items-start gap-4">
          <div className="flex flex-col gap-2">
            <li>
              នីត្រូបង់សែន កេីតពីប្រតិកម្មរវាងបង់សែន ជាមួយអាសុីតនីទ្រិច
              ក្នុងមជ្ឈដ្ធានអាសុីតស៊ុលផួរិច ។
            </li>
            <span className="text-[13px]">
              <InlineMath math="C_{6}H_{6}-H + HO-NO_{2} \rightarrow C_{6}H_{5}NO_{2} + H_{2}O" />
            </span>
          </div>
          <div className="flex flex-col gap-2 flex-wrap">
            <div className="flex flex-wrap">
              <li>
                នីត្រូតូលុយអែន កេីតពីប្រតិកម្មជំនួសរវាង តូលុយអែន
                ជាមួយអាសុីតនីទ្រិចក្នុងមជ្ឈដ្ធានអាសុីតស៊ុលផួរិច ។
              </li>
            </div>
            <div className="text-[13px] flex-wrap flex ">
              <InlineMath math="C_{6}H_{5}-CH_{3} + 3HNO_{3} \rightarrow" />
              <InlineMath math="CH_{3}-C_{6}H_{2}(NO_{2})_{3}" />
              <InlineMath math="+ 3H_{2}O" />
            </div>
          </div>
        </ul>
      </>
    ),
  },
};

const ThirdTopicContent: TopicContent = {
  definition: {
    title: "ក. ផេណុល",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  tip: {
    title: "ចំណុចសំខាន់",
    content: (
      <>
        <ul className="list-disc pl-5 flex flex-col items-start gap-4">
          <div className="flex flex-col gap-3">
            <li>ផេណុល ជាសមាសធាតុបង់សែន ដែលភ្ជាប់ក្រុមអុីដ្រុកសុីល (-OH)</li>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[13px]">
                <InlineMath math="C_{6}H_{5}-OH" />
              </span>

              <p>ផេណុល</p>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[13px]">
                <InlineMath math="CH_{3}-C_{6}H_{4}-OH" />
              </span>

              <p>0-មេទីល ផេណុល ឬក្រេសុល</p>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[13px]">
                {" "}
                <InlineMath math="(NO_{2})_{3}-C_{6}H_{2}-OH" />
              </span>

              <p>2,4,6-ទ្រីនីត្រូ ផេណុល ឬអាសុីតពីគ្រិច</p>
            </div>
            <div className="flex flex-col gap-3">
              <li>ទង្វេីផេណុល</li>
              <div className="text-[13px] flex flex-col gap-3">
                <InlineMath math="C_{6}H_{5}-Cl + 2NaOH \rightarrow C_{6}H_{5}-ONa + NaCl + H_{2}O" />
                <InlineMath math="C_{6}H_{5}-ONa + CO_{2} + H_{2}O \rightarrow C_{6}H_{5}-OH + NaHCO_{3}" />
              </div>
            </div>
          </div>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "ផេណុល",
      src: "/chemistry/Phenull.png",
      imageAlt: "ផេណុល",
      explanation: [],
    },
    {
      title: "2,4,6-ទ្រីនីត្រូ ផេណុល",
      src: "/chemistry/AcidPiKrec.jpg",
      imageAlt: "ផេណុល",
      explanation: [],
    },
  ],
};

const FourthTopicContent: TopicContent = {
  definition: {
    title: "លក្ខណៈរូប",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <p>
          ផេណុល ជាក្រាមគ្មានពណ៏រលាយក្នុងទឹកតិច ចំណុចរលាយ 42°C ចំណុចរំពុះ 181°C
          ។​ សូលុយស្យុងរបស់វាមានលក្ខណៈពុល គេប្រេីសម្លាប់មេរោគ ។
        </p>
      </>
    ),
  },
};

const FifthTopicContent: TopicContent = {
  definition: {
    title: "លក្ខណៈគីមី",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <ul className="list-disc pl-5 flex flex-col items-start gap-4">
          <div className="flex flex-col gap-2">
            <li>លក្ខណៈដូចអាល់កុល : គឺវាមានប្រតិកម្មជាមួយសូដ្យូម ។</li>
            <span className="text-[13px]">
              {" "}
              <InlineMath math="C_{6}H_{5}OH + Na \rightarrow C_{6}H_{5}ONa + \tfrac{1}{2}H_{2}" />
            </span>
          </div>
          <div>
            <li>
              លក្ខណៈខុសពីអាល់កុល: ប្រតិកម្មជាមួយ{" "}
              <span className="text-[13px]">
                <InlineMath math="NaOH , Br_{2} " />
              </span>{" "}
              និងអាល់ដេអុីតផរមិច ។
            </li>
          </div>
          <div className="flex flex-col gap-2">
            <li>ប្រតិកម្មជាមួយបាស NaOH ព្រោះវាមានលក្ខណៈជាអាសុីតផេនិច</li>
            <span className="text-[13px]">
              <InlineMath math="C_{6}H_{5}OH + NaOH \rightarrow C_{6}H_{5}ONa + H_{2}O" />
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <li>
              ប្រតិកម្មជំនួសជាមួយប្រូម{" "}
              <span className="text-[13px]">
                <InlineMath math="Br_{2}" />
              </span>
            </li>
            <span className="text-[13px]">
              <InlineMath math="C_{6}H_{5}OH + 3Br_{2} \rightarrow C_{6}H_{2}Br_{3}OH + 3HBr" />
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <li>ប្រតិកម្មជាមួយអាល់ដេអុីតផរមិច : កាតាលីករជាបាសអាល់កាលី</li>
            <span className="text-[13px]">
              <InlineMath math="C_{6}H_{5}OH + HCHO \xrightarrow{OH^{-}} OHC_{6}H_{4}CH_{2}OH" />
            </span>
          </div>
          <div>
            <li>
              ប្រតិកម្មកុងដង់កម្ម ជាប្រតិកម្មដែលម៉ូលេគុល ពីរ ឬ ច្រេីន
              ធ្វេីប្រតិកម្មជាមួយគ្នាដេីម្បីបង្កេីតជាម៉ូលេគុលធំជាងមុនដោយផ្តាច់ម៉ូលេគុលតូចៗចេញ
              ។
            </li>
          </div>
          <div>
            <li>
              អាល់កុលប្រហេីរ ជាសមាសធាតុប្រហេីរដែលមានក្រុមអុីដ្រុកសុីល (-OH)
              ភ្ជាប់នឹងខ្សែកាបូនជាប់វង់បង់សែន ។
            </li>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-[13px]">
                <InlineMath math="C_{6}H_{5}-CH_{2}-OH" />
              </span>

              <p>បង់សុីល អាល់កុល</p>
            </div>
          </div>
        </ul>
      </>
    ),
  },
};

const SixthTopicContent: TopicContent = {
  definition: {
    title: "២. អាល់ដេអុីតប្រហេីរ",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  tip: {
    title: "ចំណុចសំខាន់",
    content: (
      <>
        <ul className="list-disc pl-5 flex flex-col items-start gap-4">
          <div className="flex flex-col gap-2">
            <li>
              អាល់ដេអុីតប្រហេីរ ជាសមាសធាតុប្រហេីរដែលមានបង្គុំ (-CHO)
              ភ្ជាប់នឹងខ្សែកាបូនជាប់វង់បង់សែន ។
            </li>
            <div className="flex items-center gap-5 flex-wrap text-[13px]">
              <InlineMath math="C_{6}H_{5}-CHO" />
              <InlineMath math=", C_{6}H_{5}-CH_{2}-CHO" />
            </div>
          </div>
        </ul>
      </>
    ),
  },
};

const SeventhTopicContent: TopicContent = {
  definition: {
    title: "លក្ខណៈរូប",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <p>
          ជាអង្គធាតុរាវគ្មានពណ៌ មិនរលាយក្នុងទឹកវារលាយនៅ -17°C និង ពុះនៅ 179°C ។
        </p>
      </>
    ),
  },
};

const EighthTopicContent: TopicContent = {
  definition: {
    title: "លក្ខណៈគីមី",
    content: (
      <>
        <div className="flex flex-col items-start"></div>
      </>
    ),
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <ul className="list-disc pl-5 flex flex-col items-start gap-4">
          <div className="flex flex-col gap-2">
            <li>
              ប្រតិកម្មជំនួសប្រូម{" "}
              <span className="text-[13px]">
                <InlineMath math="Br_{2}" />
              </span>{" "}
              (ប្រពឹត្តទៅដោយពីបាក ) ។
            </li>
            <span className="text-[13px]">
              <InlineMath math="C_{6}H_{5}-CHO + Br_{2} \rightarrow C_{6}H_{5}-Br-CHO + HBr" />
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <li>
              លក្ខណៈជាអាល់ដេអុីត: វាអាចរងអុកសុីតតាមសម្រួលដោយ{" "}
              <span className="text-[13px]">
                <InlineMath math="K_{2}Cr_{2}O_{7}" />
              </span>{" "}
              អាសុីត ។
            </li>
            <span className="text-[13px]">
              <InlineMath math="C_{6}H_{5}CHO \xrightarrow{K_{2}Cr_{2}O_{7}/H_{2}SO_{4}} C_{6}H_{5}COOH" />
            </span>
          </div>
          <div>
            <li>
              ទង្វេីអាល់ដេអុីត: តាមប្រតិកម្មជំនួសក្លរលេីតូលុយអែន
              បន្ទាប់មករងអុីដ្រូលីសក្នុងមជ្ឈដ្ឋាន បាស ។
            </li>
          </div>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "បង់សាលដេអុីត",
      src: "/chemistry/Benzaldehyde.svg.png",
      imageAlt: "",
      explanation: [
        "ជាអាល់ដេអុីតដែលមានវង់សែនជាមូលដ្ឋាន។",
        "ប្រើក្នុងការផលិតថ្នាំ និងសារធាតុបង្កើតក្លិន។",
        "ជាផ្នែកសំខាន់ក្នុងឧស្សាហកម្មគីមីអាហារ។",
      ],
    },
    {
      title: "អាសុីតបង់សូអុិច",
      src: "/chemistry/Benzoic_acid.svg",
      imageAlt: "",
      explanation: [
        "ជាការីបុកស៊ីលអាស៊ីតមានវង់ប៉ែន។",
        "ប្រើជាអ្នកថែរក្សាអាហារ (food preservative)។",
        "មានសម្បត្តិប្រឆាំងមេរោគ។",
      ],
    },
    {
      title: "តូលុយអែន",
      src: "/chemistry/Toluene.svg.png",
      imageAlt: "",
      explanation: [
        "ប្រើជាអ្នករលាយ (solvent) ក្នុងឧស្សាហកម្ម។",
        "អាចបម្លែងទៅជាសារធាតុគីមីផ្សេងៗបាន។",
      ],
    },
    {
      title: "បង់សុីលក្លរួ",
      src: "/chemistry/Benzyl_chloride.png",
      imageAlt: "",
      explanation: [
        "ប្រើក្នុងការផលិតបង់សុីលអាល់កហុល។",
        "មានប្រតិកម្មខ្លាំងជាមួយ nucleophile។",
      ],
    },
    {
      title: "អាសុីតផ្តាលិច",
      src: "/chemistry/acidPtalec.png",
      imageAlt: "",
      explanation: [
        "មានឈ្មោះពេញថា អាសុីតផថាលិច (Phthalic acid)។",
        "ប្រើក្នុងការផលិតពណ៌ និងប្លាស្ទិក។",
        "ជាសារធាតុគីមីសំខាន់ក្នុងឧស្សាហកម្ម។",
      ],
    },
  ],
};

const NinethTopicContent: TopicContent = {
  definition: {
    title: "៣. អាសុីតប្រហេីរ",
    content: (
      <>
        <div className="flex flex-col items-start">
          <p>
            អាសុីតប្រហេីរ ជាសមាសធាតុប្រហេីរដែលមានបង្គុំនាទី (-COOH)
            ភ្ជាប់នឹងវង់បង់សែនមួយឬច្រេីន ។
          </p>
        </div>
      </>
    ),
  },
  tip: {
    title: "ចំណុចសំខាន់",
    content: (
      <>
        <div className="flex flex-col gap-3 items-start">
          <div className="flex items-center gap-3">
            <span className="text-[13px]">
              <InlineMath math="C_{6}H_{5}-COOH" />
            </span>

            <p>អាសុីតបង់សូអុិច</p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[13px]">
              {" "}
              <InlineMath math="C_{6}H_{4}(COOH)_{2}" />
            </span>

            <p>អាសុីតផ្តាលិច</p>
          </div>
        </div>
        <ul className="list-disc pl-5 flex flex-col items-start gap-4 mt-3">
          <div className="flex flex-col gap-2 ">
            <li>
              ទង្វេីអាសុីតបង់សូអុិច : តាមប្រតិកម្មអុកសុីតកម្មនៃបង់សាល់ដេអុីត
            </li>
            <span className="text-[13px]">
              <InlineMath math="C_{6}H_{5}CHO \xrightarrow{K_{2}Cr_{2}O_{7}/H_{2}SO_{4}} C_{6}H_{5}COOH" />
            </span>
          </div>
          <div className="flex flex-col gap-2 ">
            <li>
              ទង្វេីអាសុីត p-ក្លរួ បង់សូអុិច : ប្រតិកម្មអុកសុីតកម្ម p-ក្លរួ
              តូលុយអែនដោយ{" "}
              <span className="text-[13px]">
                <InlineMath math="KMnO_{4}" />
              </span>
            </li>
            <span className="text-[13px]">
              <InlineMath math="C_{6}H_{5}CH_{3}Cl \xrightarrow{KMnO_{4}} C_{6}H_{5}COOHCl" />
            </span>
          </div>
          <div className="flex flex-col gap-2 ">
            <li>
              ទង្វេីអាសុីតតេរេផ្តាលិច: តាមប្រតិកម្មអុកសុីតកម្មនៃ p-សុីឡែនដោយ
              អុកសុីសែននៅសីតុណ្ហភាពខ្ពស់ និងមានកាតាលីករ កូបាល់
            </li>
            <span className="text-[13px]">
              <InlineMath math="C_{6}H_{4}(CH_{3})_{2} \xrightarrow{O_{2}, Co} C_{6}H_{4}(COOH)_{2}" />
            </span>
          </div>
        </ul>
      </>
    ),
  },
  imageExplanation: [
    {
      title: "អាសុីត p-ក្លរួ បង់សូអុិច",
      src: "/chemistry/ChlorobenzoicAcid.png",
      imageAlt: "",
      explanation: [
        "ជាអាសុីតបង់សូអុិចដែលមានក្លរភ្ជាប់នៅទីតាំង p។",
        "ប្រើក្នុងសមាសធាតុគីមី និងសារធាតុថ្នាំ។",
      ],
    },
    {
      title: "p-សុីឡែន",
      src: "/chemistry/P-xylene.svg.png",
      imageAlt: "",
      explanation: [
        "ប្រើជាអ្នករលាយ (solvent) និងក្នុងផលិតផលប្លាស្ទិក។",
        "ជាផ្នែកសំខាន់ក្នុងសមាសធាតុ PET (polyethylene terephthalate)។",
      ],
    },
    {
      title: "អាសុីតតេរេផ្តាលិច",
      src: "/chemistry/acidTereptalec.png",
      imageAlt: "",
      explanation: [
        "ប្រើក្នុងផលិតផលប្លាស្ទិក និងសេរ៉ាមិច។",
        "ជាសារធាតុគីមីសំខាន់សម្រាប់ផលិត PET bottles និង fibers។",
      ],
    },
  ],
};

const Inorganic_compounds = () => {
  return (
    <div>
      <div>
        {FirstTopicContent.definition && (
          <DefinitionBox
            title={FirstTopicContent.definition.title}
            content={FirstTopicContent.definition.content}
          />
        )}
        {FirstTopicContent.tip && (
          <TipBox
            title={FirstTopicContent.tip.title}
            content={FirstTopicContent.tip.content}
          />
        )}
      </div>
      <div>
        {SecondTopicContent.definition && (
          <DefinitionBox
            title={SecondTopicContent.definition.title}
            content={SecondTopicContent.definition.content}
          />
        )}
        {SecondTopicContent.tip && (
          <TipBox
            title={SecondTopicContent.tip.title}
            content={SecondTopicContent.tip.content}
          />
        )}
      </div>
      <div>
        {ThirdTopicContent.definition && (
          <DefinitionBox
            title={ThirdTopicContent.definition.title}
            content={ThirdTopicContent.definition.content}
          />
        )}
        {ThirdTopicContent.tip && (
          <TipBox
            title={ThirdTopicContent.tip.title}
            content={ThirdTopicContent.tip.content}
          />
        )}
        {ThirdTopicContent.imageExplanation &&
          Array.isArray(ThirdTopicContent.imageExplanation) &&
          ThirdTopicContent.imageExplanation.map(
            (image: ImageBoxProps, index: number) => (
              <ImageExplanationBox
                key={index}
                title={image.title}
                src={image.src}
                imageAlt={image.imageAlt}
                explanation={image.explanation}
              />
            )
          )}
      </div>
      <div>
        {FourthTopicContent.definition && (
          <DefinitionBox
            title={FourthTopicContent.definition.title}
            content={FourthTopicContent.definition.content}
          />
        )}
        {FourthTopicContent.tip && (
          <TipBox
            title={FourthTopicContent.tip.title}
            content={FourthTopicContent.tip.content}
          />
        )}
      </div>
      <div>
        {FifthTopicContent.definition && (
          <DefinitionBox
            title={FifthTopicContent.definition.title}
            content={FifthTopicContent.definition.content}
          />
        )}
        {FifthTopicContent.tip && (
          <TipBox
            title={FifthTopicContent.tip.title}
            content={FifthTopicContent.tip.content}
          />
        )}
      </div>
      <div>
        {SixthTopicContent.definition && (
          <DefinitionBox
            title={SixthTopicContent.definition.title}
            content={SixthTopicContent.definition.content}
          />
        )}
        {SixthTopicContent.tip && (
          <TipBox
            title={SixthTopicContent.tip.title}
            content={SixthTopicContent.tip.content}
          />
        )}
      </div>
      <div>
        {SeventhTopicContent.definition && (
          <DefinitionBox
            title={SeventhTopicContent.definition.title}
            content={SeventhTopicContent.definition.content}
          />
        )}
        {SeventhTopicContent.tip && (
          <TipBox
            title={SeventhTopicContent.tip.title}
            content={SeventhTopicContent.tip.content}
          />
        )}
      </div>
      <div>
        {EighthTopicContent.definition && (
          <DefinitionBox
            title={EighthTopicContent.definition.title}
            content={EighthTopicContent.definition.content}
          />
        )}
        {EighthTopicContent.tip && (
          <TipBox
            title={EighthTopicContent.tip.title}
            content={EighthTopicContent.tip.content}
          />
        )}
        {EighthTopicContent.imageExplanation &&
          Array.isArray(EighthTopicContent.imageExplanation) &&
          EighthTopicContent.imageExplanation.map(
            (image: ImageBoxProps, index: number) => (
              <ImageExplanationBox
                key={index}
                title={image.title}
                src={image.src}
                imageAlt={image.imageAlt}
                explanation={image.explanation}
              />
            )
          )}
      </div>
      <div>
        {NinethTopicContent.definition && (
          <DefinitionBox
            title={NinethTopicContent.definition.title}
            content={NinethTopicContent.definition.content}
          />
        )}
        {NinethTopicContent.tip && (
          <TipBox
            title={NinethTopicContent.tip.title}
            content={NinethTopicContent.tip.content}
          />
        )}
        {NinethTopicContent.imageExplanation &&
          Array.isArray(NinethTopicContent.imageExplanation) &&
          NinethTopicContent.imageExplanation.map(
            (image: ImageBoxProps, index: number) => (
              <ImageExplanationBox
                key={index}
                title={image.title}
                src={image.src}
                imageAlt={image.imageAlt}
                explanation={image.explanation}
              />
            )
          )}
      </div>
    </div>
  );
};

export default Inorganic_compounds;
