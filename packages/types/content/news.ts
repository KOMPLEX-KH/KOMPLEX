import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";

type FeedNewsItemSchema = GetApiSchema<typeof SchemaMap.FeedNewsItemSchema>;
export type News = FeedNewsItemSchema;
