import {
  Tab,
  TabList,
  TabPanel,
  TabContent,
  Card,
  Navlink,
} from "@thirdbracket/bracketui";
import {
  PiCodeLight,
  PiCloudLight,
  PiRocketLaunchLight,
  PiWebhooksLogoFill,
  PiChartLineUpLight,
  PiDevicesLight,
} from "react-icons/pi";
import Image from "next/image";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";

const TabService = () => {
  return (
    <Tab defaultValue="code" className="w-full  mx-auto">
      <TabList>
        <TabPanel value="code" icon={<PiCodeLight />}>
          Code
        </TabPanel>
        <TabPanel value="cloud" icon={<PiCloudLight />}>
          Cloud
        </TabPanel>
        <TabPanel value="devops" icon={<PiRocketLaunchLight />}>
          DevOps
        </TabPanel>
      </TabList>

      <TabContent value="code">
        {/* <div className="py-4">
          <h3 className="text-xl font-bold text-gray-950 dark:text-white">
            Web Development
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Modern web applications built with cutting-edge technologies.
          </p>
        </div> */}

        <section className="space-y-8 py-16 md:py-24">
          <div className="space-y-2 ">
            <h2 className="font-bold text-left text-2xl md:text-3xl lg:text-4xl leading-none text-gray-950 dark:text-white tracking-tight">
              Code
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-left text-gray-500  leading-relaxed">
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
            >
              <div className="flex items-center gap-2 mb-2">
                <PiWebhooksLogoFill className="w-6 h-6 text-gray-950 dark:text-white" />
                <h3 className="text-xl font-bold text-gray-950 dark:text-white">
                  Web Development
                </h3>
              </div>
              <p className="text-sm text-gray-500  tracking-normal leading-relaxed">
                Modern web applications built with cutting-edge technologies.
                From responsive websites to complex web applications, we deliver
                scalable solutions that drive business growth.
              </p>
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
                  Streamline your development workflow with our CI/CD pipelines
                  and automated deployment solutions.
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
                  Data-driven digital marketing strategies to increase your
                  online presence and drive customer engagement.
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
                  Custom WordPress development, optimization, and maintenance
                  for business websites and e-commerce platforms.
                </p>
              </Card>
            </div>
          </div>

          <div className="flex justify-start mt-8">
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
      </TabContent>

      <TabContent value="cloud">
        <section className="space-y-8 py-16 md:py-24">
          <div className="space-y-2 ">
            <h2 className="font-bold text-left text-2xl md:text-3xl lg:text-4xl leading-none text-gray-950 dark:text-white tracking-tight">
              Cloud
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-left text-gray-500  leading-relaxed">
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
            >
              <div className="flex items-center gap-2 mb-2">
                <PiWebhooksLogoFill className="w-6 h-6 text-gray-950 dark:text-white" />
                <h3 className="text-xl font-bold text-gray-950 dark:text-white">
                  Web Development
                </h3>
              </div>
              <p className="text-sm text-gray-500  tracking-normal leading-relaxed">
                Modern web applications built with cutting-edge technologies.
                From responsive websites to complex web applications, we deliver
                scalable solutions that drive business growth.
              </p>
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
                  Streamline your development workflow with our CI/CD pipelines
                  and automated deployment solutions.
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
                  Data-driven digital marketing strategies to increase your
                  online presence and drive customer engagement.
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
                  Custom WordPress development, optimization, and maintenance
                  for business websites and e-commerce platforms.
                </p>
              </Card>
            </div>
          </div>

          <div className="flex justify-start mt-8">
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
      </TabContent>

      <TabContent value="devops">
        <section className="space-y-8 py-16 md:py-24">
          <div className="space-y-2 ">
            <h2 className="font-bold text-left text-2xl md:text-3xl lg:text-4xl leading-none text-gray-950 dark:text-white tracking-tight">
              Devops
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-left text-gray-500  leading-relaxed">
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
            >
              <div className="flex items-center gap-2 mb-2">
                <PiWebhooksLogoFill className="w-6 h-6 text-gray-950 dark:text-white" />
                <h3 className="text-xl font-bold text-gray-950 dark:text-white">
                  Web Development
                </h3>
              </div>
              <p className="text-sm text-gray-500  tracking-normal leading-relaxed">
                Modern web applications built with cutting-edge technologies.
                From responsive websites to complex web applications, we deliver
                scalable solutions that drive business growth.
              </p>
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
                  Streamline your development workflow with our CI/CD pipelines
                  and automated deployment solutions.
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
                  Data-driven digital marketing strategies to increase your
                  online presence and drive customer engagement.
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
                  Custom WordPress development, optimization, and maintenance
                  for business websites and e-commerce platforms.
                </p>
              </Card>
            </div>
          </div>

          <div className="flex justify-start mt-8">
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
      </TabContent>
    </Tab>
  );
};

export default TabService;
