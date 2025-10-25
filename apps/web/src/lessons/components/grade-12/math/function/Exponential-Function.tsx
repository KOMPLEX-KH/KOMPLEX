"use client";

import React from "react";
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  serializeTopicContentV3,
  deserializeTopicContentV3,
} from "@/components/pages/docs/utils/ContentSerializerV2";
import { InlineMath } from "react-katex";

// Stage 1: Original authoring shape (TopicContent_V3)
const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "អនុគមន៍អិចស្ប៉ូណង់ស្យែល",
    content: (
      <div className="border-l-4 border-red-500 pl-4 bg-red-50 rounded">
        <div>
          <strong>និយមន័យ</strong> ចំពោះគ្រប់ចំនួនពិត <InlineMath math="x" />{" "}
          អនុគមន៍ f កំណត់ដោយ <InlineMath math="f(x) = e^x" />{" "}
          ហៅថាអនុគមន៍អិចស្ប៉ូណង់ស្យែល គោល <InlineMath math="e" />{" "}
          ឬអនុគមន៍អិចស្ប៉ូណង់ស្យែល។
        </div>
      </div>
    ),
  },
  {
    type: "tip",
    title: "លក្ខណៈគ្រឹះ",
    content: (
      <div className="space-y-2">
        <div>
          គ្រប់ចំនួនពិត <InlineMath math="m" />, <InlineMath math="n" /> គេបាន
        </div>
        <div className="pl-4">
          <div>
            1. <InlineMath math="e^{m+n} = e^m \cdot e^n" />
          </div>
          <div>
            2.{" "}
            <InlineMath math="e^{m-n} = e^m \cdot e^{-n} = \frac{e^m}{e^n}" />
          </div>
          <div>
            3. <InlineMath math="e^{-n} = \frac{1}{e^n}" />
          </div>
          <div>
            4. <InlineMath math="(e^m)^n = e^{mn}" />
          </div>
          <div>
            5. <InlineMath math="e^0 = 1" />
          </div>
          <div>
            6. <InlineMath math="\sqrt[n]{e^m} = e^{\frac{m}{n}}" />
          </div>
          <div>
            7. <InlineMath math="e^{-\infty} = 0" />
          </div>
        </div>
        <div className="mt-4">
          <div>
            <strong>
              ចំនួន <InlineMath math="e" />:
            </strong>
          </div>
          <div className="border p-3 bg-gray-50 rounded">
            <InlineMath math="e = lim_{n \to +\infty} \left(1 + \frac{1}{n}\right)^n \approx 2.7182" />
          </div>
        </div>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div>
        <div className="space-y-2">
          <div className="mt-4">
            <strong>រំលឹក:</strong> ដោះស្រាយសមីការខាងក្រោម
          </div>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div>
              ក. <InlineMath math="e^{2x} = \frac{1}{e^2}" />
            </div>
            <div>
              ខ. <InlineMath math="e^{3x+2} = e^x" />
            </div>
            <div>
              គ. <InlineMath math="\sqrt{e^{4x}} = \frac{1}{e^3}" />
            </div>
            <div>
              ឃ. <InlineMath math="e^{3x} = 10" />
            </div>
            <div>
              ង. <InlineMath math="\frac{1}{e^{3x+2}} > \sqrt{e}" />
            </div>
            <div>
              ច. <InlineMath math="e^{2x+1} \leq \frac{1}{e}" />។
            </div>
          </div>
        </div>
      </div>
    ),
    steps: [
      {
        title: "ដំណោះស្រាយសមីការ",
        content: (
          <div className="space-y-3">
            <div className="space-y-2">
              <div>
                <strong>ក.</strong> <InlineMath math="e^{2x} = \frac{1}{e^2}" />
              </div>
              <div className="ml-4">
                <div>
                  សមមូល: <InlineMath math="e^{2x} = e^{-2}" /> <br />
                  <InlineMath math="\Rightarrow 2x = -2 \Rightarrow x = -1" />
                </div>
                <div>
                  ដូច្នេះ: សមីការមានឬស <InlineMath math="x = -1" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <strong>ខ.</strong> <InlineMath math="e^{3x+2} = e^x" />
              </div>
              <div className="ml-4">
                <div>
                  សមមូល: <InlineMath math="3x+2 = x" />
                  <br />
                  <InlineMath math="\Rightarrow 3x-x = -2" />
                  <br />
                  <InlineMath math="\Rightarrow 2x = -2 \Rightarrow x = -1" />
                </div>
                <div>
                  ដូច្នេះ: សមីការមានឬស <InlineMath math="x = -1" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <strong>គ.</strong>{" "}
                <InlineMath math="\sqrt{e^{4x}} = \frac{1}{e^3}" />
              </div>
              <div className="ml-4">
                <div>
                  សមមូល: <InlineMath math="e^{2x} = e^{-3}" />
                </div>
                <div>
                  <InlineMath math="\Rightarrow 2x = -3 \Rightarrow x = \frac{-3}{2}" />
                </div>
                <div>
                  ដូច្នេះ: សមីការមានឬស <InlineMath math="x = \frac{-3}{2}" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <strong>ឃ. </strong>{" "}
                <InlineMath math="e^{3x+4} = \frac{1}{e^x}" />
              </div>
              <div className="ml-4">
                <div>
                  សមមូល: <InlineMath math="e^{3x+4} = e^{-x}" />
                </div>
                <div>
                  <InlineMath math="\Rightarrow 3x + 4 = -x" />
                  <br />
                  <InlineMath math="3x + x = -4 \Rightarrow x = -1" />
                </div>
                <div>
                  ដូច្នេះ: សមីការមានឬស <InlineMath math="x = -1" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <strong>ង.</strong>{" "}
                <InlineMath math="\frac{1}{e^{3x+2}} > \sqrt{e}" />
              </div>
              <div className="ml-4">
                <div>
                  សមមូល: <InlineMath math="e^{-(3x+2)} > e^{\frac{1}{2}}" />
                </div>
                <div>
                  <InlineMath math="\Rightarrow -3x-2 > \frac{1}{2}" />
                  <br />
                  <InlineMath math="\Rightarrow -3x > \frac{5}{2} \Rightarrow x < -\frac{5}{6}" />
                </div>
                <div>
                  ដូច្នេះ: វិសមីការមានសំណុំ{" "}
                  <InlineMath math="x = \in (-\infty, -\frac{5}{6})" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div>
                <strong>ច.</strong>{" "}
                <InlineMath math="e^{2x+1} \leq \frac{1}{e}" />
              </div>
              <div className="ml-4">
                <div>
                  សមមូល: <InlineMath math="e^{2x+1} \leq e^{-1}" />
                </div>
                <div>
                  <InlineMath math="\Rightarrow 2x + 1 \leq -1" />
                  <br />
                  <InlineMath math="\Rightarrow 2x \leq -2" />
                  <br />
                  <InlineMath math="\Rightarrow x \leq -1" />
                </div>
                <div>
                  ដូច្នេះ: វិសមីការមានសំណុំ{" "}
                  <InlineMath math="x = \in (-\infty, -1]" />
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
    answer: "",
  },
  {
    type: "hint",
    content: (
      <>
        ចំណាំថា អនុគមន៍អិចស្ប៉ូណង់ស្យែល <InlineMath math="a^x" /> មានមូលដ្ឋាន{" "}
        <InlineMath math="a > 0" /> និង <InlineMath math="a \neq 1" />។ ដល់កាលបើ{" "}
        <InlineMath math="a > 1" /> អនុគមន៍កើន ហើយបើ{" "}
        <InlineMath math="0 < a < 1" /> អនុគមន៍ថយ។
      </>
    ),
  },
  {
    type: "warning",
    content: (
      <>
        មិនកូវបង្កការចាំបងអនុគមន៍អិចស្ប៉ូណង់ស្យែលជាមួយនឺង{" "}
        <InlineMath math="x^n" /> (សៀងដែលជភាពអធ្យាចារន័ភាន)
        ព្រោះក្នុងអនុគមន៍អិចស្ប៉ូណង់ស្យែល អថេរនៅខាងលើ ហើយក្នុង{" "}
        <InlineMath math="x^n" /> អថេរនៅខាងក្រោម។
      </>
    ),
  },
  {
    type: "graphExplanation",
    expressions: [
      { id: "1", latex: "f(x) = x + \\frac{1-3e^x}{1+e^x}", color: "#FF4136" },
      { id: "2", latex: "d_1 = x + 1", color: "#0074D9" },
      { id: "3", latex: "d_2 = x - 3", color: "#2ECC40" },
    ],
    explanation: (
      <>
        <div>
          យើងមាន <InlineMath math="f(x) = x + \frac{1-3e^x}{1+e^x}" /> <br />
          <InlineMath math="d_1: y = x + 1" />
          ជាអាស៊ីមតូតទ្រេតទី 1<br />
          <p>តារាងតម្លៃលេខ</p>
          <table className="table-auto border-collapse border border-gray-300 text-left my-4">
            <thead>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left font-bold">
                  x
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-normal">
                  0
                </th>
                <th className="border border-gray-300 px-4 py-2 text-left font-normal">
                  -1
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th className="border border-gray-300 px-4 py-2 text-left font-bold">
                  y
                </th>
                <td className="border border-gray-300 px-4 py-2 text-left">
                  <InlineMath math="1" />
                </td>
                <td className="border border-gray-300 px-4 py-2 text-left">
                  <InlineMath math="0" />
                </td>
              </tr>
            </tbody>
          </table>
          <InlineMath math="d_2: y= x - 3" />
          ជាអាស៊ីមតូតទ្រេតទី 2
        </div>
        <p>តារាងតម្លៃលេខ</p>
        <table className="table-auto border-collapse border border-gray-300 text-left my-4">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left font-bold">
                x
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-normal">
                0
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left font-normal">
                3
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left font-bold">
                y
              </th>
              <td className="border border-gray-300 px-4 py-2 text-left">
                <InlineMath math="-3" />
              </td>
              <td className="border border-gray-300 px-4 py-2 text-left">
                <InlineMath math="0" />
              </td>
            </tr>
          </tbody>
        </table>
      </>
    ),
    options: {
      showGrid: true,
      expressions: true,
      xAxisLabel: "x",
      yAxisLabel: "y",
    },
  },
  {
    type: "tip",
    title: "សមីការអិចស្ប៉ូណង់ស្យែល",
    content: (
      <div>
        <div className="ml-2">
          <div>រូបមន្ត :</div>
          <div>
            ក. <InlineMath math="e^x = e^a" /> សមមូល <InlineMath math="x = a" />
          </div>
          <div>
            ខ. <InlineMath math="e^{u(x)} = e^{v(x)}" /> សមមូល{" "}
            <InlineMath math="u(x) = v(x)" />
          </div>
          <div>
            គ. <InlineMath math="e^x = k" /> សមមូល{" "}
            <InlineMath math="x = \ln k" /> ដូច <InlineMath math="k > 0" />។
          </div>
        </div>
      </div>
    ),
  },
  {
    type: "definition",
    title: "វិសមីការអិចស្ប៉ូណង់ស្យែល",
    content: (
      <div className="space-y-2 ml-4">
        <div>រូបមន្ត:</div>
        <div>
          ក. <InlineMath math="e^x > e^a" /> សមមូល <InlineMath math="x > a" /> ឬ{" "}
          <InlineMath math="x \in (a, +\infty)" />
        </div>
        <div>
          ខ. <InlineMath math="e^x < e^a" /> សមមូល <InlineMath math="x < a" /> ឬ{" "}
          <InlineMath math="x \in (-\infty, a)" />
        </div>
        <div>
          គ. <InlineMath math="e^x > k" /> សមមូល <InlineMath math="x > \ln k" />{" "}
          ដែល <InlineMath math="k > 0" />
        </div>
        <div>
          ប. <InlineMath math="e^x < k" /> សមមូល <InlineMath math="x < \ln k" />{" "}
          ដែល <InlineMath math="k > 0" />
        </div>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div>
        <div className="font-bold mb-3">៤. សិក្សាអនុគមន៍អ៊ិចស៉្បូណង់ស្យែល</div>
        <div className="space-y-3">
          <div>
            <strong>លំហាត់គំរូ ៖</strong> គេមានអនុគមន៍ <InlineMath math="f" />{" "}
            កំណត់លើ <InlineMath math="\mathbb{R}" /> ដោយ{" "}
            <InlineMath math="f(x) = x + \frac{1-3e^x}{1+e^x}" /> តាងដោយក្រាប{" "}
            <InlineMath math="C" /> ក្រាបរបស់អនុគមន៍នៅ
            ក្នុងប្លង់ដោយតម្រុយអរតូណរម៉ាល់{" "}
            <InlineMath math="(O, \overrightarrow{i}, \overrightarrow{j})" />។
          </div>
          <div>
            <strong>១. បង្ហាញថា</strong>{" "}
            <InlineMath math="f(x) = x + 1 - \frac{4e^x}{1+e^x}" />{" "}
            និងគណនាលីមីតនៃ <InlineMath math="f" /> ត្រង់{" "}
            <InlineMath math="-\infty" /> និងស្រាយថា បន្ទាត់ (d) ដែលមានសមីការ{" "}
            <InlineMath math="y = x + 1" />
            ជាអាស៊ីមតូតទ្រេតនៃក្រាប (c) រួចសិក្សាទីតាំងនៃក្រាប (c)
            ធៀបនឹងបន្ទាត់ (d)
          </div>
          <div>
            <div>
              <strong>២. កំណត់លីមីត</strong> <InlineMath math="f" /> ត្រង់{" "}
              <InlineMath math="+\infty" /> និងស្រាយថា{" "}
              <InlineMath math="d_2 = y = x-3" /> ជាអាស៊ីមតូតទ្រេត{" "}
              <InlineMath math="C" /> ​រូចសិក្សាទីតាំងនៃក្រាប (c)​ ធៀបនឹងបន្ទាត់
              (d)
            </div>
          </div>

          <div>
            <div>
              <strong>
                ៣. ក. បង្ហាញថាគ្រប់ <InlineMath math="x" />,{" "}
                <InlineMath math="f'(x) = \left(\frac{e^x-1}{e^x+1}\right)^2" />
                ។
              </strong>
            </div>
            <div className="ml-4">
              <div>
                <strong>ខ. សិក្សាអថេរភាពនៃអនុគមន៍</strong>{" "}
                <InlineMath math="f" /> រួចសង់តារាងអថេរភាពនៃ
                <InlineMath math="f" />។
              </div>
              <div>
                សង់ក្រាប <InlineMath math="C" /> និងអាស៊ីមតូត{" "}
                <InlineMath math="d_1" /> និង <InlineMath math="d_2" /> របស់វា
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
    steps: [
      {
        title: (
          <div>
            បង្ហាញថា <InlineMath math="f(x) = x + 1 - \frac{4e^x}{1+e^x}" />
          </div>
        ),
        content: (
          <div className="space-y-3">
            <div>
              <div>
                ដោយ <InlineMath math="f(x) = x + \frac{1-3e^x}{1+e^x}" />
                <br /> (ត្រូវ​ថែម 1និង​ -1 មកវិញ)
              </div>
              <div>
                <InlineMath math="\Rightarrow f(x)= x + 1 - 1 - \frac{1-3e^x}{1+e^x}" />
                <br />
                (តម្រូវភាគបែងត្រង់​ -1 )
              </div>
              <div>
                <InlineMath math="= x + 1 - \frac{1-e^{3x}-1-e^x}{1+e^x}" />
              </div>
              <div>
                <InlineMath math="\Rightarrow f(x) = x + 1 - \frac{4e^x}{1+e^x}" />
              </div>
            </div>

            <div className="mt-4">
              <div>
                <strong>• កំណត់លីមីត</strong> <InlineMath math="f" /> ត្រង់{" "}
                <InlineMath math="-\infty" />
              </div>
              <div className="ml-2">
                <div className="ml-4">
                  <InlineMath math="lim_{x \to -\infty} f(x) " />
                </div>
                <div>
                  <InlineMath math="= lim_{x \to -\infty}(x + 1 - \frac{4e^x}{1+e^x}) = -\infty" />
                </div>
                <div>
                  ដូច្នេះ:{" "}
                  <InlineMath math="lim_{x \to -\infty} f(x) = -\infty" />។
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div>
                <strong>
                  • ស្រាយថាបន្ទាត់ <InlineMath math="d_1" />:{" "}
                  <InlineMath math="y = x + 1" /> ជាអាស៊ីមតូតទ្រេតនៃក្រាប{" "}
                  <InlineMath math="C" /> ត្រង់ <InlineMath math="-\infty" />
                </strong>
              </div>
              <div className="ml-4">
                <div>
                  លុះត្រាតែ{" "}
                  <InlineMath math="lim_{x \to -\infty} [f(x) - (x + 1)] = 0" />
                </div>
                <div>
                  <InlineMath math="\Rightarrow lim_{x \to -\infty}[x + 1 - \frac{4e^x}{1+e^x}) -(x+1)]" />
                </div>
                <div>
                  <InlineMath math="\Rightarrow lim_{x \to -\infty} \left(-\frac{4e^x}{1+e^x}\right) = 0" />{" "}
                  ពិត
                </div>
                <div>
                  ដូច្នេះ បន្ទាត់
                  <InlineMath math="d_1" />: <InlineMath math="y = x + 1" />{" "}
                  ជាអាស៊ីមតូតទ្រេតនៃក្រាប <InlineMath math="C" /> ត្រង់{" "}
                  <InlineMath math="-\infty" />។
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div>
                <strong>
                  • សិក្សាទីតាំងនៃក្រាប <InlineMath math="C" /> ធៀបនឹងបន្ទាត់{" "}
                  <InlineMath math="d_1" />
                </strong>
              </div>
              <div className="ml-4">
                <div>
                  ដោយ <InlineMath math=" C - (d_1) " />
                </div>
                <div>
                  <InlineMath math="=[x + 1 - \frac{4e^x}{1+e^x}) -(x+1)] " />
                </div>
                <div>
                  <InlineMath math="= -\frac{4e^x}{1+e^x} < 0" />
                </div>
                <div>
                  <InlineMath math="\Rightarrow C < d_1" />
                </div>
                <div>
                  ដូច្នេះ ក្រាប <InlineMath math="c" /> ស្ថិតនៅក្រោមបន្ទាត់
                  <InlineMath math="y = x + 1" /> ជានិច្ច។
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: " កំណត់លីមីត f ក្រុម +∞",
        content: (
          <div>
            <div>
              <div className="ml-1">
                • <InlineMath math="lim_{x \to +\infty} f(x)" />{" "}
              </div>
              <div>
                <InlineMath math="= lim_{x \to +\infty} \left(x + \frac{1-3e^x}{1+e^x}\right)" />
              </div>
              <div>
                <InlineMath math="= lim_{x \to +\infty} \left(x + \frac{e^x\left(\frac{1}{e^x} - 3\right)}{e^x\left(\frac{1}{e^x} + 1\right)}\right)" />
              </div>
              <div>
                <InlineMath math="= lim_{x \to +\infty} \left(x + \frac{\frac{1}{e^x} - 3}{\frac{1}{e^x} + 1}\right)" />
              </div>
              <div>
                <InlineMath math="= +\infty" />
              </div>
            </div>
            <div>
              ដូច្នេះ: <InlineMath math="\lim_{x \to +\infty} f(x) = +\infty" />
              ។
            </div>

            <div className="mt-4">
              <div>
                <strong>
                  • ស្រាយថាបន្ទាត់
                  <InlineMath math="d_2" />: <InlineMath math="y = x - 3" />{" "}
                  ជាអាស៊ីមតូតទ្រេតនៃក្រាប C{" "}
                </strong>
              </div>
              <div className="ml-4">
                <div>
                  លុះត្រាតែ{" "}
                  <InlineMath math="\Rightarrow lim_{x \to +\infty} [f(x) - (x - 3)] = 0" />
                </div>
                <div>
                  <InlineMath math="\Rightarrow lim_{x \to +\infty} \left(x + \frac{1-3e^x}{1+e^x} - (x - 3)\right) = 0" />
                </div>
                <div>
                  <InlineMath math="\Rightarrow lim_{x \to +\infty} \left(\frac{1-3e^x}{1+e^x} + 3\right) = 0" />
                </div>
                <div>
                  <InlineMath math="\Rightarrow lim_{x \to +\infty} \left(\frac{1-3e^x + 3 + 3e^x}{1+e^x}\right) = 0" />
                </div>
                <div>
                  <InlineMath math="\Rightarrow lim_{x \to +\infty} \left(\frac{4}{1+e^x}\right) = 0" />
                  ពិត{" "}
                </div>

                <div>
                  ដូច្នេះ: បន្ទាត់​ <InlineMath math="d_2" />:{" "}
                  <InlineMath math="y = x - 3" /> ជាអាស៊ីមតូតទ្រេតនៃក្រាប{" "}
                  <InlineMath math="C" /> ក្រុម <InlineMath math="+\infty" />។
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "៣. កំណត់ដេរីវេ f'(x) និងសិក្សាតម្លៃអថេរភា",
        content: (
          <div className="space-y-3">
            <div>
              <div>
                យើងមាន <InlineMath math="f(x) = x + 1 - \frac{4e^x}{1+e^x}" />
              </div>
              <div>
                <InlineMath math="\Rightarrow f'(x) = 1 - \frac{4e^x(1+e^x) - 4e^x \cdot e^x}{(1+e^x)^2}" />
              </div>
              <div>
                <InlineMath math="= 1 - \frac{4e^x + 4e^{2x} - 4e^{2x}}{(1+e^x)^2}" />
              </div>
              <div className="flex flex-row gap-2">
                <div>
                  <InlineMath math="= 1 - \frac{4e^x}{(1+e^x)^2}" />
                </div>
                <div className="text-xs">
                  តម្រូវភាគបែង 1 ដោយគុណជាមួយ
                  <InlineMath math="(1+e^x)^2" />
                </div>
              </div>
            </div>
            <div>
              <InlineMath math="= \frac{(1+e^x)^2 - 4e^x}{(1+e^x)^2}" />
            </div>
            <div>
              <InlineMath math="= \frac{1 + 2e^x + e^{2x} - 4e^x}{(1+e^x)^2}" />
            </div>
            <div>
              <InlineMath math="= \frac{1 - 2e^x + e^{2x}}{(1+e^x)^2}" />
            </div>
            <div>
              <InlineMath math="= \frac{(1-e^x)^2}{(1+e^x)^2}" />
            </div>
            <div>
              <InlineMath math="= \left(\frac{e^x-1}{e^x+1}\right)^2" />
            </div>
            <div>
              ដូច្នេះ:{" "}
              <InlineMath math="f'(x) = \left(\frac{e^x-1}{e^x+1}\right)^2" />។
            </div>

            <div className="mt-4">
              <div>
                <strong>• សិក្សាអថេរភាពនៃអនុគមន៍ f</strong>
              </div>
              <div className="ml-4">
                <div>
                  យើងមាន{" "}
                  <InlineMath math="f'(x) = \left(\frac{e^x-1}{e^x+1}\right)^2" />
                </div>
                <div>
                  បើ{" "}
                  <InlineMath math="f'(x) = 0 \Leftrightarrow e^x - 1 = 0 " />
                </div>
                <div>
                  <InlineMath math="e^x = 1 \Leftrightarrow x = 0" />
                </div>
                <div>
                  គេបាន{" "}
                  <InlineMath math="f'(x) = \left(\frac{e^x-1}{e^x+1}\right)^2​ \geq 0" />{" "}
                  គ្រប់
                  <InlineMath math="x \in \mathbb{R}" />
                </div>
                <div>
                  ដូច្នេះ <InlineMath math="f" /> ជាអនុគមន៍កើនជានិច
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div>
                <strong>• សង់តារាងអថេរភាពនៃអនុគមន៍ f</strong>
              </div>
              <div className="ml-4">
                <div>
                  ចំពោះ <InlineMath math="x = 0" />
                  <InlineMath math="\Rightarrow f(0) = 0 + 1 - \frac{4 \cdot 1}{1+1} = -1" />
                </div>
              </div>
              <div className="w-full max-w-full overflow-hidden bg-white justify-start mt-2">
                <div className="w-[100%] md:w-[25%] max-w-full overflow-hidden bg-white justify-start mt-2">
                  <div className="bg-white">
                    <table
                      className="w-full border-collapse min-w-0"
                      style={{
                        fontSize: "clamp(14px, 4vw, 16px)",
                        fontFamily: "serif",
                      }}
                    >
                      <tbody>
                        {/* First row: x values - 2 columns */}
                        <tr>
                          <td
                            className="border-2 border-black text-center font-normal bg-white"
                            style={{
                              width: "15%",
                              minWidth: "40px",
                              height: "45px",
                              verticalAlign: "middle",
                              fontStyle: "italic",
                            }}
                          >
                            x
                          </td>
                          <td
                            className="border-2 border-black bg-white relative"
                            style={{
                              width: "85%",
                              height: "45px",
                              verticalAlign: "middle",
                            }}
                          >
                            {/* 0⁺ at left */}
                            <div
                              className="absolute"
                              style={{
                                left: "5%",
                                top: "50%",
                                transform: "translateY(-50%)",
                              }}
                            >
                              -∞
                            </div>

                            <div
                              className="absolute"
                              style={{
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%, -50%)",
                                fontSize: "clamp(16px, 5vw, 18px)",
                                fontWeight: "bold",
                                backgroundColor: "white",
                                padding: "0 4px",
                              }}
                            >
                              0
                            </div>

                            {/* +∞ at right */}
                            <div
                              className="absolute"
                              style={{
                                right: "5%",
                                top: "50%",
                                transform: "translateY(-50%)",
                              }}
                            >
                              +∞
                            </div>
                          </td>
                        </tr>

                        {/* Second row: f'(x) - 3 columns with vertical line */}
                        <tr>
                          <td
                            className="border-2 border-black text-center font-normal bg-white"
                            style={{
                              height: "45px",
                              verticalAlign: "middle",
                              fontStyle: "italic",
                            }}
                          >
                            f&apos;(x)
                          </td>
                          <td
                            className="border-2 border-black bg-white relative"
                            style={{
                              height: "45px",
                            }}
                          >
                            {/* Vertical line at center with 0 */}
                            <div
                              className="absolute"
                              style={{
                                left: "50%",
                                top: "0",
                                height: "100%",
                                width: "2px",
                                backgroundColor: "black",
                                transform: "translateX(-50%)",
                              }}
                            ></div>

                            {/* 0 centered on the line */}
                            <div
                              className="absolute"
                              style={{
                                left: "50%",
                                top: "50%",
                                transform: "translate(-50%, -50%)",
                                fontSize: "clamp(16px, 5vw, 18px)",
                                fontWeight: "bold",
                                backgroundColor: "white",
                                padding: "0 4px",
                              }}
                            >
                              0
                            </div>

                            {/* + sign in left interval */}
                            <div
                              className="absolute"
                              style={{
                                left: "25%",
                                top: "50%",
                                transform: "translateY(-50%)",
                                fontSize: "clamp(16px, 5vw, 18px)",
                                fontWeight: "bold",
                              }}
                            >
                              +
                            </div>

                            {/* + sign in right interval */}
                            <div
                              className="absolute"
                              style={{
                                left: "75%",
                                top: "50%",
                                transform: "translateY(-50%)",
                                fontSize: "clamp(16px, 5vw, 18px)",
                                fontWeight: "bold",
                              }}
                            >
                              +
                            </div>
                          </td>
                        </tr>

                        {/* Third row: f(x) - 2 columns with arrows */}
                        <tr>
                          <td
                            className="border-2 border-black text-center font-normal bg-white"
                            style={{
                              height: "85px",
                              verticalAlign: "middle",
                              fontStyle: "italic",
                            }}
                          >
                            f(x)
                          </td>

                          <td
                            className="border-2 border-black bg-white relative"
                            style={{
                              height: "80px",
                            }}
                          >
                            {/* Left arrow from bottom-left to top-right */}
                            <div
                              className="absolute"
                              style={{
                                left: "10%",
                                top: "70%",
                                transform: "translateY(-50%)",
                              }}
                            >
                              <svg
                                width="35%"
                                height="60"
                                viewBox="0 0 80 60"
                                className="w-20 h-12"
                              >
                                <defs>
                                  <marker
                                    id="arrow-left"
                                    markerWidth="8"
                                    markerHeight="6"
                                    refX="7"
                                    refY="3"
                                    orient="auto"
                                  >
                                    <polygon
                                      points="0 0, 8 3, 0 6"
                                      fill="black"
                                    />
                                  </marker>
                                </defs>
                                <path
                                  d="M5,40 L90,8"
                                  stroke="black"
                                  strokeWidth="2"
                                  markerEnd="url(#arrow-left)"
                                />
                              </svg>
                            </div>

                            {/* Right arrow from bottom-left to top-right */}
                            <div
                              className="absolute"
                              style={{
                                left: "55%",
                                top: "45%",
                                transform: "translateY(-50%)",
                              }}
                            >
                              <svg
                                width="35%"
                                height="60"
                                viewBox="0 0 80 60"
                                className="w-20 h-12"
                              >
                                <defs>
                                  <marker
                                    id="arrow-right"
                                    markerWidth="8"
                                    markerHeight="6"
                                    refX="7"
                                    refY="3"
                                    orient="auto"
                                  >
                                    <polygon
                                      points="0 0, 8 3, 0 6"
                                      fill="black"
                                    />
                                  </marker>
                                </defs>
                                <path
                                  d="M5,40 L80,8"
                                  stroke="black"
                                  strokeWidth="2"
                                  markerEnd="url(#arrow-right)"
                                />
                              </svg>
                            </div>

                            {/* -1 at center bottom */}
                            <div
                              className="absolute"
                              style={{
                                left: "50%",
                                bottom: "25px",
                                transform: "translateY(-50%)",
                                fontSize: "clamp(12px, 2.5vw, 15px)",
                                fontWeight: "bold",
                              }}
                            >
                              -1
                            </div>

                            {/* -∞ at left bottom */}
                            <div
                              className="absolute"
                              style={{
                                bottom: "8px",
                                left: "5%",
                                fontSize: "clamp(12px, 2.5vw, 15px)",
                              }}
                            >
                              -∞
                            </div>

                            {/* +∞ at right top */}
                            <div
                              className="absolute"
                              style={{
                                top: "8px",
                                right: "5%",
                                fontSize: "clamp(12px, 2.5vw, 15px)",
                              }}
                            >
                              +∞
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
    answer: "",
  }
];

// Stage 2: Serialized JSON
const jsonV3 = serializeTopicContentV3(content);

// Stage 3: Deserialized V3 with live React nodes
const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

const ExponentialFunction = () => {
  return <ContentRendererV3 content={restoredContent} />;
};

export default ExponentialFunction;
