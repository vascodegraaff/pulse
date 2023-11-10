import * as React from "react";
import { usePathname } from "next/navigation";

import { DahsboardIcon, HomeIcon, StackIcon } from "../Icons";
import { NavigationLink } from "./NavigationLink";
import { GoalIcon, HistoryIcon } from "lucide-react";

export function SidebarNavigation() {
  const pathname = usePathname();

  const sections = [
    {
      label: null,
      items: [
        {
          href: "/",
          label: "Home",
          icon: HomeIcon,
          trailingAccessory: null,
          isActive: pathname === "/",
          trailingAction: null,
          isExternal: false,
        },
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: DahsboardIcon,
          trailingAccessory: null,
          isActive: pathname === "/dashboard",
          trailingAction: null,
          isExternal: false,
        },
        {
          href: "/goals",
          label: "Goals",
          icon: GoalIcon,
          trailingAccessory: null,
          isActive: pathname === "/goals",
          trailingAction: null,
          isExternal: false,
        },
        {
          href: "/data",
          label: "Data",
          icon: StackIcon,
          trailingAccessory: null,
          isActive: pathname === "/data",
          trailingAction: null,
          isExternal: false,
        },
      ],
    },
  ];

  return (
    <div className="flex-1 space-y-1 px-3 py-3">
      {sections.map((section, i) => {
        return (
          <ul key={i} className="space-y-1">
            {section.label && (
              <h4
                key={i}
                className="text-gray-1000 px-2 pb-2 pt-5 text-xs font-semibold text-opacity-40 dark:text-white"
              >
                {section.label}
              </h4>
            )}
            {section.items.map((item, j) => (
              <NavigationLink key={j} link={item} />
            ))}
          </ul>
        );
      })}
    </div>
  );
}
