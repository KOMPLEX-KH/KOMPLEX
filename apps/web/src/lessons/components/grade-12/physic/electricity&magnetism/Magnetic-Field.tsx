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
import { p } from "framer-motion/client";
import { div } from "three/tsl";

import { HintBoxProps } from "@/components/pages/docs/boxes/HintBox";

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

export default function MagneticField() {
  return (
    <>
      {/* ===== Mini TOC ===== */}
      <nav className="not-prose -mx-1 mb-3">
        <ol className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[13px]">
          <li>
            <a href="#sec-magnetic" className={chip}>
              <span className="font-semibold">1. មេដែក</span>
            </a>
          </li>
          <li>
            <a href="#sec-magnetic-field" className={chip}>
              <span className="font-semibold">2. ដែនម៉ាញេទិច</span>
            </a>
          </li>
          <li>
            <a href="#sec-interaction-magnetic-field" className={chip}>
              <span className="font-semibold">3. អន្តរកម្មនៃមេដែក</span>
            </a>
          </li>
          <li>
            <a href="#sec-magnetic-field-lines" className={chip}>
              <span className="font-semibold">4. ដែនម៉ាញេទិចចរន្តត្រង់</span>
            </a>
          </li>
          <li>
            <a href="#sec-magnetic-field-curves" className={chip}>
              <span className="font-semibold">5.</span> ដែនម៉ាញេទិចចរន្តវង់
            </a>
          </li>
          <li>
            <a href="#sec-magnetic-field-coils" className={chip}>
              <span className="font-semibold">6.</span> ដែនម៉ាញេទិចបូប៊ីនសំប៉ែត
            </a>
          </li>
          <li>
            <a href="#sec-magnetic-field-solenoid" className={chip}>
              <span className="font-semibold">7.</span>{" "}
              ដែនម៉ាញេទិចបូប៊ីននៃសូលេណូអុីត
            </a>
          </li>
          <li>
            <a href="#sec-lorentz-law" className={chip}>
              <span className="font-semibold">7.</span> ច្បាប់ឡូរិន
            </a>
          </li>
          <li>
            <a href="#sec-radius-magnetic-field" className={chip}>
              <span className="font-semibold">8.</span> កាំនៃកន្លងដែនម៉ាញេទិច
            </a>
          </li>
          <li>
            <a href="#sec-period-motion" className={chip}>
              <span className="font-semibold">9.</span> ខួបនៃចលនាមេដែក
            </a>
          </li>
          <li>
            <a href="#sec-electromagnetic-force" className={chip}>
              <span className="font-semibold">10.</span>{" "}
              កម្លាំងអេឡិចត្រូម៉ាញេទិច
            </a>
          </li>
          <li>
            <a href="#sec-two-force-interaction" className={chip}>
              <span className="font-semibold">11.</span> កម្លាំងពីរមានអំពើលើគ្នា
            </a>
          </li>
          <li>
            <a href="#sec-exercises" className={chip}>
              <span className="font-semibold">12.</span> លំហាត់
            </a>
          </li>
        </ol>
      </nav>

      <DefinitionBox
        title="ដែនម៉ាញេទិច"
        content={
          <div className="space-y-6">
            {/* ================= 1. OVERVIEW ================= */}
            <Section no={1} title="មេដែក" id="sec-magnetic">
              <TipBox
                title="និយមន័យ"
                content={
                  <div className="space-y-2">
                    <ul className="list-disc pl-6 space-y-1 text-slate-800">
                      <li>
                        <p>
                          <strong>មេដែក</strong>{" "}
                          គឺជាអង្គធាតុដែលអាចស្រូបទាញដែកបាន។
                        </p>
                      </li>
                      <li>
                        <p>
                          គេចែកមេដែកចេញជាបីប្រភេទគឺ៖
                          <ul className="list-none pl-6 space-y-1 text-slate-800">
                            <li>
                              <p>- ប៉ូលជើង</p>
                            </li>
                            <li>
                              <p>- ប៉ូលត្បូង</p>
                            </li>
                          </ul>
                        </p>
                      </li>
                      <li>
                        <p>ប្រភេទនៃមេដែកដែលគេនិយមប្រើមានបីនោះគឺ:</p>
                        <ul className="list-none pl-6 space-y-1 text-slate-800">
                          <li>
                            <p>- របាមេដែក</p>
                          </li>
                          <li>
                            <p>- ម្ចុលមេដែក</p>
                          </li>
                          <li>
                            <p>- មេដែករាងអក្សរU</p>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <p>គេចែកមេដែកជាពិរនោះគឺ:</p>
                        <ul className="list-none pl-6 space-y-1 text-slate-800">
                          <li>
                            <p>
                              - <strong>មេដែកធម្មជាតិ</strong>:
                              ជាមេដែកដែលកើតមានស្រាប់នៅលើផែនដី (
                              <InlineMath math={String.raw`Fe_2O_3`} />)
                            </p>
                          </li>
                          <li>
                            <p>
                              - <strong>មេដែកសប្បនិម្មិត​</strong>:
                              ជាមេដែកដែលកើតឡើងដោយមនុស្សជាអ្នកបង្កើត{" "}
                            </p>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                }
              />
            </Section>

            {/* ================= 2. HEAT ENGINE ================= */}
            <Section no={2} title="ដែនម៉ាញេទិច" id="sec-magnetic-field">
              <TipBox
                title="និយមន័យ"
                content={
                  <div className="space-y-2">
                    <ul className="list-disc pl-6 space-y-1 text-slate-800">
                      <li>
                        <p>
                          <strong>ដែនម៉ាញេទិច</strong>{" "}
                          គឺជាមជ្ឈដ្ឋានពិសេសមួយដែលកើតមានជុំវិញមេដែក។
                          គេតាងដែនម៉ាញេទិចដោយ(
                          <InlineMath math={String.raw`B`} />
                          )និងខ្នាតគិតជាតេស្លា(
                          <InlineMath math={String.raw`T`} />
                          )ដោយមានទិសដៅចេញពីប៉ូលជើងទៅប៉ូលត្បូង។
                        </p>
                      </li>
                      <li>
                        <p>
                          គេចែកដែនម៉ាញេទិចជាបីគឺ៖
                          <ul className="list-none space-y-1 text-slate-800 mt-1 pl-6">
                            <li>
                              <p>- ដែនម៉ាញេទិចនៃមេដែក</p>
                            </li>
                            <li>
                              <p>- ដែនម៉ាញេទិចផែនដី</p>
                            </li>
                            <li>
                              <p>- ដែនម៉ាញេទិចចរន្តអគ្គិសនី</p>
                            </li>
                          </ul>
                        </p>
                      </li>
                    </ul>
                  </div>
                }
              />
            </Section>

            {/* ================= 3. CARNOT ================= */}
            <Section no={3} title="អន្តរកម្មនៃមេដែក" id="sec-carnot">
              <TipBox
                title="និយមន័យ"
                content={
                  <div className="space-y-2">
                    <ul className="list-disc pl-6 space-y-1 text-slate-800">
                      <li>
                        <p>មេដែកពីរមានប៉ូលដូចគ្នា បើនៅក្បែគ្នាច្រានគ្នាចេញ។</p>
                      </li>
                      <li>
                        <p>មេដែកពីរមានប៉ូលខុសគ្នា បើនៅក្បែគ្នាទាញគ្នាចូល។</p>
                      </li>
                    </ul>
                  </div>
                }
              />
            </Section>

            {/* ================= 4. Wave Reflection ================= */}
            <Section
              no={4}
              title="ដែនម៉ាញេទិចចរន្តត្រង់"
              id="sec-magnetic-field-lines"
            >
              <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                <p className="font-semibold text-slate-800 mb-1">រូបមន្ត</p>
                <div className="space-y-2">
                  <BlockMath math={String.raw`B= \mu_0 \frac{I}{2\pi d}`} />
                </div>
                <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math="B" /> ដែនម៉ាញេទិច (<InlineMath math="T" />
                    )
                  </li>
                  <li>
                    <InlineMath math={String.raw`I `} />​ ចរន្តអគ្គិសនី (
                    <InlineMath math=" A" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`d`} />​ ចម្ងាយ (
                    <InlineMath math="m" />)
                  </li>
                  <li>
                    <div>
                      <InlineMath math={String.raw`\mu_0 `} />
                      ជម្រាបម៉ាញេទិចនៃសុញ្ញកាស (
                      <InlineMath math="\mu_0 =4\pi \times 10^{-7}SI" />)
                    </div>
                  </li>
                  <li>
                    <InlineMath math={String.raw`\pi `} />​ (
                    <InlineMath math="\pi = 3.14rad" />)
                  </li>
                </ul>
              </div>
            </Section>

            {/* ================= 5. Wave diffraction ================= */}
            <Section
              no={5}
              title="ដែនម៉ាញេទិចចរន្តវង់"
              id="sec-magnetic-field-curves"
            >
              <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                <p className="font-semibold text-slate-800 mb-1">រូបមន្ត</p>
                <div className="space-y-1">
                  <BlockMath math={String.raw`B= \mu_0 \frac{I}{2R}`} />
                </div>
                <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math="B" /> ដែនម៉ាញេទិច (<InlineMath math="T" />
                    )
                  </li>
                  <li>
                    <InlineMath math={String.raw`I `} />​ ចរន្តអគ្គិសនី (
                    <InlineMath math=" A" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`R`} />​ កាំនៃរង្វង់ (
                    <InlineMath math="m" />)
                  </li>
                  <li>
                    <div>
                      <InlineMath math={String.raw`\mu_0 `} />
                      ជម្រាបម៉ាញេទិចនៃសុញ្ញកាស (
                      <InlineMath math="\mu_0 =4\pi \times 10^{-7}SI" />)
                    </div>
                  </li>
                </ul>
              </div>
            </Section>

            <Section
              no={6}
              title="ដែនម៉ាញេទិចបូប៊ីនសំប៉ែត"
              id="sec-magnetic-field-coils"
            >
              <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                <p className="font-semibold text-slate-800 mb-1">រូបមន្ត</p>
                <div className="space-y-1">
                  <BlockMath math={String.raw`B= \mu_0 \frac{NI}{2R}`} />
                </div>
                <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math="B" /> ដែនម៉ាញេទិច (<InlineMath math="T" />
                    )
                  </li>
                  <li>
                    <InlineMath math={String.raw`I `} />​ ចរន្តអគ្គិសនី (
                    <InlineMath math=" A" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`R`} />​ កាំនៃរង្វង់ (
                    <InlineMath math="m" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`N`} />​ ចំនួនបូប៊ីន
                  </li>
                  <li>
                    <div>
                      <InlineMath math={String.raw`\mu_0 `} />
                      ជម្រាបម៉ាញេទិចនៃសុញ្ញកាស (
                      <InlineMath math="\mu_0 =4\pi \times 10^{-7}SI" />)
                    </div>
                  </li>
                </ul>
              </div>
              <HintBox
                content={
                  <>
                    <p className="font-semibold text-slate-800 mb-1">
                      {" "}
                      បើមានជម្រាបម៉ាញេទិចធៀប{" "}
                    </p>
                    <div className="grid gap-2 sm:grid-cols-2">
                      {/* Isochoric */}
                      <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
                        <p className="font-semibold text-slate-800 mb-1">
                          ចរន្តវង់
                        </p>
                        <div className="space-y-1">
                          <BlockMath
                            math={String.raw`B= \mu_0​ \mu_r \frac{I}{2R}`}
                          />
                        </div>
                        {/* <p className="text-sm text-slate-700">ខ្សែក្រាបឈរ (ប្លង់ V ថេរ)</p> */}
                      </div>

                      {/* Isobaric */}
                      <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
                        <p className="font-semibold text-slate-800 mb-1">
                          ចរន្តបូប៊ីនសំប៉ែត
                        </p>
                        <div className="space-y-1">
                          <BlockMath
                            math={String.raw`B= \mu_0 \mu_r\frac{NI}{2R}`}
                          />
                        </div>
                        {/* <p className="text-sm text-slate-700">តំបន់ជារាងចតុកោណក្រោមខ្សែក្រាប</p> */}
                      </div>
                    </div>
                  </>
                }
              />
            </Section>

            <Section
              no={7}
              title="ដែនម៉ាញេទិចនៃសូលេណូអុីត"
              id="sec-magnetic-field-solenoid"
            >
              <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                <p className="font-semibold text-slate-800 mb-1">រូបមន្ត</p>
                <div className="space-y-1">
                  <BlockMath math={String.raw`B= \mu_0 n I`} />
                </div>
                <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math="B" /> ដែនម៉ាញេទិច (<InlineMath math="T" />
                    )
                  </li>
                  <li>
                    <InlineMath math={String.raw`I `} />​ ចរន្តអគ្គិសនី (
                    <InlineMath math=" A" />)
                  </li>

                  <li>
                    <InlineMath math={String.raw`n`} />
                    ចំនួនបូប៊ីនក្នុងមួយម៉ែត្រ
                  </li>
                  <li>
                    <div>
                      <InlineMath math={String.raw`\mu_0 `} />
                      ជម្រាបម៉ាញេទិចនៃសុញ្ញកាស (
                      <InlineMath math="\mu_0 =4\pi \times 10^{-7}SI" />)
                    </div>
                  </li>
                </ul>
              </div>
              <HintBox
                content={
                  <>
                    <p>
                      {" "}
                      <BlockMath math={String.raw`n = \frac{N}{L}`} />{" "}
                    </p>
                  </>
                }
              />
              <HintBox
                content={
                  <>
                    <p>
                      {" "}
                      <BlockMath math={String.raw`l'= \pi DN`} />{" "}
                    </p>
                  </>
                }
              />
            </Section>

            <Section no={8} title="ច្បាប់ឡូរិន" id="sec-lorentz-law">
              <TipBox
                title="និយមន័យ"
                content={
                  <div className="space-y-2">
                    <p>
                      នៅពេលភាគល្អិតផ្លាស់ទីចូលដែនម៉ាញេទិចវារងនូវកម្លាំងម៉ាញេទិច។
                      កម្លាំងម៉ាញេទិចអាស្រ័យលើមុំដែលផ្គុំរវាងវុីចទ័រល្បឿននិងដែនម៉ាញេទិច។
                    </p>
                  </div>
                }
              />
              <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                <p className="font-semibold text-slate-800 mb-1">រូបមន្ត</p>
                <div className="space-y-1">
                  <BlockMath
                    math={String.raw`F_m = \left| q \right| vBsin\theta `}
                  />
                </div>
                <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math="B" /> ដែនម៉ាញេទិច (<InlineMath math="T" />
                    )
                  </li>
                  <li>
                    <InlineMath math={String.raw`q `} />​ បន្ទុកអគ្គិសនី (
                    <InlineMath math=" C" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`v `} />​ ល្បឿននៃបន្ទុកអគ្គិសនី
                    (<InlineMath math=" m/s" />)
                  </li>
                  <li>
                    <div>
                      <InlineMath math={String.raw`\mu_0 `} />
                      ជម្រាបម៉ាញេទិចនៃសុញ្ញកាស (
                      <InlineMath math="\mu_0 =4\pi \times 10^{-7}SI" />)
                    </div>
                  </li>
                </ul>
              </div>

              <HintBox
                content={
                  <div className="space-y-2">
                    <p>គន្លងរបស់ភាគល្អិត</p>
                    <ul className="list-disc pl-6 space-y-1 text-slate-800">
                      <li>
                        <p>
                          បើ <InlineMath math="\vec{v}​\perp \vec{B}" />
                          គន្លងរាងជារង្វង់
                        </p>
                      </li>
                      <li>
                        <p>
                          បើ <InlineMath math="\vec{v}​\parallel \vec{B}" />
                          គន្លងរាងជាបន្ទាត់
                        </p>
                      </li>
                      <li>
                        <p>
                          បើ <InlineMath math="0 \lt \theta \lt 90\degree" />
                          គន្លងរាងជាស្ពៀ
                        </p>
                      </li>
                    </ul>
                  </div>
                }
              />
            </Section>

            <Section
              no={9}
              title="កាំនៃកន្លងដែនម៉ាញេទិច"
              id="sec-radius-magnetic-field"
            >
              <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                <p className="font-semibold text-slate-800 mb-1">រូបមន្ត</p>
                <div className="space-y-1">
                  <BlockMath
                    math={String.raw`R = \frac{mv}{\left| q​ \right| B} `}
                  />
                </div>
                <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math={String.raw`R `} />​ កាំនៃកន្លងដែនម៉ាញេទិច
                    (<InlineMath math="m" />)
                  </li>
                  <li>
                    <InlineMath math="B" /> ដែនម៉ាញេទិច (<InlineMath math="T" />
                    )
                  </li>
                  <li>
                    <InlineMath math={String.raw`q `} />​ បន្ទុកអគ្គិសនី (
                    <InlineMath math=" C" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`v `} />​ ល្បឿននៃបន្ទុកអគ្គិសនី
                    (<InlineMath math=" m/s" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`m`} />​ ម៉ាសរបស់អង្គធាតុ (
                    <InlineMath math="kg" />)
                  </li>
                </ul>
              </div>
            </Section>

            <Section no={10} title="ខួបនៃចលនា" id="sec-period-motion">
              <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                <p className="font-semibold text-slate-800 mb-1">រូបមន្ត</p>
                <div className="space-y-1">
                  <BlockMath math={String.raw`T = \frac{2\pi R}{v} `} />
                </div>
                <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math="T" /> ខួបនៃចលនា (<InlineMath math="m/s" />
                    )
                  </li>
                  <li>
                    <InlineMath math={String.raw`R `} />​ កាំនៃកន្លងដែនម៉ាញេទិច
                    (<InlineMath math="m" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`v `} />​ ល្បឿននៃបន្ទុកអគ្គិសនី
                    (<InlineMath math=" m/s" />)
                  </li>
                </ul>
              </div>
            </Section>

            <Section
              no={11}
              title="កម្លាំងអេឡិចត្រូម៉ាញេទិច"
              id="sec-electromagnetic-force"
            >
              <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                <p className="font-semibold text-slate-800 mb-1">រូបមន្ត</p>
                <div className="space-y-1">
                  <BlockMath math={String.raw`F = BIlsin\theta `} />
                </div>
                <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math="F" /> កម្លាំងអេឡិចត្រូម៉ាញេទិច (
                    <InlineMath math="N" />)
                  </li>
                  <li>
                    <InlineMath math="B" /> ដែនម៉ាញេទិច (<InlineMath math="T" />
                    )
                  </li>
                  <li>
                    <InlineMath math={String.raw`I `} />​ ចរន្តអគ្គិសនី (
                    <InlineMath math="A" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`l `} />​ ប្រវែងខ្សែចម្លង (
                    <InlineMath math=" m" />)
                  </li>
                </ul>
              </div>
            </Section>
            <Section
              no={12}
              title="កម្លាំងអេឡិចត្រូម៉ាញេទិច"
              id="sec-electromagnetic-force"
            >
              <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                <p className="font-semibold text-slate-800 mb-1">រូបមន្ត</p>
                <div className="space-y-1">
                  <BlockMath math={String.raw`F = BIlsin\theta `} />
                </div>
                <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math="F" /> កម្លាំងអេឡិចត្រូម៉ាញេទិច (
                    <InlineMath math="N" />)
                  </li>
                  <li>
                    <InlineMath math="B" /> ដែនម៉ាញេទិច (<InlineMath math="T" />
                    )
                  </li>
                  <li>
                    <InlineMath math={String.raw`I `} />​ ចរន្តអគ្គិសនី (
                    <InlineMath math="A" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`l `} />​ ប្រវែងខ្សែចម្លង (
                    <InlineMath math=" m" />)
                  </li>
                </ul>
              </div>
            </Section>

            <Section
              no={13}
              title="កម្លាំងពីរមានអំពើលើគ្នា"
              id="sec-two-force-interaction"
            >
              <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                <p className="font-semibold text-slate-800 mb-1">រូបមន្ត</p>
                <div className="space-y-1">
                  <BlockMath
                    math={String.raw`F = \mu_0 \frac{I_1I_2l}{2\pi d} `}
                  />
                </div>
                <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math="F" /> កម្លាំងអេឡិចត្រូម៉ាញេទិច (
                    <InlineMath math="N" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`I `} />​ ចរន្តអគ្គិសនី (
                    <InlineMath math="A" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`l `} />​ ប្រវែងខ្សែចម្លង (
                    <InlineMath math=" m" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`d `} />​ ចម្ងាយរវាងអង្គធាតុពីរ
                    (<InlineMath math=" m" />)
                  </li>
                  <li>
                    <InlineMath math={String.raw`\mu_0 `} />
                    ជម្រាបម៉ាញេទិចនៃសុញ្ញកាស (
                    <InlineMath math=" \mu_0 = 4\pi \times 10^{-7}SI" />)
                  </li>
                </ul>
              </div>
            </Section>

            {/* ================= 6. EXERCISES ================= */}
            <Section no={13} title="លំហាត់ជ្រើសរើសចម្លើយ" id="sec-exercises">
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
