import { GetApiSchema, SchemaMap } from "../utils/apiSchema";

type MeLastAccessedResponse = GetApiSchema<typeof SchemaMap.MeLastAccessedResponse>;
export type LastAccessed = MeLastAccessedResponse["data"] extends null 
  ? { lastTopic: null; lastVideo: null; lastAiTab: null }
  : MeLastAccessedResponse["data"];