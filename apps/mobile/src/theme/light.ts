import { TAILWIND_COLORS } from "@/constants/styles/tailwind-colors";

export interface AppTheme {
  mode: "light" | "dark";
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    surfaceMuted: string;
    text: string;
    textMuted: string;
    textInverse: string;
    border: string;
    shadow: string;
    searchBackground: string;
    chipBackground: string;
    navBackground: string;
    navBorder: string;
  };
  spacing: {
    x1: number;
    x2: number;
    x3: number;
    x4: number;
  };
  radius: {
    sm: number;
    md: number;
    lg: number;
    xl: number;
    pill: number;
  };
}

export const lightTheme: AppTheme = {
  mode: "light",
  colors: {
    primary: TAILWIND_COLORS["indigo-600"],
    secondary: TAILWIND_COLORS["violet-600"],
    background: TAILWIND_COLORS["gray-0"],
    surface: TAILWIND_COLORS.white,
    surfaceMuted: TAILWIND_COLORS["indigo-50"],
    text: TAILWIND_COLORS["gray-900"],
    textMuted: TAILWIND_COLORS["gray-500"],
    textInverse: TAILWIND_COLORS.white,
    border: TAILWIND_COLORS["gray-200"],
    shadow: TAILWIND_COLORS["gray-900/15"],
    searchBackground: TAILWIND_COLORS.white,
    chipBackground: TAILWIND_COLORS["indigo-50"],
    navBackground: TAILWIND_COLORS.white,
    navBorder: TAILWIND_COLORS["gray-200"],
  },
  spacing: {
    x1: 8,
    x2: 16,
    x3: 24,
    x4: 32,
  },
  radius: {
    sm: 12,
    md: 16,
    lg: 20,
    xl: 24,
    pill: 999,
  },
};
