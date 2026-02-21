import { GetApiSchema, SchemaMap } from "../utils/apiSchema";

// User interface for auth responses
export type User = GetApiSchema<typeof SchemaMap.SignupResponse> | GetApiSchema<typeof SchemaMap.SocialLoginResponse>;

// Signup data interface
export type SignupData = GetApiSchema<typeof SchemaMap.SignupBody>;

// Social login data interface
export type SocialLoginData = GetApiSchema<typeof SchemaMap.SocialLoginBody>;