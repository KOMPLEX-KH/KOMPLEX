import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";

type MeProfileResponse = GetApiSchema<typeof SchemaMap.MeProfileResponse>;
export type Profile = MeProfileResponse;

type UserProfileResponse = GetApiSchema<typeof SchemaMap.UserProfileResponse>;
export type UserProfile = UserProfileResponse;