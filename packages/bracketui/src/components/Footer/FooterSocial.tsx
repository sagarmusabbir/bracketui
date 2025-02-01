// packages/bracketui/src/components/Footer/FooterSocial.tsx
import React from "react";
import { FC, ReactElement } from "react";

export interface FooterSocialProps {
  children?: React.ReactNode;
  className?: string;
  icon: string | ReactElement;
  href: string;
  label: string;
}

const FooterSocial: FC<FooterSocialProps> = ({
  href,
  icon,
  label,
  className = "",
  children,
}) => {
  return (
    <div className={`flex items-center ${className}`}>
      <a
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 transition-colors duration-200"
      >
        {typeof icon === "string" ? (
          <img src={icon} alt={label} className="w-auto h-5" />
        ) : (
          React.cloneElement(icon, { size: 20 })
        )}
        {children}
      </a>
    </div>
  );
};

export default FooterSocial;
