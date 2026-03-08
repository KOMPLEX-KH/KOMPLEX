'use client';

import { createContext, useContext, useCallback, type ReactNode } from 'react';

export type Theme = 'light' | 'dark';

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
    isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({
    children,
    value,
}: {
    children: ReactNode;
    value: ThemeContextType;
}) {
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme(): ThemeContextType {
    const ctx = useContext(ThemeContext);
    if (ctx == null) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return ctx;
}
