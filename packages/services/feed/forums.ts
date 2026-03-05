import { ApiWrapper } from '../../types/api-types/apiWrapper';
import { ForumPost } from '@core-types/api-types/forums';

import type { AxiosInstance } from "axios";

export const createFeedForumService = (api: AxiosInstance) => {
  return {
    // Get all forum posts
    getAllForums: async (): Promise<ApiWrapper<ForumPost[]>> => {
      try {
        const response = await api.get<ApiWrapper<ForumPost[]>>(`/feed/forums`);
        return response.data;
      } catch (error) {
        console.error("Error fetching all forums:", error);
        throw new Error("Failed to fetch forum posts");
      }
    },

    // Get a single forum post by ID
    getForumById: async (id: string): Promise<ApiWrapper<ForumPost>> => {
      try {
        const response = await api.get<ApiWrapper<ForumPost>>(`/feed/forums/${id}`);
        return response.data;
      } catch (error) {
        console.error("Error fetching forum post:", error);
        throw new Error("Failed to fetch forum post");
      }
    },
  };
};
