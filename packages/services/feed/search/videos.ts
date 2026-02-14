import type { AxiosInstance } from "axios";

export const createFeedSearchVideoService = (api: AxiosInstance) => {
  return {
    searchVideos: async (
      query: string,
      limit: number = 10,
      offset: number = 0
    ) => {
      const response = await api.get(`/search/videos`, {
        params: {
          query,
          limit,
          offset,
        },
      });
      return response.data;
    },
  };
};