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
import { EXAMPLE_METRICS_A, MARATHON_GOAL } from "data/example-metrics";
import LineChartCard from "~/components/Cards/LineChartCard";

export default function Home() {
  return (
    <div className="gradientBG fixed h-screen w-full overflow-auto p-6">
      <h1 className="text-3xl font-black">Good morning, Bob!</h1>
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
            color="pink"
          />

          <IconListItem
            icon={MoonIcon}
            goal="22:00"
            activity="Go to bed"
            color="purple"
          />
        </CardContent>
      </Card>

      <LineChartCard
        title="Progress"
        subtitle="That marathon coming in hot"
        data={EXAMPLE_METRICS_A}
        className="flex-2"
      />

      <div className="flex items-center gap-8 py-4">
        <LineChartCard
          title="Marathon"
          subtitle="You're having a steady day"
          data={MARATHON_GOAL}
          className="flex-1"
        />
      </div>

      <div className="flex items-center gap-8 py-4">
        <BlockItem color={"purple"} text={"Goals"} icon={GoalIcon} />
        <BlockItem color={"green"} text={"Goals"} icon={GoalIcon} />
        <BlockItem color={"sky"} text={"Goals"} icon={GoalIcon} />
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
