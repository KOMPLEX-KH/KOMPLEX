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
    content: "សមីការឌីផែរ៉ង់ស្សែលលីនេអែអូម៉ូសែនលំដាប់ទី1មានមេគុណថេរគឺគ្រប់សមីការដែលមានទម្រង់ y' - ay = 0 ,a ជាចំនួនថេរ​។"
  },
  tip: {
    title: "ជាទូទៅ",
    content: (
      <>
        <p>
          សមីការឌីផែរ៉ង់ស្សែល <InlineMath math="y' - ay = 0" /> មានចម្លើយទូទៅដូចខាងក្រោម៖
        </p>
        <BlockMath math="y = Ke^{ax}" />
        <p>ដែល <InlineMath math="K \in \mathbb{R}" /> ហើយ <InlineMath math="a" /> ជាចំនួនថេរ។</p>
      </>
    ),

  },
  example: {
    question:
      <>
        <div className="flex flex-col items-start gap-3">
          <div className="flex flex-col gap-3">
            <p>ដោះស្រាយសមីការឌីផែរ៉ង់ស្សែល</p>
            <div className="flex items-center gap-5 flex-wrap">
              <div className="flex items-center gap-2">
                1. <BlockMath math="y' - 6y = 0" />
              </div>
              <div className="flex items-center gap-2">
                2. <BlockMath math="\sqrt{5}y' - 4y = 0" />
              </div>
            </div>
          </div>
        </div>
      </>,
    steps: [
      {
        title: "ដោះស្រាយសមីការទី១",
        content:
          <div className="flex flex-col items-start">
            <BlockMath math="y' - 6y = 0" />
            <div className="flex items-center gap-3 flex-wrap">
              <p>យើងអាចសរសេរឡើងវិញដោយ</p>
              <BlockMath math="y' = 6y" />
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <p>នោះ</p>
              <BlockMath math="y = Ke^{6x}" />
            </div>

          </div>
      },
      {
        title: "ដោះស្រាយសមីការទី២",
        content:
          <div className="flex flex-col items-start">
            <BlockMath math="\sqrt{5}y' - 4y = 0" />
            <div className="flex items-center gap-3 flex-wrap">
              <p>យើងអាចសរសេរឡើងវិញដោយ</p>
              <BlockMath math="y' = \frac{4}{\sqrt{5}}y" />
            </div>

            <div className="flex items-center gap-3 flex-wrap">
              <p>ដោះស្រាយសមីការនេះយើងទទួលបាន</p>
              <BlockMath math="y = Ke^{\frac{4}{\sqrt{5}}x}" />
            </div>
          </div>
      },
    ],
    answer: (
      <div>
        <div className="justify-center items-center flex flex-col">
          <p><InlineMath math="y = Ke^{6x}" /></p>
          <p><InlineMath math="y = Ke^{\frac{4}{\sqrt{5}}x}" /></p>
        </div>
        <p>ដែល​ k ជាចំនួនថេរ។</p>
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
                <InlineMath math={"y' - 3y = 0"} />
              </div>
            </div>
          </>
        ),
        options: [
          <InlineMath key="q1-o1" math={"y = 3Ke^{-x}"} />,
          <InlineMath key="q1-o2" math={"y = Ke^{3x}"} />,
          <InlineMath key="q1-o3" math={"y = Ke^{-3x}"} />,
          <InlineMath key="q1-o4" math={"y = 3Ke^{x}"} />
        ],
        correctAnswer: 1
      },
      {
        id: "q2",
        question: (
          <>
            <div className="flex flex-col gap-3">
              <p>ដោះស្រាយសមីការ</p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <InlineMath math={"y' + 5y = 0"} />
              </div>
            </div>
          </>
        ),
        options: [
          <InlineMath key="q2-o1" math={"y = Ke^{-5x}"} />,
          <InlineMath key="q2-o2" math={"y = Ke^{5x}"} />,
          <InlineMath key="q2-o3" math={"y = 5Ke^{x}"} />,
          <InlineMath key="q2-o4" math={"y = 5Ke^{-x}"} />
        ],
        correctAnswer: 2
      },
      {
        id: "q3",
        question: (
          <>
            <div className="flex flex-col gap-3">
              <p>ដោះស្រាយសមីការ</p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <InlineMath math={"\\sqrt{2}y' - 2y = 0"} />
              </div>
            </div>
          </>
        ),
        options: [
          <InlineMath key="q3-o1" math={"y = \\frac{2}{\\sqrt{2}}Ke^{-x}"} />,
          <InlineMath key="q3-o2" math={"y = Ke^{-\\frac{2}{\\sqrt{2}}x}"} />,
          <InlineMath key="q3-o3" math={"y = Ke^{\\frac{2}{\\sqrt{2}}x}"} />,
          <InlineMath key="q3-o4" math={"y = \\frac{2}{\\sqrt{2}}Ke^{x}"} />
        ],
        correctAnswer: 2
      },
      {
        id: "q4",
        question: (
          <>
            <div className="flex flex-col gap-3">
              <p>ដោះស្រាយសមីការ</p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <InlineMath math={"y' - 5y = 0"} />
              </div>
            </div>
          </>
        ),
        options: [
          <InlineMath key="q4-o1" math={"y = Ke^{-5x}"} />,
          <InlineMath key="q4-o2" math={"y = Ke^{5x}"} />,
          <InlineMath key="q4-o3" math={"y = 5Ke^{x}"} />,
          <InlineMath key="q4-o4" math={"y = 5Ke^{-x}"} />
        ],
        correctAnswer: 1
      }
    ]
  },
  warning: {
    content:
      <>
        <p>
          សូមប្រុងប្រយ័ត្ន ចំពោះសញ្ញា <InlineMath math={"a"} /> ត្រូវតែត្រឹមត្រូវ ដូចជាសមីការ <InlineMath math={"y' + 5y = 0"} /> គឺ <InlineMath math={"a = -5"} />, មិនមែន 5 ទេ។
        </p>
        <p>
          កុំភ្លេចបញ្ចូលចំនួនថេរ <InlineMath math={"K"} /> នៅក្នុងចម្លើយទូទៅផងដែរ។
        </p>
      </>
  },
}



