"use client";

import {
    Plus,
    Trash2,
    XCircle,
    BookOpen,
} from "lucide-react";
import { ExerciseQuestion } from "@/types/docs/topic";
import BlogEditor from "@components/common/Editor";

export interface ExerciseCreationBoxProps {
    questions: ExerciseQuestion[];
    onQuestionsChange: (questions: ExerciseQuestion[]) => void;
}

export default function ExerciseCreationBox({
    questions,
    onQuestionsChange,
}: ExerciseCreationBoxProps) {

    const addQuestion = () => {
        const newQuestion: ExerciseQuestion = {
            id: `q_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            question: '',
            options: ['', ''],
            correctAnswer: 0
        };
        onQuestionsChange([...questions, newQuestion]);
    };

    const removeQuestion = (questionId: string) => {
        onQuestionsChange(questions.filter(q => q.id !== questionId));
    };

    const updateQuestion = (questionId: string, field: keyof ExerciseQuestion, value: string | string[] | number) => {
        onQuestionsChange(questions.map(q =>
            q.id === questionId ? { ...q, [field]: value } : q
        ));
    };

    const addOption = (questionId: string) => {
        const question = questions.find(q => q.id === questionId);
        if (question && question.options.length < 6) {
            const newOptions = [...question.options, ''];
            updateQuestion(questionId, 'options', newOptions as string[]);
        }
    };

    const removeOption = (questionId: string, optionIndex: number) => {
        const question = questions.find(q => q.id === questionId);
        console.log('removeOption called:', { questionId, optionIndex, currentOptions: question?.options });
        if (question && question.options.length > 1) {
            const newOptions = question.options.filter((_, index) => index !== optionIndex);
            const currentCorrect = typeof question.correctAnswer === 'number' ? question.correctAnswer : 0;

            let newCorrectAnswer = currentCorrect;
            if (newOptions.length === 0) {
                newCorrectAnswer = 0;
            } else if (currentCorrect >= optionIndex) {
                newCorrectAnswer = Math.max(0, currentCorrect - 1);
            }

            if (typeof newCorrectAnswer === 'number') {
                newCorrectAnswer = Math.min(newCorrectAnswer, newOptions.length - 1);
            }

            console.log('About to update with:', { newOptions, newCorrectAnswer });
            // Update both options and correctAnswer in one go to avoid race conditions
            const updatedQuestion = {
                ...question,
                options: newOptions,
                correctAnswer: newCorrectAnswer
            };

            onQuestionsChange(questions.map(q =>
                q.id === questionId ? updatedQuestion : q
            ));
        } else {
            console.log('removeOption blocked:', {
                hasQuestion: !!question,
                optionsLength: question?.options.length
            });
        }
    };

    const isQuestionValid = (question: ExerciseQuestion) => {
        const questionText = typeof question.question === 'string' ? question.question : '';
        const optionsText = question.options.map(opt => typeof opt === 'string' ? opt : '');
        const correctAnswer = typeof question.correctAnswer === 'number' ? question.correctAnswer : 0;

        return questionText.trim() !== '' &&
            optionsText.every(opt => opt.trim() !== '') &&
            correctAnswer >= 0 &&
            correctAnswer < question.options.length;
    };

    return (
        <div className="lg:bg-white bg-gray-50 rounded-3xl lg:shadow-sm lg:p-6">
            {/* Header */}
            <div className="flex items-center justify-between mb-6 pb-4 ">
                <div className="text-indigo-600 font-semibold text-xl flex gap-3 items-center">
                    <BookOpen className="text-indigo-600" />
                    បង្កើតលំហាត់
                </div>
            </div>

            {/* Questions List */}
            <div className="space-y-6">
                {questions.length === 0 ? (
                    <div className="text-center py-12 text-gray-500">
                        <div className="flex items-center flex-col justify-center gap-2">
                            <p className="text-lg ">គ្មានសំណួរនៅឡើយទេ</p>
                            <p className="text-sm">ចុចប៊ូតុងខាងក្រោមដើម្បីបន្ថែមសំណួរដំបូង</p>
                            <button onClick={addQuestion} className="mt-2 bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors font-medium flex items-center gap-2">
                                <Plus size={18} />
                                បន្ថែមសំណួរ
                            </button>

                        </div>
                    </div>
                ) : (
                    questions.map((question, questionIndex) => (
                        <div
                            key={question.id}
                            className={`border border-indigo-500 bg-indigo-50/20 rounded-3xl p-6 transition-all duration-300 `}
                        >
                            {/* Question Header */}
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm bg-indigo-500
                                        }`}>
                                        {questionIndex + 1}
                                    </div>
                                    <h3 className="font-semibold text-gray-900">
                                        សំណួរ {questionIndex + 1}
                                    </h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => removeQuestion(question.id)}
                                        className="p-2 text-gray-500 hover:text-red-600 hover:bg-red-50 rounded-3xl transition-colors"
                                        title="លុប"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>

                            {/* Question Content */}
                            <div className="space-y-4">
                                {/* Question Text */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        សំណួរ
                                    </label>
                                    <BlogEditor
                                        value={typeof question.question === 'string' ? question.question : ''}
                                        onChange={(value) => updateQuestion(question.id, 'question', value)}
                                        height="200px"
                                        toolbarOptions={[
                                            ["bold"],
                                        ]}
                                        showMathButton={true}
                                        compact={true}
                                    />
                                </div>

                                {/* Options */}
                                <div>
                                    <div className="flex items-center justify-between mb-3">
                                        <label className="block text-sm font-medium text-gray-700">
                                            ជម្រើស
                                        </label>
                                        <button
                                            onClick={() => addOption(question.id)}
                                            disabled={question.options.length >= 6}
                                            className="flex items-center gap-2 px-3 py-1 text-sm bg-indigo-100 text-indigo-700 rounded-3xl hover:bg-indigo-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            <Plus size={14} />
                                            បន្ថែមជម្រើស
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-1 gap-4">
                                        {question.options.map((option, optionIndex) => (
                                            <div key={optionIndex} className="flex items-start gap-3">
                                                <input
                                                    type="radio"
                                                    name={`correct-${question.id}`}
                                                    checked={question.correctAnswer === optionIndex}
                                                    onChange={() => updateQuestion(question.id, 'correctAnswer', optionIndex)}
                                                    className="text-indigo-600 bg-white focus:ring-indigo-500 w-5 h-5 mt-3 flex-shrink-0"
                                                />
                                                <div className="flex-1">
                                                    <BlogEditor
                                                        value={typeof option === 'string' ? option : ''}
                                                        onChange={(value) => {
                                                            const newOptions = question.options.map((opt, idx) =>
                                                                idx === optionIndex ? value : opt
                                                            );
                                                            updateQuestion(question.id, 'options', newOptions as string[]);
                                                        }}
                                                        height="150px"
                                                        toolbarOptions={[
                                                            ["bold"],
                                                        ]}
                                                        showMathButton={true}
                                                        compact={true}
                                                    />
                                                </div>
                                                <button
                                                    onClick={() => removeOption(question.id, optionIndex)}
                                                    disabled={question.options.length <= 1}
                                                    className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-3xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-3 flex-shrink-0"
                                                >
                                                    <Trash2 size={16} />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Validation Status */}
                            <div className="mt-4 pt-4 border-t border-gray-200">
                                <div className="flex items-center gap-2 text-sm">
                                    {isQuestionValid(question) ? (
                                        <></>
                                    ) : (
                                        <div className="flex items-center gap-2 text-red-600">
                                            <XCircle size={16} />
                                            <span>សូមបំពេញព័ត៌មានដែលខ្វះ</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))
                )}
                {/* Footer Actions */}
                {questions.length > 0 && (
                    <div className="mt-8 pt-6 border-t border-indigo-500/20">
                        <div className="flex items-center justify-center">
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={addQuestion}
                                    className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-3xl transition-colors font-medium"
                                >
                                    <Plus size={18} />
                                    បន្ថែមសំណួរ
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>


        </div>
    );
}

