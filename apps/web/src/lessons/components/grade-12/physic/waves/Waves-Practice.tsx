import { TopicPracticeBox } from "@/components/pages/docs/boxes/TopicPracticeBox";
import { BlockMath, InlineMath } from "react-katex";

import { SummaryBox } from "@/components/pages/docs/boxes/SummaryBox";
import { BookAIcon, ChartBarIcon, LightbulbIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/docs/topic";

const WavesPractice = () => {
  const summary: SummarySection[] = [
    {
      key: "wave-properties",
      title: "រូបមន្តរលក និងសមីការរលក",
      icon: BookAIcon,
      content: (
        <div className="space-y-4">
          {/* Key Formulas */}
          <div>
            <div className="font-bold mb-1">១. រូបមន្តប្រើក្នុងរលក</div>
            <div className="ml-4 space-y-1">
              <div><span className="text-indigo-600">•</span> ខួប : <InlineMath math={String.raw`T = \frac{1}{f}`} /></div> {/* \quad \Leftrightarrow */}
              <div><span className="text-indigo-600">•</span> ប្រេកង់: <InlineMath math={String.raw`f = \frac{1}{T} = \frac{\omega}{2\pi} = \frac{v}{\lambda}`} /></div>
              <div><span className="text-indigo-600">•</span> ល្បឿនមុំ: <InlineMath math={String.raw`\omega = 2\pi f = \frac{2\pi}{T} = v \times k`} /></div>
              <div><span className="text-indigo-600">•</span> ជំហានរលក: <InlineMath math={String.raw`\lambda = vT = \frac{v}{f} = \frac{2\pi}{k}`} /></div>
              <div><span className="text-indigo-600">•</span> ចំនួនរលក: <InlineMath math={String.raw`k = \frac{2\pi}{\lambda} = \frac{\omega}{v}`} /></div>
            </div>
          </div>
          {/* Wave Equations */}
          <div>
            <div className="font-bold mb-1">២. រាងនៃសមីការរលក</div>
            <div className="ml-4 space-y-1">
              <div><InlineMath math={String.raw`y = a \sin(\omega t)`} /></div>
              <div><InlineMath math={String.raw`y = a \sin(\omega t + \varphi)`} /></div>
              <div><InlineMath math={String.raw`y = a \sin(\omega t + kx)`} /></div>
              <div><InlineMath math={String.raw`y = a \sin(kx + \omega t)`} /></div>
              <div><InlineMath math={String.raw`y = a \sin(kx)`} /></div>
              <div><InlineMath math={String.raw`y = a \sin(\omega t - \varphi)`} /></div>
              <div><InlineMath math={String.raw`y = a \sin(\omega t - kx)`} /></div>
              <div><InlineMath math={String.raw`y = a \sin(kx - \omega t)`} /></div>
            </div>
          </div>
        </div>
      )
    },
    {
      key: "superposition",
      title: "គោលការណ៍ត្រួតស៊ីគ្នានៃរលក",
      icon: ChartBarIcon,
      content: (
        <div className="space-y-4">
          {/* ក. ករណីរលកពីរ */}
          <div>
            <div className="font-bold mb-1">ក. ករណីរលកពីរ</div>
            <div className="ml-4 space-y-1 text-sm">
              <div>
                <span className="text-indigo-600">• </span>
                <span><InlineMath math={String.raw`y_1 = a_1 \sin(\omega t + \varphi_1)`} /></span>
              </div>
              <div>
                <span className="text-indigo-600">• </span>
                <span><InlineMath math={String.raw`y_2 = a_2 \sin(\omega t + \varphi_2)`} /></span>
              </div>
              <div>
                <span className="text-indigo-600 ">• </span>
                <span><InlineMath math={String.raw`y = y_1 + y_2 = a \sin(\omega t + \varphi)`} /></span><br />
              </div>
              <div>
                <span className="text-indigo-600 ">•</span> អំព្លីទុតនៃរលកពីរ :<br />
                <span><InlineMath math={String.raw`a = \sqrt{a_1^2 + a_2^2 + 2a_1 a_2 \cos(\Delta\varphi)}`} /></span>
                <div><span className="ml-2">ដែល <InlineMath math={String.raw`\Delta\varphi = \varphi_2 - \varphi_1`} /></span></div>
              </div>
              <div>
                <span className="text-indigo-600 ml-1"></span> ឬ <InlineMath math={String.raw`a = \sqrt{a_x^2 + a_y^2}`} />
                <div className="ml-4">
                  <div><InlineMath math={String.raw`a_x = a_1 \cos\varphi_1 + a_2 \cos\varphi_2`} /></div>
                  <div><InlineMath math={String.raw`a_y = a_1 \sin\varphi_1 + a_2 \sin\varphi_2`} /></div>
                </div>
              </div>
              <div>
                <span className="text-indigo-600">•</span> <InlineMath math={String.raw`\tan\varphi = \frac{a_y}{a_x}`} />
              </div>
            </div>
          </div>
          {/* ខ. ករណីរលកច្រើន */}
          <div>
            <div className="font-bold mb-1">ខ. ករណីរលកច្រើន</div>
            <div className="ml-4 space-y-1 text-sm">
              <div>
                <span className="text-indigo-600">• </span>
                <InlineMath math={String.raw`y = y_1 + y_2 + ... + y_n = a \sin(\omega t + \varphi)`} />
              </div>
              <div>
                <span className="text-indigo-600">•</span> អំព្លីទុត :
                <InlineMath math={String.raw`\text \ a = \sqrt{a_x^2 + a_y^2}`} />
                <div className="ml-4">
                  <div><InlineMath math={String.raw`a_x = a_1 \cos\varphi_1 + ... + a_n \cos\varphi_n`} /></div>
                  <div><InlineMath math={String.raw`a_y = a_1 \sin\varphi_1 + ... + a_n \sin\varphi_n`} /></div>
                </div>
              </div>
              <div>
                <span className="text-indigo-600">•</span> <InlineMath math={String.raw`\tan\varphi = \frac{a_y}{a_x}`} />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      key: "special-cases",
      title: "ករណីពិសេសនៃគម្លាតផាស ឬផលសងផាស",
      icon: BookAIcon,
      content: (
        <>
          {/* ករណីពិសេសនៃគម្លាតហ្វាស (Δϕ) */}
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">•</span>
              <span>
                <b>រលកពីរស្របផាសគ្នា:</b> <InlineMath math={String.raw`\Delta\varphi = 0`} />
                <br />
                <span><InlineMath math={String.raw`\Delta\varphi = 2n \pi`}></InlineMath></span><br />
                <span><InlineMath math={String.raw`a = a_1 + a_2`} /></span><br />
                <span><InlineMath math={String.raw`\Delta\varphi_1 = \Delta\varphi_2 = \Delta\varphi`} /></span>
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">•</span>
              <span>
                <b>រលកពីរឈមផាសគ្នា:</b> <InlineMath math={String.raw`\Delta\varphi = \pi`} /><br />
                <span><InlineMath math={String.raw`\Delta\varphi = (2n+1)\pi`} /><br /></span>
                <span> <InlineMath math={String.raw`a = |a_1 - a_2|`} /></span>
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1"></span>
              <span>
                <InlineMath math={String.raw`\begin{cases} a_1 = a_1 - a_2 , a_1 > a_2 \, \\ a_2 = a_2 - a_1 , a_2 > a_1  \end{cases}`} /> <br />
                <span><InlineMath math={String.raw` \varphi_1 =  0 ,\ \varphi_2 = 0`} /></span>
              </span>
            </div>
          </div>
          <div className="space-y-2 mt-2">
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">•</span>
              <span>
                <b>រលកពីរខែ្វងផាសគ្នា:</b> <InlineMath math={String.raw`\Delta\varphi =  \frac{\pi}{2}`} /><br />
                <span><InlineMath math={String.raw`\Delta\varphi =  (2n + \frac{1}{2}){\pi}`} /></span><br />
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1"></span>
              <span>
                <span><InlineMath math={String.raw`a = \sqrt{a_1^2 + a_2^2}`} /></span><br />
              </span>
            </div>
          </div>
          <div className="space-y-2 mt-4">
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1"></span>
              <span>
                <span><BlockMath math={String.raw`tan\varphi =  \frac{a_1\ sin\varphi_1 + a_2\ sin\varphi_2}{a_1\ cos\varphi_1 + a_2\ cod\varphi_2}`} /></span><br />
              </span>
            </div>
          </div>
        </>
      )
    },
    {
      key: "standing-waves",
      title: "រលកជញ្ជ្រុំ",
      icon: BookAIcon,
      content: (
        <>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">•</span>
              <span>
                សមីការរលកជញ្ជ្រុំ៖ <br />
                <InlineMath math={String.raw`\sin p + \sin q = 2 \sin\left(\frac{p+q}{2}\right) \cos\left(\frac{p-q}{2}\right)`} />
              </span>
            </div>
          </div>
          <div className="space-y-2 mt-4">
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">•</span>
              <span>
                ករណីទី១: <br />
                <InlineMath math={String.raw`y_1 = a \sin(\omega t + kx)`} /> និង <InlineMath math={String.raw`y_2 = a \sin(\omega t - kx)`} /> <br />
                <InlineMath math={String.raw`y = y_1 + y_2 = 2a \cos(kx) \sin(\omega t)`} /> <br />
                <InlineMath math={String.raw`y = 2a \cos(kx) \sin(\omega t)`} />
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">•</span>
              <span>
                ករណីទី២: <br />
                <InlineMath math={String.raw`y_1 = a \sin(kx + \omega t)`} /> និង <InlineMath math={String.raw`y_2 = a \sin(kx - \omega t)`} /> <br />
                <InlineMath math={String.raw`y = y_1 + y_2 = 2a \sin(kx) \cos(\omega t)`} /> <br />
                <InlineMath math={String.raw`y = 2a \sin(kx) \cos(\omega t)`} />
              </span>
            </div>
          </div>
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">•</span>
              <span>
                ទីតាំងពោះ <br />
                <span>មានអំព្លីទុតអតិបរមា (<InlineMath math={String.raw`A_{max} = 2a`} />)</span>
                <div> <InlineMath math={String.raw`x = \frac{n\lambda}{2}`} /> (សម្រាប់ <InlineMath math={String.raw`n`} /> ជាចំនួនគត់: 0,1,2,3,...)</div>
              </span>
            </div>
          </div>

          <div className="space-y-2 mt-4">
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">•</span>
              <span>
                ទីតាំងថ្នាំង <br />
                <div className="text-sm">មានអំព្លីទុតស្មើសូន្យ (<InlineMath math={String.raw`A_{min} = 0`} />)</div>
                <div><InlineMath math={String.raw`x = \frac{n\lambda}{2}`} /> (សម្រាប់ <InlineMath math={String.raw`n`} /> ជាចំនួនគត់: 0,1,2,3,...)</div>
              </span>
            </div>
          </div>
        </>
      )
    },
    {
      key: "si_units",
      title: "ខ្នាតអត្តរជាតិ​(SI)",
      icon: LightbulbIcon,
      content: (
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ខួប :</b> T — s (វិនាទី)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ប្រេកង់ :</b> f — Hz (ហឺត)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ល្បឿនមុំ :</b> ω — rad/s (រ៉ាដ្យង់ក្នុងមួយវិនាទី)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ល្បឿនដំណាលរលក :</b> v — m/s (ម៉ែត្រក្នុងមួយវិនាទី)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ជំហានរលក :</b> λ — m (ម៉ែត្រ)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ចំនួនរលក :</b> k — rad/m (រ៉ាដ្យង់ក្នុងមួយម៉ែត្រ)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>អំព្លីទុត :</b> a — m (ម៉ែត្រ)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>គម្លាត :</b> y — m (ម៉ែត្រ)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ហ្វាស :</b> ϕ — rad (រ៉ាដ្យង់)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ពេលវេលា :</b> t — s (វិនាទី)</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ទីតាំង :</b> x — m (ម៉ែត្រ)</span>
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
            <span>អានលំហាត់ កំណត់ថាគេឲ្យអ្វីខ្លះ និងតម្រូវឲ្យរកអ្វី។</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ពេលដោះស្រាយលំហាត់ សូមព្យាយាមសរសេរអ្វីដែលអ្នកដឹង (តម្លៃដែលបានផ្ដល់) និងអ្វីដែលអ្នកត្រូវរកជាមុនសិន។</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>បំប្លែងខ្នាត ប្រសិនបើលំហាត់មានខ្នាតមិនស៊ីគ្នា (ដូចជា cm, mm, Hz, kHz, ...) ត្រូវបំប្លែងវាទៅជាខ្នាត SI ដូចជា m, s, Hz ជាដើម។</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ជ្រើសរើសរូបមន្ត ប្រើរូបមន្តត្រឹមត្រូវដើម្បីភ្ជាប់ទិន្នន័យដែលគេឲ្យ និងតម្លៃដែលយើងត្រូវរក។</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>គណនា ធ្វើការគណនាយ៉ាងយកចិត្តទុកដាក់។</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>សមីការរលកមានច្រើនទម្រង់ ប៉ុន្តែពួកវាសុទ្ធតែមានលក្ខណៈស្រដៀងគ្នា។ សមីការទូទៅគឺ <InlineMath math={String.raw`y = a \sin(\omega t \pm kx)`} /> ។</span>
          </div>
          <div className="ml-4 space-y-1">
            <div className="font-bold">សញ្ញា (+ ឬ -)៖</div>
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">•</span>
              <span>+ បង្ហាញថារលកធ្វើដំណើរទៅទិសដៅអវិជ្ជមាននៃអ័ក្ស x។</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="text-indigo-600 mt-1">•</span>
              <span>− បង្ហាញថារលកធ្វើដំណើរទៅទិសដៅវិជ្ជមាននៃអ័ក្ស x។</span>
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
      description: "ដំណោះស្រាយលំហាត់រលក",
      problemType: "Solutions to wave exercises",
      problems: [
        <div key="ex1">
          បម្លាស់ទីនៃរលកមួយអោយសមីការ : <InlineMath math={String.raw`y = 0.10 \sin(0.10 x - 0.10 t) \, m`} /> ។ <br />
          គណនាអំព្លីទុតនៃរលក ចំនួនរលក ជំហានរលក ខួបរលក និងល្បឿនដំណាលរលក ។
        </div>,
        <div key="ex2">
          គណនាប្រេកង់ និងល្បឿនដំណាលរលក <br />ដែលសមីការរលកឱ្យដោយ : <InlineMath math={String.raw`y = 0.60 \sin\left[2\pi(\frac{x}{55} - \frac{t}{0.05}\right) \, m`} /> ។
        </div>,
        <div key="ex3">
          រករលកតរមួតនៃរលកពីរ៖ <InlineMath math={String.raw`y_1 = 4.0 \sin(5\pi x - \frac {\pi}{6}) \, \text{cm}`} /> និង <InlineMath math={String.raw`y_2 = 6.0 \sin(5\pi x + 6\pi t) \, \text{cm}`} /> ។
        </div>,
        <div key="ex4">
          រករលកតរមួតនៃលំអោល៖ <InlineMath math={String.raw`y_1 = 7.0 \sin(10\pi t) \, \text{cm}`} /> និង <InlineMath math={String.raw`y_2 = 8.0 \sin\left(10\pi t + \frac{\pi}{2}\right) \, \text{cm}`} /> និង <InlineMath math={String.raw`y_3 = 9.0 \sin\left(10\pi t - \frac{\pi}{2}\right) \, \text{cm}`} /> ។
        </div>,
        <div key="ex5">
          រលកពីរដើរតាមទិសអ្វីផ្ទុយគ្នាកាត់គ្នា និងបង្កើតជារលកជញ្ជ្រុំ។ សមីការរលកពីរគឺ៖ <InlineMath math={String.raw`y_1 = 4.0 \sin(3.0 x - 2.0 t) \, \text{cm}`} /> និង <InlineMath math={String.raw`y_2 = 4.0 \sin(3.0 x + 2.0 t) \, \text{cm}`} /> ។ ក- គណនាបំលាស់ទីអតិបរមារបស់ភាគលិចអតនៅទីតាំង x = 2.3 cm ។ ខ- រកទីតាំងលើក និងទីតាំងថ្នាំងនៃរលកជញ្ជ្រុំ ។
        </div>
      ],
      answers: [
        <div key="a1" className="space-y-2 ml-2">
          <p><b>គណនាអំព្លីទុតនៃរលក ប្រេកង់រលក ជំហានរលក ខួបរលក និងល្បឿនដំណាលរលក</b></p>
          <p>សមីការរលកគឺ៖ <InlineMath math={String.raw`y = 0.10 \sin(0.10 x - 0.10 t) \, m`} /></p>
          <p>យើងបាន៖</p>
          <p><b>អំព្លីទុតនៃរលក </b>៖ <InlineMath math={String.raw`A = 0.10 \, m`} /></p>
          <p><b>ប្រេកង់រលក </b>៖ <InlineMath math={String.raw`f = \frac{\omega}{2\pi} = \frac{0.10}{2\pi} \approx 0.0159 \, \text{Hz}`} /></p>
          <p><b>ជំហានរលក </b>៖ <InlineMath math={String.raw`\lambda = \frac{2\pi}{k} = \frac{2\pi}{0.10} \approx 62.83 \, m`} /></p>
          <p><b>ខួបរលក </b>៖ <InlineMath math={String.raw`T = \frac{1}{f} \approx \frac{1}{0.0159} \approx 62.83 \, s`} /></p>
          <p><b>ល្បឿនដំណាលរលក </b>៖ <InlineMath math={String.raw`v = \frac{\omega}{k} = \frac{0.10}{0.10} = 1 \, m/s`} /></p>
          <p><b>ដូចនេះ</b> អំព្លីទុតគឺ 0.10 m, ប្រេកង់គឺ 0.016 Hz, ជំហានគឺ 62.8 m, ខួបគឺ 62.8 s, និងល្បឿនដំណាលគឺ 1 m/s។</p>
        </div>,
        <div key="a2" className="space-y-2 ml-2">
          <p><b>គណនាប្រេកង់ និងល្បឿនដំណាលរលក</b></p>
          <p>សមីការរលក៖ <InlineMath math={String.raw`y = 0.60\,\sin\!\left(2\pi\,\frac{x}{55} - 2\pi\,\frac{t}{0.05}\right)\,\text{m}`} /></p>
          <p>ប្រៀបធៀបជាមួយសមីការទូទៅ <InlineMath math={String.raw`y = a\,\sin(kx - \omega t)`} /> យើងបាន៖</p>
          <p><InlineMath math={String.raw`a = 0.60\,\text{m}`} /></p>
          <p><InlineMath math={String.raw`k = \dfrac{2\pi}{55}\,\text{rad/m}`} /></p>
          <p><InlineMath math={String.raw`\omega = \dfrac{2\pi}{0.05}\,\text{rad/s} = 40\pi \approx 125.66\,\text{rad/s}`} /></p>
          <p><b>ប្រេកង់</b>៖ <InlineMath math={String.raw`f = \dfrac{\omega}{2\pi} = \dfrac{1}{0.05} = 20\,\text{Hz}`} /></p>
          <p><b>ជំហានរលក</b>៖ <InlineMath math={String.raw`\lambda = \dfrac{2\pi}{k} = 55\,\text{m}`} /></p>
          <p><b>ល្បឿនដំណាល</b>៖ <InlineMath math={String.raw`v = f\lambda = 20\times 55 = 1100\,\text{m/s}`} /></p>
          <p><b>ដូចនេះ</b> ប្រេកង់គឺ 20 Hz និងល្បឿនដំណាលគឺ 1100 m/s។</p>
        </div>,
        <div key="a3" className="space-y-2 ml-2">
          <p><b>រករលកត្រមួតនៃរលកពីរ</b></p>
          <p>ឲ្យ៖ <InlineMath math={String.raw`y_1(t) = 4.0\,\sin\!\left(5\pi t + \dfrac{\pi}{6}\right)\,\text{cm}`} /> និង <InlineMath math={String.raw`y_2(t) = 6.0\,\sin\!\left(5\pi t + \dfrac{\pi}{2}\right)\,\text{cm}`} /></p>
          <p>តាមលោលការណ៍ត្រួតស៊ីគ្នា៖ <InlineMath math={String.raw`y = y_1 + y_2 = a\,\sin(\omega t + \varphi)`} /></p>
          <p><b>+ អំព្លីទុត៖</b></p>
          <div className="mt-4"></div>  <InlineMath math={String.raw`a = \sqrt{a_1^2 + a_2^2 + 2 a_1 a_2 \cos(\varphi_2 - \varphi_1)}`} /> <br />
          <div className="mt-4"></div>  <InlineMath math={String.raw` = \sqrt{4^2 + 6^2 + 2\cdot 4\cdot 6\cos\!\left(\dfrac{\pi}{2} - \dfrac{\pi}{6}\right)}`} /> <br />
          <div className="mt-4"></div>  <InlineMath math={String.raw` = \sqrt{16 + 36 + 48\cos\!\left(\dfrac{\pi}{3}\right)} `} /> <br />
          <div className="mt-4"></div>  <InlineMath math={String.raw` = \sqrt{52 + 24} = \sqrt{76} \approx 8.7\,\text{cm}`} /> <br />
          <div className="mt-4"></div>  <InlineMath math={String.raw` = \sqrt{76} \approx 8.7\,\text{cm}`} /> <br />
          <p><b>+ ផាសដើម៖</b></p>
          <div className="mt-4"></div><InlineMath math={String.raw`\tan\varphi = \dfrac{a_1\sin\varphi_1 + a_2\sin\varphi_2}{a_1\cos\varphi_1 + a_2\cos\varphi_2}`} /> <br />
          <div className="mt-4"></div><InlineMath math={String.raw`\tan\varphi = \dfrac{4\sin\!\left(\dfrac{\pi}{6}\right) + 6\sin\!\left(\dfrac{\pi}{2}\right)}{4\cos\!\left(\dfrac{\pi}{6}\right) + 6\cos\!\left(\dfrac{\pi}{2}\right)} `} />
          <div className="mt-4"></div><InlineMath math={String.raw`\tan\varphi = \dfrac{4\cdot \tfrac{1}{2} + 6\cdot 1}{4\cdot \tfrac{\sqrt{3}}{2} + 6\cdot 0} `} />
          <div className="mt-4"></div><InlineMath math={String.raw`\tan\varphi = \dfrac{2 + 6}{2\sqrt{3}} `} />
          <div className="mt-4"></div><InlineMath math={String.raw`\tan\varphi = \dfrac{8}{3.464} \approx 2.309`} />
          <div className="mt-4"></div><p><InlineMath math={String.raw`\varphi = \tan^{-1}(2.309) \approx 66.5^\circ \approx 1.16\,\text{rad}`} /></p>
          <p><b>ដូចនេះ</b>៖ <InlineMath math={String.raw`y(t) = 8.7\,\sin\!\left(5\pi t + 1.16\right)\,\text{cm}`} /></p>
        </div>,
        <div key="a4" className="space-y-2 ml-2">
          <p><b>រករលកតរមួតនៃលំអោល</b></p>
          <p>តាមលោលការណ៍ត្រួតស៊ីគ្នានៃរលក៖</p>
          <InlineMath math={String.raw`y = y_1 + y_2 + y_3 = a \sin(10\pi t + \varphi)`} />
          <p><b>+ អំព្លីទុត</b>:</p>
          <div className="mt-4"></div><InlineMath math={String.raw`a = \sqrt{a_x^2 + a_y^2}`} />
          <div className="mt-4"></div><InlineMath math={String.raw`a_x = a_1 \cos\varphi_1 + a_2 \cos\varphi_2 + a_3 \cos\varphi_3`} />
          <div className="mt-4"></div><InlineMath math={String.raw`a_y = a_1 \sin\varphi_1 + a_2 \sin\varphi_2 + a_3 \sin\varphi_3`} />
          <div className="mt-4"></div><InlineMath math={String.raw`a_x = 7\cos 0^\circ + 8\cos 90^\circ + 9\cos (- \frac {\pi}{2}) = 7 + 0 + 0 = 7`} />
          <div className="mt-4"></div><InlineMath math={String.raw`a_y = 7\sin 0^\circ + 8\sin 90^\circ + 9\sin (- \frac {\pi}{2}) = 0 + 8 - 9 = -1`} />
          <div className="mt-4"></div><InlineMath math={String.raw`a = \sqrt{7^2 + (-1)^2} = \sqrt{50} \approx 7.07\,\text{cm}`} />
          <p><b>+ ផាសដើម</b>:</p>
          <div className="mt-2"></div><InlineMath math={String.raw`\tan\varphi = \dfrac{a_y}{a_x} = \dfrac{-1}{7} \approx -0.1429`} />
          <div className="mt-4"></div><InlineMath math={String.raw`\varphi = \tan^{-1}(-0.1429) \approx -8.13^\circ \approx -0.142\,\text{rad}`} /> <br />
          <p><b>ដូចនេះ</b>៖ <InlineMath math={String.raw`y(t) = 7.07\,\sin\!\left(10\pi t - 0.142\right)\,\text{cm}`} /></p>
        </div>,
        <div key="a5" className="space-y-2 ml-2">
          <p>គណនាបមាលស់ទីអតិបរមារបស់ភាគលិអតលៅទីតាងំ x = 2.3cm</p>
          <InlineMath math={String.raw`\begin{cases} y_1 = 4.0 \sin(3.0 x - 2.0 t) \, \text{cm} \\ y_2 = 4.0 \sin(3.0 x + 2.0 t) \, \text{cm} \end{cases}`} />
          <p>ដោយ :<InlineMath math={String.raw`y = y_1 + y_2 = 4.0 \sin(3.0 x - 2.0 t) + 4.0 \sin(3.0 x + 2.0 t)`} /></p>
          <p>តាមរូបមន្ត៖<div className="mt-4"></div><InlineMath math={String.raw`\sin p + \sin q = 2 \sin\left(\frac{p+q}{2}\right) \cos\left(\frac{p-q}{2}\right)`} /></p>
          <p>គេបាន៖</p><div className="mt-4"></div><InlineMath math={String.raw`y = 4.0 \left[ 2 \sin\left(\frac{3.0 x - 2.0 t + 3.0 x + 2.0 t}{2}\right) \cos\left(\frac{3.0 x - 2.0 t - (3.0 x + 2.0 t)}{2}\right) \right]`} />
          <div className="mt-2"></div><InlineMath math={String.raw`y = 8.0 \sin(3.0 x) \cos(2.0 t)`} />
          <p>សមីការមានរាង<div className="mt-2"></div><InlineMath math={String.raw`y = y_m a \cos(\omega t) `} />​</p>
          <p>គេទាញបាន​ : <InlineMath math={String.raw`y_m = 8.0 \sin(3.0 x)`} /></p>
          ដោយ៖​  <InlineMath math={String.raw`x = 2.3 \, \text{cm}`} />
          <p>យើងបាន :​​ <InlineMath math={String.raw`y_m = 8.0 \sin(3.0 \times 2.3) = 8.0 \sin(6.9)`} /></p>
          <p>ដូចនេះ​ : <InlineMath math={String.raw`y_m = 4.6 \, \text{cm}`} /></p>
          <p><b>ខ- គណនាទីតាំងលើក និងទីតាំងថ្នាំងនៃរលកជញ្ជ្រុំ</b></p>
          <p>ទីតាំងពោះ : <InlineMath math={String.raw`x = \frac{n\lambda}{4}`} /></p>
          ដោយ៖​  <InlineMath math={String.raw`k = 3.0 \, \text{rad/cm} `} /> <br />
          <InlineMath math={String.raw`\quad \lambda = \frac{2\pi}{k} = \frac{2\pi}{3.0} = \frac{2\pi}{3} \, \text{cm}`} />
          <p>យើងបាន :  <InlineMath math={String.raw`x = \frac{n \times 2\pi/3}{4} = \frac{n \pi}{6} \, \text{cm}`} /></p>
          <p>ដូចនេះ​ : <InlineMath math={String.raw`x = \frac{n \pi}{6} \, \text{cm}`} />  ដែល n ជាចំនួនគត់សេស (n = 1,3,5,7,.....) </p>
          <p>ទីតាំងថ្នាំង : <InlineMath math={String.raw`x = \frac{n\lambda}{2}`} /></p>
          <p>យើងបាន : <InlineMath math={String.raw`x = \frac{n \times 2\pi/3}{2} = \frac{n \pi}{3} \, \text{cm}`} /></p>
          <p>ដូចនេះ : <InlineMath math={String.raw`x = \frac{n \pi}{3} \, \text{cm} `} /> ដែល n ជាចំនួនគត់ (n = 0,1,2,3,.....)</p>
        </div>,
      ],
    }
  ];
  return (
    <div>
      <SummaryBox
        title="រូបមន្តគន្លឹះ និងវិធីដោះស្រាយលំហាត់"
        sections={summary}
      />
      <TopicPracticeBox exercises={practiceExercises} />
    </div>
  )
}

export default WavesPractice
