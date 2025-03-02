"use client";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";
import { Card, Navlink } from "@thirdbracket/bracketui";

const Solutions = () => {
  return (
    <section className="py-16 md:py-20 lg:py-24">
      <div className="space-y-8 md:space-y-10 lg:space-y-12 mx-auto">
        {/* Header group */}
        <div className="max-w-6xl  px-4 lg:px-0 flex flex-col lg:flex-row items-center  justify-center  gap-4 mx-auto">
          <h2 className="text-3xl  font-bold  text-gray-950 dark:text-gray-200 lg:text-right text-center ">
            Think Your Business Can't Afford a Professional Start?
          </h2>
          <p className="text-base md:text-xl text-gray-800/70 dark:text-gray-200/40 lg:text-left text-center ">
            Backed by a team of top-rated freelancers, now you can get the
            professional start your business deserves.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-start mx-auto justify-center">
          {/* Left Column - Featured Feature Card */}
          <div className="space-y-4">
            <Card
              href="#"
              className="h-full p-2"
              cover={
                // <div className="w-full h-full flex items-start justify-center ml-auto">
                <Image
                  src="feat.svg"
                  width={700}
                  height={500}
                  alt=""
                  className="aspect-[5/3] w-full h-full mt-4 mx-4 grayscale dark:hue-rotate-30   object-cover"
                ></Image>
                // </div>
              }
              header="Your Website Reflects your budget"
            >
              Your Website Is Your Business’s First Impression. Make your first
              impression count with a custom website—something your business
              couldn’t afford until now.
            </Card>
            <Card className="p-2" header="Finding the Right UI is Frustrating!">
              We’ve simplified UI design. Introducing Bracket UI—a minimal,
              geometric, pixel-perfect component library. Open-source and ready
              for React & Next.js. Stop overspending on menus, dropdowns, and
              forms.
            </Card>
          </div>

          {/* Right Column - Stack of Cards */}
          <div className="space-y-4">
            <Card
              cover={
                // <div className="w-full h-full flex items-start justify-center ml-auto">
                <Image
                  src="web.svg"
                  width={750}
                  height={500}
                  alt=""
                  className="aspect-[5/2] w-full h-full mt-4 mx-4   object-cover grayscale dark:hue-rotate-30"
                ></Image>
                // </div>
              }
              className="p-2 h-full"
              header="Missing Modern Features?"
            >
              Your Website Deserves More. Most budget websites miss out on
              essential features like image optimization, edge performance,
              accelerated rendering, cloud functions, and more. Now, experience
              them all—without raising your budget.
            </Card>

            <Card
              className="p-2"
              header="Struggling to Find the Right Marketer?"
            >
              Get a Whole Team. Finding the right freelancer is a gamble, and
              agencies break the bank. Our integrated team of marketers,
              developers, and designers delivers real results that drive your
              business forward.
            </Card>

            <Card
              className="p-2"
              href="#"
              isExternal
              header="SEO Takes Too Long!"
            >
              SEO can be slow and unpredictable. Our AI-driven strategies and
              marketplace expertise accelerate rankings and improve visibility
              faster.
            </Card>
          </div>
        </div>

        {/* Explore Link */}
        <div className="flex justify-center">
          <Navlink
            as={Link}
            href="#"
            className="inline-flex items-center gap-1 text-gray-950 dark:text-white"
          >
            Explore All Features
            <BiChevronRight size={20} />
          </Navlink>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
