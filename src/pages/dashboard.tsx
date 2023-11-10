import { SiteLayout } from "~/components/Layout";
import CardsStats from "../components/Cards/CardStats";
import React from "react";
import { TitleBar } from "~/components/ListDetail/TitleBar";

export default function Dashboard() {
  return (
    <>
      <TitleBar
        // magicTitle
        // titleRef={titleRef}
        // scrollContainerRef={scrollContainerRef}
        title="Dashboard"
      />
      <div className="flex flex-col gap-8 px-8">
        <CardsStats />
      </div>
    </>
  );
}

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
