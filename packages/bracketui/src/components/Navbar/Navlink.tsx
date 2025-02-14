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
      text: "text-gray-950 dark:text-gray-50",
      states: " hover:opacity-100",
    },
    ...props
  }: NavlinkProps<T>,
  ref: React.Ref<any>
) {
  // Base styles that should always be applied

  const baseStyles =
    " transition-all motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out   md:flex block  leading-none py-2 md:py-1";

  const varientSize = cto
    ? "text-xl font-bold  py-2.5 tracking-tight"
    : "text-base  md:text-sm";

  // Conditional styles based on isDropdownItem
  const variantStyles = isDropdownItem
    ? "opacity-60  font-normal "
    : "opacity-70 font-medium ";

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
