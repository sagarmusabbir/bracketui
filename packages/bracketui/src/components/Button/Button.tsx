// import { FC, MouseEventHandler } from "react";

// export interface ButtonProps {
//   children: React.ReactNode;
//   size?: "sm" | "md" | "lg" | "xl";
//   href?: string;
//   onClick?: () => MouseEventHandler<HTMLButtonElement>;
//   variant?: "default" | "outline";
// }

// const Button: FC<ButtonProps> = ({
//   children,
//   size = "lg",
//   href,
//   onClick,
//   variant = "default",
// }) => {
//   const baseClasses = `
//    inline-flex items-center justify-center rounded-lg font-semibold group
//     transition-all motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out
//      leading-none ${
//        {
//          sm: "px-4 h-9 text-xs",
//          md: "px-5 h-11 text-sm",
//          lg: "px-6 h-12 text-base",
//          xl: "px-7 h-14 text-lg",
//        }[size]
//      }`;

//   const varientClasses = {
//     default:
//       "bg-gray-950 dark:bg-slate-100 text-white dark:text-gray-950 hover:opacity-90",
//     outline:
//       "border border-gray-200 dark:border-gray-800 text-gray-950 dark:text-white bg-clip-padding backdrop-filter backdrop-blur-sm hover:opacity-85",
//   }[variant];

//   const buttonClasses = `${baseClasses} ${varientClasses}`;

//   if (href) {
//     return (
//       <a href={href} className={buttonClasses}>
//         {children}
//       </a>
//     );
//   }

//   return (
//     <button type="button" className={buttonClasses} onClick={onClick}>
//       {children}
//     </button>
//   );
// };

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
  size?: "sm" | "md" | "lg" | "xl";
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
    size = "lg",
    ...props
  }: ButtonProps<T>,
  ref: React.Ref<any>
) {
  // Base styles
  const baseClasses =
    "inline-flex items-center justify-center rounded-lg font-semibold group transition-all motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out leading-none opacity-100 focus-within:opacity-80 active:opacity-80  md:hover:opacity-80";

  // Varient classes
  const varientButton = outline
    ? "border border-gray-200 dark:border-gray-800 text-gray-950 dark:text-white bg-clip-padding backdrop-filter backdrop-blur-sm "
    : "bg-gray-950 dark:bg-slate-100 text-white dark:text-gray-950  ";

  // Size classes
  const sizeClasses = clsx({
    "px-4 h-8 text-xs": size === "sm",
    "px-5 h-10 text-sm": size === "md",
    "px-6 h-12 text-base": size === "lg",
    "px-7 h-14 text-lg": size === "xl",
  });

  // Merge all classes
  const buttonClasses = clsx(
    baseClasses,
    sizeClasses,
    varientButton,
    className
  );

  // Choose the correct element
  const Component = as || (href ? "a" : "button");

  return (
    <Component
      ref={ref}
      className={buttonClasses}
      onClick={onClick}
      {...(href ? { href } : {})}
      {...props}
    >
      {children}
    </Component>
  );
});

export default Button;
