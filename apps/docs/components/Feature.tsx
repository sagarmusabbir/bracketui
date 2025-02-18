// components/Features.tsx
"use client";

import { BiChevronRight } from "react-icons/bi";
import Image from "next/image";

import Link from "next/link";
import { Card, Navlink } from "@thirdbracket/bracketui";

const Features = () => {
  return (
    <section className="space-y-2  py-12 sm:py-16 md:py-20">
      <div className="lg:flex items-center justify-center gap-4 space-y-2 lg:space-y-0">
        <h2 className="font-bold text-center text-2xl sm:text-3xl lg:text-4xl    text-gray-950 dark:text-white ">
          Our Solutions
        </h2>
        <p className="text-base/6 lg:text-lg/8  text-center text-gray-500  ">
          End-to-end digital solutions for modern businesses
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mx-auto justify-center py-8">
        {/* Left Column - Featured Solution Card */}

        <Card
          href="#"
          className="h-full"
          isExternal
          cover={
            <div className="w-full h-full flex items-center justify-center bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]">
              <Image
                src="/coding.png"
                alt="Web Development Solutions"
                width={250}
                height={250}
                className="object-contain bg-white p-4"
              />
            </div>
          }
          header="Web Development"
        >
          Modern web applications built with cutting-edge technologies. From
          responsive websites to complex web applications, we deliver scalable
          solutions that drive business growth.
        </Card>

        {/* Right Column - Stack of Cards */}
        <div className="space-y-4">
          {/* Infrastructure */}
          <Card header=" Infrastructure">
            Cloud-native infrastructure solutions with AWS, focusing on
            scalability, security, and cost optimization.
          </Card>

          {/* DevOps */}
          <Card header="DevOps">
            Streamline your development workflow with our CI/CD pipelines and
            automated deployment solutions.
          </Card>

          {/* Digital Marketing */}
          <Card header="  Digital Marketing">
            Data-driven digital marketing strategies to increase your online
            presence and drive customer engagement.
          </Card>

          {/* WordPress Solutions */}
          <Card href="#" isExternal header="   WordPress Solutions">
            Custom WordPress development, optimization, and maintenance for
            business websites and e-commerce platforms.
          </Card>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Navlink
          as={Link}
          href="#"
          className="inline-flex items-center gap-1 text-gray-950 dark:text-white"
        >
          Explore All Solutions
          <span className="inline-flex items-center">
            <BiChevronRight size={20} />
          </span>
        </Navlink>
      </div>
    </section>
  );
};

export default Features;
