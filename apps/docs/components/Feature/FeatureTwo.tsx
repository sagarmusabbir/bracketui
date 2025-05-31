import { Card } from "@thirdbracket/bracketui";

import { GoStack } from "react-icons/go";
import { GrActions } from "react-icons/gr";

import { IoMedalOutline } from "react-icons/io5";
import { MdOutlineAutoGraph } from "react-icons/md";
import { RiLockUnlockLine } from "react-icons/ri";
import { TiGroupOutline } from "react-icons/ti";

export function FeatureTwo() {
  return (
    <section className="py-8 sm:py-12 md:py-16">
      <div className="mx-auto max-w-screen-xl  ">
        <div className="mx-auto mb-8 md:mb-12 lg:mb-16 xl:max-w-6xl lg:max-w-6xl  md:max-w-3xl max-w-lg sm:max-w-xl">
          <h2 className="mb-4 md:mb-6  text-3xl lg:text-4xl font-extrabold  text-gray-950 dark:text-white  px-4 lg:px-0 text-center tracking-wide">
            Best of Both Worlds- The Perfect Middle&nbsp;Ground
          </h2>
          <p className="text-gray-950/60 text-base md:text-lg lg:text-xl dark:text-gray-200/60 text-center px-4 lg:px-0 font-light  ">
            Freelancers can be unreliable. Agencies charge a premium. We offer
            the expertise, structure, and execution of an agency—without the
            overhead cost.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3 ">
          <Card
            size="lg"
            isIcon
            cover={
              <IoMedalOutline className="h-12 w-12 text-gray-600 dark:text-gray-300   fill-current" />
            }
            header="Expertise & Flexibility"
          >
            <span className=" font-light">
              Experience agency expertise with freelancer flexibility. Access a
              unified team of top-rated professionals, not just scattered
              freelancers.
            </span>
          </Card>
          <Card
            size="lg"
            isIcon
            cover={
              <GoStack className="h-12 w-12 text-gray-600 dark:text-gray-300  fill-current" />
            }
            header="Modern Stack"
          >
            <span className="font-light">
              Delivering the best of both worlds: Next.js and WordPress, with
              deep customization tailored to your needs.
            </span>
          </Card>
          <Card
            size="lg"
            isIcon
            cover={
              <MdOutlineAutoGraph className="h-12 w-12 text-gray-600 dark:text-gray-300   fill-current" />
            }
            header="Built for Growth"
          >
            <span className="font-light">
              We don’t just build websites; from the start, we ensure your site
              is optimized for SEO, showcases your branding, and integrates
              digital marketing strategies to save you time in the long run.
            </span>
          </Card>
          <Card
            size="lg"
            isIcon
            cover={
              <TiGroupOutline className="h-12 w-12 text-gray-600 dark:text-gray-300  fill-current" />
            }
            header="Seamless Collaboration"
          >
            <span className="font-light">
              Unlike freelancers working in silos, our developers, marketers,
              and designers collaborate seamlessly, ensuring consistent,
              results-driven strategies tailored to your vision.
            </span>
          </Card>
          <Card
            size="lg"
            isIcon
            cover={
              <RiLockUnlockLine className="h-12 w-12 text-gray-600 dark:text-gray-300  fill-current" />
            }
            header="No Lock-in, No Bloat"
          >
            <span className="font-light">
              Agencies sell retainers, and freelancers leave gaps. We provide
              transparent, scalable solutions without unnecessary overhead.
            </span>
          </Card>
          <Card
            className=" bg-white dark:bg-gray-950 bg-[url(/pattern.svg)]"
            size="lg"
            isExternal
            isIcon
            href="#"
            cover={
              <GrActions className="h-12 w-12 text-gray-600 dark:text-gray-300   fill-current" />
            }
            header="Get Started Today"
          >
            <span className=" font-light">
              Keep your company’s lights on with customizable, iterative, and
              structured workflows built for all efficient teams and individual.
            </span>
          </Card>
        </div>
      </div>
    </section>
  );
}
