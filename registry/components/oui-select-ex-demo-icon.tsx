import { SelectEx } from "@/registry/components/oui-select-ex";
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from "@/registry/components/ui/item";
import { ListBoxItem } from "@/registry/components/ui/oui-list-box";
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
    <Item>
      <ItemContent>
        <ItemTitle>SelectEx</ItemTitle>
        <ItemDescription>With icon.</ItemDescription>
        <SelectEx
          aria-label="Select item"
          buttonClassName="w-[180px]"
          placeholder="Select an item"
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
      </ItemContent>
    </Item>
  );
}
