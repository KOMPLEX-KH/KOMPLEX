import { GetApiSchema, SchemaMap } from './../../utils/apiSchema';

import type { AxiosInstance } from "axios";

type FeedForumsResponse = GetApiSchema<typeof SchemaMap.FeedForumsResponse>;

export const createFeedForumService = (api: AxiosInstance) => {
  return {
    // Get all forum posts
    getAllForums: async (): Promise<FeedForumsResponse> => {
      try {
        const response = await api.get(`/feed/forums`);
        return response.data;
      } catch (error) {
        console.error("Error fetching all forums:", error);
        throw new Error("Failed to fetch forum posts");
      }
    },

    // Get a single forum post by ID
    getForumById: async (id: string): Promise<FeedForumsResponse> => {
      try {
        const response = await api.get(`/feed/forums/${id}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching forum post:", error);
        throw new Error("Failed to fetch forum post");
      }
    },
  };
};
