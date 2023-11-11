"use client";

import { cn, colorClasses } from "~/lib/utils";

export function BlockItem({
  color,
  text,
  icon: Icon,
  onClick = () => {},
}: {
  color: string;
  text: string;
  icon: React.ElementType;
  onClick?: () => void;
}) {
  return (
    <div className="flex flex-col items-center gap-2 text-stone-500 hover:text-stone-800  md:gap-4">
      <button
        onClick={onClick}
        className={cn(
          colorClasses[color],
          `h-20 w-20 p-4`, // small screens
          `md:h-28 md:w-28 md:px-6 md:py-4`, // large screens
          `flex items-center justify-center rounded-3xl `,
          `transition-all duration-300 ease-in-out hover:ring-4`,
        )}
      >
        <Icon
          className={cn(colorClasses[color], "stroke-{1.5} h-full w-full")}
        />
      </button>
      <p className="font-medium md:text-lg md:font-bold">{text}</p>
    </div>
  );
}
