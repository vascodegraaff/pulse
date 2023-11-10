import { SiteLayout } from "~/components/Layout";
import CardsStats from "../components/Cards/CardStats";
import React from "react";
import { TitleBar } from "~/components/ListDetail/TitleBar";

export default function Dashboard() {
  return (
    <div className="flex w-full flex-col gap-8 p-8">
      <TitleBar
        magicTitle
        // titleRef={titleRef}
        // scrollContainerRef={scrollContainerRef}
        title="Home"
      />
      <h1 className="text-6xl font-black">Dashboard</h1>

      <CardsStats />
    </div>
  );
}

Dashboard.getLayout = function getLayout(page: React.ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
