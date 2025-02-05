// packages/bracketui/src/components/Footer/FooterText.tsx
import { FC } from "react";

export interface FooterTextProps {
  children: React.ReactNode;
  className?: string;
}

const FooterText: FC<FooterTextProps> = ({ children, className = "" }) => {
  return (
    <p className={`text-sm  text-gray-500/80  ${className}`}>{children}</p>
  );
};

export default FooterText;
