import type { AxiosInstance } from "axios";
import type { VideoPost } from "../../types/content/videos";
import { ApiWrapper } from "../../types/apiWrapper";

export const createFeedVideoService = (api: AxiosInstance) => {
  return {
    // Get all videos
    getAllVideos: async (): Promise<ApiWrapper<VideoPost[]>> => {
      try {
        const response = await api.get<ApiWrapper<VideoPost[]>>(
          `/feed/videos`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching all videos:", error);
        throw new Error("Failed to fetch videos");
      }
    },

    // Get video by ID
    getVideoById: async (id: string): Promise<VideoPost> => {
      try {
        const response = await api.get(`/feed/videos/${id}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching video by ID:", error);
        throw new Error("Failed to fetch video");
      }
    },

    // Get exercises for a video
    getVideoExercises: async (videoId: string): Promise<unknown[]> => {
      try {
        const response = await api.get(`/feed/videos/${videoId}/exercise`);
        return response.data;
      } catch (error) {
        console.error("Error fetching video exercises:", error);
        throw new Error("Failed to fetch video exercises");
      }
    },

    // Get recommended videos based on current video
    getRecommendedVideos: async (
      userId: number,
      videoId: number,
      limit: number = 5,
      offset: number = 0
    ): Promise<ApiWrapper<VideoPost[]>> => {
      try {
        const response = await api.get<ApiWrapper<VideoPost[]>>(
          `/feed/videos/${videoId}/recommended?limit=${limit}&offset=${offset}`
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching recommended videos:", error);
        throw new Error("Failed to fetch recommended videos");
      }
    },
  };
};
