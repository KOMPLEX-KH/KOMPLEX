"use client";

// ----- NEW IMPORTS -----
import { TopicContent_V3 } from "@/types/docs/topic";
import {TipBox} from "@/components/pages/docs/boxes/TipBox"
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  serializeTopicContentV3,
  deserializeTopicContentV3,
} from "@/components/pages/docs/utils/ContentSerializerV2";

// ----- KEPT IMPORTS -----
import { BlockMath, InlineMath } from "react-katex";

// --- Helper: left-aligned, scrollable KaTeX line (great on mobile) ---
// const MathLine = ({ math }: { math: string }) => (
//   <div className="overflow-x-auto -mx-1 px-1 [&_.katex-display]:text-left [&_.katex-display]:my-1 [&_.katex]:text-[1.06rem]">
//     <BlockMath math={math} />
//   </div>
// );

// ===== TOPIC CONTENT DATA (Higher-Order Derivatives) =====

// Renamed to `content` and typed as `TopicContent_V3[]`
const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "ដេរីវេលំដាប់ខ្ពស់",
    content: (
      <div className="space-y-4">
        <TipBox 
          title="និយមន័យ"
          content={
            <p>
              <InlineMath math={String.raw`\text{ដេរីវេទី២នៃអនុគម៏​ } y = f(x) \text{គឺជាដេរីវេរបស់ដេរីវេនៃអនុគម៏នេះ ហើយតាងដោយ}​ y\prime \prime ឬ f\prime \prime (x)ឬ \frac{d^2f}{dx^2}។ មានន័យថា y\prime \prime = (y\prime )\prime។`} />​
            </p>
          }
        />
      </div>
    ),
  },
  {
    type: "tip",
    title: "ជាទូទៅ",
    content: (
      <>
        <InlineMath math={String.raw`ដេរីវេនៃអនុគម៏​ y = f(x) អាចមានដេរីវេខ្លួនឯងទៀត គេហៅដេរីវេបន្តបន្ទាប់ថា ដេរីវេទី១, ដេរីវេទី២, ដេរីវេទី៣,...., ដេរីវេទី n ដែរតាំងដោយ f\prime (x), \, f\prime \prime (x), \, f\prime \prime \prime (x),....., f^n(x)។`} />
      </>
    ),
  },
  {
    type: "example",
    question: (
      <InlineMath
        math={String.raw`\text{រក } f''(x)\ \text{និង}\ f^{(3)}(x)\ \text{សម្រាប់}\ f(x)=x^4-2x^3+x`}
      />
    ),
    steps: [
      {
        title: "យកដេរីវេលើកទី ១",
        content: <InlineMath math={String.raw`f'(x)=4x^3-6x^2+1`} />,
      },
      {
        title: "យកដេរីវេលើកទី ២",
        content: <InlineMath math={String.raw`f''(x)=12x^2-12x`} />,
      },
      {
        title: "យកដេរីវេលើកទី ៣",
        content: <InlineMath math={String.raw`f^{(3)}(x)=24x-12`} />,
      },
      {
        title: "បន្ថែម (វគ្គទូទៅ)",
        content: (
          <>
            <p>សម្រាប់</p>
            <InlineMath math={String.raw`g(x)=e^{3x}`} />
            <p>មាន</p>
            <InlineMath math={String.raw`g^{(n)}(x)=3^n e^{3x}`} />
          </>
        ),
      },
    ],
    // Converted string answer to JSX
    answer: (
      <p>
        <InlineMath math="f''(x)=12x^2-12x" /> និង{" "}
        <InlineMath math="f^{(3)}(x)=24x-12" />
      </p>
    ),
  },
  {
    type: "exercise",
    questions: [
      {
        id: "hq1",
        question: (
          <>
            <p>រក</p>
            <InlineMath
              math={String.raw`f''(x)\ \text{សម្រាប់}\ f(x)=x^3-5x^2+4x-7`}
            />
          </>
        ),
        // Converted JSX options to string[]
        options: ["6x-10", "6x-5", "3x^2-10", "6x-4"],
        correctAnswer: 0,
      },
      {
        id: "hq2",
        question: (
          <>
            <p>សម្រាប់</p>
            <InlineMath math={String.raw`f(x)=e^{2x}`} />
            <p>តើ</p>
            <InlineMath math={String.raw`f^{(n)}(x)`} />
            <p>ស្មើអ្វី?</p>
          </>
        ),
        // Converted JSX options to string[]
        options: ["e^{2x}", "2^n e^{x}", "2^n e^{2x}", "n^2 e^{2x}"],
        correctAnswer: 2,
      },
      {
        id: "hq3",
        question: (
          <>
            <p>រក</p>
            <InlineMath
              math={String.raw`g^{(3)}(x)\ \text{សម្រាប់}\ g(x)=\sin x`}
            />
          </>
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`\cos x`,
          String.raw`-\cos x`,
          String.raw`-\sin x`,
          String.raw`\sin x`,
        ],
        correctAnswer: 1,
      },
    ],
  },
  
];

// ===== MAIN COMPONENT =====
export default function DerivativeHighLevel() {
  // Stage 2: Serialized JSON
  const jsonV3 = serializeTopicContentV3(content);

  // Stage 3: Deserialized V3 with live React nodes (renderable)
  const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

  // Render
  return <ContentRendererV3 content={restoredContent} />;
}