// components/Hero.tsx - Modified version
import { Button } from "@thirdbracket/bracketui";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="space-y-8 py-16 md:py-24">
      <h1 className="max-w-md md:max-w-4xl mx-auto font-extrabold text-gray-950 dark:text-white text-4xl md:text-5xl lg:text-6xl text-center">
        Bringing Enterprise Web Solutions within Your Budget
      </h1>

      <p className="text-base md:text-lg lg:text-xl text-center max-w-2xl mx-auto text-gray-500">
        We're a team of top-rated freelancers from leading marketplaces,
        offering custom web development, enterprise-grade infrastructure, and
        efficient business solutions.
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
