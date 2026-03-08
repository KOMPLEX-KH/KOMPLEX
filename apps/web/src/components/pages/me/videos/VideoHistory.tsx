'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Play, Clock, Calendar, Trash2, History, AlertCircle, CheckCircle } from 'lucide-react';
import { meVideoHistoryService } from '@/services/index';
import type { VideoHistory } from '@core-types/api-types/videos';

interface VideoHistoryProps {
    onError?: (error: string) => void;
}

export default function VideoHistoryComponent({ onError }: VideoHistoryProps) {
    const [videoHistory, setVideoHistory] = useState<VideoHistory[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [deletingId, setDeletingId] = useState<number | null>(null);
    const [successMessage, setSuccessMessage] = useState<string | null>(null);
    const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

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

    const handleDeleteHistory = async (historyId: number) => {
        if (!confirm('តើអ្នកប្រាកដជាចង់លុបវីដេអូនេះចេញពីប្រវត្តិមែនទេ?')) {
            return;
        }

        try {
            setDeletingId(historyId);
            // await meVideoHistoryService.deleteVideoFromHistory(historyId.toString());
            setVideoHistory(prev => prev.filter(item => item.id !== historyId));
            setSuccessMessage('លុបចេញពីប្រវត្តិបានជោគជ័យ');
            setTimeout(() => setSuccessMessage(null), 3000);
        } catch (err) {
            console.error('Error deleting history item:', err);
            const errorMessage = 'មានបញ្ហាក្នុងការលុបវីដេអូចេញពីប្រវត្តិ';
            setError(errorMessage);
            onError?.(errorMessage);
        } finally {
            setDeletingId(null);
        }
    };

    // const handleBulkDelete = async () => {
    //     if (selectedItems.size === 0) return;

    //     if (!confirm(`តើអ្នកប្រាកដជាចង់លុបវីដេអូ ${selectedItems.size} ចេញពីប្រវត្តិមែនទេ?`)) {
    //         return;
    //     }

    //     try {
    //         const deletePromises = Array.from(selectedItems).map(id =>
    //             meVideoHistoryService.deleteVideoFromHistory(id.toString())
    //         );
    //         await Promise.all(deletePromises);
    //         setVideoHistory(prev => prev.filter(item => !selectedItems.has(item.id)));
    //         setSelectedItems(new Set());
    //         setSuccessMessage(`លុបវីដេអូ ${selectedItems.size} ចេញពីប្រវត្តិបានជោគជ័យ`);
    //         setTimeout(() => setSuccessMessage(null), 3000);
    //     } catch (err) {
    //         console.error('Error bulk deleting history items:', err);
    //         const errorMessage = 'មានបញ្ហាក្នុងការលុបវីដេអូចេញពីប្រវត្តិ';
    //         setError(errorMessage);
    //         onError?.(errorMessage);
    //     }
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
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="space-y-4">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex items-center gap-4 p-4 border border-gray-200 rounded-xl animate-pulse">
                            <div className="w-24 h-16 bg-gray-200 rounded-3xl"></div>
                            <div className="flex-1">
                                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                            </div>
                            <div className="w-8 h-8 bg-gray-200 rounded"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="bg-white rounded-2xl shadow-sm p-6">
                <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-3xl bg-red-100 flex items-center justify-center mx-auto mb-4">
                        <AlertCircle className="w-8 h-8 text-red-600" />
                    </div>
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">មានបញ្ហាក្នុងការផ្ទុក</h2>
                    <p className="text-gray-600 mb-6">{error}</p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-3 bg-indigo-600 text-white rounded-3xl hover:bg-indigo-700 transition-colors font-medium"
                    >
                        ព្យាយាមម្តងទៀត
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
            {videoHistory.length === 0 ? (
                <div className="p-12 text-center">
                    <div className="w-16 h-16 rounded-3xl bg-gray-100 flex items-center justify-center mx-auto mb-4">
                        <History className="w-8 h-8 text-gray-400" />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">គ្មានប្រវត្តិវីដេអូ</h3>
                    <p className="text-gray-500 mb-6">អ្នកមិនទាន់មានប្រវត្តិវីដេអូណាមួយនៅឡើយទេ។</p>
                    <Link
                        href="/video"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-3xl hover:bg-indigo-700 transition-colors font-medium"
                    >
                        <Play size={16} />
                        មើលវីដេអូ
                    </Link>
                </div>
            ) : (
                <div className="p-6">
                    {/* Success Message */}
                    {successMessage && (
                        <div className="mb-6">
                            <div className="bg-green-50 border border-green-200 rounded-3xl p-4">
                                <div className="flex items-center">
                                    <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                                    <p className="text-sm text-green-800">{successMessage}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6">
                            <div className="bg-red-50 border border-red-200 rounded-3xl p-4">
                                <div className="flex items-center">
                                    <AlertCircle className="h-5 w-5 text-red-400 mr-3" />
                                    <p className="text-sm text-red-800">{error}</p>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Header with Actions */}
                    <div className="mb-6 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <h3 className="text-lg font-semibold text-gray-900">
                                វីដេអូដែលបានមើល ({videoHistory.length})
                            </h3>
                            {videoHistory.length > 0 && (
                                <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
                                    <input
                                        type="checkbox"
                                        checked={selectedItems.size === videoHistory.length}
                                        onChange={handleSelectAll}
                                        className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    ជ្រើសរើសទាំងអស់
                                </label>
                            )}
                        </div>

                        {/* {selectedItems.size > 0 && (
                            <button
                                onClick={handleBulkDelete}
                                className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-3xl hover:bg-red-700 transition-colors font-medium"
                            >
                                <Trash2 size={16} />
                                លុប {selectedItems.size} វីដេអូ
                            </button>
                        )} */}
                    </div>

                    <div className="space-y-3">
                        {videoHistory.map((item) => (
                            <div
                                key={item.id}
                                className={`flex items-center gap-4 p-4 border rounded-xl transition-all duration-200 ${selectedItems.has(item.id)
                                    ? 'border-indigo-300 bg-indigo-50'
                                    : 'border-gray-200 hover:border-indigo-300 hover:shadow-sm'
                                    }`}
                            >
                                {/* Selection Checkbox */}
                                <input
                                    type="checkbox"
                                    checked={selectedItems.has(item.id)}
                                    onChange={() => handleSelectItem(item.id)}
                                    className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />

                                {/* Thumbnail */}
                                {/* <div className="relative flex-shrink-0">
                                    <Link href={`/video/${item.videoId}`}>
                                        <div className="relative w-24 h-16 rounded-3xl overflow-hidden group">
                                            <Image
                                                src={item.thumbnailUrl}
                                                alt={item.title}
                                                width={96}
                                                height={64}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                                            />
                                            <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 rounded-3xl flex items-center justify-center transition-all duration-200">
                                                <Play size={20} className="text-white" />
                                            </div>
                                        </div>
                                    </Link>
                                </div> */}

                                {/* Video Info */}
                                {/* <Link href={`/video/${item.videoId}`} className="flex-1 min-w-0 group">
                                    <h4 className="font-medium text-gray-900 mb-1 truncate group-hover:text-indigo-600 transition-colors">
                                        {item.title}
                                    </h4>
                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                        <span className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            មើល: {formatDate(item.createdAt)}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Clock size={14} />
                                            ចុងក្រោយ: {formatDate(item.updatedAt)}
                                        </span>
                                    </div>
                                </Link> */}

                                {/* Actions */}
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleDeleteHistory(item.id);
                                        }}
                                        disabled={deletingId === item.id}
                                        className="p-2 text-red-600 hover:bg-red-50 rounded-3xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                        title="លុបចេញពីប្រវត្តិ"
                                    >
                                        {deletingId === item.id ? (
                                            <div className="animate-spin rounded-3xl h-4 w-4 border-b-2 border-red-600"></div>
                                        ) : (
                                            <Trash2 size={18} />
                                        )}
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
