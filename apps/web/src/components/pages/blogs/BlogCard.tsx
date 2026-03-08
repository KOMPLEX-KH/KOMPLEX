// 'use client';

// import { Blog } from "@/types/content/blogs";
// import { Eye } from "lucide-react";
// import Link from "next/link";

// interface BlogCardProps {
//   post: Blog;
// }

// export default function BlogCard({ post }: BlogCardProps) {
//   const getTimeAgo = (dateString: string): string => {
//     const date = new Date(dateString);
//     const now = new Date();
//     const diffMs = now.getTime() - date.getTime();
//     const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
//     const diffDays = Math.floor(diffHours / 24);

//     if (diffDays > 0) {
//       return `មុន ${diffDays} ថ្ងៃ`;
//     } else if (diffHours > 0) {
//       return `មុន ${diffHours} ម៉ោង`;
//     } else {
//       return 'ថ្មីៗនេះ';
//     }
//   };
//   return (
//     <Link href={`/blogs/${post.id}`} key={post.id} className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden border border-indigo-500/10 transition-all duration-300 cursor-pointer  ">
//       {/* Background Image */}
//       <img
//         src={post.media[0]?.url || '/image-error.png'}
//         alt={post.title}
//         className="absolute inset-0 w-full h-full object-cover"
//         onError={(e) => {
//           e.currentTarget.src = '/image-error.png';
//         }}
//       />

//       {/* Gradient Overlay for better text readability */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/15 to-transparent" />

//       {/* Content */}
//       <div className="relative z-10 h-full flex flex-col justify-end p-5 text-white">
//         <div className="flex items-center gap-2 mb-3 text-xs opacity-90">
//           <Link href={`/users/${post.userId}`} className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
//             {post.profileImage ? (
//               <img
//                 src={post.profileImage}
//                 alt={post.username}
//                 className="w-6 h-6 rounded-full object-cover border border-white/30 border-2 border-indigo-500"
//                 onError={(e) => {
//                   e.currentTarget.style.display = 'none';
//                   e.currentTarget.nextElementSibling?.classList.remove('hidden');
//                 }}
//               />
//             ) : null}
//             <div className={`w-6 h-6 rounded-full bg-indigo-600 backdrop-blur-sm flex items-center justify-center text-white font-semibold text-xs border border-white/30 ${post.profileImage ? 'hidden' : ''}`}>
//               {post.username.charAt(0)}
//             </div>
//             <span className="font-semibold text-white hover:underline">{post.username}</span>
//           </Link>
//           |
//           <span>{getTimeAgo(post.createdAt)}</span>
//         </div>

//         <div className="text-lg font-bold mb-2 leading-relaxed drop-shadow-sm">
//           {post.title}
//         </div>
//         <div className="flex items-center gap-4 text-sm text-white">
//           <span className='flex items-center gap-2'><Eye className="w-4 h-4" /> {post.viewCount} ទស្សនា</span>
//         </div>
//       </div>
//     </Link>
//   );
// } 
