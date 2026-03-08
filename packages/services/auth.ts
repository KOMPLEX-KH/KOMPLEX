import type { AxiosInstance } from "axios";
import type {
  User,
  SignupData,
  SocialLoginData,
  signupOtpResponse,
  VerifySignupOtpResponse,
  ForgetPasswordOtpResponse,
  VerifyForgetPasswordOtpResponse,
  ResetPasswordResponse,
  UpdateProfileDataRequest,
} from "../types/api-types/auth";
import { ApiWrapper } from "@core-types/api-types/apiWrapper";
import { Profile } from "@core-types/api-types/profile";

export const createAuthService = (api: AxiosInstance) => {
  return {
    // AUTH OPERATIONS

    // send otp for signup
    sendSignupOtp: async (email: string): Promise<ApiWrapper<signupOtpResponse>> => {
      try {
        const response = await api.post(`/auth/send-signup-otp`, { email });
        return response.data;
      } catch (error) {
        throw error;
      }
    },

    // verify otp
    verifySignupOtp: async (verifyData: { email: string; otp: string }): Promise<ApiWrapper<VerifySignupOtpResponse>> => {
      try {
        const response = await api.post(`/auth/verify-signup-otp`, verifyData);
        return response.data;
      } catch (error) {
        throw error;
      }
    },

    // do sign up after otp verification
    signup: async (
      signupData: SignupData & { verificationToken: string }
    ): Promise<ApiWrapper<User>> => {
      try {
        const response = await api.post<ApiWrapper<User>>(`/auth/signup`, signupData);
        return response.data;
      } catch (error) {
        throw error;
      }
    },

    sendForgetPasswordOtp: async (email: string): Promise<ApiWrapper<ForgetPasswordOtpResponse>> => {
      try {
        const response = await api.post(`/auth/send-forget-password-otp`, { email });
        return response.data;
      } catch (error) {
        throw error;
      }
    },

    verifyForgetPasswordOtp: async (
      verifyData: { email: string; otp: string }
    ): Promise<ApiWrapper<VerifyForgetPasswordOtpResponse>> => {
      try {
        const response = await api.post(`/auth/verify-forget-password-otp`, verifyData);
        return response.data;
      } catch (error) {
        throw error;
      }
    },

    resetPassword: async (
      resetData: { email: string; resetToken: string; newPassword: string }
    ): Promise<ApiWrapper<ResetPasswordResponse>> => {
      try {
        const response = await api.post(`/auth/reset-password`, resetData);
        return response.data;
      } catch (error) {
        throw error;
      }
    },

    // Social login
    socialLogin: async (
      socialData: SocialLoginData
    ): Promise<ApiWrapper<User>> => {
      try {
        const response = await api.post<ApiWrapper<User>>(`/auth/social-login`, socialData);
        return response.data;
      } catch (error) {
        throw error;
      }
    },

    // USER MANAGEMENT

    // // Update user profile
    updateProfileImage: async (
      data: UpdateProfileDataRequest
    ): Promise<ApiWrapper<UpdateProfileDataRequest & { profileImageKey: string }>> => {
      try {
        const response = await api.put<ApiWrapper<UpdateProfileDataRequest & { profileImageKey: string }>>(
          `/me/profile`,
          data
        );
        return response.data;
      } catch (error) {
        throw error;
      }
    },

    // Get current user profile
    getCurrentUser: async (): Promise<ApiWrapper<User>> => {
      try {
        const response = await api.get<ApiWrapper<User>>(`/me`);
        return response.data;
      } catch (error) {
        throw error;
      }
    },

    getCurrentUserProfile: async (): Promise<ApiWrapper<Profile>> => {
      try {
        const response = await api.get<ApiWrapper<Profile>>(`/me/profile`);
        return response.data;
      } catch (error) {
        throw error;
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
