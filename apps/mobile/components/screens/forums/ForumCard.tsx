import { useEffect, useMemo, useRef, useState } from "react";
import {
    View,
    Text,
    Pressable,
    Image,
    ScrollView,
    Share as NativeShare,
    GestureResponderEvent,
    ActivityIndicator,
} from "react-native";
import {
    MessageCircle,
    Share2,
    ThumbsUp,
    Check,
    Link2,
    UserPlus,
    UserCheck,
} from "lucide-react-native";
import { ForumPost } from "@/types/content/forums";
import { Media } from "@/types/content/media";
// import MarkDownRenderer from "@/components/helper/MarkDownRenderer";
import { tw } from "@/utils/styles";
import { useRouter, Href } from "expo-router";
import * as Clipboard from "expo-clipboard";
import { useAuth } from "@/hooks/useAuth";
import { meForumService, meFollowService } from "@/services/index";

const SHARE_BASE_URL = process.env.EXPO_PUBLIC_WEB_URL ?? "https://komplex.app";

interface ForumCardProps {
    isFromBasePage: boolean;
    post: ForumPost;
    onCommentClick?: () => void;
    onLikeClick?: () => void;
}

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

const getImageUrls = (media: Media[] | undefined): string[] => {
    if (!media) return [];
    return media.filter((item) => item.type === "image").map((item) => item.url);
};

