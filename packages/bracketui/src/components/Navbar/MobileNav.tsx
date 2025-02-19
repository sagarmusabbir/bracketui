// import { ReactNode, useEffect } from "react";
// import { useNavbarContext } from "./NavbarContext";

// export interface MobileNavProps {
//   children: ReactNode;
// }

// const MobileNav: React.FC<MobileNavProps> = ({ children }) => {
//   const { setMobileNav } = useNavbarContext();

//   useEffect(() => {
//     setMobileNav(children);
//     return () => setMobileNav(null); // Cleanup on unmount
//   }, [children, setMobileNav]);

//   return null; // This component doesn't render anything directly
// };

// export default MobileNav;

"use client";
import { ReactNode, useMemo, useEffect } from "react";
import { useNavbarContext } from "./NavbarContext";

export interface MobileNavProps {
  children: ReactNode;
}

const MobileNav: React.FC<MobileNavProps> = ({ children }) => {
  const { setMobileNav } = useNavbarContext();

  const memoizedChildren = useMemo(
    () => <div className="px-6  py-2  fixed">{children}</div>,
    [children]
  );

  useEffect(() => {
    setMobileNav(memoizedChildren);
    return () => setMobileNav(null);
  }, [memoizedChildren, setMobileNav]);

  return null;
};

export default MobileNav;
