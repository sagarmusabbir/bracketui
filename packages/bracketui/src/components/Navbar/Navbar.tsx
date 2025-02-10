// "use client";

// import { FC, useEffect, useState } from "react";
// import clsx from "clsx";
// import NavbarContext from "./NavbarContext";

// export interface NavbarProps {
//   children?: React.ReactNode;
//   className?: string;
//   containerClassName?: string;
//   mobileBreakpoint?: number;
//   enableScrollLock?: boolean;
//   position?: "fixed" | "sticky" | "relative" | "absolute";
//   theme?: {
//     background?: string;
//     border?: string;
//     mobileMenu?: string;
//   };
// }

// const Navbar: FC<NavbarProps> = ({
//   children,
//   className = "",
//   containerClassName = "",
//   mobileBreakpoint = 768,
//   enableScrollLock = true,
//   position = "fixed",
//   theme = {
//     background: "bg-white dark:bg-gray-950 bg-opacity-80",
//     border: "border-gray-200 dark:border-gray-800",
//     mobileMenu: "bg-white dark:bg-gray-950",
//   },
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [desktopNav, setDesktopNav] = useState<React.ReactNode>(null);
//   const [mobileNav, setMobileNav] = useState<React.ReactNode>(null);

//   useEffect(() => {
//     if (!enableScrollLock) return;

//     const handleScrollLock = () => {
//       if (window.innerWidth < mobileBreakpoint) {
//         document.body.style.overflow = isOpen ? "hidden" : "unset";
//       }
//     };

//     handleScrollLock();
//     window.addEventListener("resize", handleScrollLock);

//     return () => {
//       document.body.style.overflow = "unset";
//       window.removeEventListener("resize", handleScrollLock);
//     };
//   }, [isOpen, mobileBreakpoint, enableScrollLock]);

//   // Use standard Tailwind classes instead of dynamic ones
//   const navClasses = clsx(
//     position,
//     "top-0 left-0 right-0 z-50 backdrop-blur-md",
//     theme.background,
//     className
//   );

//   const containerClasses = clsx(
//     "border-b-[0.5px]",
//     theme.border,
//     containerClassName
//   );

//   const mobileMenuClasses = clsx(
//     "md:hidden",
//     "fixed inset-0 z-40",
//     theme.mobileMenu,
//     "transition-transform duration-300 ease-in-out overflow-y-auto",
//     {
//       "translate-y-0": isOpen,
//       "-translate-y-full": !isOpen,
//     }
//   );

//   const desktopNavClasses = clsx(
//     "hidden md:flex items-center justify-between space-x-8"
//   );

//   const toggleButtonClasses = clsx("md:hidden text-gray-950 dark:text-white");

//   return (
//     <NavbarContext.Provider value={{ setDesktopNav, setMobileNav }}>
//       <nav className={navClasses}>
//         <div className={containerClasses}>
//           <div className="px-6 lg:px-8">
//             <div className="flex justify-between h-16 items-center">
//               {children}
//               <div className="flex items-center justify-between space-x-8">
//                 <div className={desktopNavClasses}>{desktopNav}</div>
//               </div>
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className={toggleButtonClasses}
//                 aria-label="Toggle Menu"
//                 aria-expanded={isOpen}
//               >
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   strokeLinecap="square"
//                   strokeLinejoin="inherit"
//                   viewBox="0 0 24 24"
//                   stroke="currentColor"
//                 >
//                   <path
//                     d="M2 8h20"
//                     className={clsx(
//                       "transform transition-transform duration-300 ease-in-out origin-center",
//                       { "rotate-45": isOpen }
//                     )}
//                     strokeWidth="1"
//                   />
//                   <path
//                     d="M2 16h20"
//                     className={clsx(
//                       "transform transition-transform duration-300 ease-in-out origin-center",
//                       { "-rotate-45": isOpen }
//                     )}
//                     strokeWidth="2"
//                   />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       <div className={mobileMenuClasses}>
//         <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]">
//           <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_10%_200px,#ffffff,transparent)] dark:bg-[radial-gradient(circle_500px_at_10%_200px,#030712,transparent)]">
//             <div className="py-20 px-6 lg:px-8 flex flex-col space-y-1">
//               {mobileNav}
//             </div>
//           </div>
//         </div>
//       </div>
//     </NavbarContext.Provider>
//   );
// };

// export default Navbar;

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
        <div className="py-20 px-6 lg:px-8 flex flex-col space-y-1">
          {mobileNav}
        </div>
      </div>
    </NavbarContext.Provider>
  );
};

export default Navbar;
