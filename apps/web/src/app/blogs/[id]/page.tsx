import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect-error";
export default function BlogPostPage() {
    redirect("/not-found", RedirectType.replace)
}

// 'use client';

// import { useParams } from 'next/navigation';
// import Link from 'next/link';
// import { ArrowLeft, Bookmark, UserPlus, UserCheck } from 'lucide-react';
// import { useEffect, useState } from 'react';
// import Carousel from '@/components/common/Carousel';
// import { Blog } from '@/types/content/blogs';
// import { feedBlogService, meBlogService, meFollowService } from '@/services/index';
// import { BlogPostSkeleton } from '@/components/pages/blogs/BlogPostSkeleton';
// import ContentError from '@/components/common/ContentError';
// import { useAuth } from '@hooks/useAuth';
// import MarkdownRenderer from '@/components/helper/MarkDownRenderer';
// import { BackButton } from '@/components/common/BackButton';
// export default function BlogPost() {
//     const params = useParams();
//     const id = params.id as string;

//     const [blogPost, setBlogPost] = useState<Blog | null>(null);
//     const [isSaved, setIsSaved] = useState(false);
//     const [isFollowing, setIsFollowing] = useState(false);
//     const [isFollowLoading, setIsFollowLoading] = useState(false);

//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);

//     const { user, openLoginModal } = useAuth()

//     useEffect(() => {

//         const fetchBlogPost = async () => {
//             try {
//                 setIsLoading(true);
//                 setError(null);
//                 const data = await feedBlogService.getBlogById(id);
//                 setIsSaved(data.isSaved);
//                 setIsFollowing(data.isFollowing);
//                 setBlogPost(data);
//             } catch (err) {
//                 console.error('Error fetching blog post:', err);
//                 setError('មានបញ្ហាក្នុងការទាញយកប្លុក');
//             } finally {
//                 setIsLoading(false);
//             }
//         };

//         if (id) {
//             fetchBlogPost();
//         }
//     }, [id]);

//     const handleToggleSave = async () => {
//         try {
//             if (!user) {
//                 openLoginModal();
//                 return;
//             }
//             await meBlogService.toggleBlogSave(id, isSaved);
//             setIsSaved(!isSaved);
//         } catch (err) {
//             console.error('Error bookmarking blog post:', err);
//             setError('មានបញ្ហាក្នុងការរក្សាទុកប្លុក');
//         }
//     }

//     const handleFollow = async () => {
//         if (!user) {
//             openLoginModal();
//             return;
//         }

//         // Don't allow following yourself
//         if (user.id === blogPost?.userId) {
//             return;
//         }

//         try {
//             setIsFollowLoading(true);

//             if (isFollowing) {
//                 await meFollowService.unfollowUser(blogPost!.userId);
//                 setIsFollowing(false);
//             } else {
//                 await meFollowService.followUser(blogPost!.userId);
//                 setIsFollowing(true);
//             }
//         } catch (error) {
//             console.error('Error toggling follow:', error);
//         } finally {
//             setIsFollowLoading(false);
//         }
//     };

//     if (isLoading) {
//         return <BlogPostSkeleton />;
//     }

//     if (error || !blogPost) {
//         return (
//             <div className="min-h-screen bg-gray-50">
//                 <div className="pt-36 p-5 max-w-7xl mx-auto">
//                     <ContentError type="error" message={error || 'មានបញ្ហាក្នុងការទាញយកប្លុក'} />
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <div className="min-h-screen bg-gray-50">
//             <div className="max-w-7xl mx-auto p-5 pt-20">
//                 {/* Back Button */}
//                 <BackButton href="/blogs" />

//                 {/* Blog Post */}
//                 <article className="lg:bg-white lg:rounded-3xl lg:shadow-lg lg:shadow-indigo-500/10 lg:border lg:border-indigo-500/10 overflow-hidden">
//                     {/* Header */}
//                     <div className="lg:p-6 ">
//                         <div className='flex items-center justify-between gap-2'>
//                             <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
//                                 {blogPost.title}
//                             </h1>
//                             <button onClick={handleToggleSave} className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium transition-colors duration-200">
//                                 {isSaved ? <Bookmark className="fill-indigo-600 w-8 h-8" /> : <Bookmark className="w-8 h-8" />}
//                             </button>
//                         </div>
//                         <div className="flex items-center  gap-3 mb-6 mt-4">
//                             <Link href={`/users/${blogPost.userId}`} className="flex items-center gap-3 hover:opacity-80 transition-opacity">
//                                 {blogPost.profileImage ? (
//                                     <img
//                                         src={blogPost.profileImage}
//                                         alt={blogPost.username}
//                                         className="w-10 h-10 rounded-full object-cover border-2 border-indigo-500"
//                                         onError={(e) => {
//                                             e.currentTarget.src = '/image-error.png'
//                                             e.currentTarget.nextElementSibling?.classList.remove('hidden');
//                                         }}
//                                     />
//                                 ) : <div className={`w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold ${blogPost.profileImage ? 'hidden' : ''}`}>
//                                     {blogPost.username.split(" ")[0].charAt(0)}
//                                 </div>}

//                                 <span className="font-semibold text-gray-900 hover:underline">{blogPost.username}</span>
//                             </Link>

//                             {/* Follow Button - Only show if not current user's post */}
//                             {user && user.id !== blogPost.userId && (
//                                 <button
//                                     onClick={handleFollow}
//                                     disabled={isFollowLoading}
//                                     className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${isFollowing
//                                         ? 'bg-indigo-100 text-indigo-700 border border-indigo-200 hover:bg-indigo-200'
//                                         : 'bg-indigo-600 text-white hover:bg-indigo-700'
//                                         } ${isFollowLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
//                                 >
//                                     {isFollowLoading ? (
//                                         <div className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin" />
//                                     ) : isFollowing ? (
//                                         <>
//                                             <UserCheck className="w-3 h-3" />
//                                             បានតាមដាន
//                                         </>
//                                     ) : (
//                                         <>
//                                             <UserPlus className="w-3 h-3" />
//                                             តាមដាន
//                                         </>
//                                     )}
//                                 </button>
//                             )}
//                         </div>
//                         <div className='flex items-center gap-2 mb-6'>
//                             <span className="text-gray-500 text-sm">{new Date(blogPost.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
//                         </div>


//                         {/* Article Content */}
//                         {
//                             blogPost.media.length > 0 && (
//                                 <Carousel media={blogPost.media.map(media => ({ url: media.url, type: media.type as "video" | "image" }))} />
//                             )
//                         }

//                         <MarkdownRenderer content={blogPost.description} />
//                     </div>
//                 </article>
//             </div>
//         </div>
//     );
// }
