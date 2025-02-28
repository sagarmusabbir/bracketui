import { Button } from "@thirdbracket/bracketui";

export function DefaultHero() {
  return (
    <section>
      <div className="mx-auto max-w-screen-xl  py-8 text-center  lg:py-16">
        <a
          href="#"
          className="mb-6 inline-flex items-center justify-between rounded-full  p-0.5 pr-2 text-sm text-gray-700   dark:text-white bg-gradient-to-r dark:from-gray-900 dark:via-gray-800/50 dark:to-gray-900 from-gray-100 via-gray-50 to-gray-100 hover:opacity-90"
        >
          <span className="mr-3 rounded-full bg-emerald-200   px-2.5 py-0.5 md:px-3 md:py-1 text-xs md:text-sm text-gray-700 ">
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
        <p className="mb-4 md:mb-8 text-base md:text-lg font-normal text-gray-800/70 dark:text-gray-200/40 sm:px-16 lg:text-xl xl:px-48">
          Everything you'd expect from an agency—resources, expertise, and
          strategy—at a price you'd normally pay a freelancer. Get custom web
          development and digital marketing designed for startups and growing
          businesses.
        </p>
        <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
          <Button href="#" size="xl" className=" hidden md:flex">
            Let's Grow
            <svg
              className="-mr-1 ml-2 size-4"
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
          <Button outline size="xl" className="hidden md:flex">
            <svg
              className="-ml-1 mr-2 size-4"
              fill="currentColor"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" /> */}

              <path d="M860 265h-61q-8 0-13.5 5.5T780 284v246q0 39-28 67t-68 28H279q-8 0-13.5 5.5T260 644v61q0 17 11.5 28.5T300 745h415q25 0 43 18l110 110q4 4 9.5 5t11-1 8.5-7 3-11V305q0-17-11.5-28.5T860 265zM700 505V145q0-17-11.5-28.5T660 105H140q-17 0-28.5 11.5T100 145v514q0 6 3 11t8.5 7 11 1 9.5-5l110-110q18-18 43-18h375q17 0 28.5-12t11.5-28z"></path>
            </svg>
            Get Consultation
          </Button>

          <Button href="#" size="md" className="md:hidden">
            Let's Grow
            <svg
              className="-mr-1 ml-2 h-4 w-4"
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
          <Button outline size="md" className=" md:hidden">
            <svg
              className="-ml-1 mr-2 h-4 w-4"
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
              <svg
                className="h-12"
                viewBox="0 0 73.5 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="m18.227 22.501c-0.08901 0.047-0.08401 0.066 5e-3 0.021a0.22801 0.22801 0 0 0 0.07-0.047c0-0.016-2e-3 -0.014-0.075 0.026zm0.17801-0.09401c-0.042 0.033-0.042 0.035 9e-3 9e-3 0.028-0.014 0.052-0.03 0.052-0.035 0-0.019-0.012-0.014-0.061 0.026zm0.11701-0.071c-0.042 0.033-0.042 0.035 9e-3 9e-3 0.028-0.014 0.052-0.03 0.052-0.035 0-0.019-0.012-0.014-0.061 0.026zm0.11701-0.07c-0.042 0.033-0.042 0.035 9e-3 9e-3 0.028-0.014 0.052-0.03 0.052-0.035 0-0.019-0.012-0.014-0.061 0.026zm0.16201-0.10501c-0.08201 0.052-0.10801 0.08701-0.035 0.047 0.052-0.03 0.13601-0.094 0.12201-0.096a0.46603 0.46603 0 0 0-0.087 0.049zm-7.1734-22.157c-0.052 0.0050003-0.21601 0.021001-0.36402 0.033002-3.4082 0.30702-6.6014 2.1461-8.6235 4.9733a11.877 11.877 0 0 0-2.1181 5.2433c-0.096006 0.65904-0.10801 0.85405-0.10801 1.7481 0 0.89405 0.012001 1.0881 0.10801 1.7481 0.65204 4.5063 3.8592 8.2925 8.2085 9.6956 0.77905 0.25102 1.6001 0.42202 2.5332 0.52503 0.36402 0.04 1.9351 0.04 2.2991 0 1.6111-0.17801 2.9772-0.57704 4.3233-1.2641 0.20601-0.10601 0.24601-0.13401 0.21801-0.15701a231.74 231.74 0 0 1-1.9541-2.6202l-1.9191-2.5922-2.4041-3.5582a332.03 332.03 0 0 0-2.4211-3.5562c-9e-3 -2e-3 -0.019001 1.5791-0.023001 3.5092-7e-3 3.3802-9e-3 3.5162-0.052003 3.5962a0.42403 0.42403 0 0 1-0.20601 0.21301c-0.075004 0.038-0.14101 0.045-0.49503 0.045h-0.40602l-0.10801-0.068a0.44203 0.44203 0 0 1-0.15701-0.17101l-0.049003-0.10601 5e-3 -4.7033 7e-3 -4.7053 0.073004-0.091006a0.63704 0.63704 0 0 1 0.17401-0.14301c0.096006-0.047003 0.13401-0.052003 0.54003-0.052003 0.47903 0 0.55803 0.019001 0.68304 0.15501a466.86 466.86 0 0 1 2.8952 4.3613c1.5581 2.3621 3.6872 5.5873 4.7343 7.1714l1.9001 2.8782 0.09601-0.063a12.341 12.341 0 0 0 2.4651-2.1631 11.941 11.941 0 0 0 2.8242-6.1344c0.09601-0.65904 0.10801-0.85405 0.10801-1.7481 0-0.89405-0.012-1.0881-0.10801-1.7481-0.65204-4.5063-3.8592-8.2925-8.2085-9.6956a12.553 12.553 0 0 0-2.4981-0.52303c-0.22501-0.023001-1.7761-0.049003-1.9701-0.030002zm4.9123 7.2584a0.47103 0.47103 0 0 1 0.23701 0.27702c0.019 0.061004 0.023 1.3651 0.019 4.3043l-7e-3 4.2183-0.74404-1.1401-0.74604-1.1401v-3.0662c0-1.9821 9e-3 -3.0962 0.023-3.1502a0.48403 0.48403 0 0 1 0.23201-0.29602c0.09601-0.049003 0.13101-0.054003 0.50003-0.054003 0.34702 0 0.40802 5e-3 0.48603 0.047003zm55.891 6.277c-0.01527-0.14631-0.08236-0.26053-0.19921-0.3417-0.11788-0.08213-0.27014-0.12271-0.45699-0.12271-0.13118 0-0.24418 0.01983-0.33807 0.05852-0.0939 0.03964-0.1667 0.09249-0.21655 0.15952-0.04975 0.06702-0.07467 0.14349-0.07665 0.22939 0 0.07173 0.01724 0.13403 0.05079 0.18595 0.03355 0.05285 0.07852 0.09723 0.13699 0.1331 0.05743 0.03681 0.12162 0.06701 0.19162 0.09156 0.07084 0.02454 0.14177 0.04531 0.2126 0.0623l0.32665 0.08024c0.13128 0.0302 0.25872 0.0708 0.38034 0.12271 0.12162 0.05097 0.23182 0.11611 0.32852 0.19445 0.0968 0.07836 0.17345 0.17274 0.22995 0.28319 0.0565 0.11044 0.08527 0.23975 0.08527 0.3889 0 0.20106-0.05172 0.37758-0.15621 0.53049-0.10438 0.15197-0.25477 0.27091-0.45211 0.35682-0.1964 0.08496-0.43393 0.12837-0.71363 0.12837-0.27014 0-0.50581-0.04152-0.70408-0.12459-0.19921-0.08213-0.35448-0.20296-0.46655-0.36154-0.11207-0.15858-0.17241-0.35209-0.18103-0.57958h0.62078c0.0086 0.11893 0.04694 0.21806 0.11207 0.29829 0.06605 0.07929 0.15226 0.13781 0.25768 0.17746 0.10636 0.0387 0.22507 0.05852 0.35635 0.05852 0.13699 0 0.25768-0.02077 0.36206-0.06136 0.10345-0.04059 0.18487-0.09722 0.24335-0.17084 0.05941-0.07269 0.08912-0.15859 0.09005-0.25676-9.35e-4 -0.08968-0.02783-0.16426-0.07955-0.22278-0.05266-0.05851-0.12546-0.1076-0.21842-0.14724-0.09378-0.03964-0.20305-0.07552-0.32758-0.10667l-0.39654-0.10006c-0.28645-0.07268-0.51349-0.18312-0.67926-0.33132-0.16659-0.1482-0.24906-0.34454-0.24906-0.59091 0-0.202 0.05556-0.37946 0.16774-0.53144 0.11103-0.15197 0.26339-0.26997 0.45595-0.35398 0.19349-0.08494 0.41191-0.12649 0.65516-0.12649 0.24719 0 0.46364 0.04154 0.65048 0.12649 0.18674 0.08402 0.3334 0.20107 0.43965 0.3502 0.10635 0.14915 0.16192 0.32 0.16483 0.5135zm-3.2042-0.94395h0.62649v2.4137c-9.34e-4 0.22183-0.04892 0.41156-0.14271 0.57109-0.09483 0.15952-0.22611 0.28128-0.39467 0.36718-0.16763 0.08494-0.36404 0.12838-0.58723 0.12838-0.20409 0-0.38699-0.03682-0.54984-0.10856-0.16286-0.07173-0.29216-0.17935-0.38699-0.32094-0.09587-0.1416-0.14281-0.31811-0.14281-0.52955h0.62753c9.35e-4 0.09251 0.02202 0.17273 0.06221 0.23975 0.04019 0.06702 0.09576 0.11799 0.1667 0.15386 0.07176 0.03587 0.15424 0.05381 0.24709 0.05381 0.10064 0 0.18685-0.02077 0.25675-0.06325 0.06991-0.04153 0.1236-0.10383 0.16099-0.1869 0.03635-0.08211 0.05556-0.18406 0.0565-0.30488zm-2.413 3.4699c-0.10355 0-0.19162-0.03586-0.26537-0.1076-0.07374-0.07173-0.1102-0.15859-0.10926-0.26147-9.34e-4 -0.10006 0.03552-0.18596 0.10926-0.2577 0.07375-0.07173 0.16182-0.10761 0.26537-0.10761 0.09961 0 0.18674 0.03587 0.26048 0.10761 0.07478 0.07174 0.11207 0.15764 0.11311 0.2577-1e-3 0.06795-0.01828 0.13025-0.05276 0.18594-0.03541 0.05664-0.08038 0.10102-0.13699 0.13311-0.05556 0.03304-0.11684 0.05002-0.18384 0.05002zm-26.246 0.05031-6.6359-8.2403h-1.7672v8.2368h1.4138v-6.4762l5.2133 6.4797zm12.535-2.3498-0.92655-1.152-2.8275 3.5115h1.8555zm-1.8986-5.8836h-1.8502l6.627 8.2368h1.8556l-3.3139-4.1156 3.3086-4.115-1.8503 0.00286-2.3847 2.9617zm-3.5591-0.00344v1.3156h-5.7134v2.1164h4.5947v1.3156h-4.5947v2.1736h5.7134v1.3156h-7.1272v-6.9212h-5.92e-4v-1.3156zm11.723 0h7.1278v1.3156h-2.8275v6.9212h-1.4139v-6.9212h-2.8864z" />
              </svg>
            </a>
            <a
              href="#"
              className="mb-5 mr-5 hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0"
            >
              <svg
                className="h-12"
                viewBox="0 0 67.875 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m46.845-17.544c-0.08901 0.047-0.08401 0.066 5e-3 0.021a0.22801 0.22801 0 0 0 0.07-0.047c0-0.016-2e-3 -0.014-0.075 0.026zm0.17801-0.09401c-0.042 0.033-0.042 0.035 9e-3 9e-3 0.028-0.014 0.052-0.03 0.052-0.035 0-0.019-0.012-0.014-0.061 0.026zm0.11701-0.071c-0.042 0.033-0.042 0.035 9e-3 9e-3 0.028-0.014 0.052-0.03 0.052-0.035 0-0.019-0.012-0.014-0.061 0.026zm0.11701-0.07c-0.042 0.033-0.042 0.035 9e-3 9e-3 0.028-0.014 0.052-0.03 0.052-0.035 0-0.019-0.012-0.014-0.061 0.026zm0.16201-0.10501c-0.08201 0.052-0.10801 0.08701-0.035 0.047 0.052-0.03 0.13601-0.094 0.12201-0.096a0.46603 0.46603 0 0 0-0.087 0.049zm-7.1734-22.157c-0.052 5e-3 -0.21601 0.021-0.36402 0.033-3.4082 0.30702-6.6014 2.1461-8.6235 4.9733a11.877 11.877 0 0 0-2.1181 5.2433c-0.096 0.65904-0.10801 0.85405-0.10801 1.7481 0 0.89405 0.012 1.0881 0.10801 1.7481 0.65204 4.5063 3.8592 8.2925 8.2085 9.6956 0.77905 0.25102 1.6001 0.42202 2.5332 0.52503 0.36402 0.04 1.9351 0.04 2.2991 0 1.6111-0.17801 2.9772-0.57704 4.3233-1.2641 0.20601-0.10601 0.24601-0.13401 0.21801-0.15701a231.74 231.74 0 0 1-1.9541-2.6202l-1.9191-2.5922-2.4041-3.5582a332.03 332.03 0 0 0-2.4211-3.5562c-9e-3 -2e-3 -0.019 1.5791-0.023 3.5092-7e-3 3.3802-9e-3 3.5162-0.052 3.5962a0.42403 0.42403 0 0 1-0.20601 0.21301c-0.075 0.038-0.14101 0.045-0.49503 0.045h-0.40602l-0.10801-0.068a0.44203 0.44203 0 0 1-0.15701-0.17101l-0.049-0.10601 5e-3 -4.7033 7e-3 -4.7053 0.073-0.09101a0.63704 0.63704 0 0 1 0.17401-0.14301c0.09601-0.047 0.13401-0.052 0.54003-0.052 0.47903 0 0.55803 0.019 0.68304 0.15501a466.86 466.86 0 0 1 2.8952 4.3613c1.5581 2.3621 3.6872 5.5873 4.7343 7.1714l1.9001 2.8782 0.09601-0.063a12.341 12.341 0 0 0 2.4651-2.1631 11.941 11.941 0 0 0 2.8242-6.1344c0.09601-0.65904 0.10801-0.85405 0.10801-1.7481 0-0.89405-0.012-1.0881-0.10801-1.7481-0.65204-4.5063-3.8592-8.2925-8.2085-9.6956a12.553 12.553 0 0 0-2.4981-0.52303c-0.22501-0.023-1.7761-0.049-1.9701-0.03zm4.9123 7.2584a0.47103 0.47103 0 0 1 0.23701 0.27702c0.019 0.061 0.023 1.3651 0.019 4.3043l-7e-3 4.2183-0.74404-1.1401-0.74604-1.1401v-3.0662c0-1.9821 9e-3 -3.0962 0.023-3.1502a0.48403 0.48403 0 0 1 0.23201-0.29602c0.09601-0.049 0.13101-0.054 0.50003-0.054 0.34702 0 0.40802 5e-3 0.48603 0.047zm55.891 6.277c-0.0153-0.14631-0.0824-0.26053-0.1992-0.3417-0.11789-0.08213-0.27015-0.12271-0.457-0.12271-0.13117 0-0.24417 0.01983-0.33807 0.05852-0.0939 0.03964-0.1667 0.09249-0.21655 0.15952-0.04975 0.06702-0.07467 0.14349-0.07665 0.22939 0 0.07173 0.01724 0.13403 0.05079 0.18595 0.03355 0.05285 0.07852 0.09723 0.13699 0.1331 0.05743 0.03681 0.12162 0.06701 0.19162 0.09156 0.0708 0.02454 0.14177 0.04531 0.2126 0.0623l0.32665 0.08024c0.13128 0.0302 0.25872 0.0708 0.38034 0.12271 0.12162 0.05097 0.23182 0.11611 0.32852 0.19445 0.0968 0.07836 0.17344 0.17274 0.22995 0.28319 0.0565 0.11044 0.0853 0.23975 0.0853 0.3889 0 0.20106-0.0517 0.37758-0.15621 0.53049-0.10438 0.15197-0.25478 0.27091-0.45211 0.35682-0.1964 0.08496-0.43394 0.12837-0.71364 0.12837-0.27014 0-0.5058-0.04152-0.70407-0.12459-0.19921-0.08213-0.35448-0.20296-0.46655-0.36154-0.11207-0.15858-0.17241-0.35209-0.18103-0.57958h0.62078c0.0086 0.11893 0.04694 0.21806 0.11207 0.29829 0.06605 0.07929 0.15226 0.13781 0.25768 0.17746 0.10635 0.0387 0.22507 0.05852 0.35635 0.05852 0.13699 0 0.25768-0.02077 0.36206-0.06136 0.10344-0.04059 0.18487-0.09722 0.24335-0.17084 0.0594-0.07269 0.0891-0.15859 0.09-0.25676-9.4e-4 -0.08968-0.0278-0.16426-0.0795-0.22278-0.0527-0.05851-0.12547-0.1076-0.21842-0.14724-0.0938-0.03964-0.20305-0.07552-0.32758-0.10667l-0.39655-0.10006c-0.28645-0.07268-0.51349-0.18312-0.67925-0.33132-0.16659-0.1482-0.24906-0.34454-0.24906-0.59091 0-0.202 0.05556-0.37946 0.16774-0.53144 0.11103-0.15197 0.26339-0.26997 0.45595-0.35398 0.19349-0.08494 0.41191-0.12649 0.65516-0.12649 0.24719 0 0.46363 0.04154 0.65048 0.12649 0.18674 0.08402 0.3334 0.20107 0.43965 0.3502 0.10635 0.14915 0.16192 0.32 0.16483 0.5135zm-3.2042-0.94395h0.62649v2.4137c-9.34e-4 0.22183-0.04892 0.41156-0.14271 0.57109-0.09483 0.15952-0.22611 0.28128-0.39467 0.36718-0.16763 0.08494-0.36404 0.12838-0.58723 0.12838-0.20409 0-0.38699-0.03682-0.54984-0.10856-0.16286-0.07173-0.29216-0.17935-0.38699-0.32094-0.09587-0.1416-0.14281-0.31811-0.14281-0.52955h0.62753c9.35e-4 0.09251 0.02202 0.17273 0.06221 0.23975 0.04019 0.06702 0.09576 0.11799 0.1667 0.15386 0.07176 0.03587 0.15424 0.05381 0.24709 0.05381 0.10064 0 0.18685-0.02077 0.25675-0.06325 0.06991-0.04153 0.1236-0.10383 0.16099-0.1869 0.03635-0.08211 0.05556-0.18406 0.0565-0.30488zm-2.413 3.4699c-0.10355 0-0.19162-0.03586-0.26537-0.1076-0.07374-0.07173-0.1102-0.15859-0.10926-0.26147-9.34e-4 -0.10006 0.03552-0.18596 0.10926-0.2577 0.07375-0.07173 0.16182-0.10761 0.26537-0.10761 0.09961 0 0.18674 0.03587 0.26048 0.10761 0.07478 0.07174 0.11207 0.15764 0.11311 0.2577-1e-3 0.06795-0.01828 0.13025-0.05276 0.18594-0.03541 0.05664-0.08038 0.10102-0.13699 0.13311-0.05556 0.03304-0.11684 0.05002-0.18384 0.05002zm-26.246 0.05031-6.6359-8.2403h-1.7672v8.2368h1.4138v-6.4762l5.2133 6.4797zm12.535-2.3498-0.92655-1.152-2.8275 3.5115h1.8555zm-1.8986-5.8836h-1.8502l6.627 8.2368h1.8556l-3.3139-4.1156 3.3086-4.115-1.8503 0.0029-2.3847 2.9617zm-3.5591-0.0034v1.3156h-5.7134v2.1164h4.5947v1.3156h-4.5947v2.1736h5.7134v1.3156h-7.1272v-6.9212h-5.92e-4v-1.3156zm11.723 0h7.1278v1.3156h-2.8275v6.9212h-1.4139v-6.9212h-2.8864z"
                  display="none"
                  stroke-width="1.0001"
                />
                <path
                  d="m13.856 0 13.856 24h-27.712zm29.372 9.7656c-1.8975 0-3.2656 1.2375-3.2656 3.0938s1.54 3.0938 3.4375 3.0938c1.1464 0 2.157-0.45375 2.7827-1.2186l-1.3148-0.75969c-0.34719 0.37984-0.87484 0.60156-1.4678 0.60156-0.82328 0-1.5228-0.42969-1.7823-1.1172h4.8159c0.03781-0.1925 0.06016-0.39188 0.06016-0.60156 0-1.8545-1.3681-3.092-3.2656-3.092zm-1.6259 2.4922c0.21484-0.68578 0.80266-1.1172 1.6242-1.1172 0.82328 0 1.4111 0.43141 1.6242 1.1172zm20.133-2.4922c-1.8975 0-3.2656 1.2375-3.2656 3.0938s1.54 3.0938 3.4375 3.0938c1.1464 0 2.157-0.45375 2.7827-1.2186l-1.3148-0.75969c-0.34719 0.37984-0.87484 0.60156-1.4678 0.60156-0.82328 0-1.5228-0.42969-1.7823-1.1172h4.8159c0.03781-0.1925 0.06016-0.39188 0.06016-0.60156 0-1.8545-1.3681-3.092-3.2656-3.092zm-1.6242 2.4922c0.21484-0.68578 0.80265-1.1172 1.6242-1.1172 0.82328 0 1.4111 0.43141 1.6242 1.1172zm-6.7083 0.60156c0 1.0312 0.67375 1.7188 1.7188 1.7188 0.70812 0 1.2392-0.32141 1.5125-0.84562l1.32 0.76141c-0.54656 0.91094-1.5709 1.4592-2.8325 1.4592-1.8992 0-3.2656-1.2375-3.2656-3.0938s1.3681-3.0938 3.2656-3.0938c1.2616 0 2.2842 0.54828 2.8325 1.4592l-1.32 0.76141c-0.27328-0.52422-0.80438-0.84563-1.5125-0.84563-1.0433 0-1.7188 0.6875-1.7188 1.7188zm14.176-4.9844v7.9063h-1.5469v-7.9063zm-26.364 0-4.7627 8.25-4.7627-8.25h1.7858l2.9769 5.1563 2.9769-5.1563zm10.125 2.0625v1.6655c-0.17188-0.04984-0.35406-0.08421-0.55-0.08421-0.99859 0-1.7187 0.6875-1.7187 1.7187v2.5438h-1.5469v-5.8438h1.5469v1.5813c0-0.87312 1.0158-1.5813 2.2687-1.5813z"
                  fill="currentColor"
                  stroke-width=".20707"
                />
                <path
                  d="m43.229 9.7656c-1.8975 0-3.2656 1.2375-3.2656 3.0938s1.54 3.0938 3.4375 3.0938c1.1464 0 2.157-0.45375 2.7827-1.2186l-1.3148-0.75969c-0.34719 0.37984-0.87484 0.60156-1.4678 0.60156-0.82328 0-1.5228-0.42969-1.7823-1.1172h4.8159c0.03781-0.1925 0.06016-0.39188 0.06016-0.60156 0-1.8545-1.3681-3.092-3.2656-3.092zm-1.6259 2.4922c0.21484-0.68578 0.80266-1.1172 1.6242-1.1172 0.82328 0 1.4111 0.43141 1.6242 1.1172zm20.133-2.4922c-1.8975 0-3.2656 1.2375-3.2656 3.0938s1.54 3.0938 3.4375 3.0938c1.1464 0 2.157-0.45375 2.7827-1.2186l-1.3148-0.75969c-0.34719 0.37984-0.87484 0.60156-1.4678 0.60156-0.82328 0-1.5228-0.42969-1.7823-1.1172h4.8159c0.03781-0.1925 0.06016-0.39188 0.06016-0.60156 0-1.8545-1.3681-3.092-3.2656-3.092zm-1.6242 2.4922c0.21484-0.68578 0.80265-1.1172 1.6242-1.1172 0.82328 0 1.4111 0.43141 1.6242 1.1172zm-6.7083 0.60156c0 1.0312 0.67375 1.7188 1.7188 1.7188 0.70812 0 1.2392-0.32141 1.5125-0.84562l1.32 0.76141c-0.54656 0.91094-1.5709 1.4592-2.8325 1.4592-1.8992 0-3.2656-1.2375-3.2656-3.0938s1.3681-3.0938 3.2656-3.0938c1.2616 0 2.2842 0.54828 2.8325 1.4592l-1.32 0.76141c-0.27328-0.52422-0.80438-0.84563-1.5125-0.84563-1.0433 0-1.7188 0.6875-1.7188 1.7188zm14.176-4.9844v7.9063h-1.5469v-7.9063zm-26.364 0-4.7627 8.25-4.7627-8.25h1.7858l2.9769 5.1563 2.9769-5.1563zm10.125 2.0625v1.6655c-0.17188-0.04984-0.35406-0.08421-0.55-0.08421-0.99859 0-1.7187 0.6875-1.7187 1.7187v2.5438h-1.5469v-5.8438h1.5469v1.5813c0-0.87312 1.0158-1.5813 2.2687-1.5813z"
                  stroke-width=".094907"
                />
                <path d="m13.856 0 13.856 24h-27.712z" stroke-width=".20707" />
              </svg>
            </a>
            <a
              href="#"
              className="mb-5 mr-5 hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0"
            >
              <svg
                className="h-11"
                viewBox="0 0 120 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.058 40.5994C31.0322 40.5994 39.9286 31.7031 39.9286 20.7289C39.9286 9.75473 31.0322 0.858398 20.058 0.858398C9.08385 0.858398 0.1875 9.75473 0.1875 20.7289C0.1875 31.7031 9.08385 40.5994 20.058 40.5994Z"
                  fill="currentColor"
                />
                <path
                  d="M33.3139 20.729C33.3139 19.1166 32.0101 17.8362 30.4211 17.8362C29.6388 17.8362 28.9272 18.1442 28.4056 18.6424C26.414 17.2196 23.687 16.2949 20.6518 16.1765L21.9796 9.96387L26.2951 10.8885C26.3429 11.9793 27.2437 12.8567 28.3584 12.8567C29.4965 12.8567 30.4211 11.9321 30.4211 10.7935C30.4211 9.65536 29.4965 8.73071 28.3584 8.73071C27.5522 8.73071 26.8406 9.20497 26.5086 9.89271L21.6954 8.87303C21.553 8.84917 21.4107 8.87303 21.3157 8.94419C21.1972 9.01535 21.1261 9.13381 21.1026 9.27613L19.6321 16.1999C16.5497 16.2949 13.7753 17.2196 11.7599 18.6662C11.2171 18.1478 10.495 17.8589 9.74439 17.86C8.13201 17.86 6.85156 19.1639 6.85156 20.7529C6.85156 21.9383 7.56272 22.9341 8.55897 23.3849C8.51123 23.6691 8.48781 23.9538 8.48781 24.2623C8.48781 28.7197 13.6807 32.348 20.083 32.348C26.4852 32.348 31.6781 28.7436 31.6781 24.2623C31.6781 23.9776 31.6543 23.6691 31.607 23.3849C32.6028 22.9341 33.3139 21.9144 33.3139 20.729ZM13.4434 22.7918C13.4434 21.6536 14.368 20.729 15.5066 20.729C16.6447 20.729 17.5694 21.6536 17.5694 22.7918C17.5694 23.9299 16.6447 24.855 15.5066 24.855C14.368 24.8784 13.4434 23.9299 13.4434 22.7918ZM24.9913 28.2694C23.5685 29.6921 20.8653 29.7872 20.083 29.7872C19.2768 29.7872 16.5736 29.6683 15.1742 28.2694C14.9612 28.0559 14.9612 27.7239 15.1742 27.5105C15.3877 27.2974 15.7196 27.2974 15.9331 27.5105C16.8343 28.4117 18.7314 28.7197 20.083 28.7197C21.4346 28.7197 23.355 28.4117 24.2324 27.5105C24.4459 27.2974 24.7778 27.2974 24.9913 27.5105C25.1809 27.7239 25.1809 28.0559 24.9913 28.2694ZM24.6116 24.8784C23.4735 24.8784 22.5488 23.9538 22.5488 22.8156C22.5488 21.6775 23.4735 20.7529 24.6116 20.7529C25.7502 20.7529 26.6748 21.6775 26.6748 22.8156C26.6748 23.9299 25.7502 24.8784 24.6116 24.8784Z"
                  fill="white"
                />
                <path
                  d="M108.412 16.6268C109.8 16.6268 110.926 15.5014 110.926 14.1132C110.926 12.725 109.8 11.5996 108.412 11.5996C107.024 11.5996 105.898 12.725 105.898 14.1132C105.898 15.5014 107.024 16.6268 108.412 16.6268Z"
                  fill="currentColor"
                />
                <path
                  d="M72.5114 24.8309C73.7446 24.8309 74.4557 23.9063 74.4084 23.0051C74.385 22.5308 74.3373 22.2223 74.29 21.9854C73.5311 18.7133 70.8756 16.2943 67.7216 16.2943C63.9753 16.2943 60.9401 19.6853 60.9401 23.8586C60.9401 28.0318 63.9753 31.4228 67.7216 31.4228C70.0694 31.4228 71.753 30.5693 72.9622 29.2177C73.5549 28.5538 73.4365 27.5341 72.7249 27.036C72.1322 26.6329 71.3972 26.7752 70.8517 27.2256C70.3302 27.6765 69.3344 28.5772 67.7216 28.5772C65.825 28.5772 64.2126 26.941 63.8568 24.7832H72.5114V24.8309ZM67.6981 19.1637C69.4051 19.1637 70.8756 20.4915 71.421 22.3173H63.9752C64.5207 20.468 65.9907 19.1637 67.6981 19.1637ZM61.0824 17.7883C61.0824 17.0771 60.5609 16.5078 59.897 16.3894C57.8338 16.0813 55.8895 16.8397 54.7752 18.2391V18.049C54.7752 17.1717 54.0636 16.6267 53.3525 16.6267C52.5697 16.6267 51.9297 17.2667 51.9297 18.049V29.6681C51.9297 30.427 52.4985 31.0908 53.2574 31.1381C54.0875 31.1854 54.7752 30.5454 54.7752 29.7154V23.7162C54.7752 21.0608 56.7668 18.8791 59.5173 19.1876H59.802C60.5131 19.1399 61.0824 18.5233 61.0824 17.7883ZM109.834 19.306C109.834 18.5233 109.194 17.8833 108.412 17.8833C107.629 17.8833 106.989 18.5233 106.989 19.306V29.7154C106.989 30.4981 107.629 31.1381 108.412 31.1381C109.194 31.1381 109.834 30.4981 109.834 29.7154V19.306ZM88.6829 11.4338C88.6829 10.651 88.0429 10.011 87.2602 10.011C86.4779 10.011 85.8379 10.651 85.8379 11.4338V17.7648C84.8655 16.7924 83.6562 16.3182 82.2096 16.3182C78.4632 16.3182 75.4281 19.7091 75.4281 23.8824C75.4281 28.0557 78.4632 31.4466 82.2096 31.4466C83.6562 31.4466 84.8893 30.9485 85.8613 29.9761C85.9797 30.6405 86.5729 31.1381 87.2602 31.1381C88.0429 31.1381 88.6829 30.4981 88.6829 29.7154V11.4338ZM82.2334 28.6245C80.0518 28.6245 78.2971 26.5145 78.2971 23.8824C78.2971 21.2742 80.0518 19.1399 82.2334 19.1399C84.4151 19.1399 86.1698 21.2504 86.1698 23.8824C86.1698 26.5145 84.3912 28.6245 82.2334 28.6245ZM103.527 11.4338C103.527 10.651 102.887 10.011 102.104 10.011C101.322 10.011 100.681 10.651 100.681 11.4338V17.7648C99.7093 16.7924 98.5 16.3182 97.0534 16.3182C93.307 16.3182 90.2719 19.7091 90.2719 23.8824C90.2719 28.0557 93.307 31.4466 97.0534 31.4466C98.5 31.4466 99.7327 30.9485 100.705 29.9761C100.824 30.6405 101.416 31.1381 102.104 31.1381C102.887 31.1381 103.527 30.4981 103.527 29.7154V11.4338ZM97.0534 28.6245C94.8717 28.6245 93.1174 26.5145 93.1174 23.8824C93.1174 21.2742 94.8717 19.1399 97.0534 19.1399C99.235 19.1399 100.99 21.2504 100.99 23.8824C100.99 26.5145 99.235 28.6245 97.0534 28.6245ZM117.042 29.7392V19.1637H118.299C118.963 19.1637 119.556 18.6656 119.603 17.9779C119.651 17.2428 119.058 16.6267 118.347 16.6267H117.042V14.6347C117.042 13.8758 116.474 13.2119 115.715 13.1646C114.885 13.1173 114.197 13.7573 114.197 14.5874V16.6501H113.011C112.348 16.6501 111.755 17.1483 111.708 17.836C111.66 18.571 112.253 19.1876 112.964 19.1876H114.173V29.7631C114.173 30.5454 114.814 31.1854 115.596 31.1854C116.426 31.1381 117.042 30.5216 117.042 29.7392Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
