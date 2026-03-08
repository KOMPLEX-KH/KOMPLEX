import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";

// MeLastAccessedResponseSchema is the data structure itself (can be null)
// The API response wraps it as: { success: true, data: MeLastAccessedResponseSchema }
type MeLastAccessedResponseSchema = GetApiSchema<typeof SchemaMap.MeLastAccessedResponseSchema>;
export type LastAccessed = MeLastAccessedResponseSchema;