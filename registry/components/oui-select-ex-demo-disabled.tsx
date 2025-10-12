import { SelectEx } from "@/registry/components/oui-select-ex";
import { ListBoxItem } from "@/registry/components/ui/oui-list-box";

const simpleItems = [
  { id: "apple", name: "Apple" },
  { id: "banana", name: "Banana" },
  { id: "blueberry", name: "Blueberry" },
  { id: "grapes", name: "Grapes", isDisabled: true },
  { id: "pineapple", name: "Pineapple" },
];

export default function Component() {
  return (
    <SelectEx
      aria-label="SelectEx disabled"
      isDisabled
      buttonClassName="w-[180px]"
      placeholder="SelectEx disabled"
      items={simpleItems}
    >
      {(item) => (
        <ListBoxItem isDisabled={item.isDisabled}>{item.name}</ListBoxItem>
      )}
    </SelectEx>
  );
}
