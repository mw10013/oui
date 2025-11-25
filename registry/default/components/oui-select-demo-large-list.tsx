"use client";

import { FieldLabel } from "@/registry/default/ui/oui-field";
import { ListBoxItem } from "@/registry/default/ui/oui-list-box";
import { Popover } from "@/registry/default/ui/oui-popover";
import {
  Select,
  SelectButton,
  SelectValue,
} from "@/registry/default/ui/oui-select";
import * as Rac from "react-aria-components";

const largeListItems = Array.from({ length: 100 }).map((_, i) => ({
  id: `item-${String(i)}`,
  name: `Item ${String(i)}`,
}));

export default function Component() {
  return (
    <div className="w-full max-w-md">
      <Select placeholder="Choose item" className="w-[180px]">
        <FieldLabel>Select Large List</FieldLabel>
        <SelectButton>
          <SelectValue />
        </SelectButton>
        <Popover>
          <Rac.ListBox items={largeListItems}>
            {(item) => <ListBoxItem>{item.name}</ListBoxItem>}
          </Rac.ListBox>
        </Popover>
      </Select>
    </div>
  );
}
