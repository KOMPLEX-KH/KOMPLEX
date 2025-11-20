// 'use client';

// import Sidebar from '@/components/pages/me/Sidebar';
// import ContentError from '@/components/common/ContentError';
// import { authService } from '@/services/index';
// import { User } from '@/types/auth';
// import Link from 'next/link';
// import { Mail, Calendar, Phone, User as UserIcon, AtSign, ShieldCheck, ShieldAlert, UserCircle, Settings } from 'lucide-react';
// import { useState } from 'react';
// import { useEffect } from 'react';
// import { useRouter } from 'next/navigation';
// import { useAuth } from '@hooks/useAuth';

// export default function ProfilePage() {
//     const { user: authUser, loading: authLoading } = useAuth();
//     const router = useRouter();
//     const [user, setUser] = useState<User | null>(null);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     // Redirect to auth if not authenticated
//     useEffect(() => {
//         if (!authLoading && !authUser) {
//             router.push('/auth');
//         }
//     }, [authUser, authLoading, router]);

//     useEffect(() => {
//         if (authUser) {
//             const fetchProfile = async () => {
//                 try {
//                     setLoading(true);
//                     setError(null);
//                     const userData = await authService.getCurrentUser();
//                     setUser(userData);
//                 } catch (error) {
//                     console.error('Error fetching profile:', error);
//                     setError('មានបញ្ហាក្នុងការទាញយកព័ត៌មានប្រវត្តិ។ សូមព្យាយាមម្តងទៀត។');
//                     setUser(null);
//                 } finally {
//                     setLoading(false);
//                 }
//             };
//             fetchProfile();
//         }
//     }, [authUser]);

//     // Show loading while checking auth or fetching data
//     if (authLoading || loading) {
//         return (
//             <div className="flex min-h-screen bg-gray-50">
//                 <Sidebar />
//                 <div className="flex-1 lg:ml-64 pt-32 lg:pt-20">
//                     <div className=" mx-auto p-6">
//                         {/* Header Skeleton */}
//                         <div className="mb-8">
//                             <div className="h-8 bg-gray-200 rounded w-2/3 sm:w-1/2 md:w-1/3 animate-pulse"></div>
//                             <div className="h-4 bg-gray-200 rounded w-3/4 sm:w-1/2 mt-2 animate-pulse"></div>
//                         </div>

//                         {/* Profile Card Skeleton */}
//                         <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6 animate-pulse">
//                             <div className="flex flex-col gap-4 mb-6 md:flex-row md:items-start md:justify-between">
//                                 <div className="flex items-center gap-4">
//                                     <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-200 rounded-full"></div>
//                                     <div>
//                                         <div className="h-6 bg-gray-200 rounded w-32 sm:w-48 mb-2"></div>
//                                         <div className="h-4 bg-gray-200 rounded w-24 sm:w-32"></div>
//                                     </div>
//                                 </div>
//                                 <div className="h-10 bg-gray-200 rounded w-24 sm:w-32 mt-4 md:mt-0"></div>
//                             </div>

//                             <div className="h-px bg-gray-200 mb-6"></div>

//                             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//                                 {[...Array(6)].map((_, i) => (
//                                     <div key={i} className="bg-gray-50 rounded-xl p-3 sm:p-4">
//                                         <div className="flex items-center gap-3">
//                                             <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-200 rounded-lg"></div>
//                                             <div className="flex-1">
//                                                 <div className="h-3 bg-gray-200 rounded w-16 sm:w-20 mb-2"></div>
//                                                 <div className="h-4 bg-gray-200 rounded w-20 sm:w-24"></div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     // Don't render anything if not authenticated (will redirect)
//     if (!authUser) {
//         return null;
//     }

