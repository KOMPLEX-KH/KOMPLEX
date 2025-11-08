import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect-error";
export default function MyBlogPostPage() {
    redirect("/not-found", RedirectType.replace)
}

// 'use client';

// import { useState, useEffect, useCallback } from 'react';
// import { useParams, useRouter } from 'next/navigation';
// import { Trash, Edit } from 'lucide-react';
// import Sidebar from '@/components/pages/me/Sidebar';
// import Carousel from '@/components/common/Carousel';
// import EditBlog from '@/components/pages/me/blogs/EditBlog';
// import ContentError from '@/components/common/ContentError';
// import DeleteConfirm from '@/components/common/DeleteConfirm';
// import { Blog } from '@/types/content/blogs';
// import { feedBlogService, meBlogService } from '@/services/index';
// import { BlogPostSkeleton } from '@/components/pages/blogs/BlogPostSkeleton';
// import { useAuth } from '@hooks/useAuth';
// import MarkDownRenderer from '@/components/helper/MarkDownRenderer';
// import { BackButton } from '@/components/common/BackButton';


// export default function BlogPost() {
//     const { user, loading: authLoading } = useAuth();
//     const params = useParams();
//     const router = useRouter();
//     const id = params.id as string;

//     const [blogPost, setBlogPost] = useState<Blog>();
//     const [isLoading, setIsLoading] = useState(true);
//     const [error, setError] = useState<string | null>(null);
//     const [isEditMode, setIsEditMode] = useState(false);
//     const [showDeleteModal, setShowDeleteModal] = useState(false);

//     // Redirect to auth if not authenticated
//     useEffect(() => {
//         if (!authLoading && !user) {
//             router.push('/auth');
//         }
//     }, [user, authLoading, router]);

//     const fetchBlog = useCallback(async () => {
//         try {
//             setIsLoading(true);
//             setError(null);
//             const data = await feedBlogService.getBlogById(id);
//             setBlogPost(data);
//         } catch (error) {
//             console.error('Error fetching blog:', error);
//             setError('មានបញ្ហាក្នុងការទាញយកប្លុក');
//         } finally {
//             setIsLoading(false);
//         }
//     }, [id]);

//     // Fetch existing blog data
//     useEffect(() => {
//         if (id && user) {
//             fetchBlog();
//         }
//     }, [id, user, fetchBlog]);

//     const handleDeleteClick = () => {
//         setShowDeleteModal(true);
//     };

//     const handleDeleteConfirm = async () => {
//         try {
//             await meBlogService.deleteBlog(id);
//             router.push('/me/blogs');
//         } catch (error) {
//             console.error('Error deleting blog:', error);
//             alert('មានបញ្ហាក្នុងការលុបប្លុក');
//         }
//     };

//     const handleSave = (updatedBlog: Blog) => {
//         setBlogPost(updatedBlog);
//         setIsEditMode(false);
//     };

//     const handleCancel = () => {
//         setIsEditMode(false);
//     };

//     // Show loading while checking auth or fetching data
//     if (authLoading || isLoading) {
//         return (
//             <div className='flex min-h-screen bg-gray-50'>
//                 <Sidebar />
//                 <div className='flex-1 lg:ml-64 pt-32 lg:pt-16'>
//                     <BlogPostSkeleton />
//                 </div>
//             </div>
//         );
//     }

//     // Don't render anything if not authenticated (will redirect)
//     if (!user) {
//         return null;
//     }

//     if (error || !blogPost) {
//         return (
//             <div className="flex min-h-screen bg-gray-50">
//                 <Sidebar />
//                 <div className="flex-1 lg:ml-64 pt-32 lg:pt-16">
//                     <div className="max-w-7xl mx-auto p-5">
//                         <div className="mb-6 relative">
//                             <BackButton href='/me/blogs' />
//                         </div>
//                         <ContentError
//                             type="error"
//                             message={error || 'រកមិនឃើញប្លុក'}
//                         />
//                     </div>
//                 </div>
//             </div>
//         );
//     }

//     return (
//         <>
//             {!isEditMode ? (
//                 <div className="flex min-h-screen transition-colors duration-200 bg-gray-50">
//                     {/* Sidebar */}
//                     <Sidebar />

//                     {/* Main Content */}
//                     <div className="flex-1 lg:ml-64 pt-32 lg:pt-0">
//                         <div className=" mx-auto p-5">
//                             {/* Header with Back Button and Edit Button */}
//                             <div className='sticky top-20'><BackButton href='/me/blogs' /></div>
//                             <div className="mb-6 flex items-center justify-end relative">
//                                 <div className='flex gap-2 items-center '>
//                                     <button
//                                         onClick={handleDeleteClick}
//                                         className="inline-flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors font-medium"
//                                     >
//                                         <Trash className="w-4 h-4" />
//                                         លុប
//                                     </button>
//                                     <button
//                                         onClick={() => setIsEditMode(true)}
//                                         className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700 transition-colors font-medium"
//                                     >
//                                         <Edit className="w-4 h-4" />
//                                         កែប្រែ
//                                     </button>
//                                 </div>
//                             </div>

//                             {/* Blog Post Display */}
//                             <article className="lg:bg-white lg:rounded-3xl lg:shadow-lg lg:shadow-indigo-500/10 lg:border lg:border-indigo-500/10 overflow-hidden">
//                                 {/* Header */}
//                                 <div className="lg:p-6 ">
//                                     <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
//                                         {blogPost.title}
//                                     </h1>
//                                     <div className="flex items-center gap-3 mb-6">
//                                         <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
//                                             {blogPost.username.split(" ")[0].charAt(0)}
//                                         </div>
//                                         <div className='flex items-center gap-2'>
//                                             <span className="font-semibold text-gray-900">{blogPost.username}</span>
//                                             <span>|</span>
//                                             <span className="text-gray-500 text-sm">{new Date(blogPost.createdAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
//                                         </div>
//                                     </div>

//                                     {/* Media Carousel */}
//                                     {blogPost.media.length > 0 && (
//                                         <div className="mb-6">
//                                             <Carousel media={blogPost.media} />
//                                         </div>
//                                     )}

//                                     {/* Article Content */}
//                                     <div className="prose prose-lg max-w-none">
//                                         <MarkDownRenderer content={blogPost.description} />
//                                     </div>
//                                 </div>
//                             </article>
//                         </div>
//                     </div>
//                 </div>
//             ) : (
//                 /* Edit Mode */
//                 <div className="flex min-h-screen transition-colors duration-200 bg-gray-50">
//                     {/* Sidebar */}
//                     <Sidebar />

//                     {/* Main Content */}
//                     <div className="flex-1 lg:ml-64 pt-32 lg:pt-16">
//                         <EditBlog
//                             blog={blogPost}
//                             onSave={handleSave}
//                             onCancel={handleCancel}
//                         />
//                     </div>
//                 </div>
//             )}

//             {/* Delete Confirmation Modal */}
//             <DeleteConfirm
//                 isOpen={showDeleteModal}
//                 onClose={() => setShowDeleteModal(false)}
//                 onConfirm={handleDeleteConfirm}
//                 title="លុបប្លុក"
//                 message="តើអ្នកប្រាកដជាចង់លុបប្លុកនេះមែនទេ? សកម្មភាពនេះមិនអាចបញ្ច្រាស់បានទេ។"
//             />
//         </>
//     );
// } 