import type { AxiosInstance } from "axios";
import type { ForumReply } from "../../types/content/forums";

export const createFeedForumReplyService = (api: AxiosInstance) => {
  return {
    // Get replies for a forum comment
    getForumReplies: async (commentId: number): Promise<ForumReply[]> => {
      try {
        const response = await api.get(`/feed/forum-replies/${commentId}`);
        return response.data.data;
      } catch (error) {
        console.error("Error fetching forum replies:", error);
        throw new Error("Failed to fetch forum replies");
      }
    },
  };
};
