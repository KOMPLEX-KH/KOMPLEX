'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Eye } from 'lucide-react';
import ContentError from '@/components/common/ContentError';
import BlogSkeleton from '@/components/pages/blogs/BlogsSkeleton';
import { userBlogService } from '@/services/index';


interface Blog {
    id: number;
    title: string;
    description: string;
    media: { url: string }[];
    username: string;
    viewCount: number;
    createdAt: string;
}

interface BlogsProps {
    userId: string;
}

export default function Blogs({ userId }: BlogsProps) {
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUserBlogs = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const data = await userBlogService.getUserBlogs(userId);
                setBlogs(data);
            } catch (error) {
                console.error('Error fetching user blogs:', error);
                setError('មានបញ្ហាក្នុងការទាញយកប្លុករបស់អ្នកប្រើប្រាស់។ សូមព្យាយាមម្តងទៀត។');
            } finally {
                setIsLoading(false);
            }
        };

        fetchUserBlogs();
    }, [userId]);

    if (isLoading) {
        return (
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">ប្លុក</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <BlogSkeleton />
                    <BlogSkeleton />
                    <BlogSkeleton />
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">ប្លុក</h2>
                <ContentError
                    type="error"
                    message={error}
                />
            </div>
        );
    }

    if (blogs.length === 0) {
        return (
            <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">ប្លុក</h2>
                <ContentError
                    type="no-results"
                    message="អ្នកប្រើប្រាស់នេះមិនទាន់មានប្លុកទេ។"
                />
            </div>
        );
    }

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">ប្លុក ({blogs.length})</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <Link
                        key={blog.id}
                        href={`/blogs/${blog.id}`}
                        className="group block"
                    >
                        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-lg shadow-indigo-500/10 border border-indigo-500/10 transition-all duration-300 cursor-pointer hover:shadow-xl hover:shadow-indigo-500/15 hover:-translate-y-1">
                            {/* Background Image */}
                            <img
                                src={blog.media[0]?.url}
                                alt={blog.title}
                                className="absolute inset-0 w-full h-full object-cover"
                                onError={(e) => {
                                    e.currentTarget.src = '/image-error.png';
                                }}
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">
                                <div className="flex items-center gap-4 mb-3 text-xs opacity-90">
                                    <div className="flex items-center gap-1.5">
                                        <div className="w-4.5 h-4.5 rounded-full bg-indigo-600 backdrop-blur-sm flex items-center justify-center text-white font-semibold text-xs border border-white/30">
                                            {blog.username.charAt(0)}
                                        </div>
                                        {blog.username}
                                    </div>
                                    |
                                    <span>{new Date(blog.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                </div>

                                <div className="text-lg font-bold mb-2 leading-relaxed drop-shadow-sm">
                                    {blog.title}
                                </div>
                                <div className="flex items-center gap-4 text-sm text-white">
                                    <span className='flex items-center gap-2'>
                                        <Eye className="w-4 h-4" />
                                        {blog.viewCount} ទស្សនា
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
