import type { AxiosInstance } from "axios";
import type { VideoComment } from "../../types/content/videos";

export const createFeedVideoCommentService = (api: AxiosInstance) => {
  return {
    // Get comments for a video
    getVideoComments: async (videoId: string): Promise<VideoComment[]> => {
      try {
        const response = await api.get(`/feed/video-comments/${videoId}`);
        return response.data.data;
      } catch (error) {
        console.error("Error fetching video comments:", error);
        throw new Error("Failed to fetch video comments");
      }
    },
  };
};
