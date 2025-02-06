"use client";

import { FC, useEffect, useState } from "react";

import NavbarContext from "./NavbarContext";

export interface NavbarProps {
  children?: React.ReactNode;
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ children, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopNav, setDesktopNav] = useState<React.ReactNode>(null);
  const [mobileNav, setMobileNav] = useState<React.ReactNode>(null);

  // Add the useEffect here
  useEffect(() => {
    // Only apply scroll lock on mobile screens
    if (window.innerWidth < 768) {
      // Using 768px
      if (isOpen) {
        // Prevent body scrolling when mobile menu is open
        document.body.style.overflow = "hidden";
      } else {
        // Re-enable body scrolling when mobile menu is closed
        document.body.style.overflow = "unset";
      }
    }

    return () => {
      // Cleanup
      document.body.style.overflow = "unset";
    };
  }, [isOpen]); // Depends on isOpen state

  return (
    <NavbarContext.Provider value={{ setDesktopNav, setMobileNav }}>
      <nav
        className={`bg-white dark:bg-gray-950 text-gray-950 dark:text-white fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-80 ${className}`}
      >
        <div className="border-b border-gray-200 dark:border-gray-800">
          <div className="px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center ">
              {children}

              <div className="flex items-center justify-between space-x-8">
                {/* Desktop Navbar Section */}
                <div className="hidden md:flex items-center">{desktopNav}</div>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden "
                aria-label="Toggle Menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="square"
                  strokeLinejoin="inherit"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M2 8h20"
                    className={`transform transition-transform duration-300 ease-in-out origin-center ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    strokeWidth="1"
                  />
                  <path
                    d="M2 16h20"
                    className={`transform transition-transform duration-300 ease-in-out origin-center ${
                      isOpen ? "-rotate-45" : ""
                    }`}
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay + Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white dark:bg-gray-950 transition-transform duration-300 ease-in-out overflow-y-auto ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_10%_200px,#ffffff,transparent)] dark:bg-[radial-gradient(circle_500px_at_10%_200px,#030712,transparent)]">
            {/* Mobile Navbar Section */}
            <div className="py-20 px-2 flex flex-col space-y-1">
              {mobileNav}
            </div>
          </div>
        </div>
      </div>
    </NavbarContext.Provider>
  );
};

export default Navbar;
