import { SelectEx } from "@/registry/components/oui-select-ex";
import { ListBoxItem } from "@/registry/components/ui/oui-list-box";

const largeListItems = Array.from({ length: 100 }).map((_, i) => ({
  id: `item-${String(i)}`,
  name: `Item ${String(i)}`,
}));

export default function Component() {
  return (
    <SelectEx
      aria-label="SelectEx large list"
      buttonClassName="w-[180px]"
      placeholder="SelectEx large list"
      items={largeListItems}
    >
      {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
    </SelectEx>
  );
}
