import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import ExerciseBox from "@/components/pages/docs/boxes/ExerciseBox";
import HintBox from "@/components/pages/docs/boxes/HintBox";
import WarningBox from "@/components/pages/docs/boxes/WarningBox";
import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";

const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "រូបមន្តអាំងតេក្រាល",
    content: (
      <>
        <p>រូបមន្តអាំងតេក្រាលមូលដ្ឋាន (Indefinite Integral Formulas):</p>

        {/* Linearity & constant multiple */}
        <BlockMath math={String.raw`\int \big(c\,f(x)+g(x)\big)\,dx \;=\; c\!\int f(x)\,dx \;+\; \int g(x)\,dx \;+\; C`} />
        <BlockMath math={String.raw`\int c\,dx \;=\; c\,x \;+\; C`} />

        {/* Power rule */}
        <BlockMath math={String.raw`\int x^n\,dx \;=\; \frac{x^{\,n+1}}{n+1} \;+\; C \quad (n\neq -1)`} />
        <BlockMath math={String.raw`\int \frac{1}{x}\,dx \;=\; \ln|x| \;+\; C`} />

        {/* Exponential */}
        <BlockMath math={String.raw`\int e^{ax}\,dx \;=\; \frac{1}{a}\,e^{ax} \;+\; C`} />
        <BlockMath math={String.raw`\int a^{x}\,dx \;=\; \frac{a^{x}}{\ln a} \;+\; C \quad (a>0,\ a\neq 1)`} />

        {/* Trig basics */}
        <BlockMath math={String.raw`\int \sin(ax)\,dx \;=\; -\frac{1}{a}\cos(ax) \;+\; C`} />
        <BlockMath math={String.raw`\int \cos(ax)\,dx \;=\; \frac{1}{a}\sin(ax) \;+\; C`} />
        <BlockMath math={String.raw`\int \sec^2(ax)\,dx \;=\; \frac{1}{a}\tan(ax) \;+\; C`} />
        <BlockMath math={String.raw`\int \csc^2(ax)\,dx \;=\; -\frac{1}{a}\cot(ax) \;+\; C`} />
        <BlockMath math={String.raw`\int \sec(ax)\tan(ax)\,dx \;=\; \frac{1}{a}\sec(ax) \;+\; C`} />
        <BlockMath math={String.raw`\int \csc(ax)\cot(ax)\,dx \;=\; -\frac{1}{a}\csc(ax) \;+\; C`} />

        {/* Tan/Cot */}
        <BlockMath math={String.raw`\int \tan(ax)\,dx \;=\; -\frac{1}{a}\ln|\cos(ax)| \;+\; C`} />
        <BlockMath math={String.raw`\int \cot(ax)\,dx \;=\; \frac{1}{a}\ln|\sin(ax)| \;+\; C`} />

        {/* Chain rule pattern (u-sub quick form) */}
        <BlockMath math={String.raw`\int f\!\big(g(x)\big)\,g'(x)\,dx \;=\; \int f(u)\,du \;=\; F\!\big(g(x)\big) \;+\; C`} />
      </>
    ),
  },

  tip: {
    title: "ចំណុចសំខាន់ៗ",
    content: (
      <>
        <p>• ប្រើលីនេអារ៊ីតេ ដើម្បីបំបែកអាំងតេក្រាលជាពីរផ្នែកងាយៗ។</p>
        <p>• ចងចាំកត្តា <em>1/a</em> នៅពេលអាំងតេក្រាលនៃ sin(ax), cos(ax), sec²(ax), …</p>
        <p>• សម្រាប់ a^x ត្រូវមាន <em>1/ln(a)</em>។ សូមប្រយ័ត្នពេល a ≠ e។</p>
        <p>• កុំភ្លេចបន្ថែម +C (constant of integration) រាល់អាំងតេក្រាលមិនកំណត់។</p>
      </>
    ),
  },

  example: {
    question: (
      <BlockMath math={String.raw`\text{គណនា } \ \int\!\Big(3x^2 \;+\; \frac{2}{x} \;-\; 5e^{2x}\;+\;4\Big)\,dx`} />
    ),
    steps: [
      {
        title: "បំបែកដោយលីនេអារ៊ីតេ",
        content: (
          <BlockMath math={String.raw`=\ \int 3x^2\,dx \;+\; \int \frac{2}{x}\,dx \;-\; \int 5e^{2x}\,dx \;+\; \int 4\,dx`} />
        ),
      },
      {
        title: "អនុវត្តរូបមន្តមូលដ្ឋាន",
        content: (
          <>
            <BlockMath math={String.raw`\int 3x^2\,dx \;=\; x^3`} />
            <BlockMath math={String.raw`\int \frac{2}{x}\,dx \;=\; 2\ln|x|`} />
            <BlockMath math={String.raw`\int 5e^{2x}\,dx \;=\; \frac{5}{2}e^{2x}`} />
            <BlockMath math={String.raw`\int 4\,dx \;=\; 4x`} />
          </>
        ),
      },
      {
        title: "បូកលទ្ធផល",
        content: (
          <BlockMath math={String.raw`\int\!\Big(3x^2 + \frac{2}{x} - 5e^{2x} + 4\Big)dx \;=\; x^3 \;+\; 2\ln|x| \;-\; \frac{5}{2}e^{2x} \;+\; 4x \;+\; C`} />
        ),
      },
    ],
    answer: "x³ + 2 ln|x| − (5/2) e^{2x} + 4x + C",
  },

  exercise: {
    questions: [
      {
        id: "if1",
        question: (
          <>
            <p>គណនា</p>
            <BlockMath math={String.raw`\int (2x^3 - 6x)\,dx`} />
          </>
        ),
        options: [
          <BlockMath key="if1o0" math={String.raw`\tfrac{1}{2}x^4 - 3x^2 + C`} />,
          <BlockMath key="if1o1" math={String.raw`2x^4 - 6x^2 + C`} />,
          <BlockMath key="if1o2" math={String.raw`\tfrac{1}{2}x^4 - 6x + C`} />,
          <BlockMath key="if1o3" math={String.raw`x^4 - 3x^2 + C`} />,
        ],
        correctAnswer: 0, // (2)(x^4/4) - 6(x^2/2) = (1/2)x^4 - 3x^2
      },
      {
        id: "if2",
        question: (
          <>
            <p>គណនា</p>
            <BlockMath math={String.raw`\int e^{3x}\,dx`} />
          </>
        ),
        options: [
          <BlockMath key="if2o0" math={String.raw`e^{3x} + C`} />,
          <BlockMath key="if2o1" math={String.raw`\tfrac{1}{3}e^{3x} + C`} />,
          <BlockMath key="if2o2" math={String.raw`3e^{x} + C`} />,
          <BlockMath key="if2o3" math={String.raw`3e^{3x} + C`} />,
        ],
        correctAnswer: 1, // (1/3)e^{3x}
      },
      {
        id: "if3",
        question: (
          <>
            <p>គណនា</p>
            <BlockMath math={String.raw`\int \sin(2x)\,dx`} />
          </>
        ),
        options: [
          <BlockMath key="if3o0" math={String.raw`-\cos(2x) + C`} />,
          <BlockMath key="if3o1" math={String.raw`\tfrac{1}{2}\cos(2x) + C`} />,
          <BlockMath key="if3o2" math={String.raw`-\tfrac{1}{2}\cos(2x) + C`} />,
          <BlockMath key="if3o3" math={String.raw`2\cos(2x) + C`} />,
        ],
        correctAnswer: 2, // -(1/2) cos(2x)
      },
    ],
  },

  hint: {
    content: (
      <>
        <p>• ប្រើ power rule សម្រាប់ x^n; ប្រសិនបើ n = -1 ប្រែទៅ ln|x|។</p>
        <p>• សម្រាប់ <BlockMath math={String.raw`\int e^{ax}\,dx`} /> និង <BlockMath math={String.raw`\int \sin(ax)\,dx`} /> / <BlockMath math={String.raw`\int \cos(ax)\,dx`} /> ចងចាំកត្តា 1/a។</p>
        <p>• ប្រើលីនេអារ៊ីតេ ដើម្បីបំបែកអាំងតេក្រាល និងគុណថេរ ដើម្បីយកថេរចេញក្រៅ ∫។</p>
      </>
    ),
  },

  warning: {
    content: (
      <>
        <p>• កុំភ្លេចបន្ថែម +C ទៅចុងក្រោយ។</p>
        <p>• ប្រុងប្រយ័ត្ន កុំភ្លេចកត្តា <InlineMath math={String.raw`\frac{1}{a}`} /> ឬ <InlineMath math={String.raw`\frac{1}{\ln a}`} /> នៅពេលអាំងតេក្រាលនៃ sin(ax), cos(ax), <BlockMath math={String.raw`\int e^{ax}\,dx`} />, a^x។</p>
        <p>• សម្រាប់ <InlineMath math={String.raw`\int \frac{1}{x}\,dx`} /> ត្រូវជានិច្ច ln|x| មិនមែន ln(x) ដោយគ្មាន Absolute Value ទេ។</p>
      </>
    ),
  },
};

// ===== MAIN COMPONENT =====

export default function IntegralFormulas() {
  return (
    <>
      {TOPIC_CONTENT.definition && (
        <DefinitionBox title={TOPIC_CONTENT.definition.title} content={TOPIC_CONTENT.definition.content} />
      )}
      {TOPIC_CONTENT.tip && (
        <TipBox title={TOPIC_CONTENT.tip.title} content={TOPIC_CONTENT.tip.content} />
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
      {TOPIC_CONTENT.warning && <WarningBox content={TOPIC_CONTENT.warning.content} />}
    </>
  );
}
