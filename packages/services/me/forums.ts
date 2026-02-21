import type { AxiosInstance } from "axios";

export const createMeForumService = (api: AxiosInstance) => {
  return {
    // Create a new forum post
    createForum: async (formData: FormData) => {
      try {
        const response = await api.post(`/me/forums`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        return response.data;
      } catch (error) {
        console.error("Error creating forum:", error);
        throw new Error("Failed to create forum post");
      }
    },

    // Update a forum post
    updateForum: async (
      id: string,
      forumData: FormData
    ) => {
      try {
        const response = await api.put(`/me/forums/${id}`, forumData);
        return response.data;
      } catch (error) {
        console.error("Error updating forum:", error);
        throw new Error("Failed to update forum post");
      }
    },

    // Delete a forum post
    deleteForum: async (id: string) => {
      try {
        const response = await api.delete(`/me/forums/${id}`);
        return response.data;
      } catch (error) {
        console.error("Error deleting forum:", error);
        throw new Error("Failed to delete forum post");
      }
    },

    // Like/unlike a forum post
    toggleForumLike: async (id: string, isLiked: boolean) => {
      try {
        const endpoint = isLiked ? "unlike" : "like";
        const response = await api.patch(`/me/forums/${id}/${endpoint}`);
        return response.data;
      } catch (error) {
        console.error("Error toggling forum like:", error);
        throw new Error("Failed to update forum like status");
      }
    },

    // Get user's own forum posts
    getUserForums: async () => {
      try {
        const response = await api.get(`/me/forums`);
        return response.data;
      } catch (error) {
        console.error("Error fetching user forums:", error);
        throw new Error("Failed to fetch user forums");
      }
    },

    // Get user's own forum post by ID
    getUserForumById: async (id: string) => {
      try {
        const response = await api.get(`/me/forums/${id}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching user forum:", error);
        throw new Error("Failed to fetch user forum");
      }
    },
  };
};
