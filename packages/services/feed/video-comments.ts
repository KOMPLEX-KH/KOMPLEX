import { ApiWrapper } from "@core-types/apiWrapper";
import { VideoComment } from "@core-types/content/videos";
import type { AxiosInstance } from "axios";

export const createFeedVideoCommentService = (api: AxiosInstance) => {
  return {
    // Get comments for a video
    getVideoComments: async (videoId: string): Promise<ApiWrapper<VideoComment[]>> => {
      try {
        const response = await api.get<ApiWrapper<VideoComment[]>>(`/feed/videos/${videoId}/comments`);
        return response.data;
      } catch (error) {
        console.error("Error fetching video comments:", error);
        throw new Error("Failed to fetch video comments");
      }
    },
  };
};
