"use client";

// ----- NEW IMPORTS -----
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  serializeTopicContentV3,
  deserializeTopicContentV3,
} from "@/components/pages/docs/utils/ContentSerializerV2";

// ----- KEPT IMPORTS -----
import {  InlineMath } from "react-katex";


// ===== TOPIC CONTENT DATA (Derivative — Logarithmic Functions) =====

// Renamed to `content` and typed as `TopicContent_V3[]`
const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "ដេរីវេឡូការីត",
    content: (
      <div className="space-y-5">
        {/* a) Log with variable x */}
        <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
          <p className="font-semibold mb-3 text-slate-800">
            ក) អនុគមន៍ឡូការីត
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            <li className="rounded-lg bg-white/80 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`y=\ln x\ \Rightarrow\ y'=\dfrac{1}{x}\ \ (x>0)`}
              />
            </li>
            <li className="rounded-lg bg-white/80 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`y=\ln|x|\ \Rightarrow\ y'=\dfrac{1}{x}\ \ (x= 0)`}
              />
            </li>
            <li className="rounded-lg bg-white/80 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`y=\log_{a}x\ \Rightarrow\ y'=\dfrac{1}{x\,\ln a}\ \ (a>0,\ a= 1,\ x>0)`}
              />
            </li>
          </ul>
        </div>

        {/* b) Log with u(x) (chain rule) */}
        <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50/70 p-4 shadow-sm">
          <p className="font-semibold mb-3 text-slate-800">
            ខ) អនុគមន៍ឡូការីត <InlineMath math={String.raw`u(x)`} />
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            <li className="rounded-lg bg-white/80 border border-emerald-200 p-3">
              <InlineMath
                math={String.raw`y=\ln u\ \Rightarrow\ y'=\dfrac{u'}{u}\ \ (u>0)`}
              />
            </li>
            <li className="rounded-lg bg-white/80 border border-emerald-200 p-3">
              <InlineMath
                math={String.raw`y=\ln|u|\ \Rightarrow\ y'=\dfrac{u'}{u}\ \ (u= 0)`}
              />
            </li>
            <li className="rounded-lg bg-white/80 border border-emerald-200 p-3">
              <InlineMath
                math={String.raw`y=\log_{a}u\ \Rightarrow\ y'=\dfrac{u'}{u\,\ln a}\ \ (a>0,\ a= 1,\ u>0)`}
              />
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  // {
  //   type: "tip",
  //   title: "ចំណុចសំខាន់ៗ",
  //   content: (
  //     <div className="space-y-3">
  //       <div className="rounded-lg border-l-4 border-indigo-500 bg-indigo-50/70 p-3 shadow-sm">
  //         <p className="font-semibold text-indigo-900 mb-1">ដែនកំណត់</p>
  //         <p className="text-slate-700">
  //           <InlineMath math={String.raw`\ln x:\ x>0`} /> ;{" "}
  //           <InlineMath math={String.raw`\ln|x|:\ x= 0`} /> ;{" "}
  //           <InlineMath math={String.raw`\log_a x:\ a>0,\ a= 1,\ x>0`} />។
  //         </p>
  //       </div>

  //       <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-50/70 p-3 shadow-sm">
  //         <p className="font-semibold text-emerald-900 mb-1">ខ្សែសង្វាក់</p>
  //         <div className="space-y-1">
  //           <MathLine
  //             math={String.raw`\dfrac{d}{dx}\ln u=\dfrac{u'}{u}\ \ (u>0)`}
  //           />
  //           <MathLine
  //             math={String.raw`\dfrac{d}{dx}\ln|u|=\dfrac{u'}{u}\ \ (u= 0)`}
  //           />
  //           <MathLine
  //             math={String.raw`\dfrac{d}{dx}\log_a u=\dfrac{u'}{u\,\ln a}`}
  //           />
  //         </div>
  //       </div>

  //       <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50/70 p-3 shadow-sm">
  //         <p className="font-semibold text-amber-900 mb-1">
  //           បម្លែង និង កំហុសជាញឹកញាប់
  //         </p>
  //         <p className="text-slate-700">
  //           • <InlineMath math={String.raw`\log_a x=\dfrac{\ln x}{\ln a}`} /> ⟹{" "}
  //           <InlineMath math={String.raw`(\log_a x)'=\dfrac{1}{x\,\ln a}`} />។
  //         </p>
  //         <p className="text-slate-700">
  //           • កុំច្រឡំ៖{" "}
  //           <InlineMath math={String.raw`\dfrac{d}{dx}\ln|x|=\dfrac{1}{x}`} />{" "}
  //           មិនមែន <InlineMath math={String.raw`\dfrac{1}{|x|}`} /> ទេ។
  //         </p>
  //         <p className="text-slate-700">
  //           • បើ <InlineMath math={String.raw`y=\ln(g(x))`} /> ត្រូវកាត់ចេញចំណុច{" "}
  //           <InlineMath math={String.raw`g(x)=0`} /> ពីដែន (អាចប្រើ{" "}
  //           <InlineMath math={String.raw`\ln|g(x)|`} /> ដើម្បីគ្របដណ្តប់{" "}
  //           <InlineMath math={String.raw`g(x)<0`} />
  //           )។
  //         </p>
  //       </div>

  //       <div className="rounded-lg border-l-4 border-fuchsia-500 bg-fuchsia-50/70 p-3 shadow-sm">
  //         <p className="font-semibold text-fuchsia-900 mb-1">
  //           សម្រួលបន្ទាប់ពីយកដេរីវេ
  //         </p>
  //         <MathLine
  //           math={String.raw`\dfrac{d}{dx}\ln(x^2+1)=\dfrac{2x}{x^2+1}`}
  //         />
  //       </div>
  //     </div>
  //   ),
  // },
  {
    type: "example",
    question: (
      <InlineMath
        math={String.raw`\text{រក } y' \text{ សម្រាប់ } y=\ln(x^2+1) + 3\ln(2x) - \log_{3}(x)`}
      />
    ),
    steps: [
      {
        title: "យកដេរីវេនីមួយៗដោយខ្សែសង្វាក់",
        content: (
          <>
            <InlineMath
              math={String.raw`\frac{d}{dx}\,\ln(x^2+1) = \frac{2x}{x^2+1}`}
            />
            <InlineMath
              math={String.raw`\frac{d}{dx}\,\big(3\ln(2x)\big) = 3\cdot \frac{2}{2x} = \frac{3}{x}`}
            />
            <InlineMath
              math={String.raw`\frac{d}{dx}\,\log_{3}(x) = \frac{1}{x\ln 3}`}
            />
          </>
        ),
      },
      {
        title: "បូកលទ្ធផល",
        content: (
          <InlineMath
            math={String.raw`y' = \frac{2x}{x^2+1} + \frac{3}{x} - \frac{1}{x\ln 3}`}
          />
        ),
      },
      {
        title: "ចម្លើយ",
        content: (
          <InlineMath
            math={String.raw`y' = 2x/(x^2+1) + 3/x − 1/(x ln 3)`}
          />
        ),
      },
    ],
    answer: (
      <InlineMath math={String.raw`y' = 2x/(x^2+1) + 3/x − 1/(x ln 3)`} />
    ),
  },
  {
    type: "exercise",
    questions: [
      {
        id: "lq1",
        question: (
          <>
            <p>ដេរីវេនៃ</p>
            <InlineMath math={String.raw`y=\ln(x^2+1)`} />
            <p>គឺ?</p>
          </>
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`\frac{2x}{x^2+1}`,
          String.raw`\frac{1}{x^2+1}`,
          String.raw`\frac{2}{x}`,
          "2x",
        ],
        correctAnswer: 0,
      },
      {
        id: "lq2",
        question: (
          <>
            <p>ដេរីវេនៃ</p>
            <InlineMath math={String.raw`y=\log_{5}(x)`} />
            <p>គឺ?</p>
          </>
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`\frac{1}{x\ln 5}`,
          String.raw`\frac{\ln 5}{x}`,
          String.raw`\ln(5x)`,
          String.raw`\frac{1}{\ln 5}`,
        ],
        correctAnswer: 0,
      },
      {
        id: "lq3",
        question: (
          <>
            <p>គណនា</p>
            <InlineMath
              math={String.raw`y'(1) \text{ សម្រាប់ } y=\ln(3x-1)`}
            />
          </>
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`\frac{1}{2}`,
          String.raw`\frac{3}{2}`,
          String.raw`\frac{1}{3}`,
          String.raw`\frac{2}{3}`,
        ],
        correctAnswer: 1, // y' = 3/(3x-1) => at x=1 -> 3/2
      },
    ],
  },
];

// ===== MAIN COMPONENT =====
export default function DerivativeLogarithmic() {
  // Stage 2: Serialized JSON
  const jsonV3 = serializeTopicContentV3(content);

  // Stage 3: Deserialized V3 with live React nodes (renderable)
  const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

  // Render
  return <ContentRendererV3 content={restoredContent} />;
}