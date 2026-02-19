import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";

type MeProfileResponse = GetApiSchema<typeof SchemaMap.MeProfileResponse>;
export type Profile = MeProfileResponse;
