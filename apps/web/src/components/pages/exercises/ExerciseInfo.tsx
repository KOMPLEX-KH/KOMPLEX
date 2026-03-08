// import React from 'react';
// import Link from 'next/link';
// import { ArrowLeft, Trophy } from 'lucide-react';
// import { ExerciseSection } from '@/types/content/exercises';

// interface PracticeInfoProps {
//     examTitle: string;
//     examSections: ExerciseSection[];
//     totalTime: number;
//     onStartExam: () => void;
// }

// export default function PracticeInfo({ examTitle, examSections, totalTime, onStartExam }: PracticeInfoProps) {
//     const formatTime = (seconds: number) => {
//         const hours = Math.floor(seconds / 3600);
//         const minutes = Math.floor((seconds % 3600) / 60);
//         const secs = seconds % 60;

//         if (hours > 0) {
//             return `${hours}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
//         }
//         return `${minutes}:${secs.toString().padStart(2, '0')}`;
//     };

//     return (
//         <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-indigo-100">
//             {/* Header */}
//             <div className="mb-8 text-center">
//                 <h1 className="text-4xl font-bold text-gray-900 mb-4">
//                     {examTitle}
//                 </h1>
//             </div>

//             {/* Main Content Layout */}
//             <div className="flex flex-col lg:flex-row gap-8">
//                 {/* Left Side - Info Boxes */}
//                 <div className="lg:w-1/3 space-y-4">
//                     <div className="bg-indigo-50 rounded-3xl p-4 border border-indigo-500">
//                         <h3 className="text-sm font-semibold text-indigo-800 mb-1">ផ្នែកនៃវិញ្ញាសា</h3>
//                         <p className="text-2xl font-bold text-indigo-600">{examSections.length}</p>
//                     </div>

//                     <div className="bg-indigo-50 rounded-3xl p-4 border border-indigo-500">
//                         <h3 className="text-sm font-semibold text-indigo-800 mb-1">ពេលវេលាសរុប</h3>
//                         <p className="text-2xl font-bold text-indigo-600">{formatTime(totalTime * 60)}</p>
//                     </div>

//                     <div className="bg-indigo-50 rounded-3xl p-4 border border-indigo-500">
//                         <h3 className="text-sm font-semibold text-indigo-800 mb-1">សំណួរសរុប</h3>
//                         <p className="text-2xl font-bold text-indigo-600">{examSections.reduce((sum, section) => sum + section.questions.length, 0)}</p>
//                     </div>
//                 </div>

//                 {/* Right Side - Sections */}
//                 <div className="lg:w-2/3">
//                     <div className="grid gap-3">
//                         {examSections.map((section, index) => (
//                             <div key={section.id} className="bg-white/80 backdrop-blur-sm rounded-full p-4 border border-indigo-500 transition-all">
//                                 <div className="flex items-center justify-between">

//                                     <span className="text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
//                                         {section.title}
//                                     </span>
//                                     <span className="text-sm text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">
//                                         {section.questions.length} សំណួរ
//                                     </span>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>

//             {/* Buttons */}
//             <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
//                 <Link
//                     href="/exercises"
//                     className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:shadow-lg flex items-center justify-center gap-2"
//                 >
//                     <ArrowLeft size={20} />
//                     ត្រឡប់ទៅកាន់លំហាត់
//                 </Link>
//                 <button
//                     onClick={onStartExam}
//                     className="bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border-2 border-indigo-500 px-12 py-4 rounded-full font-semibold text-xl transition-all hover:shadow-lg flex items-center justify-center gap-2"
//                 >
//                     <Trophy className="w-6 h-6" />
//                     ចាប់ផ្តើមវិញ្ញាសា
//                 </button>
//             </div>
//         </div>
//     );
// }
