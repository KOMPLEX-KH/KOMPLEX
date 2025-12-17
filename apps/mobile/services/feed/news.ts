import type { AxiosInstance } from "axios";
import type { News } from "@core-types/content/news";

export const createFeedBlogService = (api: AxiosInstance) => {
  return {
    // Get all blog posts
    getAllNews: async (): Promise<{
      news: News[];
      hasMore: boolean;
    }> => {
      try {
        const response = await api.get(`/feed/news`);
        return {
          news: response.data.data,
          hasMore: response.data.hasMore,
        };
      } catch (error) {
        console.error("Error fetching all blogs:", error);
        throw new Error("Failed to fetch blog posts");
      }
    },

    // Get a single blog post by ID
    getNewsById: async (id: string): Promise<News & { isSaved: boolean }> => {
      try {
        const response = await api.get(`/feed/news/${id}`);
        return response.data.data;
      } catch (error) {
        console.error("Error fetching blog post:", error);
        throw new Error("Failed to fetch blog post");
      }
    },
  };
};
