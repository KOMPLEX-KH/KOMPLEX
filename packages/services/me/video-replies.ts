import type { AxiosInstance } from "axios";

export const createMeVideoReplyService = (api: AxiosInstance) => {
  return {
    // Create a reply to a video comment
    createVideoReply: async (
      commentId: number,
      description: string
    ) => {
      try {
        const response = await api.post(
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
    ) => {
      try {
        const endpoint = isLiked ? "unlike" : "like";
        const response = await api.patch(`/me/video-replies/${replyId}/${endpoint}`);
        return response.data;
      } catch (error) {
        console.error("Error toggling video reply like:", error);
        throw new Error("Failed to update video reply like status");
      }
    },
  };
};
