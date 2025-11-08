import { RedirectType } from "next/dist/client/components/redirect-error";
import { redirect } from "next/navigation";

export default function PracticePage() {
    redirect("/not-found", RedirectType.replace)
}

// 'use client';

// import React, { useEffect, useState } from 'react';
// import { History, Settings, Search, ChevronDown, BarChart3 } from 'lucide-react';
// import Link from 'next/link';
// import { Listbox, Transition } from '@headlessui/react';
// import PracticeCard from '@/components/pages/exercises/ExerciseCard';
// import ContentError from '@/components/common/ContentError';
// import { Subject } from '@/types/content/exercises';
// import { feedExerciseService } from '@/services/index';
// import {
//     transformBackendDataToSubjects,
//     getSubjectColorVariants,
//     getSubjectIcon
// } from '@core-utils/transform';

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


// export default function PracticePage() {
//     const [selectedGrade, setSelectedGrade] = useState({
//         id: 'grade-12',
//         name: 'ថ្នាក់ទី១២',
//     });
//     const [subjects, setSubjects] = useState<Subject[]>([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     const fetchExercises = async () => {
//         try {
//             setLoading(true);
//             setError(null);
//             const data = await feedExerciseService.getExercisesByGrade(selectedGrade.name);
//             const transformedSubjects = transformBackendDataToSubjects(data);
//             if (transformedSubjects.length > 0) {
//                 setSubjects(transformedSubjects);
//             } else {
//                 setError('មិនមានលំហាត់សម្រាប់ថ្នាក់នេះទេ');
//             }
//         } catch {
//             setError('មានបញ្ហាក្នុងការទាញយកលំហាត់');
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         fetchExercises();
//     }, [selectedGrade]);


//     const currentGrade = grades.find(g => g.id === selectedGrade.id);

//     return (
//         <div className="min-h-screen bg-gray-50">

//             <div className="pt-16">

//                 <div className="max-w-7xl mx-auto px-5 py-8">
//                     {/* Page Header with Grade Selection */}
//                     <div className="flex items-center justify-between mb-8">
//                         <div className='pr-2'>
//                             <h1 className="lg:text-3xl text-2xl font-bold text-gray-900 mb-2">
//                                 លំហាត់អនុវត្តន៍សម្រាប់ {currentGrade?.name}
//                             </h1>
//                         </div>

//                         {/* Grade Dropdown */}
//                         <div className="relative">
//                             <Listbox value={selectedGrade} onChange={(value) => setSelectedGrade(value)}>
//                                 <Listbox.Button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-full  focus:outline-none  transition-all">
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
//                                                 value={grade.id}
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

//                     {/* Loading State */}
//                     {loading && (
//                         <div className="space-y-6">
//                             {/* Subject Skeleton */}
//                             {[1, 2, 3].map((i) => (
//                                 <div key={i} className="bg-gray-50 lg:rounded-3xl ">
//                                     {/* Subject Header Skeleton */}
//                                     <div className="flex items-center gap-4 mb-6">
//                                         <div className="w-16 h-16 bg-gray-200 rounded-xl animate-pulse"></div>
//                                         <div className="flex-1">
//                                             <div className="h-8 bg-gray-200 rounded-full w-48 animate-pulse mb-2"></div>
//                                         </div>
//                                     </div>

//                                     {/* Topics Grid Skeleton */}
//                                     <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
//                                         {[1, 2, 3, 4, 5, 6].map((j) => (
//                                             <div key={j} className="bg-gray-100 rounded-3xl p-4 animate-pulse">
//                                                 <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
//                                                 <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
//                                                 <div className="h-4 bg-gray-200 rounded w-2/3"></div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     )}

//                     {/* Error State */}
//                     {error && (
//                         <ContentError
//                             type={error === 'មិនមានលំហាត់សម្រាប់ថ្នាក់នេះទេ' ? 'no-results' : 'error'}
//                             message={error}
//                         />
//                     )}

//                     {/* Subjects and Topics */}
//                     {!loading && !error && selectedGrade && (
//                         <div className="grid grid-cols-1 gap-4">
//                             {subjects.length === 0 ? (
//                                 <ContentError type="no-results" message="មិនមានលំហាត់សម្រាប់ថ្នាក់នេះទេ" />
//                             ) : (
//                                 subjects.map((subject) => {
//                                     const subjectColors = getSubjectColorVariants(subject.color);
//                                     return (
//                                         <div key={subject.id} className=" bg-gray-50 lg:rounded-3xl my-4">
//                                             {/* Subject Header */}
//                                             <div className="flex items-center gap-4 mb-6">
//                                                 <div className={`w-16 h-16 ${subject.color} rounded-full flex items-center justify-center text-white`}>
//                                                     {React.createElement(getSubjectIcon(subject.name), { className: "w-8 h-8" })}
//                                                 </div>
//                                                 <div>
//                                                     <h3 className="text-2xl font-bold text-gray-900 mb-2">{subject.name}</h3>
//                                                 </div>
//                                             </div>

//                                             {/* Topics Grid */}
//                                             <div className="grid grid-cols-2 lg:grid-cols-3 gap-2">
//                                                 {subject.topics.map((topic) => (
//                                                     <PracticeCard
//                                                         key={topic.id}
//                                                         topic={topic}
//                                                         subjectId={subject.id}
//                                                         subjectColors={subjectColors}
//                                                     />
//                                                 ))}
//                                             </div>
//                                         </div>
//                                     );
//                                 })
//                             )}
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }