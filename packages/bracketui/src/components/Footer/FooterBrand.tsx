// packages/bracketui/src/components/Footer/FooterBrand.tsx
import { FC } from "react";

export interface FooterBrandProps {
  logo?: string;
  children?: React.ReactNode;
  className?: string;
  socialLinks?: {
    icon: React.ReactNode;
    href: string;
  }[];
  copyright?: string;
}

const FooterBrand: FC<FooterBrandProps> = ({
  logo,
  children,
  className = "",
  socialLinks,
  copyright,
}) => {
  return (
    <div className={`space-y-4 mb-4  ${className}`}>
      {logo && (
        <img src={logo} alt="Brand Logo" className="h-6 w-auto dark:invert" />
      )}
      {children && (
        <div className="text-sm text-gray-600 dark:text-gray-500 ">
          {children}
        </div>
      )}
    </div>
  );
};

export default FooterBrand;
