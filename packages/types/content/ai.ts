import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";

export type AIResponseType = "normal" | "komplex";

type MePostAiGeneralResponse = GetApiSchema<typeof SchemaMap.MePostAiGeneralResponse>;
export type AIResponse = MePostAiGeneralResponse;

// MeAiGeneralTabHistoryResponse is actually MeAiGeneralTabHistoryItemSchema (single item, not array)
type MeAiGeneralTabHistoryItemSchema = GetApiSchema<typeof SchemaMap.MeAiGeneralTabHistoryItemSchema>;
export type AIHistoryResponse = MeAiGeneralTabHistoryItemSchema;

// MeAiGeneralTabsResponse is actually MeAiGeneralTabItemSchema (single item, not array)
type MeAiGeneralTabItemSchema = GetApiSchema<typeof SchemaMap.MeAiGeneralTabItemSchema>;
export type AiTab = MeAiGeneralTabItemSchema;
