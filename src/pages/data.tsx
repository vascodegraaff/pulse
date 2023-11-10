import {
  TodoistApi,
  type Task,
  type Project,
} from "@doist/todoist-api-typescript";
import React from "react";
import { SiteLayout } from "~/components/Layout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
// import { TodoistLib } from '~/lib/TodoistLib';
import { env } from "process";
import { type GetStaticProps, type InferGetStaticPropsType } from "next/types";
import { TitleBar } from "~/components/ListDetail/TitleBar";
import { Detail } from "~/components/ListDetail/Detail";

type Data = Project[] | Task[];

const DataCard = ({
  title,
  subtitle,
  data,
}: {
  title: string;
  subtitle: string;
  data: Data;
}) => {
  return (
    <Card className="flex-shrink">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>
          <code>{subtitle}</code>
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="rounded-lg bg-gray-200 p-4">
          <pre className="text-xs">{JSON.stringify(data, null, 2)}</pre>
        </div>
      </CardContent>
    </Card>
  );
};

export const getStaticProps = (async () => {
  const client = new TodoistApi(env.TODOIST_API_TOKEN!);
  const allProject = await client.getProjects();
  const allTask = await client.getTasks();

  return {
    props: {
      allProject,
      allTask,
    },
  };
}) satisfies GetStaticProps<{
  allProject: Project[];
  allTask: Task[];
}>;

export default function Page({
  allProject,
  allTask,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <div className="flex flex-col">
        <TitleBar
          magicTitle
          // titleRef={titleRef}
          // scrollContainerRef={scrollContainerRef}
          title="Home"
        />
        <div className="flex flex-row">
          <DataCard
            title="Todoist data"
            subtitle="allProject"
            data={allProject}
          />
          <DataCard title="Todoist data" subtitle="allTask" data={allTask} />
        </div>
      </div>
    </>
  );
}

Page.getLayout = function getLayout(page: React.ReactNode) {
  return <SiteLayout>{page}</SiteLayout>;
};
