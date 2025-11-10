import type { AxiosInstance } from "axios";

export const createFeedSearchBlogService = (api: AxiosInstance) => {
  return {
    searchBlogs: async (
      query: string,
      limit: number = 10,
      offset: number = 0
    ) => {
      const response = await api.get(`/search/blogs`, {
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
