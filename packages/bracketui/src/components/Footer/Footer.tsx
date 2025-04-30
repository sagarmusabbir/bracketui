// packages/bracketui/src/components/Footer/Footer.tsx
"use client";
import { FC, useState } from "react";

import React from "react";

import FooterContext from "./FooterContext";
import clsx from "clsx";

export interface FooterProps {
  children?: React.ReactNode;
  className?: string;
  theme?: {
    background?: string;
    border?: string;
  };
}

const Footer: FC<FooterProps> = ({
  children,
  className = "",
  theme = {
    background: "bg-white dark:bg-gray-950 ",
    border: "border-gray-200 dark:border-gray-800",
  },
}) => {
  const [footerBottom, setFooterBottom] = useState<React.ReactNode>(null);
  return (
    <FooterContext.Provider value={{ setFooterBottom }}>
      <footer
        className={clsx(
          "border-t-[0.5px]",
          className,
          theme.background,
          theme.border
        )}
      >
        <div className="mx-auto px-6 lg:px-8">
          <div className="py-12 md:py-16">
            <div className="grid grid-flow-row auto-rows-fr gap-8 md:grid-flow-col md:auto-cols-fr">
              {children}
            </div>
          </div>

          <div className="py-4 md:py-8 border-t-[0.5px] border-gray-200 dark:border-gray-800 flex items-center justify-between  mx-auto">
            {footerBottom}
          </div>
        </div>
      </footer>
    </FooterContext.Provider>
  );
};

export default Footer;
