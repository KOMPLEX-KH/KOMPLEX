import type { AxiosInstance } from "axios";

export const createMeVideoCommentService = (api: AxiosInstance) => {
  return {
    // Create a video comment
    createVideoComment: async (
      videoId: number,
      description: string
    ) => {
      try {
        const response = await api.post(
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
    ) => {
      try {
        const endpoint = isLiked ? "like" : "unlike";
        const response = await api.patch(`/me/video-comments/${commentId}/${endpoint}`);
        return response.data;
      } catch (error) {
        console.error("Error toggling video comment like:", error);
        throw new Error("Failed to update video comment like status");
      }
    },
  };
};
