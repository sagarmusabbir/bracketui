// import { Button, Card } from "@thirdbracket/core";

import { Hero } from "../../components/HeroSection";
import CardGrid from "../../components/Feature";
import { WhyChooseUsSection } from "../../components/FeatureTwo";
import { ClientTestimonials } from "../../components/ClientTestomonial";
import { FAQ } from "../../components/Faq";
import CTASection from "../../components/CTASection";

export default function TBPage() {
  return (
    <main className="bg-white dark:bg-black ">
      <section>
        {/* <HeroSection /> */}
        <Hero />
        {/* <FeatureOne /> */}
        <CardGrid />
        {/* <FeatureShowcaseSection /> */}
        <WhyChooseUsSection />
        {/* <FeatureTwo /> */}
        <ClientTestimonials />
        <FAQ />
        <CTASection
          title="Ready to Transform Your Digital Presence?"
          description="Let us discuss how our solutions can help you achieve your goals"
          primary={{
            label: "Consult Us",
            href: "/contact",
          }}
          secondary={{
            label: "About Us",
            href: "/projects",
          }}
        />
      </section>
    </main>
  );
}
