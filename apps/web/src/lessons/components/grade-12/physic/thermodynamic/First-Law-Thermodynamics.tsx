import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import ExerciseBox from "@/components/pages/docs/boxes/ExerciseBox";
import HintBox from "@/components/pages/docs/boxes/HintBox";
import WarningBox from "@/components/pages/docs/boxes/WarningBox";
import { BlockMath, InlineMath } from "react-katex";
import { MathLine } from "@components/helper/MathLine";
import { MathScroll } from "@components/helper/MathScroll";
import React from "react";



const LessonChip = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-violet-600 text-white text-sm font-bold">
    {children}
  </span>
);



/* pill style for the mini-TOC (same as you liked) */
const chip =
  "block rounded-2xl px-3 py-2 leading-snug break-words " +
  "bg-white text-slate-800 ring-1 ring-violet-200 shadow-sm " +
  "transition-all duration-200 " +
  "hover:bg-violet-50 hover:text-violet-700 hover:ring-violet-400 hover:shadow " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500";


/* local Section that uses the shared LessonChip */
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
      {/* <div className="ml-auto hidden sm:block text-xs text-slate-500">#{id}</div> */}
    </div>
    {children}
  </section>
);

const items = [
  { name: "លំនាំអុីសូបារ (Isobaric)", latex: "P=\\text{ថេរ}" },
  { name: "លំនាំអុីសូករ (Isochoric)", latex: "V=\\text{ថេរ}" },
  { name: "លំនាំអុីសូទែម (Isothermal)", latex: "T=\\text{ថេរ}" },
];

