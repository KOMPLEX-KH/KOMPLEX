'use client';

import { useState, useEffect } from 'react';
import { ForumComment } from '@core-types/content/forums';
import { VideoComment } from '@core-types/content/videos';
import CommentComponent from './Comment';
import ContentError from '@/components/common/ContentError';
import { feedVideoCommentService, meForumCommentService, meVideoCommentService, feedForumCommentService } from '@/services/index';
import { useAuth } from '@hooks/useAuth';

interface CommentProps {
    type: 'forum' | 'video';
    parentId: number;
    focusInput?: boolean;
    isReadOnly?: boolean;
    onClose?: () => void;
}

export default function Comments({ type, parentId, focusInput = false, isReadOnly = false, onClose }: CommentProps) {
    const [comments, setComments] = useState<ForumComment[] | VideoComment[]>([]);
    const [newComment, setNewComment] = useState('');
    const [isCommentActive, setIsCommentActive] = useState(focusInput);
    const [error, setError] = useState<string>('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [commentsError, setCommentsError] = useState<string | null>(null);

    const { user, openLoginModal } = useAuth();

    // Fetch comments on component mount
    useEffect(() => {
        const fetchComments = async () => {
            try {
                setIsLoading(true);
                setCommentsError(null);

                let fetchedComments: ForumComment[] | VideoComment[] = [];
                if (type === 'video') {
                    fetchedComments = await feedVideoCommentService.getVideoComments(parentId.toString());
                } else {
                    const response = await feedForumCommentService.getForumComments(parentId.toString());
                    if (response.success) {
                        fetchedComments = response.data as ForumComment[];
                    } else {
                        setCommentsError('មានបញ្ហាក្នុងការទាញយកការឆ្លើយតប។ សូមព្យាយាមម្តងទៀត។');
                    }
                }

                setComments(fetchedComments);
            } catch (error) {
                console.error('Error fetching comments:', error);
                setCommentsError('មានបញ្ហាក្នុងការទាញយកការឆ្លើយតប។ សូមព្យាយាមម្តងទៀត។');
            } finally {
                setIsLoading(false);
            }
        };

        fetchComments();
    }, [type, parentId]);

    // Sync the internal state with the focusInput prop
    useEffect(() => {
        setIsCommentActive(focusInput);
    }, [focusInput]);

    const handleSubmitComment = async () => {
        if (!user) {
            openLoginModal();
            return;
        }
        if (!newComment.trim()) {
            setError('សូមបំពេញមាតិកាការឆ្លើយតប');
            return;
        }

        setIsSubmitting(true);
        setError('');

        try {
            let newCommentData: ForumComment | VideoComment;

            if (type === 'video') {
                newCommentData = await meVideoCommentService.createVideoComment(parentId, newComment);
            } else {
                newCommentData = await meForumCommentService.createForumComment(parentId, newComment);
            }

            // Optimistically add the new comment to the list
            // Ensure the comment has required fields before adding
            const commentWithDefaults = {
                ...newCommentData,
                id: newCommentData.id || Date.now(), // Fallback ID if missing
                createdAt: newCommentData.createdAt || new Date().toISOString(),
                userId: newCommentData.userId || (user?.id || 0),
                username: newCommentData.username || (user?.username || 'Unknown'),
                profileImage: newCommentData.profileImage || '',
                isLiked: newCommentData.isLiked || false,
                media: newCommentData.media || [],
                description: newCommentData.description || newComment
            };

            setComments(prev => {
                // Check if comment already exists to prevent duplicates
                const exists = prev.some(c => c.id === commentWithDefaults.id);
                if (exists) {
                    return prev;
                }
                return [...prev, commentWithDefaults] as ForumComment[] | VideoComment[];
            });

            // Clear the comment input
            setNewComment('');
            setIsCommentActive(false);

            if (onClose) onClose();
        } catch (error) {
            console.error('Error submitting comment:', error);
            setError('មានបញ្ហាក្នុងការបោះផ្សាយការឆ្លើយតប។ សូមព្យាយាមម្តងទៀត។');
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCancel = () => {
        setNewComment('');
        setIsCommentActive(false);
        setError('');
        if (onClose) onClose();
    };

    const handleInputClick = () => {
        setIsCommentActive(true);
        setError('');
    };




    // Skeleton loader for comments
    const CommentSkeleton = () => (
        <div className="mb-4">
            <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-gray-200 animate-pulse border-2 border-indigo-500/20"></div>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <div className="w-20 h-4 bg-gray-200 rounded animate-pulse"></div>
                        <div className="w-16 h-3 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="space-y-2 mb-2">
                        <div className="w-full h-4 bg-gray-200 rounded animate-pulse"></div>
                        <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-6 bg-gray-200 rounded animate-pulse"></div>
                        <div className="w-16 h-6 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="lg:bg-white lg:rounded-3xl lg:p-6 lg:shadow-lg lg:shadow-indigo-500/10 lg:border lg:border-indigo-500/10">
            <h1 className='text-gray-900 font-bold mb-6'>ការឆ្លើយតប</h1>

            {/* Error Message */}
            {error && (
                <div className="mb-6">
                    <div className="bg-red-50 border border-red-200 rounded-full p-4">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <div className="ml-3">
                                <p className="text-sm text-red-800">{error}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Add Comment */}
            {!isReadOnly && (
                <div className="mb-6">
                    {/* Comment Input Container */}
                    <div className="relative">
                        {!isCommentActive ? (
                            // Inactive state - clickable placeholder
                            <div
                                onClick={handleInputClick}
                                className="w-full p-4 border border-gray-300 rounded-full cursor-text  "
                            >
                                <div className="flex items-center justify-between">
                                    <span className="text-gray-500 text-sm">ចូលរួមការសន្ទនា...</span>
                                </div>
                            </div>
                        ) : (
                            // Active state - textarea with buttons
                            <div className="w-full border border-gray-300 rounded-3xl overflow-hidden">
                                <div className="relative">
                                    <textarea
                                        value={newComment}
                                        onChange={(e) => setNewComment(e.target.value)}
                                        placeholder="សរសេរការឆ្លើយតបរបស់អ្នក..."
                                        className="w-full p-4 pr-20 text-sm focus:outline-none resize-none border-none placeholder-gray-400"
                                        rows={3}
                                        autoFocus
                                    />
                                    <div className="absolute bottom-3 right-3 flex items-center gap-2">
                                        <button
                                            onClick={handleCancel}
                                            className="px-3 py-1.5 text-sm bg-gray-50 rounded-full text-gray-600 hover:text-gray-800 transition-colors duration-200"
                                        >
                                            បោះបង់
                                        </button>
                                        <button
                                            onClick={handleSubmitComment}
                                            disabled={!newComment.trim() || isSubmitting}
                                            className="px-4 py-1.5 bg-indigo-600 text-white text-sm rounded-full hover:bg-indigo-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="animate-spin rounded-full h-3 w-3 border-b-2 border-white"></div>
                                                    កំពុងបោះផ្សាយ...
                                                </>
                                            ) : (
                                                <>
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                    </svg>
                                                    បោះផ្សាយ
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Comments List */}
            {isLoading ? (
                <div className="space-y-4">
                    <CommentSkeleton />
                    <CommentSkeleton />
                    <CommentSkeleton />
                </div>
            ) : commentsError ? (
                <ContentError
                    type="error"
                    message={commentsError}
                />
            ) : !comments || comments.length === 0 ? (
                <ContentError
                    type="no-results"
                    message="មិនមានការឆ្លើយតបទេ។ ជាអ្នកដំបូងដែលឆ្លើយតប!"
                />
            ) : (
                <div className="space-y-4">
                    {comments.map((comment, index) => (
                        <CommentComponent
                            key={`${type}-${comment.id || `temp-${index}`}-${comment.createdAt || Date.now()}`}
                            comment={comment}
                            commentType={type}
                            isReadOnly={isReadOnly}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
