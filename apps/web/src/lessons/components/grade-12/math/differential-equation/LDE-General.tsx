// import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
// import { TipBox } from "@/components/pages/docs/boxes/TipBox";
// import { HintBox } from "@/components/pages/docs/boxes/HintBox";
// import { TopicContent } from "@/types/docs/topic";
// import { BlockMath, InlineMath } from "react-katex";
// import "katex/dist/katex.min.css";
// import { WarningBox } from "@/components/pages/docs/boxes/WarningBox";
// import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
// import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";

// const FirstTopicContent: TopicContent = {
//   definition: {
//     title: "សមីការឌីផេរ៉ងស្យែលអូម៉ូសែន",
//     content: (
//       <>
//         <div className="flex flex-col items-start">
//           <div className="flex items-center gap-3 flex-wrap w-full">
//             <p>
//               សមីការឌីផែរ៉ង់ស្សែលលីនេអែអូម៉ូសែនលំដាប់ n
//               មានមេគុណថេរគឺគ្រប់សមីការដែលមានទម្រង់{" "}
//             </p>
//             <BlockMath
//               math={`a_n y^{(n)} + a_{n-1} y^{(n-1)} + \\cdots + a_1 y' + a_0 y = 0  (E)`}
//             />
//             <p>ដែល​​</p>
//             <BlockMath math={`a_n , a_{n-1} \\cdots + a_1 + a_0 `} />
//             <p>ជាចំនួនថេរ។</p>
//           </div>
//         </div>
//       </>
//     ),
//   },
//   tip: {
//     title: "ជាទូទៅ",
//     content: (
//       <>
//         <p>សមីការឌីផែរ៉ង់ស្យែលលំដាប់ n មានទម្រង់៖</p>
//         <BlockMath math="a_n y^{(n)} + \cdots + a_1 y' + a_0 y = 0" />

//         <p>សមីការសម្គាល់៖</p>
//         <BlockMath math="a_n \lambda^n + \cdots + a_1 \lambda + a_0 = 0" />

//         <p>ប្រសិនបើឫសខុសគ្នា, ចម្លើយទូទៅ៖</p>
//         <BlockMath math="y = \sum_{i=1}^n c_i e^{\lambda_i x}" />

//         <p>ប្រសិនបើឫសស្មើគ្នា, ចម្លើយទូទៅមានរាង៖</p>
//         <div className="flex items-center gap-3 flex-wrap justify-center">
//           <BlockMath math="y = (c_1 + c_2 x + \cdots + c_k x^{k-1}) e^{\lambda x}" />
//           <BlockMath math=", c_i" />
//           <p>ជាចំនួនថេរ។</p>
//         </div>
//       </>
//     ),
//   },