export default function WorkAndFirstLaw() {
  return (
    <>
      {/* ===== mini TOC ===== */}
      <nav className="not-prose -mx-1 mb-3">
        <ol className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[13px]">
          <li><a href="#sec-overview" className={chip}><span className="font-semibold">1.</span> ទ្រឹស្តីបទនៃច្បាប់ទី១នៃទែម៉ូឌីណាមិច</a></li>
          <li><a href="#sec-work" className={chip}><span className="font-semibold">2.</span> កម្មន្តគ្រប់ករណី</a></li>
          <li><a href="#sec-internal-energy" className={chip}><span className="font-semibold">3.</span> ថាមពលក្នុង</a></li>
          <li><a href="#sec-conventional-internal-energy" className={chip}><span className="font-semibold">4.</span> បម្រែបម្រួលថាមពលក្នុង</a></li>
          <li><a href="#sec-first-law-thermodynamic" className={chip}><span className="font-semibold">5.</span> ច្បាប់ទី១នៃទែម៉ូឌីណាមិច</a></li>
          <li><a href="#sec-exercises" className={chip}><span className="font-semibold">6.</span> លំហាត់</a></li>
        </ol>
      </nav>

      <DefinitionBox
        title="ច្បាប់ទី១នៃទែម៉ូឌីណាមិច"
        content={
          <div className="space-y-6">
            {/* ===== 1. Overview ===== */}
            <Section no={1} title="ទ្រឹស្តីបទនៃច្បាប់ទី១នៃទែម៉ូឌីណាមិច" id="sec-overview">
              <TipBox
                title="ទ្រឹស្តីបទ"
                content={
                  <div className="space-y-2">
                    <ul className="list-disc pl-6 space-y-1 text-slate-800">
                      <li> <strong>ប្រព័ន្ធ</strong>គឺជាវត្ថុ ឬសំណំុវត្ថុដែលលើកយកមកសិក្សាធៀបនឹងវត្ថុដទៃ។</li>
                      <li>កាលណាប្រព័ន្ធមួយផ្លាស់ប្តូរភាពដោយប្តូរតែកម្មន្ត និងកម្តៅជាមួយមជ្ឈដ្ឋានក្រៅ គេថាប្រព័ន្ធនោះ<strong><em>ទទួលបំលែងទែម៉ូឌីណាមិច</em></strong>។</li>
                      <li><strong>បំលែងចំហ</strong>គឺជាបំលែងដែលប្រព័ន្ធផ្លាស់ប្តូរភាពដើមទៅភាពស្រេចណាមួយដែលខុសពីមុន។ </li>
                      <li><strong>បំលែងបិទ</strong>គឺជាបំលែងដែលប្រព័ន្ធផ្លាស់ប្តូរភាពដើមទៅភាពស្រេចណាមួយរួចត្រឡប់មករកភាពដើមវិញ។</li>
                    </ul>
                    <TipBox
                      title="ចំណាំ"
                      content={
                        <div className="space-y-2">
                          <div className="not-prose">
                            {/* pills: 3 wide on lg, 2 on sm, stack on xs */}
                            <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                              {items.map((it, i) => (
                                <li
                                  key={i}
                                  className="flex items-center justify-between rounded-2xl bg-white/80 px-3 py-2
                                            ring-1 ring-slate-200 shadow-sm hover:bg-violet-50/60 hover:ring-violet-200
                                            transition-colors"
                                >
                                  <span className="text-sm font-medium text-slate-800 truncate">{it.name}</span>
                                  <span className="ml-2 shrink-0 rounded-xl bg-violet-50 px-2.5 py-1 ring-1 ring-violet-200">
                                    <InlineMath math={it.latex} />
                                  </span>
                                </li>
                              ))}
                            </ul>

                            {/* <p className="mt-2 text-[11px] text-slate-600">
                              <span className="font-semibold">* ចំណាំ៖</span> ខ្សែក្រាប <InlineMath math={"P\\! -\\! V"} /> ៖
                              តំបន់ក្រោមខ្សែ = <InlineMath math={"W"} /> ពី <InlineMath math={"V_i"} /> ទៅ <InlineMath math={"V_f"} />។
                            </p> */}
                          </div>
                          {/* End of not-prose */}
                        </div>
                      }
                    />
                  </div>
                }
              />


            </Section>

            {/* ===== 2. Work definition =====
            <Section no={2} title="កម្មន្តករណីសម្ពាធថេរ​ (លំនាំអុីសូបារ)" id="sec-isobaric">
              <div className="rounded-xl border-l-4 border-violet-500 bg-violet-50/70 p-4 shadow-sm">
                <p className="font-semibold text-slate-800 mb-1">រូបមន្តទូទៅ</p>
                <MathScroll math={String.raw`W=\int_{V_i}^{V_f} P\,dV`} />
                <ul className="text-sm text-slate-700 mt-1 list-disc pl-6 space-y-1">
                  <li><InlineMath math="W>0" /> ពេលឧស្ម័នពង្រីក (<InlineMath math="V_f>V_i" />)</li>
                  <li><InlineMath math="W<0" /> ពេលឧស្ម័នតឹងត្បៀត</li>
                </ul>
              </div>

              <ExampleBox
                question={<p>គណនាកិច្ចការដោយឧស្ម័នពង្រីកពី <InlineMath math="V_i=0.010\,m^3" /> ទៅ <InlineMath math="V_f=0.014\,m^3" /> ក្រោមសម្ពាធថេរ <InlineMath math="P=1.2\times10^5\,Pa" />។</p>}
                steps={[
                  { title: "រូបមន្ត", content: <MathLine math={String.raw`W=\int P\,dV=P(V_f-V_i)`} /> },
                  { title: "ដាក់តម្លៃ", content: <MathLine math={String.raw`W=1.2\times10^5(0.014-0.010)=4.8\times10^2\,J`} /> },
                ]}
                answer={<InlineMath math={String.raw`W=480\,J`} />}
              />
            </Section> */}

            {/* ===== 3. Special processes ===== */}
            <Section no={2} title=" កម្មន្តគ្រប់ករណី" id="sec-work">
              <div className="grid gap-3 sm:grid-cols-2">
                {/* Isochoric */}
                <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
                  <p className="font-semibold text-slate-800 mb-1">កម្មន្តករណីមាឌថេរ(លំនាំអុីសូករ)</p>
                  <MathScroll math={String.raw`V=\text{ថេរ}\ \Rightarrow\ W=0`} />
                  {/* <p className="text-sm text-slate-700">ខ្សែក្រាបឈរ (ប្លង់ V ថេរ)</p> */}
                </div>

                {/* Isobaric */}
                <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
                  <p className="font-semibold text-slate-800 mb-1">កម្មន្តករណីសម្ពាធថេរ(លំនាំអុីសូបារ) </p>
                  <MathScroll math={String.raw`W=P(V_f-V_i)`} />
                  {/* <p className="text-sm text-slate-700">តំបន់ជារាងចតុកោណក្រោមខ្សែក្រាប</p> */}
                </div>

                {/* Linear P(V) */}
                <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
                  <p className="font-semibold text-slate-800 mb-1">កម្មន្តករណីសម្ពាធប្រែប្រួល </p>
                  <MathScroll math={String.raw` W=\tfrac{1}{2}(P_f+P_i)(V_f-V_i)`} />
                  {/* <p className="text-sm text-slate-700">ស្មើសម្ពាធមធ្យម × ការប្រែប្រួលមាឌ</p> */}
                </div>

                {/* Isothermal ideal gas */}
                <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
                  <p className="font-semibold text-slate-800 mb-1">កម្មន្តករណីសីតុណ្ហភាពថេរ(លំនាំអុីសូទែម)​ </p>
                  <MathScroll math={String.raw`W=\int_{V_i}^{V_f}\frac{nRT}{V}\,dV=nRT\ln\!\left(\frac{V_f}{V_i}\right)`} />
                </div>
              </div>


              <ExampleBox
                question={<p>ដំណើរការបន្ទាត់ពី <InlineMath math="P_i=2.0\times10^{5}\,Pa" /> ទៅ <InlineMath math="P_f=1.0\times10^{5}\,Pa" /> ក្នុងខណៈដែល <InlineMath math="\Delta V=0.002\,m^3" />។ គណនា <InlineMath math="W" />។</p>}
                steps={[
                  { title: "រូបមន្ត", content: <MathLine math={String.raw`W=\tfrac{1}{2}(P_f+P_i)\Delta V`} /> },
                  { title: "ដាក់តម្លៃ", content: <MathLine math={String.raw`W=\tfrac{1}{2}(3.0\times10^{5})(0.002)=3.0\times10^{2}\,J`} /> },
                ]}
                answer={<InlineMath math={String.raw`W=300\,J`} />}
              />

              <ExampleBox
                question={<p>Isothermal: <InlineMath math="n=0.50\,mol" />, <InlineMath math="T=300\,K" />, <InlineMath math="V_i=5\,L" />, <InlineMath math="V_f=10\,L" />។ គណនា <InlineMath math="W" />។</p>}
                steps={[
                  { title: "រូបមន្ត", content: <MathLine math={String.raw`W=nRT\ln(V_f/V_i)`} /> },
                  { title: "ដាក់តម្លៃ", content: <MathLine math={String.raw`W=0.5\times8.314\times300\times\ln 2\approx 8.64\times10^{2}\,J`} /> },
                ]}
                answer={<InlineMath math={String.raw`W\approx 8.6\times10^{2}\,J`} />}
              />
            </Section>


            <Section no={3} title="ថាមពលក្នុង" id="sec-internal-energy">
              <TipBox
                title="ទ្រឹស្តីបទ"
                content={
                  <div className="space-y-2">
                    <p><strong>ថាមពលក្នុង</strong>គឺជាថាមពលសុីនេទិចសរុបរបស់ឧស្ម័ន។ </p>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {/* Isochoric */}
                      <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
                        <p className="font-semibold text-slate-800 mb-1">រូបមន្ត</p>
                        <MathScroll math={String.raw`U=\tfrac{3}{2}nRT`} />
                        {/* <p className="text-sm text-slate-700">ខ្សែក្រាបឈរ (ប្លង់ V ថេរ)</p> */}
                      </div>

                      {/* Isobaric */}
                      <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
                        <p className="font-semibold text-slate-800 mb-1">រូបមន្ត </p>
                        <MathScroll math={String.raw`U=\tfrac{3}{2}K_BT`} />
                        {/* <p className="text-sm text-slate-700">តំបន់ជារាងចតុកោណក្រោមខ្សែក្រាប</p> */}
                      </div>
                    </div>
                  </div>
                }
              />
            </Section>

            {/* ===== 5. Sign conventions ===== */}
            <Section no={4} title="បម្រែបម្រួលថាមពលក្នុង" id="sec-conventional-internal-energy">
              <div className="space-y-2">

                <div className="grid gap-3 sm:grid-cols-2">
                  {/* Isochoric */}
                  <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
                    <p className="font-semibold text-slate-800 mb-1">រូបមន្ត</p>
                    <MathScroll math={String.raw`\Delta U=\tfrac{3}{2}nR\Delta T`} />
                    {/* <p className="text-sm text-slate-700">ខ្សែក្រាបឈរ (ប្លង់ V ថេរ)</p> */}
                  </div>

                  {/* Isobaric */}
                  <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
                    <p className="font-semibold text-slate-800 mb-1">រូបមន្ត </p>
                    <MathScroll math={String.raw`\Delta U=\tfrac{3}{2}K_B\Delta T`} />
                    {/* <p className="text-sm text-slate-700">តំបន់ជារាងចតុកោណក្រោមខ្សែក្រាប</p> */}
                  </div>
                </div>
              </div>





            </Section>

            {/* ===== 6. Internal energy for ideal gas ===== */}
            <Section no={5} title="ច្បាប់ទី១នៃទែម៉ូឌីណាមិច" id="sec-first-law-thermodynamic">

              <TipBox
                title="ទ្រឹស្តីបទ"
                content={
                  <div className="space-y-2">
                    <p>កម្តៅស្រូបដោយប្រព័ន្ធស្មើនឹងផលបូកកម្មន្តដែរបង្តើតដោយបម្រែបម្រួលថាមពលក្នុងនៃប្រព័ន្ធ។</p>

                    <div className="rounded-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
                      <p className="font-semibold text-slate-800 mb-1">រូបមន្ត</p>
                      <MathScroll math={String.raw`Q = W + \Delta U`} />
                      {/* <p className="text-sm text-slate-700">ខ្សែក្រាបឈរ (ប្លង់ V ថេរ)</p> */}
                    </div>

                    <HintBox
                      content={
                        <>

                          <ul className="text-sm text-slate-700 space-y-1 list-disc pl-5">
                            <li>បើឧស្ម័នធ្វើឬបំពេញកម្មន្ត(<b>W &gt; 0</b>)</li>
                            <li>បើឧស្ម័នបញ្ចេញកម្តៅឬរងកម្មន្ត(<b>W &lt; 0</b>)</li>
                            <li>បើឧស្ម័នស្រូបកម្តៅ(<b>Q &gt; 0</b>)</li>
                            <li>បើឧស្ម័នបញ្ចេញកម្តៅ(<b>Q &lt; 0</b>)</li>
                            <li>បើថាមពលក្នុងកើន(<b>ΔU &gt; 0</b>)</li>
                            <li>បើថាមពលក្នុងថយចុះ(<b>ΔU &lt; 0</b>)</li>
                          </ul>

                        </>
                      }
                    />

                    <TipBox
                      title="ករណីពិសេសពីច្បាប់ទី១"
                      content={
                        <ul className="list-disc pl-6 space-y-1">
                          <li><b>លំនាំអាព្យាបាទិច</b> (<InlineMath math="Q=0" />)​​ ⟹​ <InlineMath math="W =- \Delta U" />។</li>
                          <li><b>លំនាំអុីសូករ</b> (<InlineMath math="W=0" />) ⟹ ​<InlineMath math="\Delta U=Q" />។</li>
                          <li><b>ថាមពលក្នុង</b> (<InlineMath math="\Delta U=0" />) ⟹ <InlineMath math="Q=W" />។</li>
                        </ul>
                      }
                    />
                  </div>
                }
              />
              <ExampleBox
                question={<p>ដំណើរការអីសូខរីក <InlineMath math="(W=0)" /> ចំពោះឧស្ម័នម៉ូណុអាតូម <InlineMath math="n=1\,mol" /> ឡើងកំដៅ <InlineMath math="\Delta T=50\,K" />។ គណនា <InlineMath math="\Delta U" /> និង <InlineMath math="Q" />។</p>}
                steps={[
                  { title: "ថាមពលក្នុង", content: <MathLine math={String.raw`\Delta U=\tfrac{3}{2}nR\Delta T=\tfrac{3}{2}(1)(8.314)(50)=6.24\times10^{2}\,J`} /> },
                  { title: "អីសូខរីក", content: <MathLine math={String.raw`W=0\ \Rightarrow\ Q=\Delta U`} /> },
                ]}
                answer={<InlineMath math={String.raw`Q=\Delta U\approx 6.24\times10^{2}\,J`} />}
              />
            </Section>

            {/* ===== 8. Final exercises ===== */}
            <Section no={6} title="លំហាត់ជ្រើសរើសចម្លើយ" id="sec-exercises">
              <ExerciseBox
                questions={[
                  {
                    id: "w1",
                    question: <p>ក្នុងដំណើរការ isochoric តើ <InlineMath math="W" /> ស្មើអ្វី?</p>,
                    options: [
                      <BlockMath key="a" math={String.raw`W=0`} />,
                      <BlockMath key="b" math={String.raw`W=P(V_f-V_i)`} />,
                      <BlockMath key="c" math={String.raw`W=nRT\ln\!\left(\frac{V_f}{V_i}\right)`} />,
                      <BlockMath key="d" math={String.raw`W=\tfrac{1}{2}(P_f+P_i)(V_f-V_i)`} />,
                    ],
                    correctAnswer: 0,
                  },
                  {
                    id: "w2",
                    question: <p>Isothermal ideal gas: តើសមីការត្រឹមត្រូវ?</p>,
                    options: [
                      <BlockMath key="a" math={String.raw`W=P(V_f-V_i)`} />,
                      <BlockMath key="b" math={String.raw`W=nRT\ln(V_f/V_i)`} />,
                      <BlockMath key="c" math={String.raw`W=0`} />,
                      <BlockMath key="d" math={String.raw`W=-\Delta U`} />,
                    ],
                    correctAnswer: 1,
                  },
                  {
                    id: "w3",
                    question: <p>ប្រព័ន្ធទទួល <InlineMath math="Q=800\,J" /> ហើយធ្វើ <InlineMath math="W=300\,J" />។ តើ <InlineMath math="\Delta U" /> ប៉ុន្មាន?</p>,
                    options: [
                      <BlockMath key="a" math={String.raw`1100\,J`} />,
                      <BlockMath key="b" math={String.raw`500\,J`} />,
                      <BlockMath key="c" math={String.raw`-500\,J`} />,
                      <BlockMath key="d" math={String.raw`-1100\,J`} />,
                    ],
                    correctAnswer: 1,
                  },
                  {
                    id: "w4",
                    question: <p>ដំណើរការបន្ទាត់ពី <InlineMath math="P_i" /> ទៅ <InlineMath math="P_f" />។ តើ <InlineMath math="W" /> ស្មើអ្វី?</p>,
                    options: [
                      <BlockMath key="a" math={String.raw`W=\tfrac{1}{2}(P_f+P_i)(V_f-V_i)`} />,
                      <BlockMath key="b" math={String.raw`W=PV`} />,
                      <BlockMath key="c" math={String.raw`W=nC_V\Delta T`} />,
                      <BlockMath key="d" math={String.raw`W=\Delta U+Q`} />,
                    ],
                    correctAnswer: 0,
                  },
                  {
                    id: "w5",
                    question: <p>រង្វង់ពេញ (cyclic) ត្រូវបានលក្ខណៈដោយ</p>,
                    options: [
                      <BlockMath key="a" math={String.raw`\Delta U=0\ \Rightarrow\ Q=W`} />,
                      <BlockMath key="b" math={String.raw`Q=0`} />,
                      <BlockMath key="c" math={String.raw`W=0`} />,
                      <BlockMath key="d" math={String.raw`P=\text{ថេរ}`} />,
                    ],
                    correctAnswer: 0,
                  },
                  {
                    id: "w6",
                    question: <p>ឧស្ម័នម៉ូណុអាតូម៖ តម្លៃត្រឹមត្រូវ?</p>,
                    options: [
                      <BlockMath key="a" math={String.raw`U=\tfrac{3}{2}nRT`} />,
                      <BlockMath key="b" math={String.raw`\Delta U=\tfrac{3}{2}nR\Delta T`} />,
                      <BlockMath key="c" math={String.raw`U=nC_VT`} />,
                      <BlockMath key="d" math={String.raw`ទាំងអស់ខាងលើ`} />,
                    ],
                    correctAnswer: 3,
                  },
                ]}
              />
            </Section>
          </div>
        }
      />

      {/* Helpful tip / hint / warning like your other lessons */}

    </>
  );
}