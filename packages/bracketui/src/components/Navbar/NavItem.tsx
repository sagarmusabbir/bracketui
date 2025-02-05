import { ReactNode, useEffect } from "react";
import { useNavbarContext } from "./NavbarContext";

export interface NavItemProps {
  children: ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ children }) => {
  const { setDesktopNav } = useNavbarContext();

  useEffect(() => {
    setDesktopNav(children);
    return () => setDesktopNav(null); // Cleanup on unmount
  }, [children, setDesktopNav]);

  return null; // This component doesn't render anything directly
};

export default NavItem;
