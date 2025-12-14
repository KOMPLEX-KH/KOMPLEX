import { initializeApp, type FirebaseApp } from "firebase/app";
import * as firebaseAuth from "firebase/auth";
import {
  initializeAuth,
  GoogleAuthProvider,
  OAuthProvider,
  GithubAuthProvider,
  type Auth,
  getAuth,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// Initialize Firebase app
const app: FirebaseApp = initializeApp({
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.EXPO_PUBLIC_FIREBASE_PROJECT_ID!,
  storageBucket: process.env.EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: process.env.EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID!,
  appId: process.env.EXPO_PUBLIC_FIREBASE_APP_ID!,
  measurementId: process.env.EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID,
});

// Initialize auth with AsyncStorage persistence for React Native
let auth: Auth;
try {
  // getReactNativePersistence exists at runtime but may not be in TypeScript types
  const getReactNativePersistence = (firebaseAuth as any)
    .getReactNativePersistence as
    | ((storage: typeof ReactNativeAsyncStorage) => any)
    | undefined;

  if (getReactNativePersistence) {
    auth = initializeAuth(app, {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });
  } else {
    // Fallback to getAuth if getReactNativePersistence is not available
    auth = getAuth(app);
    console.warn(
      "getReactNativePersistence not available, using default auth persistence"
    );
  }
} catch (error: any) {
  // If auth is already initialized, get the existing instance
  if (error.code === "auth/already-initialized") {
    auth = getAuth(app);
  } else {
    throw error;
  }
}

// Create providers
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const microsoftProvider = new OAuthProvider("microsoft.com");

export const firebase = {
  app,
  auth,
  googleProvider,
  githubProvider,
  microsoftProvider,
};

export { auth };
export { googleProvider };
export { microsoftProvider };
export { githubProvider };
