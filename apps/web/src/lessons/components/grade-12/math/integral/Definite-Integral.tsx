import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
import { HintBox } from "@/components/pages/docs/boxes/HintBox";
import { WarningBox } from "@/components/pages/docs/boxes/WarningBox";
import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";

// Helper: left-aligned, horizontally scrollable math line (mobile-friendly)
const MathLine = ({ math }: { math: string }) => (
  <div className="overflow-x-auto -mx-1 px-1 [&_.katex-display]:text-left [&_.katex-display]:my-1 [&_.katex]:text-[1.06rem]">
    <BlockMath math={math} />
  </div>
);

// ===== TOPIC CONTENT DATA (Definite Integral) =====
const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "អាំងតេក្រាលកំណត់ (Definite Integral)",
    content: (
      <div className="space-y-4">
        <p>
          អាំងតេក្រាលកំណត់នៃអនុគមន៍ <em>f</em> លើចន្លោះ <em>[a,b]</em> តំណាងឱ្យ
          “តំបន់មានសញ្ញា” ក្រោមក្រាបពី a ទៅ b។ និយមន័យ៖
        </p>

        <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/60 p-4 shadow-sm">
          <MathLine
            math={String.raw`\int_a^b f(x)\,dx \;=\; \lim_{n\to\infty}\sum_{i=1}^{n} f(x_i^*)\,\Delta x,\qquad \Delta x=\frac{b-a}{n}`}
          />
        </div>

        <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50/60 p-4 shadow-sm">
          <p className="font-semibold text-slate-800 mb-1">ទ្រឹស្តីមូលដ្ឋាន</p>
          <p>
            បើ <InlineMath math={String.raw`F'(x)=f(x)`} /> នោះ
          </p>
          <MathLine math={String.raw`\int_a^b f(x)\,dx \;=\; F(b)-F(a)`} />
        </div>
      </div>
    ),
  },

  tip: {
    title: "ចំណុចសំខាន់ៗ",
    content: (
      <div className="space-y-3">
        <div className="rounded-lg border-l-4 border-indigo-500 bg-indigo-50/70 p-3 shadow-sm">
          <p className="font-semibold text-indigo-800 mb-1">
            Linearity (លីនេអារ៊ីតេ)
          </p>
          <MathLine
            math={String.raw`\int_a^b \big(c\,f(x)+g(x)\big)\,dx \;=\; c\!\int_a^b f(x)\,dx \;+\; \int_a^b g(x)\,dx`}
          />
        </div>

        <div className="rounded-lg border-l-4 border-rose-500 bg-rose-50/70 p-3 shadow-sm">
          <p className="font-semibold text-rose-800 mb-1">
            Orientation (ផ្លាស់ប្តូរលំដាប់ខ្ទង់)
          </p>
          <MathLine
            math={String.raw`\int_a^b f(x)\,dx \;=\; -\int_b^a f(x)\,dx`}
          />
        </div>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50/70 p-3 shadow-sm">
          <p className="font-semibold text-amber-800 mb-1">
            Additivity (ចែកចន្លោះ)
          </p>
          <MathLine
            math={String.raw`\int_a^b f(x)\,dx \;=\; \int_a^c f(x)\,dx \;+\; \int_c^b f(x)\,dx`}
          />
        </div>

        <div className="rounded-lg border-l-4 border-fuchsia-500 bg-fuchsia-50/70 p-3 shadow-sm">
          <p className="font-semibold text-fuchsia-800 mb-1">
            Symmetry (សមមាឌពិសេស)
          </p>
          <MathLine
            math={String.raw`\int_{-a}^{a}\text{odd}(x)\,dx=0 \qquad,\qquad \int_{-a}^{a}\text{even}(x)\,dx=2\int_0^{a}\text{even}(x)\,dx`}
          />
        </div>
      </div>
    ),
  },

  example: {
    question: (
      <MathLine
        math={String.raw`\text{គណនា } \ \int_{0}^{2}\big(x^2+3x\big)\,dx`}
      />
    ),
    steps: [
      {
        title: "រកអន្តរអនុគមន៍ (Antiderivative)",
        content: (
          <>
            <MathLine math={String.raw`F(x)=\frac{x^3}{3}+\frac{3}{2}x^2`} />
            <p>ដោយ FTC មាន</p>
            <MathLine
              math={String.raw`\int_{0}^{2} (x^2+3x)\,dx = F(2)-F(0)`}
            />
          </>
        ),
      },
      {
        title: "បញ្ចូលខ្ទង់",
        content: (
          <>
            <MathLine
              math={String.raw`F(2)=\frac{2^3}{3}+\frac{3}{2}\cdot 2^2=\frac{8}{3}+6=\frac{26}{3}`}
            />
            <MathLine math={String.raw`F(0)=0`} />
          </>
        ),
      },
      {
        title: "ចម្លើយ",
        content: (
          <MathLine math={String.raw`\int_{0}^{2} (x^2+3x)\,dx=\frac{26}{3}`} />
        ),
      },
    ],
    answer: "∫₀² (x²+3x) dx = 26/3",
  },

  exercise: {
    questions: [
      {
        id: "dq1",
        question: (
          <>
            <p>គណនា</p>
            <MathLine math={String.raw`\int_{0}^{1} (2x+1)\,dx`} />
          </>
        ),
        options: [
          <MathLine key="dq1o0" math={String.raw`2`} />,
          <MathLine key="dq1o1" math={String.raw`1`} />,
          <MathLine key="dq1o2" math={String.raw`\frac{3}{2}`} />,
          <MathLine key="dq1o3" math={String.raw`0`} />,
        ],
        correctAnswer: 0,
      },
      {
        id: "dq2",
        question: (
          <>
            <p>តម្លៃនៃ</p>
            <MathLine math={String.raw`\int_{-2}^{2} x^3\,dx`} />
            <p>ស្មើ?</p>
          </>
        ),
        options: [
          <MathLine key="dq2o0" math={String.raw`0`} />,
          <MathLine key="dq2o1" math={String.raw`8`} />,
          <MathLine key="dq2o2" math={String.raw`-8`} />,
          <MathLine key="dq2o3" math={String.raw`16`} />,
        ],
        correctAnswer: 0,
      },
      {
        id: "dq3",
        question: (
          <>
            <p>គណនា</p>
            <MathLine math={String.raw`\int_{0}^{\pi} \sin x\,dx`} />
          </>
        ),
        options: [
          <MathLine key="dq3o0" math={String.raw`2`} />,
          <MathLine key="dq3o1" math={String.raw`1`} />,
          <MathLine key="dq3o2" math={String.raw`0`} />,
          <MathLine key="dq3o3" math={String.raw`\pi`} />,
        ],
        correctAnswer: 0,
      },
    ],
  },

  hint: {
    content: (
      <div className="space-y-3">
        <p>
          ប្រើ FTC៖ រក <InlineMath math={String.raw`F`} /> ដូច្នេះ{" "}
          <InlineMath math={String.raw`F'(x)=f(x)`} /> បន្ទាប់មកគណនា{" "}
          <InlineMath math={String.raw`F(b)-F(a)`} />។
        </p>
        <MathLine math={String.raw`\int_a^b f(x)\,dx = F(b)-F(a)`} />
        <p>អាចប្រើសមមាឌសម្រាប់ចម្លើយលឿននៅចន្លោះសមមាឌ៖</p>
        <MathLine
          math={String.raw`\int_{-a}^{a} \text{odd}(x)\,dx=0 \ ,\ \ \int_{-a}^{a} \text{even}(x)\,dx=2\int_{0}^{a}\text{even}(x)\,dx`}
        />
      </div>
    ),
  },

  warning: {
    content: (
      <div className="space-y-2">
        <p>
          • កុំច្រឡំអាំងតេក្រាល “កំណត់” ជាមួយអាំងតេក្រាល “មិនកំណត់” (ត្រូវ +C
          តែនៅករណីមិនកំណត់)។
        </p>
        <p>• ផ្លាស់ប្តូរលំដាប់ខ្ទង់បម្លែងសញ្ញា៖</p>
        <MathLine math={String.raw`\int_a^b f(x)\,dx = -\int_b^a f(x)\,dx`} />
        <p>
          • ត្រូវប្រាកដថា f អាចយកអាំងតេក្រាលបានលើ [a,b]
          (គ្មានចំណុចមិនកំណត់ក្នុងចន្លោះ)។
        </p>
      </div>
    ),
  },
};

// ===== MAIN COMPONENT =====
export default function DefiniteIntegral() {
  return (
    <>
      {TOPIC_CONTENT.definition && (
        <DefinitionBox
          title={TOPIC_CONTENT.definition.title}
          content={TOPIC_CONTENT.definition.content}
        />
      )}

      {TOPIC_CONTENT.tip && (
        <TipBox
          title={TOPIC_CONTENT.tip.title}
          content={TOPIC_CONTENT.tip.content}
        />
      )}

      {TOPIC_CONTENT.example && (
        <ExampleBox
          question={TOPIC_CONTENT.example.question}
          steps={TOPIC_CONTENT.example.steps}
          answer={TOPIC_CONTENT.example.answer}
        />
      )}

      {TOPIC_CONTENT.exercise && (
        <ExerciseBox questions={TOPIC_CONTENT.exercise.questions} />
      )}

      {TOPIC_CONTENT.hint && <HintBox content={TOPIC_CONTENT.hint.content} />}
      {TOPIC_CONTENT.warning && (
        <WarningBox content={TOPIC_CONTENT.warning.content} />
      )}
    </>
  );
}
