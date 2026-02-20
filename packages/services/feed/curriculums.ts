import type { AxiosInstance } from "axios";
import type { Grade, CurriculumTopicResponse } from "../../types/docs/curriculum";
import { ApiWrapper } from './../../types/apiWrapper';

export const createFeedCurriculumsService = (api: AxiosInstance) => {
  return {
    // Get all curriculum data (grades, subjects, lessons, topics)
    getCurriculum: async (): Promise<ApiWrapper<Grade[]>> => {
      try {
        const response = await api.get("/feed/curriculums");
        return response.data as ApiWrapper<Grade[]>;
      } catch (error) {
        throw new Error("Failed to fetch curriculum");
      }
    },

    // Get a specific topic component by ID
    getTopicComponent: async (topicId: string): Promise<ApiWrapper<CurriculumTopicResponse>> => {
      try {
        const response = await api.get<ApiWrapper<CurriculumTopicResponse>>(`/feed/curriculums/${topicId}`);
        return response.data;
      } catch (error) {
        throw new Error("Failed to fetch curriculum component");
      }
    },
  };
};