//   example: {
//     question: [
//       <>
//         <div key={"q1"} className="flex flex-col items-start">
//           <div className="flex items-center gap-3 flex-wrap">
//             <p>ដោះស្រាយសមីការ</p>
//             <BlockMath math={"y^{(3)} - 6 y^{(2)} + 11 y^{(1)} - 6 y = 0"} />
//           </div>
//           <div className="flex items-center gap-3 flex-wrap">
//             <p>សមីការសម្គាល់៖</p>
//             <BlockMath
//               math={"\\lambda^{3} - 6 \\lambda^{2} + 11 \\lambda - 6 = 0"}
//             />
//           </div>
//           <div className="flex items-center gap-3 flex-wrap">
//             <BlockMath
//               math={"(\\lambda - 1)(\\lambda - 2)(\\lambda - 3) = 0"}
//             />
//             <BlockMath
//               math={"\\implies \\lambda_1 = 1, \\lambda_2 = 2, \\lambda_3 = 3"}
//             />
//           </div>
//           <div className="flex items-center gap-3 flex-wrap">
//             <p>ចម្លើយទូទៅគឺ :</p>
//             <BlockMath math={"y = c_1 e^{1 x} + c_2 e^{2 x} + c_3 e^{3 x}"} />
//           </div>
//         </div>
//       </>,
//     ],
//   },
//   exercise: {
//     questions: [
//       {
//         id: "q1",
//         question: (
//           <>
//             <div className="flex flex-col gap-3">
//               <p>ដោះស្រាយសមីការឌីផែរ៉ង់ស្យែលអូម៉ូសែន៖</p>
//               <div className="flex items-center justify-center gap-3 flex-wrap">
//                 <InlineMath math={"y^{(3)} - 6 y'' + 11 y' - 6 y = 0"} />
//               </div>
//             </div>
//           </>
//         ),
//         options: [
//           <InlineMath key="q1-o1" math={"y = A e^{x} + B e^{2x} + C e^{3x}"} />,
//           <InlineMath
//             key="q1-o2"
//             math={"y = A e^{-x} + B e^{-2x} + C e^{-3x}"}
//           />,
//           <InlineMath
//             key="q1-o3"
//             math={"y = A e^{3x} + B e^{6x} + C e^{9x}"}
//           />,
//           <InlineMath key="q1-o4" math={"y = (A + Bx) e^{x} + C e^{2x}"} />,
//         ],
//         correctAnswer: 2,
//       },
//       {
//         id: "q2",
//         question: (
//           <>
//             <div className="flex flex-col gap-3">
//               <p>ដោះស្រាយសមីការឌីផែរ៉ង់ស្យែលអូម៉ូសែន៖</p>
//               <div className="flex items-center justify-center gap-3 flex-wrap">
//                 <InlineMath math={"y^{(4)} - 5 y^{(3)} + 8 y'' - 4 y' = 0"} />
//               </div>
//             </div>
//           </>
//         ),
//         options: [
//           <InlineMath
//             key="q2-o1"
//             math={"y = A e^{x} + B e^{2x} + C e^{3x} + D e^{4x}"}
//           />,
//           <InlineMath
//             key="q2-o2"
//             math={"y = (A + Bx) e^{x} + (C + D x) e^{2x}"}
//           />,
//           <InlineMath
//             key="q2-o3"
//             math={"y = A e^{-x} + B e^{-2x} + C e^{-3x} + D e^{-4x}"}
//           />,
//           <InlineMath
//             key="q2-o4"
//             math={"y = A e^{x} + B x e^{x} + C e^{3x} + D e^{4x}"}
//           />,
//         ],
//         correctAnswer: 1,
//       },
//       {
//         id: "q3",
//         question: (
//           <>
//             <div className="flex flex-col gap-3">
//               <p>ដោះស្រាយសមីការឌីផែរ៉ង់ស្យែលអូម៉ូសែន៖</p>
//               <div className="flex items-center justify-center gap-3 flex-wrap">
//                 <InlineMath math={"y^{(3)} + 3 y'' + 3 y' + y = 0"} />
//               </div>
//             </div>
//           </>
//         ),
//         options: [
//           <InlineMath key="q3-o1" math={"y = (A + Bx + C x^{2}) e^{-x}"} />,
//           <InlineMath key="q3-o2" math={"y = A e^{x} + B e^{2x} + C e^{3x}"} />,
//           <InlineMath key="q3-o3" math={"y = (A + B x) e^{x} + C e^{x^{2}}"} />,
//           <InlineMath
//             key="q3-o4"
//             math={"y = A e^{-x} + B e^{-2x} + C e^{-3x}"}
//           />,
//         ],
//         correctAnswer: 3,
//       },
//     ],
//   },
//   hint: {
//     content: (
//       <>
//         <p>
//           💡 ដើម្បីដោះស្រាយសមីការឌីផែរ៉ង់ស្យែលអូម៉ូសែនលំដាប់ 3 ឬលើស,
//           ត្រូវកំណត់សមីការសម្គាល់ដោយដាក់សមីការដើមជាសមីការត្រីកោណមាត្រ។
//         </p>
//         <p>
//           💡 រកឫសនៃសមីការសម្គាល់ ហើយបញ្ចូលទៅក្នុងទម្រង់ចម្លើយទូទៅជាមួយចំនួនថេរ
//           A, B, C, ...។
//         </p>
//         <p>
//           💡 ប្រសិនបើឫសមានកម្រិតច្រើនជាង 2 និងមានឫសមេគុណដុប
//           ត្រូវបង្កើតពហុវិធីក្នុងចម្លើយទូទៅ ។
//         </p>
//       </>
//     ),
//   },

