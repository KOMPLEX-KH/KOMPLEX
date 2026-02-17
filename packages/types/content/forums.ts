import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";
import { Media } from "./media";

type FeedForumsResponse = GetApiSchema<typeof SchemaMap.FeedForumItemResponseSchema>;
export type ForumPost = FeedForumsResponse;

type FeedForumCommentItemResponseSchema = GetApiSchema<typeof SchemaMap.FeedForumCommentItemResponseSchema>;
export type ForumComment = FeedForumCommentItemResponseSchema;

// ForumReply doesn't have a direct schema, keeping the interface
type FeedForumReplyItemResponseSchema = GetApiSchema<typeof SchemaMap.FeedForumReplyItemResponseSchema>;
export type ForumReply = FeedForumReplyItemResponseSchema;



