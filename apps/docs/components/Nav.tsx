import {
  Button,
  Card,
  Megamenu,
  MobileNav,
  Navbar,
  Navbrand,
  NavItem,
  Navlink,
} from "@thirdbracket/bracketui";
import Image from "next/image";

import Link from "next/link";
import { FC } from "react";
import { AiOutlineSolution } from "react-icons/ai";
import { BiChevronRight, BiCode } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";
import { FaCodeCommit } from "react-icons/fa6";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { PiStackSimpleLight } from "react-icons/pi";

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
        <Navlink as={Link} href="/services/fullstack/performance">
          Features
        </Navlink>
        <Navlink as={Link} href="#">
          About
        </Navlink>
        <Megamenu label="Solutions">
          <div className="grid grid-cols-5 gap-8 ">
            <div className="space-y-6">
              <h3 className="text-sm text-gray-500 flex items-center gap-1">
                <span>
                  <AiOutlineSolution />
                </span>
                Explore Solutions
              </h3>
              <div className="space-y-2">
                <Navlink
                  cto
                  as={Link}
                  href="/services/wordpress/customization"
                  className="group flex items-center justify-start"
                >
                  Development
                  <MdOutlineArrowForwardIos className="size-4 opacity-0 group-hover:opacity-100 translate-x-0.5 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
                </Navlink>
                <Navlink
                  cto
                  as={Link}
                  href="/services/wordpress/customization"
                  className="group flex items-center justify-start"
                >
                  Infrastructures
                  <MdOutlineArrowForwardIos className="size-4 opacity-0 group-hover:opacity-100 translate-x-0.5 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
                </Navlink>

                <Navlink
                  cto
                  as={Link}
                  href="/services/wordpress/customization"
                  className="group flex items-center justify-start"
                >
                  DevOps
                  <MdOutlineArrowForwardIos className="size-4 opacity-0 group-hover:opacity-100 translate-x-0.5 group-hover:translate-x-1 transition-all duration-300 ease-in-out" />
                </Navlink>
              </div>
              <Navlink href="#" className="flex items-center gap-1 py-3 ">
                <Image
                  src="/path.svg"
                  width={120}
                  height={27}
                  className="h-2 w-auto grayscale filter drop-shadow dark:invert"
                  alt=""
                />
                <span className="text-[8px] font-light">UI</span>
                <span>
                  <BsArrowUpRight className="size-2" />
                </span>
              </Navlink>
            </div>
            <div className="space-y-3 flex-col justify-between">
              <h3 className="text-sm text-gray-500 flex items-center gap-1 ">
                <span>
                  <BiCode />
                </span>
                Development
              </h3>
              <div>
                <Navlink
                  as={Link}
                  href="/services/fullstack/react-next"
                  isDropdownItem
                >
                  React/Next.js
                </Navlink>
                <Navlink
                  as={Link}
                  href="/services/fullstack/api-backend"
                  isDropdownItem
                >
                  API & Backend
                </Navlink>
                <Navlink
                  as={Link}
                  href="/services/fullstack/search-form"
                  isDropdownItem
                >
                  Search & Form Integrations
                </Navlink>
                <Navlink
                  as={Link}
                  href="/services/fullstack/performance"
                  isDropdownItem
                >
                  Performance Optimization
                </Navlink>
              </div>
              <Navlink
                as={Link}
                href="/services/fullstack/performance"
                className="group flex items-center font-medium"
              >
                More
                <span>
                  <BiChevronRight />
                </span>
              </Navlink>
            </div>
            <div className="space-y-3 flex-col justify-between">
              <h3 className="text-sm text-gray-500 flex items-center gap-1">
                <span>
                  <PiStackSimpleLight />
                </span>
                Infrastructures
              </h3>
              <div>
                <Navlink
                  as={Link}
                  href="/services/fullstack/react-next"
                  isDropdownItem
                >
                  Headless Solution
                </Navlink>
                <Navlink
                  as={Link}
                  href="/services/fullstack/api-backend"
                  isDropdownItem
                >
                  AWS System
                </Navlink>
                <Navlink
                  as={Link}
                  href="/services/fullstack/search-form"
                  isDropdownItem
                >
                  Custom Wordpress
                </Navlink>
                <Navlink
                  as={Link}
                  href="/services/fullstack/performance"
                  isDropdownItem
                >
                  Serverless Setup
                </Navlink>
              </div>
              <Navlink
                as={Link}
                href="/services/fullstack/performance"
                className="group flex items-center font-medium"
              >
                More
                <span>
                  <BiChevronRight />
                </span>
              </Navlink>
            </div>
            <div className="space-y-3 flex-col justify-between">
              <h3 className="text-sm text-gray-500 flex items-center gap-1">
                <span>
                  <FaCodeCommit />
                </span>
                DevOps
              </h3>
              <div>
                <Navlink
                  as={Link}
                  href="/services/fullstack/react-next"
                  isDropdownItem
                >
                  Migration
                </Navlink>
                <Navlink
                  as={Link}
                  href="/services/fullstack/api-backend"
                  isDropdownItem
                >
                  Automation
                </Navlink>
                <Navlink
                  as={Link}
                  href="/services/fullstack/search-form"
                  isDropdownItem
                >
                  Edge Computing
                </Navlink>
              </div>
              <Navlink
                as={Link}
                href="/services/fullstack/performance"
                className="group flex items-center font-medium "
              >
                More
                <span>
                  <BiChevronRight />
                </span>
              </Navlink>
            </div>
            <div>
              <Card href="#" cover="tb.svg" header="">
                <div className="flex mt-6">
                  <Button size="sm" variant="outline">
                    Get Started Today
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </Megamenu>
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
