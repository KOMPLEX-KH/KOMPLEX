import type { AxiosInstance } from "axios";
import type {
  AIResponse,
  AIHistoryResponse,
  AIResponseType,
  AiTab,
} from "../../types/content/ai";
import { ApiWrapper } from "../../types/apiWrapper";

export const createMeAiService = (api: AxiosInstance) => {
  return {
    // ---- AI General (Tabs) ----

    // Get all AI general tab names
    getAllAiGeneralTabNames: async (): Promise<ApiWrapper<AiTab[]>> => {
      try {
        const response = await api.get<ApiWrapper<AiTab[]>>(`/me/ai/general/tabs`);
        return response.data;
      } catch (error) {
        throw new Error("Failed to get AI general tab names");
      }
    },

    // Get AI general history based on tab
    getAiGeneralHistoryBasedOnTab: async (
      tabId: string,
      page: number = 1,
      limit: number = 20
    ): Promise<ApiWrapper<AIHistoryResponse>> => {
      try {
        const response = await api.get(`/me/ai/general/tabs/${tabId}`, {
          params: {
            page,
            limit,
          },
        });
        return response.data;
      } catch (error) {
        console.error("Error fetching AI general history by tab:", error);
        throw new Error("Failed to get AI general history by tab");
      }
    },

    // Call AI general for the first time (no existing tab)
    callAiGeneralFirstTime: async (
      prompt: string,
      options?: {
        language?: string;
        responseType?: AIResponseType;
      }
    ): Promise<ApiWrapper<AIResponse>> => {
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

        const response = await api.post<ApiWrapper<AIResponse>>(`/me/ai/general/tabs`, {
          ...payload,
        });
        return response.data;
      } catch (error) {
        console.error("Error calling AI general first time:", error);
        throw new Error("Failed to get AI general first-time response");
      }
    },

    // Call AI general and write to existing tab history
    callAiGeneralAndWriteToHistory: async (
      prompt: string,
      tabId: number,
      options?: {
        language?: string;
        responseType?: AIResponseType;
      }
    ): Promise<ApiWrapper<AIResponse>> => {
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

        const response = await api.post<ApiWrapper<AIResponse>>(`/me/ai/general/tabs/${tabId}`, {
          ...payload,
        });
        return response.data;
      } catch (error) {
        console.error("Error calling AI general:", error);
        throw new Error("Failed to get AI general response");
      }
    },

    // ---- AI Topics ----

    // Get all AI topic names
    getAllAiTopicTabNames: async (): Promise<ApiWrapper<AiTab[]>> => {
      try {
        const response = await api.get<ApiWrapper<AiTab[]>>(`/me/ai/topics`);
        return response.data;
      } catch (error) {
        console.error("Error fetching AI topic tab names:", error);
        throw new Error("Failed to get AI topic tab names");
      }
    },

    // Get AI history based on topic tab
    getAiGeneralHistoryBasedOnTopic: async (
      topicId: number,
      page: number = 1,
      limit: number = 20
    ): Promise<ApiWrapper<AIHistoryResponse>> => {
      try {
        const response = await api.get<ApiWrapper<AIHistoryResponse>>(`/me/ai/topics/${topicId}`, {
          params: {
            page,
            limit,
          },
        }
        );
        return response.data;
      } catch (error) {
        console.error("Error fetching AI topic history:", error);
        throw new Error("Failed to get AI topic history");
      }
    },

    // Call AI topic and write to topic history
    callAiTopic: async (
      prompt: string,
      topicId: number,
      responseType: AIResponseType
    ): Promise<ApiWrapper<AIResponse>> => {
      try {
        const response = await api.post<ApiWrapper<AIResponse>>(`/me/ai/topics/${topicId}`, {
          prompt,
          responseType,
        }
        );
        return response.data;
      } catch (error) {
        console.error("Error calling AI topic:", error);
        throw new Error("Failed to get AI topic response");
      }
    },

    rateAiResponse: async (
      id: number,
      rating: number,
      ratingFeedback: string
    ): Promise<ApiWrapper<void>> => {
      try {
        await api.post<ApiWrapper<void>>(`/me/ai/general/rating/${id}`, {
          rating,
          ratingFeedback,
        });
        return;
      } catch (error) {
        console.error("Error rating AI response:", error);
        throw new Error("Failed to rate AI response");
      }
    },
    rateTopicAiResponse: async (
      id: number,
      rating: number,
      ratingFeedback: string
    ): Promise<ApiWrapper<void>> => {
      try {
        await api.post<ApiWrapper<void>>(`/me/ai/topics/rating/${id}`, {
          rating,
          ratingFeedback,
        });
        return;
      } catch (error) {
        console.error("Error rating AI topic response:", error);
        throw new Error("Failed to rate AI topic response");
      }
    },

    // Delete AI general tab
    deleteAiGeneralTab: async (tabId: number): Promise<ApiWrapper<void>> => {
      try {
        await api.delete<ApiWrapper<void>>(`/me/ai/general/tabs/${tabId}`);
        return;
      } catch (error) {
        console.error("Error deleting AI general tab:", error);
        throw new Error("Failed to delete AI general tab");
      }
    },

    // Update AI general tab name
    updateAiGeneralTabName: async (
      tabId: number,
      tabName: string
    ): Promise<ApiWrapper<void>> => {
      try {
        await api.put<ApiWrapper<void>>(`/me/ai/general/tabs/${tabId}`, {
          tabName,
        });
        return;
      } catch (error) {
        console.error("Error updating AI general tab name:", error);
        throw new Error("Failed to update AI general tab name");
      }
    },

    // Delete AI topic tab
    deleteAiTopicTab: async (topicId: number): Promise<ApiWrapper<void>> => {
      try {
        await api.delete<ApiWrapper<void>>(`/me/ai/topics/${topicId}`);
        return;
      } catch (error) {
        console.error("Error deleting AI topic tab:", error);
        throw new Error("Failed to delete AI topic tab");
      }
    },
  };
};
