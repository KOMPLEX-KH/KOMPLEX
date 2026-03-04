import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";

export type AIResponseType = "normal" | "komplex";

type MePostAiGeneralResponse = GetApiSchema<typeof SchemaMap.MePostAiGeneralResponse>;
export type AIResponse = MePostAiGeneralResponse;

// MeAiGeneralTabHistoryResponse is actually MeAiGeneralTabHistoryItemSchema (single item, not array)
type MeAiGeneralTabHistoryItemSchema = GetApiSchema<typeof SchemaMap.MeAiGeneralTabHistoryItemSchema>;
export type AiHistoryItem = MeAiGeneralTabHistoryItemSchema;

// MeAiGeneralTabsResponse is actually MeAiGeneralTabItemSchema (single item, not array)
type MeAiGeneralTabItemSchema = GetApiSchema<typeof SchemaMap.MeAiGeneralTabItemSchema>;
export type AiTab = MeAiGeneralTabItemSchema;


// custom types

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
