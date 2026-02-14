import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";
import { Media } from "./media";

type FeedNewsResponse = GetApiSchema<typeof SchemaMap.FeedNewsResponse>;
export type News = FeedNewsResponse["data"][number];
