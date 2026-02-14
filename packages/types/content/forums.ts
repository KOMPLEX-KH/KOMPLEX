import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";
import { Media } from "./media";

type FeedForumsResponse = GetApiSchema<typeof SchemaMap.FeedForumsResponse>;
export type ForumPost = FeedForumsResponse["data"][number];

type MePostForumCommentResponse = GetApiSchema<typeof SchemaMap.MePostForumCommentResponse>;
export type ForumComment = MePostForumCommentResponse["data"] & {
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
