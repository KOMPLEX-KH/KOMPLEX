import React from "react";
import { BookOpen, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { DefinitionBox } from "./DefinitionBox";
import { TipBox } from "./TipBox";
import { ExerciseBox } from "./ExerciseBox";
import { ExerciseQuestion } from "@core-types/docs/topic";

export function DoTopicExercise({
    title,
    exerciseId,
}: {
    title: string;
    exerciseId: number;
}) {
    const router = useRouter();

    // Fake data for background components
    const fakeDefinition = {
        title: "ចំណងជើងលំហាត់",
        content: "លំហាត់នេះនឹងជួយអ្នកយល់ដឹងប្រធានបទនេះកាន់តែច្បាស់ តាមរយៈការអនុវត្តន៍។",
    };

    const fakeExercise: ExerciseQuestion[] = [
        {
            id: "fake-question-1",
            question: "តើលំហាត់នេះស្តីអំពីអ្វី?",
            options: ["ប្រធានបទ ក", "ប្រធានបទ ខ", "ប្រធានបទ គ", "ប្រធានបទ ឃ"],
            correctAnswer: 1,
        },
    ];

    const fakeTip = {
        title: "ព័ត៌មានសំខាន់",
        content: "សូមអានមេរៀនឱ្យយល់ច្បាស់មុននឹងធ្វើលំហាត់ ដើម្បីទទួលបានលទ្ធផលល្អបំផុត។",
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
                <div className="text-center space-y-6 max-w-md mx-auto p-6">
                    {/* Icon */}
                    <div className="relative">
                        <div className="w-20 h-20 bg-indigo-500  rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-indigo-500/25">
                            <BookOpen className="w-10 h-10 text-white" />
                        </div>
                    </div>

                    {/* Text Content */}
                    <div className="space-y-3">
                        <h2 className="text-2xl font-bold text-gray-800">
                            {title}
                        </h2>
                    </div>

                    {/* Start Button */}
                    <button
                        onClick={() => router.push(`/exercises/${exerciseId}`)}
                        className="group bg-indigo-500  text-white px-8 py-3 rounded-full font-semibold text-lg transition-all duration-300 transform hover:shadow-lg hover:shadow-indigo-500/25 flex items-center gap-3 mx-auto"
                    >
                        <span>ចាប់ផ្តើមធ្វើលំហាត់</span>
                        <ArrowRight className="w-5 h-5 transition-transform duration-300" />
                    </button>

                </div>
            </div>
        </div>
    );
}