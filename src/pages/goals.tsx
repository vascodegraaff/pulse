import { SiteLayout } from "~/components/Layout";
import CardsStats from "../components/Cards/CardStats";
import React from "react";
import { TitleBar } from "~/components/ListDetail/TitleBar";
import GoalCard from "~/components/Cards/GoalCard";

export default function Goals() {
  return (
    <>
      <TitleBar
        // titleRef={titleRef}
        // scrollContainerRef={scrollContainerRef}
        title="Goals"
      />
      <div className="grid grid-cols-2 gap-8 px-8">
        <GoalCard title="Marathon" subtitle="Wow 40km " />
        <GoalCard title="Goal 2" subtitle="Subtitle 2" />
        <GoalCard title="Goal 3" subtitle="Subtitle 3" />
        <GoalCard title="Goal 4" subtitle="Subtitle 4" />
      </div>
    </>
  );
}

Goals.getLayout = function getLayout(page: React.ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
