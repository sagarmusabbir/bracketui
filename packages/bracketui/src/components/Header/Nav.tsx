"use client";
import { useState, ReactNode } from "react";

export interface NavProps {
  children: ReactNode;
}

const Nav = ({ children }: NavProps) => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => setIsMobileNavOpen((prev) => !prev);

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="flex justify-between items-center">
        {children}

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileNav}
          className="lg:hidden p-2 border rounded"
        >
          {isMobileNavOpen ? "Close" : "Menu"}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`lg:hidden mt-4 ${isMobileNavOpen ? "block" : "hidden"}`}>
        <div className="flex flex-col lg:hidden  gap-4">{children}</div>
      </div>
    </nav>
  );
};

export default Nav;
