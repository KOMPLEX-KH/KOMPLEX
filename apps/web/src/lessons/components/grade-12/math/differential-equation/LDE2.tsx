import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox"
import TipBox from "@/components/pages/docs/boxes/TipBox"
import HintBox from "@/components/pages/docs/boxes/HintBox"
import { TopicContent } from "@/types/docs/topic"
import { BlockMath, InlineMath } from "react-katex"
import 'katex/dist/katex.min.css'
import WarningBox from "@/components/pages/docs/boxes/WarningBox"
import ExerciseBox from "@/components/pages/docs/boxes/ExerciseBox"
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox"

const FirstTopicContent: TopicContent = {
  definition: {
    title: "សមីការអូម៉ូសែន",
    content:
      "សមីការឌីផែរ៉ង់ស្សែលលីនេអែអូម៉ូសែនលំដាប់ទី២មានមេគុណថេរគឺគ្រប់សមីការដែលមានទម្រង់ ay'' + by' + cy = 0 ; a,b,c ជាចំនួនថេរ​។"
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <p>ដេីម្បីដោះស្រាយសមីការ</p>
        <BlockMath math="ay'' + by' + cy = 0" />
        <p>គេត្រូវបង្កេីតសមីការសម្គាល់ដែលមានរាង</p>
        <BlockMath math="a \lambda^2 + b\lambda + c = 0" />
        <p>រួចដោះស្រាយរកឫសនៃសមីការ។</p>

      </>
    ),

  },
  example: {
    question:
      <div className="flex flex-col items-start gap-3">
        <div className="flex flex-col gap-3">
          <p>ដោះស្រាយសមីការឌីផែរ៉ង់ស្សែលអូម៉ូសែនលំដាប់ទី២</p>
          <div className="flex items-center gap-5 flex-wrap">
            <div className="flex items-center gap-2">
              1. <BlockMath math="2y'' - 3y' + y = 0" />
            </div>

            <div className="flex items-center gap-2">
              2. <BlockMath math="y'' - 6y' + 9y = 0" />
            </div>
          </div>
        </div>
      </div>,
    steps: [
      {
        title: "ដោះស្រាយសមីការទី១",
        content:
          <div className="flex flex-col items-start">
            <BlockMath math="2y'' - 3y' + y = 0" />
            <div className="flex items-center gap-3 flex-wrap">
              <p>គេមាន : សមីការសម្គាល់គឺ</p>
              <BlockMath math="2\lambda^2 - 3 \lambda + 1 = 0" />
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <p>មានឫស</p>
              <BlockMath math="\lambda_1 = 1 , \lambda_2 = \frac{1}{2}" />
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <p>ចម្លើយទូទៅនៃសមីការគឺ</p>
              <BlockMath math="y = Ae^{x} + Be^{\left(\frac{1}{2} x\right)}  \ A,B \in \mathbb{R}" />
            </div>

          </div>
      },
      {
        title: "ដោះស្រាយសមីការទី២",
        content:
          <div className="flex flex-col items-start">
            <BlockMath math="y'' - 6y' + 9y = 0" />
            <div className="flex items-center gap-3 flex-wrap">
              <p>គេមាន : សមីការសម្គាល់គឺ</p>
              <BlockMath math="\lambda^2 - 6 \lambda + 9 = 0" />
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <p>មានឫសឌុប</p>
              <BlockMath math="\lambda_1 = \lambda_2 = 3" />
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <p>ចម្លើយទូទៅនៃសមីការគឺ</p>
              <BlockMath math="y = ( A + Bx)e^{3x} \ A,B \in \mathbb{R}" />
            </div>

          </div>
      },
    ],
    answer: (
      <div>
        <div className="justify-center items-start flex flex-col">
          <BlockMath math="y = Ae^{x} + Be^{\left(\frac{1}{2} x\right)} \ A,B \in \mathbb{R}" />
          <BlockMath math="y = ( A + Bx)e^{3x} \ A,B \in \mathbb{R}" />
        </div>
      </div>
    )
  },
  example2: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3 flex-wrap">
            <p>ក. ដោះស្រាយសមីការ</p>
            <BlockMath math="y'' - 3y' + 2y = 0" />
          </div>
          <div className="flex items-center gap-5 flex-wrap">
            <p>ខ. រកចម្លេីយ f មួយនៃសមីការ បេីគេដឹងថាក្រាបនៃអនុគមន៍ចម្លេីយ ប៉ះនឹងបន្ទាត់ y= x+2 ត្រង់ចំណុច A(0,2)</p>
          </div>
        </div>
      </div>,
    ],
    steps: [
      {
        title: "ដោះស្រាយសមីការ y'' - 3y' + 2y = 0",
        content:
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 flex-wrap">
              <p>គេមាន : សមីការសម្គាល់គឺ</p>
              <BlockMath math="\lambda^2 - 3 \lambda + 2 = 0" />
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <p>មានឫស</p>
              <BlockMath math="\lambda_1 = 1  ,  \lambda_2 = 2" />
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <p>ចម្លើយទូទៅនៃសមីការគឺ</p>
              <BlockMath math="y = Ae^x + Be^{2x}" />
              <p>, A, B ជាចំនួនថេរ។</p>
            </div>
          </div>
      },
      {
        title: "រកចម្លេីយ f មួយនៃសមីការ",
        content:
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-3 flex-wrap">
              <p>គេមាន : </p>
              <BlockMath math="f(x) = Ae^x + Be^{2x}" />
            </div>

            <BlockMath math="\Rightarrow f'(x) = Ae^x + 2Be^{2x}" />
            <p>ម៉្យាងទៀត: ដោយក្រាបនៃអនុគមន៍ចម្លេីយប៉ះនឹងបន្ទាត់ y=x+2 ត្រង់ចំណុច A(0,2)</p>
            <div className="flex items-center gap-3 flex-wrap">
              <p>គេបាន : </p>
              <BlockMath math="\begin{cases} 
                          f(0)  = 2 \\ 
                          f'(0) = 1 
                          \end{cases}"
              />
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <p>នាំឲ្យ : </p>
              <BlockMath math="\begin{cases} 
                          Ae^0 + Be^0  = 2 \\ 
                          Ae^0 + 2Be^0 = 1
                          \end{cases}"
              />
            </div>
            <BlockMath math="\Rightarrow \begin{cases} 
                      A + B  = 2 \\ 
                      A + 2B = 1
                      \end{cases}"
            />

            <BlockMath math="\Rightarrow \begin{cases} 
                      A =  3 \\ 
                      B = -1
                      \end{cases}"
            />
          </div>
      },
    ],
    answer:
      (
        <div>
          <p>អនុគមន៍ចម្លេីយគឺ</p>
          <div className="justify-center items-center flex flex-col">
            <BlockMath math="f(x) = 3e^x - e^{2x}" />
          </div>
        </div>
      )
  },
  exercise: {
    questions: [
      {
        id: "q1",
        question: (
          <>
            <div className="flex flex-col gap-3">
              <p>ដោះស្រាយសមីការ</p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <InlineMath math={"y'' + 5y' + 6y = 0"} />
              </div>
            </div>
          </>
        ),
        options: [
          <InlineMath key="q1-o1" math={"y = Ae^{2x} + Be^{3x}"} />,
          <InlineMath key="q1-o2" math={"y = Ae^{-x} + Be^{-5x}"} />,
          <InlineMath key="q1-o3" math={"y = Ae^{-2x} + Be^{-3x}"} />,
          <InlineMath key="q1-o4" math={"y = Ae^{x} + Be^{5x}"} />
        ],
        correctAnswer: 2
      },
      {
        id: "q2",
        question: (
          <>
            <div className="flex flex-col gap-3">
              <p>ដោះស្រាយសមីការ</p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <InlineMath math={"4y'' - 4y' + y = 0"} />
              </div>
            </div>
          </>
        ),
        options: [
          <InlineMath key="q2-o1" math={"y = Ae^{x} + Be^{-x}"} />,
          <InlineMath key="q2-o2" math={"y = (A + Bx)e^{\\frac{1}{2}x}"} />,
          <InlineMath key="q2-o3" math={"y = Ae^{\\frac{1}{2}x} + Be^{-\\frac{1}{2}x}"} />,
          <InlineMath key="q2-o4" math={"y = (A + Bx)e^{-\\frac{1}{2}x}"} />
        ],
        correctAnswer: 1
      },
      {
        id: "q3",
        question: (
          <>
            <div className="flex flex-col gap-3">
              <p>ដោះស្រាយសមីការ</p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <InlineMath math={"y'' + 4y = 0"} />
              </div>
            </div>
          </>
        ),
        options: [
          <InlineMath key="q3-o1" math={"y = Ae^{2x} + Be^{-2x}"} />,
          <InlineMath key="q3-o2" math={"y = (A + Bx)e^{2x}"} />,
          <InlineMath key="q3-o3" math={"y = A\\cos(2x) + B\\sin(2x)"} />,
          <InlineMath key="q3-o4" math={"y = A\\cos(x) + B\\sin(x)"} />
        ],
        correctAnswer: 2
      },
    ]
  },

  hint: {
    content:
      <>
        <p>
          នៅពេលដោះស្រាយសមីការឌីផែរ៉ង់ស្សែលលំដាប់ទី២ អូម៉ូសែន
          ត្រូវចាប់ផ្តើមដោយសរសេរសមីការសម្គាល់
          <InlineMath math={"a\\lambda^2 + b\\lambda + c = 0"} />
          រួចដោះស្រាយរកឫស។
        </p>
        <p>
          បើឫសទាំងពីរផ្សេងគ្នា ចម្លើយទូទៅមានទម្រង់
          <InlineMath math={"y = Ae^{\\lambda_1 x} + Be^{\\lambda_2 x}"} />។
        </p>
        <p>
          បើឫសស្មើគ្នា (ឌុប) ចម្លើយទូទៅមានទម្រង់
          <InlineMath math={"y = (A + Bx)e^{\\lambda x}"} />។
        </p>
        <p>
          បើឫសជាគូស្មុគស្មាញ
          <InlineMath math={"p \\pm qi"} />
          ចម្លើយទូទៅមានទម្រង់
          <InlineMath math={"y = e^{px}(A\\cos(qx) + B\\sin(qx))"} />។
        </p>
      </>
  },
}



