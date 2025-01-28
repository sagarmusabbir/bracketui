import { useState, useEffect } from "react";

export type Theme = "light" | "dark" | "system";

// Declare window theme type directly in the same file
declare global {
  interface Window {
    theme?: {
      setTheme: (theme: Theme) => void;
      getTheme: () => string | null;
      getSystemTheme: () => "light" | "dark";
    };
  }
}

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return "system";
    return (localStorage.getItem("theme") as Theme) || "system";
  });

  useEffect(() => {
    const handleThemeChange = (e: CustomEvent<Theme>) => {
      setThemeState(e.detail);
    };

    window.addEventListener("theme-change", handleThemeChange as EventListener);
    return () => {
      window.removeEventListener(
        "theme-change",
        handleThemeChange as EventListener
      );
    };
  }, []);

  const setTheme = (newTheme: Theme) => {
    window.theme?.setTheme(newTheme);
  };

  return [theme, setTheme] as const;
}
