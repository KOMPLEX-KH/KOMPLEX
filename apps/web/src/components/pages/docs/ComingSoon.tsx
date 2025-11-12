import React from "react";
import { BookOpen } from "lucide-react";
import { DefinitionBox } from "./boxes/DefinitionBox";
import { ExerciseBox } from "./boxes/ExerciseBox";
import { TipBox } from "./boxes/TipBox";
import { ExerciseQuestion } from "@core-types/docs/topic";

export default function ComingSoon() {
  // Fake data for background components
  const fakeDefinition = {
    title: "ចំណងជើងមេរៀន",
    content:
      "មេរៀននេះស្តីអំពី [ប្រធានបទមេរៀនខ្លីៗ]។ វាផ្តល់នូវសេចក្តីពន្យល់មូលដ្ឋាន និងព័ត៌មានសំខាន់ៗ ដើម្បីជួយឱ្យអ្នកចាប់ផ្តើមបានយល់។",
  };

  const fakeExercise: ExerciseQuestion[] = [
    {
      id: "fake-question-1",
      question: "តើមេរៀននេះស្តីអំពីអ្វី?",
      options: ["ប្រធានបទ ក", "ប្រធានបទ ខ", "ប្រធានបទ គ", "ប្រធានបទ ឃ"],
      correctAnswer: 1,
    },
  ];

  const fakeTip = {
    title: "ចំណាំសំខាន់ៗ",
    content:
      "សូមចងចាំពិនិត្យមើលមាតិកាសំខាន់ៗ និងឧទាហរណ៍ក្នុងមេរៀននេះ មុននឹងបន្តទៅប្រធានបទបន្ទាប់។",
  };

  return (
    <div className="relative w-full h-full min-h-[700px] overflow-hidden">
      {/* Background Components with Fake Data */}
      <div className="absolute inset-0 opacity-20 pointer-events-none h-full">
        <div className="p-2 space-y-4">
          <DefinitionBox
            title={fakeDefinition.title}
            content={fakeDefinition.content}
          />
          <TipBox title={fakeTip.title} content={fakeTip.content} />
          <ExerciseBox questions={fakeExercise} />
        </div>
      </div>

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/10 backdrop-blur-xs">
        <div className="text-center space-y-4 ">
          {/* Icon */}
          <div className="relative">
            <div className="w-20 h-20 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-gray-800">
              មេរៀននឹងមកដល់ឆាប់ៗ
            </h2>
            <p className="text-gray-600 max-w-md">
              មេរៀននេះកំពុងត្រូវបានរៀបចំ សូមរង់ចាំឆាប់ៗនេះ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
