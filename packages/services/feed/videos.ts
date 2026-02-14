import type { AxiosInstance } from "axios";
import type { VideoPost } from "../../types/content/videos";

export const createFeedVideoService = (api: AxiosInstance) => {
  return {
    // Get all videos
    getAllVideos: async () => {
      try {
        const response = await api.get<{ data: VideoPost[]; hasMore: boolean }>(
          `/feed/videos`
        );
        return {
          data: response.data,
          hasMore: response.data.hasMore,
        };
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
    ) => {
      try {
        const response = await api.get(
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
