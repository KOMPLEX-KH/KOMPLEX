'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState, type ReactNode } from 'react';
import { useRouter } from 'next/navigation';
import { Video, MessageSquare, UserCircle, Mail, AtSign, Phone, Calendar, ShieldCheck, ShieldAlert, User as UserIcon } from 'lucide-react';
import { useAuth } from '@hooks/useAuth';
import MeSkeleton from '@/components/pages/me/MeSkeleton';
import api from '@/configs/axios';
import { authService } from '@/services/index';
import type { User } from '@/types/auth';
import ContentError from '@/components/common/ContentError';

interface ContentStats {
    dashboardData: {
        numOfForums: number;
        numOfVideos: number;
    };
}

export default function MePage() {
    const { user: authUser, loading: authLoading } = useAuth();
    const router = useRouter();

    const [stats, setStats] = useState<ContentStats | null>(null);
    const [profile, setProfile] = useState<User | null>(null);
    const [isStatsLoading, setIsStatsLoading] = useState(true);
    const [isProfileLoading, setIsProfileLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!authLoading && !authUser) {
            router.push('/auth');
        }
    }, [authLoading, authUser, router]);

    useEffect(() => {
        if (!authUser) return;

        const fetchStats = async () => {
            try {
                setIsStatsLoading(true);
                const response = await api.get('/me/dashboard');
                setStats({
                    dashboardData: {
                        numOfForums: response.data.dashboardData?.numOfForums ?? 0,
                        numOfVideos: response.data.dashboardData?.numOfVideos ?? 0,
                    },
                });
            } catch (err) {
                console.error('Error fetching dashboard stats:', err);
                setStats({
                    dashboardData: {
                        numOfForums: 0,
                        numOfVideos: 0,
                    },
                });
            } finally {
                setIsStatsLoading(false);
            }
        };

        fetchStats();
    }, [authUser]);

    useEffect(() => {
        if (!authUser) return;

        const fetchProfile = async () => {
            try {
                setIsProfileLoading(true);
                setError(null);
                const userData = await authService.getCurrentUser();
                setProfile(userData);
            } catch (err) {
                console.error('Error fetching profile:', err);
                setError('មានបញ្ហាក្នុងការទាញយកព័ត៌មានប្រវត្តិ។ សូមព្យាយាមម្តងទៀត។');
                setProfile(null);
            } finally {
                setIsProfileLoading(false);
            }
        };

        fetchProfile();
    }, [authUser]);

    if (authLoading || isStatsLoading || isProfileLoading) {
        return <MeSkeleton />;
    }

    if (!authUser) {
        return null;
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            <div className="flex-1 pt-32 lg:pt-20">
                <div className="max-w-6xl mx-auto p-6 space-y-8">
                    <section>
                        <div className="mb-6">
                            <h1 className="text-3xl font-bold text-gray-900 mb-2">ផ្ទាំងគ្រប់គ្រង</h1>
                            <p className="text-gray-600">មើលសកម្មភាពទូទៅ និងស្ថិតិមាតិការបស់អ្នក</p>
                        </div>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <StatCard
                                title="វីដេអូ"
                                value={stats?.dashboardData.numOfVideos ?? 0}
                                icon={<Video className="w-6 h-6 text-green-600" />}
                                iconBg="bg-green-100"
                            />
                            <StatCard
                                title="វេទិកា"
                                value={stats?.dashboardData.numOfForums ?? 0}
                                icon={<MessageSquare className="w-6 h-6 text-blue-600" />}
                                iconBg="bg-blue-100"
                            />
                        </div>
                    </section>

                    <section>
                        <div className="mb-6">
                            <div className="flex items-center gap-3 mb-2">
                                <UserCircle className="w-8 h-8 text-indigo-600" />
                                <h2 className="text-2xl font-bold text-gray-900">ព័ត៌មានផ្ទាល់ខ្លួន</h2>
                            </div>
                            <p className="text-gray-600">គ្រប់គ្រងព័ត៌មានប្រវត្តិរបស់អ្នក</p>
                        </div>

                        {error && <ContentError type="error" message={error} />}

                        {!error && profile && (
                            <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-6">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    <div className="flex items-center gap-4">
                                        {profile.profileImage ? (
                                            <img
                                                src={profile.profileImage}
                                                alt="Profile"
                                                className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500 shadow-lg"
                                            />
                                        ) : (
                                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                                                {((`${profile.firstName || ''} ${profile.lastName || ''}`.trim()) || profile.username || profile.email || 'U').charAt(0)}
                                            </div>
                                        )}
                                        <div>
                                            <div className="flex items-center gap-2 flex-wrap">
                                                <h3 className="text-2xl font-semibold text-gray-900">
                                                    {`${profile.firstName || ''} ${profile.lastName || ''}`.trim() || profile.username}
                                                </h3>
                                                {profile.isVerified && (
                                                    <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                                                        <ShieldCheck size={12} />
                                                        បានផ្ទៀងផ្ទាត់
                                                    </div>
                                                )}
                                            </div>
                                            <div className="mt-1 flex items-center gap-2 text-gray-600">
                                                <Mail size={16} />
                                                <span className="text-sm">{profile.email}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <ProfileField icon={<AtSign size={16} />} label="ឈ្មោះអ្នកប្រើប្រាស់" value={profile.username} />
                                    <ProfileField icon={<UserIcon size={16} />} label="ឈ្មោះ" value={profile.firstName || '-'} />
                                    <ProfileField icon={<UserIcon size={16} />} label="នាមត្រកូល" value={profile.lastName || '-'} />
                                    <ProfileField icon={<Calendar size={16} />} label="ថ្ងៃខែឆ្នាំកំណើត" value={profile.dateOfBirth || '-'} />
                                    <ProfileField icon={<Phone size={16} />} label="លេខទូរស័ព្ទ" value={profile.phone || '-'} />
                                    <ProfileField
                                        icon={profile.isVerified ? <ShieldCheck size={16} /> : <ShieldAlert size={16} />}
                                        label="ស្ថានភាព"
                                        value={profile.isVerified ? 'បានផ្ទៀងផ្ទាត់' : 'មិនទាន់ផ្ទៀងផ្ទាត់'}
                                        badgeClass={profile.isVerified ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}
                                    />
                                </div>
                            </div>
                        )}
                    </section>
                </div>
            </div>
        </div>
    );
}

