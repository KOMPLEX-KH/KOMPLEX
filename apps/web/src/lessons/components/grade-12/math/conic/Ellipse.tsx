import React from 'react'
import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import ExerciseBox from "@/components/pages/docs/boxes/ExerciseBox";
import HintBox from "@/components/pages/docs/boxes/HintBox";
import WarningBox from "@/components/pages/docs/boxes/WarningBox";
import GraphBox from "@/components/pages/docs/boxes/GraphBox";
import { TopicContent } from "@/types/docs/topic";

import { BlockMath, InlineMath } from "react-katex";

const Ellipse = () => {
  const TOPIC_CONTENT: TopicContent = {
    definition: {
      title: "តើអេលីបជាអ្វី?",
      content: (
        <div className="space-y-4">
          <p>
            អេលីប គឺជាសំណុំចំណុច P នៅលើប្លង់ ដែល ផលបូកចម្ងាយពី P ទៅចំណុចនឹងទាំងពីរ (កំណុំ) មានតម្លៃថេរ មិនផ្លាស់ប្តូរ។
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-medium mb-3">លក្ខណៈពិសេសនៃអេលីប៖</p>
            <ul className="space-y-2 ml-4">
              <li>• ចំណុច <InlineMath math="I(h,k)" /> ហៅថា <strong>ចំណុចកណ្តាល </strong></li>
              <li>• ចំណុច <InlineMath math="V_1, V_2" /> ហៅថា <strong>កំពូលអេលីប </strong></li>
              <li>• ចម្ងាយ <InlineMath math="V_1V_2 = 2a" /> ហៅថា <strong>អ័ក្សធំ </strong></li>
              <li>• ចម្ងាយ <InlineMath math="B_1B_2 = 2b" /> ហៅថា <strong>អ័ក្សតូច </strong></li>
              <li>• ចំណុច <InlineMath math="F_1, F_2" /> ហៅថា <strong>កំណុំអេលីប </strong> <InlineMath math="(F_1F_2 = 2c)" /></li>
              <li>• ក្នុងអេលីប <InlineMath math="a > b, a > c" /> និង <InlineMath math="c^2 = a^2 - b^2" /></li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p>សមីការទូទៅនៃអេលីប៖  <InlineMath math="Ax^2 + By^2 + Cx + Dy + E = 0" /> (ជារង្វង់បើ ​A = B)</p>
          </div>
        </div>
      )
    },

    tip: {
      title: "គន្លឹះសំខាន់",
      content: (
        <div ml-4>
          • ភាពវែងមិនកំណេបាន: <InlineMath math="e = \frac{c}{a}" /> ដែល <InlineMath math="e = \frac{c}{a}" /> <br />
          • សម្រាប់អេលីប <InlineMath math="0 < e < 1" /> (ជិតរង្វង់ប្រសិនបើ <InlineMath math="e" /> ជិត 0) <br />
          • ចម្ងាយពីចំណុចណាមួយក្នុងអេលីបទៅកំណុំទាំងពីរ: <InlineMath math="PF_1 + PF_2 = 2a" /> <br />
          • ក្នុងអេលីប <InlineMath math="a" /> តែងតែធំជាង <InlineMath math="b" /> និង <InlineMath math="c" />
        </div>
      )
    },

    hint: {
      content: (
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-indigo-800 mb-4">ប្រភេទនៃអេលីប</h3>

          {/* Standard Form at Origin */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-lg font-bold text-blue-800 mb-4">អេលីបដែលមានចំណុចកណ្តាលនៅកំណត់ដើម</h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Horizontal Ellipse */}
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-700 mb-3">
                  ▶ អ័ក្សធំដេក (a &gt; b)
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• សមីការ៖ <InlineMath math="\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1" /></li>
                  <li>• ចំណុចកណ្តាល៖ <InlineMath math="(0, 0)" /></li>
                  <li>• កំពូល៖ <InlineMath math="(\pm a, 0)" /></li>
                  <li>• កំពូលតូច៖ <InlineMath math="(0, \pm b)" /></li>
                  <li>• កំណុំ៖ <InlineMath math="(\pm c, 0)" /> ដែល <InlineMath math="c^2 = a^2 - b^2" /></li>
                  <li>• អាស៊ីមតូត៖ <InlineMath math="y = \pm \frac{b}{a}x" /></li>
                </ul>
              </div>

              {/* Vertical Ellipse */}
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-700 mb-3">
                  ▶ អ័ក្សធំឈរ (b &gt; a)
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• សមីការ៖ <InlineMath math="\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1" /></li>
                  <li>• ចំណុចកណ្តាល៖ <InlineMath math="(0, 0)" /></li>
                  <li>• កំពូល៖ <InlineMath math="(0, \pm b)" /></li>
                  <li>• កំពូលតូច៖ <InlineMath math="(\pm a, 0)" /></li>
                  <li>• កំណុំ៖ <InlineMath math="(0, \pm c)" /> ដែល <InlineMath math="c^2 = b^2 - a^2" /></li>
                  <li>• អាស៊ីមតូត៖ <InlineMath math="x = \pm \frac{a}{b}y" /></li>
                </ul>
              </div>
            </div>
          </div>

          {/* General Form */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
            <h3 className="text-lg font-bold text-emerald-800 mb-4">អេលីបដែលមានចំណុចកណ្តាលនៅចំណុចផ្សេង</h3>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Horizontal General Form */}
              <div className="bg-white p-4 rounded-lg border border-emerald-100">
                <h4 className="font-semibold text-emerald-700 mb-3">
                  ▶ អ័ក្សធំដេក
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• សមីការ៖ <InlineMath math="\frac{(x-h)^2}{a^2} + \frac{(y-k)^2}{b^2} = 1" /></li>
                  <li>• ចំណុចកណ្តាល៖ <InlineMath math="(h, k)" /></li>
                  <li>• កំពូល៖ <InlineMath math="(h \pm a, k)" /></li>
                  <li>• កំពូលតូច៖ <InlineMath math="(h, k \pm b)" /></li>
                  <li>• កំណុំ៖ <InlineMath math="(h \pm c, k)" /></li>
                  <li>• អាស៊ីមតូត៖ <InlineMath math="y = k \pm \frac{b}{a}(x - h)" /></li>
                </ul>
              </div>

              {/* Vertical General Form */}
              <div className="bg-white p-4 rounded-lg border border-emerald-100">
                <h4 className="font-semibold text-emerald-700 mb-3">
                  ▶ អ័ក្សធំឈរ
                </h4>
                <ul className="space-y-2 text-sm">
                  <li>• សមីការ៖ <InlineMath math="\frac{(x-h)^2}{b^2} + \frac{(y-k)^2}{a^2} = 1" /></li>
                  <li>• ចំណុចកណ្តាល៖ <InlineMath math="(h, k)" /></li>
                  <li>• កំពូល៖ <InlineMath math="(h, k \pm b)" /></li>
                  <li>• កំពូលតូច៖ <InlineMath math="(h \pm a, k)" /></li>
                  <li>• កំណុំ៖ <InlineMath math="(h, k \pm c)" /></li>
                  <li>• អាស៊ីមតូត៖ <InlineMath math="y = k \pm \frac{a}{b}(x - h)" /></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Eccentricity Summary */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
            <h4 className="font-medium text-purple-800 mb-2">អុិចសង់ទ្រីសុីតេ (Eccentricity)៖</h4>
            <div className="text-sm text-purple-700 space-y-1">
              <p>• <InlineMath math="e = \frac{c}{a}" /> សម្រាប់អេលីបអ័ក្សធំដេក</p>
              <p>• <InlineMath math="e = \frac{c}{b}" /> សម្រាប់អេលីបអ័ក្សធំឈរ</p>
              <p>• <InlineMath math="0 < e < 1" /> (ប្រសិនបើ <InlineMath math="e = 0" /> នោះជារង្វង់)</p>
            </div>
          </div>
        </div>
      )
    },

    graph: {
      expressions: [
        {
          id: "ellipse1",
          latex: "\\frac{x^2}{9} + \\frac{y^2}{4} = 1",
          color: "#2563eb"
        },
        {
          id: "center",
          latex: "(0, 0)",
          color: "#dc2626"
        },
        {
          id: "vertices",
          latex: "[(3, 0), (-3, 0)]",
          color: "#059669"
        },
        {
          id: "co-vertices",
          latex: "[(0, 2), (0, -2)]",
          color: "#7c3aed"
        },
        {
          id: "foci",
          latex: "[(2.236, 0), (-2.236, 0)]",
          color: "#ea580c"
        }
      ],
      options: {
        showGrid: true,
        expressions: true,
        xAxisLabel: "x",
        yAxisLabel: "y"
      }
    },

    example: {
      question: "ដំណោះស្រាយ",
      steps: [
        {
          title: "​កចំណុចកណ្តាល កំពូល និងកំណុំ",
          content: (
            <div className="space-y-4">
              <p>រកចំណុចកណ្តាល កំពូល និងកំណុំនៃអេលីប៖</p>
              <BlockMath math="\frac{x^2}{25} + \frac{y^2}{9} = 1" />

              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">ដំណោះស្រាយ៖</p>
                <div className="space-y-3 mt-2">
                  <p>ប្រៀបធៀបជាមួយរូបមន្តទូទៅ៖ <InlineMath math="\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1" /></p>
                  <p>យើងបាន៖ <InlineMath math="a^2 = 25" /> ដូច្នេះ <InlineMath math="a = 5" /></p>
                  <p>និង <InlineMath math="b^2 = 9" /> ដូច្នេះ <InlineMath math="b = 3" /></p>
                  <p>ដូច្នេះ៖ <InlineMath math="c^2 = a^2 - b^2 = 25 - 9 = 16" /> ដូច្នេះ <InlineMath math="c = 4" /></p>

                  <div className="border-l-4 border-blue-400 pl-4 space-y-2">
                    <p>• ចំណុចកណ្តាល៖ <InlineMath math="(0, 0)" /></p>
                    <p>• កំពូល៖ <InlineMath math="(\pm 5, 0)" /> ឬ <InlineMath math="(5, 0)" /> និង <InlineMath math="(-5, 0)" /></p>
                    <p>• កំពូលតូច៖ <InlineMath math="(0, \pm 3)" /> ឬ <InlineMath math="(0, 3)" /> និង <InlineMath math="(0, -3)" /></p>
                    <p>• កំណុំ៖ <InlineMath math="(\pm 4, 0)" /> ឬ <InlineMath math="(4, 0)" /> និង <InlineMath math="(-4, 0)" /></p>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "​រកសមីការអេលីប",
          content: (
            <div className="space-y-4">
              <p>រកសមីការអេលីបដែលមានកំពូលនៅ <InlineMath math="(\pm 6, 0)" /> និងកំណុំនៅ <InlineMath math="(\pm 4, 0)" /></p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">ដំណោះស្រាយ៖</p>
                <div className="space-y-3 mt-2">
                  <p>ពីកំពូលនៅ <InlineMath math="(\pm 6, 0)" /> យើងបាន <InlineMath math="a = 6" /></p>
                  <p>ពីកំណុំនៅ <InlineMath math="(\pm 4, 0)" /> យើងបាន <InlineMath math="c = 4" /></p>
                  <p>គណនារក <InlineMath math="b" />៖ <InlineMath math="c^2 = a^2 - b^2" /></p>
                  <p><InlineMath math="16 = 36 - b^2" /></p>
                  <p><InlineMath math="b^2 = 36 - 16 = 20" /></p>

                  <div className="border-l-4 border-green-400 pl-4">
                    <p>ដូច្នេះសមីការអេលីបគឺ៖ <InlineMath math="\frac{x^2}{36} + \frac{y^2}{20} = 1" /></p>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ]
    },

    warning: {
      content: (
        <>
          • ត្រូវកំណត់ត្រឹមត្រូវថាតើអ័ក្សធំជាដេកឬឈរ <br />
          • ចាំថា <InlineMath math="c^2 = a^2 - b^2" /> (ប្រសិនបើ <InlineMath math="a > b" />) <br />
          • ក្នុងអេលីប តម្លៃ <InlineMath math="a" /> និង <InlineMath math="b" /> តែងតែជាវិជ្ជមាន <br />
          • កំណុំតែងតែនៅលើអ័ក្សធំ និងនៅខាងក្នុងអេលីប <br />
          • សមីការអេលីបត្រូវមានសញ្ញាដក (+) រវាង x² និង y²
        </>
      )
    },

    exercise: {
      questions: [
        {
          id: "1",
          question: (
            <>
              ចំណុចកណ្តាលនៃអេលីប <InlineMath math='\frac {(x-2)^2}{16} + \frac {(y+1)^2}{9} = 1' /> គឺ៖
            </>
          ),
          options: [
            "(2, -1)",
            "(-2, 1)",
            "(4, 3)",
            "(16, 9)"
          ],
          correctAnswer: 0
        },
        {
          id: "2",
          question: (
            <>
              ប្រសិនបើអេលីបមានកំពូលនៅ <InlineMath math='(\pm 5, 0)' /> និងកំពូលតូចនៅ <InlineMath math='(0, \pm 3)' /> សមីការរបស់វាគឺ៖
            </>
          ),
          options: [
            "\\frac{x^2}{25} + \\frac{y^2}{9} = 1",
            "\\frac{x^2}{9} + \\frac{y^2}{25} = 1",
            "\\frac{x^2}{5} + \\frac{y^2}{3} = 1",
            "\\frac{x^2}{3} + \\frac{y^2}{5} = 1"
          ],
          correctAnswer: 0
        },
        {
          id: "3",
          question: (
            <>
              កំណុំនៃអេលីប <InlineMath math='\frac{x^2}{9} + \frac{y^2}{25} = 1' /> គឺ៖
            </>
          ),
          options: [
            <InlineMath math='(0, \pm 4)' key='0' />,
            <InlineMath math='(\pm 4, 0)' key='1' />,
            <InlineMath math='(0, \pm 2)' key='2' />,
            <InlineMath math='\pm 2, 0' key='3' />,
          ],
          correctAnswer: 0
        }
      ]
    }
  }

  return (

    <div className="space-y-6">
      {TOPIC_CONTENT.definition && (
        <DefinitionBox {...TOPIC_CONTENT.definition} />
      )}

      {TOPIC_CONTENT.tip && (
        <TipBox {...TOPIC_CONTENT.tip} />
      )}

      {TOPIC_CONTENT.hint && (
        <HintBox {...TOPIC_CONTENT.hint} />
      )}

      {TOPIC_CONTENT.graph && (
        <GraphBox {...TOPIC_CONTENT.graph} />
      )}

      {TOPIC_CONTENT.example && (
        <ExampleBox {...TOPIC_CONTENT.example} />
      )}

      {TOPIC_CONTENT.warning && (
        <WarningBox {...TOPIC_CONTENT.warning} />
      )}

      {TOPIC_CONTENT.exercise && (
        <ExerciseBox {...TOPIC_CONTENT.exercise} />
      )}
    </div>
  )
}

export default Ellipse
