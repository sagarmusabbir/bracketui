// packages/bracketui/src/components/Footer/FooterLink.tsx
import { FC, AnchorHTMLAttributes } from "react";

export interface FooterLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const FooterLink: FC<FooterLinkProps> = ({
  href,
  children,
  className = "",
  ...props
}) => {
  return (
    <a
      href={href}
      className={`block text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default FooterLink;
