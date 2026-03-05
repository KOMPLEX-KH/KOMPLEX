import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";

type FeedVideoItemSchema = GetApiSchema<typeof SchemaMap.FeedVideoItemSchema>;
export type VideoPost = FeedVideoItemSchema;

// MeVideoHistoryResponse is an inline type, not a schema
// The response structure is: { success: true; data: Array<{ id, videoId, createdAt, updatedAt, title?, thumbnailUrl? }> }
// Using FeedVideoItemSchema as a placeholder for backward compatibility
type MeVideoHistoryResponse = GetApiSchema<typeof SchemaMap.MeVideoHistoryResponse>;
export type VideoHistory = MeVideoHistoryResponse;

type RecommendedVideosItemSchema = GetApiSchema<typeof SchemaMap.RecommendedVideosItemSchema>;
export type RecommendedVideos = RecommendedVideosItemSchema;

type FeedVideoCommentItemResponseSchema = GetApiSchema<typeof SchemaMap.FeedVideoCommentItemResponseSchema>;
export type VideoComment = FeedVideoCommentItemResponseSchema;

type FeedVideoReplyItemResponseSchema = GetApiSchema<typeof SchemaMap.FeedVideoReplyItemResponseSchema>;
export type VideoReply = FeedVideoReplyItemResponseSchema;

