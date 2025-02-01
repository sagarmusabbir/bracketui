// packages/bracketui/src/components/Footer/FooterBrand.tsx
import { FC } from "react";

export interface FooterBrandProps {
  logo?: string;
  children?: React.ReactNode;
  className?: string;
}

const FooterBrand: FC<FooterBrandProps> = ({
  logo,
  children,
  className = "",
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      {logo && <img src={logo} alt="Brand Logo" className="h-8 w-auto" />}
      {children && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{children}</p>
      )}
    </div>
  );
};

export default FooterBrand;
