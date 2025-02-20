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
    px-6 py-4
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
              <span className="text-sm  whitespace-nowrap tracking-wide leading-none">
                Build Interfaces. Faster. Smarter.
              </span>
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
                    stroke="currentColor"
                    viewBox="0 0 261.912 49.983"
                    className="h-5 w-auto dark:inveret"
                  >
                    <path
                      d="M12.536 26.916H4.597l-.026-4.972h7.03q1.63 0 2.752-.641 1.15-.642 1.738-1.845.615-1.229.615-2.966 0-1.952-.535-3.154-.535-1.203-1.657-1.765-1.123-.56-2.887-.56H6.522V44.45H0V5.533h11.627q2.726 0 4.865.614 2.165.615 3.662 1.925 1.496 1.31 2.298 3.288.802 1.978.802 4.704 0 2.379-1.042 4.383-1.016 2.005-3.02 3.261-1.979 1.257-4.919 1.497zm-.24 17.534H2.458l2.994-5.453h6.842q1.738 0 2.86-.748 1.123-.748 1.684-2.085.562-1.336.562-3.1 0-1.871-.482-3.261-.48-1.39-1.55-2.139-1.069-.748-2.833-.748H5.987l.054-4.972h8.366l1.497 1.898q2.806.054 4.57 1.39 1.765 1.31 2.593 3.395.829 2.084.829 4.463 0 3.716-1.39 6.255-1.363 2.512-3.956 3.822-2.593 1.283-6.255 1.283zM30.363 5.533h11.788q3.849 0 6.522 1.336 2.672 1.337 4.062 3.956 1.417 2.593 1.417 6.442 0 2.94-.882 5.158-.855 2.219-2.486 3.716-1.604 1.497-3.902 2.325l-1.925 1.043h-9.943l-.027-5.453h7.003q1.898 0 3.154-.829 1.257-.828 1.871-2.298.642-1.47.642-3.315 0-2.031-.561-3.501-.562-1.497-1.765-2.299-1.202-.802-3.18-.802h-5.266V44.45h-6.522Zm18.15 38.917-7.432-17.48 6.816-.027 7.591 17.16v.347zm24.99-33.545L64.097 44.45h-6.789L69.629 5.533h4.277zM80.99 44.45 71.58 10.905l-.454-5.372h4.33L87.832 44.45Zm.187-14.46v5.452H63.054V29.99zm29.606 1.764h6.495q-.16 4.223-1.71 7.19-1.524 2.94-4.384 4.49-2.833 1.55-6.923 1.55-3.1 0-5.56-1.122-2.432-1.123-4.142-3.234-1.71-2.138-2.62-5.212-.882-3.074-.882-6.977v-6.896q0-3.902.91-6.976.935-3.1 2.672-5.212 1.737-2.138 4.223-3.234 2.513-1.123 5.64-1.123 4.063 0 6.816 1.55t4.25 4.544q1.523 2.994 1.764 7.324h-6.522q-.134-2.94-.775-4.678-.642-1.737-1.978-2.512-1.31-.775-3.555-.775-1.818 0-3.154.695-1.31.668-2.165 2.058-.829 1.363-1.23 3.448-.4 2.058-.4 4.838v6.95q0 2.672.347 4.73.347 2.059 1.096 3.475.775 1.417 2.058 2.165 1.283.722 3.207.722 2.3 0 3.662-.722 1.39-.721 2.032-2.405.668-1.711.828-4.651zm18.684-26.221V44.45h-6.522V5.533Zm19.459 0-12.99 18.79-7.752 9.542-1.23-6.789 5.346-7.965 8.74-13.578zm-7.19 38.917-9.81-18.363 4.464-4.65 13.07 23.013zm33.01-5.453v5.453h-16.893v-5.453ZM159.563 5.533V44.45h-6.522V5.533Zm12.91 16.197v5.346h-14.62V21.73zm2.111-16.197v5.48h-16.732v-5.48Zm20.18 0V44.45h-6.468V5.533Zm9.917 0v5.48h-26.194v-5.48ZM213.901 0v49.983h48.011V0Zm8.531 10.26h6.884v19.83c0 1.2.106 2.115.32 2.742.226.614.567 1.026 1.02 1.24.454.213 1.022.32 1.702.32.694 0 1.26-.107 1.7-.32.44-.214.761-.626.961-1.24.214-.627.32-1.541.32-2.742V10.26h6.863v19.83c0 2.268-.407 4.122-1.22 5.563-.814 1.427-1.955 2.474-3.422 3.141-1.467.667-3.201 1.001-5.202 1.001-1.988 0-3.723-.334-5.204-1-1.48-.668-2.64-1.715-3.48-3.142-.828-1.44-1.242-3.295-1.242-5.563zm24.072 0h6.824v29.135h-6.824z"
                      style={{
                        fontSize: "54.741px",
                        fontFamily: "Roboto",

                        fontVariationSettings: "&quot",
                        stroke: "#fff",
                        strokeWidth: 0,
                        strokeLinejoin: "round",
                        strokeMiterlimit: 3.2,
                      }}
                    />
                  </svg>
                </div>
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
