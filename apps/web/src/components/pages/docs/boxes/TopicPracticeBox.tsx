'use client'

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { PracticeExercise } from '@/types/docs/topic';



interface TopicPracticeBoxProps {
    exercises: PracticeExercise[];
}

export default function TopicPracticeBox({ exercises }: TopicPracticeBoxProps) {
    const [expandedQuestions, setExpandedQuestions] = useState<Record<string, boolean>>({});

    const toggleQuestion = (questionId: string) => {
        setExpandedQuestions(prev => ({
            ...prev,
            [questionId]: !prev[questionId]
        }));
    };

    return (
        <div className="space-y-8">

            {/* Exercises */}
            {exercises.map((exercise) => (
                <div
                    key={exercise.id}
                    className="bg-white rounded-3xl border border-indigo-200 shadow-sm overflow-hidden"
                >
                    {/* Exercise Header */}
                    <div className="bg-indigo-50 px-6 py-4">
                        <div className="flex-1">
                            <h3 className="text-lg font-semibold text-indigo-900">{exercise.description}</h3>
                        </div>
                    </div>

                    {/* Exercise Content */}
                    <div className="p-4 space-y-4">
                        <div className="space-y-4">
                            {exercise.problems.map((problem, index) => {
                                const questionId = `${exercise.id}-${index}`;
                                return (
                                    <div
                                        key={index}
                                        className="bg-indigo-50/50 rounded-3xl border border-indigo-100 overflow-hidden"
                                    >
                                        <div className="px-2 py-1">
                                            <div
                                                className="flex items-center gap-3 mb-3 cursor-pointer  transition-colors p-2 rounded-3xl"
                                                onClick={() => toggleQuestion(questionId)}
                                            >
                                                <span className="text-indigo-600 text-sm font-medium bg-white rounded-full mt-1 w-6 h-6 flex items-center justify-center flex-shrink-0">
                                                    {index + 1}
                                                </span>
                                                <div className="text-gray-800 font-medium flex w-full justify-start" >
                                                    {problem}
                                                </div>
                                                <div className="text-indigo-600 mt-2 ">
                                                    {expandedQuestions[questionId] ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                                                </div>
                                            </div>

                                            {/* Answer Section */}
                                            {expandedQuestions[questionId] && exercise.answers && exercise.answers[index] && (
                                                <div className=" mt-3 p-3 border-t border-indigo-200">
                                                    <div className="text-md text-indigo-600 font-bold mb-2">ចម្លើយ:</div>
                                                    <div className="text-gray-700 bg-white rounded-3xl p-4 border border-indigo-100">
                                                        {exercise.answers[index]}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
