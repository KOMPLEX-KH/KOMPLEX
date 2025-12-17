import type { AxiosInstance } from "axios";

export const createFeedSearchNewsService = (api: AxiosInstance) => {
  return {
    searchNews: async (
      query: string,
      limit: number = 10,
      offset: number = 0
    ) => {
      const response = await api.get(`/search/news`, {
        params: {
          query,
          limit,
          offset,
        },
      });
      return { data: response.data.data, isMatch: response.data.isMatch };
    },
  };
};
