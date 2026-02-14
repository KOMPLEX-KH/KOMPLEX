import type { AxiosInstance } from "axios";

export const createMeLastAccessedService = (api: AxiosInstance) => {
  return {
    // Get user's last accessed
    getLastAccessed: async () => {
      try {
        const response = await api.get(`/me/last-accessed`);
        return response.data;
      } catch (error) {
        console.error("Error fetching user last accessed:", error);
        throw new Error("Failed to fetch user last accessed");
      }
    },
  };
};
