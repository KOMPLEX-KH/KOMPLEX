'use client'

import { useState } from 'react';
import { ThumbsUp, MessageCircle, Send } from 'lucide-react';
import Link from 'next/link';
import { ForumComment, ForumReply } from '@core-types/api-types/forums';
import { getTimeAgo } from '@core-utils/formater';
import ReplyComponent from './Reply';
import { VideoComment, VideoReply } from '@core-types/api-types/videos';
import { meForumCommentService, meVideoCommentService, meForumReplyService, meVideoReplyService, feedVideoReplyService, feedForumReplyService } from '@/services/index';
import { useAuth } from '@hooks/useAuth';

interface CommentComponentProps {
    comment: ForumComment | VideoComment;
    commentType: 'forum' | 'video';
    isReadOnly?: boolean;
}

export default function CommentComponent({
    comment,
    commentType,
    isReadOnly = false,
}: CommentComponentProps) {
    const { user, openLoginModal } = useAuth();

    const [commentUpvoted, setCommentUpvoted] = useState(comment.isLiked || false);
    const [likeCount, setLikeCount] = useState('likeCount' in comment ? comment.likeCount : 0);
    const [isReplying, setIsReplying] = useState(false);
    const [replyText, setReplyText] = useState('');
    const [isLiking, setIsLiking] = useState(false);
    const [replies, setReplies] = useState<ForumReply[] | VideoReply[]>([]);
    const [isLoadingReplies, setIsLoadingReplies] = useState(false);
    const [isShowingReplies, setIsShowingReplies] = useState(false);
    const [repliesError, setRepliesError] = useState<string | null>(null);

    // Fetch replies for this comment
    const fetchReplies = async () => {
        if (replies.length > 0) {
            // Replies already loaded, just toggle visibility
            setIsShowingReplies(!isShowingReplies);
            return;
        }

        try {
            setIsLoadingReplies(true);
            setRepliesError(null);

            let fetchedReplies: ForumReply[] | VideoReply[] = [];
            if (commentType === 'video') {
                const response = await feedVideoReplyService.getVideoReplies(comment.id);
                // if (response.success) {
                //     fetchedReplies = response.data as VideoReply[];
                // } else {
                //     setRepliesError('មានបញ្ហាក្នុងការទាញយកការឆ្លើយតប។ សូមព្យាយាមម្តងទៀត។');
                // }
            } else {
                const response = await feedForumReplyService.getForumReplies(comment.id);
                if (response.success) {
                    fetchedReplies = response.data as ForumReply[];
                } else {
                    setRepliesError('មានបញ្ហាក្នុងការទាញយកការឆ្លើយតប។ សូមព្យាយាមម្តងទៀត។');
                }
            }

            setReplies(fetchedReplies);
            setIsShowingReplies(true);
        } catch (error) {
            console.error('Error fetching replies:', error);
            setRepliesError('មានបញ្ហាក្នុងការទាញយកការឆ្លើយតប។ សូមព្យាយាមម្តងទៀត។');
        } finally {
            setIsLoadingReplies(false);
        }
    };

    // Handle comment like/unlike
    const handleCommentLike = async () => {
        if (!user) {
            openLoginModal();
            return;
        }
        if (isLiking) return; // Prevent multiple clicks

        setIsLiking(true);
        const wasLiked = commentUpvoted;

        // Optimistically update UI
        setCommentUpvoted(!wasLiked);
        setLikeCount((prev: number) => wasLiked ? prev - 1 : prev + 1);

        try {
            if (commentType === 'forum') {
                await meForumCommentService.toggleForumCommentLike(comment.id, wasLiked);
            } else {
                await meVideoCommentService.toggleVideoCommentLike(comment.id, wasLiked);
            }
        } catch (error) {
            console.error('Error toggling comment like:', error);
            // Revert optimistic update on error
            setCommentUpvoted(wasLiked);
            setLikeCount((prev: number) => wasLiked ? prev + 1 : prev - 1);
        } finally {
            setIsLiking(false);
        }
    };

    const handleSubmitReply = async (replyToId: number, description: string) => {
        try {
            if (!user) {
                openLoginModal();
                return;
            }
            if (commentType === 'forum') {
                await meForumReplyService.createForumReply(replyToId, description);
            } else {
                await meVideoReplyService.createVideoReply(replyToId, description);
            }

            // Refresh replies after posting
            await fetchReplies();
            setReplyText('');
            setIsReplying(false);
        } catch (error) {
            console.error('Error submitting reply:', error);
        }
    };

    const handleSubmitDirectReply = () => {
        if (!user) {
            openLoginModal();
            return;
        }
        if (replyText.trim()) {
            handleSubmitReply(comment.id, replyText.trim());
        }
    };

    return (
        <div className="mb-4">
            <div className="flex gap-3">
                <Link href={`/users/${comment.userId}`} className="flex items-start gap-3 hover:opacity-80 transition-opacity">
                    {comment.profileImage ? (
                        <img
                            src={comment.profileImage}
                            alt={comment.username}
                            className="w-8 h-8 rounded-full object-cover border-2 border-indigo-500"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                        />
                    ) : null}
                    <div className={`w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold text-sm ${comment.profileImage ? 'hidden' : ''}`}>
                        {comment.username.charAt(0)}
                    </div>
                </Link>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <Link href={`/users/${comment.userId}`} className="font-semibold text-gray-900 text-sm hover:underline transition-colors">
                            {comment.username}
                        </Link>
                        <span className="text-gray-500 text-xs">{getTimeAgo(comment.createdAt)}</span>
                    </div>
                    <div className="text-gray-700 text-sm leading-relaxed mb-2">{comment.description}</div>
                    <div className="flex items-center gap-4">
                        {!isReadOnly ? (
                            <>
                                <button
                                    onClick={handleCommentLike}
                                    disabled={isLiking}
                                    className={`flex items-center gap-1 text-xs font-medium transition-all duration-200 py-1 px-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed ${commentUpvoted ? 'text-indigo-600' : 'text-gray-500'
                                        }`}
                                >
                                    <ThumbsUp className={`w-3 h-3 ${commentUpvoted ? 'fill-indigo-600' : ''}`} />
                                    <span>{typeof likeCount === 'number' ? likeCount : 0}</span>
                                </button>
                                <button
                                    onClick={() => setIsReplying(!isReplying)}
                                    className="text-xs text-gray-500 hover:text-indigo-600 transition-colors duration-200 rounded-full"
                                >
                                    ឆ្លើយតប
                                </button>
                            </>
                        ) : (
                            <div className="flex items-center gap-1 text-xs text-gray-500">
                                <ThumbsUp className="w-3 h-3" />
                                <span>{typeof likeCount === 'number' ? likeCount : 0}</span>
                            </div>
                        )}
                        <button
                            onClick={fetchReplies}
                            disabled={isLoadingReplies}
                            className="flex items-center gap-1 text-xs text-gray-500 hover:text-indigo-600 transition-colors duration-200 disabled:opacity-50 rounded-full"
                        >
                            <MessageCircle className="w-3 h-3" />
                            {isLoadingReplies ? 'កំពុងដំណើរការ...' :
                                isShowingReplies ? 'លាក់ការឆ្លើយតប' : 'បង្ហាញការឆ្លើយតប'}
                        </button>
                    </div>

                    {/* Reply Input */}
                    {!isReadOnly && isReplying && (
                        <div className="mt-3 flex gap-2">
                            <div className="flex-1">
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        value={replyText}
                                        onChange={(e) => setReplyText(e.target.value)}
                                        placeholder="សរសេរការឆ្លើយតប..."
                                        className="flex-1 px-3 py-3 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-indigo-500"
                                        onKeyDown={(e) => {
                                            if (e.key === 'Enter') {
                                                handleSubmitDirectReply();
                                            }
                                        }}
                                    />
                                    <button
                                        onClick={handleSubmitDirectReply}
                                        disabled={!replyText.trim()}
                                        className="p-3  text-sm text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        <Send></Send>
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Replies */}
            {isShowingReplies && (
                <div className="mt-3">
                    {repliesError ? (
                        <div className="text-red-500 text-sm p-2 bg-red-50 rounded">
                            {repliesError}
                        </div>
                    ) : replies.length > 0 ? (
                        replies.map((reply, index) => (
                            <ReplyComponent
                                key={`${commentType}-reply-${reply.id || `temp-${index}`}-${reply.createdAt || Date.now()}`}
                                reply={reply as ForumReply | VideoReply}
                                commentId={comment.id}
                                onSubmitReply={handleSubmitReply}
                                replyType={commentType}
                                isReadOnly={isReadOnly}
                            />
                        ))
                    ) : (
                        <div className="text-gray-400 text-sm p-2 ml-10">
                            មិនមានការឆ្លើយតប
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
