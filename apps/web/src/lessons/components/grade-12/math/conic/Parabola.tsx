

"use client";

import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";

const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "តើប៉ារ៉ាបូលជាអ្វី?",
    content: (
      <div className="ml-2">
        ប៉ារ៉ាបូល គឺជាសំណុំចំណុចនៅក្នុងប្លង់ដែលមានចម្ងាយស្មើពីចំណុចនឹង F
        មួយនិងបន្ទាត់នឹង ∆ មួយនៅក្នុងប្លង់នោះ។ <br />
        • ចំណុច <InlineMath math="F" /> ហៅថា <strong>កំណុំ​</strong> <br />
        • បន្ទាត់ <InlineMath math="\Delta" /> ហៅថា <strong>បន្ទាត់ប្រាប់ទិស​</strong> <br />
        • ចំណុច <InlineMath math="V(h,k)" /> ហៅថា <strong>កំពូលប៉ារ៉ាបូល​</strong> <br />
        • បន្ទាត់ <InlineMath math="x = h" /> ហៅថា <strong>អ័ក្សសមស្មើ​</strong> <br />
      </div>
    ),
  },
  {
    type: "tip",
    title: "គន្លឹះសំខាន់",
    content: (
      <div className="ml-2">
        • ប្រសិនបើ <InlineMath math="p > 0" /> ប៉ារ៉ាបូលបើកឡើងលើ <br />
        • ប្រសិនបើ <InlineMath math="p < 0" /> ប៉ារ៉ាបូលបើកចុះក្រោម <br />
        • ចម្ងាយពីកំពូលទៅកំណុំ = <InlineMath math="|p|" /> <br />
        • ចម្ងាយពីកំពូលទៅបន្ទាត់ប្រាប់ទិស = <InlineMath math="|p|" /> <br />
      </div>
    ),
  },
  {
    type: "hint",
    content: (
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-indigo-800 mb-4">ប្រភេទនៃប៉ារ៉ាបូល</h3>
        {/* Standard Forms at Origin */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
          <h3 className="text-lg font-bold text-blue-800 mb-4">
            សមីការស្តង់ដានៃប៉ារ៉ាបូលដែលមានកំពូលជាគល់អ័ក្សកូអរដោនេរ
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Vertical Parabola */}
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-blue-700 mb-3 flex items-center">
                ▶ អ័ក្សឆ្លុះជាអ័ក្សឈរ(​អ័ក្សអរដោនេរ​)
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• សមីការគ្រឹះ៖ <InlineMath math="y^2 = 4px" /></li>
                <li>• កំពូល <InlineMath math="V(0,0)" /></li>
                <li>• កំណុំ <InlineMath math="F(p,0)" /></li>
                <li>• បន្ទាត់ប្រាប់ទិស <InlineMath math="x = -p" /></li>
                <li>• <InlineMath math="p > 0" /> ប៉ារ៉ាបូលបើកទៅខាងស្ដាំ <InlineMath math="x > 0" /></li>
                <li>• <InlineMath math="p < 0" /> ប៉ារ៉ាបូលបើកទៅខាងឆ្វេង <InlineMath math="x < 0" /></li>
              </ul>
            </div>
            {/* Horizontal Parabola */}
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h4 className="font-semibold text-blue-700 mb-3 flex items-center">
                ▶ អ័ក្សឆ្លុះជាអ័ក្សដេក(​អ័ក្សអាប់សុីស​)
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• សមីការគ្រឹះ៖ <InlineMath math="x^2 = 4py" /></li>
                <li>• កំពូល <InlineMath math="V(0,0)" /></li>
                <li>• កំណុំ <InlineMath math="F(0,p)" /></li>
                <li>• បន្ទាត់ប្រាប់ទិស <InlineMath math="y = -p" /></li>
                <li>• <InlineMath math="p > 0" /> ប៉ារ៉ាបូលបើកឡើងលើ <InlineMath math="y > 0" /></li>
                <li>• <InlineMath math="p < 0" /> ប៉ារ៉ាបូលបើកចុះក្រោម <InlineMath math="y < 0" /></li>
              </ul>
            </div>
          </div>
        </div>
        {/* General Forms */}
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border border-emerald-200">
          <h3 className="text-lg font-bold text-emerald-800 mb-4">
            សមីការស្តង់ដានៃប៉ារ៉ាបូលដែលមានកំពូលខុសពីគល់អ័ក្សកូអរដោនេរ
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Vertical General Form */}
            <div className="bg-white p-4 rounded-lg border border-emerald-100">
              <h4 className="font-semibold text-emerald-700 mb-3 flex items-center">
                ▶ អ័ក្សឆ្លុះជាអ័ក្សដេក(​អ័ក្សអាប់សុីស​)
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• សមីការគ្រឹះ៖ <InlineMath math="(y-k)^2 = 4p(x-h)" /></li>
                <li>• កំពូល <InlineMath math="V(h,k)" /></li>
                <li>• កំណុំ <InlineMath math="F(h+p,k)" /></li>
                <li>• បន្ទាត់ប្រាប់ទិស <InlineMath math="x = h-p" /></li>
                <li>• <InlineMath math="p > 0" /> ប៉ារ៉ាបូលបើកទៅខាងស្ដាំ <InlineMath math="x > 0" /></li>
                <li>• <InlineMath math="p < 0" /> ប៉ារ៉ាបូលបើកទៅខាងឆ្វេង <InlineMath math="x < 0" /></li>
                <li>• សមីការទូទៅប៉ារ៉ាបូល៖ <InlineMath math="By^2 + Cx + Dy + E = 0, B ≠ 0" /></li>
              </ul>
            </div>
            {/* Horizontal General Form */}
            <div className="bg-white p-4 rounded-lg border border-emerald-100">
              <h4 className="font-semibold text-emerald-700 mb-3 flex items-center">
                ▶ អ័ក្សឆ្លុះជាអ័ក្សឈរ(​អ័ក្សអរដោនេរ​)
              </h4>
              <ul className="space-y-2 text-sm">
                <li>• សមីការគ្រឹះ៖ <InlineMath math="(x-h)^2 = 4p(y-k)" /></li>
                <li>• កំពូល <InlineMath math="V(h,k)" /></li>
                <li>• កំណុំ <InlineMath math="F(h,k+p)" /></li>
                <li>• បន្ទាត់ប្រាប់ទិស <InlineMath math="y = k-p" /></li>
                <li>• <InlineMath math="p > 0" /> ប៉ារ៉ាបូលបើកឡើងលើ <InlineMath math="y > 0" /></li>
                <li>• <InlineMath math="p < 0" /> ប៉ារ៉ាបូលបើកចុះក្រោម <InlineMath math="y < 0" /></li>
                <li>• សមីការទូទៅប៉ារ៉ាបូល៖ <InlineMath math="Ax^2 + Cx + Dy + E = 0, A ≠ 0" /></li>
              </ul>
            </div>
          </div>
        </div>
        {/* Key Properties */}
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
          <h4 className="font-medium text-purple-800 mb-2">សេចក្តីសរុប៖</h4>
          <div className="text-sm text-purple-700 space-y-1">
            <p>• ប៉ារ៉ាបូលឈរ៖ អថេរ <InlineMath math="y" /> ស្ថិតក្នុងការេ</p>
            <p>• ប៉ារ៉ាបូលដេក៖ អថេរ <InlineMath math="x" /> ស្ថិតក្នុងការេ</p>
            <p>• <InlineMath math="4p" /> កំណត់ទិសដៅនិងការបើកប៉ារ៉ាបូល</p>
            <p>• តម្លៃ p គឺជាចម្ងាយពីកំពូល (V) ទៅកំណុំ (F) និងពីកំពូល (V) ទៅបន្ទាត់ប្រាប់ទិស (Δ)</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    type: "graph",
    expressions: [
      {
        id: "parabola1", latex: "y = 0.25(x - 2)^2 + 1", color: "#2563eb",
      },
      { id: "vertex", latex: "(2, 1)", color: "#dc2626", },
      { id: "focus", latex: "(2, 2)", color: "#059669" },
      { id: "directrix", latex: "y = 0", color: "#7c3aed" },
      { id: "axis", latex: "x = 2", color: "#ea580c" },
    ],
    options: { showGrid: true, expressions: true, xAxisLabel: "x", yAxisLabel: "y" },
  },
  {
    type: "example",
    question: <span>ដំណោះស្រាយប៉ារ៉ាបូល</span>,
    steps: [
      {
        title: "រកកំណុំ និង បន្ទាត់ប្រាប់ទិស",
        content: (
          <div className="space-y-4">
            <p>រកកំណុំ និង បន្ទាត់ប្រាប់ទិសនៃប៉ារ៉ាបូល៖</p>
            <BlockMath math="(x - 3)^2 = 8(y - 1)" />
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium">ដំណោះស្រាយ៖</p>
              <div className="space-y-3 mt-2">
                <p>ប្រៀបធៀបជាមួយរូបមន្តទូទៅ៖ <InlineMath math="(x - h)^2 = 4p(y - k)" /></p>
                <p>យើងបាន៖ <InlineMath math="h = 3, k = 1, 4p = 8" /></p>
                <p>ដូច្នេះ៖ <InlineMath math="p = 2" /></p>
                <div className="border-l-4 border-blue-400 pl-4 space-y-2">
                  <p>• កំពូល៖ <InlineMath math="V(3, 1)" /></p>
                  <p>• កំណុំ៖ <InlineMath math="F(3, 1 + 2) = F(3, 3)" /></p>
                  <p>• បន្ទាត់ប្រាប់ទិស៖ <InlineMath math="y = 1 - 2 = -1" /></p>
                  <p>• អ័ក្សសមស្មើ៖ <InlineMath math="x = 3" /></p>
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "រកសមីការប៉ារ៉ាបូល",
        content: (
          <div className="space-y-4">
            <p>រកសមីការប៉ារ៉ាបូលដែលមានកំពូល <InlineMath math="V(1, -2)" /> និងកំណុំ <InlineMath math="F(1, 0)" /></p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-medium">ដំណោះស្រាយ៖</p>
              <div className="space-y-3 mt-2">
                <p>កំពូល៖ <InlineMath math="V(h, k) = V(1, -2)" /> ដូច្នេះ <InlineMath math="h = 1, k = -2" /></p>
                <p>ចម្ងាយពីកំពូលទៅកំណុំ៖ <InlineMath math="p = 0 - (-2) = 2" /></p>
                <p>រូបមន្តទូទៅ៖ <InlineMath math="(x - h)^2 = 4p(y - k)" /></p>
                <div className="border-l-4 border-green-400 pl-4">
                  <p>ដូច្នេះសមីការប៉ារ៉ាបូលគឺ៖</p>
                  <BlockMath math="(x - 1)^2 = 4(2)(y - (-2))" />
                  <BlockMath math="(x - 1)^2 = 8(y + 2)" />
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
  },
  {
    type: "warning",
    content: (
      <div className="ml-2">
        • ត្រូវកំណត់ត្រឹមត្រូវថាតើប៉ារ៉ាបូលបើកឡើងលើ ឬ ចុះក្រោម <br />
        • ចាំថា <InlineMath math="4p" /> នៅក្នុងរូបមន្ត មិនមែន <InlineMath math="p" /> ទេ <br />
        • កំណុំនឹងនៅខាងផ្ទៃនៃប៉ារ៉ាបូល <br />
        • បន្ទាត់ប្រាប់ទិសនឹងនៅផ្សេងខាងនៃកំណុំ ពីកំពូល <br />
      </div>
    ),
  },
  {
    type: "exercise",
    questions: [
      {
        id: "1",
        question: (
          <>កំពូលនៃប៉ារ៉ាបូល <InlineMath math="(x-2)^2 = 12(y+3)" /> គឺ៖</>
        ),
        options: ["(2, -3)", "(-2, 3)", "(2, 3)", "(-2, -3)"],
        correctAnswer: 0,
      },
      {
        id: "2",
        question: "ប្រសិនបើប៉ារ៉ាបូលមានកំពូល (0,0) និងកំណុំ (0,3) សមីការរបស់វាគឺ៖",
        options: ["x² = 12y", "x² = 6y", "y² = 12x", "x² = 3y"],
        correctAnswer: 0,
      },
      {
        id: "3",
        question: <>បន្ទាត់ប្រាប់ទិសនៃប៉ារ៉ាបូល <InlineMath math="x^2 = -8y" /> គឺ៖</>,
        options: ["y = 2", "y = -2", "x = 2", "x = -2"],
        correctAnswer: 0,
      },
    ],
  },
];

const Parabola = () => {
  return (
    <div>
      <ContentRendererV3 content={content} />
    </div>
  );
};

export default Parabola;
