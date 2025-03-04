import { Card } from "@thirdbracket/bracketui";
import { GrActions } from "react-icons/gr";

export function FeatureTwo() {
  return (
    <section className="py-8 md:py-16 ">
      <div className="mx-auto max-w-screen-xl  ">
        <div className="mx-auto mb-8 max-w-md sm:max-w-4xl lg:max-w-6xl text-center lg:mb-16">
          <h2 className="mb-4 text-3xl lg:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Best of Both Worlds, the Perfect&nbsp;Middle&nbsp;Ground
          </h2>
          <p className="text-gray-500 dark:text-gray-400 lg:text-xl  ">
            Here at Flowbite we focus on markets where technology, innovation,
            and capital can unlock long-term value and drive economic growth.
          </p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3 ">
          <Card
            cover={
              <GrActions className="h-7 w-7 text-gray-600 dark:text-gray-300 lg:h-8 lg:w-8 ml-4 mt-4 fill-current" />
            }
            header="Expertise & Flexibility"
          >
            Experience agency expertise with freelancer flexibility with an
            unified team of top-rated professionals.
          </Card>
          <Card
            cover={
              <GrActions className="h-7 w-7 text-gray-600 dark:text-gray-300 lg:h-8 lg:w-8 ml-4 mt-4 fill-current" />
            }
            header="Modern Stack"
          >
            Delivering the best of both worlds: Next.js and WordPress.
          </Card>
          <Card
            cover={
              <GrActions className="h-7 w-7 text-gray-600 dark:text-gray-300 lg:h-8 lg:w-8 ml-4 mt-4 fill-current" />
            }
            header="Built for Growth"
          >
            We don’t just build websites; from the start, we ensure your site is
            optimized for SEO.
          </Card>
          <Card
            cover={
              <GrActions className="h-7 w-7 text-gray-600 dark:text-gray-300 lg:h-8 lg:w-8 ml-4 mt-4 fill-current" />
            }
            header="Seamless Collaboration"
          >
            Unlike freelancers working in silos, our developers, marketers, and
            designers collaborate seamlessly.
          </Card>
          <Card
            cover={
              <GrActions className="h-7 w-7 text-gray-600 dark:text-gray-300 lg:h-8 lg:w-8 ml-4 mt-4 fill-current" />
            }
            header="Operations"
          >
            Keep your company’s lights on with customizable, iterative, and
            structured workflows built for all efficient teams and individual.
          </Card>
          <Card
            cover={
              <GrActions className="h-7 w-7 text-gray-600 dark:text-gray-300 lg:h-8 lg:w-8 ml-4 mt-4 fill-current" />
            }
            header="Operations"
          >
            Keep your company’s lights on with customizable, iterative, and
            structured workflows built for all efficient teams and individual.
          </Card>
        </div>
      </div>
    </section>
  );
}
