import DefinitionBox from "@/components/pages/docs/boxes/DefinitionBox";
import ExampleBox from "@/components/pages/docs/boxes/ExampleBox";
import TipBox from "@/components/pages/docs/boxes/TipBox";
import ExerciseBox from "@/components/pages/docs/boxes/ExerciseBox";
import HintBox from "@/components/pages/docs/boxes/HintBox";
import WarningBox from "@/components/pages/docs/boxes/WarningBox";
import GraphBox from "@/components/pages/docs/boxes/GraphBox";
import { TopicContent } from "@/types/docs/topic";

import { BlockMath, InlineMath } from "react-katex";

const Hyperbola = () => {
  const TOPIC_CONTENT: TopicContent = {
    definition: {
      title: "តើអុីពែបូលជាអ្វី?",
      content: (
        <div className="space-y-4">
          <p>
            អុីពែបូល គឺជាសំណុំចំណុច P នៅក្នុងប្លង់ ដែល ផលដកចម្ងាយពី P ទៅចំណុចនឹងពីរ F₁ និង F₂ មានតម្លៃថេរ មិនផ្លាស់ប្តូរ។<br />
            ផលដកចម្ងាយ <InlineMath math="|PF_1 - PF_2|" /> តែងតែមានតម្លៃថេរ។
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="font-medium mb-3">លក្ខណៈពិសេសនៃអុីពែបូល៖</p>
            <ul className="space-y-2 ml-4">
              <li>• ចំណុច <InlineMath math="I(h,k)" /> ហៅថា <strong>ចំណុចកណ្តាល </strong></li>
              <li>• ចំណុច <InlineMath math="V_1, V_2" /> ហៅថា <strong>កំពូលអុីពែបូល </strong></li>
              <li>• ចំណុច <InlineMath math="F_1, F_2" /> ហៅថា <strong>កំណុំអុីពែបូល </strong> <InlineMath math="(F_1F_2 = 2c)" /></li>
              <li>• ចម្ងាយ <InlineMath math="V_1V_2 = 2a" /> ហៅថា <strong>អ័ក្សធំ </strong></li>
              <li>• ចម្ងាយ <InlineMath math="B_1B_2 = 2b" /> ហៅថា <strong>អ័ក្សតូច </strong></li>
              <li>• ក្នុងអុីពែបូល <InlineMath math="c > a > b" /> និង <InlineMath math="c^2 = a^2 + b^2" /></li>
            </ul>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <p>សមីការទូទៅនៃអុីពែបូល៖ <InlineMath math="Ax^2 + By^2 + Cx + Dy + E = 0" /> (ដោយ AB &lt; 0)</p>
          </div>
        </div>
      )
    },
    tip: {
      title: "កំណត់ចំណាំ",
      content: (
        <div className="space-y-3">
          <ul className="space-y-1 text-sm mt-2">
            <li>• អុីពែបូលមានសញ្ញា <strong>ដក (-)</strong> រវាង x² និង y²</li>
            <li>• អាស៊ីមតូតជាបន្ទាត់ដែលកោងអុីពែបូលខិតជិតតែមិនប៉ះគ្នា</li>
            <li>• <InlineMath math="c > a" /> និង <InlineMath math="c > b" /> ជានិច្ច</li>
            <li>• អុិចសង់ទ្រីសុីតេ <InlineMath math="e = \frac{c}{a} > 1" /></li>
          </ul>
        </div>
      )
    },
    hint: {
      content: (
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-indigo-800 mb-4">ប្រភេទនៃអុីពែបូល</h3>
          {/* Standard Forms at Origin */}
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-lg font-bold text-blue-800 mb-4">សមីការស្តង់ដានៃអុីពែបូលដែលមានផ្ចិតជាគល់អ័ក្សកូអរដោនេ</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Horizontal Hyperbola */}
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-700 mb-3 flex items-center">▶ អ័ក្សទទឺងដេក</h4>
                <ul className="space-y-2 text-sm">
                  <li>• សមីការគ្រឹះ៖ <InlineMath math="\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1" /></li>
                  <li>• ចំណុចកណ្តាល <InlineMath math="(0,0)" /></li>
                  <li>• កំពូល <InlineMath math="(\pm a,0)" /></li>
                  <li>• កំណុំ <InlineMath math="(\pm c,0)" /></li>
                  <li>• អាស៊ីមតូត <InlineMath math="y = \pm \frac{b}{a}x" /></li>
                  <li>• រូបមន្ត៖ <InlineMath math="c^2 = a^2 + b^2" /></li>
                </ul>
              </div>
              {/* Vertical Hyperbola */}
              <div className="bg-white p-4 rounded-lg border border-blue-100">
                <h4 className="font-semibold text-blue-700 mb-3 flex items-center">▶ អ័ក្សទទឺងឈរ</h4>
                <ul className="space-y-2 text-sm">
                  <li>• សមីការគ្រឹះ៖ <InlineMath math="\frac{y^2}{a^2} - \frac{x^2}{b^2} = 1" /></li>
                  <li>• ចំណុចកណ្តាល <InlineMath math="(0,0)" /></li>
                  <li>• កំពូល <InlineMath math="(0,\pm a)" /></li>
                  <li>• កំណុំ <InlineMath math="(0,\pm c)" /></li>
                  <li>• អាស៊ីមតូត <InlineMath math="y = \pm \frac{a}{b}x" /></li>
                  <li>• រូបមន្ត៖ <InlineMath math="c^2 = a^2 + b^2" /></li>
                </ul>
              </div>
            </div>
          </div>
          {/* General Forms */}
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
            <h3 className="text-lg font-bold text-emerald-800 mb-4">សមីការស្តង់ដានៃអុីពែបូលដែលមានផ្ចិតជាគល់អ័ក្សកូអរដោនេ</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Horizontal General Form */}
              <div className="bg-white p-4 rounded-lg border border-emerald-100">
                <h4 className="font-semibold text-emerald-700 mb-3 flex items-center">▶ អ័ក្សទទឺងស្របនឺងអ័ក្សដេក</h4>
                <ul className="space-y-2 text-sm">
                  <li>• សមីការគ្រឹះ៖ <InlineMath math="\frac{(x-h)^2}{a^2} - \frac{(y-k)^2}{b^2} = 1" /></li>
                  <li>• ចំណុចកណ្តាល <InlineMath math="(h,k)" /></li>
                  <li>• កំពូល <InlineMath math="(h \pm a, k)" /></li>
                  <li>• កំណុំ <InlineMath math="(h \pm c, k)" /></li>
                  <li>• អាស៊ីមតូត <InlineMath math="y - k = \pm \frac{b}{a}(x - h)" /></li>
                  <li>• សមីការទូទៅប៉ារ៉ាបូល៖ <InlineMath math="By^2 + Cx + Dy + E = 0, B \neq 0" /></li>
                </ul>
              </div>
              {/* Vertical General Form */}
              <div className="bg-white p-4 rounded-lg border border-emerald-100">
                <h4 className="font-semibold text-emerald-700 mb-3 flex items-center">▶ អ័ក្សទទឺងស្របនឺងអ័ក្សឈរ</h4>
                <ul className="space-y-2 text-sm">
                  <li>• សមីការគ្រឹះ៖ <InlineMath math="\frac{(y-k)^2}{a^2} - \frac{(x-h)^2}{b^2} = 1" /></li>
                  <li>• ចំណុចកណ្តាល <InlineMath math="(h,k)" /></li>
                  <li>• កំពូល <InlineMath math="(h, k \pm a)" /></li>
                  <li>• កំណុំ <InlineMath math="(h, k \pm c)" /></li>
                  <li>• អាស៊ីមតូត <InlineMath math="y - k = \pm \frac{a}{b}(x - h)" /></li>
                  <li>• សមីការទូទៅអុីពែបូល៖ <InlineMath math="Ax^2 + Cx + Dy + E = 0, A \neq 0" /></li>
                </ul>
              </div>
            </div>
          </div>
          {/* Key Properties Summary */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
            <h4 className="font-medium text-purple-800 mb-2">សម្គាល់៖</h4>
            <div className="text-sm text-purple-700 space-y-1">
              <p>• អុីពែបូលដេក៖ <InlineMath math="\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1" /> (x² មានសញ្ញាវិជ្ជាមាន)</p>
              <p>• អុីពែបូលឈរ៖ <InlineMath math="\frac{y^2}{a^2} - \frac{x^2}{b^2} = 1" /> (y² មានសញ្ញាវិជ្ជាមាន)</p>
              <p>• អុិចសង់ទ្រីសុីតេ <InlineMath math="e = \frac{c}{a} > 1" /> កំណត់រូបរាងអុីពែបូល</p>
            </div>
          </div>
        </div>
      )
    },
    graph: {
      expressions: [
        { id: "hyperbola1", latex: "y = 1 + 0.75\\sqrt{(x - 3)^2 - 16}", color: "#2563eb" },
        { id: "hyperbola2", latex: "y = 1 - 0.75\\sqrt{(x - 3)^2 - 16}", color: "#2563eb" },
        { id: "asymptote1", latex: "y = 0.75(x - 3) + 1", color: "#7c3aed" },
        { id: "asymptote2", latex: "y = -0.75(x - 3) + 1", color: "#7c3aed" },
        { id: "vertices", latex: "(-1, 1), (7, 1)", color: "#dc2626" },
        { id: "center", latex: "(3, 1)", color: "#059669" }
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
          title: "រកកំណុំ និង អាស៊ីមតូត",
          content: (
            <div className="space-y-4">
              <p>រកកំណុំ និង អាស៊ីមតូតនៃអុីពែបូល៖</p>
              <BlockMath math="\frac{(x - 3)^2}{16} - \frac{(y - 1)^2}{9} = 1" />
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">ដំណោះស្រាយ៖</p>
                <div className="space-y-3 mt-2">
                  <p>ប្រៀបធៀបជាមួយរូបមន្តទូទៅ៖ <InlineMath math="\frac{(x - h)^2}{a^2} - \frac{(y - k)^2}{b^2} = 1" /></p>
                  <p>យើងបាន៖ <InlineMath math="h = 3, k = 1, a^2 = 16, b^2 = 9" /></p>
                  <p>ដូច្នេះ៖ <InlineMath math="a = 4, b = 3, c = \sqrt{a^2 + b^2} = \sqrt{16 + 9} = 5" /></p>
                  <div className="border-l-4 border-blue-400 pl-4 space-y-2">
                    <p>• ចំណុចកណ្តាល៖ <InlineMath math="(3, 1)" /></p>
                    <p>• កំពូល៖ <InlineMath math="(3 \pm 4, 1) = (7, 1), (-1, 1)" /></p>
                    <p>• កំណុំ៖ <InlineMath math="(3 \pm 5, 1) = (8, 1), (-2, 1)" /></p>
                    <p>• អាស៊ីមតូត៖ <InlineMath math="y - 1 = \pm \frac{3}{4}(x - 3)" /></p>
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "រកសមីការអុីពែបូល",
          content: (
            <div className="space-y-4">
              <p>រកសមីការអុីពែបូលដែលមានកំពូល <InlineMath math="(\pm 3, 0)" /> និងកំណុំ <InlineMath math="(\pm 5, 0)" /></p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">ដំណោះស្រាយ៖</p>
                <div className="space-y-3 mt-2">
                  <p>ចំណុចកណ្តាល៖ <InlineMath math="(0, 0)" /> (អុីពែបូលដេក)</p>
                  <p>កំពូល៖ <InlineMath math="(\pm a, 0) = (\pm 3, 0)" /> ដូច្នេះ <InlineMath math="a = 3" /></p>
                  <p>កំណុំ៖ <InlineMath math="(\pm c, 0) = (\pm 5, 0)" /> ដូច្នេះ <InlineMath math="c = 5" /></p>
                  <p>រកតម្លៃ b៖ <InlineMath math="c^2 = a^2 + b^2 \Rightarrow b^2 = c^2 - a^2 = 25 - 9 = 16" /></p>
                  <div className="border-l-4 border-green-400 pl-4">
                    <p>ដូច្នេះសមីការអុីពែបូលគឺ៖ <InlineMath math="\frac{x^2}{9} - \frac{y^2}{16} = 1" /></p>
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
          • ត្រូវកំណត់ត្រឹមត្រូវថាតើអុីពែបូលដេក ឬ ឈរ <br />
          • ចាំថា <InlineMath math="c^2 = a^2 + b^2" /> សម្រាប់អុីពែបូល (ផ្ទុយពីអេលីប) <br />
          • អាស៊ីមតូតឆ្លងកាត់ចំណុចកណ្តាល និងមានបំរៀង <InlineMath math="\pm \frac{b}{a}" /><br />
          • កំណុំនឹងនៅខាងក្រៅនៃកំពូល <br />
          • សមីការអុីពែបូលត្រូវមានសញ្ញាដក (-) រវាង x² និង y²
        </>
      )
    },
    exercise: {
      questions: [
        {
          id: "1",
          question: (
            <>
              កំពូលនៃអុីពែបូល <InlineMath math="\frac {(x-2)^2}{9} - \frac{(y+3)^2}{16} = 1" />គឺ៖
            </>
          ),
          options: ["(2 ± 3, -3)", "(-2 ± 3, 3)", "(2, -3 ± 4)", "(-2, -3)"],
          correctAnswer: 0
        },
        {
          id: "2",
          question: (
            <>
              ប្រសិនបើអុីពែបូលមានកំពូល (0,0) និងកំណុំ (0,±5) និង a=3 សមីការរបស់វាគឺ៖<br />
            </>
          ),
          options: [
            <InlineMath math="\frac{y²}{9} - \frac{x²}{16} = 1" key='1' />,
            <InlineMath math="\frac{x²}{9} - \frac{y²}{16} = 1" key='2' />,
            <InlineMath math="\frac{y²}{16} - \frac{x²}{9} = 1" key='3' />,
            <InlineMath math="\frac{x²}{16} - \frac{y²}{9} = 1" key='4' />,
          ],
          correctAnswer: 0
        },
        {
          id: "3",
          question: (
            <>
              អាស៊ីមតូតនៃអុីពែបូល <InlineMath math=" \frac {x^2}{4} - \frac {y^2}{9} = 1" />  គឺ៖
            </>
          ),
          options: [
            <InlineMath math="y = ±\frac {3}{2}x" key='1' />,
            <InlineMath math="y = ±\frac {2}{3}x" key='2' />,
            <InlineMath math="y = ±2x" key='3' />,
            <InlineMath math="y = ±3x" key='4' />,
          ],
          correctAnswer: 0
        }
      ]
    }
  };
  return (
    <div className="space-y-6">
      {TOPIC_CONTENT.definition && (<DefinitionBox {...TOPIC_CONTENT.definition} />)}
      {TOPIC_CONTENT.tip && (<TipBox {...TOPIC_CONTENT.tip} />)}
      {TOPIC_CONTENT.hint && (<HintBox {...TOPIC_CONTENT.hint} />)}
      {TOPIC_CONTENT.graph && (<GraphBox {...TOPIC_CONTENT.graph} />)}
      {TOPIC_CONTENT.example && (<ExampleBox {...TOPIC_CONTENT.example} />)}
      {TOPIC_CONTENT.warning && (<WarningBox {...TOPIC_CONTENT.warning} />)}
      {TOPIC_CONTENT.exercise && (<ExerciseBox {...TOPIC_CONTENT.exercise} />)}
    </div>
  );
}
export default Hyperbola
