'use client';

import React, { useState } from 'react';
import { ThumbsUp, Share, Bookmark, Check, LinkIcon, UserPlus, UserCheck } from 'lucide-react';
import { Menu, Transition } from '@headlessui/react';
import { VideoPost } from '@/types/content/videos';
import Link from 'next/link';
import { meFollowService } from '@/services/index';
import { useAuth } from '@hooks/useAuth';
import MarkDownRenderer from '@/components/helper/MarkDownRenderer';

interface VideoDescriptionProps {
    video: VideoPost;
    onLike: (videoId: number, isLiked: boolean, video: VideoPost) => void;
    onBookmark: (videoId: number, isSaved: boolean, video: VideoPost) => void;
}

export default function VideoDescription({ video, onLike, onBookmark }: VideoDescriptionProps) {
    const [showFullDescription, setShowFullDescription] = useState(false);
    const [copied, setCopied] = useState(false);
    const [isFollowing, setIsFollowing] = useState(video.isFollowing);
    const [isFollowLoading, setIsFollowLoading] = useState(false);
    const { user, openLoginModal } = useAuth();

    const handleCopyLink = async (e: React.MouseEvent) => {
        e.stopPropagation();
        try {
            const url = `${window.location.origin}/videos/${video.id}`;
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (error) {
            console.error('Failed to copy link:', error);
        }
    };

    const handleFollow = async () => {
        if (!user) {
            openLoginModal();
            return;
        }

        // Don't allow following yourself
        if (user.id === video.userId) {
            return;
        }

        try {
            setIsFollowLoading(true);

            if (isFollowing) {
                await meFollowService.unfollowUser(video.userId);
                setIsFollowing(false);
            } else {
                await meFollowService.followUser(video.userId);
                setIsFollowing(true);
            }
        } catch (error) {
            console.error('Error toggling follow:', error);
        } finally {
            setIsFollowLoading(false);
        }
    };

    // Helper function to format view count
    const formatViewCount = (count: number): string => {
        if (count >= 1000000) {
            return `${(count / 1000000).toFixed(1)}M`;
        } else if (count >= 1000) {
            return `${(count / 1000).toFixed(1)}K`;
        }
        return count.toString();
    };

    // Helper function to format time ago
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

    // Character limit for description (better for Khmer text)
    const charLimit = 400;
    const isTruncated = video.description.length > charLimit;
    const displayText = showFullDescription ? video.description : video.description.slice(0, charLimit);

    return (
        <div className="lg:bg-white lg:rounded-3xl lg:p-4 lg:shadow-sm  mt-6 lg:my-6">
            {/* Video Title */}
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 line-clamp-2 leading-tight">
                {video.title}
            </h1>

            {/* Channel Info and Actions */}
            <div className="flex lg:flex-row flex-wrap lg:items-center justify-between gap-4 mb-6">
                {/* Channel Info */}
                <div className="flex items-center gap-3">
                    <Link href={`/users/${video.userId}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                        {video.profileImage ? (
                            <img
                                src={video.profileImage}
                                alt={video.username}
                                className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500"

                                onError={(e) => {
                                    e.currentTarget.style.display = 'none';
                                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                }}
                            />
                        ) : null}
                        <div className={`w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0 ${video.profileImage ? 'hidden' : ''}`}>
                            <span className="text-indigo-600 font-semibold text-sm">
                                {video.username.charAt(0).toUpperCase()}
                            </span>
                        </div>
                        <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 text-sm sm:text-base truncate hover:underline">{video.username}</h3>
                        </div>
                    </Link>

                    {/* Follow Button - Always show, but opens modal if not logged in */}
                    <button
                        onClick={handleFollow}
                        disabled={isFollowLoading}
                        className={`flex items-center gap-1.5 px-3 py-1.5 text-xs sm:text-sm font-medium rounded-full transition-colors flex-shrink-0 ${isFollowing
                            ? 'bg-indigo-100 text-indigo-700 border border-indigo-200 hover:bg-indigo-200'
                            : 'bg-indigo-600 text-white hover:bg-indigo-700'
                            } ${isFollowLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {isFollowLoading ? (
                            <div className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
                        ) : isFollowing ? (
                            <>
                                <UserCheck className="w-3 h-3" />
                                បានតាមដាន
                            </>
                        ) : (
                            <>
                                <UserPlus className="w-3 h-3" />
                                តាមដាន
                            </>
                        )}
                    </button>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2 flex-wrap">
                    <button
                        onClick={() => onLike(video.id, video.isLiked, video)}
                        className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-colors ${video.isLiked
                            ? 'text-indigo-600 '
                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                            }`}
                    >
                        <ThumbsUp size={18} className={`${video.isLiked ? 'fill-indigo-600' : ''}`} />
                        <span className="text-xs sm:text-sm font-medium">{formatViewCount(video.likeCount)}</span>
                    </button>



                    <button
                        onClick={() => onBookmark(video.id, video.isSave, video)}
                        className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full transition-colors ${video.isSave
                            ? 'text-indigo-600 '
                            : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                            }`}
                    >
                        <Bookmark size={18} className={`${video.isSave ? 'fill-indigo-600' : ''}`} />
                        <span className="text-xs sm:text-sm font-medium">រក្សាទុក</span>
                    </button>
                    <Menu as="div" className="relative">
                        <Menu.Button className="flex items-center gap-2 px-3 sm:px-4 py-2 text-gray-700 rounded-full hover:text-indigo-600 hover:bg-gray-50 transition-colors focus:outline-none">
                            <Share size={18} />
                            <span className="text-xs sm:text-sm font-medium">ចែករំលែក</span>
                        </Menu.Button>

                        <Transition
                            enter="transition duration-100 ease-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-75 ease-out"
                            leaveFrom="transform scale-100 opacity-100"
                            leaveTo="transform scale-95 opacity-0"
                        >
                            <Menu.Items className="absolute right-0 mt-2 p-2 w-48 bg-white rounded-3xl border border-gray-200 shadow-lg z-50 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            onClick={handleCopyLink}
                                            className={`w-full flex items-center rounded-full gap-3 px-4 py-3 text-sm transition-colors ${active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
                                                }`}
                                        >
                                            {copied ? (
                                                <>
                                                    <Check className="w-4 h-4 text-green-500" />
                                                    <span>បានចម្លង!</span>
                                                </>
                                            ) : (
                                                <>
                                                    <LinkIcon className="w-4 h-4" />
                                                    <span>ចម្លងតំណ</span>
                                                </>
                                            )}
                                        </button>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>

            {/* Description with Stats */}
            <div className="lg:bg-gray-50 lg:rounded-xl lg:p-4">
                {/* Stats in description */}
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="font-medium">{formatViewCount(video.viewCount)} views</span>
                    <span>{getTimeAgo(video.createdAt)}</span>
                </div>

                <div className="text-gray-700 leading-relaxed text-sm">
                    <MarkDownRenderer content={displayText} />
                    {isTruncated && !showFullDescription && '...'}
                </div>

                {isTruncated && (
                    <button
                        onClick={() => setShowFullDescription(!showFullDescription)}
                        className="text-indigo-600 hover:text-indigo-700 font-medium mt-3 text-sm"
                    >
                        {showFullDescription ? 'បង្ហាញតិចជាង' : 'បង្ហាញច្រើនជាង'}
                    </button>
                )}
            </div>
        </div>
    );
}
