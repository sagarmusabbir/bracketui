// components/Features.tsx
"use client";

import { BiChevronRight } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import { Card, Navlink } from "@thirdbracket/bracketui";
import {
  PiCodeLight,
  PiCloudLight,
  PiRocketLaunchLight,
  PiChartLineUpLight,
  PiDevicesLight,
} from "react-icons/pi";

const Features = () => {
  return (
    <section className="space-y-8 py-16 md:py-24">
      <div className="lg:flex items-center justify-center gap-4 space-y-2 lg:space-y-0">
        <h2 className="font-semibold text-center text-3xl md:text-4xl lg:text-5xl leading-none text-gray-950 dark:text-white">
          Our Solutions
        </h2>
        <p className="text-base md:text-lg lg:text-xl text-center text-gray-600 dark:text-gray-500">
          End-to-end digital solutions for modern businesses
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start mx-auto justify-center py-8">
        {/* Left Column - Featured Solution Card */}
        <Card
          href="/solutions/web-development"
          className="h-full"
          cover={
            <div className="aspect-[5/3] relative bg-gray-100/60 dark:bg-gray-900/30 rounded-t-lg overflow-hidden">
              <Image
                src="/k.svg"
                alt="Web Development Solutions"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="object-contain "
              />
            </div>
          }
        >
          <div className="flex items-center gap-2 mb-2">
            <PiCodeLight className="w-6 h-6 text-gray-900 dark:text-white" />
            <h3 className="text-xl font-semibold">Web Development</h3>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            Modern web applications built with cutting-edge technologies. From
            responsive websites to complex web applications, we deliver scalable
            solutions that drive business growth.
          </p>
        </Card>

        {/* Right Column - Stack of Cards */}
        <div className="space-y-4">
          {/* Infrastructure */}
          <Card href="/solutions/infrastructure">
            <div className="flex items-center gap-2 mb-2">
              <PiCloudLight className="w-6 h-6 text-gray-900 dark:text-white" />
              <h3 className="text-xl font-semibold">Infrastructure</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Cloud-native infrastructure solutions with AWS, focusing on
              scalability, security, and cost optimization.
            </p>
          </Card>

          {/* DevOps */}
          <Card href="/solutions/devops">
            <div className="flex items-center gap-2 mb-2">
              <PiRocketLaunchLight className="w-6 h-6 text-gray-900 dark:text-white" />
              <h3 className="text-xl font-semibold">DevOps</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Streamline your development workflow with our CI/CD pipelines and
              automated deployment solutions.
            </p>
          </Card>

          {/* Digital Marketing */}
          <Card href="/solutions/digital-marketing">
            <div className="flex items-center gap-2 mb-2">
              <PiChartLineUpLight className="w-6 h-6 text-gray-900 dark:text-white" />
              <h3 className="text-xl font-semibold">Digital Marketing</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Data-driven digital marketing strategies to increase your online
              presence and drive customer engagement.
            </p>
          </Card>

          {/* WordPress Solutions */}
          <Card href="/solutions/wordpress">
            <div className="flex items-center gap-2 mb-2">
              <PiDevicesLight className="w-6 h-6 text-gray-900 dark:text-white" />
              <h3 className="text-xl font-semibold">WordPress Solutions</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Custom WordPress development, optimization, and maintenance for
              business websites and e-commerce platforms.
            </p>
          </Card>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Navlink
          as={Link}
          href="/solutions"
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
