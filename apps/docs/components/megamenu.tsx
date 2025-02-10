"use client";

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
import { AiOutlineSolution } from "react-icons/ai";
import { BiChevronsRight, BiCode } from "react-icons/bi";
import { BsArrowUpRight } from "react-icons/bs";

import { FaCodeCommit } from "react-icons/fa6";

import { MdOutlineArrowForwardIos } from "react-icons/md";
import { PiStackSimpleLight } from "react-icons/pi";

const MegaHeader = () => {
  return (
    <Navbar>
      {/* Brand Section */}
      <Navbrand
        logo="/path.svg"
        href="/"
        className="text-lg text-gray-950 dark:text-white font-bold dark:invert"
      >
        UI
      </Navbrand>

      {/* Desktop Navigation */}
      <NavItem>
        <Navlink as={Link} href="/features">
          Features
        </Navlink>

        <Megamenu label="Solutions">
          <div className="grid grid-cols-5 gap-8 ">
            <div className="space-y-3">
              <h3 className="text-sm text-gray-500 flex items-center gap-1">
                <span>
                  <AiOutlineSolution />
                </span>
                Explore Solutions
              </h3>
              <div>
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
            <div className="space-y-3">
              <h3 className="text-sm text-gray-500 flex items-center gap-1">
                <span>
                  <BiCode />
                </span>
                Development
              </h3>
              <div>
                <Navlink as={Link} href="/services/fullstack/react-next">
                  React/Next.js
                </Navlink>
                <Navlink as={Link} href="/services/fullstack/api-backend">
                  API & Backend
                </Navlink>
                <Navlink as={Link} href="/services/fullstack/search-form">
                  Search & Form Integrations
                </Navlink>
                <Navlink as={Link} href="/services/fullstack/performance">
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
                  <BiChevronsRight />
                </span>
              </Navlink>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm text-gray-500 flex items-center gap-1">
                <span>
                  <PiStackSimpleLight />
                </span>
                Infrastructures
              </h3>
              <div>
                <Navlink as={Link} href="/services/fullstack/react-next">
                  Headless Solution
                </Navlink>
                <Navlink as={Link} href="/services/fullstack/api-backend">
                  AWS System
                </Navlink>
                <Navlink as={Link} href="/services/fullstack/search-form">
                  Custom Wordpress
                </Navlink>
                <Navlink as={Link} href="/services/fullstack/performance">
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
                  <BiChevronsRight />
                </span>
              </Navlink>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm text-gray-500 flex items-center gap-1">
                <span>
                  <FaCodeCommit />
                </span>
                DevOps
              </h3>
              <div>
                <Navlink as={Link} href="/services/fullstack/react-next">
                  Migration
                </Navlink>
                <Navlink as={Link} href="/services/fullstack/api-backend">
                  Automation
                </Navlink>
                <Navlink as={Link} href="/services/fullstack/search-form">
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
                  <BiChevronsRight />
                </span>
              </Navlink>
            </div>
            <div>
              <Card href="#" cover="tb.svg" header="">
                <div className="flex mt-6">
                  <Button variant="outline">Get Started Today</Button>
                </div>
              </Card>
            </div>
          </div>
        </Megamenu>
        {/* Services Dropdown */}
        <Megamenu label="Services">
          <div className="grid grid-cols-5 gap-8 ">
            <div>
              <h3 className="text-sm font-semibold mb-1">WordPress</h3>
              <Navlink as={Link} href="/services/wordpress/customization">
                Customization
              </Navlink>
              <Navlink as={Link} href="/services/wordpress/theme-development">
                Theme Development
              </Navlink>
              <Navlink as={Link} href="/services/wordpress/bug-fixes">
                Bug Fixes
              </Navlink>
              <Navlink as={Link} href="/services/wordpress/maintenance">
                Maintenance
              </Navlink>
              <Navlink as={Link} href="/services/wordpress/custom">
                Custom WordPress
              </Navlink>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-1">Full Stack</h3>
              <Navlink as={Link} href="/services/fullstack/react-next">
                React/Next.js Development
              </Navlink>
              <Navlink as={Link} href="/services/fullstack/api-backend">
                API & Backend Development
              </Navlink>
              <Navlink as={Link} href="/services/fullstack/search-form">
                Search & Form Integrations
              </Navlink>
              <Navlink as={Link} href="/services/fullstack/performance">
                Performance Optimization
              </Navlink>
            </div>
            <div>
              <h3 className="text-sm font-semibold mb-1">Front-End</h3>
              <Navlink as={Link} href="/services/frontend/ui-ux">
                UI/UX Design
              </Navlink>
              <Navlink as={Link} href="/services/frontend/business-designs">
                Business Designs
              </Navlink>
              <Navlink as={Link} href="/services/frontend/social-media">
                Social Media Designs
              </Navlink>
            </div>
          </div>
        </Megamenu>
        <Megamenu label="Resources">
          <div className="grid grid-cols-3 gap-6 p-6">
            <div>
              <h3 className="text-sm font-semibold">Templates</h3>
              <Navlink as={Link} href="/resources/templates/elementor">
                Elementor Templates
              </Navlink>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Themes</h3>
              <Navlink as={Link} href="/resources/themes/wordpress">
                WordPress Themes
              </Navlink>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Packages & Library</h3>
              <Navlink as={Link} href="/resources/packages/bracketui">
                BracketUI Components
              </Navlink>
            </div>
          </div>
        </Megamenu>

        <Navlink as={Link} href="/about">
          About
        </Navlink>

        <Navlink as={Link} href="/contact">
          Contact
        </Navlink>

        {/* Resources Dropdown */}
      </NavItem>

      {/* Mobile Navigation */}
      <MobileNav>
        <Navlink as="Link" href="/features">
          Features
        </Navlink>
        <Megamenu label="Solutions">
          <div className="space-y-4 ">
            <div className="space-y-2">
              <h3 className="text-sm text-gray-500 flex items-center gap-1 py-1">
                <span>
                  <AiOutlineSolution />
                </span>
                Explore Solutions
              </h3>
              <div>
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
              <Navlink
                href="#"
                className="flex items-center gap-1 py-3 border-y-[0.5px] border-gray-200 dark:border-gray-800"
              >
                <Image
                  src="/path.svg"
                  width={120}
                  height={27}
                  className="h-3 w-auto grayscale filter drop-shadow dark:invert"
                  alt=""
                />
                <span className="text-[8px] font-light">UI</span>
                <span>
                  <BsArrowUpRight className="size-2" />
                </span>
              </Navlink>
            </div>
            <div className="space-y-2 pb-2 border-b-[0.5px] border-gray-200 dark:border-gray-800">
              <h3 className="text-sm text-gray-500 flex items-center gap-1">
                <span>
                  <BiCode />
                </span>
                Development
              </h3>
              <div>
                <Navlink as={Link} href="/services/fullstack/react-next">
                  React/Next.js
                </Navlink>
                <Navlink as={Link} href="/services/fullstack/api-backend">
                  API & Backend
                </Navlink>
                <Navlink as={Link} href="/services/fullstack/search-form">
                  Search & Form Integrations
                </Navlink>
                <Navlink as={Link} href="/services/fullstack/performance">
                  Performance Optimization
                </Navlink>
                <Navlink
                  as={Link}
                  href="/services/fullstack/performance"
                  className="group flex items-center font-medium"
                >
                  More
                  <span>
                    <BiChevronsRight />
                  </span>
                </Navlink>
              </div>
            </div>
            <div className="space-y-2 pb-2 border-b-[0.5px] border-gray-200 dark:border-gray-800">
              <h3 className="text-sm text-gray-500 flex items-center gap-1">
                <span>
                  <PiStackSimpleLight />
                </span>
                Infrastructures
              </h3>
              <div>
                <Navlink as={Link} href="/services/fullstack/react-next">
                  Headless Solution
                </Navlink>
                <Navlink as={Link} href="/services/fullstack/api-backend">
                  AWS System
                </Navlink>
                <Navlink as={Link} href="/services/fullstack/search-form">
                  Custom Wordpress
                </Navlink>
                <Navlink as={Link} href="/services/fullstack/performance">
                  Serverless Setup
                </Navlink>
                <Navlink
                  as={Link}
                  href="/services/fullstack/performance"
                  className="group flex items-center font-medium"
                >
                  More
                  <span>
                    <BiChevronsRight />
                  </span>
                </Navlink>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm text-gray-500 flex items-center gap-1">
                <span>
                  <FaCodeCommit />
                </span>
                DevOps
              </h3>
              <div>
                <Navlink as={Link} href="/services/fullstack/react-next">
                  Migration
                </Navlink>
                <Navlink as={Link} href="/services/fullstack/api-backend">
                  Automation
                </Navlink>
                <Navlink as={Link} href="/services/fullstack/search-form">
                  Edge Computing
                </Navlink>
                <Navlink
                  as={Link}
                  href="/services/fullstack/performance"
                  className="group flex items-center font-medium "
                >
                  More
                  <span>
                    <BiChevronsRight />
                  </span>
                </Navlink>
              </div>
            </div>
            <div>
              <Card
                href="#"
                cover={
                  <Image
                    src="tb.svg"
                    width={120}
                    height={27}
                    alt=""
                    className="h-10 w-auto aspect-video dark:invert"
                  />
                }
                header=""
              >
                <div className="mx-auto text-center mt-2">
                  <Button size="sm" variant="outline">
                    Get Started Today
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </Megamenu>

        {/* Solutions Dropdown */}

        {/* Services Dropdown */}

        <Navlink as={Link} href="/about">
          About
        </Navlink>

        {/* Business Dropdown */}
        <Megamenu label="Business">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold">SEO & Content Strategy</h3>
              <Navlink as={Link} href="/business/seo/on-page-seo">
                On-Page SEO
              </Navlink>
              <Navlink as={Link} href="/business/seo/keyword-research">
                Keyword Research
              </Navlink>
              <Navlink as={Link} href="/business/seo/branding">
                Branding
              </Navlink>
              <Navlink as={Link} href="/business/seo/marketing">
                Marketing Strategies
              </Navlink>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Content</h3>
              <Navlink as={Link} href="/business/content/product-content">
                Product Content
              </Navlink>
              <Navlink as={Link} href="/business/content/blog">
                Blog Content
              </Navlink>
              <Navlink as={Link} href="/business/content/social-media">
                Social Media Content
              </Navlink>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Social Media</h3>
              <Navlink as={Link} href="/business/social-media/management">
                Social Media Management
              </Navlink>
              <Navlink as={Link} href="/business/social-media/marketing">
                Social Media Marketing
              </Navlink>
              <Navlink as={Link} href="/business/social-media/ppc">
                Paid Advertising & PPC
              </Navlink>
            </div>
          </div>
        </Megamenu>

        <Navlink as={Link} href="/contact">
          Contact
        </Navlink>

        {/* Resources Dropdown */}
        <Megamenu label="Resources">
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold">Templates</h3>
              <Navlink as={Link} href="/resources/templates/elementor">
                Elementor Templates
              </Navlink>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Themes</h3>
              <Navlink as={Link} href="/resources/themes/wordpress">
                WordPress Themes
              </Navlink>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Packages & Library</h3>
              <Navlink as={Link} href="/resources/packages/bracketui">
                BracketUI Components
              </Navlink>
            </div>
          </div>
        </Megamenu>
      </MobileNav>
    </Navbar>
  );
};

export default MegaHeader;
