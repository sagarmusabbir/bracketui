import { Dropdown, Navbar, Navbrand, Navlink } from "@thirdbracket/bracketui";

const Header = () => {
  return (
    <Navbar>
      <Navbrand logo="/path.svg">My Brand</Navbrand>

      <Navlink href="/">Home</Navlink>
      <Navlink href="/about">About</Navlink>

      <Dropdown label="Services">
        <Navlink href="/web" isDropdownItem>
          Web Development
        </Navlink>
        <Navlink href="/mobile" isDropdownItem>
          Mobile Apps
        </Navlink>
      </Dropdown>

      <Dropdown label="Products">
        <Navlink href="/product/1" isDropdownItem>
          Product 1
        </Navlink>
        <Navlink href="/product/2" isDropdownItem>
          Product 2
        </Navlink>
      </Dropdown>
    </Navbar>
  );
};

export default Header;
