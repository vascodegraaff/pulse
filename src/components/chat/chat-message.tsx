import { FunctionCallPayload, Message } from "ai";
import { UserIcon, SparklesIcon } from "lucide-react";
import { cn } from "~/lib";
import Spacer from "../ui/spacer";

export interface ChatMessageProps {
  message: Message;
  append: (message: Message) => void;
}

export function ChatMessage({ message, append, ...props }: ChatMessageProps) {
  return (
    <div
      className={cn(
        "group relative mb-4 flex flex-col items-start md:-ml-12 md:flex-row",
      )}
      {...props}
    >
      <div className="mb-3 flex w-full items-center gap-2 text-sm font-medium md:w-8">
        <div
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-md border shadow",
            message.role === "user" ? "bg-background" : "bg-black",
          )}
        >
          {message.role === "user" ? (
            <UserIcon className="h-4 w-4" />
          ) : (
            <SparklesIcon className="h-4 w-4 text-white" />
          )}
        </div>
        <p className="md:hidden">
          {message.role === "user" ? "You" : "StudyBuddy"}
        </p>
        <Spacer />
      </div>
      <div className="ml-4 flex-1 space-y-2 overflow-hidden px-1">
        <div className="flex flex-col">{message.content}</div>
      </div>
    </div>
  );
}
