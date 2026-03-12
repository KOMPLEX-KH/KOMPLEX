'use client'

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
  ReactNode,
} from "react";
import { User as UserType } from "@core-types/user-content/user";
import { useRouter, usePathname } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { auth } from "@/configs/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { authService } from "@/services/index";

interface AuthContextType {
  user: UserType | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [user, setUser] = useState<UserType | null>(null);
  const [loading, setLoading] = useState(true);

  // Hydrate from AsyncStorage early to avoid a null user flash
  useEffect(() => {
    (async () => {
      try {
        const stored = await AsyncStorage.getItem("user");
        if (stored) {
          setUser(JSON.parse(stored));
        }
      } catch (err) {
        console.error("Error hydrating user from storage:", err);
      }
    })();
  }, []);

  // Firebase auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (firebaseUser) {
          // User is signed in, fetch user data from backend
          try {
            const userData = await authService.getCurrentUser();
            console.log('userData', userData);
            await AsyncStorage.setItem("user", JSON.stringify(userData));
            setUser(userData as UserType);
          } catch (error) {
            console.error("Error fetching user data:", error);

            // If user doesn't exist in backend, check if it's a social login
            // and create the user via socialLogin
            const providerData = firebaseUser.providerData;
            if (providerData && providerData.length > 0) {
              const providerId = providerData[0].providerId;

              // Check if it's a social provider (not email/password)
              if (providerId !== 'password') {
                try {
                  // Determine provider type
                  let provider: 'google' | 'github' | 'microsoft' = 'google';
                  if (providerId.includes('github')) {
                    provider = 'github';
                  } else if (providerId.includes('microsoft')) {
                    provider = 'microsoft';
                  }

                  // Get user info from Firebase
                  const email = firebaseUser.email || '';
                  const displayName = firebaseUser.displayName || '';
                  const nameParts = displayName.split(' ') || [];
                  const firstName = nameParts[0] || '';
                  const lastName = nameParts.slice(1).join(' ') || '';
                  const photoURL = firebaseUser.photoURL || null;

                  // Create user via social login
                  const userData = await authService.socialLogin({
                    provider,
                    email,
                    username: email.split('@')[0] + '_' + Date.now().toString().slice(-6),
                    uid: firebaseUser.uid,
                    firstName,
                    lastName,
                    dateOfBirth: null,
                    phone: '',
                    profileImage: photoURL,
                    profileImageKey: null,
                  });

                  console.log('userData', userData);
                  await AsyncStorage.setItem("user", JSON.stringify(userData));
                  setUser(userData as UserType);
                  return;
                } catch (socialError) {
                  console.error("Error creating social login user:", socialError);
                }
              }
            }

            // If backend call fails and not a social login, try to use stored data
            const storedData = await AsyncStorage.getItem("user");
            if (storedData) {
              setUser(JSON.parse(storedData));
            } else {
              setUser(null);
            }
          }
        } else {
          // User is signed out — clear storage and state unconditionally.
          // The initial hydration effect already covers the "show cached user while
          // Firebase initialises" case, so we don't need to preserve stale data here.
          await AsyncStorage.removeItem("user");
          setUser(null);
        }
      } catch (error) {
        console.error("Error in auth state listener:", error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, [router, pathname]);

  const value = useMemo(
    () => ({ user, loading }),
    [user, loading]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
