// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Target, BarChart3, ChevronDown } from 'lucide-react';
// import ReportViewer from './ReportViewer';
// import { ExerciseWithAttempts } from '@/types/user-content/exercise';
// import { Listbox, Transition } from '@headlessui/react';
// import { meExerciseService } from '@/services/index';
// import { Subject } from '@/types/content/exercises';
// import { Exercise } from '@/types/content/exercises';
// import {
//     transformBackendDataToSubjects,
//     getSubjectColorVariants,
//     getSubjectIcon
// } from '@core-utils/transform';

// // Grade options
// const grades = [
//     // {
//     //     id: 'grade-9',
//     //     name: 'ថ្នាក់ទី៩',
//     // },
//     // {
//     //     id: 'grade-10',
//     //     name: 'ថ្នាក់ទី១០',
//     // },
//     // {
//     //     id: 'grade-11',
//     //     name: 'ថ្នាក់ទី១១',
//     // },
//     {
//         id: 'grade-12',
//         name: 'ថ្នាក់ទី១២',
//     },
// ];


// export default function ExerciseReportComponent() {
//     const [selectedGrade, setSelectedGrade] = useState({
//         id: 'grade-12',
//         name: 'ថ្នាក់ទី១២',
//     });
//     const [subjects, setSubjects] = useState<Subject[]>([]);
//     const [selectedExercise, setSelectedExercise] = useState<ExerciseWithAttempts | null>(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);


//     const fetchExercises = async () => {
//         try {
//             setIsLoading(true);
//             setError(null);
//             const data = await meExerciseService.getExercisesWithAttempts(selectedGrade.name);
//             const transformedSubjects = transformBackendDataToSubjects(data as unknown as Exercise);
//             if (transformedSubjects.length > 0) {
//                 setSubjects(transformedSubjects as Subject[]);
//             } else {
//                 setError('មិនមានលំហាត់សម្រាប់ថ្នាក់នេះទេ');
//             }
//         } catch {
//             setError('មានបញ្ហាក្នុងការទាញយកលំហាត់');
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchExercises();
//     }, [selectedGrade]);

//     const openModal = (topic: { id: string; name: string; attempts?: number; userProgress?: number; estimatedTime: string }) => {
//         // all we need is the id 
//         // ! TODO: change later
//         const mockExercise: ExerciseWithAttempts = {
//             exerciseId: parseInt(topic.id),
//             title: topic.name,
//             totalAttempts: topic.attempts || 0,
//             bestScore: topic.userProgress || 0,
//             averageScore: topic.userProgress || 0,
//             lastAttempted: new Date().toISOString(),
//             attempts: [
//                 {
//                     id: 1,
//                     score: topic.userProgress || 0,
//                     timeTaken: parseInt(topic.estimatedTime) * 60,
//                     createdAt: new Date().toISOString(),
//                     sectionScores: [
//                         { sectionName: 'ផ្នែកទី១', score: topic.userProgress || 0, totalQuestions: 10, correctAnswers: Math.floor((topic.userProgress || 0) / 10) },
//                         { sectionName: 'ផ្នែកទី២', score: topic.userProgress || 0, totalQuestions: 8, correctAnswers: Math.floor((topic.userProgress || 0) / 12.5) },
//                         { sectionName: 'ផ្នែកទី៣', score: topic.userProgress || 0, totalQuestions: 6, correctAnswers: Math.floor((topic.userProgress || 0) / 16.67) }
//                     ]
//                 }
//             ]
//         };
//         setSelectedExercise(mockExercise);
//     };

//     const formatTime = (seconds: number) => {
//         const minutes = Math.floor(seconds / 60);
//         const remainingSeconds = seconds % 60;
//         return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
//     };

//     const formatDate = (dateString: string) => {
//         return new Date(dateString).toLocaleDateString('km-KH');
//     };

//     const getScoreColor = (score: number) => {
//         if (score >= 90) return 'text-green-600 bg-green-100';
//         if (score >= 80) return 'text-blue-600 bg-blue-100';
//         if (score >= 70) return 'text-yellow-600 bg-yellow-100';
//         return 'text-red-600 bg-red-100';
//     };

//     if (isLoading) {
//         return (
//             <div className="bg-white rounded-3xl shadow-sm border border-gray-200">
//                 <div className="p-6 border-b border-gray-200">
//                     <h2 className="text-lg font-semibold text-gray-900">របាយការណ៍លំហាត់</h2>
//                 </div>
//                 <div className="p-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {[...Array(6)].map((_, i) => (
//                             <div key={i} className="animate-pulse">
//                                 <div className="h-32 bg-gray-200 rounded-3xl"></div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     const currentGrade = grades.find(g => g.id === selectedGrade.id);

//     return (
//         <>
//             <div className="bg-white rounded-3xl shadow-sm border border-gray-200">
//                 <div className="p-6 border-b border-gray-200">
//                     <div className="flex items-center justify-between">
//                         <div>
//                             <h2 className="text-lg font-semibold text-gray-900">របាយការណ៍លំហាត់</h2>
//                             <p className="text-sm text-gray-600 mt-1">{currentGrade?.name}</p>
//                         </div>

//                         {/* Grade Dropdown */}
//                         <div className="relative">
//                             <Listbox value={selectedGrade} onChange={(value) => setSelectedGrade(value)}>
//                                 <Listbox.Button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full hover:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all">
//                                     <span className="text-sm font-medium text-gray-700">{currentGrade?.name}</span>
//                                     <ChevronDown size={16} className="text-gray-500 transition-transform ui-open:rotate-180" />
//                                 </Listbox.Button>

//                                 <Transition
//                                     enter="transition duration-100 ease-out"
//                                     enterFrom="transform scale-95 opacity-0"
//                                     enterTo="transform scale-100 opacity-100"
//                                     leave="transition duration-75 ease-out"
//                                     leaveFrom="transform scale-100 opacity-100"
//                                     leaveTo="transform scale-95 opacity-0"
//                                 >
//                                     <Listbox.Options className="absolute right-0 mt-2 w-48 bg-white rounded-3xl border border-gray-200 shadow-lg z-50">
//                                         {grades.map((grade) => (
//                                             <Listbox.Option
//                                                 key={grade.id}
//                                                 value={grade}
//                                                 className={({ active, selected }) =>
//                                                     `relative cursor-pointer select-none px-4 py-3 text-sm ${selected
//                                                         ? 'bg-indigo-50 text-indigo-600 font-medium'
//                                                         : active
//                                                             ? 'bg-gray-50 text-gray-700'
//                                                             : 'text-gray-700'
//                                                     }`
//                                                 }
//                                             >
//                                                 {grade.name}
//                                             </Listbox.Option>
//                                         ))}
//                                     </Listbox.Options>
//                                 </Transition>
//                             </Listbox>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="p-6">
//                     {/* Error State */}
//                     {error && (
//                         <div className="text-center py-12">
//                             <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//                             <h3 className="text-lg font-medium text-gray-900 mb-2">
//                                 {error === 'មិនមានលំហាត់សម្រាប់ថ្នាក់នេះទេ' ? 'រកមិនឃើញរបាយការណ៍លំហាត់' : 'មានបញ្ហាក្នុងការទាញយករបាយការណ៍'}
//                             </h3>
//                             <p className="text-gray-500">
//                                 {error === 'មិនមានលំហាត់សម្រាប់ថ្នាក់នេះទេ' ? 'សូមចាប់ផ្តើមលំហាត់ដើម្បីមើលរបាយការណ៍' : 'សូមព្យាយាមម្តងទៀត'}
//                             </p>
//                         </div>
//                     )}

//                     {/* Subjects and Topics */}
//                     {!error && subjects.length > 0 && (
//                         <div className="space-y-8">
//                             {subjects.map((subject) => {
//                                 const subjectColors = getSubjectColorVariants(subject.color);
//                                 return (
//                                     <div key={subject.id} className="">
//                                         {/* Subject Header */}
//                                         <div className="">
//                                             <div className="flex items-center gap-4">
//                                                 <div className={`w-12 h-12 ${subject.color} rounded-3xl flex items-center justify-center text-white`}>
//                                                     {React.createElement(getSubjectIcon(subject.name), { className: "w-8 h-8" })}
//                                                 </div>
//                                                 <div>
//                                                     <h3 className="text-xl font-semibold text-gray-900">{subject.name}</h3>
//                                                     <p className="text-sm text-gray-600">{subject.topics.length} លំហាត់</p>
//                                                 </div>
//                                             </div>
//                                         </div>

