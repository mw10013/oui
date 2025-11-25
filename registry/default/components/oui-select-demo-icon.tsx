"use client";

import { ListBoxItem } from "@/registry/default/ui/oui-list-box";
import { Popover } from "@/registry/default/ui/oui-popover";
import {
  Select,
  SelectButton,
  SelectValue,
} from "@/registry/default/ui/oui-select";
import {
  ChartBarIcon,
  ChartLineIcon,
  ChartPieIcon,
  CircleDashed,
} from "lucide-react";
import * as Rac from "react-aria-components";

const iconItems = [
  { id: "line", name: "Line", icon: ChartLineIcon },
  { id: "bar", name: "Bar", icon: ChartBarIcon },
  { id: "pie", name: "Pie", icon: ChartPieIcon },
];

export default function Component() {
  return (
    <Select
      aria-label="Select Icon"
      placeholder="Select Icon"
      className="w-[180px]"
    >
      <SelectButton>
        <SelectValue>
          {({ isPlaceholder, defaultChildren }) =>
            isPlaceholder ? (
              <>
                <CircleDashed className="mr-2 size-4" />
                {defaultChildren}
              </>
            ) : (
              defaultChildren
            )
          }
        </SelectValue>
      </SelectButton>
      <Popover>
        <Rac.ListBox items={iconItems}>
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
        </Rac.ListBox>
      </Popover>
    </Select>
  );
}
