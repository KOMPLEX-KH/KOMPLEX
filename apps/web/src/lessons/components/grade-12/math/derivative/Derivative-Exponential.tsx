"use client";

// ----- NEW IMPORTS -----
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  serializeTopicContentV3,
  deserializeTopicContentV3,
} from "@/components/pages/docs/utils/ContentSerializerV2";

// ----- KEPT IMPORTS -----
import { InlineMath } from "react-katex";

// Make KaTeX blocks scrollable & left-aligned on narrow screens
// const MathLine = ({ math }: { math: string }) => (
//   <div className="overflow-x-auto -mx-1 px-1 [&_.katex-display]:text-left [&_.katex-display]:my-1 [&_.katex]:text-[1.05rem]">
//     <BlockMath math={math} />
//   </div>
// );

// ===== TOPIC CONTENT DATA (Derivative — Exponential Functions) =====

// Renamed to `content` and typed as `TopicContent_V3[]`
const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "រូបមន្តដេរីវេ — អិចស្បូណង់ស្យែល",
    content: (
      <div className="space-y-5">
        {/* a) Exponential with variable x */}
        <div className="rounded-xl border-l-4 border-indigo-500 bg-indigo-50/70 p-4 shadow-sm">
          <p className="font-semibold mb-3 text-indigo-500">
            ក) អនុគមន៍អិចស្បូណង់ស្យែល
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {[
              String.raw`y=e^{x}\ \Rightarrow\ y'=e^{x}`,
              String.raw`y=a^{x}\ \Rightarrow\ y'=a^{x}\ln a\ \ (a>0,\ a= 1)`,
            ].map((m, i) => (
              <li
                key={`dx-${i}`}
                className="rounded-lg bg-white/80 border border-sky-200 p-3"
              >
                <InlineMath math={m} />
              </li>
            ))}
          </ul>
        </div>

        {/* b) Exponential with u(x) (chain rule) */}
        <div className="rounded-xl border-l-4 border-indigo-500 bg-indigo-50/70 p-4 shadow-sm">
          <p className="font-semibold mb-3 text-indigo-500">
            ខ) អនុគមន៍អិចស្បូណង់ស្យែល <InlineMath math={String.raw`u(x)`} />
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {[
              String.raw`y=e^{u}\ \Rightarrow\ y'=u'\,e^{u}`,
              String.raw`y=a^{u}\ \Rightarrow\ y'=u'\,a^{u}\ln a\ \ (a>0,\ a= 1)`,
            ].map((m, i) => (
              <li
                key={`du-${i}`}
                className="rounded-lg bg-white/80 border border-emerald-200 p-3"
              >
                <InlineMath math={m} />
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
        math={String.raw`\text{រក } y' \text{ សម្រាប់ } y = e^{2x} - 4e^{-x} + 3\cdot 5^{x}`}
      />
    ),
    steps: [
      {
        title: "យកដេរីវេនីមួយៗ",
        content: (
          <>
            <InlineMath math={String.raw`\frac{d}{dx}(e^{2x}) = 2e^{2x}`} />
            <InlineMath
              math={String.raw`\frac{d}{dx}(-4e^{-x}) = -4\cdot(-e^{-x}) = 4e^{-x}`}
            />
            <InlineMath
              math={String.raw`\frac{d}{dx}(3\cdot 5^{x}) = 3\cdot 5^{x}\ln(5)`}
            />
          </>
        ),
      },
      {
        title: "បូកលទ្ធផល",
        content: (
          <InlineMath
            math={String.raw`y' = 2e^{2x} + 4e^{-x} + 3\ln(5)\,5^{x}`}
          />
        ),
      },
      {
        title: "ចម្លើយ",
        content: (
          <InlineMath
            math={String.raw`y' = 2e^{2x} + 4e^{-x} + 3\ln(5)\,5^{x}`}
          />
        ),
      },
    ],
    answer: (
      <InlineMath math={String.raw`y' = 2e^{2x} + 4e^{-x} + 3\ln(5)\,5^{x}`} />
    ),
  },
  {
    type: "exercise",
    questions: [
      {
        id: "eq1",
        question: (
          <>
            <p>ដេរីវេនៃ</p>
            <InlineMath math={String.raw`y = e^{3x}`} />
            <p>គឺ?</p>
          </>
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`3e^{3x}`,
          String.raw`e^{3x}`,
          String.raw`3e^{x}`,
          String.raw`e^{x}`,
        ],
        correctAnswer: 0,
      },
      {
        id: "eq2",
        question: (
          <>
            <p>ដេរីវេនៃ</p>
            <InlineMath math={String.raw`y = 2^{x}`} />
            <p>គឺ?</p>
          </>
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`2^{x}`,
          String.raw`\ln(2)\,2^{x}`,
          String.raw`\ln(e)\,2^{x}`,
          String.raw`\dfrac{1}{\ln(2)}\,2^{x}`,
        ],
        correctAnswer: 1,
      },
      {
        id: "eq3",
        question: (
          <>
            <p>គណនា</p>
            <InlineMath
              math={String.raw`y'(0) \text{ សម្រាប់ } y = e^{x} + 5\cdot 3^{x}`}
            />
          </>
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`1 + 5\ln(3)`,
          String.raw`\ln(3) + 5`,
          String.raw`6`,
          String.raw`5\ln(3)`,
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    type: "graph",
    expressions: [
      { id: "e", latex: "f(x)=exp(x)", color: "#c00" },
      { id: "eprime", latex: "g(x)=exp(x)", color: "#00c" },
      { id: "two", latex: "h(x)=2^x", color: "#0a0" },
      { id: "twoprime", latex: "k(x)=0.69314718056*2^x", color: "#a0a" },
    ],
  },
];

// ===== MAIN COMPONENT =====

export default function DerivativeExponential() {
  // Stage 2: Serialized JSON
  const jsonV3 = serializeTopicContentV3(content);

  // Stage 3: Deserialized V3 with live React nodes (renderable)
  const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

  // Render
  return <ContentRendererV3 content={restoredContent} />;
}