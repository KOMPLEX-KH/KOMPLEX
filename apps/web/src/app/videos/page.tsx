"use client";

import React, { useEffect, useState, useRef } from "react";
import { Search, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import VideoCard from "@/components/pages/videos/VideoCard";
import VideoCardSkeleton from "@/components/pages/videos/VideoCardSkeleton";
import Sidebar from "@/components/pages/videos/Sidebar";
import ContentError from "@/components/common/ContentError";
import { VideoPost } from "@core-types/api-types/videos";
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
	const [isScrollingDown, setIsScrollingDown] = useState(false);
	const lastScrollYRef = useRef(0);
	const scrollUpThresholdRef = useRef(0);

	const fetchVideos = async () => {
		try {
			setLoading(true);
			setError(null);
			const response = await feedVideoService.getAllVideos();
			if (response.success) {
				setVideos(response.data);
			} else {
				setError("មានបញ្ហាក្នុងការទាញយកវីដេអូ");
			}
		} catch (error) {
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

	// Handle scroll direction detection for mobile search bar hiding
	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			const lastScrollY = lastScrollYRef.current;

			if (currentScrollY > lastScrollY && currentScrollY > 50) {
				// Scrolling down and past initial 50px
				setIsScrollingDown(true);
				scrollUpThresholdRef.current = 0; // Reset threshold
			} else if (currentScrollY < lastScrollY) {
				// Scrolling up - accumulate threshold
				scrollUpThresholdRef.current += (lastScrollY - currentScrollY);

				// Only show when scrolling up by at least 100px
				if (scrollUpThresholdRef.current >= 100 || currentScrollY <= 100) {
					setIsScrollingDown(false);
					scrollUpThresholdRef.current = 0; // Reset after showing
				}
			} else if (currentScrollY <= 100) {
				// Near top - always show
				setIsScrollingDown(false);
				scrollUpThresholdRef.current = 0;
			}

			lastScrollYRef.current = currentScrollY;
		};

		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	const handleVideoClick = (videoId: string) => {
		router.push(`/videos/${videoId}`);
	};

	const filteredVideos = videos;

	if (loading || isSearching) {
		return (
			<div className="flex h-screen bg-gray-50 dark:bg-zinc-900 pt-15">
				<Sidebar sidebarOpen={sidebarOpen} onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />
				<div className="flex-1 overflow-y-scroll relative">
					<div className={`bg-white dark:bg-zinc-900 shadow-sm border-b border-gray-200 dark:border-zinc-800 lg:p-2 py-2 px-5 sticky top-0 z-10 transition-transform duration-300 ${isScrollingDown ? 'lg:translate-y-0 -translate-y-full' : 'translate-y-0'}`}>
						<div className="flex justify-center items-center gap-2">
							<button
								onClick={() => setSidebarOpen(true)}
								className="lg:hidden  text-gray-600 dark:text-zinc-400 "
							>
								<Menu size={20} />
							</button>
							<div className="flex-1 relative max-w-[700px]">
								<Search
									className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-zinc-400"
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
									className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-zinc-800 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
			<div className="flex h-screen bg-gray-50 dark:bg-zinc-900 pt-15">
				<Sidebar sidebarOpen={sidebarOpen} onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />
				<div className="flex-1 overflow-y-scroll relative">
					<div className={`bg-white dark:bg-zinc-900 shadow-sm border-b border-gray-200 dark:border-zinc-800 lg:p-2 py-2 px-5 sticky top-0 z-10 transition-transform duration-300 ${isScrollingDown ? 'lg:translate-y-0 -translate-y-full' : 'translate-y-0'}`}>
						<div className="flex justify-center items-center gap-2">
							<button
								onClick={() => setSidebarOpen(true)}
								className="lg:hidden  text-gray-600 dark:text-zinc-400 "
							>
								<Menu size={20} />
							</button>
							<div className="flex-1 relative max-w-[700px]">
								<Search
									className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-zinc-400"
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
									className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-zinc-800 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-zinc-400"
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
		<div className="flex h-screen bg-gray-50 dark:bg-zinc-900 pt-15">
			<Sidebar sidebarOpen={sidebarOpen} onSidebarToggle={() => setSidebarOpen(!sidebarOpen)} />

			{/* Main Content */}
			<div className="flex-1 overflow-y-scroll relative">
				{/* Header */}
				<div className={`bg-white dark:bg-zinc-900 border-b border-gray-200 dark:border-zinc-800 lg:p-2 py-2 px-5 sticky top-0 z-10 transition-transform duration-300 ${isScrollingDown ? 'lg:translate-y-0 -translate-y-full' : 'translate-y-0'}`}>
					<div className="flex justify-center items-center gap-2">
						{/* Mobile Menu Button */}
						<button
							onClick={() => setSidebarOpen(true)}
							className="lg:hidden  text-gray-600 dark:text-zinc-400 "
						>
							<Menu size={20} />
						</button>

						<div className="flex-1 relative max-w-[700px]">
							<Search
								className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-zinc-400"
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
								className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-zinc-800 rounded-full focus:ring-2 focus:ring-indigo-500 focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-zinc-400"
							/>
						</div>
					</div>
				</div>

				{/* Search Results Header */}
				{hasSearched && (
					<div className="px-6 pt-4">
						<p className={`text-lg font-semibold ${match ? "text-gray-700 dark:text-zinc-400" : "text-red-600"}`}>
							{match ? "លទ្ធផលស្វែងរក" : "គ្មានលទ្ធផល"}: &ldquo;{searchQuery}&rdquo;
						</p>
						<p className="text-sm text-gray-500 dark:text-zinc-400">រកឃើញ {videos.length} វីដេអូ</p>
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
