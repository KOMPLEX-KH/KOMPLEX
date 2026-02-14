import type { AxiosInstance } from "axios";

export const createUserProfileService = (api: AxiosInstance) => {
  return {
    getUserProfile: async (userId: string) => {
      try {
        const response = await api.get(`/users/${userId}/profile`);
        return response.data;
      } catch (error) {
        console.error("Error fetching user profile:", error);
        throw new Error("Failed to fetch user profile");
      }
    },
  };
};
