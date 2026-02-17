import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";

type FeedNewsResponse = GetApiSchema<typeof SchemaMap.FeedNewsResponse>;
export type News = FeedNewsResponse["data"][number];
