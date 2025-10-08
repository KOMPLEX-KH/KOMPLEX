import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
import { HintBox } from "@/components/pages/docs/boxes/HintBox";
import { WarningBox } from "@/components/pages/docs/boxes/WarningBox";
import { BlockMath, InlineMath } from "react-katex";
import { MathLine } from "@components/helper/MathLine";
import { MathScroll } from "@components/helper/MathScroll";
// import { ExampleBoxProps } from './@/components/pages/docs/boxes/ExampleBox';

/**
 * KineticTheory (Definition Article)
 * Single DefinitionBox that contains the whole formula article, following your style.
 */

const Chip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white text-sm font-bold">
    {children}
  </span>
);

const chip =
  "block rounded-2xl px-3 py-2 leading-snug break-words " +
  "bg-white text-slate-800 ring-1 ring-violet-200 shadow-sm " +
  "transition-all duration-200 " +
  "hover:bg-violet-50 hover:text-violet-700 hover:ring-violet-400 hover:shadow " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500";

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
      <Chip>{no}</Chip>
      <h3 className="text-lg sm:text-xl font-bold text-slate-900">{title}</h3>
      {/* <div className="ml-auto hidden sm:block text-xs text-slate-500">#{id}</div> */}
    </div>
    {children}
  </section>
);