const SecondTopicContent: TopicContent = {
  definition: {
    title: "សមីការមិនអូម៉ូសែន",
    content: (
      <>
        សមីការឌីផែរ៉ង់ស្សែលលីនេអែមិនអូម៉ូសែនលំដាប់ទី១មានមេគុណថេរគឺគ្រប់សមីការដែលមានទម្រង់
        <InlineMath math={"y' + ay = P(x) \\quad (E)"} />,
        ដែល P(x) ​ខុសពី 0
      </>
    )
  },
  tip: {
    title: "របៀបដោះស្រាយ",
    content: (
      <div className="flex flex-col gap-5 mt-4">

        <ul className="list-disc pl-3">
          <h3 className="font-bold flex items-center gap-2">
            របៀបទីមួយ
          </h3>
          <li>
            រកអនុគមន៍ចម្លើយទូទៅនៃសមីការ <InlineMath math={"y' + ay = 0"} /> ដែលតាងដោយអនុគមន៍ <InlineMath math={"y_c"} />
          </li>
          <li>
            រកអនុគមន៍ចម្លើយពិសេសនៃសមីការ <InlineMath math={"y' + ay = P(x)"} /> តាងដោយអនុគមន៍ <InlineMath math={"y_p"} />
          </li>
          <li>
            ចម្លើយទូទៅនៃសមីការ <InlineMath math={"y' + ay = P(x)"} /> គឺអនុគមន៍ដែល <InlineMath math={"y = y_c + y_p"} />
          </li>
        </ul>

        <ul className="list-disc pl-3">
          <h3 className="font-bold flex items-center gap-2">
            របៀបទីពីរ: (បម្រែបម្រួលចំនួនថេរ)
          </h3>
          <li>
            ត្រូវរកចម្លើយទូទៅនៃសមីការ <InlineMath math={"y' - ay = 0"} /> ដែលតាងដោយ <InlineMath math={"y_c = Ke^{ax}"} />។
          </li>
          <li>
            ក្នុងចម្លើយទូទៅខាងលើនេះ យក K ជាអនុគមន៍នៃ x នោះចម្លើយនៃសមីការ <InlineMath math={"y' - ay = P(x)"} /> គឺ <InlineMath math={"y_c = K(x)e^{ax}"} />។
          </li>
          <li>
            គណនា <InlineMath math={"y'"} /> រួចយក <InlineMath math={"y"} /> និង <InlineMath math={"y'"} /> ទៅជំនួសក្នុងសមីការដើម ហើយទាញរក <InlineMath math={"K(x)"} />។
          </li>
        </ul>

      </div>
    )
  },

  example: {
    question:
      <div className="flex flex-col items-start gap-2">
        <div className="flex flex-col  w-full">
          <p>ដោះស្រាយសមីការឌីផែរ៉ង់ស្សែលតាមរបៀបទីមួយ</p>
          <div className="flex items-center gap-10  justify-center w-full">
            <BlockMath math="y' - 3y = 6" />
          </div>
        </div>
      </div>,
    steps: [
      {
        title: "រកចម្លើយទូទៅនៃសមីការអូម៉ូសែន y' - 3y = 0",
        content:
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-col">
              <BlockMath math="y' - 3y = ០" />
              <BlockMath math="\Rightarrow y_c = Ke^{3x}" />
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <p>គេបាន: ចម្លើយទូទៅនៃសមីការគឺ</p>
              <BlockMath math="y_c = Ke^{3x}" />
              <p>, k ជាចំនួនថេរ។</p>
            </div>

          </div>
      },
      {
        title: "រកចម្លើយពិសេសនៃសមីការ (E)",
        content: <div>

          <div className="flex items-start sm:items-center gap-1 sm:gap-5 flex-col sm:flex-row ">
            <p>តាង :</p>
            <div className="flex items-center gap-5">
              <BlockMath math="y_p = a" />
              <p>ជាចម្លេីយពិសេសនៃសមីការ (E)</p>
            </div>

          </div>
          <div className="flex items-center gap-5">
            <p>នាំឲ្យ</p>
            <BlockMath math=" y_p' = 0" />
          </div>
          <div className="flex items-start sm:items-center gap-1 sm:gap-5 flex-col sm:flex-row">
            <p>គេបាន : </p>
            <div className="flex items-center gap-3">
              <BlockMath math=" y_p' - 3y_p = 6" />
              <BlockMath math="\Leftrightarrow" />
              <BlockMath math="0 - 3a = 6" />
            </div>

          </div>
          <div className="flex items-center gap-5">
            <p>នាំឲ្យ : </p>
            <BlockMath math="a = -2" />
          </div>
          <div className="flex items-start sm:items-center gap-1 sm:gap-5 flex-col sm:flex-row">
            <p>គេបាន : ចម្លេីយពិសេសនៃសមីការ (E) គឺ </p>
            <div className="flex items-center">
              <BlockMath math="y_p = -2" />
            </div>
          </div>
        </div>
      },
    ],
    answer: (
      <div>
        <div className="flex items-start  gap-1 sm:gap-5 flex-col">
          <p>ចម្លើយទូទៅនៃសមីការ (E) គឺ</p>
          <div className="flex flex-col w-full ">
            <BlockMath math="y = y_c + y_p" />
            <BlockMath math="\Rightarrow y = Ke^{3x} - 2" />
          </div>
          <p>ដែល​ k ជាចំនួនថេរ។</p>
        </div>

      </div>
    ),
  },
  example2: {
    question:
      <div className="flex flex-col items-start gap-2">
        <div className="flex flex-col  w-full">
          <p>ដោះស្រាយសមីការឌីផែរ៉ង់ស្សែលតាមរបៀបទីពីរ</p>
          <div className="flex items-center gap-10  justify-center w-full">
            <BlockMath math="y' - 3y = 6" />
          </div>
        </div>
      </div>,
    steps: [
      {
        title: "រកចម្លើយទូទៅនៃសមីការអូម៉ូសែន y' - 3y = 0",
        content:
          <div className="flex flex-col items-start">
            <BlockMath math="y' - 3y = 0" />
            <BlockMath math="\Rightarrow y_c = Ke^{3x}" />
            <div className="flex items-center gap-3 flex-wrap">
              <p>គេបាន:</p>
              <BlockMath math="y_c = Ke^{3x}" />
              <p>, k ជាចំនួនថេរ។</p>
            </div>
          </div>
      },
      {
        title: "",
        content:
          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-3 flex-wrap">
              <p>តាង :</p>
              <BlockMath math="y = K(x)e^{3x}" />
              <p>, K ជាចម្លេីយទូទៅនៃ (E)</p>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <p>គេបាន</p>
              <BlockMath math=" y' = K'(x)e^{3x} + 3K(x)e^{3x}" />
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <p>យក : </p>
              <BlockMath math="y , y'" />
              <p>ជំនួសក្នុងសមីការ</p>
              <BlockMath math="y' - 3y = 6 " />
            </div>
            <p>គេបាន :</p>
            <div className="flex items-start flex-wrap justify-center">
              <BlockMath math="[ K'(x)e^{3x} + 3K(x)e^{3x} ]" />
              <BlockMath math="- 3K(x)e^{3x} = 6" />
            </div>
            <div className="flex items-center gap-5">
              <BlockMath math="K'(x)e^{3x} = 6 " />
              <BlockMath math="\Leftrightarrow K'(x) = 6e^{-3x}" />
            </div>
            <div className="flex items-center gap-5 justify-center">
              <BlockMath math="\Rightarrow K(x) = \int 6e^{-3x} dx" />
            </div>
            <div className="flex items-center gap-5 justify-center">
              <BlockMath math="\Rightarrow K(x)=  -2e^{-3x} + C" />
            </div>
            <div className="flex items-start sm:items-center sm:gap-3 flex-col sm:flex-row">
              <p>គេបាន : ចម្លេីយនៃសមីការ</p>
              <div className="flex items-center gap-2">
                <BlockMath math="y' - 3y = 6 " />
                <p>គឺ : </p>
              </div>
            </div>
            <div className="flex items-start sm:items-center sm:gap-3 flex-col sm:flex-row">
              <BlockMath math="y = ( -2e^{-3x} + C )e^{3x} = Ce^{3x} - 2" />
              <div className="flex items-center gap-2 sm:flex-row flex-col">
                <BlockMath math="\Rightarrow y = Ke^{3x} -2" />
                <div className="flex items-center">
                  <BlockMath math=", C = K" />
                  <p>ជាចំនួនថេរ។</p>
                </div>
              </div>

            </div>


          </div>
      },
    ],
    answer: (
      <div>
        <div className="flex items-start  gap-1 sm:gap-5 flex-col">
          <p>ចម្លើយទូទៅនៃសមីការ (E) គឺ</p>
          <div className=" w-full">
            <BlockMath math="y = y_c + y_p" />
            <BlockMath math="y = Ke^{3x} - 2" />
          </div>
        </div>
        <p>ដែល​ k ជាចំនួនថេរ។</p>

      </div>
    ),
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
                <InlineMath math={"y' - 3y = 6"} />
              </div>
            </div>
          </>
        ),
        options: [
          <InlineMath key="q1-o1" math={"y = Ce^{3x} + 2"} />,
          <InlineMath key="q1-o2" math={"y = Ce^{-3x} - 2"} />,
          <InlineMath key="q1-o3" math={"y = Ce^{3x} - 2"} />,
          <InlineMath key="q1-o4" math={"y = Ce^{-3x} + 2"} />,
        ],
        correctAnswer: 2,
      },
      {
        id: "q2",
        question: (
          <>
            <div className="flex flex-col gap-3">
              <p>ដោះស្រាយសមីការ</p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <InlineMath math={"y' + 4y = 8"} />
              </div>
            </div>
          </>
        ),
        options: [
          <InlineMath key="q2-o1" math={"y = Ce^{-4x} + 2"} />,
          <InlineMath key="q2-o3" math={"y = Ce^{4x} - 2"} />,
          <InlineMath key="q2-o4" math={"y = Ce^{-4x} - 2"} />,
          <InlineMath key="q2-o5" math={"y = Ce^{4x} + 2"} />,
        ],
        correctAnswer: 0,
      },
      {
        id: "q3",
        question: (
          <>
            <div className="flex flex-col gap-3">
              <p>ដោះស្រាយសមីការ</p>
              <div className="flex items-center justify-center gap-3 flex-wrap">
                <InlineMath math={"y' - 2y = 10"} />
              </div>
            </div>
          </>
        ),
        options: [
          <InlineMath key="q3-o1" math={"y_p = -5"} />,
          <InlineMath key="q3-o2" math={"y_p = 5"} />,
          <InlineMath key="q3-o3" math={"y_p = 10"} />,
          <InlineMath key="q3-o4" math={"y_p = -10"} />,
        ],
        correctAnswer: 1,
      }
    ]
  },
}






const LDE1 = () => {
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
        {FirstTopicContent.exercise && (
          <ExerciseBox questions={FirstTopicContent.exercise.questions} />
        )}
        {FirstTopicContent.warning && (
          <WarningBox content={FirstTopicContent.warning.content} />
        )}
      </div>

      <div>
        {SecondTopicContent.definition && (
          <DefinitionBox title={SecondTopicContent.definition.title} content={SecondTopicContent.definition.content} />
        )}
        {SecondTopicContent.tip && (
          <TipBox title={SecondTopicContent.tip.title} content={SecondTopicContent.tip.content} />
        )}

        {SecondTopicContent.example && (
          <ExampleBox question={SecondTopicContent.example.question} steps={SecondTopicContent.example.steps} answer={SecondTopicContent.example.answer} />
        )}
        {SecondTopicContent.example2 && (
          <ExampleBox question={SecondTopicContent.example2.question} steps={SecondTopicContent.example2.steps} answer={SecondTopicContent.example2.answer} />
        )}
        {SecondTopicContent.exercise && (
          <ExerciseBox questions={SecondTopicContent.exercise.questions} />
        )}
      </div>

    </>
  )
}

export default LDE1