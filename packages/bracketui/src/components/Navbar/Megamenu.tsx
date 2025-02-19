// "use client";
// import { FC, useState, useEffect, useCallback, useRef } from "react";
// import clsx from "clsx";

// export interface MegamenuProps {
//   label: string;
//   children?: React.ReactNode;
//   className?: string;
//   buttonClassName?: string;
//   mobileBreakpoint?: number;
//   isDropdownItem?: boolean;
//   theme?: {
//     text?: string;
//     states?: string;
//     menu?: string;
//   };
// }

// const Megamenu: FC<MegamenuProps> = ({
//   label,
//   children,
//   className,
//   buttonClassName,
//   mobileBreakpoint = 768,
//   isDropdownItem,
//   theme = {
//     // Match exactly with Navlink's default theme
//     text: "text-gray-900 dark:text-gray-100 text-base md:text-sm",
//     states: "focus-within:opacity-100 active:opacity-100 md:hover:opacity-100",
//     menu: "bg-white dark:bg-gray-950",
//   },
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const menuRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < mobileBreakpoint);
//     };

//     // Initial check
//     handleResize();

//     // Add event listener
//     window.addEventListener("resize", handleResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener("resize", handleResize);
//       if (timeoutRef.current) {
//         clearTimeout(timeoutRef.current);
//       }
//     };
//   }, [mobileBreakpoint]);

//   const timeoutRef = useRef<NodeJS.Timeout>();

//   const handleMouseEnter = () => {
//     if (isMobile) return; // Skip if on mobile
//     if (timeoutRef.current) {
//       clearTimeout(timeoutRef.current);
//     }
//     setIsOpen(true);
//   };

//   const handleMouseLeave = () => {
//     if (isMobile) return; // Skip if on mobile
//     timeoutRef.current = setTimeout(() => {
//       setIsOpen(false);
//     }, 150); // Small delay to prevent flickering
//   };

//   // Handle click outside
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
//         setIsOpen(false);
//       }
//     };

//     // Close other menus when a new one is opened
//     const handleCloseOthers = (event: CustomEvent) => {
//       if (menuRef.current && !menuRef.current.contains(event.detail as Node)) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     document.addEventListener(
//       "closeMegamenus",
//       handleCloseOthers as EventListener
//     );

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//       document.removeEventListener(
//         "closeMegamenus",
//         handleCloseOthers as EventListener
//       );
//     };
//   }, []);

//   // Handle menu open
//   const handleMenuOpen = () => {
//     if (!isOpen) {
//       // Create a custom event to close other menus
//       const event = new CustomEvent("closeMegamenus", {
//         detail: menuRef.current,
//       });
//       document.dispatchEvent(event);
//     }
//     setIsOpen(!isOpen);
//   };

//   // ... resize and click outside handlers remain same ...

//   const containerClasses = clsx(
//     "megamenu-container relative",
//     "w-full md:w-auto"
//   );

//   const variantStyles = isDropdownItem ? "opacity-60 " : "opacity-70 ";

//   const buttonClasses = clsx(
//     // Base styles
//     "transition-all motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out flex",
//     // Responsive layout
//     "w-full md:w-auto",
//     "justify-between items-center md:justify-start gap-1",
//     // Spacing
//     "py-2 md:py-1",

//     // Text size
//     "text-base md:text-sm leading-none font-normal",
//     variantStyles,
//     theme.text,
//     theme.states,
//     buttonClassName
//   );

//   const menuClasses = clsx(
//     "transition-all duration-200 overflow-hidden flex flex-col",
//     {
//       block: isOpen,
//       hidden: !isOpen,
//     },
//     // Mobile styles
//     "w-full ",
//     // Desktop styles
//     "md:fixed w-full md:py-6  md:px-6 lg:px-8 md:top-16   md:left-0 md:right-0 ",
//     "md:shadow-md md:border-y-[0.5px] border-gray-200 dark:border-gray-800",
//     theme.menu,
//     className
//   );

//   return (
//     <div
//       className={containerClasses}
//       ref={menuRef}
//       {...(!isMobile && {
//         // Only add hover handlers if not mobile
//         onMouseEnter: handleMouseEnter,
//         onMouseLeave: handleMouseLeave,
//       })}
//       onFocus={handleMouseEnter}
//       onBlur={handleMouseLeave}
//     >
//       <button
//         onClick={handleMenuOpen}
//         className={buttonClasses}
//         aria-expanded={isOpen}
//         aria-controls="megamenu-content"
//       >
//         <span>{label}</span>
//         <svg
//           className={clsx(
//             "md:hidden  transition-transform duration-200 w-4 h-4",
//             {
//               "fill-current stroke-none ": !isDropdownItem, // Default button
//               "fill-none stroke-current stroke-2 ": isDropdownItem, // Dropdown item button
//               "rotate-0": isOpen,
//               "-rotate-90": !isOpen,
//             }
//           )}
//           viewBox="0 0 24 24"
//           aria-hidden="true"
//         >
//           <path d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>

