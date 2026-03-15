'use client';

import { ForumPost } from '@core-types/api-types/forums';
import { Media } from '@core-types/api-types/media';
import Carousel from '@/components/common/Carousel';
import { useRouter } from 'next/navigation';
import { Eye, MessageCircle, Heart, ThumbsUp } from 'lucide-react';
import Link from 'next/link';
import MarkDownRenderer from '@/components/helper/MarkDownRenderer';

interface ForumCardProps {
    post: ForumPost;
    isFromMePage: boolean;
}

export default function ForumCard({ post, isFromMePage }: ForumCardProps) {
    const router = useRouter();
    // Helper functions to format backend data
    const getTimeAgo = (dateString: string): string => {
        const date = new Date(dateString);
        const now = new Date();
        const diffMs = now.getTime() - date.getTime();
        const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
        const diffDays = Math.floor(diffHours / 24);

        if (diffDays > 0) {
            return `មុន ${diffDays} ថ្ងៃ`;
        } else if (diffHours > 0) {
            return `មុន ${diffHours} ម៉ោង`;
        } else {
            return 'ថ្មីៗនេះ';
        }
    };

    const getAvatar = (username: string): string => {
        return username.charAt(0);
    };

    const getImageUrls = (media: Media[]): string[] => {
        return media.filter(m => m.type === 'image').map(m => m.url);
    };

    const handleCardClick = () => {
        if (isFromMePage) {
            router.push(`/me/forums/${post.id}`);
        }
    }

    return (
        <div className={`lg:bg-white dark:bg-zinc-900 lg:rounded-3xl lg:p-6 lg:border lg:border-indigo-500/10 transition-all duration-300  ${isFromMePage ? 'cursor-pointer' : 'cursor-default'}`} onClick={handleCardClick}>
            <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    {post.profileImage ? (
                        <img
                            src={post.profileImage}
                            alt={post.username}
                            className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500 dark:border-indigo-400"
                            onError={(e) => {
                                e.currentTarget.style.display = 'none';
                                e.currentTarget.nextElementSibling?.classList.remove('hidden');
                            }}
                        />
                    ) : null}
                    <div className={`w-10 h-10 rounded-full bg-indigo-600 dark:bg-zinc-700 flex items-center justify-center text-white font-semibold text-base ${post.profileImage ? 'hidden' : ''}`}>
                        {getAvatar(post.username)}
                    </div>
                    <div className="flex-1">
                        <div className="font-semibold text-gray-900 dark:text-zinc-400 text-sm mb-0.5 hover:underline">
                            {post.username}
                        </div>
                        <div className="text-gray-500 dark:text-zinc-400 text-xs">
                            {getTimeAgo(post.createdAt)}
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-lg font-bold text-gray-900 dark:text-zinc-400 mb-2.5 leading-relaxed">
                {post.title}
            </div>

            <div className="text-gray-700 dark:text-zinc-400 text-sm leading-relaxed mb-4 line-clamp-3">
                <MarkDownRenderer content={post.description} />
            </div>

            {post.media && post.media.length > 0 && (
                <Carousel media={post.media.map(m => ({ url: m.url, type: m.type as 'image' | 'video' }))} />
            )}

            <div className="flex items-center gap-4 mt-4">
                <div className="flex items-center gap-1 mt-0.5">
                    <Eye className="w-4 h-4" />
                    {post.viewCount}
                </div>
                <div className="flex items-center gap-1">
                    <ThumbsUp className="w-4 h-4" />
                    {post.likeCount}
                </div>
                {/* <div className="flex items-center gap-1">
                    <MessageCircle className="w-4 h-4" />
                    {post.replyCount}
                </div> */}
            </div>
        </div>
    );
}
