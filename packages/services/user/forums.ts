import type { AxiosInstance } from "axios";

export const createUserForumService = (api: AxiosInstance) => {
  return {
    getUserForums: async (userId: string) => {
      try {
        const response = await api.get(`/users/${userId}/forums`);
        return response.data;
      } catch (error) {
        console.error("Error fetching user forums:", error);
        throw new Error("Failed to fetch user forums");
      }
    },
  };
};
