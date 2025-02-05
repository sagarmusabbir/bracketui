import clsx from "clsx";
import { FC, MouseEventHandler } from "react";

export interface NavlinkProps {
  href?: string;
  children?: React.ReactNode;
  isDropdownItem?: boolean;

  className?: string;
}

const Navlink: FC<NavlinkProps> = ({
  href = "#",
  children,
  isDropdownItem,

  className = "",
}) => {
  return (
    <a
      href={href}
      className={clsx(
        "block px-4 py-2 transition-opacity ease-in-out duration-200",
        "text-gray-950 dark:text-white text-base md:text-sm",
        isDropdownItem
          ? "opacity-60 hover:opacity-100"
          : "opacity-80 hover:opacity-100",
        className
      )}
    >
      {children}
    </a>
  );
};

export default Navlink;
