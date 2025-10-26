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
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { math } from './../../../../curriculum/grade-9/math';


// ===== TOPIC CONTENT DATA (Definite Integral) =====

// Renamed to `content` and typed as `TopicContent_V3[]`
const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "១. ព្រីមីទីវ ",
    content: (
      <TipBox
        title="និយមន័យ"
        content={
          <InlineMath math={String.raw`គែថា F(x) ជាព្រីមីវទីវនៃ f(x)លើចន្លោះ Iកាលណាចំពោះគ្រប់ x \in I គេបាន​ F\prime(x) = f(x).`} />

        }
      />
    ),
  },
  {
    type: "tip",
    title: "ទ្រឹស្តីបទ",
    content: (
      <div>
        <InlineMath math={String.raw`បើអនុគម៏ F(x) និង G(x) ជាព្រីមីទីវនៃ f(x)លើចន្លោះ Iនោះចំពោះគ្រប់ x \in I គេមានF(X)=G(x) + C​ដែលជាចំនួនថេរ។ `} />
      </div>
    )
  },
  {
    type: "definition",
    title: "២. អាំងតេក្រាលមិនកំណត់",
    content: (
      <div>
        <TipBox
          title="និយមន័យ"
          content={
            <InlineMath math={String.raw`បើមានងនិគម៏ F(x)ជាព្រីមីទីវនៃ f(x)នោះអាំងតេក្រាលមិនកំណត់នៃអនុគម៏fកំណត់ដោយ \, \int f(x)dx = F(x) + C.ដែលCជាចំនួនថេរ `} />

          }
        />
        <TipBox
          title="លក្ខណះសំខាន់របស់អាំងតេក្រាលមិនកំណត់"
          content={
            <div className="space-y-5 [&_.katex-display]:text-left [&_.katex]:text-[1.05rem]">
              <div className="round border-l-4 border-indigo-500 bg-indigo-50/70 p-4 shadow-sm">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
                  <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
                    <InlineMath math={String.raw`\int Kf(x)dx = k\int f(x)dx`} />
                  </li>
                  <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
                    <InlineMath math={String.raw`\int [f(x) + g(x)]dx = \int f(x)dx + \int g(x)dx `} />
                  </li>
                  <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
                    <InlineMath math={String.raw`\int [f(x) - g(x)]dx = \int f(x)dx - \int g(x)dx`} />
                  </li>
                </ul>
              </div>
            </div>
          }
        />
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <InlineMath
        math={String.raw`\text{គណនា } \ \int_{0}^{2}\big(x^2+3x\big)\,dx`}
      />
    ),
    steps: [
      {
        title: "រកអន្តរអនុគមន៍ (Antiderivative)",
        content: (
          <>
            <InlineMath
              math={String.raw`F(x)=\frac{x^3}{3}+\frac{3}{2}x^2`}
            />
            <p>ដោយ FTC មាន</p>
            <InlineMath
              math={String.raw`\int_{0}^{2} (x^2+3x)\,dx = F(2)-F(0)`}
            />
          </>
        ),
      },
      {
        title: "បញ្ចូលខ្ទង់",
        content: (
          <>
            <InlineMath
              math={String.raw`F(2)=\frac{2^3}{3}+\frac{3}{2}\cdot 2^2=\frac{8}{3}+6=\frac{26}{3}`}
            />
            <InlineMath math={String.raw`F(0)=0`} />
          </>
        ),
      },
      {
        title: "ចម្លើយ",
        content: (
          <InlineMath
            math={String.raw`\int_{0}^{2} (x^2+3x)\,dx=\frac{26}{3}`}
          />
        ),
      },
    ],
    // Converted string answer to JSX
    answer: <InlineMath math="\int_{0}^{2} (x^2+3x) dx = 26/3" />,
  },
  {
    type: "exercise",
    questions: [
      {
        id: "dq1",
        question: (
          <>
            <p>គណនា</p>
            <InlineMath math={String.raw`\int_{0}^{1} (2x+1)\,dx`} />
          </>
        ),
        // Converted JSX options to string[]
        options: ["2", "1", String.raw`\frac{3}{2}`, "0"],
        correctAnswer: 0,
      },
      {
        id: "dq2",
        question: (
          <>
            <p>តម្លៃនៃ</p>
            <InlineMath math={String.raw`\int_{-2}^{2} x^3\,dx`} />
            <p>ស្មើ?</p>
          </>
        ),
        // Converted JSX options to string[]
        options: ["0", "8", "-8", "16"],
        correctAnswer: 0,
      },
      {
        id: "dq3",
        question: (
          <>
            <p>គណនា</p>
            <InlineMath math={String.raw`\int_{0}^{\pi} \sin x\,dx`} />
          </>
        ),
        // Converted JSX options to string[]
        options: ["2", "1", "0", String.raw`\pi`],
        correctAnswer: 0,
      },
    ],
  },
];

// ===== MAIN COMPONENT =====
export default function DefiniteIntegral() {
  // Stage 2: Serialized JSON
  const jsonV3 = serializeTopicContentV3(content);

  // Stage 3: Deserialized V3 with live React nodes (renderable)
  const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

  // Render
  return <ContentRendererV3 content={restoredContent} />;
}