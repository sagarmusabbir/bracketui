// packages/bracketui/src/components/Footer/FooterBottom.tsx
import { FC } from "react";

export interface FooterBottomProps {
  children: React.ReactNode;
  className?: string;
}

const FooterBottom: FC<FooterBottomProps> = ({ children, className = "" }) => {
  return (
    <div className={`flex items-center justify-between ${className}`}>
      {children}
    </div>
  );
};

export default FooterBottom;
