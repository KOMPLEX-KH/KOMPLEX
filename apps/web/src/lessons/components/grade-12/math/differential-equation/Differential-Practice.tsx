import TopicPracticeBox from "@/components/pages/docs/boxes/TopicPracticeBox";
import { BlockMath, InlineMath } from "react-katex";

import HintBox from "@/components/pages/docs/boxes/HintBox";
import SummaryBox from "@/components/pages/docs/boxes/SummaryBox";
import { AlertTriangleIcon, BookAIcon, ChartBarIcon, LightbulbIcon, WrenchIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/docs/topic";

const DifferentialPractice = () => {

  const summary: SummarySection[] = [
    {
      key: "formulas",
      title: "រូបមន្តសំខាន់ៗ",
      icon: BookAIcon,
      content: (
        <div className="space-y-2">
          <div className="flex items-start sm:items-center gap-2">
            <span className="text-indigo-600">•</span>
            <div className="flex items-center gap-2 flex-wrap">
              <span>សមីការលីនេអែអូម៉ូសែនលំដាប់ទី២៖</span>
              <InlineMath math="ay'' + by' + cy = 0" />
            </div>
          </div>
          <div className="flex items-start sm:items-center gap-2">
            <span className="text-indigo-600">•</span>
            <div className="flex items-center gap-2 flex-wrap">
              <span>សមីការសម្គាល់៖</span>
              <InlineMath math="ar^2 + br + c = 0" />
            </div>

          </div>
          <div className="flex items-start sm:items-center gap-2">
            <span className="text-indigo-600">•</span>
            <div className="flex items-center gap-2 flex-wrap">
              <span>សមីការមិនអូម៉ូសែន៖</span>
              <InlineMath math="ay'' + by' + cy = f(x)" />
            </div>

          </div>
        </div>
      )
    },
    {
      key: "methods",
      title: "វិធីដោះស្រាយ",
      icon: WrenchIcon,
      content: (
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">1.</span>
            <div>
              <span className="font-medium">រកចម្លើយទូទៅ y_c នៃសមីការអូម៉ូសែន</span>
              <div className="mt-1">
                <InlineMath math="ay'' + by' + cy = 0" />
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">2.</span>
            <div>
              <span className="font-medium">រកចម្លើយពិសេស y_p នៃសមីការមិនអូម៉ូសែន</span>
              <div className="mt-1">
                <InlineMath math="ay'' + by' + cy = f(x)" />
              </div>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">3.</span>
            <div>
              <span className="font-medium">ចម្លើយទូទៅ៖</span>
              <InlineMath math="y = y_c + y_p" />
            </div>
          </div>
        </div>
      )
    },
    {
      key: "characteristic",
      title: "ចម្លើយសមីការសម្គាល់",
      icon: ChartBarIcon,
      content: (
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span>ឫសខុសគ្នា r₁, r₂៖</span>
              <InlineMath math="y = c_1e^{r_1x} + c_2e^{r_2x}" />
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span>ឫសស្មើគ្នា r₁ = r₂៖</span>
              <InlineMath math="y = (c_1 + c_2x)e^{r_1x}" />
            </div>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span>ឫសស្មុគស្មាញ α ± βi៖</span>
              <InlineMath math="y = e^{αx}(c_1\cos(βx) + c_2\sin(βx))" />
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
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ព្យាយាមដោះស្រាយលំហាត់ដោយខ្លួនឯងមុនពេលមើលចម្លើយ</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ចងចាំរូបមន្តសមីការសម្គាល់ និងទម្រង់ចម្លើយទូទៅ</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ពិនិត្យមើលលក្ខខណ្ឌដំបូង (បើមាន) ដើម្បីរកចំនួនថេរ</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ប្រើប្រាស់វិធីបម្រែបម្រួលចំនួនថេរ ឬវិធីមេគុណដែលមិនកំណត់</span>
          </div>
        </div>
      )
    },
    {
      key: "common-errors",
      title: "កំហុសធម្មតា",
      icon: AlertTriangleIcon,
      content: (
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ភ្លេចបញ្ចូលចំនួនថេរ c₁, c₂ ក្នុងចម្លើយទូទៅ</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>ច្រឡំរវាងឫសខុសគ្នា និងឫសស្មីគ្នា</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span>មិនពិនិត្យមើលថាចម្លើយពិសេស y_p ត្រូវគ្នានឹង f(x) ឬទេ</span>
          </div>
        </div>
      )
    }
  ];

  const practiceExercises: PracticeExercise[] = [
    {
      id: "ex1",
      title: "លំហាត់អនុវត្តទី ១",
      description: "លំហាត់អនុវត្តទី ១",
      problemType: "First Exercise",
      problems: [
        <BlockMath key="p1" math={"y'' + 4y' - 5y = 0"} />,
        <BlockMath key="p2" math={"y'' - 2y' + y = 0"} />,
        <BlockMath key="p3" math={"y'' + 9y = 0"} />,
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start">
          <p>យើងមានសមីការឌីផេរ៉ង់ស្យែលលីនេអែអូម៉ូសែនលំដាប់ទី២៖</p>

          <BlockMath math="y'' + 4y' - 5y = 0" />
          <div className="flex items-center gap-3 flex-wrap">
            <p>សមីការសម្គាល់គឺ៖</p>
            <BlockMath math="r^2 + 4r - 5 = 0" />
          </div>
          <BlockMath math="(r + 5)(r - 1) = 0" />
          <BlockMath math="\implies r_1 = -5, r_2 = 1" />
          <div className="flex items-center gap-3 flex-wrap">
            <p>ដូចនេះចម្លើយទូទៅគឺ៖</p>
            <BlockMath math="y = c_1 e^x + c_2 e^{-5x}" />
          </div>

        </div>,
        <div key="a2" className="flex flex-col items-start">
          <p>យើងមានសមីការឌីផេរ៉ង់ស្យែលលីនេអែអូម៉ូសែនលំដាប់ទី២៖</p>
          <BlockMath math="y'' - 2y' + y = 0" />
          <div className="flex items-center gap-3 flex-wrap">
            <p>សមីការសម្គាល់គឺ៖</p>
            <BlockMath math="r^2 - 2r + 1 = 0" />
          </div>
          <BlockMath math="(r - 1)^2 = 0 \implies r = 1 \text{ (ឫសឌុប)}" />
          <div className="flex items-center gap-3 flex-wrap">
            <p>ដូចនេះចម្លើយទូទៅគឺ៖</p>
            <BlockMath math="y = (c_1 + c_2 x) e^x" />
          </div>

        </div>,
        <div key="a3" className="flex flex-col items-start">
          <div className="flex items-ceter flex-wrap gap-2">
            <p>យើងមានសមីការឌីផេរ៉ង់ស្យែល</p>
            <p>លីនេអែអូម៉ូសែនលំដាប់ទី២៖</p>
          </div>
          <BlockMath math="y'' + 9y = 0" />
          <div className="flex items-center gap-3 flex-wrap">
            <p>សមីការសម្គាល់គឺ៖</p>
            <BlockMath math="r^2 + 9 = 0" />
          </div>
          <BlockMath math="r = \pm 3i" />
          <div className="flex items-center gap-3 flex-wrap">
            <p>ដូចនេះចម្លើយទូទៅគឺ៖</p>
            <BlockMath math="y = c_1 \cos(3x) + c_2 \sin(3x)" />
          </div>

        </div>,
      ]
    },
    {
      id: "ex2",
      title: "លំហាត់អនុវត្តទី ២",
      description: "លំហាត់អនុវត្តទី ២",
      problemType: "Second Exercise",
      problems: [
        <BlockMath key="p1" math={"y' + y = 1"} />,
        <BlockMath key="p2" math={"y' - 2y = 3\\cos(2x)"} />,
        <BlockMath key="p4" math={"y' + y = \\sin(x) - 2\\cos(x)"} />,
        <BlockMath key="p5" math={"y' + y = \\frac{1}{1 + e^{2x}}"} />,
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start space-y-2">
          <p>យើងមានសមីការឌីផេរ៉ង់ស្យែលលីនេអែមិនអូម៉ូសែនលំដាប់ទី១៖</p>
          <BlockMath math="y' + y = 1" />
          <div className="flex items-center gap-2 flex-wrap">
            <p>ដោះស្រាយសមីការអូម៉ូសែនសិន៖</p>
            <BlockMath math="y' + y = 0 \implies y_c = c e^{-x}" />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <p>ចម្លើយពិសេស៖</p>
            <BlockMath math="y_p = 1" />
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <p>ដូចនេះចម្លើយទូទៅគឺ៖</p>
            <BlockMath math="y = y_c + y_p = 1 + c e^{-x}" />
          </div>

        </div>,
        <div key="a2" className="flex flex-col items-start">
          <p>យើងមានសមីការឌីផេរ៉ង់ស្យែលលីនេអែមិនអូម៉ូសែនលំដាប់ទី១៖</p>
          <BlockMath math="y' - 2y = 3 cos(2x)" />
          <div className="flex flex-wrap items-center gap-3">
            <p>ដោះស្រាយសមីការអូម៉ូសែនសិន៖</p>
            <BlockMath math="y' - 2y = 0 \implies y_c = c e^{2x}" />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <p>ចម្លើយពិសេស៖</p>
            <BlockMath math="y_p = Acos(2x) + Bsin(2x)" />
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <p>ដូចនេះចម្លើយទូទៅគឺ៖</p>
            <BlockMath math="y = c e^{2x} - \frac{3}{5}cos(2x) - \frac{6}{5}sin(2x)" />
          </div>

        </div>,
        <div key="a4" className="flex flex-col items-start">
          <p>យើងមានសមីការឌីផេរ៉ង់ស្យែលលីនេអែមិនអូម៉ូសែនលំដាប់ទី១៖</p>
          <BlockMath math="y' + y = sin(x) - 2cos(x)" />
          <div className="flex items-center gap-2 flex-wrap">
            <p>ដោះស្រាយសមីការអូម៉ូសែនសិន៖</p>
            <BlockMath math="y' + y = 0 \implies y_c = c e^{-x}" />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <p>រកចម្លើយពិសេស៖</p>
            <BlockMath math="y_p = \frac{1}{2}sin(x) - \frac{3}{2}cos(x)" />
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <p>ដូចនេះចម្លើយទូទៅគឺ៖</p>
            <BlockMath math="y = c e^{-x} + \frac{1}{2}sin(x) - \frac{3}{2}cos(x)" />
          </div>

        </div>,
        <div key="a5" className="flex flex-col items-start">
          <p>យើងមានសមីការឌីផេរ៉ង់ស្យែលលីនេអែមិនអូម៉ូសែនលំដាប់ទី១៖</p>
          <BlockMath math="y' + y = \frac{1}{1 + e^{2x}}" />
          <div className="flex items-center gap-2 flex-wrap">
            <p>ដោះស្រាយសមីការអូម៉ូសែនសិន៖</p>
            <BlockMath math="y' + y = 0 \implies y_c = c e^{-x}" />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <p>រកចម្លើយពិសេស៖</p>
            <BlockMath math="y_p = \frac{1}{2}ln(1 + e^{2x})" />
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <p>ដូចនេះចម្លើយទូទៅគឺ៖</p>
            <BlockMath math="y = c e^{-x} + \frac{1}{2}\ln(1 + e^{2x})" />
          </div>

        </div>
      ]
    },
    {
      id: "ex3",
      title: "លំហាត់អនុវត្តទី ៣",
      description: "លំហាត់អនុវត្តទី ៣",
      problemType: "Third Exercise",
      problems: [
        <BlockMath key="p1" math={"y'' + 9y' - 10y = 8 + 72x - 40x^2"} />,
        <BlockMath key="p2" math={"y'' - 2y = x + 2e^x"} />,
        <BlockMath key="p3" math={"y'' + 2y' + y = x e^{-x}"} />,
        <BlockMath key="p4" math={"y'' - 2y' - 3y = 2\\sin(x)"} />,
        <BlockMath key="p5" math={"y'' + y' - 2y = 3\\cos(2x)"} />,
      ],
      answers: [
        <BlockMath key="a1" math="y = c_1 e^x + c_2 e^{-10x} + 4x^2 - 8x + 1" />,
        <BlockMath key="a2" math="y = c_1 e^{\\sqrt{2}x} + c_2 e^{-\\sqrt{2}x} - \frac{x}{2} - e^x" />,
        <BlockMath key="a3" math="y = (c_1 + c_2 x + \frac{x^3}{6}) e^{-x}" />,
        <div key="a4" className="flex flex-col items-center flex-wrap gap-2">
          <BlockMath math="y = c_1 e^{3x} + c_2 e^{-x} - \frac{1}{5}sin(x)" />
          <BlockMath math=" - \frac{1}{5}cos(x)" />,
        </div>,
        <div key="a5" className="flex flex-col items-center flex-wrap gap-2">
          <BlockMath key="a5" math="y = c_1 e^x + c_2 e^{-2x} - \frac{3}{5}cos(2x)" />
          <BlockMath key="a5" math="- \frac{6}{5}sin(2x)" />
        </div>,

      ]
    },
    {
      id: "ex4",
      title: "លំហាត់អនុវត្តទី ៤",
      description: "លំហាត់អនុវត្តទី ៤",
      problemType: "Exercise4",
      problems: [
        (
          <div key="p1" className="flex items-center gap-3 justify-center flex-wrap">
            <BlockMath math={"y'' + 2y' - 3y = 0"} />
            <InlineMath math={"y(0)=0"} />
            <InlineMath math={"y'(0)=1"} />
          </div>
        ),
        (
          <div key="p2" className="flex items-center gap-3 justify-center flex-wrap">
            <BlockMath math={"y'' + 4y = 0"} />
            <InlineMath math={"y(0)=1"} />
            <InlineMath math={"y'(0)=2"} />
          </div>
        ),
        (
          <div key="p3" className="flex items-center gap-3 justify-center flex-wrap">
            <BlockMath math={"y'' - 2y' + 5y = 0"} />
            <InlineMath math={"y(0)=1"} />
            <InlineMath math={"y'(0)=-1"} />
          </div>
        ),
        (
          <div key="p4" className="flex items-center gap-3 justify-center flex-wrap">
            <BlockMath math={"y'' + 2y' + 5y = 0"} />
            <InlineMath math={"y(0)=0"} />
            <InlineMath math={"y'(0)=1"} />
          </div>
        ),
      ],
      answers: [
        <BlockMath key="a1" math="y = \frac{1}{4}(e^{3x} - e^{-x})" />,
        <BlockMath key="a2" math="y = cos(2x) + sin(2x)" />,
        <BlockMath key="a3" math="y = e^x(cos(2x) - sin(2x))" />,
        <BlockMath key="a4" math="y = \frac{1}{2} e^{-x} sin(2x)" />
      ]
    },
    {
      id: "ex5",
      title: "លំហាត់អនុវត្តទី ៥",
      description: "លំហាត់អនុវត្តទី ៥",
      problemType: "Fifth Exercise",
      problems: [
        <div key="p1" className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <p>ក. ដោះស្រាយសមីការ (E): </p>
            <InlineMath math={"y'' - 5y' + 6y = 0"} />
          </div>
          <div>
            <p>ខ. កំណត់ចម្លេីយមួយនៃសមីការ(E) បេីគេដឹងថាបន្ទាត់ (D): -x+2 ប៉ះក្រាបនៃចម្លេីយត្រង់ x=0</p>
          </div>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start">

          <div className="flex items-center gap-3 flex-wrap">
            <p className="font-semibold">ក. ដោះស្រាយសមីការ (E):</p>
            <BlockMath math={"y'' - 5y' + 6y = 0"} />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <p>សមីការសម្គាល់គឺ៖</p>
            <BlockMath math={"r^2 - 5r + 6 = 0"} />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <BlockMath math={"(r-2)(r-3) = 0"} />
            <BlockMath math={"\\Rightarrow r_1 = 2 , r_2 = 3"} />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <p>ដូច្នេះចម្លើយទូទៅគឺ៖</p>
            <BlockMath math={"y = c_1 e^{2x} + c_2 e^{3x} , A,B \\in \\mathbb{R}"} />
          </div>

          <div>
            <p className="font-semibold">ខ. កំណត់ចម្លើយមួយនៃសមីការ (E):</p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <p>គេមាន</p>
            <BlockMath math={"y = Ae^{3x} + Be^{2x}"} />
            <BlockMath math={"\\Rightarrow y' = 3Ae^{3x} + 2Be^{2x}"} />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <p>តែ</p>
            <BlockMath math="\begin{cases} 
                      y(0) = 2\\ 
                      y'(0) = -1\\
                      \end{cases}"
            />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <p>គេបាន</p>
            <BlockMath math="\begin{cases} 
                      A + B =2\\ 
                      3A + 2B = -1\\
                      \end{cases}"
            />
            <BlockMath math="\Rightarrow \begin{cases} 
                    A = -5\\ 
                    B = 7\\
                    \end{cases}"
            />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <p>គេបានចម្លេីយមួយនៃសមីការ (E):</p>
            <BlockMath math={"y = -5e^{3x} + 7e^{2x}"} />
          </div>
        </div>,
      ]
    },
    {
      id: "ex6",
      title: "លំហាត់អនុវត្តទី ៦",
      description: "លំហាត់អនុវត្តទី ៦",
      problemType: "Six Exercise",
      problems: [
        <div key="p1" className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <p>គេអោយសមីការឌីផែរ៉ង់ស្យែល (E):</p>
            <InlineMath math={"y'' - 6y' + 5y = xe^{2x}"} />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <p>ក. រកចម្លេីយទូទៅនៃសមីការ</p>
            <InlineMath math={"y'' - 6y' + 5y = 0"} />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <p>ខ. កំណត់ A និង B ដេីម្បីអោយ</p>
            <InlineMath math={"y_p= (Ax + B)e^{2x}"} />
            <p>ជាចម្លេីយសមីការ</p>
          </div>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start space-y-2">
          <div className="flex items-center gap-3 flex-wrap">
            <p className="font-semibold">ក. ដោះស្រាយសមីការ (E):</p>
            <InlineMath math={"y'' - 6y' + 5y = 0"} />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <p>សមីការសម្គាល់គឺ៖</p>
            <BlockMath math={"r^2 - 6r + 5 = 0"} />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <BlockMath math={"(r-1)(r-5) = 0"} />
            <BlockMath math={"\\Rightarrow r_1 = 1 , r_2 = 5"} />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <p>ដូច្នេះចម្លើយទូទៅគឺ៖</p>
            <BlockMath math={"y = Ae^{1x} + Be^{5x} , A,B \\in \\mathbb{R}"} />
          </div>
          <div>
            <p className="font-semibold">ខ. កំណត់តម្លៃ A និង B</p>
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <p>គេមាន</p>
            <BlockMath math={"y_p = (Ax + B)e^{2x}"} />
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <BlockMath math={"\\Rightarrow y_p' = (2Ax + A + 2B)e^{2x}"} />
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <BlockMath math={"\\Rightarrow y_p'' = (4Ax + 4A + 4B)e^{2x}"} />
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <p>នាំឲ្យ</p>
            <BlockMath math={"y_p'' - 6y_p' + 5y_p = xe^{2x}"} />
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <BlockMath math={"\\Rightarrow (4Ax + 4A + 4B)e^{2x}"} />
            <BlockMath math={"-6(2Ax + A + 2B)e^{2x}"} />
            <BlockMath math={"+ 5(Ax + B)e^{2x} = xe^{2x}"} />
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <BlockMath math={"\\Rightarrow (-3Ax - 2A - 3B)e^{2x} = xe^{2x}"} />
          </div>

          <div className="flex items-center flex-wrap gap-3">
            <BlockMath math="\Rightarrow \begin{cases} 
                    -3A = 1\\ 
                    -2A - 3B = 0\\
                    \end{cases}"
            />
            <BlockMath math="\Rightarrow \begin{cases} 
                    A = -\frac{1}{3}\\ 
                    B = \frac{2}{9}\\
                    \end{cases}"
            />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <p>ដូចនេះ</p>
            <BlockMath math={"A = -\\frac{1}{3} , B = \\frac{2}{9}"} />
          </div>
        </div>,
      ]
    },
    {
      id: "ex7",
      title: "លំហាត់អនុវត្តទី ៧",
      description: "លំហាត់អនុវត្តទី ៧",
      problemType: "Exercise7",
      problems: [
        <div key="p1" className="flex flex-col items-start gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <p>គេអោយសមីការឌីផែរ៉ង់ស្យែល (E):</p>
            <InlineMath math={"3y'' - 2y' - y = 4xe^{-x}"} />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <p>ក. រកចម្លេីយទូទៅនៃសមីការ y_c នៃសមីការ</p>
            <InlineMath math={"3y'' - 2y' - y = 0"} />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <p>ខ. កំណត់ m និង n ដេីម្បីអោយ</p>
            <InlineMath math={"y_p= (mx + n)e^{-x}"} />
            <p>ជាចម្លេីយសមីការ</p>
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <p>គ. រកចម្លេីយទូទៅនៃ y</p>
          </div>
        </div>
      ],
      answers: [
        <div key="a1" className="flex flex-col items-start space-y-2">
          <div className="flex items-center gap-3 flex-wrap">
            <p className="font-semibold">ក. ដោះស្រាយសមីការ (E):</p>
            <InlineMath math={"3y'' - 2y' - y = 0"} />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <p>សមីការសម្គាល់គឺ៖</p>
            <BlockMath math={"3r^2 - 2r - 1 = 0"} />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <BlockMath math={"(3r + 1)(r - 1) = 0"} />
            <BlockMath math={"\\Rightarrow r_1 = -\\frac{1}{3} , r_2 = 1"} />
          </div>
          <div className="flex items-center gap-3 flex-wrap">
            <p>ដូច្នេះចម្លើយទូទៅគឺ៖</p>
            <BlockMath math={"y = Ae^x + Be^{-\\frac{1}{3}x} , A,B \\in \\mathbb{R}"} />
          </div>

          <div>
            <p className="font-semibold">ខ. កំណត់តម្លៃ m និង n</p>
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <p>គេមាន</p>
            <BlockMath math={"y_p = (mx + n)e^{-x}"} />
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <BlockMath math={"\\Rightarrow y_p' = -(mx - m - n)e^{-x}"} />
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <BlockMath math={"\\Rightarrow y_p'' = (mx - 2m + n)e^{-x}"} />
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <p>នាំឲ្យ</p>
            <BlockMath math={"3y_p'' - 2y_p' - y_p = xe^{-x}"} />
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <BlockMath math={"\\Rightarrow  3(mx - 2m + n)e^{-x} -"} />
            <BlockMath math={"2(-mx + m - n)e^{-x} -"} />
            <BlockMath math={"(mx + n)e^{-x} = 4xe^{-x}"} />
          </div>
          <div className="flex items-center flex-wrap gap-3">
            <BlockMath math={"\\Rightarrow 4mx = -8m + 4n = 4x"} />
          </div>

          <div className="flex items-center flex-wrap gap-3">
            <p>ដោយផ្ទឹមមេគុណនៃសមីការគេទាញបាន</p>
            <BlockMath math="\begin{cases} 
                    4m = 4\\ 
                    -8m + 4n = 0\\
                    \end{cases}"
            />
            <BlockMath math="\Rightarrow \begin{cases} 
                    m = 1\\ 
                    n = 2\\
                    \end{cases}"
            />
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <p>ដូចនេះ</p>
            <BlockMath math={"m = 1 , n = 2"} />
          </div>

        </div>,
      ]
    },
  ];

  return (
    <>
      <SummaryBox
        title="រូបមន្តគន្លឹះ និងវិធីដោះស្រាយសមីការឌីផេរ៉ង់ស្យែល"
        sections={summary}
      />
      <TopicPracticeBox exercises={practiceExercises} />
    </>
  );
}

export default DifferentialPractice
