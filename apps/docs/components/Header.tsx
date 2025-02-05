import {
  Dropdown,
  MobileNav,
  Navbar,
  Navbrand,
  NavItem,
  Navlink,
} from "@thirdbracket/bracketui";

const Header = () => {
  return (
    <Navbar>
      <Navbrand logo="/path.svg">UI</Navbrand>
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
