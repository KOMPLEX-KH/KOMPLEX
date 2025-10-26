"use client";

import React from "react";
import { BlockMath, InlineMath } from "react-katex";
import "katex/dist/katex.min.css";
import { TopicContent_V3 } from "@/types/docs/topic";
import ContentRendererV3 from "@/components/pages/docs/utils/ContentRendererV2";
import { serializeTopicContentV3 } from "@/components/pages/docs/utils/ContentSerializerV2";

const content: TopicContent_V3[] = [
  {
    type: "definition",
    title: "គោលការណ៍ផលបូក",
    content: (
      <div className="flex flex-col items-start">
        <p>គោលការណ៍ផលបូកនិយាយអំពីការបូកចំនួននៃករណីផ្សេងៗគ្នា។</p>
      </div>
    ),
  },
  {
    type: "tip",
    title: "ជាទូទៅ",
    content: (
      <div className="flex flex-col">
        <p>
          ចំពោះព្រឹត្តិការណ៍ <InlineMath math={"E_1, E_2,...,E_k"} /> គ្មាន
         ធាតុដូចគ្នា នោះចំនួនរបៀបដែលកើតឡើងនៃ K កំណត់ដោយ:
        </p>
        <BlockMath math={"N = n(E_1) + n(E_2) + ... + n(E_k)"} />
      </div>
    ),
  },
  {
    type: "example",
    question: [
      <div className="flex flex-col gap-3" key="ex1-q1">
        <p>
          គេបោះគ្រាប់ឡុកឡាក់មួយគ្រាប់ចំនួន២ដង។ រកចំនួនលទ្ធផលដែលអាចកើតឡើងបានបើ:
        </p>
        <p>ក. គ្រាប់ឡុកឡាក់ចេញមានផលបូកស្មើ ៣ ឬ ៤</p>
        <p>ខ. គ្រាប់ឡុកឡាក់ចេញមានផលបូកស្មើធំជាង ៩</p>
      </div>,
    ],
    steps: [
      {
        title: "រកចំនួនលទ្ធផលដែលកើតឡើង",
        content: <p>ដោយគ្រាប់ឡុកឡាក់មានមុខ ៦ ចុះលេខពី ១ ដល់ ៦ ហើយគេបោះ ២ ដងជាគូមានលំដាប់។</p>,
      },
      {
        title: "ក. គ្រាប់ឡុកឡាក់ចេញមានផលបូកស្មេីរ ៣ឬ៤",
        content: (
          <div className="flex flex-col gap-2">
            <div className="flex flex-col items-start gap-3">
              <p>តាង:</p>
              <div className="flex flex-col items-center gap-3">
                <p>A ជាព្រឹត្តិការណ៍ដែលមានផលបូកស្មេីរ ៣</p>
                <p>B ជាព្រឹត្តិការណ៍ដែលមានផលបូកស្មេីរ ៤</p>
              </div>
            </div>
            <div className="flex  gap-3 flex-col ">
              <p>គេបាន</p>
              <div className="flex flex-col  items-start">
                <div className="flex sm:flex-row flex-col gap-3 items-start">
                  <BlockMath math={"A= {(1,2) , (2,1)}"} />
                  <BlockMath math={"\\Rightarrow n(A)=2"} />
                </div>
                <div className="flex flex-wrap gap-3 items-center">
                  <BlockMath math={"B= {(3,1) , (1,3), (2,2)}"} />
                  <BlockMath math={"\\Rightarrow n(B)=3"} />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 flex-wrap w-full">
              <p>តាមគោលការណ៍ផលបូក:</p>
              <div className="flex flex-col items-start">
                <BlockMath math={"n(A) + n(B) = 2 + 3 = 5"} />
              </div>
            </div>

            <div className="flex items-center gap-3 flex-wrap w-full">
              <p>ដូចនេះ</p>
              <BlockMath math={"N_1 = 5"} />
              <p>របៀប​។</p>
            </div>
          </div>
        ),
      },
      {
        title: "ខ. គ្រាប់ឡុកឡាក់ចេញមានផលបូកស្មេីរ ធំជាង៩",
        content: (
          <div className="flex flex-col">
            <div className="flex flex-col items-start">
              <p className="mt-3">តាង:</p>
              <div className="flex flex-col items-center">
                <div className="flex items-center flex-wrap">
                  <BlockMath math={"E_1"} />
                  <p>ជាព្រឹត្តិការណ៍ដែលចេញផលបូក</p>
                  <p>ស្មេីរ ១០</p>
                </div>
                <div className="flex items-center flex-wrap">
                  <BlockMath math={"E_2"} />
                  <p>ជាព្រឹត្តិការណ៍ដែលចេញផលបូក</p>
                  <p>ស្មេីរ ១១</p>
                </div>
                <div className="flex items-center flex-wrap">
                  <BlockMath math={"E_3"} />
                  <p>ជាព្រឹត្តិការណ៍ដែលចេញផលបូក</p>
                  <p>ស្មេីរ ១២</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <p>គេបាន</p>
              <div className="flex flex-col items-start">
                <div className="flex gap-1 sm:flex-row flex-col items-start">
                  <BlockMath math={"E_1 = {(4,6) , (6,4), (5,5)}"} />
                  <BlockMath math={"\\Rightarrow n(E_1)=3"} />
                </div>
                <div className="flex gap-1 flex-wrap items-center">
                  <BlockMath math={"E_2 = {(5,6) , (6,5)}"} />
                  <BlockMath math={"\\Rightarrow n(E_2)=2"} />
                </div>
                <div className="flex gap-1 flex-wrap items-center">
                  <BlockMath math={"E_3 = {(6,6)}"} />
                  <BlockMath math={"\\Rightarrow n(E_3)=1"} />
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center flex-wrap w-full">
              <p>តាមគោលការណ៍ផលបូក:</p>
              <div className="flex items-start flex-wrap">
                <BlockMath math={"n(E_1) + n(E_2) + n(E_3)="} />
                <BlockMath math={"3 + 2 + 1 = 6"} />
              </div>
            </div>
            <div className="flex items-center gap-3 flex-wrap w-full">
              <p>ដូចនេះ</p>
              <BlockMath math={"N_2 = 6"} />
              <p>របៀប​។</p>
            </div>
          </div>
        ),
      },
    ],
    answer: (
      <div className="flex flex-col gap-2 justify-center items-center">
        <p>N_1 = 5 របៀប</p>
        <p>N_2 = 6 របៀប</p>
      </div>
    ),
  },
  {
    type: "exercise",
    questions: [
      {
        id: "q1",
        question: (
          <p>គេបោះគ្រាប់ឡុកឡាក់មួយគ្រាប់ចំនួន២ដង។ រកចំនួនលទ្ធផលដែលមានផលបូកស្មើ ៥ ឬ ៦។</p>
        ),
        options: [
          <p key="q1-o1">4 របៀប</p>,
          <p key="q1-o2">5 របៀប</p>,
          <p key="q1-o3">6 របៀប</p>,
          <p key="q1-o4">7 របៀប</p>,
        ],
        correctAnswer: 1,
      },
      {
        id: "q2",
        question: (
          <p>គេចង់បោះកាសែត ៣ ប្រភេទ។ តើចំនួនរបៀបជ្រើសរើសតែមួយចំនួនសម្រាប់សៀវភៅសៀរ៍ប៉ុន្មាន?</p>
        ),
        options: [
          <p key="q2-o1">3 របៀប</p>,
          <p key="q2-o2">6 របៀប</p>,
          <p key="q2-o3">9 របៀប</p>,
          <p key="q2-o4">12 របៀប</p>,
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    type: "definition",
    title: "គោលការណ៍ផលគុណ",
    content: (
      <p>គោលការណ៍ផលគុណនិយាយអំពីការគុណចំនួននៃករណីនីមួយៗរៀងគ្នា។</p>
    ),
  },
  {
    type: "tip",
    title: "ជាទូទៅ",
    content: (
      <div>
        <p>
          ចំពោះព្រឹត្តិការណ៍ <InlineMath math={"E_1, E_2,...,E_k"} /> មានលទ្ធផលរៀងគ្នា
          នោះចំនួនរបៀបដែលកើតឡើងនៃ K កំណត់ដោយ:
        </p>
        <BlockMath math={"N = n(E_1) \\times n(E_2) \\times ... \\times n(E_k)"} />
      </div>
    ),
  },
  {
    type: "example",
    question: [
      <p key="ex2-q1">
        គេចង់បង្កើតលេខសម្ងាត់លេខ៤ខ្ទង់ខុសៗគ្នាដោយប្រើលេខពី ០ ដល់ ៩។ តើគេអាចបង្កើតលេខសម្ងាត់នេះបានប៉ុន្មានរបៀប?
      </p>,
    ],
    steps: [
      {
        title: "រកចំនួនរបៀបនៃលេខសម្ងាត់",
        content: (
          <div>
            <div className="flex flex-col gap-3">
              <p>ដោយគេប្រេីលេខពី០ដល់៩នោះគេបាន:</p>
              <div className="flex flex-col">
                <div>
                  <p>ខ្ទង់ទី ១​ មាន ៩ របៀប</p>
                  <p>ខ្ទង់ទី ២​ មាន ៩ របៀប</p>
                  <p>ខ្ទង់ទី ៣​ មាន ៨ របៀប</p>
                  <p>ខ្ទង់ទី ៤​ មាន ៧ របៀប</p>
                </div>
              </div>
              <div className="flex items-center gap-1 flex-wrap">
                <p>តាមគោលការណ៍ផលគុណគេបាន:</p>
                <BlockMath
                  math={"N = 9 \\times 9 \\times 8 \\times 7 = 4536"}
                />
              </div>
            </div>
          </div>
        ),
      },
    ],
    answer: 
    <div>
        <div className="flex items-center gap-3 flex-col">
          <div className="flex items-center gap-3 flex-wrap">
            <BlockMath math={" N = 4536"} />
            <p>របៀប​។</p>
          </div>
        </div>
      </div>,
  },
  {
    type: "exercise",
    questions: [
      {
        id: "ex2-q1",
        question: (
          <p>
            អ្នកមានខ្សែពណ៌ ៤ ប្រភេទ និងប៊ូតុង ៣ ប្រភេទ។ តើចំនួនរបៀបកន្លែងសម្រាប់ជ្រើសរើសខ្សែពណ៌ និងប៊ូតុងផ្សេងគ្នាប៉ុន្មាន?
          </p>
        ),
        options: [
          <p key="ex2-q1-o1">7 របៀប</p>,
          <p key="ex2-q1-o2">12 របៀប</p>,
          <p key="ex2-q1-o3">24 របៀប</p>,
          <p key="ex2-q1-o4">16 របៀប</p>,
        ],
        correctAnswer: 2,
      },
      {
        id: "ex2-q2",
        question: (
          <p>
            បើមានប៊ូតុង ៣ ចំនួន សម្រាប់ជ្រើសរើសកូដ តើចំនួនកូដដែលអាចបង្កើតបានប៉ុន្មាន ប្រសិនបើគេអាចជ្រើសរើសប៊ូតុងមួយចំនួនជាមួយកំណត់លំដាប់?
          </p>
        ),
        options: [
          <p key="ex2-q2-o1">6 របៀប</p>,
          <p key="ex2-q2-o2">9 របៀប</p>,
          <p key="ex2-q2-o3">3 របៀប</p>,
          <p key="ex2-q2-o4">27 របៀប</p>,
        ],
        correctAnswer: 0,
      },
    ],
  },
];

const jsonV2 = serializeTopicContentV3(content);

const CountingPrinciple = () => <ContentRendererV3 content={content} />;

export default CountingPrinciple;
