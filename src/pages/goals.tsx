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
      <div className="flex w-full flex-col gap-8 px-8">
        <GoalCard title="Marathon" subtitle="Wow 40km " />{" "}
        <GoalCard title="Marathon" subtitle="Wow 40km " />
      </div>
    </>
  );
}

Goals.getLayout = function getLayout(page: React.ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
