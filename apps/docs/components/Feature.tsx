"use client";
import { Bracket, Card } from "@thirdbracket/bracketui";

const cards = [
  {
    name: "speed",
    props: {
      header: "Fast Websites that Rank",
      cover: "/website.svg",
      href: "/services",

      children:
        "Transform your website into a lightning-fast, offline-capable progressive web application that provides native app-like experiences across all devices and platforms.",
    },
  },

  {
    name: "scalability",
    props: {
      header: "Enterprise-Level Websites",

      href: "/services",

      children:
        "Transform your website into a lightning-fast, offline-capable progressive web application that provides native app-like experiences across all devices and platforms.",
    },
  },
  {
    name: "white-label",
    props: {
      header: "White-Label Web Development",

      href: "/services",

      children:
        "Transform your website into a lightning-fast, offline-capable progressive web application that provides native app-like experiences across all devices and platforms.",
    },
  },
  {
    name: "api",
    props: {
      header: "API Integration & Development",

      href: "/services",

      children:
        "Transform your website into a lightning-fast, offline-capable progressive web application that provides native app-like experiences across all devices and platforms.",
    },
  },
  {
    name: "design",
    props: {
      header: "Designs That Reflect Your Brand",
      cover: "/ui.svg",
      href: "/services",

      children:
        "Transform your website into a lightning-fast, offline-capable progressive web application that provides native app-like experiences across all devices and platforms.",
    },
  },

  {
    name: "webaps",
    props: {
      header: "Progressive Web Apps",
      cover: "/webdev.svg",
      href: "/services",

      children:
        "Transform your website into a lightning-fast, offline-capable progressive web application that provides native app-like experiences across all devices and platforms.",
    },
  },

  {
    name: "ecommerce",
    props: {
      header: "E-commerce Solutions",

      href: "/services",

      children:
        "Complete e-commerce implementations with secure payment gateways,inventory management, and seamless shopping experiences.",
    },
  },

  {
    name: "custom",
    props: {
      header: "Custom Web Development",

      href: "/services",

      children:
        "Tailored sites built to meet your unique business requirements.",
    },
  },
  {
    name: "performance",
    props: {
      header: "Performance Optimization",
      cover: "/performance.svg",
      href: "/services",

      children:
        "Comprehensive website optimization including code splitting, lazy loading, and advanced caching strategies to achieve maximum speed and efficiency",
    },
  },
];

export default function CardGrid() {
  return (
    <section className="py-10 sm:py-12  lg:py-14 xl:py-16">
      <Bracket fluid centered padding="medium">
        <div className="mx-auto max-w-screen-xl">
          {/* Header */}
          <div className="mb-8 md:mb-12 lg:mb-16 lg:flex lg:items-center lg:justify-center lg:gap-6">
            <h2 className="mb-4 md:mb-6 text-3xl lg:text-4xl  font-bold bg-gradient-secondary dark:bg-gradient-secondary-dark text-transparent bg-clip-text lg:mb-0 text-left sm:text-center lg:text-right">
              Looking for Fast & Beautiful Websites for Your Business?
            </h2>
            <p className="text-primary-950/80 dark:text-primary-200/70 font-light text-base md:text-lg lg:text-xl text-left sm:text-center lg:text-left">
              Whether you are a startup or an agency, we help you build
              scalable, SEO-optimized websites with a clean, minimal design that
              aligns with your brand.
            </p>
          </div>
          {/* Cards */}
          <div className="space-y-8">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6   [column-fill:_balance]">
              {cards.map(({ name, props }, index) => (
                <div
                  key={index}
                  className="mb-6 break-inside-avoid"
                  data-card-name={name} // You can use this for debugging or testing
                >
                  <Card
                    size="lg"
                    theme={{
                      background:
                        "bg-gradient-primary-dark dark:bg-gradient-primary ",
                      text: "font-light text-primary-500",
                      border: " border-opacity-20 border-primary-500",
                    }}
                    {...props}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Bracket>
    </section>
  );
}
