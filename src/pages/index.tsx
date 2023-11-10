import * as React from "react";
// import { MapPin } from 'react-feather';

// import Button from './components/Button'
import { Detail } from "../components/ListDetail/Detail";
import { SiteLayout } from "~/components/Layout";
import { TitleBar } from "~/components/ListDetail/TitleBar";
import { BlockItem } from "~/components/ui/block-item";
import { GoalIcon } from "lucide-react";
// import { TitleBar } from './components/ListDetail/TitleBar'

function SectionTitle(
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLHeadingElement> &
    React.HTMLAttributes<HTMLHeadingElement>,
) {
  return (
    <h4
      className="col-span-2 pt-8 text-lg font-extrabold text-black dark:text-white md:pt-0 md:text-right md:text-base md:font-normal md:text-opacity-40"
      {...props}
    />
  );
}

function SectionContent(
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement>,
) {
  return <div className="col-span-10" {...props} />;
}

interface TableRowProps {
  href: string;
  title: string;
  date: string;
  subtitle?: string;
}

function SectionContainer(
  props: React.JSX.IntrinsicAttributes &
    React.ClassAttributes<HTMLDivElement> &
    React.HTMLAttributes<HTMLDivElement>,
) {
  return (
    <div
      className="grid grid-cols-1 items-start gap-6 md:grid-cols-12"
      {...props}
    />
  );
}

export default function Home() {
  // const scrollContainerRef = React.useRef(null)
  // const titleRef = React.useRef(null)

  return (
    <Detail.Container data-cy="home-intro" ref={null}>
      <TitleBar
        magicTitle
        // titleRef={titleRef}
        // scrollContainerRef={scrollContainerRef}
        title="Home"
      />
      <div className="p-8">
        <h1 className="text-5xl font-black">Goodmorning</h1>
        <div className="prose text-primary py-8">
          {"Here's your planning for today:"}
        </div>
        <div className="flex items-center gap-8">
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
