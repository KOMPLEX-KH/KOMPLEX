'use client';

import React from 'react';
import { BookOpen, Clock, Target, User } from 'lucide-react';
import MarkDownRenderer from '@/components/helper/MarkDownRenderer';
import type { ExerciseWithQuestions } from '@/types/content/exercises';

interface ExerciseDescriptionProps {
    exercise: ExerciseWithQuestions;
    onStartExercise?: () => void;
    showStartButton?: boolean;
    startButtonText?: string;
    isStarting?: boolean;
}

export default function ExerciseDescription({
    exercise,
    onStartExercise,
    showStartButton = true,
    startButtonText = 'ចាប់ផ្តើមលំហាត់',
    isStarting = false
}: ExerciseDescriptionProps) {
    return (
        <div className="bg-white rounded-3xl shadow-sm">
            {/* Header */}
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center gap-3">
                    <BookOpen className="w-6 h-6 text-indigo-600" />
                    <h1 className="text-2xl font-bold text-gray-900">{exercise.title}</h1>
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                {/* Description */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">ពណ៌នា</h3>
                    <div className="prose prose-gray max-w-none">
                        <MarkDownRenderer content={exercise.description} />
                    </div>
                </div>

                {/* Exercise Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    <div className="bg-indigo-50 rounded-3xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Target className="w-5 h-5 text-indigo-600" />
                            <span className="text-sm font-medium text-indigo-600">ចំនួនសំណួរ</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{exercise.questions.length}</p>
                    </div>

                    <div className="bg-green-50 rounded-3xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Clock className="w-5 h-5 text-green-600" />
                            <span className="text-sm font-medium text-green-600">ពេលវេលា</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{exercise.duration}</p>
                        <p className="text-sm text-gray-600">នាទី</p>
                    </div>

                    <div className="bg-blue-50 rounded-3xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <BookOpen className="w-5 h-5 text-blue-600" />
                            <span className="text-sm font-medium text-blue-600">មុខវិជ្ជា</span>
                        </div>
                        <p className="text-lg font-bold text-gray-900">{exercise.subject}</p>
                    </div>

                    <div className="bg-purple-50 rounded-3xl p-4">
                        <div className="flex items-center gap-2 mb-2">
                            <User className="w-5 h-5 text-purple-600" />
                            <span className="text-sm font-medium text-purple-600">ថ្នាក់</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-900">{exercise.grade}</p>
                    </div>
                </div>

                {/* Topic Information */}
                <div className="bg-gray-50 rounded-3xl p-4 mb-6">
                    <h4 className="text-sm font-medium text-gray-600 mb-2">ប្រធានបទ</h4>
                    <p className="text-lg font-semibold text-gray-900">{exercise.topic}</p>
                </div>

                {/* Start Button */}
                {showStartButton && (
                    <div className="text-center">
                        <button
                            onClick={onStartExercise}
                            disabled={isStarting}
                            className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white px-8 py-3 rounded-3xl font-semibold text-lg transition-colors disabled:cursor-not-allowed"
                        >
                            {isStarting ? 'កំពុងរៀបចំ...' : startButtonText}
                        </button>
                    </div>
                )}

                {/* Additional Information */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                        <div>
                            <span className="font-medium">បង្កើតនៅ:</span>
                            <span className="ml-2">
                                {new Date(exercise.createdAt).toLocaleDateString('km-KH')}
                            </span>
                        </div>
                        <div>
                            <span className="font-medium">កែប្រែចុងក្រោយ:</span>
                            <span className="ml-2">
                                {new Date(exercise.updatedAt).toLocaleDateString('km-KH')}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}