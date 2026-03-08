'use client';

import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
  ReactNode,
} from "react";
import { User as UserType } from "@core-types/api-types/user-content/user";
import { usePathname } from "next/navigation";

interface AuthContextType {
  user: UserType | null;
  loading: boolean;
  isLoginOpen: boolean;
  openLoginModal: () => void;
  closeLoginModal: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  isLoginOpen: false,
  openLoginModal: () => { },
  closeLoginModal: () => { },
});

// Internal provider that uses usePathname
const AuthProviderInternal = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();
  const [user, setUser] = useState<UserType | null>(() => {
    if (typeof window === 'undefined') return null;
    try {
      const storedUserJson = localStorage.getItem("user");
      return storedUserJson ? JSON.parse(storedUserJson) : null;
    } catch {
      return null;
    }
  });
  const [loading] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const openLoginModal = useCallback(() => setIsLoginOpen(true), []);
  const closeLoginModal = useCallback(() => setIsLoginOpen(false), []);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Re-sync on route change in case auth state changed elsewhere
    try {
      const storedUserJson = localStorage.getItem("user");
      setUser(storedUserJson ? JSON.parse(storedUserJson) : null);
    } catch {
      setUser(null);
    }
    // Always close login modal on route change to avoid it sticking
    setIsLoginOpen(false);
  }, [pathname]);

  // Close modal once authenticated
  useEffect(() => {
    if (user) {
      setIsLoginOpen(false);
    }
  }, [user]);

  // Close modal once authenticated
  useEffect(() => {
    if (user) {
      setIsLoginOpen(false);
    }
  }, [user]);

  const value = useMemo(
    () => ({ user, loading, isLoginOpen, openLoginModal, closeLoginModal }),
    [user, loading, isLoginOpen, openLoginModal, closeLoginModal]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

// Client-only wrapper to avoid SSR issues with usePathname
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // During SSR/static generation, provide default context
  if (!mounted) {
    return (
      <AuthContext.Provider
        value={{
          user: null,
          loading: true,
          isLoginOpen: false,
          openLoginModal: () => { },
          closeLoginModal: () => { },
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }

  // On client side, use the full provider with usePathname
  return <AuthProviderInternal>{children}</AuthProviderInternal>;
};

export const useAuth = () => useContext(AuthContext);
