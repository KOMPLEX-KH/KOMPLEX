import TopicPracticeBox from "../../../common/box/TopicPracticeBox";
import { BlockMath, InlineMath } from "react-katex";
import SummaryBox from "../../../common/box/SummaryBox";
import { AlertTriangleIcon, BookAIcon, ChartBarIcon, LightbulbIcon, WrenchIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/docs/topic";

const ComplexPractice = () => {

  const summary: SummarySection[] = [
    {
      key: "formulas",
      title: "រូបមន្តសំខាន់ៗ",
      icon: BookAIcon,
      content: (
        <div className="space-y-2">
          <div className="flex items-center gap-2 justify-start">
            <span className="text-indigo-600">•</span>
            <span>ទម្រង់ទូទៅ៖</span>
            <InlineMath math="z = a + bi" />
          </div>
          <div className="flex items-center gap-2 justify-start">
            <span className="text-indigo-600">•</span>
            <span>កុំផ្លិចឆ្លាស់៖</span>
            <InlineMath math="\bar{z} = a - bi" />
          </div>
          <div className="flex items-center gap-2 justify-start">
            <span className="text-indigo-600">•</span>
            <span>ម៉ូឌុល៖</span>
            <InlineMath math="|z| = \sqrt{a^2 + b^2}" />
          </div>
          <div className="flex items-center gap-2 justify-start">
            <span className="text-indigo-600">•</span>
            <span>អាគុយម៉ង់៖</span>
            <InlineMath math="\theta = \tan^{-1}\left(\frac{b}{a}\right)" />
          </div>
          <div className="flex items-center gap-2 justify-start">
            <span className="text-indigo-600">•</span>
            <span>ទម្រង់ត្រីកោណមាត្រ៖</span>
            <InlineMath math="z = r(\cos\theta + i\sin\theta)" />
          </div>
        </div>
      )
    },
    {
      key: "operations",
      title: "ប្រមាណវិធីសំខាន់ៗ",
      icon: WrenchIcon,
      content: (
        <div className="space-y-3">
          <div className="flex items-start gap-2 justify-start">
            <span className="text-indigo-600 mt-1">1.</span>
            <div>
              <span className="font-medium">បូក និង ដក៖</span>
              <div className="mt-1">
                <InlineMath math="(a + bi) \pm (c + di) = (a \pm c) + (b \pm d)i" />
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2 justify-start">
            <span className="text-indigo-600 mt-1">2.</span>
            <div>
              <span className="font-medium">គុណ៖</span>
              <div className="mt-1">
                <InlineMath math="(a + bi)(c + di) = (ac - bd) + (ad + bc)i" />
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2 justify-start">
            <span className="text-indigo-600 mt-1">3.</span>
            <div>
              <span className="font-medium">ចែក៖</span>
              <div className="mt-1 text-lg">
                <InlineMath math="\frac{a + bi}{c + di} = \frac{(ac + bd) + (bc - ad)i}{c^2 + d^2}" />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      key: "trigonometric",
      title: "ទម្រង់ត្រីកោណមាត្រ",
      icon: ChartBarIcon,
      content: (
        <div className="space-y-2">
          <div className="flex items-start gap-2 justify-start">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span>គុណ៖</span>
              <div className="mt-1">
                <InlineMath math="z_1z_2 = r_1r_2[\cos(\theta_1 + \theta_2) + i\sin(\theta_1 + \theta_2)]" />
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2 justify-start">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span>ចែក៖</span>
              <div className="mt-1">
                <InlineMath math="\frac{z_1}{z_2} = \frac{r_1}{r_2}[\cos(\theta_1 - \theta_2) + i\sin(\theta_1 - \theta_2)]" />
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2 justify-start">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span>ស្វ័យគុណ (រូបមន្តដឺម័រ)៖</span>
              <div className="mt-1">
                <InlineMath math="z^n = r^n[\cos(n\theta) + i\sin(n\theta)]" />
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2 justify-start">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span>ឫសទី n៖</span>
              <div className="mt-1">
                <InlineMath math="z_k = \sqrt[n]{r}[\cos(\frac{\theta + 2k\pi}{n}) + i\sin(\frac{\theta + 2k\pi}{n})]" />
              </div>
            </div>
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
          <div className="flex items-start gap-2 justify-start">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ចងចាំថា i² = -1</span>
          </div>
          <div className="flex items-start gap-2 justify-start">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ករណីមុំពិសេសគួរប្រើវិធីងាយៗ</span>
          </div>
          <div className="flex items-start gap-2 justify-start">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ពិនិត្យមើលមុំក្នុងករណីទម្រង់ត្រីកោណមាត្រ (0 ≤ θ &lt; 2π)</span>
          </div>
          <div className="flex items-start gap-2 justify-start">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ប្រើប្រាស់ទម្រង់ត្រីកោណមាត្រសម្រាប់គុណ ចែក និងស្វ័យគុណរួចចាំបម្លែងទៅទម្រង់ពិជគណិតវិញ</span>
          </div>
        </div>
      )
    },
    {
      key: "common-errors",
      title: "កំហុសទូទៅ",
      icon: AlertTriangleIcon,
      content: (
        <div className="space-y-2">
          <div className="flex items-start gap-2 justify-start">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ភ្លេចគុណផ្នែកនិមិត្តជាមួយ i ពេលធ្វើប្រមាណវិធី</span>
          </div>
          <div className="flex items-start gap-2 justify-start">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ច្រឡំសញ្ញានៅក្នុងការធ្វើកុំផ្លិចឆ្លាស់</span>
          </div>
          <div className="flex items-start gap-2 justify-start">
            <span className="text-indigo-600 mt-1">•</span>
            <span>មិនពិនិត្យមើលតម្លៃមុំឲ្យត្រឹមត្រូវ</span>
          </div>
          <div className="flex items-start gap-2 justify-start">
            <div className="text-indigo-600 mt-1">•</div>
            <div>ភ្លេចបំលែងទៅទម្រង់ត្រីកោណមាត្រដើម</div>
          </div>
        </div>
      )
    }
  ];

  const practiceExercises: PracticeExercise[] = [
    {
      id: "ex1",
      title: "លំហាត់អនុវត្តទី ១",
      description: "ប្រមាណវិធីបូក ដក និងកុំផ្លិចឆ្លាស់៖",
      problemType: "Basic Operations and Conjugates",
      problems: [
        <div key="p1" className="flex flex-col text-base items-start gap-2">
          <div className="flex flex-row gap-2">
            <span>គេមាន</span>
            <InlineMath math="z_1 = 3 + 4i" />
            <span>និង</span>
            <InlineMath math="z_2 = 2 - 3i" />
          </div>
          <div className="flex flex-row gap-2">
            <span>គណនា</span>
            <InlineMath math="z_1 + z_2" />
            &
            <InlineMath math="z_1 - z_2" />
          </div>

        </div>,
        <div key="p2" className="flex items-center gap-4">
          <span>រក</span>
          <InlineMath math="\bar{z}" />
          <span>បើ</span>
          <InlineMath math="z = 5 - 7i" />
        </div>,
        <div key="p3" className="flex flex-col text-lg items-start gap-2">
          <div className="flex flex-row gap-2">
            <span>គេមាន</span>
            <InlineMath math="z = 2 + 3i" />
          </div>
          <div className="flex flex-row gap-2">
            <span>គណនា</span>
            <InlineMath math="z + \bar{z}" />
            &
            <InlineMath math="z \cdot \bar{z}" />
          </div>
        </div>,
        <div key="p4" className="flex flex-row text-base items-start gap-2">
          <span>ដោះស្រាយ</span>
          <InlineMath math="(1 + 2i) + (3 - i) - (2 + 4i)" />
        </div>,
      ],
      answers: [
        <div key="a1" className="space-y-2">
          <div className="flex items-center gap-2">
            <p>យើងមានកុំផ្លិចពីរ៖</p>
            <div><InlineMath math="z_1 = 3 + 4i" /></div>
            <div><InlineMath math="z_2 = 2 - 3i" /></div>
          </div>
          <div className="flex  gap-2">
            <p>ការបូក៖</p>
            <div>
              <div className="text-sm"><InlineMath math="z_1 + z_2 = (3 + 2) + (4 + (-3))i " /></div>
              <div className="text-sm ml-13.5"><InlineMath math="= 5 + i" /></div>
            </div>
          </div>
          <div className="flex  gap-2">
            <p>ការដក៖</p>
            <div>
              <div className="text-sm"><InlineMath math="z_1 - z_2 = (3 - 2) + (4 - (-3))i " /></div>
              <div className="text-sm ml-13.5"><InlineMath math="= 1 + 7i" /></div>
            </div>
          </div>
          <p><strong>ចម្លើយ៖</strong> z₁ + z₂ = 5 + i និង z₁ - z₂ = 1 + 7i</p>
        </div>,
        <div key="a2" className="space-y-2">
          <div className="flex items-center gap-2">
            <p>យើងមានកុំផ្លិច៖</p>
            <InlineMath math="z = 5 - 7i" />
          </div>
          <div className="flex items-center gap-2">
            <p>កុំផ្លិចឆ្លាស់ z̄ គឺ៖</p>
            <InlineMath math="\bar{z} = 5 - (-7)i = 5 + 7i" />
          </div>
          <p><strong>ចម្លើយ៖</strong> z̄ = 5 + 7i</p>
        </div>,
        <div key="a3" className="space-y-2">
          <div className="flex items-center gap-2">
            <p>យើងមានកុំផ្លិច៖</p>
            <InlineMath math="z = 2 + 3i \implies \bar{z} = 2 - 3i" />
          </div>
          <div className="flex items-center gap-2">
            <p>ការបូក៖</p>
            <InlineMath math="z + \bar{z} = (2 + 3i) + (2 - 3i) = 4" />
          </div>
          <div className="flex justify-start gap-2">
            <p>គុណ៖</p>
            <div>
              <div className="text-sm"><InlineMath math="z \cdot \bar{z} = (2 + 3i)(2 - 3i) = 4 - 9i^2 " /></div>
              <div className="text-sm ml-9"><InlineMath math="= 4 + 9 = 13" /></div>
            </div>
          </div>
          <p><strong>ចម្លើយ៖</strong> z + z̄ = 4 និង z · z̄ = 13</p>
        </div>,
        <div key="a4" className="space-y-2">
          <p>យើងដោះស្រាយជាលំដាប់៖</p>
          <div className="flex flex-col items-start gap-2">
            <div><InlineMath math="(1 + 2i) + (3 - i) - (2 + 4i)" /></div>
          </div>
          <div className="flex flex-col  gap-2">
            <p>រៀបផ្នែកពិតជាមួយផ្នែកពិត និងផ្នែកនិមិត្តជាមួយផ្នែកនិមិត្ត៖</p>
            <div className='flex flex-rowb gap-2'>
              <div className="text-sm"><InlineMath math="= (1 + 3 - 2) + (2 - 1 - 4)i " /></div>
              <div className="text-sm"><InlineMath math="= 2 - 3i" /></div>
            </div>
          </div>
          <p><strong>ចម្លើយ៖</strong> 2 - 3i</p>
        </div>
      ]
    },
    {
      id: "ex2",
      title: "លំហាត់អនុវត្តទី ២",
      description: "ប្រមាណវិធីគុណ និងចែកកុំផ្លិច៖",
      problemType: "Multiplication and Division",
      problems: [
        <div key="p1" className="flex items-center gap-4">
          <span>គុណ</span>
          <InlineMath math="(3 + 4i)(2 - i)" />
        </div>,
        <div key="p2" className="flex items-center gap-4">
          <span>ចែក</span>
          <InlineMath math="\frac{6 + 8i}{2 + i}" />
        </div>,
        <div key="p3" className="flex items-center gap-4">
          <span>គណនា</span>
          <InlineMath math="(1 + i)^2" />
        </div>,
        <div key="p4" className="flex items-center gap-4">
          <span>គណនា</span>
          <InlineMath math="\frac{3 - 4i}{1 + 2i}" />
        </div>,
        <div key="p5" className="flex items-center gap-4">
          <span>គណនា</span>
          <InlineMath math="i^{10}" />
        </div>,
      ],
      answers: [
        <div key="a1" className="space-y-2">
          <p>យើងគុណដោយពន្លាតកន្សោម៖</p>
          <div className="flex items-center gap-2">
            <InlineMath math="(3 + 4i)(2 - i) = (3\cdot2) +   3 \cdot (-i) + (2\cdot4i)+ 4i \cdot (-i)" />
          </div>
          <div className="flex items-center gap-2">
            <InlineMath math="= 6 - 3i + 8i - 4i^2" />
          </div>
          <div className="flex items-center gap-2">
            <InlineMath math="= 6 + 5i - 4(-1) = 6 + 5i + 4 = 10 + 5i" />
          </div>
          <p><strong>ចម្លើយ៖</strong> 10 + 5i</p>
        </div>,
        <div key="a2" className="space-y-2">
          <p>យើងគុណទាំងលេខករ និងភាគបែងដោយកុំផ្លិចឆ្លាស់នៃភាគបែង៖</p>
          <InlineMath math="\frac{6 + 8i}{2 + i} = \frac{(6 + 8i)(2 - i)}{(2 + i)(2 - i)}" />
          <InlineMath math="= \frac{12 - 6i + 16i - 8i^2}{4 - i^2} = \frac{12 + 10i + 8}{4 + 1} = \frac{20 + 10i}{5}" />
          <InlineMath math="= 4 + 2i" />
          <p><strong>ចម្លើយ៖</strong> 4 + 2i</p>
        </div>,
        <div key="a3" className="space-y-2">
          <p>យើងគុណ (1 + i) ដោយខ្លួនវា៖</p>
          <InlineMath math="(1 + i)^2 = (1 + i)(1 + i) = 1 + i + i + i^2" />
          <InlineMath math="= 1 + 2i + (-1) = 2i" />
          <p><strong>ចម្លើយ៖</strong> 2i</p>
        </div>,
        <div key="a4" className="space-y-2">
          <p>យើងគុណទាំងលេខករ និងភាគបែងដោយកុំផ្លិចឆ្លាស់នៃភាគបែង៖</p>
          <InlineMath math="\frac{3 - 4i}{1 + 2i} = \frac{(3 - 4i)(1 - 2i)}{(1 + 2i)(1 - 2i)}" />
          <InlineMath math="= \frac{3 - 6i - 4i + 8i^2}{1 - 4i^2} = \frac{3 - 10i - 8}{1 + 4} = \frac{-5 - 10i}{5}" />
          <InlineMath math="= -1 - 2i" />
          <p><strong>ចម្លើយ៖</strong> -1 - 2i</p>
        </div>,
        <div key="a5" className="space-y-2">
          <p>យើងប្រើលក្ខណៈសម្បត្តិនៃ i៖</p>
          <InlineMath math="i^1 = i, i^2 = -1, i^3 = -i, i^4 = 1" />
          <p>ដូចនេះលំនាំគឺកើតឡើងវិញរៀងរាល់ 4:</p>
          <InlineMath math="i^{10} = i^{4 \cdot 2 + 2} = (i^4)^2 \cdot i^2 = 1^2 \cdot (-1) = -1" />
          <p><strong>ចម្លើយ៖</strong> -1</p>
        </div>
      ]
    },
    {
      id: "ex3",
      title: "លំហាត់អនុវត្តទី ៣",
      description: "ម៉ូឌុល និងអាគុយម៉ង់៖",
      problemType: "Modulus and Argument",
      problems: [
        <div key="p1" className="flex items-center gap-4">
          <span>រកម៉ូឌុលនៃ</span>
          <InlineMath math="z = 3 + 4i" />
        </div>,
        <div key="p2" className="flex items-center gap-4">
          <span>រកអាគុយម៉ង់នៃ</span>
          <InlineMath math="z = 1 + i" />
        </div>,
        <div key="p3" className="flex items-center gap-4">
          <span>រកម៉ូឌុលនៃ</span>
          <InlineMath math="z = -2 + 2i\sqrt{3}" />
        </div>,
        <div key="p4" className="flex items-center gap-4">
          <span>រកអាគុយម៉ង់នៃ</span>
          <InlineMath math="z = -1 - i" />
        </div>,
      ],
      answers: [
        <div key="a1" className="space-y-2">
          <p>យើងប្រើរូបមន្តម៉ូឌុល៖</p>
          <InlineMath math="|z| = \sqrt{a^2 + b^2}" />
          <p>សម្រាប់ z = 3 + 4i គេមាន a = 3, b = 4:</p>
          <InlineMath math="|z| = \sqrt{3^2 + 4^2} = \sqrt{9 + 16} = \sqrt{25} = 5" />
          <p><strong>ចម្លើយ៖</strong> |z| = 5</p>
        </div>,
        <div key="a2" className="space-y-2">
          <p>យើងប្រើរូបមន្តអាគុយម៉ង់៖</p>
          <InlineMath math="\theta = \tan^{-1}\left(\frac{b}{a}\right)" />
          <p>សម្រាប់ z = 1 + i គេមាន a = 1, b = 1:</p>
          <InlineMath math="\theta = \tan^{-1}\left(\frac{1}{1}\right) = \tan^{-1}(1) = \frac{\pi}{4}" />
          <p>ដោយសារ z នៅក្នុងកាត្រាន់ទី 1</p>
          <p><strong>ចម្លើយ៖</strong> θ = π/4</p>
        </div>,
        <div key="a3" className="space-y-2">
          <p>យើងប្រើរូបមន្តម៉ូឌុល៖</p>
          <InlineMath math="|z| = \sqrt{a^2 + b^2}" />
          <p>សម្រាប់ z = -2 + 2i√3 គេមាន a = -2, b = 2√3:</p>
          <InlineMath math="|z| = \sqrt{(-2)^2 + (2\sqrt{3})^2} = \sqrt{4 + 12} = \sqrt{16} = 4" />
          <p><strong>ចម្លើយ៖</strong> |z| = 4</p>
        </div>,
        <div key="a4" className="space-y-2">
          <p>សម្រាប់ z = -1 - i គេមាន a = -1, b = -1:</p>
          <p>ដោយសារ z នៅក្នុងកាត្រាន់ទី 3:</p>
          <InlineMath math="\theta = \pi + \tan^{-1}\left(\frac{-1}{-1}\right) = \pi + \tan^{-1}(1) = \pi + \frac{\pi}{4} = \frac{5\pi}{4}" />
          <p><strong>ចម្លើយ៖</strong> θ = 5π/4</p>
        </div>
      ]
    },
    {
      id: "ex4",
      title: "លំហាត់អនុវត្តទី ៤",
      description: "ទម្រង់ត្រីកោណមាត្រ និងរូបមន្តដឺម័រ៖",
      problemType: "Trigonometric Form and De Moivre's Formula",
      problems: [
        <div key="p1" className="flex flex-row items-center gap-2">
          <span>សរសេរ</span>
          <div><InlineMath math="z = 1 + i" /></div>
          <div><span>ជាទម្រង់ត្រីកោណមាត្រ</span></div>
        </div>,
        <div key="p2" className="flex items-center gap-4">
          <span>គណនា</span>
          <InlineMath math="(1 + i)^8" />
          <span>ដោយប្រើរូបមន្តដឺម័រ</span>
        </div>,
        <div key="p3" className="flex items-center gap-4">
          <span>រកឫសទី 3 នៃ</span>
          <InlineMath math="z = 8" />
        </div>,
        <div key="p4" className="flex items-center gap-4">
          <span>គណនា</span>
          <InlineMath math="(2(\cos\frac{\pi}{6} + i\sin\frac{\pi}{6}))^3" />
        </div>,
      ],
      answers: [
        <div key="a1" className="space-y-2">
          <p>សម្រាប់ z = 1 + i:</p>
          <p>រកម៉ូឌុល៖</p>
          <InlineMath math="r = |z| = \sqrt{1^2 + 1^2} = \sqrt{2}" />
          <p>រកអាគុយម៉ង់៖</p>
          <InlineMath math="\theta = \tan^{-1}\left(\frac{1}{1}\right) = \frac{\pi}{4}" />
          <p>ដូចនេះទម្រង់ត្រីកោណមាត្រគឺ៖</p>
          <InlineMath math="z = \sqrt{2}\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right)" />
        </div>,
        <div key="a2" className="space-y-2">
          <p>ពីលំហាត់មុន z = 1 + i មានទម្រង់ត្រីកោណមាត្រ៖</p>
          <InlineMath math="z = \sqrt{2}\left(\cos\frac{\pi}{4} + i\sin\frac{\pi}{4}\right)" />
          <p>ដោយប្រើរូបមន្តដឺម័រ៖</p>
          <InlineMath math="z^8 = (\sqrt{2})^8\left(\cos\frac{8\pi}{4} + i\sin\frac{8\pi}{4}\right)" />
          <InlineMath math="= 2^4(\cos 2\pi + i\sin 2\pi) = 16(1 + 0i) = 16" />
          <p><strong>ចម្លើយ៖</strong> (1 + i)⁸ = 16</p>
        </div>,
        <div key="a3" className="space-y-2">
          <p>សម្រាប់ z = 8, យើងសរសេរជាទម្រង់ត្រីកោណមាត្រ៖</p>
          <InlineMath math="8 = 8(\cos 0 + i\sin 0)" />
          <p>ឫសទី 3 គឺ៖</p>
          <InlineMath math="z_k = \sqrt[3]{8}\left(\cos\frac{0 + 2k\pi}{3} + i\sin\frac{0 + 2k\pi}{3}\right)" />
          <p>សម្រាប់ k = 0, 1, 2:</p>
          <InlineMath math="z_0 = 2(\cos 0 + i\sin 0) = 2" />
          <InlineMath math="z_1 = 2\left(\cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}\right) = 2\left(-\frac{1}{2} + i\frac{\sqrt{3}}{2}\right) = -1 + i\sqrt{3}" />
          <InlineMath math="z_2 = 2\left(\cos\frac{4\pi}{3} + i\sin\frac{4\pi}{3}\right) = 2\left(-\frac{1}{2} - i\frac{\sqrt{3}}{2}\right) = -1 - i\sqrt{3}" />
        </div>,
        <div key="a4" className="space-y-2">
          <p>ដោយប្រើរូបមន្តដឺម័រ៖</p>
          <InlineMath math="\left(2\left(\cos\frac{\pi}{6} + i\sin\frac{\pi}{6}\right)\right)^3 = 2^3\left(\cos\frac{3\pi}{6} + i\sin\frac{3\pi}{6}\right)" />
          <InlineMath math="= 8\left(\cos\frac{\pi}{2} + i\sin\frac{\pi}{2}\right) = 8(0 + i \cdot 1) = 8i" />
          <p><strong>ចម្លើយ៖</strong> 8i</p>
        </div>
      ]
    }
  ];

  return (
    <>
      <SummaryBox
        title="រូបមន្តគន្លឹះ និងវិធីដោះស្រាយចំនួនកុំផ្លិច"
        sections={summary}
      />
      <TopicPracticeBox exercises={practiceExercises} />
    </>
  );
}

export default ComplexPractice
