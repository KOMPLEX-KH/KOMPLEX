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