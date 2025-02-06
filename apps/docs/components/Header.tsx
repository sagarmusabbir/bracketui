import {
  Dropdown,
  MobileNav,
  Navbar,
  Navbrand,
  NavItem,
  Navlink,
} from "@thirdbracket/bracketui";
import Image from "next/image";

const Header = () => {
  return (
    <Navbar mobileBreakpoint={500}>
      <Navbrand
        logo={
          <Image
            src="path.svg"
            alt="Brand Logo"
            width={120}
            height={27}
            className="h-5 w-auto"
          />
        }
      >
        UI
      </Navbrand>
      <NavItem>
        <Navlink href="#">Home</Navlink>
        <Navlink href="#">About</Navlink>

        <Dropdown label="Services">
          <Navlink href="#" isDropdownItem>
            Web Development
          </Navlink>
          <Navlink href="#" isDropdownItem>
            UI/UX Design
          </Navlink>
          <Navlink href="#" isDropdownItem>
            SEO Optimization
          </Navlink>
        </Dropdown>

        <Navlink href="#">Contact</Navlink>
      </NavItem>
      <MobileNav>
        <Navlink href="#">Home</Navlink>
        <Navlink href="#">About</Navlink>

        <Dropdown label="Services" className="space-y-1 ">
          <Navlink href="#" isDropdownItem>
            Web Development
          </Navlink>
          <Navlink href="#" isDropdownItem>
            UI/UX Design
          </Navlink>
          <Navlink href="#" isDropdownItem>
            SEO Optimization
          </Navlink>
        </Dropdown>

        <Navlink href="#">Products</Navlink>

        <Navlink href="#">Features</Navlink>
        <Navlink href="#">Contact</Navlink>
      </MobileNav>
    </Navbar>
  );
};

export default Header;
