// import { Button, Card } from "@thirdbracket/core";

import { Bracket, Button, Card } from "@thirdbracket/bracketui";

import Image from "next/image";

import Link from "next/link";
import { BiArrowToRight } from "react-icons/bi";
import {
  RiCopyleftFill,
  RiImageLine,
  RiLoginBoxLine,
  RiLogoutBoxRLine,
  RiPhoneLine,
  RiShieldLine,
} from "react-icons/ri";

export default function Page() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-950 dark:text-white">
      <Bracket>
        <section>
          <div className="py-8 lg:py-16 mx-auto space-y-8">
            <h1 className="mb-4 text-[2.80rem] md:text-5xl font-extrabold leading-none  bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 dark:from-gray-200 dark:via-gray-100 dark:to-gray-200 text-transparent bg-clip-text lg:text-6xl ">
              Enterprise Solutions Without the Overhead&nbsp;Cost
            </h1>
            <h3 className="text-4xl text-gray-800 dark:text-gray-200 mb-8 font-bold">
              Buttons
            </h3>
            <div className="flex flex-wrap gap-4 ">
              <Button size="xs" as={Link} href="#">
                Extra Small
              </Button>
              <Button size="sm" as={Link} href="#">
                Default Small
              </Button>
              <Button size="md" as={Link} href="#">
                Default Medium
              </Button>
              <Button size="lg" as={Link} href="#">
                Default Large
              </Button>
              <Button size="xl" as={Link} href="#">
                Default xLarge
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 ">
              <Button outline size="xs" as={Link} href="#">
                Default xSmall
              </Button>
              <Button outline size="sm" as={Link} href="#">
                Default Small
              </Button>
              <Button outline size="md" as={Link} href="#">
                Default Medium
              </Button>
              <Button outline size="lg" as={Link} href="#">
                Default Large
              </Button>
              <Button outline size="xl" as={Link} href="#">
                Default xLarge
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 ">
              <Button size="xs" as={Link} href="#">
                Default Icon
                <span>
                  <RiLoginBoxLine className="ml-2" />
                </span>
              </Button>
              <Button outline size="sm" as={Link} href="#">
                <span>
                  <RiPhoneLine className="mr-2" />
                </span>{" "}
                Outline Icon
              </Button>
              <Button disabled size="md" as={Link} href="#">
                Diasabled Icon
                <span>
                  <RiCopyleftFill className="ml-2" />
                </span>
              </Button>
              <Button outline isLoading size="lg" as={Link} href="#">
                Default Large Icon
                <span>
                  <BiArrowToRight className="ml-2" />
                </span>
              </Button>
              <Button size="xl" as={Link} href="#">
                Default xLarge
                <span>
                  <RiLogoutBoxRLine className="ml-2" />
                </span>
              </Button>
            </div>
          </div>
        </section>
        <section>
          <div className="py-8 lg:py-16 mx-auto space-y-8">
            <h3 className="text-3xl text-gray-800 dark:text-gray-200 mb-8">
              Card Components
            </h3>

            {/* Basic Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Simple Card */}
              <Card header="Basic Card">
                This is a basic card with just header and content.
              </Card>

              {/* Card with Icon Header */}
              <Card
                header={
                  <div className="flex items-center gap-2">
                    <RiShieldLine className="w-6 h-6" />
                    <span>Card with Icon</span>
                  </div>
                }
              >
                A card with an icon in the header section.
              </Card>

              {/* Clickable Card with External Link */}
              <Card
                href="https://example.com"
                isExternal
                header="Clickable Card"
              >
                This card is clickable and opens in a new tab.
              </Card>
            </div>

            {/* Cards with Images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Small Image Card */}
              <Card
                cover={
                  <div className="flex justify-center items-center bg-gray-50 dark:bg-gray-900/50 p-8">
                    <div className="relative w-full aspect-[850/450]">
                      <Image
                        src="/wide.svg"
                        alt="Wide image"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </div>
                }
                header="Wide Image Card"
              >
                Card with a wide format image cover.
              </Card>

              {/* Icon Cover Card */}
              <Card
                cover={
                  // <div className="flex justify-center items-center p-8 bg-gray-100 dark:bg-gray-800">
                  //   <RiImageLine className="w-48 h-48 text-gray-600 dark:text-gray-300" />
                  // </div>

                  <div className="flex justify-center items-center bg-gray-50 dark:bg-gray-900/50 p-8">
                    <div className="relative w-full aspect-[850/450]">
                      {/* <Image
    src="/wide.svg"
    alt="Wide image"
    fill
    className="object-cover"
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  /> */}
                      <RiImageLine className="w-[200px] h-auto self-center text-gray-600 dark:text-gray-300" />
                    </div>
                  </div>
                }
                header="Icon Cover Card"
              >
                Card with an icon as the cover image.
              </Card>
            </div>

            {/* Custom Styled Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Custom Background Card */}
              <Card
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                header="Custom Background"
              >
                Card with custom background styling.
              </Card>

              {/* Custom Border Card */}
              <Card className="border-2 border-blue-500" header="Custom Border">
                Card with custom border styling.
              </Card>

              {/* Custom Shadow Card */}
              <Card
                className="shadow-xl hover:shadow-2xl transition-shadow"
                header="Interactive Card"
              >
                Card with custom shadow and hover effects.
              </Card>
            </div>
          </div>
        </section>
      </Bracket>
    </main>
  );
}
