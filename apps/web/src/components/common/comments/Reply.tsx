'use client'

import { useState } from "react";
import { Send, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import { ForumReply } from "@core-types/api-types/forums";
import { getTimeAgo } from '@core-utils/formater';
import { meForumReplyService, meVideoReplyService } from '@/services/index';
import { VideoReply } from '@core-types/api-types/videos';
import { useAuth } from "@hooks/useAuth";


interface ReplyComponentProps {
    reply: ForumReply | VideoReply;
    commentId: number; // Add parent comment ID
    onSubmitReply: (commentId: number, description: string) => void;
    replyType: 'forum' | 'video';
    isReadOnly?: boolean;
}

export default function ReplyComponent({ reply, commentId, onSubmitReply, replyType, isReadOnly = false }: ReplyComponentProps) {
    const { user, openLoginModal } = useAuth();

    const [replyUpvoted, setReplyUpvoted] = useState(reply.isLiked || false);
    const [likeCount, setLikeCount] = useState('likeCount' in reply ? reply.likeCount : 0);
    const [isReplying, setIsReplying] = useState(false);
    const [replyText, setReplyText] = useState('');
    const [isLiking, setIsLiking] = useState(false);

    // Handle reply like/unlike
    const handleReplyLike = async () => {
        if (!user) {
            openLoginModal();
            return;
        }
        if (isLiking) return; // Prevent multiple clicks

        setIsLiking(true);
        const wasLiked = replyUpvoted;

        // Optimistically update UI
        setReplyUpvoted(!wasLiked);
        setLikeCount((prev: number) => wasLiked ? prev - 1 : prev + 1);

        try {
            if (replyType === 'forum') {
                await meForumReplyService.toggleForumReplyLike(reply.id, wasLiked);
            } else {
                await meVideoReplyService.toggleVideoReplyLike(reply.id, wasLiked);
            }
        } catch (error) {
            console.error('Error toggling reply like:', error);
            // Revert optimistic update on error
            setReplyUpvoted(wasLiked);
            setLikeCount((prev: number) => wasLiked ? prev + 1 : prev - 1);
        } finally {
            setIsLiking(false);
        }
    };

    const handleSubmitReply = async () => {
        if (!user) {
            openLoginModal();
            return;
        }
        if (replyText.trim()) {
            try {
                const fullReply = `@${reply.username?.toString()} ${replyText.trim()}`;
                if (replyType === 'forum') {
                    await meForumReplyService.createForumReply(commentId, fullReply as string);
                } else {
                    await meVideoReplyService.createVideoReply(commentId, fullReply as string);
                }
                onSubmitReply(commentId, fullReply); // Use parent comment ID instead of reply.id
                setReplyText('');
                setIsReplying(false);
            } catch (error) {
                console.error('Error submitting reply:', error);
            }
        }
    };

    return (
        <div className="ml-8 mb-3">
            <div className="flex gap-3">
                <Link href={`/users/${reply.userId}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    {reply.profileImage ? (
                        <img
                            src={reply.profileImage}
                            alt={reply.username?.toString() || 'User'}
                            className="w-7 h-7 rounded-full object-cover border-2 border-indigo-500"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                        />
                    ) : null}
                    <div className={`w-7 h-7 rounded-full bg-gray-500 flex items-center justify-center text-white font-semibold text-xs ${reply.profileImage ? 'hidden' : ''}`}>
                        {reply.username?.charAt(0)}
                    </div>
                </Link>
                <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                        <Link href={`/users/${reply.userId}`} className="font-semibold text-gray-900 text-sm hover:underline transition-colors">
                            {reply.username?.toString()}
                        </Link>
                        <span className="text-gray-500 text-xs">{getTimeAgo(reply.createdAt)}</span>
                    </div>
                    <div className="text-gray-700 text-sm leading-relaxed mb-2">{reply.description}</div>
                    <div className="flex items-center gap-4">
                        {!isReadOnly ? (
                            <>
                                <button
                                    onClick={handleReplyLike}
                                    disabled={isLiking}
                                    className={`flex items-center gap-1 text-xs font-medium transition-all duration-200 py-1 px-2 rounded-full hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed ${replyUpvoted ? 'text-indigo-600' : 'text-gray-500'}`}
                                >
                                    <ThumbsUp className={`w-3 h-3 ${replyUpvoted ? 'fill-indigo-600' : ''}`} />
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
                    </div>

                    {/* Reply Input */}
                </div>
            </div>
            {!isReadOnly && isReplying && (
                <div className="mt-3 flex gap-2">
                    <div className="flex-1">
                        <div className="flex gap-2 relative">
                            <input
                                type="text"
                                value={replyText}
                                onChange={(e) => setReplyText(e.target.value)}
                                placeholder="សរសេរការឆ្លើយតប..."
                                className="flex-1 pl-20 pr-3 py-3 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-indigo-500"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter') {
                                        handleSubmitReply();
                                    }
                                }}
                            />
                            <div className="absolute left-2 top-2 bg-indigo-50  px-2 py-2 rounded-full">
                                <p className="text-black text-xs ">@{reply.username?.toString()}</p>
                            </div>
                            <button
                                onClick={handleSubmitReply}
                                disabled={!replyText.trim()}
                                className="px-3 py-1 text-sm text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <Send />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};