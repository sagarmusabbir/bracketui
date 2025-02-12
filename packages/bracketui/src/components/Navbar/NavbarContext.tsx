"use client";
import { createContext, useContext, ReactNode } from "react";

// Define the context type
interface NavbarContextType {
  setDesktopNav: (children: ReactNode) => void;
  setMobileNav: (children: ReactNode) => void;
}

// Create the context
const NavbarContext = createContext<NavbarContextType | undefined>(undefined);

// Custom hook to use the context
export const useNavbarContext = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbarContext must be used within a Navbar");
  }
  return context;
};

export default NavbarContext;
