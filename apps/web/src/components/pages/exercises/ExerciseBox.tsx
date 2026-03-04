// "use client";

// import { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import MarkDownRenderer from '@/components/helper/MarkDownRenderer';
// // ! to change
// import { Question } from "@/types/content/exercises";

// export interface ExerciseBoxProps {
//     questions: Question[];
//     currentQuestionIndex?: number;
//     onAnswerSubmit?: (questionId: number, choiceId: number) => void;
//     onQuestionChange?: (index: number) => void;
//     sectionAnswers?: { [questionId: string]: number };
// }

// export default function ExerciseBox({
//     questions,
//     currentQuestionIndex: externalCurrentQuestionIndex = 0,
//     onAnswerSubmit,
//     onQuestionChange,
//     sectionAnswers = {}
// }: ExerciseBoxProps) {
//     const [internalQuestionIndex, setInternalQuestionIndex] = useState(0);
//     const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
//     const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
//     const [isAnswering, setIsAnswering] = useState(false);
//     const [questionAnswers, setQuestionAnswers] = useState<Map<number, number>>(new Map());

//     // Use external question index if provided, otherwise use internal state
//     const currentQuestionIndex = externalCurrentQuestionIndex !== undefined ? externalCurrentQuestionIndex : internalQuestionIndex;

//     const currentQuestion = questions[currentQuestionIndex];

//     const handleAnswerSelect = (choiceId: number) => {
//         setSelectedAnswer(choiceId);
//         setIsAnswering(true);

//         // Store the answer for this question
//         setQuestionAnswers(prev => new Map(prev).set(currentQuestion.id, choiceId));

//         // Mark question as answered
//         setAnsweredQuestions(prev => new Set([...prev, currentQuestion.id]));

//         // Call parent callback if provided
//         if (onAnswerSubmit) {
//             onAnswerSubmit(currentQuestion.id, choiceId);
//         }

//         // Auto-advance to next question after a shorter delay for better UX
//         setTimeout(() => {
//             if (currentQuestionIndex < questions.length - 1) {
//                 nextQuestion();
//             }
//             setIsAnswering(false);
//         }, 800); // Reduced to 0.8s for snappier feel
//     };

//     const nextQuestion = () => {
//         if (currentQuestionIndex < questions.length - 1) {
//             const newIndex = currentQuestionIndex + 1;
//             if (onQuestionChange) {
//                 onQuestionChange(newIndex);
//             } else {
//                 setInternalQuestionIndex(newIndex);
//             }
//             setSelectedAnswer(null);
//             setIsAnswering(false);
//         }
//     };

//     const prevQuestion = () => {
//         if (currentQuestionIndex > 0) {
//             const newIndex = currentQuestionIndex - 1;
//             if (onQuestionChange) {
//                 onQuestionChange(newIndex);
//             } else {
//                 setInternalQuestionIndex(newIndex);
//             }
//             setSelectedAnswer(null);
//             setIsAnswering(false);
//         }
//     };

//     // Note: goToQuestion removed since we no longer have question dots

//     // Reset selected answer when question changes and load existing answers
//     useEffect(() => {
//         setSelectedAnswer(null);
//         setIsAnswering(false);

//         // Load existing answer for this question if it exists
//         if (sectionAnswers[currentQuestion.id]) {
//             setSelectedAnswer(sectionAnswers[currentQuestion.id]);
//             setAnsweredQuestions(prev => new Set([...prev, currentQuestion.id]));
//         }
//     }, [currentQuestionIndex, currentQuestion.id, sectionAnswers]);

//     return (
//         <div className="bg-white/95 backdrop-blur-sm border-2 border-indigo-500/20 rounded-3xl p-6 my-6 shadow-lg shadow-indigo-500/15">

//             {/* Question */}
//             <div className={`mb-6 transition-all duration-200 ${isAnswering ? 'opacity-60 scale-[0.98]' : 'opacity-100 scale-100'}`}>
//                 <div className="text-gray-800 font-semibold text-lg mb-4">
//                     <MarkDownRenderer content={currentQuestion.title} />
//                 </div>

//                 {/* Image if available */}
//                 {currentQuestion.imageUrl && (
//                     <div className="mb-4">
//                         <img
//                             src={currentQuestion.imageUrl}
//                             alt="Question"
//                             className="max-w-full h-auto rounded-lg border border-gray-200"
//                         />
//                     </div>
//                 )}

//                 {/* Choices */}
//                 <div className="grid lg:grid-cols-2 gap-4 grid-cols-1">
//                     {currentQuestion.choices.map((choice, index) => {
//                         const isSelected = selectedAnswer === choice.id;
//                         const isAnswered = answeredQuestions.has(currentQuestion.id);
//                         const wasPreviouslySelected = questionAnswers.get(currentQuestion.id) === choice.id;

//                         return (
//                             <button
//                                 key={choice.id}
//                                 onClick={() => handleAnswerSelect(choice.id)}
//                                 disabled={isAnswered}
//                                 className={`w-full text-left px-5 py-3 rounded-full border-2 transition-all duration-200 font-medium transform hover:scale-[1.02] active:scale-[0.98] ${isSelected && isAnswering
//                                     ? "border-indigo-600 bg-indigo-100 text-indigo-800 shadow-lg scale-[1.02] ring-2 ring-indigo-200"
//                                     : isSelected && !isAnswered
//                                         ? "border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md"
//                                         : wasPreviouslySelected
//                                             ? "border-indigo-400 bg-indigo-50/80 text-indigo-600 cursor-not-allowed shadow-sm"
//                                             : !isAnswered
//                                                 ? "border-gray-200 hover:border-indigo-300 hover:bg-indigo-50/50 text-gray-700 hover:shadow-sm"
//                                                 : "border-gray-200 bg-gray-50 text-gray-500 cursor-not-allowed"
//                                     }`}
//                             >
//                                 <div className="flex items-center gap-3">
//                                     <span className="text-lg font-semibold mt-1">
//                                         {String.fromCharCode(0x1780 + index)} {/* Khmer letters: ក, ខ, គ, ឃ */}
//                                     </span>
//                                     <div className="flex-1 text-xl">
//                                         <MarkDownRenderer content={choice.text} />
//                                     </div>
//                                 </div>
//                             </button>
//                         );
//                     })}
//                 </div>
//             </div>

//             {/* Navigation */}
//             <div className={`flex items-center justify-center gap-10 mt-6 pt-4 border-t border-indigo-500/20 transition-all duration-200 ${isAnswering ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
//                 <button
//                     onClick={prevQuestion}
//                     disabled={currentQuestionIndex === 0}
//                     className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-100 disabled:text-gray-400 text-white px-4 py-2 rounded-full transition-all duration-200 hover:shadow-md disabled:shadow-none transform hover:scale-105 active:scale-95"
//                 >
//                     <ChevronLeft size={18} />
//                 </button>

//                 <div className="text-gray-600 text-sm font-medium">
//                     សំណួរ {currentQuestionIndex + 1} នៃ {questions.length}
//                 </div>

//                 <button
//                     onClick={nextQuestion}
//                     disabled={currentQuestionIndex === questions.length - 1}
//                     className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 disabled:bg-gray-100 disabled:text-gray-400 text-white px-4 py-2 rounded-full transition-all duration-200 hover:shadow-md disabled:shadow-none transform hover:scale-105 active:scale-95"
//                 >
//                     <ChevronRight size={18} />
//                 </button>
//             </div>
//         </div>
//     );
// }
