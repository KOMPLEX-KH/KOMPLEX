"use client";

import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  serializeTopicContentV3,
  deserializeTopicContentV3,
} from "@/components/pages/docs/utils/ContentSerializerV2";
import { InlineMath, BlockMath } from "react-katex";

const content: TopicContent_V3[] = [
  // 2D Vector Section
  {
    type: "definition",
    title: "កូអរដោនេនៃវិចទ័រ ២D(ពីរវិមាត្រ)",
    content: (
      <>
        វ៉ិចទ័រ 2D គឺជាបរិមាណដែលមាន ទិសដៅ, ទិស, និង ប្រវែង លើប្លង់ពីរវិមាត្រ{" "}
        <InlineMath math="xy" />។ វាត្រូវបានតំណាងជាគូដូចជា{" "}
        <InlineMath math="\vec{v} = (x, y)" /> ដែល៖
        <br />
        <>
          • <InlineMath math="x" /> ជាកូអរដោនេនៅផ្លូវអ័ក្ស x <br />
          • <InlineMath math="y" /> ជាកូអរដោនេនៅផ្លូវអ័ក្ស y
        </>
      </>
    ),
  },
  {
    type: "tip",
    title: "វ៉ិចទ័រ AB",
    content: (
      <>
        <img src="/2Dvector.png" alt="2D Vector" />
        បើមានចំណុចពីរ <InlineMath math="A(x_1, y_1)" /> និង{" "}
        <InlineMath math="B(x_2, y_2)" /> នៅលើប្លង់{" "}
        <InlineMath math="xy" />, វ៉ិចទ័រ{" "}
        <InlineMath math="\overrightarrow{AB}" /> ត្រូវបានកំណត់ជា:
        <br />
        <BlockMath math="\overrightarrow{AB} = (x_2 - x_1,\ y_2 - y_1)" />
      </>
    ),
  },

  // 3D Vector Section
  {
    type: "definition",
    title: "កូអរដោនេនៃវិចទ័រ ៣D(បីវិមាត្រ)",
    content: (
      <>
        វ៉ិចទ័រ ៣D គឺជាបរិមាណដែលមាន ទិសដៅ, ទិស, និង ប្រវែង លើប្លង់បីវិមាត្រ{" "}
        <InlineMath math="xyz" />។ វាត្រូវបានតំណាងជាគូដូចជា{" "}
        <InlineMath math="\vec{v} = (x, y, z)" /> ដែល៖
        <br />
        • <InlineMath math="x" /> ជាកូអរដោនេនៅផ្លូវអ័ក្ស x <br />
        • <InlineMath math="y" /> ជាកូអរដោនេនៅផ្លូវអ័ក្ស y <br />
        • <InlineMath math="z" /> ជាកូអរដោនេនៅផ្លូវអ័ក្ស z <br />
      </>
    ),
  },
  {
    type: "tip",
    title: "រូបមន្តកូអរដោនេនៃវ៉ិចទ័រ",
    content: (
      <>
        បើមានចំណុចពីរ <InlineMath math="A(x_1, y_1, z_1)" /> និង{" "}
        <InlineMath math="B(x_2, y_2, z_2)" /> នៅលើប្លង់{" "}
        <InlineMath math="xyz" /> <br />
        • កូអរដោនេនៃវ៉ិចទ័រ <InlineMath math="\overrightarrow{AB}" /> <br />{" "}
        កំណត់ដោយ៖
        <br />
        <BlockMath math="\overrightarrow{AB} = (x_2 - x_1,\ y_2 - y_1,\ z_2 - z_1)" />
        <br />
        • ចម្ងាយរវាងចំណុចពីរ <InlineMath math="A(x_1, y_1, z_1)" /> និង{" "}
        <InlineMath math="B(x_2, y_2, z_2)" /> ត្រូវបានកំណត់ដោយ៖
        <br />
        <BlockMath
          math="|\overrightarrow{AB}| = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}"
        />
        • កូអរដោនេនៃវ៉ិចទ័រចំណុចកណ្ដាល <br />
        កំណត់ដោយ៖
        <br />
        <BlockMath
          math="I_{AB} \left( \frac{x_A+x_B}{2},\ \frac{y_A+y_B}{2},\ \frac{z_A+z_B}{2} \right)"
        />
      </>
    ),
  },
  {
    type: "hint",
    content: (
      <>
        • អ្នកអាចប្រើ <InlineMath math={"|\\vec{v}|"} /> ឬ{" "}
        <InlineMath math={"|v|"} /> ចម្ងាយឬប្រវែងវ៉ិចទ័រ <br />•
        កូអរដោនេនៃវ៉ិចទ័រ 2D មានទំហំ 2D គឺមានតែ 2 ធាតុគឺ <InlineMath math="x" />{" "}
        និង <InlineMath math="y" />។<br />
        • កូអរដោនេនៃវ៉ិចទ័រ 3D មានទំហំ 3D គឺមាន 3 ធាតុគឺ <InlineMath math="x" />
        , <InlineMath math="y" /> និង <InlineMath math="z" />។ <br />• វ៉ិចទ័រ
        2D និង 3D ប្រើសម្រាប់បង្ហាញទិស និងទំហំ ក្នុងផ្ទៃប្លង់ និងក្នុងលំហ។
      </>
    ),
  },
  {
    type: "example",
    question: <>គណនាកូអរដោនេនៃវ៉ិចទ័រ AB និងរកចំណុចកណ្ដាលរវាង A និង B។</>,
    steps: [
      {
        title: "គណនាកូអរដោនេនៃវិចទ័រ AB",
        content: (
          <>
            គេមានពីរចំណុច <InlineMath math="A(1,2,3)" />,{" "}
            <InlineMath math="B(4,6,5)" />

            <br /> <br />
            តាមរូបមន្ត​​៖{" "}
            <InlineMath math="\overrightarrow{AB} = (x_2 - x_1,\ y_2 - y_1,\ z_2 - z_1)" />
            <br /> <br />
            នាំឲ៖​​{" "}
            <InlineMath math="\overrightarrow{AB} = (4 - 1,\ 6 - 2,\ 5 - 3)" />{" "}
            <br />
            <br />
            ដូចនេះយើងបាន៖{" "}
            <InlineMath math="\overrightarrow{AB} = (3,\ 4,\ 2)" />
          </>
        ),
      },
      {
        title: "រកកូអរដោនេនៃវ៉ិចទ័រ AB",
        content: (
          <>
            គេមានពីរចំណុច <InlineMath math="A(1,2,3)" />,{" "}
            <InlineMath math="B(4,6,5)" />

            <br /> <br />
            តាមរូបមន្ត​​៖{" "}
            <InlineMath
              math="|\overrightarrow{AB}| = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}"
            />{" "}
            <br /> <br />
            នាំឲ៖​​{" "}
            <InlineMath
              math="|\overrightarrow{AB}| = \sqrt{(4 - 1)^2 + (6 - 2)^2 + (5 - 3)^2}"
            />{" "}
            <br />
            <br />
            ដូចនេះយើងបាន៖{" "}
            <InlineMath math="|\overrightarrow{AB}| = \sqrt{9 + 16 + 4} = \sqrt{29}" />
          </>
        ),
      },
      {
        title: "រកកូអរដោនេនៃវ៉ិចទ័រចំណុចកណ្ដាល",
        content: (
          <>
            គេមានពីរចំណុច <InlineMath math="A(2,2,3)" />,{" "}
            <InlineMath math="B(4,6,5)" />

            <br /> <br />
            តាមរូបមន្ត​​៖{" "}
            <InlineMath
              math="I_{AB} \left( \frac{x_A+x_B}{2},\ \frac{y_A+y_B}{2},\ \frac{z_A+z_B}{2} \right)"
            />{" "}
            <br /> <br />
            នាំឲ៖​​{" "}
            <InlineMath
              math="I_{AB} \left( \frac{2+4}{2},\ \frac{2+6}{2},\ \frac{3+5}{2} \right)"
            />
            <br />
            <br />
            ដូចនេះយើងបាន៖ <InlineMath math="I_{AB} = (3,\ 4,\ 4)" />
          </>
        ),
      },
    ],
    answer: (
      <>
        <InlineMath math="\overrightarrow{AB} = (3,4,2)" /> និង{" "}
        <InlineMath math="I_{AB} = (3,4,4)" />{" "}
      </>
    ),
  },

  // Dot Product and Related Formulas Section
  {
    type: "definition",
    title: "ផលគុណស្កាលែនៃពីរវ៉ិចទ័រ",
    content: (
      <>
        ផលគុណស្កាលែរវាងពីរវ៉ិចទ័រ គឺចំនួនពិតមួយ
        ដែលអាចកំណត់បានពីទិន្នន័យកូអរដោនេរបស់វ៉ិចទ័រ។
        <br />
        ក៏អាចកំណត់បានតាមមុំ <InlineMath math="\theta" /> រវាងវ៉ិចទ័រ។
        <br />
        <br />
        <b>ដែល:</b> <InlineMath math="\theta" /> ជាមុំដែលផ្គុំឡើងដោយ
        <InlineMath math="\vec{u}" /> និង <InlineMath math="\vec{v}" />។
      </>
    ),
  },
  {
    type: "tip",
    title: "រូបមន្តផលគុណស្កាលែ",
    content: (
      <>
        បើមានវ៉ិចទ័រ <InlineMath math="\vec{u} = (x, y, z)" /> និង{" "}
        <InlineMath math="\vec{v} = (x', y', z')" /> នោះ ផលគុណស្កាលែអាច <br />
        កំណត់ដោយ៖
        <BlockMath math="\vec{u} \cdot \vec{v} = xx' + yy' + zz'" />
        បើ <InlineMath math="\theta" /> ជាមុំដែលផ្គុំរវាង{" "}
        <InlineMath math="\vec{u}" /> និង <InlineMath math="\vec{v}" />{" "}
        ដែលមានប្រវែងរៀងគ្នា <InlineMath math="|\vec{u}|" /> និង{" "}
        <InlineMath math="|\vec{v}|" /> ជាប្រវែងវ៉ិចទ័រ{" "}
        <InlineMath math="\vec{u}, \vec{v}" /> នោះ:ផលគុណស្កាលែ <br />
        កំណត់ដោយ៖
        <BlockMath math="\vec{u} \cdot \vec{v} = |\vec{u}|\,|\vec{v}|\cos\theta" />
        <b>ស្កាលែនិងណមនៃវ៉ិចទ័រ</b>
        <br />
        បើមានវ៉ិចទ័រ <InlineMath math={"u = (a, b, c)"} />{" "}
        នោះស្កាលែនិងណមនៃវ៉ិចទ័រ <InlineMath math={"\\vec{u}"} /> <br />{" "}
        កំណត់ដោយ៖
        <BlockMath math={String.raw`\vec{u}^2 = a^2 + b^2 + c^2`} />
        <BlockMath math={String.raw`|\vec{u}| = \sqrt{a^2 + b^2 + c^2}`} />
        <b> កូសុីនូសនៃមុំរវាងពីរវ៉ិចទ័រ </b>
        <br />
        កូសុីនូសនៃមុំរវាងពីរវ៉ិចទ័រ <InlineMath math="\vec{u} = (x, y, z)" />{" "}
        និង <InlineMath math="\vec{v} = (x', y', z')" />
        ក្នុងលំហ <br />
        កំណត់ដោយ៖ <br />
        <BlockMath
          math={String.raw`\cos\theta = \frac{\vec{u} \cdot \vec{v}}{|\vec{u}||\vec{v}|} `}
        />
        <BlockMath
          math={String.raw`= \frac{xx' + yy' + zz'}{\sqrt{x^2 + y^2 + z^2} \cdot \sqrt{x'^2 + y'^2 + z'^2}}`}
        />
      </>
    ),
  },
  {
    type: "example",
    question: (
      <div>
        គេមានវ៉ិចទ័រ <InlineMath math="\vec{u} = (2,3,1)" /> និង{" "}
        <InlineMath math="\vec{v} = (4,-1,5)" />។<br />
        1. គណនាផលគុណស្កាលែ <InlineMath math="\vec{u} \cdot \vec{v}" /> <br />
        2. រកប្រវែងវ៉ិចទ័រ <InlineMath math="|\vec{u}|" /> និង{" "}
        <InlineMath math="|\vec{v}|" /> <br />
        3. រក <InlineMath math={"\\cos \\theta"} /> <br />
        4. រក <InlineMath math="\theta" />
      </div>
    ),
    steps: [
      {
        title: "គណនាផលគុណស្កាលែ",
        content: (
          <div>
            តាមរូបមន្ត៖​​{" "}
            <InlineMath math="\vec{u} \cdot \vec{v} = xx' + yy' + zz'" />
            <br />
            <br />
            ដោយ <InlineMath math={"\\vec{u} = (2,3,1)"} /> និង{" "}
            <InlineMath math={"\\vec{v} = (4,-1,5)"} /><br />
            <br />
            យើងបាន៖{" "}
            <InlineMath
              math={"\\vec{u} \\cdot \\vec{v} = (2)(4) + (3)(-1) + (1)(5) "}
            />
            <br />
            <br />
            ដូចនេះ​​ <InlineMath math={"\\vec{u} \\cdot \\vec{v} = 10"} />
          </div>
        ),
      },
      {
        title: "រកប្រវែងវ៉ិចទ័រ u និង v",
        content: (
          <div>
            តាមរូបមន្ត៖{" "}
            <InlineMath
              math="\vec{u} \cdot \vec{v} = |\vec{u}|\,|\vec{v}|\cos\theta"
            />
            <br />
            <br />
            ដោយ <InlineMath math={"\\vec{u} = (2,3,1)"} /> និង{" "}
            <InlineMath math={"\\vec{v} = (4,-1,5)"} /><br />
            <br />
            យើងបាន៖​​{" "}
            <InlineMath
              math={"|\\vec{u}| = \\sqrt{2^2 + 3^2 + 1^2} = \\sqrt{14}"}
            />{" "}
            <br />
            <br />
            <InlineMath
              math={"|\\vec{v}| = \\sqrt{4^2 + (-1)^2 + 5^2} = \\sqrt{42}"}
            />{" "}
            <br />
            <br />
            ដូចនេះ​​ <InlineMath
              math={"|\\vec{u}| = \\sqrt{14}"}
            /> ​​និង <InlineMath math={"|\\vec{v}| = \\sqrt{42}"} /> <br />
          </div>
        ),
      },
      {
        title: "រក cosθ",
        content: (
          <div>
            តាមរូបមន្ត៖​​{" "}
            <InlineMath
              math={
                "\\cos \\theta = \\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}||\\vec{v}|}  "
              }
            />
            <br />
            <br />
            ដោយ <InlineMath
              math={"\\vec{u} \\cdot \\vec{v} = 10"}
            /> និង <InlineMath math={"|\\vec{u}| = \\sqrt{14}"} /> និង{" "}
            <InlineMath math={"|\\vec{v}| = \\sqrt{42}"} /> <br />
            <br />
            យើងបាន៖{" "}
            <InlineMath
              math={
                "\\cos \\theta = \\frac{10}{\\sqrt{14}\\,\\sqrt{42}} = \\frac{10}{\\sqrt{588}}"
              }
            />{" "}
            <br />
            <br />
            ដូចនេះ​​{" "}
            <InlineMath math={"\\cos \\theta = \\frac{5}{\\sqrt{147}}"} />
          </div>
        ),
      },
      {
        title: "រក θ",
        content: (
          <div>
            យើងបាន៖{" "}
            <InlineMath
              math={
                "\\theta = \\cos^{-1} \\left( \\frac{5}{7\\sqrt{3}} \\right )"
              }
            />
            <br />
            <br />
            ដូចនេះ{" "}
            <InlineMath
              math={
                "\\cos \\theta = \\frac{5}{7\\sqrt{3}} \\approx 65.64^\\circ"
              }
            />
          </div>
        ),
      },
    ],
    answer: (
      <div>
        <br />
        1. ផលគុណស្កាលែ = 10 <br />
        <br />
        2. ប្រវែងវ៉ិចទ័រ |u| = <InlineMath math={"\\sqrt{14}"} /> <br />{" "}
        <br />
        3. cosθ = <InlineMath math={"\\frac{5}{\\sqrt{147}}"} /> <br /> <br />
        4. θ ={" "}
        <InlineMath
          math={
            "\\cos^{-1} \\left( \\frac{5}{\\sqrt{147}} \\right ) \\approx 65.64^\\circ"
          }
        />{" "}
        <br />
      </div>
    ),
  },
  {
    type: "definition",
    title: "លក្ខណៈផលគុណស្កាលែនៃពីរវ៉ិចទ័រ",
    content: (
      <>
        {/* Empty content as in the original */}
      </>
    ),
  },
  {
    type: "tip",
    title: "លក្ខណៈផលគុណស្កាលែនៃពីរវ៉ិចទ័",
    content: (
      <>
        <img src="/polkon.png" alt="2D Vector" />
        <BlockMath
          math="រូបមន្តផលគុណស្កាលែគឺជាផលគុណរវាងវ៉ិចទ័រ ២ គឺ  {\vec{u} \cdot \vec{v} }"
        />
        <BlockMath math="\vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u}" />
        <BlockMath math="\vec{u} \cdot \vec{u} = |\vec{u}|^2 = u^2" />
        <BlockMath math="\vec{u} \cdot (k\vec{v}) = k(\vec{u} \cdot \vec{v})" />
        <BlockMath
          math="\vec{u} \cdot (\vec{v} + \vec{w}) = \vec{u} \cdot \vec{v} + \vec{u} \cdot \vec{w}"
        />
        <BlockMath
          math="(\vec{u} ± \vec{v})^2 = u^2 ± 2\vec{u}\vec{v} + v^2"
        />
        <BlockMath
          math="(\vec{u} + \vec{v}) \cdot (\vec{u} - \vec{v}) = |\vec{u}|^2 - |\vec{v}|^2"
        />
        (k ជាចំនួនពិត)
      </>
    ),
  },
  {
    type: "example",
    question: <>គណនាផលគុណស្កាលែរវ៉ិចទ័រ និងបង្ហាញលក្ខណៈផលគុណស្កាលែ</>,
    steps: [
      {
        title: "ក. សមមូល៖",
        content: (
          <>
            គេមាន <InlineMath math={"\\vec{u} = (2,3), \\vec{v} = (4,1)"} />{" "}
            <br /> <br />
            តាមរូបមន្ត៖{" "}
            <InlineMath math="\vec{u} \cdot \vec{v} = \vec{v} \cdot \vec{u}" />
            <br />
            <br />
            នាំឲ៖{" "}
            <InlineMath
              math={"\\vec{u} \\cdot \\vec{v} = (2)(4)+(3)(1)"}
            />{" "}
            <br /> <br />
            ដូច្នេះ <InlineMath math={"\\vec{v} \\cdot \\vec{u} =11"} /> ឯកតា
          </>
        ),
      },
      {
        title: "ខ. ការេ៖",
        content: (
          <>
            គេមាន <InlineMath math={"\\vec{u} = (3,4)"} /> <br /><br />
            តាមរូបមន្ត៖{" "}
            <InlineMath math="\vec{u} \cdot \vec{u} = |\vec{u}|^2 = u^2" />
            <br />
            <br />
            នាំឲ៖{" "}
            <InlineMath
              math={"\\vec{u} \\cdot \\vec{u} = (3)(3)+(4)(4)"}
            />{" "}
            <br /> <br />
            ដូចនេះ <InlineMath math={"\\vec{u} \\cdot \\vec{u} =25 "} /> ឯកតា
          </>
        ),
      },
      {
        title: "គ. បូកសមាមាត្រ៖",
        content: (
          <>
            គេមាន{" "}
            <InlineMath math={"\\vec{u} = (1,2), \\vec{v} = (3,4), k=5"} />{" "}
            <br /> <br />
            តាមរូបមន្ត៖{" "}
            <InlineMath
              math="\vec{u} \cdot (k\vec{v}) = k(\vec{u} \cdot \vec{v})"
            />
            <br />
            <br />
            នាំឲ៖{" "}
            <InlineMath
              math={"k(\\vec{u} \\cdot \\vec{v}) = (1)(15)+(2)(20)"}
            />
            <br /> <br />
            <InlineMath math={"k(\\vec{u} \\cdot \\vec{v}) = 15+40"} /> <br />
            <br />
            ដូចនេះ <InlineMath
              math={"k(\\vec{u} \\cdot \\vec{v}) = 55"}
            />{" "}
            ឯកតា
          </>
        ),
      },
      {
        title: "ឃ. បែងចែកលើបូក៖",
        content: (
          <>
            គេមាន{" "}
            <InlineMath
              math={"\\vec{u} = (2,1), \\vec{v} = (1,3), \\vec{w} = (4,2)"}
            />{" "}
            <br /><br />
            តាមរូបមន្ត៖{" "}
            <InlineMath
              math="\vec{u} \cdot (\vec{v} + \vec{w}) = \vec{u} \cdot \vec{v} + \vec{u} \cdot \vec{w}"
            />{" "}
            <br />
            <br />
            នាំឲ៖{" "}
            <InlineMath
              math={
                "\\vec{u} \\cdot (\\vec{v}+\\vec{w}) = (2,1) \\cdot (5,5) = (2)(5)+(1)(5)=10+5=15"
              }
            />{" "}
            <br /> <br />
            ដូចនេះ{" "}
            <InlineMath
              math={"\\vec{u} \\cdot (\\vec{v}+\\vec{w}) = 15"}
            />{" "}
            ឯកតា
          </>
        ),
      },
      {
        title: "ង. រូបមន្តបូក៖",
        content: (
          <>
            គេមាន <InlineMath math={"\\vec{u} = (1,2), \\vec{v} = (3,4)"} />{" "}
            <br /> <br />
            តាមរូបមន្ត៖{" "}
            <InlineMath
              math="(\vec{u} ± \vec{v})^2 = u^2 ± 2\vec{u}\vec{v} + v^2"
            />
            <br />
            <br />
            នាំឲ៖ <InlineMath
              math={"(\\vec{u}+\\vec{v})^2 = (4)^2+(6)^2"}
            />{" "}
            <br /> <br />
            ដូចនេះ <InlineMath math={"(\\vec{u}+\\vec{v})^2 = 52"} /> ឯកតា
          </>
        ),
      },
      {
        title: "ច. ផ្សំបញ្ចូល៖",
        content: (
          <>
            គេមាន <InlineMath math={"\\vec{u} = (5,1), \\vec{v} = (2,3)"} />{" "}
            <br /> <br />
            តាមរូបមន្ត៖{" "}
            <InlineMath
              math="(\vec{u} + \vec{v}) \cdot (\vec{u} - \vec{v}) = |\vec{u}|^2 - |\vec{v}|^2"
            />{" "}
            <br /> <br />
            នាំឲ៖{" "}
            <InlineMath
              math={
                "(\\vec{u}+\\vec{v})\\cdot(\\vec{u}-\\vec{v})=(7)(3)+(4)(-2)"
              }
            />{" "}
            <br /> <br />
            ដូចនេះ{" "}
            <InlineMath
              math={"(\\vec{u}+\\vec{v})\\cdot(\\vec{u}-\\vec{v})=13"}
            />{" "}
            ឯកតា
          </>
        ),
      },
    ],
  },
  {
    type: "tip",
    title: "វ៉ិចទ័រពីរស្របគ្នា និងវ៉ិចទ័រពីរកែងគ្នា",
    content: (
      <>
        <img src="/vector_parallel.png" alt="2D Vector" />
        <b>វ៉ិចទ័រពីរស្របគ្នា (AB || CD)</b>
        <br />
        <br />
        <p>
          វ៉ិចទ័រពីរ AB និង CD ជាវ៉ិចទ័រស្របគ្នា កាលណាមានចំនួនថេរ k មួយ
          ដែលផ្ទៀងផ្ទាត់ទំនាក់ទំនង
        </p>
        <b>
          <BlockMath math="\overrightarrow{AB} = k\overrightarrow{CD}" />
        </b>
        <img src="/vector_perpendicular.png" alt="2D Vector" />
        <b>វ៉ិចទ័រពីរកែងគ្នា (AB ⊥ CD)</b>
        <br />
        <br />
        វ៉ិចទ័រពីរ <InlineMath math="\overrightarrow{AB}= (x, y, z)" />{" "}
        និង <InlineMath math="\overrightarrow{CD}= (x', y', z')" />{" "}
        ជាវ៉ិចទ័រកែងគ្នា កាលណាផលគុណស្កាលែស្មើរសូន្យ
        <br />
        <b>
          <BlockMath math="xx' + yy' + zz' = 0" />
        </b>
      </>
    ),
  },
  {
    type: "hint",
    title: "កំណត់សំគាល់",
    content: (
      <div className="ml-2">
        • ផលគុណស្កាលែគឺជាផលគុណរវាងវ៉ិចទ័រ ២ គឺ{" "}
        <InlineMath math={"\\vec{u} \\cdot \\vec{v}"} />។ <br />
        • ប្រវែងវ៉ិចទ័រ <InlineMath math={"|\\vec{u}|"} /> និង{" "}
        <InlineMath math={"|\\vec{v}|"} /> ត្រូវបានគណនាដោយប្រើរូបមន្ត{" "}
        <InlineMath math={"|\\vec{u}| = \\sqrt{x^2 + y^2 + z^2}"} />។ <br />•
        ការគណនាផលគុណស្កាលែអាចប្រើបានសម្រាប់រកមុំ <InlineMath math={"\\theta"} />
        ។
      </div>
    ),
  },

  // Cross Product Section
  {
    type: "definition",
    title: "ផលគុណនៃពីរវ៉ិចទ័រ",
    content: <> </>,
  },
  {
    type: "tip",
    title: "ផលគុណនៃពីរវ៉ិចទ័រ (AB × CD)",
    content: (
      <>
        បើមានវ៉ិចទ័រពីរ <InlineMath math={"\\vec{AB} = (x, y, z)"} /> និង{" "}
        <InlineMath math={"\\vec{CD} = (x', y', z')"} /> នោះ
        <BlockMath math={String.raw`\vec{AB}\times\vec{CD}`} />
        <BlockMath
          math={String.raw`= \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ x & y & z \\ x' & y' & z' \end{vmatrix}`}
        />
        <BlockMath
          math={String.raw`= \begin{vmatrix} y & z \\ y' & z' \end{vmatrix}\vec{i} - \begin{vmatrix} x & z \\ x' & z' \end{vmatrix}\vec{j} + \begin{vmatrix} x & y \\ x' & y' \end{vmatrix}\vec{k}`}
        />
        <BlockMath
          math={String.raw`= (yz' - zy')\vec{i} - (xz' - zx')\vec{j} + (xy' - yx')\vec{k}`}
        />
      </>
    ),
  },
  {
    type: "tip",
    title: "លក្ខណៈផលគុណនៃពីរវ៉ិចទ័រ",
    content: (
      <>
        បើ <InlineMath math={"\\vec{u}, \\vec{v} និង \\vec{w}"} />{" "}
        ជាវ៉ិចទ័រនៅក្នុងលំហ​​និង c ជាចំនួនពិត នោះគេបាន៖
        <BlockMath math="\vec{u} \times \vec{v} = - (\vec{v} \times \vec{u})" />
        <BlockMath
          math="\vec{u} \times (\vec{v} + \vec{w}) = (\vec{u} \times \vec{v}) + (\vec{u} \times \vec{w})"
        />
        <BlockMath
          math="c(\vec{u} \times \vec{v}) = (c\vec{u}) \times \vec{v} = \vec{u} \times (c\vec{v})"
        />
        <BlockMath math="\vec{u} \times \vec{0} = \vec{0} \times \vec{u} = \vec{0}" />
        <BlockMath math="\vec{u} \times \vec{u} = \vec{0}" />
        <BlockMath
          math="\vec{u} \cdot (\vec{v} \times \vec{w}) = (\vec{u} \times \vec{v}) \cdot \vec{w}"
        />
      </>
    ),
  },
  {
    type: "example",
    question: (
      <>
        <InlineMath math={"AB = (1,2,3)"} /> និង{" "}
        <InlineMath math={"CD = (4,5,6)"} /> <br />
        គណនា <InlineMath math={"AB \\times CD"} /> ដោយប្រើ determinant:
      </>
    ),
    steps: [
      {
        title: "គណនាផលគុណ AB×CD ",
        content: (
          <>
            <InlineMath
              math={String.raw`\vec{AB}\times\vec{CD} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 1 & 2 & 3 \\ 4 & 5 & 6 \end{vmatrix}`}
            />{" "}
            <br />
            <br />
            <InlineMath
              math={String.raw`= \begin{vmatrix} 2 & 3 \\ 5 & 6 \end{vmatrix}\vec{i} - \begin{vmatrix} 1 & 3 \\ 4 & 6 \end{vmatrix}\vec{j} + \begin{vmatrix} 1 & 2 \\ 4 & 5 \end{vmatrix}\vec{k}`}
            />
            <br />
            <br />
            <InlineMath
              math={String.raw`= (2 \times 6 - 3 \times 5)\vec{i} - (1 \times 6 - 3 \times 4)\vec{j} + (1 \times 5 - 2 \times 4)\vec{k}`}
            />{" "}
            <br />
            <br />
            <InlineMath
              math={String.raw`= (-3)\vec{i} + 6\vec{j} - 3\vec{k}`}
            />
          </>
        ),
      },
    ],
    answer: (
      <InlineMath
        math={String.raw`\vec{AB}\times\vec{CD} = -3\vec{i} + 6\vec{j} - 3\vec{k}`}
      />
    ),
  },
  {
    type: "warning",
    content: (
      <>
        • កុំភ្លេច នៅពេលគណនាវិចទ័រ <InlineMath math={"\\overrightarrow{AB}"} />{" "}
        ត្រូវយក <InlineMath math={"x_2 - x_1"} /> និង{" "}
        <InlineMath math={"y_2 - y_1"} /> ត្រឹមត្រូវ។
        <br />
        • ការបញ្ចូលតម្លៃខុសអាចបណ្តាលឲ្យលទ្ធផលខុស។ <br />
        • ពេលគណនាត្រូវប្រុងប្រយត្ន័លើសញ្ញា និងតម្លៃអវិជ្ជមាន។
        <br />
      </>
    ),
  },

  // Triple Product Section
  {
    type: "definition",
    title: "ផលគុណចម្រុះនៃបីវ៉ិចទ័រក្នុងលំហ",
    content: (
      <>
        បើមានវ៉ិចទ័រ <InlineMath math={"\\vec{u}, \\vec{v} និង \\vec{w}"} />{" "}
        ក្នុងលំហនោះ
        <br />
        ផលគុណចម្រុះនៃបីវ៉ិចទ័រក្នុងលំហរ​​{" "}
        <InlineMath math={"\\vec{u}, \\vec{v} និង \\vec{w}"} />
        គឺជាចំនួនពិតកំណត់ដោយ{" "}
        <InlineMath math="\vec{u} \cdot (\vec{v} \times \vec{w})" /> <br />
      </>
    ),
  },
  {
    type: "tip",
    title: "លក្ខណៈផលគុណចម្រុះនៃបីវ៉ិចទ័រ",
    content: (
      <>
        បើមានវ៉ិចទ័រ <InlineMath math={"u = (u_1, u_2, u_3)"} />,{" "}
        <InlineMath math={"v = (v_1, v_2, v_3)"} /> និង{" "}
        <InlineMath math={"w = (w_1, w_2, w_3)"} />
        <br />
        នោះគេបាន៖
        <BlockMath math={String.raw`\vec{u}\cdot(\vec{v} \times \vec{w})`} />
        <BlockMath
          math={String.raw`= \begin{vmatrix} u_1 & u_2 & u_3 \\ v_1 & v_2 & v_3 \\ w_1 & w_2 & w_3 \end{vmatrix}`}
        />
        <BlockMath
          math={String.raw`= \begin{vmatrix} v_2 & v_3 \\ w_2 & w_3 \end{vmatrix}{u_1} - \begin{vmatrix} v_1 & v_3 \\ w_1 & w_3 \end{vmatrix}{u_2} + \begin{vmatrix} v_1 & v_2 \\ w_1 & w_2 \end{vmatrix}{u_3}`}
        />
        <BlockMath
          math={String.raw`= (v_2w_3 - w_2v_3){u_1} - (v_1w_3 - w_1v_3){u_2} + (v_1w_2 - w_1v_2){u_3}`}
        />
      </>
    ),
  },
  {
    type: "tip",
    title: "គន្លឹះសំខាន់",
    content: (
      <>
        <ul>
          <li>
            គណនា <InlineMath math={"v \\times w"} /> ជាមុន បន្ទាប់មកគុណ ជាមួយ{" "}
            <InlineMath math={"u"} /> (ងាយគិត)
          </li>
          <li>
            ឬប្រើ determinant ហើយពង្រីកតាមជួរទី១ ជាលំនាំ{" "}
            <InlineMath math={"(+,-,+)"} /> ដូចដែលបានបង្ហាញ
          </li>
        </ul>
      </>
    ),
  },
  {
    type: "hint",
    title: "កំណត់សំគាល់",
    content: (
      <div className="ml-2">
        • ផលគុណស្កាលែគឺជាផលគុណរវាងវ៉ិចទ័រ ២ គឺ{" "}
        <InlineMath math={"\\vec{u} \\cdot \\vec{v}"} />។ <br />
        • ប្រវែងវ៉ិចទ័រ <InlineMath math={"|\\vec{u}|"} /> និង{" "}
        <InlineMath math={"|\\vec{v}|"} /> ត្រូវបានគណនាដោយប្រើរូបមន្ត{" "}
        <InlineMath math={"|\\vec{u}| = \\sqrt{x^2 + y^2 + z^2}"} />។ <br />•
        ការគណនាផលគុណស្កាលែអាចប្រើបានសម្រាប់រកមុំ <InlineMath math={"\\theta"} />
        ។
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <>
        គេមានវ៉ិចទ័រ <InlineMath math={"u = (1,2,3)"} />,{" "}
        <InlineMath math={"v = (0,1,4)"} />,{" "}
        <InlineMath math={"w = (2,-1,1)"} />។<br />
        គណនា <InlineMath math={"u \\cdot (v \\times w)"} />
      </>
    ),
    steps: [
      {
        title: "គណនា v × w",
        content: (
          <>
            យើងមាន <InlineMath math={"v = (0,1,4), w = (2,-1,1)"} /> <br />
            <br />
            នាំឲ៖{" "}
            <InlineMath
              math={String.raw`v \times w = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 0 & 1 & 4 \\ 2 & -1 & 1 \end{vmatrix}`}
            />
            <br />
            <br />
            <InlineMath
              math={String.raw`= ((1)(1) - (4)(-1))\vec{i} - ((0)(1) - (4)(2))\vec{j} + ((0)(-1) - (1)(2))\vec{k}`}
            />
            <br />
            <br />
            <InlineMath
              math={String.raw`= (1 + 4)\vec{i} - (0 - 8)\vec{j} + (0 - 2)\vec{k}`}
            />
            <br />
            <br />
            <InlineMath math={String.raw`= 5\vec{i} + 8\vec{j} - 2\vec{k}`} />
          </>
        ),
      },
      {
        title: "គណនា u · (v × w)",
        content: (
          <>
            យើងមាន <InlineMath math={"u = (1,2,3), v \\times w = (5,8,-2)"} />{" "}
            <br />
            <br />
            នាំឲ៖{" "}
            <InlineMath
              math={String.raw`u \cdot (v \times w) = (1)(5) + (2)(8) + (3)(-2)`}
            />
            <br />
            <br />
            ដូចនេះ <InlineMath math={"u \\cdot (v \\times w) = 15"} />
          </>
        ),
      },
    ],
    answer: (
      <>
        <InlineMath math={"u \\cdot (v \\times w) = 15"} />
      </>
    ),
  },
  {
    type: "exercise",
    questions: [
      {
        id: "1",
        question: (
          <>
            គេមានវ៉ិចទ័រ <InlineMath math={"u = (1,2,3)"} />,{" "}
            <InlineMath math={"v = (0,1,4)"} />,{" "}
            <InlineMath math={"w = (2,-1,1)"} />។<br />
            តើ
            <InlineMath math={"u \\cdot (v \\times w)"} />
            ស្មើប៉ុន្មាន?
          </>
        ),
        options: ["15", "12", "18", "21"],
        correctAnswer: "15",
      },
      {
        id: "2",
        question: (
          <>
            គេមានវ៉ិចទ័រ <InlineMath math={"u = (1,2,3)"} />,{" "}
            <InlineMath math={"v = (4,5,6)"} />។<br />
            តើកូអរដោនេនៃវិចទ័រ AB ស្មើប៉ុន្មាន?
          </>
        ),
        options: ["(3, -3, 2)", "(4, 2, 3)", "(3, 4, -2)", "(3, 4, 2)"],
        correctAnswer: "(3, 4, 2)",
      },
      {
        id: "3",
        question: (
          <>
            គេមានវ៉ិចទ័រ <InlineMath math={"A = (2,2,3)"} />,{" "}
            <InlineMath math={"C = (4,5,6)"} />។<br />
            តើកូអរដោនេនៃវ៉ិចទ័រចំណុចកណ្ដាលនៃ AC​​ស្មើប៉ុន្មាន?
          </>
        ),
        options: ["(3, -4, 2)", "(3, 4, 4)", "(3, 4, -2)", "(3, 4, 3)"],
        correctAnswer: "(3, 4, 4)",
      },
    ],
  },
];

// Simulate DB fetch with serialization/deserialization
const jsonV3 = serializeTopicContentV3(content);
const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

export default function TwoDVectorCoordinates() {
  return <ContentRendererV3 content={restoredContent} />;
}