//   warning: {
//     content: (
//       <>
//         <p>កុំបំបែកចម្លើយទៅជារូបមន្តមិនត្រឹមត្រូវ ឬកំណត់ឫសខុស។</p>
//       </>
//     ),
//   },
// };

// const SecondTopic: TopicContent = {
//   definition: {
//     title: "សមីការមិនអូម៉ូសែន",
//     content: (
//       <>
//         <div className="flex flex-col items-start">
//           <div className="flex items-center gap-3 flex-wrap w-full">
//             <p>
//               សមីការឌីផែរ៉ង់ស្សែលលីនេអែអូម៉ូសែនលំដាប់ n
//               មានមេគុណថេរគឺគ្រប់សមីការដែលមានទម្រង់{" "}
//             </p>
//             <div className="flex flex-wrap">
//               <BlockMath
//                 math={`a_n y^{(n)} + a_{n-1} y^{(n-1)} + \\cdots + a_1 y' + a_0 y`}
//               />
//               <BlockMath math={`= P(x)  (E')`} />
//             </div>
//           </div>
//           <div className="flex items-center gap-3 flex-wrap w-full">
//             <p>ដែល P(x) ​ខុសពី 0 និង</p>
//             <BlockMath math={`a_n , a_{n-1} \\cdots , a_1 , a_0 `} />
//             <p>ជាចំនួនថេរ។</p>
//           </div>
//         </div>
//       </>
//     ),
//   },
//   tip: {
//     title: "ជាទូទៅ",
//     content: (
//       <>
//         <ul className="list-disc pl-3 flex flex-col gap-3">
//           <li>
//             រកអនុគមន៍ចម្លើយទូទៅនៃសមីការ <InlineMath math={"y' + ay = 0"} />{" "}
//             ដែលតាងដោយអនុគមន៍ <InlineMath math={"y_c"} />
//           </li>
//           <li>
//             រកអនុគមន៍ចម្លើយពិសេសនៃសមីការ <InlineMath math={"y' + ay = P(x)"} />{" "}
//             តាងដោយអនុគមន៍ <InlineMath math={"y_p"} />
//           </li>
//           <li>
//             ចម្លើយទូទៅនៃសមីការ <InlineMath math={"y' + ay = P(x)"} />{" "}
//             គឺអនុគមន៍ដែល <InlineMath math={"y = y_c + y_p"} />
//           </li>
//         </ul>
//       </>
//     ),
//   },
//   example: {
//     question: [
//       <div className="flex flex-col gap-3" key="q2">
//         <p>ដោះស្រាយសមីការ៖</p>
//         <div className="flex items-center justify-center gap-3 flex-wrap">
//           <InlineMath math={"y^{(3)} - 6 y'' + 11 y' - 6y = 2x^2 + 4x - 5"} />
//         </div>
//       </div>,
//     ],
//     steps: [
//       {
//         title: "ដោះស្រាយសមីការសម្គាល់",
//         content: (
//           <>
//             <div className="flex flex-col items-start gap-2">
//               <div className="flex items-center gap-2 flex-wrap">
//                 <p>សមីការសម្គាល់មានរាង</p>
//                 <BlockMath
//                   math={"\\lambda^3 - 6 \\lambda^2 + 11 \\lambda - 6 = 0"}
//                 />
//               </div>
//               <div className="flex items-center gap-2 flex-wrap ">
//                 <p>ដោះស្រាយសមីការសម្គាល់៖</p>
//                 <BlockMath
//                   math={"(\\lambda - 1)(\\lambda - 2)(\\lambda - 3) = 0"}
//                 />
//               </div>
//               <p>
//                 ដូចនេះឫសគឺ{" "}
//                 <InlineMath
//                   math={"\\lambda_1 = 1, \\lambda_2 = 2, \\lambda_3 = 3"}
//                 />
//               </p>
//             </div>
//           </>
//         ),
//       },
//       {
//         title: "ចម្លើយទូទៅនៃសមីការ",
//         content: (
//           <>
//             <div className="flex flex-col items-start">
//               <div className="flex items-center gap-2 flex-wrap">
//                 <p>ចម្លើយទូទៅនៃសមីការអូម៉ូសែនសមីកា</p>
//                 <BlockMath math={"y_c = A e^x + B e^{2x} + C e^{3x}"} />
//                 <p>ដែល A, B, C ជាចំនួនថេរ។</p>
//               </div>
//             </div>
//           </>
//         ),
//       },
//       {
//         title: "រកចម្លើយពិសេសនៃសមីការ",
//         content: (
//           <>
//             <div className="flex flex-col items-start">
//               <div className="flex items-center flex-wrap gap-3">
//                 <p>តាង :</p>
//                 <BlockMath math="y_p = ax^2 + bx + c" />
//                 <p>ជាចម្លេីយពិសេសនៃសមីការ (E&apos;)</p>
//               </div>

