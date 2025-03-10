import {
  Megamenu,
  MobileNav,
  Navbar,
  Navbrand,
  NavItem,
  Navlink,
  ThemeToggle,
} from "@thirdbracket/bracketui";
import Image from "next/image";

import Link from "next/link";
import { FC } from "react";
import { BiChevronRight } from "react-icons/bi";
import { Logo } from "../icons";

// import { RiArrowRightUpLine, RiRecycleLine } from "react-icons/ri";

const Header: FC = () => {
  return (
    <header>
      <Navbar>
        <Navbrand logo={<Logo />} href="/">
          {/* <span className="text-[22px] sm:text-2xl font-medium   text-gray-950 dark:text-white">
          <span className="font-light">THIRD</span>BRACKET
        </span> */}
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
                    Explore Components & Sections
                  </h3>
                </div>
                <div className="flex flex-col space-y-2 ">
                  <Navlink href="#" as={Link} cto>
                    Components
                  </Navlink>
                  <Navlink href="#" as={Link} cto>
                    Sections
                  </Navlink>
                  <Navlink href="#" as={Link} cto>
                    Hooks & Library
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
                    Components
                  </h3>
                </div>
                <div className="flex flex-col space-y-1">
                  <Navlink as={Link} href="#" isDropdownItem>
                    Buttons
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Cards
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Footers
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Navbar
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Form
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Layout
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    ThemeToggle
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
                    Sections
                  </h3>{" "}
                </div>
                <div className="flex flex-col space-y-1">
                  <Navlink as={Link} href="#" isDropdownItem>
                    Hero Sections
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Header Sections
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Newsletter Sections
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Footer Sections
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Feature Sections
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
                  <h3 className="text-xs leading-none text-gray-500">
                    Hooks & Libraries
                  </h3>
                </div>
                <div className="flex flex-col space-y-1 py-4">
                  <Navlink as={Link} href="#" isDropdownItem>
                    Theme
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Layout
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    Megamenu
                  </Navlink>
                  <Navlink as={Link} href="#" isDropdownItem>
                    ThemeToggle
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
                <div className="flex-grow"></div>
                <div className="mt-4 ">
                  <Image
                    src="11.svg"
                    alt=""
                    width={512}
                    height={512}
                    className="dark:invert h-52 w-auto"
                  ></Image>
                </div>
              </div>
            </div>
          </Megamenu>

          <Navlink as={Link} href="#">
            Blog
          </Navlink>
          <Navlink as={Link} href="/tb">
            Third Bracket
          </Navlink>
          <Navlink as={Link} href="#">
            Contact
          </Navlink>
          <ThemeToggle />
        </NavItem>
        {/* <div className="md:hidden">
          {" "}
          <ThemeToggle />
        </div> */}
        <MobileNav>
          <div className="space-y-2 py-1.5">
            <Megamenu label="Services">
              <div className="space-y-2 py-1.5">
                <Megamenu label="Web Development">
                  <div className="space-y-2 py-1.5">
                    <Navlink as={Link} href="#" isDropdownItem>
                      Next.js Development
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      WordPress Development
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Headless & Serverles
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Custom Backend & API Development
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Other Development Services
                    </Navlink>
                  </div>
                </Megamenu>
                <Megamenu label="Digital Marketing">
                  <div className="space-y-2 py-1.5">
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
                      Other Digital Marketing Services
                    </Navlink>
                  </div>
                </Megamenu>
                <Navlink as={Link} href="#" isDropdownItem>
                  UI/UX Design & Prototyping
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Performance Optimization
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Other Services
                </Navlink>
              </div>
            </Megamenu>

            <Megamenu label="Solutions">
              <div className="space-y-2 py-1.5">
                <Navlink as={Link} href="#" isDropdownItem>
                  Wordpress 360
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Notion Blog
                </Navlink>
                <Navlink as={Link} href="#" isDropdownItem>
                  Business 360
                </Navlink>
                <Megamenu label="Automation & Integration">
                  <div className="space-y-2 py-1.5">
                    <Navlink as={Link} href="#" isDropdownItem>
                      Form Integration
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Marketing Automation
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Search Integration
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Interntionalization
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      CI/CD
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Release Automation
                    </Navlink>
                  </div>
                </Megamenu>
                <Megamenu label="UI/UX">
                  <div className="space-y-2 py-1.5">
                    <Navlink as={Link} href="#" isDropdownItem>
                      Bracket UI
                    </Navlink>
                    <Megamenu label="Templates">
                      <div className="space-y-2 py-1.5">
                        <Navlink as={Link} href="#" isDropdownItem>
                          Elementor Template
                        </Navlink>
                        <Navlink as={Link} href="#" isDropdownItem>
                          Tailwind Template
                        </Navlink>
                        <Navlink as={Link} href="#" isDropdownItem>
                          Html5 Template
                        </Navlink>
                      </div>
                    </Megamenu>
                    <Megamenu label="Themes">
                      <div className="space-y-2 py-1.5">
                        <Navlink as={Link} href="#" isDropdownItem>
                          Nextjs Themes
                        </Navlink>
                        <Navlink as={Link} href="#" isDropdownItem>
                          Hugo Themes
                        </Navlink>
                        <Navlink as={Link} href="#" isDropdownItem>
                          Wordpress Theme
                        </Navlink>
                      </div>
                    </Megamenu>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Reusable Blocks
                    </Navlink>
                    <Navlink as={Link} href="#" isDropdownItem>
                      Landing Pages
                    </Navlink>
                  </div>
                </Megamenu>
              </div>
            </Megamenu>

            <Navlink as={Link} href="#">
              Case Studies
            </Navlink>
            <Navlink as={Link} href="/tb">
              Third Bracket
            </Navlink>
            <Navlink as={Link} href="/tb">
              About
            </Navlink>
            <Navlink as={Link} href="/tb">
              Blog
            </Navlink>
            <Navlink as={Link} href="#">
              Contact
            </Navlink>
          </div>
        </MobileNav>
      </Navbar>
    </header>
  );
};
export default Header;
