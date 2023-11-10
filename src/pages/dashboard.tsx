import { SiteLayout } from "~/components/Layout";
import CardsMetric from "../components/Cards";
import CardsStats from "../components/Cards/CardStats";
import React from "react";
import { TitleBar } from "~/components/ListDetail/TitleBar";

export default function Home() {
  return (
    <div className="flex flex-col">
      <TitleBar
        magicTitle
        // titleRef={titleRef}
        // scrollContainerRef={scrollContainerRef}
        title="Home"
      />
      <div className="flex flex-row">
        <CardsMetric />
        <CardsMetric />
      </div>
      <div className="">
        <CardsStats />
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