const KineticTheory = () => {
  return (
    <>
      {/* ===== One Definition Article ===== */}
      <DefinitionBox
        title="ទ្រឹស្តីចលនាគ្រាប់ឧស្ម័ន"
        content={
          <div className="space-y-6">
            {/* Optional mini-TOC */}
            <nav className="not-prose -mx-1 mb-3">
              <ol className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[13px]">
                <li>
                  <a href="#sec-kt" className={chip}>
                    {/* optional icon */}
                    {/* <Leaf className="mr-1 inline-block h-4 w-4 align-[-2px] text-violet-600" /> */}
                    <span className="font-semibold">1.</span>{" "}
                    ទ្រឹស្តីសុីនេទិចនៃឧស្ម័ន
                  </a>
                </li>
                <li>
                  <a href="#sec-temp" className={chip}>
                    <span className="font-semibold">2.</span> សីតុណ្ហភាព
                  </a>
                </li>
                <li>
                  <a href="#sec-ideal" className={chip}>
                    <span className="font-semibold">3.</span>{" "}
                    សមីការឧស្ម័នបរិសុទ្ធ
                  </a>
                </li>
                <li>
                  <a href="#sec-mole" className={chip}>
                    <span className="font-semibold">4.</span> ចំនួនម៉ូលនៃឧស្ម័ន
                  </a>
                </li>
                <li>
                  <a href="#sec-const-mole" className={chip}>
                    <span className="font-semibold">5.</span> ថេរសកលនៃឧស្ម័ន
                  </a>
                </li>
                <li>
                  <a href="#sec-means-energy-kinetic" className={chip}>
                    <span className="font-semibold">6.</span> ថាមពលសុីនេទិចមធ្យម
                  </a>
                </li>
                <li>
                  <a href="#sec-total-energy-kinetic" className={chip}>
                    <span className="font-semibold">7.</span> ថាមពលសុីនេទិចសរុប
                  </a>
                </li>
                <li>
                  <a href="#sec-eff-speed" className={chip}>
                    <span className="font-semibold">8.</span> ល្បឿនប្រសិទ្ធ
                  </a>
                </li>
              </ol>
            </nav>
            {/* Sections */}

            <Section no={1} title="ទ្រឹស្តីសុីនេទិចនៃឧស្ម័ន" id="sec-kt">
              <TipBox
                title="ទ្រឹស្តីបទ"
                content={
                  <div className="space-y-2">
                    <ul className="list-disc pl-6 space-y-1 text-slate-800">
                      <li>
                        {" "}
                        ម៉ូលេគុលនៃឧស្ម័នត្រូវមិនមានអំពើលើគ្នាទេ
                        លើកលែងតែពេលប៉ះគ្នា។
                      </li>
                      <li>
                        ម៉ូលេគុលនៃឧស្ម័នផ្លាស់ទីដោយសេរី
                        ឥតឈប់ឈរនឹងគ្មានសណ្តាប់ធ្នាប់។{" "}
                      </li>
                      <li>
                        ក្រោយទង្គិចម៉ូលេគុលនៃឧស្ម័នផ្លាស់ទីដោយចលនាត្រងើស្មើ។{" "}
                      </li>
                      <li>
                        តម្លៃមធ្យមនៃថាមពលសុីនេទិចរបស់ឧស្ម័នសមាមាត្រទៅនឹងសីតុណ្ហភាព។
                      </li>
                      <li>
                        ឧស្ម័នពីរនៅសីតុណ្ហភាពដូចគ្នាមានតម្លៃថាមពលសុីនេទិចដូចគ្នា។
                      </li>
                    </ul>

                    {/*Sample component of រូបមន្ត */}
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                        <p className="font-semibold text-slate-800 mb-1">
                          តាមរូបមន្ត
                        </p>
                        <MathScroll
                          math={String.raw`P=\frac{2}{3}\left(\frac{N}{V}\right) K_{av}`}
                        />
                        <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                          {/* <li><InlineMath math={String.raw`P`} /> គឺជាសម្ពាធ គិតជា <InlineMath math={String.raw`N/m^2`}​​ /> ​ <InlineMath math={String.raw`Pa`} /></li> */}
                          <li>
                            <InlineMath math={String.raw`P`} /> គឺជាសម្ពាធ គិតជា{" "}
                            <InlineMath math={String.raw`Pa`} />
                          </li>
                          <li>
                            <InlineMath math={String.raw`K_{av}`} />{" "}
                            គឺជាតម្លៃមធ្យមនៃថាមពលសុីនេទិច គិតជា{" "}
                            <InlineMath math={String.raw`J`} />
                          </li>
                          <li>
                            <InlineMath math={String.raw`N`} />{" "}
                            គឺជាចំនួនម៉ូលេគុលនៃឧស្ម័ន
                          </li>
                          <li>
                            <InlineMath math={String.raw`V`} /> គឺជាមាឌធុង គិតជា{" "}
                            <InlineMath math={String.raw`m^3`} />
                          </li>
                        </ul>
                      </div>

                      {/* */}
                      <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                        <p className="font-semibold text-slate-800 mb-1">
                          តាមរូបមន្ត
                        </p>
                        <MathScroll
                          math={String.raw`P=\frac{2}{3}\left(\frac{N}{V}\right)\frac{1}{2}m_o\,v^2`}
                        />
                        <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                          {/* <li><InlineMath math={String.raw`P`} /> គឺជាសម្ពាធ គិតជា <InlineMath math={String.raw`N/m^2`}​​ /> ​ <InlineMath math={String.raw`Pa`} /></li> */}
                          <li>
                            <InlineMath math={String.raw`P`} /> គឺជាសម្ពាធ គិតជា{" "}
                            <InlineMath math={String.raw`Pa`} />
                          </li>
                          <li>
                            <InlineMath math={String.raw`N`} />{" "}
                            គឺជាចំនួនម៉ូលេគុលនៃឧស្ម័ន
                          </li>
                          <li>
                            <InlineMath math={String.raw`V`} /> គឺជាមាឌធុង គិតជា{" "}
                            <InlineMath math={String.raw`m^3`} />
                          </li>
                          <li>
                            <InlineMath math={String.raw`m_o`} />{" "}
                            គឺជាម៉ាស់របស់ម៉ូលេគុលមួយ​ គិតជា​{" "}
                            <InlineMath math={String.raw`kg`} />
                          </li>
                          <li>
                            <InlineMath math={String.raw` v`} />{" "}
                            គឺជាមធ្យមនៃល្បឿន​ គិតជា{" "}
                            <InlineMath math={String.raw`m/s`} />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                }
              />
            </Section>

            <Section no={2} title="សីតុណ្ហភាព" id="sec-temp">
              <p>
                ទំនាក់ទំនងរវាងសីតុណ្ហភាពដាច់ខាត់និងសីតុណ្ហភាពគិតជាសែលស្យ៊ុស:
              </p>
              <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                <p className="font-semibold text-slate-800 mb-1">តាមរូបមន្ត</p>
                <MathScroll math={String.raw`T=t+273.15`} />
                <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math={String.raw`T`} /> គឺជាសីតុណ្ហភាពដាច់ខាត់
                    គិតជា <InlineMath math={String.raw`K`} />
                  </li>
                  <li>
                    <InlineMath math={String.raw`t`} /> គឺជាសីតុណ្ហភាព គិតជា{" "}
                    <InlineMath math={String.raw`^\circ C`} />
                  </li>
                </ul>
              </div>
            </Section>

            <Section no={3} title="សមីការឧស្ម័នបរិសុទ្ធ" id="sec-ideal">
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                  <p className="font-semibold text-slate-800 mb-1">
                    តាមរូបមន្ត
                  </p>
                  <MathScroll math={String.raw`PV=nRT`} />
                  <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                    <li>
                      <InlineMath math={String.raw`P`} /> គឺជាសម្ពាធ គិតជា{" "}
                      <InlineMath math={String.raw`Pa`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`V`} /> គឺជាមាឌធុង គិតជា{" "}
                      <InlineMath math={String.raw`m^3`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`n`} />{" "}
                      គឺជាចំនួនម៉ូលេគុលនៃឧស្ម័ន​ គិតជា{" "}
                      <InlineMath math={String.raw`mol`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`R`} /> គឺជាថេរសកលនៃឧស្ម័ន
                      គិតជា <InlineMath math={String.raw`R=8.31J/mol.K`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`T`} /> គឺជាសីតុណ្ហភាព គិតជា{" "}
                      <InlineMath math={String.raw`K`} />
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                  <p className="font-semibold text-slate-800 mb-1">
                    តាមរូបមន្ត
                  </p>
                  <MathScroll math={String.raw`PV=k_BNT`} />
                  <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                    <li>
                      <InlineMath math={String.raw`P`} /> គឺជាសម្ពាធ គិតជា{" "}
                      <InlineMath math={String.raw`Pa`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`V`} /> គឺជាមាឌធុង គិតជា{" "}
                      <InlineMath math={String.raw`m^3`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`K_B`} /> គឺជាថេរបុលស្មាន់
                      គិតជា{" "}
                    </li>
                    <InlineMath math={String.raw`k_B=1.38\times10^{-23} J/K`} />
                    <li>
                      <InlineMath math={String.raw`N`} />{" "}
                      គឺជាចំនួនម៉ូលេគុលនៃឧស្ម័ន​{" "}
                    </li>
                    <li>
                      <InlineMath math={String.raw`T`} /> គឺជាសីតុណ្ហភាព គិតជា{" "}
                      <InlineMath math={String.raw`K`} />
                    </li>
                  </ul>
                </div>

                {/* */}
                <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                  <p className="font-semibold text-slate-800 mb-1">
                    តាមរូបមន្ត
                  </p>
                  <MathScroll math={String.raw`PV=k_BnN_AT`} />
                  <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                    <li>
                      <InlineMath math={String.raw`P`} /> គឺជាសម្ពាធ គិតជា{" "}
                      <InlineMath math={String.raw`Pa`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`V`} /> គឺជាមាឌធុង គិតជា{" "}
                      <InlineMath math={String.raw`m^3`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`K_B`} /> គឺជាថេរបុលស្មាន់
                      គិតជា{" "}
                    </li>
                    <InlineMath math={String.raw`k_B=1.38\times10^{-23} J/K`} />
                    <li>
                      <InlineMath math={String.raw`n`} />{" "}
                      គឺជាចំនួនម៉ូលេគុលនៃឧស្ម័ន​ គិតជា{" "}
                      <InlineMath math={String.raw`mol`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`N_A`} /> គឺជាចំនួនអាវ៉ូកាដ្រូ
                      គិតជា{" "}
                    </li>
                    <InlineMath
                      math={String.raw`N_A=6.022\times10^{23} \text{ម៉ូលេគុល}/mol`}
                    />
                    <li>
                      <InlineMath math={String.raw`T`} /> គឺជាសីតុណ្ហភាព គិតជា{" "}
                      <InlineMath math={String.raw`K`} />
                    </li>
                  </ul>
                </div>
              </div>

              <ExampleBox
                question={
                  <>
                    <p>
                      គណនាមាឌឧស្ម័នអុកសុីសែន{" "}
                      <InlineMath math={String.raw`3.2g`} />
                      ដែលផ្ទុកក្នុងធុងនៅសម្ពាធ
                      <InlineMath math={String.raw`76cmHg`} />
                      និងសីតុណ្ហភាព
                      <InlineMath math={String.raw`27^{\circ}C`} />។
                    </p>
                  </>
                }
                steps={[
                  {
                    title: "បម្រាប់",
                    content: (
                      <ul className="list-disc pl-6 text-sm space-y-1">
                        <li>
                          <InlineMath
                            math={String.raw`M(O_2)=32{g/mol}=32\times 10^{-3}{kg/mol}`}
                          />
                        </li>
                        <li>
                          <InlineMath
                            math={String.raw`m=3.2{g}=3.2\times 10^{-3}{kg}`}
                          />
                        </li>
                        <li>
                          <InlineMath math={String.raw`R=8.31{J/mol.K}`} />
                        </li>
                        <li>
                          <InlineMath
                            math={String.raw`T=27^{\circ}C= 27\times 273=300\,K`}
                          />
                        </li>
                        <li>
                          <InlineMath
                            math={String.raw`P=76\,cmHg=1\,atm=10^{5}\,Pa`}
                          />
                        </li>
                      </ul>
                    ),
                  },
                  {
                    title: "រូបមន្ត",
                    content: (
                      <>
                        <MathLine
                          math={String.raw`\text{តាមរូបមន្ត } PV=nRT`}
                        />
                        <MathLine
                          math={String.raw`\text{តែ } n=\frac{m}{M}​\Rightarrow\ V=\frac{mRT}{MP}`}
                        />
                      </>
                    ),
                  },
                  {
                    title: "ដាក់តម្លៃ",
                    content: (
                      <>
                        <MathLine
                          math={String.raw`V=\frac{3.2\times 10^{-3}\times 8.31\times 300}{32\times10^{-3}\times 10^{5}}`}
                        />
                        <MathLine
                          math={String.raw`V= 2.493\times 10^{-3}\ \text{m}^3`}
                        />
                      </>
                    ),
                  },
                ]}
                answer={
                  <InlineMath
                    math={String.raw`V= 2.493\times 10^{-3}\ \text{m}^3`}
                  />
                }
              />
            </Section>

            <Section no={4} title="ចំនួនម៉ូលនៃឧស្ម័ន" id="sec-mole">
              <p>ទំនាក់ទំនងរវាងចំនួនម៉ូលនៃឧស្ម័ន និង ចំនួនម៉ូលេគុលនៃឧស្ម័ន:</p>
              <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                <p className="font-semibold text-slate-800 mb-1">តាមរូបមន្ត</p>
                <MathScroll math={String.raw`n=\frac{N}{N_A}`} />
                <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math={String.raw`n`} />{" "}
                    គឺជាចំនួនម៉ូលេគុលនៃឧស្ម័ន​ គិតជា{" "}
                    <InlineMath math={String.raw`mol`} />
                  </li>
                  <li>
                    <InlineMath math={String.raw`N`} />{" "}
                    គឺជាចំនួនម៉ូលេគុលនៃឧស្ម័ន
                  </li>
                  <li>
                    <InlineMath math={String.raw`N_A`} /> គឺជាចំនួនអាវ៉ូកាដ្រូ
                    គិតជា{" "}
                    <InlineMath
                      math={String.raw`N_A=6.022\times10^{23} \text{ម៉ូលេគុល}/mol`}
                    />
                  </li>
                </ul>
              </div>
            </Section>

            <Section no={5} title="ថេរសកលនៃឧស្ម័ន" id="#sec-const-mole">
              <p>ទំនាក់ទំនងរវាងថេរបុលឧស្ម័ន និង ថេរសកលនៃឧស្ម័ន:</p>
              <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                <p className="font-semibold text-slate-800 mb-1">តាមរូបមន្ត</p>
                <MathScroll math={String.raw`R=K_B\times N_A`} />
                <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li>
                    <InlineMath math={String.raw`R`} /> គឺជាថេរសកលនៃឧស្ម័ន គិតជា{" "}
                    <InlineMath math={String.raw`R=8.31J/mol.K`} />
                  </li>
                  <li>
                    <InlineMath math={String.raw`K_B`} /> គឺជាថេរបុលស្មាន់ គិតជា{" "}
                    <InlineMath math={String.raw`k_B=1.38\times10^{-23} J/K`} />
                  </li>
                  <li>
                    <InlineMath math={String.raw`N_A`} /> គឺជាចំនួនអាវ៉ូកាដ្រូ
                    គិតជា{" "}
                    <InlineMath
                      math={String.raw`N_A=6.022\times10^{23} \text{ម៉ូលេគុល}/mol`}
                    />
                  </li>
                </ul>
              </div>
            </Section>

            <Section
              no={6}
              title="ថាមពលសុីនេទិចមធ្យម"
              id="sec-means-energy-kinetic"
            >
              <div className="grid gap-3 sm:grid-cols-3">
                <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                  <p className="font-semibold text-slate-800 mb-1">
                    រូបមន្តទីមួយ
                  </p>
                  <MathScroll math={String.raw`K_{av}=\tfrac{1}{2}m v^2`} />
                  <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                    <li>
                      <InlineMath math={String.raw`K_{av}`} />{" "}
                      គឺជាថាមពលសុីនេទិចមធ្យម គិតជា{" "}
                      <InlineMath math={String.raw`J`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`m`} />{" "}
                      គឺជាម៉ាស់របស់ម៉ូលេគុលនៃឧស្ម័ន{" "}
                      <InlineMath math={String.raw`m`} />{" "}
                    </li>
                    <li>
                      <InlineMath math={String.raw`v`} /> គឺជាល្បឿននៃមធ្យម
                      គិតជា <InlineMath math={String.raw`m/s`} />
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                  <p className="font-semibold text-slate-800 mb-1">
                    រូបមន្តទីពីរ
                  </p>
                  <MathScroll math={String.raw`K_{av}=\tfrac{3}{2}K_B T`} />
                  <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                    <li>
                      <InlineMath math={String.raw`K_{av}`} />{" "}
                      គឺជាថាមពលសុីនេទិចមធ្យម គិតជា{" "}
                      <InlineMath math={String.raw`J`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`K_B`} /> គឺជាថេរបុលស្មាន់
                      គិតជា{" "}
                      <InlineMath
                        math={String.raw`k_B=1.38\times10^{-23} J/K`}
                      />
                    </li>

                    <li>
                      <InlineMath math={String.raw`T`} /> គឺជាសីតុណ្ហភាព គិតជា{" "}
                      <InlineMath math={String.raw`K`} />
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                  <p className="font-semibold text-slate-800 mb-1">
                    រូបមន្តទីបី
                  </p>
                  <MathScroll math={String.raw`K_{av}=\tfrac{3}{2}RT`} />
                  <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                    <li>
                      <InlineMath math={String.raw`K_{av}`} />{" "}
                      គឺជាថាមពលសុីនេទិចមធ្យម គិតជា{" "}
                      <InlineMath math={String.raw`J`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`R`} /> គឺជាថេរសកលនៃឧស្ម័ន
                      គិតជា <InlineMath math={String.raw`R=8.31J/mol.K`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`T`} /> គឺជាសីតុណ្ហភាព គិតជា{" "}
                      <InlineMath math={String.raw`K`} />
                    </li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section
              no={7}
              title="ថាមពលសុីនេទិចសរុប"
              id="sec-total-energy-kinetic"
            >
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                  <p className="font-semibold text-slate-800 mb-1">
                    រូបមន្តទីមួយ
                  </p>
                  <MathScroll math={String.raw`K=\tfrac{3}{2}NK_B T`} />
                  <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                    <li>
                      <InlineMath math={String.raw`K`} /> គឺជាថាមពលសុីនេទិចសរុប
                      គិតជា <InlineMath math={String.raw`J`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`K_B`} /> គឺជាថេរបុលស្មាន់
                      គិតជា{" "}
                      <InlineMath
                        math={String.raw`k_B=1.38\times10^{-23} J/K`}
                      />
                    </li>
                    <li>
                      <InlineMath math={String.raw`N`} /> គឺជាចំនួនម៉ូលេគុល
                    </li>
                    <li>
                      <InlineMath math={String.raw`T`} /> គឺជាសីតុណ្ហភាព គិតជា{" "}
                      <InlineMath math={String.raw`K`} />
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                  <p className="font-semibold text-slate-800 mb-1">
                    រូបមន្តទីពីរ
                  </p>
                  <MathScroll math={String.raw`K=\tfrac{3}{2}nRT`} />
                  <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                    <li>
                      <InlineMath math={String.raw`K`} /> គឺជាថាមពលសុីនេទិចសរុប
                      គិតជា <InlineMath math={String.raw`J`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`n`} /> គឺជាចំនួនម៉ូល គិតជា{" "}
                      <InlineMath math={String.raw`mol`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`R`} /> គឺជាថេរសកលនៃឧស្ម័ន
                      គិតជា <InlineMath math={String.raw`R=8.31J/mol.K`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`T`} /> គឺជាសីតុណ្ហភាព គិតជា{" "}
                      <InlineMath math={String.raw`K`} />
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                  <p className="font-semibold text-slate-800 mb-1">
                    រូបមន្តទីបី
                  </p>
                  <MathScroll math={String.raw`K=NK_{av}`} />
                  <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                    <li>
                      <InlineMath math={String.raw`K`} /> គឺជាថាមពលសុីនេទិចសរុប
                      គិតជា <InlineMath math={String.raw`J`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`K_{av}`} />{" "}
                      គឺជាថាមពលសុីនេទិចមធ្យម គិតជា{" "}
                      <InlineMath math={String.raw`J`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`N`} /> គឺជាចំនួនម៉ូលេគុល
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                  <p className="font-semibold text-slate-800 mb-1">
                    រូបមន្តទីបួន
                  </p>
                  <MathScroll math={String.raw`K=\tfrac{3}{2}PV`} />
                  <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                    <li>
                      <InlineMath math={String.raw`K`} /> គឺជាថាមពលសុីនេទិចសរុប
                      គិតជា <InlineMath math={String.raw`J`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`P`} /> គឺជាសម្ពាធ គិតជា{" "}
                      <InlineMath math={String.raw`Pa`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`V`} /> គឺជាមាឌធុង គិតជា{" "}
                      <InlineMath math={String.raw`m^3`} />
                    </li>
                  </ul>
                </div>
              </div>
            </Section>

            <Section no={8} title="ល្បឿនប្រសិទ្ធ" id="sec-eff-speed">
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                  <p className="font-semibold text-slate-800 mb-1">
                    រូបមន្តទីមួយ
                  </p>
                  <MathScroll
                    math={String.raw`V_{rms}=\sqrt{\tfrac{3RT}{M}}`}
                  />
                  <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                    <li>
                      <InlineMath math={String.raw`V_{rms}`} />{" "}
                      គឺជាល្បឿនប្រសិទ្ធ គិតជា{" "}
                      <InlineMath math={String.raw`m/s`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`R`} /> គឺជាថេរសកលនៃឧស្ម័ន
                      គិតជា <InlineMath math={String.raw`R=8.31J/mol.K`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`M`} /> គឺជាម៉ាសម៉ូល គិតជា{" "}
                      <InlineMath math={String.raw`kg/mol`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`T`} /> គឺជាសីតុណ្ហភាព គិតជា{" "}
                      <InlineMath math={String.raw`K`} />
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                  <p className="font-semibold text-slate-800 mb-1">
                    រូបមន្តទីពីរ
                  </p>
                  <MathScroll
                    math={String.raw`V_{rms}=\sqrt{\tfrac{3K_BT}{m}}`}
                  />
                  <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                    <li>
                      <InlineMath math={String.raw`V_{rms}`} />{" "}
                      គឺជាល្បឿនប្រសិទ្ធ គិតជា{" "}
                      <InlineMath math={String.raw`m/s`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`k_B`} /> គឺជាថេរបុលនៃឧស្ម័ន
                      គិតជា{" "}
                      <InlineMath
                        math={String.raw`k_B=1.38\times10^{-23}J/K`}
                      />
                    </li>
                    <li>
                      <InlineMath math={String.raw`m`} /> គឺជាម៉ូលនៃឧស្ម័ន គិតជា{" "}
                      <InlineMath math={String.raw`kg`} />
                    </li>
                    <li>
                      <InlineMath math={String.raw`T`} /> គឺជាសីតុណ្ហភាព គិតជា{" "}
                      <InlineMath math={String.raw`K`} />
                    </li>
                  </ul>
                </div>
              </div>
            </Section>
          </div>
        }
      />

      {/* ===== Tip ===== */}
      <TipBox
        title="ចំណាំលឿន"
        content={
          <div className="space-y-2">
            <p>
              ចូរប្រើ Kelvin សម្រាប់សីតុណ្ហភាព និង{" "}
              <InlineMath math={String.raw`M`} /> ត្រូវបម្លែងទៅ <em>kg/mol</em>{" "}
              មុនគណនា
              <InlineMath math={String.raw`v_{\mathrm{rms}}=\sqrt{3RT/M}`} />។
              កុំភ្លេច <InlineMath math={String.raw`R=k_BN_A`} /> និង{" "}
              <InlineMath math={String.raw`n=\tfrac{N}{N_A}`} />។
            </p>
          </div>
        }
      />

      {/* ===== Example ===== */}
      <ExampleBox
        question={
          <>
            <p>
              គណនាល្បឿន RMS របស់ ឧស្ម័ន O<InlineMath math={String.raw`_2`} /> នៅ{" "}
              <InlineMath math={String.raw`T=300\\,\\text{K}`} /> (M = 32 g/mol)
            </p>
          </>
        }
        steps={[
          {
            title: "ជំហាន 1 — បម្លែងឯកតា",
            content: (
              <>
                <p>M = 32 g/mol = 0.032 kg/mol</p>
              </>
            ),
          },
          {
            title: "ជំហាន 2 — ដាក់ក្នុងរូបមន្ត",
            content: (
              <>
                <MathLine
                  math={String.raw`v_{\\mathrm{rms}}=\\sqrt{\\tfrac{3RT}{M}}=\\sqrt{\\tfrac{3(8.314)(300)}{0.032}}`}
                />
              </>
            ),
          },
          {
            title: "លទ្ធផល",
            content: (
              <>
                <MathLine
                  math={String.raw`v_{\\mathrm{rms}}\\approx4.84\\times10^{2}\\,\\text{m/s}`}
                />
                <p className="text-sm text-slate-700">
                  ប្រហាក់ប្រហែល 4.84×10^2 m/s
                </p>
              </>
            ),
          },
        ]}
        answer="v_rms ≈ 4.84×10^2 m/s"
      />

      {/* ===== Exercises (MCQ) ===== */}
      <ExerciseBox
        questions={[
          {
            id: "kt1",
            question: (
              <>
                <p>
                  តើមួយណាខាងក្រោម គឺការសន្មត់ត្រឹមត្រូវសម្រាប់ឧស្ម័នបរិសុទ្ធ?
                </p>
              </>
            ),
            options: [
              <p key="a">ម៉ូលេគុលទាក់ទាញខ្លាំងគ្នានៅគ្រប់ដាយស្តង់</p>,
              <p key="b">ម៉ូលេគុលមិនអន្តរកម្មគ្នា លើកលែងពេលទង្គិច</p>,
              <p key="c">ទង្គិចបាត់បង់ថាមពលជានិច្ច</p>,
              <p key="d">ល្បឿនទាំងអស់ស្មើគ្នា</p>,
            ],
            correctAnswer: 1,
          },
          {
            id: "kt2",
            question: (
              <>
                <p>
                  បម្លែង <InlineMath math={String.raw`27^{\circ}C`} /> ទៅ Kelvin
                </p>
              </>
            ),
            options: [
              <BlockMath key="a" math={String.raw`273\,K`} />,
              <BlockMath key="b" math={String.raw`300\,K`} />,
              <BlockMath key="c" math={String.raw`327\,K`} />,
              <BlockMath key="d" math={String.raw`-246\,K`} />,
            ],
            correctAnswer: 1,
          },
          {
            id: "kt3",
            question: (
              <>
                <p>
                  O<InlineMath math={String.raw`_2`} /> 3.2 g នៅ 300 K និង 1 atm
                  → តម្លៃ <InlineMath math="V" /> ប្រហាក់ប្រហែល?
                </p>
              </>
            ),
            options: [
              <BlockMath key="a" math={String.raw`2.5\times10^{-3}\,m^3`} />,
              <BlockMath key="b" math={String.raw`2.5\times10^{-2}\,m^3`} />,
              <BlockMath key="c" math={String.raw`2.5\times10^{-4}\,m^3`} />,
              <BlockMath key="d" math={String.raw`2.5\times10^{3}\,m^3`} />,
            ],
            correctAnswer: 0,
          },
          {
            id: "kt4",
            question: (
              <>
                <p>ឯកតាសម្ពាធ 1 atm ស្មើនឹង?</p>
              </>
            ),
            options: [
              <BlockMath key="a" math={String.raw`1.013\times10^{5}Pa`} />,
              <BlockMath key="b" math={String.raw`1.000\times10^{5}Pa`} />,
              <BlockMath key="c" math={String.raw`1.013\times10^{6}Pa`} />,
              <BlockMath key="d" math={String.raw`9.81\times10^{4}Pa`} />,
            ],
            correctAnswer: 0,
          },
          {
            id: "kt5",
            question: (
              <>
                <p>
                  បើ <InlineMath math="N=1.2044\times10^{23}" /> តើ{" "}
                  <InlineMath math="n" /> ប៉ុន្មាន?
                </p>
              </>
            ),
            options: [
              <BlockMath key="a" math={String.raw`0.020\,mol`} />,
              <BlockMath key="b" math={String.raw`0.200\,mol`} />,
              <BlockMath key="c" math={String.raw`2.00\,mol`} />,
              <BlockMath key="d" math={String.raw`20.0\,mol`} />,
            ],
            correctAnswer: 1,
          },
          {
            id: "kt6",
            question: (
              <>
                <p>
                  សម្រាប់ 1 mol ឧស្ម័ននៅ 300 K តើ <InlineMath math="K" /> (សរុប)
                  ជា?
                </p>
              </>
            ),
            options: [
              <BlockMath key="a" math={String.raw`3.74\times10^{3}\,J`} />,
              <BlockMath key="b" math={String.raw`3.74\times10^{2}\,J`} />,
              <BlockMath key="c" math={String.raw`3.74\times10^{4}\,J`} />,
              <BlockMath key="d" math={String.raw`374\,J`} />,
            ],
            correctAnswer: 0,
          },
          {
            id: "kt7",
            question: (
              <>
                <p>
                  ល្បឿន <InlineMath math="v_{rms}" /> របស់ N
                  <InlineMath math={String.raw`_2`} /> នៅ 300 K ប្រហាក់ប្រហែល?
                </p>
              </>
            ),
            options: [
              <BlockMath key="a" math={String.raw`5.17\times10^{2}\,m/s`} />,
              <BlockMath key="b" math={String.raw`3.00\times10^{2}\,m/s`} />,
              <BlockMath key="c" math={String.raw`1.00\times10^{3}\,m/s`} />,
              <BlockMath key="d" math={String.raw`1.20\times10^{2}\,m/s`} />,
            ],
            correctAnswer: 0,
          },
        ]}
      />
    </>
  );
};

export default KineticTheory;
