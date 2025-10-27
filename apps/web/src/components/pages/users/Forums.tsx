'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Eye, ThumbsUp, MessageCircle, Calendar } from 'lucide-react';
import ContentError from '@/components/common/ContentError';
import { userForumService } from '@/services/index';
import Carousel from '@/components/common/Carousel';
import MarkDownRenderer from '@/components/helper/MarkDownRenderer';


interface Forum {
    id: number;
    title: string;
    description: string;
    username: string;
    viewCount: number;
    likeCount: number;
    commentCount: number;
    createdAt: string;
    media: { url: string; type: string }[];
}

interface ForumsProps {
    userId: string;
}

export default function Forums({ userId }: ForumsProps) {
    const [forums, setForums] = useState<Forum[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserForums = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await userForumService.getUserForums(userId);
                setForums(data);
            } catch (error) {
                console.error('Error fetching user forums:', error);
                setError('មានបញ្ហាក្នុងការទាញយកព័ត៌មានរបស់អ្នកប្រើប្រាស់។ សូមព្យាយាមម្តងទៀត។');
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserForums();
    }, [userId]);

    if (isLoading) {
        return (
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">ព័ត៌មាន</h2>
                <div className="space-y-4">
                    {[...Array(3)].map((_, index) => (
                        <div key={index} className="animate-pulse">
                            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                                    <div className="flex-1">
                                        <div className="h-4 bg-gray-200 rounded w-32 mb-2"></div>
                                        <div className="h-3 bg-gray-200 rounded w-24"></div>
                                    </div>
                                </div>
                                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                                <div className="space-y-2">
                                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                                    <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">ព័ត៌មាន</h2>
                <ContentError
                    type="error"
                    message={error}
                />
            </div>
        );
    }

    if (forums.length === 0) {
        return (
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">ព័ត៌មាន</h2>
                <ContentError
                    type="no-results"
                    message="អ្នកប្រើប្រាស់នេះមិនទាន់មានព័ត៌មានទេ។"
                />
            </div>
        );
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ព័ត៌មាន ({forums.length})</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {forums.map((forum) => (
                    <Link
                        key={forum.id}
                        href={`/forums/${forum.id}`}
                        className="block group"
                    >
                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-lg hover:border-indigo-300 group-hover:-translate-y-0.5">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm">
                                    {forum.username.charAt(0)}
                                </div>
                                <div className="flex-1">
                                    <div className="font-semibold text-gray-900 text-sm mb-0.5">
                                        {forum.username}
                                    </div>
                                    <div className="text-gray-500 text-xs flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {new Date(forum.createdAt).toLocaleDateString('km-KH', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric'
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className="text-lg font-bold text-gray-900 mb-2.5 leading-relaxed group-hover:text-indigo-600 transition-colors">
                                {forum.title}
                            </div>

                            <div className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-2">
                                <MarkDownRenderer content={forum.description} />
                            </div>

                            <Carousel
                                media={forum.media.map((media) => ({
                                    url: media.url,
                                    type: media.type as 'video' | 'image'
                                }))}
                            />

                            <div className="flex items-center gap-4 mt-4">
                                <div className="flex items-center gap-1 text-gray-600 text-sm">
                                    <Eye className="w-4 h-4" />
                                    {forum.viewCount}
                                </div>
                                <div className="flex items-center gap-1 text-gray-600 text-sm">
                                    <ThumbsUp className="w-4 h-4" />
                                    {forum.likeCount}
                                </div>
                                <div className="flex items-center gap-1 text-gray-600 text-sm">
                                    <MessageCircle className="w-4 h-4" />
                                    {forum.commentCount}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
