"use client";
import { ReactNode, useEffect } from "react";
import { useFooterContext } from "./FooterContext";

export interface FooterBottomProps {
  children: ReactNode;
}

const FooterBottom: React.FC<FooterBottomProps> = ({ children }) => {
  const { setFooterBottom } = useFooterContext();

  useEffect(() => {
    setFooterBottom(children);
    return () => setFooterBottom(null); // Cleanup on unmount
  }, [children, setFooterBottom]);

  return null; // This component doesn't render anything directly
};

export default FooterBottom;
