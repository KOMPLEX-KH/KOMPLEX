"use client";

import ForumCard from "@/components/pages/forums/ForumCard";
import ForumSkeleton from "@/components/pages/forums/ForumSkeleton";
import ContentError from "@/components/common/ContentError";
import { useState, useEffect } from "react";
import { feedForumService, feedSearchForumService, meForumService } from "@/services/index";
import Sidebar from "@/components/pages/forums/Sidebar";
import { ForumPost } from "@core-types/api-types/forums";

export default function Forum() {
	const [searchQuery, setSearchQuery] = useState("");
	const [forumPosts, setForumPosts] = useState<ForumPost[]>([]);
	const [loading, setLoading] = useState(true);
	const [isSearching, setIsSearching] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [match, setMatch] = useState(true);
	const fetchForumPosts = async () => {
		try {
			setLoading(true);
			setError(null);
			const forums = await feedForumService.getAllForums();
			if (forums.success && forums.data.length > 0) {
				setForumPosts(forums.data);
			} else {
				setError("រកមិនឃើញអត្ថបទ");
			}
		} catch (err) {
			setError("មានបញ្ហាក្នុងការទាញយកទិន្នន័យ។ សូមព្យាយាមម្តងទៀត។");
		} finally {
			setLoading(false);
		}
	};

	const handleSearch = async (query: string) => {
		setSearchQuery(query);

		if (query.trim() === "") {
			// If search is empty, fetch all forums
			fetchForumPosts();
			return;
		}

		try {
			setIsSearching(true);
			setError(null);
			const searchResults = await feedSearchForumService.searchForums(query, 50, 0);

			if (searchResults.data.length === 0) {
				setError("រកមិនឃើញអត្ថបទ");
				setForumPosts([]);
			} else {
				setMatch(searchResults.isMatch);
				setForumPosts(searchResults.data);
			}
		} catch {
			setError("មានបញ្ហាក្នុងការស្វែងរកអត្ថបទ");
		} finally {
			setIsSearching(false);
		}
	};

	useEffect(() => {
		fetchForumPosts();
	}, []);

	const handleLikeClick = async (postId: number, isLiked: boolean) => {
		try {
			await meForumService.toggleForumLike(postId.toString(), isLiked);
			setForumPosts((prev) =>
				prev.map((post) =>
					post.id === postId
						? { ...post, likeCount: isLiked ? post.likeCount - 1 : post.likeCount + 1, isLiked: !isLiked }
						: post
				)
			);
		} catch (error) {
			console.error("Error liking post:", error);
		}
	};

	// Use forum posts directly since search filtering is handled by the backend
	const filteredPosts = forumPosts;

	// Early returns for loading and error states
	if (loading || isSearching) {
		return (
			<div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
				{/* Main Content */}
				<div className="lg:pt-20 pt-36 p-5 max-w-7xl mx-auto">
					<div className="flex gap-6">
						<Sidebar onSearch={handleSearch} />
						{/* Main Content Area */}
						<div className="flex-1">
							<ForumSkeleton count={6} />
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="min-h-screen bg-gray-50 dark:bg-zinc-900">
				{/* Main Content */}
				<div className="pt-36 lg:pt-20 p-5 max-w-7xl mx-auto">
					<div className="flex gap-6">
						<Sidebar onSearch={handleSearch} />
						{/* Main Content Area */}
						<div className="flex-1">
							<ContentError type={error === "រកមិនឃើញអត្ថបទ" ? "no-results" : "error"} message={error} />
						</div>
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="min-h-screen bg-gray-50 dark:bg-zinc-900">

			{/* Main Content */}
			<div className="pt-36 lg:pt-20 p-5 max-w-7xl mx-auto">
				<div className="flex gap-6">
					{/* Sidebar */}
					<Sidebar onSearch={handleSearch} />

					{/* Main Content Area */}
					<div className="flex-1">
						{/* Search Results Header */}
						{searchQuery && (
							<div className="mb-6">
								<p className={`text-lg font-semibold ${match ? "text-gray-700 dark:text-zinc-400" : "text-red-600"}`}>
									{match ? "លទ្ធផលស្វែងរក" : "គ្មានលទ្ធផល"}: &ldquo;{searchQuery}&rdquo;
								</p>
							</div>
						)}

						{/* Forum Posts List */}
						<div className="flex flex-col gap-5">
							{filteredPosts.length > 0 ? (
								filteredPosts.map((post) => (
									<ForumCard
										key={post.id}
										post={post}
										isFromBasePage={true}
										onLikeClick={() => handleLikeClick(post.id, post.isLiked)}
									/>
								))
							) : (
								<ContentError type="no-results" message="រកមិនឃើញអត្ថបទ" />
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
