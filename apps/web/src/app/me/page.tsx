'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/pages/me/Sidebar';
import {
    BookOpen,
    MessageSquare,
    Video,
    Pencil,
    TrendingUp
} from 'lucide-react';
import { formatToKhmerDate } from '@core-utils/formater';
import api from '@/configs/axios';
import { useAuth } from '@hooks/useAuth';
import MeSkeleton from '@/components/pages/me/MeSkeleton';


interface RecentActivity {
    title: string,
    createdAt: string,
    contentType: string,
}

interface ContentStats {
    dashboardData: {
        // numOfBlogs: number;
        numOfForums: number;
        numOfVideos: number;
        numOfExercises: number;
    }
    recentActivities: RecentActivity[];
}

const getContentTypeIcon = (contentType: string) => {
    switch (contentType) {
        // case 'blog':
        //     return <div className="p-2 rounded-full bg-indigo-100">
        //         <BookOpen className={`w-4 h-4`} />
        //     </div>;
        case 'video':
            return <div className="p-2 rounded-full bg-green-100">
                <Video className={`w-4 h-4`} />
            </div>;
        case 'exercise':
            return <div className="p-2 rounded-full bg-purple-100">
                <Pencil className={`w-4 h-4`} />
            </div>;
        case 'forum':
            return <div className="p-2 rounded-full bg-blue-100">
                <MessageSquare className={`w-4 h-4`} />
            </div>;
        default:
            return <div className="p-2 rounded-full bg-gray-100">
                <BookOpen className={`w-4 h-4`} />
            </div>;
    }
}

export default function MyContent() {
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();
    const [stats, setStats] = useState<ContentStats>({
        dashboardData: {
            // numOfBlogs: 0,
            numOfForums: 0,
            numOfVideos: 0,
            numOfExercises: 0,
        },
        recentActivities: []
    });
    const [isLoading, setIsLoading] = useState(true);

    // Redirect to auth if not authenticated
    useEffect(() => {
        if (!authLoading && !user) {
            router.push('/auth');
        }
    }, [user, authLoading, router]);

    useEffect(() => {
        if (user) {
            const fetchStats = async () => {
                try {
                    setIsLoading(true);
                    const response = await api.get('/me/dashboard');
                    setStats(response.data);
                } catch (error) {
                    console.error('Error fetching dashboard stats:', error);
                } finally {
                    setIsLoading(false);
                }
            };
            fetchStats();
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
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">ផ្ទាំងគ្រប់គ្រង</h1>
                        <p className="text-gray-600">ស្វាគមន៍មកកាន់មាតិការបស់អ្នក និងមើលវឌ្ឍនភាពរបស់អ្នក</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {/* Blogs */}
                        {/* <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">ប្លុក</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.dashboardData.numOfBlogs}</p>
                                </div>
                                <div className="p-3 bg-indigo-100 rounded-full">
                                    <BookOpen className="w-6 h-6 text-indigo-600" />
                                </div>
                            </div>
                        </div> */}

                        {/* Videos */}
                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">វីដេអូ</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.dashboardData.numOfVideos}</p>
                                </div>
                                <div className="p-3 bg-green-100 rounded-full">
                                    <Video className="w-6 h-6 text-green-600" />
                                </div>
                            </div>

                        </div>

                        {/* Exercises */}
                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">លំហាត់</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.dashboardData.numOfExercises}</p>
                                </div>
                                <div className="p-3 bg-purple-100 rounded-full">
                                    <Pencil className="w-6 h-6 text-purple-600" />
                                </div>
                            </div>

                        </div>

                        {/* Forums */}
                        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-600">វេទិកា</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.dashboardData.numOfForums}</p>
                                </div>
                                <div className="p-3 bg-blue-100 rounded-full">
                                    <MessageSquare className="w-6 h-6 text-blue-600" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-3xl shadow-sm border border-gray-200">
                        <div className="p-6 border-b border-gray-200">
                            <h2 className="text-lg font-semibold text-gray-900">សកម្មភាពថ្មីៗ</h2>
                            <p className="text-sm text-gray-600">សកម្មភាពថ្មីៗរបស់អ្នកនៅលើវេទិកា</p>
                        </div>
                        <div className="p-6">
                            <div className="space-y-4">
                                {stats.recentActivities.map((activity, index) => {
                                    const Icon = getContentTypeIcon(activity.contentType);
                                    return (
                                        <div key={index} className="flex items-center gap-4  rounded-full hover:bg-gray-50 transition-colors">
                                            <div className={`p-2 rounded-full`}>
                                                {Icon}
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-gray-900 line-clamp-1">{activity.title}</p>
                                                {/* <p className="text-sm text-gray-600">{getContentTypeKhmer(activity.contentType)}</p> */}
                                            </div>
                                            <span className="hidden lg:block text-xs text-gray-500">{formatToKhmerDate(activity.createdAt)}</span>
                                            <span className="lg:hidden text-xs text-gray-500">{(activity.createdAt.split('T')[0])}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
