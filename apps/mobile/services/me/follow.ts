import type { AxiosInstance } from "axios";

export const createMeFollowService = (api: AxiosInstance) => {
  return {
    followUser: async (userId: number): Promise<void> => {
      const response = await api.post(`/me/follow/follow/${userId}`);
      return response.data;
    },

    unfollowUser: async (userId: number): Promise<void> => {
      const response = await api.post(`/me/follow/unfollow/${userId}`);
      return response.data;
    },
  };
};
