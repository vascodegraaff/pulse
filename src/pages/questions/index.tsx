import { User } from "@supabase/supabase-js";
import { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType } from "next";
import { getServerActionDispatcher } from "next/dist/client/components/app-router";
import { SiteLayout } from "~/components/Layout";
import { supabase } from "~/lib/supabase";

export const getStaticProps = (async () => {
  // const res = await fetch('https://api.github.com/repos/vercel/next.js')
  // const repo = await res.json()

  let { data, error } = await supabase.from("Question").select("*");
  // console.log(data);

  console.log(data);

  return { props: { data } };
}) satisfies GetStaticProps<{
  data: User[];
}>;

export default function QuestionsPage({
  data,
}: InferGetServerSidePropsType<typeof getStaticProps>) {
  // return <h1>{JSON.stringify(allData)}</h1>
  <h1>Hello</h1>;
}

QuestionsPage.getLayout = function getLayout(page: React.ReactNode) {
  return <SiteLayout>{page}</SiteLayout>;
};