//       <div
//         id="megamenu-content"
//         className={menuClasses}
//         role="region"
//         aria-label={`${label} megamenu`}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Megamenu;

"use client";
import { FC, useState, useEffect, useCallback, useRef } from "react";
import clsx from "clsx";
import { Button } from "../Button";

export interface MegamenuProps {
  label: string;
  children?: React.ReactNode;
  className?: string;
  buttonClassName?: string;
  mobileBreakpoint?: number;
  isDropdownItem?: boolean;
  onBack?: () => void;
  theme?: {
    text?: string;
    states?: string;
    menu?: string;
  };
}

const Megamenu: FC<MegamenuProps> = ({
  label,
  children,
  className,
  buttonClassName,
  mobileBreakpoint = 768,
  isDropdownItem,
  onBack,
  theme = {
    // Match exactly with Navlink's default theme
    text: "text-gray-800 dark:text-gray-100 text-base md:text-sm",
    states: "focus-within:opacity-100 active:opacity-100 md:hover:opacity-100",
    menu: "bg-white dark:bg-gray-950",
  },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    // Initial check
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [mobileBreakpoint]);

  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (isMobile) return; // Skip if on mobile
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (isMobile) return; // Skip if on mobile
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150); // Small delay to prevent flickering
  };

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    // Close other menus when a new one is opened
    const handleCloseOthers = (event: CustomEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.detail as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener(
      "closeMegamenus",
      handleCloseOthers as EventListener
    );

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener(
        "closeMegamenus",
        handleCloseOthers as EventListener
      );
    };
  }, []);

  // Handle menu open
  const handleMenuOpen = () => {
    if (!isOpen) {
      // Create a custom event to close other menus
      const event = new CustomEvent("closeMegamenus", {
        detail: menuRef.current,
      });
      document.dispatchEvent(event);
    }
    setIsOpen(!isOpen);
  };

  const handleBack = () => {
    setIsOpen(false);
  };

  // ... resize and click outside handlers remain same ...

  const containerClasses = clsx(
    "megamenu-container relative",
    "w-full md:w-auto"
  );

  const variantStyles = isDropdownItem ? "opacity-50 " : "opacity-60 ";

  const buttonClasses = clsx(
    // Base styles
    "transition-all motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out flex",
    // Responsive layout
    "w-full md:w-auto",
    "justify-between items-center md:justify-start gap-1",
    // Spacing
    "py-2 md:py-1",

    // Text size
    "text-base md:text-sm leading-none font-normal",
    variantStyles,
    theme.text,
    theme.states,
    buttonClassName
  );

  const menuClasses = clsx(
    "transition-all duration-200 overflow-hidden flex flex-col", // Added flex flex-col
    {
      "opacity-100 pointer-events-auto": isOpen,
      "opacity-0 pointer-events-none": !isOpen,
    },
    // Overlay styles
    "fixed inset-0 md:inset-auto z-30",
    "md:fixed w-full md:py-6 md:px-6 lg:px-8 md:top-16 md:left-0 md:right-0",
    "md:shadow-md md:border-y-[0.5px] border-gray-200 dark:border-gray-800",
    theme.menu,
    className
  );

  return (
    <div
      className={containerClasses}
      ref={menuRef}
      {...(!isMobile && {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      })}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      <button
        onClick={handleMenuOpen}
        className={buttonClasses}
        aria-expanded={isOpen}
        aria-controls="megamenu-content"
      >
        <span>{label}</span>
        {/* <svg
          className={clsx(
            "md:hidden transition-transform duration-200 w-4 h-4",
            {
              "fill-current stroke-none": !isDropdownItem,
              "fill-none stroke-current stroke-2": isDropdownItem,
              "rotate-0": isOpen,
              "-rotate-90": !isOpen,
            }
          )}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg> */}
      </button>

      {/* Overlay Menu */}
      <div
        id="megamenu-content"
        className={menuClasses}
        role="region"
        aria-label={`${label} megamenu`}
      >
        {/* Back button header - only show on mobile */}
        <div className="md:hidden flex  items-center   sticky  top-16  z-20 px-5 py-3  bg-gray-400  bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10">
          <button
            onClick={handleBack}
            className="flex items-center text-gray-600 dark:text-gray-300"
          >
            <svg
              className="w-4 h-4 mr-2     "
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            <span>Back</span>
          </button>
        </div>

        {/* Menu content */}
        <div className="py-16 mt-2 px-6 md:p-0 flex-1 overflow-auto ">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Megamenu;
