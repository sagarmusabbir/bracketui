// import { Button, Card } from "@thirdbracket/core";

import { Bracket } from "@thirdbracket/bracketui";

import { DefaultHero } from "../../../components/Hero/default";
import Subscription from "../../../components/Newsletter/Subscription";

export default function TBPage() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-950 dark:text-white">
      <Bracket>
        <DefaultHero />
        <Subscription />
      </Bracket>
    </main>
  );
}
