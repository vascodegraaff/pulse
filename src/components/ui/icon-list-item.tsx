import { IconSquare } from "./icon-square";
import Spacer from "./spacer";

export function IconListItem({
  icon,
  color,
  text,
}: {
  icon: React.ElementType;
  color: string;
  text: string;
}) {
  return (
    <div className="flex w-full items-center gap-2 rounded-xl  bg-gray-100 p-2 pr-3 text-gray-700">
      <IconSquare color={color} icon={icon} />
      <p className="text-lg font-medium">{text}</p>
      <Spacer />
    </div>
  );
}
