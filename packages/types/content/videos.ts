import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";
import { Comment } from "./comments";
import { Media } from "./media";

type FeedVideoItemSchema = GetApiSchema<typeof SchemaMap.FeedVideoItemSchema>;
export type VideoPost = FeedVideoItemSchema;

export interface VideoComment extends Comment {
  videoId: number;
}

// MeVideoHistoryResponse is an inline type, not a schema
// The response structure is: { success: true; data: Array<{ id, videoId, createdAt, updatedAt, title?, thumbnailUrl? }> }
// Using FeedVideoItemSchema as a placeholder for backward compatibility
type MeVideoHistoryResponse = GetApiSchema<typeof SchemaMap.MeVideoHistoryResponse>;
export type VideoHistory = {
    id: number;
    videoId: number;
    createdAt: string;
    updatedAt: string;
    title?: string | null;
    thumbnailUrl?: string | null;
};

export interface VideoReply {
  id: number;
  userId: number;
  profileImage: string;
  videoCommentId: number;
  description: string;
  createdAt: string;
  updatedAt: string;
  media: Media[];
  username: string;
  isLiked: boolean;
}