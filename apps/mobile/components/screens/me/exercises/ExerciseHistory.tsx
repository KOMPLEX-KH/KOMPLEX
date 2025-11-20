import { useState, useEffect } from 'react';
import { View, Pressable } from 'react-native';
import { Plus, Target } from 'lucide-react-native';
import { useRouter, Href } from 'expo-router';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import { ExerciseHistory } from '@/types/user-content/exercise';
import { meExerciseService } from '@/services';

export default function ExerciseHistoryComponent() {
    const router = useRouter();
    const [history, setHistory] = useState<ExerciseHistory[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                setLoading(true);
                const historyResponse = await meExerciseService.getExerciseHistory();
                setHistory(historyResponse);
            } catch (error) {
                console.error('Error fetching exercise history:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchHistory();
    }, []);

    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };

    const formatDate = (dateString: string | null) => {
        if (!dateString) return 'មិនដឹង';
        return new Date(dateString).toLocaleDateString('km-KH');
    };

    if (loading) {
        return (
            <View style={tw("bg-white rounded-3xl shadow-sm border border-gray-200")}>
                <View style={tw("p-6 border-b border-gray-200")}>
                    <View style={tw("flex-row items-center justify-between")}>
                        <View style={tw("h-6 w-32 bg-gray-200 rounded-3xl")} />
                        <View style={tw("h-10 w-40 bg-gray-200 rounded-full")} />
                    </View>
                </View>
                <View style={tw("p-6")}>
                    <View style={tw("gap-4")}>
                        {[...Array(3)].map((_, i) => (
                            <View key={i} style={tw("flex-col lg:flex-row items-start lg:items-center gap-4 p-4 rounded-full border border-gray-200")}>
                                <View style={tw("w-12 h-12 bg-gray-200 rounded-full")} />
                                <View style={tw("flex-1 gap-3")}>
                                    <View style={tw("h-4 bg-gray-200 rounded w-3/4")} />
                                    <View style={tw("flex-row flex-wrap items-center gap-2 lg:gap-4")}>
                                        <View style={tw("h-3 bg-gray-200 rounded w-24")} />
                                        <View style={tw("h-6 bg-gray-200 rounded-full w-20")} />
                                        <View style={tw("h-3 bg-gray-200 rounded w-32")} />
                                    </View>
                                </View>
                                <View style={tw("w-full lg:w-auto")}>
                                    <View style={tw("h-10 bg-gray-200 rounded-full w-32")} />
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </View>
        );
    }

    return (
        <View style={tw("bg-white rounded-3xl shadow-sm border border-gray-200")}>
            <View style={tw("p-6 border-b border-gray-200")}>
                <View style={tw("flex-row items-center justify-between")}>
                    <Text style={tw("text-lg font-kh-semibold text-gray-900")}>
                        ប្រវត្តិលំហាត់
                    </Text>
                    <Pressable
                        onPress={() => router.push('/exercises' as Href)}
                        style={tw("flex-row items-center gap-2 px-4 py-2 bg-indigo-600 rounded-full")}
                    >
                        <Plus size={16} color="white" />
                        <Text style={tw("text-white font-kh-medium text-sm")}>
                            ចាប់ផ្តើមលំហាត់
                        </Text>
                    </Pressable>
                </View>
            </View>
            <View style={tw("p-6")}>
                {history.length > 0 ? (
                    <View style={tw("gap-4")}>
                        {history.map((exercise, index) => (
                            <View key={index} style={tw("flex-col lg:flex-row items-start lg:items-center gap-4 p-4 rounded-full border border-gray-200")}>
                                <View style={tw("p-3 rounded-full bg-blue-100")}>
                                    <Target size={16} color="#3B82F6" />
                                </View>

                                <View style={tw("flex-1 gap-3")}>
                                    <Text style={tw("font-kh-medium text-gray-900")} numberOfLines={1}>
                                        {exercise.title}
                                    </Text>
                                    <View style={tw("flex-row flex-wrap items-center gap-2 lg:gap-4")}>
                                        <Text style={tw("text-sm text-gray-500")}>
                                            ពិន្ទុ: {exercise.score}%
                                        </Text>
                                        <View style={tw("px-2 py-1 rounded-full bg-green-100")}>
                                            <Text style={tw("text-xs font-kh-medium text-green-600")}>
                                                ពេលវេលា: {formatTime(exercise.timeTaken)}
                                            </Text>
                                        </View>
                                        <Text style={tw("text-sm text-gray-500")}>
                                            ធ្វើនៅ {exercise.createdAt ? exercise.createdAt.split('T')[0] : 'មិនដឹង'}
                                        </Text>
                                    </View>
                                </View>

                                <View style={tw("w-full lg:w-auto")}>
                                    <Pressable
                                        onPress={() => router.push(`/exercises/${exercise.id}` as Href)}
                                        style={tw("w-full lg:w-auto px-4 py-2 bg-indigo-600 rounded-full")}
                                    >
                                        <Text style={tw("text-sm font-kh-medium text-white text-center")}>
                                            ធ្វើលំហាត់ម្ដងទៀត
                                        </Text>
                                    </Pressable>
                                </View>
                            </View>
                        ))}
                    </View>
                ) : (
                    <View style={tw("items-center py-12")}>
                        <Target size={64} color="#9CA3AF" />
                        <Text style={tw("text-lg font-kh-medium text-gray-900 mb-2 mt-4")}>
                            រកមិនឃើញប្រវត្តិលំហាត់
                        </Text>
                        <Text style={tw("text-gray-500 mb-6 text-center")}>
                            សូមចាប់ផ្តើមលំហាត់ដើម្បីមើលប្រវត្តិ
                        </Text>
                    </View>
                )}
            </View>
        </View>
    );
}
