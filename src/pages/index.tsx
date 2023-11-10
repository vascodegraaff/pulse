import * as React from "react";
// import { MapPin } from 'react-feather';

// import Button from './components/Button'
import { Detail } from "../components/ListDetail/Detail";
import { SiteLayout } from "~/components/Layout";
import { TitleBar } from "~/components/ListDetail/TitleBar";
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

function TableRow({ href, title, subtitle, date }: TableRowProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      className="group flex items-center space-x-4"
    >
      <strong className="text-gray-1000 flex-none font-medium group-hover:text-blue-600 group-hover:underline dark:text-gray-100 dark:group-hover:text-blue-500">
        {title}
      </strong>
      <span className="w-full shrink border-t border-dashed border-white dark:border-gray-800" />
      {subtitle && <span className="text-tertiary flex-none">{subtitle}</span>}
      {date && (
        <span className="text-quaternary flex-none font-mono">{date}</span>
      )}
    </a>
  );
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

      {/* Keep this div to trigger the magic scroll */}
      <div className="p-4" ref={null} />

      <Detail.ContentContainer>
        <div className="space-y-8 pb-24 md:space-y-16">
          <SectionContainer>
            <SectionTitle> Pulse </SectionTitle>
            <SectionContent>
              <div className="prose text-primary">
                <div>Yoooo welcome to Pulse!</div>
              </div>
            </SectionContent>
          </SectionContainer>
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  );
}

Home.getLayout = function getLayout(page: React.ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
