// packages/bracketui/src/components/Navbar/MobileMenuSection.tsx
import { FC } from "react";

export interface NavItemProps {
  children: React.ReactNode;
  className?: string;
}

const NavItem: FC<NavItemProps> = ({ children, className = "" }) => {
  return (
    <div className={`hidden md:flex items-center ${className}`}>{children}</div>
  );
};

export default NavItem;
