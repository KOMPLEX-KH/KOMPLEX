import React from "react";
import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
import { HintBox } from "@/components/pages/docs/boxes/HintBox";
import { WarningBox } from "@/components/pages/docs/boxes/WarningBox";
import { BlockMath, InlineMath } from "react-katex";
import { MathLine } from "@components/helper/MathLine";
import { MathScroll } from "@components/helper/MathScroll";
import { ImageExplanationBox } from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
import { heatEngineImg } from "../../../../../../public/docs/grade-12/physic/engine/ImportImage";
import { Check } from "lucide-react";

type Variant = "green" | "violet" | "neutral" | "amber";

const styles: Record<Variant, string> = {
  green:
    "bg-emerald-50 text-emerald-700 ring-emerald-200 " +
    "dark:bg-emerald-900/20 dark:text-emerald-300 dark:ring-emerald-900/50",
  violet:
    "bg-violet-50 text-violet-700 ring-violet-200 " +
    "dark:bg-violet-900/20 dark:text-violet-300 dark:ring-violet-900/50",
  neutral:
    "bg-white text-slate-700 ring-slate-200 " +
    "dark:bg-slate-900/30 dark:text-slate-200 dark:ring-slate-800",
  amber:
    "bg-amber-50 text-amber-800 ring-amber-200 " +
    "dark:bg-amber-900/20 dark:text-amber-300 dark:ring-amber-900/50",
};

export function ResultCallout({
  children,
  label = "សរុប៖",
  variant = "green",
}: {
  children: React.ReactNode;
  label?: string;
  variant?: Variant;
}) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-[13.5px]",
        "ring-1 shadow-sm transition-colors",
        styles[variant],
      ].join(" ")}
    >
      <span className="inline-flex items-center gap-1 font-semibold">
        <Check className="h-3.5 w-3.5" />
        {label}
      </span>
      <span className="mx-2 h-4 w-px bg-current/30" />
      <span className="[&_.katex]:text-[1.05rem] leading-none">{children}</span>
    </div>
  );
}

const LessonChip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white text-sm font-bold">
    {children}
  </span>
);

/* Mini-TOC chip (the same hover you liked) */
const chip =
  "block rounded-2xl px-3 py-2 leading-snug break-words " +
  "bg-white text-slate-800 ring-1 ring-violet-200 shadow-sm " +
  "transition-all duration-200 " +
  "hover:bg-violet-50 hover:text-violet-700 hover:ring-violet-400 hover:shadow " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500";

/* Reusable section shell */
const Section = ({
  no,
  title,
  id,
  children,
}: {
  no: number;
  title: string;
  id: string;
  children: React.ReactNode;
}) => (
  <section id={id} className="scroll-mt-35 space-y-3">
    <div className="flex items-center gap-3">
      <LessonChip>{no}</LessonChip>
      <h3 className="text-lg sm:text-xl font-bold text-slate-900">{title}</h3>
    </div>
    {children}
  </section>
);

// components/helper/Therefore.tsx

type ThereforeProps = {
  /** KaTeX string */
  math: string;
  /** Label before the math (e.g., "ដូច្នេះ" / "សរុបយើងបាន" / "So") */
  label?: string;
  /** Extra classNames if you want to tweak spacing where used */
  className?: string;
};

/** A compact callout pill for final conclusions:  ∴ Label  <math>  */
export const Therefore: React.FC<ThereforeProps> = ({
  math,
  label = "ដូច្នេះ",
  className = "",
}) => (
  <div
    className={
      "not-prose inline-flex items-center gap-2 rounded-xl " +
      "bg-emerald-50/90 text-emerald-800 px-3 py-1.5 " +
      "ring-1 ring-emerald-200 shadow-sm " +
      "backdrop-blur supports-[backdrop-filter]:bg-emerald-50/70 " +
      className
    }
  >
    <span className="inline-flex items-center gap-1 text-[11px] font-semibold">
      <span className="text-emerald-600"></span> {label}
    </span>
    <span className="mx-1 h-4 w-px bg-emerald-200" />
    <span className="text-[15px] font-semibold">
      <InlineMath math={math} />
    </span>
  </div>
);

