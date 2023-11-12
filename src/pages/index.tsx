import * as React from "react";
// import { MapPin } from 'react-feather';

// import Button from './components/Button'
import { Detail } from "../components/ListDetail/Detail";
import { SiteLayout } from "~/components/Layout";
import { TitleBar } from "~/components/ListDetail/TitleBar";
import { BlockItem } from "~/components/ui/block-item";
import {
  BikeIcon,
  CheckIcon,
  GoalIcon,
  MoonIcon,
  SparkleIcon,
  WeightIcon,
} from "lucide-react";
import { IconListItem } from "~/components/ui/icon-list-item";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "~/components/ui/card";
import {
  EXAMPLE_METRICS_A,
  MARATHON_GOAL,
  SLEEPING_DATA,
} from "data/example-metrics";
import LineChartCard from "~/components/Cards/LineChartCard";
import { MoodCard } from "~/components/Cards/MoodCard";

export default function Home() {
  return (
    <div className="gradientBG fixed h-screen w-full overflow-auto p-6">
      <h1 className="pt-8 text-3xl font-black">Good morning, Bob!</h1>
      <div className="flex w-full items-center justify-center gap-8 pt-6">
        <BlockItem color={"green"} text={"Marathon"} icon={BikeIcon} />
        <BlockItem color={"sky"} text={"Gym"} icon={WeightIcon} />
        <BlockItem color={"purple"} text={"Sleep"} icon={MoonIcon} />
      </div>
      <Card className="my-4 rounded-xl p-4">
        <CardTitle>{"Today's Plan"}</CardTitle>
        <CardDescription className="pt-2">
          {"Here's your planning for today:"}
        </CardDescription>
        <CardContent className="my-4 flex flex-col gap-4 p-0">
          <IconListItem
            icon={BikeIcon}
            goal={"11:00"}
            activity="Recovery Run"
            color="green"
          />
          <IconListItem
            icon={WeightIcon}
            goal={"16:00"}
            activity="Workout"
            color="sky"
          />

          <IconListItem
            icon={MoonIcon}
            goal="22:00"
            activity="Go to bed"
            color="purple"
          />
        </CardContent>
      </Card>

      <MoodCard />

      <LineChartCard
        title="Marathon"
        subtitle="That marathon coming in hot"
        data={EXAMPLE_METRICS_A}
        className="flex-2"
        postfix="km"
      />

      <div className="flex items-center gap-8 py-4">
        <LineChartCard
          title="Sleep"
          subtitle="Average of 7:46 hours"
          data={SLEEPING_DATA}
          className="flex-1"
          postfix="hours"
        />
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
