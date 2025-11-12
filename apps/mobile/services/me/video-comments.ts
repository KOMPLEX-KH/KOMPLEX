import type { AxiosInstance } from "axios";
import type { VideoComment } from "../../types/content/videos";

export const createMeVideoCommentService = (api: AxiosInstance) => {
  return {
    // Create a video comment
    createVideoComment: async (
      videoId: number,
      description: string
    ): Promise<VideoComment> => {
      try {
        const response = await api.post<VideoComment>(
          `/me/video-comments/${videoId}`,
          {
            description,
          }
        );
        return response.data;
      } catch (error) {
        console.error("Error creating video comment:", error);
        throw new Error("Failed to create video comment");
      }
    },

    // Like/unlike a video comment
    toggleVideoCommentLike: async (
      commentId: number,
      isLiked: boolean
    ): Promise<void> => {
      try {
        const endpoint = isLiked ? "like" : "unlike";
        await api.patch(`/me/video-comments/${commentId}/${endpoint}`);
      } catch (error) {
        console.error("Error toggling video comment like:", error);
        throw new Error("Failed to update video comment like status");
      }
    },
  };
};
