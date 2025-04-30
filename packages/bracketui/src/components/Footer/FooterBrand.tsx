// packages/bracketui/src/components/Footer/FooterBrand.tsx
import clsx from "clsx";
import { FC, ReactElement } from "react";

export interface FooterBrandProps {
  logo?: string | ReactElement;
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
}) => {
  return (
    <div className={clsx("space-y-4 mb-4", className)}>
      <a
        href="/"
        className="hover:opacity-85 transition-opacity motion-reduce:transition-none motion-reduce:hover:transform-none duration-300 ease-in-out"
      >
        {logo &&
          (typeof logo === "string" ? (
            <img
              src={logo}
              alt="Brand Logo"
              className={clsx("h-4 w-auto dark:invert")}
            />
          ) : (
            logo
          ))}
      </a>

      <div className="max-w-xs">
        {children &&
          (typeof children === "string" ? (
            <span className={clsx("text-sm text-gray-500 ")}>{children}</span>
          ) : (
            children
          ))}
      </div>
    </div>
  );
};

export default FooterBrand;
