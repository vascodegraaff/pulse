import { SiteLayout } from "~/components/Layout";
import { TitleBar } from "~/components/ListDetail/TitleBar";
import { Chat } from "~/components/chat/chat";
import { nanoid } from "~/lib/utils";

export default function ChatPage() {
  const id = nanoid();

  return (
    <>
      <TitleBar
        // magicTitle
        // titleRef={titleRef}
        // scrollContainerRef={scrollContainerRef}
        title="Chat"
      />
      <Chat id={id} />
    </>
  );
}

ChatPage.getLayout = function getLayout(page: React.ReactElement) {
  return <SiteLayout>{page}</SiteLayout>;
};
