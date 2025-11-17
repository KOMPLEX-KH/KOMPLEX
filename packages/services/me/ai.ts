import type { AxiosInstance } from "axios";
import type {
  AIResponse,
  AIHistoryResponse,
  AIResponseType,
} from "../../types/content/ai";

export const createMeAiService = (api: AxiosInstance) => {
  return {
    // Call AI service
    callAiAndWriteToHistory: async (
      prompt: string,
      options?: {
        language?: string;
        responseType?: AIResponseType;
      }
    ): Promise<AIResponse> => {
      try {
        const payload: {
          prompt: string;
          language?: string;
          responseType?: AIResponseType;
        } = { prompt };

        if (options?.language) {
          payload.language = options.language;
        }

        if (options?.responseType) {
          payload.responseType = options.responseType;
        }

        const response = await api.post<AIResponse>("/me/ai", {
          ...payload,
        });
        return response.data;
      } catch (error) {
        console.error("Error calling AI:", error);
        throw new Error("Failed to get AI response");
      }
    },

    // Get AI chat history
    getAiHistory: async (
      page: number = 1,
      limit: number = 20
    ): Promise<AIHistoryResponse> => {
      try {
        const response = await api.get<AIHistoryResponse>("/me/ai", {
          params: {
            page,
            limit,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error fetching AI history:", error);
        throw new Error("Failed to get AI history");
      }
    },
  };
};
