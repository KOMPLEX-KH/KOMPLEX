// import { useEffect, useState } from 'react';
// import { View, Pressable, ScrollView, ActivityIndicator } from 'react-native';
// import { Target, BarChart3 } from 'lucide-react-native';
// import { tw } from '@/utils/styles';
// import { Text } from '@/components/common/Text';
// import { meExerciseService } from '@/services/index';
// import {
//     transformBackendDataToSubjects,
//     getSubjectColorVariants,
//     getSubjectIcon,
// } from '@core-utils/transform';
// import type { Exercise } from '@/types/content/exercises';
// import type { ExerciseWithAttempts } from '@/types/user-content/exercise';

// interface SubjectSummary {
//     id: string;
//     name: string;
//     color: string;
//     topics: Array<{
//         id: string;
//         name: string;
//         attempts?: number;
//         userProgress?: number;
//     }>;
// }

// const grades = [{ id: 'grade-12', name: 'ថ្នាក់ទី១២' }];

// export default function ExerciseReportComponent() {
//     const [selectedGrade, setSelectedGrade] = useState(grades[0]);
//     const [subjects, setSubjects] = useState<SubjectSummary[]>([]);
//     const [selectedExercise, setSelectedExercise] = useState<ExerciseWithAttempts | null>(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchExercises = async () => {
//             try {
//                 setIsLoading(true);
//                 setError(null);
//                 const response = await meExerciseService.getExercisesWithAttempts(selectedGrade.name);
//                 const formatted = transformBackendDataToSubjects(response as unknown as Exercise);
//                 setSubjects(formatted as SubjectSummary[]);
//             } catch (err) {
//                 console.error('Error fetching exercise report:', err);
//                 setError('មានបញ្ហាក្នុងការទាញយករបាយការណ៍');
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         fetchExercises();
//     }, [selectedGrade]);

//     return (
//         <View style={tw('bg-white rounded-3xl border border-gray-200 p-4 gap-4')}>
//             <View style={tw('flex-row items-center justify-between')}>
//                 <View>
//                     <Text style={tw('text-lg font-kh-semibold text-gray-900')}>របាយការណ៍លំហាត់</Text>
//                     <Text style={tw('text-sm text-gray-500')}>{selectedGrade.name}</Text>
//                 </View>
//                 <Pressable
//                     onPress={() => setSelectedGrade(grades[0])}
//                     style={tw('px-3 py-1.5 rounded-full border border-indigo-500')}
//                 >
//                     <Text style={tw('text-sm font-kh-medium text-indigo-600')}>ថ្នាក់ទី១២</Text>
//                 </Pressable>
//             </View>

//             {isLoading ? (
//                 <View style={tw('items-center justify-center py-12')}>
//                     <ActivityIndicator size="large" color="#4F46E5" />
//                     <Text style={tw('mt-3 text-sm text-gray-500 font-kh-medium')}>
//                         កំពុងផ្ទុករបាយការណ៍...
//                     </Text>
//                 </View>
//             ) : error ? (
//                 <View style={tw('items-center justify-center py-12 gap-3')}>
//                     <Target size={40} color="#9CA3AF" />
//                     <Text style={tw('text-sm text-gray-500 font-kh-medium text-center')}>{error}</Text>
//                 </View>
//             ) : subjects.length === 0 ? (
//                 <View style={tw('items-center justify-center py-12 gap-3')}>
//                     <Target size={40} color="#9CA3AF" />
//                     <Text style={tw('text-sm text-gray-500 font-kh-medium text-center')}>
//                         រកមិនឃើញរបាយការណ៍លំហាត់
//                     </Text>
//                     <Text style={tw('text-xs text-gray-400 font-kh-medium text-center')}>
//                         សូមធ្វើលំហាត់មួយជាមុនសិន
//                     </Text>
//                 </View>
//             ) : (
//                 <ScrollView
//                     horizontal
//                     showsHorizontalScrollIndicator={false}
//                     contentContainerStyle={tw('gap-4')}
//                 >
//                     {subjects.map((subject) => {
//                         const colorVariants = getSubjectColorVariants(subject.color);
//                         const Icon = getSubjectIcon(subject.name);
//                         return (
//                             <View
//                                 key={subject.id}
//                                 style={tw('w-64 rounded-3xl border border-gray-200 p-4 gap-4')}
//                             >
//                                 <View style={tw('flex-row items-center gap-3')}>
//                                     <View style={tw(`w-10 h-10 rounded-full items-center justify-center ${colorVariants.background}`)}>
//                                         <Icon size={20} color="white" />
//                                     </View>
//                                     <Text style={tw('font-kh-semibold text-gray-900')}>{subject.name}</Text>
//                                 </View>

//                                 <View style={tw('gap-3')}>
//                                     {subject.topics.map((topic) => (
//                                         <Pressable
//                                             key={topic.id}
//                                             style={tw('border border-gray-200 rounded-2xl p-3 gap-2')}
//                                             onPress={() =>
//                                                 setSelectedExercise({
//                                                     exerciseId: parseInt(topic.id, 10),
//                                                     title: topic.name,
//                                                     totalAttempts: topic.attempts ?? 0,
//                                                     bestScore: topic.userProgress ?? 0,
//                                                     averageScore: topic.userProgress ?? 0,
//                                                     lastAttempted: new Date().toISOString(),
//                                                     attempts: [],
//                                                 })
//                                             }
//                                         >
//                                             <Text style={tw('text-sm font-kh-medium text-gray-900')}>
//                                                 {topic.name}
//                                             </Text>
//                                             <View style={tw('flex-row items-center justify-between')}>
//                                                 <View style={tw('flex-row items-center gap-1')}>
//                                                     <BarChart3 size={14} color="#6B7280" />
//                                                     <Text style={tw('text-xs text-gray-500')}>
//                                                         ព្យាយាម {topic.attempts ?? 0} ដង
//                                                     </Text>
//                                                 </View>
//                                                 <Text style={tw('text-xs text-indigo-600 font-kh-medium')}>
//                                                     ពិន្ទុ {topic.userProgress ?? 0}%
//                                                 </Text>
//                                             </View>
//                                         </Pressable>
//                                     ))}
//                                 </View>
//                             </View>
//                         );
//                     })}
//                 </ScrollView>
//             )}

//             {selectedExercise && (
//                 <View style={tw('border-t border-gray-200 pt-4 gap-2')}>
//                     <Text style={tw('text-sm font-kh-medium text-gray-900')}>
//                         លំហាត់៖ {selectedExercise.title}
//                     </Text>
//                     <Text style={tw('text-xs text-gray-500')}>
//                         ប្រាក់ពិន្ទុខ្ពស់បំផុត៖ {selectedExercise.bestScore}% | ព្យាយាម {selectedExercise.totalAttempts} ដង
//                     </Text>
//                     <Pressable onPress={() => setSelectedExercise(null)}>
//                         <Text style={tw('text-xs text-indigo-600 font-kh-medium')}>បិទព័ត៌មានលម្អិត</Text>
//                     </Pressable>
//                 </View>
//             )}
//         </View>
//     );
// }