//                                         {/* Topics Grid */}
//                                         <div className="py-4">
//                                             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                                                 {subject.topics.map((topic) => {
//                                                     const isDisabled = (topic.questionCount || 0) <= 1;

//                                                     return (
//                                                         <div
//                                                             key={topic.id}
//                                                             onClick={isDisabled ? undefined : () => openModal(topic)}
//                                                             className={`relative bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-3xl p-4 transition-all duration-200 group ${isDisabled
//                                                                 ? 'opacity-50 cursor-not-allowed'
//                                                                 : 'cursor-pointer hover:shadow-lg hover:border-indigo-200'
//                                                                 }`}
//                                                         >
//                                                             <div className="flex items-center gap-2 mb-3">
//                                                                 <div className="flex items-center gap-2 p-2 rounded-full bg-indigo-100 text-indigo-600 group-hover:bg-indigo-200 transition-colors">
//                                                                     <Target className="w-4 h-4" />
//                                                                 </div>
//                                                                 <h4 className={`font-semibold text-base transition-colors ${isDisabled
//                                                                     ? 'text-gray-500'
//                                                                     : 'text-gray-900 group-hover:text-indigo-600'
//                                                                     }`}>
//                                                                     {topic.name}
//                                                                 </h4>
//                                                             </div>

//                                                             <div className="space-y-3">
//                                                                 <div className="flex items-center justify-between text-xs">
//                                                                     <span className="text-gray-600 flex items-center gap-1">
//                                                                         <BarChart3 className="w-3 h-3" />
//                                                                         ព្យាយាម
//                                                                     </span>
//                                                                     <span className="font-medium text-gray-900">{topic.attempts || 0} ដង</span>
//                                                                 </div>

//                                                                 <div>
//                                                                     <div className="flex items-center justify-between text-xs mb-1">
//                                                                         <span className="text-gray-600 flex items-center gap-1">
//                                                                             <BarChart3 className="w-3 h-3" />
//                                                                             ពិន្ទុខ្ពស់បំផុត
//                                                                         </span>
//                                                                         <span className="font-medium text-gray-900">
//                                                                             {typeof topic.userProgress === 'number' ? `${topic.userProgress}%` : 'មិនមាន'}
//                                                                         </span>
//                                                                     </div>
//                                                                     <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
//                                                                         <div
//                                                                             className="bg-indigo-500 h-2 rounded-full transition-all"
//                                                                             style={{
//                                                                                 width: typeof topic.userProgress === 'number'
//                                                                                     ? `${Math.max(0, Math.min(100, topic.userProgress))}%`
//                                                                                     : '0%'
//                                                                             }}
//                                                                         ></div>
//                                                                     </div>
//                                                                 </div>
//                                                             </div>

//                                                             {isDisabled && (
//                                                                 <div className="absolute inset-0 bg-gray-100/50 rounded-3xl flex items-center justify-center">
//                                                                     <span className="text-xs font-medium text-gray-600 bg-white px-2 py-1 rounded-full shadow-sm">
//                                                                         មិនមានទិន្នន័យ
//                                                                     </span>
//                                                                 </div>
//                                                             )}
//                                                         </div>
//                                                     );
//                                                 })}
//                                             </div>
//                                         </div>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     )}

//                     {/* No Data State */}
//                     {!error && subjects.length === 0 && !isLoading && (
//                         <div className="text-center py-12">
//                             <Target className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//                             <h3 className="text-lg font-medium text-gray-900 mb-2">រកមិនឃើញរបាយការណ៍លំហាត់</h3>
//                             <p className="text-gray-500">សូមចាប់ផ្តើមលំហាត់ដើម្បីមើលរបាយការណ៍</p>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Report Viewer Modal */}
//             {selectedExercise && (
//                 <ReportViewer
//                     id={selectedExercise.exerciseId}
//                     isOpen={!!selectedExercise}
//                     onClose={() => setSelectedExercise(null)}
//                 />
//             )}
//         </>
//     );
// }
