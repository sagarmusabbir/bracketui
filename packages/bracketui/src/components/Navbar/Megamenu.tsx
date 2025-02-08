// "use client";
// import { FC, useState, useEffect, useCallback } from "react";
// import clsx from "clsx";

// export interface MegamenuProps {
//   label: string;
//   children?: React.ReactNode;
//   className?: string;
//   buttonClassName?: string;
//   mobileBreakpoint?: number;
//   theme?: {
//     button?: string;
//     menu?: string;
//   };
// }

// const Megamenu: FC<MegamenuProps> = ({
//   label,
//   children,
//   className,
//   buttonClassName,
//   mobileBreakpoint = 768,
//   theme = {
//     button: "text-gray-900 dark:text-gray-100 opacity-80 hover:opacity-100 ",
//     menu: "py-2  bg-clip-padding backdrop-filter backdrop-blur-2xl bg-white dark:bg-gray-950 ",
//   },
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < mobileBreakpoint);
//     };

//     // Set initial value
//     handleResize();

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [mobileBreakpoint]);

//   // Close megamenu when clicking outside (Desktop Only)
//   const handleClickOutside = useCallback((event: MouseEvent) => {
//     if (!(event.target as HTMLElement).closest(".megamenu-container")) {
//       setIsOpen(false);
//     }
//   }, []);

//   useEffect(() => {
//     if (!isMobile) {
//       document.addEventListener("click", handleClickOutside);
//       return () => document.removeEventListener("click", handleClickOutside);
//     }
//   }, [isMobile, handleClickOutside]);

//   const containerClasses = clsx(
//     "megamenu-container relative",
//     "w-full md:w-auto ",
//     ""
//   );

//   const buttonClasses = clsx(
//     "flex items-center  justify-between w-full py-2 text-base md:text-sm",
//     theme.button,
//     buttonClassName
//   );

//   const iconClasses = clsx("w-6 h-6 p-0", "transition-transform duration-200", {
//     "rotate-180": isOpen,
//     "rotate-0": !isOpen,
//   });

//   const menuClasses = clsx(
//     "transition-all duration-200 overflow-hidden",
//     {
//       block: isOpen,
//       hidden: !isOpen,
//     },
//     // Mobile styles
//     "w-full ",
//     // Desktop styles
//     "md:fixed md:p-6 md:left-0 md:right-0 md:mt-2",
//     "md:shadow-md md:border-y border-gray-200 dark:border-gray-800",
//     theme.menu,
//     className
//   );

//   return (
//     <div className={containerClasses}>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={buttonClasses}
//         aria-expanded={isOpen}
//         aria-controls="megamenu-content"
//       >
//         {label}
//         <svg
//           className={iconClasses}
//           fill="currentColor"
//           stroke="none"
//           viewBox="0 0 24 24"
//           aria-hidden="true"
//         >
//           <path d="M7 10l5 5 5-5" />
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

// "use client";
// import { FC, useState, useEffect, useCallback } from "react";
// import clsx from "clsx";

// export interface MegamenuProps {
//   label: string;
//   children?: React.ReactNode;
//   className?: string;
//   buttonClassName?: string;
//   mobileBreakpoint?: number;
//   theme?: {
//     button?: string;
//     menu?: string;
//   };
// }

// const Megamenu: FC<MegamenuProps> = ({
//   label,
//   children,
//   className,
//   buttonClassName,
//   mobileBreakpoint = 768,
//   theme = {
//     button: "text-gray-900 dark:text-gray-100 opacity-80 hover:opacity-100",
//     menu: "py-2 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-white dark:bg-gray-950",
//   },
// }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   // Handle window resize
//   useEffect(() => {
//     const handleResize = () => {
//       setIsMobile(window.innerWidth < mobileBreakpoint);
//     };
//     handleResize();
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [mobileBreakpoint]);

//   // Close megamenu when clicking outside (Desktop Only)
//   const handleClickOutside = useCallback((event: MouseEvent) => {
//     if (!(event.target as HTMLElement).closest(".megamenu-container")) {
//       setIsOpen(false);
//     }
//   }, []);

//   useEffect(() => {
//     if (!isMobile) {
//       document.addEventListener("click", handleClickOutside);
//       return () => document.removeEventListener("click", handleClickOutside);
//     }
//   }, [isMobile, handleClickOutside]);

//   const containerClasses = clsx(
//     "megamenu-container relative",
//     "w-full md:w-auto"
//   );

//   const buttonClasses = clsx(
//     // Base styles
//     "flex items-center w-full transition-all duration-200",
//     // Responsive layout
//     "justify-between md:justify-start",
//     // Spacing
//     "py-2 md:py-0",
//     "gap-1.5",
//     // Text size
//     "text-base md:text-sm",
//     theme.button,
//     buttonClassName
//   );

//   const iconClasses = clsx(
//     // Icon size and transition
//     "w-4 h-4 transition-transform duration-200",
//     {
//       "rotate-180": isOpen,
//       "rotate-0": !isOpen,
//     }
//   );

//   const menuClasses = clsx(
//     "transition-all duration-200 overflow-hidden",
//     {
//       block: isOpen,
//       hidden: !isOpen,
//     },
//     // Mobile styles
//     "w-full",
//     // Desktop styles
//     "md:fixed md:p-6 md:left-0 md:right-0 md:mt-2",
//     "md:shadow-md md:border-y border-gray-200 dark:border-gray-800",
//     theme.menu,
//     className
//   );

//   return (
//     <div className={containerClasses}>
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className={buttonClasses}
//         aria-expanded={isOpen}
//         aria-controls="megamenu-content"
//       >
//         <span>{label}</span>
//         <svg
//           className={iconClasses}
//           fill="currentColor"
//           stroke="none"
//           // strokeWidth={2}
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
import { FC, useState, useEffect, useCallback } from "react";
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
    text: "text-gray-900 dark:text-gray-100",
    states: "opacity-80 hover:opacity-100",
    menu: "bg-clip-padding backdrop-filter backdrop-blur-2xl bg-white dark:bg-gray-950",
  },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    "py-2 md:py-0",
    "gap-1.5",
    // Text size
    "text-base md:text-sm",
    // Theme styles - match Navlink's default appearance
    theme.text,
    theme.states,
    // Button-specific focus styles (since it's a button element)
    "focus:outline-none",
    buttonClassName
  );

  const menuClasses = clsx(
    "transition-all duration-200 overflow-hidden",
    {
      block: isOpen,
      hidden: !isOpen,
    },
    // Mobile styles
    "w-full py-2",
    // Desktop styles
    "md:fixed md:p-6 md:left-0 md:right-0 md:mt-6",
    "md:shadow-md md:border-b-[0.5px] border-gray-200 dark:border-gray-800",
    theme.menu,
    className
  );

  return (
    <div className={containerClasses}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={buttonClasses}
        aria-expanded={isOpen}
        aria-controls="megamenu-content"
      >
        <span>{label}</span>
        <svg
          className={clsx("w-4 h-4 transition-transform duration-200", {
            "rotate-180": isOpen,
            "rotate-0": !isOpen,
          })}
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
