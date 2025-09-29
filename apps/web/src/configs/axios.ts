import { createApi } from "@core-configs/axios";
// apps/web/lib/api.ts
import { firebase } from "./firebase";

const getFirebaseToken = async () => {
  // Wait for Firebase auth state to be ready
  return new Promise<string | null>((resolve) => {
    const unsubscribe = firebase.auth.onAuthStateChanged(async (user) => {
      unsubscribe(); // Unsubscribe after first call
      if (user) {
        try {
          const token = await user.getIdToken();
          resolve(token);
        } catch (error) {
          console.error("Error getting Firebase token:", error);
          resolve(null);
        }
      } else {
        resolve(null);
      }
    });
  });
};

export default createApi(process.env.NEXT_PUBLIC_API_URL!, getFirebaseToken);
