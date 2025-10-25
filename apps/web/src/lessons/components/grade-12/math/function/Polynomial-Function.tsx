"use client";

import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
  serializeTopicContentV3,
  deserializeTopicContentV3,
} from "@/components/pages/docs/utils/ContentSerializerV2";
import { InlineMath, BlockMath } from "react-katex";

// ===== TOPIC CONTENT DATA =====

const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "អនុគមន៍សនិទាន",
    content: (
      <>
        អនុគមន៍សនិទាន
        <InlineMath math="f(x)" /> ជាអនុគមន៍ដែលមានភាគយកនិងភាគបែងជាពហុធានៃ x
        <br />
      </>
    ),
  },
  {
    type: "tip",
    title: (
      <div className="text-base">លក្ខណៈសម្គាល់ងាយៗ ពេលគិតដល់អាស៊ីមតូត</div>
    ),
    content: (
      <>
        • lim(អនន្ត)ចេញលេខ(ដេក)
        <br />
        • lim(លេខ)ចេញអនន្ត(ឈរ)
        <br />
        • lim(អនន្ត) [f(x) - (ax+b)] = 0 (ទ្រេត)
        <br />
      </>
    ),
  },
  {
    type: "tip",
    title: "លក្ខណៈសម្គាល់ងាយៗ ពេលសិក្សាសញ្ញាសមីការមានឬសតែមួយ",
    content: (
      <div>
        <div>
          <div>
            ♦ បើសមីការមានឬសតែមួយដែលមានទម្រង់ <InlineMath math="ax+b" />
          </div>
          <div>♦ នោះការសិក្សាសញ្ញាគឺ (ធំដូចតូចផ្ទុយ)</div>
          <p>♦ មានន័យថាបើធំជាងឬសមានសញ្ញាដូច a តូចជាងឬសមានសញ្ញាផ្ទុយ a</p>
          <div>
            ឧទាហរណ៍: f&apos;(x) យកសញ្ញាតាម <InlineMath math="-x +2 = 0" />
            <br />
            គេបាន x = 2
          </div>
          <div className="w-[60%] md:w-[25%] max-w-full overflow-hidden bg-white justify-start mt-2">
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
                        width: "10%",
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
                        width: "90%",
                        height: "45px",
                        verticalAlign: "middle",
                      }}
                    >
                      <div
                        className="absolute"
                        style={{
                          left: "2%",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      >
                        −∞
                      </div>
                      <div
                        className="absolute"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%,-50%)",
                        }}
                      >
                        2
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
                          left: "20%",
                          top: "50%",
                          transform: "translateY(-50%)",
                          fontSize: "clamp(16px, 5vw, 18px)",
                          fontWeight: "bold",
                        }}
                      >
                        +
                      </div>
                      <div
                        className="absolute"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                          fontSize: "clamp(16px, 5vw, 18px)",
                          fontWeight: "bold",
                        }}
                      >
                        0
                      </div>
                      <div
                        className="absolute"
                        style={{
                          left: "70%",
                          top: "50%",
                          transform: "translateY(-50%)",
                          fontSize: "clamp(16px, 5vw, 18px)",
                          fontWeight: "bold",
                        }}
                      >
                        −
                      </div>
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
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <p>
          • <InlineMath math="(-\infty,2)" /> គឺតូចជាងឬស
        </p>
        <p>
          • <InlineMath math="(2,+\infty)" /> គឺធំជាងឬស
        </p>
      </div>
    ),
  },
  {
    type: "tip",
    title: "លក្ខណៈសម្គាល់ងាយៗ ពេលសិក្សាសញ្ញាដែលមានឬស 2",
    content: (
      <div>
        <div>
          <div>
            ♦ បើសមីការមានឬស2ដែលមានទម្រង់ <InlineMath math="ax^2+bx+c" />
          </div>
          <div>♦ នោះការសិក្សាសញ្ញាគឺ (ក្រៅដូចខូចក្នុង)</div>
          <p>
            ♦ មានន័យថាបើនៅក្រៅឬសគឺយកសញ្ញាដូច a ហើយបើនៅចន្លោះឬសគឺសញ្ញាផ្ទុយ a
          </p>
          <div>
            ឧទាហរណ៍: f&apos;(x) យកសញ្ញាតាម <InlineMath math="x^2+2x-3 = 0" />
            <br />
            គេបាន x = 2
          </div>
          <div className="w-full max-w-full overflow-hidden justify-start mt-2">
            <div className="w-[60%] md:w-[30%] max-w-full overflow-hidden justify-start mt-2">
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
                          width: "10%",
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
                          width: "90%",
                          height: "45px",
                          verticalAlign: "middle",
                        }}
                      >
                        <div
                          className="absolute"
                          style={{
                            left: "2%",
                            top: "50%",
                            transform: "translateY(-50%)",
                          }}
                        >
                          −∞
                        </div>
                        <div
                          className="absolute"
                          style={{
                            left: "30%",
                            top: "50%",
                            transform: "translateY(-50%)",
                          }}
                        >
                          1
                        </div>
                        <div
                          className="absolute"
                          style={{
                            left: "60%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                          }}
                        >
                          -3
                        </div>
                        <div
                          className="absolute"
                          style={{
                            left: "82%",
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
                            left: "20%",
                            top: "50%",
                            transform: "translateY(-50%)",
                            fontSize: "clamp(16px, 5vw, 18px)",
                            fontWeight: "bold",
                          }}
                        >
                          +
                        </div>
                        <div
                          className="absolute"
                          style={{
                            left: "31%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            fontSize: "clamp(16px, 5vw, 18px)",
                            fontWeight: "bold",
                          }}
                        >
                          0
                        </div>
                        <div
                          className="absolute"
                          style={{
                            left: "45%",
                            top: "50%",
                            transform: "translateY(-50%)",
                            fontSize: "clamp(16px, 5vw, 18px)",
                            fontWeight: "bold",
                          }}
                        >
                          −
                        </div>
                        <div
                          className="absolute"
                          style={{
                            left: "31%",
                            top: "0",
                            height: "100%",
                            width: "2px",
                            backgroundColor: "black",
                            transform: "translateX(-50%)",
                          }}
                        ></div>
                        <div
                          className="absolute"
                          style={{
                            left: "60%",
                            top: "0",
                            height: "100%",
                            width: "2px",
                            backgroundColor: "black",
                            transform: "translateX(-50%)",
                          }}
                        ></div>
                        <div
                          className="absolute"
                          style={{
                            left: "60%",
                            top: "50%",
                            transform: "translate(-50%, -50%)",
                            fontSize: "clamp(16px, 5vw, 18px)",
                            fontWeight: "bold",
                          }}
                        >
                          0
                        </div>
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
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <p>
          • <InlineMath math="(-\infty,1), (3,+\infty)" /> គឺក្រៅឬស
        </p>
        <p>
          • <InlineMath math="(1,3)" /> គឺចន្លោះឬស
        </p>
      </div>
    ),
  },
  {
    type: "example",
    question: (
      <div>
        <div>
          គេមានអនុ <InlineMath math="f(x)= \frac{x^2-5x+10}{x-3}" /> តាង(C)
          ជាក្រាបនៃ f(x) ។
        </div>
        <div>
          1.រកតម្លៃ m,n,p ដើម្បីបាន{" "}
          <InlineMath math="f(x)=mx+n+ \frac{p}{x-3}" />
        </div>
        <div>
          2.គណនា <InlineMath math="\lim_{x \to 3} f(x)" /> ,{" "}
          <InlineMath math="\lim_{x \to \infty} f(x)" />
        </div>
        <div>រួចទាញបញ្ជាក់សមីការនៃអាស៊ីមតូតឈរនៃក្រាប(C)</div>
        <div>3.ស្រាយបញ្ជាក់ថា y = x-2 ជាអាស៊ីមតូតទ្រេត</div>
        <div>
          4.បញ្ចាក់ថា
          <InlineMath math="f'(x) = \frac{x^2-6x+5}{(x-3)^2}" />
          <div>គូសតារាងអថេរភាពនៃអនុគមន៍ f</div>
        </div>
        <div className="space-y-2">
          <div>
            5.គេមានបន្ទាត់ (Δ): <InlineMath math="y = mx + m + 5" /> ដែល{" "}
            <InlineMath math="m" /> ជាប៉ារ៉ាម៉ែត្រ ។
          </div>
          <div>5.1 គណនាកូអរដោនេនៃចំណុច A របស់គ្រួសារនៃបន្ទាត់(Δ) ។</div>
          <div>
            5.2 បង្ហាញថាមានបន្ទាត់ 2 (Δ&apos;) និង (Δ&quot;) នៃគ្រួសារបន្ទាត់(Δ)
            ដែលបះទៅនឺងខ្សែរកោង (c)។{" "}
          </div>
          <div>
            សរសេរសមីការ(Δ&apos;) និង (Δ&quot;) រួចគណនាកូអរដោនេនៃចំណុចបះ{" "}
            <InlineMath math="M" /> និង <InlineMath math="N" />{" "}
            រវាងបន្ទាត់(Δ&apos;) និង (Δ&quot;)ជាមួយខ្សែរកោង(C) ។
          </div>
          <div>(គេដឹងថា(Δ&quot;) ជាបន្ទាត់ស្របនឺងអ័ក្សអាប់ស៊ីស)</div>
          <div>
            5.3 ស្រាយថាបន្ទាត់(Δ&apos;) និង (Δ&quot;)ប្រសព្វបន្ទាត់(d)
            ត្រង់ចំណុច <InlineMath math="B" /> និង <InlineMath math="C" />{" "}
            រៀងគ្នា ។
          </div>
          <div>
            គណនាកូអរដោនេនៃចំណុច <InlineMath math="B" /> និង{" "}
            <InlineMath math="C" /> ។
          </div>
          <div>
            5.4 គណនាកូអរដោនេនៃចំណុច I និង ស្រាយថា I ជាផ្ចិតឆ្លុះនៃខ្សែរកោង (C)
            រួចសង់ក្រាប។
          </div>
        </div>
      </div>
    ),
    steps: [
      {
        title: "1. រកតម្លៃ m, n, p",
        content: (
          <div className="space-y-2">
            <div>
              គេមាន <InlineMath math="f(x) = \frac{x^2-5x+10}{x-3} (1)" />
              <br /> និង <InlineMath math="f(x) = mx + n + \frac{p}{x-1} (2)" />
            </div>
            <div>ផ្ទឹម (1) & (2) </div>
            <div>
              <InlineMath math="\Rightarrow" />{" "}
              <InlineMath math="\frac{x^2-5x+10}{x-3} = mx + n + \frac{p}{x-3}" />
            </div>
            <div>តម្រូវភាគបែងរួមរួចលុបចោលគេនឹងបាន</div>
            <div>
              <InlineMath math="x^2-5x+10 = (x-3)(mx+n) + p" />
            </div>
            <div>
              {" "}
              <InlineMath math="x^2-5x+10 = mx^2 + (n-3m)x + (p-3n)" />
            </div>
            <div className="flex items-center justify-start">
              <div>គេទាញបាន:</div>
              <div>
                <BlockMath math="\begin{cases} m = 1 \\ n-3m = -5 \\ p-3n = 10 \end{cases}" />
              </div>
            </div>
            <div>
              ដូច្នេះ: <InlineMath math="m = 1, n = -2, p = 4" />
            </div>
          </div>
        ),
      },
      {
        title: (
          <div>
            គណនា <InlineMath math="\lim_{x \to 3} f(x)" /> និង{" "}
            <InlineMath math="\lim_{x \to \infty} f(x)" />
          </div>
        ),
        content: (
          <div className="space-y-2">
            <div>
              ចំពោះ <InlineMath math="m = 1, n = -2, p = 4" />
              <br />
            </div>
            <div>
              គេបាន
              <InlineMath math="f(x) = x - 2 + \frac{4}{x-3}" />
            </div>
            <div>
              <InlineMath math="lim_{x \to \infty^+} \left(x - 2 + \frac{4}{x-3}\right) = +\infty" />
            </div>
            <div>
              <InlineMath math="lim_{x \to \infty^-} \left(x - 2 + \frac{4}{x-3}\right) = -\infty" />
            </div>
            <div className="flex flex-col justify-start gap-1">
              <div>
                <InlineMath math="lim_{x \to 3^-} \left(x - 2 + \frac{4}{x-3}\right) = -\infty" />
              </div>
              <div className="text-xs flex flex-row gap-2">
                <div>ព្រោះ</div>
                <div className="text-xs">
                  <InlineMath math="\lim_{x \to 3^-} \left(\frac{4}{x-3}\right) = -\infty" />
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-start gap-1">
              <div>
                <InlineMath math="lim_{x \to 3^+} \left(x - 2 + \frac{4}{x-3}\right) = +\infty" />
              </div>
              <div className="text-xs flex flex-row gap-2">
                <div>ព្រោះ</div>
                <div className="text-xs">
                  <InlineMath math="\lim_{x \to 3^+} \left(\frac{4}{x-3}\right) = +\infty" />
                </div>
              </div>
            </div>
            <div>
              ដូច្នេះ:{" "}
              <InlineMath math="\lim_{x \to 3^{ \pm }} f(x) = \pm\infty" />
            </div>
            <div>ទាញបញ្ជាក់សមីការនៃអាស៊ីមតូតឈរ</div>
            <div>
              តាមសម្រាយខាងលើ{" "}
              <InlineMath math="\lim_{x \to 3} f(x) = \pm\infty" />{" "}
            </div>
            <div>
              នោះ <InlineMath math="x = 3" /> ជាអាស៊ីមតូតឈរនៃក្រាប(C)
            </div>
          </div>
        ),
      },
      {
        title: " ស្រាយបញ្ជាក់ថា y = x-2 ជាអាស៊ីមតូតទ្រេត",
        content: (
          <div className="space-y-2">
            <div>
              <div>
                គេមានក្រាប(C){" "}
                <InlineMath math="f(x) = x - 2 + \frac{4}{x-3}" />
              </div>
              <div>
                និងបន្ទាត់ (d): <InlineMath math="y = x-2" />
              </div>
            </div>
            <div>
              <div>
                {" "}
                គេបាន <InlineMath math="f(x) - y " />
              </div>
              <div>
                <InlineMath math="(x-2 + \frac{4}{x-3}) - (x-2) = \frac{4}{x-3}" />
              </div>
            </div>
            <div>
              <p>ដោយ</p>
              <div>
                <InlineMath math="\lim_{x \to \infty}[f(x)-y] " />
              </div>
              <div>
                <InlineMath math="= \lim_{x \to \infty} \frac{4}{x-3} = 0" />
              </div>
            </div>
            <div> នោះ y= x-2 ជាអាស៊ីមតូតទ្រេតនៃក្រាប(C)</div>
          </div>
        ),
      },
      {
        title: (
          <div>
            បង្ហាញថា f&apos;(x) ={" "}
            <InlineMath math="\frac{x^2-6x+5}{(x-3)^2}" /> និងគូសតារាងអថេរភាព
          </div>
        ),
        content: (
          <div className="space-y-2">
            <div>
              យើងមាន <InlineMath math="f(x) = x - 2 + \frac{4}{x-3}" />
            </div>
            <div>
              <InlineMath math="\Rightarrow f'(x) = (x-2)' - \left(\frac{4(x-3)'}{(x-3)^2} \right) " />
            </div>
            <div>
              <InlineMath math="\Rightarrow f'(x) = 1 - \frac{4}{(x-3)^2}" />
            </div>
            <div>
              នោះ
              <InlineMath math=" f'(x) = \frac{x^2-6x+5}{(x-3)^2}" />
            </div>
            <div>
              ដោយ <InlineMath math="(x-3)^2 > 0" /> គ្រប់{" "}
              <InlineMath math="x \neq 3" /> នោះ <InlineMath math="f'(x)" />{" "}
              មានសញ្ញាដូច <InlineMath math="x^2-6x+5" />
            </div>
            <div>
              បើ
              <InlineMath math="f'(x) = 0" /> គេបាន{" "}
              <InlineMath math="x^2-6x+5 = 0" /> សមមួល{" "}
              <InlineMath math="x_1 = 1 , x_2 = \frac{c}{a} = 5" />
            </div>
            <div>
              ចំពោះ <InlineMath math="x = 1" /> នោះ{" "}
              <InlineMath math="f(1) = 1 - 2 + \frac{4}{1-3} = -3" />
            </div>
            <div>
              ចំពោះ <InlineMath math="x = 5" /> នោះ{" "}
              <InlineMath math="f(5) = 5 - 2 + \frac{4}{5-3} = 5" />
            </div>
            <div>តារាងសញ្ញា</div>
            <div>
              <div className="bg-white justify-start mt-2">
                <div className="w-full max-w-full overflow-hidden bg-white justify-start mt-2">
                  <div className="w-[100%] md:w-[50%] max-w-full overflow-hidden bg-white justify-start mt-2">
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
                                width: "10%",
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
                                width: "90%",
                                height: "45px",
                                verticalAlign: "middle",
                              }}
                            >
                              <div
                                className="absolute"
                                style={{
                                  left: "2%",
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                }}
                              >
                                −∞
                              </div>
                              <div
                                className="absolute"
                                style={{
                                  left: "20%",
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                }}
                              >
                                1
                              </div>
                              <div
                                className="absolute"
                                style={{
                                  left: "50%",
                                  top: "50%",
                                  transform: "translate(-50%, -50%)",
                                }}
                              >
                                3
                              </div>
                              <div
                                className="absolute"
                                style={{
                                  left: "75%",
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                }}
                              >
                                5
                              </div>
                              <div
                                className="absolute"
                                style={{
                                  right: "2%",
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
                                  left: "10%",
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                  fontSize: "clamp(16px, 5vw, 18px)",
                                  fontWeight: "bold",
                                }}
                              >
                                +
                              </div>
                              <div
                                className="absolute"
                                style={{
                                  left: "20%",
                                  top: "50%",
                                  transform: "translate(-50%, -50%)",
                                  fontSize: "clamp(16px, 5vw, 18px)",
                                  fontWeight: "bold",
                                }}
                              >
                                0
                              </div>
                              <div
                                className="absolute"
                                style={{
                                  left: "35%",
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                  fontSize: "clamp(16px, 5vw, 18px)",
                                  fontWeight: "bold",
                                }}
                              >
                                −
                              </div>
                              <div
                                className="absolute"
                                style={{
                                  left: "20%",
                                  top: "0",
                                  height: "100%",
                                  width: "2px",
                                  backgroundColor: "black",
                                  transform: "translateX(-50%)",
                                }}
                              ></div>
                              <div
                                className="absolute"
                                style={{
                                  left: "calc(50% - 2px)",
                                  top: "0",
                                  height: "100%",
                                  width: "2px",
                                  backgroundColor: "black",
                                }}
                              ></div>
                              <div
                                className="absolute"
                                style={{
                                  left: "calc(50% + 1px)",
                                  top: "0",
                                  height: "100%",
                                  width: "2px",
                                  backgroundColor: "black",
                                }}
                              ></div>
                              <div
                                className="absolute"
                                style={{
                                  left: "77%",
                                  top: "0",
                                  height: "100%",
                                  width: "2px",
                                  backgroundColor: "black",
                                  transform: "translateX(-50%)",
                                }}
                              ></div>
                              <div
                                className="absolute"
                                style={{
                                  left: "65%",
                                  top: "50%",
                                  transform: "translateY(-50%)",
                                  fontSize: "clamp(16px, 5vw, 18px)",
                                  fontWeight: "bold",
                                }}
                              >
                                −
                              </div>
                              <div
                                className="absolute"
                                style={{
                                  left: "77%",
                                  top: "50%",
                                  transform: "translate(-50%, -50%)",
                                  fontSize: "clamp(16px, 5vw, 18px)",
                                  fontWeight: "bold",
                                }}
                              >
                                0
                              </div>
                              <div
                                className="absolute"
                                style={{
                                  left: "90%",
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
        title: "សិក្សាសញ្ញានៃអនុគមន៍ f(x)",
        content: (
          <div>
            <div>ដោយ f&apos;(x) ប្ដូរសញ្ញាពី + ទៅ - ត្រង់ x = 1 </div>
            <div>
              <InlineMath math="\Rightarrow f(x) មានតម្លៃអតិបរមាត្រង់ x = 1" />
            </div>
            <div>ដោយ f&apos;(x) ប្ដូរសញ្ញាពី - ទៅ + ត្រង់ x = 5 </div>
            <div>
              <InlineMath math="\Rightarrow f(x) មានតម្លៃអប្បបរមាត្រង់ x = 5" />
            </div>
          </div>
        ),
      },
      {
        title: "តារាងអថេរភាព",
        content: (
          <div className="w-full flex justify-start">
            <div className="w-full md:w-[30%] bg-white">
              <table
                className="border-collapse w-full"
                style={{
                  fontSize: "16px",
                  fontFamily: "serif",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      className="border-2 border-black text-center font-normal bg-white"
                      style={{
                        width: "15%",
                        height: "40px",
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
                        height: "40px",
                        verticalAlign: "middle",
                      }}
                    >
                      <div
                        className="absolute"
                        style={{
                          left: "2%",
                          top: "50%",
                          transform: "translateY(-50%)",
                          fontSize: "clamp(12px, 2.5vw, 16px)",
                        }}
                      >
                        −∞
                      </div>
                      <div
                        className="absolute"
                        style={{
                          left: "22%",
                          top: "50%",
                          transform: "translateY(-50%)",
                          fontSize: "clamp(12px, 2.5vw, 16px)",
                        }}
                      >
                        1
                      </div>
                      <div
                        className="absolute"
                        style={{
                          left: "48%",
                          top: "50%",
                          transform: "translateY(-50%)",
                          fontSize: "clamp(12px, 2.5vw, 16px)",
                        }}
                      >
                        3
                      </div>
                      <div
                        className="absolute"
                        style={{
                          left: "74%",
                          top: "50%",
                          transform: "translateY(-50%)",
                          fontSize: "clamp(12px, 2.5vw, 16px)",
                        }}
                      >
                        5
                      </div>
                      <div
                        className="absolute"
                        style={{
                          right: "2%",
                          top: "50%",
                          transform: "translateY(-50%)",
                          fontSize: "clamp(12px, 2.5vw, 16px)",
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
                        height: "40px",
                        verticalAlign: "middle",
                        fontStyle: "italic",
                      }}
                    >
                      f&apos;(x)
                    </td>
                    <td
                      className="border-2 border-black bg-white relative"
                      style={{
                        height: "40px",
                      }}
                    >
                      <div
                        className="absolute"
                        style={{
                          left: "12%",
                          top: "50%",
                          transform: "translateY(-50%)",
                          fontSize: "clamp(14px, 3vw, 18px)",
                          fontWeight: "bold",
                        }}
                      >
                        +
                      </div>
                      <div
                        className="absolute"
                        style={{
                          left: "22%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                          fontSize: "clamp(16px, 5vw, 18px)",
                          fontWeight: "bold",
                        }}
                      >
                        0
                      </div>
                      <div
                        className="absolute"
                        style={{
                          left: "35%",
                          top: "50%",
                          transform: "translateY(-50%)",
                          fontSize: "clamp(14px, 3vw, 18px)",
                          fontWeight: "bold",
                        }}
                      >
                        −
                      </div>
                      <div
                        className="absolute"
                        style={{
                          left: "22%",
                          top: "0",
                          height: "100%",
                          width: "2px",
                          transform: "translateX(-50%)",
                          backgroundColor: "black",
                        }}
                      ></div>
                      <div
                        className="absolute"
                        style={{
                          left: "47%",
                          top: "0",
                          height: "100%",
                          width: "2px",
                          backgroundColor: "black",
                        }}
                      ></div>
                      <div
                        className="absolute"
                        style={{
                          left: "49%",
                          top: "0",
                          height: "100%",
                          width: "2px",
                          backgroundColor: "black",
                        }}
                      ></div>
                      <div
                        className="absolute"
                        style={{
                          left: "61%",
                          top: "50%",
                          transform: "translateY(-50%)",
                          fontSize: "clamp(14px, 3vw, 18px)",
                          fontWeight: "bold",
                        }}
                      >
                        −
                      </div>
                      <div
                        className="absolute"
                        style={{
                          left: "74%",
                          top: "50%",
                          transform: "translate(-50%, -50%)",
                          fontSize: "clamp(16px, 5vw, 18px)",
                          fontWeight: "bold",
                        }}
                      >
                        0
                      </div>
                      <div
                        className="absolute"
                        style={{
                          left: "85%",
                          top: "50%",
                          transform: "translateY(-50%)",
                          fontSize: "clamp(14px, 3vw, 18px)",
                          fontWeight: "bold",
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
                          bottom: "8px",
                          left: "2%",
                          fontSize: "clamp(12px, 2.5vw, 15px)",
                        }}
                      >
                        −∞
                      </div>
                      <div
                        className="absolute"
                        style={{
                          top: "8px",
                          left: "22%",
                          transform: "translateX(-50%)",
                          fontSize: "clamp(12px, 2.5vw, 15px)",
                        }}
                      >
                        −3
                      </div>
                      <div
                        className="absolute"
                        style={{
                          left: "24%",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      >
                        <svg
                          width="18%"
                          height="40"
                          viewBox="0 0 60 40"
                          className="w-14 h-9 md:w-20 md:h-12"
                        >
                          <defs>
                            <marker
                              id="arrow3"
                              markerWidth="8"
                              markerHeight="6"
                              refX="7"
                              refY="3"
                              orient="auto"
                            >
                              <polygon points="0 0, 8 3, 0 6" fill="black" />
                            </marker>
                          </defs>
                          <path
                            d="M4,7 L30,40"
                            stroke="black"
                            strokeWidth="1.5"
                            markerEnd="url(#arrow3)"
                          />
                        </svg>
                      </div>
                      <div
                        className="absolute"
                        style={{
                          bottom: "5px",
                          left: "37%",
                          fontSize: "clamp(12px, 2.5vw, 15px)",
                        }}
                      >
                        −∞
                      </div>
                      <div
                        className="absolute"
                        style={{
                          left: "47%",
                          top: "0",
                          height: "100%",
                          width: "2px",
                          backgroundColor: "black",
                        }}
                      ></div>
                      <div
                        className="absolute"
                        style={{
                          left: "49%",
                          top: "0",
                          height: "100%",
                          width: "2px",
                          backgroundColor: "black",
                        }}
                      ></div>
                      <div
                        className="absolute"
                        style={{
                          top: "8px",
                          left: "52%",
                          fontSize: "clamp(12px, 2.5vw, 15px)",
                        }}
                      >
                        +∞
                      </div>
                      <div
                        className="absolute"
                        style={{
                          left: "57%",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      >
                        <svg
                          width="15%"
                          height="40"
                          viewBox="0 0 60 40"
                          className="w-14 h-9 md:w-20 md:h-12"
                        >
                          <defs>
                            <marker
                              id="arrow4"
                              markerWidth="8"
                              markerHeight="6"
                              refX="7"
                              refY="3"
                              orient="auto"
                            >
                              <polygon points="0 0, 8 3, 0 6" fill="black" />
                            </marker>
                          </defs>
                          <path
                            d="M4,8 L30,32"
                            stroke="black"
                            strokeWidth="1.5"
                            markerEnd="url(#arrow4)"
                          />
                        </svg>
                      </div>
                      <div
                        className="absolute"
                        style={{
                          bottom: "8px",
                          left: "75%",
                          transform: "translateX(-50%)",
                          fontSize: "clamp(12px, 2.5vw, 15px)",
                        }}
                      >
                        5
                      </div>
                      <div
                        className="absolute"
                        style={{
                          left: "76%",
                          top: "50%",
                          transform: "translateY(-50%)",
                        }}
                      >
                        <svg
                          width="15%"
                          height="40"
                          viewBox="0 0 50 40"
                          className="w-12 h-9 md:w-16 md:h-12"
                        >
                          <defs>
                            <marker
                              id="arrow5"
                              markerWidth="8"
                              markerHeight="6"
                              refX="7"
                              refY="3"
                              orient="auto"
                            >
                              <polygon points="0 0, 8 3, 0 6" fill="black" />
                            </marker>
                          </defs>
                          <path
                            d="M5,35 L30,8"
                            stroke="black"
                            strokeWidth="1.5"
                            markerEnd="url(#arrow5)"
                          />
                        </svg>
                      </div>
                      <div
                        className="absolute"
                        style={{
                          top: "8px",
                          right: "2%",
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
        ),
      },
      {
        title: " គណនាកូអរដោនេនៃចំណុច A",
        content: (
          <div className="space-y-2">
            <div>
              គេមានបន្ទាត់ (Δ): <InlineMath math="y = mx + m + 5" />
              <br /> ដែល <InlineMath math="m" /> ជាប៉ារ៉ាម៉ែត្រ
            </div>
            <div>
              សមីការនេះអាចសរសេរជា <InlineMath math="y - 5 = m(x + 1)" />
            </div>
            <div>
              សមីការចុងកក្រោយនេះផ្ទៀងផ្ទាត់ជានិច្ចគ្រប់តម្លៃ m លុះត្រាតែ ៖
            </div>
            <div>
              <InlineMath
                math="\begin{cases}
                  x + 1 = 0 \\
                  y - 5 = 0
                \end{cases}"
              />
              សមមួល <InlineMath math="x = -1, y = 5" />
            </div>
            <div>
              ដូច្នេះ​​ កូអរដោនេនៃចំណុច <InlineMath math="A(-1, 5)" />
            </div>
          </div>
        ),
      },
      {
        title: "បង្ហាញថាមានបន្ទាត់ 2 ដែលប៉ះនឺងខ្សែរកោង (C)",
        content: (
          <div className="space-y-2">
            <div>
              សមីការអាប់ស៊ីសចំណុចប្រសព្វរវាងបន្ទាត់ (Δ&apos;) និងខ្សែរកោង (C)
              សរសេរ ៖
            </div>
            <div>
              <InlineMath math="\frac{x^2-5x+10}{x-3} = mx + m + 5" />
            </div>
            <div>
              <InlineMath math="x^2-5x+10 = mx^2 +(m+5)x -3mx -3m -15" />
            </div>
            <div className="text-xs">
              <InlineMath math="(m-1)x^2 - 2(m-5)x - 3m - 25 = 0 \quad (E)" />
            </div>
            <div>
              <InlineMath math="\Delta' = (m-5)^2 - (m-1)(-3m-25) = m^2 - 10m + 25 + 3m^2 + 22m - 25" />
            </div>
            <div>
              <InlineMath math="\Delta' = 4m^2 + 12m = 4m(m+3)" />
            </div>
            <div>
              ដើម្បីឲ្យបន្ទាត់(Δ)ប៉ះនឺងខ្សែរកោង(C)លុះត្រាតែ (E) មានឬសឌុប
            </div>
            <div>
              ពោលគឺ <InlineMath math="\Delta' = 4m(m+3) = 0" />
              <br /> <InlineMath math=" \Rightarrow m_1 = -3, m_2 = 0" />
            </div>
            <div>
              តាមសម្រាយបញ្ជាក់ មានបន្ទាត់ 2 (Δ&apos;) និង (Δ&quot;)
              ដែលប៉ះនឺងខ្សែរកោង(c)
            </div>
            <div>
              សរសេរសមីការ (Δ&apos;) និង (Δ&quot;) រួចគណនាកូអរដោនេនៃចំណុចបះ ៖{" "}
              <InlineMath math="M" /> និង <InlineMath math="N" />
            </div>
            <div>
              ចំពោះ: <InlineMath math="m = -3" /> សមីការ (Δ) ទៅជា <br />{" "}
              (Δ&apos;) : <InlineMath math="y = -3x + 2" /> ហើយសមីការ (E) ទៅជា
            </div>
            <div className="text-xs">
              <InlineMath math="-4x^2 + 16x - 16 = -4(x-2)^2 = 0" />
            </div>
            <div>
              {" "}
              មានឬសឌុប <InlineMath math="x_1 = x_2 = 2" />
            </div>
            <div>
              បើ <InlineMath math="x = 2" /> នោះ{" "}
              <InlineMath math="y = -3(2) + 2 = -4" />
              <br />
              <InlineMath math="\Rightarrow M(2, -4)" />
            </div>
            <div>
              ចំពោះ: <InlineMath math="m = 0" /> សមីការ (Δ) ទៅជា <br />
              (Δ&quot;): <InlineMath math="y = 5" /> រួចសមីការ(E) ទៅជា
            </div>
            <div>
              {" "}
              <InlineMath math="-x^2 + 10x - 25 = -(x-5)^2 = 0" />
            </div>
            <div>
              មានឬសឌុប <InlineMath math="x_1 = x_2 = 5" />
            </div>
            <div>
              <InlineMath math="\Rightarrow N(5, 5)" />
            </div>
          </div>
        ),
      },
      {
        title: <div>គណនាកូអរដោនេនៃចំណុច B និង C</div>,
        content: (
          <div className="space-y-2">
            <div>
              ដោយបន្ទាត់(Δ&apos;) និង (Δ&quot;)ប្រសព្វបន្ទាត់(d) ត្រង់ចំណុច{" "}
              <InlineMath math="B" /> និង <InlineMath math="C" /> រៀងគ្នានោះ
            </div>
            <div>
              កូអរដោនេនៃចំណុច
              <InlineMath math="B" /> និង <InlineMath math="C" />{" "}
              ជាចម្លើយនៃប្រព័ន្ទសមីការរៀងគ្នា
            </div>
            <div>
              <InlineMath
                math="\begin{cases}
                  y_B = x_B - 2 \\
                  y_B = -3x_B + 2
                \end{cases}"
              />
              និង
              <InlineMath
                math="\begin{cases}
                  y_C = x_C - 2 \\
                  y_C = 5
                \end{cases}"
              />
            </div>
            <div>
              បន្ទាប់ពីដោះស្រាយគេបាន
              <InlineMath math="B(1, -1)" /> និង <InlineMath math="C(7, 5)" />
            </div>
          </div>
        ),
      },
      {
        title: "គណនាចំណុច I និងស្រាយថា I ជាផ្ចិតឆ្លុះ",
        content: (
          <div className="space-y-2">
            <div>
              តាង <InlineMath math="I(x_I, y_I)" />
              ជាចំណោងកែងនៃ A លើ <InlineMath math="BC" />
            </div>
            <div>
              គេមាន <InlineMath math="I \in (d)" /> នោះ I
              ផ្ទៀងផ្ទាត់នឺងសមីការបន្ទាត់(d)
            </div>
            <div>
              គេបាន <InlineMath math="y_I = x_I - 2 \quad (1)" />
            </div>
            <div>
              ម៉្យាងទៀតគេមាន{" "}
              <InlineMath math="\overrightarrow{AI} = (x_I + 1, y_I - 5)" />
              ហើយ (d) : <InlineMath math="y = x - 2" /> មានវ៉ិចទ័រប្រាប់ទិស
            </div>
            <div>
              {" "}
              <InlineMath math="\overrightarrow{u} = (1, 1)" /> ដោយ{" "}
              <InlineMath math="AI \perp (d)" /> <br />
              <InlineMath math="\Rightarrow \overrightarrow{AI} \perp \overrightarrow{u} \Leftrightarrow \overrightarrow{AI} \cdot \overrightarrow{u} = 0" />
            </div>
            <div>
              សមមូល <InlineMath math="x_I + 1 + y_I - 5 = 0" />
              <br /> ឬ <InlineMath math="x_I + y_I - 4 = 0 \quad (2)" />
            </div>
            <div>
              យក(1) ជំនួសក្នុង (2) គេបាន
              <br />
              <InlineMath math="x_I+(x_I-2) -4 = 0" />{" "}
              <InlineMath math="\Rightarrow x_I = 3" /> <br />
              យក <InlineMath math="x_I = 3" /> ជំនួសក្នុង (1) <br />
              <InlineMath math="y_I = (3) - 2 = 1" />
            </div>
            <div>
              ដូច្នេះ: <InlineMath math="I(3, 1)" />
            </div>
          </div>
        ),
      },
      {
        title: "ស្រាយថា I ជាផ្ចិតឆ្លុះ",
        content: (
          <div>
            <p>
              តាមរូបមន្ត <InlineMath math="f(2a-x_o)+f(x_o) = 2b" />
            </p>
            <p>I(3,1) ជាផ្ចិតឆ្លុះលុះត្រា</p>
            <div className="flex flex-row item-center gap-2">
              <p>
                <InlineMath math="f(6-x_o)+f(x_o) = 2 " />
              </p>
              <p className="text-xs ">(ចំពោះ a = 3, b = 1)</p>
            </div>
            <p>
              គេមាន
              <InlineMath math="f(x) = x+2 +\frac{4}{x-3}" />
              <br />
              <InlineMath math="\Rightarrow f(x_0) = x_o-2 + \frac{4}{x_o-3}" />
            </p>
            <p>
              និង{" "}
              <InlineMath math="f(6-x_0) = (6-x_0)-2 +\frac{4}{(6-x_0)-3}" />
              <br />
              <InlineMath math="= - x_0 +4 + \frac{4}{3-x_0}" />
            </p>
            <p>
              គេបាន <InlineMath math="f(6-x_0) +f(x_o)" />
            </p>
            <p>
              <InlineMath math="= -x_o+4-\frac{4}{3-x_o} + x_o-2+\frac{4}{x_o-3} = 2" />{" "}
              ពិត
            </p>
            <p>ដូច្នេះ I(3,1) ជាផ្ចិតឆ្លុះ</p>
          </div>
        ),
      }
    ],
    answer: "",
  },
  {
    type: "graphExplanation",
    expressions: [
      { id: "1", latex: "f(x) = \\frac{x^2-5x+10}{x-3}", color: "#FF4136" },
      { id: "2", latex: "y=x-2", color: "#F" },
      { id: "3", latex: "y=5", color: "#FF413" },
      { id: "4", latex: "y=-3x+2", color: "#FF413" },
      { id: "5", latex: "x=3", color: "purple" },
    ],
    explanation: (
      <div>
        <p>សំណង់ក្រាប</p>
        <p>♦ យើងមាន x= 3 ជាអាស៊ីមតូតឈរ</p>
        <p>♦ (d): y= x-2 ជាអាស៊ីមតុតទ្រេត</p>
        <p>♦ អតិបរមាត្រង់(1,-3)</p>
        <p>♦ អប្បបរមាត្រង់(5,5)</p>
        <p>♦ (Δ&apos;): y = -3x+2</p>
        <p>♦ (Δ&quot;): y = 5</p>
        <p>♦ M(2,-4)និង N(5,5) ជាកូអរដោនេចំណុចប៉ះ (c)</p>
        <p>♦ ចំណុចប្រសព្វ A(-1,5), B(1,-1), C(7,5)</p>
        <p>♦ I(3,1) ជាផ្ចិតឆ្លុះ</p>
      </div>
    ),
  },
  {
    type: "hint",
    content: (
      <>
        សូមចងចាំថា អនុគមន៍សនិទាន <InlineMath math="f(x) = c" /> មានតម្លៃថេរ
        មិនថា <InlineMath math="x" /> ផ្លាស់ប្ដូរយ៉ាងណាក៏ដោយ។
      </>
    ),
  },
  {
    type: "warning",
    content: (
      <>
        កុំច្រឡំអនុគមន៍សនិទានជាមួយអនុគមន៍បន្ទាត់ទ្រេត{" "}
        <InlineMath math="f(x) = mx + b" /> ព្រោះអនុគមន៍សនិទានមាន{" "}
        <InlineMath math="m = 0" /> ប៉ុណ្ណោះ។
      </>
    ),
  },
];

// Simulate database fetching
const jsonV3 = serializeTopicContentV3(content);
const restoredContent = deserializeTopicContentV3(jsonV3) as TopicContent_V3[];

// ===== MAIN COMPONENT =====

export default function PolynomialFunction() {
  return <ContentRendererV3 content={restoredContent} />;
}