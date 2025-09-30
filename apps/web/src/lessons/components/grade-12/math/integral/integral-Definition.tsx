import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import ExerciseBox from "@/components/pages/docs/boxes/ExerciseBox";
import HintBox from "@/components/pages/docs/boxes/HintBox";
import WarningBox from "@/components/pages/docs/boxes/WarningBox";
import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";

/** ជំនួយ UI: បង្ហាញសមីការ​ឲ្យអូសបានលើទូរស័ព្ទ និងតម្រៀបឆ្វេង */
const MathLine = ({ math }: { math: string }) => (
  <div className="overflow-x-auto -mx-1 px-1 [&_.katex-display]:text-left [&_.katex-display]:my-1 [&_.katex]:text-[1.06rem]">
    <BlockMath math={math} />
  </div>
);

// ===== TOPIC CONTENT DATA (អាំងតេក្រាលកំណត់) =====
const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "និយមន័យអាំងតេក្រាល (Definite Integral)",
    content: (
      <div className="space-y-5">
        <p>
          អាំងតេក្រាលកំណត់នៃអនុគមន៍ <em>f</em> លើចន្លោះ <em>[a,b]</em> តំណាងឱ្យ
          “តំបន់មានសញ្ញា” ក្រោមក្រាប <em>f</em> ពី <em>a</em> ទៅ <em>b</em>។
        </p>

        {/* Riemann definition */}
        <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/60 p-4 shadow-sm space-y-1.5">
          <p className="font-semibold text-slate-800">និយមន័យ Riemann</p>
          <MathLine math={String.raw`
a=x_0<x_1<\cdots<x_n=b,\quad
\Delta x_i=x_i-x_{i-1},\quad
x_i^*\in[x_{i-1},x_i]
`} />
          <MathLine math={String.raw`
\int_a^b f(x)\,dx
=\lim_{\|P\|\to 0}\sum_{i=1}^n f(x_i^*)\,\Delta x_i,
\qquad
\|P\|=\max_{1\le i\le n}\Delta x_i
`} />
          <p className="text-sm text-slate-700">
            បើ <InlineMath math="f" /> ជាប់លាប់លើ <InlineMath math="[a,b]" /> នោះវា integrable (អាចយកអាំងតេក្រាលបាន) លើចន្លោះនោះ។
          </p>
        </div>

        {/* FTC */}
        <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50/60 p-4 shadow-sm space-y-2">
          <p className="font-semibold text-slate-800">ទ្រឹស្តីមូលដ្ឋាននៃកាលគុលូស (FTC)</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-lg bg-white/70 border border-emerald-200 p-3">
              <p className="text-sm font-medium text-slate-700 mb-1">ផ្នែក I (អនុគមន៍សមាត្រ)</p>
              <p className="text-sm mb-1">
                កំណត់ <InlineMath math={String.raw`G(x)=\int_a^x f(t)\,dt`} />។ បើ{" "}
                <InlineMath math="f" /> ជាប់លាប់ នៅពេលនោះ{" "}
              </p>
              <MathLine math={String.raw`G'(x)=f(x)`} />
            </div>
            <div className="rounded-lg bg-white/70 border border-emerald-200 p-3">
              <p className="text-sm font-medium text-slate-700 mb-1">ផ្នែក II (បញ្ចូលខ្ទង់)</p>
              <p className="text-sm mb-1">
                បើ <InlineMath math="F'(x)=f(x)" /> នោះ
              </p>
              <MathLine math={String.raw`\int_a^b f(x)\,dx=F(b)-F(a)`} />
            </div>
          </div>
        </div>
      </div>
    ),
  },

  tip: {
    title: "ចំណុចសំខាន់ៗ (លក្ខណៈ​មូលដ្ឋាន និងច្បាប់ជួយគណនា)",
    content: (
      <div className="space-y-3">
        {/* Properties grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="rounded-lg border-l-4 border-indigo-500 bg-indigo-50/70 p-3 shadow-sm">
            <p className="font-semibold text-indigo-800 mb-1">លីនេអារ៊ីតេ</p>
            <MathLine math={String.raw`\int_a^b (c\,f+g)\,dx=c\!\int_a^b f\,dx+\int_a^b g\,dx`} />
          </div>
          <div className="rounded-lg border-l-4 border-rose-500 bg-rose-50/70 p-3 shadow-sm">
            <p className="font-semibold text-rose-800 mb-1">ប្ដូរទិស</p>
            <MathLine math={String.raw`\int_a^b f\,dx=-\!\int_b^a f\,dx`} />
          </div>
          <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50/70 p-3 shadow-sm">
            <p className="font-semibold text-amber-800 mb-1">ចែកចន្លោះ</p>
            <MathLine math={String.raw`\int_a^b f\,dx=\int_a^c f\,dx+\int_c^b f\,dx`} />
          </div>
          <div className="rounded-lg border-l-4 border-teal-500 bg-teal-50/70 p-3 shadow-sm">
            <p className="font-semibold text-teal-800 mb-1">ចន្លោះសូន្យ</p>
            <MathLine math={String.raw`\int_a^a f\,dx=0`} />
          </div>
        </div>

        {/* Estimation / comparison / symmetry */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="rounded-lg border-l-4 border-sky-500 bg-sky-50/70 p-3 shadow-sm">
            <p className="font-semibold text-sky-800 mb-1">ប្រៀបធៀប និង​ដែនកំណត់</p>
            <MathLine math={String.raw`m\le f(x)\le M\ \Rightarrow\ m(b-a)\le \int_a^b f(x)\,dx\le M(b-a)`} />
            <MathLine math={String.raw`|{\textstyle\int_a^b} f\,dx|\ \le\ \int_a^b |f|\,dx`} />
          </div>
          <div className="rounded-lg border-l-4 border-fuchsia-500 bg-fuchsia-50/70 p-3 shadow-sm">
            <p className="font-semibold text-fuchsia-800 mb-1">សមមាឌ (even/odd)</p>
            <MathLine math={String.raw`\int_{-a}^{a}\text{odd}(x)\,dx=0`} />
            <MathLine math={String.raw`\int_{-a}^{a}\text{even}(x)\,dx=2\int_0^{a}\text{even}(x)\,dx`} />
          </div>
        </div>

        {/* Average value */}
        <div className="rounded-lg border-l-4 border-violet-500 bg-violet-50/70 p-3 shadow-sm">
          <p className="font-semibold text-violet-800 mb-1">តម្លៃមធ្យមនៃអនុគមន៍លើ [a,b]</p>
          <MathLine math={String.raw`f_{\text{avg}}=\frac{1}{b-a}\int_a^b f(x)\,dx`} />
        </div>
      </div>
    ),
  },

  example: {
    question: (
      <MathLine math={String.raw`\text{គណនា } \ \int_{0}^{2}\big(x^2+3x\big)\,dx \quad\text{និង}\quad \int_{0}^{\tfrac{\pi}{2}}\sin(2x)\,dx`} />
    ),
    steps: [
      {
        title: "ឧទាហរណ៍ ១ — បញ្ចូលខ្ទង់តាម FTC",
        content: (
          <div>
            <MathLine math={String.raw`F(x)=\frac{x^3}{3}+\frac{3}{2}x^2`} />
            <MathLine math={String.raw`\int_{0}^{2} (x^2+3x)\,dx=F(2)-F(0)=\frac{26}{3}`} />
          </div>
        ),
      },
      {
        title: "ឧទាហរណ៍ ២ — ផ្លាស់ប្តូរអថេរ (u-substitution)",
        content: (
          <div>
            <p>កំណត់ <InlineMath math="u=2x" /> ⟹ <InlineMath math="du=2\,dx" /> ⟹ <InlineMath math="dx=\tfrac{1}{2}du" />។</p>
            <p>ព្រំដែន៖ x=0 ⟹ u=0, x=π/2 ⟹ u=π។</p>
            <MathLine math={String.raw`\int_{0}^{\pi/2}\sin(2x)\,dx=\frac{1}{2}\int_{0}^{\pi}\sin u\,du`} />
            <MathLine math={String.raw`=\frac{1}{2}\big[-\cos u\big]_{0}^{\pi}=\frac{1}{2}\,( -(-1)-(-1) )=1`} />
          </div>
        ),
      },
      {
        title: "បន្ថែម — តំបន់រវាងក្រាបពីរ",
        content: (
          <div>
            <p>រវាង <InlineMath math="y=x" /> និង <InlineMath math="y=x^2" /> លើ [0,1]: តំបន់ = ∫(លើ−ក្រោម)។</p>
            <MathLine math={String.raw`\int_{0}^{1}\big(x-x^2\big)\,dx=\Big[\tfrac{x^2}{2}-\tfrac{x^3}{3}\Big]_0^1=\tfrac{1}{2}-\tfrac{1}{3}=\tfrac{1}{6}`} />
          </div>
        ),
      },
    ],
    answer:
      "∫₀² (x²+3x) dx = 26/3,  ∫₀^{π/2} sin(2x) dx = 1,  តំបន់រវាង y=x និង y=x² (0→1) = 1/6",
  },

  exercise: {
    questions: [
      // 1
      {
        id: "dq1",
        question: (
          <div>
            <p>គណនា</p>
            <MathLine math={String.raw`\int_{0}^{1} (2x+1)\,dx`} />
          </div>
        ),
        options: [
          <MathLine key="dq1o0" math={String.raw`1`} />,
          <MathLine key="dq1o1" math={String.raw`2`} />,
          <MathLine key="dq1o2" math={String.raw`\tfrac{3}{2}`} />,
          <MathLine key="dq1o3" math={String.raw`0`} />,
        ],
        correctAnswer: 1,
      },
      // 2
      {
        id: "dq2",
        question: (
          <div>
            <p>តម្លៃនៃ</p>
            <MathLine math={String.raw`\int_{-2}^{2} x^3\,dx`} />
            <p>ស្មើ?</p>
          </div>
        ),
        options: [
          <MathLine key="dq2o0" math={String.raw`0`} />,
          <MathLine key="dq2o1" math={String.raw`8`} />,
          <MathLine key="dq2o2" math={String.raw`-8`} />,
          <MathLine key="dq2o3" math={String.raw`16`} />,
        ],
        correctAnswer: 0,
      },
      // 3
      {
        id: "dq3",
        question: (
          <div>
            <p>គណនា</p>
            <MathLine math={String.raw`\int_{0}^{\pi} \sin x\,dx`} />
          </div>
        ),
        options: [
          <MathLine key="dq3o0" math={String.raw`2`} />,
          <MathLine key="dq3o1" math={String.raw`1`} />,
          <MathLine key="dq3o2" math={String.raw`0`} />,
          <MathLine key="dq3o3" math={String.raw`\pi`} />,
        ],
        correctAnswer: 0,
      },
      // 4
      {
        id: "dq4",
        question: (
          <div>
            <p>គណនា</p>
            <MathLine math={String.raw`\int_{0}^{1} \frac{1}{1+x}\,dx`} />
          </div>
        ),
        options: [
          <MathLine key="dq4o0" math={String.raw`\ln 2`} />,
          <MathLine key="dq4o1" math={String.raw`1-\ln 2`} />,
          <MathLine key="dq4o2" math={String.raw`2`} />,
          <MathLine key="dq4o3" math={String.raw`\tfrac{1}{2}`} />,
        ],
        correctAnswer: 0,
      },
      // 5
      {
        id: "dq5",
        question: (
          <div>
            <p>គណនា (u-substitution)</p>
            <MathLine math={String.raw`\int_{0}^{2} \frac{2x}{1+x^2}\,dx`} />
          </div>
        ),
        options: [
          <MathLine key="dq5o0" math={String.raw`\ln(5)`} />,
          <MathLine key="dq5o1" math={String.raw`\ln(2)`} />,
          <MathLine key="dq5o2" math={String.raw`\tfrac{1}{2}\ln(5)`} />,
          <MathLine key="dq5o3" math={String.raw`\ln(1+x^2)\big|_0^2`} />,
        ],
        correctAnswer: 0, // ln(1+x^2)|0..2 = ln 5
      },
      // 6
      {
        id: "dq6",
        question: (
          <div>
            <p>តម្លៃនៃ</p>
            <MathLine math={String.raw`\int_{0}^{1} |2x-1|\,dx`} />
            <p>ស្មើ?</p>
          </div>
        ),
        options: [
          <MathLine key="dq6o0" math={String.raw`\tfrac{1}{4}`} />,
          <MathLine key="dq6o1" math={String.raw`\tfrac{1}{2}`} />,
          <MathLine key="dq6o2" math={String.raw`\tfrac{3}{4}`} />,
          <MathLine key="dq6o3" math={String.raw`1`} />,
        ],
        correctAnswer: 1, // split at x=1/2 -> total 1/2
      },
    ],
  },

  hint: {
    content: (
      <div className="space-y-3">
        <div className="rounded-lg border-l-4 border-sky-500 bg-sky-50/70 p-3 shadow-sm">
          <p className="font-semibold text-slate-800 mb-1">របៀបគណនាតាមសៀវភៅ</p>
          <p>១) រកអន្តរអនុគមន៍ <InlineMath math="F" /> ដែល <InlineMath math="F'=f" /> → បញ្ចូលខ្ទង់ <InlineMath math="F(b)-F(a)" />។</p>
          <p>២) សម្រាប់ integrand ដែលសមស្របនឹង u-substitution ឬ parts ចូលរួម សូមបម្លែងជាមុនសិន។</p>
        </div>
        <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-50/70 p-3 shadow-sm">
          <p className="font-semibold text-slate-800 mb-1">ទម្រង់ពិសេស (កែព្រំដែន)</p>
          <MathLine math={String.raw`u=g(x),\ du=g'(x)\,dx\ \Rightarrow\ \int_{x=a}^{x=b} f(g(x))\,g'(x)\,dx=\int_{u=g(a)}^{u=g(b)} f(u)\,du`} />
          <MathLine math={String.raw`\int_a^b u\,dv=\Big[u\,v\Big]_a^b-\int_a^b v\,du`} />
        </div>
      </div>
    ),
  },

  warning: {
    content: (
      <div className="space-y-1.5">
        <p>• កុំបន្ថែម +C សម្រាប់អាំងតេក្រាល<strong>កំណត់</strong> (មានព្រំដែន)។</p>
        <p>• ប្ដូរទិសខ្ទង់នាំឲ្យប្ដូរសញ្ញា៖ <InlineMath math={String.raw`\int_a^b f\,dx=-\!\int_b^a f\,dx`} />។</p>
        <p>• ពេល u-substitution សម្រាប់អាំងតេក្រាលកំណត់ ត្រូវកែ <em>ព្រំដែន</em> ទៅតាម u ជានិច្ច។</p>
        <p>• ប្រើសមមាឌ odd/even ឲ្យបានត្រឹមត្រូវ ដើម្បីជៀសវាងគណនាយូរ។</p>
      </div>
    ),
  },
};

// ===== MAIN COMPONENT =====
export default function DefiniteIntegral() {
  return (
    <>
      <DefinitionBox
        title={TOPIC_CONTENT.definition!.title}
        content={TOPIC_CONTENT.definition!.content}
      />

      <TipBox title={TOPIC_CONTENT.tip!.title} content={TOPIC_CONTENT.tip!.content} />

      <ExampleBox
        question={TOPIC_CONTENT.example!.question}
        steps={TOPIC_CONTENT.example!.steps}
        answer={TOPIC_CONTENT.example!.answer}
      />

      <ExerciseBox questions={TOPIC_CONTENT.exercise!.questions} />

      <HintBox content={TOPIC_CONTENT.hint!.content} />

      <WarningBox content={TOPIC_CONTENT.warning!.content} />
    </>
  );
}
