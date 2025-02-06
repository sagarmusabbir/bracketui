"use client";
import { createContext, useContext, ReactNode } from "react";

// Define the context type
interface FooterContextType {
  setFooterBottom: (children: ReactNode) => void;
}

// Create the context
const FooterContext = createContext<FooterContextType | undefined>(undefined);

// Custom hook to use the context
export const useFooterContext = () => {
  const context = useContext(FooterContext);
  if (!context) {
    throw new Error("useFooterContext must be used within a Footer");
  }
  return context;
};

export default FooterContext;
