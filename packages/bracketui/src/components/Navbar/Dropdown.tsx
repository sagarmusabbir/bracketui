"use client";

import { FC, useState, useEffect } from "react";

export interface DropdownProps {
  label: string;
  children?: React.ReactNode;
  className?: string;
}

const Dropdown: FC<DropdownProps> = ({ label, children, className }) => {
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
    <div className="dropdown-container relative w-full md:w-auto text-base md:text-sm">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 px-4  text-gray-950 dark:text-white opacity-80 hover:opacity-100"
      >
        {label}
        <svg
          className={`w-6 h-6 md:ml-1  transition-transform  ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="currentColor"
          stroke="none"
          // strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M7 10l5 5 5-5" />
        </svg>
      </button>

      {/* Dropdown Menu */}
      <div
        className={`${className} transition-all duration-200 overflow-hidden md:border border-gray-200 dark:border-gray-800  ${
          isOpen ? "block" : "hidden"
        } md:absolute md:left-0 md:mt-2 md:w-48 md:bg-white md:dark:bg-gray-950 md:shadow-md md:rounded-md md:z-50`}
      >
        {children}
      </div>
    </div>
  );
};

export default Dropdown;
