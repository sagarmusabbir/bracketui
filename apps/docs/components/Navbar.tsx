// export default Navbar;
"use client";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav className="bg-white py-2 px-4   backdrop-blur-2xl bg-opacity-80 shadow-sm text-black">
      <div className=" mx-auto flex justify-between items-center ">
        <div className="flex items-center ">
          <a href="#" className=" font-medium text-xl">
            BRACKET<strong>UI</strong>
          </a>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
          >
            <svg
              className="h-6 w-6 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6h16v1H4V6zm16 4H4v1h16v-1zm-16 5h16v1H4v-1z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3 18v-2h18v2H3zm0-7h18v2H3v-2zm0-7h18v2H3V4z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 h-screen text-black   space-y-4 py-2  ">
          <li className="py-2 ">
            <a href="#" className="block  ">
              Home
            </a>
          </li>
          <li className="py-2  ">
            <a href="#" className="block  ">
              About
            </a>
          </li>
          <li className="py-2  ">
            <a href="#">Contact</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
