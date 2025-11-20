"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  ImageIcon,
  ChartBar,
  MessageSquare,
  Bot,
  Video,
} from "lucide-react";
import { ThreeDBox } from "@/components/pages/docs/boxes/3DBox";
import { GraphBox } from "@/components/pages/docs/boxes/GraphBox";
import { Stars } from "@react-three/drei";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
import { InlineMath } from "react-katex";
import FeatureSection from "./FeatureSection";

const EXERCISE_QUESTIONS = [
  {
    id: "1",
    question: (
      <div>
        គណនាលីមីតនៃអនុគមន៍ <InlineMath math="f(x) = \frac{x^2 - 4}{x - 2}" />{" "}
        នៅពេល x ខិតទៅ 2
      </div>
    ),
    options: [
      <InlineMath key={1} math="\lim_{x \to 2} f(x) = 0" />,
      <InlineMath key={2} math="\lim_{x \to 2} f(x) = 4" />,
      <InlineMath key={3} math="\lim_{x \to 2} f(x) = 2" />,
      <InlineMath key={4} math="\lim_{x \to 2} f(x) = \infty" />,
    ],
    correctAnswer: 1,
  },
  {
    id: "2",
    question: (
      <div>
        គណនាអាំងតេក្រាល <InlineMath math="\int_0^1 x^2 dx" />
      </div>
    ),
    options: [
      <InlineMath key={1} math="\frac{1}{2}" />,
      <InlineMath key={2} math="\frac{1}{3}" />,
      <InlineMath key={3} math="\frac{1}{4}" />,
      <InlineMath key={4} math="\frac{1}{6}" />,
    ],
    correctAnswer: 1,
  },
  {
    id: "3",
    question: (
      <div>
        គណនាដេរីវេនៃអនុគមន៍ <InlineMath math="f(x) = \sin(x) \cos(x)" />
      </div>
    ),
    options: [
      <InlineMath key={1} math="f'(x) = \cos^2(x) - \sin^2(x)" />,
      <InlineMath key={2} math="f'(x) = 2\sin(x)\cos(x)" />,
      <InlineMath key={3} math="f'(x) = \sin^2(x) - \cos^2(x)" />,
      <InlineMath key={4} math="f'(x) = -2\sin(x)\cos(x)" />,
    ],
    correctAnswer: 0,
  },
  {
    id: "4",
    question: (
      <div>
        គណនាអាំងតេក្រាល <InlineMath math="\int e^x \sin(x) dx" />
      </div>
    ),
    options: [
      <InlineMath key={1} math="\frac{e^x}{2}(\sin(x) + \cos(x)) + C" />,
      <InlineMath key={2} math="\frac{e^x}{2}(\sin(x) - \cos(x)) + C" />,
      <InlineMath key={3} math="e^x(\sin(x) - \cos(x)) + C" />,
      <InlineMath key={4} math="e^x(\sin(x) + \cos(x)) + C" />,
    ],
    correctAnswer: 1,
  },
];

