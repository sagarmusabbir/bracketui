"use client";

import { FC, useState } from "react";
import Navlink from "./Navlink";
import Navbrand, { NavbrandProps } from "./Navbrand";
import { NavLinkProps } from "react-router";

export interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: FC<NavbarProps> = (children, ...rest) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div {...rest}>
      <nav className="bg-white text-gray-950 fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-80">
        <div className="border-b border-gray-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Your existing header content */}

            <div className="flex justify-between h-16 items-center">
              <Navbrand>My Brand</Navbrand>

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
        className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="pt-16">
          {/* Add padding-top to account for navbar height */}
          <div className="px-4 pt-4 pb-3 space-y-1 ">
            <Navlink href="#">Home</Navlink>
            <Navlink href="#">About</Navlink>
            <Navlink href="#">Services</Navlink>
            <Navlink href="#">Contact</Navlink>

            {/* <Navlink href="#">Docs</Navlink>
            <Navlink href="#">Compoenents</Navlink> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
