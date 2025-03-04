// import { Button, Card } from "@thirdbracket/core";

import { Bracket } from "@thirdbracket/bracketui";

import { DefaultHero } from "../../../components/Hero/Hero";
import Subscription from "../../../components/Newsletter/Subscription";

import { FeatureTwo } from "../../../components/Feature/FeatureTwo";
import { FeatureOne } from "../../../components/Feature/FeatureOne";

export default function TBPage() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-950 dark:text-white">
      <Bracket>
        <DefaultHero />
        <FeatureOne />
        <FeatureTwo />

        <Subscription />
      </Bracket>
    </main>
  );
}
