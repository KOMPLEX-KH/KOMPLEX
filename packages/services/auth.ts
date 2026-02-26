import type { AxiosInstance } from "axios";
import type { User, SignupData, SocialLoginData, verifySignupOtpResponse, signupResponse, signupOtpResponse, resetPasswordResponse, verifyForgetPasswordOtpResponse, ForgetPasswordOtpResponse } from "../types/auth";
import { Trophy } from "lucide-react";
import { UpdateProfileDataRequest, UpdateProfileDataResponse } from "@core-types/content/profile";

export const createAuthService = (api: AxiosInstance) => {
  return {
    // AUTH OPERATIONS

    // sent otp for signup
    sendSignupOtp: async (email: string): Promise<signupOtpResponse> => {
      try{
        const response = await api.post(`/auth/send-signup-otp`, { email });
        return response.data;
      }catch (error) {
        console.error("Error sending signup OTP:", error);
        throw new Error("Failed to send signup OTP");
      }
      
    },

    // verify otp
    verifySignupOtp: async (verifyData: { email: string; otp: string }): Promise<verifySignupOtpResponse> => {
      try{
        const response = await api.post(`/auth/verify-signup-otp`, verifyData);
        return response.data;
      }catch (error) {
        console.error("Error verifying signup OTP:", error);
        throw new Error("Failed to verify signup OTP");
      }
      
    },

    // do sign up after otp verification
    signup: async (signupData: SignupData & { verificationToken: string }): Promise<signupResponse> => {
      try{
        const response = await api.post(`/auth/signup`, signupData);
        return response.data;
      }catch (error) {
        console.error("Error during signup:", error);
        throw new Error("Failed to complete signup");
      }
      
    },

    sendForgetPasswordOtp: async (email: string): Promise<ForgetPasswordOtpResponse> => {
      try {
        const response = await api.post(`/auth/send-forget-password-otp`, { email });
        return response.data;
      } catch (error) {
        console.error("Error sending forget password OTP:", error);
        throw new Error("Failed to send forget password OTP");
      }
    },

    verifyForgetPasswordOtp: async (verifyData: { email: string; otp: string }): Promise<verifyForgetPasswordOtpResponse> => {
      try {
        const response = await api.post(`/auth/verify-forget-password-otp`, verifyData);
        return response.data;
      } catch (error) {
        console.error("Error verifying forget password OTP:", error);
        throw new Error("Failed to verify forget password OTP");
      }
    },

    resetPassword: async (resetData: { email: string; resetToken: string; newPassword: string }): Promise<resetPasswordResponse> => {
      try {
        const response = await api.post(`/auth/reset-password`, resetData);
        return response.data;
      } catch (error) {
        console.error("Error resetting password:", error);
        throw new Error("Failed to reset password");
      }
    },

    // Social login
    socialLogin: async (socialData: SocialLoginData): Promise<User> => {
      try {
        const response = await api.post<{ data: User }>(`/auth/social-login`, socialData);
        return response.data.data;
      } catch (error) {
        console.error("Error during social login:", error);
        throw new Error("Failed to login with social provider");
      }
    },

    // USER MANAGEMENT

    updateProfileImage: async (data: UpdateProfileDataRequest): Promise<UpdateProfileDataResponse> => {
      try {
        const response = await api.put<{ data: UpdateProfileDataResponse }>(
          `/me/profile`,
          data
        );
        return response.data.data;
      } catch (error) {
        console.error("Error updating profile image:", error);
        throw new Error("Failed to update profile image");
      }
    },

    // Get current user profile
    getCurrentUser: async (): Promise<User> => {
      try {
        const response = await api.get<{ data: User }>(`/me`);
        return response.data.data;
      } catch (error) {
        console.error("Error fetching current user:", error);
        throw new Error("Failed to fetch user profile");
      }
    },

    getCurrentUserProfile: async (): Promise<User> => {
      try {
        const response = await api.get<{ data: User }>(`/me/profile`);
        return response.data.data;
      } catch (error) {
        console.error("Error fetching current user profile:", error);
        throw new Error("Failed to fetch user profile");
      }
    },
  };
};

// Removed standalone functions - use the service methods instead

// ! FOR FUTURE

// // Change password
// export const changePassword = async (
//   userId: number,
//   currentPassword: string,
//   newPassword: string
// ): Promise<void> => {
//   try {
//     await api.put(`/change-password/${userId}`, {
//       currentPassword,
//       newPassword,
//     });
//   } catch (error) {
//     console.error("Error changing password:", error);
//     throw new Error("Failed to change password");
//   }
// };

// // Delete user account
// export const deleteAccount = async (userId: number): Promise<void> => {
//   try {
//     await api.delete(`/account/${userId}`);
//   } catch (error) {
//     console.error("Error deleting account:", error);
//     throw new Error("Failed to delete account");
//   }
// };

// // FORGOT PASSWORD

// // Send password reset email
// export const sendPasswordResetEmail = async (email: string): Promise<void> => {
//   try {
//     await api.post(`/forgot-password`, { email });
//   } catch (error) {
//     console.error("Error sending password reset email:", error);
//     throw new Error("Failed to send password reset email");
//   }
// };

// // Reset password with token
// export const resetPassword = async (
//   token: string,
//   newPassword: string
// ): Promise<void> => {
//   try {
//     await api.post(`/reset-password`, {
//       token,
//       newPassword,
//     });
//   } catch (error) {
//     console.error("Error resetting password:", error);
//     throw new Error("Failed to reset password");
//   }
// };

// // VERIFICATION

// // Send email verification
// export const sendEmailVerification = async (userId: number): Promise<void> => {
//   try {
//     await api.post(`/send-verification/${userId}`);
//   } catch (error) {
//     console.error("Error sending email verification:", error);
//     throw new Error("Failed to send verification email");
//   }
// };

// // Verify email with token
// export const verifyEmail = async (token: string): Promise<void> => {
//   try {
//     await api.post(`/verify-email`, { token });
//   } catch (error) {
//     console.error("Error verifying email:", error);
//     throw new Error("Failed to verify email");
//   }
// };
