import { User } from "../../types/content/profile";
import type { AxiosInstance } from "axios";

export const createUserProfileService = (api: AxiosInstance) => {
  return {
    getUserProfile: async (userId: string): Promise<User> => {
      try {
        const response = await api.get<{ data: User }>(
          `/users/${userId}/profile`
        );
        return response.data.data;
      } catch (error) {
        console.error("Error fetching user profile:", error);
        throw new Error("Failed to fetch user profile");
      }
    },
  };
};
