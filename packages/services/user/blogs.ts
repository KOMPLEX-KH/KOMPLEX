import type { AxiosInstance } from "axios";

export const createUserBlogService = (api: AxiosInstance) => {
  return {
    getUserBlogs: async (userId: string) => {
      try {
        const response = await api.get(`/users/${userId}/blogs`);
        return response.data;
      } catch (error) {
        console.error("Error fetching user blogs:", error);
        throw new Error("Failed to fetch user blogs");
      }
    },
  };
};
