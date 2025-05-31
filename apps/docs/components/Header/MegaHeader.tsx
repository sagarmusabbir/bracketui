"use client";
import {
  Navbar,
  Navbrand,
  Navlink,
  Megamenu,
  NavItem,
  MobileNav,
} from "@thirdbracket/bracketui";
import Image from "next/image";
import { GiServerRack } from "react-icons/gi";
import {
  MdBusiness,
  MdCloud,
  MdDesignServices,
  MdDeveloperMode,
} from "react-icons/md";
import { TbSeo } from "react-icons/tb";

const HeaderWithMegamenu = () => {
  return (
    <Navbar>
      <Navbrand logo="path.svg" className="dark:invert">
        <span className="font-bold">UI</span>
      </Navbrand>

      {/* Desktop Navigation */}
      <NavItem>
        <Megamenu label="Solutions">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-2">
            {/* Development Solutions */}
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white px-4 leading-tight">
                Solutions
              </h3>

              <div>
                <Navlink href="/mobile-development" isDropdownItem>
                  Serverless
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Headless Integration
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Custom Wordpress
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  VPS Setup
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Migration
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Infrastructure
                </Navlink>

                <Navlink href="/api-integration" isDropdownItem>
                  PaaS Integration
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Automation
                </Navlink>
              </div>
            </div>

            {/* Business Solutions */}
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white px-4 leading-tight">
                Business
              </h3>

              <div>
                <Navlink href="/api-integration" isDropdownItem>
                  Strategy
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Branding
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Lead Generation
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Analytics
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Digital Marketing
                </Navlink>
                <Navlink href="/mobile-development" isDropdownItem>
                  SEO
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Content Writing
                </Navlink>

                <Navlink href="/api-integration" isDropdownItem>
                  Social Media Marketing
                </Navlink>
              </div>
            </div>

            {/* Services*/}
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white px-4 leading-tight">
                Services
              </h3>

              <div>
                <Navlink href="/web-development" isDropdownItem>
                  Frontend
                </Navlink>
                <Navlink href="/mobile-development" isDropdownItem>
                  Backend
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Full-Stack
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Performance
                </Navlink>
                <Navlink href="/mobile-development" isDropdownItem>
                  UI/UX Design
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Web Interface Design
                </Navlink>

                <Navlink href="/api-integration" isDropdownItem>
                  Responsive Design
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Theme Development
                </Navlink>
              </div>
            </div>

            {/*Products*/}
            <div className="space-y-2">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white px-4 leading-tight">
                Products
              </h3>

              <div>
                <Navlink href="/web-development" isDropdownItem>
                  BracketUI
                </Navlink>
                <Navlink href="/mobile-development" isDropdownItem>
                  Npm Packages
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Design System
                </Navlink>
                <Navlink href="/mobile-development" isDropdownItem>
                  Next.js Themes
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  WordPress Themes
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  E-commerce Templates
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Hugo Theme
                </Navlink>
              </div>
            </div>

            {/* Featured Section */}
            <div className="space-y-4 bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                Featured Resources
              </h3>
              <div className="space-y-4">
                <div className="aspect-video relative bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src="/logo.svg"
                    width={144}
                    height={30}
                    alt="Featured Resource"
                    className="object-contain w-full h-full dark:invert p-2"
                  />
                </div>
                <div className="space-y-2">
                  <Navlink href="/case-studies" isDropdownItem>
                    Case Studies
                  </Navlink>
                  <Navlink href="/documentation" isDropdownItem>
                    Documentation
                  </Navlink>
                </div>
              </div>
            </div>
          </div>
        </Megamenu>

        <Navlink href="/pricing">Pricing</Navlink>
        <Navlink href="/about">About</Navlink>
        <Navlink href="/contact">Contact</Navlink>
      </NavItem>

      {/* Mobile Navigation */}
      <MobileNav>
        <Megamenu label="Solutions">
          <div className="space-y-4">
            {/* Infrastructure Section */}
            <div>
              <h3 className="mb-2 text-sm  flex items-center gap-4   text-gray-500 dark:text-gray-400  ">
                <GiServerRack />
                <span>Infrastructure</span>
                <hr className="flex-grow border-[0.5px] border-gray-200/60 dark:border-gray-800/80 border-dashed mr-4" />
              </h3>
              <div className=" overflow-hidden  border-r-[0.5px] border-gray-200 dark:border-gray-800 border-dashed">
                <Navlink href="/serverless" isDropdownItem>
                  Serverless
                </Navlink>
                <Navlink href="/headless" isDropdownItem>
                  Headless Integration
                </Navlink>
                <Navlink href="/wordpress" isDropdownItem>
                  Custom Wordpress
                </Navlink>
                <Navlink href="/vps" isDropdownItem>
                  VPS Setup
                </Navlink>
                <Navlink href="/migration" isDropdownItem>
                  Migration
                </Navlink>
              </div>
            </div>

            {/* Cloud Section */}
            <div>
              <h3 className="mb-2 text-sm  flex items-center gap-4   text-gray-500 dark:text-gray-400">
                <MdCloud />
                <span>Cloud</span>
                <hr className="flex-grow border-[0.5px] border-gray-200/60 dark:border-gray-800/80 border-dashed mr-4" />
              </h3>
              <div className=" overflow-hidden  border-r-[0.5px] border-gray-200 dark:border-gray-800 border-dashed">
                <Navlink href="/aws" isDropdownItem>
                  AWS Infrastructure
                </Navlink>
                <Navlink href="/serverless-arch" isDropdownItem>
                  Serverless Architecture
                </Navlink>
                <Navlink href="/server-management" isDropdownItem>
                  Server Management
                </Navlink>
                <Navlink href="/paas" isDropdownItem>
                  PaaS Integration
                </Navlink>
                <Navlink href="/automation" isDropdownItem>
                  Automation
                </Navlink>
              </div>
            </div>

            {/* Cloud Section */}
            <div>
              <h3 className="mb-2 text-sm  flex items-center gap-4   text-gray-500 dark:text-gray-400">
                <MdBusiness />
                <span>Business</span>
                <hr className="flex-grow border-[0.5px] border-gray-200/60 dark:border-gray-800/80 border-dashed mr-4" />
              </h3>
              <div className=" overflow-hidden  border-r-[0.5px] border-gray-200 dark:border-gray-800 border-dashed">
                <Navlink href="/consulting" isDropdownItem>
                  Consulting
                </Navlink>
                <Navlink href="/strategy" isDropdownItem>
                  Strategy
                </Navlink>
                <Navlink href="/brand-development" isDropdownItem>
                  Brand Development
                </Navlink>
                <Navlink href="/lead-generation" isDropdownItem>
                  Lead Generation
                </Navlink>
                <Navlink href="/analytics" isDropdownItem>
                  Analytics
                </Navlink>
              </div>
            </div>

            {/* Cloud Section */}
            <div>
              <h3 className="mb-2 text-sm  flex items-center gap-4   text-gray-500 dark:text-gray-400">
                <MdBusiness />
                <span>Business</span>
                <hr className="flex-grow border-[0.5px] border-gray-200/60 dark:border-gray-800/80 border-dashed mr-4" />
              </h3>
              <div className=" overflow-hidden  border-r-[0.5px] border-gray-200 dark:border-gray-800 border-dashed">
                <Navlink href="/consulting" isDropdownItem>
                  Consulting
                </Navlink>
                <Navlink href="/strategy" isDropdownItem>
                  Strategy
                </Navlink>
                <Navlink href="/brand-development" isDropdownItem>
                  Brand Development
                </Navlink>
                <Navlink href="/lead-generation" isDropdownItem>
                  Lead Generation
                </Navlink>
                <Navlink href="/analytics" isDropdownItem>
                  Analytics
                </Navlink>
              </div>
            </div>
          </div>
        </Megamenu>

        <Megamenu label="Services">
          <div className="space-y-4">
            {/* Cloud Section */}
            <div>
              <h3 className="mb-2 text-sm  flex items-center gap-4   text-gray-500 dark:text-gray-400">
                <MdDeveloperMode />
                <span>Development</span>
                <hr className="flex-grow border-[0.5px] border-gray-200/60 dark:border-gray-800/80 border-dashed mr-4" />
              </h3>
              <div className=" overflow-hidden  border-r-[0.5px] border-gray-200 dark:border-gray-800 border-dashed">
                <Navlink href="/frontend" isDropdownItem>
                  Frontend
                </Navlink>
                <Navlink href="/backend" isDropdownItem>
                  Backend
                </Navlink>
                <Navlink href="/fullstack" isDropdownItem>
                  Full-Stack
                </Navlink>
                <Navlink href="/performance" isDropdownItem>
                  Performance Optimization
                </Navlink>
              </div>
            </div>

            {/* Cloud Section */}
            <div>
              <h3 className="mb-2 text-sm  flex items-center gap-4   text-gray-500 dark:text-gray-400">
                <MdDesignServices />
                <span>UI/UX</span>
                <hr className="flex-grow border-[0.5px] border-gray-200/60 dark:border-gray-800/80 border-dashed mr-4" />
              </h3>
              <div className=" overflow-hidden  border-r-[0.5px] border-gray-200 dark:border-gray-800 border-dashed">
                <Navlink href="/ui-design" isDropdownItem>
                  UI/UX Design
                </Navlink>
                <Navlink href="/web-interface" isDropdownItem>
                  Web Interface Design
                </Navlink>
                <Navlink href="/responsive" isDropdownItem>
                  Responsive Design
                </Navlink>
                <Navlink href="/theme-dev" isDropdownItem>
                  Theme Development
                </Navlink>
              </div>
            </div>

            {/* Cloud Section */}
            <div>
              <h3 className="mb-2 text-sm  flex items-center gap-4    text-gray-500 dark:text-gray-400">
                <TbSeo />
                <span>Digital Marketing</span>
                <hr className="flex-grow border-[0.5px] border-gray-200/60 dark:border-gray-800/80 border-dashed mr-4" />
              </h3>
              <div className=" overflow-hidden  border-r-[0.5px] border-gray-200 dark:border-gray-800 border-dashed">
                <Navlink href="/ui-design" isDropdownItem>
                  UI/UX Design
                </Navlink>
                <Navlink href="/web-interface" isDropdownItem>
                  Web Interface Design
                </Navlink>
                <Navlink href="/responsive" isDropdownItem>
                  Responsive Design
                </Navlink>
                <Navlink href="/theme-dev" isDropdownItem>
                  Theme Development
                </Navlink>
              </div>
            </div>
          </div>
        </Megamenu>

        <Navlink href="/pricing">Pricing</Navlink>
        <Navlink href="/about">About</Navlink>
        <Navlink href="/contact">Contact</Navlink>
      </MobileNav>
    </Navbar>
  );
};

export default HeaderWithMegamenu;
