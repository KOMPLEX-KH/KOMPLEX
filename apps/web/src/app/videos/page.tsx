"use client";

import React, { useEffect, useState } from "react";
import { Search, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import VideoCard from "@/components/pages/videos/VideoCard";
import VideoCardSkeleton from "@/components/pages/videos/VideoCardSkeleton";
import Sidebar from "@/components/pages/videos/Sidebar";
import ContentError from "@/components/common/ContentError";
import { VideoPost } from "@/types/content/videos";
import { feedVideoService, feedSearchVideoService } from "@/services/index";

export default function VideoPage() {
	const [searchQuery, setSearchQuery] = useState<string>("");
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const router = useRouter();
	const [videos, setVideos] = useState<VideoPost[]>([]);
	const [loading, setLoading] = useState(true);
	const [isSearching, setIsSearching] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [match, setMatch] = useState(false);
	const [hasSearched, setHasSearched] = useState(false); // NEW

	const fetchVideos = async () => {
		try {
			setLoading(true);
			setError(null);
			const { data } = await feedVideoService.getAllVideos();
			if (data.length > 0) {
				setVideos(data);
			} else {
				setError("គ្មានវីដេអូ");
			}
		} catch (error) {
			console.error("Error fetching videos:", error);
			setError("មានបញ្ហាក្នុងការទាញយកវីដេអូ");
		} finally {
			setLoading(false);
		}
	};

	const handleSearch = async (query: string) => {
		setSearchQuery(query);
		setHasSearched(true); // only show results header after search

		if (query.trim() === "") {
			fetchVideos();
			return;
		}

		try {
			setIsSearching(true);
			setError(null);
			const searchResults = await feedSearchVideoService.searchVideos(query, 50, 0);

			if (searchResults.data.length === 0) {
				setError("រកមិនឃើញវីដេអូ");
				setVideos([]);
			} else {
				setMatch(searchResults.isMatch);
				setVideos(searchResults.data);
			}
		} catch {
			setError("មានបញ្ហាក្នុងការស្វែងរកវីដេអូ");
		} finally {
			setIsSearching(false);
		}
	};

	const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSearch(e.currentTarget.value);
		}
	};

	useEffect(() => {
		fetchVideos();
	}, []);

	const handleVideoClick = (videoId: string) => {
		router.push(`/videos/${videoId}`);
	};

	const filteredVideos = videos;

	if (loading || isSearching) {
		return (
			<div className="flex h-screen bg-gray-50 pt-15">
				<Sidebar sidebarOpen={sidebarOpen} onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />
				<div className="flex-1 overflow-y-scroll relative">
					<div className="bg-white shadow-sm border-b border-gray-200 lg:p-2 py-2 px-5 sticky top-0 z-10">
						<div className="flex justify-center items-center gap-2">
							<button
								onClick={() => setSidebarOpen(true)}
								className="lg:hidden  text-gray-600 "
							>
								<Menu size={20} />
							</button>
							<div className="flex-1 relative max-w-[700px]">
								<Search
									className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
									size={20}
								/>
								<input
									type="text"
									placeholder="ស្វែងរកវីដេអូ..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									onKeyPress={handleKeyPress}
									autoComplete="off"
									autoCorrect="off"
									spellCheck={false}
									className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
								/>
							</div>
						</div>
					</div>
					<div className="p-6">
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
							<VideoCardSkeleton count={6} />
						</div>
					</div>
				</div>
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex h-screen bg-gray-50 pt-15">
				<Sidebar sidebarOpen={sidebarOpen} onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />
				<div className="flex-1 overflow-y-scroll relative">
					<div className="bg-white shadow-sm border-b border-gray-200 lg:p-2 py-2 px-5 sticky top-0 z-10">
						<div className="flex justify-center items-center gap-2">
							<button
								onClick={() => setSidebarOpen(true)}
								className="lg:hidden  text-gray-600 "
							>
								<Menu size={20} />
							</button>
							<div className="flex-1 relative max-w-[700px]">
								<Search
									className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
									size={20}
								/>
								<input
									type="text"
									placeholder="ស្វែងរកវីដេអូ..."
									value={searchQuery}
									onChange={(e) => setSearchQuery(e.target.value)}
									onKeyPress={handleKeyPress}
									autoComplete="off"
									autoCorrect="off"
									spellCheck={false}
									className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
								/>
							</div>
						</div>
					</div>
					<div className="p-6">
						<ContentError type={error === "គ្មានវីដេអូ" ? "no-results" : "error"} message={error} />
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className="flex h-screen bg-gray-50 pt-15">
			<Sidebar sidebarOpen={sidebarOpen} onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />

			{/* Main Content */}
			<div className="flex-1 overflow-y-scroll relative">
				{/* Header */}
				<div className="bg-white border-b border-gray-200 lg:p-2 py-2 px-5 sticky top-0 z-10">
					<div className="flex justify-center items-center gap-2">
						{/* Mobile Menu Button */}
						<button
							onClick={() => setSidebarOpen(true)}
							className="lg:hidden  text-gray-600 "
						>
							<Menu size={20} />
						</button>

						<div className="flex-1 relative max-w-[700px]">
							<Search
								className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
								size={20}
							/>
							<input
								type="text"
								placeholder="ស្វែងរកវីដេអូ..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								onKeyPress={handleKeyPress}
								autoComplete="off"
								autoCorrect="off"
								spellCheck={false}
								className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
							/>
						</div>
					</div>
				</div>

				{/* Search Results Header */}
				{hasSearched && (
					<div className="px-6 pt-4">
						<p className={`text-lg font-semibold ${match ? "text-gray-700" : "text-red-600"}`}>
							{match ? "លទ្ធផលស្វែងរក" : "គ្មានលទ្ធផល"}: &ldquo;{searchQuery}&rdquo;
						</p>
						<p className="text-sm text-gray-500">រកឃើញ {videos.length} វីដេអូ</p>
					</div>
				)}

				{/* Video Grid */}
				<div className="p-6">
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
						{filteredVideos.map((video) => (
							<VideoCard
								key={video.id}
								video={video}
								variant="default"
								onClick={() => handleVideoClick(video.id.toString())}
							/>
						))}
					</div>

					{filteredVideos.length === 0 && hasSearched && (
						<ContentError type="no-results" message="រកមិនឃើញវីដេអូ" />
					)}
				</div>
			</div>
		</div>
	);
}
