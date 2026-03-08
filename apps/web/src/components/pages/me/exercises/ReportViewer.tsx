// 'use client';

// import { X, BookOpen, Calculator, Award } from 'lucide-react';
// import { ExerciseReport } from '@/types/user-content/exercise';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import Link from 'next/link';
// import api from '@/configs/axios';
// import { Dialog, Transition } from '@headlessui/react';
// import { Fragment } from 'react';

// interface ReportViewerProps {
//     id: number,
//     isOpen: boolean;
//     onClose: () => void;
// }

// export default function ReportViewer({ id, isOpen, onClose }: ReportViewerProps) {
//     // Mock backend data for demonstration - replace with actual API call
//     const [report, setReport] = useState<ExerciseReport | null>();
//     const [isLoading, setIsLoading] = useState(true);

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 setIsLoading(true);
//                 const response = await api.get(`/me/exercises/${id}/report`);
//                 if (response.status === 200) {
//                     setReport(response.data.data);
//                 } else if (response.status === 404) {
//                     setReport(null);
//                 }
//             } catch (error) {
//                 console.error('Error fetching report:', error);
//                 setReport(null);
//             } finally {
//                 setIsLoading(false);
//             }
//         };
//         fetchData();
//     }, [id]);

//     const LoadingSkeleton = () => (
//         <div className="p-6">
//             <div className="flex items-center justify-between mb-6">
//                 <div className="h-7 w-48 bg-gray-200 rounded-full animate-pulse"></div>
//                 <div className="h-8 w-8 bg-gray-200 rounded-full animate-pulse"></div>
//             </div>

//             {/* Summary Stats Skeleton */}
//             <div className="grid grid-cols-3 gap-4 mb-6">
//                 {[...Array(3)].map((_, i) => (
//                     <div key={i} className="text-center p-4 bg-gray-50 rounded-full animate-pulse">
//                         <div className="h-8 w-16 bg-gray-200 rounded-full mx-auto mb-2"></div>
//                         <div className="h-4 w-24 bg-gray-200 rounded-full mx-auto"></div>
//                     </div>
//                 ))}
//             </div>

//             {/* Attempts List Skeleton */}
//             <div>
//                 <div className="h-6 w-40 bg-gray-200 rounded-3xl mb-4 animate-pulse"></div>
//                 <div className="space-y-4">
//                     {[...Array(3)].map((_, i) => (
//                         <div key={i} className="border border-gray-200 rounded-3xl overflow-hidden">
//                             {/* Attempt Header Skeleton */}
//                             <div className="bg-gray-50 p-4 border-b border-gray-200">
//                                 <div className="flex items-center justify-between">
//                                     <div className="flex items-center gap-4">
//                                         <div className="w-8 h-8 bg-gray-200 rounded-full animate-pulse"></div>
//                                         <div className="space-y-2">
//                                             <div className="h-4 w-24 bg-gray-200 rounded-full"></div>
//                                             <div className="h-3 w-16 bg-gray-200 rounded-full"></div>
//                                         </div>
//                                     </div>
//                                     <div className="h-6 w-16 bg-gray-200 rounded-full"></div>
//                                 </div>
//                             </div>

//                             {/* Section Scores Skeleton */}
//                             <div className="p-4">
//                                 <div className="h-5 w-32 bg-gray-200 rounded-3xl mb-3"></div>
//                                 <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//                                     {[...Array(3)].map((_, j) => (
//                                         <div key={j} className="bg-gray-50 rounded-3xl p-3">
//                                             <div className="flex items-center justify-between mb-2">
//                                                 <div className="h-4 w-24 bg-gray-200 rounded-full"></div>
//                                                 <div className="h-4 w-12 bg-gray-200 rounded-full"></div>
//                                             </div>
//                                             <div className="flex items-center justify-between">
//                                                 <div className="h-3 w-20 bg-gray-200 rounded-full"></div>
//                                                 <div className="h-3 w-16 bg-gray-200 rounded-full"></div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );

//     const getScoreColor = (score: number) => {
//         if (score >= 90) return 'text-green-600 bg-green-100';
//         if (score >= 80) return 'text-blue-600 bg-blue-100';
//         if (score >= 70) return 'text-yellow-600 bg-yellow-100';
//         return 'text-red-600 bg-red-100';
//     };

//     return (
//         <Transition appear show={isOpen} as={Fragment}>
//             <Dialog as="div" className="relative z-50" onClose={onClose}>
//                 <Transition.Child
//                     as={Fragment}
//                     enter="ease-out duration-300"
//                     enterFrom="opacity-0"
//                     enterTo="opacity-100"
//                     leave="ease-in duration-200"
//                     leaveFrom="opacity-100"
//                     leaveTo="opacity-0"
//                 >
//                     <div className="fixed inset-0 bg-black/50" />
//                 </Transition.Child>

