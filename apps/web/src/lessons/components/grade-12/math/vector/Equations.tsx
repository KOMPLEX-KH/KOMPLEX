"use client";

import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  serializeTopicContentV3,
  deserializeTopicContentV3,
} from "@/components/pages/docs/utils/ContentSerializerV2";
import { InlineMath, BlockMath } from "react-katex";

// ===== TOPIC CONTENT DATA =====

const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "សមីការប៉ារ៉ាម៉ែត្រនៃបន្ទាត់ និង សមីការឆ្លុះនៃបន្ទាត់",
    content: (
      <>
        បន្ទាត់ L កាត់តាមចំណុច <InlineMath math="A(x_0, y_0, z_0)" />{" "}
        ហើយស្របនឹងវ៉ិចទ័រប្រាប់ទិស <InlineMath math="\vec{u} = (a, b, c)" />{" "}
        នោះគេបាន៖
      </>
    ),
  },
  {
    type: "imageExplanation",
    src: "/parametric.png",
    imageAlt: "2D Vector",
    explanation: (
      <>
        <BlockMath
          math={String.raw`សមីការប៉ារ៉ាម៉ែត្រនៃបន្ទាត់ L : \begin{cases} x = x_0 + at \\ y = y_0 + bt \\ z = z_0 + ct \end{cases} \quad , t \in \mathbb{R}`}
        />
        <br />
        <BlockMath
          math={String.raw`សមីការឆ្លុះនៃបន្ទាត់ L : \frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}`}
        />
        <br />
        t ជា parameter (អថេរតំណាង) , (a, b, c ជាចំនួនពិត)
      </>
    ),
  },
  {
    type: "hint",
    content: (
      <div className="ml-2">
        • បន្ទាត់ L កំណត់ដោយចំណុច <InlineMath math="A(x_0, y_0, z_0)" />{" "}
        និងវ៉ិចទ័រទិសដៅ <InlineMath math="\vec{u} = (a, b, c)" />។ <br />
        • សមីការប៉ារ៉ាម៉ែត្របង្ហាញពីទីតាំងនៃបន្ទាត់ដោយប្រើប៉ារ៉ាម៉ែត្រ t។ <br />
        • រាល់តម្លៃ <InlineMath math="t" /> ផ្តល់ចំណុចមួយលើបន្ទាត់។
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <>
        រកសមីការប៉ារ៉ាម៉ែត្រ និងសមីការឆ្លុះនៃបន្ទាត់ L ដែលកាត់តាមចំណុច{" "}
        <InlineMath math="A(1,2,3)" />
        ហើយស្របនឹងវ៉ិចទ័រប្រាប់ទិស <InlineMath math="\vec{u} = (4,-5,6)" />។
      </>
    ),
    steps: [
      {
        title: "រកសមីការប៉ារ៉ាម៉ែត្រ",
        content: (
          <>
            យើងដឹងថា L កាត់តាមចំណុច A(1, 2, 3) ហើយស្របនឹង វ៉ិចទ័រប្រាប់ទិស{" "}
            <InlineMath math="\vec{u} = (a,b,c)" />
            <br />
            <br />
            យើងបាន៖ <InlineMath math="\vec{u} = (a, b, c) = (4, -5, 6)" />,{" "}
            <InlineMath math="A(x_0, y_0, z_0)=(1, 2, 3)" />
            <br />
            <br />
            <p>
              <InlineMath
                math={String.raw`សមីការប៉ារ៉ាម៉ែត្រនៃបន្ទាត់ L គឺ៖ \begin{cases} x = 1 + 4t \\ y = 2 - 5t \\ z = 3 + 6t \end{cases} \quad , t \in \mathbb{R}`}
              />
            </p>
          </>
        ),
      },
      {
        title: "រកសមីការឆ្លុះ",
        content: (
          <>
            <p>
              <InlineMath
                math={String.raw`គេបាន៖ \frac{x - 1}{4} = \frac{y - 2}{-5} = \frac{z - 3}{6}`}
              />
            </p>
          </>
        ),
      },
    ],
    answer: (
      <>
        ដូច្នេះសមីការប៉ារ៉ាម៉ែត្រនៃបន្ទាត់ L គឺ៖
        <InlineMath
          math={String.raw`\begin{cases} x = 1 + 4t \\ y = 2 - 5t \\ z = 3 + 6t \end{cases} \quad , t \in \mathbb{R}`}
        />
        និងសមីការឆ្លុះនៃបន្ទាត់ L គឺ៖
        <InlineMath
          math={String.raw`\frac{x - 1}{4} = \frac{y - 2}{-5} = \frac{z - 3}{6}`}
        />
      </>
    ),
  },
  {
    type: "definition",
    title: "សមីការប្លង់",
    content: (
      <>
        ប្លង់ P កាត់តាមចំណុច <InlineMath math="A(x_0, y_0, z_0)" />{" "}
        និងមានវ៉ិចទ័រណរម៉ាល់ <InlineMath math="\vec{n} = (a, b, c)" />{" "}
        នោះគេបាន៖
      </>
    ),
  },
  {
    type: "imageExplanation",
    src: "/plane.png",
    imageAlt: "2D Vector",
    explanation: (
      <>
        <b>សមីការប្លង់ P :</b>
        <BlockMath
          math={String.raw`a(x - x_0) + b(y - y_0) + c(z - z_0) = 0`}
        />
        <br />
        <b>សមីការប្លង់ទូទៅ:</b>
        <BlockMath math={String.raw`ax + by + cz + d = 0`} />
        <b>ដែល</b> <BlockMath math="d = -(ax_0 + by_0 + cz_0)" />
      </>
    ),
  },
  {
    type: "hint",
    content: (
      <div className="ml-2">
        • វ៉ិចទ័រណរម៉ាល់ ឬ វ៉ិចទ័រកែង <InlineMath math="\vec{n} = (a, b, c)" />។{" "}
        <br />
        • វ៉ិចទ័រណរម៉ាល់ <InlineMath math="\vec{n} = (a, b, c)" />{" "}
        ជាវ៉ិចទ័រដែលបង្ហាញពីទិសដៅនៃប្លង់។ <br />
        • ប្លង់ P កំណត់ដោយចំណុច <InlineMath math="A(x_0, y_0, z_0)" />{" "}
        និងវ៉ិចទ័រប្រាប់ទិស <InlineMath math="\vec{n} = (a, b, c)" />�। <br />
        • សមីការប្លង់ទូទៅអាចបង្ហាញពីទិសដៅនៃប្លង់បាន។
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <>
        រកសមីការប្លង់ P ដែលកាត់តាមចំណុច <InlineMath math="A(1, 2, 3)" />{" "}
        និងមានវ៉ិចទ័រណរម៉ាល់ <InlineMath math="\vec{n} = (4, -5, 6)" />។
      </>
    ),
    steps: [
      {
        title: "រកសមីការប្លង់",
        content: (
          <>
            យើងដឹងថា P កាត់តាមចំណុច A(1, 2, 3) និងមានវ៉ិចទ័រណរម៉ាល់{" "}
            <InlineMath math="\vec{n} = (4, -5, 6)" />។ <br />
            <div className="mt-4">
              នាំឲ៖ <InlineMath math="\vec{n} = (a, b, c) = (4, -5, 6)" />{" "}
            </div>
            <div className="mt-4">
              <InlineMath math="A(x_0, y_0, z_0)=(1, 2, 3)" />
              <br />
            </div>
            <div className="mt-4">
              <p>
                សមីការប្លង់ P គឺ៖{" "}
                <InlineMath
                  math={String.raw`4(x - 1) - 5(y - 2) + 6(z - 3) = 0`}
                />
              </p>
            </div>
          </>
        ),
      },
    ],
    answer: (
      <>
        ដូច្នេះសមីការប្លង់ P គឺ៖
        <InlineMath math={String.raw`4(x - 1) - 5(y - 2) + 6(z - 3) = 0`} />
      </>
    ),
  },
  {
    type: "definition",
    title: "សមីការស្វ៊ែ",
    content: (
      <>
        បើស្វ៊ែ S មានផ្ចិត <InlineMath math="I(x_0, y_0, z_0)" /> និងមានកាំ{" "}
        <InlineMath math="r" /> នោះគេបាន៖
      </>
    ),
  },
  {
    type: "imageExplanation",
    src: "/spherical.png",
    imageAlt: "2D Vector",
    explanation: (
      <>
        <b>សមីការស្វ៊ែ S :</b>
        <BlockMath
          math={String.raw`(x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2 = r^2`}
        />
        <br />
        <b>សមីការទូទៅនៃស្វ៊ែ S :</b>
        <BlockMath
          math={String.raw`x^2 + y^2 + z^2 - 2x_0 x - 2y_0 y - 2z_0 z + k = 0`}
        />
        <br />
        <b>ដែល</b> <BlockMath math="k = x_0^2 + y_0^2 + z_0^2 - r^2" />
      </>
    ),
  },
  {
    type: "hint",
    content: (
      <div className="ml-2">
        • ស្វ៊ែ S មានផ្ចិត <InlineMath math="I(x_0, y_0, z_0)" /> និងមានកាំ{" "}
        <InlineMath math="r" />។ <br />
        • ពាក្យ x<sup>2</sup>, y<sup>2</sup>, និង z<sup>2</sup>{" "}
        ត្រូវតែមានមេគុណស្មើគ្នា និងជាវិជ្ជមាន (ជាទូទៅគឺ 1)។ <br />
        • វាមិនមានពាក្យលាយបញ្ចូលគ្នាដូចជា xy, yz, ឬ zx ទេ។ <br />
        • វាគឺជាសមីការដឺក្រេទីពីរនៃអថេរបី (x, y, z)។
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <>រកសមីការស្វ៊ែ S ដែលមានផ្ចិត I(1, 2, 3) និងមានកាំ r = 4។</>
    ),
    steps: [
      {
        title: "រកសមីការស្វ៊ែ",
        content: (
          <>
            <div>
              យើងដឹងថា S មានផ្ចិត I(1, 2, 3) និងមានកាំ r = 4។
              <br />
              <br />
            </div>
            នាំឲ៖ <InlineMath math="I(x_0, y_0, z_0)=(1, 2, 3)" />
            <br />
            <br />
            <p>
              សមីការស្វ៊ែ S គឺ៖{" "}
              <InlineMath
                math={String.raw`(x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 16`}
              />
            </p>
          </>
        ),
      },
    ],
    answer: (
      <>
        ដូច្នេះសមីការស្វ៊ែ S គឺ៖
        <InlineMath math={String.raw`(x - 1)^2 + (y - 2)^2 + (z - 3)^2 = 16`} />
      </>
    ),
  },
  {
    type: "definition",
    title: "ចម្ងាយពីរចំណុច",
    content: <></>,
  },
  {
    type: "tip",
    content: (
      <>
        <b>• ចម្ងាយពីរចំណុចមួយទៅចំណុចមួយក្នុងលំហ</b>
        <br />
        ចម្ងាយពីចំណុច <InlineMath math="A(x_1, y_1, z_1)" /> ទៅ{" "}
        <InlineMath math="B(x_2, y_2, z_2)" /> ក្នុងលំហគឺ៖
        <BlockMath
          math="d(A,B) = |\overrightarrow{AB}| = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}"
        />
        <br />
        <b>• ចម្ងាយពីចំណុចទៅប្លង់</b>
        <br />
        បើប្លង់ <InlineMath math="P" /> មានសមីការ{" "}
        <InlineMath math="ax + by + cz + d = 0" /> នោះចម្ងាយពីចំណុច{" "}
        <InlineMath math="A(x_0, y_0, z_0)" /> ទៅប្លង់ P គឺ៖
        <BlockMath
          math={String.raw`d = \frac{|a x_0 + b y_0 + c z_0 + d|}{\sqrt{a^2 + b^2 + c^2}}`}
        />
        <br />
        <b>• ចម្ងាយពីរចំណុចមួយទៅបន្ទាត់មួយក្នុងលំហ</b> <br />
        បើបន្ទាត់ <InlineMath math="L" /> ស្របនឹងវ៉ិចទ័រ{" "}
        <InlineMath math="\vec{u}" /> និង <InlineMath math="M \in L" />{" "}
        ហើយ <InlineMath math="A \notin L" /> នោះយើងបាន៖
        <BlockMath
          math={String.raw`d(A, L) = \frac{|\overrightarrow{MA} \times \vec{u}|}{|\vec{u}|}`}
        />
        <br />
        <b>• ចម្ងាយរវាងប្លង់ពីរស្របគ្នា</b>
        <br />
        បើប្លង់ <InlineMath math="P_1" /> និង <InlineMath math="P_2" />{" "}
        ស្របគ្នា ហើយ <InlineMath math="A \in P_1" /> និង{" "}
        <InlineMath math="B \in P_2" /> នោះចម្ងាយរវាងប្លង់ពីរស្របគ្នាគឺ៖
        <BlockMath math={String.raw`d(P_1,P_2) = d(A,P_2) = d(B,P_1)`} />
      </>
    ),
  },
  {
    type: "hint",
    content: (
      <div className="ml-2">
        • ចម្ងាយគឺជាអត្រារវាងចំណុចនិងបន្ទាត់។ <br />
        • អាចប្រើសមីការចម្ងាយដើម្បីរកចម្ងាយពីចំណុចទៅប្លង់។
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <>រកចម្ងាយពីចំណុច A(1, 2, 3) ទៅប្លង់ P: 2x - 3y + z + 4 = 0។</>
    ),
    steps: [
      {
        title: "រកចម្ងាយពីចំណុចទៅប្លង់",
        content: (
          <>
            យើងអាចប្រើសមីការចម្ងាយពីចំណុចទៅប្លង់ដើម្បីរកចម្ងាយពីចំណុច A(1, 2, 3)
            ទៅប្លង់ P: 2x - 3y + z + 4 = 0។
            <br />
            <br />
            <p>
              តាមសមីការចម្ងាយពីចំណុច A ទៅប្លង់ P ៖
              <InlineMath
                math={String.raw`d = \frac{|a x_0 + b y_0 + c z_0 + d|}{\sqrt{a^2 + b^2 + c^2}}`}
              />
            </p>
            <p>ក្នុងករណីនេះ:</p>
            <br />
            <ul>
              <li>
                <InlineMath math="x_0 = 1, y_0 = 2, z_0 = 3" />
              </li>
              <li>
                <InlineMath math="a = 2, b = -3, c = 1, d = 4" />
              </li>
            </ul>
            <br />
            <p>
              គេបាន៖{" "}
              <InlineMath
                math={String.raw`d = \frac{|2(1) - 3(2) + 1(3) + 4|}{\sqrt{2^2 + (-3)^2 + 1^2}}`}
              />
            </p>
            <br />
            <p>
              <InlineMath
                math={String.raw` = \frac{|2 - 6 + 3 + 4|}{\sqrt{4 + 9 + 1}}`}
              />
            </p>
            <br />
            <p>
              <InlineMath math={String.raw` = \frac{|3|}{\sqrt{14}}`} />
            </p>
          </>
        ),
      },
    ],
    answer: (
      <>
        ដូច្នេះចម្ងាយពីចំណុច A ទៅប្លង់ P គឺ៖
        <InlineMath math={String.raw`d = \frac{3}{\sqrt{14}}`} />
      </>
    ),
  },
  {
    type: "example",
    question: (
      <>
        គេមានវ៉ិចទ័រ <InlineMath math="u = (1,2,3)" />,{" "}
        <InlineMath math="v = (0,1,4)" />, <InlineMath math="w = (2,-1,1)" />។
        <br />
        គណនា <InlineMath math="u \cdot (v \times w)" />
      </>
    ),
    steps: [
      {
        title: "គណនា v × w",
        content: (
          <>
            យើងមាន <InlineMath math="v = (0,1,4), w = (2,-1,1)" /> <br />
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
            <InlineMath
              math={String.raw`= 5\vec{i} + 8\vec{j} - 2\vec{k}`}
            />
          </>
        ),
      },
      {
        title: "គណនា u · (v × w)",
        content: (
          <>
            យើងមាន <InlineMath math="u = (1,2,3), v \times w = (5,8,-2)" />{" "}
            <br />
            <br />
            នាំឲ៖{" "}
            <InlineMath
              math={String.raw`u \cdot (v \times w) = (1)(5) + (2)(8) + (3)(-2)`}
            />
            <br />
            <br />
            ដូចនេះ <InlineMath math="u \cdot (v \times w) = 15" />
          </>
        ),
      },
    ],
    answer: (
      <>
        <InlineMath math="u \cdot (v \times w) = 15" />
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
            គេមានវ៉ិចទ័រ <InlineMath math="u = (1,2,3)" />,{" "}
            <InlineMath math="v = (0,1,4)" />, <InlineMath math="w = (2,-1,1)" />។
            <br />
            តើ <InlineMath math="u \cdot (v \times w)" /> ស្មើប៉ុន្មាន?
          </>
        ),
        options: ["15", "12", "18", "21"],
        correctAnswer: "15",
      },
      {
        id: "2",
        question: (
          <>
            គេមានវ៉ិចទ័រ <InlineMath math="u = (1,2,3)" />,{" "}
            <InlineMath math="v = (4,5,6)" />។
            <br />
            តើកូអរដោនេនៃវ៉ិចទ័រ AB ស្មើប៉ុន្មាន?
          </>
        ),
        options: ["(3, -3, 2)", "(4, 2, 3)", "(3, 4, -2)", "(3, 4, 2)"],
        correctAnswer: "(3, 4, 2)",
      },
      {
        id: "3",
        question: (
          <>
            គេមានវ៉ិចទ័រ <InlineMath math="A = (2,2,3)" />,{" "}
            <InlineMath math="C = (4,5,6)" />។
            <br />
            តើកូអរដោនេនៃវ៉ិចទ័រចំណុចកណ្ដាលនៃ AC ស្មើប៉ុន្មាន?
          </>
        ),
        options: ["(3, -4, 2)", "(3, 4, 4)", "(3, 4, -2)", "(3, 4, 3)"],
        correctAnswer: "(3, 4, 4)",
      },
    ],
  },
];

// Simulate DB fetch
const jsonV3 = serializeTopicContentV3(content);
const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

// ===== MAIN COMPONENT =====

export default function Equations() {
  return <ContentRendererV3 content={restoredContent} />;
}