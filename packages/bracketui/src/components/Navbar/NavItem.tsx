// "use client";
// import { ReactNode, useEffect } from "react";
// import { useNavbarContext } from "./NavbarContext";

// export interface NavItemProps {
//   children: ReactNode;
// }

// const NavItem: React.FC<NavItemProps> = ({ children }) => {
//   const { setDesktopNav } = useNavbarContext();

//   useEffect(() => {
//     setDesktopNav(children);
//     return () => setDesktopNav(null); // Cleanup on unmount
//   }, [children, setDesktopNav]);

//   return null; // This component doesn't render anything directly
// };

// export default NavItem;

"use client";
import { ReactNode, useMemo, useEffect } from "react";
import { useNavbarContext } from "./NavbarContext";

export interface NavItemProps {
  children: ReactNode;
}

const NavItem: React.FC<NavItemProps> = ({ children }) => {
  const { setDesktopNav } = useNavbarContext();

  // Memoize children to prevent unnecessary updates
  const memoizedChildren = useMemo(() => children, [children]);

  useEffect(() => {
    setDesktopNav(memoizedChildren);
    return () => setDesktopNav(null);
  }, [memoizedChildren, setDesktopNav]);

  return null;
};

export default NavItem;
