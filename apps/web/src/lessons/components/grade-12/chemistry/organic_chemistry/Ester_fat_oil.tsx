"use client";

import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import {
    serializeTopicContentV3,
    deserializeTopicContentV3,
    deserializeTopicContentV3ToTree,
} from "@/components/pages/docs/utils/ContentSerializerV2";

const TOPIC_CONTENT_V3: TopicContent_V3[] = [
    {
        type: "definition",
        title: "១. អេស្ទែ",
        content: (
            <div className="flex flex-col items-start">
              <p>
                អេស្ទែ ជាអង្គធាតុស្រឡាយនៃអាសុីតកាបុកសុីលិច{" "}
                <span className="text-[13px]">
                  <InlineMath math="(R-COOH)" />
                </span>{" "}
                ដែលបានពីការជំនួសក្រុម{" "}
                <span className="text-[13px]">
                  <InlineMath math="-OH" />
                </span>{" "}
                របស់អាសុីតដោយក្រុម{" "}
                <span className="text-[13px]">
                  <InlineMath math="(-OR^{\prime})" />
                </span>{" "}
                របស់អាកុល ។
              </p>
            </div>
        ),
    },
    {
        type: "tip",
        title: "ជាទូទៅ",
        content: (
            <div className="flex items-start gap-3 flex-col">
                <div className="flex items-center gap-3 flex-wrap">
                    <p>អេស្ទែមានរូបមន្តទូទៅ :</p>
                    <span className="text-[13px]">
                        <InlineMath math="-COO-R^{\prime}" />
                    </span>
                </div>
                <div className="flex items-center gap-3 flex-wrap">
                    <p>បង្គុំនាទីអេស្ទែ :</p>
                    <span className="text-[13px]">
                        <InlineMath math="-COO-\underset{\vert}{\overset{\vert}{C}} -" />
                    </span>
                </div>
            </div>
        ),
    },
    {
        type: "definition",
        title: "១.១ នាមវលី",
        content: (
            <div className="flex flex-col items-start"></div>
        ),
    },
    {
        type: "tip",
        title: "ចំណុចសំខាន់",
        content: (
            <div className="flex items-start gap-3 flex-col">
              <p>
                ដេីម្បីហៅឈ្មោះអេស្ទែ គេហៅឈ្មោះរ៉ាឌីកាល់{" "}
                <span className="text-[13px]">
                  <InlineMath math="OR^{\prime}" />
                </span>{" "}
                របស់អាល់កុល រួចហៅឈ្មោះអាសុីតដោយប្តូរ បច្ចឹមបទពី &quot;អូអុិច&quot;
                ទៅជា​ &quot;អូអាត&quot; ។
              </p>
            </div>
        ),
    },
    {
        type: "example",
        question: (
            <div className="flex items-start flex-col gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[13px]">
                        <InlineMath math="CH_{3}-COO-C_{2}H_{5}" />
                    </span>
                    <p>អេទីល អេតាណូអាត</p>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[13px]">
                        <InlineMath math="C_{6}H_{5}-COO-C_{2}H_{5}" />
                    </span>
                    <p>អេទីល បង់សូអាត</p>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[13px]">
                        <InlineMath math="CH_{3}-COO-C_{6}H_{5}" />
                    </span>
                    <p>ផេនីល អេតាណូអាត</p>
                </div>
            </div>
        ),
    },
    {
        type: "definition",
        title: "១.២ លក្ខណះរូប",
        content: (
            <div className="flex flex-col items-start"></div>
        ),
    },
    {
        type: "tip",
        title: "ចំណុចសំខាន់",
        content: (
            <div className="flex items-start gap-3 flex-col">
                <p>
                    អេស្ទែ ភាគច្រេីនដែលមានម៉ាសម៉ូលតូច រលាយក្នុងទឹក ងាយហេីរ
                    មានក្លិនគួរជាទីគាប់ចិត្ត ។
                    ល្បាយអេស្ទែត្រូវបានប្រេីសម្រាប់ធ្វេីទឹកអប់ នំ បង្អែម ... ។
                </p>
            </div>
        ),
    },
    {
        type: "definition",
        title: "១.៣ លក្ខណះគីមី",
        content: <div></div>,
    },
    {
        type: "tip",
        title: "ចំណុចសំខាន់",
        content: (
            <ul className="list-disc pl-5 flex flex-col items-start gap-4">
            <div>
              <li>
                អុីដ្រូលីស ជាប្រតិកម្មរវាងអេស្ទែ និង ទឹក ឲផលជាអាសុីតនិងអាល់កុល ។
              </li>
              <span className="text-[13px]">
                <InlineMath math="R-COO-R^{\prime} + H_{2}O  \xrightleftharpoons[(2)]{(1)} R-COOH + R^{\prime}-OH" />
              </span>
              <span className="text-[13px]">
                <InlineMath math="CH_{3}-COO-C_{2}H_{5} + H_{2}O  \xrightleftharpoons[(2)]{(1)} CH_{3}COOH + C_{2}H_{5}-OH" />
              </span>
            </div>
            <div>
              <li>
                សាប៊ូកម្ម : អេស្ទែមានអំពេីជាមួយស៊ូត ឲផលជាអំបិលនៃអាសុីត​និង អាល់កុល
                ។
              </li>
              <span className="text-[13px]">
                <InlineMath math="R-COO-R^{\prime} + NaOH  \xrightleftharpoons[(2)]{(1)} R-COONa + R^{\prime}-OH" />
              </span>
              <span className="text-[13px]">
                <InlineMath math="CH_{3}-COO-C_{2}H_{5} + NaOH  \xrightleftharpoons[(2)]{(1)} CH_{3}-COONa + C_{2}H_{5}-OH" />
              </span>
            </div>
            <div>
              <li>
                ប្រតិកម្មជាមួយអាម៉ូញ៉ាក់ : អាម៉ូញ៉ាក់មានអំពេីជាមួយអេស្ទែ
                ឲផលជាអាមីតនិងអាល់កុល ។
              </li>
              <span className="text-[13px]">
                <InlineMath math="R-COO-R^{\prime} + NH_{3}  \xrightleftharpoons[(2)]{(1)} R-CO-NH_{2} + R^{\prime}-OH" />
              </span>
              <span className="text-[13px]">
                <InlineMath math="CH_{3}-COO-C_{2}H_{5} + NH_{3}  \xrightleftharpoons[(2)]{(1)} CH_{3}-CO-NH_{2} + C_{2}H_{5}-OH" />
              </span>
            </div>
            <div>
              <li>
                ប្រតិកម្មរេដុកម្មអេស្ទែ :
                អេស្ទែរងរេដុកម្មជាអាល់កុលដោយអុីដ្រូសែននៅចំពោះមុខកាតាលីករ
                ដូចជាល្បាយ នៃ
                <span className="text-[13px]">
                  <InlineMath math="CuO , CuCr_{2}O_{4}" />
                </span>
                នៅសីតុណ្ហភាពនិងសម្ពាធខ្ពស់ ។
              </li>
              <span className="text-[13px]">
                <InlineMath math="R-COO-R^{\prime} + 2H_{2}  \xrightleftharpoons[(2)]{(1)} R-CH_{2}-OH + R^{\prime}-OH" />
              </span>
              <span className="text-[13px]">
                <InlineMath math="CH_{3}-COO-C_{3}H_{7} + 2H_{2}  \xrightleftharpoons[(2)]{(1)} CH_{3}-CH_{2}-OH + C_{3}H_{7}-OH" />
              </span>
            </div>
          </ul>
        ),
    },
    {
        type: "definition",
        title: "១.៤ ទង្វេីអេស្ទែ",
        content: <div></div>,
    },
    {
        type: "tip",
        title: "ចំណុចសំខាន់",
        content: (
            <div className="flex items-start flex-col gap-2">
            <span>អេស្ទែអាចធ្វេីឡេីងតាមពីររបៀប :</span>
            <ul className="list-disc pl-5 flex flex-col items-start gap-4">
              <div>
                <li>
                  អេស្ទែកម្ម : ជាប្រតិកម្មរវាងអាសុីត និងអាល់កុល ឲផលជាអេស្ទែនិងទឹក
                  ។
                </li>
                <span className="text-[13px]">
                  <InlineMath math="R-COO-COOH + R^{\prime}-OH   \xrightleftharpoons[(2)]{(1)} R-COO-R^{\prime} + H_{2}O" />
                </span>
                <span className="text-[13px]">
                  <InlineMath math="CH_{3}COOH + C_{2}H_{5}-OH  \xrightleftharpoons[(2)]{(1)} CH_{3}-COO-C_{2}H_{5} + H_{2}O" />
                </span>
              </div>
              <div className="flex flex-col items-start gap-3">
                <li>ប្រតិកម្មរវាងអានីទ្រីតអាសុីតឬអាសុីលក្លរួ និងអាល់កុល</li>
                <div className="flex flex-col items-start gap-3">
                  <p>
                    _ អានីទ្រីតអាសុីតមានអំពេីជាមួយអាល់កុល ឲផលជាអេស្ទែនិងអាសុីត ។
                  </p>
                  <span className="text-[13px]">
                    <InlineMath math="R-CO-O-CO-R + R^{\prime}-OH   \xrightleftharpoons[(2)]{(1)} R-COO-R^{\prime} + R-COOH" />
                  </span>
                  <span className="text-[13px]">
                    <InlineMath math="CH_{3}CO-O-CO-CH_{3} + C_{2}H_{5}-OH   \xrightleftharpoons[(2)]{(1)} CH_{3}-COO-C_{2}H_{5} + CH_{3}-COOH" />
                  </span>
                </div>
                <div className="flex flex-col items-start gap-3">
                  <p>
                    _ អាសុីលក្លរួមានអំពេីជាមួយអាល់កុល
                    ឲផលជាអេស្ទែនិងអាសុីតក្លរីឌ្រិច ។
                  </p>
                  <span className="text-[13px]">
                    <InlineMath math="R-CO-Cl + R^{\prime}-OH   \xrightleftharpoons[(2)]{(1)} R-COO-R^{\prime} + HCl" />
                  </span>
                  <span className="text-[13px]">
                    <InlineMath math="CH_{3}-CO-Cl + C_{2}H_{5}-OH   \xrightleftharpoons[(2)]{(1)} CH_{3}-COO-C_{2}H_{5} + HCl" />
                  </span>
                </div>
              </div>
            </ul>
          </div>
        ),
    },
    {
        type: "definition",
        title: "អេស្ទែសំខាន់ ៗ",
        content: <div></div>,
    },
    {
        type: "threeDExplanation",
        title: "អាសុីតអាសេទីលសាលីសុីលិច(អាស្ពីរីន)",
        src: "/chemistry/aspirin.glb",
        target: [0, 0.5, 0],
        scale: 0.4,
        canvasBackgroundColor: "white",
        explanation: [
            <InlineMath math="CH_{3}-COO-C_{6}H_{5}" key="q1" />,
            <span key="q2">ម៉ាសម៉ូលេគុល ≈ 180 g/mol</span>,
            <span key="q3">
                ប្រើសម្រាប់៖ បំបាត់ការឈឺចាប់ បន្ថយកំដៅ បន្ថយការរលាក និងបន្ថយការកកឈាម
            </span>,
        ],
    },
    {
        type: "imageExplanation",
        title: "អាសុីតអាសេទីលសាលីសុីលិច(អាស្ពីរីន)",
        src: "/chemistry/aspirin.png",
        imageAlt: "អាសុីតអាសេទីលសាលីសុីលិច",
        explanation: [
            <InlineMath math="CH_{3}-COO-C_{6}H_{5}" key="q1" />,
            <span key="q2">ម៉ាសម៉ូលេគុល ≈ 180 g/mol</span>,
            <span key="q3">
                ប្រើសម្រាប់៖ បំបាត់ការឈឺចាប់ បន្ថយកំដៅ បន្ថយការរលាក និងបន្ថយការកកឈាម
            </span>,
        ],
    },
    {
        type: "imageExplanation",
        title: "អាសុីតសាលីសុីលិច",
        src: "/chemistry/pic34.png",
        imageAlt: "អាសុីតអាសេទីលសាលីសុីលិច",
        explanation: [<InlineMath math="C_{6}H_{4}(OH)COOH" key="q2" />],
    },
    {
      type: "imageExplanation",
      title: "មេទីលបង់សូអាត",
      src: "/chemistry/pic35.png",
      imageAlt: "មេទីលបង់សូអាត",
      explanation: [<InlineMath math="C_{6}H_{5}COOCH_{3}" key="q3" />],
    },
    {
      type: "imageExplanation",
      title: "មេទីលសាលីសុីឡាត",
      src: "/chemistry/pic36.png",
      imageAlt: "មេទីលសាលីសុីឡាត",
      explanation: [<InlineMath math="C_{6}H_{4}COOCH_{3}" key="q4" />],
    },
    {
        type: "definition",
        title: "២. ខ្លាញ់ និងប្រេង",
        content: (
            <div></div>
        ),
    },
    {
        type: "tip",
        title: "ជាទូទៅ",
        content: (
            <div>
                ខ្លាញ់ និងប្រេងមានច្រេីននៅក្នុងធម្មជាតិ វាបង្កសំខាន់នៅក្នុងកោសិកាសត្វនិងរុក្ខជាតិ ។ ខ្លាញ់បានពីសត្វ ហេីយប្រេងបានពីរុក្ខជាតិ​ ។
            </div>
        ),
    },
    {
        type: "definition",
        title: "២.១ សមាសភាព",
        content: (
            <div></div>
        ),
    },
    {
        type: "tip",
        title: "ជាទូទៅ",
        content: (
            <div>
                <ul className="list-disc pl-5 flex flex-col items-start gap-4">
                  <div className="flex items-start gap-3 flex-col">
                    <li>
                      ខ្លាញ់ និងប្រងមានទម្រង់ដូចគ្នា គឺជាទ្រីអេស្ទែដែលកេីតពីគ្លីសេរ៉ុល
                      ឬប្រូប៉ាន -1,2,3-ទ្រីអុល{" "}
                      <span className="text-[13px]">
                        <InlineMath math="(CH_{2}OH-CHOH-CH_{2}OH)" />
                      </span>
                      និងអាសុីតខ្លាញ់ ។
                    </li>
                    <span className="text-[13px]">
                      <InlineMath math="C_{3}H_{8}OH + 3R-COOH \rightarrow C_{3}H_{5}(COOR)_{3} + 3H_2O" />
                    </span>
                  </div>
                  <div className="flex items-start gap-3 flex-col">
                    <li>អាសុីតខ្លាញ់ឆ្អែត :</li>
                    <div className="flex items-center gap-3 flex-wrap">
                      <p>_ អាសុីតប៉ាល់មីទិច</p>
                      <span className="text-[13px]">
                        <InlineMath math="CH_{3}-(CH_{2})_{14}-COOH" />
                      </span>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <p>_ អាសុីតស្តេអារិច</p>
                      <span className="text-[13px]">
                        <InlineMath math="CH_{3}-(CH_{2})_{16}-COOH" />
                      </span>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <p>_ អាសុីតអារ៉ាសុីឌិច</p>
                      <span className="text-[13px]">
                        <InlineMath math="CH_{3}-(CH_{2})_{18}-COOH" />
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 flex-col">
                    <li>អាសុីតខ្លាញ់មិនឆ្អែត :</li>
                    <div className="flex items-center gap-3 flex-wrap">
                      <p>អាសុីតអូលេអុិច</p>
                      <span className="text-[13px]">
                        <InlineMath math="CH_{3}-(CH_{2})_{7}-CH=CH-(CH_{2})_{7}-COOH" />
                      </span>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <p>អាសុីតលីណូលេអុិច</p>
                      <span className="text-[13px]">
                        <InlineMath math="CH_{3}-(CH_{2})_{4}-CH=CH-CH_{2}-CH=CH-(CH_{2})_{7}-COOH" />
                      </span>
                    </div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <p>អាសុីតលីណូលេនិច</p>
                      <span className="text-[13px]">
                        <InlineMath math="CH_{3}-CH_{2}-CH=CH-CH_{2}-CH=CH-CH_{2}-CH=CH-(CH_{2})_{7}-COOH" />
                      </span>
                    </div>
                  </div>
                </ul>
            </div>
        ),
    },
    {
        type: "example",
        question: (
            <div className="flex items-start flex-col gap-4 text-[13px]">
                <InlineMath math="C_{3}H_{8}OH + CH_{3}(C_{15}H_{31}COO) \rightarrow C_{3}H_5(C_{15}H_{31}COO)_{3} + 3H_{2}O" />
            </div>
        ),
    },
    {
        type: "definition",
        title: "២.២ លក្ខណះខ្លាញ់ ឬប្រេង",
        content: <div></div>,
    },
    {
        type: "tip",
        title: "ជាទូទៅ",
        content: (
            <div>
                ខ្លាញ់ និងប្រេងស្រាលជាងទឹក មិនរលាយក្នុងទឹក តែរលាយក្នុងឌីក្លរ៉ូអេតាន អេទែបង់សែន ប្រេងសាំង កាបូតេត្រាក្លរួ ឌីក្លរ៉ូអេទីឡែន ។
            </div>
        ),
    },
    {
        type: "definition",
        title: "ក. អុីដ្រូសែនកម្ម",
        content: <div></div>,
    },
    {
        type: "tip",
        title: "ជាទូទៅ",
        content: (
            <div>
                ប្រេងរុក្ខជាតិរាវជាសមាសធាតុមិនឆ្អែតវាអាចរងអុីដ្រូសែនកម្មជាខ្លាញ់រឹង ។
                <span className="text-[13px]">
                    <InlineMath math="C_{3}H_{8}OH + 3H_{2} \rightarrow C_{3}H_5(C_{15}H_{31}COO)_{3}" />
                </span>
            </div>
        ),
    },
    {
        type: "definition",
        title: "ខ. អុីដ្រូលីសខ្លាញ់ ឬប្រេង",
        content: <div></div>,
    },
    {
        type: "tip",
        title: "ជាទូទៅ",
        content: (
            <div>
                នៅពេលគេដុតកម្តៅទ្រីគ្លីសេរីតជាមួយបាស គេបានគ្លីសេរុលនិងអំបិលនៃអាសុីតខ្លាញ់ ។
                <span className="text-[13px]">
                    <InlineMath math="C_{3}H_{8}OH + 3NaOH \rightarrow C_{3}H_{5}OH + 3Na(C_{15}H_{31}COO)" />
                </span>
                ប្រតិកម្មនេះហៅថា ប្រតិកម្មសាប៊ូកម្ម ។
            </div>
        ),
    },
    {
        type: "definition",
        title: "២.៣ បំលែងខ្លាញ់ក្នុងសារពាង្គាយ",
        content: <div></div>,
    },
    {
        type: "tip",
        title: "ជាទូទៅ",
        content: (
            <div className="flex items-start gap-3 flex-col">
              <p>
                ខ្លាញ់
                និងប្រេងជាអាហារផ្តល់ថាមពលកម្តៅច្រេីនជាងប្រូតេអុីននិងកាបូនអុីដ្រាត ។
                ក្រោមអំពេីរបស់រសលំពែង និងពោះវៀន ខ្លាញ់
                និងប្រេងរងអុីដ្រូលីសក្លាយជាគ្លីសេរ៉ុលនិងអាសុីតខ្លាញ់ដែលអាចស្រូបដោយស្រទាប់ពោះវៀន
                បន្ទាប់មកសំយោគទៅជាទ្រីគ្លីសេរីតជាថ្មីស្តុកទុក ក្នុងកោសិកាខ្លាញ់
                ហេីយបញ្ជូនទៅសរីរាង្គផ្សេងៗដែលវាត្រូវរងអុីដ្រូលីស និងអុកសុីតកម្មទៅជា{" "}
                <span className="text-[13px]">
                  <InlineMath math="CO_{2} " />
                </span>{" "}
                និង{" "}
                <span className="text-[13px]">
                  <InlineMath math="H_{2}O" />
                </span>
                ។ ប្រតិកម្មនេះបញ្ចេញកម្តៅឲសារពាង្គកាយសម្រាប់ទ្រទ្រង់សកម្មភាពជីវិត ។
              </p>
            </div>
        ),
    },
    {
        type: "definition",
        title: "២.៤ សាប៊ូ",
        content: <div></div>,
    },
    {
        type: "tip",
        title: "ជាទូទៅ",
        content: (
            <div>
                <ul className="list-disc pl-5 flex flex-col items-start gap-4">
                  <div>
                    <li>
                      សាប៊ូ ជាល្បាយអំបិលសូដ្យូម
                      ឬប៉ូតាស្យូមនៃអាសុីតកាបុកសុីលិចដែលមានខ្សែកាបូនយ៉ាងវែង(មានកាបូនពី ១២
                      ទៅ​១៨) គ្មានខ្នែង ។
                      អំបិលប៉ូតាស្យូមបង្កេីតបានសាប៊ូទន់ជាងអំបិលសូដ្យូម ។
                    </li>
                  </div>
                  <div></div>
                  <div>
                    <li>
                      អុីដ្រូភីល ឬលីប៉ូផូប គឺជាផ្នែកក្បាលរបស់សាប៊ូ{" "}
                      <span className="text-[13px]">
                        <InlineMath math="(-COO^{\prime})" />
                      </span>{" "}
                      មានលក្ខណះចំណូលទឹក មិនចំណូលខ្លាញ់ និងប្រេងទេ ។
                    </li>
                  </div>
                  <div>
                    <li>
                      អុីដ្រូផូប ឬលីប៉ូភីល គឺជាខ្សែកាបូន ផ្នែកកន្ទុយរបស់សាប៊ូ
                      មានទំនោរចូលចិត្តខ្លាញ់និងប្រេង មិនចំណូលទឹកទេ ។
                    </li>
                  </div>
                  <div>
                    <li>
                      អំពេីរបស់សាប៊ូទៅលេីស្នាមប្រឡាក់: ស្នាមប្រឡាក់លេីសម្លៀកបំពាក់
                      ឬស្បែកគឺជាប្រង ឬខ្លាញ់ និងធូលីផ្សេងៗ ។ ប្រេង
                      ឬខ្លាញ់វាត្រូវបាដកចេញពីស្នាមប្រឡាក់ដោយការលាងជម្រះ ។
                      មុខងារសម្អាតរបស់សាប៊ូទាក់ទងទៅនឹងទម្រង់គីមីរបស់វា ។
                      ពេលសាប៊ូរលាយក្នុងទឹកម៉ូលេគុលរបស់វាបង្កេីតបានជាមីសែល ។
                      ផ្នែកអុីដ្រូផូបរុំព័ទ្ធខ្លាញ់ (ក្អែល)
                      ចំណែកផ្នែកអុីដ្រូភីលបែរចេញក្រៅ ។
                    </li>
                  </div>
                  <div className="flex items-start gap-3 flex-col">
                    <li>
                      គេមិនអាចប្រេីសាប៊ូជាមួយទឹករឹងទេ ព្រោះវាបង្កឲមានកករជាមួយអុីយ៉ុង{" "}
                      <span className="text-[13px]">
                        <InlineMath math="Ca^{2+}" />
                      </span>{" "}
                      និង{" "}
                      <span className="text-[13px]">
                        <InlineMath math="Mg^{2+}" />
                      </span>{" "}
                      មិនបានទៅជម្រះក្អែល ឬខ្លាញ់ និងប្រេងទេ ។
                      ទឹករឹងគឺជាទឹកមានបរិមាណអុីយ៉ុង{" "}
                      <span className="text-[13px]">
                        <InlineMath math="Ca^{2+}" />
                      </span>{" "}
                      និង{" "}
                      <span className="text-[13px]">
                        <InlineMath math="Mg^{2+}" />
                      </span>{" "}
                      ច្រេីន ។
                    </li>
                    <p>សមីការ :</p>
                    <div className="flex flex-col gap-3 text-[13px]">
                      <InlineMath math="2R-COO^{\prime} + Ca^{2+} \rightarrow (R-COO)_{2}Ca" />
                      <InlineMath math="2R-COO^{\prime} + Mg^{2+} \rightarrow (R-COO)_{2}Mg" />
                    </div>
                  </div>
                </ul>
            </div>
        ),
    },
    {
        type: "imageExplanation",
        title: "ទម្រង់ និងរាងរបស់សាប៊ូ",
        src: "/chemistry/pic52.png",
        imageAlt: "ទម្រង់ និងរាងរបស់សាប៊ូ",
        explanation: [
            "អុីដ្រូភីល ឬលីប៉ូផូប គឺជាផ្នែកក្បាលរបស់សាប៊ូ មានលក្ខណះចំណូលទឹក មិនចំណូលខ្លាញ់ និងប្រេងទេ ។",
            "អុីដ្រូផូប ឬលីប៉ូភីល គឺជាខ្សែកាបូន ផ្នែកកន្ទុយរបស់សាប៊ូ មានទំនោរចូលចិត្តខ្លាញ់និងប្រេង មិនចំណូលទឹកទេ ។",
        ],
    },
    {
        type: "definition",
        title: "២.៥ សារធាតុជម្រះក្អែល",
        content: <div></div>,
    },
    {
        type: "tip",
        title: "ជាទូទៅ",
        content: (
            <div className="flex items-start gap-3 flex-col">
              <p>
                មានលក្ខណះដូចសាប៊ូដែរ ប៉ុន្តែវាមានក្បាលជា{" "}
                <span className="text-[13px]">
                  <InlineMath math="-SO_{3}^{\prime}" />
                </span>{" "}
                ។ សារធាតុជម្រះអាចប្រេីក្នុងទឹករឹង
                ដោយវាមិនបង្កេីតកករជាមួយនឹងអុីយ៉ុងកាល់ស្យូម ឬម៉ាញេស្យូម ឬសង្ក័សីទេ ។
              </p>
            </div>
        ),
    },
    {
        type: "definition",
        title: "២.៦ ថ្នាំលាប",
        content: <div></div>,
    },
    {
        type: "tip",
        title: "ជាទូទៅ",
        content: (
            <ul className="list-disc pl-5 flex flex-col items-start gap-4">
              <li>
                សារធាតុភ្ជាប់ ដែលអាចស្អិតភ្ជាប់ទៅនឹងផ្ទៃដែលត្រូវលាប
                បង្ខាំងជាតិពណ៌ឲនៅក្នុងកន្លែងរបស់វា និងជារនាំងការពារសំណេីម ។
              </li>
              <li>
                ជាតិពណ៌ ដែលផ្តល់ពណ៌ឲទៅថ្នាំលាប ជាអ្នកស្រោប និងការពារអនុភាពរបស់ថ្នាំ
                ។
              </li>
              <li>
                ធាតុរំលាយ សម្រាប់ជួយសម្រួលនៅពេលលាបថ្នាំ និងបន្ទាប់មកត្រូវហូតអស់ ។
              </li>
        </ul>
        ),
    },
];

const jsonV2 = serializeTopicContentV3(TOPIC_CONTENT_V3);

// Stage 3a: Deserialized V3 with live React nodes (renderable)
const restoredV3 = deserializeTopicContentV3(jsonV2) as TopicContent_V3[];

// Stage 3b: Deserialized V3 raw node tree (no React elements) for inspection
const restoredV3Tree = deserializeTopicContentV3ToTree(jsonV2) as TopicContent_V3[];

// Helper: visualize type sequence
const originalTypes = TOPIC_CONTENT_V3.map((i) => i.type);


const Ester_fat_oil = () => {
    return <ContentRendererV3 content={TOPIC_CONTENT_V3} />;
};

export default Ester_fat_oil;
