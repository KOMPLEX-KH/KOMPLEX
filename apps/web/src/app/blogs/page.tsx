import { redirect } from "next/navigation";
import { RedirectType } from "next/dist/client/components/redirect-error";
export default function BlogPage() {
    redirect("/not-found", RedirectType.replace)
}

// "use client";

// import BlogCard from "@/components/pages/blogs/BlogCard";
// import { useEffect, useState } from "react";
// import { Blog } from "@/types/content/blogs";
// import { feedBlogService, feedSearchBlogService } from "@/services/index";
// import BlogsSkeleton from "@/components/pages/blogs/BlogsSkeleton";
// import BlogError from "@/components/common/ContentError";
// import Sidebar from "@/components/pages/blogs/Sidebar";

// // ! TO CHANGE TOPIC AND TYPE FILTERING

// export default function BlogPage() {
// 	const [blogPosts, setBlogPosts] = useState<Blog[]>([]);
// 	const [searchQuery, setSearchQuery] = useState("");
// 	const [isLoading, setIsLoading] = useState(true);
// 	const [isSearching, setIsSearching] = useState(false);
// 	const [error, setError] = useState<string | null>(null);
// 	const [match, setMatch] = useState(false);

// 	const fetchBlogPosts = async () => {
// 		try {
// 			setIsLoading(true);
// 			setError(null);
// 			const data = await feedBlogService.getAllBlogs();
// 			if (data.blogs.length === 0) {
// 				setError("រកមិនឃើញប្លុក");
// 			} else {
// 				setBlogPosts(data.blogs);
// 			}
// 		} catch {
// 			setError("មានបញ្ហាក្នុងការទាញយកប្លុក");
// 		} finally {
// 			setIsLoading(false);
// 		}
// 	};

// 	const handleSearch = async (query: string) => {
// 		setSearchQuery(query);

// 		if (query.trim() === "") {
// 			// If search is empty, fetch all blogs
// 			fetchBlogPosts();
// 			return;
// 		}

// 		try {
// 			setIsSearching(true);
// 			setError(null);
// 			const searchResults = await feedSearchBlogService.searchBlogs(query, 50, 0);

// 			if (searchResults.data.length === 0) {
// 				setError("រកមិនឃើញប្លុក");
// 				setBlogPosts([]);
// 			} else {
// 				setMatch(searchResults.isMatch);
// 				setBlogPosts(searchResults.data);
// 			}
// 		} catch {
// 			setError("មានបញ្ហាក្នុងការស្វែងរកប្លុក");
// 		} finally {
// 			setIsSearching(false);
// 		}
// 	};

// 	useEffect(() => {
// 		fetchBlogPosts();
// 	}, []);

// 	if (isLoading || isSearching) {
// 		return (
// 			<div className="min-h-screen bg-gray-50">
// 				<div className="pt-36 lg:pt-20 p-5 max-w-7xl mx-auto">
// 					<div className="flex gap-6">
// 						<Sidebar onSearch={handleSearch} />
// 						{/* Main Content Area */}
// 						<div className="flex-1">
// 							<BlogsSkeleton />
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}

// 	if (error) {
// 		return (
// 			<div className="min-h-screen bg-gray-50">
// 				<div className="pt-36 lg:pt-20 p-5 max-w-7xl mx-auto">
// 					<div className="flex gap-6">
// 						<Sidebar onSearch={handleSearch} />
// 						{/* Main Content Area */}
// 						<div className="flex-1">
// 							<BlogError type={error === "រកមិនឃើញប្លុក" ? "no-results" : "error"} message={error} />
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		);
// 	}

// 	// Get featured post (first post) and remaining posts
// 	// If we have search results, use them directly; otherwise, use the original filtering logic
// 	const sortedPosts = [...blogPosts].sort((a, b) => b.viewCount - a.viewCount);
// 	const featuredPost = sortedPosts[0];
// 	const remainingPosts = sortedPosts.slice(1);

// 	return (
// 		<div className="min-h-screen bg-gray-50">
// 			{/* Main Content */}
// 			<div className="pt-36 lg:pt-20 p-5 max-w-7xl mx-auto">
// 				<div className="flex gap-6">
// 					{/* Sidebar */}
// 					<Sidebar onSearch={handleSearch} />

// 					{/* Main Content Area */}
// 					<div className="flex-1 w-full lg:w-auto">
// 						{/* Search Results Header */}
// 						{searchQuery && (
// 							<div className="mb-6">
// 								<p className={`text-lg font-semibold ${match ? "text-gray-700" : "text-red-600"}`}>
// 									{match ? "លទ្ធផលស្វែងរក" : "គ្មានលទ្ធផល"}: &ldquo;{searchQuery}&rdquo;
// 								</p>
// 							</div>
// 						)}

// 						{/* Featured Post Section */}
// 						<div className="mb-8">
// 							{/* <p className='text-2xl font-bold text-left mb-6 flex items-center gap-2'>
//                                 <Star className='w-6 h-6 text-indigo-500' />
//                                 ប្លុកពេញនិយម
//                             </p> */}

// 							{featuredPost && (
// 								<div className="flex justify-center items-center">
// 									<BlogCard key={featuredPost.id} post={featuredPost} />
// 								</div>
// 							)}
// 						</div>

// 						{/* Blog Posts Grid */}

// 						<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// 							{remainingPosts.map((post: Blog) => (
// 								<BlogCard key={post.id} post={post} />
// 							))}
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
