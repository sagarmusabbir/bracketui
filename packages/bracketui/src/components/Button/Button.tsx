// import { forwardRef, ElementType, ComponentPropsWithRef } from "react";
// import clsx from "clsx";

// export type ButtonProps<T extends ElementType> = {
//   as?: T;
//   href?: string;
//   className?: string;
//   outline?: boolean;
//   children?: React.ReactNode;
//   onClick?: () => void;
//   variant?: "default" | "outline";
//   size?: "sm" | "md" | "lg" | "xl";
//   isLoading?: boolean;
//   disabled?: boolean;
// } & ComponentPropsWithRef<T>;

// const Button = forwardRef(function Button<T extends ElementType = "button">(
//   {
//     as,
//     href,
//     className = "",
//     children,
//     outline,
//     onClick,
//     variant = "default",
//     size = "lg",
//     isLoading = false,
//     disabled = false,
//     ...props
//   }: ButtonProps<T>,
//   ref: React.Ref<any>
// ) {
//   // Base styles
//   const baseClasses =
//     "inline-flex items-center justify-center rounded-lg font-medium group transition-all motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out leading-none opacity-100 focus-within:opacity-80 active:opacity-80  md:hover:opacity-80";

//   // Varient classes
//   const varientButton = outline
//     ? "border border-gray-200 dark:border-gray-800 text-gray-950 dark:text-white bg-clip-padding backdrop-filter backdrop-blur-sm "
//     : "bg-gray-950 dark:bg-slate-100 text-white dark:text-gray-950  ";

//   // Size classes
//   const sizeClasses = clsx({
//     "px-4 h-8 text-xs": size === "sm",
//     "px-5 h-10 text-sm": size === "md",
//     "px-6 h-12 text-base": size === "lg",
//     "px-7 h-14 text-lg": size === "xl",
//   });

//   // Merge all classes
//   const buttonClasses = clsx(
//     baseClasses,
//     sizeClasses,
//     varientButton,
//     className
//   );

//   // Choose the correct element
//   const Component = as || (href ? "a" : "button");

//   return (
//     <Component
//       ref={ref}
//       className={buttonClasses}
//       onClick={onClick}
//       {...(href ? { href } : {})}
//       {...props}
//     >
//       {children}
//     </Component>
//   );
// });

// export default Button;

import { forwardRef, ElementType, ComponentPropsWithRef } from "react";
import clsx from "clsx";

export type ButtonProps<T extends ElementType> = {
  as?: T;
  href?: string;
  className?: string;
  outline?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "default" | "outline";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  disabled?: boolean;
} & ComponentPropsWithRef<T>;

const Button = forwardRef(function Button<T extends ElementType = "button">(
  {
    as,
    href,
    className = "",
    children,
    outline,
    onClick,
    variant = "default",
    size = "md",
    isLoading = false,
    disabled = false,
    ...props
  }: ButtonProps<T>,
  ref: React.Ref<any>
) {
  // Base styles
  const baseClasses =
    "inline-flex self-start items-center justify-center font-semibold transition-opacity duration-200 ease-in-out motion-reduce:transition-none whitespace-nowrap motion-reduce:hover:transform-none focus:outline-none focus:ring-2 focus:ring-gray-400 dark:focus:ring-gray-600   border relative rounded-md";

  // Variant classes with different hover opacities
  const variantButton = outline
    ? "border-gray-500/40   text-gray-800 dark:text-gray-200  [@media(hover:hover)]:hover:bg-gray-200/40 [@media(hover:hover)]:dark:hover:bg-zinc-800/30 active:bg-gray-200 dark:active:bg-gray-800"
    : "border-transparent bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800 [@media(hover:hover)]:hover:opacity-90 active:opacity-80 ";

  // Size classes with fixed heights
  const sizeClasses = clsx({
    "px-3 py-2 h-8 text-xs ": size === "xs",
    "px-4 py-2.5 h-10 text-sm ": size === "sm",
    "px-5 py-3  h-12 text-base ": size === "md",
    "px-6 py-4  h-14 text-lg": size === "lg",
    "px-7 py-4.5  h-16  text-xl": size === "xl",
  });

  // Disabled and Loading classes
  const stateClasses = clsx({
    "cursor-not-allowed opacity-50 pointer-events-none": disabled || isLoading,
    relative: isLoading,
  });

  // Merge all classes
  const buttonClasses = clsx(
    baseClasses,
    sizeClasses,
    variantButton,
    stateClasses,
    className
  );

  // Loading spinner size based on button size
  const spinnerSize = clsx({
    "w-2 h-2.5": size === "xs",
    "w-3 h-3": size === "sm",
    "w-3.5 h-3.5": size === "md",
    "w-4 h-4": size === "lg",
    "w-4.5 h-4.5": size === "xl",
  });

  // Choose the correct element
  const Component = as || (href ? "a" : "button");

  return (
    <Component
      ref={ref}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled || isLoading}
      {...(href ? { href } : {})}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="absolute inset-0 flex items-center justify-center ">
            <svg
              className={`animate-spin ${spinnerSize} text-current max-h-full max-w-full`}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
          <span className="opacity-0" aria-hidden="true">
            {children}
          </span>
        </>
      ) : (
        children
      )}
    </Component>
  );
});

export default Button;
