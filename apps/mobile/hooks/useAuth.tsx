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

  // Load user from AsyncStorage and Firebase auth
  useEffect(() => {
    const loadUser = async () => {
      try {
        setLoading(true);
        const userData = await AsyncStorage.getItem("user");
        const currentUser = auth.currentUser;

        if (!currentUser || !userData) {
          setUser(null);
          // Redirect to auth if not on auth page
          if (pathname !== "/auth") {
            router.replace("/auth");
          }
          return;
        }

        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Error loading user:", error);
        setUser(null);
        if (pathname !== "/auth") {
          router.replace("/auth");
        }
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, [router, pathname]);

  // Re-sync on route change in case auth state changed elsewhere
  useEffect(() => {
    const syncUser = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");
        const currentUser = auth.currentUser;

        if (!currentUser || !userData) {
          setUser(null);
          if (pathname !== "/auth") {
            router.replace("/auth");
          }
          return;
        }

        setUser(JSON.parse(userData));
      } catch {
        setUser(null);
        if (pathname !== "/auth") {
          router.replace("/auth");
        }
      }
    };

    syncUser();
  }, [pathname, router]);

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
