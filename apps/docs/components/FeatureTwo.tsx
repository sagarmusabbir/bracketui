"use client";

import { MdOutlineAutoGraph } from "react-icons/md";
import { RiMedal2Line } from "react-icons/ri";
import {
  IoGitNetworkOutline,
  IoLayersOutline,
  IoLockOpenOutline,
  IoTimerOutline,
} from "react-icons/io5";
import { Bracket, Card } from "@thirdbracket/bracketui";

const features = [
  {
    icon: RiMedal2Line,
    header: "Expertise & Flexibility",
    description:
      "Get senior-level skills with startup agility. Experience agency expertise with freelancer flexibility. Access a unified team of top-rated professionals, not just scattered freelancers.",
  },
  {
    icon: IoLayersOutline,
    header: "Modern Stack",
    description:
      "Next.js, TailwindCSS & Typescript. We build with the technologies powering today’s best-performing websites—ensuring fast loads, clean code, and easy scaling.",
  },
  {
    icon: MdOutlineAutoGraph,
    header: "Built for Growth",
    description:
      "Future-ready websites that evolve with you. Every site is architected to support SEO, performance, and feature expansion—perfect for startups aiming to scale or agencies needing long-term solutions.",
  },
  {
    icon: IoGitNetworkOutline,
    header: "Seamless Collaboration",
    description:
      "We work like part of your team. Slack, Notion, GitHub—whatever you use, we integrate smoothly. Communication is clear, responsive, and always aligned with your timelines.",
  },
  {
    icon: IoLockOpenOutline,
    header: "No Lock-in, No Bloat",
    description:
      "You pay for what you need—no unnecessary subscriptions, yearly lock-ins, or bloated retainers. Just clean code, full ownership, and total freedom to move forward on your terms.",
  },
  {
    icon: IoTimerOutline,
    header: "Timely Deliveries",
    description:
      "Fast doesn’t mean rushed. We always deliver on time, without compromising quality. Our process is built around clear milestones and predictable outputs.",
  },
];

export function WhyChooseUsSection() {
  const iconClassName = "text-secondary-800 dark:text-secondary-200 ";

  return (
    <section className="py-10 sm:py-12 lg:py-14 xl:py-16">
      <Bracket fluid centered padding="medium">
        <div className="mx-auto max-w-screen-xl">
          <div className="mb-8 md:mb-12 lg:mb-16">
            <h2 className="mb-4 md:mb-6 text-3xl lg:text-4xl font-bold bg-gradient-secondary dark:bg-gradient-secondary-dark text-transparent bg-clip-text text-left sm:text-center">
              Why Choose Us for Web Development?
            </h2>
            <p className="text-primary-950/80 dark:text-primary-200/70 text-base md:text-lg lg:text-xl text-left sm:text-center font-light max-w-4xl mx-auto">
              Our approach combines technical excellence with real-world
              flexibility—designed to meet the needs of growing businesses that
              care about speed, SEO, and design clarity.
            </p>
          </div>

          <div className="space-y-8 md:grid md:grid-cols-2 md:gap-8 md:space-y-0 lg:grid-cols-3">
            {features.map(({ icon: Icon, header, description }, index) => (
              <Card
                key={index}
                size="lg"
                theme={{
                  background:
                    "bg-gradient-secondary-dark dark:bg-gradient-secondary",
                  text: "font-light text-primary-500",
                  border: "border border-opacity-30 border-primary-500",
                }}
                isIcon
                cover={<Icon size={48} className={iconClassName} />}
                header={header}
              >
                <span className="!font-light ">{description}</span>
              </Card>
            ))}
          </div>
        </div>
      </Bracket>
    </section>
  );
}
