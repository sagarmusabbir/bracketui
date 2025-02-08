// import clsx from "clsx";
// import { FC, MouseEventHandler } from "react";

// export interface NavlinkProps {
//   href?: string;
//   children?: React.ReactNode;
//   isDropdownItem?: boolean;
//   onClick?: MouseEventHandler<HTMLAnchorElement>;
//   className?: string;
//   theme?: {
//     text?: string;
//     hover?: string;
//   };
// }

// const Navlink: FC<NavlinkProps> = ({
//   href = "#",
//   children,
//   isDropdownItem,
//   onClick,
//   className = "",
//   theme = {
//     text: "text-gray-900 dark:text-gray-100 opacity-80",
//     hover: "hover:opacity-100",
//   },
// }) => {
//   return (
//     <a
//       href={href}
//       onClick={onClick}
//       className={clsx(
//         // Base styles
//         "block transition-opacity ease-in-out duration-200",
//         theme.text,

//         // Size and spacing.
//         {
//           // Dropdown item styling
//           "text-sm md:text-xs font-normal py-1.5 md:py-1.5": isDropdownItem,

//           "text-base md:text-sm font-normal py-2": !isDropdownItem,
//         },

//         // Opacity states
//         isDropdownItem ? "opacity-60 " : "opacity-80 ",
//         theme.hover,

//         // Custom classes
//         className
//       )}
//     >
//       {children}
//     </a>
//   );
// };

// export default Navlink;

// components/Navbar/Navlink.tsx
import clsx from "clsx";
import { FC, ComponentProps } from "react";

// Dynamic imports for Next.js Link
let NextLink: any;
let AppRouterLink: any;
try {
  AppRouterLink = require("next/navigation").Link;
} catch (e) {
  try {
    NextLink = require("next/link");
  } catch (e) {
    NextLink = null;
    AppRouterLink = null;
  }
}

const LinkComponent = AppRouterLink || NextLink;

export interface NavlinkProps extends Omit<ComponentProps<"a">, "ref"> {
  href?: string;
  children?: React.ReactNode;
  isDropdownItem?: boolean;
  className?: string;
  theme?: {
    text?: string;
    states?: string;
  };
  external?: boolean;
}

const Navlink: FC<NavlinkProps> = ({
  href = "#",
  children,
  isDropdownItem,
  className = "",
  external,
  theme = {
    text: "text-gray-900 dark:text-gray-100",
    states: clsx(
      // Base opacity
      "opacity-80",

      // Interactive states in order
      "hover:opacity-100",

      // Background transition
      "transition-all duration-200",
      // Hover state with background

      // Focus states - maintain hover background
      "focus:outline-none"
    ),
  },
  ...rest
}) => {
  // Check if the link is external
  const isExternal =
    external ?? (href.startsWith("http") || href.startsWith("//"));

  const classes = clsx(
    // Base styles
    "block transition-all duration-200 ease-in-out",

    // Text styles based on dropdown state
    {
      "text-sm md:text-xs py-2 md:py-1.5": isDropdownItem,
      "text-base md:text-sm py-2 md:py-1.5 ": !isDropdownItem,
    },

    // Theme styles
    theme.text,
    theme.states,

    // Custom classes
    className
  );

  // Props common to both internal and external links
  const commonProps = {
    className: classes,
    ...rest,
  };

  // External link rendering
  if (isExternal) {
    return (
      <a href={href} rel="noopener noreferrer" target="_blank" {...commonProps}>
        {children}
      </a>
    );
  }

  // Internal link rendering with Next.js Link if available
  if (LinkComponent) {
    return (
      <LinkComponent href={href} {...commonProps}>
        {children}
      </LinkComponent>
    );
  }

  // Fallback for non-Next.js environments
  return (
    <a href={href} {...commonProps}>
      {children}
    </a>
  );
};

export default Navlink;
