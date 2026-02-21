import { MeLastAccessedResponse } from "@core-types/docs/curriculum";
import type { AxiosInstance } from "axios";
import { ApiWrapper } from "@core-types/apiWrapper";

export const createMeLastAccessedService = (api: AxiosInstance) => {
  return {
    // Get user's last accessed
    getLastAccessed: async (): Promise<ApiWrapper<MeLastAccessedResponse>> => {
      try {
        const response = await api.get<ApiWrapper<MeLastAccessedResponse>>(`/me/last-accessed`);
        return response.data;
      } catch (error) {
        throw new Error("Failed to fetch user last accessed");
      }
    },
  };
};
