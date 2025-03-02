"use client";

import { FC, useEffect, useState, useMemo, useCallback } from "react";
import clsx from "clsx";
import NavbarContext from "./NavbarContext";
import { Button } from "../Button";

export interface NavbarProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  mobileBreakpoint?: number;
  enableScrollLock?: boolean;
  position?: "fixed" | "sticky" | "relative" | "absolute";
  theme?: {
    background?: string;
    border?: string;
    mobileMenu?: string;
  };
}

const Navbar: FC<NavbarProps> = ({
  children,
  className = "",
  containerClassName = "",
  mobileBreakpoint = 768,
  enableScrollLock = true,
  position = "fixed",
  theme = {
    background: "bg-white dark:bg-gray-950 bg-opacity-80",
    border: "border-gray-200 dark:border-gray-800",
    mobileMenu: "bg-white dark:bg-gray-950",
  },
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopNav, setDesktopNav] = useState<React.ReactNode>(null);
  const [mobileNav, setMobileNav] = useState<React.ReactNode>(null);
  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  // Memoize context value to prevent unnecessary updates
  const contextValue = useMemo(
    () => ({ setDesktopNav, setMobileNav, closeMenu }),
    []
  );

  // Prevent unnecessary re-renders of toggle function
  const toggleMenu = useCallback(() => setIsOpen((prev) => !prev), []);

  // Optimize scroll lock effect

  useEffect(() => {
    if (!enableScrollLock) return;

    const handleScrollLock = () => {
      if (window.innerWidth < mobileBreakpoint) {
        document.body.style.overflow = isOpen ? "hidden" : "unset";
      }
    };

    handleScrollLock();
    window.addEventListener("resize", handleScrollLock);

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("resize", handleScrollLock);
    };
  }, [isOpen, mobileBreakpoint, enableScrollLock]);

  return (
    <NavbarContext.Provider value={contextValue}>
      <nav
        className={clsx(
          position,
          "top-0 left-0 right-0 z-50 backdrop-blur-md",
          theme.background,
          className
        )}
      >
        <div
          className={clsx("border-b-[0.5px]", theme.border, containerClassName)}
        >
          <div className="px-6 lg:px-8">
            <div className="flex justify-between h-16 items-center">
              {children}
              <div className="hidden md:flex items-center justify-between space-x-6">
                {desktopNav}
              </div>
              <button
                onClick={toggleMenu}
                className="md:hidden text-gray-950 dark:text-white"
                aria-label="Toggle Menu"
                aria-expanded={isOpen}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  strokeLinecap="square"
                  strokeLinejoin="inherit"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    d="M2 8h20"
                    className={clsx(
                      "transform transition-transform duration-300 ease-in-out origin-center",
                      { "rotate-45": isOpen }
                    )}
                    strokeWidth="1"
                  />
                  <path
                    d="M2 16h20"
                    className={clsx(
                      "transform transition-transform duration-300 ease-in-out origin-center",
                      { "-rotate-45": isOpen }
                    )}
                    strokeWidth="2"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={clsx(
          "md:hidden fixed inset-0 z-40",
          theme.mobileMenu,
          "transition-transform duration-300 ease-in-out overflow-y-auto",
          { "translate-y-0": isOpen, "-translate-y-full": !isOpen }
        )}
      >
        <div className="   flex-1 overflow-auto py-16">
          <a
            href="#"
            className="
    group
    px-6 py-4
    bg-gradient-to-r from-slate-500/10 to-gray-500/10
    backdrop-filter backdrop-blur-md
    text-gray-700 dark:text-gray-300
    flex items-center justify-between
    transition-all duration-300 ease-in-out
    hover:bg-gradient-to-r hover:from-gray-500/10 hover:to-slate-500/10
    
  "
          >
            <div className="flex items-center gap-2">
              <span className="text-sm  whitespace-nowrap tracking-wider">
                Build clean, minimal Interfaces →
              </span>
              <span className="transition-opacity duration-300 group-hover:opacity-80 flex items-center gap-1 tracking-normal">
                {/* Text BRACKET UI */}
                {/* <span className="flex items-center gap-1 text-gray-950 dark:text-gray-300 text-sm">
                  <span>BRACKET</span>
                  <span className="px-1  bg-gray-200 dark:bg-gray-800  rounded ">
                    UI
                  </span>
                </span> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  width="200"
                  height="25"
                  viewBox="0 0 52.917 6.615"
                  className="h-5 w-auto grayscale  p-0.5  dark:invert"
                >
                  <path d="M11.392 3.456H9.775l-.009-.522h1.422q.4 0 .688-.128.293-.127.446-.373.157-.246.157-.599 0-.377-.149-.615-.144-.242-.441-.357-.297-.118-.743-.118H9.923v5.653h-.62V.217h1.843q.458 0 .82.098.36.093.61.293.255.2.387.505.135.305.135.73 0 .382-.174.692-.174.305-.488.5-.31.192-.743.243zm-.038 2.941h-1.8l.331-.526h1.469q.416 0 .709-.149.297-.148.454-.42.157-.276.157-.653 0-.348-.136-.616-.136-.272-.42-.424t-.726-.153H10.31l.008-.522h1.507l.123.187q.416.042.713.258.302.213.467.544.166.327.166.717 0 .569-.242.96-.242.39-.68.594-.432.203-1.018.203zM14.52.217h1.961q.641 0 1.1.212.458.208.704.62.25.408.25 1.002 0 .429-.173.785t-.488.599q-.31.237-.73.335l-.192.076h-1.99l-.009-.522h1.605q.454 0 .755-.174.302-.178.45-.47.153-.294.153-.63 0-.398-.161-.691-.157-.297-.48-.454-.318-.162-.794-.162h-1.34v5.654h-.62zm3.617 6.18-1.511-2.776.653-.004 1.516 2.725v.055zM21.906.65l-2.037 5.747h-.637l2.27-6.18h.43zM23.7 6.397 21.664.65l-.025-.433h.428l2.271 6.18zm-.263-2.22v.531h-3.251v-.53zm5.42.28h.62q-.06.625-.326 1.079-.268.454-.743.7-.476.246-1.16.246-.517 0-.937-.195-.416-.195-.718-.56-.297-.365-.458-.875-.161-.51-.161-1.133v-.828q0-.624.161-1.129.161-.51.463-.874.305-.365.734-.56t.964-.196q.658 0 1.124.242.467.242.73.7.268.455.327 1.096h-.62q-.055-.493-.237-.828-.178-.335-.505-.51-.323-.173-.82-.173-.407 0-.725.16-.319.158-.535.45-.217.294-.331.705-.115.408-.115.909v.836q0 .48.106.891.106.408.314.71.208.3.518.47.31.166.722.166.522 0 .853-.166.335-.165.514-.496.182-.336.242-.836zm2.446-4.24v6.18h-.62V.217zm3.663 0-2.543 2.848-1.337 1.384-.08-.687 1.044-1.147L34.207.217zm-.556 6.18-2.399-3.115.37-.505 2.776 3.62zm5.356-.526v.526h-3.29v-.526zM36.635.217v6.18h-.62V.217zm2.712 2.73v.526h-2.87v-.527zm.39-2.73v.526h-3.26V.217zm3.265 0v6.18h-.612V.217zm2.003 0v.526h-4.61V.217zM2.595.132h4.072c.525 0 .952.428.952.953V5.53a.954.954 0 0 1-.952.952H2.595l1.27-.635h2.801a.318.318 0 0 0 .318-.317V1.085a.318.318 0 0 0-.318-.318h-2.8zM.451 6.34c.283.175.63.19.927.042l2.431-1.216V1.45L1.378.234a.946.946 0 0 0-.927.041.947.947 0 0 0-.451.81V5.53c0 .332.168.635.451.81zm2.723-1.567-2.08 1.04a.311.311 0 0 1-.309-.014.312.312 0 0 1-.15-.27V1.086c0-.16.105-.242.15-.27a.312.312 0 0 1 .309-.014l2.08 1.04v2.93zM49.586.302h.775v3.974q0 .661-.295 1.1-.294.44-.782.662-.484.218-1.053.218-.597 0-1.08-.218-.48-.221-.763-.661-.279-.44-.279-1.101V.303h.77v3.973q0 .46.17.758.17.299.472.444.307.145.71.145.407 0 .71-.145.306-.145.476-.444.17-.298.17-.758zm2.832 0v5.874h-.779V.303z" />
                </svg>
              </span>
            </div>
          </a>

          {mobileNav}
        </div>
      </div>
    </NavbarContext.Provider>
  );
};

export default Navbar;
