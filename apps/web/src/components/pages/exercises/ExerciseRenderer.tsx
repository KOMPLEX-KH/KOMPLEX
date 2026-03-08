// 'use client';

// import React, { useState } from 'react';
// import { ChevronLeft, ChevronRight, BookOpen, CheckCircle, XCircle } from 'lucide-react';
// import MarkDownRenderer from '@/components/helper/MarkDownRenderer';
// import type { Question } from '@/types/content/exercises';

// interface ExerciseRendererProps {
//     questions: Question[];
//     currentQuestionIndex?: number;
//     onAnswerSubmit?: (questionId: number, choiceId: number) => void;
//     onQuestionChange?: (index: number) => void;
//     sectionAnswers?: { [questionId: string]: number };
//     showResults?: boolean;
//     isReadOnly?: boolean;
// }

// interface UserAnswer {
//     questionId: number;
//     selectedChoiceId: number;
// }

// export default function ExerciseRenderer({
//     questions,
//     currentQuestionIndex: externalCurrentQuestionIndex = 0,
//     onAnswerSubmit,
//     onQuestionChange,
//     sectionAnswers = {},
//     showResults = false,
//     isReadOnly = false
// }: ExerciseRendererProps) {
//     const [currentQuestionIndex, setCurrentQuestionIndex] = useState(externalCurrentQuestionIndex);
//     const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

//     const currentQuestion = questions[currentQuestionIndex];

//     // Handle answer selection
//     const handleAnswerSelect = (questionId: number, choiceId: number) => {
//         if (isReadOnly) return;

//         setUserAnswers(prev => {
//             const existing = prev.find(answer => answer.questionId === questionId);
//             if (existing) {
//                 return prev.map(answer =>
//                     answer.questionId === questionId
//                         ? { ...answer, selectedChoiceId: choiceId }
//                         : answer
//                 );
//             } else {
//                 return [...prev, { questionId, selectedChoiceId: choiceId }];
//             }
//         });

//         // Call parent callback if provided
//         if (onAnswerSubmit) {
//             onAnswerSubmit(questionId, choiceId);
//         }
//     };

//     // Handle question navigation
//     const handlePreviousQuestion = () => {
//         const prevIndex = Math.max(0, currentQuestionIndex - 1);
//         setCurrentQuestionIndex(prevIndex);
//         if (onQuestionChange) {
//             onQuestionChange(prevIndex);
//         }
//     };

//     const handleNextQuestion = () => {
//         const nextIndex = Math.min(questions.length - 1, currentQuestionIndex + 1);
//         setCurrentQuestionIndex(nextIndex);
//         if (onQuestionChange) {
//             onQuestionChange(nextIndex);
//         }
//     };

//     // No questions state
//     if (questions.length === 0) {
//         return null;
//     }

//     return (
//         <div className="bg-white rounded-3xl shadow-sm">
//             {/* Header */}
//             <div className="p-6 border-b border-gray-200">
//                 <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                         <BookOpen className="w-6 h-6 text-indigo-600" />
//                         <h2 className="text-xl font-bold text-gray-900">លំហាត់</h2>
//                     </div>
//                     <div className="text-sm text-gray-500">
//                         សំណួរ {currentQuestionIndex + 1} / {questions.length}
//                     </div>
//                 </div>
//             </div>

//             {/* Content */}
//             <div className="p-6">
//                 {/* Question */}
//                 <div className="mb-6">
//                     <div className="font-medium text-gray-900 mb-4">
//                         <MarkDownRenderer content={currentQuestion.title} />
//                     </div>

//                     {/* Question Image */}
//                     {currentQuestion.imageUrl && (
//                         <div className="mb-4">
//                             <img
//                                 src={currentQuestion.imageUrl}
//                                 alt="Question illustration"
//                                 className="max-w-full h-auto rounded-3xl border border-gray-200"
//                             />
//                         </div>
//                     )}
//                 </div>

//                 {/* Choices */}
//                 <div className="space-y-3">
//                     {currentQuestion.choices.map((choice) => {
//                         const userAnswer = userAnswers.find(answer => answer.questionId === currentQuestion.id);
//                         const hasAnswered = userAnswer !== undefined;
//                         const isSelected = userAnswer?.selectedChoiceId === choice.id;
//                         const isCorrect = choice.isCorrect;
//                         const isWrong = isSelected && !isCorrect;

//                         let choiceStyle = 'border-gray-200 hover:border-gray-300';
//                         let textStyle = 'text-gray-700';

//                         if (showResults && hasAnswered) {
//                             if (isCorrect) {
//                                 choiceStyle = 'border-green-500 bg-green-50';
//                                 textStyle = 'text-green-700 font-medium';
//                             } else if (isWrong) {
//                                 choiceStyle = 'border-red-500 bg-red-50';
//                                 textStyle = 'text-red-700';
//                             } else {
//                                 choiceStyle = 'border-gray-200 bg-gray-50';
//                                 textStyle = 'text-gray-500';
//                             }
//                         } else if (isSelected) {
//                             choiceStyle = 'border-indigo-500 bg-indigo-50';
//                             textStyle = 'text-indigo-700';
//                         }

//                         return (
//                             <label
//                                 key={choice.id}
//                                 className={`flex items-start gap-3 p-4 rounded-3xl border cursor-pointer transition-colors ${choiceStyle} ${isReadOnly ? 'cursor-default' : 'hover:shadow-sm'
//                                     }`}
//                             >
//                                 <input
//                                     type="radio"
//                                     name={`question-${currentQuestion.id}`}
//                                     value={choice.id}
//                                     checked={isSelected}
//                                     onChange={() => handleAnswerSelect(currentQuestion.id, choice.id)}
//                                     disabled={isReadOnly}
//                                     className="w-4 h-4 text-indigo-600 mt-1"
//                                 />
//                                 <div className={`flex-1 ${textStyle}`}>
//                                     <MarkDownRenderer content={choice.text} />
//                                 </div>
//                                 {showResults && hasAnswered && isCorrect && (
//                                     <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
//                                 )}
//                                 {showResults && hasAnswered && isWrong && (
//                                     <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
//                                 )}
//                             </label>
//                         );
//                     })}
//                 </div>

//                 {/* Navigation */}
//                 {!isReadOnly && (
//                     <div className="flex justify-between items-center mt-8 pt-6 border-t border-gray-200">
//                         <button
//                             onClick={handlePreviousQuestion}
//                             disabled={currentQuestionIndex === 0}
//                             className="flex items-center gap-2 px-4 py-2 text-gray-600 border border-gray-300 rounded-3xl hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                         >
//                             <ChevronLeft className="w-4 h-4" />
//                             មុន
//                         </button>

//                         <div className="flex items-center gap-2">
//                             {questions.map((_, index) => (
//                                 <button
//                                     key={index}
//                                     onClick={() => {
//                                         setCurrentQuestionIndex(index);
//                                         if (onQuestionChange) {
//                                             onQuestionChange(index);
//                                         }
//                                     }}
//                                     className={`w-8 h-8 rounded-full text-sm font-medium transition-colors ${index === currentQuestionIndex
//                                         ? 'bg-indigo-600 text-white'
//                                         : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
//                                         }`}
//                                 >
//                                     {index + 1}
//                                 </button>
//                             ))}
//                         </div>

//                         <button
//                             onClick={handleNextQuestion}
//                             disabled={currentQuestionIndex === questions.length - 1}
//                             className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-3xl hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
//                         >
//                             បន្ត
//                             <ChevronRight className="w-4 h-4" />
//                         </button>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }