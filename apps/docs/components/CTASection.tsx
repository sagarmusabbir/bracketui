"use client";

import { Bracket, Button } from "@thirdbracket/bracketui";

interface CTALink {
  label: string;
  href: string;
}

interface CTASectionProps {
  title: string;
  description: string;
  primary?: CTALink;
  secondary?: CTALink;
  className?: string;
}

const CTASection = ({
  title,
  description,
  primary,
  secondary,
  className = "",
}: CTASectionProps) => {
  return (
    <section className={`py-10 sm:py-12 lg:py-14 xl:py-16 ${className}`}>
      <Bracket fluid centered padding="medium">
        <div className="max-w-screen-xl bg-accent-radial dark:bg-accent-radial-dark rounded-xl p-8 lg:p-12 border border-primary-400/20 dark:border-primary-600/20">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-primary-950 dark:text-primary-50 mb-2 lg:mb-6">
                {title}
              </h2>
              <p className="text-primary-800 dark:text-primary-300 text-base/[1.6] md:text-lg/[1.75rem] lg:text-xl/[1.85rem] max-w-md font-light">
                {description}
              </p>
            </div>

            <div className="flex flex-row gap-4">
              {primary && (
                <Button href={primary.href} size="md">
                  {primary.label}
                </Button>
              )}
              {secondary && (
                <Button href={secondary.href} outline size="md">
                  {secondary.label}
                </Button>
              )}
            </div>
          </div>
        </div>
      </Bracket>
    </section>
  );
};

export default CTASection;
