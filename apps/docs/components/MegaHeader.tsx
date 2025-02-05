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

const HeaderWithMegamenu = () => {
  return (
    <Navbar>
      <Navbrand logo="path.svg">
        <span className="font-bold">UI</span>
      </Navbrand>

      {/* Desktop Navigation */}
      <NavItem>
        <Navlink href="/">Home</Navlink>

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
        <Navlink href="/">Home</Navlink>

        <Megamenu label="Solutions">
          <div className="space-y-1 ">
            {/* Development Solutions */}

            <div className="py-1">
              <h3 className="pl-4  dark:text-gray-700 text-gray-400 flex items-center   mb-1">
                <span>Infrastructure</span>
                <hr className="ml-4 flex-grow border-[0.5px] border-gray-200 dark:border-gray-700  m-0" />
              </h3>
              <div className="pb-2 border-x border-b border-gray-200 dark:border-gray-700 ">
                <Navlink href="/web-development" isDropdownItem>
                  Serverless
                </Navlink>
                <Navlink href="/mobile-development" isDropdownItem>
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
              </div>
            </div>

            <div className="py-1">
              <h3 className="pl-4  dark:text-gray-700 text-gray-400 flex items-center   mb-1">
                <span>Cloud</span>
                <hr className="ml-4 flex-grow border-[0.5px] border-gray-200 dark:border-gray-700  m-0" />
              </h3>
              <div className="pb-2 border-x border-b border-gray-200 dark:border-gray-700 ">
                <Navlink href="/mobile-development" isDropdownItem>
                  AWS Infrastructure
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Serverless Architecture
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Server Management
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  PaaS Integration
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Automation
                </Navlink>
              </div>
            </div>

            <div className="py-1">
              <h3 className="pl-4  dark:text-gray-700 text-gray-400 flex items-center   mb-1">
                <span>Business</span>
                <hr className="ml-4 flex-grow border-[0.5px] border-gray-200 dark:border-gray-700  m-0" />
              </h3>
              <div className="pb-2 border-x border-b border-gray-200 dark:border-gray-700 ">
                <Navlink href="/mobile-development" isDropdownItem>
                  Consulting
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Strategy
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Brand Development
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Lead Generation
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Analytics
                </Navlink>
              </div>
            </div>
          </div>
        </Megamenu>

        <Megamenu label="Services">
          <div className="space-y-1 ">
            {/* Development Solutions */}

            <div className="py-1">
              <h3 className="pl-4  dark:text-gray-700 text-gray-400 flex items-center   mb-1">
                <span>Development</span>
                <hr className="ml-4 flex-grow border-[0.5px] border-gray-200 dark:border-gray-700  m-0" />
              </h3>
              <div className="pb-2 border-x border-b border-gray-200 dark:border-gray-700 ">
                <Navlink href="/web-development" isDropdownItem>
                  Frontend Development
                </Navlink>
                <Navlink href="/mobile-development" isDropdownItem>
                  Backend Development
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Full-Stack Development
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Performance Optimization
                </Navlink>
              </div>
            </div>

            <div className="py-1">
              <h3 className="pl-4  dark:text-gray-700 text-gray-400 flex items-center   mb-1">
                <span>UI/UX</span>
                <hr className="ml-4 flex-grow border-[0.5px] border-gray-200 dark:border-gray-700  m-0" />
              </h3>
              <div className="pb-2 border-x border-b border-gray-200 dark:border-gray-700 ">
                <Navlink href="/mobile-development" isDropdownItem>
                  UI/UX Design
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Web Interface Design
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Brand Identity Design
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Responsive Design
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Theme Development
                </Navlink>
              </div>
            </div>

            <div className="py-1">
              <h3 className="pl-4  dark:text-gray-700 text-gray-400 flex items-center   mb-1">
                <span>Digital Marketing</span>
                <hr className="ml-4 flex-grow border-[0.5px] border-gray-200 dark:border-gray-700  m-0" />
              </h3>
              <div className="pb-2 border-x border-b border-gray-200 dark:border-gray-700 ">
                <Navlink href="/mobile-development" isDropdownItem>
                  SEO
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Content Writing
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Blog
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Social Media Management
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Advertise
                </Navlink>
              </div>
            </div>

            <div className="py-1">
              <h3 className="pl-4  dark:text-gray-700 text-gray-400 flex items-center   mb-1">
                <span>Consulting</span>
                <hr className="ml-4 flex-grow border-[0.5px] border-gray-200 dark:border-gray-700  m-0" />
              </h3>
              <div className="pb-2 border-x border-b border-gray-200 dark:border-gray-700 ">
                <Navlink href="/mobile-development" isDropdownItem>
                  Technical Consultation
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Infrastructure Planning
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Digital Strategy
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Security Assessment
                </Navlink>
              </div>
            </div>
          </div>
        </Megamenu>

        <Megamenu label="Products">
          <div className="space-y-1 ">
            {/* Development Solutions */}

            <div className="py-1">
              <h3 className="pl-4  dark:text-gray-700 text-gray-400 flex items-center   mb-1">
                <span>UI Components</span>
                <hr className="ml-4 flex-grow border-[0.5px] border-gray-200 dark:border-gray-700  m-0" />
              </h3>
              <div className="pb-2 border-x border-b border-gray-200 dark:border-gray-700 ">
                <Navlink href="/web-development" isDropdownItem>
                  BracketUI Component Library
                </Navlink>
                <Navlink href="/mobile-development" isDropdownItem>
                  Custom UI Packages
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Design System
                </Navlink>
              </div>
            </div>

            <div className="py-1">
              <h3 className="pl-4  dark:text-gray-700 text-gray-400 flex items-center   mb-1">
                <span>Themes</span>
                <hr className="ml-4 flex-grow border-[0.5px] border-gray-200 dark:border-gray-700  m-0" />
              </h3>
              <div className="pb-2 border-x border-b border-gray-200 dark:border-gray-700 ">
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

            <div className="py-1">
              <h3 className="pl-4  dark:text-gray-700 text-gray-400 flex items-center   mb-1">
                <span>Tools & Utilities</span>
                <hr className="ml-4 flex-grow border-[0.5px] border-gray-200 dark:border-gray-700  m-0" />
              </h3>
              <div className="pb-2 border-x border-b border-gray-200 dark:border-gray-700 ">
                <Navlink href="/mobile-development" isDropdownItem>
                  Development Tools
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Automation Scripts
                </Navlink>
                <Navlink href="/api-integration" isDropdownItem>
                  Custom Packages
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
