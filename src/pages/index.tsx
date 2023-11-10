import * as React from "react";
// import { MapPin } from 'react-feather';

// import Button from './components/Button'
import { Detail } from "../components/ListDetail/Detail";
import { SiteLayout } from "~/components/Layout";
import { TitleBar } from "~/components/ListDetail/TitleBar";
import { BlockItem } from "~/components/ui/block-item";
import { GoalIcon, SparkleIcon } from "lucide-react";
import { IconListItem } from "~/components/ui/icon-list-item";

export default function Home() {
  return (
    <Detail.Container data-cy="home-intro" ref={null}>
      <TitleBar title="Home" />
      <div className="p-8">
        <h1 className="text-5xl font-black font-bold">Good morning, Bob!</h1>
        <div className="prose text-primary mt-4">
          {"Here's your planning for today:"}
        </div>
        <div className="flex flex-col gap-4 py-4">
          <IconListItem icon={SparkleIcon} text="Activity A" color="red" />
          <IconListItem icon={SparkleIcon} text="Activity B" color="yellow" />
          <IconListItem icon={SparkleIcon} text="Activity C" color="pink" />
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
