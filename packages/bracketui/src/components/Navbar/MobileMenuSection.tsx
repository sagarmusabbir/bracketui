// packages/bracketui/src/components/Navbar/MobileMenuSection.tsx
import { FC } from "react";

export interface MobileMenuProps {
  children?: React.ReactNode;
  className?: string;
}

const MobileMenu: FC<MobileMenuProps> = ({ children, className = "" }) => {
  return (
    <div className={`py-20 px-4 flex flex-col space-y-2 ${className}`}>
      {children && children}
    </div>
  );
};

export default MobileMenu;
