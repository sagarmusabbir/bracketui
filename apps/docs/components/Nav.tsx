import {
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
import { BiChevronRight } from "react-icons/bi";

// import { RiArrowRightUpLine, RiRecycleLine } from "react-icons/ri";

const HeaderBal: FC = () => {
  return (
    <Navbar>
      <Navbrand
        logo={
          <Image
            src="/22.svg"
            alt=""
            width={512}
            height={430}
            className="sm:h-6 h-5     w-auto dark:invert"
          />
        }
        href="/"
      >
        <span className="sm:text-2xl  text-xl font-medium   text-gray-950 dark:text-white">
          <span className="font-light">THIRD</span>BRACKET
        </span>
        {/* <Image
          src="/path.svg"
          alt=""
          width={120}
          height={27}
          className="h-4 sm:h-5    w-auto dark:invert"
        /> */}
      </Navbrand>

      <NavItem>
        <Navlink as={Link} href="#">
          Features
        </Navlink>
        <Navlink as={Link} href="#">
          About
        </Navlink>
        <Megamenu label="Solutions">
          <div className="grid w-full grid-flow-col gap-x-8 grid-cols-[repeat(4,minmax(100px,1fr))_300px]">
            <div className="flex flex-col h-full ">
              <div className="mb-4">
                <h3 className="text-xs leading-none text-gray-500">
                  Explore Solutions
                </h3>
              </div>
              <div className="flex flex-col space-y-2 ">
                <Navlink href="#" as={Link} cto>
                  Development
                </Navlink>
                <Navlink href="#" as={Link} cto>
                  Infeastructures
                </Navlink>
                <Navlink href="#" as={Link} cto>
                  DevOps
                </Navlink>
              </div>
              <div className="flex-grow"></div>

              <div className=" mt-4 ">
                <Navlink
                  as={Link}
                  href="#"
                  className="block md:inline-flex md:items-center gap-1"
                  isDropdownItem
                >
                  Explore All
                  <span>
                    <BiChevronRight
                      className="inline-flex items-center"
                      size={20}
                    />
                  </span>
                </Navlink>
              </div>
            </div>
            <div className="flex flex-col h-full">
              <div className="mb-4">
                <h3 className="text-xs leading-none text-gray-500">
                  Development
                </h3>
              </div>
              <div className="flex flex-col space-y-1">
                <Navlink as={Link} href="#" isDropdownItem>
                  Custom Next.js
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Headless Integration
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Feature Development
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  API & Backend
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  UI Develepment
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Wordpress Development
                </Navlink>
              </div>
              <div className="flex-grow"></div>
              <div className=" mt-4 ">
                <Navlink
                  as={Link}
                  href="#"
                  className="block md:inline-flex md:items-center gap-1"
                  isDropdownItem
                >
                  More
                  <span>
                    <BiChevronRight
                      className="inline-flex items-center"
                      size={20}
                    />
                  </span>
                </Navlink>
              </div>
            </div>

            <div className="flex flex-col h-full ">
              <div className="mb-4">
                <h3 className="text-xs leading-none text-gray-500">
                  Infrastructures
                </h3>{" "}
              </div>
              <div className="flex flex-col space-y-1">
                <Navlink as={Link} href="#" isDropdownItem>
                  Serverless Configuration
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  AWS Infrastructures
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Wordpress Optimization
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  VPS Setup
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Cloud Migration
                </Navlink>
              </div>
              <div className="flex-grow"></div>
              <div className=" mt-4 ">
                <Navlink
                  as={Link}
                  href="#"
                  className="block md:inline-flex md:items-center gap-1"
                  isDropdownItem
                >
                  More
                  <span>
                    <BiChevronRight
                      className="inline-flex items-center"
                      size={20}
                    />
                  </span>
                </Navlink>
              </div>
            </div>

            <div className="flex flex-col h-full ">
              <div className="flex flex-col space-y-1">
                <h3 className="text-xs leading-none text-gray-500">DevOps</h3>
              </div>
              <div className="flex flex-col space-y-1 py-4">
                <Navlink as={Link} href="#" isDropdownItem>
                  Edge Configuration
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  CI/CD & Workflow
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  AWS Serverless
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Cloud Management
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Release Management
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Cost Optimization
                </Navlink>
              </div>
              <div className="flex-grow"></div>
              <div className="mt-4 ">
                <Navlink
                  isDropdownItem
                  as={Link}
                  href="#"
                  className="block md:inline-flex md:items-center gap-1"
                >
                  More
                  <span>
                    <BiChevronRight
                      className="inline-flex items-center"
                      size={20}
                    />
                  </span>
                </Navlink>
              </div>
            </div>
            <div className="w-[300px] flex flex-col h-full">
              {/* <div className="flex flex-col space-y-1">
                <h3 className="text-xs leading-none text-gray-500">DevOps</h3>
              </div> */}
              {/* <div className="flex flex-col space-y-1 py-4">
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
              </div> */}
              <div className="flex-grow"></div>
              <div className="mt-4 ">
                <Card href="#">
                  <Image
                    src="logo.svg"
                    alt=""
                    width={144}
                    height={30}
                    className="dark:invert"
                  ></Image>
                </Card>
              </div>
            </div>
          </div>
        </Megamenu>

        <Megamenu label="Services">
          <div className=" space-y-3">
            <Megamenu label="Frontend & UI" isDropdownItem>
              <div className=" space-y-3">
                <Navlink as={Link} href="#" isDropdownItem>
                  Custom React & Next.js
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Tailwindcss & Headless UI
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Custom SVG & Icons
                </Navlink>

                <Navlink as={Link} href="#" isDropdownItem>
                  Themeing Solution
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Animations
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  UI/UX Enhancement
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Wordpress Theme Development
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Elementor Template
                </Navlink>
              </div>
            </Megamenu>
            <Megamenu label="Backend & API" isDropdownItem>
              <div className=" space-y-3">
                <Navlink as={Link} href="#" isDropdownItem>
                  Next.js API Routes
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Node.js
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  GraphQL
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Serverless Function
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  API Integration
                </Navlink>
              </div>
            </Megamenu>
            <Navlink as={Link} href="#" isDropdownItem>
              Cloud Deployment
            </Navlink>
            <Navlink as={Link} href="#" isDropdownItem>
              Github Actions
            </Navlink>
            <Navlink as={Link} href="#" isDropdownItem>
              Authenctication
            </Navlink>
            <Navlink as={Link} href="#" isDropdownItem>
              Payment Setup
            </Navlink>
          </div>
        </Megamenu>
        <Megamenu label="Business">
          <div className=" space-y-3">
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
          <div className=" space-y-3">
            <Megamenu label="UI Components" isDropdownItem>
              <div className=" space-y-3">
                <Navlink as={Link} href="#" isDropdownItem>
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
              <div className="space-y-2">
                <Navlink as={Link} href="#" isDropdownItem>
                  Wordpress Themes
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Tailwind Themes
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Next.js Themes
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Hugo Themes
                </Navlink>
              </div>
            </Megamenu>
            <Megamenu label="Templates" isDropdownItem>
              <div className=" space-y-3">
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
      </NavItem>
      <MobileNav>
        <div className="">
          <Megamenu label="Web Development">
            <div>
              <Navlink as={Link} href="#" isDropdownItem>
                Next.js Development
              </Navlink>
              <Navlink as={Link} href="#" isDropdownItem>
                WordPress Development
              </Navlink>
              <Navlink as={Link} href="#" isDropdownItem>
                Headless & Serverless Solutions
              </Navlink>
              <Navlink as={Link} href="#" isDropdownItem>
                Custom Backend & API Development
              </Navlink>
              <Navlink as={Link} href="#" isDropdownItem>
                UI/UX Design & Prototyping
              </Navlink>
              <Navlink as={Link} href="#" isDropdownItem>
                Performance Optimization
              </Navlink>
              <Navlink as={Link} href="#" isDropdownItem>
                Other
              </Navlink>
            </div>
          </Megamenu>

          <Megamenu label="Business Solutions">
            <div>
              <Navlink as={Link} href="#" isDropdownItem>
                Business 360
              </Navlink>
              <Navlink as={Link} href="#" isDropdownItem>
                SEO & Web Visibility
              </Navlink>
              <Navlink as={Link} href="#" isDropdownItem>
                Branding & Design
              </Navlink>
              <Navlink as={Link} href="#" isDropdownItem>
                Social Media Marketing
              </Navlink>
              <Navlink as={Link} href="#" isDropdownItem>
                PPC & Social Ad
              </Navlink>
              <Navlink as={Link} href="#" isDropdownItem>
                Content strategy & Copywriting
              </Navlink>
              <Navlink as={Link} href="#" isDropdownItem>
                Other
              </Navlink>
            </div>
          </Megamenu>

          <Navlink as={Link} href="#">
            About
          </Navlink>

          <Megamenu label="Resources">
            <div>
              <Megamenu label="UI Components" isDropdownItem>
                <div>
                  <Navlink as={Link} href="#" isDropdownItem>
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
                <div>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Wordpress Themes
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Tailwind Themes
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Next.js Themes
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Hugo Themes
                  </Navlink>
                </div>
              </Megamenu>
              <Megamenu label="Templates" isDropdownItem>
                <div>
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
            Blog
          </Navlink>
          <Navlink as={Link} href="#">
            Contact
          </Navlink>
        </div>
      </MobileNav>
    </Navbar>
  );
};
export default HeaderBal;
