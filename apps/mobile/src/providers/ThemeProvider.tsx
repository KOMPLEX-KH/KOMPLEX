import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type PropsWithChildren,
} from "react";
import { ColorSchemeName, useColorScheme } from "react-native";
import {
  resolveTheme,
  type ThemeMode,
  type ResolvedThemeMode,
} from "@/src/theme";
import type { AppTheme } from "@/src/theme/light";

interface ThemeContextValue {
  mode: ThemeMode;
  resolvedMode: ResolvedThemeMode;
  theme: AppTheme;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
  const systemScheme = useColorScheme();
  const [mode, setMode] = useState<ThemeMode>("system");

  const resolvedMode: ResolvedThemeMode =
    mode === "system"
      ? systemScheme === "dark"
        ? "dark"
        : "light"
      : mode;

  const theme = useMemo(() => resolveTheme(resolvedMode), [resolvedMode]);

  const toggleMode = useCallback(() => {
    setMode((prevMode) => {
      const currentResolved: ResolvedThemeMode =
        prevMode === "system"
          ? systemScheme === "dark"
            ? "dark"
            : "light"
          : prevMode;

      return currentResolved === "dark" ? "light" : "dark";
    });
  }, [systemScheme]);

  const value = useMemo(
    () => ({ mode, resolvedMode, theme, setMode, toggleMode }),
    [mode, resolvedMode, theme, toggleMode]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
