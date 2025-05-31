// import clsx from "clsx";
// import { FC, AnchorHTMLAttributes, ElementType } from "react";

// export interface FooterLinkProps<T extends ElementType = "a">
//   extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
//   href: string;
//   children: React.ReactNode;
//   className?: string;
//   as?: T;
//   theme?: {
//     text?: string;
//     states?: string;
//   };
// }

// const FooterLink: FC<FooterLinkProps> = ({
//   href,
//   children,
//   className = "",
//   as: Component = "a",
//   theme = {
//     text: "text-gray-800 dark:text-gray-200",
//     states: "focus-within:opacity-100 active:opacity-100 md:hover:opacity-100 ",
//   },
//   ...props
// }) => {
//   const themeStyles = clsx(theme.text, theme.states);
//   return (
//     <Component
//       href={href}
//       className={clsx(
//         "block mb-3 last:mb-0 text-sm opacity-75 transition-all motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out",
//         themeStyles,
//         className
//       )}
//       // className={`
//       //   block
//       //   mb-3 last:mb-0  // Add vertical spacing between links and remove margin from last item
//       //   text-sm
//       //   text-gray-600 dark:text-gray-500
//       //   hover:text-gray-900 dark:hover:text-gray-100
//       //   transition-colors ease-in-out duration-300
//       //   ${className}
//       // `}
//       {...props}
//     >
//       {children}
//     </Component>
//   );
// };

// export default FooterLink;

"use client";
import { forwardRef, ElementType, ComponentPropsWithRef } from "react";
import clsx from "clsx";

export type FooterLinkProps<T extends ElementType = "a"> = {
  as?: T;
  href?: string;
  className?: string;
  children?: React.ReactNode;
  isExternal?: boolean;
  theme?: {
    text?: string;
    states?: string;
  };
} & ComponentPropsWithRef<T>;

const FooterLink = forwardRef(function FooterLink<T extends ElementType = "a">(
  {
    as,
    href,
    className = "",
    children,
    isExternal,
    theme = {
      text: "text-gray-800 dark:text-gray-200 ",
      states:
        "focus-within:opacity-100 active:opacity-100  [@media(hover:hover)]:hover:opacity-100 [@media(hover:hover)]:dark:hover:opacity-100",
    },
    ...props
  }: FooterLinkProps<T>,
  ref: React.Ref<any>
) {
  const baseStyles =
    "block mb-3 last:mb-0  transition-all motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out text-sm opacity-65 dark:opacity-50";

  const themeStyles = clsx(theme.text, theme.states);

  const linkClass = clsx(baseStyles, themeStyles, className);
  const Component = as || "a";

  return (
    <Component
      ref={ref}
      href={href}
      className={linkClass}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    >
      {children}
    </Component>
  );
});

export default FooterLink;
