import type { AxiosInstance } from "axios";
import type { ForumPost } from "../../types/content/forums";

export const createUserForumService = (api: AxiosInstance) => {
  return {
    getUserForums: async (userId: string): Promise<ForumPost[]> => {
      try {
        const response = await api.get<{ data: ForumPost[] }>(
          `/users/${userId}/forums`
        );
        return response.data.data;
      } catch (error) {
        console.error("Error fetching user forums:", error);
        throw new Error("Failed to fetch user forums");
      }
    },
  };
};