const SecondTopic: TopicContent = {
  definition: {
    title: "សមីការមិនអូម៉ូសែន",
    content:
      "សមីការឌីផែរ៉ង់ស្សែលលីនេអែមិនអូម៉ូសែនលំដាប់ទី២មានមេគុណថេរគឺគ្រប់សមីការដែលមានទម្រង់ ay'' + by' + cy = P(x) (E) ដែល P(X) ខុសពី 0"
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <ul className="list-disc pl-3">
          <li className="gap-2">
            រកអនុគមន៍ចម្លើយទូទៅនៃសមីការ
            <InlineMath math={"ay'' + by' + cy = 0 "} />
            តាងដោយអនុគមន៍
            <InlineMath math={"y_c"} />
          </li>
          <li>
            រកអនុគមន៍ចម្លើយពិសេសនៃសមីការ
            <InlineMath math={"ay'' + by' + cy = P(x) "} />
            តាងដោយអនុគមន៍
            <InlineMath math={"y_p"} />
          </li>
          <li>
            ចម្លេីយទូទៅនៃសមីការ (E) គឺអនុគមន៍ដែល
            <InlineMath math={"y = y_c + y_p"} />
          </li>
        </ul>
      </>
    ),

  },
  example: {
    question: [
      <div className="flex flex-col items-start gap-3" key="q1">
        <div className="flex flex-col gap-3 w-full">
          <p>ដោះស្រាយសមីការឌីផែរ៉ង់ស្សែលមិនអូម៉ូសែនលំដាប់ទី២</p>
          <div className="flex items-center gap-5 flex-wrap  w-full justify-center">
            <BlockMath math="y'' - 3y' + 5y = 4x^3 - 2x" />
          </div>
        </div>
      </div>,
    ],
    steps: [
      {
        title: "រកចម្លេីយទូទៅនៃសមីការអូម៉ូសែន y'' - 3y' + 5y = 0",
        content: (
          <div className="flex flex-col items-start">
            <BlockMath math="y'' - 3y' + 5y = 0" />
            <div className="flex items-center gap-3 flex-wrap">
              <p>សមីការសម្គាល់គឺ</p>
              <BlockMath math="\lambda^2 - 3\lambda + 5 = 0" />
            </div>
            <BlockMath math="\Rightarrow \lambda = \frac{3 \pm \sqrt{9 - 20}}{2} = \frac{3 \pm \sqrt{-11}}{2}" />
            <div className="flex items-center gap-3 flex-wrap">
              <p>គេបាន</p>
              <BlockMath math="\lambda = \frac{3}{2} \pm \frac{\sqrt{11}}{2} i" />
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <p>កំណត់</p>
              <BlockMath math="\alpha = \frac{3}{2}, \quad \beta = \frac{\sqrt{11}}{2}" />
            </div>

            <p>ចម្លើយទូទៅនៃសមីការ</p>
            <div className="flex items-center flex-wrap">
              <BlockMath math={`y = e^{\\frac{3}{2} x} ( A \\cos( \\frac{\\sqrt{11}}{2} x ) + B \\sin( \\frac{\\sqrt{11}}{2} x ) )`} />
            </div>

            <p>ដែល A, Bជាចំនួនថេរ។</p>
          </div>
        )
      }
    ]
  },
  exercise: {
    questions: [
      {
        id: "q1",
        question: (
          <>
            <div className="flex flex-col gap-3">
              <p>ដោះស្រាយសមីការ</p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <InlineMath math={"y'' - 2y' + y = e^x"} />
              </div>
            </div>
          </>
        ),
        options: [
          <InlineMath key="q1-o1" math={"y = (A + Bx)e^{x} + e^{x}"} />,
          <InlineMath key="q1-o2" math={"y = Ae^{x} + Be^{x} + xe^{x}"} />,
          <InlineMath key="q1-o3" math={"y = Ae^{x} + Be^{x} + e^{-x}"} />,
          <InlineMath key="q1-o4" math={"y = (A + Bx)e^{x} + xe^{-x}"} />,
        ],
        correctAnswer: 0
      },
      {
        id: "q2",
        question: (
          <>
            <div className="flex flex-col gap-3">
              <p>ចម្លើយទូទៅនៃសមីការ</p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <InlineMath math={"y'' + y = \sin x :"} />
              </div>
            </div>
          </>
        ),
        options: [
          <InlineMath key="q2-o1" math={"y = A\\cos x + B\\sin x + \\frac{1}{2} x \\cos x"} />,
          <InlineMath key="q2-o2" math={"y = A\\cos x + B\\sin x + x \\sin x"} />,
          <InlineMath key="q2-o3" math={"y = Ae^{x} + Be^{-x} + \\sin x"} />,
          <InlineMath key="q2-o4" math={"y = A\\cos x + B\\sin x + \\cos x"} />,
        ],
        correctAnswer: 0
      },
      {
        id: "q3",
        question: (
          <>
            <div className="flex flex-col gap-3">
              <p>ចម្លើយទូទៅនៃសមីការ</p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <InlineMath math={"y'' + 4y = 4x"} />
              </div>
            </div>
          </>
        ),
        options: [
          <InlineMath key="q3-o1" math={"y = A\\cos 2x + B\\sin 2x + x"} />,
          <InlineMath key="q3-o2" math={"y = A\\cos 2x + B\\sin 2x + x^2"} />,
          <InlineMath key="q3-o3" math={"y = A\\cos 2x + B\\sin 2x + x^2 + 1"} />,
          <InlineMath key="q3-o4" math={"y = A\\cos 2x + B\\sin 2x + x^2 - 1"} />,
        ],
        correctAnswer: 1
      },
    ]
  },

  hint: {
    content: (
      <>
        <p>គេមានសមីការឌីផែរ៉ង់ស្សែល</p>
        <div className="flex flex-col items-start">
          <BlockMath math={`a y'' + b y' + c y = f(x) (1)`} />
          <BlockMath math={`a y'' + b y' + c y = 0 (2)`} />
        </div>

        <ul className="list-disc pl-4 flex flex-col gap-3">
          <li>
            បើ <InlineMath math="(f_1)" /> ជាចម្លើយនៃសមីការ (1) ហេីយ <InlineMath math="(f_2)" /> ជាចម្លើយនៃសមីការ (2)​នោះ
            <InlineMath math="f_1 + f_2" /> ជាចម្លើយនៃសមីការ (1) ។
          </li>
          <li>
            បើ <InlineMath math="f_1" /> និង <InlineMath math="f_2" /> ជាចម្លើយនៃសមីការ (1) នោះ
            <InlineMath math="f_1 - f_2" /> ជាចម្លើយនៃសមីការ (2) ។
          </li>
        </ul>

      </>
    )
  },
}




