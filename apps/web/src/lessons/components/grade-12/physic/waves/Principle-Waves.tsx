// import React from 'react'

// const PrincipleWaves = () => {
//   return (
//     <div>

//     </div>
//   )
// }

// export default PrincipleWaves

import React from "react";
import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import ExerciseBox from "@/components/pages/docs/boxes/ExerciseBox";
import HintBox from "@/components/pages/docs/boxes/HintBox";
import WarningBox from "@/components/pages/docs/boxes/WarningBox";
import { BlockMath, InlineMath } from "react-katex";
import { MathLine } from "@components/helper/MathLine";
import { MathScroll } from "@components/helper/MathScroll";
import { ImageBox } from "@/components/pages/docs/boxes/explanation-box/ImageExplanationBox";
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


export default function PrincipleWaves() {
  return (
    <>
      {/* ===== Mini TOC ===== */}
      <nav className="not-prose -mx-1 mb-3">
        <ol className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[13px]">
          <li>
            <a href="#sec-wave-equation" className={chip}>
              <span className="font-semibold">1.សមីការរលក</span>
            </a>
          </li>
          <li>
            <a href="#sec-wave-frequency" className={chip}>
              <span className="font-semibold">2. ខួបនិងប្រេកង់</span>
            </a>
          </li>
          <li>
            <a href="#sec-wave-steps" className={chip}>
              <span className="font-semibold">3. ជំហានរលក</span>
            </a>
          </li>
          <li>
            <a href="#sec-wave-reflection" className={chip}>
              <span className="font-semibold">4. សមីការរលកជញ្រ្ជំុ</span>
            </a>
          </li>
          <li>
            <a href="#sec-wave-diffraction" className={chip}>
              <span className="font-semibold">5.</span> សមីការរលកតម្រួត
            </a>
          </li>
          <li>
            <a href="#sec-wave-refraction" className={chip}>
              <span className="font-semibold">6.</span> ទីតាំងថ្នាំងនិងទីតាំងពោះ
            </a>
          </li>
          <li>
            <a href="#sec-exercises" className={chip}>
              <span className="font-semibold">7.</span> លំហាត់
            </a>
          </li>
        </ol>
      </nav>

      <DefinitionBox
        title="គោលការណ៍រលកតម្រួតនៃរលក និងរលកជញ្រ្ចុំ"
        content={
          <div className="space-y-6">
            {/* ================= 1. OVERVIEW ================= */}
            <Section no={1} title="សមីការរលក" id="sec-wave-equation">
              <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                <p className="font-semibold text-slate-800 mb-1">
                  តាមរូបមន្ត
                </p>
                <MathScroll math={String.raw`y = asin(\omega t - \phi )`} />
                <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math="a" /> អំព្លីទុត (<InlineMath math="m" />)
                  </li>
                  <li>
                    <InlineMath math="t" /> រយៈពេល (<InlineMath math="s" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`\omega `} />​ ល្បឿនប្រេកង់ (<InlineMath math="rad/s" />)

                  </li>
                </ul>
              </div>
            </Section>

            {/* ================= 2. HEAT ENGINE ================= */}
            <Section no={2} title="ខួបនិងប្រេកង់" id="sec-wave-frequency">
              <div className="space-y-4">
                <p>
                  <strong> <em>ខួប</em> </strong> ជារយៈពេលដែលរលកផ្លាស់ទីមួយបានមួយជុំ។ <br />
                </p>
                <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">

                  <p className="font-semibold text-slate-800 mb-1">
                    តាមរូបមន្ត
                  </p>
                  <MathScroll math={String.raw`T = \frac{2\pi}{\omega}`} />
                  <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                    <li>
                      <InlineMath math="T" /> ខួប (<InlineMath math="s" />)
                    </li>
                    <li>
                      <InlineMath math={String.raw`\omega `} />​ ល្បឿនប្រេកង់ (<InlineMath math="rad/s" />)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <p>
                  <strong> <em>ប្រកង់</em> </strong> ជាចំនួនរលកផ្លាស់ទីបានមួយជុំ។ <br />
                </p>
                <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">

                  <p className="font-semibold text-slate-800 mb-1">
                    តាមរូបមន្ត
                  </p>
                  <MathScroll math={String.raw`f = \frac{1}{T}`} />
                  <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                    <li>
                      <InlineMath math="T" /> ខួប (<InlineMath math="s" />)
                    </li>
                    <li>
                      <InlineMath math={String.raw`f `} />​ ចំនួនប្រេកង់ (<InlineMath math=" Hz " />)
                    </li>
                  </ul>
                </div>
              </div>
            </Section>

            {/* ================= 3. CARNOT ================= */}
            <Section
              no={3}
              title="ជំហានរលក"
              id="sec-carnot"
            >
              <div className="space-y-4">
                <p>
                  <strong> <em>ជំហានរលក
                  </em> </strong> ជាចម្ងាយដែលផ្លាស់ទីបានក្នុងបានក្នុងរយៈពេលមួយខួប។ <br />
                </p>
                <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">

                  <p className="font-semibold text-slate-800 mb-1">
                    តាមរូបមន្ត
                  </p>
                  <MathScroll math={String.raw`\lambda = v \cdot T`} />
                  <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                    <li>
                      <InlineMath math="\lambda" /> ចំនួនជំហានរលក (<InlineMath math="m" />)
                    </li>
                    <li>
                      <InlineMath math={String.raw`V `} />​ ល្បឿនរលក (<InlineMath math=" m/s" />)
                    </li>
                    <li>
                      <InlineMath math={String.raw`T`} />​ រយៈពេល (<InlineMath math="s" />)
                    </li>
                  </ul>
                </div>
              </div>
            </Section>

            {/* ================= 4. Wave Reflection ================= */}
            <Section
              no={4}
              title="សមីការរលកជញ្រ្ជំុ"
              id="sec-wave-reflection"
            >
              <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                <p className="font-semibold text-slate-800 mb-1">
                  រូបមន្ត
                </p>
                <div className="space-y-1">
                  <BlockMath math={String.raw`y = asin(kx - \omega t)`} />
                </div>
                <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math="a" /> អំព្លីទុត (<InlineMath math="m" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`K `} />​ ល្បឿនរលក (<InlineMath math=" m/s" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`x`} />​   (<InlineMath math="s" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`\omega `} />​ ល្បឿនប្រេកង់ (<InlineMath math=" rad/s" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`t`} />​ រយៈពេល (<InlineMath math="s" />)
                  </li>
                </ul>
              </div>
            </Section>

            {/* ================= 5. Wave diffraction ================= */}
            <Section no={5} title="សមីការរលកតម្រួត" id="sec-wave-diffraction">
              <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                <p className="font-semibold text-slate-800 mb-1">
                  រូបមន្ត
                </p>
                <div className="space-y-1">
                  <BlockMath math={String.raw`y = y_1 + y_2`} />
                </div>
              </div>
              <TipBox
                title="សម្រាយបញ្ចាក់"
                content={
                  <>
                    <div className="mt-2" >
                      <InlineMath math={String.raw`យើងមាន\space​ y_1 = a_1sin(\omega t - \phi_1 )`} />
                      <InlineMath math={String.raw`\space នឹង\space​ y_2 = a_2sin(\omega t - \phi_2 )`} />

                    </div>
                    <div className="mt-2" >
                      <InlineMath math={String.raw`⟹​ y = y_1 + y_2 = a_1sin(\omega t - \phi_1 ) + a_2sin(\omega t - \phi_2 )`} />
                    </div>

                    <Therefore className="mt-3" math={String.raw`y = a_1sin(\omega t - \phi_1 ) + a_2sin(\omega t - \phi_2 )`} />
                  </>
                }
              />
              <HintBox
                content={
                  <>
                    <p> <InlineMath math={String.raw`sina + sinb = 2sin\frac{a+b}{2}\cdot cos\frac{a-b}{2}`} /> </p>
                  </>
                }
              />
            </Section>

            <Section no={6} title="ទីតាំងថ្នាំងនិងទីតាំងពោះ" id="sec-wave-refraction">
              <div className="space-y-4">
                <p>
                  <strong> <em>ទីតាំងថ្នាំង</em> </strong> ជាទីតាំងដែលរលកតម្រួតមានអំព្លីទុត​ <InlineMath math={String.raw`a=0`} />។ <br />
                </p>
                <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">

                  <p className="font-semibold text-slate-800 mb-1">
                    តាមរូបមន្ត
                  </p>
                  <MathScroll math={String.raw`x = n\frac{\lambda}{2} \space,n = 0, 1, 2, 3, ....`} />
                  <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                    <li>
                      <InlineMath math="T" /> ខួប (<InlineMath math="s" />)
                    </li>
                    <li>
                      <InlineMath math={String.raw`\omega `} />​ ល្បឿនប្រេកង់ (<InlineMath math="rad/s" />)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <p>
                  <strong> <em>ទីតាំងពោះ</em> </strong> ជាទីតាំងដែលរលកតម្រួតមានអំព្លីទុត​ <InlineMath math={String.raw`a=\pm 1`} />។ <br />
                </p>
                <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">

                  <p className="font-semibold text-slate-800 mb-1">
                    តាមរូបមន្ត
                  </p>
                  <MathScroll math={String.raw`x = (2n-1)\frac{\lambda}{2} \space,n = 0, 1, 2, 3, ....`} />

                  <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                    <li>
                      <InlineMath math="T" /> ខួប (<InlineMath math="s" />)
                    </li>
                    <li>
                      <InlineMath math={String.raw`f `} />​ ចំនួនប្រេកង់ (<InlineMath math=" Hz " />)
                    </li>
                  </ul>
                </div>
              </div>
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
                      <BlockMath key="c" math={String.raw`e=1-\frac{Q_h}{Q_c}`} />,
                      <BlockMath key="d" math={String.raw`e=\frac{Q_c}{Q_h}`} />,
                    ],
                    correctAnswer: 1,
                  },
                  {
                    id: "e2",
                    question: (
                      <p>
                        ម៉ាស៊ីនមួយទទួល <InlineMath math="Q_h=1500\,\text{J}" /> និង
                        បញ្ចេញ <InlineMath math="Q_c=900\,\text{J}" />។{" "}
                        <InlineMath math="W" /> និង <InlineMath math="e" />?
                      </p>
                    ),
                    options: [
                      <BlockMath key="a" math={String.raw`W=600\,\text{J},\ e=40\%`} />,
                      <BlockMath key="b" math={String.raw`W=600\,\text{J},\ e=60\%`} />,
                      <BlockMath key="c" math={String.raw`W=900\,\text{J},\ e=40\%`} />,
                      <BlockMath key="d" math={String.raw`W=900\,\text{J},\ e=60\%`} />,
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
                    question: (
                      <p>
                        Refrigerator COP? ជម្រើសត្រឹមត្រូវ៖
                      </p>
                    ),
                    options: [
                      <BlockMath key="a" math={String.raw`\text{COP}_{\text{ref}}=\frac{Q_h}{W}`} />,
                      <BlockMath key="b" math={String.raw`\text{COP}_{\text{ref}}=\frac{Q_c}{W}`} />,
                      <BlockMath key="c" math={String.raw`\text{COP}_{\text{ref}}=\frac{W}{Q_c}`} />,
                      <BlockMath key="d" math={String.raw`\text{COP}_{\text{ref}}=\frac{T_h-T_c}{T_h}`} />,
                    ],
                    correctAnswer: 1,
                  },
                  {
                    id: "e5",
                    question: (
                      <p>
                        សម្រាប់សីតុណ្ហភាពដូចគ្នា{" "}
                        <InlineMath math="(T_h,T_c)" />៖ ត្រូវអ្វី?
                      </p>
                    ),
                    options: [
                      <BlockMath key="a" math={String.raw`\text{COP}_{\text{hp}}=\text{COP}_{\text{ref}}`} />,
                      <BlockMath key="b" math={String.raw`\text{COP}_{\text{hp}}=\text{COP}_{\text{ref}}-1`} />,
                      <BlockMath key="c" math={String.raw`\text{COP}_{\text{hp}}=\text{COP}_{\text{ref}}+1`} />,
                      <BlockMath key="d" math={String.raw`\text{COP}_{\text{hp}}=1/\text{COP}_{\text{ref}}`} />,
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
