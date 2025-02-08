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
    text: "text-gray-900 dark:text-gray-100 opacity-80",
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

        // Size and spacing.
        {
          // Dropdown item styling
          "text-sm md:text-xs font-normal py-1.5 md:py-1.5": isDropdownItem,

          "text-base md:text-sm font-normal py-2": !isDropdownItem,
        },

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
