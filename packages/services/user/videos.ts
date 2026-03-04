import type { AxiosInstance } from "axios";

export const createUserVideoService = (api: AxiosInstance) => {
  return {
    getUserVideos: async (userId: string) => {
      try {
        const response = await api.get(`/users/${userId}/videos`);
        return response.data;
      } catch (error) {
        console.error("Error fetching user videos:", error);
        throw new Error("Failed to fetch user videos");
      }
    },
  };
};
