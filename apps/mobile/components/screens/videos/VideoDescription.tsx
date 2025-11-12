import { useEffect, useMemo, useRef, useState } from "react";
import {
    View,
    Text,
    Pressable,
    Share as NativeShare,
    ActivityIndicator,
    Image,
} from "react-native";
import {
    ThumbsUp,
    Share2,
    Bookmark,
    Check,
    Link2,
    UserPlus,
    UserCheck,
} from "lucide-react-native";
import * as Clipboard from "expo-clipboard";
import { VideoPost } from "@/types/content/videos";
import { meFollowService } from "@/services/index";
import { useAuth } from "@/hooks/useAuth";
import { tw } from "@/utils/styles";
// import MarkDownRenderer from "@/components/helper/MarkDownRenderer";
import { useRouter, Href } from "expo-router";

interface VideoDescriptionProps {
    video: VideoPost;
    onLike: (videoId: number, isLiked: boolean, video: VideoPost) => void;
    onBookmark: (videoId: number, isSaved: boolean, video: VideoPost) => void;
}

const SHARE_BASE_URL = process.env.EXPO_PUBLIC_WEB_URL ?? "https://komplex.app";

const formatViewCount = (count: number): string => {
    if (count >= 1_000_000) {
        return `${(count / 1_000_000).toFixed(1)}M`;
    }
    if (count >= 1_000) {
        return `${(count / 1_000).toFixed(1)}K`;
    }
    return count.toString();
};

const getTimeAgo = (dateString: string): string => {
    const date = new Date(dateString);
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);

    if (diffDays > 0) {
        return `មុន ${diffDays} ថ្ងៃ`;
    }
    if (diffHours > 0) {
        return `មុន ${diffHours} ម៉ោង`;
    }
    return "ថ្មីៗនេះ";
};

