import { Media } from "./media";
import { Comment } from "./comments";

export interface ForumPost {
  id: number;
  userId: number;
  profileImage: string;
  isFollowing: boolean;
  title: string;
  description: string;
  type: "discussion" | "question" | "announcement";
  topic: "math" | "physics" | "chemistry" | "biology" | "general";
  viewCount: number;
  likeCount: number;
  commentCount: number;
  createdAt: string;
  updatedAt: string;
  media: Media[];
  username: string;
  isLiked: boolean;
}

export interface ForumComment extends Comment {
  forumId: number;
}

export interface ForumReply {
  id: number;
  userId: number;
  profileImage: string;
  forumCommentId: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  media: Media[];
  username: string;
  isLiked: boolean;
}
