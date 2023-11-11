import * as React from "react";
// import { MapPin } from 'react-feather';

// import Button from './components/Button'
import { Detail } from "../components/ListDetail/Detail";
import { SiteLayout } from "~/components/Layout";
import { TitleBar } from "~/components/ListDetail/TitleBar";
import { BlockItem } from "~/components/ui/block-item";
import { GoalIcon, SparkleIcon } from "lucide-react";
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
    <Detail.Container data-cy="home-intro" ref={null}>
      <TitleBar title="Home" />
      <div className="p-8">
        <h1 className="text-5xl font-black">Good morning, Bob!</h1>
        <div className="flex items-center gap-8 py-4">
          <Card className="my-4 flex-1 rounded-xl p-4">
            <CardTitle>{"Today's Plan"}</CardTitle>
            <CardDescription className="text-lg">
              {"Here's your planning for today:"}
            </CardDescription>
            <CardContent className="my-4 flex flex-col gap-4 p-0">
              <IconListItem icon={SparkleIcon} text="Activity A" color="red" />
              <IconListItem
                icon={SparkleIcon}
                text="Activity B"
                color="yellow"
              />
              <IconListItem icon={SparkleIcon} text="Activity C" color="pink" />
            </CardContent>
          </Card>

          <LineChartCard
            title="Heartbeat"
            subtitle="You're having a steady day"
            data={EXAMPLE_METRICS_A}
            className="flex-2"
          />
        </div>

        <div className="flex items-center gap-8 py-4">
          <LineChartCard
            title="Marathon"
            subtitle="You're having a steady day"
            data={EXAMPLE_METRICS_A}
            className="flex-1"
          />
        </div>

        <div className="flex items-center gap-8 py-4">
          <BlockItem color={"purple"} text={"Goals"} icon={GoalIcon} />
          <BlockItem color={"green"} text={"Goals"} icon={GoalIcon} />
          <BlockItem color={"sky"} text={"Goals"} icon={GoalIcon} />
        </div>
      </div>
    </Detail.Container>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
