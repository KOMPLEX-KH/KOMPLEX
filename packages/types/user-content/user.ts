import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";

type MeResponse = GetApiSchema<typeof SchemaMap.MeResponse>;
export type User = MeResponse;
