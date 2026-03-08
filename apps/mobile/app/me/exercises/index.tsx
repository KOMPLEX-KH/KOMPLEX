// import { useState, useEffect, useLayoutEffect } from 'react';
// import { View, ScrollView, Pressable } from 'react-native';
// import { useRouter } from 'expo-router';
// import { tw } from '@/utils/styles';
// import { Text } from '@/components/common/Text';
// import Sidebar from '@/components/screens/me/Sidebar';
// import {
//     BookOpen,
//     CheckCircle,
//     BarChart3,
//     Clock,
//     FileText,
// } from 'lucide-react-native';
// import { ExerciseDashboard } from '@core-types/user-content/exercise';
// import ExerciseHistoryComponent from '@/components/screens/me/exercises/ExerciseHistory';
// import ExerciseReportComponent from '@/components/screens/me/exercises/ExerciseReport';
// import { useAuth } from '@/hooks/useAuth';
// import api from '@/configs/axios';
// import { useNavigation } from '@react-navigation/native';
// import { HEADER_CONFIG } from '@/constants/header-config';

// export default function MyExercises() {
//     const navigation = useNavigation();
//     const { user, loading: authLoading } = useAuth();
//     const router = useRouter();
//     const [dashboard, setDashboard] = useState<ExerciseDashboard | null>(null);
//     const [isLoading, setIsLoading] = useState(true);
//     const [activeTab, setActiveTab] = useState<'history' | 'report'>('history');

//     useLayoutEffect(() => {
//         navigation.setOptions({
//             headerTitle: 'លំហាត់របស់ខ្ញុំ',
//             ...HEADER_CONFIG,
//         });
//     }, [navigation]);

//     // Redirect to auth if not authenticated
//     useEffect(() => {
//         if (!authLoading && !user) {
//             router.replace('/auth');
//         }
//     }, [user, authLoading, router]);

//     // Fetch dashboard and history data
//     useEffect(() => {
//         if (user) {
//             const fetchData = async () => {
//                 try {
//                     setIsLoading(true);

//                     // Fetch dashboard data
//                     const dashboardResponse = await api.get<{ data: ExerciseDashboard }>('/me/exercises/dashboard');
//                     setDashboard(dashboardResponse.data.data);

//                 } catch (error) {
//                     console.error('Error fetching exercise data:', error);
//                 } finally {
//                     setIsLoading(false);
//                 }
//             };

//             fetchData();
//         }
//     }, [user]);

//     // Show loading while checking auth or fetching data
//     if (authLoading || isLoading) {
//         return (
//             <View style={tw("flex-1 bg-gray-50")}>
//                 <Sidebar />
//                 <View style={tw("flex-1 pt-20")}>
//                     <View style={tw("p-4")}>
//                         <View style={tw("gap-6")}>
//                             <View style={tw("h-8 bg-gray-200 rounded w-1/3")} />
//                             <View style={tw("flex-row flex-wrap gap-4")}>
//                                 {[...Array(3)].map((_, i) => (
//                                     <View key={i} style={tw("w-full sm:w-[48%] lg:w-[31%] h-24 bg-gray-200 rounded-3xl")} />
//                                 ))}
//                             </View>
//                             <View style={tw("h-64 bg-gray-200 rounded-3xl")} />
//                         </View>
//                     </View>
//                 </View>
//             </View>
//         );
//     }

//     // Don't render anything if not authenticated (will redirect)
//     if (!user) {
//         return null;
//     }

//     return (
//         <View style={tw("flex-1 bg-gray-50")}>
//             <Sidebar />
//             <ScrollView
//                 style={tw("flex-1")}
//                 contentContainerStyle={tw("p-4 pt-20")}
//                 showsVerticalScrollIndicator={false}
//             >
//                 {/* Header */}
//                 <View style={tw("mb-8")}>
//                     <Text style={tw("text-3xl font-kh-bold text-gray-900 mb-2")}>
//                         លំហាត់របស់ខ្ញុំ
//                     </Text>
//                     <Text style={tw("text-gray-600")}>
//                         គ្រប់គ្រងលំហាត់និងមើលវឌ្ឍនភាពរៀនរបស់អ្នក
//                     </Text>
//                 </View>

