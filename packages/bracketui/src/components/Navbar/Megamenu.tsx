"use client";
import { FC, useState, useEffect, useCallback, useRef } from "react";
import clsx from "clsx";

export interface MegamenuProps {
  label: string;
  children?: React.ReactNode;
  className?: string;
  buttonClassName?: string;
  mobileBreakpoint?: number;
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
  theme = {
    // Match exactly with Navlink's default theme
    text: "text-gray-900 dark:text-gray-100 text-base md:text-sm",
    states: "opacity-80 hover:opacity-100",
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

  // ... resize and click outside handlers remain same ...

  const containerClasses = clsx(
    "megamenu-container relative",
    "w-full md:w-auto"
  );

  const buttonClasses = clsx(
    // Base styles
    "flex items-center transition-all duration-200",
    // Responsive layout
    "w-full md:w-auto",
    "justify-between md:justify-start",
    // Spacing
    "py-2 md:py-1",
    "gap-1",
    // Text size
    "text-base md:text-sm",
    // Theme styles - match Navlink's default appearance
    theme.text,
    theme.states,
    // Button-specific focus styles (since it's a button element)

    buttonClassName
  );

  const menuClasses = clsx(
    "transition-all duration-200 overflow-hidden flex flex-col",
    {
      block: isOpen,
      hidden: !isOpen,
    },
    // Mobile styles
    "w-full py-1  ",
    // Desktop styles
    "md:fixed w-full md:py-6  md:px-6 lg:px-8 md:top-16   md:left-0 md:right-0 ",
    "md:shadow-md md:border-y-[0.5px] border-gray-200 dark:border-gray-800",
    theme.menu,
    className
  );

  return (
    <div
      className={containerClasses}
      ref={menuRef}
      {...(!isMobile && {
        // Only add hover handlers if not mobile
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
      })}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
    >
      <button
        // onClick={() => setIsOpen(!isOpen)}
        onClick={handleMenuOpen}
        className={buttonClasses}
        aria-expanded={isOpen}
        aria-controls="megamenu-content"
      >
        <span>{label}</span>
        <svg
          className={clsx(
            "md:hidden w-4 h-4 transition-transform duration-200",
            {
              "rotate-180": isOpen,
              "rotate-0": !isOpen,
            }
          )}
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        id="megamenu-content"
        className={menuClasses}
        role="region"
        aria-label={`${label} megamenu`}
      >
        {children}
      </div>
    </div>
  );
};

export default Megamenu;

// "use client";
// import { FC, useState, ReactNode } from "react";
// import clsx from "clsx";

// export interface MegamenuProps {
//   label: string;
//   children: ReactNode;
//   className?: string;
// }

// const Megamenu: FC<MegamenuProps> = ({ label, children, className = "" }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative">
//       <button
//         onClick={() => setIsOpen((prev) => !prev)}
//         className="px-4 py-2 text-gray-900 dark:text-white transition hover:text-blue-600"
//       >
//         {label}
//       </button>
//       <div
//         className={clsx(
//           "absolute left-0 mt-2 w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg rounded-md p-4 grid grid-cols-2 gap-4",
//           "md:block hidden",
//           { hidden: !isOpen }
//         )}
//       >
//         {children}
//       </div>
//       <div className={clsx("md:hidden mt-2 space-y-2", { hidden: !isOpen })}>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Megamenu;
