'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Sidebar from '@/components/pages/me/Sidebar';
import ContentError from '@/components/common/ContentError';
import {
    MessageSquare,
    Plus,
    Eye,
    Heart,
    MessageCircle,
} from 'lucide-react';
import { ForumPost } from '@core-types/api-types/forums';
import { meForumService } from '@/services/index';
import ForumCard from '@/components/pages/me/forums/ForumCard';
import MeSkeleton from '@/components/pages/me/MeSkeleton';
import { useAuth } from '@hooks/useAuth';

export default function MyForums() {
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();
    const [forumPosts, setForumPosts] = useState<ForumPost[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Redirect to auth if not authenticated
    useEffect(() => {
        if (!authLoading && !user) {
            router.push('/auth');
        }
    }, [user, authLoading, router]);

    useEffect(() => {
        if (user) {
            const fetchForums = async () => {
                try {
                    setIsLoading(true);
                    setError(null);
                    const forums = await meForumService.getUserForums();
                    setForumPosts(forums.data);
                } catch (error) {
                    console.error('Error fetching forums:', error);
                    setError('មានបញ្ហាកើតឡើងពេលទាញយកទិន្នន័យ។ សូមព្យាយាមម្តងទៀត។');
                } finally {
                    setIsLoading(false);
                }
            }
            fetchForums();
        }
    }, [user]);

    let stats = {
        total: 0,
        totalViews: 0,
        // totalComments: 0,
        totalLikes: 0,
    };

    if (forumPosts) {
        stats = {
            total: forumPosts.length,
            totalViews: forumPosts.reduce((acc, p) => acc + p.viewCount, 0),
            // totalComments: forumPosts.reduce((acc, p) => acc + p.commentCount, 0),
            totalLikes: forumPosts.reduce((acc, p) => acc + p.likeCount, 0),
        };
    } else {
        stats = {
            total: 0,
            totalViews: 0,
            // totalComments: 0,
            totalLikes: 0,
        };
    }

    // Show loading while checking auth or fetching data
    if (authLoading || isLoading) {
        return (
            <div className='flex min-h-screen bg-gray-50 dark:bg-zinc-900'>
                <Sidebar />
                <div className='flex-1 '>
                    <MeSkeleton />
                </div>
            </div>
        );
    }

    // Don't render anything if not authenticated (will redirect)
    if (!user) {
        return null;
    }


    return (
        <div className="flex min-h-screen bg-gray-50 dark:bg-zinc-900">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 lg:ml-64 pt-32 lg:pt-16">
                <div className="p-6">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">វេទិការបស់ខ្ញុំ</h1>
                        <p className="text-gray-600">គ្រប់គ្រងអត្ថបទនិងការសន្ទនារបស់អ្នក</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-gray-200 dark:border-zinc-800">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-zinc-400">អត្ថបទសរុប</p>
                                    <p className="text-2xl font-bold text-gray-900 dark:text-zinc-400">{stats.total}</p>
                                </div>
                                <div className="p-3 bg-indigo-100 rounded-full">
                                    <MessageSquare className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-gray-200 dark:border-zinc-800">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-zinc-400">ទស្សនាសរុប</p>
                                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.totalViews.toLocaleString()}</p>
                                </div>
                                <div className="p-3 bg-blue-100 rounded-full">
                                    <Eye className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                </div>
                            </div>
                        </div>

                        {/* <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-gray-200 dark:border-zinc-800">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-zinc-400">ចម្លើយសរុប</p>
                                    <p className="text-2xl font-bold text-green-600">{stats.totalComments}</p>
                                </div>
                                <div className="p-3 bg-green-100 rounded-full">
                                    <MessageCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                                </div>
                            </div>
                        </div> */}

                        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 shadow-sm border border-gray-200 dark:border-zinc-800">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600 dark:text-zinc-400">ចូលចិត្តសរុប</p>
                                    <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stats.totalLikes}</p>
                                </div>
                                <div className="p-3 bg-indigo-100 rounded-full">
                                    <Heart className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Filters
                    <div className="mb-6">
                        <div className="flex gap-2">
                            {['all', 'active', 'closed', 'pinned'].map((filter) => (
                                <button
                                    key={filter}
                                    onClick={() => setSelectedFilter(filter)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedFilter === filter
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                                        }`}
                                >
                                    {filter === 'all' ? 'ទាំងអស់' :
                                        filter === 'active' ? 'សកម្ម' :
                                            filter === 'closed' ? 'បានបិទ' : 'បានចំណាត់ថ្នាក់'}
                                </button>
                            ))}
                        </div>
                    </div> */}

                    {/* Forum Posts List */}
                    <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-gray-200 dark:border-zinc-800">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-900 dark:text-zinc-400">អត្ថបទវេទិកា</h2>
                                <Link
                                    href="/me/create-forum"
                                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white dark:text-white rounded-full font-medium transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                    បង្កើតអត្ថបទថ្មី
                                </Link>
                            </div>
                        </div>
                        <div className="p-6">
                            {error ? (
                                <ContentError type="error" message={error} />
                            ) : !forumPosts || forumPosts.length === 0 ? (
                                <ContentError type="no-results" message="អ្នកមិនទាន់មានអត្ថបទវេទិកាណាមួយទេ" />
                            ) : (
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                                    {forumPosts.map((post) => (
                                        <ForumCard key={post.id} post={post} isFromMePage={true} />
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 