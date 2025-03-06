import { Card } from "@thirdbracket/bracketui";
import Image from "next/image";

export function FeatureOne() {
  return (
    <section className="py-8 sm:py-12 md:py-16">
      {/* Header Container */}
      <div className="mx-auto max-w-screen-xl">
        {/* Title group with flex layout on large screens */}
        <div className="mx-auto mb-8 md:mb-12 lg:mb-16 xl:max-w-6xl lg:max-w-6xl md:max-w-3xl max-w-lg sm:max-w-xl lg:flex lg:items-center lg:justify-between lg:gap-6">
          <h2 className="mb-4 md:mb-6 text-3xl leading-none lg:text-4xl font-bold text-gray-800 dark:text-gray-200 lg:mb-0 text-center lg:text-right tracking-tight px-4 lg:px-0">
            Think Your Business Can't Afford a Professional Start?
          </h2>
          <p className="text-gray-950/50 dark:text-gray-200/50 font-light text-base md:text-lg lg:text-xl text-center lg:text-left px-4 lg:px-0">
            We bring enterprise-level web development and digital marketing
            solutions within your budget, so you never feel left behind.
          </p>
        </div>

        {/* Cards Container */}
        <div className="space-y-8">
          {/* Top row - Two cards with images */}
          <div className="grid gap-8 md:grid-cols-2">
            <Card
              size="md"
              href="#"
              className="w-full h-full" // Added full width and height
              cover={
                <div className="relative h-48 w-full lg:h-64">
                  <Image
                    src="/website.svg"
                    alt="Enterprise Solutions"
                    fill
                    className="object-cover dark:invert hue-rotate-90"
                  />
                </div>
              }
              header="Website is you Businesses First Impression!"
            >
              <span className="text-gray-950/50 dark:text-gray-200/50 font-light">
                Make your first impression count with a custom website—something
                your business couldn't afford until now.
              </span>
            </Card>

            <Card
              size="md"
              href="#"
              className="w-full h-full" // Added full width and height
              cover={
                <div className="relative h-48 w-full lg:h-64">
                  <Image
                    src="/ui.svg"
                    alt="Professional Teams"
                    fill
                    className="object-cover dark:invert"
                  />
                </div>
              }
              header="Finding the Right UI is Frustrating!"
            >
              <span className="text-gray-950/50 dark:text-gray-200/50 font-light">
                We've simplified UI design. Introducing Bracket UI—a minimal,
                geometric, pixel-perfect component library which is Open-source
                and ready for React & Next.js.
              </span>
            </Card>
          </div>

          {/* Bottom row - Three cards without images */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <Card
              size="md"
              className="w-full h-full" // Added full width and height
              header="Missing Modern Features?"
            >
              <span className="text-gray-950/50 dark:text-gray-200/50 font-light">
                Now, experience essential features like image optimization, edge
                performance, accelerated rendering, cloud functions, and more
                without raising your budget.
              </span>
            </Card>

            <Card
              size="md"
              className="w-full h-full" // Added full width and height
              header="Struggling to Find the Right Marketer?"
            >
              <span className="text-gray-950/50 dark:text-gray-200/50 font-light">
                Our integrated team of marketers, developers, and designers
                delivers real results that drive your business forward.
              </span>
            </Card>

            <Card
              size="md"
              className="w-full h-full" // Added full width and height
              header="SEO Takes Too Long!"
            >
              <span className="text-gray-950/50 dark:text-gray-200/50 font-light">
                SEO can be slow and unpredictable. Our AI-driven strategies and
                marketplace expertise accelerate rankings and improve visibility
                faster.
              </span>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
