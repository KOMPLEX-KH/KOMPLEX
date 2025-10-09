"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  ImageIcon,
  ChartBar,
  CheckCircle,
  FileText,
  MessageSquare,
  Bot,
  Video,
} from "lucide-react";
import {ThreeDBox} from "@/components/pages/docs/boxes/3DBox";
import { GraphBox } from "@/components/pages/docs/boxes/GraphBox";
import { Stars } from "@react-three/drei";
import { ExerciseBox } from "@/components/pages/docs/boxes/ExerciseBox";
import { InlineMath } from "react-katex";
import Link from "next/link";

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
            មុខងារមេរៀន
          </h2>
        </motion.div>

        {/* Lesson Navigation Overview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <BookOpen size={24} className="text-indigo-600 mt-2" />
              មេរៀន
            </h3>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3 text-gray-600"
            >
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                រុករកមេរៀនតាមថ្នាក់រៀន និងមុខវិជ្ជា
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                រូបភាពច្បាស់លាស់
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                ការណែនាំជាក់លាក់សម្រាប់គ្រប់គោលគំនិត
              </motion.li>
            </motion.ul>
          </motion.div>
          <Link href="/docs">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-3xl p-2 shadow-lg"
            >
              <img
                src="/landing/lesson.png"
                alt="lesson"
                className="w-full h-full object-cover rounded-3xl"
              />
            </motion.div>
          </Link>
        </motion.div>

        {/* 3D Model Viewing */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 "
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:order-1 order-2 aspect-video"
          >
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
                // { content: "រូបភាព ខួរក្បាល", position: [0, 1, -2], fontSize: 0.8, color: "black" },
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
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:order-2 order-1 space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <ImageIcon size={24} className="text-indigo-600 mt-2" />
              រូបភាព 3D
            </h3>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3 text-gray-600"
            >
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                បង្វិលរូបភាព 360° ដើម្បីមើលគ្រប់មុំ
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                ពង្រីក និងធ្វើឱ្យតូចដើម្បីមើលលម្អិត
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                អក្សរ 3D ដើម្បីពន្យល់បន្ថែម
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* Graph Viewing */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <ChartBar size={24} className="text-indigo-600 mt-2" />
              ក្រាប
            </h3>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3 text-gray-600"
            >
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                មើលក្រាបគណិតវិទ្យាស្មុគស្មាញ
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                បង្ហាញអនុគមន៍ជាច្រើនក្នុងពេលតែមួយ
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                ពិសោធន៍ជាមួយប៉ារ៉ាម៉ែត្រផ្សេងៗ
              </motion.li>
            </motion.ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <GraphBox
              expressions={[
                { id: "1", latex: "y = x^2", color: "#3B82F6" },
                { id: "2", latex: "y = \\sin(x)", color: "#EF4444" },
                { id: "3", latex: "y = \\frac{1}{x}", color: "#10B981" },
              ]}
            />
          </motion.div>
        </motion.div>

        {/* Exercise System */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:order-1 order-2"
          >
            <ExerciseBox questions={EXERCISE_QUESTIONS} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:order-2 order-1 space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <BookOpen size={24} className="text-indigo-600 mt-2" />
              លំហាត់អនុវត្តន៍ក្នុងមេរៀន
            </h3>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3 text-gray-600"
            >
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                សាលល្បងសម្ថភាព
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                ទទួលបានចម្លើយភ្លាមៗ
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                លំហាត់មានសម្បូរបែប
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="  space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <BookOpen size={24} className="text-indigo-600 mt-2" />
              លំហាត់អនុវត្តន៍
            </h3>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3 text-gray-600"
            >
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                សាលល្បងសម្ថភាព
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                ទទួលបានរបាយការណ៏
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                ធ្វើតេស្តបានច្រើនដង
              </motion.li>
            </motion.ul>
          </motion.div>
          <Link href={"/exercises"}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-3xl p-2 shadow-lg"
            >
              <div className="w-full h-80 bg-gray-100 rounded-3xl flex items-center justify-center">
                <img
                  src="/landing/exercises.png"
                  alt="exercises"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* AI Assistant */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <Link href={"/ai"}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:order-2 order-2 bg-white rounded-3xl p-2 shadow-lg"
            >
              <div className="w-full h-80 bg-gray-100 rounded-3xl flex items-center justify-center">
                <img
                  src="/landing/dara.png"
                  alt="dara"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </motion.div>
          </Link>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:order-1 order-2 space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <Bot size={24} className="text-indigo-600 mt-2" />
              <div className="flex items-center">
                <span className="text-indigo-500">តា</span>{" "}
                <span className="text-black mr-2">រា</span> AI
              </div>
            </h3>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3 text-gray-600"
            >
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                ដោះស្រាយបញ្ហាជាមួយនឹងការណែនាំជាក់លាក់
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                ពន្យល់គោលគំនិតស្មុគស្មាញឱ្យកាន់តែងាយយល់
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                ផ្តល់ឧទាហរណ៍ និងលំហាត់បន្ថែម
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-15"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            មុខងារចែករំលែក
          </h2>
        </motion.div>

        {/* Blog Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:order-1 order-2 space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <FileText size={24} className="text-indigo-600 mt-2" />
              អត្ថបទ
            </h3>
            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3 text-gray-600"
            >
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                បង្កើតអត្ថបទចែករំលែកបទពិសោធន៍
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                ចែករំលែកគន្លឹះ និងវិធីសាស្ត្ររៀន
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                អានបទពិសោធន៍ពីសិស្សដទៃទៀត
              </motion.li>
            </motion.ul>
          </motion.div>
          <Link href={"/blogs"}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:order-1 order-2 bg-white rounded-3xl p-2 shadow-lg"
            >
              <div className="w-full h-80 bg-gray-100 rounded-3xl flex items-center justify-center">
                <img
                  src="/landing/articles.png"
                  alt="blog"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Forum Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <Link href={"/forums"}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:order-2 order-1 bg-white rounded-3xl p-2 shadow-lg"
            >
              <div className="w-full h-80 bg-gray-100 rounded-3xl flex items-center justify-center">
                <img
                  src="/landing/forums.png"
                  alt="forum"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </motion.div>
          </Link>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:order-2 order-1 space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <MessageSquare size={24} className="text-indigo-600 mt-2" />
              ការពិភាក្សា
            </h3>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3 text-gray-600"
            >
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                ចូលរួមក្នុងការពិភាក្សាជាមួយសិស្សដទៃទៀត
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                សួរសំណួរ និងរកដំណោះស្រាយ
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                ចែករំលែកបទពិសោធន៍
              </motion.li>
            </motion.ul>
          </motion.div>
        </motion.div>

        {/* Videos Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 flex items-center gap-2">
              <Video size={24} className="text-indigo-600 " />
              វីដេអូ
            </h3>

            <motion.ul
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-3 text-gray-600"
            >
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                វីដេអូសិក្សាដោយអ្នកជំនាញ និងសិស្សដទៃទៀត
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                មានលំហាត់អនុវត្តន៍ភ្ជាប់នឹងវីដេអូ
              </motion.li>
              <motion.li
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-center gap-3"
              >
                <CheckCircle className="w-5 h-5 text-indigo-500" />
                ផ្ដល់មតិ និងពិភាក្សាទាក់ទងនឹងវីដេអូ
              </motion.li>
            </motion.ul>
          </motion.div>
          <Link href={"/videos"}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="bg-white rounded-3xl p-2 shadow-lg"
            >
              <div className="w-full h-80 bg-gray-100 rounded-3xl flex items-center justify-center">
                <img
                  src="/landing/videos.png"
                  alt="videos"
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
