// components/Services.tsx
"use client";

import { BiChevronRight } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import { Card, Navlink } from "@thirdbracket/bracketui";
import {
  PiDatabaseLight,
  PiBrowsersLight,
  PiShoppingCartLight,
  PiChartLineUpLight,
  PiCodeBlock,
} from "react-icons/pi";

const Services = () => {
  return (
    <section className="space-y-2  py-12 sm:py-16 md:py-20">
      <div className="lg:flex items-center justify-center gap-4 space-y-2 lg:space-y-0">
        <h2 className="font-bold text-center text-[28px] sm:text-4xl lg:text-5xl    text-gray-950 dark:text-white ">
          Our Services
        </h2>
        <p className="text-base lg:text-lg  text-center text-gray-500 ">
          Comprehensive digital services for your business needs
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mx-auto justify-center py-8">
        {/* Left Column - Main Service */}
        <div className="lg:col-span-1 space-y-8">
          <Card
            href="#"
            isExternal
            className="relative"
            cover={
              <div className="aspect-[5/3] relative ">
                <Image
                  src="/app.svg"
                  alt="Custom Development"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-contain"
                />
              </div>
            }
          >
            <div className="flex items-center gap-2 mb-2">
              <PiCodeBlock className="w-6 h-6 text-gray-900 dark:text-white" />
              <h3 className="text-xl font-bold text-gray-950 dark:text-white">
                Custom Development
              </h3>
            </div>
            <p className="text-sm text-gray-500  tracking-normal leading-relaxed">
              Tailored software solutions built with modern technologies to meet
              your specific business requirements.
            </p>
          </Card>

          <Card href="#">
            <div className="flex items-center gap-2 mb-2">
              <PiDatabaseLight className="w-6 h-6 text-gray-900 dark:text-white" />
              <h3 className="text-xl font-bold text-gray-950 dark:text-white">
                Database Solutions
              </h3>
            </div>
            <p className="text-sm text-gray-500  tracking-normal leading-relaxed">
              Robust database design and optimization services for efficient
              data management.
            </p>
          </Card>
        </div>

        {/* Middle Column - Featured Service */}
        <div className="lg:col-span-1 space-y-8">
          <Card
            href="#"
            className="h-full"
            cover={
              <div className="aspect-[3/4] relative ">
                <Image
                  src="/tall.svg"
                  alt="Web Applications"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-contain"
                />
              </div>
            }
          >
            <div className="flex items-center gap-2 mb-2">
              <PiBrowsersLight className="w-6 h-6 text-gray-900 dark:text-white" />
              <h3 className="text-xl font-bold text-gray-950 dark:text-white">
                Web Applications
              </h3>
            </div>
            <p className="text-sm text-gray-500  tracking-normal leading-relaxed">
              Full-stack web applications with modern UI/UX design and robust
              backend architecture. Built for scale and performance using the
              latest web technologies.
            </p>
          </Card>
        </div>

        {/* Right Column - Additional Services */}
        <div className="lg:col-span-1 space-y-8">
          <Card href="#">
            <div className="flex items-center gap-2 mb-2">
              <PiShoppingCartLight className="w-6 h-6 text-gray-900 dark:text-white" />
              <h3 className="text-xl font-bold text-gray-950 dark:text-white">
                E-Commerce Solutions
              </h3>
            </div>
            <p className="text-sm text-gray-500  tracking-normal leading-relaxed">
              Custom e-commerce platforms with seamless payment integration and
              inventory management.
            </p>
          </Card>

          <Card
            href="#"
            className="relative"
            cover={
              <div className="relative aspect-[5/3] ">
                <Image
                  src="/app.svg"
                  alt="Analytics & Reporting"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                  className="object-contain"
                />
              </div>
            }
          >
            <div className="flex items-center gap-2 mb-2">
              <PiChartLineUpLight className="w-6 h-6 text-gray-900 dark:text-white" />
              <h3 className="text-xl font-bold text-gray-950 dark:text-white">
                Analytics & Reporting
              </h3>
            </div>
            <p className="text-sm text-gray-500  tracking-normal leading-relaxed">
              Data-driven insights and custom reporting solutions for informed
              decision making.
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
          View All Services
          <span className="inline-flex items-center">
            <BiChevronRight size={20} />
          </span>
        </Navlink>
      </div>
    </section>
  );
};

export default Services;
