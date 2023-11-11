import { Separator } from "@radix-ui/react-separator";
import { type Message } from "ai";
import { ChatMessage } from "./chat-message";

export interface ChatListProps {
  messages: Message[];
  append: (message: Message) => void;
}

export function ChatList({ messages, append }: ChatListProps) {
  if (!messages.length) {
    return null;
  }

  return (
    <div className="relative mx-auto w-full max-w-2xl px-4 pt-4">
      <div className="flex w-full justify-center pb-8">
        <button
          onClick={() => location.reload()}
          className="bg-stone-150 rounded-lg px-4 py-2 text-stone-400 hover:bg-stone-200 hover:text-stone-600"
        >
          back to menu
        </button>
      </div>

      {messages.map((message, index) =>
        message.content.slice(0, 3) === "[H]" ? null : (
          <div key={index}>
            <ChatMessage message={message} append={append} />
            {index < messages.length - 1 && (
              <Separator className="my-4 md:my-8" />
            )}
          </div>
        ),
      )}
    </div>
  );
}
