"use client";

import { FC, useState } from "react";
import Navlink from "./Navlink";

export interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: FC<NavbarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white text-gray-950 fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-80">
        <div className="border-b border-gray-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Your existing header content */}

            <div className="flex justify-between h-16 items-center">
              {children}

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-3">
                <Navlink href="#">Home</Navlink>
                <Navlink href="#">About</Navlink>
                <Navlink href="#">Services</Navlink>
                <Navlink href="#">Contact</Navlink>
              </div>

              {/* Mobile Menu Button */}

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2"
                aria-label="Toggle Menu"
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
                    className={`transform transition-transform duration-300 ease-in-out origin-center ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    strokeWidth="1"
                  />
                  <path
                    d="M2 16h20"
                    className={`transform transition-transform duration-300 ease-in-out origin-center ${
                      isOpen ? "-rotate-45" : ""
                    }`}
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Overlay + Mobile Menu */}

      <div
        className={`md:hidden fixed inset-0 z-40 bg-white transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)]  [background-size:16px_16px]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_10%_200px,#ffffff,transparent)]">
            <div className="pt-16 ">
              <div className="px-4 pt-4 pb-3 space-y-1 ">
                <Navlink href="#">Home</Navlink>
                <Navlink href="#">About</Navlink>
                <Navlink href="#">Services</Navlink>
                <Navlink href="#">Contact</Navlink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
