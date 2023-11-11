import { IconSquare } from "./icon-square";
import Spacer from "./spacer";

export function IconListItem({
  icon,
  color,
  goal,
  activity,
}: {
  icon: React.ElementType;
  color: string;
  goal: string;
  activity?: string;
}) {
  return (
    <div className="flex w-full items-center gap-2 rounded-xl  bg-gray-100 p-2 pr-3 text-gray-700 hover:bg-gray-200">
      <IconSquare color={color} icon={icon} className="mx-2" />
      <div className="flex flex-col">
        <p className="font-bold text-gray-500">{goal}</p>
        <p className="text-lg font-bold">{activity}</p>
      </div>
      <Spacer />
    </div>
  );
}
