import { type UseChatHelpers } from "ai/react";
import { Button } from "../ui/button";
import { PromptForm } from "./prompt-form";
import { ArrowUpCircleIcon, StopCircleIcon } from "lucide-react";

export interface ChatPanelProps
  extends Pick<
    UseChatHelpers,
    | "append"
    | "isLoading"
    | "reload"
    | "messages"
    | "stop"
    | "input"
    | "setInput"
  > {
  id?: string;
}

export function ChatPanel({
  id,
  isLoading,
  stop,
  append,
  reload,
  input,
  setInput,
  messages,
}: ChatPanelProps) {
  return (
    <>
      <div className="relative mx-auto w-full sm:max-w-2xl sm:px-4">
        <div className="absolute left-0 right-0 top-0 m-4 flex h-10 items-center justify-center">
          {isLoading ? (
            <Button
              variant="outline"
              onClick={() => stop()}
              className="bg-foreground"
            >
              <StopCircleIcon className="mr-2 h-4 w-4" />
              Stop generating
            </Button>
          ) : (
            messages?.length > 0 && (
              <Button
                variant="outline"
                onClick={() => reload()}
                className="bg-foreground"
              >
                <ArrowUpCircleIcon className="mr-2 h-4 w-4" />
                Regenerate response
              </Button>
            )
          )}
        </div>
        <PromptForm
          onSubmit={async (value) => {
            await append({
              id,
              content: value,
              role: "user",
            });
          }}
          input={input}
          setInput={setInput}
          isLoading={isLoading}
        />
      </div>
    </>
  );
}
