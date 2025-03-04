import { Card } from "@thirdbracket/bracketui";
import { FcCollaboration } from "react-icons/fc";
import { GiGrowth, GiStack, GiTeamIdea, GiUnlocking } from "react-icons/gi";
import { GrActions, GrUserExpert } from "react-icons/gr";

export function FeatureTwo() {
  return (
    <section className="py-8 md:py-16 ">
      <div className="mx-auto max-w-screen-xl  ">
        <div className="mx-auto mb-8 max-w-md sm:max-w-4xl lg:max-w-6xl text-center lg:mb-16">
          <h2 className="mb-4 text-3xl lg:text-4xl font-bold  text-gray-800 dark:text-gray-200">
            Best of Both Worlds-The Perfect&nbsp;Middle&nbsp;Ground
          </h2>
          <p className="text-gray-900/70 dark:text-gray-50/60  lg:text-xl  ">
            Freelancers can be unreliable. Agencies charge a premium. We offer
            the expertise, structure, and execution of an agency—without the
            overhead cost.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3 ">
          <Card
            cover={
              <GrUserExpert className="h-7 w-7 text-gray-600 dark:text-gray-300 lg:h-8 lg:w-8 ml-4 mt-4 fill-current" />
            }
            header="Expertise & Flexibility"
          >
            Experience agency expertise with freelancer flexibility. Access a
            unified team of top-rated professionals, not just scattered
            freelancers.
          </Card>
          <Card
            cover={
              <GiStack className="h-7 w-7 text-gray-600 dark:text-gray-300 lg:h-8 lg:w-8 ml-4 mt-4 fill-current" />
            }
            header="Modern Stack"
          >
            Delivering the best of both worlds: Next.js and WordPress, with deep
            customization tailored to your needs.
          </Card>
          <Card
            cover={
              <GiGrowth className="h-7 w-7 text-gray-600 dark:text-gray-300 lg:h-8 lg:w-8 ml-4 mt-4 fill-current" />
            }
            header="Built for Growth"
          >
            We don’t just build websites; from the start, we ensure your site is
            optimized for SEO, showcases your branding, and integrates digital
            marketing strategies to save you time in the long run.
          </Card>
          <Card
            cover={
              <GiTeamIdea className="h-7 w-7 text-gray-600 dark:text-gray-300 lg:h-8 lg:w-8 ml-4 mt-4 fill-current" />
            }
            header="Seamless Collaboration"
          >
            Unlike freelancers working in silos, our developers, marketers, and
            designers collaborate seamlessly, ensuring consistent,
            results-driven strategies tailored to your vision.
          </Card>
          <Card
            cover={
              <GiUnlocking className="h-7 w-7 text-gray-600 dark:text-gray-300 lg:h-8 lg:w-8 ml-4 mt-4 fill-current" />
            }
            header="No Lock-in, No Bloat"
          >
            Agencies sell retainers, and freelancers leave gaps. We provide
            transparent, scalable solutions without unnecessary overhead.
          </Card>
          <Card
            isExternal
            href="#"
            cover={
              <GrActions className="h-7 w-7 text-gray-600 dark:text-gray-300 lg:h-8 lg:w-8 ml-4 mt-4 fill-current" />
            }
            header="Get Started Today"
          >
            Keep your company’s lights on with customizable, iterative, and
            structured workflows built for all efficient teams and individual.
          </Card>
        </div>
      </div>
    </section>
  );
}
