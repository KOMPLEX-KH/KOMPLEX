import type { AxiosInstance } from "axios";
import type { News } from "../../types/content/news";

export const createUserBlogService = (api: AxiosInstance) => {
  return {
    getUserBlogs: async (userId: string): Promise<News[]> => {
      try {
        const response = await api.get<{ data: News[] }>(
          `/users/${userId}/blogs`
        );
        return response.data.data;
      } catch (error) {
        console.error("Error fetching user blogs:", error);
        throw new Error("Failed to fetch user blogs");
      }
    },
  };
};
