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

/** ជំនួយ UI សម្រាប់បន្ទាត់គណិតសម្រាប់ទូរស័ព្ទ (ឆ្វេង & អូសបាន) */
// const MathLine = ({ math }: { math: string }) => (
//   <div className="overflow-x-auto -mx-1 px-1 [&_.katex-display]:text-left [&_.katex-display]:my-1 [&_.katex]:text-[1.06rem]">
//     <BlockMath math={math} />
//   </div>
// );

// ===== TOPIC CONTENT DATA (អាំងតេក្រាលមិនកំណត់) =====

// Renamed to `content` and typed as `TopicContent_V3[]`
const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "អាំងតេក្រាលកំណត់",
    content: (
      <TipBox 
        title="រូបមន្តច្បាប់ឡិននិច ញូតុន"
        content={
          <>
            <div>
              <InlineMath math={String.raw`អាំងតេក្រាលកំណត់ពី \, a \,ទៅ \, bនៃអនុគម៏ y = f(x)​ជាផកដកF(b) - F(a)។ ដែរF(x)ជាព្រីមីវទីវនៃf(x)`} />
            </div>            
            <div>
            <InlineMath math={String.raw`គេកំណត់សរសេរ \int_a^b f(x)dx = [f(x)]_a^b = F(b) - F(a)។`} />
            </div>

          </>
        }
      />
    )
  },
  {
    type: "definition",
    title: "លក្ខណះអាំងតេក្រាលកំណត់",
    content: (
      <div className="space-y-5 [&_.katex-display]:text-left [&_.katex]:text-[1.05rem]">
        {/* A) Basic formulas in x */}
        <div className="round border-l-4 border-indigo-500 bg-indigo-50/70 p-4 shadow-sm">
          {/* <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-0.5 text-xs rounded-full bg-indigo-200/70 text-indigo-800">
              ១
            </span>
            <p className="font-semibold">រូបមន្តមូលដ្ឋាន</p>
          </div> */}

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath math={String.raw`\int_a^a f(x)dx = 0`} />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`\int_a^b f(x)dx = -\int_b^a f(x)dx `}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`\int_a^b kf(x)dx = k\int_a^b f(x)dx `}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath math={String.raw`\int_a^b [f(x) + g(x)]dx = \int_a^b f(x)dx + \int_a^b g(x)dx`} />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`\int_a^b [f(x) - g(x)]dx = \int_a^b f(x)dx - \int_a^b g(x)`}
              />
            </li>
            <li className="rounded-lg bg-white/70 border border-sky-200 p-3">
              <InlineMath
                math={String.raw`\int_a^b f(x)dx =  \int_a^b f(z)dz = \int_a^b f(t)dt  `}
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
      <InlineMath math={String.raw`\text{គណនា }\ \int \frac{2x}{x^2+1}\,dx`} />
    ),
    steps: [
      {
        title: "ជ្រើសការជំនួស u",
        content: (
          <div>
            <p>ជ្រើស</p>
            <InlineMath math={String.raw`u=x^2+1 \ \Rightarrow\ du=2x\,dx`} />
            <p>អាំងតេក្រាលក្លាយជា</p>
            <InlineMath
              math={String.raw`\int \frac{2x}{x^2+1}\,dx \;=\; \int \frac{1}{u}\,du`}
            />
          </div>
        ),
      },
      {
        title: "អនុវត្តរូបមន្ត",
        content: (
          <InlineMath math={String.raw`\int \frac{1}{u}\,du \;=\; \ln|u| + C`} />
        ),
      },
      {
        title: "ប្ដូរវិញ​ទៅ x",
        content: (
          <InlineMath
            math={String.raw`=\ln|x^2+1|+C \;=\; \ln(x^2+1)+C`}
          />
        ),
      },
    ],
    // Converted string answer to JSX
    answer: <InlineMath math="\int \frac{2x}{x^2+1} dx = \ln(x^2+1) + C" />,
  },
  {
    type: "exercise",
    questions: [
      {
        id: "iq1",
        question: (
          <div>
            <p>គណនា</p>
            <InlineMath math={String.raw`\int \big(4x^3 - 6x\big)\,dx`} />
          </div>
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`x^4 - 3x^2 + C`,
          String.raw`x^4 - 6x^2 + C`,
          String.raw`x^4 - 3x + C`,
          String.raw`4x^4 - 6x^2 + C`,
        ],
        correctAnswer: 0,
      },
      {
        id: "iq2",
        question: (
          <div>
            <p>គណនា</p>
            <InlineMath math={String.raw`\int \cos(3x)\,dx`} />
          </div>
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`\sin(3x) + C`,
          String.raw`\tfrac{1}{3}\sin(3x) + C`,
          String.raw`3\sin(x) + C`,
          String.raw`-\tfrac{1}{3}\sin(3x) + C`,
        ],
        correctAnswer: 1,
      },
      {
        id: "iq3",
        question: (
          <div>
            <p>ជ្រើសលទ្ធផលត្រឹមត្រូវសម្រាប់</p>
            <InlineMath math={String.raw`\int \frac{3x^2}{1+x^3}\,dx`} />
          </div>
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`\frac{3}{4}\ln(1+x^3) + C`,
          String.raw`\ln(1+x^3) + C`,
          String.raw`\frac{1}{3}\ln(1+x^3) + C`,
          String.raw`3\ln(1+x^3) + C`,
        ],
        correctAnswer: 1,
      },
    ],
  },
];

// ===== MAIN COMPONENT =====
export default function IndefiniteIntegral() {
  // Stage 2: Serialized JSON
  const jsonV3 = serializeTopicContentV3(content);

  // Stage 3: Deserialized V3 with live React nodes (renderable)
  const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

  // Render
  return <ContentRendererV3 content={restoredContent} />;
}