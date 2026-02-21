import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";

type FeedForumItemSchema = GetApiSchema<typeof SchemaMap.FeedForumItemSchema>;
export type ForumPost = FeedForumItemSchema;

type FeedForumCommentItemResponseSchema = GetApiSchema<typeof SchemaMap.FeedForumCommentItemResponseSchema>;
export type ForumComment = FeedForumCommentItemResponseSchema;