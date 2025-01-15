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
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none "
          >
            <svg
              className="w-6 h-6 fill-current self-center"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                // <path
                //   fillRule="evenodd"
                //   clipRule="evenodd"
                //   d="M4 6h16v1H4V6zm16 4H4v1h16v-1zm-16 5h16v1H4v-1z"
                // />
                <path
                  id="close"
                  stroke="#000000"
                  strokeWidth="1"
                  strokeOpacity="1"
                  // style={{
                  //   strokeWidth: 1.03434375,
                  //   strokeDasharray: "none",
                  //   stroke: "#000000",
                  //   strokeOpacity: 1,
                  // }}
                  d="M 20.944704,20.488429 3.0552964,3.5115714 m 2e-7,16.9768576 L 20.944704,3.5115714"
                />
              ) : (
                // <path
                //   fillRule="evenodd"
                //   clipRule="evenodd"
                //   d="M3 18v-2h18v2H3zm0-7h18v2H3v-2zm0-7h18v2H3V4z"
                // />

                <path
                  id="bar"
                  d="M 0.91430506,16.319365 H 23.085695 M 0.91430506,7.6806353 H 23.085695"
                  stroke="#000000"
                  strokeOpacity="1"
                  fill="none"
                  stroke-width="1.5"
                  // stroke-linecap="round"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div>
        {isOpen && (
          <ul className="md:hidden overflow-hidden h-screen text-gray-600      space-y-6 py-4">
            <li>
              <a href="#" className="block py-2 ">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="block py-2">
                About
              </a>
            </li>
            <li>
              <a href="#" className="block py-2">
                Contact
              </a>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
