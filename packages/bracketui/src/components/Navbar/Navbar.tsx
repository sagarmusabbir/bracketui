"use client";

import { FC, useEffect, useState, useMemo, useCallback } from "react";
import clsx from "clsx";
import NavbarContext from "./NavbarContext";

export interface NavbarProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  mobileBreakpoint?: number;
  enableScrollLock?: boolean;
  position?: "fixed" | "sticky" | "relative" | "absolute";
  theme?: {
    background?: string;
    border?: string;
    mobileMenu?: string;
  };
}

const Navbar: FC<NavbarProps> = ({
  children,
  className = "",
  containerClassName = "",
  mobileBreakpoint = 768,
  enableScrollLock = true,
  position = "fixed",
  theme = {
    background: "bg-white dark:bg-gray-950 bg-opacity-80",
    border: "border-gray-200 dark:border-gray-800",
    mobileMenu: "bg-white dark:bg-gray-950",
  },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopNav, setDesktopNav] = useState<React.ReactNode>(null);
  const [mobileNav, setMobileNav] = useState<React.ReactNode>(null);

  // Memoize context value to prevent unnecessary updates
  const contextValue = useMemo(() => ({ setDesktopNav, setMobileNav }), []);

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

  return (
    <NavbarContext.Provider value={contextValue}>
      <nav
        className={clsx(
          position,
          "top-0 left-0 right-0 z-50 backdrop-blur-md",
          theme.background,
          className
        )}
      >
        <div
          className={clsx("border-b-[0.5px]", theme.border, containerClassName)}
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
          theme.mobileMenu,
          "transition-transform duration-300 ease-in-out overflow-y-auto",
          { "translate-y-0": isOpen, "-translate-y-full": !isOpen }
        )}
      >
        <div className="   flex-1 overflow-auto py-16">
          {/* <a
            href="#"
            className="
    group
    px-8 py-4
    bg-gradient-to-r from-gray-400/10 to-gray-300/10
    backdrop-filter backdrop-blur-md
    border border-gray-200/20
   
    text-gray-600 dark:text-gray-300
    flex items-center justify-between
    transition-all duration-300 ease-in-out
    hover:shadow-gray-500/10
    hover:border-gray-300/30
  "
          >
            <div className="flex items-center gap-3">
            

              <span className="text-xs font-medium whitespace-nowrap">
                Build Symmetric & Minimal Interfaces • Faster • Smarter •
              </span>
            </div>

            <span
              className="
    transition-opacity
    duration-300 
    group-hover:opacity-80
  "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlSpace="preserve"
                className="w-auto h-3 text-gray-800"
                fill="currentColor"
                // stroke="currentColor"
                viewBox="0 0 119.96 26.63"
              >
                <path d="M107.506 7.228h2.529V0h3.95v7.228h5.975v3.952h-5.974v9.944q0 .636.487 1.105.505.45 1.198.45h4.289v3.95h-4.345q-1.535 0-2.809-.73-1.255-.75-2.022-1.985-.75-1.255-.75-2.772V11.18h-2.528zm-19.269 4.008q0-1.667 1.217-2.828 1.218-1.18 2.922-1.18h8.09q1.554 0 2.809.768 1.273.75 2.022 2.041.768 1.274.768 2.828v.543q0 1.536-.768 2.81-.749 1.254-2.022 2.022-1.255.749-2.81.749h-6.03v-3.933h6.068q.675 0 1.143-.487.487-.486.487-1.18v-.524q0-.711-.487-1.198-.468-.487-1.143-.487H92.19v9.963q0 .636.43 1.086.431.45 1.05.45h11.03v3.95h-11.03q-1.499 0-2.735-.73-1.236-.749-1.966-1.985-.73-1.254-.73-2.753zm-57.94 2.959q0-1.929.936-3.502.955-1.573 2.547-2.51 1.592-.954 3.52-.954h10.825v19.4h-3.952V11.18h-6.872q-1.255 0-2.154.9-.899.88-.899 2.153v5.356q0 1.274.9 2.191.898.899 2.153.899h4.625v3.951h-4.625q-1.93 0-3.52-.936-1.593-.955-2.548-2.547-.936-1.592-.936-3.52zM69.68 0h3.952v14.663h1.33l7.022-7.435h5.131l-8.858 9.401 9.645 10h-5.525l-7.772-8.015h-.973v8.015H69.68zM49.575 14.232q0-1.929.973-3.52.974-1.592 2.603-2.528 1.63-.956 3.615-.956h10.918v3.952H56.766q-1.33 0-2.285.917-.955.9-.955 2.191v5.263q0 1.292.936 2.21.956.917 2.304.917h10.918v3.951H56.766q-1.985 0-3.615-.955-1.629-.955-2.603-2.547-.973-1.61-.973-3.54zm-30.43-1.573q0-1.498.75-2.734.768-1.236 2.022-1.966 1.274-.73 2.81-.73h4.325v3.932h-4.326q-.674 0-1.16.468-.469.45-.469 1.105v13.895h-3.951ZM0 0h3.951v22.68h6.873q1.274 0 2.154-.9.899-.899.899-2.153V14.27q0-1.274-.9-2.172-.88-.918-2.153-.918H6.2V7.229h4.625q1.929 0 3.52.955 1.593.936 2.529 2.528.955 1.592.955 3.52v5.431q0 1.91-.955 3.502-.936 1.573-2.528 2.528-1.592.937-3.52.937H3.95q-1.629 0-2.79-1.161Q0 24.307 0 22.679Z" />
              </svg>
            </span>
          </a> */}

          <a
            href="#"
            className="
    group
    px-8 py-4
    bg-gradient-to-r from-gray-400/10 to-gray-300/10
    backdrop-filter backdrop-blur-md
    
    text-gray-600 dark:text-gray-300
    flex items-center justify-between
    transition-all duration-300 ease-in-out
    hover:bg-gradient-to-r hover:from-gray-400/15 hover:to-gray-300/15
    hover:border-gray-300/30
  "
          >
            <div className="flex items-center gap-3">
              <span
                className="
    transition-opacity
    duration-300 
    group-hover:opacity-80
  "
              >
                <div className="flex items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlSpace="preserve"
                    className="w-auto h-3 text-gray-800 dark:text-gray-200"
                    fill="currentColor"
                    viewBox="0 0 119.96 26.63"
                  >
                    <path d="M107.506 7.228h2.529V0h3.95v7.228h5.975v3.952h-5.974v9.944q0 .636.487 1.105.505.45 1.198.45h4.289v3.95h-4.345q-1.535 0-2.809-.73-1.255-.75-2.022-1.985-.75-1.255-.75-2.772V11.18h-2.528zm-19.269 4.008q0-1.667 1.217-2.828 1.218-1.18 2.922-1.18h8.09q1.554 0 2.809.768 1.273.75 2.022 2.041.768 1.274.768 2.828v.543q0 1.536-.768 2.81-.749 1.254-2.022 2.022-1.255.749-2.81.749h-6.03v-3.933h6.068q.675 0 1.143-.487.487-.486.487-1.18v-.524q0-.711-.487-1.198-.468-.487-1.143-.487H92.19v9.963q0 .636.43 1.086.431.45 1.05.45h11.03v3.95h-11.03q-1.499 0-2.735-.73-1.236-.749-1.966-1.985-.73-1.254-.73-2.753zm-57.94 2.959q0-1.929.936-3.502.955-1.573 2.547-2.51 1.592-.954 3.52-.954h10.825v19.4h-3.952V11.18h-6.872q-1.255 0-2.154.9-.899.88-.899 2.153v5.356q0 1.274.9 2.191.898.899 2.153.899h4.625v3.951h-4.625q-1.93 0-3.52-.936-1.593-.955-2.548-2.547-.936-1.592-.936-3.52zM69.68 0h3.952v14.663h1.33l7.022-7.435h5.131l-8.858 9.401 9.645 10h-5.525l-7.772-8.015h-.973v8.015H69.68zM49.575 14.232q0-1.929.973-3.52.974-1.592 2.603-2.528 1.63-.956 3.615-.956h10.918v3.952H56.766q-1.33 0-2.285.917-.955.9-.955 2.191v5.263q0 1.292.936 2.21.956.917 2.304.917h10.918v3.951H56.766q-1.985 0-3.615-.955-1.629-.955-2.603-2.547-.973-1.61-.973-3.54zm-30.43-1.573q0-1.498.75-2.734.768-1.236 2.022-1.966 1.274-.73 2.81-.73h4.325v3.932h-4.326q-.674 0-1.16.468-.469.45-.469 1.105v13.895h-3.951ZM0 0h3.951v22.68h6.873q1.274 0 2.154-.9.899-.899.899-2.153V14.27q0-1.274-.9-2.172-.88-.918-2.153-.918H6.2V7.229h4.625q1.929 0 3.52.955 1.593.936 2.529 2.528.955 1.592.955 3.52v5.431q0 1.91-.955 3.502-.936 1.573-2.528 2.528-1.592.937-3.52.937H3.95q-1.629 0-2.79-1.161Q0 24.307 0 22.679Z" />
                  </svg>
                </div>
              </span>
              <span className="text-xs font-medium whitespace-nowrap tracking-wide">
                Build Symmetric & Minimal Interfaces.Faster.Smarter.
              </span>
            </div>
          </a>

          {mobileNav}
        </div>
      </div>
    </NavbarContext.Provider>
  );
};

export default Navbar;
