import TopicPracticeBox from "../../../common/box/TopicPracticeBox";
import { InlineMath } from "react-katex";

import SummaryBox from "../../../common/box/SummaryBox";
import { BookAIcon, ChartBarIcon, ClipboardListIcon, LightbulbIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/docs/topic";

const ThermoPractice = () => {
  const summary: SummarySection[] = [
    {
      key: "kinetic-theory",
      title: "ទ្រឹស្ដីសុីនេទិច",
      icon: BookAIcon,
      content: (
        <div className="space-y-4">
          {/* Mass, Moles, Avogadro */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-indigo-600">•</span>
              <div>
                <span className="font-medium">ម៉ាសម៉ូល: <InlineMath math={String.raw`M = m \cdot N_A`} /></span>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-indigo-600">•</span>
              <span className="font-medium">ម៉ាសម៉ូលគុណ: <InlineMath math={String.raw`m = \frac{M}{N_A}`} /></span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-indigo-600">•</span>
              <span className="font-medium">ចំនួនម៉ូល: <InlineMath math={String.raw`n = \frac{m}{M} \quad \text{ឬ} \quad n = \frac{N}{N_A}`} /></span>
            </div>
          </div>
          {/* Ideal Gas Law */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-indigo-600">•</span>
              <span className="font-medium">សមីការឧស្ម័នបរិសុទ្ឋ : <InlineMath math={String.raw`PV = k_B N T `} /></span>
            </div>
            <div className="ml-6"><InlineMath math={String.raw`\text{ឬ} P V = n R T`} /></div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-indigo-600">•</span>
              <span className="font-medium">ថេរឧស្ម័នសកល: <InlineMath math={String.raw`R = N_A \cdot k_B`} /></span>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-indigo-600">•</span>
              <span className="font-medium">សីតុណ្ហភាព: <InlineMath math={String.raw`T = t + 273`} /></span>
            </div>
          </div>
          {/* Kinetic Energy */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-indigo-600">•</span>
              <span className="font-medium">តម្លៃមធ្យមនៃថាមពលសុីនេទិច: <InlineMath math={String.raw`K_{av} = \frac{1}{2} m v_{rms}^2`} /></span>
            </div>
            <div className="ml-6"><InlineMath math={String.raw`\text{ឬ} K_{av} = \frac{3}{2} k_B T`} /></div>
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-indigo-600">•</span>
              <span className="font-medium">ថាមពលសុីនេទិចសរុប: <InlineMath math={String.raw`K = N k_{av} `} /></span>
            </div>
            <div className="ml-6"><InlineMath math={String.raw`\text{ឬ} K = \frac{3}{2} PV = \frac{3}{2} N k_B T = \frac{3}{2} nRT`} /></div>
          </div>
          {/* Root mean square speed */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-indigo-600">•</span>
              <span className="font-medium">ល្បឿនប្រសិទ្ធ: <InlineMath math={String.raw`v_{rms} = \sqrt{\frac{3k_B T}{m}} = \sqrt{\frac{3RT}{M}}`} /></span>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-1">
              <span className="text-indigo-600 mt-1">•</span>
              <span className="font-medium">សម្ពាធបរិយាកាស : <InlineMath math={String.raw`1\,atm = 76\,cmHg = 10^5\,Pa`} /></span>
            </div>
          </div>
        </div>
      )
    },
    {
      key: "first-law-thermodynamics",
      title: "ច្បាប់ទីមួយទែម៉ូឌីណាមិច",
      icon: ChartBarIcon,
      content: (
        <div className="space-y-4">
          {/* First Law Statement */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">ច្បាប់ទី១ ទែម៉ូឌីណាមិច: </span>
              <div className="ml-4"><InlineMath math={String.raw`Q = \Delta U + W`} /></div>
            </div>
          </div>
          {/* Work Formulas */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium"><b>កម្មន្ត</b> បំពេញក្នុងពេលមាឌប្រែប្រួល</span>
              <div className="ml-2 space-y-1">
                <div>សម្ពាធ P ថេរ (លំនាំអុីសូបា) : </div>
                <div className="ml-4"><InlineMath math={String.raw`W = P \Delta V = P(V_f - V_i)`} /> </div><br />
                <div>សម្ពាធ P ប្រែប្រួល (លំនាំអុីសូករ) : </div>
                <div className="ml-4"><InlineMath math={String.raw`W = P_{av}(V_f - V_i),\ P_{av} = \frac{P_i + P_f}{2}`} /></div><br />
                <div>សីតុណ្ហភាព T ថេរ (លំនាំអុីសូទែម) : </div>
                <div className="ml-4"><InlineMath math={String.raw`W = nRT \ln \left(\frac{V_f}{V_i}\right)`} /></div>
              </div>
            </div>
          </div>
          {/* Internal Energy */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">ថាមពលក្នុង :</span>
              <div className="ml-2 space-y-1">
                <span className="ml-4"></span><InlineMath math={String.raw`U = \frac{3}{2} nRT = \frac{3}{2} PV = \frac{3}{2} Nk_B T`} />
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">បម្រែបម្រួលថាមពលក្នុង :</span>
              <div className="ml-2 space-y-1">
                <InlineMath math={String.raw`\Delta U = \frac{3}{2} nR \Delta T = \frac{3}{2} R (T_f - T_i)`} /><br /><br />
                <InlineMath math={String.raw`V_f: \text{ល្បឿនដើម}`} /><br />
                <InlineMath math={String.raw`V_i: \text{ល្បឿនស្រេច}`} />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      key: "machines",
      title: "ម៉ាសុីន",
      icon: BookAIcon,
      content: (
        <div className="space-y-4">
          {/* Carnot/Heat Engine */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">ម៉ាស៊ីនកម្ដៅ និងម៉ាស៊ីនកានូត </span>
              <div className="ml-2 space-y-1 mt-">
                <div>តារាងលំហូរថាមពល : </div>
                <div className="ml-4 "><InlineMath math={String.raw`W = Q_h - Q_c`} /></div>
                <div>ទិន្នផលកម្ដៅ : </div>
                <div className="ml-4 "><InlineMath math={String.raw`e = \frac{W}{Q_h} = 1 - \frac{Q_c}{Q_h}`} /></div>
                <div>ទិន្នផលកានូត : </div>
                <div className="ml-4"><InlineMath math={String.raw`\frac{Q_c}{Q_h} = \frac{T_c}{T_h} \implies e = 1 - \frac{T_c}{T_h}`} /></div>
              </div>
            </div>
          </div>
          {/* Gasoline/Diesel Engines */}
          <div>
            <div className="flex items-start gap-2 mb-1">
              <span className="text-indigo-600 mt-1">•</span>
              <span className="font-medium">ម៉ាស៊ីនសាំង និងម៉ាស៊ូត :</span>
            </div>
            <div className="ml-7">
              <div>កម្មន្តមេកានិច : </div>
              <div className="ml-4"> <InlineMath math={String.raw`W_M = Q_h - Q_c`} /></div><br />
              <div>ទិន្នផលកម្ដៅ : <InlineMath math={String.raw`e_c = \frac{W_M}{Q_h}`} /></div><br />
              <div>ទិន្នផលមេកានិច : <InlineMath math={String.raw`e_M = \frac{W_U}{W_M}`} /></div><br />
              <div>ទិន្នផលសរុប : <InlineMath math={String.raw`e = \frac{W_U}{Q_h} = e_M \times e_c`} /></div>
            </div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-1">
              <span className="text-indigo-600 mt-1">•</span>
              <span className="font-medium">អេឡិចត្រុងវ៉ុល : <InlineMath math={String.raw`1\,eV = 1.6 \times 10^{-19}\,J`} /></span>
            </div>
          </div>
        </div>
      )
    },
    {
      key: "notes_and_memory",
      title: "ចំណាំ​និងចងចាំ",
      icon: BookAIcon,
      content: (
        <div className="space-y-4">
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span><b>សញ្ញា និងការបកស្រាយ:</b></span><br />
              <div className="ml-2 space-y-1">
                <b>Q (កម្ដៅ):</b>
                <div>Q &gt; 0: ប្រព័ន្ធទទួលកម្ដៅ (+)</div>
                <div>Q &lt; 0: ប្រព័ន្ធបញ្ចេញកម្ដៅ (-)</div>
                <div>Q = 0: លំនាំអាដ្យាបាទិច</div>
                <b>ΔU (ថាមពលក្នុង):</b>
                <div>ΔU &gt; 0: ថាមពលក្នុងនៃប្រព័ន្ធកើនឡើង (+)</div>
                <div>ΔU &lt; 0: ថាមពលក្នុងនៃប្រព័ន្ធថយចុះ (-)</div>
                <div>ΔU = 0: លំនាំអ៊ីសូទែម(សីតុណ្ហភាពថេរ)</div>
                <b>W (កម្មន្ត):</b>
                <div>W &gt; 0: ប្រព័ន្ធធ្វើកម្មន្ត (ពង្រីក) (+)</div>
                <div>W &lt; 0: ក្រៅធ្វើលើប្រព័ន្ធ (បង្រួម) (-)</div>
                <div>W = 0: លំនាំអុីសូករ(មាឌថេរ)</div>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span><b>សម្គាល់ថាមពលម៉ាស៊ីនកម្ដៅ:</b></span>
              <div className="ml-2 text-sm text-gray-700 space-y-1">
                <div><b>Q<sub>h</sub> (កម្ដៅក្តៅ):</b> កម្ដៅដែលម៉ាស៊ីនស្រូបយកឬទទួលពីប្រភពក្ដៅ</div>
                <div><b>Q<sub>c</sub> (កម្ដៅត្រជាក់):</b> កម្ដៅដែលម៉ាស៊ីនបញ្ចេញឬផ្ដល់ទៅប្រភពត្រជាក់</div>
                <div><b>W (កម្មន្ត):</b> កម្មន្តដែលមានប្រយោជន៍ដែលម៉ាស៊ីនធ្វើឬផលិតបាន</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      key: "si_units",
      title: "ខ្នាតអត្តរជាតិ​(SI)",
      icon: ClipboardListIcon,
      content: (
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>សម្ពាធ :</b> P — Pa (ប៉ាស្កាល់)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>មាឌ :</b> V — m³ (ម៉ែត្រគូប)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>សីតុណ្ហភាព :</b> T — K (កែលវីន)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ចំនួនម៉ូល :</b> n — mol (ម៉ូល)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ចំនួនម៉ូលេគុល :</b> N — ម៉ូលេគុល</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ម៉ាសសរុប :</b> m — kg (គីឡូក្រាម)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ម៉ាសម៉ូល :</b> M — kg/mol (គីឡូក្រាមក្នុងមួយម៉ូល)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ម៉ាសម៉ូលេគុល :</b> m<sub>o</sub> — kg (គីឡូក្រាម)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ថាមពល (K, U, Q, W):</b> J (ស៊ូល)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ល្បឿន :</b> v — m/s (ម៉ែត្រក្នុងមួយវិនាទី)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ថេរឧស្ម័ន :</b> R — J/(mol·K) (ស៊ូលក្នុងមួយម៉ូល-កែលវីន)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ថេរ :</b> k<sub>B</sub> — J/K (ស៊ូលក្នុងមួយកែលវីន)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ទិន្នផល :</b> e — % (ភាគរយ)</span>
          </div>
        </div>
      )
    },
    {
      key: "tips",
      title: "គន្លឹះអនុវត្ត",
      icon: LightbulbIcon,
      content: (
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ព្យាយាមដោះស្រាយលំហាត់ដោយខ្លួនឯងមុនពេលមើលចម្លើយ</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>បម្លែងឯកតា:</b> ត្រូវប្រាកដថាឯកតារបស់តម្លៃទាំងអស់ត្រឹមត្រូវតាមប្រព័ន្ធអន្តរជាតិ (SI)។</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>កំណត់អថេរ:</b> ត្រូវដឹងថាតើលំហាត់មានអថេរអ្វីខ្លះដូចជា P, V, T, n, N។ ជ្រើសរើសរូបមន្តត្រឹមត្រូវ។</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>វិភាគដំណើរការ:</b> កំណត់ប្រភេទដំណើរការ ដើម្បីដឹងថាតើអថេរណាដែលថេរ។</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ចងចាំ:</b> ត្រូវបម្លែងសីតុណ្ហភាព T ទៅជា Kelvin (K) ជានិច្ចនៅពេលប្រើរូបមន្តទិន្នផលកានូត។</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ដំណើរការដោះស្រាយ:</b> ពេលដោះស្រាយលំហាត់ សូមព្យាយាមសរសេរអ្វីដែលអ្នកដឹង (តម្លៃដែលបានផ្ដល់) និងអ្វីដែលអ្នកត្រូវរកជាមុនសិន។</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ម៉ាសម៉ូល (M) ពេលខ្លះត្រូវបានផ្ដល់ជា <b>g/mol</b> ដូច្នេះត្រូវបម្លែងវាទៅជា <b>kg/mol</b> មុនប្រើក្នុងរូបមន្តដូចជា <InlineMath math={String.raw`v_{rms} = \sqrt{\frac{3RT}{M}}`} />។</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span>តម្លៃលេខ</span><br />
              <span className="font-minimum"> <InlineMath math={String.raw`k_B = 1.38 \times 10^{-23} \, J/K`} /></span><br />
              <span className="font-minimum"> <InlineMath math={String.raw`R = 8.31 \, J/(mol \cdot K)`} /></span><br />
              <span className="font-minimum"> <InlineMath math={String.raw`N_A = 6.022 \times 10^{23} \, mol^{-1}`} /></span>
            </div>
          </div>
        </div>
      )
    },
  ];
  const practiceExercises: PracticeExercise[] = [
    {
      id: "ex1",
      title: "លំហាត់អនុវត្តទី ១",
      description: "ដំណោះស្រាយលំហាត់ទែម៉ូឌីណាមិច",
      problemType: "Solutions to thermodynamics exercises",
      problems: [
        <div key="ex1-0">
          រកតម្លៃមធ្យមនៃថាមពលសុីនេទិចរបស់ម៉ូលេគុលអុកស៊ីសែនីមួយៗ
          ក្នុងខ្យល់នៅក្នុងបន្ទប់មានសីតុណ្ហភាព 300K គិតជា អេឡិចត្រុងវ៉ុល (eV)។
          <span className="text-sm text-gray-700">គេឱ្យ <InlineMath math={String.raw`1\,eV = 1.6 \times 10^{-19}\,J`} />
            និង <InlineMath math={String.raw`k_B =1.38 \times 10^{-23}\,J/K`} />
          </span>
        </div>,
        <div key="ex1-2">
          គណនាមាឌឧស្ម័នអុកស៊ីសែន 3.2g ដែលផ្ទុកក្នុងធុងនៅសម្ពាធ 76cmHg និងសីតុណ្ហភាព 27°C។
        </div>,
        <div key="ex1-3">
          រកល្បឿនដែលប្រសិទ្ធ (<InlineMath math={String.raw`v_{rms}`} />) នៃម៉ូលេគុលអាសូតដោយម៉ាសម៉ូល M = 28g/mol នៅសីតុណ្ហភាព 300K។
          <span className="text-sm text-gray-700">គេឱ្យ​<InlineMath math={String.raw`R = 8.31J/mol.K`} />។</span>
        </div>,
        <div key="ex1-4">
          គណនាសីតុណ្ហភាពដែលធ្វើឱ្យល្បឿនប្រសិទ្ធនៃម៉ូលេគុល​អ៊ីដ្រូសែនស្មើ 331 m/s។
          <span className="text-sm text-gray-700">គេឱ្យ​<InlineMath math={String.raw`M_{H_2} = 2.0 g/mol`} />។</span>
        </div>,
        <div key="ex1-5">
          ម៉ូលេគុលនីដ្រូសែនមួយនៅពេលស្ថិតលើផ្ទៃផែនដីវាកើតមានល្បឿនប្រសិទ្ធនៅសីតុណ្ហភាព 0°C។ ប្រសិនបើវាផ្លាស់ទីឡើងត្រង់ទៅលើដោយគ្មានទង្គិចនឹងម៉ូលេគុលផ្សេងទៀត​​ ចូរគណនាកម្ពស់ដែលវា​ឡើងដល់។
          <span className="text-sm text-gray-700">គេឱ្យម៉ាសមួយម៉ូលេគុលនីដ្រូសែន <InlineMath math={String.raw`m = 4.65 \times 10^{-26}\,kg`} /> និង <InlineMath math={String.raw`g = 10\,m/s^2`} />។</span>
        </div>
      ],
      answers: [
        <div key="a0" className="space-y-2 ml-2">
          <p><b>រកតម្លៃមធ្យមនៃថាមពលសុីនេទិចរបស់ម៉ូលេគុលអុកស៊ីសែនមួយៗ</b></p>
          <p>តាមរូបមន្តថាមពលសុីនេទិចមធ្យម៖</p>
          <p><InlineMath math={String.raw`K_{av} = \frac{3}{2} k_B T`} /></p>
          <p>ដោយ <InlineMath math={String.raw`k_B = 1.38 \times 10^{-23}\,J/K`} /></p>
          <p className="ml-8"><InlineMath math={String.raw`T = 300\,K`} /></p>
          <p>គេបាន: </p>
          <p><InlineMath math={String.raw`K_{av} = \frac{3}{2} \times (1.38 \times 10^{-23}) \times 300`} /></p>
          <p><InlineMath math={String.raw`K_{av} = \frac{3}{2} \times 4.14 \times 10^{-21}`} /></p>
          <p><InlineMath math={String.raw`K_{av} = 6.21 \times 10^{-21}\,J`} /></p>
          <p>បម្លែងទៅជាអេឡិចត្រុងវ៉ុល៖</p>
          <p><InlineMath math={String.raw`1\,eV = 1.6 \times 10^{-19}\,J`} /></p>
          <p className="ml-4"><InlineMath math={String.raw`1\,J = \frac{1}{1.6 \times 10^{-19}}\,eV`} /></p>
          <p><InlineMath math={String.raw`K_{av} = \frac{6.21 \times 10^{-21}}{1.6 \times 10^{-19}}`} /></p>
          <p><InlineMath math={String.raw`K_{av} = 0.0388 = 3.88 \times 10^{-2}\,eV`} /></p>
          <p><b>ដូចនេះ</b> តម្លៃមធ្យមនៃថាមពលសុីនេទិចគឺ <InlineMath math={String.raw`3.88 \times 10^{-2}\,eV`} />។</p>
        </div>,
        <div key="a1" className="space-y-2 ml-2">
          <p><b>គណនាមាឌឧស្ម័នអុកស៊ីសែន​</b></p>
          <p>តាមរូបមន្តឧស្ម័នបរិសុទ្ឋ៖ <InlineMath math={String.raw`PV = nRT`} /></p>
          <p>តែ៖ <InlineMath math={String.raw`n = \frac{m}{M}`} /></p>
          <p>នោះ <InlineMath math={String.raw`PV = \frac{m}{M} RT`} /></p>
          <p>នាំឲ៖ <InlineMath math={String.raw`V = \frac{m}{PM} RT`} /></p>
          <p>ដោយ៖</p>
          <p><InlineMath math={String.raw`m = 3.2\,g`} /></p>
          <p><InlineMath math={String.raw`M_{O_2} = 32\,g/mol`} /> </p>
          <p><InlineMath math={String.raw`R = 8.31\,J/(mol \cdot K)`} /></p>
          <p><InlineMath math={String.raw`T = 27 + 273 = 300\,K`} /></p>
          <p><InlineMath math={String.raw`P = 76\,cmHg = 1\,atm = 10^5\,Pa`} /></p>
          <p>គេបាន: <InlineMath math={String.raw`V = \frac{3.2}{10^5 \times 32} 8.31 \times 300`} /></p>
          <p><InlineMath math={String.raw`V = \frac{0.1 \times 8.31 \times 300}{10^5}`} /></p>
          <p><InlineMath math={String.raw`V = \frac{249.3}{100000}`} /></p>
          <p><InlineMath math={String.raw`V = 0.002493\,m^3`} /></p>
          <p><InlineMath math={String.raw`V = 2.493\,L`} /></p>
          <p><b>ដូចនេះ</b> មាឌឧស្ម័នអុកស៊ីសែនគឺ <InlineMath math={String.raw`2.5\,L`} />។</p>
        </div>,
        <div key="a2" className="space-y-2 ml-2">
          <p><b>រកល្បឿនដែលប្រសិទ្ធ (vrms) នៃម៉ូលេគុលអាសូត</b></p>
          <p>តាមរូបមន្តល្បឿនប្រសិទ្ធ៖</p>
          <p><InlineMath math={String.raw`v_{rms} = \sqrt{\frac{3RT}{M}}`} /></p>
          <p>ដោយ៖</p>
          <p><InlineMath math={String.raw`R = 8.31\,J/(mol \cdot K)`} /></p>
          <p><InlineMath math={String.raw`T = 300\,K`} /></p>
          <p><InlineMath math={String.raw`M = 28\,g/mol = 0.028\,kg/mol`} /> (ត្រូវបម្លែងទៅជា kg/mol)</p>
          <p>គេបាន: </p>
          <p><InlineMath math={String.raw`v_{rms} = \sqrt{\frac{3 \times 8.31 \times 300}{28\times 10^{-3}}}`} /></p>
          <p><InlineMath math={String.raw`v_{rms} = \sqrt{\frac{7479}{28\times 10^{-3}}}`} /></p>
          <p><InlineMath math={String.raw`v_{rms} = \sqrt{267107.14}`} /></p>
          <p><InlineMath math={String.raw`v_{rms} = 5.2\times 10^{2}\,m/s`} /></p>
          <p><b>ដូចនេះ</b> ល្បឿនដែលប្រសិទ្ធនៃម៉ូលេគុលអាសូតគឺ <InlineMath math={String.raw`5.2\times 10^{2}\,m/s`} />។</p>
        </div>,
        <div key="a3" className="space-y-2 ml-2">
          <p><b>គណនាសីតុណ្ហភាព</b></p>
          <p>តាមរូបមន្តល្បឿនប្រសិទ្ធ៖ <InlineMath math={String.raw`v_{rms} = \sqrt{\frac{3RT}{M}}`} /></p>
          <p>សមមូល៖ <InlineMath math={String.raw`v_{rms}^2 = \frac{3RT}{M}`} /></p>
          <p>នាំឲ៖ <InlineMath math={String.raw`T = \frac{Mv_{rms}^2}{3R}`} /></p>
          <p>ដោយ៖</p>
          <p><InlineMath math={String.raw`v = 331\,m/s`} /></p>
          <p><InlineMath math={String.raw`R = 8.31\,J/(mol \cdot K)`} /></p>
          <p><InlineMath math={String.raw`M = 2\,g/mol = 2 \times 10^{-3}\,kg/mol`} /> (ត្រូវបម្លែងទៅជា kg/mol)</p>
          <p>យើងបាន: </p>
          <p><InlineMath math={String.raw`T = \frac{(2 \times 10^{-3}) (331)^2}{3 \times 8.31}`} /></p>
          <p><InlineMath math={String.raw`T = \frac{219.122}{24.93}`} /></p>
          <p><InlineMath math={String.raw`T = 8.8\,K`} /></p>
          <p><b>ដូចនេះ</b> សីតុណ្ហភាព គឺ <InlineMath math={String.raw`8.8\,K`} />។</p>
        </div>,
        <div key="a4" className="space-y-2 ml-2">
          <p><b>គណនាកម្ពស់ដែលម៉ូលេគុលអ៊ីដ្រូសែន​ឡើងដល់</b></p>
          <p>​តាមច្បាប់រក្សាថាមពលមេកានិច៖ <InlineMath math="K_{av} = U" /></p>
          <p>តែ៖ <InlineMath math="K_{av} = \frac{3}{2} k_B T" /> , <InlineMath math="U = mgh" /></p>
          <p>នោះ : <InlineMath math={String.raw`\frac{3}{2} k_B T = mgh`} /></p>
          <p>នាំឲ៖ <InlineMath math={String.raw`h = \frac{3 k_B T}{2mg}`} /></p>
          <p>ដោយ៖</p>
          <p><InlineMath math={String.raw`T = 0 + 273 = 273\,K`} /></p>
          <p><InlineMath math={String.raw`k_B = 1.38 \times 10^{-23}\,J/K`} /></p>
          <p><InlineMath math={String.raw`m = m_o = 4.65 \times 10^{-26}\,kg`} /></p>
          <p><InlineMath math={String.raw`g = 10\,m/s^2`} /></p>
          <p>យើងបាន: </p>
          <p><InlineMath math={String.raw`h = \frac{3 \times 1.38 \times 10^{-23} \times 272}{2 \times 4.65 \times 10^{-26} \times 10}`} /></p>
          <p><InlineMath math={String.raw`h = \frac{1.13022 \times 10^{-20}}{9.3 \times 10^{-25}}`} /></p>
          <p><InlineMath math={String.raw`h = 12.2 \times 10^3\,m`} /></p>
          <p><b>ដូចនេះ</b> កម្ពស់ដែលម៉ូលេគុលនីដ្រូសែនឡើងដល់គឺ <InlineMath math={String.raw`12.2 \times 10^3\,m`} />។</p>
        </div>
      ]
    },
    {
      id: "ex2",
      title: "លំហាត់អនុវត្តទី ២",
      description: "ដំណោះស្រាយលំហាត់ច្បាប់ទីមួយទែម៉ូឌីណាមិច៖",
      problemType: "Solutions to the first law of thermodynamics exercises",
      problems: [
        <div key="ex2-1">
          គេធ្វើកម្មន្ត​ 2.5 kJ លើប្រព័ន្ធឧស្ម័ន​។ ក្រោយមក​កម្ដៅ 1.5 kcal បានភាយចេញពីប្រព័ន្ធ ។ គណនាបម្រែបម្រួលថាមពលក្នុង ។ (<InlineMath math="1cal = 4.186J" />)
        </div>,
        <div key="ex2-2">
          <p>មួយម៉ូលេគុលនៃឧស្ម័ន <InlineMath math={String.raw`O_2`} /> (សន្មតថាជាឧស្ម័នបរិសុទ្ធ)។</p>
          <p>ក- ឧស្ម័នរីកមាឌនៅសីតុណ្ហភាពថេរ T = 310K ពីមាឌដើម <InlineMath math={String.raw`V_i =12L`} /> ទៅ <InlineMath math={String.raw`V_f =19L`} /> ។ គណនាកម្មន្តក្នុងដំណើរការរីកមាឧរបស់ស្ម័ន។</p>
          <p>ខ- ឧស្ម័នរួមមាឌនៅសីតុណ្ហភាពថេរពីមាឌ <InlineMath math={String.raw`V_i =19L`} /> ទៅ <InlineMath math={String.raw`V_f = 12L`} /> ។ គណនាកម្មន្តក្នុងដំណើរការរួមមាឌ។</p>
          <p>
            <InlineMath math={String.raw`\ln 19 = 2.9,\ \ln 12 = 2.4,\ \ln \frac{19}{12} = 0.46,\ \ln \frac{12}{19} = -0.46,\ R = 8.31\,J/(mol \cdot K)`} />
          </p>
        </div>,
        <div key="ex2-3">
          <p>ចូរគណនា​បម្រែបម្រួលថាមពលក្នុងរបស់ប្រព័ន្ធ៖</p>
          <p>ក- ប្រព័ន្ធ​ស្រូបបរិមាណ​កម្ដៅ 500 cal និងធ្វើកម្មន្ត 400 J</p>
          <p>ខ- ប្រព័ន្ធ​ស្រូបបរិមាណ​កម្ដៅ 300 cal និងទទួលកម្មន្ត 420 J</p>
          <p>គ- បរិមាណ​កម្ដៅ 1200 cal ត្រូវបានរំភាយចេញពីប្រព័ន្ធនៅពេលមាឌថេរ ។ </p>
          <span className="text-sm text-gray-700">គេឱ្យ 1cal = 4.19 J</span>
        </div>,
        <div key="ex2-4">
          <p>ចូរគណនាបម្រែបម្រួលថាមពលក្នុងរបស់ប្រព័ន្ធ៖</p>
          <p>ក- ប្រព័ន្ធធ្វើកម្មន្ត 5.0 J ខណៈវារីកអាដ្យាបាទិច</p>
          <p>ខ- ខណៈប្រព័ន្ធរួមអាដ្យាបាទិច កម្មន្ត 80 J ត្រូវបានធ្វើលើឧស្ម័ន។</p>
        </div>
      ],
      answers: [
        <div key="a1" className="space-y-2 gap-2">
          <p>គណនាបម្រែបម្រួលថាមពលក្នុង</p>
          <p>តាមច្បាប់ទី១ទែម៉ូឌីណាមិច:</p>
          <p><InlineMath math={String.raw`Q = \Delta U + W \implies \Delta U = Q - W`} /></p>
          <p>ដោយ:</p>
          <p><InlineMath math={String.raw`W = -25\, \text{kJ} = -25 \times 10^3 \, \text{J}`} /></p>
          <p><InlineMath math={String.raw`Q = -1.5\, \text{kcal} = -1.5 \times 10^3 \text{cal}`} /></p>
          <p><InlineMath math={String.raw`1cal = 4.186 \, \text{J} = -6.279 \times 10^3 \, \text{J}`} /></p>
          <p><InlineMath math={String.raw`\implies Q = 1.5 \times 4.186 \times 10^3 = -6.279 \times 10^3 \, \text{J}`} /></p>
          <p>យើងបាន:</p>
          <p><InlineMath math={String.raw`\Delta U = -6.279 \times 10^3 - (-25 \times 10^3)`} /></p>
          <p><InlineMath math={String.raw`\Delta U = 18.721 \times 10^3 \, \text{J}`} /></p>
          <p>ដូច្នេះ បម្រែបម្រួលថាមពលក្នុងគឺ <InlineMath math={String.raw` 18.721 \times 10^3 \, \text{J}`} /></p>
          <p></p>
        </div>,
        <div key="a2" className="space-y-2 gap-2">
          <p>ក- គណនាកម្មន្តក្នុងដំណើរការរីកមាឧ​</p>
          <p>ដោយ T ថេរ នោះវាជាលំនាំអុីសូទែម​</p>
          <p>គេបាន : <InlineMath math={String.raw`W = nRT \ln \left(\frac{V_f}{V_i}\right)`} /></p>
          <p>ដោយ :</p>
          <p><InlineMath math={String.raw`R = 8.31\,J/(mol \cdot K)`} /></p>
          <p><InlineMath math={String.raw`T = 310\,K`} /></p>
          <p><InlineMath math={String.raw`n = 1.0\,mol`} /></p>
          <p><InlineMath math={String.raw`V_f = 19\,L, \, V_i = 12\,L`} /></p>
          <p>គេបាន : <InlineMath math={String.raw`W = 1.0 \times 8.31 \times 310 \times \ln \left(\frac{19}{12}\right)`} /></p>
          <p><InlineMath math={String.raw`W = 1.2 \times 10^3 \, \text{J}`} /></p>
          <p>ដូច្នេះ កម្មន្តក្នុងដំណើរការរីកមាឧរបស់ស្ម័នគឺ <InlineMath math={String.raw`1.2 \times 10^3 \, \text{J}`} />។</p>
          <p>ខ- គណនាកម្មន្តក្នុងដំណើរការរួមមាឧ​</p>
          <p>តាមរូបមន្ត : <InlineMath math={String.raw`W = nRT \ln \left(\frac{V_f}{V_i}\right)`} /></p>
          <p>ដោយ : <InlineMath math={String.raw`V_f = 12 \, \text{L}, \, V_i = 19 \, \text{L}`} /></p>
          <p><InlineMath math={String.raw`W = 1.0 \times 8.31 \times 310 \times \ln \left(\frac{12}{19}\right)`} /></p>
          <p><InlineMath math={String.raw`W = 1.2 \times 10^3 \, \text{J}`} /> (ដោយវារួមមាឌ)</p>
          <p>នោះ <InlineMath math={String.raw`W = -1.2 \times 10^3 \, \text{J}`} /></p>
          <p>ដូច្នេះ កម្មន្តក្នុងដំណើរការរួមមាឧរបស់ស្ម័នគឺ <InlineMath math={String.raw`-1.2 \times 10^3 \, \text{J}`} />។</p>
        </div>,
        <div key="a3" className="space-y-2">
          <p>ក- គណនាបម្រែបម្រួលថាមពលក្នុង</p>
          <p>តាមច្បាប់ទី១ទែម៉ូឌីណាមិច:</p>
          <p><InlineMath math={String.raw`Q = \Delta U + W \implies \Delta U = Q - W`} /></p>
          <p>ដោយ:</p>
          <p><InlineMath math={String.raw`W = 400\, \text{J}`} /></p>
          <p><InlineMath math={String.raw`Q = 500\, \text{cal}`} /></p>
          <p><InlineMath math={String.raw`1cal = 4.19 \, \text{J}`} /></p>
          <p><InlineMath math={String.raw`\implies Q = 500 \times 4.19 = 2095 \text{J}`} /></p>
          <p>យើងបាន:</p>
          <p><InlineMath math={String.raw`\Delta U = 2095 - (400)`} /></p>
          <p><InlineMath math={String.raw`\Delta U = 1695 \, \text{J}`} /></p>
          <p>ដូច្នេះ បម្រែបម្រួលថាមពលក្នុងគឺ <InlineMath math={String.raw` 1695 \, \text{J}`} /> ។</p>
          <p>ខ- គណនាបម្រែបម្រួលថាមពលក្នុង</p>
          <p>តាមច្បាប់ទី១ទែម៉ូឌីណាមិច:</p>
          <p><InlineMath math={String.raw`Q = \Delta U + W \implies \Delta U = Q - W`} /></p>
          <p>ដោយ:</p>
          <p><InlineMath math={String.raw`W = -420\, \text{J}`} /></p>
          <p><InlineMath math={String.raw`Q = 300\, \text{cal}`} /></p>
          <p><InlineMath math={String.raw`1cal = 4.19 \, \text{J}`} /></p>
          <p><InlineMath math={String.raw`\implies Q = 300 \times 4.19 = 1257 \text{J}`} /></p>
          <p>យើងបាន:</p>
          <p><InlineMath math={String.raw`\Delta U = 1257 - (-420)`} /></p>
          <p><InlineMath math={String.raw`\Delta U = 1677 \, \text{J}`} /></p>
          <p>ដូច្នេះ បម្រែបម្រួលថាមពលក្នុងគឺ <InlineMath math={String.raw` 1677 \, \text{J}`} /> ។</p>
          <p>គ. គណនាបម្រែបម្រួលថាមពលក្នុង</p>
          <p>ដោយ: <InlineMath math="Q = -1200 \, \text{J}" /></p>
          <p><InlineMath math={String.raw`1cal = 4.19 \, \text{J}`} /></p>
          <p><InlineMath math={String.raw`\implies Q = -1200 \times 4.19 = -5028 \text{J}`} /></p>
          <p>តែមាឌថេរ(លំនាំអុីសូករ) <InlineMath math="\implies W = 0 " /></p>
          <p>យើងបាន:</p>
          <p><InlineMath math={String.raw`\Delta U = -5028 - 0`} /></p>
          <p><InlineMath math={String.raw`\Delta U = -5028 \, \text{J}`} /></p>
          <p>ដូច្នេះ បម្រែបម្រួលថាមពលក្នុងគឺ <InlineMath math={String.raw` -5028 \, \text{J}`} /> ។</p>
        </div>,
        <div key="a5" className="space-y-2">
          <p>ក- គណនាបម្រែបម្រួលថាមពលក្នុងខណៈវារីកអាដ្យាបាទិច</p>
          <p>តាមច្បាប់ទី១ទែម៉ូឌីណាមិច:</p>
          <p><InlineMath math={String.raw`Q = \Delta U + W \implies \Delta U = Q - W`} /></p>
          <p>ដោយ :</p>
          <div className="ml-4">
            <p><InlineMath math={String.raw`Q = 0(លំនាំអាដ្យាបាទិច)`} /></p>
            <p><InlineMath math={String.raw`W = 5.0\,J`} /></p>
          </div>
          <p>យើងបាន :<InlineMath math={String.raw`\Delta U = 0 - 5.0 = -5.0\,J`} /></p>
          <p>ដូចនេះ បម្រែបម្រួលថាមពលក្នុងខណៈវារីកអាដ្យាបាទិចគឺ <InlineMath math={String.raw`\Delta U = -5.0\,J`} /></p>
          <p>ខ- គណនាបម្រែបម្រួលថាមពលក្នុងខណៈប្រព័ន្ធរួមអាដ្យាបាទិច</p>
          <p>តាមច្បាប់ទី១ទែម៉ូឌីណាមិច:</p>
          <p><InlineMath math={String.raw`Q = \Delta U + W \implies \Delta U = Q - W`} /></p>
          <p>ដោយ :</p>
          <p><InlineMath math={String.raw`Q = 0(លំនាំអាដ្យាបាទិច)`} /></p>
          <p><InlineMath math={String.raw`W = 80\,J`} /></p>
          <p>យើងបាន :<InlineMath math={String.raw`\Delta U = 0 - 80 = -80\,J`} /></p>
          <p>ដូចនេះ បម្រែបម្រួលថាមពលក្នុងខណៈប្រព័ន្ធរួមអាដ្យាបាទិចគឺ <InlineMath math={String.raw`\Delta U = -80\,J`} /></p>
        </div>
      ]
    },
    {
      id: "ex3",
      title: "លំហាត់អនុវត្តទី ៣",
      description: "ដំណោះស្រាយលំហាត់ម៉ាសុីន៖",
      problemType: "Solutions to the machines exercises",
      problems: [
        <div key="ex3-1">
          <p>ម៉ាស៊ីនកម្ដៅស្រូបកម្ដៅ​ 200J ពីធុងក្ដៅដើម្បីធ្វើកម្មន្ត និងបំភាយកម្ដៅ 160J ទៅធុងត្រជាក់។ គណនាទិន្នផលកម្តៅនៃម៉ាស៊ីន។</p>
        </div>,
        <div key="ex3-2">
          <p>ម៉ាស៊ីនកាណូតធ្វើការ​រវាងធុងក្តៅពីរ​នៅ <InlineMath math={String.raw`500\,K`} /> និង <InlineMath math={String.raw`300\,K`} />។</p>
          <p>ក- រកទិន្នផលកម្តៅនៃម៉ាស៊ីនកាកណូ។</p>
          <p>ខ- ប្រសិនបើវាស្រូបកម្តៅ 200kJ ពីធុងក្តៅ។ គណនាកម្មន្តដែលបានធ្វើ។</p>
        </div>,
        <div key="ex3-3">
          <p>ម៉ូទ័រម៉ាស៊ីនម៉ាសូតនៃរថយន្តមួយដែលមានទិន្នផលកម្តៅ 0.43 ហើយវាស្រូបបរិមាណកម្តៅ 4.0MJ ​។ គណនា  :</p>
          <p>ក- កម្មន្តមេកានិចដែលបានពី​ពីស្តុង។</p>
          <p>ខ- បរិមាណកម្តៅ​ដែលបញ្ចេញទៅ​ក្នុងបរិយាកាស។</p>
          <p>គ- កម្មន្តបានការ​ បើគេដឹងថាទិន្នផលគ្រឿងបញ្ជូន​ 0.82។</p>
        </div>,
        <div key="ex3-4">
          <p>គណនាទិន្នផលអតិបរមា  របស់ម៉ាស៊ីនកម្ដៅដែលធ្វើការ​រវាងសីតុណ្ហភាព <InlineMath math={String.raw`100^\circ C`} /> និង <InlineMath math={String.raw`400^\circ C`} />។</p>
        </div>,
        <div key="ex3-5">
          <p>ម៉ាស៊ីនចំហាយទឹកធ្វើការ​រវាងសីតុណ្ហភាព <InlineMath math={String.raw`220^\circ C`} /> និង <InlineMath math={String.raw`35^\circ C`} /> បានផ្តល់អានុភាព 8.0hp។ ប្រសិនបើទិន្នផល​របស់វាស្មើនឹង 30%  នៃទន្និផលម៉ាសុីនកាកណូដែលបានធ្វើរវាងសីតុណ្ហភាពពីរដូចខាងលើ។
            តើមានបរិមាណកម្ដៅប៉ុន្មានកាឡូរី ដែលស្រូបដោយធុងទឹកក្ដៅរាល់វិនាទី? តើបរិមាណកម្តៅប៉ុន្មានកាឡូរី ដែលបានបញ្ចេញទៅធុងត្រជាក់​រាល់វិនាទី?</p>
          <span className="text-sm text-gray-700">គេឱ្យ 1.0hp = 786W និង 1.0cal = 4.2J</span>
        </div>
      ],
      answers: [
        <div key="a1" className="space-y-2 gap-2">
          <p>គណនាទិន្នផលកម្តៅនៃម៉ាស៊ីន</p>
          <p>តាមរូបមន្ត : <InlineMath math={String.raw`e = 1 - \frac{Q_c}{Q_h}`} /></p>
          <p>ដោយ :</p>
          <p><InlineMath math={String.raw`Q_c = 160\,J`} /></p>
          <p><InlineMath math={String.raw`Q_h = 200\,J`} /></p>
          <p>យើងបាន :</p>
          <p><InlineMath math={String.raw`e = 1 - \frac{160}{200} = 1 - 0.8 = 0.2 = 20\%`} /></p>
          <p>ដូចនេះ​ ទិន្នផលកម្តៅនៃម៉ាស៊ីនគឺ <InlineMath math={String.raw`20\%`} />  ។</p>
        </div>,
        <div key="a2" className="space-y-2 gap-2">
          <p>ក- រកទិន្នផលកម្តៅ</p>
          <p>តាមរូបមន្ត : <InlineMath math={String.raw`e = 1 - \frac{T_c}{T_h}`} /></p>
          <p>ដោយ : <InlineMath math={String.raw`T_c = 300\,K,\ T_h = 500\,K`} /></p>
          <p>យើងបាន : <InlineMath math={String.raw`e = 1 - \frac{300}{500}`} /></p>
          <p><InlineMath math={String.raw`e = 1 - 0.6`} /></p>
          <p><InlineMath math={String.raw`e = 0.4 = 40\%`} /></p>
          <p>ដូចនេះ ទិន្នផលកម្តៅគឺ 40%</p>
          <p>ខ- រកកម្មន្តដែលបានធ្វើ</p>
          <p>តាមរូបមន្ត : <InlineMath math={String.raw`e = \frac{W}{Q_h}`} /></p>
          <p>នាំឲ្យ : <InlineMath math={String.raw`W = e \times Q_h`} /></p>
          <p>ដោយ : </p>
          <p><InlineMath math={String.raw`e = 0.4`} /></p>
          <p><InlineMath math={String.raw`Q_h = 200\,kJ = 200 \times 10^3\,J`} /></p>
          <p>យើងបាន : <InlineMath math={String.raw`W = 0.4 \times 200 \times 10^3 = 8\times 10^4\,J`} /></p>
          <p>ដូចនេះ កម្មន្តដែលបានធ្វើគឺ <InlineMath math={String.raw` 8 \times 10^4\,J`} /></p>
        </div>,
        <div key="a3" className="space-y-2 gap-2">
          <p>ក- គណនាកម្មន្តមេកានិចដែលបានពី​ពីស្តុង</p>
          <p>តាមរូបមន្ត : <InlineMath math={String.raw`e_c = \frac{W_M}{Q_h}`} /></p>
          <p>នាំឲ្យ : <InlineMath math={String.raw`W_M = e_c \times Q_h`} /></p>
          <p>ដោយ : <InlineMath math={String.raw`e_c = 43\% = 0.43`} /></p>
          <p><InlineMath math={String.raw`Q_h = 4.0\,MJ = 4.0 \times 10^6\,J`} /></p>
          <p>យើងបាន : <InlineMath math={String.raw`W_M = 0.43 \times 4.0 \times 10^6 `} /></p>
          <p><InlineMath math={String.raw`W_M = 1.72 \times 10^6\,J`} /></p>
          <p>ដូចនេះ កម្មន្តមេកានិចដែលបានពីពីស្តុងគឺ <InlineMath math={String.raw`1.72 \times 10^6\,J`} /></p>
          <p>ខ- គណនាបរិមាណកម្តៅដែលបញ្ចេញ</p>
          <p>តាមរូបមន្ត : <InlineMath math={String.raw`W_M = Q_h - Q_c`} /></p>
          <p>នាំឲ្យ : <InlineMath math={String.raw`Q_c = Q_h - W_M`} /></p>
          <p>ដោយ : <InlineMath math={String.raw`Q_h = 4.0 \times 10^6\,J`} /></p>
          <p><InlineMath math={String.raw`W_M = 1.72 \times 10^6\,J`} /></p>
          <p>យើងបាន : <InlineMath math={String.raw`Q_c = 4.0 \times 10^6 - 1.72 \times 10^6 `} /></p>
          <p><InlineMath math={String.raw`Q_c = 2.28 \times 10^6\,J`} /></p>
          <p>ដូចនេះ បរិមាណកម្តៅដែលបញ្ចេញទៅក្នុងបរិយាកាសគឺ <InlineMath math={String.raw`2.28 \times 10^6\,J`} /></p>
          <p>គ- គណនាកម្មន្តបានការ</p>
          <p>តាមរូបមន្ត : <InlineMath math={String.raw`e_M = \frac{W_U}{W_M}`} /></p>
          <p>នាំឲ្យ : <InlineMath math={String.raw`W_U = e_M \times W_M`} /></p>
          <p>ដោយ : <InlineMath math={String.raw`e_M = 0.82`} /></p>
          <p><InlineMath math={String.raw`W_M = 1.72 \times 10^6\,J`} /></p>
          <p>យើងបាន : <InlineMath math={String.raw`W_U = 0.82 \times 1.72 \times 10^6 `} /></p>
          <p><InlineMath math={String.raw`W_U = 1.41 \times 10^6\,J`} /></p>
          <p>ដូចនេះ កម្មន្តបានការគឺ <InlineMath math={String.raw` 1.41 \times 10^6\,J`} /></p>
        </div>,
        <div key="a4" className="space-y-2 gap-2">
          <p>គណនាទិន្នផលអតិបរមារបស់ម៉ាស៊ីនកម្ដៅ</p>
          <p>តាមរូបមន្ត : <InlineMath math={String.raw`e = 1 - \frac{T_c}{T_h}`} /></p>
          <p>ដោយ : <InlineMath math={String.raw`T_c = 100^\circ C + 273 = 373\,K`} /></p>
          <p><InlineMath math={String.raw`T_h = 400^\circ C + 273 = 673\,K`} /></p>
          <p>យើងបាន : <InlineMath math={String.raw`e = 1 - \frac{373}{673} `} /></p>
          <p><InlineMath math={String.raw`e = 1 - 0.554`} /></p>
          <p><InlineMath math={String.raw`e = 0.446 = 45\%`} /></p>
          <p>ដូចនេះ ទិន្នផលអតិបរមារបស់ម៉ាស៊ីនកម្ដៅគឺ <InlineMath math={String.raw` 45\%`} /></p>
        </div>,
        <div key="a5" className="space-y-2 gap-2">
          <p>គណនាបរិមាណកម្តៅដែលបញ្ចេញក្នុងមួយវិនាទី</p>
          <p>ដោយបរិមាណកម្តៅនៃចំហាយទឹក​ស្មើនឹង 30% នៃទិន្នផលកម្ដៅនៃម៉ាសុីនកាកណូ​</p>
          <p>យើងបាន : <InlineMath math={String.raw`e' = 30\%\ e = 0.3e`} /></p>
          <p>នោះ​ <InlineMath math={String.raw`e' = 0.3(1 - \frac {T_c}{T_h})`} /></p>
          <p>ដោយ : <InlineMath math={String.raw`T_c = 35^\circ C + 273 = 308\,K`} /></p>
          <p><InlineMath math={String.raw`T_h = 220^\circ C + 273 = 493\,K`} /></p>
          <p>យើងបាន : <InlineMath math={String.raw`e' = 0.3(1 - \frac {308}{493})`} /></p>
          <p><InlineMath math={String.raw`e' = 0.3(1 - 0.624) `} /></p>
          <p><InlineMath math={String.raw`e' = 0.3 \times 0.376 = 0.1125`} /></p>
          <p>តែ៖ <InlineMath math="W = P \times t" /></p>
          <p>ដោយ : <InlineMath math={String.raw`P = 8.0hp = 5968\,W\ , t = 1\,s`} /></p>
          <p>យើងបាន : <InlineMath math={String.raw`W = 5968 \times 1 = 5968\,J`} /></p>
          <p>ម្យ៉ាងទៀត : <InlineMath math={String.raw`e' = \frac{W}{Q_h} `} /></p>
          <p>នាំឲ៖ : <InlineMath math={String.raw`Q_h = \frac{W}{e'}`} /></p>
          <p><InlineMath math={String.raw`Q_h = \frac{5968}{0.1125} = 53048\,J`} /></p>
          <p>តាមរូបមន្ត : <InlineMath math={String.raw`Q_h = W + Q_c `} /></p>
          <p>នាំឲ៖ : <InlineMath math={String.raw`Q_c = Q_h - W`} /></p>
          <p>នោះ : <InlineMath math={String.raw`Q_c = 53,048 - 5968 = 47080\,J`} /></p>
          <p>ដូចនេះ បរិមាណកម្តៅដែលបញ្ចេញទៅក្នុងបរិយាកាសគឺ <InlineMath math={String.raw`47080\,J`} /></p>
        </div>,
      ],
    },
  ];
  return (
    <div>
      <SummaryBox
        title="រូបមន្តគន្លឹះ និងវិធីដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល"
        sections={summary}
      />
      <TopicPracticeBox exercises={practiceExercises} />
    </div>
  )
}

export default ThermoPractice