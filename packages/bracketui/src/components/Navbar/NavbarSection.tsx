// packages/bracketui/src/components/Navbar/NavbarSection.tsx
import { FC } from "react";
import NavItem from "./NavItem";
import { ThemeToggle } from "../ThemeToggle";
import Navbrand from "./Navbrand";

export interface NavSectionProps {
  children?: React.ReactNode;
  className?: string;
}

const NavSection: FC<NavSectionProps> = ({ children, className = "" }) => {
  return (
    <div className={`flex items-center justify-between space-x-8 ${className}`}>
      <Navbrand />
      <NavItem>{children && children}</NavItem>
    </div>
  );
};

export default NavSection;
