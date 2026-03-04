import type { AxiosInstance } from "axios";
import type { VideoReply } from "../../types/content/videos";
import { ApiWrapper } from "@core-types/apiWrapper";

export const createFeedVideoReplyService = (api: AxiosInstance) => {
  return {
    // Get replies for a video comment
    getVideoReplies: async (commentId: number): Promise<ApiWrapper<VideoReply[]>> => {
      try {
        const response = await api.get<ApiWrapper<VideoReply[]>>(
          `/feed/videos/comments/${commentId}/replies`
        );
        return response.data as ApiWrapper<VideoReply[]>;
      } catch (error) {
        console.error("Error fetching video replies:", error);
        throw new Error("Failed to fetch video replies");
      }
    },
  };
};
