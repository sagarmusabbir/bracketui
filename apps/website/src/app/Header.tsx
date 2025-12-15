import {
  Dropdown,
  Megamenu,
  MobileNav,
  Nav,
  Navbar,
  Navbrand,
  NavItem,
  Navlink,
  ThemeToggle,
} from "@thirdbracket/bracketui";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header>
      <Navbar
        theme={{
          background: "bg-transparent dark:bg-transparent backdrop-blur-md",
        }}
      >
        <Navbrand href="/">
          <Image
            src="/logo28.svg"
            alt="BracketUI Logo"
            width={116}
            height={28}
            className="dark:invert"
          />
        </Navbrand>

        <NavItem>
          <Navlink as={Link} href="#">
            Features
          </Navlink>
          <Navlink as={Link} href="#">
            About
          </Navlink>

          <Navlink as={Link} href="#">
            Blog
          </Navlink>
          <Navlink as={Link} href="/tb">
            Third Bracket
          </Navlink>
          <Navlink as={Link} href="/contact">
            Contact
          </Navlink>
          <ThemeToggle />
        </NavItem>
        {/* <div className="md:hidden">
          {" "}
          <ThemeToggle />
        </div> */}
        <MobileNav>
          <Navlink as={Link} href="#" isDropdownItem>
            UI/UX Design & Prototyping
          </Navlink>
          <Navlink as={Link} href="#" isDropdownItem>
            Performance Optimization
          </Navlink>
          <Navlink as={Link} href="#" isDropdownItem>
            Other Services
          </Navlink>

          <Navlink as={Link} href="/tb">
            Blog
          </Navlink>
          <Navlink as={Link} href="/contact">
            Contact
          </Navlink>
        </MobileNav>
      </Navbar>
    </header>
  );
}
