// NavbarContext.tsx
"use client";

import { createContext, useContext, useState } from "react";

type NavbarContextType = {
  isMobileOpen: boolean;
  toggleMobileMenu: () => void;
  closeMobileMenu: () => void;
};

const NavbarContext = createContext<NavbarContextType>({
  isMobileOpen: false,
  toggleMobileMenu: () => {},
  closeMobileMenu: () => {},
});

export const useNavbar = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <NavbarContext.Provider
      value={{
        isMobileOpen,
        toggleMobileMenu: () => setIsMobileOpen(!isMobileOpen),
        closeMobileMenu: () => setIsMobileOpen(false),
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
