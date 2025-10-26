import { DefinitionBox } from "@/components/pages/docs/boxes/DefinitionBox";
import { ExampleBox } from "@/components/pages/docs/boxes/ExampleBox";
import { TipBox } from "@/components/pages/docs/boxes/TipBox";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
import { HintBox } from "@/components/pages/docs/boxes/HintBox";
import { ExampleCustomizedBox } from "@/components/pages/docs/boxes/ExampleCustomizedBox";

import { WarningBox } from "@/components/pages/docs/boxes/WarningBox";
import { BlockMath, InlineMath } from "react-katex";
import React from "react";
import { deserializeTopicContentV3, serializeTopicContentV3 } from '@/components/pages/docs/utils/ContentSerializerV2';
import ContentRendererV3 from '@/components/pages/docs/utils/ContentRendererV2';
import { TopicContent_V3 } from '@/types/docs/topic';
import { div } from "three/tsl";

const items = [
  { name: "លំនាំអុីសូបារ (Isobaric)", latex: "P=\\text{ថេរ}" },
  { name: "លំនាំអុីសូករ (Isochoric)", latex: "V=\\text{ថេរ}" },
  { name: "លំនាំអុីសូទែម (Isothermal)", latex: "T=\\text{ថេរ}" },
];

const Content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "១. ទ្រឹស្តីបទនៃច្បាប់ទី១នៃទែម៉ូឌីណាមិច",
    content: (
      <div>
        <TipBox
          title="ទ្រឹស្តីបទ"
          content={
            <div className="space-y-2">
              <ul className="list-disc pl-6 space-y-1 text-slate-800">
                <li>
                  {" "}
                  <strong>ប្រព័ន្ធ</strong>គឺជាវត្ថុ
                  ឬសំណំុវត្ថុដែលលើកយកមកសិក្សាធៀបនឹងវត្ថុដទៃ។
                </li>
                <li>
                  កាលណាប្រព័ន្ធមួយផ្លាស់ប្តូរភាពដោយប្តូរតែកម្មន្ត
                  និងកម្តៅជាមួយមជ្ឈដ្ឋានក្រៅ គេថាប្រព័ន្ធនោះ
                  <strong>
                    <em>ទទួលបំលែងទែម៉ូឌីណាមិច</em>
                  </strong>
                  ។
                </li>
                <li>
                  <strong>បំលែងចំហ</strong>
                  គឺជាបំលែងដែលប្រព័ន្ធផ្លាស់ប្តូរភាពដើមទៅភាពស្រេចណាមួយដែលខុសពីមុន។{" "}
                </li>
                <li>
                  <strong>បំលែងបិទ</strong>
                  គឺជាបំលែងដែលប្រព័ន្ធផ្លាស់ប្តូរភាពដើមទៅភាពស្រេចណាមួយរួចត្រឡប់មករកភាពដើមវិញ។
                </li>
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
                            <span className="text-sm font-medium text-slate-800 truncate">
                              {it.name}
                            </span>
                            <span className="ml-2 shrink-0 rounded-xl bg-violet-50 px-2.5 py-1 ring-1 ring-violet-200">
                              <InlineMath math={it.latex} />
                            </span>
                          </li>
                        ))}
                      </ul>

                    </div>

                  </div>
                }
              />
            </div>
          }
        />

      </div>
    ),
  },
  {
    type: "definition",
    title: "២. កម្មន្តគ្រប់ករណី",
    content: (
      <div className="grid gap-3 sm:grid-cols-2">
        {/* Isochoric */}
        <div className="round-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
          <p className="font-semibold text-slate-800 mb-1">
            កម្មន្តករណីមាឌថេរ(លំនាំអុីសូករ)
          </p>
          <InlineMath
            math={String.raw`V=\text{ថេរ}\ \Rightarrow\ W=0`}
          />
          {/* <p className="text-sm text-slate-700">ខ្សែក្រាបឈរ (ប្លង់ V ថេរ)</p> */}
        </div>

        {/* Isobaric */}
        <div className="round-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
          <p className="font-semibold text-slate-800 mb-1">
            កម្មន្តករណីសម្ពាធថេរ(លំនាំអុីសូបារ){" "}
          </p>
          <InlineMath math={String.raw`W=P(V_f-V_i)`} />
          {/* <p className="text-sm text-slate-700">តំបន់ជារាងចតុកោណក្រោមខ្សែក្រាប</p> */}
        </div>

        {/* Linear P(V) */}
        <div className="round-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
          <p className="font-semibold text-slate-800 mb-1">
            កម្មន្តករណីសម្ពាធប្រែប្រួល{" "}
          </p>
          <InlineMath
            math={String.raw` W=\tfrac{1}{2}(P_f+P_i)(V_f-V_i)`}
          />
          {/* <p className="text-sm text-slate-700">ស្មើសម្ពាធមធ្យម × ការប្រែប្រួលមាឌ</p> */}
        </div>

        {/* Isothermal ideal gas */}
        <div className="round-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
          <p className="font-semibold text-slate-800 mb-1">
            កម្មន្តករណីសីតុណ្ហភាពថេរ(លំនាំអុីសូទែម)​{" "}
          </p>
          <InlineMath
            math={String.raw`W=\int_{V_i}^{V_f}\frac{nRT}{V}\,dV=nRT\ln\!\left(\frac{V_f}{V_i}\right)`}
          />
        </div>
      </div>


    ),
  },
  {
    type: 'example',
    question: (
      <div>
        <p>
          Isothermal: <InlineMath math="n=0.50\,mol" />,{" "}
          <InlineMath math="T=300\,K" />,{" "}                     <InlineMath math="V_i=5\,L" />,{" "}                     <InlineMath math="V_f=10\,L" />។ គណនា{" "}
          <InlineMath math="W" />។
        </p>
      </div>
    ),
    steps: [
      {
        title: "រូបមន្ត",
        content: <InlineMath math={String.raw`W=nRT\ln(V_f/V_i)`} />,
      },
      {
        title: "ដាក់តម្លៃ",
        content: (<InlineMath math={String.raw`W=0.5\times8.314\times300\times\ln 2\approx 8.64\times10^{2}\,J`} />)
      }
    ],
    answer: (
      <InlineMath math={String.raw`W\approx 8.6\times10^{2}\,J`} />

    ),
  }, 
  {
    type: 'example',
    question: (
      <div>
        <p>
          ដំណើរការបន្ទាត់ពី{" "}
          <InlineMath math="P_i=2.0\times10^{5}\,Pa" /> ទៅ{" "}
          <InlineMath math="P_f=1.0\times10^{5}\,Pa" /> ក្នុងខណៈដែល{" "}
          <InlineMath math="\Delta V=0.002\,m^3" />។ គណនា{" "}
          <InlineMath math="W" />។
        </p>

      </div>
    ),
    steps: [
      {
        title: "រូបមន្ត",
        content: <InlineMath math={String.raw`W=\tfrac{1}{2}(P_f+P_i)\Delta V`}
 />,
      },
      {
        title: "ដាក់តម្លៃ",
        content: (<InlineMath math={String.raw`W=\tfrac{1}{2}(3.0\times10^{5})(0.002)=3.0\times10^{2}\,J`}
 />)
      }
    ],
    answer: (
      <InlineMath math={String.raw`W=300\,J`} />

    ),
  },
  {
    type: "definition",
    title: "៣. ថាមពលក្នុង",
    content: (
      <div>
        <TipBox 
          title="ទ្រឹស្តីបទ"
          content= {
            <div className="space-y-2"> 
              <p>
                <strong>ថាមពលក្នុង</strong>គឺជាថាមពលសុីនេទិចសរុបរបស់ឧស្ម័ន។
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="round-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
                  <p className="font-semibold text-slate-800 mb-1">
                    រូបមន្ត
                  </p>
                  <InlineMath math={String.raw`U=\tfrac{3}{2}nRT`} />
                </div>
                <div className="round-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
                  <p className="font-semibold text-slate-800 mb-1">
                    រូបមន្ត
                  </p>
                  <InlineMath math={String.raw`U=\tfrac{3}{2}K_BT`} />
                </div>
              </div>
            </div>
          }
        />
      </div>
    )
  },
  {
    type: "definition",
    title: "៤. បម្រែបម្រួលថាមពលក្នុង",
    content: (
      <div className="space-y-2">
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="round-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
            <p className="font-semibold text-slate-800 mb-1">រូបមន្ត</p>
            <InlineMath math={String.raw`\Delta U=\tfrac{3}{2}nR\Delta T`} />
          </div>
          <div className="round-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
            <p className="font-semibold text-slate-800 mb-1">រូបមន្ត</p>
            <InlineMath math={String.raw`\Delta U=\tfrac{3}{2}K_B\Delta T`} />
          </div>
        </div>
      </div>
    )
  },
  {
    type: "definition",
    title: "៥. ច្បាប់ទី១នៃទែម៉ូឌីណាមិច",
    content: (
      <div>
        <TipBox 
        title= "ទ្រឹស្តីបទ"
        content={
          <div className="space-y-2">
            <p>
              កម្តៅស្រូបដោយប្រព័ន្ធស្មើនឹងផលបូកកម្មន្តដែរបង្តើតដោយបម្រែបម្រួលថាមពលក្នុងនៃប្រព័ន្ធ។
            </p>
            <div className="round-xl border-l-4 border-sky-500 bg-sky-50/70 p-4 shadow-sm">
              <p className="font-semibold text-slate-800 mb-1">រូបមន្ត</p>
              <BlockMath math={String.raw`Q = W + \Delta U`} />
            </div>
          </div>
        }
        />
        <HintBox 
        content={
          <div className="space-y-2">
            <ul className="text-m text-slate-700 space-y-1 list-disc pl-5">
              <li>
                បើឧស្ម័នធ្វើឬបំពេញកម្មន្ត(W &gt; 0)
              </li>
              <li>
                បើឧស្ម័នបញ្ចេញកម្តៅឬរងកម្មន្ត(W &lt; 0)
              </li>
              <li>
                បើឧស្ម័នស្រូបកម្តៅ(Q &gt; 0)
              </li>
              <li>
                បើឧស្ម័នបញ្ចេញកម្តៅ(Q &lt; 0)
              </li>
              <li>
                បើថាមពលក្នុងកើន(ΔU &gt; 0)
              </li>
              <li>
                បើថាមពលក្នុងថយចុះ(ΔU &lt; 0)
              </li>
            </ul>
          </div>
        }
        />
        <TipBox 
        title="ករណីពិសេសពីច្បាប់ទី១"
        content={
          <ul className = "list-disc pl-6 space-y-1">
            <li>
              <span>លំនាំអាព្យាបាទិច</span> (<InlineMath math="Q=0" />)​​ ⟹​ <InlineMath math="W =- \Delta U" />។
            </li>
            <li>
              <span>លំនាំអុីសូករ (<InlineMath math="W=0" />) ⟹<InlineMath math="\Delta U=Q" />។</span>
            </li>
            <li>
              <span>ថាមពលក្នុង</span> (<InlineMath math="\Delta U=0" />) ⟹ <InlineMath math="Q=W" />។
            </li>
          </ul>
        }
        />

      </div>
    ),
  },
  {
    type: 'example',
    question: (
      <div>
        <p>
          ដំណើរការអីសូខរីក <InlineMath math="(W=0)" />{" "}
          ចំពោះឧស្ម័នម៉ូណុអាតូម <InlineMath math="n=1\,mol" /> ឡើងកំដៅ{" "}
          <InlineMath math="\Delta T=50\,K" />។ គណនា{" "}
          <InlineMath math="\Delta U" /> និង <InlineMath math="Q" />។
        </p>

      </div>
    ),
    steps: [
      {
        title: "ថាមពលក្នុង",
        content: <InlineMath math={String.raw`\Delta U=\tfrac{3}{2}nR\Delta T=\tfrac{3}{2}(1)(8.314)(50)=6.24\times10^{2}\,J`}
 />,
      },
      {
        title: "តាមលំនាំអុីសូករ",
        content: (<InlineMath math={String.raw`W=0\ \Rightarrow\ Q=\Delta U`}
 />)
      }
    ],
    answer: (
      <InlineMath math={String.raw`Q=\Delta U\approx 6.24\times10^{2}\,J`}
 />

    ),
  },
  {
      type: 'definition',
      title: 'ឧទាហរណ៏',
      content: (
          <ExampleCustomizedBox
            question= {
              <div>
        <p>
          ដំណើរការអីសូខរីក <InlineMath math="(W=0)" />{" "}
          ចំពោះឧស្ម័នម៉ូណុអាតូម <InlineMath math="n=1\,mol" /> ឡើងកំដៅ{" "}
          <InlineMath math="\Delta T=50\,K" />។ គណនា{" "}
          <InlineMath math="\Delta U" /> និង <InlineMath math="Q" />។
        </p>

      </div>
            }

            steps = {
              <div>
        <p>
          ដំណើរការអីសូខរីក <InlineMath math="(W=0)" />{" "}
          ចំពោះឧស្ម័នម៉ូណុអាតូម <InlineMath math="n=1\,mol" /> ឡើងកំដៅ{" "}
          <InlineMath math="\Delta T=50\,K" />។ គណនា{" "}
          <InlineMath math="\Delta U" /> និង <InlineMath math="Q" />។
        </p>

      </div>
            }

            answer = {  <InlineMath math="\Delta U" /> }
             
  
          />
        
      )
  },
  {
  type: "exercise",
  questions: [
    {
      id: "w1",
      question: (
        <p>
          ក្នុងដំណើរការ isochoric តើ <InlineMath math="W" /> ស្មើអ្វី?
        </p>
      ),
      options: [
        <BlockMath key="a" math={String.raw`W=0`} />,
        <BlockMath key="b" math={String.raw`W=P(V_f-V_i)`} />,
        <BlockMath
          key="c"
          math={String.raw`W=nRT\ln\!\left(\frac{V_f}{V_i}\right)`}
        />,
        <BlockMath
          key="d"
          math={String.raw`W=\tfrac{1}{2}(P_f+P_i)(V_f-V_i)`}
        />,
      ],
      correctAnswer: 0,
    },
    {
      id: "w2",
      question: <p>Isothermal ideal gas: តើសមីការត្រឹមត្រូវ?</p>,
      options: [
        <BlockMath key="a" math={String.raw`W=P(V_f-V_i)`} />,
        <BlockMath
          key="b"
          math={String.raw`W=nRT\ln(V_f/V_i)`}
        />,
        <BlockMath key="c" math={String.raw`W=0`} />,
        <BlockMath key="d" math={String.raw`W=-\Delta U`} />,
      ],
      correctAnswer: 1,
    },
    {
      id: "w3",
      question: (
        <p>
          ប្រព័ន្ធទទួល <InlineMath math="Q=800\,J" /> ហើយធ្វើ{" "}
          <InlineMath math="W=300\,J" />។ តើ{" "}
          <InlineMath math="\Delta U" /> ប៉ុន្មាន?
        </p>
      ),
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
      question: (
        <p>
          ដំណើរការបន្ទាត់ពី <InlineMath math="P_i" /> ទៅ{" "}
          <InlineMath math="P_f" />។ តើ <InlineMath math="W" /> ស្មើអ្វី?
        </p>
      ),
      options: [
        <BlockMath
          key="a"
          math={String.raw`W=\tfrac{1}{2}(P_f+P_i)(V_f-V_i)`}
        />,
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
        <BlockMath
          key="a"
          math={String.raw`\Delta U=0\ \Rightarrow\ Q=W`}
        />,
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
        <BlockMath
          key="b"
          math={String.raw`\Delta U=\tfrac{3}{2}nR\Delta T`}
        />,
        <BlockMath key="c" math={String.raw`U=nC_VT`} />,
        <BlockMath key="d" math={String.raw`ទាំងអស់ខាងលើ`} />,
      ],
      correctAnswer: 3,
    },
  ],
}
  
];


export default function WorkAndFirstLaw() {
  const serialized = serializeTopicContentV3(Content);
  const deserialized = deserializeTopicContentV3(serialized);
  return <ContentRendererV3 content={deserialized} />;
}
