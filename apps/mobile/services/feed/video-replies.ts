import type { AxiosInstance } from "axios";
import type { VideoReply } from "../../types/content/videos";

export const createFeedVideoReplyService = (api: AxiosInstance) => {
  return {
    // Get replies for a video comment
    getVideoReplies: async (commentId: number): Promise<VideoReply[]> => {
      try {
        const response = await api.get<{ data: VideoReply[] }>(
          `/feed/video-replies/${commentId}`
        );
        return response.data.data;
      } catch (error) {
        console.error("Error fetching video replies:", error);
        throw new Error("Failed to fetch video replies");
      }
    },
  };
};
