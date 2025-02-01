// packages/bracketui/src/components/Footer/Footer.tsx
"use client";
import { FC } from "react";
import FooterBottom, { FooterBottomProps } from "./FooterBottom";
import React from "react";
import FooterText from "./FooterText";
import FooterSocial from "./FooterSocial";
import {
  EmailIcon,
  FacebookIcon,
  LinkedInIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "./icons";

export interface FooterProps {
  children?: React.ReactNode;
}

const Footer: FC<FooterProps> = ({ children }) => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          {/* <div className="grid lg:auto-cols-fr lg:grid-flow-col grid-cols-1  gap-8 "> */}
          <div className="grid grid-flow-row auto-rows-fr gap-8 md:grid-flow-col md:auto-cols-fr">
            {children}
          </div>
        </div>

        <div className="py-4 md:py-6 border-t border-gray-200 dark:border-gray-800 flex items-center justify-between md:justify-center mx-auto">
          <FooterText>
            © 2024 Third Bracket Solution. All rights reserved.
          </FooterText>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
