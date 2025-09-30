import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import ExerciseBox from "@/components/pages/docs/boxes/ExerciseBox";
import HintBox from "@/components/pages/docs/boxes/HintBox";
import WarningBox from "@/components/pages/docs/boxes/WarningBox";
import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";

// --- Helper: left-aligned, scrollable KaTeX line (great on mobile) ---
const MathLine = ({ math }: { math: string }) => (
  <div className="overflow-x-auto -mx-1 px-1 [&_.katex-display]:text-left [&_.katex-display]:my-1 [&_.katex]:text-[1.06rem]">
    <BlockMath math={math} />
  </div>
);

// ===== TOPIC CONTENT DATA (Higher-Order Derivatives) =====
const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "ដេរីវេលំដាប់ខ្ពស់",
    content: (
      <div className="space-y-4">
        <p>ដេរីវេលំដាប់ខ្ពស់ គឺដេរីវេដែលយកជាបន្តបន្ទាប់ពីអនុគមន៍ដើមៈ</p>

        {/* ក) និយមន័យ និងនិមិត្តសញ្ញា */}
        <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/60 p-4 shadow-sm space-y-2">
          <p className="font-semibold mb-1">ក) និយមន័យ និងនិមិត្តសញ្ញា</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <li className="rounded-lg bg-white/80 border border-sky-200 p-3">
              <InlineMath math={String.raw`f''(x)=(f'(x))'`} />
            </li>
            <li className="rounded-lg bg-white/80 border border-sky-200 p-3">
              <InlineMath math={String.raw`f^{(3)}(x)=(f''(x))'`} />
            </li>
            <li className="rounded-lg bg-white/80 border border-sky-200 p-3 sm:col-span-2">
              <InlineMath math={String.raw`f^{(n)}(x)=\dfrac{d^{\,n}}{dx^{\,n}}\,f(x)\quad(n\in\mathbb{N})`} />
            </li>
            <li className="rounded-lg bg-white/80 border border-sky-200 p-3 sm:col-span-2">
              <InlineMath math={String.raw`y^{(n)}=\dfrac{d^{\,n}y}{dx^{\,n}}=\dfrac{d^{\,n}}{dx^{\,n}}f(x)`} />
            </li>
          </ul>
        </div>

        {/* ខ) ន័យ */}
        <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50/60 p-4 shadow-sm space-y-2">
          <p className="font-semibold mb-1">ខ) ន័យ</p>
          <ul className="list-disc pl-5 space-y-1 text-slate-800">
            <li>
              <InlineMath math={String.raw`f''(x)>0`} /> ➜ ក្រាបប៉ោងឡើង,{" "}
              <InlineMath math={String.raw`f''(x)<0`} /> ➜ ក្រាបប៉ោងចុះ។
            </li>
            <li>
              ចំណុចបម្លែងប៉ោង៖ <InlineMath math={String.raw`f''(c)=0`} /> ឬមិនកំណត់ ហើយ{" "}
              <InlineMath math={String.raw`f''`} /> ប្តូរសញ្ញាជុំវិញ <InlineMath math={String.raw`x=c`} />។
            </li>
            <li>
              បើ <InlineMath math={String.raw`y=s(t)`} /> ជាទីតាំង តាមពេល{" "}
              <InlineMath math={String.raw`t`} /> នោះ{" "}
              <InlineMath math={String.raw`s'(t)`} /> = ល្បឿន និង{" "}
              <InlineMath math={String.raw`s''(t)`} /> = ល្បឿនបំលាស់។
            </li>
          </ul>
        </div>

        {/* គ) ឧទាហរណ៍លឿន */}
        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50/60 p-4 shadow-sm space-y-2">
          <p className="font-semibold mb-1">គ) ឧទាហរណ៍លឿន</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <li className="rounded-lg bg-white/80 border border-amber-200 p-3">
              <InlineMath math={String.raw`f(x)=ax^2+bx+c \ \Rightarrow\ f''(x)=2a`} />
            </li>
            <li className="rounded-lg bg-white/80 border border-amber-200 p-3">
              <InlineMath math={String.raw`f(x)=e^{kx} \ \Rightarrow\ f^{(n)}(x)=k^{n}e^{kx}`} />
            </li>
            <li className="rounded-lg bg-white/80 border border-amber-200 p-3 sm:col-span-2">
              <InlineMath math={String.raw`\sin^{(n)}(x)=\sin\!\left(x+\frac{n\pi}{2}\right),\quad \cos^{(n)}(x)=\cos\!\left(x+\frac{n\pi}{2}\right)`} />
            </li>
          </ul>
        </div>
      </div>
    ),
  },

  tip: {
    title: "ចំណុចសំខាន់ៗ",
    content: (
      <div className="space-y-5 [&_.katex-display]:text-left [&_.katex-display]:my-1 [&_.katex]:text-[1.06rem]">
        {/* Polynomial */}
        <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/60 p-4 shadow-sm">
          <p className="font-semibold text-slate-800">ពហុស្វ័យគុណ (Polynomial)</p>
          <MathLine math={String.raw`
\frac{d^{\,n}}{dx^{\,n}}x^{m}=
\begin{cases}
m(m-1)\cdots(m-n+1)\,x^{\,m-n}, & n\le m\\[4pt]
0, & n>m
\end{cases}`} />
          <p className="text-sm text-slate-700 mt-1">ឧទាហរណ៍៖ <InlineMath math={String.raw`\dfrac{d^{3}}{dx^{3}}x^{5}=60x^{2}`} /></p>
        </div>

        {/* Exponential */}
        <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50/60 p-4 shadow-sm">
          <p className="font-semibold text-slate-800">អិចស្បូណង់ស្យែល</p>
          <MathLine math={String.raw`\frac{d^{\,n}}{dx^{\,n}}\!\big(e^{ax}\big)=a^{n}e^{ax}`} />
          <p className="text-sm text-slate-700 mt-1">ឧទាហរណ៍៖ <InlineMath math={String.raw`\dfrac{d^{4}}{dx^{4}}(e^{3x})=81e^{3x}`} /></p>
        </div>

        {/* Trig cycle */}
        <div className="rounded-xl border-l-4 border-fuchsia-500 bg-fuchsia-50/60 p-4 shadow-sm space-y-3">
          <p className="font-semibold text-slate-800">ត្រីកោណមាត្រ (លំនាំ ៤ ជំហាន)</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-lg bg-white/60 border border-fuchsia-200 p-3">
              <p className="text-sm font-medium text-slate-700 mb-1">រូបមន្តទូទៅ</p>
              <MathLine math={String.raw`\sin^{(n)}(x)=\sin\!\left(x+\frac{n\pi}{2}\right)`} />
              <MathLine math={String.raw`\cos^{(n)}(x)=\cos\!\left(x+\frac{n\pi}{2}\right)`} />
            </div>
            <div className="rounded-lg bg-white/60 border border-fuchsia-200 p-3">
              <p className="text-sm font-medium text-slate-700 mb-1">លំនាំ (sin)</p>
              <MathLine math={String.raw`(\sin x)'=\cos x`} />
              <MathLine math={String.raw`(\sin x)''=-\sin x`} />
              <MathLine math={String.raw`(\sin x)^{(3)}=-\cos x`} />
              <MathLine math={String.raw`(\sin x)^{(4)}=\sin x`} />
              <p className="text-xs text-slate-500 mt-1">សម្រាប់ <em>cos</em> ក៏លំនាំ ៤ ជំហានដូចគ្នា។</p>
            </div>
          </div>
        </div>

        {/* Leibniz */}
        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50/60 p-4 shadow-sm">
          <p className="font-semibold text-slate-800">ច្បាប់ផលគុណ (Leibniz)</p>
          <MathLine math={String.raw`(fg)^{(n)}=\sum_{k=0}^{n}\binom{n}{k}\,f^{(k)}\,g^{(n-k)}`} />
          <p className="text-sm text-slate-700 mt-1">
            ឧទាហរណ៍៖ <InlineMath math={String.raw`(fg)''=f''g+2f'g'+fg''`} />
          </p>
        </div>
      </div>
    ),
  },

  example: {
    question: (
      <MathLine math={String.raw`\text{រក } f''(x)\ \text{និង}\ f^{(3)}(x)\ \text{សម្រាប់}\ f(x)=x^4-2x^3+x`} />
    ),
    steps: [
      { title: "យកដេរីវេលើកទី ១", content: <MathLine math={String.raw`f'(x)=4x^3-6x^2+1`} /> },
      { title: "យកដេរីវេលើកទី ២", content: <MathLine math={String.raw`f''(x)=12x^2-12x`} /> },
      { title: "យកដេរីវេលើកទី ៣", content: <MathLine math={String.raw`f^{(3)}(x)=24x-12`} /> },
      {
        title: "បន្ថែម (វគ្គទូទៅ)",
        content: (
          <>
            <p>សម្រាប់</p>
            <MathLine math={String.raw`g(x)=e^{3x}`} />
            <p>មាន</p>
            <MathLine math={String.raw`g^{(n)}(x)=3^n e^{3x}`} />
          </>
        ),
      },
    ],
    answer: "f''(x)=12x^2-12x និង f^{(3)}(x)=24x-12",
  },

  exercise: {
    questions: [
      {
        id: "hq1",
        question: (
          <>
            <p>រក</p>
            <MathLine math={String.raw`f''(x)\ \text{សម្រាប់}\ f(x)=x^3-5x^2+4x-7`} />
          </>
        ),
        options: [
          <MathLine key="hq1o0" math={String.raw`6x-10`} />,
          <MathLine key="hq1o1" math={String.raw`6x-5`} />,
          <MathLine key="hq1o2" math={String.raw`3x^2-10`} />,
          <MathLine key="hq1o3" math={String.raw`6x-4`} />,
        ],
        correctAnswer: 0,
      },
      {
        id: "hq2",
        question: (
          <>
            <p>សម្រាប់</p>
            <MathLine math={String.raw`f(x)=e^{2x}`} />
            <p>តើ</p>
            <MathLine math={String.raw`f^{(n)}(x)`} />
            <p>ស្មើអ្វី?</p>
          </>
        ),
        options: [
          <MathLine key="hq2o0" math={String.raw`e^{2x}`} />,
          <MathLine key="hq2o1" math={String.raw`2^n e^{x}`} />,
          <MathLine key="hq2o2" math={String.raw`2^n e^{2x}`} />,
          <MathLine key="hq2o3" math={String.raw`n^2 e^{2x}`} />,
        ],
        correctAnswer: 2,
      },
      {
        id: "hq3",
        question: (
          <>
            <p>រក</p>
            <MathLine math={String.raw`g^{(3)}(x)\ \text{សម្រាប់}\ g(x)=\sin x`} />
          </>
        ),
        options: [
          <MathLine key="hq3o0" math={String.raw`\cos x`} />,
          <MathLine key="hq3o1" math={String.raw`-\cos x`} />,
          <MathLine key="hq3o2" math={String.raw`-\sin x`} />,
          <MathLine key="hq3o3" math={String.raw`\sin x`} />,
        ],
        correctAnswer: 1,
      },
    ],
  },

  hint: {
    content: (
      <div className="space-y-5 [&_.katex-display]:text-left [&_.katex-display]:my-1 [&_.katex]:text-[1.06rem]">
        {/* 1) Polynomial */}
        <div className="rounded-xl border-l-4 border-indigo-500 bg-indigo-50/60 p-4 shadow-sm">
          <p className="font-semibold text-slate-800 mb-1">រូបមន្តចងចាំ — ពហុស្វ័យគុណ</p>
          <MathLine math={String.raw`
\frac{d^{\,n}}{dx^{\,n}}x^{m}=
\begin{cases}
m(m-1)\cdots(m-n+1)\,x^{\,m-n}, & n\le m\\[4pt]
0, & n>m
\end{cases}`} />
          <p className="text-sm text-slate-700">ឧទាហរណ៍៖ <span className="font-medium">n &gt; m</span> ⟹ លទ្ធផល = 0</p>
        </div>

        {/* 2) Exponential */}
        <div className="rounded-xl border-l-4 border-teal-500 bg-teal-50/60 p-4 shadow-sm">
          <p className="font-semibold text-slate-800 mb-1">អិចស្បូណង់ស្យែល</p>
          <MathLine math={String.raw`(e^{ax})^{(n)}=a^{n}e^{ax}`} />
          <p className="text-sm text-slate-700">
            ឧទាហរណ៍៖ <InlineMath math={String.raw`(e^{3x})^{(4)}=81e^{3x}`} />
          </p>
        </div>

        {/* 3) Trig cycle (easy-look) */}
        <div className="rounded-xl border-l-4 border-fuchsia-500 bg-fuchsia-50/60 p-4 shadow-sm space-y-3">
          <p className="font-semibold text-slate-800">ត្រីកោណមាត្រ</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="rounded-lg bg-white/60 border border-fuchsia-200 p-3">
              <p className="text-sm font-medium text-slate-700 mb-1">រូបមន្តទូទៅ</p>
              <MathLine math={String.raw`\sin^{(n)}(x)=\sin\!\left(x+\frac{n\pi}{2}\right)`} />
              <MathLine math={String.raw`\cos^{(n)}(x)=\cos\!\left(x+\frac{n\pi}{2}\right)`} />
            </div>
            <div className="rounded-lg bg-white/60 border border-fuchsia-200 p-3">
              <p className="text-sm font-medium text-slate-700 mb-1">លំនាំ (sin)</p>
              <MathLine math={String.raw`(\sin x)'=\cos x`} />
              <MathLine math={String.raw`(\sin x)''=-\sin x`} />
              <MathLine math={String.raw`(\sin x)^{(3)}=-\cos x`} />
              <MathLine math={String.raw`(\sin x)^{(4)}=\sin x`} />
            </div>
          </div>
        </div>

        {/* 4) Leibniz */}
        <div className="rounded-xl border-l-4 border-amber-500 bg-amber-50/60 p-4 shadow-sm">
          <p className="font-semibold text-slate-800 mb-1">ច្បាប់ផលគុណ (Leibniz)</p>
          <MathLine math={String.raw`(fg)^{(n)}=\sum_{k=0}^{n}\binom{n}{k}\,f^{(k)}\,g^{(n-k)}`} />
          <p className="text-sm text-slate-700">
            ឧទាហរណ៍៖ <InlineMath math={String.raw`(fg)'' = f''g + 2f'g' + fg''`} />
          </p>
        </div>
      </div>
    ),
  },

  warning: {
    content: (
      <div className="space-y-2 text-slate-800">
        <p>• បើលំដាប់ n លើសកម្រិតពហុស្វ័យគុណ (m) នឹងទទួលបាន 0។</p>
        <p>• ចងចាំសញ្ញាវដ្តនៃ sin/cos ពេលយកដេរីវេជាបន្តបន្ទាប់។</p>
        <p>
          • កុំច្រឡំ <InlineMath math={String.raw`f''`} /> ជាមួយ{" "}
          <InlineMath math={String.raw`(f')^2`} /> — វាជា​ដេរីវេលើកទីពីរ មិនមែនការ​ផ្គុំគ្នា។
        </p>
      </div>
    ),
  },
};

// ===== MAIN COMPONENT =====
export default function DerivativeHighLevel() {
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