//               <div className="flex items-center flex-wrap gap-3">
//                 <p>នាំឲ្យ</p>
//                 <BlockMath math="y_p' = 2ax + b, y_p'' = 2a, y_p^{3}=0" />
//               </div>

//               <div className="flex items-center flex-wrap gap-3">
//                 <p>គេបាន</p>
//                 <BlockMath math="y_p^{3} - 6y_p'' + 11y_p' - 6y_p" />
//                 <BlockMath math="= 2x^2 + 4x -5" />
//               </div>

//               <div className="flex items-center flex-wrap gap-3">
//                 <BlockMath math="6(2a) -6(ax^2 + bx +c) +" />
//                 <BlockMath math="11(2ax + b)  =2x^2 + 4x -5" />
//               </div>

//               <div className="flex items-center flex-wrap gap-3">
//                 <BlockMath math="-6ax^2 + (22a - 66b)x-" />
//                 <BlockMath math="(12a - 11b +6c) =2x^2 + 4x -5" />
//               </div>

//               <p>ដោយផ្ទឹមមេគុណនៃសមីការគេទាញបាន</p>

//               <div className="flex items-center flex-wrap gap-3">
//                 <BlockMath
//                   math="\begin{cases} 
//                           -6a=2 \\ 
//                           22a - 6b =4\\
//                           12a - 11b +6c =5 
//                           \end{cases}"
//                 />

//                 <BlockMath
//                   math="\Rightarrow\begin{cases} 
//                           a= - \frac{1}{3} \\ 
//                           b= - \frac{17}{9}\\
//                           c= - \frac{53}{27} 
//                           \end{cases}"
//                 />
//               </div>

