"use client";
import Image from "next/image";

import { useState } from "react";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
  <a
    href={href}
    className="text-gray-600 hover:text-gray-950 md:px-3 py-2 transition-colors block md:flex text-base md:text-sm"
  >
    {children}
  </a>
);

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-80">
        <div className="border-b border-gray-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Your existing header content */}

            <div className="flex justify-between h-16 items-center">
              {/* Logo */}
              <a
                href="/"
                className="flex shrink-0 group transition-opacity ease-in-out duration-300 items-center"
              >
                <Image
                  src="./g1.svg"
                  alt=""
                  width={206}
                  height={40}
                  className="w-24 h-full opacity-80 group-hover:opacity-100"
                ></Image>

                <span className="text-md   border-gray-950 bg-gray-950 rounded-sm px-1  ml-1  font-extrabold bg-opacity-85 text-white group-hover:bg-opacity-100">
                  UI
                </span>
              </a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-3">
                <NavLink href="#">Docs</NavLink>
                <NavLink href="#">Compoenents</NavLink>
                <NavLink href="#">Blocks</NavLink>
                <NavLink href="#">Sections</NavLink>
                <NavLink href="#">Page</NavLink>
                <NavLink href="#">Blog</NavLink>
                <NavLink href="#">About</NavLink>
                <NavLink href="#">Contact</NavLink>
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
          {" "}
          {/* Add padding-top to account for navbar height */}
          <div className="px-4 pt-4 pb-3 space-y-1 ">
            <NavLink href="#">Docs</NavLink>
            <NavLink href="#">Compoenents</NavLink>
            <NavLink href="#">Blocks</NavLink>
            <NavLink href="#">Sections</NavLink>
            <NavLink href="#">Page</NavLink>
            <NavLink href="#">Blog</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Contact</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