export default function ForumCard({
    isFromBasePage,
    post,
    onCommentClick,
    onLikeClick,
}: ForumCardProps) {
    const router = useRouter();
    const { user, openLoginModal } = useAuth();

    const [upvoted, setUpvoted] = useState(post.isLiked);
    const [upvoteCount, setUpvoteCount] = useState(post.likeCount);
    const [isFollowing, setIsFollowing] = useState(post.isFollowing);
    const [isFollowLoading, setIsFollowLoading] = useState(false);
    const [avatarError, setAvatarError] = useState(false);
    const [copied, setCopied] = useState(false);

    const copyTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        return () => {
            if (copyTimeoutRef.current) {
                clearTimeout(copyTimeoutRef.current);
            }
        };
    }, []);

    const imageUrls = useMemo(() => getImageUrls(post.media), [post.media]);

    const forumHref = useMemo(() => `/forums/${post.id}`, [post.id]);
    const userHref = useMemo(() => `/users/${post.userId}`, [post.userId]);

    const handleCardPress = () => {
        if (isFromBasePage) {
            router.push(forumHref as Href);
        }
    };

    const handleAuthorPress = (event: GestureResponderEvent) => {
        event.stopPropagation();
        router.push(userHref as Href);
    };

    const handleFollow = async (event: GestureResponderEvent) => {
        event.stopPropagation();

        if (!user) {
            openLoginModal();
            return;
        }

        if (user.id === post.userId) {
            return;
        }

        try {
            setIsFollowLoading(true);
            if (isFollowing) {
                await meFollowService.unfollowUser(post.userId);
                setIsFollowing(false);
            } else {
                await meFollowService.followUser(post.userId);
                setIsFollowing(true);
            }
        } catch (error) {
            console.error("Error toggling follow:", error);
        } finally {
            setIsFollowLoading(false);
        }
    };

    const handleUpvote = async (event: GestureResponderEvent) => {
        event.stopPropagation();

        if (!user) {
            openLoginModal();
            return;
        }

        try {
            const willUnlike = upvoted;
            setUpvoted(!upvoted);
            setUpvoteCount((prev) => (willUnlike ? prev - 1 : prev + 1));

            await meForumService.toggleForumLike(post.id.toString(), upvoted);
            onLikeClick?.();
        } catch (error) {
            console.error("Error toggling forum upvote:", error);
            // revert optimistic update
            setUpvoted(upvoted);
            setUpvoteCount((prev) => (upvoted ? prev + 1 : prev - 1));
        }
    };

    const handleCommentPress = (event: GestureResponderEvent) => {
        event.stopPropagation();
        if (isFromBasePage) {
            router.push(forumHref as Href);
        } else {
            onCommentClick?.();
        }
    };

    const buildShareUrl = () => `${SHARE_BASE_URL.replace(/\/$/, "")}/forums/${post.id}`;

    const handleShare = async (event: GestureResponderEvent) => {
        event.stopPropagation();

        try {
            const url = buildShareUrl();
            await NativeShare.share({
                message: `${post.title}\n${url}`,
            });
        } catch (error) {
            console.error("Error sharing forum:", error);
        }
    };

    const handleCopyLink = async (event: GestureResponderEvent) => {
        event.stopPropagation();

        try {
            const url = buildShareUrl();
            await Clipboard.setStringAsync(url);
            setCopied(true);

            if (copyTimeoutRef.current) {
                clearTimeout(copyTimeoutRef.current);
            }
            copyTimeoutRef.current = setTimeout(() => setCopied(false), 2000) as unknown as NodeJS.Timeout;
        } catch (error) {
            console.error("Failed to copy forum link:", error);
        }
    };

    const cardContent = (
        <View style={tw("gap-4")}>
            <View style={tw("flex-row items-center gap-4")}>
                <Pressable
                    onPress={handleAuthorPress}
                    style={tw("flex-row items-center gap-3 flex-1")}
                >
                    {post.profileImage && !avatarError ? (
                        <Image
                            source={{ uri: post.profileImage }}
                            style={tw("w-12 h-12 rounded-full border-2 border-indigo-500")}
                            resizeMode="cover"
                            onError={() => setAvatarError(true)}
                        />
                    ) : (
                        <View
                            style={tw(
                                "w-12 h-12 rounded-full bg-indigo-600 items-center justify-center"
                            )}
                        >
                            <Text style={tw("text-white text-base font-kh-semibold")}>
                                {post.username.charAt(0).toUpperCase()}
                            </Text>
                        </View>
                    )}

                    <View style={tw("flex-1")}>
                        <Text style={tw("text-sm font-kh-semibold text-gray-900")}>
                            {post.username}
                        </Text>
                        <Text style={tw("text-xs text-gray-500")}>{getTimeAgo(post.createdAt)}</Text>
                    </View>
                </Pressable>

                {!isFromBasePage && user && user.id !== post.userId && (
                    <Pressable
                        onPress={handleFollow}
                        style={tw(
                            `flex-row items-center gap-2 px-3 py-1.5 rounded-full ${isFollowing ? "bg-indigo-50" : "bg-indigo-600"
                            }`
                        )}
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
                )}
            </View>

            <View style={tw("gap-2")}>
                <Text style={tw("text-lg font-kh-bold text-gray-900")}>{post.title}</Text>
                <View>
                    {/* <MarkDownRenderer content={post.description} /> */}
                    <Text>{post.description}</Text>
                </View>
            </View>

            {imageUrls.length > 0 && (
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={tw("mt-1")}
                    contentContainerStyle={tw("gap-3 pr-2")}
                >
                    {imageUrls.map((url) => (
                        <Image
                            key={url}
                            source={{ uri: url }}
                            style={tw("w-64 h-44 rounded-3xl bg-gray-100")}
                            resizeMode="cover"
                        />
                    ))}
                </ScrollView>
            )}

            <View style={tw("flex-row flex-wrap items-center gap-3 pt-2")}>
                <Pressable
                    onPress={handleUpvote}
                    style={tw(
                        `flex-row items-center gap-2 px-3 py-2 rounded-full ${upvoted ? "bg-indigo-50" : "bg-gray-100"
                        }`
                    )}
                >
                    <ThumbsUp size={16} color={upvoted ? "#4F46E5" : "#6B7280"} />
                    <Text
                        style={tw(
                            `text-sm font-kh-medium ${upvoted ? "text-indigo-600" : "text-gray-600"}`
                        )}
                    >
                        {upvoteCount}
                    </Text>
                </Pressable>

                <Pressable
                    onPress={handleCommentPress}
                    style={tw("flex-row items-center gap-2 px-3 py-2 rounded-full bg-gray-100")}
                >
                    <MessageCircle size={16} color="#4F46E5" />
                    <Text style={tw("text-sm font-kh-medium text-gray-600")}>ឆ្លើយតប</Text>
                </Pressable>

                <Pressable
                    onPress={handleShare}
                    style={tw("flex-row items-center gap-2 px-3 py-2 rounded-full bg-gray-100")}
                >
                    <Share2 size={16} color="#4F46E5" />
                    <Text style={tw("text-sm font-kh-medium text-gray-600")}>ចែករំលែក</Text>
                </Pressable>

                <Pressable
                    onPress={handleCopyLink}
                    style={tw("flex-row items-center gap-2 px-3 py-2 rounded-full bg-gray-100")}
                >
                    {copied ? (
                        <Check size={16} color="#10B981" />
                    ) : (
                        <Link2 size={16} color="#4F46E5" />
                    )}
                    <Text
                        style={tw(
                            `text-sm font-kh-medium ${copied ? "text-emerald-600" : "text-gray-600"}`
                        )}
                    >
                        {copied ? "បានចម្លង" : "ចម្លងតំណ"}
                    </Text>
                </Pressable>
            </View>
        </View>
    );

    if (isFromBasePage) {
        return (
            <Pressable
                onPress={handleCardPress}
                style={tw("rounded-3xl bg-white border border-indigo-50 p-6")}
            >
                {cardContent}
            </Pressable>
        );
    }

    return <View style={tw("rounded-3xl bg-white border border-indigo-50 p-6")}>{cardContent}</View>;
}