const LDE2 = () => {
  return (
    <>
      <div>
        {FirstTopicContent.definition && (
          <DefinitionBox title={FirstTopicContent.definition.title} content={FirstTopicContent.definition.content} />
        )}
        {FirstTopicContent.tip && (
          <TipBox title={FirstTopicContent.tip.title} content={FirstTopicContent.tip.content} />
        )}

        {FirstTopicContent.example && (
          <ExampleBox question={FirstTopicContent.example.question} steps={FirstTopicContent.example.steps} answer={FirstTopicContent.example.answer} />
        )}
        {FirstTopicContent.example2 && (
          <ExampleBox question={FirstTopicContent.example2.question} steps={FirstTopicContent.example2.steps} answer={FirstTopicContent.example2.answer} />
        )}
        {FirstTopicContent.exercise && (
          <ExerciseBox questions={FirstTopicContent.exercise.questions} />
        )}
        {FirstTopicContent.hint && (
          <HintBox content={FirstTopicContent.hint.content} />
        )}
      </div>

      <div>
        {SecondTopic.definition && (
          <DefinitionBox title={SecondTopic.definition.title} content={SecondTopic.definition.content} />
        )}
        {SecondTopic.tip && (
          <TipBox title={SecondTopic.tip.title} content={SecondTopic.tip.content} />
        )}
        {SecondTopic.example && (
          <ExampleBox question={SecondTopic.example.question} steps={SecondTopic.example.steps} answer={SecondTopic.example.answer} />
        )}
        {SecondTopic.exercise && (
          <ExerciseBox questions={SecondTopic.exercise.questions} />
        )}
        {SecondTopic.hint && (
          <HintBox content={SecondTopic.hint.content} />
        )}
      </div>
    </>
  )
}

export default LDE2