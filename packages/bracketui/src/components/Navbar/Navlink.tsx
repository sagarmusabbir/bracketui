// import { FC } from "react";

// export interface NavLinkProps {
//   href?: string;
//   children?: React.ReactNode;
// }

// const Navlink: FC<NavLinkProps> = ({ href, children }) => {
//   return (
//     <a
//       href={href}
//       className="text-gray-700  hover:text-gray-950 md:px-3 py-2 transition-colors block md:flex text-base md:text-sm "
//     >
//       {children}
//     </a>
//   );
// };

// export default Navlink;

// import { FC } from "react";

// export interface NavLinkProps {
//   href?: string;
//   children?: React.ReactNode;
//   className?: string;
//   isDropdownItem?: boolean;
// }

// const Navlink: FC<NavLinkProps> = ({
//   href = "#",
//   children,
//   className,
//   isDropdownItem = false,
// }) => {
//   const baseStyles =
//     "transition-opacity ease-in-out duration-200  block py-2.5 hover:opacity-100 text-gray-950 dark:text-white ";
//   const dropdownStyles = isDropdownItem ? "opacity-60   " : "opacity-80   ";

//   return (
//     <a
//       href={href}
//       className={`${baseStyles} ${dropdownStyles} ${className || ""}`}
//     >
//       {children}
//     </a>
//   );
// };

// export default Navlink;

import { FC } from "react";

export interface NavlinkProps {
  href?: string;
  children?: React.ReactNode;
  isDropdownItem?: boolean;
}

const Navlink: FC<NavlinkProps> = ({
  href = "#",
  children,
  isDropdownItem,
}) => {
  return (
    <a
      href={href}
      className={`block px-4 py-2 transition-opacity ease-in-out duration-200 
        ${isDropdownItem ? "opacity-60 hover:opacity-80" : "opacity-80 hover:opacity-100"}
        text-gray-950 dark:text-white text-base md:text-sm`}
    >
      {children}
    </a>
  );
};

export default Navlink;
