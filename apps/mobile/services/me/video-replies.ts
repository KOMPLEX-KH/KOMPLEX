import type { AxiosInstance } from "axios";
import type { VideoComment } from "../../types/content/videos";

export const createMeVideoReplyService = (api: AxiosInstance) => {
  return {
    // Create a reply to a video comment
    createVideoReply: async (
      commentId: number,
      description: string
    ): Promise<VideoComment> => {
      try {
        const response = await api.post<VideoComment>(
          `/me/video-replies/${commentId}`,
          {
            description,
          }
        );
        return response.data;
      } catch (error) {
        console.error("Error creating video reply:", error);
        throw new Error("Failed to create video reply");
      }
    },

    // Like/unlike a video reply
    toggleVideoReplyLike: async (
      replyId: number,
      isLiked: boolean
    ): Promise<void> => {
      try {
        const endpoint = isLiked ? "unlike" : "like";
        await api.patch(`/me/video-replies/${replyId}/${endpoint}`);
      } catch (error) {
        console.error("Error toggling video reply like:", error);
        throw new Error("Failed to update video reply like status");
      }
    },
  };
};
