// "use client";

// import { FC, useState } from "react";
// import Navlink from "./Navlink";
// import Navbrand from "./Navbrand";
// import { ThemeToggle } from "../ThemeToggle";

// export interface NavbarProps {
//   children?: React.ReactNode;
// }

// const Navbar: FC<NavbarProps> = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const [openMobileCategory, setOpenMobileCategory] = useState<string | null>(
//     null
//   );
//   const toggleMobileCategory = (category: string) => {
//     setOpenMobileCategory(openMobileCategory === category ? null : category);
//   };

//   return (
//     <>
//       <nav className="bg-white dark:bg-gray-950 text-gray-950 dark:text-white fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-80">
//         <div className="border-b border-gray-200/50 dark:border-gray-800/50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             {/* Your existing header content */}

//             <div className="flex justify-between h-16 items-center">
//               <Navbrand logo="/path.svg">UI</Navbrand>

//               {/* Desktop Navigation */}
//               <div className="hidden md:flex items-center space-x-3">
//                 <Navlink href="#">Home</Navlink>
//                 <Navlink href="#">About</Navlink>
//                 <Navlink href="#">Services</Navlink>
//                 <Navlink href="#">Contact</Navlink>
//               </div>

//               {/* Mobile Menu Button */}

//               <div className="flex items-center gap-4">
//                 <ThemeToggle />

//                 <button
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="md:hidden p-2"
//                   aria-label="Toggle Menu"
//                 >
//                   <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     strokeLinecap="square"
//                     strokeLinejoin="inherit"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       d="M2 8h20"
//                       className={`transform transition-transform duration-300 ease-in-out origin-center ${
//                         isOpen ? "rotate-45" : ""
//                       }`}
//                       strokeWidth="1"
//                     />
//                     <path
//                       d="M2 16h20"
//                       className={`transform transition-transform duration-300 ease-in-out origin-center ${
//                         isOpen ? "-rotate-45" : ""
//                       }`}
//                       strokeWidth="2"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Overlay + Mobile Menu */}

//       <div
//         className={`md:hidden fixed inset-0 z-40 bg-white dark:bg-gray-950 transition-transform duration-300 ease-in-out ${
//           isOpen ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]">
//           <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_10%_200px,#ffffff,transparent)] dark:bg-[radial-gradient(circle_500px_at_10%_200px,#000000,transparent)]">
//             <div className="pt-16 ">
//               <div className="px-4 pt-4 pb-3 space-y-1 ">
//                 <Navlink href="#">Home</Navlink>
//                 <Navlink href="#">About</Navlink>
//                 <Navlink href="#">Services</Navlink>
//                 <Navlink href="#">Contact</Navlink>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;

// "use client";

// import { FC, useState } from "react";
// import Navlink from "./Navlink";
// import Navbrand from "./Navbrand";
// import Dropdown from "./Dropdown";
// import { ThemeToggle } from "../ThemeToggle";

// export interface NavbarProps {
//   children?: React.ReactNode;
// }

// const Navbar: FC<NavbarProps> = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       {/* Main Navbar */}
//       <nav className="bg-white dark:bg-gray-950 text-gray-950 dark:text-white fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-80">
//         <div className="border-b border-gray-200/50 dark:border-gray-800/50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between h-16 items-center">
//               {/* Brand Logo */}
//               <Navbrand logo="/path.svg">UI</Navbrand>

//               {/* Desktop Navigation */}
//               <div className="hidden md:flex items-center space-x-3">
//                 <Navlink href="#">Home</Navlink>
//                 <Navlink href="#">About</Navlink>

//                 {/* Dropdown Menu for Desktop */}
//                 <Dropdown label="Services">
//                   <Navlink href="#" isDropdownItem>
//                     Web Development
//                   </Navlink>
//                   <Navlink href="#" isDropdownItem>
//                     UI/UX Design
//                   </Navlink>
//                   <Navlink href="#" isDropdownItem>
//                     Consulting
//                   </Navlink>
//                 </Dropdown>

