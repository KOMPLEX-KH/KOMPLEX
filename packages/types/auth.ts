// User interface for auth responses
export interface User {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string | null;
    phone: string;
    profileImage: string | null;
    isAdmin: boolean;
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
  }
  
  // Signup data interface
  export interface SignupData {
    email: string;
    username: string;
    uid: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    phone: string;
    profileImageKey?: string | null;
    verificationToken: string;
  }

  export interface verifySignupOtpResponse {
    verificationToken: string;
  }

  export interface signupResponse {
    user: User;
  }

  export interface ForgetPasswordOtpResponse {
    message: string;
    expiresIn: number;
  }

  export interface verifyForgetPasswordOtpResponse {
    resetToken: string;
    message: string;
    expiresIn: number;
  }

  export interface resetPasswordResponse {
    message: string;
  }

  export interface signupOtpResponse {
    message: string;
    expiresIn: number;
  }
  
  // Social login data interface
  export interface SocialLoginData {
    provider: "google" | "github" | "microsoft";
    email: string;
    username: string;
    uid: string;
    firstName: string;
    lastName: string;
    dateOfBirth: string | null;
    phone: string;
    profileImage: string | null;
    profileImageKey: string | null;
  }