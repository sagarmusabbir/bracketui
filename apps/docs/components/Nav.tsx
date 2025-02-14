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
        <div className="space-y-2">
          <Navlink as={Link} href="/services/fullstack/performance">
            Features
          </Navlink>
          <Navlink as={Link} href="#">
            About
          </Navlink>
          <Megamenu label="Solutions">
            <div className="p-0.5 py-2 space-y-1">
              <Megamenu label="Development" isDropdownItem>
                <div className="px-1 py-1 space-y-1">
                  <Navlink
                    as={Link}
                    href="/services/fullstack/performance"
                    isDropdownItem
                  >
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
                <div className="px-1 py-1 space-y-1">
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
                <div className="px-1 py-1 space-y-1">
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

          <Megamenu label="Services">
            <div className="p-0.5 py-2 space-y-1">
              <Megamenu label="Frontend & UI" isDropdownItem>
                <div className="px-1 py-1 space-y-1">
                  <Navlink
                    as={Link}
                    href="/services/fullstack/performance"
                    isDropdownItem
                  >
                    Custom React & Next.js
                  </Navlink>
                  <Navlink
                    as={Link}
                    href="/services/fullstack/performance"
                    isDropdownItem
                  >
                    Tailwindcss & Headless UI
                  </Navlink>
                  <Navlink
                    as={Link}
                    href="/services/fullstack/performance"
                    isDropdownItem
                  >
                    Custom SVG & Icons
                  </Navlink>

                  <Navlink
                    as={Link}
                    href="/services/fullstack/performance"
                    isDropdownItem
                  >
                    Themeing Solution
                  </Navlink>
                  <Navlink
                    as={Link}
                    href="/services/fullstack/performance"
                    isDropdownItem
                  >
                    Animations
                  </Navlink>
                  <Navlink
                    as={Link}
                    href="/services/fullstack/performance"
                    isDropdownItem
                  >
                    UI/UX Enhancement
                  </Navlink>
                  <Navlink
                    as={Link}
                    href="/services/fullstack/performance"
                    isDropdownItem
                  >
                    Wordpress Theme Development
                  </Navlink>
                  <Navlink
                    as={Link}
                    href="/services/fullstack/performance"
                    isDropdownItem
                  >
                    Elementor Template
                  </Navlink>
                </div>
              </Megamenu>
              <Megamenu label="Backend & API" isDropdownItem>
                <div className="px-1 py-1 space-y-1">
                  <Navlink as={Link} href="#" isDropdownItem>
                    Next.js API Routes
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Node.js
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    GraphQL
                  </Navlink>
                  <Navlink
                    as={Link}
                    href="/services/fullstack/performance"
                    isDropdownItem
                  >
                    Serverless Function
                  </Navlink>
                  <Navlink
                    as={Link}
                    href="/services/fullstack/performance"
                    isDropdownItem
                  >
                    API Integration
                  </Navlink>
                </div>
              </Megamenu>
              <Navlink
                as={Link}
                href="/services/fullstack/performance"
                isDropdownItem
              >
                Cloud Deployment
              </Navlink>
              <Navlink
                as={Link}
                href="/services/fullstack/performance"
                isDropdownItem
              >
                Github Actions
              </Navlink>
              <Navlink
                as={Link}
                href="/services/fullstack/performance"
                isDropdownItem
              >
                Authenctication
              </Navlink>
              <Navlink
                as={Link}
                href="/services/fullstack/performance"
                isDropdownItem
              >
                Payment Setup
              </Navlink>
            </div>
          </Megamenu>
          <Megamenu label="Business">
            <div className="p-0.5 py-2 space-y-1">
              <Navlink as={Link} href="#" isDropdownItem>
                SEO & Content
              </Navlink>
              <Navlink as={Link} href="#" isDropdownItem>
                Social Media Management
              </Navlink>
              <Navlink as={Link} href="#" isDropdownItem>
                Paid Ad & PPC
              </Navlink>
              <Navlink as={Link} href="#" isDropdownItem>
                Email Marketing
              </Navlink>
              <Navlink as={Link} href="#" isDropdownItem>
                Branding
              </Navlink>
              <Navlink as={Link} href="#" isDropdownItem>
                Conversion Optimization
              </Navlink>
            </div>
          </Megamenu>

          <Megamenu label="Resources">
            <div className="p-0.5 py-2 space-y-1">
              <Megamenu label="UI Components" isDropdownItem>
                <div className="px-1 py-1 space-y-1">
                  <Navlink
                    as={Link}
                    href="/services/fullstack/performance"
                    isDropdownItem
                  >
                    Bracket UI Component
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Bracket UI Block
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Bracket UI Npm Package
                  </Navlink>
                </div>
              </Megamenu>
              <Megamenu label="Themes" isDropdownItem>
                <div className="px-1 py-1 space-y-1">
                  <Navlink as={Link} href="#" isDropdownItem>
                    Wordpress Themes
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Tailwind Themes
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Next.js Themes
                  </Navlink>
                  <Navlink
                    as={Link}
                    href="/services/fullstack/performance"
                    isDropdownItem
                  >
                    Hugo Themes
                  </Navlink>
                </div>
              </Megamenu>
              <Megamenu label="Templates" isDropdownItem>
                <div className="px-1 py-1 space-y-1">
                  <Navlink as={Link} href="#" isDropdownItem>
                    Elementor Templates
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Tailwind Templates
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    HTML5 Templates
                  </Navlink>
                </div>
              </Megamenu>
            </div>
          </Megamenu>
          <Navlink as={Link} href="#">
            Contact
          </Navlink>
          <div className="py-2.5 space-y-3 flex flex-col ">
            <Button variant="outline" size="md">
              Bracket UI
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
        </div>
      </MobileNav>
    </Navbar>
  );
};
export default HeaderBal;
