import { forwardRef } from "react";
import { ButtonServerProps } from "./types";
import { cn } from "../../utils";

export const ButtonServer = forwardRef<HTMLAnchorElement, ButtonServerProps>(
  (
    {
      className,
      variant = "base",
      size = "md",
      fullWidth = false,
      children,
      href,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "group  font-medium inline-flex   items-center justify-center transition-all ease-in-out duration-400 focus:outline-none focus:ring-0  disabled:opacity-60 disabled:pointer-events-none  text-nowrap ";

    const variants = {
      base: " bg-gray-800   text-white border border:gray-800 hover:border-gray-800/90 hover:bg-gray-800/90 ",
      glow: "bg-gradient-to-r from-gray-600 via-gray-900 via-gray-900 to-gray-600 text-white hover:opacity-95 transition-opacity",
      framed: "border  border-gray-500 text-black hover:bg-gray-50",
      ghost:
        "border border-dashed hover:border-solid border-gray-200 bg-transparent hover:bg-gray-800 hover:text-white text-black ",
      dim: " bg-gray-300 text-black hover:bg-gray-300/80 ",
      link: "underline underline-offset-8 decoration-from-font decoration-black  decoration-dashed     text-black   hover:decoration-solid  ",
    };

    const sizes = {
      sm: "h-8 px-3 text-xs rounded-md",
      pill: "h-7 px-3 text-xs rounded-full",
      md: "px-4 h-10 text-sm rounded-md",
      lg: "h-11 px-6 text-base rounded-lg",
      xl: "h-12 px-8 text-lg rounded-lg",
    };

    return (
      <a
        ref={ref}
        href={href}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);

ButtonServer.displayName = "ButtonServer";
