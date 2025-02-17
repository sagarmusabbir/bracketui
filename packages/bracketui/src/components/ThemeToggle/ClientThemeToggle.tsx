// packages/bracketui/src/components/ThemeToggle/ClientThemeToggle.tsx
"use client";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle"; // your existing ThemeToggle component

const ClientThemeToggle = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // returns nothing on server-side
  }

  return <ThemeToggle />;
};

export default ClientThemeToggle;
