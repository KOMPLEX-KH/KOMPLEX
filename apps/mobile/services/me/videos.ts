import type { AxiosInstance } from "axios";
import type { VideoPost } from "../../types/content/videos";

export const createMeVideoService = (api: AxiosInstance) => {
  return {
    // Create a new video
    createVideo: async (videoData: {
      videoKey: string;
      title: string;
      duration: number;
      description: string;
      thumbnailKey: string;
      questions:
        | {
            title: string;
            choices: {
              text: string;
              isCorrect: boolean;
            }[];
          }[]
        | undefined;
    }): Promise<VideoPost> => {
      try {
        const response = await api.post<VideoPost>(`/me/videos`, {
          videoKey: videoData.videoKey,
          title: videoData.title,
          duration: videoData.duration,
          description: videoData.description,
          thumbnailKey: videoData.thumbnailKey,
          questions: videoData.questions,
        });
        return response.data;
      } catch (error) {
        console.error("Error creating video:", error);
        throw new Error("Failed to create video");
      }
    },

    // Delete a video
    deleteVideo: async (id: string): Promise<void> => {
      try {
        await api.delete(`/me/videos/${id}`);
      } catch (error) {
        console.error("Error deleting video:", error);
        throw new Error("Failed to delete video");
      }
    },

    // Like/unlike a video
    toggleVideoLike: async (id: string, isLiked: boolean): Promise<void> => {
      try {
        const endpoint = isLiked ? "unlike" : "like";
        await api.patch(`/me/videos/${id}/${endpoint}`);
      } catch (error) {
        console.error("Error toggling video like:", error);
        throw new Error("Failed to update video like status");
      }
    },

    // Save/unsave a video
    toggleVideoSave: async (id: string, isSaved: boolean): Promise<void> => {
      try {
        const endpoint = isSaved ? "unsave" : "save";
        await api.patch(`/me/videos/${id}/${endpoint}`);
      } catch (error) {
        console.error("Error toggling video save:", error);
        throw new Error("Failed to update video save status");
      }
    },

    // USER CONTENT VIDEOS

    // Get user's own videos
    getUserVideos: async (): Promise<VideoPost[]> => {
      try {
        const response = await api.get<{ data: VideoPost[] }>(`/me/videos`);
        return response.data.data;
      } catch (error) {
        console.error("Error fetching user videos:", error);
        throw new Error("Failed to fetch user videos");
      }
    },

    // Update video with exercises
    updateVideo: async (
      id: string,
      payload: {
        title?: string;
        description?: string;
        videoKey?: string;
        thumbnailKey?: string;
        questions?: {
          id?: string;
          title: string;
          choices: {
            id?: string;
            text: string;
            isCorrect: boolean;
          }[];
        }[];
      }
    ): Promise<{ data: { success: boolean } }> => {
      try {
        const response = await api.put(`/me/videos/${id}`, payload);
        return response.data;
      } catch (error) {
        console.error("Error updating video:", error);
        throw new Error("Failed to update video");
      }
    },
  };
};
