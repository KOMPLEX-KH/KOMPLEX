'use client';

import { Edit, Trash, Eye } from 'lucide-react';
import ForumCard from '@/components/pages/me/forums/ForumCard';
import Comments from '@/components/common/comments/Comments';
import EditForum from '@/components/pages/me/forums/EditForum';
import ContentError from '@/components/common/ContentError';
import DeleteConfirm from '@/components/common/DeleteConfirm';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ForumPost } from '@core-types/api-types/forums';
import { feedForumService, meForumService } from '@/services/index';
import { useAuth } from '@hooks/useAuth';
import { BackButton } from '@/components/common/BackButton';

export default function MyForumDetail() {
    const { user, loading: authLoading } = useAuth();
    const params = useParams();
    const router = useRouter();
    const id = params.id as string;
    const [isCommentInputActive, setIsCommentInputActive] = useState(false);
    const [post, setPost] = useState<ForumPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    // Redirect to auth if not authenticated
    useEffect(() => {
        if (!authLoading && !user) {
            router.push('/auth');
        }
    }, [user, authLoading, router]);

    useEffect(() => {
        if (id && user) {
            const fetchForumPost = async () => {
                try {
                    setLoading(true);
                    setError(null);
                    const forumPost = await feedForumService.getForumById(id);
                    setPost(forumPost.data);
                } catch (err) {
                    console.error('Error fetching forum post:', err);
                    setError('មានបញ្ហាកើតឡើងពេលទាញយកទិន្នន័យ។ សូមព្យាយាមម្តងទៀត។');
                } finally {
                    setLoading(false);
                }
            };

            fetchForumPost();
        }
    }, [id, user]);

    const handleCommentClose = () => {
        setIsCommentInputActive(false);
    };


    const handleDeleteClick = () => {
        setShowDeleteModal(true);
    };

    const handleDeleteConfirm = async () => {
        try {
            await meForumService.deleteForum(id);
            router.push('/me?tab=forums');
        } catch (error) {
            console.error('Error deleting forum:', error);
            alert('មានបញ្ហាកើតឡើងពេលលុបវេទិកា សូមព្យាយាមម្តងទៀត');
        }
    };

    const handleCancel = () => {
        setIsEditMode(false);
    };

    // Show loading while checking auth or fetching data
    if (authLoading || loading) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 pt-32 lg:pt-20">
                <div className="max-w-4xl mx-auto p-5">
                    {/* Loading Skeleton */}
                    <div className="mb-6 relative">
                        <div className="w-32 h-6 bg-gray-200 dark:bg-zinc-800 rounded animate-pulse"></div>
                    </div>
                    <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 shadow-lg shadow-indigo-500/10 border border-indigo-500/10 animate-pulse">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-zinc-800"></div>
                            <div className="flex-1">
                                <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-24 mb-2"></div>
                                <div className="h-3 bg-gray-200 dark:bg-zinc-800 rounded w-16"></div>
                            </div>
                        </div>
                        <div className="h-6 bg-gray-200 dark:bg-zinc-800 rounded w-3/4 mb-3"></div>
                        <div className="space-y-2">
                            <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 dark:bg-zinc-800 rounded w-2/3"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    // Don't render anything if not authenticated (will redirect)
    if (!user) {
        return null;
    }

    // Handle all error states at the top level
    if (error || !post) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 pt-32 lg:pt-20">
                <div className="max-w-4xl mx-auto p-5">
                    <BackButton href='/me?tab=forums' />
                    <div className="mb-6 relative">
                    </div>
                    <ContentError
                        type="error"
                        message={error || 'មានបញ្ហាក្នុងការទាញយកអត្ថបទវេទិកា'}
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 pt-32 lg:pt-20">
            <div className="max-w-6xl mx-auto p-5">
                {/* Header with Back Button and Actions */}
                <BackButton href='/me?tab=forums' />
                <div className="mb-6 flex items-center justify-end">
                    {!isEditMode && (
                        <div className='flex gap-2 items-center'>
                            <button
                                onClick={handleDeleteClick}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 dark:bg-red-900 text-white dark:text-white rounded-full hover:bg-red-700 dark:hover:bg-red-800 transition-colors font-medium"
                            >
                                <Trash className="w-4 h-4" />
                                លុប
                            </button>
                            <button
                                onClick={() => setIsEditMode(true)}
                                className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 dark:bg-indigo-900 text-white dark:text-white rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-800 transition-colors font-medium"
                            >
                                <Edit className="w-4 h-4" />
                                កែប្រែ
                            </button>
                        </div>
                    )}
                    {isEditMode && (
                        <button
                            onClick={handleCancel}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gray-600 dark:bg-zinc-800 text-white dark:text-white rounded-full hover:bg-gray-700 dark:hover:bg-gray-800 transition-colors font-medium"
                        >
                            <Eye className="w-4 h-4" />
                            មើល
                        </button>
                    )}
                </div>

                {!isEditMode ? (
                    <>
                        {/* Main Post */}
                        <div className="mb-6">
                            <ForumCard post={post} isFromMePage={false} />
                        </div>

                        {/* Comments Section */}
                        <Comments
                            type='forum'
                            parentId={post.id}
                            focusInput={isCommentInputActive}
                            isReadOnly={true}
                            onClose={handleCommentClose}
                        />
                    </>
                ) : (
                    /* Edit Mode */
                    <EditForum
                        forum={post}
                        onCancel={handleCancel}
                    />
                )}
            </div>

            {/* Delete Confirmation Modal */}
            <DeleteConfirm
                isOpen={showDeleteModal}
                onClose={() => setShowDeleteModal(false)}
                onConfirm={handleDeleteConfirm}
                title="លុបវេទិកា"
                message="តើអ្នកពិតជាចង់លុបវេទិកានេះមែនទេ? សកម្មភាពនេះមិនអាចបញ្ច្រាស់បានទេ។"
            />
        </div>
    );
}