export default function Engines() {
  return (
    <>
      {/* ===== Mini TOC ===== */}
      <nav className="not-prose -mx-1 mb-3">
        <ol className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[13px]">
          <li>
            <a href="#sec-overview" className={chip}>
              <span className="font-semibold">1.កម្មន្តមេកានិច</span>
            </a>
          </li>
          <li>
            <a href="#sec-engine" className={chip}>
              <span className="font-semibold">2.</span> ទិន្នផលកម្តៅ (Heat
              engine)
            </a>
          </li>
          <li>
            <a href="#sec-carnot" className={chip}>
              <span className="font-semibold">3.</span> ទំនាក់ទំនងម៉ាស៊ីនកាកណូ
            </a>
          </li>
          <li>
            <a href="#sec-fridge" className={chip}>
              <span className="font-semibold">4.</span> ទិន្នផលគ្រឿងបញ្ចូន
            </a>
          </li>
          <li>
            <a href="#sec-examples" className={chip}>
              <span className="font-semibold">5.</span> ទិន្នផលបានការ
            </a>
          </li>
          <li>
            <a href="#sec-exercises" className={chip}>
              <span className="font-semibold">6.</span> លំហាត់
            </a>
          </li>
        </ol>
      </nav>

      <DefinitionBox
        title="ម៉ាស៊ីន"
        content={
          <div className="space-y-6">
            {/* ================= 1. OVERVIEW ================= */}
            <Section no={1} title="សុិចកាកណូ" id="sec-overview">
              <TipBox
                title="ទ្រឹស្តីបទ"
                content={
                  <div className="space-y-2">
                    <ImageExplanationBox
                      src={heatEngineImg}
                      imageAlt="ម៉ាស៊ីនកំដៅ"
                      explanation={
                        <>
                          <p>
                            {" "}
                            <InlineMath math={String.raw`Q_h`} />
                            បរិមាណកម្តៅបានពីប្រភពក្តៅផ្តល់ឪ្យម៉ាសុីន(ថាមពលសរុប)({" "}
                            <InlineMath math={String.raw`J`} />){" "}
                          </p>
                          <p>
                            {" "}
                            <InlineMath math={String.raw`W`} />{" "}
                            កម្មន្តដែលឧស្ម័នធ្វើការ({" "}
                            <InlineMath math={String.raw`J`} />){" "}
                          </p>
                          <p>
                            {" "}
                            <InlineMath math={String.raw`Q_c`} />{" "}
                            បរិមាណកម្តៅដែលបញ្ចេញទៅប្រភពត្រជាក់(បរិមាណកម្តៅមិនបានការ)({" "}
                            <InlineMath math={String.raw`J`} />){" "}
                          </p>
                        </>
                      }
                      title="ម៉ាស៊ីនកំដៅ"
                    />

                    {/* <HintBox
                      content={
                        <p className="text-sm">
                          គូសខ្សែក្រាប <InlineMath math="P-V" /> ៖ តំបន់
                          ក្រោមខ្សែដំណើរការ (ទៅទិសបញ្ច時計) គឺ{" "}
                          <InlineMath math="W" />។ ទៅទិសបញ្ច្រូត時計 ⇒{" "}
                          <InlineMath math="W&lt;0" />។
                        </p>
                      }
                    /> */}
                  </div>
                }
              />
            </Section>

            {/* ================= 2. HEAT ENGINE ================= */}
            <Section no={2} title="កម្មន្តមេកានិច" id="sec-engine">
              <div className="">
                <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                  <p className="font-semibold text-slate-800 mb-1">
                    តាមរូបមន្ត
                  </p>
                  <MathScroll math={String.raw`W_m = Q_h - Q_c`} />
                  <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                    <li>
                      <InlineMath math="Q_h" /> កម្តៅស្រូបពីធុងក្តៅ
                    </li>
                    <li>
                      <InlineMath math="Q_c" /> កម្តៅបញ្ចេញទៅធុងត្រជាក់
                    </li>
                  </ul>
                </div>

                <HintBox
                  content={
                    <>
                      <p>
                        {" "}
                        <InlineMath
                          math={String.raw`1eV = 1.6\times 10^{-19}J`}
                        />{" "}
                      </p>
                    </>
                  }
                />
              </div>
            </Section>

            {/* ================= 3. CARNOT ================= */}
            <Section no={3} title="ទិន្នផលកម្តៅ" id="sec-carnot">
              <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                <p className="font-semibold text-slate-800 mb-1">រូបមន្ត</p>
                <div className="space-y-1">
                  <BlockMath math={String.raw`e = \frac{W_m}{Q_h}`} />
                </div>
                <p className="text-sm text-slate-700 mt-1">
                  <InlineMath math="W_m" /> និង <InlineMath math="Q_c" /> គិតជា{" "}
                  <InlineMath math={String.raw`J`} />
                </p>
              </div>
              <TipBox
                title="សម្រាយបញ្ចាក់"
                content={
                  <>
                    <div className="mt-2">
                      <InlineMath math={String.raw`e = \frac{W_m}{Q_h}`} />
                    </div>
                    <div className="mt-2">
                      <InlineMath
                        math={String.raw`\text{តែ} W_m = Q_h - Q_c`}
                      />
                    </div>
                    <div className="mt-2">
                      <InlineMath
                        math={String.raw`⟹​  e = \frac{Q_h - Q_c}{Q_h} = 1 - \frac{Q_h}{Q_c}`}
                      />
                    </div>
                    <Therefore
                      className="mt-3"
                      math={String.raw`e = 1 - \frac{Q_h}{Q_c}`}
                    />
                  </>
                }
              />
            </Section>

            {/* ================= 4. FRIDGE / HEAT PUMP ================= */}
            <Section no={4} title="ទំនាក់ទំនងម៉ាស៊ីនកាកណូ" id="sec-fridge">
              <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                <p className="font-semibold text-slate-800 mb-1">រូបមន្ត</p>
                <div className="space-y-1">
                  <BlockMath
                    math={String.raw`\frac{Q_h}{Q_c}=\frac{T_h}{T_c}`}
                  />
                </div>
                <p className="text-sm text-slate-700 mt-1"></p>
              </div>

              <TipBox
                title="សម្រាយបញ្ចាក់"
                content={
                  <>
                    <div className="mt-2">
                      <InlineMath math={String.raw`e = 1-\frac{Q_c}{Q_h}`} />
                    </div>
                    <div className="mt-2">
                      <InlineMath
                        math={String.raw`\text{តែ} \frac{Q_c}{Q_h} = \frac{T_c}{T_h} \Leftrightarrow\ e = 1 - \frac{T_h}{T_c}`}
                      />
                    </div>

                    <Therefore
                      className="mt-3"
                      math={String.raw`e = 1 - \frac{T_c}{T_h}`}
                    />
                  </>
                }
              />
            </Section>

            {/* ================= 5. EXAMPLES ================= */}
            <Section no={5} title="ទិន្នផលគ្រឿងបញ្ចូន" id="sec-examples">
              <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                <p className="font-semibold text-slate-800 mb-1">រូបមន្ត</p>
                <div className="space-y-1">
                  <BlockMath math={String.raw`e_m=\frac{W_u}{W_m}`} />
                </div>
                <p className="text-sm text-slate-700 mt-1"></p>
              </div>
            </Section>

            <Section no={6} title="ទិន្នផលបានការ" id="sec-exercises">
              <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                <p className="font-semibold text-slate-800 mb-1">រូបមន្ត</p>
                <div className="space-y-1">
                  <BlockMath math={String.raw`e_u=\frac{W_u}{Q_h}`} />
                </div>
                <p className="text-sm text-slate-700 mt-1"></p>
              </div>

              <TipBox
                title="សម្រាយបញ្ចាក់"
                content={
                  <>
                    <div className="mt-2">
                      <InlineMath math={String.raw`e_u =\frac{W_u}{Q_h}`} />
                    </div>
                    <div className="mt-2">
                      <InlineMath
                        math={String.raw`\text{នាំឧ្យ } e_u = \frac{W_u}{Q_h} \times \frac{W_m}{W_m} \Leftrightarrow\ e_u = \frac{W_u}{Q_h} \times \frac{W_m}{W_m}`}
                      />
                    </div>

                    <div className="mt-2">
                      <InlineMath
                        math={String.raw`⟹​ e_u = \frac{W_u}{W_m}\cdot\frac{W_m}{Q_h} = e_m \times e`}
                      />
                    </div>

                    <Therefore
                      className="mt-3"
                      math={String.raw` e_u = e_m \times e `}
                    />
                  </>
                }
              />
            </Section>

            {/* ================= 6. EXERCISES ================= */}
            <Section no={7} title="លំហាត់ជ្រើសរើសចម្លើយ" id="sec-exercises">
              <ExerciseBox
                questions={[
                  {
                    id: "e1",
                    question: <p>ប្រសិទ្ធភាពម៉ាស៊ីនកំដៅស្មើនឹង?</p>,
                    options: [
                      <BlockMath key="a" math={String.raw`e=\frac{Q_h}{W}`} />,
                      <BlockMath key="b" math={String.raw`e=\frac{W}{Q_h}`} />,
                      <BlockMath
                        key="c"
                        math={String.raw`e=1-\frac{Q_h}{Q_c}`}
                      />,
                      <BlockMath
                        key="d"
                        math={String.raw`e=\frac{Q_c}{Q_h}`}
                      />,
                    ],
                    correctAnswer: 1,
                  },
                  {
                    id: "e2",
                    question: (
                      <p>
                        ម៉ាស៊ីនមួយទទួល <InlineMath math="Q_h=1500\,\text{J}" />{" "}
                        និង បញ្ចេញ <InlineMath math="Q_c=900\,\text{J}" />។{" "}
                        <InlineMath math="W" /> និង <InlineMath math="e" />?
                      </p>
                    ),
                    options: [
                      <BlockMath
                        key="a"
                        math={String.raw`W=600\,\text{J},\ e=40\%`}
                      />,
                      <BlockMath
                        key="b"
                        math={String.raw`W=600\,\text{J},\ e=60\%`}
                      />,
                      <BlockMath
                        key="c"
                        math={String.raw`W=900\,\text{J},\ e=40\%`}
                      />,
                      <BlockMath
                        key="d"
                        math={String.raw`W=900\,\text{J},\ e=60\%`}
                      />,
                    ],
                    correctAnswer: 0,
                  },
                  {
                    id: "e3",
                    question: (
                      <p>
                        Carnot engine: <InlineMath math="T_h=500\,\text{K}" />,{" "}
                        <InlineMath math="T_c=300\,\text{K}" />។{" "}
                        <InlineMath math="e_{\max}" />?
                      </p>
                    ),
                    options: [
                      <BlockMath key="a" math={String.raw`0.2`} />,
                      <BlockMath key="b" math={String.raw`0.4`} />,
                      <BlockMath key="c" math={String.raw`0.6`} />,
                      <BlockMath key="d" math={String.raw`0.8`} />,
                    ],
                    correctAnswer: 1,
                  },
                  {
                    id: "e4",
                    question: <p>Refrigerator COP? ជម្រើសត្រឹមត្រូវ៖</p>,
                    options: [
                      <BlockMath
                        key="a"
                        math={String.raw`\text{COP}_{\text{ref}}=\frac{Q_h}{W}`}
                      />,
                      <BlockMath
                        key="b"
                        math={String.raw`\text{COP}_{\text{ref}}=\frac{Q_c}{W}`}
                      />,
                      <BlockMath
                        key="c"
                        math={String.raw`\text{COP}_{\text{ref}}=\frac{W}{Q_c}`}
                      />,
                      <BlockMath
                        key="d"
                        math={String.raw`\text{COP}_{\text{ref}}=\frac{T_h-T_c}{T_h}`}
                      />,
                    ],
                    correctAnswer: 1,
                  },
                  {
                    id: "e5",
                    question: (
                      <p>
                        សម្រាប់សីតុណ្ហភាពដូចគ្នា <InlineMath math="(T_h,T_c)" />
                        ៖ ត្រូវអ្វី?
                      </p>
                    ),
                    options: [
                      <BlockMath
                        key="a"
                        math={String.raw`\text{COP}_{\text{hp}}=\text{COP}_{\text{ref}}`}
                      />,
                      <BlockMath
                        key="b"
                        math={String.raw`\text{COP}_{\text{hp}}=\text{COP}_{\text{ref}}-1`}
                      />,
                      <BlockMath
                        key="c"
                        math={String.raw`\text{COP}_{\text{hp}}=\text{COP}_{\text{ref}}+1`}
                      />,
                      <BlockMath
                        key="d"
                        math={String.raw`\text{COP}_{\text{hp}}=1/\text{COP}_{\text{ref}}`}
                      />,
                    ],
                    correctAnswer: 2,
                  },
                ]}
              />
            </Section>
          </div>
        }
      />
    </>
  );
}
