export interface AIResponse {
  prompt: string;
  data: string;
}

export interface AIHistoryItem {
  id: number;
  userId: number;
  prompt: string;
  aiResult: string;
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
}
