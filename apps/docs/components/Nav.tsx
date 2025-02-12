import {
  Megamenu,
  MobileNav,
  Navbar,
  Navbrand,
  NavItem,
  Navlink,
} from "@thirdbracket/bracketui";
import { FC } from "react";

const HeaderBal: FC = () => {
  return (
    <Navbar>
      <Navbrand
        logo="/path.svg"
        href="/"
        className="text-lg text-gray-950 dark:text-white font-bold dark:invert"
      >
        UI
      </Navbrand>

      <NavItem>
        <Navlink href="#">My Link</Navlink>
        <Navlink href="#">My Link</Navlink>
        <Megamenu label="Cat">
          <Navlink href="#">My Link</Navlink>
          <Navlink href="#">My Link</Navlink>
          <Navlink href="#">My Link</Navlink>
          <Navlink href="#">My Link</Navlink>
        </Megamenu>
      </NavItem>
      <MobileNav>
        <Navlink href="#">My Link</Navlink>
        <Navlink href="#">My Link</Navlink>
        <Megamenu label="Dog">
          <Navlink href="#">My Link</Navlink>
          <Navlink href="#">My Link</Navlink>
          <Navlink href="#">My Link</Navlink>
          <Navlink href="#">My Link</Navlink>
          <Navlink href="#">My Link</Navlink>
        </Megamenu>
      </MobileNav>
    </Navbar>
  );
};
export default HeaderBal;
