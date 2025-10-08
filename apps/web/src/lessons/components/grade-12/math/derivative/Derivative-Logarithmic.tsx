import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
import { HintBox } from "@/components/pages/docs/boxes/HintBox";
import { WarningBox } from "@/components/pages/docs/boxes/WarningBox";
import { TopicContent } from "@/types/docs/topic";
import { BlockMath, InlineMath } from "react-katex";

// Small helper: makes KaTeX blocks left-aligned and horizontally scrollable on phones
const MathLine = ({ math }: { math: string }) => (
  <div className="overflow-x-auto -mx-1 px-1 [&_.katex-display]:text-left [&_.katex-display]:my-1 [&_.katex]:text-[1.05rem]">
    <BlockMath math={math} />
  </div>
);

// ===== TOPIC CONTENT DATA (Derivative — Logarithmic Functions) =====
const TOPIC_CONTENT: TopicContent = {
  definition: {
    title: "រូបមន្តដេរីវេ — ឡូការីត",
    content: (
      <div className="space-y-5">
        {/* a) Log with variable x */}
        <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
          <p className="font-semibold mb-3 text-slate-800">
            ក) អនុគមន៍ឡូការីត (អថេរ x)
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            <li className="rounded-lg bg-white/80 border border-sky-200 p-3">
              <MathLine
                math={String.raw`y=\ln x\ \Rightarrow\ y'=\dfrac{1}{x}\ \ (x>0)`}
              />
            </li>
            <li className="rounded-lg bg-white/80 border border-sky-200 p-3">
              <MathLine
                math={String.raw`y=\ln|x|\ \Rightarrow\ y'=\dfrac{1}{x}\ \ (x= 0)`}
              />
            </li>
            <li className="rounded-lg bg-white/80 border border-sky-200 p-3">
              <MathLine
                math={String.raw`y=\log_{a}x\ \Rightarrow\ y'=\dfrac{1}{x\,\ln a}\ \ (a>0,\ a= 1,\ x>0)`}
              />
            </li>
          </ul>
        </div>

        {/* b) Log with u(x) (chain rule) */}
        <div className="rounded-xl border-l-4 border-emerald-500 bg-emerald-50/70 p-4 shadow-sm">
          <p className="font-semibold mb-3 text-slate-800">
            ខ) ជាមួយអាគុយម៉ង់ <InlineMath math={String.raw`u=u(x)`} />
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            <li className="rounded-lg bg-white/80 border border-emerald-200 p-3">
              <MathLine
                math={String.raw`y=\ln u\ \Rightarrow\ y'=\dfrac{u'}{u}\ \ (u>0)`}
              />
            </li>
            <li className="rounded-lg bg-white/80 border border-emerald-200 p-3">
              <MathLine
                math={String.raw`y=\ln|u|\ \Rightarrow\ y'=\dfrac{u'}{u}\ \ (u= 0)`}
              />
            </li>
            <li className="rounded-lg bg-white/80 border border-emerald-200 p-3">
              <MathLine
                math={String.raw`y=\log_{a}u\ \Rightarrow\ y'=\dfrac{u'}{u\,\ln a}\ \ (a>0,\ a= 1,\ u>0)`}
              />
            </li>
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
          <p className="font-semibold text-indigo-900 mb-1">ដែនកំណត់</p>
          <p className="text-slate-700">
            <InlineMath math={String.raw`\ln x:\ x>0`} /> ;{" "}
            <InlineMath math={String.raw`\ln|x|:\ x= 0`} /> ;{" "}
            <InlineMath math={String.raw`\log_a x:\ a>0,\ a= 1,\ x>0`} />។
          </p>
        </div>

        <div className="rounded-lg border-l-4 border-emerald-500 bg-emerald-50/70 p-3 shadow-sm">
          <p className="font-semibold text-emerald-900 mb-1">ខ្សែសង្វាក់</p>
          <div className="space-y-1">
            <MathLine
              math={String.raw`\dfrac{d}{dx}\ln u=\dfrac{u'}{u}\ \ (u>0)`}
            />
            <MathLine
              math={String.raw`\dfrac{d}{dx}\ln|u|=\dfrac{u'}{u}\ \ (u= 0)`}
            />
            <MathLine
              math={String.raw`\dfrac{d}{dx}\log_a u=\dfrac{u'}{u\,\ln a}`}
            />
          </div>
        </div>

        <div className="rounded-lg border-l-4 border-amber-500 bg-amber-50/70 p-3 shadow-sm">
          <p className="font-semibold text-amber-900 mb-1">
            បម្លែង និង កំហុសជាញឹកញាប់
          </p>
          <p className="text-slate-700">
            • <InlineMath math={String.raw`\log_a x=\dfrac{\ln x}{\ln a}`} /> ⟹{" "}
            <InlineMath math={String.raw`(\log_a x)'=\dfrac{1}{x\,\ln a}`} />។
          </p>
          <p className="text-slate-700">
            • កុំច្រឡំ៖{" "}
            <InlineMath math={String.raw`\dfrac{d}{dx}\ln|x|=\dfrac{1}{x}`} />{" "}
            មិនមែន <InlineMath math={String.raw`\dfrac{1}{|x|}`} /> ទេ។
          </p>
          <p className="text-slate-700">
            • បើ <InlineMath math={String.raw`y=\ln(g(x))`} /> ត្រូវកាត់ចេញចំណុច{" "}
            <InlineMath math={String.raw`g(x)=0`} /> ពីដែន (អាចប្រើ{" "}
            <InlineMath math={String.raw`\ln|g(x)|`} /> ដើម្បីគ្របដណ្តប់{" "}
            <InlineMath math={String.raw`g(x)<0`} />
            )។
          </p>
        </div>

        <div className="rounded-lg border-l-4 border-fuchsia-500 bg-fuchsia-50/70 p-3 shadow-sm">
          <p className="font-semibold text-fuchsia-900 mb-1">
            សម្រួលបន្ទាប់ពីយកដេរីវេ
          </p>
          <MathLine
            math={String.raw`\dfrac{d}{dx}\ln(x^2+1)=\dfrac{2x}{x^2+1}`}
          />
        </div>
      </div>
    ),
  },

  example: {
    question: (
      <MathLine
        math={String.raw`\text{រក } y' \text{ សម្រាប់ } y=\ln(x^2+1) + 3\ln(2x) - \log_{3}(x)`}
      />
    ),
    steps: [
      {
        title: "យកដេរីវេនីមួយៗដោយខ្សែសង្វាក់",
        content: (
          <>
            <MathLine
              math={String.raw`\frac{d}{dx}\,\ln(x^2+1) = \frac{2x}{x^2+1}`}
            />
            <MathLine
              math={String.raw`\frac{d}{dx}\,\big(3\ln(2x)\big) = 3\cdot \frac{2}{2x} = \frac{3}{x}`}
            />
            <MathLine
              math={String.raw`\frac{d}{dx}\,\log_{3}(x) = \frac{1}{x\ln 3}`}
            />
          </>
        ),
      },
      {
        title: "បូកលទ្ធផល",
        content: (
          <MathLine
            math={String.raw`y' = \frac{2x}{x^2+1} + \frac{3}{x} - \frac{1}{x\ln 3}`}
          />
        ),
      },
      {
        title: "ចម្លើយ",
        content: (
          <MathLine math={String.raw`y' = 2x/(x^2+1) + 3/x − 1/(x ln 3)`} />
        ),
      },
    ],
    answer: <MathLine math={String.raw`y' = 2x/(x^2+1) + 3/x − 1/(x ln 3)`} />,
  },

  exercise: {
    questions: [
      {
        id: "lq1",
        question: (
          <>
            <p>ដេរីវេនៃ</p>
            <MathLine math={String.raw`y=\ln(x^2+1)`} />
            <p>គឺ?</p>
          </>
        ),
        options: [
          <MathLine key="lq1o0" math={String.raw`\frac{2x}{x^2+1}`} />,
          <MathLine key="lq1o1" math={String.raw`\frac{1}{x^2+1}`} />,
          <MathLine key="lq1o2" math={String.raw`\frac{2}{x}`} />,
          <MathLine key="lq1o3" math={String.raw`2x`} />,
        ],
        correctAnswer: 0,
      },
      {
        id: "lq2",
        question: (
          <>
            <p>ដេរីវេនៃ</p>
            <MathLine math={String.raw`y=\log_{5}(x)`} />
            <p>គឺ?</p>
          </>
        ),
        options: [
          <MathLine key="lq2o0" math={String.raw`\frac{1}{x\ln 5}`} />,
          <MathLine key="lq2o1" math={String.raw`\frac{\ln 5}{x}`} />,
          <MathLine key="lq2o2" math={String.raw`\ln(5x)`} />,
          <MathLine key="lq2o3" math={String.raw`\frac{1}{\ln 5}`} />,
        ],
        correctAnswer: 0,
      },
      {
        id: "lq3",
        question: (
          <>
            <p>គណនា</p>
            <MathLine math={String.raw`y'(1) \text{ សម្រាប់ } y=\ln(3x-1)`} />
          </>
        ),
        options: [
          <MathLine key="lq3o0" math={String.raw`\frac{1}{2}`} />,
          <MathLine key="lq3o1" math={String.raw`\frac{3}{2}`} />,
          <MathLine key="lq3o2" math={String.raw`\frac{1}{3}`} />,
          <MathLine key="lq3o3" math={String.raw`\frac{2}{3}`} />,
        ],
        correctAnswer: 1, // y' = 3/(3x-1) => at x=1 -> 3/2
      },
    ],
  },

  hint: {
    content: (
      <>
        <p>ពេលប្រើខ្សែសង្វាក់ សូមកំណត់ g(x) មុន ពេលយក ៖</p>
        <InlineMath
          math={String.raw`y=\ln(g(x)) \ \Rightarrow\ y'=\frac{g'(x)}{g(x)}`}
        />
        <p>ឧទាហរណ៍ សម្រាប់ ln(2x):</p>
        <InlineMath
          math={String.raw`\frac{d}{dx}\ln(2x)=\frac{2}{2x}=\frac{1}{x}`}
        />
      </>
    ),
  },

  warning: {
    content: (
      <>
        <p>
          • កុំភ្លេចដែនកំណត់៖ ln/log ត្រូវការ{" "}
          <InlineMath math={String.raw`x>0`} /> (ឬប្រើ{" "}
          <InlineMath math={String.raw`\ln|x|`} /> បើចង់គ្របដណ្តប់{" "}
          <InlineMath math={String.raw`x<0`} />
          )។
        </p>
        <p>
          • សម្រាប់ <InlineMath math={String.raw`\log_{a} x`} /> ត្រូវការ{" "}
          <InlineMath math={String.raw`a>0,\ a= 1`} /> និង{" "}
          <InlineMath math={String.raw`x>0`} />; កុំភ្លេចកត្តា{" "}
          <InlineMath math={String.raw`\ln a`} /> នៅក្នុងដេរីវេ។
        </p>
      </>
    ),
  },

  // Optional graph example (kept commented)
  // image: {
  //   src: (
  //     <Graph
  //       expressions={[
  //         { id: "ln", latex: "f(x)=ln(x)", color: "#c00" },
  //         { id: "lnprime", latex: "g(x)=1/x", color: "#00c" },
  //       ]}
  //     />
  //   ),
  //   imageAlt: "ក្រាប ln(x) និង 1/x",
  //   explanation:
  //     "ក្រាបបង្ហាញ f(x)=ln(x) (ក្រហម) និងដេរីវេរបស់វា f'(x)=1/x (ខៀវ)។ ដែនកំណត់ x>0 សម្រាប់ទាំងពីរ។",
  // },
};

// ===== MAIN COMPONENT =====
export default function DerivativeLogarithmic() {
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

      {/* {TOPIC_CONTENT.image && (
        <ImageBox
          src={TOPIC_CONTENT.image.src}
          imageAlt={TOPIC_CONTENT.image.imageAlt}
          explanation={TOPIC_CONTENT.image.explanation}
        />
      )} */}
    </>
  );
}
