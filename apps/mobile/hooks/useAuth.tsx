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

  // Firebase auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      try {
        if (firebaseUser) {
          // User is signed in, fetch user data from backend
          try {
            const userData = await authService.getCurrentUser();
            await AsyncStorage.setItem("user", JSON.stringify(userData));
            setUser(userData);
          } catch (error) {
            console.error("Error fetching user data:", error);
            // If backend call fails, try to use stored data
            const storedData = await AsyncStorage.getItem("user");
            if (storedData) {
              setUser(JSON.parse(storedData));
            } else {
              setUser(null);
            }
          }
        } else {
          // User is signed out
          await AsyncStorage.removeItem("user");
          setUser(null);
          if (pathname !== "/auth") {
            router.replace("/auth");
          }
        }
      } catch (error) {
        console.error("Error in auth state listener:", error);
        setUser(null);
        if (pathname !== "/auth") {
          router.replace("/auth");
        }
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
