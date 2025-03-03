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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  width="133"
                  height="25"
                  viewBox="0 0 35.19 6.615"
                  className="h-5 w-auto grayscale hue-rotate-30  p-1 contrast-50  dark:invert"
                >
                  <path d="M27.571.132a.635.635 0 0 0-.635.635v4.895a.82.82 0 0 0 .82.82h6.748a.635.635 0 0 0 .636-.635V.953a.82.82 0 0 0-.82-.82zM13.603 1.148a1.8 1.8 0 0 0-.74.147 1.51 1.51 0 0 0-.563.422c-.152.183-.27.407-.353.671a3.001 3.001 0 0 0-.121.887v.645c0 .33.04.625.118.887.08.262.196.485.346.67.153.184.338.325.554.423.216.096.459.144.73.144.357 0 .66-.065.906-.196.249-.133.44-.32.576-.563.135-.242.213-.53.233-.861h-.805a1.692 1.692 0 0 1-.122.553.62.62 0 0 1-.288.308 1.093 1.093 0 0 1-.5.098.905.905 0 0 1-.44-.098.785.785 0 0 1-.287-.292 1.452 1.452 0 0 1-.164-.461 3.248 3.248 0 0 1-.052-.612v-.65c0-.24.02-.45.059-.632a1.34 1.34 0 0 1 .18-.455.774.774 0 0 1 .304-.278.92.92 0 0 1 .429-.095c.203 0 .366.035.488.105a.64.64 0 0 1 .278.32c.063.144.102.329.118.553h.805a2.123 2.123 0 0 0-.236-.873 1.366 1.366 0 0 0-.563-.566c-.24-.133-.537-.2-.89-.2zM0 1.213v4.765h1.613c.319 0 .592-.052.819-.157.227-.107.4-.262.52-.467.122-.208.183-.462.183-.763 0-.196-.037-.38-.11-.55a.964.964 0 0 0-.345-.415.91.91 0 0 0-.287-.128 1.027 1.027 0 0 0 .513-.458c.09-.164.135-.344.135-.54a1.42 1.42 0 0 0-.105-.573 1.034 1.034 0 0 0-.305-.403 1.257 1.257 0 0 0-.48-.235 2.528 2.528 0 0 0-.646-.076zm3.944 0v4.765h.805V4.142h.774l.86 1.836h.863v-.042L6.28 3.948a1.44 1.44 0 0 0 .338-.211 1.21 1.21 0 0 0 .334-.459c.078-.18.117-.391.117-.631 0-.312-.062-.574-.186-.786a1.18 1.18 0 0 0-.54-.484 2.003 2.003 0 0 0-.851-.164zm5.148 0L7.455 5.978H8.3l.343-1.11h1.625l.343 1.11h.847l-1.64-4.765h-.193zm6.91 0v4.765h.809v-1.49l.478-.547 1.237 2.037h.956l-1.67-2.661 1.591-2.104h-.979l-1.214 1.67-.4.546V1.213zm3.928 0v4.765h2.86v-.657h-2.052V3.848h1.751V3.2h-1.75V1.874h2.032v-.66h-2.033zm3.289 0v.661h1.325v4.104h.802V1.874h1.339v-.66zm5.398.07h.271a.316.316 0 0 1 .316.315V4.45a.608.608 0 0 0 .01.105l.002.01.011.044.004.011c.004.015.01.028.015.042l.004.01a.524.524 0 0 0 .02.04l.006.01a.546.546 0 0 0 .024.039l.007.01a.596.596 0 0 0 .028.036l.008.009.033.035.009.009a.661.661 0 0 0 .036.031l.01.008a.61.61 0 0 0 .037.027l.01.007a.568.568 0 0 0 .04.023l.01.005a.582.582 0 0 0 .15.052l.013.002a.637.637 0 0 0 .058.008c.03 0 .103.003.163.003h.977a.659.659 0 0 0 .107-.01l.012-.003a.583.583 0 0 0 .044-.01L31.063 5a.55.55 0 0 0 .044-.015l.01-.004a.574.574 0 0 0 .042-.02.565.565 0 0 0 .097-.063l.01-.007a.668.668 0 0 0 .036-.032l.008-.008a.67.67 0 0 0 .034-.035l.007-.01a.602.602 0 0 0 .03-.036c0-.002.004-.007.006-.01a.552.552 0 0 0 .024-.037l.005-.01a.54.54 0 0 0 .02-.04l.004-.01a.526.526 0 0 0 .016-.043l.003-.01a.556.556 0 0 0 .01-.044l.003-.011a.56.56 0 0 0 .007-.046v-.012c.03 0 .003-.195.003-.37v-2.78a.065.065 0 0 1 .065-.065h.268a.317.317 0 0 1 .316.317v2.86a1.276 1.276 0 0 1-.022.228l-.003.016c-.004.021-.01.042-.015.062l-.005.016a1.155 1.155 0 0 1-.047.136l-.007.014c-.009.02-.017.04-.027.059l-.008.014a.655.655 0 0 1-.032.058l-.008.014a1.283 1.283 0 0 1-.035.053l-.009.014a1.255 1.255 0 0 1-.037.05l-.01.014a1.25 1.25 0 0 1-.041.048l-.011.012a1.24 1.24 0 0 1-.043.046l-.012.011-.046.043-.012.01a1.287 1.287 0 0 1-.05.041l-.013.01a1.31 1.31 0 0 1-.052.038l-.014.008a1.345 1.345 0 0 1-.055.035l-.014.008c-.019.011-.038.022-.057.031l-.015.008a1.182 1.182 0 0 1-.133.054l-.016.006c-.02.006-.04.013-.062.018l-.016.004a1.246 1.246 0 0 1-.144.028l-.017.002a1.317 1.317 0 0 1-.084.007c-.042.003-.125.002-.184.002h-.98a1.332 1.332 0 0 1-.314-.039c-.005 0-.011-.003-.016-.004a1.214 1.214 0 0 1-.138-.046l-.015-.006a1.193 1.193 0 0 1-.06-.026l-.014-.008a1.217 1.217 0 0 1-.127-.074l-.014-.008a1.341 1.341 0 0 1-.115-.088l-.012-.011a1.276 1.276 0 0 1-.047-.043l-.011-.01a1.271 1.271 0 0 1-.096-.107l-.01-.013a1.286 1.286 0 0 1-.038-.051l-.01-.014a1.31 1.31 0 0 1-.035-.053l-.008-.014a1.24 1.24 0 0 1-.032-.058l-.007-.014a1.189 1.189 0 0 1-.027-.059l-.006-.014a1.2 1.2 0 0 1-.08-.294l-.001-.016a1.262 1.262 0 0 1-.008-.082 14.551 14.551 0 0 1-.002-.392V1.347a.065.065 0 0 1 .065-.065zm4.445 0h.147a.44.44 0 0 1 .44.439v3.89a.065.065 0 0 1-.065.065h-.148a.44.44 0 0 1-.439-.44v-3.89a.065.065 0 0 1 .065-.065zm-32.254.59h.697c.168 0 .306.023.413.069.107.046.185.12.235.22a.82.82 0 0 1 .079.386.734.734 0 0 1-.085.366.575.575 0 0 1-.245.233.887.887 0 0 1-.393.078h-.7zm3.941 0h.743a.85.85 0 0 1 .441.102.58.58 0 0 1 .25.281c.054.122.081.266.081.432 0 .153-.03.29-.088.41a.652.652 0 0 1-.259.284.833.833 0 0 1-.432.102H4.75zm4.706.366.608 1.968H8.847zM.808 3.828h.838c.164 0 .296.031.396.092s.174.15.22.265c.047.114.072.248.072.403a.846.846 0 0 1-.082.383.593.593 0 0 1-.24.258.784.784 0 0 1-.399.092H.808z" />
                </svg>

                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlSpace="preserve"
                  width="160"
                  height="20"
                  viewBox="0 0 52.917 6.615"
                  className="h-5 w-auto grayscale  p-1  dark:invert"
                >
                  <path d="M11.392 3.456H9.775l-.009-.522h1.422q.4 0 .688-.128.293-.127.446-.373.157-.246.157-.599 0-.377-.149-.615-.144-.242-.441-.357-.297-.118-.743-.118H9.923v5.653h-.62V.217h1.843q.458 0 .82.098.36.093.61.293.255.2.387.505.135.305.135.73 0 .382-.174.692-.174.305-.488.5-.31.192-.743.243zm-.038 2.941h-1.8l.331-.526h1.469q.416 0 .709-.149.297-.148.454-.42.157-.276.157-.653 0-.348-.136-.616-.136-.272-.42-.424t-.726-.153H10.31l.008-.522h1.507l.123.187q.416.042.713.258.302.213.467.544.166.327.166.717 0 .569-.242.96-.242.39-.68.594-.432.203-1.018.203zM14.52.217h1.961q.641 0 1.1.212.458.208.704.62.25.408.25 1.002 0 .429-.173.785t-.488.599q-.31.237-.73.335l-.192.076h-1.99l-.009-.522h1.605q.454 0 .755-.174.302-.178.45-.47.153-.294.153-.63 0-.398-.161-.691-.157-.297-.48-.454-.318-.162-.794-.162h-1.34v5.654h-.62zm3.617 6.18-1.511-2.776.653-.004 1.516 2.725v.055zM21.906.65l-2.037 5.747h-.637l2.27-6.18h.43zM23.7 6.397 21.664.65l-.025-.433h.428l2.271 6.18zm-.263-2.22v.531h-3.251v-.53zm5.42.28h.62q-.06.625-.326 1.079-.268.454-.743.7-.476.246-1.16.246-.517 0-.937-.195-.416-.195-.718-.56-.297-.365-.458-.875-.161-.51-.161-1.133v-.828q0-.624.161-1.129.161-.51.463-.874.305-.365.734-.56t.964-.196q.658 0 1.124.242.467.242.73.7.268.455.327 1.096h-.62q-.055-.493-.237-.828-.178-.335-.505-.51-.323-.173-.82-.173-.407 0-.725.16-.319.158-.535.45-.217.294-.331.705-.115.408-.115.909v.836q0 .48.106.891.106.408.314.71.208.3.518.47.31.166.722.166.522 0 .853-.166.335-.165.514-.496.182-.336.242-.836zm2.446-4.24v6.18h-.62V.217zm3.663 0-2.543 2.848-1.337 1.384-.08-.687 1.044-1.147L34.207.217zm-.556 6.18-2.399-3.115.37-.505 2.776 3.62zm5.356-.526v.526h-3.29v-.526zM36.635.217v6.18h-.62V.217zm2.712 2.73v.526h-2.87v-.527zm.39-2.73v.526h-3.26V.217zm3.265 0v6.18h-.612V.217zm2.003 0v.526h-4.61V.217zM2.595.132h4.072c.525 0 .952.428.952.953V5.53a.954.954 0 0 1-.952.952H2.595l1.27-.635h2.801a.318.318 0 0 0 .318-.317V1.085a.318.318 0 0 0-.318-.318h-2.8zM.451 6.34c.283.175.63.19.927.042l2.431-1.216V1.45L1.378.234a.946.946 0 0 0-.927.041.947.947 0 0 0-.451.81V5.53c0 .332.168.635.451.81zm2.723-1.567-2.08 1.04a.311.311 0 0 1-.309-.014.312.312 0 0 1-.15-.27V1.086c0-.16.105-.242.15-.27a.312.312 0 0 1 .309-.014l2.08 1.04v2.93zM49.586.302h.775v3.974q0 .661-.295 1.1-.294.44-.782.662-.484.218-1.053.218-.597 0-1.08-.218-.48-.221-.763-.661-.279-.44-.279-1.101V.303h.77v3.973q0 .46.17.758.17.299.472.444.307.145.71.145.407 0 .71-.145.306-.145.476-.444.17-.298.17-.758zm2.832 0v5.874h-.779V.303z" />
                </svg> */}
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
