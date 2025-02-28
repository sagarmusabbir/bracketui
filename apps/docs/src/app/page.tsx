// import { Button, Card } from "@thirdbracket/core";

import { Bracket } from "@thirdbracket/bracketui";

import Feature from "../../components/Feature";

import Subscription from "../../components/Subscription";
import Gallery from "../../components/Gallery";
import { DefaultHero } from "../../components/default";
import MasonryLayout from "../../components/Mansorygrid";

export default function Page() {
  return (
    <main className="bg-white dark:bg-gray-950 text-gray-950 dark:text-white">
      <Bracket>
        <DefaultHero />
        <Feature />
        <MasonryLayout />
        <Gallery />

        {/* <section className="space-y-8 py-16 md:py-24">
          <div>
            <Table data={tableData} />
          </div>
        </section> */}
        <Subscription />
        {/* <Newsletter /> */}
      </Bracket>
    </main>
  );
}