//               <div className="flex items-center flex-wrap gap-3">
//                 <p>គេបានចម្លេីយពិសេសនៃសមីការ (E&apos;)</p>
//                 <BlockMath math="y_p = - \frac{1}{3}x^2 -\frac{17}{9}x  - \frac{53}{27}  " />
//               </div>
//             </div>
//           </>
//         ),
//       },
//     ],
//     answer: (
//       <>
//         <div className="flex flex-col items-start">
//           <div className="flex flex-col items-start gap-2">
//             <BlockMath math="y = y_c + y_p" />
//             <div className="flex item-center gap-2 flex-wrap">
//               <BlockMath math="y = A e^x + B e^{2x} + C e^{3x}" />
//               <BlockMath math="- \frac{1}{3}x^2 -\frac{17}{9}x  - \frac{53}{27} " />
//             </div>
//           </div>
//           <p>ដែល​ A,B,C ជាចំនួនថេរ។</p>
//         </div>
//       </>
//     ),
//   },
//   exercise: {
//     questions: [
//       {
//         id: "q1",
//         question: (
//           <>
//             ដោះស្រាយសមីការឌីផែរ៉ង់ស្សែលមិនអូម៉ូសែនលំដាប់ទី3៖{" "}
//             <InlineMath math={"y^{(3)} - 3 y'' + 3 y' - y = e^{x}"} />
//           </>
//         ),
//         options: [
//           <InlineMath
//             key="q1-o1"
//             math={"y = (A + Bx + Cx^2) e^{x} + x e^{x}"}
//           />,
//           <InlineMath key="q1-o2" math={"y = (A + Bx) e^{x} + x^2 e^{x}"} />,
//           <InlineMath key="q1-o3" math={"y = (A + Bx + Cx^2) e^{x} + e^{x}"} />,
//           <InlineMath
//             key="q1-o4"
//             math={"y = (A + Bx + Cx^2)e^x + \\frac{1}{6} x^3 e^{x}"}
//           />,
//         ],
//         correctAnswer: 3,
//       },
//       {
//         id: "q2",
//         question: (
//           <>
//             រកចម្លើយទូទៅនៃសមីការ៖{" "}
//             <InlineMath math={"y^{(4)} - 4 y^{(3)} + 6 y'' - 4 y' + y = x^2"} />
//           </>
//         ),
//         options: [
//           <InlineMath
//             key="q2-o1"
//             math={"y = (A + Bx + Cx^2 + Dx^3) e^{x} + a x^2 + b x + c"}
//           />,
//           <InlineMath
//             key="q2-o2"
//             math={"y = (A + Bx + Cx^2 + Dx^3) e^{x} + x^2 e^{x}"}
//           />,
//           <InlineMath key="q2-o3" math={"y = (A + Bx + Cx^2) e^{x} + x^3"} />,
//           <InlineMath
//             key="q2-o4"
//             math={"y = (A + Bx + Cx^2 + Dx^3) e^{x} + e^{x}"}
//           />,
//         ],
//         correctAnswer: 0,
//       },
//       {
//         id: "q3",
//         question: (
//           <>
//             រកចម្លើយពិសេសនៃសមីការ៖{" "}
//             <InlineMath math={"y^{(3)} + y'' - y' - y = cos x"} />
//           </>
//         ),
//         options: [
//           <InlineMath key="q3-o1" math={"y_p = A cos x + B sin x"} />,
//           <InlineMath
//             key="q3-o2"
//             math={"y_p = (A x + B) cos x + (C x + D) sin x"}
//           />,
//           <InlineMath
//             key="q3-o3"
//             math={"y_p = (A x^2 + B x + C) cos x + (D x^2 + E x + F) sin x"}
//           />,
//           <InlineMath key="q3-o4" math={"y_p = A e^{x} + B e^{-x}"} />,
//         ],
//         correctAnswer: 1,
//       },
//     ],
//   },
//   hint: {
//     content: (
//       <>
//         <p>
//           💡 ដើម្បីដោះស្រាយសមីការមិនអូម៉ូសែន, ចូររកចម្លើយទូទៅនៃសមីការអូម៉ូសែនសិន{" "}
//           <InlineMath math={"y_c"} />
//         </p>
//         <p>
//           💡 បន្ទាប់មក រកចម្លើយពិសេស <InlineMath math={"y_p"} />{" "}
//           ដែលផ្គូផ្គងសមីការមិនអូម៉ូសែន។
//         </p>
//         <p>
//           💡 ចម្លើយទូទៅគឺ <InlineMath math={"y = y_c + y_p"} />
//         </p>
//       </>
//     ),
//   },
// };

// const LDEGeneral = () => {
//   return (
//     <>
//       <div>
//         {FirstTopicContent.definition && (
//           <DefinitionBox
//             title={FirstTopicContent.definition.title}
//             content={FirstTopicContent.definition.content}
//           />
//         )}
//         {FirstTopicContent.tip && (
//           <TipBox
//             title={FirstTopicContent.tip.title}
//             content={FirstTopicContent.tip.content}
//           />
//         )}

//         {FirstTopicContent.example && (
//           <ExampleBox
//             question={FirstTopicContent.example.question}
//             steps={FirstTopicContent.example.steps}
//             answer={FirstTopicContent.example.answer}
//           />
//         )}
//         {FirstTopicContent.exercise && (
//           <ExerciseBox questions={FirstTopicContent.exercise.questions} />
//         )}
//         {FirstTopicContent.hint && (
//           <HintBox content={FirstTopicContent.hint.content} />
//         )}
//         {FirstTopicContent.warning && (
//           <WarningBox content={FirstTopicContent.warning.content} />
//         )}
//       </div>

