"use client";

// ----- NEW IMPORTS -----
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  serializeTopicContentV3,
  deserializeTopicContentV3,
} from "@/components/pages/docs/utils/ContentSerializerV2";

// ----- KEPT IMPORTS -----
import { InlineMath} from "react-katex";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { MathScroll } from "@components/helper/MathScroll";

// ===== TOPIC CONTENT DATA (Derivative — Geometric Interpretation) =====

// Renamed to `content` and typed as `TopicContent_V3[]`
const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "ដេរីវេត្រង់ចំណុច",
    content: (
      <div>
        <TipBox 
          title="និយមន័យ"
          content={
            <div className="space-y-2">
              <p>
                ដេរីវេនៃអនុគម៏ <InlineMath math="y = f(x)" />ត្រង់​​<InlineMath math="x = a" />ជាលីមីត (បើមាន)
              </p>
              <div className="[&_.katex-display]:left">
                <InlineMath  
                math = {String.raw`f'(a) = lim_{x \to a} = \frac{f(x) - f(a)}{x - a} = lim_{h \to 0} = \frac{f(a+h) - f(a)}{h}`}
              />
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
        math={String.raw`\text{ចូរគណនាដេរីវេនៃអនុគម៏} f(x) = x^2 \text{ ត្រង់ } x=1 \text{តាមនិយមន័យ។}`}
      />
    ),
    steps: [
      {
        title: "",
        content: (
          <div className="space-y-1 min-w-0">
            
            <InlineMath
              math={String.raw`ដោយ​ \, f'(1) = lim_{x \to 1} \frac{f(x) - f(1)}{x-1}`}
            />
          </div>
        ),
      },
      {
        title: "",
        content: (
          <InlineMath
            math={String.raw`= lim_{x \to 1} \frac{x^2-1^2}{x-1}`}
          />
        ),  
      },
      {
        title: "",
        content: <InlineMath math={String.raw`\lim_{x\to 1}\frac{(x-a)(x+a)}{x-1} = lim_{x\to1}(x+1)=2`} />,
      },
    ],
    // Converted string answer to JSX
    answer: (<InlineMath math="f'(1) = 2" />),
  },
  {
    type: "example",
    question: (
      <InlineMath
        math={String.raw`\text{ចូរគណនាដេរីវេនៃអនុគម៏} f(x) = \sqrt{x} \,\text{ ត្រង់ } x=a \text{តាមនិយមន័យ។}`}
      />
    ),
    steps: [
      {
        title: "",
        content: (
          <div className="space-y-1 min-w-0">
            
            <InlineMath
              math={String.raw`ដោយ​ \, f'(a) = lim_{x \to a} \frac{f(x) - f(a)}{x-a}`}
            />
          </div>
        ),
      },
      {
        title: "",
        content: (
          <InlineMath
            math={String.raw`= lim_{x \to a} \frac{\sqrt{x} - \sqrt{a} }{x-a}`}
          />
        ),  
      },
      {
        title: "",
        content: <InlineMath math={String.raw`= lim_{x\to a}\frac{(\sqrt{x}-\sqrt{a}) \, - \,(\sqrt{x}+\sqrt{a} )}{(x-a)(\sqrt{x}+\sqrt{a})} = lim_{x\to a}\frac{1}{(x-a)(\sqrt{x}+\sqrt{a})}`} />,
      },
      {
        title: "",
        content: <InlineMath math={String.raw`= lim_{x\to a}\frac{1}{(x-a)(\sqrt{x}+\sqrt{a})} = \frac{1}{2\sqrt{a}}`} />,
      }
    ],
    // Converted string answer to JSX
    answer: (<InlineMath math="f'(a) = \frac{1}{2\sqrt{a}}" />),
  },
  {
    type: "exercise",
    questions: [
      {
        id: "gq1",
        question: (
          <>
            <p>សម្រាប់</p>
            <MathScroll math={String.raw`f(x)=x^2`} />
            <p>ស្លាបបន្ទាត់ប៉ះនៅ x=2 ស្មើប៉ុន្មាន?</p>
          </>
        ),
        // Converted JSX options to string[]
        options: ["2", "3", "4", "5"],
        correctAnswer: 2,
      },
      {
        id: "gq2",
        question: (
          <>
            <p>ស្លាបបន្ទាត់កាត់ជុំវិញ x=a សម្រាប់</p>
            <MathScroll math={String.raw`f(x)=x^2`} />
            <p>គឺ:</p>
          </>
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`\dfrac{(a+h)^2-a^2}{h} = 2a+h`,
          String.raw`\dfrac{(a+h)^2-a^2}{h} = 2a-h`,
          String.raw`\dfrac{(a+h)^2-a^2}{h} = a^2+2h`,
          String.raw`\dfrac{(a+h)^2-a^2}{h} = 2h+a`,
        ],
        correctAnswer: 0,
      },
      {
        id: "gq3",
        question: (
          <>
            <p>សម្រាប់</p>
            <MathScroll math={String.raw`f(x)=-x^3`} />
            <p>តម្លៃដេរីវេនៅ x=1 និងសញ្ញារបស់វា?</p>
          </>
        ),
        // Converted JSX options to string[]
        options: [
          String.raw`f'(1)=3 \ (\text{វិជ្ជមាន})`,
          String.raw`f'(1)=-3 \ (\text{អវិជ្ជមាន})`,
          String.raw`f'(1)=0`,
          String.raw`\text{មិនកំណត់}`,
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    type: "graph",
    expressions: [
      { id: "f", latex: "f(x)=x^2", color: "#c00" },
      { id: "t", latex: "t(x)=2*(x-1)+1", color: "#00c" },
      { id: "s", latex: "s(x)=2.5*(x-1)+1", color: "#888" },
    ],
  },
];

// ===== MAIN COMPONENT =====

export default function DerivativeGeometric() {
  // Stage 2: Serialized JSON
  const jsonV3 = serializeTopicContentV3(content);

  // Stage 3: Deserialized V3 with live React nodes (renderable)
  const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

  // Render
  return <ContentRendererV3 content={restoredContent} />;
}