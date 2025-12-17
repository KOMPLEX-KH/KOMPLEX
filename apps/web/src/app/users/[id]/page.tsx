'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { UserPlus, UserCheck, BookOpen, Video, MessageSquare } from 'lucide-react';
import ContentError from '@/components/common/ContentError';
import Blogs from '@/components/pages/users/Blogs';
import VideoTab from '@/components/pages/users/Videos';
import Forums from '@/components/pages/users/Forums';
import { userProfileService } from '@/services/index';
import { User } from '@core-types/content/profile';
import { useAuth } from '@hooks/useAuth';
import { meFollowService } from '@/services/index';


const tabs = [
    { id: 'blogs', label: 'ប្លុក', icon: BookOpen },
    { id: 'videos', label: 'វីដេអូ', icon: Video },
    { id: 'forums', label: 'ការពិភាក្សា', icon: MessageSquare }
];

export default function UserProfilePage() {
    const params = useParams();
    const userId = params.id as string;
    const [activeTab, setActiveTab] = useState('blogs');
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isFollowLoading, setIsFollowLoading] = useState(false);
    const { user: currentUser, openLoginModal } = useAuth();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setIsLoading(true);
                setError(null);
                const userData = await userProfileService.getUserProfile(userId);
                setUser(userData);
            } catch (error) {
                console.error('Error fetching user:', error);
                setError('មានបញ្ហាក្នុងការទាញយកព័ត៌មានអ្នកប្រើប្រាស់។ សូមព្យាយាមម្តងទៀត។');
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, [userId]);

    const handleFollow = async () => {
        if (!user) return;

        // Check if user is logged in
        if (!currentUser) {
            openLoginModal();
            return;
        }

        // Prevent following self
        if (currentUser.id === user.id) {
            return;
        }

        try {
            setIsFollowLoading(true);

            if (user.isFollowing) {
                await meFollowService.unfollowUser(Number(userId));
            } else {
                await meFollowService.followUser(Number(userId));
            }

            setUser(prev => prev ? {
                ...prev,
                isFollowing: !prev.isFollowing,
                numberOfFollowers: prev.isFollowing ? prev.numberOfFollowers - 1 : prev.numberOfFollowers + 1
            } : null);
        } catch (error) {
            console.error('Error toggling follow:', error);
        } finally {
            setIsFollowLoading(false);
        }
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'blogs':
                return <Blogs userId={userId} />;
            case 'videos':
                return <VideoTab userId={userId} />;
            case 'forums':
                return <Forums userId={userId} />;
            default:
                return <Blogs userId={userId} />;
        }
    };

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 pt-32">
                <div className="w-full px-4 lg:px-8">
                    <div className="animate-pulse">
                        <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-200 mb-6">
                            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 mb-6">
                                <div className="w-24 h-24 bg-gray-200 rounded-full"></div>
                                <div className="flex-1 w-full lg:w-auto">
                                    <div className="h-8 bg-gray-200 rounded w-64 mb-2"></div>
                                    <div className="h-4 bg-gray-200 rounded w-48 mb-4"></div>
                                    <div className="h-10 bg-gray-200 rounded w-32"></div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
                            <div className="h-6 bg-gray-200 rounded w-32 mb-4"></div>
                            <div className="space-y-4">
                                <div className="h-4 bg-gray-200 rounded w-full"></div>
                                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 pt-32">
                <div className="w-full px-4 lg:px-8">
                    <ContentError
                        type="error"
                        message={error}
                    />
                </div>
            </div>
        );
    }

    if (!user) {
        return (
            <div className="min-h-screen bg-gray-50 pt-32">
                <div className="w-full px-4 lg:px-8">
                    <ContentError
                        type="error"
                        message="មិនអាចរកឃើញអ្នកប្រើប្រាស់នេះទេ។"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-20">
            <div className="w-full px-4 lg:px-8">
                {/* Profile Header */}
                <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm border border-gray-200 mb-6">
                    <div className="flex flex-col lg:flex-row items-center  gap-6 mb-6">
                        {/* Avatar */}
                        <div className="w-24 h-24 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 overflow-hidden">
                            {user.profileImage ? (
                                <img
                                    src={user.profileImage}
                                    alt={user.username}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        const nextElement = e.currentTarget.nextElementSibling as HTMLElement;
                                        if (nextElement) {
                                            nextElement.style.display = 'flex';
                                        }
                                    }}
                                />
                            ) : null}
                            <div className="w-full h-full flex items-center justify-center" style={{ display: user.profileImage ? 'none' : 'flex' }}>
                                {user.username.charAt(0).toUpperCase()}
                            </div>
                        </div>

                        {/* User Info */}
                        <div className="flex-1 w-full lg:w-auto text-center lg:text-left">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                                <div className="flex flex-col">
                                    <h1 className="text-2xl lg:text-3xl font-bold text-gray-900">
                                        {user.firstName && user.lastName
                                            ? `${user.firstName} ${user.lastName}`.trim()
                                            : user.username
                                        }
                                    </h1>
                                    {user.firstName && user.lastName && user.username !== `${user.firstName} ${user.lastName}`.trim() && (
                                        <p className="text-sm text-gray-500">@{user.username}</p>
                                    )}
                                </div>
                                {user.isVerified && (
                                    <div className="flex items-center gap-1 text-indigo-600">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <span className="text-xs font-medium">Verified</span>
                                    </div>
                                )}
                            </div>

                            {user.bio && (
                                <p className="text-gray-600 mb-4 max-w-2xl mx-auto lg:mx-0">
                                    {user.bio}
                                </p>
                            )}

                            {/* Additional Info */}
                            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-sm text-gray-600">
                                <div className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <span>ចូលរួម {new Date(user.createdAt).toLocaleDateString('km-KH')}</span>
                                </div>
                                {user.location && (
                                    <div className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <span>{user.location}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Follow Button - Only show if not current user's profile */}
                        {currentUser && currentUser.id !== user.id && (
                            <div className="flex-shrink-0">
                                <button
                                    onClick={handleFollow}
                                    disabled={isFollowLoading}
                                    className={`px-6 py-2 rounded-lg font-medium transition-all duration-200 ${user.isFollowing
                                        ? 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                                        } ${isFollowLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                >
                                    {isFollowLoading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin inline mr-2" />
                                            {user.isFollowing ? 'កំពុងបញ្ឈប់' : 'កំពុងតាមដាន'}
                                        </>
                                    ) : user.isFollowing ? (
                                        <>
                                            <UserCheck className="w-4 h-4 inline mr-2" />
                                            បានតាមដាន
                                        </>
                                    ) : (
                                        <>
                                            <UserPlus className="w-4 h-4 inline mr-2" />
                                            តាមដាន
                                        </>
                                    )}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-2">
                        <div className="text-center p-4 bg-gray-50 rounded-lg border border-indigo-500/20">
                            <div className="text-2xl font-bold text-gray-900">{user.numberOfFollowers}</div>
                            <div className="text-sm text-gray-600">អ្នកតាមដាន</div>
                        </div>
                        <div className="text-center p-4 bg-gray-50 rounded-lg border border-indigo-500/20">
                            <div className="text-2xl font-bold text-gray-900">{user.numberOfFollowing}</div>
                            <div className="text-sm text-gray-600">កំពុងតាមដាន</div>
                        </div>
                    </div>
                </div>

                {/* Tab Navigation */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200 mb-6">
                    <div className="flex border-b border-gray-200">
                        {tabs.map((tab) => {
                            const Icon = tab.icon;
                            return (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium transition-all duration-200 ${activeTab === tab.id
                                        ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50'
                                        : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {tab.label}
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* Tab Content */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-200">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    );
}
