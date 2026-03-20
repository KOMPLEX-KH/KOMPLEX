import { darkTheme } from "./dark";
import { lightTheme } from "./light";

export type ThemeMode = "light" | "dark" | "system";
export type ResolvedThemeMode = "light" | "dark";

export { lightTheme, darkTheme };

export const resolveTheme = (mode: ResolvedThemeMode) =>
  mode === "dark" ? darkTheme : lightTheme;
