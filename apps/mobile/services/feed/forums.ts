import type { AxiosInstance } from "axios";
import type { ForumPost } from "../../types/content/forums";

export const createFeedForumService = (api: AxiosInstance) => {
  return {
    // Get all forum posts
    getAllForums: async (): Promise<{
      forums: ForumPost[];
      hasMore: boolean;
    }> => {
      try {
        const response = await api.get(`/feed/forums`);
        return {
          forums: response.data.data,
          hasMore: response.data.hasMore || false,
        };
      } catch (error) {
        console.error("Error fetching all forums:", error);
        throw new Error("Failed to fetch forum posts");
      }
    },

    // Get a single forum post by ID
    getForumById: async (id: string): Promise<ForumPost> => {
      try {
        const response = await api.get(`/feed/forums/${id}`);
        return response.data.data;
      } catch (error) {
        console.error("Error fetching forum post:", error);
        throw new Error("Failed to fetch forum post");
      }
    },
  };
};