//                 <div className="fixed inset-0 overflow-y-auto">
//                     <div className="flex min-h-full items-center justify-center p-4 text-center">
//                         <Transition.Child
//                             as={Fragment}
//                             enter="ease-out duration-300"
//                             enterFrom="opacity-0 scale-95"
//                             enterTo="opacity-100 scale-100"
//                             leave="ease-in duration-200"
//                             leaveFrom="opacity-100 scale-100"
//                             leaveTo="opacity-0 scale-95"
//                         >
//                             <Dialog.Panel className="w-full max-w-4xl transform overflow-hidden rounded-3xl bg-white text-left align-middle shadow-xl transition-all">
//                                 {/* Header */}
//                                 <div className="p-6 border-b border-gray-200">
//                                     <div className="flex items-center justify-between">
//                                         <Dialog.Title as="h2" className="text-xl font-semibold text-gray-900">
//                                             របាយការណ៍លំហាត់
//                                         </Dialog.Title>
//                                         <div className='flex items-center gap-2'>
//                                             <Link href={`/exercise/${id}`} className='px-4 py-2 hover:bg-indigo-400 hover:text-white bg-indigo-500 rounded-full transition-colors flex items-center gap-2'>
//                                                 <p className='text-sm font-medium text-white'>ធ្វើលំហាត់</p>
//                                             </Link>
//                                             <button
//                                                 onClick={onClose}
//                                                 className="p-2 hover:bg-gray-100 rounded-full transition-colors"
//                                             >
//                                                 <X className="w-5 h-5 text-gray-500" />
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Content */}
//                                 <div className="max-h-[70vh] overflow-y-auto">
//                                     {isLoading ? (
//                                         <LoadingSkeleton />
//                                     ) : !report ? (
//                                         <div className="p-6">
//                                             <div className="flex flex-col items-center justify-center gap-2">
//                                                 <div className="text-red-500">
//                                                     <X className="w-8 h-8" />
//                                                 </div>
//                                                 <div className="text-center text-gray-500">របាយការណ៍លំហាត់មិនមាន</div>
//                                                 <Link href={`/exercise/${id}`} className='px-4 py-2 hover:bg-indigo-400 hover:text-white bg-indigo-500 rounded-full transition-colors flex items-center gap-2'>
//                                                     <p className='text-sm font-medium text-white'>ធ្វើលំហាត់</p>
//                                                 </Link>
//                                             </div>
//                                         </div>
//                                     ) : (
//                                         <div className="p-6">
//                                             {/* Summary Stats */}
//                                             <div className="grid grid-cols-3 gap-4 mb-6">
//                                                 <div className="text-center p-4 bg-indigo-50 rounded-full">
//                                                     <div className="text-2xl font-bold text-indigo-600">{report.numberOfAttempts}</div>
//                                                     <div className="text-sm text-gray-600">ចំនួនដងព្យាយាម</div>
//                                                 </div>
//                                                 <div className="text-center p-4 bg-green-50 rounded-full">
//                                                     <div className="text-2xl font-bold text-green-600">{report.maxScore}%</div>
//                                                     <div className="text-sm text-gray-600">ពិន្ទុខ្ពស់បំផុត</div>
//                                                 </div>
//                                                 <div className="text-center p-4 bg-blue-50 rounded-full">
//                                                     <div className="text-2xl font-bold text-blue-600">{parseFloat(report.averageScore).toFixed(1)}%</div>
//                                                     <div className="text-sm text-gray-600">ពិន្ទុជាមធ្យម</div>
//                                                 </div>
//                                             </div>

//                                             {/* Attempts List with Section Scores */}
//                                             <div>
//                                                 <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
//                                                     <Award className="w-5 h-5" />
//                                                     ប្រវត្តិព្យាយាម
//                                                 </h3>
//                                                 <div className="space-y-4">
//                                                     {report.attempts.map((attempt, index) => {
//                                                         // Calculate overall score for this attempt
//                                                         const overallScore = attempt.sectionScores.reduce((sum, section) => sum + section.score, 0) / attempt.sectionScores.length;

//                                                         return (
//                                                             <div key={attempt.exerciseHistoryId} className="border border-gray-200 rounded-3xl overflow-hidden">
//                                                                 {/* Attempt Header */}
//                                                                 <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
//                                                                     <div className="flex items-center justify-between">
//                                                                         <div className="flex items-center gap-4">
//                                                                             <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-sm font-medium">
//                                                                                 {index + 1}
//                                                                             </div>
//                                                                             <div>
//                                                                                 <div className="text-sm font-medium text-gray-900">ព្យាយាម #{index + 1}</div>
//                                                                             </div>
//                                                                         </div>
//                                                                         <div className="text-right">
//                                                                             <div className={`px-3 py-1 rounded-full text-sm font-medium ${getScoreColor(overallScore)}`}>
//                                                                                 {overallScore.toFixed(0)}%
//                                                                             </div>
//                                                                         </div>
//                                                                     </div>
//                                                                 </div>

//                                                                 {/* Section Scores */}
//                                                                 <div className="p-4">
//                                                                     <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
//                                                                         {attempt.sectionScores.map((section, sectionIndex) => (
//                                                                             <div key={sectionIndex} className="bg-gray-50 rounded-full p-3">
//                                                                                 <div className="flex items-center justify-between mb-2">
//                                                                                     <span className="text-xs font-bold text-gray-700">{section.section}</span>
//                                                                                     <div className={`px-2 py-1 rounded-full text-xs font-medium ${getScoreColor(section.score)}`}>
//                                                                                         {section.score}%
//                                                                                     </div>
//                                                                                 </div>
//                                                                                 <div className="flex items-center justify-between text-xs text-gray-500">
//                                                                                     <span>ត្រឹមត្រូវ: {section.correctAnswers}/{section.totalQuestions}</span>
//                                                                                 </div>
//                                                                             </div>
//                                                                         ))}
//                                                                     </div>
//                                                                 </div>
//                                                             </div>
//                                                         );
//                                                     })}
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     )}
//                                 </div>
//                             </Dialog.Panel>
//                         </Transition.Child>
//                     </div>
//                 </div>
//             </Dialog>
//         </Transition>
//     );
// }
