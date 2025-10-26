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

// // Small helper to make block math scrollable & left-aligned on narrow screens
// const MathLine = ({ math }: { math: string }) => (
//   <div className="overflow-x-auto -mx-1 px-1 [&_.katex-display]:text-left [&_.katex]:text-[1.05rem]">
//     <BlockMath math={math} />
//   </div>
// );

// ===== TOPIC CONTENT DATA (Derivative — Trigonometric Functions) =====

// Renamed to `content` and typed as `TopicContent_V3[]`
const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "ដេរីវេត្រីកោណមាត្រ",
    content: (
      <div className="space-y-5">
        {/* a) Trig with variable x */}
        <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
          <p className="font-semibold mb-3 text-slate-800">
            ក) អនុគមន៍ត្រីកោណមាត្រ
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {[
              String.raw`y=\sin x\ \Rightarrow\ y'=\cos x`,
              String.raw`y=\cos x\ \Rightarrow\ y'=-\sin x`,
              String.raw`y=\tan x\ \Rightarrow\ y'=1+\tan^{2}x`,
              String.raw`y=\cot x\ \Rightarrow\ y'=-(1+\cot^{2}x)`,
              
            ].map((m, i) => (
              <li
                key={`dx-li-${i}`}
                className="rounded-lg bg-white/80 border border-sky-200 p-3 text-slate-800"
              >
                <span className="inline-block">
                  <BlockMath math={m} />
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* b) Trig with u(x) (chain rule) */}
        <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50/70 p-4 shadow-sm">
          <p className="font-semibold mb-3 text-slate-800">
            ខ) អនុគមន៍ត្រីកោណមាត្រ <InlineMath math={String.raw`u(x)`} />
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {[
              String.raw`y=\sin u\ \Rightarrow\ y'=u'\cos u`,
              String.raw`y=\cos u\ \Rightarrow\ y'=-u'\sin u`,
              String.raw`y=\tan u\ \Rightarrow\ y'=u'(1+\tan^{2}u)`,
              String.raw`y=\cot u\ \Rightarrow\ y'=-u'(1+\cot^{2}u)`,
            ].map((m, i) => (
              <li
                key={`du-li-${i}`}
                className="rounded-lg bg-white/80 border border-emerald-200 p-3 text-slate-800"
              >
                <span className="inline-block">
                  <BlockMath math={m} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <InlineMath
        math={String.raw`\text{រក } y' \text{ សម្រាប់ } y=\sin x + 2\cos x - 3\tan x \text{ និងគណនា } y'(\pi/4)`}
      />
    ),
    steps: [
      {
        title: "យកដេរីវេនីមួយៗ",
        content: (
          <>
            <InlineMath math={String.raw`(\sin x)'=\cos x`} />
            <InlineMath math={String.raw`(2\cos x)'=2(-\sin x)=-2\sin x`} />
            <InlineMath math={String.raw`(-3\tan x)'=-3(1+\tan^2 x)`} />
          </>
        ),
      },
      {
        title: "បូកទាំងអស់",
        content: (
          <InlineMath
            math={String.raw`y'=\cos x-2\sin x-3(1+\tan^2 x)`}
          />
        ),
      },
      {
        title: "គណនា​នៅ x=pi/4",
        content: (
          <>
            <InlineMath
              math={String.raw`\cos(\pi/4)=\sin(\pi/4)=\frac{\sqrt{2}}{2},\quad \tan(\pi/4)=1`}
            />
            <InlineMath
              math={String.raw`y'(\pi/4)=\frac{\sqrt{2}}{2}-2\cdot\frac{\sqrt{2}}{2}-3(1+1^2)=-\frac{\sqrt{2}}{2}-6`}
            />
          </>
        ),
      },
    ],
    // Converted string answer to JSX
    answer: (
      <p>
        <InlineMath math="y' = \cos x - 2 \sin x - 3(1 + \tan^2 x)" /> និង{" "}
        <InlineMath math="y'(\pi/4) = -\frac{\sqrt{2}}{2} - 6" />
      </p>
    ),
  },
  {
    type: "exercise",
    questions: [
      {
        id: "tq1",
        question: (
          <>
            <p>រកដេរីវេនៃ</p>
            <InlineMath math={String.raw`y=\sin(2x)`} />
          </>
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`\cos(2x)`,
          String.raw`2\cos(2x)`,
          String.raw`2\sin(2x)`,
          String.raw`-2\sin(2x)`,
        ],
        correctAnswer: 1,
      },
      {
        id: "tq2",
        question: (
          <>
            <p>រកដេរីវេនៃ</p>
            <InlineMath math={String.raw`y=\cos(3x)-\tan x`} />
          </>
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`-3\sin(3x)-(1+\tan^2 x)`,
          String.raw`3\sin(3x)-(1+\tan^2 x)`,
          String.raw`-3\cos(3x)-(1+\cot^2 x)`,
          String.raw`-\sin(3x)-(1+\tan^2 x)`,
        ],
        correctAnswer: 0,
      },
      {
        id: "tq3",
        question: (
          <>
            <p>គណនា</p>
            <InlineMath
              math={String.raw`y'(\pi/6)\ \text{សម្រាប់}\ y=\tan x`}
            />
          </>
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`1+\tan^2(\pi/6)=\frac{4}{3}`,
          String.raw`\tan(\pi/6)=\frac{1}{\sqrt{3}}`,
          String.raw`\frac{1}{1+\tan^2(\pi/6)}=\frac{3}{4}`,
          "0",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    type: "graph",
    expressions: [
      { id: "sin", latex: String.raw`f(x)=\sin(x)`, color: "#c00" },
      { id: "cos", latex: String.raw`g(x)=\cos(x)`, color: "#00c" },
    ],
  },
];

// ===== MAIN COMPONENT =====

export default function DerivativeTrigonometric() {
  // Stage 2: Serialized JSON
  const jsonV3 = serializeTopicContentV3(content);

  // Stage 3: Deserialized V3 with live React nodes (renderable)
  const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

  // Render
  return <ContentRendererV3 content={restoredContent} />;
}