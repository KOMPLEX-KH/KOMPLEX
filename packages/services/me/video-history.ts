import type { AxiosInstance } from "axios";

export const createMeVideoHistoryService = (api: AxiosInstance) => {
  return {
    // Get user's video history
    getUserVideoHistory: async () => {
      try {
        const response = await api.get(`/me/video-history`);
        return response.data;
      } catch (error) {
        console.error("Error fetching video history:", error);
        throw new Error("Failed to fetch video history");
      }
    },

    // Delete video from history
    deleteVideoFromHistory: async (historyId: string) => {
      try {
        const response = await api.delete(`/me/video-history/${historyId}`);
        return response.data;
      } catch (error) {
        console.error("Error deleting video from history:", error);
        throw new Error("Failed to delete video from history");
      }
    },
  };
};
