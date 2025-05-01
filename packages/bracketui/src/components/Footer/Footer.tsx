// packages/bracketui/src/components/Footer/Footer.tsx
"use client";
import { FC, useState } from "react";

import React from "react";

import FooterContext from "./FooterContext";
import clsx from "clsx";

type Theme = {
  background?: string;
  border?: string;
};

export interface FooterProps {
  children?: React.ReactNode;
  className?: string;
  theme?: Theme;
}

const Footer: FC<FooterProps> = ({ children, className = "", theme }) => {
  const [footerBottom, setFooterBottom] = useState<React.ReactNode>(null);

  const themeClasses = {
    background: theme?.background || "bg-white dark:bg-gray-950",
    border: theme?.border || "border-gray-500 border-opacity-30",
  };
  return (
    <FooterContext.Provider value={{ setFooterBottom }}>
      <footer
        className={clsx(
          "border-t",
          className,
          themeClasses.background,
          themeClasses.border
        )}
      >
        <div className="mx-auto px-6 lg:px-8">
          <div className="py-12 md:py-16">
            <div className="grid grid-flow-row auto-rows-fr gap-8 md:grid-flow-col md:auto-cols-fr">
              {children}
            </div>
          </div>

          <div
            className={clsx(
              "py-4 md:py-8 border-t-[0.5px]",
              themeClasses.border,
              "flex items-center justify-between  mx-auto"
            )}
          >
            {footerBottom}
          </div>
        </div>
      </footer>
    </FooterContext.Provider>
  );
};

export default Footer;
