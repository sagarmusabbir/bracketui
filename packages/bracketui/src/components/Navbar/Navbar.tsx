"use client";

import { FC, useState } from "react";
import Navlink from "./Navlink";
import Navbrand from "./Navbrand";
import Dropdown from "./Dropdown";

export interface NavbarProps {
  children?: React.ReactNode;
  className?: string;
}

const Navbar: FC<NavbarProps> = ({ children, className = "" }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav
        className={`bg-white dark:bg-gray-950 text-gray-950 dark:text-white fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-80 ${className}`}
      >
        <div className="border-b border-gray-200 dark:border-gray-800">
          <div className="px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center ">
              <Navbrand logo="/path.svg">UI</Navbrand>

              <div className="flex items-center justify-between space-x-8">
                <div className="hidden md:flex items-center">
                  <Navlink href="#">Home</Navlink>
                  <Navlink href="#">About</Navlink>

                  <Dropdown label="Services">
                    <Navlink href="#" isDropdownItem>
                      Web Development
                    </Navlink>
                    <Navlink href="#" isDropdownItem>
                      UI/UX Design
                    </Navlink>
                    <Navlink href="#" isDropdownItem>
                      SEO Optimization
                    </Navlink>
                  </Dropdown>

                  <Navlink href="#">Contact</Navlink>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 "
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
        className={`md:hidden fixed inset-0 z-40 bg-white dark:bg-gray-950 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_10%_200px,#ffffff,transparent)] dark:bg-[radial-gradient(circle_500px_at_10%_200px,#030712,transparent)]">
            <div className="py-20 px-2 flex flex-col space-y-1">
              <Navlink href="#">Home</Navlink>
              <Navlink href="#">About</Navlink>

              <Dropdown label="Services" className="space-y-1 ">
                <Navlink href="#" isDropdownItem>
                  Web Development
                </Navlink>
                <Navlink href="#" isDropdownItem>
                  UI/UX Design
                </Navlink>
                <Navlink href="#" isDropdownItem>
                  SEO Optimization
                </Navlink>
              </Dropdown>

              <Navlink href="#">Products</Navlink>

              <Navlink href="#">Features</Navlink>
              <Navlink href="#">Contact</Navlink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
