import { cn, colorClasses } from "~/lib/utils";

export function IconSquare({
  color,
  icon: Icon,
  onClick,
  className,
}: {
  color: string;
  icon: React.ElementType;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      className={cn(
        colorClasses[color] || colorClasses["stone"],
        "flex items-center justify-center rounded-xl p-2",
        className,
      )}
      disabled={!onClick}
      onClick={onClick}
    >
      <Icon className="h-6 w-6 stroke-2" />
    </button>
  );
}
