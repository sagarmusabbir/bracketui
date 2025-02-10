// import clsx from "clsx";
// import { FC, ComponentProps } from "react";

// // Dynamic imports for Next.js Link
// let NextLink: any;
// let AppRouterLink: any;
// try {
//   AppRouterLink = require("next/navigation").Link;
// } catch (e) {
//   try {
//     NextLink = require("next/link");
//   } catch (e) {
//     NextLink = null;
//     AppRouterLink = null;
//   }
// }

// const LinkComponent = AppRouterLink || NextLink;

// export interface NavlinkProps extends Omit<ComponentProps<"a">, "ref"> {
//   href?: string;
//   children?: React.ReactNode;
//   isDropdownItem?: boolean;
//   className?: string;
//   theme?: {
//     text?: string;
//     states?: string;
//   };
//   external?: boolean;
// }

// const Navlink: FC<NavlinkProps> = ({
//   href = "#",
//   children,
//   isDropdownItem,
//   className = "",
//   external,
//   theme = {
//     text: "text-gray-900 dark:text-gray-100",
//     states: clsx(
//       // Base opacity
//       "opacity-80",

//       // Interactive states in order
//       "hover:opacity-100",

//       // Background transition
//       "transition-all duration-200",
//       // Hover state with background

//       // Focus states - maintain hover background
//       "focus:outline-none"
//     ),
//   },
//   ...rest
// }) => {
//   // Check if the link is external
//   const isExternal =
//     external ?? (href.startsWith("http") || href.startsWith("//"));

//   const classes = clsx(
//     // Base styles
//     "block transition-all duration-200 ease-in-out",

//     // Text styles based on dropdown state
//     {
//       "text-sm md:text-xs py-2 md:py-1.5": isDropdownItem,
//       "text-base md:text-sm py-2 md:py-1.5 ": !isDropdownItem,
//     },

//     // Theme styles
//     theme.text,
//     theme.states,

//     // Custom classes
//     className
//   );

//   // Props common to both internal and external links
//   const commonProps = {
//     className: classes,
//     ...rest,
//   };

//   // External link rendering
//   if (isExternal) {
//     return (
//       <a href={href} rel="noopener noreferrer" target="_blank" {...commonProps}>
//         {children}
//       </a>
//     );
//   }

//   // Internal link rendering with Next.js Link if available
//   if (LinkComponent) {
//     return (
//       <LinkComponent href={href} {...commonProps}>
//         {children}
//       </LinkComponent>
//     );
//   }

//   // Fallback for non-Next.js environments
//   return (
//     <a href={href} {...commonProps}>
//       {children}
//     </a>
//   );
// };

// export default Navlink;

// "use client";
// import { forwardRef, ElementType, ComponentPropsWithRef } from "react";
// import clsx from "clsx";

// export type NavlinkProps<T extends ElementType> = {
//   as?: T;
//   href?: string;
//   className?: string;
//   children?: React.ReactNode;
//   isDropdownItem?: boolean;
//   isExternal?: boolean;
//   theme?: {
//     text?: string;
//     states?: string;
//   };
// } & ComponentPropsWithRef<T>;

// const Navlink = forwardRef(function Navlink<T extends ElementType = "a">(
//   {
//     as,
//     className = "",
//     isExternal,
//     isDropdownItem,
//     theme = {
//       text: "text-gray-900 dark:text-gray-100 ",
//       states: clsx("opacity-80", "hover:opacity-100"),
//     },
//     ...props
//   }: NavlinkProps<T>,
//   ref: React.Ref<any>
// ) {
//   const linkClass = clsx(
//     "py-2 md:py-1 transition duration-300 ease-in-out",
//     {
//       "text-base hover:underline underline-offset-2 decoration-opacity-30 md:text-xs":
//         isDropdownItem,
//       "text-base md:text-sm ": !isDropdownItem,
//     },
//     theme.text,
//     theme.states,
//     className
//   );
//   const Component = as || "a"; // Default to <a> if no "as" prop is provided

//   return (
//     <Component
//       ref={ref}
//       className={linkClass}
//       {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
//       {...props}
//     />
//   );
// });

// export default Navlink;

"use client";
import { forwardRef, ElementType, ComponentPropsWithRef } from "react";
import clsx from "clsx";

export type NavlinkProps<T extends ElementType> = {
  as?: T;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  isDropdownItem?: boolean;
  isExternal?: boolean;
  cto?: boolean;

  theme?: {
    text?: string;
    states?: string;
  };
} & ComponentPropsWithRef<T>;

const Navlink = forwardRef(function Navlink<T extends ElementType = "a">(
  {
    as,
    className = "",
    isExternal,
    isDropdownItem,
    children,

    cto,
    theme = {
      text: "text-gray-950 dark:text-white",
      states: "opacity-80 hover:opacity-100",
    },
    ...props
  }: NavlinkProps<T>,
  ref: React.Ref<any>
) {
  // Base styles that should always be applied

  const baseStyles =
    " transition-all motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out text-base  md:flex block py-2 md:py-1";

  const varientSize = cto ? " lg:text-lg font-semibold " : "md:text-sm";

  // Conditional styles based on isDropdownItem
  const variantStyles = isDropdownItem
    ? " hover:underline  hover:decoration-[0.5px]   "
    : "";

  // Theme styles
  const themeStyles = clsx(theme.text, theme.states);

  // Combine all styles, with className last to allow overrides
  const linkClass = clsx(
    baseStyles,
    variantStyles,
    themeStyles,
    varientSize,

    className // Consumer className takes precedence
  );

  const Component = as || "a";

  return (
    <Component
      ref={ref}
      className={linkClass}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </Component>
  );
});

export default Navlink;
