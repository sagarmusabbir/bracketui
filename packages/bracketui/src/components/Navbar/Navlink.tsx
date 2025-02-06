// import clsx from "clsx";
// import { FC, MouseEventHandler } from "react";

// export interface NavlinkProps {
//   href?: string;
//   children?: React.ReactNode;
//   isDropdownItem?: boolean;
//   className?: string;
// }

// const Navlink: FC<NavlinkProps> = ({
//   href = "#",
//   children,
//   isDropdownItem,
//   className = "",
// }) => {
//   return (
//     <a
//       href={href}
//       className={clsx(
//         "block transition-opacity ease-in-out duration-200",
//         // Base text styles
//         "text-gray-950 dark:text-white",
//         // Text size and padding
//         isDropdownItem
//           ? "text-base py-3 px-4" // More padding for dropdown items
//           : "text-base md:text-sm py-2",
//         // Opacity states
//         isDropdownItem
//           ? "opacity-60 hover:opacity-100 border-b border-gray-100 dark:border-gray-800 last:border-0"
//           : "opacity-80 hover:opacity-100",
//         // Additional hover effect for dropdown items
//         isDropdownItem && "hover:bg-gray-100/50 dark:hover:bg-gray-800/50",
//         className
//       )}
//     >
//       {children}
//     </a>
//   );
// };

// export default Navlink;

import clsx from "clsx";
import { FC, MouseEventHandler } from "react";

export interface NavlinkProps {
  href?: string;
  children?: React.ReactNode;
  isDropdownItem?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  className?: string;
  theme?: {
    text?: string;
    hover?: string;
  };
}

const Navlink: FC<NavlinkProps> = ({
  href = "#",
  children,
  isDropdownItem,
  onClick,
  className = "",
  theme = {
    text: "text-gray-950 dark:text-white",
    hover: "hover:opacity-100",
  },
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      className={clsx(
        // Base styles
        "block transition-opacity ease-in-out duration-200",
        theme.text,

        // Size and spacing
        "text-base md:text-sm font-normal  py-2 ",

        // Opacity states
        isDropdownItem ? "opacity-60 " : "opacity-80 ",
        theme.hover,

        // Custom classes
        className
      )}
    >
      {children}
    </a>
  );
};

export default Navlink;
