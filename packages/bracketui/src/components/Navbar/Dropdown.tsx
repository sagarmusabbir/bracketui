// "use client";
// import { FC, useState } from "react";
// import Navlink from "./Navlink";

// export interface DropdownProps {
//   label: string;
//   children: React.ReactNode;
//   isMobile?: boolean; // New prop to check if it's used in mobile
// }

// const Dropdown: FC<DropdownProps> = ({ label, children, isMobile = false }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className={`relative ${isMobile ? "w-full" : ""}`}>
//       {/* Dropdown Toggle Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="py-2.5 px-4 text-gray-950 dark:text-white hover:opacity-80 transition-opacity w-full text-left"
//       >
//         {label}
//       </button>

//       {/* Dropdown Menu */}
//       <div
//         className={`${
//           isMobile
//             ? "block w-full bg-gray-100 dark:bg-gray-900 rounded-md"
//             : "absolute left-0 mt-2 w-48 bg-white dark:bg-gray-950 shadow-lg rounded-md overflow-hidden"
//         } transition-all duration-200 z-45 ${
//           isOpen
//             ? "opacity-100 visible scale-100"
//             : "opacity-0 invisible scale-95"
//         }`}
//       >
//         <div className="py-2">{children}</div>
//       </div>
//     </div>
//   );
// };

// export default Dropdown;

// "use-client";
// import { FC, useState, useRef, useEffect } from "react";

// export interface DropdownProps {
//   label: string;
//   children: React.ReactNode;
//   isMobile?: boolean;
// }

// const Dropdown: FC<DropdownProps> = ({ label, children, isMobile = false }) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   // Close dropdown when clicking outside (for desktop)
//   useEffect(() => {
//     function handleClickOutside(event: MouseEvent) {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setIsOpen(false);
//       }
//     }

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   return (
//     <div className="relative" ref={dropdownRef}>
//       {/* Dropdown Toggle Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
//       >
//         {label}
//         <span
//           className={`transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`}
//         >
//           ▼
//         </span>
//       </button>

//       {/* Dropdown Menu */}
//       <div
//         className={`absolute left-0 top-full z-50 w-48 bg-white dark:bg-gray-900 p-2 rounded-md shadow-md transition-opacity duration-200 ${
//           isMobile
//             ? isOpen
//               ? "max-h-screen overflow-visible"
//               : "max-h-0 overflow-hidden"
//             : isOpen
//               ? "block opacity-100"
//               : "hidden opacity-0"
//         }`}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Dropdown;

// "use client";

// import { FC, useState, useEffect } from "react";

// export interface DropdownProps {
//   label: string;
//   children?: React.ReactNode;
// }

// const Dropdown: FC<DropdownProps> = ({ label, children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   // Close dropdown when clicking outside (Desktop Only)
//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (!(event.target as HTMLElement).closest(".dropdown-container")) {
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
//     <div className="dropdown-container relative w-full md:w-auto">
//       {/* Trigger Button */}
//       <button
//         onClick={() => setIsOpen(!isOpen)}
//         className="flex items-center justify-between w-full py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-800"
//       >
//         {label}
//         <svg
//           className={`w-4 h-4 transform transition-transform ${
//             isOpen ? "rotate-180" : "rotate-0"
//           }`}
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           viewBox="0 0 24 24"
//         >
//           <path d="M19 9l-7 7-7-7" />
//         </svg>
//       </button>

//       {/* Dropdown Menu */}
//       <div
//         className={`transition-all duration-200 overflow-hidden ${
//           isOpen ? "block" : "hidden"
//         } md:absolute md:left-0 md:mt-2 md:w-48 md:bg-white md:dark:bg-gray-900 md:shadow-md md:rounded-md md:z-50`}
//       >
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Dropdown;

"use client";

import { FC, useState, useEffect } from "react";

export interface DropdownProps {
  label: string;
  children?: React.ReactNode;
}

const Dropdown: FC<DropdownProps> = ({ label, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Close dropdown when clicking outside (Desktop Only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(".dropdown-container")) {
        setIsOpen(false);
      }
    };

    // Only add event listener on desktop
    if (window.innerWidth >= 768) {
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, []);

  return (
    <div className="dropdown-container relative w-full md:w-auto">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 px-4  text-gray-950 dark:text-white opacity-80 hover:opacity-100"
      >
        {label}
        <svg
          className={`w-4 h-4 md:ml-2  transition-transform  ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`transition-all duration-200 overflow-hidden space-y-1 ${
          isOpen ? "block" : "hidden"
        } md:absolute md:left-0 md:mt-2 md:w-48 md:bg-white md:dark:bg-gray-900 md:shadow-md md:rounded-md md:z-50`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