//                 {/* Stats Cards */}
//                 <View style={tw("flex-row flex-wrap gap-4 mb-8")}>
//                     <View style={tw("flex-1 min-w-[48%] lg:min-w-[31%] bg-white rounded-3xl p-6 shadow-sm border border-gray-200")}>
//                         <View style={tw("flex-row items-center justify-between")}>
//                             <View>
//                                 <Text style={tw("text-sm font-kh-medium text-gray-600")}>លំហាត់បានបញ្ចប់</Text>
//                                 <Text style={tw("text-2xl font-kh-bold text-gray-900")}>
//                                     {dashboard?.totalExercisesCompleted || 0}
//                                 </Text>
//                             </View>
//                             <View style={tw("p-3 bg-indigo-100 rounded-full")}>
//                                 <BookOpen size={24} color="#4F46E5" />
//                             </View>
//                         </View>
//                     </View>

//                     <View style={tw("flex-1 min-w-[48%] lg:min-w-[31%] bg-white rounded-3xl p-6 shadow-sm border border-gray-200")}>
//                         <View style={tw("flex-row items-center justify-between")}>
//                             <View>
//                                 <Text style={tw("text-sm font-kh-medium text-gray-600")}>ចំនួនដងព្យាយាម</Text>
//                                 <Text style={tw("text-2xl font-kh-bold text-green-600")}>
//                                     {dashboard?.totalAttempts || 0}
//                                 </Text>
//                             </View>
//                             <View style={tw("p-3 bg-green-100 rounded-full")}>
//                                 <CheckCircle size={24} color="#10B981" />
//                             </View>
//                         </View>
//                     </View>

//                     <View style={tw("flex-1 min-w-[48%] lg:min-w-[31%] bg-white rounded-3xl p-6 shadow-sm border border-gray-200")}>
//                         <View style={tw("flex-row items-center justify-between")}>
//                             <View>
//                                 <Text style={tw("text-sm font-kh-medium text-gray-600")}>ពិន្ទុជាមធ្យម</Text>
//                                 <Text style={tw("text-2xl font-kh-bold text-purple-600")}>
//                                     {dashboard?.averageScore ? dashboard.averageScore.toFixed(1) : '0'}%
//                                 </Text>
//                             </View>
//                             <View style={tw("p-3 bg-purple-100 rounded-full")}>
//                                 <BarChart3 size={24} color="#9333EA" />
//                             </View>
//                         </View>
//                     </View>
//                 </View>

//                 {/* Tabs */}
//                 <View style={tw("mb-6")}>
//                     <View style={tw("flex-row gap-2")}>
//                         <Pressable
//                             onPress={() => setActiveTab('history')}
//                             style={tw(
//                                 `px-4 py-2 rounded-full flex-row items-center gap-2 ${
//                                     activeTab === 'history'
//                                         ? 'bg-indigo-600'
//                                         : 'bg-white border border-gray-200'
//                                 }`
//                             )}
//                         >
//                             <Clock size={16} color={activeTab === 'history' ? 'white' : '#6B7280'} />
//                             <Text style={tw(`text-sm font-kh-medium ${activeTab === 'history' ? 'text-white' : 'text-gray-600'}`)}>
//                                 ប្រវត្តិ
//                             </Text>
//                         </Pressable>
//                         <Pressable
//                             onPress={() => setActiveTab('report')}
//                             style={tw(
//                                 `px-4 py-2 rounded-full flex-row items-center gap-2 ${
//                                     activeTab === 'report'
//                                         ? 'bg-indigo-600'
//                                         : 'bg-white border border-gray-200'
//                                 }`
//                             )}
//                         >
//                             <FileText size={16} color={activeTab === 'report' ? 'white' : '#6B7280'} />
//                             <Text style={tw(`text-sm font-kh-medium ${activeTab === 'report' ? 'text-white' : 'text-gray-600'}`)}>
//                                 របាយការណ៍
//                             </Text>
//                         </Pressable>
//                     </View>
//                 </View>

//                 {/* Tab Content */}
//                 {activeTab === 'history' ? (
//                     <ExerciseHistoryComponent />
//                 ) : (
//                     <ExerciseReportComponent />
//                 )}
//             </ScrollView>
//         </View>
//     );
// }

