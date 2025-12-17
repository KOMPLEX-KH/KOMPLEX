import type { AxiosInstance } from "axios";
import type { User, SignupData, SocialLoginData } from "../types/auth";

export const createAuthService = (api: AxiosInstance) => {
  return {
    // AUTH OPERATIONS

    // Register new user
    signup: async (signupData: SignupData): Promise<User> => {
      try {
        const response = await api.post<User>(`/auth/signup`, signupData);
        return response.data;
      } catch (error) {
        console.error("Error during signup:", error);
        throw new Error("Failed to create account");
      }
    },

    // Social login
    socialLogin: async (socialData: SocialLoginData): Promise<User> => {
      try {
        const response = await api.post<User>(`/auth/social-login`, socialData);
        return response.data;
      } catch (error) {
        console.error("Error during social login:", error);
        throw new Error("Failed to login with social provider");
      }
    },

    // USER MANAGEMENT

    // Update user profile
    updateProfile: async (
      userId: number,
      profileData: Partial<User>
    ): Promise<User> => {
      try {
        const response = await api.put<User>(`/profile/${userId}`, profileData);
        return response.data;
      } catch (error) {
        console.error("Error updating profile:", error);
        throw new Error("Failed to update profile");
      }
    },

    // Get current user profile
    getCurrentUser: async (): Promise<User> => {
      try {
        const response = await api.get<User>(`/me`);
        return response.data;
      } catch (error) {
        console.error("Error fetching current user:", error);
        throw new Error("Failed to fetch user profile");
      }
    },
  };
};

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
