// components/Hero.tsx - Modified version
import { Button } from "@thirdbracket/bracketui";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="space-y-8 py-16 sm:py-20 md:py-24">
      {/* <h1 className="max-w-lg sm:max-w-xl     lg:max-w-4xl xl:max-w-6xl mx-auto font-extrabold text-gray-950 dark:text-white text-4xl sm:text-[44px] md:text-[50px]  leading-[1.1] lg:text-[60px] text-center  "> */}
      <h1 className="px-3 md:px-0 text-[40px]/[1.1] sm:text-5xl/[1.2]  font-extrabold mx-auto text-center lg:text-6xl/[1.2] md:max-w-5xl">
        Bringing Enterprise Solutions within Your Budget
      </h1>

      <p className="text-sm/6 lg:text-lg/8 text-center  text-gray-500   mx-auto px-3 md:px-0 md:max-w-5xl    ">
        We're a team of top-rated freelancers from leading marketplaces,
        offering <strong>custom web development</strong>, enterprise-grade
        infrastructure, and efficient business solutions.
      </p>

      <div className="flex flex-wrap gap-4 items-center justify-center">
        {/* Desktop buttons */}
        <div className="hidden md:block">
          <Button size="lg" outline as={Link} href="#">
            Let's Grow
          </Button>
        </div>
        <div className="hidden md:block">
          <Button size="lg" as={Link} href="#">
            Our Solutions
          </Button>
        </div>

        {/* Mobile buttons */}
        <div className="md:hidden">
          <Button size="md" outline as={Link} href="#">
            Let's Grow
          </Button>
        </div>
        <div className="md:hidden">
          <Button size="md" as={Link} href="#">
            Our Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
