// import { useMemo, useState } from "react";
// import { View, Text, Pressable, ScrollView } from "react-native";
// import {
//     BookOpen,
//     CheckCircle,
//     XCircle,
//     ChevronLeft,
//     ChevronRight,
// } from "lucide-react-native";
// // import MarkDownRenderer from "@/components/helper/MarkDownRenderer";
// import type { VideoExercise } from "@/types/content/videos";
// import { tw } from "@/utils/styles";

// interface ExerciseProps {
//     exercises?: VideoExercise[];
// }

// interface UserAnswer {
//     questionId: number;
//     selectedChoiceId: number;
// }

// export default function Exercise({ exercises: exercisesProp }: ExerciseProps) {
//     const exercises = exercisesProp ?? [];
//     const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
//     const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);

//     const currentExercise = useMemo(
//         () => exercises[currentExerciseIndex],
//         [exercises, currentExerciseIndex]
//     );

//     const handleAnswerSelect = (questionId: number, choiceId: number) => {
//         setUserAnswers((prev) => {
//             const existing = prev.find((answer) => answer.questionId === questionId);
//             if (existing) {
//                 return prev.map((answer) =>
//                     answer.questionId === questionId
//                         ? { ...answer, selectedChoiceId: choiceId }
//                         : answer
//                 );
//             }
//             return [...prev, { questionId, selectedChoiceId: choiceId }];
//         });
//     };

//     if (!currentExercise) {
//         return null;
//     }

//     return (
//         <View style={tw("rounded-3xl bg-white border border-indigo-50 p-6 gap-6")}>
//             <View style={tw("flex-row items-center gap-3")}>
//                 <BookOpen size={24} color="#4F46E5" />
//                 <Text style={tw("text-xl font-kh-bold text-gray-900")}>លំហាត់</Text>
//             </View>

//             <ScrollView style={{ maxHeight: 480 }} contentContainerStyle={tw("gap-6")}>
//                 {currentExercise.questions.map((question) => {
//                     const userAnswer = userAnswers.find((answer) => answer.questionId === question.id);
//                     const hasAnswered = !!userAnswer;

//                         return (
//                         <View key={question.id} style={tw("border border-gray-200 rounded-3xl p-4 gap-3")}>
//                             <View>
//                                     {/* <MarkDownRenderer content={question.title} /> */}
//                                     <Text>{question.title}</Text>
//                             </View>

//                             <View style={tw("gap-2")}>
//                                     {question.choices.map((choice) => {
//                                         const isSelected = userAnswer?.selectedChoiceId === choice.id;
//                                         const isCorrect = choice.isCorrect;
//                                         const isWrong = isSelected && !isCorrect;

//                                     let containerClasses = "border border-gray-200 bg-white";
//                                     let textClasses = "text-gray-700";

//                                         if (hasAnswered) {
//                                             if (isCorrect) {
//                                             containerClasses = "border border-green-500 bg-green-50";
//                                             textClasses = "text-green-700 font-kh-medium";
//                                             } else if (isWrong) {
//                                             containerClasses = "border border-red-500 bg-red-50";
//                                             textClasses = "text-red-700";
//                                             } else {
//                                             containerClasses = "border border-gray-200 bg-gray-50";
//                                             textClasses = "text-gray-500";
//                                             }
//                                         } else if (isSelected) {
//                                         containerClasses = "border border-indigo-500 bg-indigo-50";
//                                         textClasses = "text-indigo-700";
//                                         }

//                                         return (
//                                         <Pressable
//                                                 key={choice.id}
//                                             onPress={() => handleAnswerSelect(question.id, choice.id)}
//                                             style={tw(
//                                                 `flex-row items-center gap-3 px-3 py-2 rounded-full ${containerClasses}`
//                                             )}
//                                             >
//                                             <View style={tw("w-4 h-4")}>
//                                                 {isSelected && <CheckCircle size={16} color="#4F46E5" />}
//                                             </View>
//                                             <View style={tw(`flex-1 ${textClasses}`)}>
//                                                     {/* <MarkDownRenderer content={choice.text} /> */}
//                                                     <Text>{choice.text}</Text>
//                                             </View>
//                                                 {hasAnswered && isCorrect && (
//                                                 <CheckCircle size={16} color="#10B981" />
//                                                 )}
//                                             {hasAnswered && isWrong && <XCircle size={16} color="#EF4444" />}
//                                         </Pressable>
//                                         );
//                                     })}
//                             </View>
//                         </View>
//                         );
//                     })}
//             </ScrollView>

//         <View style={tw("flex-row items-center justify-between pt-4 border-t border-gray-200")}>
//                 <Pressable
//                     onPress={() =>
//                         setCurrentExerciseIndex((prev) => Math.max(0, prev - 1))
//                     }
//                         disabled={currentExerciseIndex === 0}
//                     style={tw(
//                         `flex-row items-center gap-2 px-4 py-2 rounded-full border border-gray-300 ${
//                             currentExerciseIndex === 0 ? "opacity-40" : ""
//                         }`
//                     )}
//                     >
//                     <ChevronLeft size={16} color="#4B5563" />
//                     <Text style={tw("text-sm text-gray-600")}>មុន</Text>
//                 </Pressable>

//                 <Text style={tw("text-sm text-gray-500")}>
//                         {currentExerciseIndex + 1} / {exercises.length}
//                 </Text>

//                 <Pressable
//                     onPress={() =>
//                         setCurrentExerciseIndex((prev) =>
//                             Math.min(exercises.length - 1, prev + 1)
//                         )
//                     }
//                         disabled={currentExerciseIndex === exercises.length - 1}
//                     style={tw(
//                         `flex-row items-center gap-2 px-4 py-2 rounded-full ${
//                             currentExerciseIndex === exercises.length - 1
//                                 ? "bg-indigo-200"
//                                 : "bg-indigo-600"
//                         }`
//                     )}
//                 >
//                     <Text style={tw("text-sm text-white")}>បន្ត</Text>
//                     <ChevronRight size={16} color="#FFFFFF" />
//                 </Pressable>
//             </View>
//         </View>
//     );
// }

