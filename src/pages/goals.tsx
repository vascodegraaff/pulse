import { SiteLayout } from "~/components/Layout";
import CardsStats from "../components/Cards/CardStats";
import React from "react";
import { TitleBar } from "~/components/ListDetail/TitleBar";
import GoalCard from "~/components/Cards/GoalCard";
import { Button } from "~/components/ui/button";
import { title } from "process";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "~/components/ui/card";
import { ListItem } from "~/components/ListDetail/ListItem";
import { BikeIcon, MoonIcon, SparkleIcon, WeightIcon } from "lucide-react";
import { IconListItem } from "~/components/ui/icon-list-item";

export default function Goals() {
  return (
    <>
      <div className="flex items-center justify-between px-8 pt-8 ">
        <h1 className="text-5xl font-black">Goals</h1>
        <Button className="mr-4">Create new goal</Button>
      </div>

      <div className="p-8">
        <div className="flex items-center gap-8">
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
        </div>
      </div>
    </>
  );
}

Goals.getLayout = function getLayout(page: React.ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
