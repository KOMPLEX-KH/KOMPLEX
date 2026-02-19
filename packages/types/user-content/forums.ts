import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";
import { Media } from "./media";

// UserForumsResponse is an inline type, using FeedForumItemSchema as base
// The actual response structure is similar to FeedForumItemSchema but without likeCount, isLiked, isFollowing
type FeedForumItemSchema = GetApiSchema<typeof SchemaMap.FeedForumItemSchema>;
export type ForumPost = Omit<FeedForumItemSchema, "likeCount" | "isLiked" | "isFollowing"> & {
  likeCount?: number;
  commentCount?: number;
  isLike?: boolean;
};

// MePostForumCommentResponse returns unknown, using FeedForumCommentItemResponseSchema as base
type FeedForumCommentItemResponseSchema = GetApiSchema<typeof SchemaMap.FeedForumCommentItemResponseSchema>;
export type ForumComment = FeedForumCommentItemResponseSchema & {
  forumId?: number;
  isLike?: boolean;
};

// ForumReply doesn't have a direct schema, keeping the interface
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
