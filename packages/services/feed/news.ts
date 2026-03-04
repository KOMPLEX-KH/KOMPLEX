import type { AxiosInstance } from "axios";
import type { News } from "../../types/content/news";
import { ApiWrapper } from "@core-types/apiWrapper";

export const createFeedNewsService = (api: AxiosInstance) => {
  return {
    // Get all blog posts
    getAllNews: async (): Promise<ApiWrapper<News[]>> => {
      try {
        const response = await api.get(`/feed/news`);
        return response.data as ApiWrapper<News[]>;
      } catch (error) {
        console.error("Error fetching all blogs:", error);
        throw new Error("Failed to fetch blog posts");
      }
    },

    // Get a single blog post by ID
    getNewsById: async (id: string): Promise<ApiWrapper<News>> => {
      try {
        const response = await api.get(`/feed/news/${id}`);
        return response.data as ApiWrapper<News>;
      } catch (error) {
        console.error("Error fetching blog post:", error);
        throw new Error("Failed to fetch blog post");
      }
    },
  };
};
