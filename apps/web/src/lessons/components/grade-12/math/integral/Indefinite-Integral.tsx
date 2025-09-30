import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import ExerciseBox from "@/components/pages/docs/boxes/ExerciseBox";
import HintBox from "@/components/pages/docs/boxes/HintBox";
import WarningBox from "@/components/pages/docs/boxes/WarningBox";
import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";

/** ជំនួយ UI សម្រាប់បន្ទាត់គណិតសម្រាប់ទូរស័ព្ទ (ឆ្វេង & អូសបាន) */
const MathLine = ({ math }: { math: string }) => (
  <div className="overflow-x-auto -mx-1 px-1 [&_.katex-display]:text-left [&_.katex-display]:my-1 [&_.katex]:text-[1.06rem]">
    <BlockMath math={math} />
  </div>
);

// ===== TOPIC CONTENT DATA (អាំងតេក្រាលមិនកំណត់) =====
const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "អាំងតេក្រាលមិនកំណត់ (Indefinite Integral)",
    content: (
      <div className="space-y-4">
        <p>
          អាំងតេក្រាលមិនកំណត់​របស់អនុគមន៍ <em>f</em> គឺក្រុមអន្តរអនុគមន៍ទាំងអស់ <em>F</em> ដូច្នេះ
          <em> <InlineMath math={String.raw`F'(x)=f(x)`} /></em>។ សរសេរ៖
        </p>

        <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/60 p-4 shadow-sm">
          <MathLine math={String.raw`\int f(x)\,dx \;=\; F(x) + C`} />
          <p className="text-sm text-slate-700">ទីនេះ <span className="font-medium">C</span> ជា​ថេរ​អាំងតេក្រាល ដែលត្រូវបន្ថែមជានិច្ច។</p>
        </div>
      </div>
    ),
  },

  tip: {
    title: "ចំណុចសំខាន់ៗ",
    content: (
      <div className="space-y-3">
        <div className="rounded-lg border-l-4 border-indigo-500 bg-indigo-50/70 p-3 shadow-sm">
          <p className="font-semibold text-indigo-800 mb-1">លីនេអារ៊ីតេ</p>
          <MathLine math={String.raw`\int \!\big(c\,f(x)+g(x)\big)\,dx \;=\; c\!\int f(x)\,dx \;+\; \int g(x)\,dx`} />
        </div>

        <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-50/70 p-3 shadow-sm">
          <p className="font-semibold text-emerald-800 mb-1">ច្បាប់អំណាច</p>
          <MathLine math={String.raw`\int x^{\,n}\,dx \;=\; \frac{x^{\,n+1}}{n+1} + C \qquad (n\ne -1)`} />
        </div>

        <div className="rounded-lg border-l-4 border-fuchsia-500 bg-fuchsia-50/70 p-3 shadow-sm">
          <p className="font-semibold text-fuchsia-800 mb-1">ការជំនួស u</p>
          <MathLine math={String.raw`\int f\!\big(g(x)\big)\,g'(x)\,dx \;=\; \int f(u)\,du \;=\; F(u)+C`} />
        </div>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50/70 p-3 shadow-sm">
          <p className="font-semibold text-amber-800 mb-1">អាំងតេក្រាល់តាមផ្នែក</p>
          <MathLine math={String.raw`\int u\,dv \;=\; u\,v \;-\; \int v\,du`} />
        </div>
      </div>
    ),
  },

  example: {
    question: <MathLine math={String.raw`\text{គណនា }\ \int \frac{2x}{x^2+1}\,dx`} />,
    steps: [
      {
        title: "ជ្រើសការជំនួស u",
        content: (
          <div>
            <p>ជ្រើស</p>
            <MathLine math={String.raw`u=x^2+1 \ \Rightarrow\ du=2x\,dx`} />
            <p>អាំងតេក្រាលក្លាយជា</p>
            <MathLine math={String.raw`\int \frac{2x}{x^2+1}\,dx \;=\; \int \frac{1}{u}\,du`} />
          </div>
        ),
      },
      {
        title: "អនុវត្តរូបមន្ត",
        content: <MathLine math={String.raw`\int \frac{1}{u}\,du \;=\; \ln|u| + C`} />,
      },
      {
        title: "ប្ដូរវិញ​ទៅ x",
        content: <MathLine math={String.raw`=\ln|x^2+1|+C \;=\; \ln(x^2+1)+C`} />,
      },
    ],
    answer: "∫ (2x/(x²+1)) dx = ln(x²+1) + C",
  },

  exercise: {
    questions: [
      {
        id: "iq1",
        question: (
          <div>
            <p>គណនា</p>
            <MathLine math={String.raw`\int \big(4x^3 - 6x\big)\,dx`} />
          </div>
        ),
        options: [
          <MathLine key="iq1o0" math={String.raw`x^4 - 3x^2 + C`} />,
          <MathLine key="iq1o1" math={String.raw`x^4 - 6x^2 + C`} />,
          <MathLine key="iq1o2" math={String.raw`x^4 - 3x + C`} />,
          <MathLine key="iq1o3" math={String.raw`4x^4 - 6x^2 + C`} />,
        ],
        correctAnswer: 0,
      },
      {
        id: "iq2",
        question: (
          <div>
            <p>គណនា</p>
            <MathLine math={String.raw`\int \cos(3x)\,dx`} />
          </div>
        ),
        options: [
          <MathLine key="iq2o0" math={String.raw`\sin(3x) + C`} />,
          <MathLine key="iq2o1" math={String.raw`\tfrac{1}{3}\sin(3x) + C`} />,
          <MathLine key="iq2o2" math={String.raw`3\sin(x) + C`} />,
          <MathLine key="iq2o3" math={String.raw`-\tfrac{1}{3}\sin(3x) + C`} />,
        ],
        correctAnswer: 1,
      },
      {
        id: "iq3",
        question: (
          <div>
            <p>ជ្រើសលទ្ធផលត្រឹមត្រូវសម្រាប់</p>
            <MathLine math={String.raw`\int \frac{3x^2}{1+x^3}\,dx`} />
          </div>
        ),
        options: [
          <MathLine key="iq3o0" math={String.raw`\frac{3}{4}\ln(1+x^3) + C`} />,
          <MathLine key="iq3o1" math={String.raw`\ln(1+x^3) + C`} />,
          <MathLine key="iq3o2" math={String.raw`\frac{1}{3}\ln(1+x^3) + C`} />,
          <MathLine key="iq3o3" math={String.raw`3\ln(1+x^3) + C`} />,
        ],
        correctAnswer: 1,
      },
    ],
  },

  hint: {
    content: (
      <div className="space-y-3">
        <p>• សម្រាប់ការជំនួស <span className="font-medium">u</span> ចូរជ្រើស u ដូច្នេះ du លេចឡើងជាក់ស្តែងក្នុង dx៖</p>
        <MathLine math={String.raw`u=g(x),\quad du=g'(x)\,dx \ \Rightarrow\ \int f(g(x))\,g'(x)\,dx=\int f(u)\,du`} />
        <p>• សម្រាប់ <span className="font-medium">cos(ax), sin(ax)</span> ត្រូវមានកត្តា <Inline>1/a</Inline>៖</p>
        <MathLine math={String.raw`\int \cos(ax)\,dx=\frac{1}{a}\sin(ax)+C \qquad,\qquad \int \sin(ax)\,dx=-\frac{1}{a}\cos(ax)+C`} />
      </div>
    ),
  },

  warning: {
    content: (
      <div className="space-y-1.5">
        <p>• កុំភ្លេចបន្ថែម <span className="font-medium">+ C</span> រាល់អាំងតេក្រាលមិនកំណត់។</p>
        <p>• សម្រាប់ <span className="font-medium">∫(1/x) dx</span> ត្រូវជា <span className="font-medium">ln|x| + C</span> មិនមែន ln(x) ដោយគ្មាន absolute value ទេ។</p>
        <p>• ត្រួតពិនិត្យត្រឡប់វិញដោយយកដេរីវេលើចម្លើយ រួចត្រូវតែបាន integrand ដើមវិញ។</p>
      </div>
    ),
  },
};

// ===== MAIN COMPONENT =====
export default function IndefiniteIntegral() {
  return (
    <>
      {TOPIC_CONTENT.definition && (
        <DefinitionBox
          title={TOPIC_CONTENT.definition.title}
          content={TOPIC_CONTENT.definition.content}
        />
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

/** inline text helper (គ្មាន dependency បន្ថែម) */
function Inline({ children }: { children: React.ReactNode }) {
  return <span className="px-1 py-0.5 rounded bg-slate-100">{children}</span>;
}
