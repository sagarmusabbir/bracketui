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
    text: "text-gray-800 dark:text-gray-200 text-base md:text-sm",
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

  const variantStyles = isDropdownItem
    ? "opacity-65 dark:opacity-50"
    : "opacity-75 dark:opacity-60 ";

  const buttonClasses = clsx(
    // Base styles
    "transition-all motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out flex items-center gap-3 ",
    // Responsive layout
    "w-full md:w-auto",
    " ",
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

        <svg
          className={clsx(
            "md:hidden transition-transform duration-200 w-4 h-4 fill-none stroke-current stroke-2 -rotate-90"
          )}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Overlay Menu */}
      <div
        id="megamenu-content"
        className={menuClasses}
        role="region"
        aria-label={`${label} megamenu`}
      >
        <div
          className="
    md:hidden flex items-center sticky top-16 z-20 
    px-4 py-4  text-sm  font-medium
     bg-gradient-to-r from-slate-500/10 to-gray-500/10 
    backdrop-filter backdrop-blur-md
    text-gray-700 dark:text-gray-300 
    transition-opacity duration-200 ease-in-out text-nowrap
    motion-reduce:transition-none motion-reduce:hover:transform-none 
    hover:opacity-90 max-w-full h-14
    
  "
        >
          <button
            onClick={handleBack}
            className="
      group
      flex items-center gap-2  
      
    "
          >
            <svg
              className="h-5 w-5 fill-none stroke-current stroke-2 " // Added opacity to match logo style
              viewBox="0 0 24 24"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            <span className="transition-opacity duration-300 group-hover:opacity-90">
              Back
            </span>
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
