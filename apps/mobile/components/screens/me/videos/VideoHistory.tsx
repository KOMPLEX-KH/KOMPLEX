import { useState, useEffect } from 'react';
import { View, Pressable, Image, ActivityIndicator, Alert } from 'react-native';
import { Play, Clock, Calendar, Trash2, History, AlertCircle, CheckCircle } from 'lucide-react-native';
import { useRouter, Href } from 'expo-router';
import { tw } from '@/utils/styles';
import { Text } from '@/components/common/Text';
import { meVideoHistoryService } from '@/services/index';
import type { VideoHistory } from '@core-types/api-types/videos';

interface VideoHistoryProps {
    onError?: (error: string) => void;
}

export default function VideoHistoryComponent({ onError }: VideoHistoryProps) {
    const router = useRouter();
    const [videoHistory, setVideoHistory] = useState<VideoHistory[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [deletingId, setDeletingId] = useState<number | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
    const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

    useEffect(() => {
        const fetchVideoHistory = async () => {
            try {
                setLoading(true);
                setError(null);
                const history = await meVideoHistoryService.getUserVideoHistory();
                setVideoHistory(history.data);
            } catch (err) {
                console.error('Error fetching video history:', err);
                const errorMessage = 'មានបញ្ហាក្នុងការផ្ទុកប្រវត្តិវីដេអូ។ សូមព្យាយាមម្តងទៀត។';
                setError(errorMessage);
                onError?.(errorMessage);
            } finally {
                setLoading(false);
            }
        };

        fetchVideoHistory();
    }, [onError]);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('km-KH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // const handleDeleteHistory = async (historyId: number) => {
    //     Alert.alert(
    //         'លុបប្រវត្តិ',
    //         'តើអ្នកប្រាកដជាចង់លុបវីដេអូនេះចេញពីប្រវត្តិមែនទេ?',
    //         [
    //             { text: 'បោះបង់', style: 'cancel' },
    //             {
    //                 text: 'លុប',
    //                 style: 'destructive',
    //                 onPress: async () => {
    //                     try {
    //                         setDeletingId(historyId);
    //                         // await meVideoHistoryService.deleteVideoFromHistory(historyId.toString());
    //                         setVideoHistory(prev => prev.filter(item => item.id !== historyId));
    //                         setSuccessMessage('លុបចេញពីប្រវត្តិបានជោគជ័យ');
    //                         setTimeout(() => setSuccessMessage(null), 3000);
    //                     } catch (err) {
    //                         console.error('Error deleting history item:', err);
    //                         const errorMessage = 'មានបញ្ហាក្នុងការលុបវីដេអូចេញពីប្រវត្តិ';
    //                         setError(errorMessage);
    //                         onError?.(errorMessage);
    //                     } finally {
    //                         setDeletingId(null);
    //                     }
    //                 }
    //             }
    //         ]
    //     );
    // };

    // const handleBulkDelete = async () => {
    //     if (selectedItems.size === 0) return;

    //     Alert.alert(
    //         'លុបប្រវត្តិ',
    //         `តើអ្នកប្រាកដជាចង់លុបវីដេអូ ${selectedItems.size} ចេញពីប្រវត្តិមែនទេ?`,
    //         [
    //             { text: 'បោះបង់', style: 'cancel' },
    //             {
    //                 text: 'លុប',
    //                 style: 'destructive',
    //                 onPress: async () => {
    //                     try {
    //                         const deletePromises = Array.from(selectedItems).map(id =>
    //                             meVideoHistoryService.deleteVideoFromHistory(id.toString())
    //                         );
    //                         await Promise.all(deletePromises);
    //                         setVideoHistory(prev => prev.filter(item => !selectedItems.has(item.id)));
    //                         setSelectedItems(new Set());
    //                         setSuccessMessage(`លុបវីដេអូ ${selectedItems.size} ចេញពីប្រវត្តិបានជោគជ័យ`);
    //                         setTimeout(() => setSuccessMessage(null), 3000);
    //                     } catch (err) {
    //                         console.error('Error bulk deleting history items:', err);
    //                         const errorMessage = 'មានបញ្ហាក្នុងការលុបវីដេអូចេញពីប្រវត្តិ';
    //                         setError(errorMessage);
    //                         onError?.(errorMessage);
    //                     }
    //                 }
    //             }
    //         ]
    //     );
    // };

    const handleSelectItem = (id: number) => {
        const newSelected = new Set(selectedItems);
        if (newSelected.has(id)) {
            newSelected.delete(id);
        } else {
            newSelected.add(id);
        }
        setSelectedItems(newSelected);
    };

    const handleSelectAll = () => {
        if (selectedItems.size === videoHistory.length) {
            setSelectedItems(new Set());
        } else {
            setSelectedItems(new Set(videoHistory.map(item => item.id)));
        }
    };

    if (loading) {
        return (
            <View style={tw("bg-white rounded-3xl shadow-sm p-6")}>
                <View style={tw("gap-4")}>
                    {[...Array(3)].map((_, i) => (
                        <View key={i} style={tw("flex-row items-center gap-4 p-4 border border-gray-200 rounded-3xl")}>
                            <View style={tw("w-24 h-16 bg-gray-200 rounded-3xl")} />
                            <View style={tw("flex-1")}>
                                <View style={tw("h-4 bg-gray-200 rounded w-3/4 mb-2")} />
                                <View style={tw("h-3 bg-gray-200 rounded w-1/2")} />
                            </View>
                            <View style={tw("w-8 h-8 bg-gray-200 rounded")} />
                        </View>
                    ))}
                </View>
            </View>
        );
    }

    if (error) {
        return (
            <View style={tw("bg-white rounded-3xl shadow-sm p-6")}>
                <View style={tw("items-center py-12")}>
                    <View style={tw("w-16 h-16 rounded-3xl bg-red-100 items-center justify-center mb-4")}>
                        <AlertCircle size={32} color="#EF4444" />
                    </View>
                    <Text style={tw("text-xl font-kh-semibold text-gray-900 mb-2")}>
                        មានបញ្ហាក្នុងការផ្ទុក
                    </Text>
                    <Text style={tw("text-gray-600 mb-6 text-center")}>
                        {error}
                    </Text>
                    <Pressable
                        onPress={() => {
                            // Reload by refetching
                            const fetchVideoHistory = async () => {
                                try {
                                    setLoading(true);
                                    setError(null);
                                    const history = await meVideoHistoryService.getUserVideoHistory();
                                    setVideoHistory(history.data);
                                } catch (err) {
                                    console.error('Error fetching video history:', err);
                                } finally {
                                    setLoading(false);
                                }
                            };
                            fetchVideoHistory();
                        }}
                        style={tw("px-6 py-3 bg-indigo-600 rounded-3xl")}
                    >
                        <Text style={tw("text-white font-kh-medium")}>
                            ព្យាយាមម្តងទៀត
                        </Text>
                    </Pressable>
                </View>
            </View>
        );
    }

    return (
        <View style={tw("bg-white rounded-3xl shadow-sm border border-gray-200")}>
            {videoHistory.length === 0 ? (
                <View style={tw("p-12 items-center")}>
                    <View style={tw("w-16 h-16 rounded-3xl bg-gray-100 items-center justify-center mb-4")}>
                        <History size={32} color="#9CA3AF" />
                    </View>
                    <Text style={tw("text-lg font-kh-medium text-gray-900 mb-2")}>
                        គ្មានប្រវត្តិវីដេអូ
                    </Text>
                    <Text style={tw("text-gray-500 mb-6 text-center")}>
                        អ្នកមិនទាន់មានប្រវត្តិវីដេអូណាមួយនៅឡើយទេ។
                    </Text>
                    <Pressable
                        onPress={() => router.push('/videos' as Href)}
                        style={tw("flex-row items-center gap-2 px-6 py-3 bg-indigo-600 rounded-3xl")}
                    >
                        <Play size={16} color="white" />
                        <Text style={tw("text-white font-kh-medium")}>
                            មើលវីដេអូ
                        </Text>
                    </Pressable>
                </View>
            ) : (
                <View style={tw("p-6")}>
                    {/* Success Message */}
                    {successMessage && (
                        <View style={tw("mb-6")}>
                            <View style={tw("bg-green-50 border border-green-200 rounded-3xl p-4")}>
                                <View style={tw("flex-row items-center")}>
                                    <CheckCircle size={20} color="#10B981" />
                                    <Text style={tw("text-sm text-green-800 ml-3")}>
                                        {successMessage}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )}

                    {/* Error Message */}
                    {error && (
                        <View style={tw("mb-6")}>
                            <View style={tw("bg-red-50 border border-red-200 rounded-3xl p-4")}>
                                <View style={tw("flex-row items-center")}>
                                    <AlertCircle size={20} color="#EF4444" />
                                    <Text style={tw("text-sm text-red-800 ml-3")}>
                                        {error}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    )}

                    {/* Header with Actions */}
                    <View style={tw("mb-6 flex-row items-center justify-between")}>
                        <View style={tw("flex-row items-center gap-4")}>
                            <Text style={tw("text-lg font-kh-semibold text-gray-900")}>
                                វីដេអូដែលបានមើល ({videoHistory.length})
                            </Text>
                            {videoHistory.length > 0 && (
                                <Pressable
                                    onPress={handleSelectAll}
                                    style={tw("flex-row items-center gap-2")}
                                >
                                    <View style={tw(`w-4 h-4 rounded border-2 ${selectedItems.size === videoHistory.length ? 'bg-indigo-600 border-indigo-600' : 'border-gray-300'}`)}>
                                        {selectedItems.size === videoHistory.length && (
                                            <Text style={tw("text-white text-xs")}>✓</Text>
                                        )}
                                    </View>
                                    <Text style={tw("text-sm text-gray-600")}>
                                        ជ្រើសរើសទាំងអស់
                                    </Text>
                                </Pressable>
                            )}
                        </View>

                        {selectedItems.size > 0 && (
                            <Pressable
                                // onPress={handleBulkDelete}
                                style={tw("flex-row items-center gap-2 px-4 py-2 bg-red-600 rounded-3xl")}
                            >
                                <Trash2 size={16} color="white" />
                                <Text style={tw("text-white font-kh-medium text-sm")}>
                                    លុប {selectedItems.size} វីដេអូ
                                </Text>
                            </Pressable>
                        )}
                    </View>

                    <View style={tw("gap-3")}>
                        {videoHistory.map((item) => (
                            <View
                                key={item.id}
                                style={tw(
                                    `flex-row items-center gap-4 p-4 border rounded-3xl ${selectedItems.has(item.id)
                                        ? 'border-indigo-300 bg-indigo-50'
                                        : 'border-gray-200'
                                    }`
                                )}
                            >
                                {/* Selection Checkbox */}
                                <Pressable
                                    onPress={() => handleSelectItem(item.id)}
                                    style={tw(`w-4 h-4 rounded border-2 ${selectedItems.has(item.id) ? 'bg-indigo-600 border-indigo-600' : 'border-gray-300'}`)}
                                >
                                    {selectedItems.has(item.id) && (
                                        <Text style={tw("text-white text-xs")}>✓</Text>
                                    )}
                                </Pressable>

                                {/* Thumbnail */}
                                <Pressable
                                    onPress={() => router.push(`/videos/${item.id}` as Href)}
                                    style={tw("relative")}
                                >
                                    <View style={tw("relative w-24 h-16 rounded-3xl overflow-hidden")}>
                                        {!imageErrors[item.id] ? (
                                            <Image
                                                source={{ uri: item.thumbnailUrl }}
                                                style={tw("w-full h-full")}
                                                resizeMode="cover"
                                                onError={() => setImageErrors(prev => ({ ...prev, [item.id]: true }))}
                                            />
                                        ) : (
                                            <View style={tw("w-full h-full bg-gray-200 items-center justify-center")}>
                                                <Text style={tw("text-gray-400 text-xs")}>No Image</Text>
                                            </View>
                                        )}
                                        <View style={tw("absolute inset-0 items-center justify-center bg-black/20")}>
                                            <Play size={20} color="white" />
                                        </View>
                                    </View>
                                </Pressable>

                                {/* Video Info */}
                                <Pressable
                                    onPress={() => router.push(`/videos/${item.id}` as Href)}
                                    style={tw("flex-1")}
                                >
                                    <Text style={tw("font-kh-medium text-gray-900 mb-1")} numberOfLines={1}>
                                        {item.title}
                                    </Text>
                                    <View style={tw("flex-row items-center gap-4")}>
                                        <View style={tw("flex-row items-center gap-1")}>
                                            <Calendar size={14} color="#6B7280" />
                                            <Text style={tw("text-sm text-gray-500")}>
                                                មើល: {formatDate(item.createdAt)}
                                            </Text>
                                        </View>
                                        <View style={tw("flex-row items-center gap-1")}>
                                            <Clock size={14} color="#6B7280" />
                                            <Text style={tw("text-sm text-gray-500")}>
                                                ចុងក្រោយ: {formatDate(item.updatedAt)}
                                            </Text>
                                        </View>
                                    </View>
                                </Pressable>

                                {/* Actions */}
                                <Pressable
                                    // onPress={() => handleDeleteHistory(item.id)}
                                    disabled={deletingId === item.id}
                                    style={tw(`p-2 rounded-3xl ${deletingId === item.id ? 'opacity-50' : ''}`)}
                                >
                                    {deletingId === item.id ? (
                                        <ActivityIndicator size="small" color="#EF4444" />
                                    ) : (
                                        <Trash2 size={18} color="#EF4444" />
                                    )}
                                </Pressable>
                            </View>
                        ))}
                    </View>
                </View>
            )}
        </View>
    );
}
