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
        <Navlink href="#">Features</Navlink>
        <Navlink href="#">About</Navlink>
        <Megamenu label="Solutions">
          <Navlink href="#">Development</Navlink>
          <Navlink href="#">Infrastructures</Navlink>
          <Navlink href="#">DevOps</Navlink>
          
        </Megamenu>
<Navlink href="#">Business</Navlink>
<Navlink href="#">Contact</Navlink>
      </NavItem>
      <MobileNav>
        <Navlink href="#">Features</Navlink>
        <Navlink href="#">About</Navlink>
        <Megamenu label="Solutions">
          <Navlink className="px-0.5" href="#">Development</Navlink>
          <Navlink className="px-0.5" href="#">Infrastructures</Navlink>
          <Navlink className="px-0.5" href="#">DevOps</Navlink>
          <Megamenu className="px-0.5" label="Digital Marketing">
          <Navlink className="px-1" href="#">Seo</Navlink>
          <Navlink className="px-1" href="#">Social Media</Navlink>
          <Navlink className="px-1" href="#">Content</Navlink>
          
        </Megamenu>
        </Megamenu>
<Navlink href="#">Business</Navlink>
<Navlink href="#">Contact</Navlink>
      </MobileNav>
    </Navbar>
  );
};
export default HeaderBal;
