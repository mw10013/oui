"use client";

import { SelectEx } from "@/registry/default/components/oui-select-ex";
import { ListBoxItem } from "@/registry/default/ui/oui-list-box";

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
      placeholder="SelectEx disabled"
      buttonClassName="w-[180px]"
      items={simpleItems}
      isDisabled
    >
      {(item) => (
        <ListBoxItem isDisabled={item.isDisabled}>{item.name}</ListBoxItem>
      )}
    </SelectEx>
  );
}
