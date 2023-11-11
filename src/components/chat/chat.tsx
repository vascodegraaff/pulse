"use client";

import { useChat, type Message } from "ai/react";
import { toast } from "react-hot-toast";
import { ChatList } from "./chat-list";
import { ChatPanel } from "./chat-panel";
import { EmptyScreen } from "./empty-screen";

export interface ChatProps extends React.ComponentProps<"div"> {
  initialMessages?: Message[];
  id: string;
}

export function Chat({ id, initialMessages, className }: ChatProps) {
  const { messages, append, reload, stop, isLoading, input, setInput } =
    useChat({
      initialMessages,
      id,
      body: {
        id,
      },
      onResponse(response) {
        if (response.status === 401) {
          toast.error(response.statusText);
        }
      },
    });

  return (
    <div className="flex h-screen flex-col sm:py-8">
      <div className="flex flex-grow flex-col">
        {messages.length ? (
          <>
            <ChatList messages={messages} append={append} />
          </>
        ) : (
          <EmptyScreen id={id} append={append} />
        )}
      </div>
      <ChatPanel
        id={id}
        isLoading={isLoading}
        stop={stop}
        append={append}
        reload={reload}
        messages={messages}
        input={input}
        setInput={setInput}
      />
    </div>
  );
}
