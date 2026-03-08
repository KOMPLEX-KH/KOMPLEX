import type { AxiosInstance } from "axios";

export const createMeForumCommentService = (api: AxiosInstance) => {
  return {
    // Create a comment on a forum post
    createForumComment: async (
      forumId: number,
      description: string
    ) => {
      try {
        const response = await api.post(`/me/forum-comments/${forumId}`, {
          description,
        });
        return response.data;
      } catch (error) {
        console.error("Error creating forum comment:", error);
        throw new Error("Failed to create forum comment");
      }
    },

    // Like/unlike a forum comment
    toggleForumCommentLike: async (
      commentId: number,
      isLiked: boolean
    ) => {
      try {
        const endpoint = isLiked ? "unlike" : "like";
        const response = await api.patch(`/me/forum-comments/${commentId}/${endpoint}`);
        return response.data;
      } catch (error) {
        console.error("Error toggling forum comment like:", error);
        throw new Error("Failed to update forum comment like status");
      }
    },

    // edit forum comment
    editForumComment: async (
      commentId: number,
      description: string
    ) => {
      try {
        const response = await api.put(`/me/forum-comments/${commentId}`, {
          description,
        });
        return response.data;
      } catch (error) {
        console.error("Error editing forum comment:", error);
        throw new Error("Failed to edit forum comment");
      }
    },

    // delete forum comment
    deleteForumComment: async (commentId: number) => {
      try {
        const response = await api.delete(`/me/forum-comments/${commentId}`);
        return response.data;
      } catch (error) {
        console.error("Error deleting forum comment:", error);
        throw new Error("Failed to delete forum comment");
      }
    },
  };
};