//                 <Navlink href="#">Contact</Navlink>
//               </div>

//               {/* Mobile Menu Button */}
//               <div className="flex items-center gap-4">
//                 <ThemeToggle />
//                 <button
//                   onClick={() => setIsOpen(!isOpen)}
//                   className="md:hidden p-2"
//                   aria-label="Toggle Menu"
//                 >
//                   <svg
//                     className="w-6 h-6"
//                     fill="none"
//                     strokeLinecap="square"
//                     strokeLinejoin="inherit"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       d="M2 8h20"
//                       className={`transform transition-transform duration-300 ease-in-out origin-center ${
//                         isOpen ? "rotate-45" : ""
//                       }`}
//                       strokeWidth="1"
//                     />
//                     <path
//                       d="M2 16h20"
//                       className={`transform transition-transform duration-300 ease-in-out origin-center ${
//                         isOpen ? "-rotate-45" : ""
//                       }`}
//                       strokeWidth="2"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Overlay for Mobile Menu (Closes Menu on Click) */}
//       {isOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-40 z-30 transition-opacity duration-300"
//           onClick={() => setIsOpen(false)}
//         ></div>
//       )}

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden fixed inset-0 z-40 bg-white dark:bg-gray-950 transition-transform duration-300 ease-in-out ${
//           isOpen ? "translate-y-0" : "-translate-y-full"
//         }`}
//       >
//         <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#1f2937_1px,transparent_1px)] [background-size:16px_16px]">
//           <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_10%_200px,#ffffff,transparent)] dark:bg-[radial-gradient(circle_500px_at_10%_200px,#000000,transparent)]">
//             <div className="pt-16">
//               <div className="px-4 pt-4 pb-3 space-y-1">
//                 <Navlink href="#">Home</Navlink>
//                 <Navlink href="#">About</Navlink>

//                 {/* Dropdown Menu for Mobile */}
//                 <Dropdown label="Services" isMobile>
//                   <Navlink href="#" isDropdownItem>
//                     Web Development
//                   </Navlink>
//                   <Navlink href="#" isDropdownItem>
//                     UI/UX Design
//                   </Navlink>
//                   <Navlink href="#" isDropdownItem>
//                     Consulting
//                   </Navlink>
//                 </Dropdown>

//                 <Navlink href="#">Contact</Navlink>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;


"use client";

import { FC, useState } from "react";
import Navlink from "./Navlink";
import Navbrand from "./Navbrand";
import Dropdown from "./Dropdown";
import { ThemeToggle } from "../ThemeToggle";

export interface NavbarProps {
  children?: React.ReactNode;
}

const Navbar: FC<NavbarProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white dark:bg-black text-black dark:text-white fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-80 ">
        <div className="border-b border-gray-100/80 dark:border-gray-950/80">
          <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center ">
              {/* <Navbrand logo="/path.svg">UI</Navbrand> */}
              <div className="flex items-center justify-between space-x-8">
                {children}

                {/* Desktop Navigation */}
                <div
                  className="hidden md:flex items-center
                "
                >
                  <Navlink href="#">Home</Navlink>
                  <Navlink href="#">About</Navlink>

                  {/* Services Dropdown */}
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

              {/* Mobile Menu Button */}
              <div className="flex items-center justify-between space-x-4">
                <div className="">
                  <ThemeToggle />
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
        </div>
      </nav>

      {/* Overlay + Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white dark:bg-black transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#111827_1px,transparent_1px)] [background-size:16px_16px]">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_10%_200px,#ffffff,transparent)] dark:bg-[radial-gradient(circle_500px_at_10%_200px,#000000,transparent)]">
            <div className="py-20 px-4  space-y-2">
              <Navlink href="#">Home</Navlink>
              <Navlink href="#">About</Navlink>

              {/* Mobile Services Dropdown */}
              <Dropdown label="Services" className="space-y-2 py-2">
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
