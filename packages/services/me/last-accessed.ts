import type { AxiosInstance } from "axios";
import { LastAccessed } from "../../types/last-accessed";

export const createMeLastAccessedService = (api: AxiosInstance) => {
  return {
    // Get user's last accessed
    getLastAccessed: async (): Promise<{
      lastAccessed: LastAccessed;
    }> => {
      try {
        const response = await api.get(`/me/last-accessed`);
        return { lastAccessed: response.data.data };
      } catch (error) {
        console.error("Error fetching user last accessed:", error);
        throw new Error("Failed to fetch user last accessed");
      }
    },
  };
};
