"use client";
import { UseChatHelpers } from "ai/react";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "../ui/button";
import { ArrowBigRightDash } from "lucide-react";
import { Textarea } from "../ui/textarea";

export interface PromptProps
  extends Pick<UseChatHelpers, "input" | "setInput"> {
  onSubmit: (value: string) => Promise<void>;
  isLoading: boolean;
}

export function PromptForm({
  onSubmit,
  input,
  setInput,
  isLoading,
}: PromptProps) {
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
  const router = useRouter();

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault();
        if (!input?.trim()) {
          return;
        }
        setInput("");
        await onSubmit(input);
      }}
    >
      <div className="bg-foreground relative flex max-h-60 w-full grow flex-col overflow-hidden px-8 sm:rounded-md sm:border sm:px-12">
        <Textarea
          ref={inputRef}
          tabIndex={0}
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Send a message."
          spellCheck={false}
          className="w-full resize-none border-0 bg-transparent px-4 py-[1.3rem] focus:ring-0 sm:text-sm"
        />
        <div className="absolute right-0 top-4 mx-2 sm:right-2">
          <Button
            type="submit"
            size="icon"
            className="border-border border"
            disabled={isLoading || input === ""}
          >
            <ArrowBigRightDash />
            <span className="sr-only">Send message</span>
          </Button>
        </div>
      </div>
    </form>
  );
}
