import { Button } from "@thirdbracket/bracketui";

import { Nextjs, Tailwind, Vercel } from "../icons";

export function DefaultHero() {
  return (
    <section className="pt-12 lg:pt-12 pb-8 lg:pb-16">
      <div className="mx-auto max-w-screen-2xl   md:text-center space-y-8 ">
        {/* Banner*/}

        <a
          href="#"
          className="inline-flex items-center justify-between rounded-full  
    p-1 pr-3 
     bg-gradient-to-r from-slate-500/10 to-gray-500/10
    backdrop-filter backdrop-blur-md
    text-gray-700 dark:text-gray-300 
    transition-opacity duration-200 ease-in-out text-nowrap
    motion-reduce:transition-none motion-reduce:hover:transform-none 
    hover:opacity-90"
        >
          <span
            className="mr-2 lg:mr-3 rounded-full 
    text-[0.625rem] lg:text-xs
    px-2 py-0.5 
    text-white bg-gray-600 dark:bg-gray-700"
          >
            New
          </span>
          <span className="text-[0.75rem] lg:text-sm font-medium">
            Bracket UI version 4 is out! See what's new
          </span>
          <svg
            className="ml-2 lg:ml-3 
      size-3.5 lg:size-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </a>

        {/* Content section*/}
        <div className="max-w-md sm:max-w-4xl  lg:max-w-screen-xl mx-auto  md:text-center">
          <h1 className="text-[2.60rem]/[2.70rem]  md:text-[3.25rem]/[3.25rem] font-black bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 dark:from-gray-200 dark:via-gray-100 dark:to-gray-200 text-transparent bg-clip-text lg:text-[3.90rem]/[3.90rem]  mb-8     ">
            Enterprise Solutions Without the Overhead&nbsp;Cost
          </h1>
          <p className="text-sm/6 md:text-base/7  text-gray-900/70 dark:text-gray-50/60 sm:px-16 xl:px-48 lg:text-lg/8 px-4">
            Everything you'd expect from an agency; resources, expertise, and
            strategy; at a price you'd normally pay a freelancer. Get custom web
            development and digital marketing designed for startups and growing
            businesses.
          </p>
        </div>

        {/* Buttons*/}
        <div className="py-2 flex justify-center space-x-4">
          {/* Desktop buttons */}

          <Button
            href="#"
            size="xl"
            className="hidden lg:flex items-center gap-2"
          >
            Let's Grow
            <svg
              className="size-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
          <Button
            outline
            size="xl"
            className="hidden lg:flex items-center gap-2"
          >
            <svg
              className="size-4"
              fill="currentColor"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M860 265h-61q-8 0-13.5 5.5T780 284v246q0 39-28 67t-68 28H279q-8 0-13.5 5.5T260 644v61q0 17 11.5 28.5T300 745h415q25 0 43 18l110 110q4 4 9.5 5t11-1 8.5-7 3-11V305q0-17-11.5-28.5T860 265zM700 505V145q0-17-11.5-28.5T660 105H140q-17 0-28.5 11.5T100 145v514q0 6 3 11t8.5 7 11 1 9.5-5l110-110q18-18 43-18h375q17 0 28.5-12t11.5-28z"></path>
            </svg>
            Get Consultation
          </Button>
          <Button
            href="#"
            size="lg"
            className="hidden lg:hidden md:flex items-center gap-2"
          >
            Let's Grow
            <svg
              className="size-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
          <Button
            outline
            size="lg"
            className="hidden lg:hidden md:flex items-center gap-2"
          >
            <svg
              className="size-4"
              fill="currentColor"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M860 265h-61q-8 0-13.5 5.5T780 284v246q0 39-28 67t-68 28H279q-8 0-13.5 5.5T260 644v61q0 17 11.5 28.5T300 745h415q25 0 43 18l110 110q4 4 9.5 5t11-1 8.5-7 3-11V305q0-17-11.5-28.5T860 265zM700 505V145q0-17-11.5-28.5T660 105H140q-17 0-28.5 11.5T100 145v514q0 6 3 11t8.5 7 11 1 9.5-5l110-110q18-18 43-18h375q17 0 28.5-12t11.5-28z"></path>
            </svg>
            Get Consultation
          </Button>

          {/* Mobile buttons */}
          <Button
            href="#"
            size="md"
            className="md:hidden flex items-center justify-center gap-2"
          >
            Let's Grow
            <svg
              className="size-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </Button>
          <Button
            outline
            size="md"
            className="md:hidden flex items-center justify-center gap-2"
          >
            <svg
              className="size-4"
              fill="currentColor"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M860 265h-61q-8 0-13.5 5.5T780 284v246q0 39-28 67t-68 28H279q-8 0-13.5 5.5T260 644v61q0 17 11.5 28.5T300 745h415q25 0 43 18l110 110q4 4 9.5 5t11-1 8.5-7 3-11V305q0-17-11.5-28.5T860 265zM700 505V145q0-17-11.5-28.5T660 105H140q-17 0-28.5 11.5T100 145v514q0 6 3 11t8.5 7 11 1 9.5-5l110-110q18-18 43-18h375q17 0 28.5-12t11.5-28z"></path>
            </svg>
            Get Consultation
          </Button>
        </div>

        {/* Featured section*/}
        <div className="mx-auto py-4 px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold uppercase text-gray-400">
            FEATURED IN
          </span>
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center text-gray-500 sm:justify-between">
            <a
              href="#"
              className="mb-5 mr-5 hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0"
            >
              <Tailwind />
            </a>
            <a
              href="#"
              className="mb-5 mr-5 hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0"
            >
              <Nextjs />
            </a>
            <a
              href="#"
              className="mb-5 mr-5 hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0"
            >
              <Vercel />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