//       <div>
//         {SecondTopic.definition && (
//           <DefinitionBox
//             title={SecondTopic.definition.title}
//             content={SecondTopic.definition.content}
//           />
//         )}
//         {SecondTopic.tip && (
//           <TipBox
//             title={SecondTopic.tip.title}
//             content={SecondTopic.tip.content}
//           />
//         )}
//         {SecondTopic.example && (
//           <ExampleBox
//             question={SecondTopic.example.question}
//             steps={SecondTopic.example.steps}
//             answer={SecondTopic.example.answer}
//           />
//         )}
//         {SecondTopic.exercise && (
//           <ExerciseBox questions={SecondTopic.exercise.questions} />
//         )}
//         {SecondTopic.hint && <HintBox content={SecondTopic.hint.content} />}
//       </div>
//     </>
//   );
// };

// export default LDEGeneral;


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

// ===== TOPIC CONTENT DATA =====
const content: TopicContent_V3[] = [
  // ----- First Topic -----
  {
    type: "definition",
    title: "សមីការឌីផេរ៉ង់ស្យែលអូម៉ូសែន",
    content: (
      <div className="flex flex-col items-start">
        <div className="flex items-center gap-3 flex-wrap w-full">
          <p>
            សមីការឌីផែរ៉ង់ស្សែលលីនេអែអូម៉ូសែនលំដាប់ n មានមេគុណថេរគឺគ្រប់សមីការដែលមានទម្រង់
          </p>
          <BlockMath math={`a_n y^{(n)} + a_{n-1} y^{(n-1)} + \\cdots + a_1 y' + a_0 y = 0  (E)`} />
          <p>ដែល​​</p>
          <BlockMath math={`a_n , a_{n-1} \\cdots + a_1 + a_0 `} />
          <p>ជាចំនួនថេរ។</p>
        </div>
      </div>
    ),
  },
  {
    type: "tip",
    title: "ជាទូទៅ",
    content: (
      <div>
        <p>សមីការឌីផែរ៉ង់ស្យែលលំដាប់ n មានទម្រង់៖</p>
        <BlockMath math="a_n y^{(n)} + \cdots + a_1 y' + a_0 y = 0" />
        <p>សមីការសម្គាល់៖</p>
        <BlockMath math="a_n \lambda^n + \cdots + a_1 \lambda + a_0 = 0" />
        <p>ប្រសិនបើឫសខុសគ្នា, ចម្លើយទូទៅ៖</p>
        <BlockMath math="y = \sum_{i=1}^n c_i e^{\lambda_i x}" />
        <p>ប្រសិនបើឫសស្មើគ្នា, ចម្លើយទូទៅមានរាង៖</p>
        <BlockMath math="y = (c_1 + c_2 x + \cdots + c_k x^{k-1}) e^{\lambda x}" />
        <p>ជាចំនួនថេរ។</p>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div className="flex flex-col items-start">
        <p>ដោះស្រាយសមីការ:</p>
        <BlockMath math={"y^{(3)} - 6 y^{(2)} + 11 y^{(1)} - 6 y = 0"} />
        <p>សមីការសម្គាល់៖</p>
        <BlockMath math={"\\lambda^{3} - 6 \\lambda^{2} + 11 \\lambda - 6 = 0"} />
        <BlockMath math={"(\\lambda - 1)(\\lambda - 2)(\\lambda - 3) = 0"} />
        <BlockMath math={"\\implies \\lambda_1 = 1, \\lambda_2 = 2, \\lambda_3 = 3"} />
        <p>ចម្លើយទូទៅគឺ :</p>
        <BlockMath math={"y = c_1 e^{1 x} + c_2 e^{2 x} + c_3 e^{3 x}"} />
      </div>
    ),
  },
  {
    type: "exercise",
    questions: [
      {
        id: "q1",
        question: <InlineMath math={"y^{(3)} - 6 y'' + 11 y' - 6 y = 0"} />,
        options: [
          <InlineMath key="q1-o1" math={"y = A e^{x} + B e^{2x} + C e^{3x}"} />,
          <InlineMath key="q1-o2" math={"y = A e^{-x} + B e^{-2x} + C e^{-3x}"} />,
          <InlineMath key="q1-o3" math={"y = A e^{3x} + B e^{6x} + C e^{9x}"} />,
          <InlineMath key="q1-o4" math={"y = (A + Bx) e^{x} + C e^{2x}"} />,
        ],
        correctAnswer: 2,
      },
      {
        id: "q2",
        question: <InlineMath math={"y^{(4)} - 5 y^{(3)} + 8 y'' - 4 y' = 0"} />,
        options: [
          <InlineMath key="q2-o1" math={"y = A e^{x} + B e^{2x} + C e^{3x} + D e^{4x}"} />,
          <InlineMath key="q2-o2" math={"y = (A + Bx) e^{x} + (C + D x) e^{2x}"} />,
          <InlineMath key="q2-o3" math={"y = A e^{-x} + B e^{-2x} + C e^{-3x} + D e^{-4x}"} />,
          <InlineMath key="q2-o4" math={"y = A e^{x} + B x e^{x} + C e^{3x} + D e^{4x}"} />,
        ],
        correctAnswer: 1,
      },
      {
        id: "q3",
        question: <InlineMath math={"y^{(3)} + 3 y'' + 3 y' + y = 0"} />,
        options: [
          <InlineMath key="q3-o1" math={"y = (A + Bx + C x^{2}) e^{-x}"} />,
          <InlineMath key="q3-o2" math={"y = A e^{x} + B e^{2x} + C e^{3x}"} />,
          <InlineMath key="q3-o3" math={"y = (A + B x) e^{x} + C e^{x^{2}}"} />,
          <InlineMath key="q3-o4" math={"y = A e^{-x} + B e^{-2x} + C e^{-3x}"} />,
        ],
        correctAnswer: 3,
      },
    ],
  },
  {
    type: "hint",
    content: (
      <div>
        <p>
          💡 ដើម្បីដោះស្រាយសមីការឌីផែរ៉ង់ស្យែលអូម៉ូសែនលំដាប់ 3 ឬលើស, ត្រូវកំណត់សមីការសម្គាល់ដោយដាក់សមីការដើមជាសមីការត្រីកោណមាត្រ។
        </p>
        <p>
          💡 រកឫសនៃសមីការសម្គាល់ ហើយបញ្ចូលទៅក្នុងទម្រង់ចម្លើយទូទៅជាមួយចំនួនថេរ A, B, C, ...
        </p>
        <p>
          💡 ប្រសិនបើឫសមានកម្រិតច្រើនជាង 2 និងមានឫសមេគុណដុប ត្រូវបង្កើតពហុវិធីក្នុងចម្លើយទូទៅ។
        </p>
      </div>
    ),
  },
  {
    type: "warning",
    content: <span>កុំបំបែកចម្លើយទៅជារូបមន្តមិនត្រឹមត្រូវ ឬកំណត់ឫសខុស។</span>,
  },

  // ----- Second Topic -----
  {
    type: "definition",
    title: "សមីការមិនអូម៉ូសែន",
    content: (
      <div className="flex flex-col items-start">
        <p>
          សមីការឌីផែរ៉ង់ស្សែលលីនេអែអូម៉ូសែនលំដាប់ n មានមេគុណថេរគឺគ្រប់សមីការដែលមានទម្រង់
        </p>
        <BlockMath math={`a_n y^{(n)} + a_{n-1} y^{(n-1)} + \\cdots + a_1 y' + a_0 y = P(x)  (E')`} />
        {/* <p>ដែល P(x) ​ខុសពី 0 និង a_n , a_{n-1} \cdots , a_1 , a_0 ជាចំនួនថេរ។</p> */}
        <div className="flex items-center gap-3 flex-wrap w-full">
            <p>ដែល P(x) ​ខុសពី 0 និង</p>
            <BlockMath math={`a_n , a_{n-1} \\cdots , a_1 , a_0 `} />
            <p>ជាចំនួនថេរ។</p>
        </div>
      </div>
    ),
  },
  {
    type: "tip",
    title: "ជាទូទៅ",
    content: (
      <ul className="list-disc pl-3 flex flex-col gap-3">
        <li>
          រកអនុគមន៍ចម្លើយទូទៅនៃសមីការ <InlineMath math={"y' + ay = 0"} /> ដែលតាងដោយ <InlineMath math={"y_c"} />
        </li>
        <li>
          រកអនុគមន៍ចម្លើយពិសេសនៃសមីការ <InlineMath math={"y' + ay = P(x)"} /> ដែលតាងដោយ <InlineMath math={"y_p"} />
        </li>
        <li>
          ចម្លើយទូទៅគឺ <InlineMath math={"y = y_c + y_p"} />
        </li>
      </ul>
    ),
  },
  {
    type: "example",
    question: (
      <div>
        <p>ដោះស្រាយសមីការ៖</p>
        <InlineMath math={"y^{(3)} - 6 y'' + 11 y' - 6y = 2x^2 + 4x - 5"} />
      </div>
    ),
  },
  {
    type: "exercise",
    questions: [
      {
        id: "q1",
        question: <InlineMath math={"y^{(3)} - 3 y'' + 3 y' - y = e^{x}"} />,
        options: [
          <InlineMath key="q1-o1" math={"y = (A + Bx + Cx^2) e^{x} + x e^{x}"} />,
          <InlineMath key="q1-o2" math={"y = (A + Bx) e^{x} + x^2 e^{x}"} />,
          <InlineMath key="q1-o3" math={"y = (A + Bx + Cx^2) e^{x} + e^{x}"} />,
          <InlineMath key="q1-o4" math={"y = (A + Bx + Cx^2)e^x + \\frac{1}{6} x^3 e^{x}"} />,
        ],
        correctAnswer: 3,
      },
      {
        id: "q2",
        question: <InlineMath math={"y^{(4)} - 4 y^{(3)} + 6 y'' - 4 y' + y = x^2"} />,
        options: [
          <InlineMath key="q2-o1" math={"y = (A + Bx + Cx^2 + Dx^3) e^{x} + a x^2 + b x + c"} />,
          <InlineMath key="q2-o2" math={"y = (A + Bx + Cx^2 + Dx^3) e^{x} + x^2 e^{x}"} />,
          <InlineMath key="q2-o3" math={"y = (A + Bx + Cx^2) e^{x} + x^3"} />,
          <InlineMath key="q2-o4" math={"y = (A + Bx + Cx^2 + Dx^3) e^{x} + e^{x}"} />,
        ],
        correctAnswer: 0,
      },
      {
        id: "q3",
        question: <InlineMath math={"y^{(3)} + y'' - y' - y = cos x"} />,
        options: [
          <InlineMath key="q3-o1" math={"y_p = A cos x + B sin x"} />,
          <InlineMath key="q3-o2" math={"y_p = (A x + B) cos x + (C x + D) sin x"} />,
          <InlineMath key="q3-o3" math={"y_p = (A x^2 + B x + C) cos x + (D x^2 + E x + F) sin x"} />,
          <InlineMath key="q3-o4" math={"y_p = A e^{x} + B e^{-x}"} />,
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    type: "hint",
    content: (
      <div>
        <p>💡 ដើម្បីដោះស្រាយសមីការមិនអូម៉ូសែន, ចូររកចម្លើយទូទៅនៃសមីការអូម៉ូសែនសិន <InlineMath math={"y_c"} />។</p>
        <p>💡 បន្ទាប់មក រកចម្លើយពិសេស <InlineMath math={"y_p"} /> ដែលផ្គូផ្គងសមីការមិនអូម៉ូសែន។</p>
        <p>💡 ចម្លើយទូទៅគឺ <InlineMath math={"y = y_c + y_p"} /></p>
      </div>
    ),
  },
];

// ===== SERIALIZATION (OPTIONAL) =====
const jsonV2 = serializeTopicContentV3(content);
const restoredV3 = deserializeTopicContentV3(jsonV2) as TopicContent_V3[];
const restoredV3Tree = deserializeTopicContentV3ToTree(jsonV2) as TopicContent_V3[];

const DifferentialDefinition = () => {
  return (
    <div>
      <ContentRendererV3 content={content} />
    </div>
  );
};

export default DifferentialDefinition;
