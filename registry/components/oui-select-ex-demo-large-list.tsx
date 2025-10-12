import { SelectEx } from "@/registry/components/oui-select-ex";
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/registry/components/ui/item";
import { ListBoxItem } from "@/registry/components/ui/oui-list-box";

const largeListItems = Array.from({ length: 100 }).map((_, i) => ({
  id: `item-${String(i)}`,
  name: `Item ${String(i)}`,
}));

export default function Component() {
  return (
    <Item>
      <ItemContent>
        <ItemTitle>SelectEx</ItemTitle>
        <ItemDescription>With large list of items.</ItemDescription>
        <SelectEx
          aria-label="Large list"
          buttonClassName="w-[180px]"
          placeholder="Select an item"
          items={largeListItems}
        >
          {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
        </SelectEx>
      </ItemContent>
    </Item>
  );
}
