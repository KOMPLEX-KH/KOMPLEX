import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import ExerciseBox from "@/components/pages/docs/boxes/ExerciseBox";
import HintBox from "@/components/pages/docs/boxes/HintBox";
import WarningBox from "@/components/pages/docs/boxes/WarningBox";
import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";
import GraphBox from "@/components/pages/docs/boxes/GraphBox";

// Make KaTeX blocks scrollable & left-aligned on narrow screens
const MathLine = ({ math }: { math: string }) => (
  <div className="overflow-x-auto -mx-1 px-1 [&_.katex-display]:text-left [&_.katex-display]:my-1 [&_.katex]:text-[1.05rem]">
    <BlockMath math={math} />
  </div>
);

// ===== TOPIC CONTENT DATA (Derivative — Exponential Functions) =====

const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "រូបមន្តដេរីវេ — អិចស្បូណង់ស្យែល",
    content: (
      <div className="space-y-5">
        {/* a) Exponential with variable x */}
        <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
          <p className="font-semibold mb-3 text-slate-800">
            ក) អនុគមន៍អិចស្បូណង់ស្យែល (អថេរ x)
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
                <MathLine math={m} />
              </li>
            ))}
          </ul>
        </div>

        {/* b) Exponential with u(x) (chain rule) */}
        <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50/70 p-4 shadow-sm">
          <p className="font-semibold mb-3 text-slate-800">
            ខ) ជាមួយអាគុយម៉ង់ <InlineMath math={String.raw`u=u(x)`} />
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
                <MathLine math={m} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },

  tip: {
    title: "ចំណុចសំខាន់ៗ",
    content: (
      <div className="space-y-3">
        <div className="rounded-lg border-l-4 border-indigo-500 bg-indigo-50/70 p-3 shadow-sm">
          <p className="font-semibold text-indigo-900 mb-1">សញ្ញាសំខាន់</p>
          <p className="text-slate-700">
            • <InlineMath math={String.raw`e^{x}`} /> ដេរីវេស្មើខ្លួនវាផ្ទាល់។
          </p>
          <MathLine math={String.raw`(e^{kx+b})' = k\,e^{kx+b}`} />
        </div>

        <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-50/70 p-3 shadow-sm">
          <p className="font-semibold text-emerald-900 mb-1">មូលដ្ឋានទូទៅ</p>
          <p className="text-slate-700">
            • សម្រាប់ <InlineMath math={String.raw`a^x`} /> ត្រូវមាន{" "}
            <InlineMath math={String.raw`\ln(a)`} /> ជាកត្តា។
          </p>
          <MathLine math={String.raw`(a^{x})' = a^{x}\ln(a)`} />
          <MathLine math={String.raw`(a^{g(x)})' = g'(x)\,a^{g(x)}\ln(a)`} />
        </div>
      </div>
    ),
  },

  example: {
    question: (
      <MathLine
        math={String.raw`\text{រក } y' \text{ សម្រាប់ } y = e^{2x} - 4e^{-x} + 3\cdot 5^{x}`}
      />
    ),
    steps: [
      {
        title: "យកដេរីវេនីមួយៗ",
        content: (
          <>
            <MathLine math={String.raw`\frac{d}{dx}(e^{2x}) = 2e^{2x}`} />
            <MathLine math={String.raw`\frac{d}{dx}(-4e^{-x}) = -4\cdot(-e^{-x}) = 4e^{-x}`} />
            <MathLine math={String.raw`\frac{d}{dx}(3\cdot 5^{x}) = 3\cdot 5^{x}\ln(5)`} />
          </>
        ),
      },
      {
        title: "បូកលទ្ធផល",
        content: <MathLine math={String.raw`y' = 2e^{2x} + 4e^{-x} + 3\ln(5)\,5^{x}`} />,
      },
      {
        title: "ចម្លើយ",
        content:
          <MathLine math={String.raw`y' = 2e^{2x} + 4e^{-x} + 3\ln(5)\,5^{x}`} />,
      },
    ],
    answer: <InlineMath math={String.raw`y' = 2e^{2x} + 4e^{-x} + 3\ln(5)\,5^{x}`} />,
  },

  exercise: {
    questions: [
      {
        id: "eq1",
        question: (
          <>
            <p>ដេរីវេនៃ</p>
            <MathLine math={String.raw`y = e^{3x}`} />
            <p>គឺ?</p>
          </>
        ),
        options: [
          <MathLine key="eq1o0" math={String.raw`3e^{3x}`} />,
          <MathLine key="eq1o1" math={String.raw`e^{3x}`} />,
          <MathLine key="eq1o2" math={String.raw`3e^{x}`} />,
          <MathLine key="eq1o3" math={String.raw`e^{x}`} />,
        ],
        correctAnswer: 0,
      },
      {
        id: "eq2",
        question: (
          <>
            <p>ដេរីវេនៃ</p>
            <MathLine math={String.raw`y = 2^{x}`} />
            <p>គឺ?</p>
          </>
        ),
        options: [
          <MathLine key="eq2o0" math={String.raw`2^{x}`} />,
          <MathLine key="eq2o1" math={String.raw`\ln(2)\,2^{x}`} />,
          <MathLine key="eq2o2" math={String.raw`\ln(e)\,2^{x}`} />,
          <MathLine key="eq2o3" math={String.raw`\dfrac{1}{\ln(2)}\,2^{x}`} />,
        ],
        correctAnswer: 1,
      },
      {
        id: "eq3",
        question: (
          <>
            <p>គណនា</p>
            <MathLine math={String.raw`y'(0) \text{ សម្រាប់ } y = e^{x} + 5\cdot 3^{x}`} />
          </>
        ),
        options: [
          <MathLine key="eq3o0" math={String.raw`1 + 5\ln(3)`} />,
          <MathLine key="eq3o1" math={String.raw`\ln(3) + 5`} />,
          <MathLine key="eq3o2" math={String.raw`6`} />,
          <MathLine key="eq3o3" math={String.raw`5\ln(3)`} />,
        ],
        correctAnswer: 0,
      },
    ],
  },

  hint: {
    content: (
      <div className="space-y-2">
        <p>ចងចាំ៖ អាចសរសេរ <InlineMath math={String.raw`a^x = e^{x\ln a}`} /> ហើយយកដេរីវេតាមខ្សែសង្វាក់៖</p>
        <MathLine math={String.raw`\frac{d}{dx}\big(e^{x\ln a}\big) = (\ln a)\,e^{x\ln a} = (\ln a)\,a^{x}`} />
        <p>សម្រាប់ <InlineMath math={String.raw`e^{kx+b}`} /> មាន</p>
        <MathLine math={String.raw`\frac{d}{dx}\big(e^{kx+b}\big)=k\,e^{kx+b}`} />
      </div>
    ),
  },

  warning: {
    content: (
      <div className="space-y-1">
        <p>• កុំភ្លេចកត្តា <InlineMath math={String.raw`\ln(a)`} /> សម្រាប់ <InlineMath math={String.raw`a^x`} />។</p>
        <p>
          • ប្រើខ្សែសង្វាក់ពេលអាគុយម៉ង់មិនមែន x តែប៉ុណ្ណោះ (ឧ.{" "}
          <InlineMath math={String.raw`e^{2x-1}`} />,{" "}
          <InlineMath math={String.raw`3^{x^2}`} />)។
        </p>
        <p>• បើជាប្រូដាក់ (ឧ. <InlineMath math={String.raw`x\,e^x`} />) ត្រូវប្រើច្បាប់គុណ មិនមែនខ្សែសង្វាក់។</p>
      </div>
    ),
  },

  graph: {
    expressions: [
      { id: "e", latex: "f(x)=exp(x)", color: "#c00" },
      { id: "eprime", latex: "g(x)=exp(x)", color: "#00c" },
      { id: "two", latex: "h(x)=2^x", color: "#0a0" },
      { id: "twoprime", latex: "k(x)=0.69314718056*2^x", color: "#a0a" },
    ],
  },
};

// ===== MAIN COMPONENT =====

export default function DerivativeExponential() {
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
      {TOPIC_CONTENT.graph && (
        <GraphBox expressions={TOPIC_CONTENT.graph.expressions} />
      )}
    </>
  );
}
