import { Button } from "@thirdbracket/bracketui";

import { Nextjs, Tailwind, Vercel } from "./icons";

export function DefaultHero() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl  py-8 text-center  lg:py-16">
        <a
          href="#"
          className="mb-6 inline-flex items-center justify-between rounded-full  p-1 pr-4 text-sm text-gray-700   dark:text-white bg-gradient-to-r dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 from-gray-100 via-gray-50 to-gray-100 hover:opacity-90"
        >
          <span className="mr-3 rounded-full bg-slate-200    px-3 py-1 text-xs  text-gray-700 ">
            New
          </span>
          &nbsp;
          <span className="text-xs md:text-sm font-medium">
            Bracket UI version 4 is out! See what's new
          </span>
          <svg
            className="ml-2 size-4 md:size-5"
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
        <h1 className="mb-6 text-[2.75rem] font-black leading-none  bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 dark:from-gray-200 dark:via-gray-100 dark:to-gray-200 text-transparent bg-clip-text md:text-5xl lg:text-6xl">
          Enterprise Solutions Without Overhead Cost
        </h1>
        <p className="mb-8 md:mb-16 text-base md:text-lg font-normal text-gray-800/70 dark:text-gray-200/40 sm:px-16 lg:text-xl xl:px-48">
          Everything you'd expect from an agency—resources, expertise, and
          strategy—at a price you'd normally pay a freelancer. Get custom web
          development and digital marketing designed for startups and growing
          businesses.
        </p>

        <div className="mb-8  flex justify-center space-x-4  lg:mb-16">
          <Button href="#" size="xl" className=" hidden md:flex items-center">
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
          <Button outline size="xl" className="hidden md:flex items-center">
            <svg
              className=" size-4"
              fill="currentColor"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" /> */}

              <path d="M860 265h-61q-8 0-13.5 5.5T780 284v246q0 39-28 67t-68 28H279q-8 0-13.5 5.5T260 644v61q0 17 11.5 28.5T300 745h415q25 0 43 18l110 110q4 4 9.5 5t11-1 8.5-7 3-11V305q0-17-11.5-28.5T860 265zM700 505V145q0-17-11.5-28.5T660 105H140q-17 0-28.5 11.5T100 145v514q0 6 3 11t8.5 7 11 1 9.5-5l110-110q18-18 43-18h375q17 0 28.5-12t11.5-28z"></path>
            </svg>
            Get Consultation
          </Button>

          <Button href="#" size="md" className="md:hidden flex items-center justify-center gap-2">
            Let's Grow
            <svg
              className=" h-4 w-4"
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
          <Button outline size="md" className=" md:hidden flex items-center justify-center gap-2">
            <svg
              className=" h-4 w-4"
              fill="currentColor"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M860 265h-61q-8 0-13.5 5.5T780 284v246q0 39-28 67t-68 28H279q-8 0-13.5 5.5T260 644v61q0 17 11.5 28.5T300 745h415q25 0 43 18l110 110q4 4 9.5 5t11-1 8.5-7 3-11V305q0-17-11.5-28.5T860 265zM700 505V145q0-17-11.5-28.5T660 105H140q-17 0-28.5 11.5T100 145v514q0 6 3 11t8.5 7 11 1 9.5-5l110-110q18-18 43-18h375q17 0 28.5-12t11.5-28z"></path>
            </svg>
            Get Consultation
          </Button>
        </div>
        <div className="mx-auto px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
          <span className="font-semibold uppercase text-gray-400">
            FEATURED IN
          </span>
          <div className="mt-8 flex flex-wrap items-center justify-center text-gray-500 sm:justify-between">
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
              <Tailwind />
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
