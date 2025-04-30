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
//   cto?: boolean;

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
//     children,

//     cto,
//     theme = {
//       text: "text-gray-800 dark:text-gray-100",
//       states:
//         "focus-within:opacity-100 active:opacity-100 md:hover:opacity-100",
//     },
//     ...props
//   }: NavlinkProps<T>,
//   ref: React.Ref<any>
// ) {
//   // Base styles that should always be applied

//   const baseStyles =
//     "transition-all motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out md:flex   md:items-center block  leading-none py-2 md:py-1";

//   const varientSize = cto
//     ? "text-xl font-bold  py-3 "
//     : "text-base  md:text-sm font-normal";

//   // Conditional styles based on isDropdownItem
//   const variantStyles = isDropdownItem ? "opacity-60   " : "opacity-70  ";

//   // Theme styles
//   const themeStyles = clsx(theme.text, theme.states);

//   // Combine all styles, with className last to allow overrides
//   const linkClass = clsx(
//     baseStyles,
//     variantStyles,
//     themeStyles,
//     varientSize,

//     className // Consumer className takes precedence
//   );

//   const Component = as || "a";

//   return (
//     <Component
//       ref={ref}
//       className={linkClass}
//       {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
//       {...props}
//     >
//       {children}
//     </Component>
//   );
// });

// export default Navlink;

"use client";
import { forwardRef, ElementType, ComponentPropsWithRef } from "react";
import clsx from "clsx";
import { useNavbarContext } from "./NavbarContext";

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
    onClick, // Extract onClick from props
    theme = {
      text: "text-gray-800 dark:text-gray-200",
      states:
        "focus-within:opacity-100 active:opacity-100 md:hover:opacity-100",
    },
    ...props
  }: NavlinkProps<T>,
  ref: React.Ref<any>
) {
  const { closeMenu } = useNavbarContext();

  const baseStyles =
    "transition-all motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out md:flex md:items-center block leading-none py-2 md:py-1";

  const varientSize = cto
    ? "text-xl font-bold py-3 "
    : "text-base md:text-sm font-normal";

  const variantStyles = isDropdownItem ? "opacity-65" : "opacity-75";
  const themeStyles = clsx(theme.text, theme.states);

  const linkClass = clsx(
    baseStyles,
    variantStyles,
    themeStyles,
    varientSize,
    className
  );

  const Component = as || "a";

  // Handle click with close menu
  const handleClick = (e: React.MouseEvent) => {
    closeMenu();
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <Component
      ref={ref}
      className={linkClass}
      onClick={handleClick} // Add the click handler here
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </Component>
  );
});

export default Navlink;
