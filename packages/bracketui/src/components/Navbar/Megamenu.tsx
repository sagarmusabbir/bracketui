// "use client";
// import { FC, useState, useEffect } from "react";

// export interface MegamenuProps {
//   label: string;
//   children?: React.ReactNode;
//   className?: string;
// }

// const Megamenu: FC<MegamenuProps> = ({ label, children, className }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Close megamenu when clicking outside (Desktop Only)
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (!(event.target as HTMLElement).closest(".megamenu-container")) {
//         setIsOpen(false);
//       }
//     };

//     // Only add event listener on desktop
//     if (window.innerWidth >= 768) {
//       document.addEventListener("click", handleClickOutside);
//       return () => document.removeEventListener("click", handleClickOutside);
//     }
//   }, []);

//   return (
//     <div className="megamenu-container relative w-full md:w-auto text-base md:text-sm">
//       {/* Trigger Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center justify-between w-full py-2  text-gray-950 dark:text-white opacity-80 hover:opacity-100"
//       >
//         {label}
//         <svg
//           className={`w-6  h-6 md:ml-1 transition-transform ${
//             isOpen ? "rotate-180" : "rotate-0"
//           }`}
//           fill="currentColor"
//           stroke="none"
//           viewBox="0 0 24 24"
//         >
//           <path d="M7 10l5 5 5-5" />
//         </svg>
//       </button>

//       {/* Megamenu Content */}
//       <div
//         className={`${className} transition-all duration-200 overflow-hidden ${
//           isOpen ? "block" : "hidden"
//         } md:fixed md:p-6 md:left-0 md:right-0 md:mt-2 md:bg-white md:dark:bg-gray-950 md:shadow-md md:border-y border-gray-200 dark:border-gray-800`}
//       >
//         {/* <div className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 shadow-md">
//           <div className="container mx-auto py-6 px-4"> */}

//         {children}

//         {/* </div>
//         </div> */}
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
    button?: string;
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
    button: "text-gray-950 dark:text-white opacity-80 hover:opacity-100 ",
    menu: " p-2 rounded-sm    bg-clip-padding backdrop-filter backdrop-blur-xl ",
  },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < mobileBreakpoint);
    };

    // Set initial value
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileBreakpoint]);

  // Close megamenu when clicking outside (Desktop Only)
  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (!(event.target as HTMLElement).closest(".megamenu-container")) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (!isMobile) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [isMobile, handleClickOutside]);

  const containerClasses = clsx(
    "megamenu-container relative",
    "w-full md:w-auto ",
    ""
  );

  const buttonClasses = clsx(
    "flex items-center justify-between w-full py-2",
    theme.button,
    buttonClassName
  );

  const iconClasses = clsx(
    "w-6 h-6 md:ml-1",
    "transition-transform duration-200",
    {
      "rotate-180": isOpen,
      "rotate-0": !isOpen,
    }
  );

  const menuClasses = clsx(
    "transition-all duration-200 overflow-hidden",
    {
      block: isOpen,
      hidden: !isOpen,
    },
    // Mobile styles
    "w-full ",
    // Desktop styles
    "md:fixed md:p-6 md:left-0 md:right-0 md:mt-2",
    "md:shadow-md md:border-y",
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
        {label}
        <svg
          className={iconClasses}
          fill="currentColor"
          stroke="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path d="M7 10l5 5 5-5" />
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
