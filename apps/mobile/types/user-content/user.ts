export interface User {
  id: number;
  uid: string;
  username: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  isAdmin: boolean | null;
  isVerified: boolean | null;
  isSocial: boolean | null;
  email: string;
  phone: string;
  profileImage: string;
  profileImageKey: string;
  createdAt: string;
  updatedAt: string;
}
