import { GetApiSchema, SchemaMap } from "@core-utils/apiSchema";

type MediaSchema = GetApiSchema<typeof SchemaMap.MediaSchema>;
export type Media = MediaSchema;