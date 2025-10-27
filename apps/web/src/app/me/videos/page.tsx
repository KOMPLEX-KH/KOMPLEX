'use client';

import { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import Sidebar from '@/components/pages/me/Sidebar';
import {
    Video,
    Plus,
    Eye,
    Heart,
    Play,
    Clock,
    Calendar,
    History,
} from 'lucide-react';
import { meVideoService } from '@/services/index';
import { VideoPost } from '@/types/content/videos';
import ContentError from '@/components/common/ContentError';
import MeSkeleton from '@/components/pages/me/MeSkeleton';
import VideoHistoryComponent from '@/components/pages/me/videos/VideoHistory';
import { useAuth } from '@hooks/useAuth';

export default function MyVideos() {
    return (
        <Suspense fallback={<MeSkeleton />}>
            <MyVideosContent />
        </Suspense>
    );
}

function MyVideosContent() {
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeTab = searchParams.get('tab') || 'myVideos';

    const [videos, setVideos] = useState<VideoPost[] | null>(null);
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
            const fetchVideos = async () => {
                try {
                    setIsLoading(true);
                    setError(null);
                    const userVideos = await meVideoService.getUserVideos();
                    setVideos(userVideos.map((v) => {
                        return {
                            id: v.id,
                            userId: v.userId,
                            profileImage: v.profileImage,
                            title: v.title,
                            description: v.description,
                            duration: Number(v.duration),
                            videoUrl: v.videoUrl,
                            thumbnailUrl: v.thumbnailUrl,
                            videoUrlForDeletion: v.videoUrlForDeletion,
                            thumbnailUrlForDeletion: v.thumbnailUrlForDeletion,
                            viewCount: Number(v.viewCount),
                            createdAt: v.createdAt,
                            updatedAt: v.updatedAt,
                            username: v.username,
                            isSave: v.isSave,
                            isLiked: v.isLiked,
                            likeCount: Number(v.likeCount),
                            saveCount: Number(v.saveCount),
                            exercises: v.exercises,
                            isFollowing: v.isFollowing,
                        }
                    }));
                } catch (error) {
                    console.error('Error fetching videos:', error);
                    setError('មានបញ្ហាកើតឡើងពេលទាញយកទិន្នន័យ។ សូមព្យាយាមម្តងទៀត។');
                } finally {
                    setIsLoading(false);
                }
            };

            fetchVideos();
        }
    }, [user]);

    const formatDuration = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('km-KH', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const stats = {
        total: videos?.length ?? 0,
        totalViews: videos?.reduce((acc, v) => acc + (v.viewCount ?? 0), 0) ?? 0,
        totalLikes: videos?.reduce((acc, v) => acc + (v.likeCount ?? 0), 0) ?? 0,
        totalDuration: videos?.reduce((acc, v) => acc + (v.duration ?? 0), 0) ?? 0
    };

    // Show loading while checking auth or fetching data
    if (authLoading || isLoading) {
        return <MeSkeleton />;
    }

    // Don't render anything if not authenticated (will redirect)
    if (!user) {
        return null;
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 lg:ml-64 pt-32 lg:pt-20">
                <div className="p-6">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">វីដេអូរបស់ខ្ញុំ</h1>
                        <p className="text-gray-600">គ្រប់គ្រងវីដេអូនិងមើលដំណើរការរបស់អ្នក</p>
                    </div>

                    {/* Tabs - pill style, horizontally scrollable */}


                    {/* Stats Cards - Only show for My Videos tab */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">វីដេអូសរុប</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
                                </div>
                                <div className="p-3 bg-indigo-100 rounded-full">
                                    <Video className="w-6 h-6 text-indigo-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">ទស្សនាសរុប</p>
                                    <p className="text-2xl font-bold text-blue-600">{stats.totalViews.toLocaleString()}</p>
                                </div>
                                <div className="p-3 bg-blue-100 rounded-full">
                                    <Eye className="w-6 h-6 text-blue-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">ចូលចិត្តសរុប</p>
                                    <p className="text-2xl font-bold text-green-600">{stats.totalLikes}</p>
                                </div>
                                <div className="p-3 bg-green-100 rounded-full">
                                    <Heart className="w-6 h-6 text-green-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">ពេលវេលាសរុប</p>
                                    <p className="text-2xl font-bold text-purple-600">{Math.floor(stats.totalDuration / 60)} នាទី</p>
                                </div>
                                <div className="p-3 bg-purple-100 rounded-full">
                                    <Clock className="w-6 h-6 text-purple-600" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-8">
                        <div className="overflow-x-hidden">
                            <nav className="flex gap-2 whitespace-nowrap">
                                <Link
                                    href="/me/videos?tab=myVideos"
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'myVideos' || activeTab === null
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                        }`}
                                >
                                    <span className="inline-flex items-center gap-2">
                                        <Video className="w-4 h-4" />
                                        <span className="hidden lg:block">វីដេអូរបស់ខ្ញុំ</span>
                                    </span>
                                </Link>
                                {/* <Link
                                    href="/me/videos?tab=likedVideos"
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'likedVideos'
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                        }`}
                                >
                                    <span className="inline-flex items-center gap-2">
                                        <ThumbsUp className="w-4 h-4" />
                                        <span className="hidden lg:block">វីដេអូដែលចូលចិត្ត</span>
                                    </span>
                                </Link>
                                <Link
                                    href="/me/videos?tab=savedVideos"
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'savedVideos'
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                        }`}
                                >
                                    <span className="inline-flex items-center gap-2">
                                        <Bookmark className="w-4 h-4" />
                                        <span className="hidden lg:block">វីដេអូដែលរក្សាទុក</span>
                                    </span>
                                </Link> */}
                                <Link
                                    href="/me/videos?tab=videoHistory"
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'videoHistory'
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                        }`}
                                >
                                    <span className="inline-flex items-center gap-2">
                                        <History className="w-4 h-4" />
                                        <span className="hidden lg:block">ប្រវត្តិវីដេអូ</span>
                                    </span>
                                </Link>
                            </nav>
                        </div>
                    </div>

                    {/* Tab Content */}
                    {activeTab === 'myVideos' && (
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-200">
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-semibold text-gray-900">វីដេអូ</h2>
                                    <Link
                                        href="/me/create-video"
                                        className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors"
                                    >
                                        <Plus className="w-4 h-4" />
                                        បង្ហោះវីដេអូថ្មី
                                    </Link>
                                </div>
                            </div>
                            <div className="p-6">
                                {error ? (
                                    <ContentError
                                        type="error"
                                        message={error}
                                    />
                                ) : videos && videos.length > 0 ? (
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                        {videos.map((video) => (
                                            <Link
                                                key={video.id}
                                                href={`/me/videos/${video.id}`}
                                                className="group bg-white rounded-3xl shadow-sm overflow-hidden hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-indigo-300"
                                            >
                                                {/* Thumbnail */}
                                                <div className="relative">
                                                    <img
                                                        src={video.thumbnailUrl || '/image-error.png'}
                                                        alt={video.title || 'Video'}
                                                        className="w-full h-48 object-cover"
                                                        onError={(e) => {
                                                            e.currentTarget.src = '/image-error.png';
                                                        }}
                                                    />

                                                    {/* Duration Badge */}
                                                    {video.duration && (
                                                        <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                                            {formatDuration(video.duration)}
                                                        </div>
                                                    )}

                                                    {/* Play Button Overlay */}
                                                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                                        <div className="bg-white/90 p-3 rounded-full shadow-lg">
                                                            <Play className="w-6 h-6 text-indigo-600 ml-1" />
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Video Info */}
                                                <div className="p-4">
                                                    <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                                                        {video.title || 'Untitled Video'}
                                                    </h3>
                                                    <div className="text-sm text-gray-600 mb-3 line-clamp-2">
                                                        {/* <MarkDownRenderer content={video.description || 'No description available'} /> */}
                                                        <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                                                            {video.description || 'No description available'}
                                                        </p>
                                                    </div>

                                                    {/* Stats */}
                                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                                        <div className="flex items-center gap-4">
                                                            <span className="flex items-center gap-1">
                                                                <Eye className="w-4 h-4" />
                                                                {(video.viewCount || 0).toLocaleString()}
                                                            </span>
                                                            <span className="flex items-center gap-1">
                                                                <Heart className="w-4 h-4" />
                                                                {video.likeCount || 0}
                                                            </span>
                                                        </div>
                                                        {video.createdAt && (
                                                            <span className="flex items-center gap-1">
                                                                <Calendar className="w-4 h-4" />
                                                                {formatDate(video.createdAt)}
                                                            </span>
                                                        )}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                ) : (
                                    <ContentError
                                        type="no-results"
                                        message="រកមិនឃើញវីដេអូ។ សូមបង្ហោះវីដេអូដំបូងរបស់អ្នក!"
                                    />
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'likedVideos' && (
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-200">
                            <div className="p-6">
                                <ContentError
                                    type="no-results"
                                    message="មុខងារនេះនឹងមកដល់ឆាប់ៗនេះ"
                                />
                            </div>
                        </div>
                    )}

                    {activeTab === 'savedVideos' && (
                        <div className="bg-white rounded-3xl shadow-sm border border-gray-200">
                            <div className="p-6">
                                <ContentError
                                    type="no-results"
                                    message="មុខងារនេះនឹងមកដល់ឆាប់ៗនេះ"
                                />
                            </div>
                        </div>
                    )}

                    {activeTab === 'videoHistory' && (
                        <VideoHistoryComponent onError={setError} />
                    )}
                </div>
            </div>
        </div>
    );
}