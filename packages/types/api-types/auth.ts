import { GetApiSchema, SchemaMap } from "../../utils/apiSchema";

// User interface for auth responses
export type User = GetApiSchema<typeof SchemaMap.SignupResponse> | GetApiSchema<typeof SchemaMap.SocialLoginResponse>;

// Signup data interface
export type SignupData = GetApiSchema<typeof SchemaMap.SignupBody>;

// Social login data interface
export type SocialLoginData = GetApiSchema<typeof SchemaMap.SocialLoginBody>;

// OTP & password reset auth flows
export type signupOtpResponse = GetApiSchema<typeof SchemaMap.SendOtpResponse>;
export type VerifySignupOtpResponse = GetApiSchema<typeof SchemaMap.VerifySignupOtpResponse>;

export type ForgetPasswordOtpResponse = GetApiSchema<typeof SchemaMap.SendOtpResponse>;
export type VerifyForgetPasswordOtpResponse = GetApiSchema<typeof SchemaMap.VerifySignupOtpResponse>;
export type ResetPasswordResponse = GetApiSchema<typeof SchemaMap.ResetPasswordResponse>;

export type UpdateProfileDataRequest = GetApiSchema<typeof SchemaMap.UpdateProfileBody>;
export type UploadProfileResponse = GetApiSchema<typeof SchemaMap.UploadProfileResponse>;