//     // Handle all error states at the top level
//     if (error) {
//         return (
//             <div className="flex min-h-screen bg-gray-50">
//                 <Sidebar />
//                 <div className="flex-1 lg:ml-64 pt-32 lg:pt-20">
//                     <div className=" mx-auto p-6">
//                         <div className="mb-8">
//                             <div className="flex items-center gap-3 mb-2">
//                                 <UserCircle className="w-8 h-8 text-indigo-600" />
//                                 <h1 className="text-3xl font-bold text-gray-900">ប្រវត្តិរបស់ខ្ញុំ</h1>
//                             </div>
//                             <p className="text-gray-600">ព័ត៌មានផ្ទាល់ខ្លួននិងការកំណត់</p>
//                         </div>
//                         <ContentError type="error" message={error} />
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     if (!user) {
//         return (
//             <div className="flex min-h-screen bg-gray-50">
//                 <Sidebar />
//                 <div className="flex-1 lg:ml-64 pt-32 lg:pt-20">
//                     <div className="max-w-7xl mx-auto p-6">
//                         <div className="mb-8">
//                             <div className="flex items-center gap-3 mb-2">
//                                 <UserCircle className="w-8 h-8 text-indigo-600" />
//                                 <h1 className="text-3xl font-bold text-gray-900">ប្រវត្តិរបស់ខ្ញុំ</h1>
//                             </div>
//                             <p className="text-gray-600">ព័ត៌មានផ្ទាល់ខ្លួននិងការកំណត់</p>
//                         </div>
//                         <div className="bg-white border border-gray-200 rounded-3xl p-12 text-center">
//                             <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
//                                 <UserCircle className="w-8 h-8 text-gray-400" />
//                             </div>
//                             <h3 className="text-lg font-medium text-gray-900 mb-2">អ្នកមិនទាន់បានចូលគណនីទេ</h3>
//                             <p className="text-gray-500 mb-6">សូមចូលគណនីដើម្បីមើលព័ត៌មានប្រវត្តិរបស់អ្នក</p>
//                             <Link
//                                 href="/auth"
//                                 className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium"
//                             >
//                                 ចូលទៅកាន់
//                             </Link>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="flex min-h-screen bg-gray-50">
//             <Sidebar />
//             <div className="flex-1 lg:ml-64 pt-32 lg:pt-20">
//                 <div className=" mx-auto p-6">
//                     {/* Header */}
//                     <div className="mb-8">
//                         <div className="flex items-center gap-3 mb-2">
//                             <UserCircle className="w-8 h-8 text-indigo-600" />
//                             <h1 className="text-3xl font-bold text-gray-900">ប្រវត្តិរបស់ខ្ញុំ</h1>
//                         </div>
//                         <p className="text-gray-600">ព័ត៌មានផ្ទាល់ខ្លួននិងការកំណត់</p>
//                     </div>

//                     {/* Profile Card */}
//                     <div className="bg-white border border-gray-200 rounded-3xl p-6 shadow-sm">
//                         <div className="flex items-start justify-between gap-4 mb-6">
//                             <div className="flex items-center gap-4">
//                                 {user.profileImage ? (
//                                     <img
//                                         src={user.profileImage}
//                                         alt="Profile"
//                                         className="w-20 h-20 rounded-full object-cover border-2 border-indigo-500 shadow-lg"
//                                     />
//                                 ) : (
//                                     <div className="w-20 h-20 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
//                                         {((`${user.firstName || ''} ${user.lastName || ''}`.trim()) || user.username || user.email || 'U').charAt(0)}
//                                     </div>
//                                 )}
//                                 <div>
//                                     <div className="flex items-center gap-3 flex-wrap">
//                                         <h2 className="text-2xl font-semibold text-gray-900">
//                                             {`${user.firstName || ''} ${user.lastName || ''}`.trim() || user.username}
//                                         </h2>
//                                         {user.isVerified && (
//                                             <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
//                                                 <ShieldCheck size={12} />
//                                                 បានផ្ទៀងផ្ទាត់
//                                             </div>
//                                         )}
//                                     </div>
//                                     <div className="mt-1 flex items-center gap-2 text-gray-600">
//                                         <Mail size={16} />
//                                         <span className="text-sm">{user.email}</span>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* <Link
//                                 href="/settings"
//                                 className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/20 transition-all duration-200 font-medium"
//                             >
//                                 <Settings size={16} />
//                                 កែប្រែព័ត៌មាន
//                             </Link> */}
//                         </div>

//                         <div className="h-px bg-gray-200 mb-6"></div>

//                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                             <div className="bg-white transition-all duration-200 rounded-full p-4 border border-gray-200 hover:border-indigo-200 ">
//                                 <div className="flex items-center gap-3">
//                                     <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
//                                         <AtSign size={16} />
//                                     </div>
//                                     <div>
//                                         <div className="text-xs text-gray-500 font-medium">ឈ្មោះអ្នកប្រើប្រាស់</div>
//                                         <div className="text-gray-900 font-semibold">{user.username}</div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="bg-white transition-all duration-200 rounded-full p-4 border border-gray-200 hover:border-indigo-200 ">
//                                 <div className="flex items-center gap-3">
//                                     <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
//                                         <UserIcon size={16} />
//                                     </div>
//                                     <div>
//                                         <div className="text-xs text-gray-500 font-medium">ឈ្មោះ</div>
//                                         <div className="text-gray-900 font-semibold">{user.firstName || '-'}</div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="bg-white transition-all duration-200 rounded-full p-4 border border-gray-200 hover:border-indigo-200 ">
//                                 <div className="flex items-center gap-3">
//                                     <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
//                                         <UserIcon size={16} />
//                                     </div>
//                                     <div>
//                                         <div className="text-xs text-gray-500 font-medium">នាមត្រកូល</div>
//                                         <div className="text-gray-900 font-semibold">{user.lastName || '-'}</div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="bg-white transition-all duration-200 rounded-full p-4 border border-gray-200 hover:border-indigo-200 ">
//                                 <div className="flex items-center gap-3">
//                                     <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
//                                         <Calendar size={16} />
//                                     </div>
//                                     <div>
//                                         <div className="text-xs text-gray-500 font-medium">ថ្ងៃខែឆ្នាំកំណើត</div>
//                                         <div className="text-gray-900 font-semibold">{user.dateOfBirth || '-'}</div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="bg-white transition-all duration-200 rounded-full p-4 border border-gray-200 hover:border-indigo-200 ">
//                                 <div className="flex items-center gap-3">
//                                     <div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
//                                         <Phone size={16} />
//                                     </div>
//                                     <div>
//                                         <div className="text-xs text-gray-500 font-medium">លេខទូរស័ព្ទ</div>
//                                         <div className="text-gray-900 font-semibold">{user.phone || '-'}</div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="bg-white transition-all duration-200 rounded-full p-4 border border-gray-200 hover:border-indigo-200 ">
//                                 <div className="flex items-center gap-3">
//                                     <div className={`p-2 rounded-lg ${user.isVerified ? 'bg-green-100 text-green-600' : 'bg-amber-100 text-amber-600'}`}>
//                                         {user.isVerified ? <ShieldCheck size={16} /> : <ShieldAlert size={16} />}
//                                     </div>
//                                     <div>
//                                         <div className="text-xs text-gray-500 font-medium">ស្ថានភាព</div>
//                                         <div className="text-gray-900 font-semibold">
//                                             {user.isVerified ? 'បានផ្ទៀងផ្ទាត់' : 'មិនទាន់ផ្ទៀងផ្ទាត់'}
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }


