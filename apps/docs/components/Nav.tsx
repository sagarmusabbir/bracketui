import {
  Button,
  Megamenu,
  MobileNav,
  Navbar,
  Navbrand,
  NavItem,
  Navlink,
} from "@thirdbracket/bracketui";

import Link from "next/link";
import { FC } from "react";

import { RiArrowRightUpLine, RiRecycleLine } from "react-icons/ri";

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
        <Navlink as={Link} href="#">
          Features
        </Navlink>
        <Navlink as={Link} href="#">
          About
        </Navlink>
        <Megamenu label="Solutions">
          <div className="p-0.5">
            <Megamenu label="Development" isDropdownItem>
              <div className="px-1">
                <Navlink as={Link} href="#" isDropdownItem>
                  Custom Next.js
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Headless Integration
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Feature Development
                </Navlink>
                <Navlink
                  as={Link}
                  href="/services/fullstack/performance"
                  isDropdownItem
                >
                  API & Backend
                </Navlink>
                <Navlink
                  as={Link}
                  href="/services/fullstack/performance"
                  isDropdownItem
                >
                  UI Develepment
                </Navlink>
                <Navlink
                  as={Link}
                  href="/services/fullstack/performance"
                  isDropdownItem
                >
                  Wordpress Development
                </Navlink>
              </div>
            </Megamenu>
            <Megamenu label="Infrastructures" isDropdownItem>
              <div className="px-1">
                <Navlink as={Link} href="#" isDropdownItem>
                  Serverless Configuration
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  AWS Infrastructures
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Wordpress Optimization
                </Navlink>
                <Navlink
                  as={Link}
                  href="/services/fullstack/performance"
                  isDropdownItem
                >
                  VPS Setup
                </Navlink>
                <Navlink
                  as={Link}
                  href="/services/fullstack/performance"
                  isDropdownItem
                >
                  Cloud Migration
                </Navlink>
              </div>
            </Megamenu>
            <Megamenu label="DevOps" isDropdownItem>
              <div className="px-1">
                <Navlink as={Link} href="#" isDropdownItem>
                  Edge Configuration
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  CI/CD & Workflow
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  AWS Serverless
                </Navlink>
                <Navlink
                  as={Link}
                  href="/services/fullstack/performance"
                  isDropdownItem
                >
                  Cloud Management
                </Navlink>
                <Navlink
                  as={Link}
                  href="/services/fullstack/performance"
                  isDropdownItem
                >
                  Release Management
                </Navlink>
                <Navlink
                  as={Link}
                  href="/services/fullstack/search-form"
                  isDropdownItem
                >
                  Cost Optimization
                </Navlink>
              </div>
            </Megamenu>
          </div>
        </Megamenu>
        <Navlink as={Link} href="#">
          Business
        </Navlink>
        <Navlink as={Link} href="#">
          Contact
        </Navlink>
        <div className="py-2 space-y-3 flex flex-col ">
          <Button variant="outline" size="md">
            BracketUI
            <span className="inline-flex items-center ml-2">
              <RiArrowRightUpLine />
            </span>
          </Button>
          <Button size="md">
            Our Ecosystem{" "}
            <span className="inline-flex items-center ml-2">
              <RiRecycleLine />
            </span>
          </Button>
        </div>
      </MobileNav>
    </Navbar>
  );
};
export default HeaderBal;
