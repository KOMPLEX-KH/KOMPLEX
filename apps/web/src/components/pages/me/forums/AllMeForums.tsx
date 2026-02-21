'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ContentError from '@/components/common/ContentError';
import { Plus } from 'lucide-react';
import { ForumPost } from '@core-types/content/forums';
import { meForumService } from '@/services/index';
import ForumCard from '@/components/pages/me/forums/ForumCard';
import MeSkeleton from '@/components/pages/me/MeSkeleton';
import { useAuth } from '@hooks/useAuth';

export default function AllMeForums() {
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

    // Show loading while checking auth or fetching data
    if (authLoading || isLoading) {
        return <MeSkeleton />;
    }

    // Don't render anything if not authenticated (will redirect)
    if (!user) {
        return null;
    }

    return (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                    <h2 className="text-lg font-semibold text-gray-900">អត្ថបទវេទិកា</h2>
                    <Link
                        href="/me/create-forum"
                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors"
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
    );
} 