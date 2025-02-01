// import { useState, useEffect } from "react";

// export type Theme = "light" | "dark" | "system";

// // Declare window theme type directly in the same file
// declare global {
//   interface Window {
//     theme?: {
//       setTheme: (theme: Theme) => void;
//       getTheme: () => string | null;
//       getSystemTheme: () => "light" | "dark";
//     };
//   }
// }

// export function useTheme() {
//   const [theme, setThemeState] = useState<Theme>(() => {
//     if (typeof window === "undefined") return "system";
//     return (localStorage.getItem("theme") as Theme) || "system";
//   });

//   useEffect(() => {
//     const handleThemeChange = (e: CustomEvent<Theme>) => {
//       setThemeState(e.detail);
//     };

//     window.addEventListener("theme-change", handleThemeChange as EventListener);
//     return () => {
//       window.removeEventListener(
//         "theme-change",
//         handleThemeChange as EventListener
//       );
//     };
//   }, []);

//   const setTheme = (newTheme: Theme) => {
//     window.theme?.setTheme(newTheme);
//   };

//   return [theme, setTheme] as const;
// }

// packages/bracketui/src/hooks/useTheme.ts
"use client";
import { useState, useEffect } from "react";

export type Theme = "light" | "dark" | "system";

const getSystemTheme = (): "light" | "dark" => {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

const applyTheme = (theme: Theme) => {
  const root = document.documentElement;
  const systemTheme = getSystemTheme();
  const effectiveTheme = theme === "system" ? systemTheme : theme;

  root.classList.remove("light", "dark");
  root.classList.add(effectiveTheme);
};

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as Theme) || "system";
  });

  useEffect(() => {
    // Initial theme application
    applyTheme(theme);

    // Save theme preference
    localStorage.setItem("theme", theme);

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [theme]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    applyTheme(newTheme);
  };

  return [theme, setTheme] as const;
}
