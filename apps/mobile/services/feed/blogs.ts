import type { AxiosInstance } from "axios";
import type { Blog } from "../../types/content/blogs";

export const createFeedBlogService = (api: AxiosInstance) => {
  return {
    // Get all blog posts
    getAllBlogs: async (): Promise<{
      blogs: Blog[];
      hasMore: boolean;
    }> => {
      try {
        const response = await api.get(`/feed/blogs`);
        return {
          blogs: response.data.data,
          hasMore: response.data.hasMore,
        };
      } catch (error) {
        console.error("Error fetching all blogs:", error);
        throw new Error("Failed to fetch blog posts");
      }
    },

    // Get a single blog post by ID
    getBlogById: async (id: string): Promise<Blog & { isSaved: boolean }> => {
      try {
        const response = await api.get(`/feed/blogs/${id}`);
        return response.data.data;
      } catch (error) {
        console.error("Error fetching blog post:", error);
        throw new Error("Failed to fetch blog post");
      }
    },
  };
};
