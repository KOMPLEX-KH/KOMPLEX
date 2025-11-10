import type { AxiosInstance } from "axios";
import type { VideoHistory } from "../../types/content/videos";

export const createMeVideoHistoryService = (api: AxiosInstance) => {
  return {
    // Get user's video history
    getUserVideoHistory: async (): Promise<VideoHistory[]> => {
      try {
        const response = await api.get<{ data: VideoHistory[] }>(
          `/me/video-history`
        );
        return response.data.data;
      } catch (error) {
        console.error("Error fetching video history:", error);
        throw new Error("Failed to fetch video history");
      }
    },

    // Delete video from history
    deleteVideoFromHistory: async (historyId: string): Promise<void> => {
      try {
        await api.delete(`/me/video-history/${historyId}`);
      } catch (error) {
        console.error("Error deleting video from history:", error);
        throw new Error("Failed to delete video from history");
      }
    },
  };
};
