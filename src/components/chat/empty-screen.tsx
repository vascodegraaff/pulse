import { Message } from "ai";

export function EmptyScreen({
  id,
  append,
}: {
  id: string;
  append: (message: Message) => void;
}) {
  return (
    <div className="m-4 flex flex-grow flex-col items-center justify-center">
      <h1 className="mb-2 text-center text-2xl font-black text-stone-900 md:text-3xl">
        {"Hi, I'm Pulse"}
      </h1>
      <p className="font-semi-bold text-center text-stone-700">
        Ask me anything about your data
      </p>
    </div>
  );
}
