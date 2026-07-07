"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

interface ThemeContextValue {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

const STORAGE_KEY = "portfolio-theme";

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Always starts as "dark" to match the server-rendered HTML exactly (window/localStorage
  // don't exist during SSR). The inline script in layout.tsx already applied the correct
  // "dark" class to <html> before hydration, so colors are correct immediately either way —
  // this state only drives the header's Sun/Moon icon, which may flip once on mount if the
  // visitor's stored preference is actually "light". That one-time correction is why this
  // effect intentionally reads a browser-only API and calls setState — there's no way to
  // know the real value during render without risking a hydration mismatch instead.
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    const actual: Theme =
      stored ??
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    // eslint-disable-next-line react-hooks/set-state-in-effect -- syncing to a browser-only API (localStorage/matchMedia) on mount; see comment above
    setTheme(actual);
  }, []);

  function toggleTheme() {
    setTheme((prev) => {
      const next: Theme = prev === "dark" ? "light" : "dark";
      window.localStorage.setItem(STORAGE_KEY, next);
      document.documentElement.classList.toggle("dark", next === "dark");
      return next;
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}