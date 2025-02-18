// components/EnterpriseFeatures.tsx
"use client";

import { BiChevronRight } from "react-icons/bi";
import {
  RiCloudLine,
  RiShieldLine,
  RiSpeedLine,
  RiTeamLine,
  RiCodeLine,
  RiDatabaseLine,
} from "react-icons/ri";
import Link from "next/link";
import { Button, Card, Navlink } from "@thirdbracket/bracketui";
import { PiCloud } from "react-icons/pi";
import { MdSecurity } from "react-icons/md";

const EnterpriseFeatures = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20">
      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-12 space-y-2">
        <h2 className="font-bold text-center text-2xl sm:text-3xl lg:text-4xl    text-gray-950 dark:text-white">
          Enterprise Solutions
        </h2>
        <p className="text-base lg:text-lg text-center  text-gray-500  ">
          Powerful features designed to transform your business operations
        </p>
      </div>

      {/* Main Grid Layout */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Featured Card - Spans 2 columns */}
          <Card
            href="#"
            isExternal
            className="lg:col-span-2 h-full"
            cover={
              <div className="w-full h-64 flex items-center justify-center bg-white dark:bg-gray-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#282828fg_1px,transparent_1px),linear-gradient(to_bottom,#282828fg_1px,transparent_1px)] bg-[size:24px_24px]">
                <RiCloudLine className="w-32 h-32 text-gray-500" />
              </div>
            }
            header={
              <>
                <PiCloud className="inline-flex mr-2 w-6 h-6" />
                Cloud Infrastructure
              </>
            }
          >
            Enterprise-grade cloud infrastructure solutions built for scale,
            security, and performance. Leverage our expertise in cloud-native
            architectures and microservices.
          </Card>

          {/* Security Card */}
          <Card
            className="h-full"
            cover={
              <div className="w-full  flex items-center justify-center bg-white dark:bg-gray-950 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#282828fg_1px,transparent_1px),linear-gradient(to_bottom,#282828fg_1px,transparent_1px)] bg-[size:24px_24px]">
                <MdSecurity className="w-32 h-32 text-gray-500" />
              </div>
            }
            header={
              <div className="flex items-center gap-2">
                <RiShieldLine className="w-6 h-6" />
                <span>Security First</span>
              </div>
            }
          >
            Advanced security measures and compliance protocols to protect your
            business assets and customer data.
          </Card>

          {/* Performance Card */}
          <Card
            header={
              <div className="flex items-center gap-2">
                <RiSpeedLine className="w-6 h-6" />
                <span>High Performance</span>
              </div>
            }
          >
            Optimized systems and architectures designed for maximum performance
            and reliability.
          </Card>

          {/* Team Collaboration Card */}
          <Card
            header={
              <div className="flex items-center gap-2">
                <RiTeamLine className="w-6 h-6" />
                <span>Team Collaboration</span>
              </div>
            }
          >
            Enhanced team productivity with integrated collaboration tools and
            workflows.
          </Card>

          {/* Development Card */}
          <Card
            header={
              <div className="flex items-center gap-2">
                <RiCodeLine className="w-6 h-6" />
                <span>Custom Development</span>
              </div>
            }
          >
            Tailored software solutions built to address your specific business
            challenges.
          </Card>
        </div>

        {/* Bottom Feature Card */}
        <div className="mt-6">
          <Card
            href="#"
            isExternal
            className="bg-gradient-to-r from-gray-50 to-slate-50 dark:from-gray-950 dark:to-slate-950"
            header={
              <>
                <RiDatabaseLine className="inline-flex mr-2 w-6 h-6" />
                Data Analytics Platform
              </>
            }
          >
            <div className="flex flex-col md:flex-row items-center justify-between">
              <p className="md:max-w-2xl">
                Comprehensive data analytics platform with real-time insights,
                custom dashboards, and predictive analytics capabilities.
              </p>

              <Button size="sm" href="#" outline>
                Learn More
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <div className="flex justify-center mt-12">
        <Navlink
          as={Link}
          href="#"
          className="inline-flex items-center gap-1 text-gray-950 dark:text-white"
        >
          Explore Enterprise Solutions
          <span className="inline-flex items-center">
            <BiChevronRight size={20} />
          </span>
        </Navlink>
      </div>
    </section>
  );
};

export default EnterpriseFeatures;
