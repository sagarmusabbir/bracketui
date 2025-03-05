// import { Button, Card } from "@thirdbracket/core";

import { Bracket } from "@thirdbracket/bracketui";

import Subscription from "../../../components/Newsletter/Subscription";

import { FeatureTwo } from "../../../components/Feature/FeatureTwo";
import { FeatureOne } from "../../../components/Feature/FeatureOne";
import HeroSection from "../../../components/Hero/HeroSection";

export default function TBPage() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-950 dark:text-white">
      <Bracket>
        <HeroSection />

        <FeatureOne />
        <FeatureTwo />

        <Subscription />
      </Bracket>
    </main>
  );
}
