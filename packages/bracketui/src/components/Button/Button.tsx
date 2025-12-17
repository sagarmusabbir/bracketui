// import * as React from "react";
// import { forwardRef, ElementType, ComponentPropsWithoutRef } from "react";
// import { buttonStyles } from "./styles";
// import { Spinner } from "./Spinner";

// type PolymorphicRef<T extends ElementType> = ComponentPropsWithoutRef<T>["ref"];

// export type ButtonProps<T extends ElementType = "button"> = {
//   as?: T;
//   href?: string;
//   variant?:
//     | "default"
//     | "secondary"
//     | "destructive"
//     | "outline"
//     | "ghost"
//     | "link"
//     | "glass"
//     | "flat";
//   size?: "xs" | "sm" | "md" | "lg" | "xl" | "icon";
//   isLoading?: boolean;
//   disabled?: boolean;
//   className?: string;
//   circle?: boolean;
//   icon?: React.ReactNode;
//   iconPosition?: "start" | "end";
//   children?: React.ReactNode;
// } & Omit<ComponentPropsWithoutRef<T>, "as" | "size">;

// const Button = forwardRef(function Button<T extends ElementType = "button">(
//   {
//     as,
//     href,
//     variant,
//     size,
//     isLoading = false,
//     disabled = false,
//     icon,
//     iconPosition = "start",
//     circle = false,
//     className,
//     children,
//     ...props
//   }: ButtonProps<T>,
//   ref: PolymorphicRef<T>
// ) {
//   const Component = as ?? (href ? "a" : "button");
//   const isDisabled = disabled || isLoading;
//   const radiusClass = circle ? "rounded-full " : "rounded-md";
//   const content = (
//     <>
//       {icon && iconPosition === "start" && (
//         <span className="mr-2 flex items-center">{icon}</span>
//       )}
//       {children}
//       {icon && iconPosition === "end" && (
//         <span className="ml-2 flex items-center">{icon}</span>
//       )}
//     </>
//   );

//   return (
//     <Component
//       ref={ref}
//       className={`${buttonStyles({ variant, size, className })} ${radiusClass} flex items-center justify-center`}
//       disabled={Component === "button" ? isDisabled : undefined}
//       aria-disabled={isDisabled || undefined}
//       aria-busy={isLoading || undefined}
//       {...(href ? { href } : {})}
//       {...props}
//     >
//       {isLoading ? (
//         <>
//           <span className="absolute inset-0 flex items-center justify-center">
//             <Spinner size={size ?? "md"} />
//           </span>
//           <span className="opacity-0 flex items-center justify-center">
//             {content}
//           </span>
//         </>
//       ) : (
//         content
//       )}
//     </Component>
//   );
// });

// export default Button;

import * as React from "react";
import { forwardRef, ElementType, ComponentPropsWithoutRef } from "react";
import { buttonStyles } from "./styles";
import { Spinner } from "./Spinner";

type PolymorphicRef<T extends ElementType> = ComponentPropsWithoutRef<T>["ref"];

export type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
  href?: string;
  variant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link"
    | "glass"
    | "flat"
    | "avatar"; // new variant
  size?: "xs" | "sm" | "md" | "lg" | "xl" | "icon";
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  pill?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  children?: React.ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "size">;

const Button = forwardRef(function Button<T extends ElementType = "button">(
  {
    as,
    href,
    variant = "default",
    size = "md",
    isLoading = false,
    disabled = false,
    icon,
    iconPosition = "start",
    pill = false,
    className,
    children,
    ...props
  }: ButtonProps<T>,
  ref: PolymorphicRef<T>
) {
  const Component = as ?? (href ? "a" : "button");
  const isDisabled = disabled || isLoading;

  // Determine if this is avatar / icon-only button
  const isAvatar = variant === "avatar";
  const isIconOnly = isAvatar || (!!icon && !children);

  // Radius: pill or avatar full-rounded
  const radiusClass = pill || isAvatar ? "rounded-full" : "rounded-md";

  // Size classes
  const sizeClass = isAvatar
    ? buttonStyles({ variant: "avatar", iconSize: size as any }) // icon/avatar size
    : buttonStyles({ variant, size: size as any }); // normal button size

  // Content
  const content = (
    <>
      {icon && iconPosition === "start" && !isAvatar && (
        <span className="mr-2 flex items-center">{icon}</span>
      )}
      {isAvatar ? icon : children}
      {icon && iconPosition === "end" && !isAvatar && (
        <span className="ml-2 flex items-center">{icon}</span>
      )}
    </>
  );

  return (
    <Component
      ref={ref}
      className={`${sizeClass} ${radiusClass} ${className ?? ""} inline-flex items-center justify-center relative`}
      disabled={Component === "button" ? isDisabled : undefined}
      aria-disabled={isDisabled || undefined}
      aria-busy={isLoading || undefined}
      {...(href ? { href } : {})}
      {...props}
    >
      {isLoading ? (
        <>
          <span className="absolute inset-0 flex items-center justify-center">
            <Spinner size={size} />
          </span>
          <span className="opacity-0">{content}</span>
        </>
      ) : (
        content
      )}
    </Component>
  );
});

export default Button;
