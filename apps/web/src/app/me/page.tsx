'use client';

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState, type ReactNode, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Video, MessageSquare, UserCircle, Mail, AtSign, Phone, Calendar, ShieldCheck, ShieldAlert, User as UserIcon, Camera } from 'lucide-react';
import { useAuth } from '@hooks/useAuth';
import MeSkeleton from '@/components/pages/me/MeSkeleton';
import { authService, uploadService } from '@/services/index';
import ContentError from '@/components/common/ContentError';
import Link from 'next/link';
import AllMeForums from '@/components/pages/me/forums/AllMeForums';
import AllMeVideos from '@/components/pages/me/videos/AllMeVideos';
import { Profile } from '@core-types/api-types/profile';
import { formatToKhmerMonthYear } from '@core-utils/formater';


export default function MePage() {
    return (
        <Suspense fallback={<MeSkeleton />}>
            <MePageContent />
        </Suspense>
    );
}

function MePageContent() {
    const { user: authUser, loading: authLoading } = useAuth();
    const router = useRouter();
    const searchParams = useSearchParams();
    const activeTab = searchParams.get('tab') || 'profile';

    const [profile, setProfile] = useState<Profile | null>(null);
    const [isProfileLoading, setIsProfileLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isHoveringAvatar, setIsHoveringAvatar] = useState(false);
    const [isUploadingImage, setIsUploadingImage] = useState(false);
    const [imageUploadError, setImageUploadError] = useState<string | null>(null);


    const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !profile) return;

        const originalImage = profile.profileImage;
        const localPreviewUrl = URL.createObjectURL(file);

        setProfile(prev => prev ? { ...prev, profileImage: localPreviewUrl } : prev);
        setIsUploadingImage(true);
        setImageUploadError(null);

        try {
            const { key, publicUrl } = await uploadService.uploadFileForProfile(file);

            const response = await authService.updateProfileImage({
                profileImage: publicUrl,
                profileImageKey: key,
            });

            const updatedProfile = response?.data || { 
                profileImage: publicUrl, 
                profileImageKey: key 
            };

            setProfile(prev => prev ? { 
                ...prev, 
                profileImage: updatedProfile.profileImage,
                profileImageKey: updatedProfile.profileImageKey
            } : prev);

            const stored = localStorage.getItem('user');
            if (stored) {
                const parsed = JSON.parse(stored);
                localStorage.setItem('user', JSON.stringify({ 
                    ...parsed, 
                    profileImage: updatedProfile.profileImage 
                }));
                window.dispatchEvent(new Event('user-updated'));
            }

            setTimeout(() => URL.revokeObjectURL(localPreviewUrl), 1000);

        } catch (err) {
            console.error('Profile image upload error:', err);
            setImageUploadError('មានបញ្ហាក្នុងការបង្ហោះរូបភាព។ សូមព្យាយាមម្តងទៀត។');
            setProfile(prev => prev ? { ...prev, profileImage: originalImage } : prev);
            URL.revokeObjectURL(localPreviewUrl);
        } finally {
            setIsUploadingImage(false);
        }
    };

    useEffect(() => {
        if (!authLoading && !authUser) {
            router.push('/auth');
        }
    }, [authLoading, authUser, router]);

    useEffect(() => {
        if (!authUser) return;

        const fetchProfile = async () => {
            try {
                setIsProfileLoading(true);
                setError(null);
                // Use detailed profile endpoint that includes follower stats
                const userData = await authService.getCurrentUserProfile();
                setProfile(userData.data);
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

    if (authLoading || isProfileLoading) {
        return <MeSkeleton />;
    }

    if (!authUser) {
        return null;
    }

    return (
        <div className="flex min-h-screen bg-gray-50">
            <div className="flex-1 pt-32 lg:pt-20">
                <div className="max-w-6xl mx-auto p-6">
                    {/* Header */}
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">គ្រប់គ្រងមាតិកា</h1>
                        <p className="text-gray-600">គ្រប់គ្រងមាតិកា និងព័ត៌មានផ្ទាល់ខ្លួនរបស់អ្នក</p>
                    </div>

                    {/* Tabs */}
                    <div className="mb-8">
                        <div className="overflow-x-hidden">
                            <nav className="flex gap-2 whitespace-nowrap">
                                <Link
                                    href="/me?tab=profile"
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'profile' || activeTab === null
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                        }`}
                                >
                                    <span className="inline-flex items-center gap-2">
                                        <UserCircle className="w-4 h-4" />
                                        <span>ព័ត៌មានផ្ទាល់ខ្លួន</span>
                                    </span>
                                </Link>
                                <Link
                                    href="/me?tab=forums"
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'forums'
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                        }`}
                                >
                                    <span className="inline-flex items-center gap-2">
                                        <MessageSquare className="w-4 h-4" />
                                        <span>វេទិកា</span>
                                    </span>
                                </Link>
                                <Link
                                    href="/me?tab=videos"
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeTab === 'videos'
                                        ? 'bg-indigo-600 text-white'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'
                                        }`}
                                >
                                    <span className="inline-flex items-center gap-2">
                                        <Video className="w-4 h-4" />
                                        <span>វីដេអូ</span>
                                    </span>
                                </Link>
                            </nav>
                        </div>
                    </div>


                    {/* Tab Content */}
                    {activeTab === 'profile' && (
                        <section>
                            {error && <ContentError type="error" message={error} />}

                            {!error && profile && (
                                <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm space-y-6">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        <div className="flex items-center gap-4 w-full">
                                            {/* Avatar with hover overlay */}
                                            <div
                                                className={`relative w-20 h-20 ${isUploadingImage ? 'cursor-wait' : 'cursor-pointer'}`}
                                                onMouseEnter={() => setIsHoveringAvatar(true)}
                                                onMouseLeave={() => setIsHoveringAvatar(false)}
                                                onClick={() => !isUploadingImage && document.getElementById('avatar-upload')?.click()}
                                            >
                                                <input
                                                    id="avatar-upload"
                                                    type="file"
                                                    accept="image/*"
                                                    className="hidden"
                                                    disabled={isUploadingImage}
                                                    onChange={handleImageSelect}
                                                />
                                                {profile.profileImage ? (
                                                    <img
                                                        src={profile.profileImage}
                                                        alt="Profile"
                                                        className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500 shadow-lg"
                                                        onError={(e) => {
                                                            e.currentTarget.style.display = 'none';
                                                            e.currentTarget.nextElementSibling?.classList.remove('hidden');
                                                        }}
                                                    />
                                                ) : null}
                                                <div className={`w-20 h-20 rounded-full bg-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg ${profile.profileImage ? 'hidden' : ''}`}>
                                                    {((`${profile.firstName || ''} ${profile.lastName || ''}`.trim()) || profile.username || profile.email || 'U').charAt(0).toUpperCase()}
                                                </div>
                                                {/* Spinner while uploading */}
                                                {isUploadingImage && (
                                                    <div className="absolute inset-0 rounded-full bg-black/60 flex items-center justify-center">
                                                        <svg className="animate-spin w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                                                        </svg>
                                                    </div>
                                                )}
                                                {/* Hover overlay — hidden while uploading */}
                                                {!isUploadingImage && isHoveringAvatar && (
                                                    <div className="absolute inset-0 rounded-full bg-black/50 flex flex-col items-center justify-center gap-1">
                                                        <Camera size={25} className="text-white" />
                                                    </div>
                                                )}
                                            </div>

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
                                                    <span className="text-sm">{profile.email} </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {imageUploadError && (
                                        <p className="text-xs text-red-500 mt-3">{imageUploadError}</p>
                                    )}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <ProfileField icon={<AtSign size={16} />} label="នាមខ្លួន" value={profile.firstName} />
                                        <ProfileField icon={<AtSign size={16} />} label="នាមត្រកូល" value={profile.lastName} />
                                        <ProfileField icon={<Calendar size={16} />} label="ចូលរួមនៅ" value={formatToKhmerMonthYear(profile.createdAt)} />
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
                    )}

                    {activeTab === 'forums' && <AllMeForums />}

                    {activeTab === 'videos' && <AllMeVideos />}
                </div>
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
        <div className="bg-white rounded-3xl p-4 border border-gray-200 hover:border-indigo-200 transition-colors">
            <div className="flex items-center gap-3">
                <div className={`p-2 rounded-full ${iconClasses}`}>{icon}</div>
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
