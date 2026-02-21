import type { AxiosInstance } from "axios";
import type { ForumReply } from "../../types/content/forums";
import { ApiWrapper } from "../../types/apiWrapper";

export const createFeedForumReplyService = (api: AxiosInstance) => {
  return {
    // Get replies for a forum comment
    getForumReplies: async (commentId: number): Promise<ApiWrapper<ForumReply[]>> => {
      try {
        const response = await api.get<ApiWrapper<ForumReply[]>>(`/feed/forums/comments/${commentId}/replies`);
        return response.data;
      } catch (error) {
        console.error("Error fetching forum replies:", error);
        throw new Error("Failed to fetch forum replies");
      }
    },
  };
};
