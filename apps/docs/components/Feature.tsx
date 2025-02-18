// components/Features.tsx
"use client";

import { BiChevronRight } from "react-icons/bi";
import Image from "next/image";

import Link from "next/link";
import { Card, Navlink } from "@thirdbracket/bracketui";
import {
  PiCloudLight,
  PiRocketLaunchLight,
  PiChartLineUpLight,
  PiDevicesLight,
} from "react-icons/pi";

const Features = () => {
  return (
    <section className="space-y-2  py-12 sm:py-16 md:py-20">
      <div className="lg:flex items-center justify-center gap-4 space-y-1 lg:space-y-0">
        <h2 className="font-bold text-center text-[28px] sm:text-4xl lg:text-5xl    text-gray-950 dark:text-white ">
          Our Solutions
        </h2>
        <p className="text-base lg:text-lg  text-center text-gray-500  ">
          End-to-end digital solutions for modern businesses
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mx-auto justify-center py-8">
        {/* Left Column - Featured Solution Card */}

        <Card
          href="#"
          isExternal
          className="h-full"
          cover={
            <div className="relative aspect-[5/3]">
              <Image
                src="/dev.png"
                alt="Web Development Solutions"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="object-contain "
              />
            </div>
          }
          header="Web Development"
        >
          {/* <div className="flex items-center gap-2 mb-2">
            <PiWebhooksLogoFill className="w-6 h-6 text-gray-950 dark:text-white" />
            <h3 className="text-xl font-bold text-gray-950 dark:text-white">
              Web Development
            </h3>
          </div>
          <p className="text-sm text-gray-500  tracking-normal leading-relaxed">
            Modern web applications built with cutting-edge technologies. From
            responsive websites to complex web applications, we deliver scalable
            solutions that drive business growth.
          </p> */}
          Modern web applications built with cutting-edge technologies. From
          responsive websites to complex web applications, we deliver scalable
          solutions that drive business growth.
        </Card>

        {/* Right Column - Stack of Cards */}
        <div className="space-y-4">
          {/* Infrastructure */}
          <Card>
            <div className="flex items-center gap-2 mb-2">
              <PiCloudLight className="w-6 h-6 text-gray-950 dark:text-white" />
              <h3 className="text-xl font-bold text-gray-950 dark:text-white">
                Infrastructure
              </h3>
            </div>
            <p className="text-sm text-gray-500  tracking-normal leading-relaxed">
              Cloud-native infrastructure solutions with AWS, focusing on
              scalability, security, and cost optimization.
            </p>
          </Card>

          {/* DevOps */}
          <Card>
            <div className="flex items-center gap-2 mb-2">
              <PiRocketLaunchLight className="w-6 h-6 text-gray-950 dark:text-white" />
              <h3 className="text-xl font-bold text-gray-950 dark:text-white">
                DevOps
              </h3>
            </div>
            <p className="text-sm text-gray-500  tracking-normal leading-relaxed">
              Streamline your development workflow with our CI/CD pipelines and
              automated deployment solutions.
            </p>
          </Card>

          {/* Digital Marketing */}
          <Card>
            <div className="flex items-center gap-2 mb-2">
              <PiChartLineUpLight className="w-6 h-6 text-gray-950 dark:text-white" />
              <h3 className="text-xl font-bold text-gray-950 dark:text-white">
                Digital Marketing
              </h3>
            </div>
            <p className="text-sm text-gray-500  tracking-normal leading-relaxed">
              Data-driven digital marketing strategies to increase your online
              presence and drive customer engagement.
            </p>
          </Card>

          {/* WordPress Solutions */}
          <Card href="#" isExternal>
            <div className="flex items-center gap-2 mb-2">
              <PiDevicesLight className="w-6 h-6 text-gray-950 dark:text-white" />
              <h3 className="text-xl font-bold text-gray-950 dark:text-white">
                WordPress Solutions
              </h3>
            </div>
            <p className="text-sm text-gray-500  tracking-normal leading-relaxed">
              Custom WordPress development, optimization, and maintenance for
              business websites and e-commerce platforms.
            </p>
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
