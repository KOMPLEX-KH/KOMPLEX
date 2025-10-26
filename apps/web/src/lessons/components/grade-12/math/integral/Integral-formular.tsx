"use client";

// ----- NEW IMPORTS -----
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  serializeTopicContentV3,
  deserializeTopicContentV3,
} from "@/components/pages/docs/utils/ContentSerializerV2";

// ----- KEPT IMPORTS -----
import { BlockMath, InlineMath } from "react-katex";

// ===== TOPIC CONTENT DATA (រូបមន្តអាំងតេក្រាល) =====

// Helper style for the Indigo theme
const indigoStyle = { color: "#4F46E5" };

const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "រូបមន្តអាំងតេក្រាល",
    content: (
      <div className="space-y-5 [&_.katex-display]:text-left [&_.katex]:text-[1.05rem]">
        {/* A) Basic formulas in x */}
        <div className="round border-l-4 border-indigo-500 bg-indigo-50/70 p-4 shadow-sm">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 text-xs rounded-full bg-indigo-200/70 text-indigo-800">
              ១
            </span>
            <p className="font-semibold">រូបមន្តមូលដ្ឋាន</p>
          </div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath math={String.raw`\int (cf(x) + g(x)) = c\int f(x) + \int g(x) + C`} />
            </li>
            <li className="rounded-lg bg-white/70 border  border-sky-200 p-3">
              <InlineMath
                math={String.raw`\int cdx = cx + C`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`\int x^ndx = \frac{x^x+1}{n+1} + C, (n = 1)`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`\int e^axdx = \frac{1}{a}e^ax + C`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath math={String.raw`\int a^xdx = \frac{a^x}{lna} + C, (a> 0, a = 1)`} />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`\int \sin(ax)dx = -\frac{1}{a}cos(ax) + C`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`\int cos(ax)dx = \frac{1}{a}sin(ax) + C`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath math={String.raw`\int tan(ax)dx = -\frac{1}{a}ln|cos(ax)| + C`} 
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`\int cot(ax)dx = \frac{1}{a}ln|sin(ax)| + C`}
              />
            </li>
          </ul>
        </div>

      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div>
        <InlineMath
          math={String.raw`\text{គណនា } \ \int\!\Big(3x^2 \;+\; \frac{2}{x} \;-\; 5e^{2x}\;+\;4\Big)\,dx`}
        />
      </div>
    ),
    steps: [
      {
        title: "បំបែកដោយលីនេអារ៊ីតេ",
        content: (
          <div>
            <InlineMath
              math={String.raw`=\ \int 3x^2\,dx \;+\; \int \frac{2}{x}\,dx \;-\; \int 5e^{2x}\,dx \;+\; \int 4\,dx`}
            />
          </div>
        ),
      },
      {
        title: "អនុវត្តរូបមន្តមូលដ្ឋាន",
        content: (
          <>
            <div>
              <InlineMath math={String.raw`\int 3x^2\,dx \;=\; x^3`} />
            </div>
            <div>
              <InlineMath math={String.raw`\int \frac{2}{x}\,dx \;=\; 2\ln|x|`} />
            </div>
            <div>
              <InlineMath
                math={String.raw`\int 5e^{2x}\,dx \;=\; \frac{5}{2}e^{2x}`}
              />
            </div>
            <div>
              <InlineMath math={String.raw`\int 4\,dx \;=\; 4x`} />
            </div>
          </>
        ),
      },
      {
        title: "បូកលទ្ធផល",
        content: (
          <div>
            <InlineMath
              math={String.raw`\int\!\Big(3x^2 + \frac{2}{x} - 5e^{2x} + 4\Big)dx \;=\; x^3 \;+\; 2\ln|x| \;-\; \frac{5}{2}e^{2x} \;+\; 4x \;+\; C`}
            />
          </div>
        ),
      },
    ],
    answer: (
      <InlineMath math="x^3 + 2 \ln|x| - \frac{5}{2} e^{2x} + 4x + C" />
    ),
  },
  {
    type: "exercise",
    questions: [
      {
        id: "if1",
        question: (
          <>
            <p style={indigoStyle}>គណនា</p>
            <div>
              <InlineMath math={String.raw`\int (2x^3 - 6x)\,dx`} />
            </div>
          </>
        ),
        options: [
          String.raw`\tfrac{1}{2}x^4 - 3x^2 + C`,
          String.raw`2x^4 - 6x^2 + C`,
          String.raw`\tfrac{1}{2}x^4 - 6x + C`,
          String.raw`x^4 - 3x^2 + C`,
        ],
        correctAnswer: 0,
      },
      {
        id: "if2",
        question: (
          <>
            <p style={indigoStyle}>គណនា</p>
            <div>
              <InlineMath math={String.raw`\int e^{3x}\,dx`} />
            </div>
          </>
        ),
        options: [
          String.raw`e^{3x} + C`,
          String.raw`\tfrac{1}{3}e^{3x} + C`,
          String.raw`3e^{x} + C`,
          String.raw`3e^{3x} + C`,

        ],
        correctAnswer: 1,
      },
      {
        id: "if3",
        question: (
          <>
            <p style={indigoStyle}>គណនា</p>
            <div>
              <InlineMath math={String.raw`\int \sin(2x)\,dx`} />
            </div>
          </>
        ),
        options: [
          String.raw`-\cos(2x) + C`,
          String.raw`\tfrac{1}{2}\cos(2x) + C`,
          String.raw`-\tfrac{1}{2}\cos(2x) + C`,
          String.raw`2\cos(2x) + C`,
        ],
        correctAnswer: 2,
      },
    ],
  },
  // {
  //     type: "hint",
  //     content: (
  //       <>
  //         <p style={indigoStyle}>
  //           • ប្រើ power rule សម្រាប់ x^n; ប្រសិនបើ n = -1 ប្រែទៅ ln|x|។
  //         </p>
  //         <p style={indigoStyle}>
  //           • សម្រាប់ <InlineMath math={String.raw`\int e^{ax}\,dx`} /> និង{" "}
  //           <InlineMath math={String.raw`\int \sin(ax)\,dx`} /> /{" "}
  //           <InlineMath math={String.raw`\int \cos(ax)\,dx`} /> ចងចាំកត្តា 1/a។
  //         </p>
  //         <p style={indigoStyle}>
  //           • ប្រើលីនេអារ៊ីតេ ដើម្បីបំបែកអាំងតេក្រាល និងគុណថេរ ដើម្បីយកថេរចេញក្រៅ
  //           ∫។
  //         </p>
  //       </>
  //     ),
  //   },
  //   {
  //     type: "warning",
  //     content: (
  //       <>
  //         <p style={indigoStyle}>• កុំភ្លេចបន្ថែម +C ទៅចុងក្រោយ។</p>
  //         <p style={indigoStyle}>
  //           • ប្រុងប្រយត្ន កុំភ្លេចកត្តា{" "}
  //           <InlineMath math={String.raw`\frac{1}{a}`} /> ឬ{" "}
  //           <InlineMath math={String.raw`\frac{1}{\ln a}`} /> នៅពេលអាំងតេក្រាលនៃ
  // s
  //           in(ax), cos(ax), <InlineMath math={String.raw`e^{ax}`} />, a^x។
  //         </p>
  //         <p style={indigoStyle}>
  //           • សម្រាប់ <InlineMath math={String.raw`\int \frac{1}{x}\,dx`} />{" "}
  // s
  //           ត្រូវជានិច្ច ln|x| មិនមែន ln(x) ដោយគ្មាន Absolute Value ទេ។
  //         </p>
  //       </>
  //     ),
  //   },
];

// ===== MAIN COMPONENT =====

export default function IntegralFormulas() {
  // Stage 2: Serialized JSON
  const jsonV3 = serializeTopicContentV3(content);

  // Stage 3: Deserialized V3 with live React nodes (renderable)
  const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

  // Render
  return <ContentRendererV3 content={restoredContent} />;
}