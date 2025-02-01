// packages/bracketui/src/components/Footer/Footer.tsx
"use client";
import { FC } from "react";

export interface FooterProps {
  children?: React.ReactNode;
}

const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {children}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
