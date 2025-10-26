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
        title: "១. លក្ខណៈអាស៊ីត-បាស",
        content: <div className="flex flex-col items-start"></div>,
    },
    {
        type: "definition",
        title: "១.១ អាស៊ីត",
        content: (
            <div className="flex flex-col items-start">
                <p>
                    អាសុីតគឺជាសមាសធាតុទាំងឡាយណា ដែលមានលក្ខណះដូចជា៖ មានរសជាតិ ជូរ កាត់
                    ឬសុីនិងមាន pH តូចជាង 7។
                </p>
            </div>
        ),
    },
    {
        type: "tip",
        title: "ជាទូទៅ",
        content: (
            <p>
                អាសុីតជាអេឡិចត្រូលីត និងអាចប្រែពណ៌អង្គធាតុចង្អុលពណ៌បាន។ អាសុីតមានប្រតិកម្មជាមួយបាសផ្តល់ផលជា
                អំបិលនិងទឹក។
            </p>
        ),
    },
    {
        type: "example",
        question: (
            <div className="flex flex-col items-start gap-3 text-[13px]">
                <InlineMath math="HCl + NaOH \rightarrow NaCl + H_{2}O" />
            </div>
        ),
    },
    {
        type: "definition",
        title: "អុីដ្រូអាសុីត",
        content: (
            <div className="flex flex-col items-start">
                <p>
                    អុីដ្រូអាសុីតគឺជាអាសុីតដែលផ្សំដោយ H និងធាតុមួយផ្សេងទៀតដែលមានកម្រិត អេឡិចត្រូអវិជ្ជមានខ្លាំង។
                </p>
            </div>
        ),
    },
    {
        type: "example",
        question: (
            <div className="flex flex-col items-start gap-3">
                <div className="flex items-center gap-4 flex-wrap">
                    <p>
                        <span className="text-[13px]">
                            <InlineMath math="HF" />
                        </span>{" "}
                        (អាសុីតភ្លុយអរីឌ្រិច)
                    </p>
                    <p>
                        <span className="text-[13px]">
                            <InlineMath math="HCl" />
                        </span>{" "}
                        (អាសុីតក្លរីឌ្រិច)
                    </p>
                    <p>
                        <span className="text-[13px]">
                            <InlineMath math="H_{2}S" />
                        </span>{" "}
                        (អាសុីតស៊ុលភីឌ្រិច)
                    </p>
                </div>
            </div>
        ),
    },
    {
        type: "definition",
        title: "អុកសុីអាសុីត",
        content: (
            <div className="flex flex-col items-start">
                <p>
                    អុកសុីអាសុីតគឺជាអាសុីតដែលមានធាតុផ្សំ អុីដ្រូសែន អុកសុីសែន និងធាតុទី៣ដែល ភាគច្រេីនជាអលោហះ។
                </p>
            </div>
        ),
    },
    {
        type: "example",
        question: (
            <div className="flex flex-col items-start gap-3">
                <div className="flex items-center gap-4 flex-wrap">
                    <p>
                        <span className="text-[13px]">
                            <InlineMath math="HNO_{3}" />
                        </span>{" "}
                        (អាសុីតនីឌ្រិច)
                    </p>
                    <p>
                        <span className="text-[13px]">
                            <InlineMath math="H_{2}SO_{4}" />
                        </span>{" "}
                        (អាសុីតស៊ុលផួរិច)
                    </p>
                </div>
            </div>
        ),
    },
    {
        type: "definition",
        title: "អាសុីតបំបែកជាអុីយ៉ុងអុីដ្រូញូមក្នុងទឹក",
        content: <div className="flex flex-col items-start"></div>,
    },
    {
        type: "tip",
        title: "ជាទូទៅ",
        content: (
            <div>
                <p>នៅពេលអាសុីតប្រតិកម្មជាមួយទឹក ត្រូវពិនិត្យប្រភេទអាសុីតជាមុនសិន</p>
                <ul className="list-disc pl-5">
                    <li>បេីសិនជាអាសុីតខ្លាំង ព្រួញនៃសមីការមានទិសតែមួយ​</li>
                    <li>
                        បេីសិនជាអាសុីតខ្សោយ ព្រួញនៃសមីការត្រូមានទិសពីរ គឺទិសមុនប្រតិកម្មនិងក្រោយប្រតិកម្ម
                    </li>
                </ul>
            </div>
        ),
    },
    {
        type: "example",
        question: (
            <div className="flex flex-col items-start gap-3 text-[13px]">
              <div className="flex items-center gap-4 flex-wrap ">
                <InlineMath math="HNO_{3} (aq) + H_{2}O \rightarrow H_{3}O^{+} (aq) + NO_{3}^{-} (aq)" />
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <InlineMath math="HOCl (aq) + H_{2}O \rightleftharpoons H_{3}O^{+} (aq) + ClO^{-} (aq)" />
              </div>
            </div>
        ),
    },
    {
        type: "example",
        question: (
            <div className="flex flex-col items-start gap-3">
                <p>
                    ក. ចូររកសមីការតាងប្រតិកម្មរវាងអាសុីត{" "}
                    <InlineMath math="H_{2}SO_{4}" /> និង <InlineMath math="H_{3}PO_{4}" /> ជាមួយ{" "}
                    <InlineMath math="Ca(OH)_{2}" />
                </p>
                <p>
                    ខ. គេមានសមីការសមាសធាតុអាសុីតបន្តបន្ទាប់នេះ{" "}
                    <InlineMath math="H_{3}PO_{4} , HClO_{4} , HBr , HI " />
                </p>
                <p>
                    ចូរកំណត់អាសុីតទាំងនេះជាអុីដ្រូអាសុីត និងអុកសុីអាសុីត ព្រមទាំងសរសេរសមីការអាសុីត HBr និង HI
                    បំបែកជាអុីយ៉ុងអុីដ្រូញ៉ូមក្នុងទឹក។
                </p>
            </div>
        ),
        steps: [
          {
            title: "សមីការតាងប្រតិកម្ម",
            content: (
              <>
                <div className="flex flex-col items-start gap-3">
                  <div className="flex flex-col items-start gap-4">
                    <p>ក. សរសេរសមីការតាងប្រតិកម្ម</p>
                    <div className="flex flex-col gap-4 text-[13px]">
                      <InlineMath math="H_{2}SO_{4} + Ca(OH)_{2}  \rightarrow CaSO_{4} + H_{2}O" />
                      <InlineMath math="2H_{3}PO_{4}  + 3Ca(OH)_{2}  \rightarrow Ca_{3}(PO_{4})_{2} + 3H_{2}O" />
                    </div>
                  </div>
                </div>
              </>
            ),
          },
          {
            title: "អុីដ្រូអាសុីតមាន​ HBr និង HI",
            content: (
              <>
                <div className="flex flex-col items-start gap-3">
                  <p>
                    អុកសុីតអាសុីតមាន​{" "}
                    <span className="text-[13px]">
                      <InlineMath math="H_{3}PO_{4}" />
                    </span>
                    និង{" "}
                    <span className="text-[13px]">
                      <InlineMath math="HClO_{4}" />
                    </span>
                  </p>
                  <p>សមីការបំបែកដោយទឹកនៃអាសុីត</p>
                  <div className="flex flex-col items-start gap-3 text-[13px]">
                    <InlineMath math="HBr (g) + H_{2}O (l) \rightarrow Br^{-} (aq) + H_{3}O^{+} (aq)" />
                    <InlineMath math="HI (g) + H_{2}O (l) \rightarrow I^{-} (aq) + H_{3}O^{+} (aq)" />
                  </div>
                </div>
              </>
            ),
          },
        ]
    },
    {
        type: "definition",
        title: "១.២ បាស",
        content: (
            <div className="flex flex-col items-start">
                <p>
                    បាសគឺជាសមាសធាតុទាំងឡាយណា ដែលមានលក្ខណះដូចជា៖ មានរសជាតិល្វីង កាត់
                    ឬសុីនិងមាន pH ធំជាង 7។
                </p>
            </div>
        ),
    },
    {
        type: "tip",
        title: "ជាទូទៅ",
        content: (
            <p>
                បាសជាអេឡិចត្រូលីត និងអាចប្រែពណ៌បានអង្គធាតុចង្អុលពណ៌បាន។ បាសមានប្រតិកម្មជាមួយអាសុីតផ្តល់ផលជា
                អំបិលនិងទឹក។
            </p>
        ),
    },
    {
        type: "example",
        question: (
            <div className="flex flex-col items-start gap-3 text-[13px]">
                <InlineMath math="NaOH(s) \rightarrow Na^{+} (aq) + OH^{-} (aq)" />
                <InlineMath math="NH_{3} (g) + H_{2}O (l) \rightarrow NH_{4}^{+} (aq) + OH^{-} (aq)" />
            </div>
        ),
    },
    {
        type: "example",
        question: (
            <div className="flex flex-col items-start gap-3 text-[13px]">
                <p>
                  ចូរសរសេរសមីការតាងប្រតិកម្មរវាងអាសុីត{" "}
                  <span className="text-[13px]">
                    <InlineMath math="KOH" />
                  </span>
                  និង{" "}
                  <span className="text-[13px]">
                    <InlineMath math="Ca(OH)_{2}" />
                  </span>
                  ជាមួយ{" "}
                  <span className="text-[13px]">
                    <InlineMath math="H_{2}SO_{4}" />
                  </span>
                </p>
            </div>
        ),
        steps:[
          {
            title: "សមីការតាងប្រតិកម្ម",
            content: (
              <>
                <div className="flex flex-col items-start gap-3">
                  <div className="flex flex-col items-start gap-4 text-[13px]">
                    <InlineMath math="2KOH (aq) + H_{2}SO_{4} (aq) \rightarrow K_{2}SO_{4} (aq) + 2H_{2}O (l)" />
                    <InlineMath math="Ca(OH)_{2} (aq) + H_{2}SO_{4} (aq) \rightarrow CaSO_{4} (aq) + 2H_{2}O (l)" />
                  </div>
                </div>
              </>
            ),
          },
        ]
    },
    {
        type: "definition",
        title: "២. អាសុីត-បាសតាមអារ៉េញ៉ូស",
        content: <div className="flex flex-col items-start"></div>,
    },
    {
        type: "tip",
        title: "ជាទូទៅ",
        content: (
            <div className="flex flex-col items-start gap-3">
                <ul className="list-disc pl-5 flex flex-col gap-4">
                  <div className="flex flex-col items-start gap-3">
                    <li>
                      អាសុីត ជាសមាសធាតុគីមីដែលបង្កេីតអុីយ៉ុងអុីដ្រូសែន
                      ក្នុងសូលុយស្យុងទឹក។
                    </li>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span>ឧទាហរណ៍</span>
                      <div className="text-[13px]">
                        <InlineMath math="HCl (aq) \rightarrow H^{+} (aq) + Cl^{-} (aq)" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3">
                    <li>
                      បាស ជាសមាសធាតុគីមីដែឡបង្កេីតអុីយ៉ុងអុីដ្រុកសុីត
                      ក្នុងសូលុយស្យុងក្នុងទឹក។
                    </li>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span>ឧទាហរណ៍</span>
                      <div className="text-[13px]">
                        <InlineMath math="NaOH (aq) \rightarrow Na^{+} (aq) + OH^{-} (aq)" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3">
                    <li>
                      សូលុយស្យុងអាសុីត​ ជាអេឡិចត្រូលីតដែលមានអុីយ៉ុងអុីដ្រូសែន
                      ច្រេីនជាងអុីយ៉ុងអុីដ្រូស៊ីត។
                    </li>
                    <p>
                      ក្នុងសូលុយស្យុងទឹកអុីយ៉ុងអុីដ្រូសែនចងសម្ព័ន្ធជាមួយម៉ូលេគុលទឹកបង្កេីតបានជាអុីយ៉ុង{" "}
                      <span className="text-[13px]">
                        <InlineMath math="H_{3}O^{+}" />
                      </span>
                      ។
                    </p>
                    <div className="text-[13px]">
                      <InlineMath math="H^{+} (aq) + H_{2}O (l) \rightarrow H_{3}O^{+} (aq)" />
                    </div>
                    <p>ដូច្នេះអុីយ៉ុងកម្មរបស់អាសុីតក្នុងទឹកគេអាចសរសេរ :</p>
                    <span>ឧទាហរណ៍</span>
                    <div className="text-[13px] flex flex-col gap-3">
                      <InlineMath math="HCl (g) + H_{2}O (l) \rightarrow H_{3}O^{+} (aq) + Cl^{-} (aq)" />
                      <InlineMath math="HNO_{3} (l) + H_{2}O (l) \rightarrow H_{3}O^{+} (aq) + NO_{3}^{-} (aq)" />
                    </div>
                  </div>
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <li>
                        សូលុយស្យុងបាស ជាអេឡិចត្រូលីតដែលមានអុីយ៉ុងអុីដ្រុកសុីត
                        ច្រេីនជាងអុីយ៉ុង
                      </li>
                      <span className="text-[13px]">
                        <InlineMath math="H_{3}O^{+}" />
                      </span>
                    </div>
                    <span>ឧទាហរណ៍</span>
                    <div className="text-[13px] flex flex-col gap-3">
                      <InlineMath math="NaOH (s) \rightarrow Na^{+} (aq) + OH^{-} (aq)" />
                      <InlineMath math="NH_{3} (g) + H_{2}O (l) \rightarrow NH_{4}^{+} (aq) + OH^{-} (aq)" />
                    </div>
                  </div>
                </ul>
            </div>
        ),
    },
    {
        type: "example",
        question: (
            <div className="flex flex-col items-start gap-3 text-[13px]">
               <div className="flex items-center gap-4 flex-wrap">
                   <p>ចូរជ្រេីសរេីសសមាសធាតុខាងក្រោមនេះ</p>
                   <span className="text-[13px]">
                     <InlineMath math="NH_{3} , H_{2}SO_{4} , HCl , NaOH , HNO_{3}" />
                   </span>
                   <p>ជាអាសុីតនិងបាសអារ៉េញ៉ូស។</p>
              </div>
            </div>
        ),
        steps:[
          {
            title: "កំណត់ប្រភេទសមាសធាតុខាងក្រោម :",
            content: (
              <>
                <div className="flex flex-col items-start gap-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <p>អាសុីតអារ៉េញ៉ូស :</p>
                    <div className=" text-[13px]">
                      <InlineMath math="HCl , H_{2}SO_{4} , HNO_{3}" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <p>បាសអារ៉េញ៉ូស :</p>
                    <span className="text-[13px]">
                      <InlineMath math="NaOH , NH_{3}" />
                    </span>
                  </div>
                </div>
              </>
            ),
          },
        ]
    },
    {
        type: "definition",
        title: "៣. អាសុីត-បាសតាមប្រុងស្ទែត-ឡូរី",
        content: <div className="flex flex-col items-start"></div>,
    },
    {
        type: "tip",
        title: "ជាទូទៅ",
        content: (
            <div className="flex flex-col items-start gap-3">
                <ul className="list-disc pl-5 flex flex-col gap-4">
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <li>អាសុីត ជាប្រភេទគីមីទាំងឡាយណាដែលបោះបង់ប្រូតុង។</li>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span>ឧទាហរណ៍</span>
                      <div className="text-[13px]">
                        <InlineMath math="HCl (g) + NH_{3} (g) \rightarrow NH_{4}^{+} (aq) + Cl^{-} (aq)" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-[13px]">
                        <InlineMath math="HCl" />
                      </span>
                      <p>ជាអាសុីត ព្រោះវាបោះបង់ប្រូតុងអោយ </p>
                      <span className="text-[13px]">
                        <InlineMath math="NH_{3}" />
                      </span>
                    </div>
                  </div>
      
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <li>បាស ជាប្រភេទគីមីទាំងឡាយណាដែលទទួលយកប្រូតុង។</li>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span>ឧទាហរណ៍</span>
                      <div className="sm:text-[13px] text-[12px]">
                        <InlineMath math="NH_{3} (g) + H_{2}O (l) \rightarrow NH_{4}^{+} (aq) + OH^{-} (aq)" />
                      </div>
                    </div>
                    <p>
                      <span className="text-[13px]">
                        <InlineMath math="NH_{3}" />
                      </span>{" "}
                      ជាបាស ព្រោះវាទទួលប្រូតុងពី{" "}
                      <span className="text-[13px]">
                        <InlineMath math="H_{2}O" />
                      </span>
                    </p>
                  </div>
                </ul>
            </div>
        ),
    },
    {
        type: "example",
        question: (
            <div className="flex flex-col items-start gap-3 text-[13px]">
               <div className="flex items-center gap-4 flex-wrap">
                <p>ចូរកំណត់ប្រភេទគីមីទាំងនេះ</p>
                <div className="flex items-center gap-2 flex-wrap text-[13px]">
                  <InlineMath math="NH_{3} , H_{2}SO_{4} , " />
                  <InlineMath math="HNO_{3} , HBr" />
                  <InlineMath math="HCl ," />
                  <InlineMath math="NaOH , " />
                  <InlineMath math="HNO_{3} , HBr" />
                </div>
                <p>ជាអាសុីតឬបាសតាមប្រុងស្ទែត-ឡូរី</p>
              </div>
          </div>
        ),
        steps:[
            {
              title: "កំណត់ប្រភេទសមាសធាតុខាងក្រោម :",
              content: (
                <>
                  <div className="flex flex-col items-start gap-3">
                    <div className="flex items-center gap-2 flex-wrap">
                      <p>អាសុីតប្រុងស្ទែត-ឡូរី :</p>
                      <span className="text-[13px]">
                        <InlineMath math="HCl , H_{2}SO_{4} , HBr , NH_{4}^{+}" />
                      </span>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <p>បាសប្រុងស្ទែត-ឡូរី :</p>
                      <span className="text-[13px]">
                        <InlineMath math="NaOH , NH_{3}" />
                      </span>
                    </div>
                  </div>
                </>
              ),
            },
        ]
    },
    {
        type: "definition",
        title: "៤. អាសុីត-បាសតាមឡឺវីស",
        content: (
            <div className="flex flex-col items-start"></div>
        ),
    },
    {
        type: "tip",
        title: "ជាទូទៅ",
        content: (
            <div className="flex flex-col items-start gap-3">
                <ul className="list-disc pl-5 flex flex-col gap-4">
                    <div className="flex flex-col items-start gap-3">
                        <div className="flex items-center gap-2 flex-wrap">
                            <li>
                                អាសុីត ជាប្រភេទគីមីទាំងឡាយណាដែលទទួលទ្វេតាអេឡិចត្រុង
                                ដេីម្បីបង្កើតសម្ព័ន្ធកូវ៉ាឡង់។
                            </li>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <div className="flex items-center gap-2 flex-wrap">
                            <li>
                                បាស ជាប្រភេទគីមីទាំងឡាយណាដែលអោយទ្វេតាអេឡិចត្រុង
                                ដេីើម្បីបង្កើតសម្ព័ន្ធកូវ៉ាឡង់។
                            </li>
                        </div>
                    </div>
                </ul>
            </div>
        ),
    },
    
    {
        type: "definition",
        title: "៥. ម៉ូណូប្រូទិច និងប៉ូលីប្រូទិចអាសុីត",
        content: (
            <div className="flex flex-col items-start"></div>
        ),
    },
    {
        type: "tip",
        title: "ជាទូទៅ",
        content: (
            <div className="flex flex-col items-start gap-3">
                <ul className="list-disc pl-5 flex flex-col gap-4">
                    <div className="flex flex-col items-start gap-3">
                        <div className="flex items-center gap-2 flex-wrap">
                            <li>
                                ម៉ូណូប្រូទិចអាសុីត ជាអាសុីតដែលអោយប្រូតុងតែមួយក្នុងមួយម៉ូលេគុល។
                            </li>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span>ឧទាហរណ៍</span>
                            <span className="text-[13px]">
                                <InlineMath math="HCl  + H_{2}O  \rightarrow  Cl^{-} + H_{3}O^{+} " />
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <div className="flex items-center gap-2 flex-wrap">
                            <li>
                                ឌីប្រូទិចអាសុីត ជាអាសុីតដែលអោយប្រូតុងពីរនៅក្នុងមួយម៉ូលេគុល។
                            </li>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span>ឧទាហរណ៍</span>
                            <div className="flex-wrap text-[13px]">
                                <InlineMath math="H_{2}SO_{4} (aq) + H_{2}O (l) \rightarrow HSO_{4}^{-} (aq) + H_{3}O^{+} (aq)" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <div className="flex items-center gap-2 flex-wrap">
                            <li>
                                ទ្រីប្រូទិចអាសុីត ជាអាសុីតដែលអោយប្រូតុងបីនៅក្នុងមួយម៉ូលេគុល។
                            </li>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span>ឧទាហរណ៍</span>
                            <InlineMath math="H_{3}PO_{4} (aq) + H_{2}O (l) \rightarrow  H_{2}PO_{4}^{-} (aq) + H_{3}O^{+} (aq)" />
                        </div>
                    </div>
                </ul>
            </div>
        ),
    },
    {
        type: "example",
        question: (
            <div className="flex flex-col items-start gap-3">
                <p>
                    ចូរកំណត់អាសុីតដោយដាក់តាមប្រភេទ ម៉ូណូប្រូទិច ឌីប្រូទិច និងទ្រីប្រូទិច។
                </p>
                <div className="flex items-center gap-2 flex-wrap text-[13px]">
                    <InlineMath math="HCl , HClO_{4} , H_{2}SO_{3} , H_{2}SO_{4}," />
                    <InlineMath math="CH_{3}COOH , HNO_{3}," />
                    <InlineMath math="H_{3}PO_{2} ," />
                    <InlineMath math="H_{3}PO_{4}" />
                </div>
            </div>
        ),
        steps: [
            {
                title: "កំណត់ប្រភេទសមាសធាតុខាងក្រោម :",
                content: (
                    <div className="flex flex-col items-start gap-3">
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>ម៉ូណូប្រូទិច :</p>
                            <span className="text-[13px]">
                                <InlineMath math="HCl , HClO_{4} , HNO_{3}" />
                            </span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>ឌីប្រូទិច :</p>
                            <span className="text-[13px]">
                                <InlineMath math="H_{2}SO_{3} , H_{2}SO_{4}" />
                            </span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>ទ្រីប្រូទិច :</p>
                            <span className="text-[13px]">
                                <InlineMath math="H_{3}PO_{4} , H_{3}PO_{2}" />
                            </span>
                        </div>
                    </div>
                ),
            },
        ],
    },
    {
        type: "definition",
        title: "៦. កម្លាំងអាស៊ីត-បាស",
        content: (
            <div className="flex flex-col items-start"></div>
        ),
    },
    {
        type: "definition",
        title: "ក. កម្លាំងអាស៊ីត",
        content: (
            <div className="flex flex-col items-start"></div>
        ),
    },
    {
        type: "tip",
        title: "ជាទូទៅ",
        content: (
            <div className="flex flex-col items-start gap-3">
                <ul className="list-disc pl-5 flex flex-col gap-4">
                    <div className="flex flex-col items-start gap-3">
                        <div className="flex items-center gap-2 flex-wrap">
                            <li>
                                អាសុីតខ្លាំង ជាអាសុីតដែលបំបែកជាអុីយ៉ុងអុីដ្រូញ៉ូមសព្វក្នុងទឹក។
                            </li>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span>ឧទាហរណ៍</span>
                            <span className="text-[13px]">
                                <InlineMath math="HCl (aq) + H_{2}O (l) \rightarrow  Cl^{-} (aq) + H_{3}O^{+} (aq)" />
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <div className="flex items-center gap-2 flex-wrap">
                            <li>
                                អាសុីតខ្សោយ ជាអាសុីតដែលបំបែកជាអុីយ៉ុងអុីដ្រូញ៉ូមមិនសព្វក្នុងទឹក។
                            </li>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span>ឧទាហរណ៍</span>
                            <span className="text-[13px]">
                                <InlineMath math="HF (aq) + H_{2}O (l) \rightarrow  F^{-} (aq) + H_{3}O^{+} (aq)" />
                            </span>
                        </div>
                    </div>
                </ul>
            </div>
        ),
    },
    {
        type: "definition",
        title: "ខ. កម្លាំងបាស",
        content: (
            <div className="flex flex-col items-start"></div>
        ),
    },
    {
        type: "tip",
        title: "ជាទូទៅ",
        content: (
            <div className="flex flex-col items-start gap-3">
                <ul className="list-disc pl-5 flex flex-col gap-4">
                    <div className="flex flex-col items-start gap-3">
                        <div className="flex items-center gap-2 flex-wrap">
                            <li>
                                បាសខ្លាំង ជាបាសដែលបំបែកជាអុីយ៉ុងអុីដ្រុកសុីត សព្វក្នុងទឹក។
                            </li>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span>ឧទាហរណ៍</span>
                            <span className="text-[13px]">
                                <InlineMath math="KOH (aq) \rightarrow  K^{+} (aq) + OH^{-} (aq)" />
                            </span>
                        </div>
                    </div>
                    <div className="flex flex-col items-start gap-3">
                        <div className="flex items-center gap-2 flex-wrap">
                            <li>
                                បាសខ្សោយ ជាបាសដែលបំបែកជាអុីយ៉ុងអុីដ្រុកសុីត មិនសព្វក្នុងទឹក។
                            </li>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <span>ឧទាហរណ៍</span>
                            <span className="text-[13px]">
                                <InlineMath math="NH_{3} (g) + H_{2}O (l) \rightarrow  NH_{4}^{+} (aq) + OH^{-} (aq)" />
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
            <div className="flex flex-col items-start gap-3">
                <div className="flex items-center gap-2 flex-wrap">
                    <p>ចូរកំណត់ថ្នាក់ប្រភេទគីមីបន្ទាប់នេះ </p>
                    <div className="flex items-center gap-2 flex-wrap text-[13px]">
                        <InlineMath math="HCl , NaOH , " />
                        <InlineMath math="NH_{3} , HNO_{3} ," />
                        <InlineMath math="HNO_{3} ," />
                        <InlineMath math="C_{6}H_{5}NH_{2} ," />
                        <InlineMath math="NaC_{2}H_{5}O_{2} , HClO_{4} ," />
                        <InlineMath math="HC_{2}H_{3}O_{2}" />
                    </div>
                    <p>ជាអាសុីតខ្លាំង អាសុីតខ្សោយ បាសខ្លាំង និងបាសខ្សោយ។</p>
                </div>
            </div>
        ),
        steps: [
            {
                title: "កំណត់ប្រភេទសមាសធាតុខាងក្រោម :",
                content: (
                    <div className="flex flex-col items-start gap-3">
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>អាសុីតខ្លាំង :</p>
                            <span className="text-[13px]">
                                <InlineMath math="HCl , HNO_{3} , HClO_{4}" />
                            </span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>អាសុីតខ្សោយ :</p>
                            <span className="text-[13px]">
                                <InlineMath math="HC_{2}H_{3}O_{2}" />
                            </span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>បាសខ្លាំង :</p>
                            <span className="text-[13px]">
                                <InlineMath math="NaOH" />
                            </span>
                        </div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <p>បាសខ្សោយ :</p>
                            <span className="text-[13px]">
                                <InlineMath math="NH_{3} , C_{6}H_{5}NH_{2}" />
                            </span>
                        </div>
                    </div>
                ),
            },
        ],
    },
];

// Stage 2: Serialized JSON
const jsonV2 = serializeTopicContentV3(TOPIC_CONTENT_V3);

// Stage 3a: Deserialized V3 with live React nodes (renderable)
const restoredV3 = deserializeTopicContentV3(jsonV2) as TopicContent_V3[];

// Stage 3b: Deserialized V3 raw node tree (no React elements) for inspection
const restoredV3Tree = deserializeTopicContentV3ToTree(jsonV2) as TopicContent_V3[];

// Helper: visualize type sequence
const originalTypes = TOPIC_CONTENT_V3.map((i) => i.type);


const Acid_base_theory = () => {
  return (
    <div>
        <ContentRendererV3 content={TOPIC_CONTENT_V3} />
    </div>
  );
};

export default Acid_base_theory;
