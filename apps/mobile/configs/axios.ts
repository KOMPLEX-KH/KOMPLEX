import { createApi } from "@core-configs/axios";
import { firebase } from "./firebase";

const getFirebaseToken = async () => {
  try {
    // Wait for auth to be ready (especially important with AsyncStorage persistence)
    await new Promise<void>((resolve) => {
      const unsubscribe = firebase.auth.onAuthStateChanged(() => {
        unsubscribe();
        resolve();
      });
    });

    // Check if user is authenticated after auth is ready
    const currentUser = firebase.auth.currentUser;
    if (currentUser) {
      try {
        // Force refresh the token to ensure it's valid
        const token = await currentUser.getIdToken(true);
        console.log(
          "[Axios] Token retrieved successfully, length:",
          token?.length
        );
        return token;
      } catch (error) {
        console.error(
          "[Axios] Error getting Firebase token from currentUser:",
          error
        );
        return null;
      }
    }

    // No user found after auth is ready
    console.warn("[Axios] No user found after auth initialization");
    return null;
  } catch (error) {
    console.error("[Axios] Unexpected error in getFirebaseToken:", error);
    return null;
  }
};

export default createApi(process.env.EXPO_PUBLIC_API_URL!, getFirebaseToken);
