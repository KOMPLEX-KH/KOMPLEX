// import React from 'react';
// import Link from 'next/link';
// import { CheckCircle, AlertCircle, XCircle, Loader2 } from 'lucide-react';
// import { ExerciseSection } from '@/types/content/exercises';
// import { Logo } from '@/components/common/Logo';


// interface PracticeResultProps {
//     examSections: ExerciseSection[];
//     overallScore: { correct: number; total: number };
//     sectionScores: { [sectionId: string]: { correct: number; total: number } };
//     onRetakeExam: () => void;
//     isLoading?: boolean;
// }

// export default function PracticeResult({ examSections, overallScore, sectionScores, onRetakeExam, isLoading = false }: PracticeResultProps) {
//     const percentage = Math.round((overallScore.correct / overallScore.total) * 100);

//     return (
//         <div className="bg-white rounded-3xl shadow-lg p-5 text-center">
//             <div className="mb-6">
//                 {isLoading ? (
//                     <Logo isLoading={true} isVertical={true} size="xl" showBeta={false} />
//                 ) : percentage >= 80 ? (
//                     <CheckCircle size={80} className="text-green-500 mx-auto mb-4" />
//                 ) : percentage >= 60 ? (
//                     <AlertCircle size={80} className="text-yellow-500 mx-auto mb-4" />
//                 ) : (
//                     <XCircle size={80} className="text-red-500 mx-auto mb-4" />
//                 )}
//             </div>

//             <h1 className="text-3xl font-bold text-gray-900 mb-4">
//                 {isLoading ? 'កំពុងគណនាលទ្ធផល...' : 'វិញ្ញាសាបានបញ្ចប់!'}
//             </h1>
//             <p className="text-xl text-gray-600 mb-8">
//                 {isLoading ? 'សូមរង់ចាំខណៈពេលយើងដំណើរការលទ្ធផលរបស់អ្នក' :
//                     `លទ្ធផលរបស់អ្នក: ${overallScore.correct}/${overallScore.total} (${percentage}%)`}
//             </p>

//             <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
//                 {isLoading ? (
//                     <div className="flex items-center justify-center gap-2 text-indigo-600">
//                         <Loader2 className="w-5 h-5 animate-spin" />
//                         <span className="text-lg font-medium">កំពុងដំណើរការ...</span>
//                     </div>
//                 ) : (
//                     examSections.map((section) => {
//                         const score = sectionScores[section.id];
//                         const sectionPercentage = Math.round((score.correct / score.total) * 100);

//                         return (
//                             <div key={section.id} className="bg-indigo-50 border border-indigo-500 rounded-3xl p-4 min-w-[200px]">
//                                 <h4 className="font-semibold text-gray-800 mb-2">{section.title}</h4>
//                                 <p className="text-sm text-gray-600 mb-2">{score.correct}/{score.total}</p>
//                                 <div className="w-full max-w-[300px] bg-gray-200 rounded-full h-2 mx-auto">
//                                     <div
//                                         className={`h-2 rounded-full ${sectionPercentage >= 80 ? 'bg-green-500' :
//                                             sectionPercentage >= 60 ? 'bg-yellow-500' : 'bg-red-500'
//                                             }`}
//                                         style={{ width: `${sectionPercentage}%` }}
//                                     ></div>
//                                 </div>
//                             </div>
//                         );
//                     })
//                 )}
//             </div>

//             {!isLoading && (
//                 <div className="flex gap-4 justify-center">
//                     <Link
//                         href="/exercises"
//                         className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold transition-colors"
//                     >
//                         ត្រឡប់ទៅកាន់លំហាត់
//                     </Link>
//                     <button
//                         onClick={onRetakeExam}
//                         className="bg-indigo-500/10 border-2 border-indigo-500 text-indigo-700 px-6 py-3 rounded-full font-semibold transition-colors"
//                     >
//                         ធ្វើវិញ្ញាសាម្តងទៀត
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// }
