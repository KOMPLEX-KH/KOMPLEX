import { Media } from "./media";

export interface ForumPost {
  id: number;
  userId: number;
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
  isLike: boolean;
}

export interface ForumComment {
  id: number;
  userId: number;
  forumId: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  media: Media[];
  username: string;
  isLike: boolean;
}

export interface ForumReply {
  id: number;
  userId: number;
  forumCommentId: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  media: Media[];
  username: string;
  isLike: boolean;
}
