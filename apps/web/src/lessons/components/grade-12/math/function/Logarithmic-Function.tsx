"use client";

import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  serializeTopicContentV3,
  deserializeTopicContentV3,
} from "@/components/pages/docs/utils/ContentSerializerV2";
import { InlineMath } from "react-katex";

// ===== TOPIC CONTENT DATA =====

const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "អនុគមន៍លោការីត",
    content: (
      <div className="border-l-4 border-red-500 pl-4 bg-red-50 rounded">
        <div>
          <strong>និយមន័យ</strong> លោការិតនេពែនៃចំនួនវិជ្ជមាន{" "}
          <InlineMath math="k" /> គឺជានិទស្សន្ត x នៃ <InlineMath math="e^x" />{" "}
          ដែល <InlineMath math="e^x = k" />។
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
          ចំពោះគ្រប់ <InlineMath math="a > 0" />, <InlineMath math="b > 0" />{" "}
          គេបាន
        </div>
        <div className="pl-4">
          <div>
            1. <InlineMath math="ln(a) + ln(b) = ln(ab)" />
          </div>
          <div>
            2. <InlineMath math="ln(a) - ln(b) = ln\left(\frac{a}{b}\right)" />
          </div>
          <div>
            3. <InlineMath math="ln(a^n) = nln(a)" /> ដែល{" "}
            <InlineMath math="b \in \mathbb{R}" />
          </div>
          <div>
            4. <InlineMath math="e^{ln(a)} = a" />
          </div>
          <div>
            5. <InlineMath math="ln(1) = 0" />
          </div>
          <div>
            6. <InlineMath math="ln(e) = 1" />
          </div>
          <div>
            7. <InlineMath math="ln(e^x) = x" />
          </div>
        </div>
      </div>
    ),
  },
  {
    type: "tip",
    title: "សមីការលោការីតនេពែ",
    content: (
      <div>
        <div className="ml-2">
          <div>
            <strong>រូបមន្ត:</strong>
          </div>
          <div>
            ក. <InlineMath math="\ln x = k" /> សមមូល{" "}
            <InlineMath math="x = e^k, k \in \mathbb{R}" />
          </div>
          <div>
            ខ. <InlineMath math="\ln x = \ln y" /> សមមូល{" "}
            <InlineMath math="x = y" /> ដើម្បី{" "}
            <InlineMath math="x > 0, y > 0" />
          </div>
        </div>
      </div>
    ),
  },
  {
    type: "definition",
    title: "វិសមីការលោការីតនេពែ",
    content: (
      <div className="ml-2">
        <div>
          <strong>រូបមន្ត:</strong>
        </div>
        <div>
          ក. <InlineMath math="\ln x > \ln y" /> សមមូល{" "}
          <InlineMath math="x > y" /> ដើម្បី <InlineMath math="x > 0, y > 0" />
        </div>
        <div>
          ខ. <InlineMath math="\ln x < \ln y" /> សមមូល{" "}
          <InlineMath math="x < y" /> ដើម្បី <InlineMath math="x > 0, y > 0" />
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
          <div className="grid grid-cols-3 gap-2 text-sm">
            <div>
              ក. <InlineMath math="ln(x) = 3" />
            </div>
            <div>
              ខ. <InlineMath math="ln(2x) = ln(8)" />
            </div>
            <div>
              គ. <InlineMath math="ln(x+1) = ln(5)" />
            </div>
            <div>
              ឃ. <InlineMath math="ln(x^2) = 2" />
            </div>
            <div>
              ង. <InlineMath math="ln(3x-1) > ln(2)" />
            </div>
            <div>
              ច. <InlineMath math="ln(x+3) \leq ln(7)" />។
            </div>
          </div>
        </div>
      </div>
    ),
    steps: [
      {
        title: "ដំណោះស្រាយសមីការ",
        content: (
          <div className="space-y-2">
            <div className="space-y-1">
              <div>
                <strong>ក.</strong> <InlineMath math="ln(x) = 3" />
              </div>
              <div className="ml-4">
                <div>
                  សមមូល: <InlineMath math="x = e^3" />
                </div>
                <div>
                  ដូច្នេះ: សមីការមានឬស <InlineMath math="x = e^3" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <strong>ខ.</strong> <InlineMath math="ln(2x) = ln(8)" />
              </div>
              <div className="ml-4">
                <div>
                  សមមូល: <InlineMath math="2x = 8" />
                </div>
                <div>
                  <InlineMath math="\Rightarrow x = 4" />
                </div>
                <div>
                  ដូច្នេះ: សមីការមានឬស <InlineMath math="x = 4" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <strong>គ.</strong> <InlineMath math="ln(x+1) = ln(5)" />
              </div>
              <div className="ml-4">
                <div>
                  សមមូល: <InlineMath math="x+1 = 5" />
                </div>
                <div>
                  <InlineMath math="\Rightarrow x = 4" />
                </div>
                <div>
                  ដូច្នេះ: សមីការមានឬស <InlineMath math="x = 4" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <strong>ឃ.</strong> <InlineMath math="ln(x^2) = 2" />
              </div>
              <div className="ml-4">
                <div>
                  សមមូល: <InlineMath math="x^2 = e^2" />
                </div>
                <div>
                  <InlineMath math="\Rightarrow x = \pm e" />
                </div>
                <div>
                  ដូច្នេះ: សមីការមានឬស <InlineMath math="x = e" /> ឬ{" "}
                  <InlineMath math="x = -e" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <strong>ង.</strong> <InlineMath math="ln(3x-1) > ln(2)" />
              </div>
              <div className="ml-4">
                <div>
                  សមមូល: <InlineMath math="3x-1 > 2" /> និង{" "}
                  <InlineMath math="3x-1 > 0" />
                </div>
                <div>
                  <InlineMath math="\Rightarrow 3x > 3 \text{ និង } 3x > 1" />
                </div>
                <div>
                  <InlineMath math="\Rightarrow x > 1 \text{ និង } x > \frac{1}{3}" />
                </div>
                <div>
                  ដូច្នេះ: វិសមីការមានសំណុំ{" "}
                  <InlineMath math="x \in (1, +\infty)" />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div>
                <strong>ច.</strong> <InlineMath math="ln(x+3) \leq ln(7)" />
              </div>
              <div className="ml-4">
                <div>
                  សមមូល: <InlineMath math="x+3 \leq 7" /> និង{" "}
                  <InlineMath math="x+3 > 0" />
                </div>
                <div>
                  <InlineMath math="\Rightarrow x \leq 4 \text{ និង } x > -3" />
                </div>
                <div>
                  ដូច្នេះ: វិសមីការមានសំណុំ <InlineMath math="x \in (-3, 4]" />
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
    type: "example",
    question: (
      <div className="space-y-3">
        <div className="font-bold">ចំណាំ: គណនាលីមីតខាងក្រោម</div>
        <div className="grid grid-cols-3 gap-1 text-xs">
          <div>
            ក.{" "}
            <InlineMath math="lim_{x \to +\infty} \frac{x^2 + \ln x}{3x^2 - 1}" />
          </div>
          <div>
            ខ.{" "}
            <InlineMath math="lim_{x \to +\infty} \left(x \ln x - x^2 + 5\right)" />
          </div>
          <div>
            គ.{" "}
            <InlineMath math="lim_{x \to +\infty} \frac{\ln x + 1}{\ln x - 1}" />
          </div>
          <div>
            ឃ. <InlineMath math="lim_{x \to 0^+} \frac{\ln(1 + 7x)}{x}" />
          </div>
          <div>
            ង.{" "}
            <InlineMath math="lim_{x \to 0^+} \ln\left(\frac{1 + 2x}{1 - 3x}\right)" />
          </div>
          <div>
            ច.{" "}
            <InlineMath math="lim_{x \to 0^+} \frac{\ln(1 + x) + \ln(1 + 2x)}{x}" />
          </div>
        </div>
      </div>
    ),
    steps: [
      {
        title: "ដំណោះស្រាយលំហាត់នីមួយៗ",
        content: (
          <div className="space-y-4">
            <div>
              <strong>ក.</strong>{" "}
              <InlineMath math="lim_{x \to +\infty} \frac{x^2 + \ln x}{3x^2 - 1}" />
              <div>
                <InlineMath math="= lim_{x \to +\infty} \frac{x^2\left(1 + \frac{\ln x}{x^2}\right)}{x^2\left(3 - \frac{1}{x^2}\right)}" />
              </div>
              <div>
                <InlineMath math="= lim_{x \to +\infty} \frac{1 + \frac{\ln x}{x^2}}{3 - \frac{1}{x^2}} = \frac{1 + 0}{3 - 0} = \frac{1}{3}" />
              </div>
            </div>
            <div>
              <strong>ខ.</strong>{" "}
              <InlineMath math="lim_{x \to +\infty} \left(x \ln x - x^2 + 5\right)" />
              <div>
                <InlineMath math="= lim_{x \to +\infty} x^2 \left(\frac{\ln x}{x} - 1 + \frac{5}{x^2}\right)" />
              </div>
              <div>
                <InlineMath math="= (+\infty)(0 - 1 + 0) = -\infty" />
              </div>
            </div>
            <div>
              <strong>គ.</strong>{" "}
              <InlineMath math="lim_{x \to +\infty} \frac{\ln x + 1}{\ln x - 1}" />
              <div>
                <InlineMath math="= lim_{x \to +\infty} \frac{\ln x\left(1 + \frac{1}{\ln x}\right)}{\ln x\left(1 - \frac{1}{\ln x}\right)}" />
              </div>
              <div>
                <InlineMath math="= lim_{x \to +\infty} \frac{1 + \frac{1}{\ln x}}{1 - \frac{1}{\ln x}} = \frac{1 + 0}{1 - 0} = 1" />
              </div>
            </div>
            <div>
              <strong>ឃ.</strong>{" "}
              <InlineMath math="lim_{x \to 0^+} \frac{\ln(1 + 7x)}{x}" />
              <div>
                <InlineMath math="= lim_{x \to 0^+} \frac{7x}{x} = 7" />
              </div>
            </div>
            <div>
              <strong>ង.</strong>{" "}
              <InlineMath math="lim_{x \to 0^+} \ln\left(\frac{1 + 2x}{1 - 3x}\right)" />
              <div>
                <InlineMath math="= \ln\left(\frac{1 + 0}{1 - 0}\right) = \ln 1 = 0" />
              </div>
            </div>
            <div>
              <strong>ច.</strong>{" "}
              <InlineMath math="lim_{x \to 0^+} \frac{\ln(1 + x) + \ln(1 + 2x)}{x}" />
              <div>
                <InlineMath math="= lim_{x \to 0^+} \left(\frac{\ln(1 + x)}{x} + \frac{\ln(1 + 2x)}{x}\right)" />
              </div>
              <div>
                <InlineMath math="= 1 + 2 = 3" />
              </div>
            </div>
          </div>
        ),
      },
    ],
    answer: "",
  },
  {
    type: "example",
    question: (
      <div>
        <div className="space-y-3">
          <div>
            អនុគមន៍ <InlineMath math="f" /> កំណត់លើ{" "}
            <InlineMath math="(0, +\infty)" /> ដោយ{" "}
            <InlineMath math="f(x) = \frac{x^2 - 2}{x} - \ln x" /> គេតាង{" "}
            <InlineMath math="C" /> ក្រាបរបស់អនុគមន៍
            ក្នុងប្លង់ដោយតម្រុយអរតូណរម៉ាល់
            <InlineMath math="(O, \overrightarrow{i}, \overrightarrow{j})" />។
          </div>
          <div>
            <div>
              ១. ក. បង្ហាញថា
              <InlineMath math="f(x)" /> អាចសរសេរទៅជា:{" "}
              <InlineMath math="f(x) = x\left(1 - \frac{\ln x}{x} - \frac{2}{x^2}\right)" />
              <div>
                និង <InlineMath math="f(x) = \frac{1}{x}(x^2 - x\ln x - 2)" />។
              </div>
            </div>
          </div>
          <div>
            <div>
              ខ. ប្រើលទ្ធផលនេះដើម្បីគណនាលីមីតនៃអនុគមន៍
              <InlineMath math="f" /> ត្រង់ <InlineMath math="0" /> និង{" "}
              <InlineMath math="+\infty" />។
            </div>
          </div>
          <div>
            <div>
              ២. ក. កំណត់ដេរីវេ
              <InlineMath math="f'(x)" /> នៃអនុគមន៍ <InlineMath math="f(x)" />
              និងបង្ហាញថាចំពោះគ្រប់ <InlineMath math="x" /> លើ{" "}
              <InlineMath math="(0, +\infty)" /> f&apos;(x) យកសញ្ញាតាម{" "}
              <InlineMath math="x^2 - x + 2" />
            </div>
            <div>
              ខ. សិក្សាអថេរភាពនៃអនុគមន៍ <InlineMath math="f" />
              រួចសង់តារាងអថេរភាពរបស់វា
            </div>
          </div>
          <div>
            <div>
              រកសមីការបបន្ទាត់ប៉ះទៅនឹងក្រាប <InlineMath math="(C)" /> ត្រង់{" "}
              <InlineMath math="B" /> ដែលមានអាប់ស៊ីស = 1
            </div>
            <div className="ml-4">
              <div>
                <strong>ខ. រកកូអរដោនេចំណុច</strong> <InlineMath math="B" />{" "}
                ដែលបន្ទាត់ប៉ះទៅនឹងក្រាប <InlineMath math="(C)" />{" "}
                ស្រប់បន្តាត់ដែលមានសមីការ y = x
              </div>
            </div>
          </div>
          <div>
            <div>
              <strong>៤. សង់ក្រាប</strong> <InlineMath math="(C)" />{" "}
              និងបន្ទាត់ប៉ះត្រង់
              <InlineMath math="A" /> និង <InlineMath math="B" /> ។ ({" "}
              <InlineMath math="\ln 2 = 0.7" /> )។
            </div>
          </div>
        </div>
      </div>
    ),
    steps: [
      {
        title: "១. បង្ហាញថា f(x) = x - 2/x - ln x",
        content: (
          <div className="space-y-3">
            <div>
              <div>
                ជាមួយ <InlineMath math="f(x) = \frac{x^2-2}{x} - \ln x" />
              </div>
              <div>
                ដោយ:{" "}
                <InlineMath math="f(x) = \frac{x^2-2}{x} - \ln x = \frac{x^2}{x} - \frac{2}{x} - \ln x = x - \frac{2}{x} - \ln x" />
              </div>
              <div>
                ដូច្នេះ: <InlineMath math="f(x) = x - \frac{2}{x} - \ln x" />។
              </div>
            </div>
            <div>
              <div>
                <strong>• បង្ហាញថា</strong>{" "}
                <InlineMath math="f(x) = \frac{1}{x}(x^2 - x\ln x - 2)" />
              </div>
              <div className="ml-4">
                <div>
                  ដោយ:{" "}
                  <InlineMath math="f(x) = x - \frac{2}{x} - \ln x = \frac{x^2 - 2 - x\ln x}{x} = \frac{1}{x}(x^2 - x\ln x - 2)" />
                </div>
              </div>
              <div className="ml-4">
                ដូច្នេះ: <InlineMath math="f(x) = x - \frac{2}{x} - \ln x" />។
              </div>
            </div>
            <div className="mt-4">
              <div>
                <strong>• កំណត់លីមីត</strong> <InlineMath math="f" /> ត្រង់{" "}
                <InlineMath math="0" /> និង <InlineMath math="+\infty" />
              </div>
              <div className="ml-4">
                <div>
                  •{" "}
                  <InlineMath math="lim_{x \to 0^+} f(x) = lim_{x \to 0^+} \left(x - \frac{2}{x} - \ln x\right) = 0 - (-\infty) - (-\infty) = +\infty" />
                  (ព្រោះ <InlineMath math="lim_{x \to 0^+} x\ln x = 0" />)
                </div>
                <div>
                  •{" "}
                  <InlineMath math="lim_{x \to +\infty} f(x) = lim_{x \to +\infty} x\left(1 - \frac{\ln x}{x} - \frac{2}{x^2}\right) = +\infty" />
                  (ព្រោះ{" "}
                  <InlineMath math="lim_{x \to +\infty} \frac{\ln x}{x} = 0" />)
                </div>
              </div>
            </div>
          </div>
        ),
      },
      {
        title: "២. កំណត់ដេរីវេ f'(x) និងសិក្សាតម្លៃអន្រាក្តន៍",
        content: (
          <div className="space-y-3">
            <div>
              <div>
                គេមាន <InlineMath math="f(x) = x - \frac{2}{x} - \ln x" />
              </div>
              <div>
                នោះ{" "}
                <InlineMath math="f'(x) = 1 + \frac{2}{x^2} - \frac{1}{x} = \frac{x^2 - x + 2}{x^2}" />
              </div>
            </div>
            <div>
              ដូច្នេះ: <InlineMath math="f'(x) = \frac{x^2 - x + 2}{x^2}" />។
            </div>
            <div className="mt-4">
              <div>
                <strong>• បង្ហាញថា</strong>f(x) មានសញ្ញាដូច{" "}
                <InlineMath math=" \frac{x^2 - x + 2}{x^2}" />
              </div>
              <div className="ml-4">
                <div>
                  ដោយ <InlineMath math="x^2 > 0" /> គ្រប់{" "}
                  <InlineMath math="x \in (0, +\infty)" />{" "}
                  <InlineMath math="\Rightarrow f'(x)" /> យកសញ្ញាតាម{" "}
                  <InlineMath math="x^2 - x + 2" />
                </div>
                <div>
                  បើ <InlineMath math="x^2 - x + 2 = 0" /> មាន{" "}
                  <InlineMath math="\Delta = (-1)^2 - 4 \times 2 = 1 - 8 = -7 < 0" />
                </div>
                <div>
                  ដោយ <InlineMath math="a = 1 > 0" /> មាន{" "}
                  <InlineMath math="\Delta = -7 < 0" /> នោះ{" "}
                  <InlineMath math="x^2 - x + 2 > 0" />
                  <InlineMath math="\Rightarrow f'(x) > 0" />។
                </div>
                <div>
                  គេបាន
                  <InlineMath math="f" /> ជាអនុគមន៍កើនជានិច្ចគ្រប់{" "}
                  <InlineMath math="(0, +\infty)" /> និងគ្មានចំណុចបរមាធៀប
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div>
                <strong>• តារាងអថេរភាពនៃ f</strong>
              </div>
              <div className="ml-4">
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
                              <div
                                className="absolute"
                                style={{
                                  left: "5%",
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                }}
                              >
                                0⁺
                              </div>
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
                              <div
                                className="absolute"
                                style={{
                                  left: "1%",
                                  top: "0",
                                  height: "100%",
                                  width: "2px",
                                  backgroundColor: "black",
                                  transform: "translateX(-50%,-50%)",
                                }}
                              ></div>
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
                                +
                              </div>
                            </td>
                          </tr>
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
                              <div
                                className="absolute"
                                style={{
                                  left: "1%",
                                  top: "0",
                                  height: "100%",
                                  width: "2px",
                                  backgroundColor: "black",
                                  transform: "translateX(-50%,-50%)",
                                }}
                              ></div>
                              <div
                                className="absolute"
                                style={{
                                  left: "0%",
                                  bottom: "15%",
                                  width: "100%",
                                  height: "100%",
                                }}
                              >
                                <svg
                                  width="100%"
                                  height="100%"
                                  viewBox="0 0 100 100"
                                  className="w-full h-full"
                                >
                                  <defs>
                                    <marker
                                      id="arrow-end"
                                      markerWidth="10"
                                      markerHeight="8"
                                      refX="10"
                                      refY="4"
                                      orient="auto"
                                    >
                                      <polygon
                                        points="0 0, 10 4, 0 8"
                                        fill="black"
                                      />
                                    </marker>
                                  </defs>
                                  <path
                                    d="M1,87 L99,48"
                                    stroke="black"
                                    strokeWidth="2"
                                    markerEnd="url(#arrow-end)"
                                  />
                                </svg>
                              </div>
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
          </div>
        ),
      },
      {
        title: "៣. សង់ក្រាប",
        content: (
          <div className="space-y-3">
            <div>
              <div>
                <strong>
                  រកសមីការបន្ទាត់ប៉ះទៅនឹងក្រាប (C) ត្រង់ B ដែលមានអាប់ស៊ីស = 1
                </strong>
              </div>
              <div className="ml-4">
                <div>
                  តាមរូបមន្ត <InlineMath math="y = f'(x_a)(x - x_a) + y_a" />{" "}
                  <br />
                  ឬ <InlineMath math="y' = f'(1)(x-1)+f(1) " />
                </div>
                <p>
                  តែ <InlineMath math="f'(1)= \frac{1^2 - 1 + 2}{1^2} = 2" />
                  <br />
                  និង{" "}
                  <InlineMath math="f(1) = \frac{1^2 - 2}{1} - \ln 1 = -1" />
                </p>
                <p>
                  <InlineMath math="\\Rightarrow y' = 2(x-1) - 1 = 2x - 3" />
                </p>
              </div>
              <div>
                <strong>រកកូអរដោនេចំណុច B</strong>
              </div>
              <div className="ml-4">
                <p>
                  តាង <InlineMath math="B(x_B,y_B)" /> ជាចំណុចដែលត្រូវរក
                </p>
                <div>
                  ដោយបន្ទាត់ប៉ះទៅនឹងក្រាប (C) ត្រង់ B មានមេគុណប្រាប់ទិស
                  <InlineMath math="f'(x_n) = \frac{x_n^2 - x_n + 2}{x_n^2}" />{" "}
                  ហើយបន្ទាត់ប៉ះត្រង់ B ស្របនឹងបន្ទាត់ y = x
                  ដែលមានមេគុណប្រាប់ទិសស្មើរ 1
                  នោះមេគុណប្រាប់ទិសនៃបន្ទាត់ទាំងពីរស្មើគ្នា។
                </div>
                <div>
                  <InlineMath math="f'(x_n) = 1" />
                  <InlineMath math="\Leftrightarrow \frac{x_n^2 - x_n + 2}{x_n^2} = 1" />
                </div>
                <div>
                  សមមូល: <InlineMath math="x_n^2 - x_n + 2 = x_n^2" />
                </div>
                <div>
                  សមមូល: <InlineMath math="-x_n + 2 = 0 \Rightarrow x_n = 2" />
                </div>
                <div>
                  និង{" "}
                  <InlineMath math="y_n = f(x_n) = f(2) = \frac{2^2 - 2}{2} - \ln 2 = 1 - 0.7 = 0.3" />
                </div>
                <div>
                  ដូច្នេះ: <InlineMath math="B(2, 0.3)" />។
                </div>
              </div>
            </div>
          </div>
        ),
      },
    ],
    answer: <div></div>,
  },
  {
    type: "graphExplanation",
    expressions: [
      {
        id: "1",
        latex: "f(x) = \\frac{x^2 -2}{x} - \\ln x",
        color: "#FF4136",
      },
      { id: "2", latex: "y= 2x-3", color: "#FF413" },
      { id: "3", latex: "y = x", color: "#FF413" },
      { id: "4", latex: "y= x-1.7", color: "#FF413" },
    ],
    explanation: (
      <>
        <p>សំណង់ក្រាប</p>
        <p>
          យើងមានក្រាប
          <InlineMath math="f(x) = \frac{x^2 -2}{x} - \ln x" />
        </p>
        <p>♦ (d): y= 2x-3 ជាបន្ទាត់ប៉ះនឹង (c) ​ត្រង់ A</p>
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
                2
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
                <InlineMath math="1" />
              </td>
            </tr>
          </tbody>
        </table>
        <p>♦ (d&apos;): y = x ជាបន្ទាត់ដែលស្របនឹងបន្ទាត់ប៉ះត្រង់ B</p>
        <p>♦ B(2,0.3) ជាចំណុចប៉ះ </p>
        <p>♦ y = x-1.7 ជាបន្ទាត់ប៉ះនឹង (c) ​ត្រង់ B</p>
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
                2
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left font-bold">
                y
              </th>
              <td className="border border-gray-300 px-4 py-2 text-left">
                <InlineMath math="1.7" />
              </td>
              <td className="border border-gray-300 px-4 py-2 text-left">
                <InlineMath math="0.3" />
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
    type: "hint",
    content: (
      <>
        ចំណាំថា អនុគមន៍លោការីត <InlineMath math="\ln x" /> មានដែនកំណត់{" "}
        <InlineMath math="(0, +\infty)" /> និង ដេរីវេរបស់វាគឺ{" "}
        <InlineMath math="(\ln x)' = \frac{1}{x}" />។
      </>
    ),
  },
];

// Simulate DB fetch
const jsonV3 = serializeTopicContentV3(content);
const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

// ===== MAIN COMPONENT =====

export default function LogarithmicFunction() {
  return <ContentRendererV3 content={restoredContent} />;
}