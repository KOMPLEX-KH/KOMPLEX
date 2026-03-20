import { TAILWIND_COLORS } from "@/constants/styles/tailwind-colors";
import type { AppTheme } from "./light";

export const darkTheme: AppTheme = {
  mode: "dark",
  colors: {
    primary: TAILWIND_COLORS["indigo-600"],
    secondary: TAILWIND_COLORS["violet-600"],
    background: TAILWIND_COLORS["gray-900"],
    surface: TAILWIND_COLORS["gray-900"],
    surfaceMuted: TAILWIND_COLORS["gray-800"],
    text: TAILWIND_COLORS["gray-100"],
    textMuted: TAILWIND_COLORS["gray-400"],
    textInverse: TAILWIND_COLORS.white,
    border: TAILWIND_COLORS["gray-800"],
    shadow: TAILWIND_COLORS.black,
    searchBackground: TAILWIND_COLORS["gray-800"],
    chipBackground: TAILWIND_COLORS["gray-800"],
    navBackground: TAILWIND_COLORS["gray-900"],
    navBorder: TAILWIND_COLORS["gray-700"],
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
