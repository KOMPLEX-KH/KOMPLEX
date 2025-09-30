import TopicPracticeBox from "@/components/pages/docs/boxes/TopicPracticeBox";
import { BlockMath, InlineMath } from "react-katex";

import SummaryBox from "@/components/pages/docs/boxes/SummaryBox";
import { BookAIcon, ChartBarIcon, ClipboardListIcon, LightbulbIcon } from "lucide-react";
import { PracticeExercise, SummarySection } from "@/types/docs/topic";

const VectorPractice = () => {
  const summary: SummarySection[] = [
    {
      key: "formulas",
      title: "រូបមន្តសំខាន់ៗ",
      icon: BookAIcon,
      content: (
        <div className="space-y-4">
          {/* Vector Coordinates */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-indigo-600">•</span>
              <span className="font-medium">កូអរដោនេនៃវ៉ិចទ័រ</span>
              <InlineMath math={"A(x_A, y_A, z_A), B(x_B, y_B, z_B)"} />
            </div>
            <div className="ml-6"><InlineMath math={"\\overrightarrow{AB} = (x_B - x_A,\ y_B - y_A,\ z_B - z_A)"} /></div>
          </div>
          {/* Distance */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-indigo-600">•</span>
              <span className="font-medium">ចម្ងាយរវាងចំណុចពីរ A និង B</span>
            </div>
            <div className="ml-6"><InlineMath math={"|\\overrightarrow{AB}| = \\sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}"} /></div>
          </div>
          {/* Scalar Product */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-indigo-600">•</span>
              <span className="font-medium">ផលគុណស្កាលែន</span>
            </div>
            <div className="ml-6"><InlineMath math={"\\vec{u} = (x_1, y_1, z_1), \\vec{v} = (x_2, y_2, z_2)"} /></div>
            <div className="ml-6"><InlineMath math={"\\vec{u} \\cdot \\vec{v} = x_1 x_2 + y_1 y_2 + z_1 z_2"} /></div>
            <div className="ml-6"><InlineMath math={"\\vec{u} \\cdot \\vec{v} = |\\vec{u}| |\\vec{v}| \\cos \\theta"} /></div>
          </div>
          {/* Orthogonality */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-indigo-600">•</span>
              <span className="font-medium">លក្ខខណ្ឌវ៉ិចទ័រពីរកែងគ្នា</span>
            </div>
            <div className="ml-6"><InlineMath math={"\\vec{u} \\cdot \\vec{v} = 0"} /></div>
          </div>
          {/* Vector Product */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-indigo-600">•</span>
              <span className="font-medium">ផលគុណវ៉ិចទ័រ</span>
            </div>
            <div className="ml-6"><InlineMath math={"\\vec{u} \\times \\vec{v} = (y_1 z_2 - z_1 y_2) \\vec{i} - (x_1 z_2 - z_1 x_2) \\vec{j} + (x_1 y_2 - y_1 x_2) \\vec{k}"} /></div>
          </div>
          {/* Mixed Product */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-indigo-600">•</span>
              <span className="font-medium">ផលគុណចម្រុះនៃបីវ៉ិចទ័រ</span>
              <InlineMath math={"\\vec{u}, \\vec{v}, \\vec{w}"} />
            </div>
            <div className="ml-6"><InlineMath math={String.raw`\vec{u} \cdot (\vec{v} \times \vec{w}) = \begin{vmatrix} x_u & x_v & x_w \\ y_u & y_v & y_w \\ z_u & z_v & z_w \end{vmatrix}`} /></div>
          </div>
        </div>
      )
    },
    {
      key: "space-equations",
      title: "សមីការក្នុងលំហ",
      icon: ChartBarIcon,
      content: (
        <div className="space-y-4">
          {/* Parametric equation of a line */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">សមីការប៉ារ៉ាម៉ែត្រនៃបន្ទាត់:</span>
              <div className="ml-2">
                <span>
                  បន្ទាត់ L កាត់តាមចំណុច A(x₀, y₀, z₀) និងមានវ៉ិចទ័រទិស <InlineMath math="\vec{u} = (a, b, c)" />:
                </span>
                <BlockMath math={String.raw`\begin{cases} x = x_0 + at \\ y = y_0 + bt \\ z = z_0 + ct \end{cases},\ t \in \mathbb{R}`} />
              </div>
            </div>
          </div>
          {/* Symmetric equation of a line */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">សមីការឆ្លុះនៃបន្ទាត់:</span>
              <div className="ml-2">
                <BlockMath math={String.raw`\frac{x - x_0}{a} = \frac{y - y_0}{b} = \frac{z - z_0}{c}`} />
              </div>
            </div>
          </div>
          {/* Plane equation */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">សមីការប្លង់:</span>
              <div className="ml-2">
                <span>ប្លង់ P កាត់តាម A(x₀, y₀, z₀) និងមានវ៉ិចទ័រណរម៉ាល់ <InlineMath math="\vec{n} = (a, b, c)" />:</span>
                <BlockMath math={String.raw`a(x - x_0) + b(y - y_0) + c(z - z_0) = 0`} />
              </div>
            </div>
          </div>
          {/* Sphere equation */}
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <div>
              <span className="font-medium">សមីការស្វ៊ែ:</span>
              <div className="ml-2">
                <span>ស្វ៊ែ S មានផ្ចិត I(x₀, y₀, z₀) និងកាំ r:</span>
                <BlockMath math={String.raw`(x - x_0)^2 + (y - y_0)^2 + (z - z_0)^2 = r^2`} />
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      key: "surface-volume",
      title: "រូបមន្តសម្រាប់ផ្ទៃ និងមាឌ",
      icon: BookAIcon,
      content: (
        <div className="space-y-4">
          <div>
            <div className="flex items-start gap-2 mb-1">
              <span className="text-indigo-600 mt-1">•</span>
              <span className="font-medium">ផ្ទៃក្រឡាត្រីកោណ ABC</span>
            </div>
            <div className="ml-7"><InlineMath math={"S = \\frac{1}{2} |\\overrightarrow{AB} \\times \\overrightarrow{AC}|"} /></div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-1">
              <span className="text-indigo-600 mt-1">•</span>
              <span className="font-medium">ផ្ទៃក្រឡាប្រលេឡូក្រាម ABCD</span>
            </div>
            <div className="ml-7"><InlineMath math={"S = |\\overrightarrow{AB} \\times \\overrightarrow{AC}|"} /></div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-1">
              <span className="text-indigo-600 mt-1">•</span>
              <span className="font-medium">មាឌចតុមុខ ABCD</span>
            </div>
            <div className="ml-7"><InlineMath math={"V = \\frac{1}{6} |(\\overrightarrow{AB} \\times \\overrightarrow{AC}) \\cdot \\overrightarrow{AD}|"} /></div>
          </div>
          <div>
            <div className="flex items-start gap-2 mb-1">
              <span className="text-indigo-600 mt-1">•</span>
              <span className="font-medium">មាឌប្រលេពីប៉ែតកែង</span>
            </div>
            <div className="ml-7"><InlineMath math={"V = |(\\overrightarrow{AB} \\times \\overrightarrow{AC}) \\cdot \\overrightarrow{AD}|"} /></div>
          </div>
        </div>
      )
    },
    {
      key: "distance",
      title: "រូបមន្តចម្ងាយ",
      icon: BookAIcon,
      content: (
        <div className="space-y-4">
          {/* Distance from point to plane */}
          <div>
            <div className="flex items-start gap-2 mb-1">
              <span className="text-indigo-600 mt-1">•</span>
              <span className="font-medium">ចម្ងាយពីចំណុច A(x₀, y₀, z₀) ទៅប្លង់ P: ax + by + cz + d = 0</span>
            </div>
            <div className="ml-7">
              <InlineMath math={String.raw`d = \frac{|a x_0 + b y_0 + c z_0 + d|}{\sqrt{a^2 + b^2 + c^2}}`} />
            </div>
          </div>
          {/* Distance from point to line */}
          <div>
            <div className="flex items-start gap-2 mb-1">
              <span className="text-indigo-600 mt-1">•</span>
              <span className="font-medium">ចម្ងាយពីចំណុច A ទៅបន្ទាត់ L</span>
            </div>
            <div className="ml-7">
              <InlineMath math={String.raw`d(A, L) = \frac{|\overrightarrow{MA} \times \vec{u}|}{|\vec{u}|}`} />
              <div className="text-sm text-gray-600 mt-1">(M ជាចំណុចណាមួយលើបន្ទាត់ L និង <InlineMath math="\vec{u}" /> ជាវ៉ិចទ័រទិសនៃបន្ទាត់)</div>
            </div>
          </div>
          {/* Distance between parallel planes */}
          <div>
            <div className="flex items-start gap-2 mb-1">
              <span className="text-indigo-600 mt-1">•</span>
              <span className="font-medium">ចម្ងាយរវាងប្លង់ស្របគ្នា</span>
            </div>
            <div className="ml-7">
              <span>ជ្រើសរើសចំណុចមួយលើប្លង់ទី១ ហើយគណនាចម្ងាយពីចំណុចនោះទៅប្លង់ទី២។</span>
            </div>
          </div>
        </div>
      )
    },
    {
      key: "step",
      title: "ជំហានដោះស្រាយ",
      icon: ClipboardListIcon,
      content: (
        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>យល់ដឹងពីគោលគំនិត៖</b> មុននឹងប្រើរូបមន្ត សូមប្រាកដថាអ្នកយល់ពីនិយមន័យនៃវ៉ិចទ័រ ផលគុណស្កាលែ ផលគុណវ៉ិចទ័រ និងទំនាក់ទំនងរវាងពួកវា។</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>រៀបចំជំហានដោះស្រាយ៖</b> សម្រាប់លំហាត់ស្មុគស្មាញ គួរតែបំបែកវាជាជំហានតូចៗ។ ឧទាហរណ៍៖ រកកូអរដោនេនៃវ៉ិចទ័រដែលត្រូវការ → គណនាផលគុណស្កាលែ ឬផលគុណវ៉ិចទ័រ → ជួសតម្លៃចូលទៅក្នុងរូបមន្តចុងក្រោយ។</span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ពិនិត្យមើលសញ្ញា:</b> ត្រូវប្រុងប្រយ័ត្នជាមួយសញ្ញាវិជ្ជមាន និងអវិជ្ជមាន ជាពិសេសនៅពេលគណនាកូអរដោនេវ៉ិចទ័រ (x<sub>B</sub>-x<sub>A</sub>) ឬនៅពេលធ្វើផលគុណវ៉ិចទ័រ។ </span>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-indigo-600 mt-1">•</span>
            <span><b>ប្រើប្រាស់តម្លៃដាច់ខាត:</b> ចាំថាផ្ទៃ និងមាឌ មិនអាចមានតម្លៃអវិជ្ជមានបានទេ ដូច្នេះត្រូវប្រើសញ្ញាតម្លៃដាច់ខាត (∣...∣) ជានិច្ចនៅពេលគណនា។</span>
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
  ];
  const practiceExercises: PracticeExercise[] = [
    {
      id: "ex1",
      title: "លំហាត់អនុវត្តទី ១",
      description: "ដំណោះស្រាយលំហាត់ធណីមាត្រក្នុងលំហ​",
      problemType: "Solutions to spatial geometry exercises",
      problems: [
        <div key="ex1-1">
          នៅក្នុងតម្រុយអរតូណរម៉ាល់​ <InlineMath math="(O,\vec{i},\vec{j},\vec{k})" /> គេឲ្យបីចំណុច A(3,2,1), B(1,3,4) និង C(4,6,5) ។<br />
          ក. គណនាកូអរដោនេនៃវុិចទ័​រ <InlineMath math="\overrightarrow{AB} និង \overrightarrow{AC}" /> <br />
          ខ. គណនាផលគុណស្កាលែ​ <InlineMath math="\overrightarrow{AB} \cdot \overrightarrow{BC}" /> <br />
          គ. រួចទាញថា ABC ជាត្រីកោណកែង
        </div>,
        <div key="ex1-2">
          នៅក្នុងតម្រុយអរតូណរម៉ាល់​ <InlineMath math="(O,\vec{i},\vec{j},\vec{k})" /> ដែលមានទិសដៅវិជ្ជមានគេឲ្យចំណុច <InlineMath math=" A = (2, 1, 2)" /> និងវិចទ័រ <InlineMath math="\overrightarrow{W}=(3, 2, 4)" />។<br />
          ក. សរសេរសមីការប៉ារ៉ាម៉ែត្រនៃបន្ទាត់​ D ដែលកាត់តាម A និងមានវុិទ័រប្រាប់ទិស <InlineMath math="\overrightarrow{W}" />។ <br />
          ខ. រកកូអរដោនេនៃចំណុចប្រសព្វរវាង​​បន្ទាត់ D និងប្លង់​ Q ដែលមានសមីការ <InlineMath math="2x - y + 5z + 3 =0" />។
        </div>,
        <div key="ex1-3">
          នៅក្នុងតម្រុយអរតូណរម៉ាល់​ <InlineMath math="(O,\vec{i},\vec{j},\vec{k})" /> ដែលមានទិសដៅវិជ្ជមានគេឲ្យវិចទ័រ <InlineMath math="\overrightarrow{U}=(2,1,1)" /> និង <InlineMath math="\overrightarrow{V}=(3,2,0)" />។<br />
          <p>ក. គណនាផលគុណវិចទ័រ​ <InlineMath math="\overrightarrow{U} \times \overrightarrow{V}" /> <br /></p>
          <p>ខ. រកសរសេរសមីការប្លង់​ <InlineMath math="P" /> ដែលកាត់តាមចំណុច <InlineMath math="A(0,-1,-2)" />និងមានវិចទ័រណរម៉ាល់ <InlineMath math="\overrightarrow{n}=\overrightarrow{U} \times \overrightarrow{V}" />។</p>
        </div>,
        <div key="ex1-4">
          នៅក្នុងតម្រុយអរតូណរម៉ាល់​មានទិសដៅវិជ្ជមាន <InlineMath math="(O,\vec{i},\vec{j},\vec{k})" /> មួយគេមានចំណុច <InlineMath math="A(2,-1,3), B(4,1,0), C(3,2,2)" /> និង <InlineMath math="D(-1,-1,3)" />។<br />
          ក. កំណត់កូអរដោនេនៃវុចទ័រ <InlineMath math="\overrightarrow{BA} \times \overrightarrow{BC}" />។​ គណនាផ្ទៃក្រឡានៃ <InlineMath math="\triangle ABC" /><br />
          ខ. កំណត់សរសេរសមីការប្លង់​ <InlineMath math=" ABC " />។ បង្ហាញថា​ <InlineMath math="D \notin ABC" />។<br />
          គ. គណនា<InlineMath math="(\overrightarrow{BA} \times \overrightarrow{BC}) \cdot \overrightarrow{BD}" />។​ ទាញរកមាឌតេត្រាអែតនៃ <InlineMath math="ABCD" /><br />
        </div>,
      ],
      answers: [
        <div key="a1" className="space-y-2">
          <p><b>ក. គណនាកូអរដោនេនៃវុចទ័រ <InlineMath math="\overrightarrow{AB} \text{ និង } \overrightarrow{AC}" /> <br /></b></p>
          <p>គេមានចំណុច A(3,2,1), B(1,3,4) និង C(4,6,5) </p>
          <p>. វុចទ័រ​<InlineMath math="\overrightarrow{AB}" /> </p>
          <p><InlineMath math="\overrightarrow{AB} = (x_B - x_A,\ y_B - y_A,\ z_B - z_A)" /></p>
          <p><InlineMath math="\overrightarrow{AB} = (1-3, 3-2, 4-1) " /></p>
          <p><InlineMath math="\overrightarrow{AB} = (-2, 1, 3)" /></p>
          <p>. វុចទ័រ​<InlineMath math="\overrightarrow{BC}" /> </p>
          <p>​<InlineMath math="\overrightarrow{AC} = (x_C - x_B,\ y_C - y_B,\ z_C - z_B)" /></p>
          <p><InlineMath math="\overrightarrow{AC} = (4-1, 6-3, 5-4) " /></p>
          <p><InlineMath math="\overrightarrow{AC} = (3, 3, 1)" /></p>
          <p>ដូចនេះ​ <InlineMath math="\overrightarrow{AB} = (-2, 1, 3) \text{ និង } \overrightarrow{BC} = (3, 3, 1)" /></p><br />
          <p><b>ខ. គណនាផលគុណស្កាលែ​ <InlineMath math="\overrightarrow{AB} \cdot \overrightarrow{BC}" /></b> <br /></p>
          <p>គេមានវុចទ័រ​ <InlineMath math="\overrightarrow{BC} = (3, 3, 1) " /></p>
          <p>និង <InlineMath math="\overrightarrow{AB} = (-2, 1, 3)" /></p>
          <p>យើងបាន : <InlineMath math="\overrightarrow{AB} \cdot \overrightarrow{BC} " /></p>
          <p><InlineMath math="= (-2, 1, 3) \cdot (3, 3, 1)" /></p>
          <p> <InlineMath math="= (-2)(3) + (1)(3) + (3)(1)" /></p>
          <p> <InlineMath math="= -6 + 3 + 3 = 0" /></p>
          <p>ដូចនេះ​ <InlineMath math="\overrightarrow{AB} \cdot \overrightarrow{BC} = 0" /></p><br />
          <p>គ. រួចទាញថា ABC ជាត្រីកោណកែង</p>
          <p>ដោយ <InlineMath math="\overrightarrow{AB} \cdot \overrightarrow{BC} = 0" /></p>
          <p>បង្ហាញថាវុចទ័រ <InlineMath math="\overrightarrow{AB} ⊥ \overrightarrow{BC}" /></p>
          <p>ដូចនេះ​ <InlineMath math="\triangle ABC" /> ជាត្រីកោណកែង។</p>
        </div>,
        <div key="a2" className="space-y-2">
          <p>ក. សរសេរសមីការប៉ារ៉ាម៉ែត្រនៃបន្ទាត់​ D ដែលកាត់តាម A និងមានវុិទ័រប្រាប់ទិស <InlineMath math="\overrightarrow{W}" />។ <br /></p>
          <p>តាមសមីការប៉ារ៉ាម៉ែត្រនៃបន្ទាត់ D : <InlineMath math={String.raw`\begin{cases} x = x_0 + at \\ y = y_0 + bt \\ z = z_0 + ct \end{cases} \quad , t \in \mathbb{R}`} /><br /></p><br />
          <p>ដោយបន្ទាត់ D កាត់តាមចំណុច <InlineMath math="A(2, 1, 2)" /><br /> </p>
          <p><InlineMath math="\implies x_0 = 2 , y_0 = 1, z_0 = 2" /></p><br />
          <p>ហើយបន្ទាត់​ <InlineMath math="D \Vert \overrightarrow{W} ដែល \overrightarrow{W}=(3, 2, 4)" /></p>
          <p><InlineMath math="\implies a = 3 , b = 2, c = 4" /></p><br />
          <p> <InlineMath math={String.raw`ដូចនេះសមីការប៉ារ៉ាម៉ែត្រនៃបន្ទាត់ D : \begin{cases} x = 2 + 3t \\ y = 1 + 2t \\ z = 2 + 4t \end{cases} \quad , t \in \mathbb{R}`} /></p><br />
          <p>ខ. រកកូអរដោនេនៃចំណុចប្រសព្វរវាង​​បន្ទាត់ D និងប្លង់​ Q </p>
          <p>ដែលប្លង់​ Q មានសមីការ <InlineMath math="2x - y + 5z + 3 =0" /></p>
          <p><InlineMath math="ប្រព័ន្ធសមីការ: {\begin{cases} x = 2 + 3t (1) \\ y = 1 + 2t (2) \\ z = 2 + 4t (3) \\ 2x - y + 5z + 3 =0 (4)\end{cases} \quad , t \in \mathbb{R}}" /></p><br />
          <p>យក​ (1), (2), (3) ជំនួសទៅក្នុង (4) :</p>
          <p>2(2 + 3t) - (1 + 2t) + 5(2 + 4t) + 3 = 0</p>
          <p>4 + 6t - 1 - 2t + 10 + 20t + 3 = 0</p>
          <p><InlineMath math="=> 24t + 16 = 0" /></p>
          <p><InlineMath math="=> t = -\frac{2}{3}" /></p><br />
          <p>យក t ទៅក្នុង (1), (2), (3) ដើម្បីរកកូអរដោនេនៃចំណុចប្រសព្វ៖</p>
          <p><InlineMath math="x = 2 + 3(-\frac{2}{3}) = 0" /></p>
          <p><InlineMath math="y = 1 + 2(-\frac{2}{3}) = -\frac{1}{3}" /></p>
          <p><InlineMath math="z = 2 + 4(-\frac{2}{3}) = -\frac{2}{3}" /></p><br />
          <p>ដូចនេះកូអរដោនេនៃចំណុចប្រសព្វរវាងបន្ទាត់ D និងប្លង់ Q គឺ <InlineMath math="(0, -\frac{1}{3}, -\frac{2}{3})" />។</p>
        </div>,
        <div key="a3" className="space-y-2">
          <p>ក. គណនាផលគុណវិចទ័រ​ <InlineMath math="\overrightarrow{U} \times \overrightarrow{V}" /> <br /></p>
          <p>គេមានវិចទ័រ <InlineMath math="\overrightarrow{U}=(2,1,1)" /> និង <InlineMath math="\overrightarrow{V}=(3,2,0)" />។</p>
          <p>យើងបាន៖</p>
          <p><InlineMath math={String.raw`\overrightarrow{U} \times \overrightarrow{V} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ 2 & 1 & 1 \\ 3 & 2 & 0 \end{vmatrix}`} /></p><br />
          <p><InlineMath math={String.raw`= \begin{vmatrix} 1 & 1 \\ 2 & 0 \end{vmatrix}\vec{i} - \begin{vmatrix} 2 & 1 \\ 3 & 0 \end{vmatrix}\vec{j} + \begin{vmatrix} 2 & 1 \\ 3 & 2 \end{vmatrix}\vec{k}`} /></p><br />
          <p><InlineMath math={String.raw`= (1 \times 0 - 1 \times 2)\vec{i} - (2 \times 0 - 1 \times 3)\vec{j} + (2 \times 2 - 1 \times 3)\vec{k}`} /> </p>
          <p><InlineMath math="= (-2) \vec{i} + (3) \vec{j} + (1) \vec{k}" /></p><br />
          <p>ដូចនេះ​ <InlineMath math="\overrightarrow{U} \times \overrightarrow{V} = (-2, 3, 1)" />។</p><br />
          <p>ខ. រកសរសេរសមីការប្លង់​ P </p>
          <p>ដោយ​ P កាត់តាមចំណុច A និងមានវិចទ័រណរម៉ាល់ <InlineMath math="\overrightarrow{n}=\overrightarrow{U} \times \overrightarrow{V}" /></p>
          <p>តាមសមីការប្លង់ <InlineMath math={"P: a(x - x_0) + b(y - y_0) + c(z - z_0) = 0"} /> (1)</p>
          <p>ដោយប្លង់​ P កាត់តាមចំណុច <InlineMath math="A(0,-1,-2) => x_0 = 0, y_0 = -1, z_0 = -2" /></p>
          <p>ហើយប្លង់​ P កែង <InlineMath math="\overrightarrow{n}=\overrightarrow{U} \times \overrightarrow{V} = (-2, 3, 1) => a = -2, b = 3, c = 1" /></p><br />
          <p>យក​​ A(0,-1,-2) ជួសក្នុងសមីការប្លង់ (1)៖</p>
          <p><InlineMath math={"P: -2(x - 0) + 3(y + 1) + 1(z + 2) = 0"} /></p>
          <p><InlineMath math={"P: -2x + 3y + 3 + z + 2 = 0"} /> </p>
          <p><InlineMath math={"P: -2x + 3y + z + 5 = 0"} /> </p>
          <p>ដូចនេះសមីការប្លង់ P គឺ <InlineMath math={"-2x + 3y + z + 5 = 0"} />។</p>

        </div>,
        <div key="a4" className="space-y-2">
          <p><b>ក. កំណត់កូអរដោនេនៃវុចទ័រ </b><InlineMath math="\overrightarrow{BA} \times \overrightarrow{BC}" /></p>
          <p>គេមានចំណុច <InlineMath math="A(2,-1,3), B(4,1,0), C(3,2,2)" /> និង <InlineMath math="D(-1,-1,3)" /><br /></p>
          <p>ដោយ​៖</p>
          <p><InlineMath math="\overrightarrow{BA} = (2 - 4, -1 - 1, 3 - 0) " /></p>
          <p><InlineMath math="\overrightarrow{BA} = (-2, -2, 3)" /></p>
          <p><InlineMath math="\overrightarrow{BC} = (3 - 4, 2 - 1, 2 - 0) " /></p>
          <p><InlineMath math="\overrightarrow{BC} = (-1, 1, 2)" /></p>
          <p>យើងបាន៖</p>
          <p><InlineMath math={String.raw`\overrightarrow{BA} \times \overrightarrow{BC} = \begin{vmatrix} \vec{i} & \vec{j} & \vec{k} \\ -2 & -2 & 3 \\ -1 & 1 & 2 \end{vmatrix}`} /></p><br />
          <p><InlineMath math={String.raw`= \begin{vmatrix} -2 & 3 \\ 1 & 2 \end{vmatrix}\vec{i} - \begin{vmatrix} -2 & 3 \\ -1 & 2 \end{vmatrix}\vec{j} + \begin{vmatrix} -2 & -2 \\ -1 & 1 \end{vmatrix}\vec{k}`} /></p><br />
          <p><InlineMath math={String.raw`= ( -2 \times 2 - 3 \times 1 ) \vec{i} - ( -2 \times 2 - 3 \times (-1) ) \vec{j} + ( -2 \times 1 - (-2 \times -1 )) \vec{k}`} /></p>
          <p><InlineMath math={String.raw`= (-4 - 3)\vec{i} - (-4 + 3)\vec{j} + (-2 - 2)\vec{k}`} /></p>
          <p><InlineMath math={String.raw`= (-7)\vec{i} + \vec{j} + (-4)\vec{k}`} /></p>
          <p>ដូចនេះ​ <InlineMath math="\overrightarrow{BA} \times \overrightarrow{BC} = (-7, 1, -4)" />។</p><br />
          <p><b>+ គណនាផ្ទៃក្រឡានៃ</b> <InlineMath math="\triangle ABC" /></p>
          <p>តាមរូបមន្ត៖ <InlineMath math="\triangle ABC" /><InlineMath math="= \frac{1}{2} \left| \overrightarrow{BA} \times \overrightarrow{BC} \right|" /></p>
          <p>ដោយ​៖ <InlineMath math="\overrightarrow{BA} \times \overrightarrow{BC} = (-7, 1, -4)" /></p>
          <p>នាំឲ៖ <InlineMath math="\triangle ABC" /><InlineMath math="= \frac{1}{2} \sqrt{(-7)^2 + 1^2 + (-4)^2}" />​</p>
          <p>ដូចនេះ <InlineMath math="\triangle ABC" /> មានផ្ទៃ <InlineMath math="= \frac{1}{2} \sqrt{66}" /> ឯកតាផ្ទៃ ។</p><br />
          <p><b>ខ. កំណត់សរសេរសមីការប្លង់​ <InlineMath math=" ABC " /></b></p>
          <p>តាមរូបមន្ត៖ <InlineMath math="ABC: a(x - x_o) + b(y - y_0) + c(z - z_0) = 0 " /> (1)</p>
          <p>ដោយ​ <InlineMath math=" ABC " /> កាត់តាមចំណុច <InlineMath math="A(2,-1,3) => (x_0 = 2, y_0 = 2, z_0 = 3)" /></p>
          <p>ហើយប្លង់​​<InlineMath math="ABC កែង \overrightarrow{BA} \times \overrightarrow{BC} => (a = -7, b = 1, c = -4)" /></p>
          <p>យក​ <InlineMath math="A និង \overrightarrow{BA} \times \overrightarrow{BC}" /> ជួសក្នុងសមីការប្លង់ (1)៖</p>
          <p><InlineMath math={"ABC: -7(x - 2) + 1(y + 1) - 4(z - 3) = 0"} /></p>
          <p><InlineMath math={"-7x + 14 + y + 1 - 4z + 12 = 0"} /> </p>
          <p><InlineMath math={"-7x + y - 4z + 27 = 0"} /> </p>
          <p>ដូចនេះសមីការប្លង់ <InlineMath math=" ABC " /> គឺ <InlineMath math={"-7x + y - 4z + 27 = 0"} />។</p><br />
          <p><b>+ បង្ហាញថា​ </b><InlineMath math="D \notin ABC" /></p>
          <p>យកកូអរដោនេចំណុច D ជួសក្នុងសមីការប្លង់ ABC</p>
          <p><InlineMath math={"-7(-1) + (-1) - 4(3) + 27 = 0"} /> </p>
          <p><InlineMath math={"7 - 1 - 12 + 27 = 0"} /> </p>
          <p><InlineMath math={"21 = 0"} /> (មិនពិត) </p>
          <p>ដូចនេះ <InlineMath math="D \notin ABC" />។</p><br />
          <p>គ. គណនា<InlineMath math="(\overrightarrow{BA} \times \overrightarrow{BC}) \cdot \overrightarrow{BD}" /></p>
          <p>ដោយ​៖ <InlineMath math="(\overrightarrow{BD} = (-1-4, -1-1, 3-0)) " /></p>
          <p>នាំឲ៖ <InlineMath math="\overrightarrow{BD} = (-5, -2, 3)" /></p>
          <p><InlineMath math="\overrightarrow{BA} \times \overrightarrow{BC} = (-7, 1, -4)" /></p>
          <p>យើងបាន៖</p>
          <p><InlineMath math={String.raw`(\overrightarrow{BA} \times \overrightarrow{BC}) \cdot \overrightarrow{BD} = (-7, 1, -4) \cdot (-5, -2, 3)`} /></p>
          <p><InlineMath math={String.raw`= (-7)(-5) + (1)(-2) + (-4)(3)`} /></p>
          <p><InlineMath math={String.raw`= 35 - 2 - 12`} /></p>
          <p><InlineMath math={String.raw`= 21`} /></p>
          <p>ដូចនេះ <InlineMath math="(\overrightarrow{BA} \times \overrightarrow{BC}) \cdot \overrightarrow{BD} = 21" />។</p><br />
          <p><b>+ ទាញរកមាឌតេត្រាអែតនៃ <InlineMath math="ABCD" /></b></p>
          <p>តាមរូបមន្ត៖ <InlineMath math="ABCD = \frac{1}{6} \left| (\overrightarrow{BA} \times \overrightarrow{BC}) \cdot \overrightarrow{BD} \right|" /></p>
          <p>ដោយ​ <InlineMath math="(\overrightarrow{BA} \times \overrightarrow{BC}) \cdot \overrightarrow{BD} = 21" /></p>
          <p>នាំឲ៖ <InlineMath math="ABCD = \frac{1}{6} \left| 21 \right|  " /></p>
          <p>ដូចនេះ <InlineMath math="= \frac{7}{2}" /> ឯកតា ។</p>

        </div>
      ]
    },
    {
      id: "ex2",
      title: "លំហាត់អនុវត្តទី ២",
      description: "ចូរដោះស្រាយលំហាត់ខាងក្រោមរួចផ្ទៀងផ្ទាត់ចម្លើយ៖",
      problemType: "Linear Non-Homogeneous 1st Order",
      problems: [
        <div key="ex2-1">
          នៅក្នុងតម្រុយអរតូណរម៉ាល់ <InlineMath math="(O,\vec{i},\vec{j},\vec{k})" /> គេឲ្យចំណុច <InlineMath math="A(2,-3,1), B(3,5,5), C(6,7,8)" /> និង <InlineMath math="D(10,-2,3)" />។<br />
          ក. គណនា <InlineMath math="\overrightarrow{AB}, \overrightarrow{AC} និង \overrightarrow{AB} \cdot \overrightarrow{AC}" /> រួចទាញរកផ្ទៃក្រឡានៃ <InlineMath math="\triangle ABC" />។<br />
          ខ. គណនា <InlineMath math="\overrightarrow{DA} \cdot \overrightarrow{AB}" /> និង <InlineMath math="\overrightarrow{DA} \cdot \overrightarrow{AC}" /> រួចបង្ហាញថា <InlineMath math="\overrightarrow{DA} \perp \overrightarrow{BC}" />។<br />
          គ. សរសេរសមីការប្លង់ BCD។<br />
          ឃ. រកកូអរដោនេនៃចំណុច E ដែល <InlineMath math="\overrightarrow{AE} = \overrightarrow{AB} + \overrightarrow{AC} + \overrightarrow{AD}" />។<br />
          ង. បង្ហាញថា <InlineMath math="\overrightarrow{AE} \perp BCD" />។
        </div>,
        <div key="ex2-2">
          ក. នៅក្នុងតម្រុយអរតូណរម៉ាល់ មានទិសដៅវិជ្ជមាន <InlineMath math="(O,\vec{i},\vec{j},\vec{k})" /> គេមានចំណុច <InlineMath math="A(2,2,1), B(4,2,0), C(3,1,1), D(1,5,2)" />។<br />
          រួចបង្ហាញថា ចតុឡុង <InlineMath math="ABCD" /> ជាប្រលេប៉ែត។ រកផ្ទៃបាត និងផ្ទៃសរុបនៃប្រលេប៉ែតនេះ។<br />
          ខ. រកសមីការប៉ារ៉ាម៉ែត្រនៃបន្ទាត់ផ្នែកតែមួយ តាមចំណុច <InlineMath math="B(4,2,0)" /> និង <InlineMath math="A(2,2,1)" />។<br />
          គ. រកសមីការប្លង់តាមចំណុច <InlineMath math="A(2,2,1), B(4,2,0), D(1,5,2)" />។
        </div>,
        <div key="ex2-3">
          នៅក្នុងតម្រុយអរតូណរម៉ាល់ <InlineMath math="(O,\vec{i},\vec{j},\vec{k})" /> គេមានចំណុច <InlineMath math="A(1,2,3), B(3,0,1), C(-1,0,1), D(2,1,2)" />។<br />
          ក. រកវ៉ិចទ័រ <InlineMath math="\overrightarrow{AB}, \overrightarrow{AC}, \overrightarrow{AD}, \overrightarrow{BC}" />។<br />
          ខ. បង្ហាញថា ចំណុច A, B, C មិនស្ថិតនៅលើប្លង់តែមួយ។<br />
          គ. បង្ហាញថា <InlineMath math="\vec{n} = (0, -1, 1)" /> ជាវិចទ័រណរម៉ាល់នៃប្លង់ <InlineMath math="(ABC)" />។
        </div>,
        <div key="ex2-4">
          នៅក្នុងតម្រុយអរតូណរម៉ាល់ មានទិសដៅវិជ្ជមាន <InlineMath math="(O,\vec{i},\vec{j},\vec{k})" /> គេមានចំណុច <InlineMath math="A(2,2,0), B(0,2,2), C(1,0,1)" />។<br />
          ក្. រកសមីការសរសេរ S ដែលមានអង្កត់ផ្ចិត [AB]។ រកកូអរដោនេនៃចំណុចប្រសព្វទាំងពីររវាងសរសេរ S និងបន្ទាត់ d ដែលមានសមីការ <InlineMath math="x = 1 + t, y = 2, z = 1 + t, t \in \mathbb{R}" />។<br />
          ខ. រកកូអរដោនេនៃវ៉ិចទ័រណរម៉ាល់ <InlineMath math="\vec{n} = \overrightarrow{CA} \times \overrightarrow{CB}" />។ គណនាផ្ទៃក្រឡានៃ <InlineMath math="\triangle ABC" />។ រកសមីការប្លង់ <InlineMath math="ABC" />។<br />
          គ. ប្លង់ <InlineMath math="ABC" /> កាត់អ័ក្ស OX នៅមុំ M និងកាត់អ័ក្ស OZ នៅមុំ N។ រកកូអរដោនេនៃចំណុច M និង N។ បង្ហាញថា <InlineMath math="\overrightarrow{AB} = \overrightarrow{MN}" /> និង <InlineMath math="\overrightarrow{MA} \cdot \overrightarrow{MN} = 0" />។ ទាញរកថា <InlineMath math="ABNM" /> ជាចតុកោណសក្ង។<br />
          ឃ. រកចម្លើយពិតចំណុច <InlineMath math="D(0,2,0)" /> នៅលើប្លង់ <InlineMath math="ABC" />។ ទាញរកមាឌនៃតេត្រាអេត <InlineMath math="DBCA" />។
        </div>,
        <div key="ex2-5">
          នៅក្នុងតម្រុយអរតូណរម៉ាល់ មានទិសដៅវិជ្ជមាន <InlineMath math="(O,\vec{i},\vec{j},\vec{k})" /> គេមានចំណុច <InlineMath math="A(3,1,4), B(-1,2,5), C(5,-2,3)" />។<br />
          ក្. រកសមីការប៉ារ៉ាម៉ែត្រនិងសមីការចម្លើយនៃបន្ទាត់ D ដែលកាត់តាមចំណុច C និងមានវ៉ិចទ័រប្រាប់ទិស <InlineMath math="\overrightarrow{AB}" />។<br />
          ខ. រកសមីការប្លង់ <InlineMath math="P" /> ដែលមានវ៉ិចទ័រណរម៉ាល់ <InlineMath math="\overrightarrow{AC}" /> និងកាត់តាមចំណុច B។ រកសមីការសស្វ៊ែ S ដែលមានអង្កត់ផ្ចិត [AB]។<br />
          គ. គណនា <InlineMath math="\overrightarrow{AB} \times \overrightarrow{AC}" />។ គណនាផ្ទៃក្រឡានៃ <InlineMath math="\triangle ABC" />។<br />
          M ជាចំណុចប្រសព្វរវាងបន្ទាត់ D និងប្លង់ P។ រកកូអរដោនេនៃចំណុច M។
        </div>
      ],
      answers: [
        <div key="a1" className="space-y-2">
          <p>ក. <InlineMath math="\overrightarrow{AB} = 9, \overrightarrow{AC} = 9 និង \overrightarrow{AB} \cdot \overrightarrow{AC} = 0" /> </p>
          <p>ខ. <InlineMath math="\overrightarrow{DA} \cdot \overrightarrow{AB} = 0" /> និង <InlineMath math="\overrightarrow{DA} \cdot \overrightarrow{AC} = 0" /> រួចបង្ហាញថា <InlineMath math="\overrightarrow{DA} \perp \overrightarrow{BC}" />។</p>
          <p>គ. <InlineMath math="BCD">ជាត្រីកោណសម័ង្ស។</InlineMath></p>
          <p>ឃ. <InlineMath math="E(15, 2, 8)" /></p>
          <p>ង. <InlineMath math="\overrightarrow{AE} \perp BCD" /></p>
        </div>,
        <div key="a2" className="space-y-2">
          <p>ក. ក្នុងចតុកោណ​ ABCD មានជ្រុងពីរឈមគ្នាស្របរៀងគ្នានិងស្មើគ្នា នោះវាជាប្រលេឡូក្រាម។</p>
          <p>+ ផ្ទៃក្រឡានៃ <InlineMath math="\triangle ABC" /> : <InlineMath math="S = \sqrt{6} " /> ឯកតាផ្ទៃ </p>
          <p>ខ. <InlineMath math="AB: x = 2 + 2t, y = 2 - 4t, z = 1 + t , t \in \mathbb{R}" /> </p>
          <p>គ. <InlineMath math="ABC: x + y - 2z - 2 = 0" /></p>
        </div>,
        <div key="a3" className="space-y-2">
          <p>ក. <InlineMath math="\overrightarrow{AB} = (2, -2, -2), \overrightarrow{AC} = (-2, -2, -2), \overrightarrow{AD} = (1, -1, -1), \overrightarrow{BC} = (-4, 0, 0)" /></p>
          <p>ខ. ចំណុច A, B, C មិនស្ថិតនៅលើប្លង់តែមួយ។</p>
          <p>គ. <InlineMath math="\vec{n} = (0, -1, 1)" /> ជាវិចទ័រណរម៉ាល់នៃប្លង់ <InlineMath math="(ABC)" />។</p>
        </div>,
        <div key="a4" className="space-y-2">
          <p>ក. សមីរការសស្វ៊ែ s = ...</p>
          <p>+ S ប្រសព្វ d ត្រង់ (0,2,0) និង(2,2,2)</p>
          <p>ខ. <InlineMath math="\vec{n} = (4, 0, 4)" /> </p>
          <p>+ ផ្ទៃក្រឡានៃ <InlineMath math="\triangle ABC" /> : <InlineMath math="S = 2\sqrt{2} " /> ឯកតាផ្ទៃ </p>
          <p>+ សមីការប្លង់ <InlineMath math="ABC: x + z - 2 = 0" /></p>
          <p>គ. M(2, 0, 0) និង N(0, 0, 2)</p>
          <p>+ <InlineMath math="\overrightarrow{AB} = \overrightarrow{MN}" /> និង <InlineMath math="\overrightarrow{MA} \cdot \overrightarrow{MN} = 0" />។</p>
          <p>+ <InlineMath math="ABNM" /> ជាចតុកោណកែង។</p>
          <p>+ <InlineMath math="d(D, ABC) = \sqrt{2}" />ឯកតាប្រវែង</p>
          <p>+ <InlineMath math="v = \frac{4}{3}" /> ឯកតាមាឌ</p>
        </div>,
        <div key="a5" className="space-y-2">
          <p>ក. <InlineMath math="D: x=5-4t, y=-2+t, z=3+t, t \in \mathbb{R}" /></p>
          <p>ខ. <InlineMath math="P: 2x - 3y - z + 13= 0" /></p>
          <p>+ <InlineMath math="S: (x-1)^2 + (y-\frac{3}{2})^2 + (z-\frac{9}{2})^2 = \frac{9}{2}" /></p>
          <p>គ. <InlineMath math="\overrightarrow{AB} \times \overrightarrow{AC} = 2\vec{i} - 2\vec{j} + 10\vec{k}" /></p>
          <p>+ ផ្ទៃក្រឡានៃ <InlineMath math="\triangle ABC" /> : <InlineMath math="S = 3\sqrt{3} " /> ឯកតាផ្ទៃ </p>
          <p>+ D ប្រសព្វ​​ P ត្រង់ <InlineMath math="(M (-\frac{11}{3}, \frac{1}{6}, \frac{31}{6}))" /></p>
        </div>
      ]
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

export default VectorPractice
