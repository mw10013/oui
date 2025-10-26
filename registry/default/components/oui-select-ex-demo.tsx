"use client";

import { SelectEx } from "@/registry/default/components/oui-select-ex";
import { Header } from "@/registry/default/ui/oui-header";
import { ListBoxItem } from "@/registry/default/ui/oui-list-box";
import * as Rac from "react-aria-components";

const fruitItemsForSection = [
  { id: "apple", name: "Apple" },
  { id: "banana", name: "Banana" },
  { id: "blueberry", name: "Blueberry" },
  { id: "grapes", name: "Grapes", isDisabled: true },
  { id: "pineapple", name: "Pineapple" },
];

export default function Component() {
  return (
    <SelectEx
      aria-label="Select fruit"
      placeholder="Select Ex"
      buttonClassName="w-[180px]"
    >
      <Rac.ListBoxSection id="fruits-section">
        <Header variant="select">Fruits</Header>
        <Rac.Collection items={fruitItemsForSection}>
          {(item) => (
            <ListBoxItem isDisabled={item.isDisabled}>{item.name}</ListBoxItem>
          )}
        </Rac.Collection>
      </Rac.ListBoxSection>
    </SelectEx>
  );
}
