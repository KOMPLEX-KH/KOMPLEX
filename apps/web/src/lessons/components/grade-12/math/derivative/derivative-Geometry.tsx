import { DefinitionBox } from '@/components/pages/docs/boxes/DefinitionBox'
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
import { HintBox } from "@/components/pages/docs/boxes/HintBox";
import { WarningBox } from "@/components/pages/docs/boxes/WarningBox";
import { TopicContent } from "@/types/docs/topic";
import { GraphBox } from "@/components/pages/docs/boxes/GraphBox";
import { InlineMath } from "react-katex";
import { MathScroll } from "@components/helper/MathScroll";

// ===== TOPIC CONTENT DATA (Derivative — Geometric Interpretation) =====

const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "ដេរីវេពីជគណិត",
    content: (
      <div className="space-y-4 [&_.katex-display]:text-left">
        {/* និយមន័យត្រង់ចំណុច a */}
        <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/60 p-4 shadow-sm space-y-1.5 min-w-0">
          <p className="font-semibold text-slate-800">និយមន័យត្រង់ចំណុច <em>a</em></p>
          <p>
            អនុគមន៍ <InlineMath math={String.raw`f`} /> ត្រូវកំណត់នៅ{" "}
            <InlineMath math={String.raw`x=a`} /> និងជុំវិញវា។
          </p>
          <MathScroll math={String.raw`f'(a)=\lim_{h\to 0}\frac{f(a+h)-f(a)}{h}`} />
          <MathScroll math={String.raw`=\lim_{x\to a}\frac{f(x)-f(a)}{x-a}`} />
        </div>

        {/* ដេរីវេខាងឆ្វេង/ស្តាំ */}
        <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50/60 p-4 shadow-sm space-y-1.5 min-w-0">
          <p className="font-semibold text-slate-800">ដេរីវេខាងឆ្វេង និង ដេរីវេខាងស្តាំ</p>
          <MathScroll
            math={String.raw`f'_{-}(a)=\lim_{h\to 0^-}\frac{f(a+h)-f(a)}{h},\qquad
f'_{+}(a)=\lim_{h\to 0^+}\frac{f(a+h)-f(a)}{h}`}
          />
          <MathScroll math={String.raw`\text{មាន } f'(a)\ \Longleftrightarrow\ f'_{-}(a)=f'_{+}(a).`} />
        </div>

        {/* និមិត្តសញ្ញា */}
        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50/60 p-4 shadow-sm space-y-1.5 min-w-0">
          <p className="font-semibold text-slate-800">និមិត្តសញ្ញា</p>
          <MathScroll math={String.raw`y'=f'(x)=\dfrac{dy}{dx}=\dfrac{df}{dx}`} />
          <p>
            បើ <InlineMath math={String.raw`f'(x)`} /> មានលើចន្លោះ{" "}
            <InlineMath math={String.raw`I`} /> នោះ <InlineMath math={String.raw`f`} /> មានដេរីវេលើ{" "}
            <InlineMath math={String.raw`I`} />។
          </p>
        </div>
      </div>
    ),
  },

  tip: {
    title: "ចំណុចសំខាន់ៗ (តាមសៀវភៅ)",
    content: (
      <div className="space-y-3 [&_.katex-display]:text-left">
        {/* 1) លក្ខខណ្ឌមានដេរីវេត្រង់ a */}
        <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50/60 p-4 shadow-sm min-w-0">
          <p className="font-semibold text-slate-800 mb-1">លក្ខខណ្ឌមានដេរីវេត្រង់ <em>a</em></p>
          <p>
            អនុគមន៍ <InlineMath math={String.raw`f`} /> ត្រូវកំណត់ជុំវិញ{" "}
            <InlineMath math={String.raw`a`} /> ហើយ
          </p>
          <MathScroll
            math={String.raw`f'_{-}(a)=\lim_{h\to 0^-}\frac{f(a+h)-f(a)}{h},\quad
f'_{+}(a)=\lim_{h\to 0^+}\frac{f(a+h)-f(a)}{h}`}
          />
          <MathScroll math={String.raw`\text{មាន } f'(a)\ \Longleftrightarrow\ f'_{-}(a)=f'_{+}(a)`} />
        </div>

        {/* 2) ភាពជាប់លាប់ */}
        <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/60 p-4 shadow-sm min-w-0">
          <p className="font-semibold text-slate-800 mb-1">Differentiable ⟹ Continuous</p>
          <p>
            បើ <InlineMath math={String.raw`f`} /> មានដេរីវេត្រង់{" "}
            <InlineMath math={String.raw`a`} /> នោះ <InlineMath math={String.raw`f`} /> ជាប់លាប់ត្រង់{" "}
            <InlineMath math={String.raw`a`} />៖
          </p>
          <MathScroll math={String.raw`\lim_{x\to a}f(x)=f(a)`} />
          <p className="text-sm text-slate-700">
            មិនត្រឡប់វិញទេ (ឧ. <InlineMath math={String.raw`f(x)=|x|`} /> ជាប់លាប់ តែគ្មានដេរីវេត្រង់{" "}
            <InlineMath math={String.raw`0`} />)។
          </p>
        </div>

        {/* 3) សមីការបន្ទាត់ប៉ះ */}
        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50/60 p-4 shadow-sm min-w-0">
          <p className="font-semibold text-slate-800 mb-1">សមីការបន្ទាត់ប៉ះត្រង់ <em>a</em></p>
          <MathScroll
            math={String.raw`y-f(a)=f'(a)\,(x-a)\quad\Longleftrightarrow\quad y=f'(a)(x-a)+f(a)`}
          />
        </div>

        {/* 4) អត្រាមធ្យម vs ភ្លាមៗ */}
        <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/60 p-4 shadow-sm min-w-0">
          <p className="font-semibold text-slate-800 mb-1">អត្រាប្រែប្រួល</p>
          <MathScroll
            math={String.raw`\text{អត្រាមធ្យម}=\dfrac{f(a+h)-f(a)}{h}\ (h=0),\qquad
\text{អត្រាភ្លាមៗ}=f'(a)=\lim_{h\to 0}\dfrac{f(a+h)-f(a)}{h}`}
          />
          <p className="text-sm text-slate-700">
            សញ្ញា៖ <InlineMath math={String.raw`f'(a)>0`} /> បង្ហាញឡើង,{" "}
            <InlineMath math={String.raw`f'(a)<0`} /> បង្ហាញចុះ,{" "}
            <InlineMath math={String.raw`f'(a)=0`} /> បន្ទាត់ប៉ះផ្តេក។
          </p>
        </div>
      </div>
    ),
  },

  example: {
    question: <MathScroll math={String.raw`\text{រកស្លាបបន្ទាត់ប៉ះនៅ } x=1 \text{ សម្រាប់ } f(x)=x^2`} />,
    steps: [
      {
        title: "ស្លាបបន្ទាត់កាត់ជាមួយ h ទូទៅ",
        content: (
          <div className="space-y-1 min-w-0">
            <p>សរសេរស្លាបបន្ទាត់កាត់ពីចំណុច (1, f(1)) ទៅ (1+h, f(1+h))</p>
            <MathScroll math={String.raw`\dfrac{f(1+h)-f(1)}{h}=\dfrac{(1+h)^2-1^2}{h}`} />
          </div>
        ),
      },
      {
        title: "សម្រួលកន្សោម",
        content: <MathScroll math={String.raw`=\dfrac{1+2h+h^2-1}{h}=\dfrac{2h+h^2}{h}=2+h`} />,
      },
      {
        title: "យកលីមីត h → 0",
        content: <MathScroll math={String.raw`\lim_{h\to 0}(2+h)=2`} />,
      },
      {
        title: "សមីការបន្ទាត់ប៉ះ",
        content: (
          <div className="space-y-1 min-w-0">
            <p>ស្លាប = 2 និង f(1)=1 ដូចនេះសមីការបន្ទាត់ប៉ះ៖</p>
            <MathScroll math={String.raw`y-1=2(x-1)\ \ \Longrightarrow\ \ y=2x-1`} />
          </div>
        ),
      },
    ],
    answer: "ស្លាបបន្ទាត់ប៉ះនៅ x=1 ស្មើ 2 និងបន្ទាត់ប៉ះ៖ y = 2x - 1",
  },

  exercise: {
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
        options: [
          <MathScroll key="gq1o0" math={String.raw`2`} />,
          <MathScroll key="gq1o1" math={String.raw`3`} />,
          <MathScroll key="gq1o2" math={String.raw`4`} />,
          <MathScroll key="gq1o3" math={String.raw`5`} />,
        ],
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
        options: [
          <MathScroll key="gq2o0" math={String.raw`\dfrac{(a+h)^2-a^2}{h} = 2a+h`} />,
          <MathScroll key="gq2o1" math={String.raw`\dfrac{(a+h)^2-a^2}{h} = 2a-h`} />,
          <MathScroll key="gq2o2" math={String.raw`\dfrac{(a+h)^2-a^2}{h} = a^2+2h`} />,
          <MathScroll key="gq2o3" math={String.raw`\dfrac{(a+h)^2-a^2}{h} = 2h+a`} />,
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
        options: [
          <MathScroll key="gq3o0" math={String.raw`f'(1)=3 \ (\text{វិជ្ជមាន})`} />,
          <MathScroll key="gq3o1" math={String.raw`f'(1)=-3 \ (\text{អវិជ្ជមាន})`} />,
          <MathScroll key="gq3o2" math={String.raw`f'(1)=0`} />,
          <MathScroll key="gq3o3" math={String.raw`\text{មិនកំណត់}`} />,
        ],
        correctAnswer: 1,
      },
    ],
  },

  hint: {
    content: (
      <div className="space-y-2 min-w-0">
        <p>
          ចង់យល់ផ្លូវធរណីមាត្រ៖ គណនាស្លាបបន្ទាត់កាត់ជាមួយ h តូចៗ ហើយមើលវាខិតទៅតម្លៃថេរ។
        </p>
        <MathScroll
          math={String.raw`\text{slope}=\dfrac{f(a+h)-f(a)}{h} \ \xrightarrow{h\to 0}\ f'(a)`}
        />
        <p>សញ្ញានៃស្លាបបង្ហាញទិសដៅឡើង/ចុះនៃក្រាបជុំវិញចំណុច។</p>
      </div>
    ),
  },

  warning: {
    content: (
      <div className="space-y-1 min-w-0">
        <p>កុំច្រឡំអត្រាប្រែប្រួលមធ្យម (secant) ជាមួយអត្រាប្រែប្រួលភ្លាមៗ (tangent)។</p>
        <p>បើមិនអាចទាត់ h ចេញពីភាគរយបាន កុំយកលីមីតភ្លាមៗ—សម្រួលជាមុនសិន។</p>
      </div>
    ),
  },

  graph: {
    expressions: [
      { id: "f", latex: "f(x)=x^2", color: "#c00" },
      { id: "t", latex: "t(x)=2*(x-1)+1", color: "#00c" },
      { id: "s", latex: "s(x)=2.5*(x-1)+1", color: "#888" },
    ],
  },
};

// ===== MAIN COMPONENT =====

export default function DerivativeGeometric() {
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
      {TOPIC_CONTENT.graph && <GraphBox expressions={TOPIC_CONTENT.graph.expressions} />}
    </>
  );
}
