export type AIResponseType = "normal" | "komplex";

export interface AIResponse {
  prompt: string;
  data: {
    aiResult: string;
    id: number;
  };
  responseType: AIResponseType;
}

export interface AIHistoryItem {
  id: number;
  userId: number;
  prompt: string;
  aiResult: string;
  responseType?: AIResponseType;
  createdAt: string;
  updatedAt: string;
}

export interface AIHistoryResponse {
  data: AIHistoryItem[];
  hasMore: boolean;
}

export interface Message {
  id: string;
  content: string;
  sender: "user" | "ai";
  timestamp: Date;
  isFromHistory?: boolean;
  responseType?: AIResponseType;
}

export interface AiTab {
  id: number;
  name: string;
}
