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
//   size?: "xs" | "sm" | "md" | "lg" | "xl";
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
//     size = "md",

//     isLoading = false,
//     disabled = false,
//     ...props
//   }: ButtonProps<T>,
//   ref: React.Ref<any>
// ) {
//   // Base styles
//   const baseClasses =
//     "inline-flex self-start items-center justify-center font-semibold transition-opacity duration-200 ease-in-out motion-reduce:transition-none whitespace-nowrap motion-reduce:hover:transform-none focus:outline-none focus:ring-2    border relative rounded-md";

//   const variantButton = outline
//     ? "border-gray-500/40   text-gray-800 dark:text-gray-200  [@media(hover:hover)]:hover:bg-gray-200/40 [@media(hover:hover)]:dark:hover:bg-gray-800/30 active:bg-gray-200 dark:active:bg-gray-800 focus:ring-gray-500"
//     : "border-transparent bg-gray-800 dark:bg-gray-200 text-gray-200 dark:text-gray-800 [@media(hover:hover)]:hover:opacity-90 active:opacity-80 focus:ring-gray-700 dark:focus:ring-gray-300";

//   // Size classes with fixed heights
//   const sizeClasses = clsx({
//     "px-3 py-2 h-8 text-xs ": size === "xs",
//     "px-4 py-2.5 h-10 text-sm ": size === "sm",
//     "px-5 py-3  h-12 text-base ": size === "md",
//     "px-6 py-4  h-14 text-lg": size === "lg",
//     "px-7 py-4.5  h-16  text-xl": size === "xl",
//   });

//   // Disabled and Loading classes
//   const stateClasses = clsx({
//     "cursor-not-allowed opacity-50 pointer-events-none": disabled || isLoading,
//     relative: isLoading,
//   });

//   // Merge all classes
//   const buttonClasses = clsx(
//     baseClasses,
//     sizeClasses,
//     variantButton,
//     stateClasses,
//     className
//   );

//   // Loading spinner size based on button size
//   const spinnerSize = clsx({
//     "w-2 h-2.5": size === "xs",
//     "w-3 h-3": size === "sm",
//     "w-3.5 h-3.5": size === "md",
//     "w-4 h-4": size === "lg",
//     "w-4.5 h-4.5": size === "xl",
//   });

//   // Choose the correct element
//   const Component = as || (href ? "a" : "button");

//   return (
//     <Component
//       ref={ref}
//       className={buttonClasses}
//       onClick={onClick}
//       disabled={disabled || isLoading}
//       {...(href ? { href } : {})}
//       {...props}
//     >
//       {isLoading ? (
//         <>
//           <span className="absolute inset-0 flex items-center justify-center ">
//             <svg
//               className={`animate-spin ${spinnerSize} text-current max-h-full max-w-full`}
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               aria-hidden="true"
//             >
//               <circle
//                 className="opacity-25"
//                 cx="12"
//                 cy="12"
//                 r="10"
//                 stroke="currentColor"
//                 strokeWidth="3"
//               />
//               <path
//                 className="opacity-75"
//                 fill="currentColor"
//                 d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//               />
//             </svg>
//           </span>
//           <span className="opacity-0" aria-hidden="true">
//             {children}
//           </span>
//         </>
//       ) : (
//         children
//       )}
//     </Component>
//   );
// });

// export default Button;

import { forwardRef, ElementType, ComponentPropsWithRef } from "react";
import clsx from "clsx";

type ButtonTheme = {
  background?: string;
  border?: string;
  hoverBackground?: string;
  activeBackground?: string;
  focusRing?: string;
  text?: string;
};

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
  theme?: ButtonTheme;
  // theme?: {
  //   background?: string;
  //   border?: string;
  //   hoverBackground?: string;
  //   activeBackground?: string;
  //   focusRing?: string;
  // };
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
    theme,
    ...props
  }: ButtonProps<T>,
  ref: React.Ref<any>
) {
  // Base styles
  const baseClasses =
    "inline-flex self-start items-center justify-center font-medium transition-all duration-300 delay-50 ease-in-out motion-reduce:transition-none motion-reduce:hover:transform-none whitespace-nowrap  focus:outline-none border relative rounded-md";

  // Variant styles with theme overrides
  const variantButton = outline
    ? clsx(
        theme?.border || "border-gray-200 dark:border-gray-800",
        theme?.text || "text-gray-800 dark:text-gray-200",
        theme?.hoverBackground ||
          "[@media(hover:hover)]:hover:bg-gray-200/30 [@media(hover:hover)]:dark:hover:bg-gray-800/30",
        theme?.activeBackground || "active:bg-gray-200 dark:active:bg-gray-800",
        theme?.focusRing || "focus:ring-gray-500"
      )
    : clsx(
        theme?.background || "bg-gray-950 dark:bg-white",
        theme?.border || "border-transparent",
        theme?.text || "text-gray-950 dark:text-white",
        theme?.hoverBackground || "[@media(hover:hover)]:hover:opacity-90",
        theme?.activeBackground || "active:opacity-80",
        theme?.focusRing || "focus:ring-gray-700 dark:focus:ring-gray-300"
      );

  // Size classes
  const sizeClasses = clsx({
    "px-3 py-2 h-8 text-xs ": size === "xs",
    "px-4 py-2.5 h-10 text-sm": size === "sm",
    "px-5 py-3 h-12 text-base": size === "md",
    "px-6 py-4 h-14 text-lg": size === "lg",
    "px-7 py-4.5 h-16 text-xl": size === "xl",
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
          <span className="absolute inset-0 flex items-center justify-center">
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