export default function VideoDescription({
    video,
    onLike,
    onBookmark,
}: VideoDescriptionProps) {
    const router = useRouter();
    const { user } = useAuth();

    const [showFullDescription, setShowFullDescription] = useState(false);
    const [copied, setCopied] = useState(false);
    const [isFollowing, setIsFollowing] = useState(video.isFollowing);
    const [isFollowLoading, setIsFollowLoading] = useState(false);

    const copyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        return () => {
            if (copyTimeoutRef.current) {
                clearTimeout(copyTimeoutRef.current);
            }
        };
    }, []);

    const charLimit = 400;
    const isTruncated = video.description.length > charLimit;
    const displayText = showFullDescription
        ? video.description
        : video.description.slice(0, charLimit);

    const shareUrl = useMemo(
        () => `${SHARE_BASE_URL.replace(/\/$/, "")}/videos/${video.id}`,
        [video.id]
    );

    const handleFollow = async () => {
        if (!user) {
            router.replace("/auth");
            return;
        }

        if (user.id === video.userId) {
            return;
        }

        try {
            setIsFollowLoading(true);

            if (isFollowing) {
                await meFollowService.unfollowUser(video.userId);
                setIsFollowing(false);
            } else {
                await meFollowService.followUser(video.userId);
                setIsFollowing(true);
            }
        } catch (error) {
            console.error("Error toggling follow:", error);
        } finally {
            setIsFollowLoading(false);
        }
    };

    const handleShare = async () => {
        try {
            await NativeShare.share({
                message: `${video.title}\n${shareUrl}`,
            });
        } catch (error) {
            console.error("Error sharing video:", error);
        }
    };

    const handleCopyLink = async () => {
        try {
            await Clipboard.setStringAsync(shareUrl);
            setCopied(true);
            if (copyTimeoutRef.current) {
                clearTimeout(copyTimeoutRef.current);
            }
            copyTimeoutRef.current = setTimeout(() => setCopied(false), 2000) as unknown as NodeJS.Timeout;
        } catch (error) {
            console.error("Failed to copy link:", error);
        }
    };

    const handleNavigateToUser = () => {
        router.push(`/users/${video.userId}` as Href);
    };

    return (
        <View style={tw("rounded-3xl bg-white border border-indigo-50 p-6 gap-6")}>
            <Text style={tw("text-2xl font-kh-bold text-gray-900")}>{video.title}</Text>

            <View style={tw("flex-row flex-wrap items-center justify-between gap-4")}>
                <Pressable
                    onPress={handleNavigateToUser}
                    style={tw("flex-row items-center gap-3")}
                >
                    {video.profileImage ? (
                        <Image
                            source={{ uri: video.profileImage }}
                            style={tw("w-10 h-10 rounded-full border-2 border-indigo-500")}
                        />
                    ) : (
                        <View
                            style={tw(
                                "w-10 h-10 rounded-full bg-indigo-100 items-center justify-center"
                            )}
                        >
                            <Text style={tw("text-sm text-indigo-600 font-kh-semibold")}>
                                {video.username.charAt(0).toUpperCase()}
                            </Text>
                        </View>
                    )}
                    <Text style={tw("text-sm font-kh-semibold text-gray-900")}>{video.username}</Text>
                </Pressable>

                <Pressable
                    onPress={handleFollow}
                    style={tw(
                        `flex-row items-center gap-2 px-4 py-2 rounded-full ${isFollowing ? "bg-indigo-50" : "bg-indigo-600"
                        }`
                    )}
                    disabled={isFollowLoading}
                >
                    {isFollowLoading ? (
                        <ActivityIndicator size="small" color={isFollowing ? "#4338CA" : "#FFFFFF"} />
                    ) : isFollowing ? (
                        <UserCheck size={16} color={isFollowing ? "#4338CA" : "#FFFFFF"} />
                    ) : (
                        <UserPlus size={16} color="#FFFFFF" />
                    )}
                    <Text
                        style={tw(
                            `text-xs font-kh-medium ${isFollowing ? "text-indigo-700" : "text-white"
                            }`
                        )}
                    >
                        {isFollowing ? "បានតាមដាន" : "តាមដាន"}
                    </Text>
                </Pressable>
            </View>

            <View style={tw("flex-row flex-wrap items-center gap-3")}>
                <Pressable
                    onPress={() => onLike(video.id, video.isLiked, video)}
                    style={tw(
                        `flex-row items-center gap-2 px-4 py-2 rounded-full ${video.isLiked ? "bg-indigo-50" : "bg-gray-100"
                        }`
                    )}
                >
                    <ThumbsUp size={18} color={video.isLiked ? "#4F46E5" : "#6B7280"} />
                    <Text
                        style={tw(
                            `text-sm font-kh-medium ${video.isLiked ? "text-indigo-600" : "text-gray-700"
                            }`
                        )}
                    >
                        {formatViewCount(video.likeCount)}
                    </Text>
                </Pressable>

                <Pressable
                    onPress={() => onBookmark(video.id, video.isSave, video)}
                    style={tw(
                        `flex-row items-center gap-2 px-4 py-2 rounded-full ${video.isSave ? "bg-indigo-50" : "bg-gray-100"
                        }`
                    )}
                >
                    <Bookmark size={18} color={video.isSave ? "#4F46E5" : "#6B7280"} />
                    <Text
                        style={tw(
                            `text-sm font-kh-medium ${video.isSave ? "text-indigo-600" : "text-gray-700"
                            }`
                        )}
                    >
                        រក្សាទុក
                    </Text>
                </Pressable>

                <Pressable
                    onPress={handleShare}
                    style={tw("flex-row items-center gap-2 px-4 py-2 rounded-full bg-gray-100")}
                >
                    <Share2 size={18} color="#4F46E5" />
                    <Text style={tw("text-sm font-kh-medium text-gray-700")}>ចែករំលែក</Text>
                </Pressable>

                <Pressable
                    onPress={handleCopyLink}
                    style={tw("flex-row items-center gap-2 px-4 py-2 rounded-full bg-gray-100")}
                >
                    {copied ? (
                        <Check size={18} color="#10B981" />
                    ) : (
                        <Link2 size={18} color="#4F46E5" />
                    )}
                    <Text
                        style={tw(
                            `text-sm font-kh-medium ${copied ? "text-emerald-600" : "text-gray-700"}`
                        )}
                    >
                        {copied ? "បានចម្លង" : "ចម្លងតំណ"}
                    </Text>
                </Pressable>
            </View>

            <View style={tw("gap-2")}>
                <View style={tw("flex-row items-center gap-3 text-sm text-gray-600")}>
                    <Text style={tw("text-sm text-gray-700 font-kh-medium")}>
                        {formatViewCount(video.viewCount)} views
                    </Text>
                    <Text style={tw("text-sm text-gray-500")}>{getTimeAgo(video.createdAt)}</Text>
                </View>

                <View style={tw("text-sm text-gray-700 leading-relaxed")}>
                    {/* <MarkDownRenderer content={displayText} /> */}
                    <Text>{displayText}</Text>
                    {isTruncated && !showFullDescription && (
                        <Text style={tw("text-sm text-gray-500")}>...</Text>
                    )}
                </View>

                {isTruncated && (
                    <Pressable onPress={() => setShowFullDescription((prev) => !prev)}>
                        <Text style={tw("text-sm text-indigo-600 font-kh-medium")}>
                            {showFullDescription ? "បង្ហាញតិចជាង" : "បង្ហាញច្រើនជាង"}
                        </Text>
                    </Pressable>
                )}
            </View>
        </View>
    );
}

