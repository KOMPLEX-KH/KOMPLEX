import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";
import { Media } from "./media";

type UserForumsResponse = GetApiSchema<typeof SchemaMap.UserForumsResponse>;
export type ForumPost = UserForumsResponse["data"][number] & {
  likeCount?: number;
  commentCount?: number;
  isLike?: boolean;
};

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
