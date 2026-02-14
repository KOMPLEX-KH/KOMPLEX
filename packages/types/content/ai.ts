import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";

export type AIResponseType = "normal" | "komplex";

type MePostAiGeneralResponse = GetApiSchema<typeof SchemaMap.MePostAiGeneralResponse>;
export type AIResponse = {
  prompt: string;
  data: {
    aiResult: string;
    id: number;
  };
  responseType: AIResponseType;
} & MePostAiGeneralResponse["data"];

type MeAiGeneralTabHistoryResponse = GetApiSchema<typeof SchemaMap.MeAiGeneralTabHistoryResponse>;
export type AIHistoryItem = MeAiGeneralTabHistoryResponse["data"][number] & {
  id?: number;
  userId?: number;
  createdAt?: string;
  updatedAt?: string;
  responseType?: AIResponseType;
};

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

type MeAiGeneralTabsResponse = GetApiSchema<typeof SchemaMap.MeAiGeneralTabsResponse>;
export type AiTab = MeAiGeneralTabsResponse["data"][number];