interface StatCardProps {
    title: string;
    value: number;
    icon: ReactNode;
    iconBg: string;
}

function StatCard({ title, value, icon, iconBg }: StatCardProps) {
    return (
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-gray-600">{title}</p>
                    <p className="text-2xl font-bold text-gray-900">{value}</p>
                </div>
                <div className={`p-3 rounded-full ${iconBg}`}>{icon}</div>
            </div>
        </div>
    );
}

interface ProfileFieldProps {
    icon: ReactNode;
    label: string;
    value: string;
    badgeClass?: string;
}

function ProfileField({ icon, label, value, badgeClass }: ProfileFieldProps) {
    const iconClasses = badgeClass ?? 'bg-indigo-100 text-indigo-600';
    return (
        <div className="bg-white rounded-2xl p-4 border border-gray-200 hover:border-indigo-200 transition-colors">
            <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${iconClasses}`}>{icon}</div>
                <div>
                    <div className="text-xs text-gray-500 font-medium">{label}</div>
                    <div className="text-gray-900 font-semibold">{value}</div>
                </div>
            </div>
        </div>
    );
}



// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import Sidebar from '@/components/pages/me/Sidebar';
// import {
//     BookOpen,
//     MessageSquare,
//     Video,
//     Pencil,
//     TrendingUp
// } from 'lucide-react';
// import { formatToKhmerDate } from '@core-utils/formater';
// import api from '@/configs/axios';
// import { useAuth } from '@hooks/useAuth';
// import MeSkeleton from '@/components/pages/me/MeSkeleton';


// interface RecentActivity {
//     title: string,
//     createdAt: string,
//     contentType: string,
// }

// interface ContentStats {
//     dashboardData: {
//         // numOfBlogs: number;
//         numOfForums: number;
//         numOfVideos: number;
//         numOfExercises: number;
//     }
//     recentActivities: RecentActivity[];
// }

// const getContentTypeIcon = (contentType: string) => {
//     switch (contentType) {
//         // case 'blog':
//         //     return <div className="p-2 rounded-full bg-indigo-100">
//         //         <BookOpen className={`w-4 h-4`} />
//         //     </div>;
//         case 'video':
//             return <div className="p-2 rounded-full bg-green-100">
//                 <Video className={`w-4 h-4`} />
//             </div>;
//         case 'exercise':
//             return <div className="p-2 rounded-full bg-purple-100">
//                 <Pencil className={`w-4 h-4`} />
//             </div>;
//         case 'forum':
//             return <div className="p-2 rounded-full bg-blue-100">
//                 <MessageSquare className={`w-4 h-4`} />
//             </div>;
//         default:
//             return <div className="p-2 rounded-full bg-gray-100">
//                 <BookOpen className={`w-4 h-4`} />
//             </div>;
//     }
// }

// export default function MyContent() {
//     const { user, loading: authLoading } = useAuth();
//     const router = useRouter();
//     const [stats, setStats] = useState<ContentStats>({
//         dashboardData: {
//             // numOfBlogs: 0,
//             numOfForums: 0,
//             numOfVideos: 0,
//             numOfExercises: 0,
//         },
//         recentActivities: []
//     });
//     const [isLoading, setIsLoading] = useState(true);

//     // Redirect to auth if not authenticated
//     useEffect(() => {
//         if (!authLoading && !user) {
//             router.push('/auth');
//         }
//     }, [user, authLoading, router]);

//     useEffect(() => {
//         if (user) {
//             const fetchStats = async () => {
//                 try {
//                     setIsLoading(true);
//                     const response = await api.get('/me/dashboard');
//                     setStats(response.data);
//                 } catch (error) {
//                     console.error('Error fetching dashboard stats:', error);
//                 } finally {
//                     setIsLoading(false);
//                 }
//             };
//             fetchStats();
//         }
//     }, [user]);

//     // Show loading while checking auth or fetching data
//     if (authLoading || isLoading) {
//         return <MeSkeleton />;
//     }

//     // Don't render anything if not authenticated (will redirect)
//     if (!user) {
//         return null;
//     }

//     return (
//         <div className="flex min-h-screen bg-gray-50">
//             {/* Sidebar */}
//             <Sidebar />

//             {/* Main Content */}
//             <div className="flex-1 lg:ml-64 pt-32 lg:pt-20">
//                 <div className="p-6">
//                     {/* Header */}
//                     <div className="mb-8">
//                         <h1 className="text-3xl font-bold text-gray-900 mb-2">ផ្ទាំងគ្រប់គ្រង</h1>
//                         <p className="text-gray-600">ស្វាគមន៍មកកាន់មាតិការបស់អ្នក និងមើលវឌ្ឍនភាពរបស់អ្នក</p>
//                     </div>

//                     {/* Stats Cards */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
//                         {/* Blogs */}
//                         {/* <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
//                             <div className="flex items-center justify-between">
//                                 <div>
//                                     <p className="text-sm font-medium text-gray-600">ប្លុក</p>
//                                     <p className="text-2xl font-bold text-gray-900">{stats.dashboardData.numOfBlogs}</p>
//                                 </div>
//                                 <div className="p-3 bg-indigo-100 rounded-full">
//                                     <BookOpen className="w-6 h-6 text-indigo-600" />
//                                 </div>
//                             </div>
//                         </div> */}

//                         {/* Videos */}
//                         <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
//                             <div className="flex items-center justify-between">
//                                 <div>
//                                     <p className="text-sm font-medium text-gray-600">វីដេអូ</p>
//                                     <p className="text-2xl font-bold text-gray-900">{stats.dashboardData.numOfVideos}</p>
//                                 </div>
//                                 <div className="p-3 bg-green-100 rounded-full">
//                                     <Video className="w-6 h-6 text-green-600" />
//                                 </div>
//                             </div>

//                         </div>

//                         {/* Exercises */}
//                         <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
//                             <div className="flex items-center justify-between">
//                                 <div>
//                                     <p className="text-sm font-medium text-gray-600">លំហាត់</p>
//                                     <p className="text-2xl font-bold text-gray-900">{stats.dashboardData.numOfExercises}</p>
//                                 </div>
//                                 <div className="p-3 bg-purple-100 rounded-full">
//                                     <Pencil className="w-6 h-6 text-purple-600" />
//                                 </div>
//                             </div>

//                         </div>

//                         {/* Forums */}
//                         <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-200">
//                             <div className="flex items-center justify-between">
//                                 <div>
//                                     <p className="text-sm font-medium text-gray-600">វេទិកា</p>
//                                     <p className="text-2xl font-bold text-gray-900">{stats.dashboardData.numOfForums}</p>
//                                 </div>
//                                 <div className="p-3 bg-blue-100 rounded-full">
//                                     <MessageSquare className="w-6 h-6 text-blue-600" />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Recent Activity */}
//                     <div className="bg-white rounded-3xl shadow-sm border border-gray-200">
//                         <div className="p-6 border-b border-gray-200">
//                             <h2 className="text-lg font-semibold text-gray-900">សកម្មភាពថ្មីៗ</h2>
//                             <p className="text-sm text-gray-600">សកម្មភាពថ្មីៗរបស់អ្នកនៅលើវេទិកា</p>
//                         </div>
//                         <div className="p-6">
//                             <div className="space-y-4">
//                                 {stats.recentActivities.map((activity, index) => {
//                                     const Icon = getContentTypeIcon(activity.contentType);
//                                     return (
//                                         <div key={index} className="flex items-center gap-4  rounded-full hover:bg-gray-50 transition-colors">
//                                             <div className={`p-2 rounded-full`}>
//                                                 {Icon}
//                                             </div>
//                                             <div className="flex-1">
//                                                 <p className="text-sm font-medium text-gray-900 line-clamp-1">{activity.title}</p>
//                                                 {/* <p className="text-sm text-gray-600">{getContentTypeKhmer(activity.contentType)}</p> */}
//                                             </div>
//                                             <span className="hidden lg:block text-xs text-gray-500">{formatToKhmerDate(activity.createdAt)}</span>
//                                             <span className="lg:hidden text-xs text-gray-500">{(activity.createdAt.split('T')[0])}</span>
//                                         </div>
//                                     );
//                                 })}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
