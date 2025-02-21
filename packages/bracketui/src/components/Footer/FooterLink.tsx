// // packages/bracketui/src/components/Footer/FooterLink.tsx
// import { FC, AnchorHTMLAttributes } from "react";

// export interface FooterLinkProps
//   extends AnchorHTMLAttributes<HTMLAnchorElement> {
//   href: string;
//   children: React.ReactNode;
//   className?: string;
// }

// const FooterLink: FC<FooterLinkProps> = ({
//   href,
//   children,
//   className = "",
//   ...props
// }) => {
//   return (
//     <a
//       href={href}
//       className={`block text-sm text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors ease-in-out duration-300 ${className}`}
//       {...props}
//     >
//       {children}
//     </a>
//   );
// };

// export default FooterLink;

// packages/bracketui/src/components/Footer/FooterLink.tsx
// import { FC, AnchorHTMLAttributes, ElementType } from "react";

// export interface FooterLinkProps<T extends ElementType = 'a'>
//   extends AnchorHTMLAttributes<HTMLAnchorElement> {
//   href: string;
//   children: React.ReactNode;
//   className?: string;
//   as?: T;
// }

// const FooterLink: FC<FooterLinkProps> = ({
//   href,
//   children,
//   className = "",
//   as: Component = 'a',
//   ...props
// }) => {
//   return (
//     <Component
//       href={href}
//       className={`block text-sm text-gray-600 dark:text-gray-500 hover:text-gray-900 dark:hover:text-gray-100 transition-colors ease-in-out duration-300 ${className}`}
//       {...props}
//     >
//       {children}
//     </Component>
//   );
// };

// export default FooterLink;

// packages/bracketui/src/components/Footer/FooterLink.tsx
import { FC, AnchorHTMLAttributes, ElementType } from "react";

export interface FooterLinkProps<T extends ElementType = "a">
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  href: string;
  children: React.ReactNode;
  className?: string;
  as?: T;
}

const FooterLink: FC<FooterLinkProps> = ({
  href,
  children,
  className = "",
  as: Component = "a",
  ...props
}) => {
  return (
    <Component
      href={href}
      className={`
        block 
        mb-3 last:mb-0  // Add vertical spacing between links and remove margin from last item
        text-sm 
        text-gray-600 dark:text-gray-500 
        hover:text-gray-900 dark:hover:text-gray-100 
        transition-colors ease-in-out duration-300 
        ${className}
      `}
      {...props}
    >
      {children}
    </Component>
  );
};

export default FooterLink;