export default function AboutFeatures() {
  const features = [
    {
      media: (
        <div className="bg-white rounded-3xl p-2 shadow-lg">
          <img
            src="/landing/lesson.png"
            alt="lesson"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      ),
      title: "មេរៀន",
      icon: BookOpen,
      listItems: [
        "រុករកមេរៀនតាមថ្នាក់រៀន និងមុខវិជ្ជា",
        "រូបភាពច្បាស់លាស់",
        "ការណែនាំជាក់លាក់សម្រាប់គ្រប់គោលគំនិត",
      ],
      isMediaFirst: false,
      mediaLink: "/docs",
    },
    {
      media: (
        <div className="w-full">
          <ThreeDBox
            src="/adult_brain.glb"
            scale={20}
            target={[0, 0, 0]}
            canvasBackgroundColor="#A3A3C4"
            title="រូបភាព 3D"
            height={500}
            canvasBackground={
              <Stars radius={100} depth={50} count={5000} factor={4} fade />
            }
            threeDText={[
              {
                content: "--- ខួរធំ",
                position: [0.6, 0.5, 0.2],
                fontSize: 0.2,
                color: "black",
              },
              {
                content: "ខួរតូច -----",
                position: [-0.45, -0.1, -0.25],
                fontSize: 0.2,
                color: "black",
              },
              {
                content: "--- ខួរកាញ់ចឹងក",
                position: [0.7, -0.5, -0.13],
                fontSize: 0.2,
                color: "black",
              },
            ]}
          />
        </div>
      ),
      title: "រូបភាព 3D",
      icon: ImageIcon,
      listItems: [
        "បង្វិលរូបភាព 360° ដើម្បីមើលគ្រប់មុំ",
        "ពង្រីក និងធ្វើឱ្យតូចដើម្បីមើលលម្អិត",
        "អក្សរ 3D ដើម្បីពន្យល់បន្ថែម",
      ],
      isMediaFirst: true,
    },
    {
      media: (
        <GraphBox
          expressions={[
            { id: "1", latex: "y = x^2", color: "#3B82F6" },
            { id: "2", latex: "y = \\sin(x)", color: "#EF4444" },
            { id: "3", latex: "y = \\frac{1}{x}", color: "#10B981" },
          ]}
        />
      ),
      title: "ក្រាប",
      icon: ChartBar,
      listItems: [
        "មើលក្រាបគណិតវិទ្យាស្មុគស្មាញ",
        "បង្ហាញអនុគមន៍ជាច្រើនក្នុងពេលតែមួយ",
        "ពិសោធន៍ជាមួយប៉ារ៉ាម៉ែត្រផ្សេងៗ",
      ],
      isMediaFirst: false,
    },
    {
      media: <ExerciseBox questions={EXERCISE_QUESTIONS} />,
      title: "លំហាត់អនុវត្តន៍ក្នុងមេរៀន",
      icon: BookOpen,
      listItems: [
        "សាលល្បងសម្ថភាព",
        "ទទួលបានចម្លើយភ្លាមៗ",
        "លំហាត់មានសម្បូរបែប",
      ],
      isMediaFirst: true,
      mediaClassName: "",
    },
    // {
    //   media: (
    //     <div className="bg-white rounded-3xl p-2 shadow-lg opacity-60">
    //       <div className="w-full h-80 bg-gray-100 rounded-3xl flex items-center justify-center">
    //         <img
    //           src="/landing/exercises.png"
    //           alt="exercises"
    //           className="w-full h-full object-cover rounded-3xl"
    //         />
    //       </div>
    //     </div>
    //   ),
    //   title: "លំហាត់អនុវត្តន៍រាល់ជំពូក",
    //   icon: BookOpen,
    //   listItems: [
    //     "សាលល្បងសម្ថភាព",
    //     "ទទួលបានរបាយការណ៏",
    //     "ធ្វើតេស្តបានច្រើនដង",
    //   ],
    //   isMediaFirst: false,
    // },
    {
      media: (
        <div className="bg-white rounded-3xl p-2 shadow-lg">
          <div className="w-full h-80 bg-gray-100 rounded-3xl flex items-center justify-center">
            <img
              src="/landing/dara.png"
              alt="dara"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      ),
      title: (
        <div className="flex items-center">
          <span className="text-indigo-500">តា</span>{" "}
          <span className="text-black mr-2">រា</span> AI
        </div>
      ),
      icon: Bot,
      listItems: [
        "ដោះស្រាយបញ្ហាជាមួយនឹងការណែនាំជាក់លាក់",
        "ពន្យល់គោលគំនិតស្មុគស្មាញឱ្យកាន់តែងាយយល់",
        "ផ្តល់ឧទាហរណ៍ និងលំហាត់បន្ថែម",
      ],
      isMediaFirst: false,
      mediaLink: "/ai",
    },
    {
      media: (
        <div className="bg-white rounded-3xl p-2 shadow-lg">
          <div className="w-full h-80 bg-gray-100 rounded-3xl flex items-center justify-center">
            <img
              src="/landing/forums.png"
              alt="forum"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      ),
      title: "ការពិភាក្សា",
      icon: MessageSquare,
      listItems: [
        "ចូលរួមក្នុងការពិភាក្សាជាមួយសិស្សដទៃទៀត",
        "សួរសំណួរ និងរកដំណោះស្រាយ",
        "ចែករំលែកបទពិសោធន៍",
      ],
      isMediaFirst: true,
      mediaLink: "/forums",
    },
    {
      media: (
        <div className="bg-white rounded-3xl p-2 shadow-lg">
          <div className="w-full h-80 bg-gray-100 rounded-3xl flex items-center justify-center">
            <img
              src="/landing/videos.png"
              alt="videos"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
        </div>
      ),
      title: "វីដេអូ",
      icon: Video,
      listItems: [
        "វីដេអូសិក្សាដោយអ្នកជំនាញ និងសិស្សដទៃទៀត",
        "មានលំហាត់អនុវត្តន៍ភ្ជាប់នឹងវីដេអូ",
        "ផ្ដល់មតិ និងពិភាក្សាទាក់ទងនឹងវីដេអូ",
      ],
      isMediaFirst: false,
      mediaLink: "/videos",
    },
  ];
  return (
    <section className="py-20 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-15"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            អំពីមុខងារ
          </h2>
        </motion.div>

        {features.map((feature, index) => (
          <FeatureSection
            key={index}
            media={feature.media}
            title={feature.title}
            icon={feature.icon}
            listItems={feature.listItems}
            isMediaFirst={feature.isMediaFirst}
            mediaLink={feature.mediaLink}
            mediaClassName={feature.mediaClassName}
          />
        ))}
      </div>
    </section>
  );
}
