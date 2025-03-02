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

// import { RiArrowRightUpLine, RiRecycleLine } from "react-icons/ri";

const Header: FC = () => {
  return (
    <header>
      <Navbar>
        <Navbrand
          logo={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              width="228"
              height="25"
              viewBox="0 0 60.325 6.615"
              className="h-5 md:h-6 w-auto grayscale    dark:invert"
            >
              <path d="M125.79-39.579H53.406c-9.336 0-16.933-7.597-16.933-16.933v-79.022c0-9.336 7.597-16.933 16.933-16.933h72.384l-22.578 11.289H53.405a5.65 5.65 0 0 0-5.644 5.644v79.022a5.65 5.65 0 0 0 5.644 5.645h49.807zm38.117-110.35c-5.03-3.104-11.187-3.387-16.476-.74l-43.225 21.614v66.063l43.225 21.613c5.289 2.647 11.447 2.365 16.476-.74 5.03-3.11 8.032-8.495 8.032-14.41v-78.988c0-5.915-3.003-11.3-8.032-14.41zm-48.412 27.855 36.988-18.491c2.54-1.276 4.69-.254 5.492.248.807.497 2.675 1.959 2.675 4.804v78.983c0 2.845-1.874 4.306-2.675 4.803-.807.503-2.952 1.524-5.492.249L115.495-69.97v-52.098zM6.241.234a.946.946 0 0 1 .927.041.947.947 0 0 1 .451.81V5.53a.947.947 0 0 1-.451.81.946.946 0 0 1-.927.042L3.81 5.165V1.45L6.24.234zM.952.132h4.072l-1.85.946v4.459l1.85.945H.952A.954.954 0 0 1 0 5.53V1.085C0 .56.427.132.952.132zM31.61 3.684h-1.04l-.007-.792h.84q.21 0 .331-.062.121-.065.173-.19.055-.123.055-.31 0-.213-.055-.344t-.176-.19q-.117-.061-.307-.061h-.413v4.082h-1.178V.801h1.591q.403 0 .72.086.317.083.538.255.224.172.34.434.118.258.118.61 0 .306-.114.575-.11.269-.382.438-.272.165-.748.172zm-.04 2.133h-1.293l.407-.93h.885q.18 0 .28-.076.099-.08.14-.207.042-.13.042-.29 0-.192-.042-.333-.038-.142-.127-.217-.09-.08-.252-.08h-.885l.007-.792h1.023l.283.317q.45-.02.706.141.255.162.358.427.104.266.104.555 0 .493-.183.824-.18.33-.544.496t-.91.165zM34.39.801h1.716q.503 0 .872.172.368.172.565.51.2.338.2.834 0 .43-.11.72-.107.29-.304.479-.196.186-.461.306l-.383.224h-1.347l-.007-.933h.948q.162 0 .268-.083.107-.083.159-.234.055-.155.055-.369 0-.217-.052-.372t-.151-.238q-.097-.083-.252-.083h-.537v4.083H34.39zm2.223 5.016-.89-2.219 1.248-.006.906 2.173v.052zm4.272-3.962-.934 3.962h-1.268L40.23.801h.792zm.73 3.962-.934-3.962-.155-1.054h.806l1.55 5.016zm.038-1.87v.933h-2.174v-.934zm4.406.172h1.178q.004.565-.22.964-.22.396-.624.6-.403.203-.944.203-.437 0-.775-.152-.337-.151-.568-.44-.231-.29-.348-.7-.117-.413-.117-.937v-.7q0-.52.124-.933.127-.413.358-.703.234-.29.565-.44.334-.152.744-.152.575 0 .972.217.4.213.613.62.213.403.227.968h-1.178q.017-.327-.041-.513-.059-.19-.207-.266-.145-.079-.386-.079-.165 0-.279.065t-.183.217q-.068.149-.1.393t-.03.6v.706q0 .362.024.606.024.245.09.396.068.149.185.214.12.066.31.066.2 0 .341-.066.142-.069.214-.245.072-.179.055-.51zM49.532.8v5.016h-1.178V.801zm2.487 0-1.584 2.542-.975 1.244-.224-1.11.585-1.102.748-1.574zM50.6 5.817l-.916-2.26.92-.692 1.389 2.952zm5.23-.93v.93h-2.194v-.93zM54.046.8v5.016h-1.178V.801zm1.499 1.991v.9h-1.91v-.9zM55.84.801v.934h-2.205V.8zm3.231 0v5.016H57.89V.801zm1.216 0v.934h-3.58V.8zM11.157.799v5.016h-.654V.8zm1.613 0v.545H8.894V.799zm4.02 2.157v.54h-2.715v-.54zM14.18.799v5.016h-.665V.8zm3.19 0v5.016h-.662V.8zm1.891 0v5.016h-.665V.8zm1.206 0h1.66q.566 0 .955.172.393.173.596.51.207.335.207.824 0 .344-.142.63-.137.283-.4.482-.258.197-.62.293l-.185.073h-1.561l-.007-.541h1.178q.359 0 .596-.124.238-.128.359-.341.12-.214.12-.472 0-.29-.114-.507-.113-.217-.358-.334-.241-.12-.623-.12h-.996v4.471h-.665zm2.932 5.016-1.22-2.273.693-.004 1.237 2.236v.041zm2.773 0h-1.047l.007-.54h1.04q.538 0 .896-.224.358-.228.537-.634.183-.41.183-.958v-.307q0-.43-.103-.765-.104-.337-.304-.568-.2-.234-.489-.355-.286-.12-.658-.12h-1.13V.799h1.13q.493 0 .9.166.406.162.699.472.296.306.455.744.158.434.158.978v.3q0 .544-.158.982-.159.434-.459.74-.296.307-.716.472-.417.162-.94.162zM25.48.8v5.016h-.665V.8z" />
            </svg>
          }
          href="/"
        >
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
        <div className="md:hidden">
          {" "}
          <ThemeToggle />
        </div>
        <MobileNav>
          <div className="space-y-2 py-1.5">
            <Navlink as={Link} href="#">
              Features
            </Navlink>
            <Navlink as={Link} href="#">
              About
            </Navlink>
            <Megamenu label="Components">
              <div className="space-y-2 py-1.5">
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
            </Megamenu>

            <Megamenu label="Sections">
              <div className="space-y-2 py-1.5">
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
            </Megamenu>
            <Megamenu label="Hooks & Libraries">
              <div className="space-y-2 py-1.5">
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
          </div>
        </MobileNav>
      </Navbar>
    </header>
  );
};
export default Header;
