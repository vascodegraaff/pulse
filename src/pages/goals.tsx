import { SiteLayout } from "~/components/Layout";
import CardsStats from "../components/Cards/CardStats";
import React from "react";
import { TitleBar } from "~/components/ListDetail/TitleBar";
import GoalCard from "~/components/Cards/GoalCard";
import { title } from "process";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import { ListItem } from "~/components/ListDetail/ListItem";
import {
  ActivityIcon,
  BikeIcon,
  MoonIcon,
  PersonStandingIcon,
  PlusIcon,
  SmileIcon,
  SparkleIcon,
  StepBackIcon,
  StepForwardIcon,
  WeightIcon,
} from "lucide-react";
import { IconListItem } from "~/components/ui/icon-list-item";
import { BlockItem } from "~/components/ui/block-item";

export default function Goals() {
  return (
    <div className="gradientBG fixed h-screen w-full overflow-auto p-6">
      <h1 className="w-full pt-12 text-center text-3xl font-black">
        Your Goals
      </h1>
      <div className="grid grid-cols-2 gap-6 p-12">
        <BlockItem color={"green"} text={"Marathon"} icon={BikeIcon} />
        <BlockItem color={"sky"} text={"Gym"} icon={WeightIcon} />

        <BlockItem color={"purple"} text={"Sleep"} icon={MoonIcon} />
        <BlockItem color={"orange"} text={"Mood"} icon={SmileIcon} />
        <BlockItem color={"red"} text={"Heart Rate"} icon={ActivityIcon} />
        <BlockItem color={"amber"} text={"Steps"} icon={StepForwardIcon} />

        <BlockItem
          color={"pink"}
          text={"Relationships"}
          icon={PersonStandingIcon}
        />

        <BlockItem color={"gray"} text={"Add"} icon={PlusIcon} />
      </div>
      {/* <div className="flex items-center gap-8">
        <Card onClick={() => console.log("Yeet")} className="flex-grow">
          <CardHeader>
            <CardTitle>{"Today's Summary"}</CardTitle>
            <CardDescription>{"You doing good bro"}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <IconListItem
              icon={BikeIcon}
              goal="Cycling"
              activity="Activity A"
              color="red"
            />
            <IconListItem
              icon={WeightIcon}
              goal="Push-ups"
              activity="Activity B"
              color="yellow"
            />
            <IconListItem
              icon={MoonIcon}
              goal="Sleep"
              activity="7:45 hours"
              color="purple"
            />
          </CardContent>
        </Card>

        <Card onClick={() => console.log("Yeet")} className="flex-grow">
          <CardHeader>
            <CardTitle>{"Tomorrow"}</CardTitle>
            <CardDescription>{"Get ready boiii"}</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <IconListItem
              icon={SparkleIcon}
              goal="Sleep"
              activity="Activity A"
              color="red"
            />
            <IconListItem
              icon={BikeIcon}
              goal="Cycling"
              activity="50 Minutes"
              color="yellow"
            />
            <IconListItem
              icon={SparkleIcon}
              goal="Push-ups"
              activity="Activity C"
              color="pink"
            />
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-2 gap-8 py-8">
        <GoalCard title="Marathon" subtitle="Wow 40km " />
        <GoalCard title="Goal 2" subtitle="Subtitle 2" />
        <GoalCard title="Goal 3" subtitle="Subtitle 3" />
        <GoalCard title="Goal 4" subtitle="Subtitle 4" />
      </div> */}
    </div>
  );
}

Goals.getLayout = function getLayout(page: React.ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
