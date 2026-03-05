import type { AxiosInstance } from "axios";
import type { ForumComment } from "../../types/api-types/forums";
import { ApiWrapper } from "../../types/api-types/apiWrapper";

export const createFeedForumCommentService = (api: AxiosInstance) => {
  return {
    // Get comments for a forum post
    getForumComments: async (forumId: string): Promise<ApiWrapper<ForumComment[]>> => {
      try {
        const response = await api.get<ApiWrapper<ForumComment[]>>(`/feed/forums/${forumId}/comments`);
        return response.data;
      } catch (error) {
        console.error("Error fetching forum comments:", error);
        throw new Error("Failed to fetch forum comments");
      }
    },
  };
};
