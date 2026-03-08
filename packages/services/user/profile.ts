import type { AxiosInstance } from "axios";
import { ApiWrapper } from "@core-types/api-types/apiWrapper";
import { UserProfile } from "@core-types/api-types/profile";

export const createUserProfileService = (api: AxiosInstance) => {
  return {
    getUserProfile: async (userId: string): Promise<ApiWrapper<UserProfile>> => {
      try {
        const response = await api.get<ApiWrapper<UserProfile>>(`/users/${userId}/profile`);
        return response.data;
      } catch (error) {
        console.error("Error fetching user profile:", error);
        throw new Error("Failed to fetch user profile");
      }
    },
  };
};
