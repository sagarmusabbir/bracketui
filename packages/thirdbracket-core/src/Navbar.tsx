import { FC, useState } from "react";

export interface NavbarProps {
  brand: { name: string; logo?: string };

  children?: React.ReactNode;
}

const Navbar: FC<NavbarProps> = ({
  brand,

  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-black p-4  shadow-md">
      <div className="mx-auto  flex justify-between items-center ">
        {/* <div className="flex-shrink-0"> */}
        <a href="#" className=" flex items-center gap-0  shrink-0">
          {brand.logo && (
            <img
              src={brand.logo}
              alt="Logo Image"
              className="h-8 object-cover   p-2"
            />
          )}

          <span className="text-white text-xl font-semibold">{brand.name}</span>
        </a>
        {/* </div> */}

        {/* Hamburger Menu for mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none md:hidden"
        >
          {/* Hamburger Icon and Close Icon */}
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <div
          className={`w-full h-full    md:flex md:items-center md:w-auto  
                    md:space-x-4 absolute md:relative top-16 left-0 md:top-0 
                    md:left-0 p-4 md:p-0 bg-gray-900 md:bg-transparent 
                    transition-all duration-500 ease-in-out transform ${
                      isOpen ? "translate-x-0" : "translate-x-full"
                    } md:translate-x-0`}
        >
          <a
            href="#"
            className="block py-2 px-4 text-white hover:text-gray-200
                                   md:inline-block"
          >
            Home
          </a>
          <a
            href="#about"
            className="block py-2 px-4 text-white hover:text-gray-200
                                   md:inline-block"
          >
            About
          </a>
          <a
            href="#contact"
            className="block py-2 px-4 text-white hover:text-gray-200 
                                   md:inline-block"
          >
            Contact
          </a>
          {children}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
