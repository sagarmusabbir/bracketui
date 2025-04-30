"use client";

import { FC, useEffect, useState, useMemo, useCallback } from "react";
import clsx from "clsx";
import NavbarContext from "./NavbarContext";

type Theme = {
  background?: string;
  border?: string;
  mobileMenu?: string;
};

export interface NavbarProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  mobileBreakpoint?: number;
  enableScrollLock?: boolean;
  position?: "fixed" | "sticky" | "relative" | "absolute";
  theme?: Theme;
}

const Navbar: FC<NavbarProps> = ({
  children,
  className = "",
  containerClassName = "",
  mobileBreakpoint = 768,
  enableScrollLock = true,
  position = "fixed",
  theme,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopNav, setDesktopNav] = useState<React.ReactNode>(null);
  const [mobileNav, setMobileNav] = useState<React.ReactNode>(null);
  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Memoize context value to prevent unnecessary updates
  const contextValue = useMemo(
    () => ({ setDesktopNav, setMobileNav, closeMenu }),
    []
  );

  // Prevent unnecessary re-renders of toggle function
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  // Optimize scroll lock effect

  useEffect(() => {
    if (!enableScrollLock) return;

    const handleScrollLock = () => {
      if (window.innerWidth < mobileBreakpoint) {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
      }
    };

    handleScrollLock();
    window.addEventListener("resize", handleScrollLock);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("resize", handleScrollLock);
    };
  }, [isOpen, mobileBreakpoint, enableScrollLock]);

  const themeClasses = {
    background: theme?.background || "bg-white dark:bg-gray-950",
    border: theme?.border || "border-gray-500 border-opacity-20",
    mobileMenu: theme?.mobileMenu || "bg-white dark:bg-gray-950",
  };

  return (
    <NavbarContext.Provider value={contextValue}>
      <nav
        className={clsx(
          position,
          "top-0 left-0 right-0 z-50 backdrop-blur-md",
          themeClasses.background,
          className
        )}
      >
        <div
          className={clsx(
            "border-b-[0.5px]",
            themeClasses.border,
            containerClassName
          )}
        >
          <div className="px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              {children}
              <div className="hidden md:flex items-center justify-between space-x-6">
                {desktopNav}
              </div>
              <button
                onClick={toggleMenu}
                className="md:hidden text-gray-950 dark:text-white"
                aria-label="Toggle Menu"
                aria-expanded={isOpen}
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
                    className={clsx(
                      "transform transition-transform duration-300 ease-in-out origin-center",
                      { "rotate-45": isOpen }
                    )}
                    strokeWidth="1"
                  />
                  <path
                    d="M2 16h20"
                    className={clsx(
                      "transform transition-transform duration-300 ease-in-out origin-center",
                      { "-rotate-45": isOpen }
                    )}
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={clsx(
          "md:hidden fixed inset-0 z-40",
          themeClasses.mobileMenu,
          "transition-transform duration-300 ease-in-out overflow-y-auto",
          { "translate-y-0": isOpen, "-translate-y-full": !isOpen }
        )}
      >
        <div className="   flex-1 overflow-auto py-16">
          {/* <a
            href="#"
            className="
    group
    px-6 py-4
    bg-gradient-to-r from-slate-500/10 to-gray-500/10
    backdrop-filter backdrop-blur-md
    text-gray-700 dark:text-gray-300
    flex items-center justify-between
    transition-all duration-300 ease-in-out
    hover:bg-gradient-to-r hover:from-gray-500/10 hover:to-slate-500/10
    
  "
          >
            <div className="flex items-center gap-2">
              <span className="text-sm  whitespace-nowrap tracking-wider">
                Build clean, minimal Interfaces →
              </span>
              <span className="transition-opacity duration-300 group-hover:opacity-80 flex items-center gap-1 tracking-normal h-5 w-auto p-1 ">
                BracketUI
               
              </span>
            </div>
          </a> */}

          <a
            target="_blank"
            href="#"
            className="flex items-center gap-2  
    px-6 py-4  text-sm  font-medium
     bg-gradient-to-r from-slate-500/10 to-gray-500/10 
    backdrop-filter backdrop-blur-md
    text-gray-700 dark:text-gray-300 
    transition-opacity duration-200 ease-in-out text-nowrap
    motion-reduce:transition-none motion-reduce:hover:transform-none 
    hover:opacity-90 max-w-full h-14"
          >
            <span
              className=" 
   text-[9px]  font-bold
    px-2 mr-2  rounded-lg
    text-white bg-gray-600 dark:bg-gray-700"
            >
              New
            </span>
            <span className=" whitespace-nowrap truncate tracking-wider inline-flex items-center">
              Bracket UI version 4 is out!&nbsp;
              <u>See What’s New!</u>
              {/* <svg
                className="ml-2  
      size-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg> */}
              <svg
                className="h-5 w-5 fill-none stroke-current stroke-2 ml-2 rotate-180" // Added opacity to match logo style
                viewBox="0 0 24 24"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </span>
          </a>

          {mobileNav}
        </div>
      </div>
    </NavbarContext.Provider>
  );
};

export default Navbar;
