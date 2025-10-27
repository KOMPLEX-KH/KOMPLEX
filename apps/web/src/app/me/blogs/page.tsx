'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Eye, Plus, Book } from 'lucide-react';
import Sidebar from '@/components/pages/me/Sidebar';
import ContentError from '@/components/common/ContentError';
import { Blog } from '@/types/content/blogs';
import { meBlogService } from '@/services/index';
import MeSkeleton from '@/components/pages/me/MeSkeleton';
import { useAuth } from '@hooks/useAuth';

export default function MyBlogs() {
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();
    const [blogPosts, setBlogPosts] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Redirect to auth if not authenticated
    useEffect(() => {
        if (!authLoading && !user) {
            router.push('/auth');
        }
    }, [user, authLoading, router]);

    const fetchMyBlogs = async () => {
        try {
            setIsLoading(true);
            setError(null);
            const data = await meBlogService.getUserBlogs();
            if (data.blogs && data.blogs.length > 0) {
                setBlogPosts(data.blogs);
            } else {
                setError('អ្នកមិនទាន់មានប្លុកទេ');
            }
        } catch (error) {
            console.error('Error fetching my blogs:', error);
            setError('មានបញ្ហាក្នុងការទាញយកប្លុករបស់អ្នក');
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            fetchMyBlogs();
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
        <div className="flex min-h-screen bg-gray-50">
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 lg:ml-64 pt-32 lg:pt-20">
                <div className="p-6">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">ប្លុករបស់ខ្ញុំ</h1>
                        <p className="text-gray-600">គ្រប់គ្រងប្លុកនិងមើលដំណើរការរបស់អ្នក</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">ប្លុកសរុប</p>
                                    <p className="text-2xl font-bold text-gray-900">{blogPosts.length}</p>
                                </div>
                                <div className="p-3 bg-indigo-100 rounded-full">
                                    <Book className="w-6 h-6 text-indigo-600" />
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">ទស្សនាសរុប</p>
                                    <p className="text-2xl font-bold text-blue-600">{blogPosts.reduce((acc, post) => acc + post.viewCount, 0).toLocaleString()}</p>
                                </div>
                                <div className="p-3 bg-blue-100 rounded-full">
                                    <Eye className="w-6 h-6 text-blue-600" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Blog Posts List */}
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <div className="flex items-center justify-between">
                                <h2 className="text-lg font-semibold text-gray-900">ប្លុក</h2>
                                <Link
                                    href="/me/create-blog"
                                    className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-medium transition-colors"
                                >
                                    <Plus className="w-4 h-4" />
                                    បង្កើតប្លុកថ្មី
                                </Link>
                            </div>
                        </div>
                        <div className="p-6">
                            {error ? (
                                <ContentError
                                    type={error === 'អ្នកមិនទាន់មានប្លុកទេ' ? 'no-results' : 'error'}
                                    message={error}
                                />
                            ) : blogPosts.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {blogPosts.map((post) => (
                                        <Link key={post.id} href={`/me/blogs/${post.id}`} className="relative h-72 rounded-3xl overflow-hidden shadow-lg shadow-indigo-500/10 border border-indigo-500/10 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-indigo-500/15 hover:-translate-y-1">
                                            {/* Background Image */}
                                            <img
                                                src={post.media && post.media.length > 0 ? post.media[0].url : '/image-error.png'}
                                                alt={post.title}
                                                onError={(e) => {
                                                    e.currentTarget.src = '/image-error.png';
                                                }}
                                                className="absolute inset-0 w-full h-full object-cover"
                                            />

                                            {/* Gradient Overlay for better text readability */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

                                            {/* Content */}
                                            <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">
                                                <div className="flex items-center gap-4 mb-3 text-xs opacity-90">
                                                    <span>{new Date(post.createdAt).toLocaleDateString('km-KH', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                                </div>

                                                <div className="text-lg font-bold mb-2 leading-relaxed drop-shadow-sm">
                                                    {post.title}
                                                </div>

                                                {/* <div className="flex items-center gap-4 text-sm text-white mb-3">
                                                    <span className="flex items-center gap-2">
                                                        <Eye className="w-4 h-4" />
                                                        {post.viewCount} ទស្សនា
                                                    </span>
                                                </div> */}

                                                {/* Type and Topic Tags
                                                <div className="flex gap-2">
                                                    <span className="px-2 py-1 bg-indigo-600/80 backdrop-blur-sm text-white text-xs rounded-full">
                                                        {post.type}
                                                    </span>
                                                    <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                                                        {post.topic}
                                                    </span>
                                                </div> */}
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            ) : (
                                <ContentError type="no-results" message="អ្នកមិនទាន់មានប្លុកណាមួយទេ" />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
} 