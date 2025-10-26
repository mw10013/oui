"use client";

import { SelectEx } from "@/registry/default/components/oui-select-ex";
import { ListBoxItem } from "@/registry/default/ui/oui-list-box";
import {
  ChartBarIcon,
  ChartLineIcon,
  ChartPieIcon,
  CircleDashed,
} from "lucide-react";

const iconItems = [
  { id: "line", name: "Line", icon: ChartLineIcon },
  { id: "bar", name: "Bar", icon: ChartBarIcon },
  { id: "pie", name: "Pie", icon: ChartPieIcon },
];

export default function Component() {
  return (
    <SelectEx
      aria-label="Select Ex Icon"
      placeholder="Select Ex Icon"
      buttonClassName="w-[180px]"
      items={iconItems}
      renderSelectValue={({ isPlaceholder, defaultChildren }) =>
        isPlaceholder ? (
          <>
            <CircleDashed className="mr-2 size-4" />
            {defaultChildren}
          </>
        ) : (
          defaultChildren
        )
      }
    >
      {(item) => {
        const IconComponent = item.icon;
        return (
          <ListBoxItem
            textValue={item.name}
            className="flex items-center gap-2"
          >
            <IconComponent />
            {item.name}
          </ListBoxItem>
        );
      }}
    </SelectEx>
  );
}
