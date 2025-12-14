import type { AxiosInstance } from "axios";
import type { Grade } from "../../types/docs/curriculum";

export const createFeedCurriculumsService = (api: AxiosInstance) => {
  return {
    // Get all curriculum data (grades, subjects, lessons, topics)
    getCurriculum: async (): Promise<Grade[]> => {
      try {
        const response = await api.get("/feed/curriculums");
        return response.data.data;
      } catch (error) {
        console.error("Error fetching curriculum:", error);
        throw new Error("Failed to fetch curriculum");
      }
    },

    // Get a specific topic component by ID
    getTopicComponent: async (topicId: string): Promise<any> => {
      try {
        const response = await api.get(`/feed/curriculums/${topicId}`);
        return response.data.data;
      } catch (error) {
        console.error("Error fetching curriculum component:", error);
        throw new Error("Failed to fetch curriculum component");
      }
    },
  };
};
