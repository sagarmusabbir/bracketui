// import { Button, Card } from "@thirdbracket/core";

import { Bracket } from "@thirdbracket/bracketui";

import { DefaultHero } from "../../../components/Hero/default";
import Subscription from "../../../components/Newsletter/Subscription";
import { FeatureListCardsSection } from "../../../components/Feature/card-list";
import { AlternateImageWithFeatureListSection } from "../../../components/Feature/alternate";
import { ComparisonCardsFeatureSection } from "../../../components/Feature/comparison";
import { FeatureListWithCTAsSection } from "../../../components/Feature/cta-list";
import { DescriptionWithFeatureListIconsSection } from "../../../components/Feature/description-icon-list";
import { FeatureIconsAndCTASection } from "../../../components/Feature/icon-list-cta";
import { FeatureListWithIconsSection } from "../../../components/Feature/icons-list";
import { ImageWithFeatureListAndCTAsSection } from "../../../components/Feature/image-list";
import { RoundedIconsFeatureSection } from "../../../components/Feature/rounded-icons";

export default function TBPage() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-950 dark:text-white">
      <Bracket>
        <DefaultHero />
        <AlternateImageWithFeatureListSection />
        <FeatureListCardsSection />
        <ComparisonCardsFeatureSection />
        <FeatureListWithCTAsSection />
        <DescriptionWithFeatureListIconsSection />
        <FeatureIconsAndCTASection />
        <FeatureListWithIconsSection />
        <ImageWithFeatureListAndCTAsSection />
        <RoundedIconsFeatureSection />
        <Subscription />
      </Bracket>
    </main>
  );
}
