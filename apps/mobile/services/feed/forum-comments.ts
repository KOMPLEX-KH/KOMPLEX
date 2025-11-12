import type { AxiosInstance } from "axios";
import type { ForumComment } from "../../types/content/forums";

export const createFeedForumCommentService = (api: AxiosInstance) => {
  return {
    // Get comments for a forum post
    getForumComments: async (forumId: string): Promise<ForumComment[]> => {
      try {
        const response = await api.get(`/feed/forum-comments/${forumId}`);
        return response.data.data;
      } catch (error) {
        console.error("Error fetching forum comments:", error);
        throw new Error("Failed to fetch forum comments");
      }
    },
  };
};
